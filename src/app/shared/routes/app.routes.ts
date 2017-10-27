import { Routes } from '@angular/router';

import { ChatComponent }  from '../../chat/components/chat/chat.component';

export const routes: Routes = [
  {
    path: 'channel/:name',
    component: ChatComponent
  },
  {
    path: '**',
    redirectTo: 'channel/general'
  }
];
