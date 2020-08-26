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
    public class MoviePlayingsController : ControllerBase
    {
        private readonly BPlayDKContext _context;

        public MoviePlayingsController(BPlayDKContext context)
        {
            _context = context;
        }

        // GET: api/MoviePlayings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MoviePlaying>>> GetMoviePlaying()
        {
            return await _context.MoviePlaying.ToListAsync();
        }

        // GET: api/MoviePlayings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MoviePlaying>> GetMoviePlaying(int id)
        {
            var moviePlaying = await _context.MoviePlaying.FindAsync(id);

            if (moviePlaying == null)
            {
                return NotFound();
            }

            return moviePlaying;
        }

        // PUT: api/MoviePlayings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMoviePlaying(int id, MoviePlaying moviePlaying)
        {
            if (id != moviePlaying.MovieplayingId)
            {
                return BadRequest();
            }

            _context.Entry(moviePlaying).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MoviePlayingExists(id))
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

        // POST: api/MoviePlayings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MoviePlaying>> PostMoviePlaying(MoviePlaying moviePlaying)
        {
            _context.MoviePlaying.Add(moviePlaying);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMoviePlaying", new { id = moviePlaying.MovieplayingId }, moviePlaying);
        }

        // DELETE: api/MoviePlayings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MoviePlaying>> DeleteMoviePlaying(int id)
        {
            var moviePlaying = await _context.MoviePlaying.FindAsync(id);
            if (moviePlaying == null)
            {
                return NotFound();
            }

            _context.MoviePlaying.Remove(moviePlaying);
            await _context.SaveChangesAsync();

            return moviePlaying;
        }

        private bool MoviePlayingExists(int id)
        {
            return _context.MoviePlaying.Any(e => e.MovieplayingId == id);
        }
    }
}
