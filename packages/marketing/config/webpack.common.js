const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      // Here we define a loader
      // The goal of a loader is to tell webpack to process some different files as we start to import them into our project
      // The first loader we're going to wire up is babel,
      // babel is going to be in charge of processing all of our code from the ES20, ES15... and into into es5 code
      {
        // Whenver we import a file with the extension of js or mjs we want it to be processed by Babel
        test: /\.m?js$/,
        // Do not try to run Babel on an file from node_modules directory
        exclude: /node_modules/,
        //
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
