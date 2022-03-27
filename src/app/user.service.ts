import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
    activeUsers = ['Max','Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    setUserToInactive(username: string) {
        let index = this.activeUsers.indexOf(username);
        this.activeUsers.splice(index, 1);
        this.inactiveUsers.push(username)
    }

    setUserToActive(username: string) {
        let index = this.inactiveUsers.indexOf(username);
        this.inactiveUsers.splice(index, 1);
        this.activeUsers.push(username)
    }

}