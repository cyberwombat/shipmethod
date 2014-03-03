function ShipMethod() {

}

ShipMethod.confirmUps = function(track) {
  var sum = 0;
  for (var index=2; index<17; index++) {
    var num = 0;
    var asciiValue = track[index].charCodeAt(0);

    if (asciiValue>=48 && asciiValue<=57) {
      num = parseInt(track[index], 10)
    }
    else {
      num = (asciiValue - 63) % 10
    }

    if (index % 2 == 0) {
      sum += num;
    }
    else {
      sum += (num * 2);
    }
  }

  var checkdigit = 0;
  if ((sum % 10) > 0) {
    checkdigit = 10 - sum % 10;
  }

  if (checkdigit == parseInt(track[17], 10)) {
    return true;
  }

  return false;
};

ShipMethod.prototype = {

  getCarrier: function(track) {

    var carrier;
    if(track) {
      track = track.replace(/\s+/g, '');

      var carriers = [
        {
          name: 'UPS',
          regex: /^1Z[0-9A-Z]{16}$/i,
          confirm: ShipMethod.confirmUps
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
          regex:  /^[A-Za-z]{2}[0-9]+US$/i
        }

      ];

      carriers.every(function(c) {
        if(track.match(c.regex)) {
         if(c.confirm) {
          if (c.confirm(track)) {
           carrier = c.name;
           return false;
          }
         } else {
          carrier = c.name;
          return false;
         }
        } else {
          return true;
        }
      });
    }
    return carrier;
  }
}



module.exports = ShipMethod;
