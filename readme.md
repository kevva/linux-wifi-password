# linux-wifi-password [![Build Status](https://travis-ci.org/kevva/linux-wifi-password.svg?branch=master)](https://travis-ci.org/kevva/linux-wifi-password)

> Get current wifi password on Linux


## Install

```
$ npm install --save linux-wifi-password
```


## Usage

```js
var linuxWifiPassword = require('linux-wifi-password');

linuxWifiPassword(function (err, password) {
	console.log(password);
	//=> 'johndoesecretpassword'
});
```


## API

### linuxWifiPassword([name], callback)

#### name

Type: `string`

Get the wifi password for a specified *known* network.

#### callback(err, password)

Type: `function`

The callback will return the password to the network.

## CLI
```
$ npm install --global linux-wifi-password
```

```
linux-wifi-password --help

Usage
	Get password of SSID:
		$ linux-wifi-password <ssid>
	Get wifi password of current SSID
		$ linux-wifi-password --current

	Example
		$ linux-wifi-password home-wi-fi
		8011435002
```

## License

MIT © [Kevin Martensson](http://github.com/kevva)
