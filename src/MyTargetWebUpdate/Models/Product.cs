using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace MyTargetWebUpdate.Models
{
    public class Product
    {
        public long Id { get; set; }

        [MaxLength(50), Required]
        public string Code { get; set; }
        [MaxLength(100), Required]
        public string Name { get; set; }

        [MaxLength(20)]
        public string Color { get; set; }

        [MaxLength(20)]
        public string Size { get; set; }

        public decimal NetPrice { get; set; }

        public decimal Tax { get; set; }

        public int StoredQuantity { get; set; }

        [MaxLength(50)]
        public string Supplier { get; set; }

        public List<StockChange> StockChanges { get; set; }
    }
}
