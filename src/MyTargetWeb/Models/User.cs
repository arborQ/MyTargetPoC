using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyTarget.Models
{
    public class User
    {
        public long Id { get; set; }

        public string Login { get; set; }
        public DateTime Created { get; set; }

        public bool IsActive { get; set; }

        public byte[] Timestamp { get; set; }
    }
}
