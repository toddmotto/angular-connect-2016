class ChatFilterController {
  constructor() {}
  $onInit() {
    this.statuses = ['online', 'offline', 'away', 'invisible'];
  }
  handleFilter(newStatus) {
    this.filter({
      $event: {
        newStatus
      }
    });
  }
}

const chatFilter = {
  bindings: {
    status: '<',
    filter: '&'
  },
  controller: ChatFilterController,
  templateUrl: 'src/app/chat-filter/chat-filter.component.html'
};

angular
  .module('app')
  .component('chatFilter', chatFilter);
