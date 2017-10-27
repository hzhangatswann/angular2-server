import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/components/chat/chat.component';
import { CalendarPipe } from './shared/pipes/calendar.pipe';

import { ProfileService } from './profile/services/profile.service';
import { ChatService } from './chat/services/chat.service';
import { ChatAreaBottomComponent } from './chat/components/chat-area-bottom/chat-area-bottom.component';
import { ChatAreaDialogComponent } from './chat/components/chat-area-dialog/chat-area-dialog.component';
import { ChannelListComponent } from './chat/components/channel-list/channel-list.component';

import { routes } from './shared/routes/app.routes';
import { InfoComponent } from './profile/components/info/info.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { ChannelHeaderComponent } from './chat/components/channel-header/channel-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarPipe,
    ChatAreaBottomComponent,
    ChatAreaDialogComponent,
    ChannelListComponent,
    InfoComponent,
    ProfileComponent,
    ChannelHeaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ChatService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
