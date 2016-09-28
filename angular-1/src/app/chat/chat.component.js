class ChatController {
  constructor(ChatService) {
    this.chatService = ChatService;
  }
  $onInit() {
    let response = this.chatService.getChatStuff();
    this.profile = response.profile;
    this.chats = response.chats;
  }
  handleFilter({ newStatus }) {
    this.profile.status = newStatus;
  }
  handleUserUpdate({ updatedUser }) {
    if (!updatedUser) return;
    this.chats = this.chats.map(chat => {
      return (
        chat.id === updatedUser.id ? updatedUser : chat
      );
    });
  }
}

const chat = {
  templateUrl: 'src/app/chat/chat.component.html',
  controller: ChatController
};

angular
  .module('app')
  .component('chat', chat);
