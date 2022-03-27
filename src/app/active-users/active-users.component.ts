import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  //activeUsers: {name: string}[] = [];
  @Input() username: string = '';

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    //this.activeUsers = this.users.activeUsers;
  }

  onSetToInactiveClicked(){
    this.users.setUserToInactive(this.username);
  }

}
