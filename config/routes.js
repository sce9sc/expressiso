var routes = function(app){


    var routes = require('../routes/index');
    var account = require('../routes/account');
    var heartbeat = require('../routes/heartbeat');
    var admin = require('../routes/admin');


    app.use('/', routes);
    app.use('/Api', routes_api);
    app.use('/account', account);
    app.use('/admin', admin);
    app.use('/hartbeat', hartbeat);

}
module.exports = routes;