namespace CampusBuzzApi.DTOs
{
    public class UpdateEventDto
    {
        public string EventTitle { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public decimal TicketPrice { get; set; }
    }
}