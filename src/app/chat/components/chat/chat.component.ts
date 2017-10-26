import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/chat.model';
import { Channel } from '../../models/channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  channels: Channel[] = [
    { _id: '0', name: 'general' },
    { _id: '1', name: 'channel1' }
  ];
  channelId: string = '0';

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
      message: ['', Validators.required]
    });
  }

  onSendMessage() {
    if (!this.messageForm.valid) return;

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

  onSelectChannel(channel: Channel) {
    this.channelId = channel._id;
  }

}
