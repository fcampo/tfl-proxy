var httpProxy = require('http-proxy');

httpProxy.createServer(80, 'whatismyip.com').
          listen(process.env.VCAP_APP_PORT || 3000);
