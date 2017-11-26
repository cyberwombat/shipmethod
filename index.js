const getCarrier = track => {
  let carrier
  if (track) {
    track = track.replace(/\s+/g, '')

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

    carrier = carriers.find(c => track.match(c.regex))
  }
  return carrier ? carrier.name : false
}

exports.getCarrier = getCarrier
