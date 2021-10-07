import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: user[];
  public userList$ = new BehaviorSubject<user[]>([]);

  constructor() {
    this.userList = [
      {
        name : "ben",
        isActive : true,
      },
      {
        name : "chen",
        isActive : true,
      },
      {
        name : "Ray",
        isActive : true,
      },
      {
        name : "GuanJiaHong",
        isActive : true,
      },
      {
        name : "Maoge",
        isActive : true,
      },
    ]; 

    this.userList$.next(this.userList);
  }

  getAllUsers(): Observable<user[]> {
    return this.userList$.asObservable();
  }

  getActiveUsers(): Observable<user[]> {
    return this.userList$.asObservable().pipe(map(user => user.filter(x => x.isActive == true)));
  }

  setToInactive(user: user) {
    const currentUser = this.userList.find(x => x == user);
    if(currentUser != undefined) {
      currentUser.isActive = false;
    }
  }

  setToActive(user: user) {
    const currentUser = this.userList.find(x => x == user);
    if(currentUser != undefined) {
      currentUser.isActive = true;
    }
  }
}
