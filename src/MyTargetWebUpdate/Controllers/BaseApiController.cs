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
  public class BaseApiController : ApiController
  {


    protected ActionResult OkResult<T>(T data){
      return Ok(new {
        

        });
    }
  }
}
