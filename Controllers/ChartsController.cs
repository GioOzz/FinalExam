using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI_V._2._1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartsController : ControllerBase
    {
        [Route("grafClienti")]
        [HttpGet]
        public object GET_GrafClienti()
        {
            //ChartsDemoEntities DB = new ChartsDemoEntities();
            return 0; 
                //JsonResult(Clienti.ToList());
        }
    }
}
