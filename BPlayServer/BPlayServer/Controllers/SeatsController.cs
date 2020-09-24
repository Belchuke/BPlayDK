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
    public class SeatsController : ControllerBase
    {
        private readonly masterContext _context;

        public SeatsController(masterContext context)
        {
            _context = context;
        }

        // GET: api/Seats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Seats>>> GetSeats()
        {
            return await _context.Seats.ToListAsync();
        }

        [HttpGet("cinema/{id}")]
        public ActionResult<IEnumerable<Seats>> GetSeatsBasedOnCinema(int ID)
        {
            List<Seats> allSeats = _context.Seats.ToList();
            List<Seats> seatsToReturn = new List<Seats>();
            foreach (var x in allSeats)
            {
                if (x.CinemaId == ID)
                {
                    seatsToReturn.Add(x);
                }
            }
            return seatsToReturn;
        }

        // GET: api/Seats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Seats>> GetSeats(int id)
        {
            var seats = await _context.Seats.FindAsync(id);

            if (seats == null)
            {
                return NotFound();
            }

            return seats;
        }

        // PUT: api/Seats/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSeats(int id, Seats seats)
        {
            if (id != seats.SeatsId)
            {
                return BadRequest();
            }

            _context.Entry(seats).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SeatsExists(id))
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

        // POST: api/Seats
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Seats>> PostSeats(Seats seats)
        {
            _context.Seats.Add(seats);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSeats", new { id = seats.SeatsId }, seats);
        }

        // DELETE: api/Seats/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Seats>> DeleteSeats(int id)
        {
            var seats = await _context.Seats.FindAsync(id);
            if (seats == null)
            {
                return NotFound();
            }

            _context.Seats.Remove(seats);
            await _context.SaveChangesAsync();

            return seats;
        }

        private bool SeatsExists(int id)
        {
            return _context.Seats.Any(e => e.SeatsId == id);
        }
    }
}
