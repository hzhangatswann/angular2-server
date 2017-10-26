import { Component, OnInit } from '@angular/core';
//import { Message } from '../../models/chat.model';
import { Channel } from '../../models/channel.model';
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getChannels();
    this.chatService.getMessages('general');
  }

  onSelectChannel(channel: Channel) {
    this.chatService.selectChannel(channel);
  }

  onSendMessage({ channelId, messageContent }) {
    this.chatService.sendMessage(channelId, messageContent);
  }

}
