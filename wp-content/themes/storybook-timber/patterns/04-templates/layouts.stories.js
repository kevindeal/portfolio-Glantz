import React from 'react';

/* Templates */
import templateFullWidth from './full-width.twig';
import templateWithSidebar from './with-sidebar.twig';

/* Data */
import dataGlobal from '../03-organisms/global/global.json';
import dataHeader from '../03-organisms/global/header/header.json';
import dataHeaderNav from '../02-molecules/navigation/header/header-nav.json';
import dataFooterNav from '../02-molecules/navigation/footer/footer-nav.json';
import dataSocialLinks from '../02-molecules/components/social/social-links/social-links.json';
import dataContent from '../03-organisms/content/content.json';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/Layouts' };

export const fullWidth = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateFullWidth({
        ...dataGlobal,
        ...dataHeader,
        ...dataHeaderNav,
        ...dataFooterNav,
        ...dataSocialLinks,
        ...dataContent
      }),
    }}
  />
);
export const withSidebar = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateWithSidebar({
        ...dataGlobal,
        ...dataHeader,
        ...dataHeaderNav,
        ...dataFooterNav,
        ...dataSocialLinks,
        ...dataContent
      }),
    }}
  />
);
