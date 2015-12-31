using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Controllers.Models;
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

        [HttpPost]
        public ActionResult AddChange([FromBody]StockChangeModel model)
        {

          var product = DbContext.Products.FirstOrDefault(p => p.Id == model.ProductId);
          if (product == null)
          {
            return BadRequest();
          }
          product.StoredQuantity += model.Quantity;
          DbContext.StockChanges.Add(new StockChange {
             RelatedProduct = product, Value = model.Quantity
          });

          DbContext.SaveChanges();
          return Ok();
        }
    }
}
