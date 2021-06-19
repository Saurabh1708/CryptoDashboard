
const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function (app) {
    app.use(
        'https://api.coinranking.com/v2',
        createProxyMiddleware({
            target: 'http://localhost:3080',
            changeOrigin: true,
        })
    );
};