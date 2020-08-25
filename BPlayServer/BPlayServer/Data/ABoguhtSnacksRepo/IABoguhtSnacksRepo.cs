using System;
using System.Collections.Generic;
using System.Linq;
using DatabaseConnection.DB;
using System.Threading.Tasks;

namespace BPlayServer.Data.ABoguhtSnacksRepo
{
    interface IABoguhtSnacksRepo
    {
        IEnumerable<Bought_Snacks> GetUserBoughtSnacks();
        Bought_Snacks GetUserBoughtSnacksByID(AUser user, int ID);
        void clearUserBoughtSnacks(AUser user);
        Bought_Snacks AddBoughtSnacksToUserAndPrevoiusBought(AUser user,Snacks_Selling Snacks);        
    }
}
