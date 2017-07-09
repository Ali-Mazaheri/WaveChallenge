using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ServerSide.DatabaseContext;
using ServerSide.BL;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace ServerSide
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddDbContext<WaveContext>(ServiceLifetime.Singleton);
            services.AddTransient<IWaveBL, WaveBL>();
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(pb => {
                pb.AllowAnyHeader();
                pb.AllowAnyMethod();
                pb.AllowAnyOrigin();
                //pb.WithOrigins("http://localhost:15518");
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(route =>
            {
                route.MapRoute(name: "default",
                    template: "{controller}/{action}/{id?}");
            });
        }
    }
}
