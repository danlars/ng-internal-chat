import { Component, OnInit } from '@angular/core';
import {UsersService} from '../store/users/users.service';
import {Observable} from 'rxjs';
import {UserInterface} from '../interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users$: Observable<UserInterface[]>;
  selectedUser: UserInterface | null = null;

  constructor(private readonly usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users$ = this.usersService.users$;
    this.usersService.selectedUser$.subscribe((selectedUser) => {
      this.selectedUser = selectedUser;
    });
  }

  setSelectedUser(user: UserInterface) {
    this.usersService.setUser(user);
  }

  isSelectedUser(user: UserInterface) {
    if (this.selectedUser === null) {
      return false;
    }
    return user.id === this.selectedUser.id;
  }
}
