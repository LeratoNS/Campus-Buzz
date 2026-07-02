import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventService } from '../../services/event';
import { Event } from '../../models/event';
import { FlashMessageService } from '../../services/flash-message';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css']

})
export class EventList implements OnInit {
  events: Event[] = [];
  successMessage = '';

  constructor(
    private eventService: EventService,
    private router: Router,
    private flashMessageService: FlashMessageService
  ) {}

  ngOnInit(): void {
    this.showSuccessMessage(this.flashMessageService.consumeSuccess());
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (err) => {
        console.error('Error loading events', err);
      }
    });
  }

  onEdit(id: number): void {
    this.router.navigate(['/edit-event', id]);
  }

  onDelete(id: number): void {
    this.eventService.deleteEvent(id).subscribe({
      next: () => {
        this.showSuccessMessage('Event deleted successfully.');
        this.loadEvents();
      },
      error: (err) => {
        console.error('Error deleting event', err);
      }
    });
  }

  private showSuccessMessage(message: string): void {
    if (!message) {
      return;
    }

    this.successMessage = message;
    window.setTimeout(() => {
      if (this.successMessage === message) {
        this.successMessage = '';
      }
    }, 4000);
  }
}
