import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
  constructor() {}
  getChatStuff(): any {
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
