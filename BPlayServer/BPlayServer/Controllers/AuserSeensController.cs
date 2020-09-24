using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BPlayServer.Models;

namespace BPlayServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuserSeensController : ControllerBase
    {
        private readonly masterContext _context;

        public AuserSeensController(masterContext context)
        {
            _context = context;
        }

        // GET: api/AuserSeens
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AuserSeen>>> GetAuserSeen()
        {
            return await _context.AuserSeen.ToListAsync();
        }

        // GET: api/AuserSeens/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AuserSeen>> GetAuserSeen(int id)
        {
            var auserSeen = await _context.AuserSeen.FindAsync(id);

            if (auserSeen == null)
            {
                return NotFound();
            }

            return auserSeen;
        }

        // PUT: api/AuserSeens/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAuserSeen(int id, AuserSeen auserSeen)
        {
            if (id != auserSeen.AuserSeenId)
            {
                return BadRequest();
            }

            _context.Entry(auserSeen).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuserSeenExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AuserSeens
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AuserSeen>> PostAuserSeen(AuserSeen auserSeen)
        {
            _context.AuserSeen.Add(auserSeen);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAuserSeen", new { id = auserSeen.AuserSeenId }, auserSeen);
        }

        // DELETE: api/AuserSeens/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AuserSeen>> DeleteAuserSeen(int id)
        {
            var auserSeen = await _context.AuserSeen.FindAsync(id);
            if (auserSeen == null)
            {
                return NotFound();
            }

            _context.AuserSeen.Remove(auserSeen);
            await _context.SaveChangesAsync();

            return auserSeen;
        }

        private bool AuserSeenExists(int id)
        {
            return _context.AuserSeen.Any(e => e.AuserSeenId == id);
        }
    }
}
