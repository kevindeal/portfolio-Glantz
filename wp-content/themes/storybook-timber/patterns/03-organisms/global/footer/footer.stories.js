import React from 'react';

/* Templates */
import templateFooter from './footer.twig';

/* Data */
import dataGlobal from '../global.json';
import dataSocialLinks from '../../../02-molecules/components/social/social-links/social-links.json';
import dataFooterNav from '../../../02-molecules/navigation/footer/footer-nav.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Global/Footer' };

export const Footer = () => (
  <div dangerouslySetInnerHTML={{ __html: templateFooter({...dataGlobal, ...dataSocialLinks, ...dataFooterNav}) }} />
);
