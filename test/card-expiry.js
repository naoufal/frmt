var frmt   = require('../index');
var assert = require('chai').assert;



describe('Card Expiry', function() {
  var EXPIRY_2 = '11';
  var EXPIRY_4 = '1114';
  var EXPIRY_6 = '112014';

  it('should not format expiry if less than 2 digits', function() {
    var frmt_expiry = frmt.expiry(EXPIRY_2);

    assert.strictEqual(frmt_expiry, '11');
  });

  it('should format 4 digit dates to MM / YY format', function() {
    var frmt_expiry = frmt.expiry(EXPIRY_4);

    assert.strictEqual(frmt_expiry, '11 / 14');
  });

  it('should format 6 digit dates to MM / YYYY format', function() {
    var frmt_expiry = frmt.expiry(EXPIRY_6);

    assert.strictEqual(frmt_expiry, '11 / 2014');
  });

  it('should not format expiry to date if it isn\'t a formatted 4/6 digit date', function() {
    var frmt_expiry = frmt.expiryToDate('11');

    assert.instanceOf(frmt_expiry, Error);
  });

  it('should format 4 digit expiry to YYYY-MM-DD format', function() {
    var frmt_expiry = frmt.expiryToDate('11 / 14');

    assert.strictEqual(frmt_expiry, '2014-11-01');
  });

  it('should format 6 digit expiry to YYYY-MM-DD format', function() {
    var frmt_expiry = frmt.expiryToDate('11 / 2014');

    assert.strictEqual(frmt_expiry, '2014-11-01');
  });
});

