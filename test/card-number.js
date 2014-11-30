var frmt   = require('../index');
var assert = require('chai').assert;



describe('Card Number', function() {
  var BAD_CC = '4111 abcd !@#$ %^&*';

  it('should remove non-digits', function() {
    var frmt_num = frmt.cardNumber(BAD_CC);

    assert.strictEqual(frmt_num, BAD_CC.replace(/\D/g, ''));
  });
});

