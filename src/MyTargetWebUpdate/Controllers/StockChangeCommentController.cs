using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Controllers.Models;
using MyTargetWebUpdate.Models;
using System;
using Microsoft.Data.Entity;

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
            var change = DbContext.StockChanges.Include(d => d.RelatedProduct).FirstOrDefault(a => a.Id == id);
            return Ok(new
            {
                change.Id,
                change.Created,
                change.Comment,
                change.NetPrice,
                change.StoredQuantity,
                ProductName = change.RelatedProduct.Name
            });
        }
    }
}
