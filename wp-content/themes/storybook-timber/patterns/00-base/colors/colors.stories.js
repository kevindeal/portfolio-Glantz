import React from 'react';

/* Templates */
import templateColors from './colors.twig';

/* Data */
import dataGrayscale from './colors-grayscale.json';
import dataBranding from './colors-branding.json';
import dataSocial from './colors-social.json';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Colors' };

export const Grayscale = () => (
  <div dangerouslySetInnerHTML={{ __html: templateColors(dataGrayscale) }} />
);
export const Branding = () => (
  <div dangerouslySetInnerHTML={{ __html: templateColors(dataBranding) }} />
);
export const Social = () => (
  <div dangerouslySetInnerHTML={{ __html: templateColors(dataSocial) }} />
);
