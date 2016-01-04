using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Controllers.Models;
using MyTargetWebUpdate.Models;
using System;
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
          if(id.HasValue)
          {
            var product = DbContext.Products.FirstOrDefault(a => a.Id == id.Value);
            return Ok(new { Value = 1, ProductId = product.Id, ProductName = product.Name, StoredQuantity = product.StoredQuantity, AddProducts = true });
          }
          else
          {
            var changes = DbContext.StockChanges.OrderByDescending(c => c.Created).Select(c => new { c.Value, ProductName  = c.RelatedProduct.Name }).ToList();
            return Ok(changes);
          }
        }

        [HttpPost, HttpPut]
        public ActionResult AddChange([FromBody]StockChangeModel model)
        {
          var product = DbContext.Products.FirstOrDefault(p => p.Id == model.ProductId);
          if (product == null)
          {
            return BadRequest();
          }
          product.StoredQuantity += model.Value * (model.AddProducts ? 1 : -1);
          DbContext.StockChanges.Add(new StockChange {
             RelatedProduct = product, Value = model.Value * (model.AddProducts ? 1 : -1), Created = DateTime.UtcNow
          });

          DbContext.SaveChanges();
          return Ok();
        }
    }
}
