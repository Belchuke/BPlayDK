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
    public class BoughtSnacksController : ControllerBase
    {
        private readonly BPlayDKContext _context;

        public BoughtSnacksController(BPlayDKContext context)
        {
            _context = context;
        }

        // GET: api/BoughtSnacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoughtSnacks>>> GetBoughtSnacks()
        {
            return await _context.BoughtSnacks.ToListAsync();
        }

        // GET: api/BoughtSnacks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BoughtSnacks>> GetBoughtSnacks(int id)
        {
            var boughtSnacks = await _context.BoughtSnacks.FindAsync(id);

            if (boughtSnacks == null)
            {
                return NotFound();
            }

            return boughtSnacks;
        }

        // PUT: api/BoughtSnacks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBoughtSnacks(int id, BoughtSnacks boughtSnacks)
        {
            if (id != boughtSnacks.BoughtSnacksId)
            {
                return BadRequest();
            }

            _context.Entry(boughtSnacks).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BoughtSnacksExists(id))
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

        // POST: api/BoughtSnacks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BoughtSnacks>> PostBoughtSnacks(BoughtSnacks boughtSnacks)
        {
            _context.BoughtSnacks.Add(boughtSnacks);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBoughtSnacks", new { id = boughtSnacks.BoughtSnacksId }, boughtSnacks);
        }

        // DELETE: api/BoughtSnacks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BoughtSnacks>> DeleteBoughtSnacks(int id)
        {
            var boughtSnacks = await _context.BoughtSnacks.FindAsync(id);
            if (boughtSnacks == null)
            {
                return NotFound();
            }

            _context.BoughtSnacks.Remove(boughtSnacks);
            await _context.SaveChangesAsync();

            return boughtSnacks;
        }

        private bool BoughtSnacksExists(int id)
        {
            return _context.BoughtSnacks.Any(e => e.BoughtSnacksId == id);
        }
    }
}
