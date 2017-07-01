using Microsoft.AspNetCore.Http;
using ServerSide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSide.BL
{
    public interface IWaveBL
    {
        Object UploadReportDate(IFormFile File);
        List<int> GetReportsIds();
        List<DTO> GetReport(int ReportId);
    }
}
