import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Channel } from '../../models/channel.model';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent {
  @Input() channels: Channel[];
  @Input() channelId: string;
  @Output() selectChannel = new EventEmitter<Channel>();

  onSelectChannel(channel: Channel) {
    this.selectChannel.emit(channel);
  }

}
