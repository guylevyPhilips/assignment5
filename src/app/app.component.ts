import { Component, OnInit } from '@angular/core';
import { Counter } from './counter.service';
import { UsersService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, Counter]
})
export class AppComponent implements OnInit{
  title = 'assignment5';
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  switchToActiveAvg: number = 0;
  switchToInactiveAvg: number = 0;

  constructor(private users: UsersService, private counter: Counter){
    counter.updateAvgs.subscribe(() => this.onAvgsUpdated())
  }

  ngOnInit(): void {
    this.activeUsers = this.users.activeUsers;
    this.inactiveUsers = this.users.inactiveUsers;
  }

  onAvgsUpdated(){    
    this.switchToActiveAvg = this.counter.switchToActiveAvg;
    this.switchToInactiveAvg = this.counter.switchToInactiveAvg;
  }
}
