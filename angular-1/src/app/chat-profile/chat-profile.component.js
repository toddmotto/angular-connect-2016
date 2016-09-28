const chatProfile = {
  bindings: {
    profile: '<'
  },
  templateUrl: 'src/app/chat-profile/chat-profile.component.html'
};

angular
  .module('app')
  .component('chatProfile', chatProfile);
