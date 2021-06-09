import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectThreadMessages} from './messages.selectors';
import {MessageInterface} from '../../interfaces/message.interface';
import {addMessage} from './messages.actions';
import {Observable} from 'rxjs';

@Injectable()
export class MessagesService {
  messages$: Observable<MessageInterface[]>;
  constructor(private readonly store: Store) {
    this.messages$ = this.store.pipe(select(selectThreadMessages));
  }

  addMessage(message: MessageInterface) {
    this.store.dispatch(addMessage({message}));
  }
}
