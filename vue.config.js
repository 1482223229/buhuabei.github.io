const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath: "/",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/styles/common.less")],
    },
  },
  chainWebpack: (config) => {
    // 项目标题
    config.plugin("html").tap((args) => {
      args[0].title = "huabei-wz";
      return args;
    });
    config.resolve.alias.set("@", path.resolve("src"));
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      //GZIP压缩
      return {
        plugins: [
          new CompressionWebpackPlugin({
            test: /\.(js|css)(\?.*)?$/i,
          }),
        ],
      };
    }
    return {
      resolve: {
        alias: {
          views: "@/views",
          assets: "@/assets",
          components: "@/components",
        },
      },
    };
  },
  devServer: { disableHostCheck: true },
};
