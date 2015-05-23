#!/usr/bin/env node
'use strict';
var meow = require('meow');
var linuxWifiPassword = require('./');

var cli = meow({
	help: [
		'Usage',
		'Get password of SSID:',
		'  $ linuxWifiPassword <ssid>',
		'Get wifi password of current SSID',
		'  $ linuxWifiPassword --current',
		'',
		'Example',
		'  $ linuxWifiPassword home-wi-fi',
		'  8011435002',
	].join('\n')
});

var ssid = cli.input[0];
var isCurrent =  (cli.flags.current);

function output(err, password) {
	console.log(password || err);
}

if (!ssid && process.stdin.isTTY && !isCurrent) {
	cli.showHelp();
} else if (isCurrent || output) {
	linuxWifiPassword.call(null, (isCurrent) ? output : ssid, output);
}
