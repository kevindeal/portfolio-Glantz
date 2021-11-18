import React from 'react';

/* Templates */
import templateLinks from './links.twig';

/* Data */
import dataLinks from './links.json';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Links',
};

export const Links = () => (
  <div dangerouslySetInnerHTML={{ __html: templateLinks(dataLinks) }} />
);
