import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../services/event';
import { FlashMessageService } from '../../services/flash-message';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-event.html',
  styleUrls: ['./add-event.css']
})
export class AddEvent implements OnInit {

  eventForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private flashMessageService: FlashMessageService
  ) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventTitle: ['', Validators.required],
      location: ['', Validators.required],
      ticketPrice: [null, Validators.required]
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

    this.eventService.addEvent(this.eventForm.value as any).subscribe({
      next: () => {
        this.flashMessageService.setSuccess('Event added successfully.');
        this.router.navigate(['/events']);
      },
      error: (err) => {
        console.error('Error adding event', err);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/events']);
  }
}
