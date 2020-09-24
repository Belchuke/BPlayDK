using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BPlayServer.Models;
using Microsoft.EntityFrameworkCore.Internal;

namespace BPlayServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviePlayingsController : ControllerBase
    {
        private readonly masterContext _context;

        public MoviePlayingsController(masterContext context)
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

        [HttpGet("Movie/{id}")]
        public async Task<ActionResult<MoviePlaying>> GetMoviePlayingBasedOnMovieID(int id)
        {
            MoviePlaying returnMovie = null;
            Amovie movieBasedOnID = _context.Amovie.FirstOrDefault(x => x.MovieId == id);
            List<MoviePlaying> allPlayingMovies = _context.MoviePlaying.ToList();
            bool anyMoviePlaying = allPlayingMovies.Any(x => x.MovieId == movieBasedOnID.MovieId);
            var cinemas = _context.Cinema.ToList();
            DateTime date = DateTime.Today;
            if (anyMoviePlaying)
            {
                MoviePlaying thisPlaying = allPlayingMovies.FirstOrDefault(x => x.MovieId == movieBasedOnID.MovieId);

               
                DateTime movieDate = thisPlaying.DatePlaying.Value;
                TimeSpan duration = movieDate - date;
                string diffrence = string.Format("{0:00}:{1:00}:{2:00}", (int)duration.Days, (int)duration.Hours, duration.Minutes);
                string[] arr = diffrence.Split(':');
                if (arr[0].StartsWith('-') || arr[1].StartsWith('-') || arr[2].StartsWith('-'))
                {
                    var thisCinema = cinemas.FirstOrDefault(x => x.MoviePlayingId == thisPlaying.MovieplayingId);
                    _context.MoviePlaying.Remove(thisPlaying);
                    _context.Cinema.Remove(thisCinema);
                    _context.SaveChanges();
                }
                else
                {
                    return thisPlaying;
                }
            }
            // 24 seats = 6 rows of 4

            Random rand = new Random();
            Cinema newCinema = new Cinema();
            List<Seats> allSeats = new List<Seats>();
            returnMovie = new MoviePlaying();
            newCinema.MovieId = movieBasedOnID.MovieId;
            if (cinemas.Count() != 0)
            {
                var lastCinema = cinemas.Last();
                newCinema.CinemaName = $"Cinema {lastCinema.CinemaId + 1}";
            }
            else
                newCinema.CinemaName = "Cinema 1";

            int rows = 5;
            int rowSeats = 7;

            for (int i = 1; i < rows; i++)
            {
                for (int j = 1; j < rowSeats; j++)
                {
                    var seat = new Seats();
                    seat.Cinema = newCinema;
                    seat.SeatIdentity = $"Row {i} Seat {j}";
                    allSeats.Add(seat);
                }
            }

            newCinema.AmountOfSeats = allSeats.Count();
            allSeats.ForEach(x =>
            {
                newCinema.Seats.Add(x);
            });
            returnMovie.Cinema.Add(newCinema);
            returnMovie.DatePlaying = date.AddDays(2).AddHours(2);
            returnMovie.MovieId = newCinema.MovieId;
            _context.Seats.AddRange(allSeats);
            _context.Cinema.Add(newCinema);
            _context.MoviePlaying.Add(returnMovie);
            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                
            }
          
            return returnMovie;
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
