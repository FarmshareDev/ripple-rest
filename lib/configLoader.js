var fs    = require('fs');
var nconf = require('nconf');


/* Load Configuration */
nconf
  .argv()
  .env();

// If config.json exists, load from that
try {
  var config_url = './config.json';
  fs.readFileSync(config_url);
  nconf.file(config_url);
} catch (err) {}

// Load defaults
nconf.defaults({
  "PORT": 5990,
  "NODE_ENV": "development",
  "HOST": "localhost",
  "DATABASE_URL": "postgres://ripple_rest_user:password@localhost:5432/ripple_rest_db",
  "rippled_servers": [
    {
      "host": "s_west.ripple.com",
      "port": 443,
      "secure": true
    }
  ]
});

// Check version loaded
if (nconf.get('config_version') && nconf.get('config_version') !== '0.0.1') {
  throw(new Error('Your config.json file is out of date. Please update to the newest version. See https://github.com/ripple/ripple-rest/tree/master/docs/CONFIG.md for details on the latest version'));
}

if (!/postgres:\/\/([^:]+):?([^@]*)@([^:]+):(\d+)\/?(.*)/.test(nconf.get('DATABASE_URL'))) {
  throw(new Error('Invalid DATABASE_URL: ' + nconf.get('DATABASE_URL')));
}

module.exports = nconf;