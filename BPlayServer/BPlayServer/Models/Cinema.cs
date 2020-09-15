using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class Cinema
    {
        public Cinema()
        {
            Reservation = new HashSet<Reservation>();
            Seats = new HashSet<Seats>();
        }

        public int CinemaId { get; set; }
        public int? MovieId { get; set; }
        public int? MoviePlayingId { get; set; }
        public int? AmountOfSeats { get; set; }
        public string CinemaName { get; set; }

        public virtual Amovie Movie { get; set; }
        public virtual MoviePlaying MoviePlaying { get; set; }
        public virtual ICollection<Reservation> Reservation { get; set; }
        public virtual ICollection<Seats> Seats { get; set; }
    }
}
