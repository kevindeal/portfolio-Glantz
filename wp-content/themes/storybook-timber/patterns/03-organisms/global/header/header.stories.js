import React from 'react';

/* Templates */
import templateHeader from './header.twig';

/* Data */
import dataGlobal from '../global.json';
import dataHeader from './header.json';
import dataHeaderNav from '../../../02-molecules/navigation/header/header-nav.json';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Global/Header'
};

export const Header = () => (
  <div dangerouslySetInnerHTML={{ __html: templateHeader({...dataGlobal, ...dataHeaderNav, ...dataHeader}) }} />
);
