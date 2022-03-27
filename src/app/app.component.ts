import { Component, OnInit } from '@angular/core';
import { UsersService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit{
  title = 'assignment5';
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private users: UsersService){

  }

  ngOnInit(): void {
    this.activeUsers = this.users.activeUsers;
    this.inactiveUsers = this.users.inactiveUsers;
  }
}
