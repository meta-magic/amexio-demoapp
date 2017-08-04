import { AmexioDemoAppPage } from './app.po';

describe('amexio-demo-app App', () => {
  let page: AmexioDemoAppPage;

  beforeEach(() => {
    page = new AmexioDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
