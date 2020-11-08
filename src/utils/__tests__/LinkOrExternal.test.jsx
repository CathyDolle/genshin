import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinkOrExternal, { isExternal } from '../LinkOrExternal';

const HTTPS_EXTERNAL_LINK = 'https://github.com/CathyDolle/genshin';
const HTTP_EXTERNAL_LINK = 'http://github.com/CathyDolle/genshin';
const INTERNAL_LINK = '/blog';
const INTERNAL_LINK_WITHOUT_SLASH = 'blog';

describe('isExternal', () => {
  it('should return true as it is an external https link', () => {
    expect(isExternal(HTTPS_EXTERNAL_LINK)).toBeTruthy();
  });

  it('should return true as it is an external http link', () => {
    expect(isExternal(HTTP_EXTERNAL_LINK)).toBeTruthy();
  });

  it('should return false as it is an internal link', () => {
    expect(isExternal(INTERNAL_LINK)).toBeFalsy();
  });

  it('should return false as it is an internal link', () => {
    expect(isExternal(INTERNAL_LINK_WITHOUT_SLASH)).toBeFalsy();
  });
});

describe('LinkOrExternal', () => {
  it('should contain a "a" for external link', () => {
    render(<LinkOrExternal to={HTTPS_EXTERNAL_LINK}>Test link</LinkOrExternal>);
    expect(screen.getByTestId('external-link-node')).toBeTruthy();
  });

  it('should contain a Link component for internal link', () => {
    render(
      <BrowserRouter>
        <LinkOrExternal to={INTERNAL_LINK}>Test link</LinkOrExternal>
      </BrowserRouter>,
    );
    expect(screen.getByTestId('internal-link-node')).toBeTruthy();
  });
});
