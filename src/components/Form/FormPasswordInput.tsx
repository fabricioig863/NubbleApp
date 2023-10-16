import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {PasswordInput} from '../PasswordInput/PasswordInput';
import {TextInputProps} from '../TextInput/TextInput';

export function FormPasswordInput<FormTypePassword extends FieldValues>({
  control,
  name,
  rules,
  ...formPasswordInput
}: TextInputProps & UseControllerProps<FormTypePassword>) {
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
          {...formPasswordInput}
        />
      )}
    />
  );
}
