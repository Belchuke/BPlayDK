using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class SnacksSelling
    {
        public SnacksSelling()
        {
            AuserPreviousBoughtSnacks = new HashSet<AuserPreviousBoughtSnacks>();
        }

        public int SnackId { get; set; }
        public string SnacksName { get; set; }

        public virtual ICollection<AuserPreviousBoughtSnacks> AuserPreviousBoughtSnacks { get; set; }
    }
}
