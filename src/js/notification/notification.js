import * as PNotify from '@pnotify/core/dist/PNotify.js';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const notify = {
  ERROR: message => PNotify.error({ text: message, delay: 2500 }),
  SUCCESS: message => PNotify.success({ text: message, delay: 2500 }),
};
