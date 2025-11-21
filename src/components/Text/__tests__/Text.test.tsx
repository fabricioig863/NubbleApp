import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {render, screen} from '@testing-library/react-native';

import {Text} from '@components';
import {theme} from '@theme';

describe('Text Component', () => {
  test('should render text correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text>Hello World</Text>
      </ThemeProvider>,
    );

    const textElement = screen.getByText('Hello World');
    expect(textElement).toBeTruthy();
  });
});
