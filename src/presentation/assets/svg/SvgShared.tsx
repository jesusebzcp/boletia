import {COLORS} from '@pr/theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgShared = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={COLORS.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"
    />
  </Svg>
);
