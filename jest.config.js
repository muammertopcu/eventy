module.exports = {
  preset: 'react-native',
  modulePaths: ['<rootDir>'],
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    'react-native-autoheight-webview':
      '<rootDir>/__mocks__/AutoHeightWebView.js',
  },
};
