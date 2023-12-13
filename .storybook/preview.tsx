import React from 'react';
import type { Preview } from "@storybook/react";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import '../src/app/globals.css'

const preview: Preview = {
  decorators: [
    (Story) => (<Theme><Story /></Theme>),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
