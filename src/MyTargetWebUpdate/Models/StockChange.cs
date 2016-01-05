using System;
using System.ComponentModel.DataAnnotations;

namespace MyTargetWebUpdate.Models
{
    public class StockChange
    {
        public long Id { get; set; }

        public long Value { get; set; }

        public DateTime Created { get; set; }

        public Product RelatedProduct{ get; set; }

        [MaxLength(2000)]
        public string Comment{ get; set; }
    }
}
