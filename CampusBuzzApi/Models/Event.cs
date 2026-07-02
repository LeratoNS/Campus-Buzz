namespace CampusBuzzApi.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string EventTitle { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public decimal TicketPrice { get; set; }
    }
}