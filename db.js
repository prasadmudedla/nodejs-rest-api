var mongoose = require('mongoose');
const config = require('./config/config.js');

mongoose.connect(global.gConfig.database, {
    useNewUrlParser: true
});