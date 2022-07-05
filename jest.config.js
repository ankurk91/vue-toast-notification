module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'vue',
    'css'
  ],
  setupFiles: [
    "<rootDir>/__test__/setup.js"
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue2-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__test__/__mocks__/styleMock.js'
  },
  testURL: 'http://localhost'
}
