import {fireEvent, render, screen} from 'test-utils';

import {IconProps} from '@components';

import {PasswordInput} from '../PasswordInput';

describe('PasswordInput', () => {
  it('starts with hiden password', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('when pressing the eye icon, it should show the password, and change to the eye on icon', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    // Inicialmente, o ícone é 'eyeOff' porque a senha está escondida
    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    fireEvent.press(screen.getByTestId(eyeOffIcon));

    // Após clicar, deve mudar para 'eyeOn' porque a senha está visível
    const eyeOnIcon: IconProps['name'] = 'eyeOn';
    const eyeOnIconElement = screen.getByTestId(eyeOnIcon);

    expect(eyeOnIconElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
