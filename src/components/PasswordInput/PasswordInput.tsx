import React, {useState} from 'react';

import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [passwordSecurity, setPasswordSecurity] = useState(true);

  function toggleSecurity() {
    setPasswordSecurity(prev => !prev);
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={passwordSecurity}
      RightComponent={
        <Icon
          onPress={toggleSecurity}
          color="gray2"
          name={passwordSecurity ? 'eyeOn' : 'eyeOff'}
        />
      }
      boxProps={{mb: 's48'}}
    />
  );
}
