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
          '@infra': './src/infra',
          '@domain': './src/domain',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@theme': './src/theme',
          '@brand': './src/brand',
          '@api': './src/api',
          '@types': './src/types',
          '@utils': './src/utils',
          '@test': './src/test',
        },
      },
    ],
  ],
};
