import {StyleSheet} from 'react-native';

import {fireEvent, render, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="click Me" {...props} />);

  const titleElement = screen.getByText(/click Me/i);
  const loadingElement = screen.queryByTestId('activity-indicator');

  return {
    titleElement,
    loadingElement,
  };
}

describe('<Button />', () => {
  it('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  // Ficar atento a esse teste, pode ser que precise ajustar o estilo do título no componente Button
  it('the title should be gray if button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});

    const titleStyles = StyleSheet.flatten(titleElement.props.style);

    expect(titleStyles.color).toEqual(theme.colors.gray2);
  });

  it('test loading', () => {});
});
