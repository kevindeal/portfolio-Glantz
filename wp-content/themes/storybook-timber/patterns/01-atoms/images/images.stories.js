import React from 'react';

/* Templates */
import templateImages from './image/images.twig';
import templateFigure from './image/figure.twig';
import templateIcons from './icons/icons.twig';
import templateLogos from './logos/logos.twig';

/* Data */
import dataImages from './image/images.json';
import dataFigure from './image/figure.json';
import dataIcons from './icons/icons.json';
import dataLogos from './logos/logos.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const Images = () => (
  <div dangerouslySetInnerHTML={{ __html: templateImages(dataImages) }} />
);
export const Figure = () => (
  <div dangerouslySetInnerHTML={{ __html: templateFigure(dataFigure) }} />
);
export const Icons = () => (
  <div dangerouslySetInnerHTML={{ __html: templateIcons(dataIcons) }} />
);
export const Logos = () => (
  <div dangerouslySetInnerHTML={{ __html: templateLogos(dataLogos) }} />
);
