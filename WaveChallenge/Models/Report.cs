using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WaveChallenge.Models
{
    public class Report
    {
        [Key]
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public DateTime Date { get; set; }
        public string JobGroup { get; set; }
        public Decimal HoursWorked { get; set; }
        public int ReportId { get; set; }

    }
}
