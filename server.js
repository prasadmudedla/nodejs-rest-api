var app = require('./app');
var port = process.env.PORT || 3000;

process.env.NODE_ENV = 'development';

var server = app.listen(port, _ => {
    console.log(`Express server listening on port ${port}`);
});