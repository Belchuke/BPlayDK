using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseConnection.DB;

namespace BPlayServer.Data.AUserTypeRepo
{
    interface IAUserTypeRepo
    {
        AUserType GetUserType(AUser user);
        IEnumerable<AUserType> GetAllUserTypes();
        string CreateUserType(AUser User, AUserType usertype);

    }
}
