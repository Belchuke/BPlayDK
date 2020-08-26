using System;
using System.Collections.Generic;

namespace BPlayServer.Models
{
    public partial class Amovie
    {

        public Amovie()
        {
            AuserSeen = new HashSet<AuserSeen>();
            Cinema = new HashSet<Cinema>();
            MoviePlaying = new HashSet<MoviePlaying>();
            Reservation = new HashSet<Reservation>();
        }

        public int MovieId { get; set; }
        public string Title { get; set; }
        public string MovieYear { get; set; }
        public string Released { get; set; }
        public string Runtime { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public string Writer { get; set; }
        public string Actors { get; set; }
        public string Plot { get; set; }
        public string MovieLanguage { get; set; }
        public string Country { get; set; }
        public string Award { get; set; }
        public string Poster { get; set; }
        public string Metascore { get; set; }
        public string ImdbRating { get; set; }
        public string ImdbVotes { get; set; }
        public string ImdbId { get; set; }
        public string MovieType { get; set; }
        public string Response { get; set; }
        public string ServerPath { get; set; }

        public virtual ICollection<AuserSeen> AuserSeen { get; set; }
        public virtual ICollection<Cinema> Cinema { get; set; }
        public virtual ICollection<MoviePlaying> MoviePlaying { get; set; }
        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
