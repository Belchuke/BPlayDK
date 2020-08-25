using BPlayServer.Data.ABoguhtSnacksRepo;
using BPlayServer.Data.ACinemaRepo;
using BPlayServer.Data.AMoviePlayingRepo;
using BPlayServer.Data.AMovieRepo;
using BPlayServer.Data.AResverationRepo;
using BPlayServer.Data.ASeatRepo;
using BPlayServer.Data.ASnackRepo;
using BPlayServer.Data.AUserPreviousBoguhtSnacksRepo;
using BPlayServer.Data.AUserRepo;
using BPlayServer.Data.AUserSeenRepo;
using BPlayServer.Data.AUserTypeRepo;
using DatabaseConnection.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace BPlayServer.Model
{
    public class MetodHandler :
        IABoguhtSnacksRepo,
        IACinemaRepo,
        IAMoviePlayingRepo,
        IAmovieRepo,
        IAResverationRepo,
        IASeatRepo,
        IASnackRepo,
        IAuserPrevousBoguhtSnackRepo,
        IAUserRepo,
        IAUserSeenRepo,
        IAUserTypeRepo
    {
        public Bought_Snacks AddBoughtSnacksToUserAndPrevoiusBought(AUser user, Snacks_Selling Snacks)
        {
            throw new NotImplementedException();
        }

        public bool CheckIfUserExist(AUser user)
        {
            bool DoesUserExist = false;
            using(BPlayDKEntities Connection = new BPlayDKEntities())
            {
                DoesUserExist = Connection.AUsers.Any(x => x == user);
            }
            return DoesUserExist;
        }

        public bool CheckIfUserHasSeenMovies(AUser user)
        {
            throw new NotImplementedException();
        }

        public void clearUserBoughtSnacks(AUser user)
        {
            throw new NotImplementedException();
        }

        public string CreateAUserSeen(AUserSeen aUserSeen, AUser user)
        {
            throw new NotImplementedException();
        }

        public string CreateNewUser(AUser user)
        {
            string addedUser = string.Empty;
            using(BPlayDKEntities Connection = new BPlayDKEntities())
            {
                try
                {
                    int LastID = Connection.AUsers.Last().UserID;
                    user.UserID = LastID++;
                    Connection.AUsers.Add(user);
                    addedUser = "User has been added";
                }
                catch (Exception ex) 
                {
                    addedUser = $"Error adding user {ex.Message}";
                }
            }
            return addedUser;
        }

        public string CreateSnack(Snacks_Selling NewSnack)
        {
            throw new NotImplementedException();
        }

        public string CreateUserType(AUser User, AUserType usertype)
        {
            throw new NotImplementedException();
        }

        public string DeleteAUser(AUser user)
        {
            string DeleteState = string.Empty;
            using(BPlayDKEntities Connection = new BPlayDKEntities())
            {
                bool exist = Connection.AUsers.Any(x => x == user);
                if (exist == true)
                {
                    Connection.AUsers.Remove(user);
                    DeleteState = "User Has Been Removed";
                }
                else
                {
                    DeleteState = "User Does not exist";
                }
                return DeleteState;
            }
        }

        public string DeleteAuserSeen(AUserSeen aUserSeen)
        {
            throw new NotImplementedException();
        }

        public string DeleteSnack(Snacks_Selling SnackDeleting)
        {
            throw new NotImplementedException();
        }

        public int GetAboutOfSeatsInCinema(Cinema aCinema)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Cinema> GetAllCinemas()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AMovie> GetAllMovies()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Reservation> GetAllReservations()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Snacks_Selling> GetAllSnacks()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AUser_Previous_Bought_Snacks> GetAllSnacksBought()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AUser> GetAllUsers()
        {
            List<AUser> AllUsers = new List<AUser>();
            using(BPlayDKEntities Connection = new BPlayDKEntities())
            {
                AllUsers = Connection.AUsers.ToList();
            }
            return AllUsers;
        }

        public IEnumerable<AUserSeen> GetAllUserSeen()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AUserType> GetAllUserTypes()
        {
            throw new NotImplementedException();
        }

        public AMovie GetMovieByID(int ID)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AMovie> GetMovieByLangauge(string Langauge)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AMovie> GetMovieContainingActor(string Actor)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AMovie> GetMoviesByGenre(string Genre)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AMovie> GetMoviesByYear(string year)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AMovie> GetMovieWhichContainsInput(string input)
        {
            throw new NotImplementedException();
        }

        public AUser_Previous_Bought_Snacks GetPreviusBoughtEntityByID(int ID)
        {
            throw new NotImplementedException();
        }

        public Snacks_Selling GetSnackByID(int ID)
        {
            throw new NotImplementedException();
        }

        public Snacks_Selling GetSnackByName(string Name)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AUserSeen> GetSpecificUserSeen(AUser user)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AUser_Previous_Bought_Snacks> GetSpecificUserSnacksBought(AUser user)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Bought_Snacks> GetUserBoughtSnacks()
        {
            throw new NotImplementedException();
        }

        public Bought_Snacks GetUserBoughtSnacksByID(AUser user, int ID)
        {
            throw new NotImplementedException();
        }

        public AUser GetUserByEmail(string Emai)
        {
            throw new NotImplementedException();
        }

        public AUser GetUserByID(int iD)
        {
            AUser aReturn;
            using(BPlayDKEntities Connection = new BPlayDKEntities())
            {
                aReturn = Connection.AUsers.FirstOrDefault(x => x.UserID == iD); 
            }
            return aReturn;
        }

        public AUser GetUserName(string UserName)
        {
            throw new NotImplementedException();
        }

        public AUserType GetUserType(AUser user)
        {
            throw new NotImplementedException();
        }

        public AUserType GetUserTypeByID(int ID)
        {
            throw new NotImplementedException();
        }

        public string RemoveAAUser_Previous_Bought_Snacks(Snacks_Selling RemoveBought)
        {
            throw new NotImplementedException();
        }
    }
}
