import { AppPage } from './app.po';

describe('CoolDiff App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: CoolDiff', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('CoolDiff');
  });
});
