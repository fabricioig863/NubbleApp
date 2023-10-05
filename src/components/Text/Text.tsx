import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  ...rest
}: TextProps) {
  return (
    <RNText style={[$fontSizes[preset], style]} {...rest}>
      {children}
    </RNText>
  );
}

/* 
  Define um tipo que é uma união de várias strings que representam diferentes estilos
  de texto disponiveis.
*/
type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

/* 
  O Sifrão na frente da variável deixa explicito que é uma propriedade de estilo.
  
  Define um objeto $fontSizes que mapeia os valores do tipo TextVariants para 
  estilos de texto específicos, incluindo informações sobre tamanho de fonte e 
  altura de linha.
*/
const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};
