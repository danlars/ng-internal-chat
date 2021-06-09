import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectUsers, selectUser} from './users.selectors';
import {setUser} from './users.actions';
import {UserInterface} from '../../interfaces/user.interface';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService {
  users$: Observable<UserInterface[]>;
  selectedUser$: Observable<UserInterface | null>;
  constructor(private readonly store: Store) {
    this.users$ = this.store.pipe(select(selectUsers));
    this.selectedUser$ = this.store.pipe(select(selectUser));
  }

  setUser(user: UserInterface | null) {
    this.store.dispatch(setUser({user}));
  }
}
