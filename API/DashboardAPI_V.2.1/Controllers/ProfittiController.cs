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
    public class ProfittiController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment envirionment;
        public ProfittiController(IConfiguration config, IWebHostEnvironment env)
        {
            configuration = config;
            envirionment = env;
        }
        [HttpGet]
        public JsonResult GetJson()
        {
            //Ultimo accesso bisogna convertirlo per farlo funzionare
            string query = @"SELECT IdProfitto, PeriodoProfitto, Profitto FROM dbo.Profitti";
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
        public JsonResult Post(Profitti cli)
        {
            string query = @"INSERT INTO dbo.Profitti (IdProfitto,PeriodoProfitto,Profitto) VALUES (" + cli.IdProfitto + @",'" + cli.PeriodoProfitto + @"','" + cli.Profitto + @"')";
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
        public JsonResult Put(Profitti cli)
        {
            string query = @"UPDATE dbo.Profitti SET PeriodoProfitto='" + cli.PeriodoProfitto + @"',Profitto=" + cli.Profitto + @" WHERE IdProfitto= " + cli.IdProfitto + @" ";
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
            string query = @"DELETE FROM dbo.Profitti WHERE IdProfitto=" + id + @"";
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
