const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            shared: path.resolve(__dirname, "./src/shared"),
            config: path.resolve(__dirname, "./src/config"),
          },
        },
      ],
    ],
  };
};
