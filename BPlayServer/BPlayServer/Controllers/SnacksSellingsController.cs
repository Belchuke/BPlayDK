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
    public class SnacksSellingsController : ControllerBase
    {
        private readonly masterContext _context;

        public SnacksSellingsController(masterContext context)
        {
            _context = context;
        }

        // GET: api/SnacksSellings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SnacksSelling>>> GetSnacksSelling()
        {
            return await _context.SnacksSelling.ToListAsync();
        }

        // GET: api/SnacksSellings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SnacksSelling>> GetSnacksSelling(int id)
        {
            var snacksSelling = await _context.SnacksSelling.FindAsync(id);

            if (snacksSelling == null)
            {
                return NotFound();
            }

            return snacksSelling;
        }

        // PUT: api/SnacksSellings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSnacksSelling(int id, SnacksSelling snacksSelling)
        {
            if (id != snacksSelling.SnackId)
            {
                return BadRequest();
            }

            _context.Entry(snacksSelling).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SnacksSellingExists(id))
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

        // POST: api/SnacksSellings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SnacksSelling>> PostSnacksSelling(SnacksSelling snacksSelling)
        {
            _context.SnacksSelling.Add(snacksSelling);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSnacksSelling", new { id = snacksSelling.SnackId }, snacksSelling);
        }

        // DELETE: api/SnacksSellings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SnacksSelling>> DeleteSnacksSelling(int id)
        {
            var snacksSelling = await _context.SnacksSelling.FindAsync(id);
            if (snacksSelling == null)
            {
                return NotFound();
            }

            _context.SnacksSelling.Remove(snacksSelling);
            await _context.SaveChangesAsync();

            return snacksSelling;
        }

        private bool SnacksSellingExists(int id)
        {
            return _context.SnacksSelling.Any(e => e.SnackId == id);
        }
    }
}
