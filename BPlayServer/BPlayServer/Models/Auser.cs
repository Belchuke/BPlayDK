using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class Auser
    {
        public Auser()
        {
            AuserSeen = new HashSet<AuserSeen>();
            ReservationNavigation = new HashSet<Reservation>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? AuserPbsid { get; set; }
        public int? ReservationId { get; set; }
        public int? AuserTypeId { get; set; }

        public virtual AuserPreviousBoughtSnacks AuserPbs { get; set; }
        public virtual AuserType AuserType { get; set; }
        public virtual Reservation Reservation { get; set; }
        public virtual ICollection<AuserSeen> AuserSeen { get; set; }
        public virtual ICollection<Reservation> ReservationNavigation { get; set; }
    }
}
