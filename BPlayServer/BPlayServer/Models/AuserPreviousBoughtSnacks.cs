using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class AuserPreviousBoughtSnacks
    {
        public AuserPreviousBoughtSnacks()
        {
            Auser = new HashSet<Auser>();
        }

        public int AuserPbsid { get; set; }
        public int? SnacksId { get; set; }
        public int? UserId { get; set; }

        public virtual SnacksSelling Snacks { get; set; }
        public virtual ICollection<Auser> Auser { get; set; }
    }
}
