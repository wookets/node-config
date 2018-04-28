
# Why?

[![Greenkeeper badge](https://badges.greenkeeper.io/wookets/node-config.svg)](https://greenkeeper.io/)

This is a simple config loader for node applications built atop nconf. It uses nconf
to look for variables from the CLI (argv), ENV (process.env), and a config.json file in the root of the application.


## Install

In package.json, under dependencies, you can do...

```"config": "https://github.com/wookets/node-config/0.1.2"```

## Usage

```
var config = require('config');

config.get('SOME:URL'); // same as nconf

config.vet('SOME:URL'); // ADDED in 0.1.2, will throw an Error if value of key is undefined, else return value

config.git('SOME:URL', 'http://www.google.com'); // ADDED in 0.1.3, will get and init the value if needed
```

## config.json

{project_root}/config.json

