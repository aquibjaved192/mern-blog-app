module.exports = {
 webpack: function (config) {
  config.module.rules.push({
   test: /\.(eot|woff|woff2|ttf|svg|jpg|png|gif)$/,
   use: {
    loader: 'url-loader',
    options: {
     limit: 100000,
     name: '[name].[ext]',
    },
   },
  });
  return config;
 },
};
