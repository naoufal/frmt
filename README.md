```
      _/_/                              _/
   _/      _/  _/_/  _/_/_/  _/_/    _/_/_/_/
_/_/_/_/  _/_/      _/    _/    _/    _/
 _/      _/        _/    _/    _/    _/
_/      _/        _/    _/    _/      _/_/
```
frmt.js
====

A utility library to format strings.

[![Build Status](https://travis-ci.org/naoufal/frmt.svg?branch=master)](https://travis-ci.org/naoufal/frmt)
[![NPM Version](https://img.shields.io/npm/v/frmt.svg)](https://www.npmjs.org/package/frmt)

## Install

```shell
npm i --save frmt
```

## Documentation

### Functions
- [`cardNumber`](https://github.com/naoufal/frmt#cardnumbercard_number)
- [`expiry`](https://github.com/naoufal/frmt#expiryexpiry_number)
- [`expiryToDate`](https://github.com/naoufal/frmt#expirytodateformatted_expiry)
- [`cvc`](https://github.com/naoufal/frmt#cvccvc-card_number)


## Functions

### cardNumber(card_number)
__Arguments__
- `card_number` - The input card number to be formatted.

__Examples__
```js
frmt.cardNumber('4111111111111111'); // => 4111 1111 1111 1111
frmt.cardNumber('378282246310005');  // => 3782 822463 10005
```
<hr>

### expiry(expiry_number)
__Arguments__
- `expiry_number` - The inputted expiry number to be formatted into `MM / YYYY` or `MM / YY`.

__Examples__
```js
frmt.expiry('1114');   // => 11 / 14
frmt.expiry('112014'); // => 11 / 2014
```
<hr>

### expiryToDate(formatted_expiry)
__Arguments__
- `formatted_expiry` - The output of the [expiry](/#expiry) method.

__Examples__
```js
frmt.expiryToDate('11 / 14');   // => 2014-11-01
frmt.expiryToDate('11 / 2014'); // => 2014-11-01
```
<hr>

### cvc(cvc, card_number)
__Arguments__
- `cvc` - The CVC to be formatted.
- `card_number` - The card number to know which rules to apply on the cvc.

__Examples__
```js
frmt.cvc('1234', '378282246310005');  // => 1234
frmt.cvc('1234', '4111111111111111'); // => 123
```
