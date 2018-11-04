import { Component } from '@angular/core';
import {User} from './user';
import { EnrollmentsService} from './enrollments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'new-blog';
  constructor(private _enrollmentService: EnrollmentsService){}

}
