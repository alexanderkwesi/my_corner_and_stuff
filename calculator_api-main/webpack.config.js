// webpack.config.js

const webpack = require("webpack");

module.exports = {
  // ...other configurations
  plugins: [
    // Add this plugin to disable React DevTools in production
    new webpack.DefinePlugin({
      "process.env.REACT_APP_DISABLE_DEV_TOOLS": JSON.stringify(
        process.env.NODE_ENV === "production"
      ),
    }),
    // ...other plugins
  ],
  // ...other configurations
};
