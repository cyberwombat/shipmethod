Shipping Tracker
================

NodeJS module for returning shipping carrier info (name and tracking page URL) based on tracking number. Currently supports UPS, USPS and FedEx.

## Install
```
npm i shipmethod
yarn add shipmethod
```

## API

#### getCarrier
Returns carrier name based on tracking number.
```
const { getCarrier } = require('shipmethod')
const carrier = getCarrier('XXXXXXXXXXXXXXX') // Your tracking number
console.log(carrier) // Ex: 'UPS'
```

#### getCarrierLink
Returns carrier tracking page url.
```
const { getCarrierLink } = require('shipmethod')
const link = getCarrierLink('ups', XXXXXXXXXXXXXXX') // Your tracking number
console.log(link) // Ex: https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=XXXXXXXXXXXXXXX'
```

## Changelog

#### 2.0.0
- Breaking API changes.

#### 2.1.0
- Added `getCarrierLink`



