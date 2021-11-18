import React from 'react';

/* Templates */
import templateVideo from './video.twig';

/* Data */
import dataVideo from './video.json';
import dataVideoFull from './video-full.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Videos' };

export const Wide = () => (
  <div dangerouslySetInnerHTML={{ __html: templateVideo(dataVideo) }} />
);
export const Full = () => (
  <div dangerouslySetInnerHTML={{ __html: templateVideo(dataVideoFull) }} />
);
