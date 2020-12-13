import { extendTheme, Theme } from '@chakra-ui/react';
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';
import { SystemStyleObject } from '@chakra-ui/system';

import { prismTheme } from './prism';

const theme: Theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  colors: { primary: 'teal.600' },
  fonts: {
    heading: `'Archivo Narrow', sans-serif`,
    body: `'Barlow', sans-serif`,
    mono: `Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,
  },
  fontWeights: {
    bold: 700,
    heading: 500,
  },
  styles: {
    global: (props: GlobalStyleProps): SystemStyleObject => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.800')(props),
        transition: 'background-color 0.2s',
        lineHeight: 'calc(8px + 2ex)',
      },

      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      '#__next': {
        minHeight: '100vh',
      },
      hr: {
        borderColor: mode('gray.700', 'whiteAlpha.900')(props),
      },
      pre: {
        overflowX: 'auto',
      },
      ...prismTheme(props),
    }),
  },
});
export default theme;
