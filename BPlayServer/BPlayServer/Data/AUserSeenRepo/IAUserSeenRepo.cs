using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseConnection.DB;

namespace BPlayServer.Data.AUserSeenRepo
{
    interface IAUserSeenRepo
    {
        IEnumerable<AUserSeen> GetAllUserSeen();
        IEnumerable<AUserSeen> GetSpecificUserSeen(AUser user);
        bool CheckIfUserHasSeenMovies(AUser user);
        string CreateAUserSeen(AUserSeen aUserSeen,AUser user);
        string DeleteAuserSeen(AUserSeen aUserSeen);
    }
}
