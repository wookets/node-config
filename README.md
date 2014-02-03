
# Why?

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


```

## config.json

{project_root}/config.json

