import { Component, OnInit } from '@angular/core';
import { User } from '../user';
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
  import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations :[
    trigger('listStagger' , [
      transition('void => *',[
        style({transform : 'translateX(-100%)'}),
        animate(2000, keyframes([
          style({opacity: 0 , transform: 'translateX(-100%)' , offset: 0}),
          style({opacity: 1 , transform: 'translateX(15px)' , offset: 0.3}),
          style({opacity: 1 , transform: 'translateX(0)' , offset: 1.0})
      
        ]))
      ]),
      transition('* => void', [
        animate(2000, keyframes([
          style({ opacity:1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })

        ]))
      ])
      ])
    ]
})
export class LoginComponent implements OnInit {
  message = '';
  constructor(private _enrollmentService : EnrollmentsService) { }
  userModel = new User("saad", "Saad@yahoo.com", "01026565", "saas", "sasas");
  isOpen = true;
  onSubmit() {
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => this.message = data.message,
        error => this.message = error
      )
      
  }
  
  ngOnInit() {
  }
  

}
