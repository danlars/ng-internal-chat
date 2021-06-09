import { createReducer, on } from '@ngrx/store';
import { setUser, setUsers } from './users.actions';
import {UserInterface} from '../../interfaces/user.interface';

const selectedUserIntialState: UserInterface | null = {
  id: 0,
  name: 'Daniel Larsen',
  password: 'abc',
  username: 'dansker'
};

const usersInitialState: UserInterface[] = [{
  id: 0,
  name: 'Daniel Larsen',
  password: 'abc',
  username: 'dansker'
}, {
  id: 1,
  name: 'Daniel Larsen 1',
  password: 'abc',
  username: 'dansker1'
}, {
  id: 2,
  name: 'Daniel Larsen 2',
  password: 'abc',
  username: 'dansker2'
}, {
  id: 3,
  name: 'Daniel Larsen 3',
  password: 'abc',
  username: 'dansker3'
}];

export const selectedUserReducer = createReducer(
  selectedUserIntialState,
  on(setUser, (state, { user }) => {
    return user;
  }),
);

export const usersReducer = createReducer(
  usersInitialState,
  on(setUsers, (state, { users }) => {
    return [...users];
  }),
);
