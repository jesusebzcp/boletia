module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:@babel/plugin-transform-private-methods', {loose: true}],
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/application',
          '@infra': './src/infrastructure',
          '@pr': './src/presentation',
        },
      },
    ],
    'module:react-native-reanimated/plugin',
  ],
};
