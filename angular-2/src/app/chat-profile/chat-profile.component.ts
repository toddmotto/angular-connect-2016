import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-profile',
  templateUrl: './chat-profile.component.html'
})
export class ChatProfileComponent {
  @Input() profile;
  constructor() {}
}
