using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyTarget.Models
{
    public class Product
    {
        public long Id { get; set; }

        public string Name { get; set; }
        public string Size { get; set; }
        public long Quantity { get; set; }

        public DateTime Created { get; set; }
        public User CreatedBy { get; set; }
    }
}
