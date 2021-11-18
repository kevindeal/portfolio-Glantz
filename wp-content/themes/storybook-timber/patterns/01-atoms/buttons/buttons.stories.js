import React from 'react';

/* Templates */
import templateButtons from './buttons.twig';

/* Data */
import dataButtons from './buttons.json';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Buttons',
};

export const Buttons = () => (
  <div dangerouslySetInnerHTML={{ __html: templateButtons(dataButtons) }} />
);
