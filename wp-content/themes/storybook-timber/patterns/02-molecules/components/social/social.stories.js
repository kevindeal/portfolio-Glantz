import React from 'react';

/* Templates */
import templateSocialLinks from './social-links/social-links.twig';
import templateSocialShare from './social-share/social-share.twig';

/* Data */
import dataSocialLinks from './social-links/social-links.json';
import dataSocialShare from './social-share/social-share.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Components/Social' };

export const SocialLinks = () => (
  <div dangerouslySetInnerHTML={{ __html: templateSocialLinks(dataSocialLinks) }} />
);
export const SocialShare = () => (
  <div dangerouslySetInnerHTML={{ __html: templateSocialShare(dataSocialShare) }} />
);
