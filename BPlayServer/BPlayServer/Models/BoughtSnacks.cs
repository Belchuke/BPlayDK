using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class BoughtSnacks
    {
        public BoughtSnacks()
        {
            Reservation = new HashSet<Reservation>();
        }

        public int BoughtSnacksId { get; set; }
        public int? SnacksId { get; set; }
        public int? UserId { get; set; }

        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
