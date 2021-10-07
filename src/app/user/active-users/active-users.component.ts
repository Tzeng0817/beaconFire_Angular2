import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";
import { user } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUser$: Observable<user[]> = new Observable();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activeUser$ = this.userService.getActiveUsers();
  }

  setInactive(user: user) {
    this.userService.setToInactive(user);
  }

}
