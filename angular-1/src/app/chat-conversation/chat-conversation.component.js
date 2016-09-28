class ChatConversationController {
  constructor() {}
  $onChanges(changes) {
    if (changes.chat) {
      this.chat = Object.assign({}, changes.chat.currentValue);
    }
  }
  updateUsername() {
    this.update({
      $event: {
        updatedUser: this.chat,
        index: this.index
      }
    });
  }
}

const chatConversation = {
  bindings: {
    chat: '<',
    update: '&'
  },
  controller: ChatConversationController,
  templateUrl: 'src/app/chat-conversation/chat-conversation.component.html'
};

angular
  .module('app')
  .component('chatConversation', chatConversation);
