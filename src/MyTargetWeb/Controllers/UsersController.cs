using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using MyTarget.Models;
using System.Linq;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTarget.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly ApplicationContext _context;
        public UsersController(ApplicationContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
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
