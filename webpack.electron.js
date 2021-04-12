const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  target: 'electron-main',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  }
};
