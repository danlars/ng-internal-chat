import {createSelector} from '@ngrx/store';
import {AppStoreState} from '../app-store.state';

export const selectThreads = createSelector(
  (state: AppStoreState) => state.threads,
  (threads) => {
    return threads;
  }
);

export const selectThread = createSelector(
  (state: AppStoreState) => state.selectedThread,
  (thread) => {
    return thread;
  }
);
