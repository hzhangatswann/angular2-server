import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/chat.model';
import { Channel } from '../../models/channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageForm:FormGroup;

  constructor(private fb:FormBuilder, private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.getChannels();
    this.chatService.getMessages('general');
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  onSendMessage() {
    if (!this.messageForm.valid) return;

  this.chatService.sendMessage(this.chatService.channel._id, this.messageForm.value.message);


  this.messageForm.reset();
  }

  onSelectChannel(channel: Channel) {
    this.chatService.selectChannel(channel);
  }

}
