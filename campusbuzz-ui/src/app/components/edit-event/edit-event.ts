import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { EventService } from '../../services/event';
import { FlashMessageService } from '../../services/flash-message';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-event.html',
    styleUrls: ['./edit-event.css']

})
export class EditEvent implements OnInit {

  eventId!: number;
  eventForm!: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventService: EventService,
    private flashMessageService: FlashMessageService
  ) {}

  ngOnInit(): void {

    this.eventForm = this.fb.group({
      eventTitle: ['', Validators.required],
      location: ['', Validators.required],
      ticketPrice: [0, Validators.required] 
    });

    this.eventId = Number(this.route.snapshot.paramMap.get('id'));

    this.eventService.getEventById(this.eventId).subscribe({
      next: (event) => {
        this.eventForm.patchValue({
          eventTitle: event.eventTitle,
          location: event.location,
          ticketPrice: event.ticketPrice
        });
      },
      error: (err) => {
        console.error('Error loading event', err);
      }
    });
  }

  hasError(controlName: string): boolean {
    const control = this.eventForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    this.eventService.updateEvent(this.eventId, this.eventForm.value as any).subscribe({
      next: () => {
        this.flashMessageService.setSuccess('Event updated successfully.');
        this.router.navigate(['/events']);
      },
      error: (err) => {
        console.error('Error updating event', err);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/events']);
  }
}
