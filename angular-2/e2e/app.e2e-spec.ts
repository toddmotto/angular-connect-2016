import { AngularConnectPage } from './app.po';

describe('angular-connect App', function() {
  let page: AngularConnectPage;

  beforeEach(() => {
    page = new AngularConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
