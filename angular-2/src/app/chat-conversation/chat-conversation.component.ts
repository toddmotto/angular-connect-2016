import { Component, OnChanges, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'chat-conversation',
  templateUrl: './chat-conversation.component.html'
})
export class ChatConversationComponent {
 @Input() chat: Object;
 @Output() update: EventEmitter<any> = new EventEmitter();
 ngOnChanges(changes) {
   if (changes.chat) {
     this.chat = Object.assign({}, changes.chat.currentValue);
   }
 }
 updateUsername() {
   this.update.emit({
     updatedUser: this.chat
   });
 }
}
