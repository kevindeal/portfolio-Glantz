import React from 'react';

/* Templates */
import templateTable from './table.twig';

/* Data */
import dataTable from './table.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Tables' };

export const Table = () => (
  <div dangerouslySetInnerHTML={{ __html: templateTable(dataTable) }} />
);
