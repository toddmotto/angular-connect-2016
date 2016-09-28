import { Component, DoCheck, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat-filter',
  templateUrl: './chat-filter.component.html'
})
export class ChatFilterComponent {
  statuses: String[];
  constructor() {}
  @Input() status: Object;
  @Output() filter: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.statuses = ['online', 'offline', 'away', 'invisible'];
  }
  handleFilter(newStatus) {
    this.filter.emit({ newStatus });
  }
}
