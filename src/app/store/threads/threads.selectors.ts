import {createSelector} from '@ngrx/store';
import {AppStoreState} from '../app-store.state';
import {fuzzySearch} from '../../functions/fuzzy-search';

export const selectThreads = createSelector(
  (state: AppStoreState) => state.threads,
  (threads) => {
    return threads;
  }
);
export const selectFilterThreads = createSelector(
  (state: AppStoreState) => state.threads,
  (state: AppStoreState) => state.searchThread,
  (threads, search) => {
    if (!search) {
      return threads;
    }
    return threads.filter((thread) => fuzzySearch(search, thread.name));
  }
);

export const selectThread = createSelector(
  (state: AppStoreState) => state.selectedThread,
  (thread) => {
    return thread;
  }
);
