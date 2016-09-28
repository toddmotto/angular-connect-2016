class ChatService {
  constructor() {}
  getChatStuff() {
    return {
      profile: {
        name: 'Todd Motto',
        status: 'online'
      },
      chats: [{
        name: 'User 1',
        status: 'online',
        id: 119
      },{
        name: 'User 2',
        status: 'offline',
        id: 361
      },{
        name: 'User 3',
        status: 'online',
        id: 122
      },{
        name: 'User 4',
        status: 'online',
        id: 982
      },{
        name: 'User 5',
        status: 'offline',
        id: 719
      }]
    };
  }
}

angular
  .module('app')
  .service('ChatService', ChatService);
