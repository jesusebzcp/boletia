import {COLORS} from '@pr/theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgMessage = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      stroke={COLORS.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.792 4.112h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2Z"
    />
    <Path
      stroke={COLORS.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22.791 6.112-10 7-10-7"
    />
  </Svg>
);
