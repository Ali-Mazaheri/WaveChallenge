using Microsoft.AspNetCore.Http;
using ServerSide.DatabaseContext;
using ServerSide.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSide.BL
{
    public class WaveBL : IWaveBL
    {
        private readonly WaveContext _DAL;
        public WaveBL(WaveContext DAL)
        {
            _DAL = DAL;
        }
        public Object UploadReportDate(IFormFile File)
        {
            List<string> fileLines = new List<string>();
            using (var sr = new StreamReader(File.OpenReadStream()))
            {
                while (!sr.EndOfStream)
                {
                    fileLines.Add(sr.ReadLine());
                }
            }
            int reportId = int.Parse(fileLines.Last().Split(',')[1]);
            var existedReports = GetReportsIds();
            if (existedReports.Any(id => id == reportId))
            {
                return new { Message = "Duplicated Report" };
            }


            fileLines.RemoveAt(0);
            fileLines.RemoveAt(fileLines.Count - 1);

            var reportToSave = new List<Report>();
            foreach (var line in fileLines)
            {
                var items = line.Split(',');
                var dateItem = items[0].Split('/');
                var report = new Report()
                {
                    Date = DateTime.Parse($"{dateItem[2]}/{dateItem[1]}/{dateItem[0]}"),
                    HoursWorked = decimal.Parse(items[1]),
                    EmployeeId = int.Parse(items[2]),
                    JobGroup = items[3],
                    ReportId = reportId
                };
                reportToSave.Add(report);
            }

            _DAL.AddRange(reportToSave);
            _DAL.SaveChanges();
            return new { Data = reportId, Message = "Success" };

        }

        public List<int> GetReportsIds()
        {
            return _DAL.Reports.Select(x => x.ReportId).Distinct().ToList();
        }

        public List<DTO> GetReport(int ReportId)
        {
            var rawDate = new Dictionary<string, Dictionary<int, decimal>>();
            foreach (var item in _DAL.Reports.Where(it=> it.ReportId== ReportId))
            {
                var range = GetContainingRange(item.Date);
                if (rawDate.ContainsKey(range))
                {
                    if (rawDate[range].ContainsKey(item.EmployeeId))
                    {
                        rawDate[range][item.EmployeeId] = rawDate[range][item.EmployeeId] + (item.HoursWorked * rate[item.JobGroup]);
                    }
                    else
                    {
                        rawDate[range].Add(item.EmployeeId, item.HoursWorked * rate[item.JobGroup]);
                    }

                }
                else
                {
                    rawDate.Add(range, new Dictionary<int, decimal> { [item.EmployeeId] = item.HoursWorked * rate[item.JobGroup] });
                }
            }

            List<DTO> dto = new List<DTO>();
            foreach (var item in rawDate)
            {
                foreach (var it2 in item.Value)
                {
                    dto.Add(new DTO() { Range = item.Key, EmployeeId = it2.Key, Amount = it2.Value });
                }
            }

            return dto;
        }

        private Dictionary<String, Decimal> rate = new Dictionary<String, Decimal>()
        {
            ["A"] = 20,
            ["B"] = 30,
        };



        private string GetContainingRange(DateTime date)
        {
            string range = "";

            if (date.Day > 15)
            {
                var day = DateTime.DaysInMonth(date.Year, date.Month);
                range = $"16/{date.Month}/{date.Year} - {day}/{date.Month}/{date.Year}";
            }
            else if (date.Day <= 15)
            {
                range = $"1/{date.Month}/{date.Year} - 15/{date.Month}/{date.Year}";
            }
            return range;
        }
    }
}
