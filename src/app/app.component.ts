import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wrathplanner';
}
