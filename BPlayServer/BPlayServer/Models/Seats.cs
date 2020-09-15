using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class Seats
    {
        public Seats()
        {
            MoviePlaying = new HashSet<MoviePlaying>();
            Reservation = new HashSet<Reservation>();
        }

        public int SeatsId { get; set; }
        public int? CinemaId { get; set; }
        public int? MoviePlayingId { get; set; }
        public bool? Reserved { get; set; }
        public string SeatIdentity { get; set; }

        public virtual Cinema Cinema { get; set; }
        public virtual MoviePlaying MoviePlayingNavigation { get; set; }
        public virtual ICollection<MoviePlaying> MoviePlaying { get; set; }
        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
