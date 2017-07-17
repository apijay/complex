import { ComscorePage } from './app.po';

describe('comscore App', () => {
  let page: ComscorePage;

  beforeEach(() => {
    page = new ComscorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
