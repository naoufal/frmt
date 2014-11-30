var _ = require('lodash');

var DEFAULT_FORMAT = /(\d{1,4})/g;
var cards         = require('../data/cards');



var payment = {
  getCardFromNumber: function(card_number) {
    card_number = card_number.replace(/\D/g, '');

    var card = _.find(cards, function(card) {
      if (card.pattern.test(card_number)) {
        return card;
      }
    });

    return card;
  },

  getCardFromType: function(card_type) {
    var card = _.find(cards, {type: card_type});

    return card;
  },

  cardNumber: function(value) {
    // Remove non-digit characters
    value = value.replace(/\D/g, '');

    // Get card type
    var card = this.getCardFromNumber(value);

    // Remove extra characters
    var limit;
    if (card) {
      limit = card.length[card.length.length -1];
    } else {
      limit = 16;
    }
    value = value.slice(0, limit || 16);

    // Format Value
    var formatted_value;
    if (card) {
      formatted_value = value.match(card.format).join(' ');

      if (card.type === 'amex') {
        formatted_value = formatted_value.substr(formatted_value.indexOf(' ') + 1);
      }

    } else {
      formatted_value = value.match(DEFAULT_FORMAT).join(' ');
    }

    return formatted_value;
  },

  cardNumberNoSpaces: function(value) {
    var unformatted_value = value.replace(' ', '');

    return unformatted_value;
  },

  expiry: function(value) {
    // Remove non-digit characters
    value = value.replace(/\D/g, '');

    if (value.length > 2) {
      value = value.slice(0, 6);
      value = value.match(/(\d{1,2})(\d{1,4})/).join(' / ');
      value = value.substr(value.indexOf(' ') + 3);
    }

    return value;
  },

  expiryToDate: function(value) {
    if ((value.length < 7) || (value.length === 8) || (value.length > 9)) {
      return new Error('Invalid Expiry Date');
    }
    value = value.split(' / ');

    var day   = '01';
    var month = value[0];
    var year  = value[1];

    if (year.length === 2) {
      year = '20' + year;
    }

    var expiry_date = [
      year,
      month,
      day
    ].join('-');

    return expiry_date;
  },

  cvc: function(value, card_number) {
    // Remove non-digit characters
    value = value.replace(/\D/g, '');

    var card = this.getCardFromNumber(card_number);
    var cvc_length = 3;

    if (card) {
      cvc_length = card.cvcLength[card.cvcLength.length - 1];
    }

    value = value.slice(0, cvc_length);

    return value;
  },
};



module.exports = payment;

