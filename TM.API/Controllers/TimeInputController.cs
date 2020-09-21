using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TM.API.Data;
using TM.API.Models;

namespace TM.API.Controllers
{
    [Route("tm.api/[controller]")]
    [ApiController]
    public class TimeInputController : ControllerBase
    {
        private readonly DataAccessContext _context;
        
        public TimeInputController(DataAccessContext context)
        {
            _context = context;
        }

        //get all time registrations, list ordered
        // tm.api/timeinput
        [HttpGet]
        public IActionResult Get()
        {
            var data = _context.TimeInputs.OrderBy(t => t.Id);

            return Ok(data);
        }

        //get single registration
        // tm.api/timeinput/{id}
        [HttpGet("{id}", Name="GetTimeInput")]
        public IActionResult Get(int id)
        {
            var timeInput = _context.TimeInputs.Find(id);
            if(timeInput == null){
                return NotFound();
            }
            return Ok(timeInput);
        }

        [HttpPost]
        public IActionResult Post([FromBody] TimeInput timeInput)
        {
            if(timeInput == null){
                return BadRequest();
            }

            //TODO have Id be auto-incremented in db to avoid duplicate PK errors
            //custom auto-increment code just for development purposes
            if(_context.TimeInputs.Count() == 0){
                timeInput.Id = 1;
            }
            else {
                var t = _context.TimeInputs.OrderByDescending(t => t.Id).First();
                timeInput.Id = t.Id+1;
            }
            //end of custom auto-increment code

            _context.TimeInputs.Add(timeInput);
            _context.SaveChanges();

            return CreatedAtRoute("GetTimeInput", new {id = timeInput.Id}, timeInput);
        }
    }
}