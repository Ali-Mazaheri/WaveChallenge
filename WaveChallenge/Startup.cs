using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WaveChallenge.DatabaseContext;
using Microsoft.Extensions.FileProviders;
using System.IO;
using WaveChallenge.BL;

namespace WaveChallenge
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<WaveContext>(ServiceLifetime.Singleton);
            services.AddTransient<IWaveBL, WaveBL>();
            services.AddMvc();
        }

        private object WaveBL(IServiceProvider arg)
        {
            throw new NotImplementedException();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var StaticFileOPtio1 = new StaticFileOptions()
            {
                RequestPath = new PathString("/node_modules"),
                FileProvider = new PhysicalFileProvider(Path.Combine(new string[] { env.ContentRootPath, "node_modules" }))
            };
            var StaticFileOPtio2 = new StaticFileOptions()
            {
                RequestPath = new PathString("/scripts"),
                FileProvider = new PhysicalFileProvider(Path.Combine(new string[] { env.ContentRootPath, "Scripts" }))
            };

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseStaticFiles(StaticFileOPtio1);
            app.UseStaticFiles(StaticFileOPtio2);
            app.UseMvc(route =>
            {
                route.MapRoute(name: "default",
                    template: "{controller}/{action}/{id?}");
            });
            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
        }
    }
}
