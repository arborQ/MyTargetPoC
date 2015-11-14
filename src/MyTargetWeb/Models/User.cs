using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyTarget.Models
{
    public class User
    {
        public long Id { get; set; }

        [Required, MaxLength(30), MinLength(5)]
        public string Login { get; set; }
        public DateTime Created { get; set; }

        public bool IsActive { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; }
    }
}
