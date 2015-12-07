using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Models;
using System.Threading;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTargetWebUpdate.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : ApiController
    {
        private ApplicationDbContext DbContext { get; set; }

        public ProductsController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        //// GET: api/values
        //[HttpGet]
        //public IEnumerable<Product> Get()
        //{
        //    var products =  DbContext.Products.ToList();
        //    return Ok(product);
        //}

        // GET api/values/5
        [HttpGet]
        public ActionResult GetProduct(long? id)
        {
            Thread.Sleep(4000);
            if (id.HasValue)
            {
                var product = DbContext.Products.FirstOrDefault(a => a.Id == id);
                return Ok(product);
            }
            else
            {
                var products = DbContext.Products.ToList();
                return Ok(products);
            }
        }

        // POST api/values
        [HttpPost]
        public long Post([FromBody]Product value)
        {
            DbContext.Products.Add(value);
            DbContext.SaveChanges();
            return value.Id;
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult Put(long id, [FromBody]Product value)
        {


            var product = DbContext.Products.First(a => a.Id == id);
            product.Name = value.Name;
            product.Code = value.Code;
            product.Size = value.Size;
            product.NetPrice = value.NetPrice;

            DbContext.SaveChanges();

            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
