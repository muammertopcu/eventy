module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@types': './src/types',
          '@components': './src/components',
          '@pages': './src/pages',
          '@redux': './src/redux',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
