var frmt   = require('../index');
var assert = require('chai').assert;

describe('Date of Birth', function() {
  it('should format 4 digit dob to "DD / MM" format', function() {
    var frmt_expiry = frmt.expiry('11');

    assert.strictEqual(frmt_expiry, '11');
  });

  it('should format 4 digit dob to "DD / MM" format', function() {
    var frmt_expiry = frmt.expiry('1104');

    assert.strictEqual(frmt_expiry, '11 / 04');
  });

  it('should format an 8 digit dob to "DD / MM / YY" format', function() {
    var frmt_dob = frmt.dateOfBirth('11041988');

    assert.strictEqual(frmt_dob, '11 / 04 / 1988');
  });

  it('should exclude any input after the 8th character', function() {
    var frmt_dob = frmt.dateOfBirth('110419889');

    assert.strictEqual(frmt_dob, '11 / 04 / 1988');
  });

  it('should prepend a 0 in front of days larger than 3', function() {
    var frmt_dob = frmt.dateOfBirth('9');

    assert.strictEqual(frmt_dob, '09');
  });

  it('should prepend a 0 in front of months larger than 1', function() {
    var frmt_dob = frmt.dateOfBirth('099');

    assert.strictEqual(frmt_dob, '09 / 09');
  });
});

