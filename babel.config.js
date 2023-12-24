module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@brand': './src/brand',
        },
      },
    ],
  ],
};
