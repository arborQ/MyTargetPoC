﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTarget.Controllers
{
    public class FrameworksController : Controller
    {
        // GET: /<controller>/
        public IActionResult React()
        {
            return View();
        }
    }
}