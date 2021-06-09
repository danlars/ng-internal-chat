import { Component } from '@angular/core';
import {UsersService} from './store/users/users.service';
import {UserInterface} from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedUser: UserInterface | null;
  constructor(private readonly usersService: UsersService) {
    this.usersService.selectedUser$.subscribe((user) => {
      this.selectedUser = user;
    });
  }
}
