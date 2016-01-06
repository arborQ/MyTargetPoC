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
        public ActionResult GetStockChanges(long? id, DateTime? dateFrom, DateTime? dateTo)
        {
          if(id.HasValue)
          {
            var product = DbContext.Products.FirstOrDefault(a => a.Id == id.Value);
            return Ok(new { Value = 1, ProductId = product.Id, ProductName = product.Name, StoredQuantity = product.StoredQuantity, AddProducts = true });
          }
          else
          {
                var from = dateFrom.Value.ToUniversalTime();
                var to = dateTo.Value.ToUniversalTime();

            var changes = DbContext.StockChanges
            .Where(c => c.Created >= from)
            .Where(c => c.Created <= to)
            .OrderByDescending(c => c.Created)
            .Select(c => new { c.Id, c.StoredQuantity, c.NetPrice, c.Comment, c.Created, ProductName = c.RelatedProduct.Name })
            .ToList();
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
          product.StoredQuantity += model.StoredQuantity * (model.AddProducts ? 1 : -1);
          DbContext.StockChanges.Add(new StockChange {
             RelatedProduct = product,
             NetPrice = product.NetPrice,
              StoredQuantity = model.StoredQuantity * (model.AddProducts ? 1 : -1),
             Created = DateTime.UtcNow,
             Comment = model.Comment
          });

          DbContext.SaveChanges();
          return Ok();
        }
    }
}
