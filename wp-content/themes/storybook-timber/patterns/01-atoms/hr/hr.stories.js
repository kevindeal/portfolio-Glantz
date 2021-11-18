import React from 'react';

/* Templates */
import templateHrs from './hrs.twig';

/* Data */
import dataHrs from './hrs.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Hrs' };

export const Hrs = () => (
  <div dangerouslySetInnerHTML={{ __html: templateHrs(dataHrs) }} />
);
