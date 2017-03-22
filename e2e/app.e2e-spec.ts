import { Ng2PlaygroundPage } from './app.po';

describe('ng2-playground App', () => {
  let page: Ng2PlaygroundPage;

  beforeEach(() => {
    page = new Ng2PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
