# **Safle Token Rates Controller**

Safle Token Rates Controller SDK


## **Installation and Usage**

> Installation

Install the package by running the command,

`npm install @getsafle/token-rates-controller`

Import the package into your project using,

`const safleTokenRatesController = require('@getsafle/token-rates-controller');`

## **Token Rates Controller**

> Initialising

Initialise the class using,

`const tokenRatesController = new safleTokenRatesController.TokenRatesController();` 

> Methods

Get token conversion rates

`const tokenRates= await tokenRatesController.getTokenRates({ contractAddresses, currency })`

* `contractAddresses` - contract address of tokens - type : array 
* `currency` - Base currency selected by user
