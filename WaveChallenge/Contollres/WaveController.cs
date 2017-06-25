using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Microsoft.AspNetCore.Http;
using WaveChallenge.BL;

namespace WaveChallenge.Contollres
{
    public class WaveController : Controller
    {
        private readonly IWaveBL _WaveBL;
        public WaveController(IWaveBL WaveBL)
        {
            _WaveBL = WaveBL;
        }

        [HttpGet]
        public IActionResult GetReportsIds()
        {
            return Json(new { Data = _WaveBL.GetReportsIds(), Message = "Success" });
        }

        [HttpPost]
        public Object UploadFiles()
        {
            var files = ControllerContext?.HttpContext?.Request?.Form?.Files;
            if (files != null && files.Count > 0)
            {
                var file = files[0];
                if (file.ContentType == "application/vnd.ms-excel")
                {
                    return _WaveBL.UploadReportDate(file);
                }
            }
            return new { Message = "Invalid File" };
        }

        public IActionResult GetReport(int ReportId)
        {
            return Json(new { Data = _WaveBL.GetReport(ReportId), Message = "Success" });
        }
}
}
