import { ShipmentsTestAngularPage } from './app.po';

describe('shipments-test-angular App', () => {
  let page: ShipmentsTestAngularPage;

  beforeEach(() => {
    page = new ShipmentsTestAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
