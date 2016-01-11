using System;
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
    public class ValidateProductCodeController : ApiController
    {
      private readonly ApplicationDbContext DbContext;

      public ValidateProductCodeController(ApplicationDbContext dbContext)
      {
          DbContext = dbContext;
      }

      [HttpGet]
      public ActionResult Validate(long productId, string value)
      {
        var validatedCode = (value ?? string.Empty).ToLower();
        var exists = 
        DbContext.Products
        .Where(p => p.Code.ToLower() == validatedCode)
        .Where(p => p.Id != productId)
        .Any();
        
        return Ok(!exists);
      }
    }
}
