using System;

namespace MyTargetWebUpdate.Models
{
    public class StockChange
    {
        public long Id { get; set; }

        public long Value { get; set; }
        
        public DateTime Created { get; set; }
        
        public Product RelatedProduct{ get; set; }
    }
}
