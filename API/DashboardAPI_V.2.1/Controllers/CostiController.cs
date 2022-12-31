using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using DashboardAPI_V._2._1.Classi;

namespace DashboardAPI_V._2._1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CostiController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment envirionment;
        public CostiController(IConfiguration config, IWebHostEnvironment env)
        {
            configuration = config;
            envirionment = env;
        }
        [HttpGet]
        public JsonResult GetJson()
        {
            //Ultimo accesso bisogna convertirlo per farlo funzionare
            string query = @"SELECT IdSpesa, Tipo, Importo FROM dbo.Costi";
            DataTable tabella = new DataTable();
            // Configurazione con elementi ADO come visto in laboratorio
            string strcn = configuration.GetConnectionString("MyConn");
            SqlDataReader dr;
            using (SqlConnection cn = new SqlConnection(strcn))
            {
                cn.Open();
                using (SqlCommand cmd = new SqlCommand(query, cn))
                {
                    dr = cmd.ExecuteReader();
                    tabella.Load(dr);
                    cn.Close();
                }
            }
            //vedo e ritorno il risultato nel data table come JSON
            return new JsonResult(tabella);
        }
        [HttpPost]
        public JsonResult Post(Costi cos)
        {
            string query = @"INSERT INTO dbo.Costi (IdSpesa,Tipo,Importo) VALUES (" + cos.IdSpesa + @",'" + cos.Tipo + @"', " + cos.Importo + @")";
            DataTable tabella = new DataTable();
            // Configurazione con elementi ADO come visto in laboratorio
            string strcn = configuration.GetConnectionString("MyConn");
            SqlDataReader dr;
            using (SqlConnection cn = new SqlConnection(strcn))
            {
                cn.Open();
                using (SqlCommand cmd = new SqlCommand(query, cn))
                {
                    dr = cmd.ExecuteReader();
                    tabella.Load(dr);
                    cn.Close();
                }
            }
            //vedo e ritorno il risultato nel data table come JSON, è il messaggio che vedrà l'utente sotto forma di alert
            return new JsonResult("inserimento dati (POST) andato a buon fine");
        }
        [HttpPut]
        public JsonResult Put(Costi cos)
        {
            string query = @"UPDATE dbo.Costi SET Tipo='" + cos.Tipo + @"', Importo=" + cos.Importo + @" WHERE IdSpesa=" + cos.IdSpesa + @"";
            DataTable tabella = new DataTable();
            // Configurazione con elementi ADO come visto in laboratorio
            string strcn = configuration.GetConnectionString("MyConn");
            SqlDataReader dr;
            using (SqlConnection cn = new SqlConnection(strcn))
            {
                cn.Open();
                using (SqlCommand cmd = new SqlCommand(query, cn))
                {
                    dr = cmd.ExecuteReader();
                    tabella.Load(dr);
                    cn.Close();
                }
            }
            //vedo e ritorno il risultato nel data table come JSON
            return new JsonResult("aggioranmento dati (PUT) andato a buon fine");
        }
        [HttpDelete("{id}")]    //senza id non lo prenderebbe dall'url 
        public JsonResult Delete(int id) //riceve direttamente l'ID utente per ottimizzazione 
        {
            string query = @"DELETE FROM dbo.Costi WHERE IdSpesa='" + id + @"'";
            DataTable tabella = new DataTable();
            // Configurazione con elementi ADO come visto in laboratorio
            string strcn = configuration.GetConnectionString("MyConn");
            SqlDataReader dr;
            using (SqlConnection cn = new SqlConnection(strcn))
            {
                cn.Open();
                using (SqlCommand cmd = new SqlCommand(query, cn))
                {
                    dr = cmd.ExecuteReader();
                    tabella.Load(dr);
                    cn.Close();
                }
            }
            //vedo e ritorno il risultato nel data table come JSON
            return new JsonResult("cancellazione dati (DELETE) andato a buon fine");
        }
    }
}
