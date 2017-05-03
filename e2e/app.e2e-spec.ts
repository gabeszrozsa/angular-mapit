import { AngularMapitPage } from './app.po';

describe('angular-mapit App', function() {
  let page: AngularMapitPage;

  beforeEach(() => {
    page = new AngularMapitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
