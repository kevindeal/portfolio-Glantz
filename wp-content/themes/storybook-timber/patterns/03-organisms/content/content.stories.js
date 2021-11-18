import React from 'react';

/* Templates */
import templateContent from './content.twig';
import templateContentPosts from './content-posts.twig';

/* Data */
import dataContent from './content.json';
import dataContentPosts from './content-posts.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Content' };

export const Content = () => (
  <div dangerouslySetInnerHTML={{ __html: templateContent(dataContent) }} />
);
export const ContentPosts = () => (
  <div dangerouslySetInnerHTML={{ __html: templateContentPosts(dataContentPosts) }} />
);
