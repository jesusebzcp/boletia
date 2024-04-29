export const opacityColor = (color: string, opacity: number): string => {
  const hexWithoutOpacity = color.slice(0, 7);
  const alphaHex = Math.round(opacity * 255)
    .toString(16)
    .toUpperCase();

  if (alphaHex.length === 1) {
    return `${hexWithoutOpacity}0${alphaHex}`;
  }

  return `${hexWithoutOpacity}${alphaHex}`;
};
export const COLORS = {
  primary: '#EA6613',
  secondary: '#2233E7',
  text_light: '#fff',
  text_dark: '#212B36',
  bg_screen: '#F7FBFD',
  gray: '#637381',
  grayInput: '#C5CED6',
  opacityColor,
};
