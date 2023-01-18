# steam-guard
Module to generate Steam authenticator codes using a shared_secret.

## Installation

```sh
npm install steam-guard
```

## Common usage

```js
var SteamGuard = require('steam-guard');

var code = SteamGuard.generateAuthCode('c3RlYW1ndWFyZHN0ZWFtZ3VhcmQ=');

console.log(code);
```
