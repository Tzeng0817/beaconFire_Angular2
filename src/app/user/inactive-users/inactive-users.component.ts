import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  activeUser: user[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.activeUser = users;
    });  
  }

  setActive(user: user) {
    this.userService.setToActive(user);
  }

}
