using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BPlayServer.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace BPlayServer.Controllers
{
    [Route("api")]
    [ApiController]
    [EnableCors]
    public class BPlayController : ControllerBase
    {

        /// Get example
        [EnableCors]
        [HttpGet("/getstringexample")] // url path --- localhost:5000/api/getstringexample
        public ActionResult<string> ReturnRandomStringAsJson()
        {
            string randomString = "Return this string over API";
            return Ok(randomString);
        }

        /// Post example 
        [EnableCors]
        [HttpPost("/Ppostexample")]
        public IActionResult GetStringAndReturnANewString([FromBody] string result)
        {
            return Ok(result + "this returns");
        }
    }
}
