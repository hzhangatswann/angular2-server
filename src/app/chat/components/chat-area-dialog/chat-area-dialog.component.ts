import { Component, Input } from '@angular/core';

import { Message } from '../../models/chat.model';
@Component({
  selector: 'app-chat-area-dialog',
  templateUrl: './chat-area-dialog.component.html',
  styleUrls: ['./chat-area-dialog.component.css']
})
export class ChatAreaDialogComponent {

  @Input() messages: Message[];

}
