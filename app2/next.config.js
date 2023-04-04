const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const path = require("path");

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    app1: `app1@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "app2",
        library: { type: config.output.libraryTarget, name: "app2" },
        remotes: remotes(isServer),
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        shared: []
      })
    );

    if (!isServer) {
      config.output.publicPath = "http://localhost:3001/_next/";
    }

    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
};
