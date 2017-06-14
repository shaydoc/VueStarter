var express = require('express'),
    server = express();
   

var proxy = require('express-http-proxy');

    // I extracted some logic to another file; more on that in a moment   
var  webpack = require('webpack'),
     webpackDevMiddleware = require('webpack-dev-middleware'),
     webpackHotMiddleware = require('webpack-hot-middleware'),
     webpackconfig = require('./webpack.config.js'),
     webpackcompiler = webpack(webpackconfig);
 
//enable webpack middleware for hot-reloads in development
function useWebpackMiddleware(app) {
    app.use(webpackDevMiddleware(webpackcompiler, {
        publicPath: webpackconfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    }));
    app.use(webpackHotMiddleware(webpackcompiler, {
        log: console.log
    }));
 
    return app;
}
  
  webpackDevHelper = { useWebpackMiddleware: useWebpackMiddleware };
// ...presumably lots of other stuff...test
 
// we only want hot reloading in development
if (process.env.NODE_ENV !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
    webpackDevHelper.useWebpackMiddleware(server);
} else {
    console.log('PRODUCTION ENVIRONMENT');
 
    //Production needs physical files! (built via separate process)
    //server.use('/js', express.static(__dirname + '/public/js'));
   // server.use(express.static('public')
}
 

// New hostname+path as specified by question:
var apiProxy = proxy('http://localhost:58327/api', {
    forwardPath: function (req, res) {
        return require('url').parse(req.baseUrl).path + '?' + req._parsedUrl.query;
    }
});


server.use("/api/*", apiProxy);
 
  
// ...presumably lots of other stuff...
server.use(express.static('public'))
// Start your express server as usual
server.listen(3000);