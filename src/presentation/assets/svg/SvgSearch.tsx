import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgSearch = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#C4CDD5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
    />
  </Svg>
);
