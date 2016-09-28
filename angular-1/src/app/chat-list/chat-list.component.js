class ChatListController {
  constructor() {}
  onUserUpdate({ updatedUser }) {
    this.select({
      $event: { updatedUser }
    });
  }
}

const chatList = {
  bindings: {
    chats: '<',
    select: '&'
  },
  controller: ChatListController,
  templateUrl: 'src/app/chat-list/chat-list.component.html'
};

angular
  .module('app')
  .component('chatList', chatList);
