const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "app1",
        library: { type: config.output.libraryTarget, name: "app1" },
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./nav": "./src/components/nav",
          "./add": "./src/utils/add",
          "./multiplyByTwo": "./src/utils/multiplyByTwo",
        },
        shared: [],
      })
    );

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  },
};
