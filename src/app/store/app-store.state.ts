import {MessageInterface} from '../interfaces/message.interface';
import {ThreadInterface} from '../interfaces/thread.interface';
import {UserInterface} from '../interfaces/user.interface';

export interface AppStoreState {
  messages: MessageInterface[];
  selectedThread: ThreadInterface | null;
  threads: ThreadInterface[];
  selectedUser: UserInterface | null;
  users: UserInterface[];
}
