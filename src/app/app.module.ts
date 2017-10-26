import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/components/chat/chat.component';
import { CalendarPipe } from './shared/pipes/calendar.pipe';

import { ChatService } from './chat/services/chat.service';
import { ChatAreaBottomComponent } from './chat/components/chat-area-bottom/chat-area-bottom.component';
import { ChatAreaDialogComponent } from './chat/components/chat-area-dialog/chat-area-dialog.component';
import { ChannelListComponent } from './chat/components/channel-list/channel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarPipe,
    ChatAreaBottomComponent,
    ChatAreaDialogComponent,
    ChannelListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
