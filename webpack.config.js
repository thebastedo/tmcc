const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const env = (process.env.NODE_ENV) || 'development'
const isDev = (x) => env === 'development' ? x : null
const isProd = (x) => env === 'production' ? x : null
const noNulls = (i) => (i)

const buildPath = path.resolve('./dist')
const sourcePath = path.resolve('./src')

let entry = [
  'babel-polyfill',
  isDev('react-hot-loader/patch'),
  isDev('webpack-dev-server/client?http://localhost:8080'),
  isDev('webpack/hot/only-dev-server'),
  './index.js'
].filter(noNulls)

let plugins = [
  isDev(new webpack.NamedModulesPlugin()),
  isDev(new webpack.HotModuleReplacementPlugin()),
  isDev(new webpack.NoEmitOnErrorsPlugin()),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    }
  }),
  new HtmlWebpackPlugin({title: 'TM-CC'})
].filter(noNulls)

module.exports = {
  devtool: (isProd(true)) ? 'source-map' : 'inline-source-map',
  context: sourcePath,
  entry: entry,
  output: {
    path: buildPath,
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', sourcePath]
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: sourcePath,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true
  }
}
