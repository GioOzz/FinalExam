using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Serialization;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Cors;

namespace DashboardAPI_V._2._1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {

            // Abilitazione Cors, perché normalmente la policy di default impedisce le richieste da diversi origini, domini, metodi 
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", opzioni => opzioni.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            EnableCorsAttribute cors = new EnableCorsAttribute();
            services.AddControllersWithViews().AddNewtonsoftJson(opzioni => opzioni.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(opzioni => opzioni.SerializerSettings.ContractResolver = new DefaultContractResolver());

            services.AddControllers();
        }

        // Configurazione HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(opzioni => opzioni.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            //implementazione necessaria per implementare le foto dei clienti
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Foto")),
                RequestPath = "/Foto"

            });

        }
    }
}