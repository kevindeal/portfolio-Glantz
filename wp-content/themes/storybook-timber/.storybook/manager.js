// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { addons } from '@storybook/addons';
import customTheme from './theme';

addons.setConfig({
  theme: customTheme,
});
