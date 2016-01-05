using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Controllers.Models;
using MyTargetWebUpdate.Models;
using System;
namespace MyTargetWebUpdate.Controllers
{

    [Route("api/[controller]")]
    public class StockChangeCommentController : ApiController
    {
        private readonly ApplicationDbContext DbContext;

        public StockChangeCommentController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public ActionResult GetStockChanges(long id)
        {
          var change = DbContext.StockChanges.FirstOrDefault(a => a.Id == id);
          return Ok(change);
        }
    }
}
