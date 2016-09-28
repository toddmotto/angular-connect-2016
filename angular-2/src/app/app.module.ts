import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatProfileComponent } from './chat-profile/chat-profile.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatFilterComponent } from './chat-filter/chat-filter.component';

import { ChatService } from './chat.service';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatProfileComponent,
    ChatListComponent,
    ChatFilterComponent,
    ChatConversationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
