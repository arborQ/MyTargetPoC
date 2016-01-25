using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace MyTargetWebUpdate.Models
{
    public class DictionaryProperty
    {
        public long Id { get; set; }
        
        [MaxLength(20), Required]
        public string GroupKey { get; set; }
        
        [Required, MaxLength(50)]
        public string PropertyValue { get; set; }
        
        [MaxLength(200)]
        public string Description { get; set; }
        
        public int Order { get; set; }
    }
}
