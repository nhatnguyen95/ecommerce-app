module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          components: './src/components',
          hooks: './src/hooks',
          navigation: './src/navigation',
          store: './src/store',
          screens: './src/screens',
          services: './src/services',
          types: './src/types',
          configs: './src/configs',
          assets: './src/assets',
          utils: './src/utils',
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
