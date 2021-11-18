const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

const ImageLoader = {
  test: /\.(svg)$/i,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'images/'
  }
};

const FontLoader = {
  test: /\.(ttf|eot|woff2?|png|jpe?g|gif|ico)$/,
  loader: 'url-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'fonts/'
  },
};

const CSSLoader = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        config: {
          path: path.resolve('./webpack/'),
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sassOptions: {
          importer: globImporter(),
          outputStyle: 'expanded',
          sourceMap: true,
        },
      },
    },
  ],
};

const SVGSpriteLoader = {
  test: /icons\/.*\.svg$/, // your icons directory
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/images/icons.svg',
  },
};

module.exports = {
  CSSLoader,
  SVGSpriteLoader,
  ImageLoader,
  FontLoader,
};
