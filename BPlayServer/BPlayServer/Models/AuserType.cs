using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class AuserType
    {
        public AuserType()
        {
            Auser = new HashSet<Auser>();
        }

        public int AuserTypeId { get; set; }
        public string UserType { get; set; }

        public virtual ICollection<Auser> Auser { get; set; }
    }
}
