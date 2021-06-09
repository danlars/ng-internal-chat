import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersService} from './users/users.service';
import {ThreadsService} from './threads/threads.service';
import {MessagesService} from './messages/messages.service';
import {StoreModule} from '@ngrx/store';
import {messagesReducer} from './messages/messages.reducers';
import {searchThreadReducer, selectedThreadReducer, threadReducer} from './threads/threads.reducers';
import {usersReducer, selectedUserReducer} from './users/users.reducers';

@NgModule({
  providers: [
    UsersService,
    ThreadsService,
    MessagesService
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      messages: messagesReducer,
      selectedThread: selectedThreadReducer,
      searchThread: searchThreadReducer,
      threads: threadReducer,
      users: usersReducer,
      selectedUser: selectedUserReducer,
    }),
  ],
})
export class AppStoreModule { }
