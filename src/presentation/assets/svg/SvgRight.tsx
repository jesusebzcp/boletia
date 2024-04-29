import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgRight = (props: SvgProps) => (
  <Svg width={8} height={14} fill="none" {...props}>
    <Path
      stroke="#C4CDD5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 13 6-6-6-6"
    />
  </Svg>
);
