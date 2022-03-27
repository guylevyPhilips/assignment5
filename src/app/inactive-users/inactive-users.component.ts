import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  @Input() username: string = '';

  constructor(private users: UsersService) { }

  ngOnInit(): void {

  }

  onSetToActiveClicked(){
    this.users.setUserToActive(this.username);
  }

}
