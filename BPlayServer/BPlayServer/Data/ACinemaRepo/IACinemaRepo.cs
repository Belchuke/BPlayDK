using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseConnection.DB;

namespace BPlayServer.Data.ACinemaRepo
{
    interface IACinemaRepo
    {
        IEnumerable<Cinema> GetAllCinemas();
        int GetAboutOfSeatsInCinema(Cinema aCinema);
        
    }
}
