import React from 'react';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../themes/themes';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s40"
      // style={{
      //   paddingHorizontal: 20,
      //   paddingVertical: 14,
      //   backgroundColor: colors.primary,
      //   alignItems: 'center',
      //   borderRadius: 16,
      // }}>
    >
      <Text preset="paragraphMedium" style={{color: 'white', fontSize: 20}}>
        {title}
      </Text>
    </Box>
  );
}
