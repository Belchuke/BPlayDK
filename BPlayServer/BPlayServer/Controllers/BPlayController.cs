using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BPlayServer.Data;
using BPlayServer.Model;
using DatabaseConnection.DB;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace BPlayServer.Controllers
{
    [Route("api")]
    [ApiController]
    [EnableCors]
    public class BPlayController : ControllerBase
    {
        public MetodHandler DBHandler = new MetodHandler();

        [EnableCors]
        [HttpGet("/users/getallusers")]
        public ActionResult<IEnumerable<AUser>> GetAllusersFromDB()
        {
            return Ok(DBHandler.GetAllUsers());
        }

        [EnableCors]
        [HttpPost("/users/addnewuser")]
        public IActionResult AddNewUserToDB([FromBody] AUser user)
        {
            return Ok(DBHandler.CreateNewUser(user));
        }
    }
}
