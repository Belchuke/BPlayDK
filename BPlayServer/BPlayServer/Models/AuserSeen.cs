using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class AuserSeen
    {
        public int AuserSeenId { get; set; }
        public int? UserId { get; set; }
        public int? MovieId { get; set; }

        public virtual Amovie Movie { get; set; }
        public virtual Auser User { get; set; }
    }
}
