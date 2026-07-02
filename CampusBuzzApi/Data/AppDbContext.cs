using CampusBuzzApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CampusBuzzApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Event> Events => Set<Event>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>().HasData(
                new Event
                {
                    Id = 1,
                    EventTitle = "Tech Workshop",
                    Location = "Lab A",
                    TicketPrice = 50
                },
                new Event
                {
                    Id = 2,
                    EventTitle = "Music Festival",
                    Location = "Main Hall",
                    TicketPrice = 120
                },
                new Event
                {
                    Id = 3,
                    EventTitle = "Startup Pitch",
                    Location = "Auditorium",
                    TicketPrice = 0
                }
            );
        }
    }
}