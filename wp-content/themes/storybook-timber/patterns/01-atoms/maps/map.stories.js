import React from 'react';

/* Templates */
import templateMap from './map.twig';

/* Data */
import dataMap from './map.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Map' };

export const Map = () => (
  <div dangerouslySetInnerHTML={{ __html: templateMap(dataMap) }} />
);
