import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgHome = (props: SvgProps) => (
  <Svg width={20} height={22} fill="none" {...props}>
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 8 9-7 9 7v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Z"
    />
  </Svg>
);
