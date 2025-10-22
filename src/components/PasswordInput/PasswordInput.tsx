import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { TextInput, TextInputProps } from '../TextInput/TextInput';

type PasswordInputProps = Omit<
  TextInputProps,
  'RightComponent' | 'secureTextEntry'
>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={!isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
          color="gray2"
        />
      }
    />
  );
}
