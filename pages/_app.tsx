import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/core';

import { themeDefault } from '@prestyled/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeDefault}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
