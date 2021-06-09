import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../store/messages/messages.service';
import {MessageInterface} from '../../interfaces/message.interface';
import {ThreadInterface} from '../../interfaces/thread.interface';
import {UserInterface} from '../../interfaces/user.interface';
import {ThreadsService} from '../../store/threads/threads.service';
import {UsersService} from '../../store/users/users.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
  chatMessage: string = '';
  private selectedThread: ThreadInterface;
  private selectedUser: UserInterface;

  constructor(
    private readonly messagesService: MessagesService,
    private readonly threadsService: ThreadsService,
    private readonly usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.threadsService.selectedThread$.subscribe((thread) => {
      this.selectedThread = thread;
    });
    this.usersService.selectedUser$.subscribe((user) => {
      this.selectedUser = user;
    });
  }

  canSendMessage() {
    if (!this.chatMessage) {
      return false;
    }
    return this.selectedUser != null && this.selectedThread != null && this.chatMessage.length > 0;
  }

  sendMessage() {
    const message: MessageInterface = {
      message: this.chatMessage,
      created_at: new Date(),
      id: Math.random() * 1000000,
      user_id: this.selectedUser.id,
      thread_id: this.selectedThread.id,
    };
    this.messagesService.addMessage(message);
    this.threadsService.setLatestMessageToSelectedThread(this.selectedThread, message);
    this.chatMessage = '';
  }
}
