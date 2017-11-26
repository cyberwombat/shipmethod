const test = require('ava')

// Misc code from carriers
const fixtures = [
  { carrier: 'UPS', number: '1ZX6797w0395652653' },
  { carrier: 'USPS', number: 'EA 000 000 000 US' },
  { carrier: 'USPS', number: 'EC 000 000 000 US' },
  { carrier: 'USPS', number: 'CP 000 000 000 US' },
  { carrier: 'USPS', number: '82 000 000 00' },
  { carrier: 'USPS', number: 'RA 000 000 000 US' },
  { carrier: 'USPS', number: '0300 0000 0000 0000 0000' },
  { carrier: 'USPS', number: '9405 5015 4800 7115 4804 21' },
  { carrier: 'USPS', number: '7000 0000 0000 0000 0000' },
  { carrier: 'USPS', number: '2300 0000 0000 0000 0000' },
  { carrier: 'UPS', number: '1Z 999 AA1 01 2345 6784' },
  { carrier: 'FedEx', number: '817456723444' },
  { carrier: 'FedEx', number: '817456723444222' },
  { carrier: 'USPS', number: 'LJ893369662US' }
]

test('getCarrier()', t => {
  const { getCarrier } = require('./index.js')
  fixtures.forEach(f => {
    t.is(f.carrier, getCarrier(f.number))
  })
})

test('getCarrierLink()', t => {
  const { getCarrierLink } = require('./index.js')
  const link = getCarrierLink('usps', 'foo')
  t.is(link, 'https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=foo')
})

test('getCarrierLink() with invalid carrier', t => {
  const { getCarrierLink } = require('./index.js')
  const link = getCarrierLink('foo', 'bar')
  t.falsy(link)
})