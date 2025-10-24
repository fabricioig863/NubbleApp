module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
