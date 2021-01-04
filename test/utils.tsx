import React from 'react';

import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { render as defaultRender, RenderResult } from '@testing-library/react';
import { renderHook as defaultRenderHook, RenderHookResult } from '@testing-library/react-hooks';
import { ChakraProvider as ThemeProvider } from '@chakra-ui/react';
// import { TinaProvider, TinaCMS } from 'tinacms';

import theme from '../styles';

export type Router = NextRouter & {
  params: Record<string, string | string[]>;
};
export * from '@testing-library/react';

// --------------------------------------------------------------------------------
// This file customizes the render() and renderHook() test functions provided
// by React testing library. It adds a router context wrapper with a mocked router.
//
// You should always import `render` and `renderHook` from this file
//
// This is the place to add any other context providers you need while testing.
// --------------------------------------------------------------------------------

// --------------------------------------------------
// render()
// --------------------------------------------------
// Override the default test render with our own
//
// You can override the router mock like this:
//
// const { baseElement } = render(<MyComponent />, {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------
export function render(ui: RenderUI, { wrapper, router, ...options }: RenderOptions = {}): RenderResult {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    wrapper = ({ children }) => (
      <ThemeProvider theme={theme}>
        <RouterContext.Provider value={{ ...mockRouter, ...router }}>{children}</RouterContext.Provider>
      </ThemeProvider>
    );
  }
  return defaultRender(ui, { wrapper, ...options });
}

// --------------------------------------------------
// renderHook()
// --------------------------------------------------
// Override the default test renderHook with our own
//
// You can override the router mock like this:
//
// const result = renderHook(() => myHook(), {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------
export function renderHook(
  hook: RenderHook,
  { wrapper, router, ...options }: RenderHookOptions = {}
): RenderHookResult<unknown, unknown> {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    wrapper = ({ children }) => (
      <ThemeProvider theme={theme}>
        <RouterContext.Provider value={{ ...mockRouter, ...router }}>{children}</RouterContext.Provider>
      </ThemeProvider>
    );
  }
  return defaultRenderHook(hook, { wrapper, ...options });
}

export const mockRouter: Router = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  params: {},
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<Router> };

type DefaultHookParams = Parameters<typeof defaultRenderHook>;
type RenderHook = DefaultHookParams[0];
type RenderHookOptions = DefaultHookParams[1] & { router?: Partial<Router> };
