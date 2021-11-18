import React from 'react';

/* Templates */
import templateHeadings from './headings.twig';

/* Data */
import dataHeadings from './headings.json';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Headings' };

export const Headings = () => (
  <div dangerouslySetInnerHTML={{ __html: templateHeadings(dataHeadings) }} />
);
