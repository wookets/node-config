
This is a very simple (just look at the source) config loader for node applications. It uses nconf
to look for variables from the CLI (argv), ENV (process.env), and a config.json file in the root of the application.

## Install

In package.json you can do...

```"config": "git://github.com/wookets/node-config.git#master"```

## Usage

```
var config = require('config');

config.get('aconfigvar');
config.get('something:nested');

```

See [nconf](https://github.com/flatiron/nconf) config for more info.

## config.json

{project_root}/config.json

