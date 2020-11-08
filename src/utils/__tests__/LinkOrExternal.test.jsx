import { isExternal } from '../LinkOrExternal';

describe('isExternal', () => {
  it('should return true as it is an external https link', () => {
    const HTTPS_EXTERNAL_LINK = 'https://github.com/CathyDolle/genshin';
    expect(isExternal(HTTPS_EXTERNAL_LINK)).toBeTruthy();
  });

  it('should return true as it is an external http link', () => {
    const HTTP_EXTERNAL_LINK = 'http://github.com/CathyDolle/genshin';
    expect(isExternal(HTTP_EXTERNAL_LINK)).toBeTruthy();
  });

  it('should return false as it is an internal link', () => {
    const INTERNAL_LINK = '/blog';
    expect(isExternal(INTERNAL_LINK)).toBeFalsy();
  });

  it('should return false as it is an internal link', () => {
    const INTERNAL_LINK = 'blog';
    expect(isExternal(INTERNAL_LINK)).toBeFalsy();
  });
});
