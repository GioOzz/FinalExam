using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using DashboardAPI_V._2._1.Classi;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace DashboardAPI_V._2._1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisiteController : ControllerBase
    {
        
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment envirionment;
        public VisiteController(IConfiguration config, IWebHostEnvironment env)
        {
            configuration = config;
            envirionment = env;
        }
        [HttpGet]
        public JsonResult GetJson()
        {
            //Ultimo accesso bisogna convertirlo per farlo funzionare
            string query = @"SELECT IdVisite,convert(varchar(10),DataAccesso,120) as DataAccesso, NumVisite, GuadagniPagina FROM dbo.Visite";
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
        public JsonResult Post(Visite visit)
        {
            string query = @"INSERT INTO dbo.Visite(IdVisite,DataAccesso,NumVisite,GuadagniPagina) VALUES (" + visit.IdVisite + @",'" + DateTime.Now.ToString("yyyy-MM-dd") + @"'," + visit.NumVisite + @", "+ visit.GuadagniPagina + @")";
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
            return new JsonResult("inserimento dati (POST) andato a buon fine");
        }
        [HttpPut]
        public JsonResult Put(Visite visit)
        {
            string query = @"UPDATE dbo.Visite SET DataAccesso='" + visit.DataAccesso + @"', NumVisite='" + visit.NumVisite + @"', GuadagniPagina='" + visit.GuadagniPagina + @"' WHERE IdVisite=" + visit.IdVisite + @"";
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
        public JsonResult Delete(int id) //riceve direttamente l'ID utente per comodità 
        {
            string query = @"DELETE FROM dbo.Visite where IdVisite='" + id + @"'";
            // --UPDATE dbo.Visite set Nome = 'Giorgio', Cognome = 'Ozzola' where IdUtente = 1
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
