'use strict';

var path = require('path'),
    express = require('express'),
    app = module.exports = express();
    
app.configure(function () {
    app.set('env', process.env.NODE_ENV || 'development');
    app.set('port', process.env.PORT || 5000);
    app.use(express.compress());
    app.use(express.cookieParser()); 
});

app.get('/', function(req, res) {
    res.end('flea market');
});

if (require.main === module) {
    app.listen(app.get('port'), function () {
            console.log('[%s] Express server listening on port %d',
                app.get('env').toUpperCase(), app.get('port'));
        });
}