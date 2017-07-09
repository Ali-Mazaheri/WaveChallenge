using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace WaveMobile
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();

            List<int> reportsId = getRequest<List<int>>("http://192.168.1.137:27527/Wave/GetReportsIds");

            picker1.ItemsSource = reportsId;
            
        }


        public T getRequest<T>(string address)
        {
            HttpWebRequest req = (HttpWebRequest)WebRequest.Create(address);
            req.Method = "GET";
            HttpWebResponse response = (HttpWebResponse)req.GetResponse();
            using (var sr = new System.IO.StreamReader(response.GetResponseStream()))
            {
                var js = sr.ReadToEnd();
                var x = Newtonsoft.Json.Linq.JObject.Parse(js);
                var cc = x.Property("data").Value.ToString();

                var vv = Newtonsoft.Json.JsonConvert.DeserializeObject<T>(cc);

                return (T)Convert.ChangeType(vv, typeof(T));
            }


        }

        private void picker1_SelectedIndexChanged(object sender, EventArgs e)
        {
            var s = sender as Picker;
            var repID = s.GetValue(Picker.SelectedItemProperty);

            var address = $"http://192.168.1.137:27527/Wave/GetReport?ReportId={repID}";
            var ss = getRequest<ObservableCollection<DTO>>(address);
            ts.ItemsSource = ss;
            
        }
    }

}
