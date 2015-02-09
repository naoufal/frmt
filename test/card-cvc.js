var frmt   = require('../index');
var assert = require('chai').assert;

describe('Card CVC', function() {
  var VISA = '4111111111111111';
  var AMEX = '378282246310005';
  var BAD_CVC = '4B4B';

  it('should allow 4 digit cvc for amex', function() {
    var frmt_cvc = frmt.cvc('1234', AMEX);

    assert.lengthOf(frmt_cvc, 4);
  });

  it('should limit visa cvc to 3 digits', function() {
    var frmt_cvc = frmt.cvc('1234', VISA);

    assert.lengthOf(frmt_cvc, 3);
  });

  it('should remove non-digits from cvc', function() {
    var frmt_cvc = frmt.cvc(BAD_CVC, VISA);

    assert.strictEqual(frmt_cvc, BAD_CVC.replace(/\D/g, ''));
  });
});

