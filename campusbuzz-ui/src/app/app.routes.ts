import { Routes } from '@angular/router';
import { EventList } from './components/event-list/event-list';
import { AddEvent } from './components/add-event/add-event';
import { EditEvent } from './components/edit-event/edit-event';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList },
  { path: 'add-event', component: AddEvent },
  { path: 'edit-event/:id', component: EditEvent },
  { path: '**', redirectTo: 'events' }
];


