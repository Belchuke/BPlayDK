using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class Reservation
    {
        public int ReservationId { get; set; }
        public int? MovieId { get; set; }
        public int? UserId { get; set; }
        public int? CinemaId { get; set; }
        public int? SeatsId { get; set; }
        public int? BoughtSnacksId { get; set; }

        public virtual BoughtSnacks BoughtSnacks { get; set; }
        public virtual Cinema Cinema { get; set; }
        public virtual Amovie Movie { get; set; }
        public virtual Seats Seats { get; set; }
        public virtual Auser User { get; set; }
    }
}
