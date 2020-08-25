using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseConnection.DB;
namespace BPlayServer.Data.AUserRepo
{
    interface IAUserRepo
    {
        IEnumerable<AUser> GetAllUsers();
        AUser GetUserByID(int iD);
        AUser GetUserByEmail(string Emai);
        AUser GetUserName(string UserName); // Default email
        bool CheckIfUserExist(AUser user); 
        string CreateNewUser(AUser user);
        string DeleteAUser(AUser user);

    }
}
