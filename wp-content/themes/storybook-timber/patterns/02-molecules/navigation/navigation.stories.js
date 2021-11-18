import React from 'react';

/* Templates */
import templateHeaderNav from './header/header-nav.twig';
import templateFooterNav from './footer/footer-nav.twig';

/* Data */
import dataHeaderNav from './header/header-nav.json';
import dataFooterNav from './footer/footer-nav.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Navigation' };

export const HeaderNav = () => (
  <div dangerouslySetInnerHTML={{ __html: templateHeaderNav(dataHeaderNav) }} />
);
export const FooterNav = () => (
  <div dangerouslySetInnerHTML={{ __html: templateFooterNav(dataFooterNav) }} />
);
FooterNav.parameters = {
  backgrounds: { default: 'dark' }
}
