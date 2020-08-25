using DatabaseConnection.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BPlayServer.Data.AMovieRepo
{
    interface IAmovieRepo
    {
        IEnumerable<AMovie> GetAllMovies();
        IEnumerable<AMovie> GetMoviesByYear(string year);
        IEnumerable<AMovie> GetMovieWhichContainsInput(string input);
        IEnumerable<AMovie> GetMoviesByGenre(string Genre);
        IEnumerable<AMovie> GetMovieByLangauge(string Langauge);
        IEnumerable<AMovie> GetMovieContainingActor(string Actor);
        AMovie GetMovieByID(int ID);

    }
}
