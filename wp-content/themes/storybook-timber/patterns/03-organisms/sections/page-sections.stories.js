import React from 'react';

/* Templates */
import templatePageSections from './page-sections.twig';

/* Data */
import dataPageSections from './page-sections.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Sections' };

export const PageSections = () => (
  <div dangerouslySetInnerHTML={{ __html: templatePageSections(dataPageSections) }} />
);
