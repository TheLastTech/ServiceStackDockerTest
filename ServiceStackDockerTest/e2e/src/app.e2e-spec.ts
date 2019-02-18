import { AppPage } from './app.po';

describe('service-stack-docker-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ServiceStackDockerTest');
  });
});
