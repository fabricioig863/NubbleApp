import React from 'react';
import EyeOffIcon from '../../assets/icons/EyeOffIcon';
import EyeOnIcon from '../../assets/icons/EyeOnIcon';

interface Props {
  name: IconName;
}

export function Icon({ name }: Props) {
  const SVGIcon = iconRegistry[name];

  return <SVGIcon />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
