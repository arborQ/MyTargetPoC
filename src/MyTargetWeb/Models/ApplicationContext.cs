using Microsoft.Data.Entity;

namespace MyTarget.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<User>()
            //    .Property(a => a.Id)
            //    .ForSqlServer()
            //    .UseIdentity();

            base.OnModelCreating(modelBuilder);
        }
    }
}
