using Microsoft.EntityFrameworkCore;
using TM.API.Models;

namespace TM.API.Data
{
    public class DataAccessContext : DbContext{

        public DataAccessContext(DbContextOptions<DataAccessContext> options) : base(options) {

        }

        public DbSet<Customer> Customer {get;set;}
        public DbSet<Project> Project {get;set;}
        
    }
}