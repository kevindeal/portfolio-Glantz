/* eslint-disable no-underscore-dangle */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ImageminPlugin = require('imagemin-webpack-plugin').default;
const _SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const _BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const glob = require('glob');

const imagePath = path.resolve(__dirname, '../assets/images');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: 'style.css',
});

const ImageminPlugin = new _ImageminPlugin({
  disable: process.env.NODE_ENV !== 'production',
  externalImages: {
    context: imagePath,
    sources: glob.sync(path.resolve(imagePath, '**/*.{png,jpg,gif,svg}')),
    destination: imagePath,
  },
});

const SpriteLoaderPlugin = new _SpriteLoaderPlugin({
  plainSprite: true,
});

const ProgressPlugin = new webpack.ProgressPlugin();

const BrowserSyncPlugin = new _BrowserSyncPlugin({
  host: 'localhost',
  port: 3306,
  proxy: 'http://glantz.lndo.site',
  injectCss: true,
  files: [
    '**/*.twig',
    '**/*.css',
    '**/*.yml',
    '**/*.json',
    '**/*.js',
    '**/*.php',
    ]
});

const StyleLintPlugin = new _StyleLintPlugin({
  failOnError: true,
  syntax: 'scss',
});

const FriendlyErrorsWebpackPlugin = new _FriendlyErrorsWebpackPlugin();

module.exports = {
  ProgressPlugin,
  MiniCssExtractPlugin,
  ImageminPlugin,
  SpriteLoaderPlugin,
  BrowserSyncPlugin,
  StyleLintPlugin,
  FriendlyErrorsWebpackPlugin,
  CleanWebpackPlugin: new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [],
    cleanAfterEveryBuildPatterns: ['js/**', '!js'],
  })
};
