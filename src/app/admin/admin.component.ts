import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from '../enrollments.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('listStagger', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(2000, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })

        ]))
      ]),
      transition('* => void', [
        animate(2000, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })

        ]))
      ])
    ])
  ]
})
export class AdminComponent implements OnInit {

  constructor(private _enrollmentService : EnrollmentsService) { }
  public employess = [];
  ngOnInit() {

    this._enrollmentService.see_all()
      .subscribe(
        data => this.employess = data,
        error => console.log("errorrrr", error)
      )
  }

}
