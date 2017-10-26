import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [
    { _id: '0', channelId: '0', userId: '0', userName: 'Jack', content: 'Hello!', timestamp: new Date() },
    { _id: '1', channelId: '0', userId: '0', userName: 'Jack', content: 'Hi!', timestamp: new Date() },
    { _id: '2', channelId: '1', userId: '0', userName: 'Jack', content: 'Hi again!', timestamp: new Date() }
  ];

  constructor() { }

  ngOnInit() {
  }

}
