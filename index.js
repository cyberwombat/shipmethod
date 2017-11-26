const util = require('util')

const urls = {
  ups: 'https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=%s',
  fedex: 'https://www.fedex.com/Tracking?action=track&tracknumbers=%s',
  usps: 'https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=%s'
}

const carriers = [
  {
    name: 'UPS',
    regex: /^1Z[0-9A-Z]{16}$/i
  },
  {
    name: 'UPS',
    regex: /^[\dT]\d{10}$/i
  },
  {
    name: 'USPS',
    regex: /^82\d{8}$/i
  },
  {
    name: 'USPS',
    regex: /^(EA|EC|CP|RA)\d{9}(\D{2})?$/i
  },
  {
    name: 'USPS',
    regex: /^(7\d|03|23|91|94)(\d{18}|\d{20})$/i
  },
  {
    name: 'FedEx',
    regex: /^\d{12}$/i
  },
  {
    name: 'FedEx',
    regex: /^\d{15}$/i
  },
  {
    name: 'USPS',
    regex: /^[A-Za-z]{2}[0-9]+US$/i
  }
]

const getCarrier = track => {
  let carrier
  if (track) {
    track = track.replace(/\s+/g, '')
    carrier = carriers.find(c => track.match(c.regex))
  }
  return carrier ? carrier.name : false
}

const getCarrierLink = (carrier, code) => {
  carrier = String(carrier).toLowerCase()
  return urls[carrier] ? util.format(urls[carrier], code) : false
}

exports.getCarrier = getCarrier
exports.getCarrierLink = getCarrierLink
