import { createReducer, on } from '@ngrx/store';
import {addMessage} from './messages.actions';
import { MessageInterface } from '../../interfaces/message.interface';

const initialState: ReadonlyArray<MessageInterface> = [{
  id: 1,
  thread_id: 0,
  user_id: 0,
  message: 'My message',
  created_at: new Date(),
}, {
  id: 2,
  thread_id: 0,
  user_id: 1,
  message: 'Another message',
  created_at: new Date(),
}, {
  id: 2,
  thread_id: 0,
  user_id: 3,
  message: 'Hello world',
  created_at: new Date(),
}];

export const messagesReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => {
    return [...state, message];
  }),
);
