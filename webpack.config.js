/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    hotOnly: true,
  },
  plugins: [
    new BundleAnalyzerPlugin(
      {
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false },
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'ToDo List',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
  ],
};
