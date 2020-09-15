using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class Auser
    {
        public Auser()
        {
            AuserPreviousBoughtSnacks = new HashSet<AuserPreviousBoughtSnacks>();
            AuserSeen = new HashSet<AuserSeen>();
            Reservation = new HashSet<Reservation>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? AuserPbsid { get; set; }
        public int? ReservationId { get; set; }
        public int? AuserTypeId { get; set; }

        public virtual AuserType AuserType { get; set; }
        public virtual ICollection<AuserPreviousBoughtSnacks> AuserPreviousBoughtSnacks { get; set; }
        public virtual ICollection<AuserSeen> AuserSeen { get; set; }
        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
