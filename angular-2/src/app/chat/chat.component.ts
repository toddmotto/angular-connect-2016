import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  profile: any;
  chats: Object[];
  constructor(private chatService: ChatService) {}
  ngOnInit() {
    let response: any = this.chatService.getChatStuff();
    this.profile = response.profile;
    this.chats = response.chats;
  }
  handleFilter({ newStatus }) {
    this.profile.status = newStatus;
  }
  handleUserUpdate({ updatedUser }) {
    if (!updatedUser) return;
    this.chats = this.chats.map((chat: any) => {
      return (
        chat.id === updatedUser.id ? updatedUser : chat
      );
    });
  }
}
