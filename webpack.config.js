module.exports = [
  {
    entry: './style.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js'
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css'
            }
          },
          'extract-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/',
          outputPath: 'public/',
          objectAssign: 'Object.assign'
        }
      }]
    }
  },
  {
    entry: './app.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      }]
    }
  }
];
