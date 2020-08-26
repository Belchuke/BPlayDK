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
    public class AuserTypesController : ControllerBase
    {
        private readonly BPlayDKContext _context;

        public AuserTypesController(BPlayDKContext context)
        {
            _context = context;
        }

        // GET: api/AuserTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AuserType>>> GetAuserType()
        {
            return await _context.AuserType.ToListAsync();
        }

        // GET: api/AuserTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AuserType>> GetAuserType(int id)
        {
            var auserType = await _context.AuserType.FindAsync(id);

            if (auserType == null)
            {
                return NotFound();
            }

            return auserType;
        }

        // PUT: api/AuserTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAuserType(int id, AuserType auserType)
        {
            if (id != auserType.AuserTypeId)
            {
                return BadRequest();
            }

            _context.Entry(auserType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuserTypeExists(id))
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

        // POST: api/AuserTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AuserType>> PostAuserType(AuserType auserType)
        {
            _context.AuserType.Add(auserType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAuserType", new { id = auserType.AuserTypeId }, auserType);
        }

        // DELETE: api/AuserTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AuserType>> DeleteAuserType(int id)
        {
            var auserType = await _context.AuserType.FindAsync(id);
            if (auserType == null)
            {
                return NotFound();
            }

            _context.AuserType.Remove(auserType);
            await _context.SaveChangesAsync();

            return auserType;
        }

        private bool AuserTypeExists(int id)
        {
            return _context.AuserType.Any(e => e.AuserTypeId == id);
        }
    }
}
