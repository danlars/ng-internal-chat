import { createReducer, on } from '@ngrx/store';
import {setThread, addThread, removeThread, setThreadSearch, setLatestMessageOnSelectedThread} from './threads.actions';
import {ThreadInterface} from '../../interfaces/thread.interface';

const selectedThreadInitialState: ThreadInterface | null = {
  id: 0,
  name: 'My thread',
  created_at: new Date(),
  latest_message: {
    thread_id: 0,
    message: 'abc',
    id: 0,
    created_at: new Date(),
    user_id: 0,
  }
};

const threadsInitialState: ThreadInterface[] = [{
  id: 0,
  name: 'My thread',
  created_at: new Date(),
  latest_message: {
    thread_id: 0,
    message: 'abc',
    id: 0,
    created_at: new Date(),
    user_id: 0,
  }
}, {
  id: 1,
  name: 'My thread 1',
  created_at: new Date(),
  latest_message: {
    thread_id: 1,
    message: 'abc',
    id: 1,
    created_at: new Date(),
    user_id: 0,
  }
}];

const searchInitialState = '';

export const selectedThreadReducer = createReducer(
  selectedThreadInitialState,
  on(setThread, (state, { thread }) => {
    return thread;
  })
);

export const searchThreadReducer = createReducer(
  searchInitialState,
  on(setThreadSearch, (state, { search }) => {
    return search;
  }),
);

export const threadReducer = createReducer(
  threadsInitialState,
  on(addThread, (state, { thread }) => {
    return [...state, thread];
  }),
  on(removeThread, (stateThreads, { thread }) => {
    return stateThreads.filter(threadState => threadState.id !== thread.id);
  }),
  on(setLatestMessageOnSelectedThread, (state, { thread, message }) => {
    const threadsCollection = [...state];
    const updatedThread = {
      ...thread,
      latest_message: message
    };
    const threadIndex = threadsCollection.findIndex(threadState => threadState.id === thread.id);
    threadsCollection.splice(threadIndex, 1, updatedThread);
    return threadsCollection;
  }),
);
