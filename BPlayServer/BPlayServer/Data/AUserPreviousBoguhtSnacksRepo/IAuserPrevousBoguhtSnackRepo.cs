using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseConnection.DB;

namespace BPlayServer.Data.AUserPreviousBoguhtSnacksRepo
{
    interface IAuserPrevousBoguhtSnackRepo
    {
        IEnumerable<AUser_Previous_Bought_Snacks> GetAllSnacksBought();
        AUser_Previous_Bought_Snacks AddToList(Snacks_Selling AddBought);
    }
}
