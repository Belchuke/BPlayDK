using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class Reservation
    {
        public Reservation()
        {
            Auser = new HashSet<Auser>();
        }

        public int ReservationId { get; set; }
        public int? MovieId { get; set; }
        public int? UserId { get; set; }
        public int? CinemaId { get; set; }
        public int? SeatsId { get; set; }
        public int? BoughtSnacksId { get; set; }

        public virtual BoughtSnacks BoughtSnacks { get; set; }
        public virtual Cinema Cinema { get; set; }
        public virtual Amovie Movie { get; set; }
        public virtual Auser User { get; set; }
        public virtual ICollection<Auser> Auser { get; set; }
    }
}
