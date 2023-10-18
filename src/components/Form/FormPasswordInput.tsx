import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordInput<FormTypePassword extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormTypePassword>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <PasswordInput
          value={value}
          errorMessage={error?.message}
          onChangeText={onChange}
          {...passwordInputProps}
        />
      )}
    />
  );
}
