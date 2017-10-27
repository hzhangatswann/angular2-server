import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

//import { Message } from '../../models/chat.model';
import { Channel } from '../../models/channel.model';
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  subsParams: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getChannels();
    //this.chatService.getMessages('general');
    this.subsParams = this.route.params.subscribe(params => {
      const channelName = params['name'];
      this.chatService.getMessages(channelName);
    });
  }

  ngOnDestroy() {
    this.subsParams.unsubscribe();
  }

  onSelectChannel(channel: Channel) {
    this.chatService.selectChannel(channel);
    this.router.navigate(['/channel', channel.name]);
  }

  onSendMessage({ channelId, messageContent }) {
    this.chatService.sendMessage(channelId, messageContent);
  }

}
