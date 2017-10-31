import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../../shared/lib/rxjs-operators';
import { User } from '../models/user.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProfileService {

  constructor(protected http:Http) {
  }

  currentUser: User = {
    _id: '0',
    name: 'Jack'
  };

  updateProfile(name: string): Observable<string> {
    this.currentUser.name = name;
    // fake API, here we return an Observable name back directly
    //return Observable.of(name);
    //http://www.jsontest.com/
    return this.http.get(`http://echo.jsontest.com/name/${name}`).map(res => res.json())
  }

}
