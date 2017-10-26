import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/chat.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages:Message[] = [
    {_id: '0', channelId: '0', userId: '0', userName: 'Jack', content: 'Hello!', timestamp: new Date()},
    {_id: '1', channelId: '0', userId: '0', userName: 'Jack', content: 'Hi!', timestamp: new Date()},
    {_id: '2', channelId: '1', userId: '0', userName: 'Jack', content: 'Hi again!', timestamp: new Date()}
  ];

  messageForm:FormGroup;

  constructor(private fb:FormBuilder) {
  }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ''
    });
  }

  onSendMessage() {
    const message = {
      _id: String(this.messages.length),
      channelId: '0',
      userId: '0',
      userName: 'Jack',
      content: this.messageForm.value.message,
      timestamp: new Date()
    };

    this.messages.push(message);

    this.messageForm.reset();
  }

}
