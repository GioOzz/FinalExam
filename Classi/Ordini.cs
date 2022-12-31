using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DashboardAPI_V._2._1.Classi
{
    public class Ordini
    {
        public int IdOrdine { get; set; }
        public string NumCliente { get; set; }
        public bool StatusOrdine { get; set; }
        public string Articolo { get; set; }
        public int Guadagno { get; set; }
    }
}