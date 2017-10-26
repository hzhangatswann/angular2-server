import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/components/chat/chat.component';
import { CalendarPipe } from './shared/pipes/calendar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
