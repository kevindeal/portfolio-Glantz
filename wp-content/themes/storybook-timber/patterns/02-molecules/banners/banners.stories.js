import React from 'react';

/* Templates */
import templateBanner from './banner.twig';

/* Data */
import dataBanner from './banner.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Banners' };

export const Banner = () => (
  <div dangerouslySetInnerHTML={{ __html: templateBanner(dataBanner) }} />
);
