const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    console.log(`dir => `, __dirname);
    return config;
  },
};
