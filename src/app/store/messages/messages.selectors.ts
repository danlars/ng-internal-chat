import {createSelector} from '@ngrx/store';
import {AppStoreState} from '../app-store.state';
import {MessageInterface} from '../../interfaces/message.interface';

export const selectThreadMessages = createSelector(
  (state: AppStoreState) => state.messages,
  (state: AppStoreState) => state.selectedThread,
  (messages: MessageInterface[], selectedThread) => {
    if (selectedThread) {
      return messages.filter((message) => message.thread_id === selectedThread.id);
    }

    return [];
  }
)
