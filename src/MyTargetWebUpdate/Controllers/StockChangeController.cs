using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Models;

namespace MyTargetWebUpdate.Controllers
{

    [Route("api/[controller]")]
    public class StockChangeController : ApiController
    {
        private readonly ApplicationDbContext DbContext;

        public StockChangeController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }
        
        [HttpGet]
        public ActionResult GetStockChanges(long? id)
        {
          var changes = DbContext.StockChanges.ToList();
          return Ok(changes);
        }
    }
}