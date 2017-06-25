using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WaveChallenge.Models;

namespace WaveChallenge.BL
{
    public interface IWaveBL
    {
        Object UploadReportDate(IFormFile File);
        List<int> GetReportsIds();
        List<DTO> GetReport(int ReportId);
    }
}
