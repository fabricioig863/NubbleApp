import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box style={{paddingTop: top}} {...$wrapper}>
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
