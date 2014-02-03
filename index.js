
var nconf = require('nconf');

// overrides: cli -> env -> file
nconf.argv().env().file({file: __dirname + '/../../config.json'});

nconf.vet = function(key) {
  var val = nconf.get(key);
  if (!val) {
    throw new Error('Config [' + key + '] is invalid.');
  }
  return val;
}

module.exports = nconf;

