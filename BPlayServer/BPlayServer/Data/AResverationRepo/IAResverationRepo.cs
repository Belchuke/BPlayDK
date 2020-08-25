using DatabaseConnection.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BPlayServer.Data.AResverationRepo
{
    interface IAResverationRepo // usikker på denne hjælp
    {
        IEnumerable<Reservation> GetAllReservations();
    }
}
