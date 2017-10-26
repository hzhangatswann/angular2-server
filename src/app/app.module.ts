import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/components/chat/chat.component';
import { CalendarPipe } from './shared/pipes/calendar.pipe';

import { ChatService } from './chat/services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarPipe
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
