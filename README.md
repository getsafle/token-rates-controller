# Safle Token Rates Controller

Token rates controller returns the rates of tokens for multiple currencies across multiple tokens on multiple chains.

## Installation

To install this SDK,

```sh
npm install --save @getsafle/token-rates-controller
```

## Initialization

Initialize the constructor,

```js
const safleTokenRatesController = require('@getsafle/token-rates-controller');

const tokenRatesController = new safleTokenRatesController.TokenRatesController();
```

<br>

> Get token conversion rates

<br>

This function takes in an array of token contract addresses and an array of currencies and returns the rates accordingly.

```js
const tokenRates= await tokenRatesController.getTokenRates({ contractAddresses, currencies, chain })
```

* `contractAddresses` - contract address of tokens - type : array 
* `currencies` - Base currencies selected by user - type : array
* `chain` - name of blockchain - type : string [ethereum, polygon supported for now]

<br>

> Supported Chains

* `ethereum`
* `polygon`
* `bsc`
* `avalanche`
* `harmony`
