import { AppProps } from 'next/app';
import { ChakraProvider as ThemeProvider } from '@chakra-ui/react';

import theme from '../styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
