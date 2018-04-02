'use strict';

var _vueE = require('./vue-e164.js');

var assert = require('assert');

var tests = [{
  plus: true,
  brackets: true,
  space: true,
  answer: '+7 (999) 975 70 65',
  pattern: '+ () _'
}, {
  plus: false,
  brackets: false,
  space: false,
  answer: '79999757065',
  pattern: 'all options false'
}, {
  plus: true,
  brackets: false,
  space: false,
  answer: '+79999757065',
  pattern: '+'
}, {
  plus: true,
  brackets: true,
  space: false,
  answer: '+7(999)9757065',
  pattern: '+ ()'
}, {
  plus: false,
  brackets: true,
  space: true,
  answer: '7 (999) 975 70 65',
  pattern: '() _'
}, {
  plus: false,
  brackets: false,
  space: true,
  answer: '7 999 975 70 65',
  pattern: '_'
}, {
  plus: false,
  brackets: true,
  space: false,
  answer: '7(999)9757065',
  pattern: '()'
}, {
  plus: true,
  brackets: false,
  space: true,
  answer: '+7 999 975 70 65',
  pattern: '+ _'
}];

describe('Using different options', function () {
  tests.forEach(function (item) {
    it('Should return value in correct pattern: ' + item.pattern, function () {
      assert.equal((0, _vueE.filter)('79999757065', item), item.answer);
    });
  });
  it('Should return empty string for empty string', function () {
    assert.equal((0, _vueE.filter)('', {
      plus: true,
      brackets: false,
      space: true
    }), '');
  });
});
