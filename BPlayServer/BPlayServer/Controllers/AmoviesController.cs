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
    public class AmoviesController : ControllerBase
    {
        private readonly BPlayDKContext _context;

        public AmoviesController(BPlayDKContext context)
        {
            _context = context;
        }

        // GET: api/Amovies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Amovie>>> GetAmovie()
        {
            return await _context.Amovie.ToListAsync();
        }

        // GET: api/Amovies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Amovie>> GetAmovie(int id)
        {
            var amovie = await _context.Amovie.FindAsync(id);

            if (amovie == null)
            {
                return NotFound();
            }

            return amovie;
        }

        // PUT: api/Amovies/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAmovie(int id, Amovie amovie)
        {
            if (id != amovie.MovieId)
            {
                return BadRequest();
            }

            _context.Entry(amovie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AmovieExists(id))
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

        // POST: api/Amovies
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Amovie>> PostAmovie(Amovie amovie)
        {
            _context.Amovie.Add(amovie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAmovie", new { id = amovie.MovieId }, amovie);
        }

        // DELETE: api/Amovies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Amovie>> DeleteAmovie(int id)
        {
            var amovie = await _context.Amovie.FindAsync(id);
            if (amovie == null)
            {
                return NotFound();
            }

            _context.Amovie.Remove(amovie);
            await _context.SaveChangesAsync();

            return amovie;
        }

        private bool AmovieExists(int id)
        {
            return _context.Amovie.Any(e => e.MovieId == id);
        }
    }
}
