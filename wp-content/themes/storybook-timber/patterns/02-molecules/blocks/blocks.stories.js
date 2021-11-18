import React from 'react';

/* Templates */
import templateBlock from './block.twig';

/* Data */
import dataBlock from './block.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Blocks' };

export const Block = () => (
  <div dangerouslySetInnerHTML={{ __html: templateBlock(dataBlock) }} />
);
