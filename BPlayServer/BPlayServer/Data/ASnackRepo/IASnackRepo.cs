using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseConnection.DB;

namespace BPlayServer.Data.ASnackRepo
{
    interface IASnackRepo
    {
        IEnumerable<Snacks_Selling> GetAllSnacks();
        Snacks_Selling GetSnackByID(int ID);
        Snacks_Selling GetSnackByName(string Name);
        string CreateSnack(Snacks_Selling NewSnack);
        string DeleteSnack(Snacks_Selling SnackDeleting);
    }
}
