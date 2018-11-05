import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  url =    'https://contactustutforholo.000webhostapp.com/load.php';
  url_2 = 'https://contactustutforholo.000webhostapp.com/all.php';
  url_3 = 'https://contactustutforholo.000webhostapp.com/send_reply.php';
  constructor(private http: HttpClient) { }

  enroll(user : User){
    var config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    return this.http.post<any>(this.url , user,config);
  }

  see_all(){
    var config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    return this.http.get<any>(this.url_2, config);
  }

  reply_message(message:Message){

      var config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    return this.http.post<any>(this.url_3, message, config);
  }

}
