using System.Net;
using System.Net.Http.Json;
using CampusBuzzApi.Models;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace CampusBuzzApi.Tests
{
    public class EventsControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public EventsControllerTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetAllEvents_ShouldReturnOk_And_NotNull()
        {
            var response = await _client.GetAsync("/api/events");

            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var events = await response.Content.ReadFromJsonAsync<List<Event>>();
            events.Should().NotBeNull();
        }

        [Fact]
        public async Task GetEventById_ShouldReturnOk_And_NotNull()
        {
            var response = await _client.GetAsync("/api/events/1");

            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var eventItem = await response.Content.ReadFromJsonAsync<Event>();
            eventItem.Should().NotBeNull();
        }
    }
}