﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Models;
using Microsoft.AspNet.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTargetWebUpdate.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : ApiController
    {
        private readonly ApplicationDbContext DbContext;
        private readonly IAuthorizationService AuthService;
        public ProductsController(ApplicationDbContext dbContext, IAuthorizationService authService)
        {
            DbContext = dbContext;
            AuthService = authService;
        }

        // GET api/values/5
        [HttpGet]
        public ActionResult GetProduct(long? id)
        {
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
        public ActionResult Post([FromBody]Product value)
        {
            var codeExists = DbContext.Products.Any(p => p.Code == value.Code);
            //if(codeExists){
            //  return BadRequest(new { _messageData = string.Format("Produkt z kodem '{0}' już istnieje.", value.Code) });
            //}
            DbContext.Products.Add(value);
            DbContext.SaveChanges();
            return Ok(value);
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
            product.Color = value.Color;
            product.Supplier = value.Supplier;
            product.Location = value.Location;
            DbContext.SaveChanges();

            return Ok(new { _messageData = string.Format("Produkt '{0}' został zaktualizowany.", product.Code) });
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
