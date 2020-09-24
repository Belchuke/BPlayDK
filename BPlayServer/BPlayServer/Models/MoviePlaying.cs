using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class MoviePlaying
    {
        public MoviePlaying()
        {
            Cinema = new HashSet<Cinema>();
        }

        public int MovieplayingId { get; set; }
        public int? MovieId { get; set; }
        public DateTime? DatePlaying { get; set; }

        public virtual Amovie Movie { get; set; }
        public virtual ICollection<Cinema> Cinema { get; set; }
    }
}
