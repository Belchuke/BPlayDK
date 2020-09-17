using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;
using WinSCP;

namespace BPlayServer.Models
{
    public static class FileDBHandler
    {
        public async static void getMoviesFromDBAsync()
        {
            await Task.Run(() =>
            {
                List<Amovie> Items = new List<Amovie>();
                SessionOptions sessionOptions = new SessionOptions
                {
                    GiveUpSecurityAndAcceptAnySshHostKey = true,
                    Protocol = Protocol.Sftp,
                    HostName = "lucasrj.dk",
                    PortNumber = 4747,
                    UserName = "belchuke",
                    Password = $"1Belchuke"
                };
                using (Session thisSession = new Session())
                {
                    thisSession.Open(sessionOptions);
                    RemoteDirectoryInfo directory = thisSession.ListDirectory("/home/belchuke");
                    var file = directory.Files.FirstOrDefault(x => x.Name == "Movies.xml");
                    string TempPath = System.IO.Path.GetTempFileName();
                    Path.ChangeExtension(TempPath, ".xml");
                    TempPath = TempPath.Replace(".tmp", ".xml");
                    thisSession.GetFiles(file.FullName, TempPath).Check();
                    XmlSerializer mySerializer = new XmlSerializer(typeof(List<ImdbEntity>));
                    List<ImdbEntity> IMDB = new List<ImdbEntity>();
                    using (StreamReader myWriter = new StreamReader(TempPath))
                    {
                        IMDB = mySerializer.Deserialize(myWriter) as List<ImdbEntity>;
                    };
                    File.Delete(TempPath);

                    IMDB.ForEach(amovie =>
                    {

                        Items.Add(new Amovie()
                        {
                            Title = amovie.Title,
                            MovieYear = amovie.Year,
                            Released = amovie.Released,
                            Runtime = amovie.Runtime,
                            Genre = amovie.Genre,
                            Director = amovie.Director,
                            Writer = amovie.Writer,
                            Actors = amovie.Actors,
                            Plot = amovie.Plot,
                            MovieLanguage = amovie.Language,
                            Country = amovie.Country,
                            Award = amovie.Awards,
                            Poster = amovie.Poster,
                            Metascore = amovie.Metascore,
                            ImdbRating = amovie.imdbRating,
                            ImdbVotes = amovie.imdbVotes,
                            ImdbId = amovie.imdbID,
                            Response = amovie.Response,
                            ServerPath = amovie.ServerPath,
                        });
                    });

                    using(BPlayDKContext context = new BPlayDKContext())
                    {
                        try
                        {
                            context.Amovie.AddRange(Items);
                            context.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            string msg = ex.Message;
                            
                        }
                      
                    }
                }
            });
        }
    }
}

