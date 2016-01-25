using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata.Builders;

namespace MyTargetWebUpdate.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        
        public DbSet<StockChange> StockChanges { get; set; }
        
        public DbSet<DictionaryProperty> DictionaryProperties { get; set; }
    }
}
