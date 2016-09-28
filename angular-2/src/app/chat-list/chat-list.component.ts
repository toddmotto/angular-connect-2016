import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html'
})
export class ChatListComponent {
  constructor() {}
  @Input() chats;
  @Output() select: EventEmitter<any> = new EventEmitter();
  onUserUpdate({ updatedUser }) {
    this.select.emit({ updatedUser });
  }
}
