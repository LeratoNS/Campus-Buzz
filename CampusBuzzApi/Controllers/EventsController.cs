using CampusBuzzApi.Data;
using CampusBuzzApi.DTOs;
using CampusBuzzApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CampusBuzzApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EventsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetAllEvents()
        {
            var events = await _context.Events
                .OrderByDescending(e => e.Id)
                .ToListAsync();

            return Ok(events);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEventById(int id)
        {
            var existingEvent = await _context.Events.FindAsync(id);

            if (existingEvent == null)
            {
                return NotFound();
            }

            return Ok(existingEvent);
        }

        [HttpPost]
        public async Task<ActionResult<Event>> AddEvent(CreateEventDto dto)
        {
            var newEvent = new Event
            {
                EventTitle = dto.EventTitle,
                Location = dto.Location,
                TicketPrice = dto.TicketPrice
            };

            _context.Events.Add(newEvent);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEventById), new { id = newEvent.Id }, newEvent);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Event>> EditEvent(int id, UpdateEventDto dto)
        {
            var existingEvent = await _context.Events.FindAsync(id);

            if (existingEvent == null)
            {
                return NotFound();
            }

            existingEvent.EventTitle = dto.EventTitle;
            existingEvent.Location = dto.Location;
            existingEvent.TicketPrice = dto.TicketPrice;

            await _context.SaveChangesAsync();

            return Ok(existingEvent);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var existingEvent = await _context.Events.FindAsync(id);

            if (existingEvent == null)
            {
                return NotFound();
            }

            _context.Events.Remove(existingEvent);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}