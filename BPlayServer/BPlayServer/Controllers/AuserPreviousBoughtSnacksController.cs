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
    public class AuserPreviousBoughtSnacksController : ControllerBase
    {
        private readonly masterContext _context;

        public AuserPreviousBoughtSnacksController(masterContext context)
        {
            _context = context;
        }

        // GET: api/AuserPreviousBoughtSnacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AuserPreviousBoughtSnacks>>> GetAuserPreviousBoughtSnacks()
        {
            return await _context.AuserPreviousBoughtSnacks.ToListAsync();
        }

        // GET: api/AuserPreviousBoughtSnacks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AuserPreviousBoughtSnacks>> GetAuserPreviousBoughtSnacks(int id)
        {
            var auserPreviousBoughtSnacks = await _context.AuserPreviousBoughtSnacks.FindAsync(id);

            if (auserPreviousBoughtSnacks == null)
            {
                return NotFound();
            }

            return auserPreviousBoughtSnacks;
        }

        // PUT: api/AuserPreviousBoughtSnacks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAuserPreviousBoughtSnacks(int id, AuserPreviousBoughtSnacks auserPreviousBoughtSnacks)
        {
            if (id != auserPreviousBoughtSnacks.AuserPbsid)
            {
                return BadRequest();
            }

            _context.Entry(auserPreviousBoughtSnacks).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuserPreviousBoughtSnacksExists(id))
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

        // POST: api/AuserPreviousBoughtSnacks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AuserPreviousBoughtSnacks>> PostAuserPreviousBoughtSnacks(AuserPreviousBoughtSnacks auserPreviousBoughtSnacks)
        {
            _context.AuserPreviousBoughtSnacks.Add(auserPreviousBoughtSnacks);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAuserPreviousBoughtSnacks", new { id = auserPreviousBoughtSnacks.AuserPbsid }, auserPreviousBoughtSnacks);
        }

        // DELETE: api/AuserPreviousBoughtSnacks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AuserPreviousBoughtSnacks>> DeleteAuserPreviousBoughtSnacks(int id)
        {
            var auserPreviousBoughtSnacks = await _context.AuserPreviousBoughtSnacks.FindAsync(id);
            if (auserPreviousBoughtSnacks == null)
            {
                return NotFound();
            }

            _context.AuserPreviousBoughtSnacks.Remove(auserPreviousBoughtSnacks);
            await _context.SaveChangesAsync();

            return auserPreviousBoughtSnacks;
        }

        private bool AuserPreviousBoughtSnacksExists(int id)
        {
            return _context.AuserPreviousBoughtSnacks.Any(e => e.AuserPbsid == id);
        }
    }
}
