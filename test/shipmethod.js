var ShipMethod = require('../lib/shipmethod');

// Misc code from carriers
var fixtures = [
  { carrier: 'UPS', number: '1ZX6797w0395652653'},
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
  { carrier: 'USPS', number: 'LJ893369662US' },
];


describe('Shipping Method', function(){

  var shipper = null;

  beforeEach(function(done) {
    shipper = new ShipMethod();
    done();
  });

  describe('getCarrier', function() {
    fixtures.forEach(function(f) {
      it('should return ' + f.carrier + ' when given tracking #' + f.number, function(done) {
        if(f.carrier === shipper.getCarrier(f.number)) {
          done();
        }
      });
    });
  });
});
