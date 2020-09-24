using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class BoughtSnacks
    {
        public int BoughtSnacksId { get; set; }
        public int? SnacksId { get; set; }
        public int? UserId { get; set; }
        public int? ReservationId { get; set; }

        public virtual Reservation Reservation { get; set; }
    }
}
