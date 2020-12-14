const webpack = require("webpack");
const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || "/";

module.exports = (config) => {
  config.output.publicPath = PUBLIC_PATH;
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.PUBLIC_PATH": JSON.stringify(process.env.PUBLIC_PATH),
    })
  );
  return config;
};
