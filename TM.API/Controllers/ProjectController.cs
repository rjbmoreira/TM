using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TM.API.Data;
using TM.API.Models;

namespace TM.API.Controllers
{
    [Route("tm.api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly DataAccessContext _context;
        
        public ProjectController(DataAccessContext context)
        {
            _context = context;
        }

        //get all projects, list ordered
        // tm.api/project
        [HttpGet]
        public IActionResult Get()
        {
            var data = _context.Projects.OrderBy(c => c.Id);

            return Ok(data);
        }

        //get single project
        // tm.api/project/{id}
        [HttpGet("{id}", Name="GetProject")]
        public IActionResult Get(int id)
        {
            var project = _context.Projects.Find(id);
            if(project == null){
                return NotFound();
            }
            return Ok(project);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Project project)
        {
            if(project == null){
                return BadRequest();
            }
            _context.Projects.Add(project);
            _context.SaveChanges();

            return CreatedAtRoute("GetProject", new {id = project.Id}, project);
        }
    }
}