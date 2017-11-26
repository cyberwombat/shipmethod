Shipping Tracker
================

NodeJS module for returning shipping carrier based on tracking info. Currently supports UPS, USPS and FedEx.

## Install
```
npm i shipmethod
yarn add shipmethod
```

## Usage
```
const { getCarrier } = require('shipmethod')
const carrier = getCarrier('XXXXXXXXXXXXXXX') // Your tracking number
console.log(carrier) // Ex: 'UPS'
```

## Changelog

### 2.0.0
- Breaking API changes.



