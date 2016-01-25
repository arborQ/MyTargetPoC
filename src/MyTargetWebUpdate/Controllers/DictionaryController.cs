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
    public class DictionaryController : ApiController
    {
      private readonly ApplicationDbContext DbContext;

      public DictionaryController(ApplicationDbContext dbContext)
      {
          DbContext = dbContext;
      }

      [HttpGet]
      public ActionResult LoadDictionary()
      {
        var results = 
        DbContext.DictionaryProperties
        .ToList();
        
        return Ok(results);
      }
    }
}
