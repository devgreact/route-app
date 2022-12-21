const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://devgreact.github.io/route-app/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
