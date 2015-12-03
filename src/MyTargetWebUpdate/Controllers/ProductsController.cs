using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTargetWebUpdate.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private ApplicationDbContext DbContext { get; set; }

        public ProductsController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return DbContext.Products.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Product Get(long id)
        {
            return DbContext.Products.FirstOrDefault(a => a.Id == id);
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
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
