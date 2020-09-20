using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TM.API.Data;
using TM.API.Models;

namespace TM.API.Controllers
{
    [Route("tm.api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly DataAccessContext _context;
        
        public CustomerController(DataAccessContext context)
        {
            _context = context;
        }

        //get all customers, list ordered
        // tm.api/customer
        [HttpGet]
        public IActionResult Get()
        {
            var data = _context.Customers.OrderBy(c => c.Id);

            return Ok(data);
        }

        //get single customer
        // tm.api/customer/{id}
        [HttpGet("{id}", Name="GetCustomer")]
        public IActionResult Get(int id)
        {
            var customer = _context.Customers.Find(id);
            if(customer == null){
                return NotFound();
            }
            return Ok(customer);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            if(customer == null){
                return BadRequest();
            }
            _context.Customers.Add(customer);
            _context.SaveChanges();

            return CreatedAtRoute("GetCustomer", new {id = customer.Id}, customer);
        }
    }
}