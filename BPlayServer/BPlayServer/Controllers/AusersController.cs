﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BPlayServer.Models;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Cors;

namespace BPlayServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class AusersController : ControllerBase
    {
        private readonly BPlayDKContext _context;

        public AusersController(BPlayDKContext context)
        {
            _context = context;
        }

        //GET: api/Ausers
        [HttpGet("allusers")]
        public async Task<ActionResult<IEnumerable<Auser>>> GetAuser()
        {
            return await _context.Auser.ToListAsync();
        }
        [HttpGet]
        public async Task<ActionResult<Auser>> CheckIfUserExist([FromQuery] Auser auser)
        {
            var list = await _context.Auser.ToListAsync();
            bool exist = list.Any(fuser => fuser.Email == auser.Email && fuser.Password == auser.Password);
            if (exist)
            {
                return Ok("Exist");
            }
            else
            {
                return Ok("Does Not Exist");
            }
          
        }

        // GET: api/Ausers/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Auser>> GetAuser(int id)
        {
            var auser = await _context.Auser.FindAsync(id);

            if (auser == null)
            {
                return NotFound();
            }

            return auser;
        }

        // PUT: api/Ausers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAuser(int id, Auser auser)
        {
            if (id != auser.UserId)
            {
                return BadRequest();
            }

            _context.Entry(auser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ausers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Auser>> PostAuser(Auser auser)
        {
            if (_context.AuserType.Count() == 0)
            {
                _context.AuserType.Add(new AuserType() { UserType = "User" });
                _context.AuserType.Add(new AuserType() { UserType = "Admin" });
                _context.SaveChanges();
            }


            if (_context.Auser.Any(x => x.Email == auser.Email))
                return Ok("User Allready exist");
            else
            {
                var list = _context.AuserType.ToList();
                _context.Auser.Add(auser);
                await _context.SaveChangesAsync();

                return Ok("New User Added");
            }
          
        }

        // DELETE: api/Ausers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Auser>> DeleteAuser(int id)
        {
            var auser = await _context.Auser.FindAsync(id);
            if (auser == null)
            {
                return NotFound();
            }

            _context.Auser.Remove(auser);
            await _context.SaveChangesAsync();

            return auser;
        }

        private bool AuserExists(int id)
        {
            return _context.Auser.Any(e => e.UserId == id);
        }
    }
}