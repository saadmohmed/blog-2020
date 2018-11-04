import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  url =    'http://www.contactusholo.tk/load.php';
  url_2 = 'http://www.contactusholo.tk/all.php';
  url_3 = 'http://www.contactusholo.tk/send_reply.php';
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
