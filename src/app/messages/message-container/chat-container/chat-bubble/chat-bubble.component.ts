import {Component, Input, OnInit} from '@angular/core';
import {MessageInterface} from '../../../../interfaces/message.interface';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  @Input()
  message: MessageInterface;

  @Input()
  fromMe: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
