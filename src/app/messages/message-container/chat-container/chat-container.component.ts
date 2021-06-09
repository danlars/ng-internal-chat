import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../../store/messages/messages.service';
import {Observable} from 'rxjs';
import {MessageInterface} from '../../../interfaces/message.interface';
import {UsersService} from '../../../store/users/users.service';
import {UserInterface} from '../../../interfaces/user.interface';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {
  messages$: Observable<MessageInterface[]>;
  usersMap: Map<number, UserInterface> = new Map();
  selectedUser: UserInterface;

  constructor(
    private readonly messagesService: MessagesService,
    private readonly usersService: UsersService
  ) {
    this.messages$ = this.messagesService.messages$;

    this.usersService.users$.subscribe((users) => {
      users.forEach((user) => {
        this.usersMap.set(user.id, user);
      });
    });

    this.usersService.selectedUser$.subscribe((user) => {
      this.selectedUser = user;
    });
  }

  ngOnInit(): void {
  }

  messageFromMe(message: MessageInterface) {
    return message.user_id === this.selectedUser.id;
  }

  getUserName(message: MessageInterface) {
    const user = this.usersMap.get(message.user_id);
    return user.name;
  }
}
