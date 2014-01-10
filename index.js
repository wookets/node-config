
var nconf = require('nconf');

// overrides: cli -> env -> file
nconf.argv().env().file({file: __dirname + '/../../config.json'});

module.exports = nconf;

