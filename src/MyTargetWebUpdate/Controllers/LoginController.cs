using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Mvc;
using MyTargetWebUpdate.Models;
using MyTargetWebUpdate.Controllers.Models;
using System.Security.Claims;
using Microsoft.AspNet.Authorization;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTargetWebUpdate.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private ApplicationDbContext DbContext { get; set; }

        public LoginController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Login(string userName, string password)
        {
            if (userName == "arbor" && password == "arbor")
            {
                var claims = new List<Claim> {
                    new Claim("id", "1"),
                    new Claim("isAdmin", true.ToString())
                };
                var id = new ClaimsIdentity(claims, "local", "name", "role");
                await HttpContext.Authentication.SignInAsync("Cookies", new ClaimsPrincipal(id));

                return Ok(new { success = true, key = id });
            }
            else {
                return Ok(new { success = false, userName, password });
            }
        }
    }
}
