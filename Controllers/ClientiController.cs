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

namespace DashBoardAPIS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientiController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment envirionment;
        public ClientiController(IConfiguration config, IWebHostEnvironment env)
        {
            configuration = config;
            envirionment = env;
        }
        [HttpGet]
        public JsonResult GetJson()
        {
            //Ultimo accesso bisogna convertirlo per farlo funzionare
            string query = @"SELECT IdCliente, Nome, Cognome FROM dbo.Clienti";
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
        public JsonResult Post(Clienti cli)
        {
            string query = @"INSERT INTO dbo.Clienti (IdCliente,Nome,Cognome) VALUES ('" + cli.IdCliente + @"','" + cli.Nome + @"', '" + cli.Cognome + @"' )";
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
        public JsonResult Put(Clienti cli)
        {
            string query = @"UPDATE dbo.Clienti SET Nome='" + cli.Nome + @"', Cognome='" + cli.Cognome + @"' WHERE IdCliente=" + cli.IdCliente + @"";
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
            string query1 = @"DELETE FROM dbo.Ordini WHERE NumCliente='" + id + @"'";
            string query2 = @"DELETE FROM dbo.Clienti WHERE IdCliente='" + id + @"'";

            // --UPDATE dbo.Clienti set Nome = 'Giorgio', Cognome = 'Ozzola' where IdUtente = 1
            DataTable tabella = new DataTable();
            // Configurazione con elementi ADO come visto in laboratorio
            string strcn = configuration.GetConnectionString("MyConn");
            SqlDataReader dr;
            using (SqlConnection cn = new SqlConnection(strcn))
            {
                cn.Open();
                using (SqlCommand cmd = new SqlCommand(query1, cn))
                {
                    using (SqlCommand cmd2 = new SqlCommand(query2, cn))
                    {
                        dr = cmd2.ExecuteReader();
                        tabella.Load(dr);
                        cn.Close();
                    }
                }
            }
            //vedo e ritorno il risultato nel data table come JSON
            return new JsonResult("cancellazione dati (DELETE) andato a buon fine");
        }
        [Route("salvafile")]    //parametro dell'url
        [HttpPost]
        public JsonResult SalvaFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postFile = httpRequest.Files[0];    //solo il primo file nel body della richiesta 
                string nomeFile = postFile.FileName;
                string path = envirionment.ContentRootPath + "/Foto/" + nomeFile;
                using (var file = new FileStream(path, FileMode.Create))
                {
                    postFile.CopyTo(file);
                }
                return new JsonResult(nomeFile);    //se vedo ritornare il nome del file allora è stato caricato
            }
            catch (Exception)
            {
                return new JsonResult("anonimo.png");   //per gestire l'eccezione comunque una foto ritorna
            }
        }
    }
}