import React from 'react';

/* Templates */
import templateCheckboxes from './checkbox/checkboxes.twig';
import templateRadios from './radio/radios.twig';
import templateSelect from './select/select.twig';
import templateTextarea from './textarea/textarea.twig';
import templateForm from './form/form.twig';

/* Data */
import dataCheckboxes from './checkbox/checkboxes.json';
import dataRadios from './radio/radios.json';
import dataSelect from './select/select.json';
import dataTextarea from './textarea/textarea.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const Checkboxes = () => (
  <div dangerouslySetInnerHTML={{ __html: templateCheckboxes(dataCheckboxes) }} />
);
export const Radios = () => (
  <div dangerouslySetInnerHTML={{ __html: templateRadios(dataRadios) }} />
);
export const SelectDropdown = () => (
  <div dangerouslySetInnerHTML={{ __html: templateSelect(dataSelect) }} />
);
export const Textarea = () => (
  <div dangerouslySetInnerHTML={{ __html: templateTextarea(dataTextarea) }} />
);
export const Form = () => (
  <div dangerouslySetInnerHTML={{ __html: templateForm({}) }} />
);
