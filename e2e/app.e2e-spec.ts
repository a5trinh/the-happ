import { TheHappsPage } from './app.po';

describe('the-happs App', () => {
  let page: TheHappsPage;

  beforeEach(() => {
    page = new TheHappsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
