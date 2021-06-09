import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesRoutingModule} from './messages-routing.module';
import {MessagesComponent} from './messages.component';
import {ThreadContainerComponent} from './thread-container/thread-container.component';
import {ThreadComponent} from './thread-container/thread/thread.component';
import {MessageContainerComponent} from './message-container/message-container.component';
import {ChatContainerComponent} from './message-container/chat-container/chat-container.component';
import { ChatBubbleComponent } from './message-container/chat-container/chat-bubble/chat-bubble.component';
import {TextareaModule} from '../shared/form/textarea/textarea.module';
import {ThreadService} from './thread-container/thread/thread.service';
import {ThreadFormComponent} from './thread-form/thread-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MessagesComponent,
    ThreadContainerComponent,
    ThreadComponent,
    MessageContainerComponent,
    ChatContainerComponent,
    ChatBubbleComponent,
    ThreadFormComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    TextareaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ThreadService
  ]
})
export class MessagesModule {
}
