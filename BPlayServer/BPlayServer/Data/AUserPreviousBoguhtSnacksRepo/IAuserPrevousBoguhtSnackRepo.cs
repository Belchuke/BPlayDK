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
        IEnumerable<AUser_Previous_Bought_Snacks> GetSpecificUserSnacksBought(AUser user);
        AUser_Previous_Bought_Snacks GetPreviusBoughtEntityByID(int ID);
        string RemoveAAUser_Previous_Bought_Snacks(Snacks_Selling RemoveBought);
    }
}
