import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chat-area-header',
  templateUrl: './chat-area-header.component.html',
  styleUrls: ['./chat-area-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatAreaHeaderComponent {

  @Input() channelName: string;

}
