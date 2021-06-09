import {createSelector} from '@ngrx/store';
import {AppStoreState} from '../app-store.state';

export const selectUsers = createSelector(
  (state: AppStoreState) => state.users,
  (users) => {
    return users;
  }
);

export const selectUser = createSelector(
  (state: AppStoreState) => state.selectedUser,
  (user) => {
    return user;
  }
);
