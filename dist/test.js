"use strict";

var _vueE = require("./vue-e164.js");

var _vue = _interopRequireDefault(require("vue"));

var _vueE2 = _interopRequireDefault(require("./vue-e164"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-duplicates
var assert = require('assert');

_vue.default.use(_vueE2.default);

var tests = [{
  plus: true,
  brackets: true,
  space: true,
  dash: false,
  areaCode: true,
  answer: '+7 (999) 975 70 65',
  pattern: '+ C () _'
}, {
  plus: false,
  brackets: false,
  space: false,
  dash: false,
  areaCode: true,
  answer: '79999757065',
  pattern: 'C'
}, {
  plus: true,
  brackets: false,
  space: false,
  dash: false,
  areaCode: true,
  answer: '+79999757065',
  pattern: '+ C'
}, {
  plus: true,
  brackets: true,
  space: false,
  dash: false,
  areaCode: true,
  answer: '+7(999)9757065',
  pattern: '+ C ()'
}, {
  plus: false,
  brackets: true,
  space: true,
  dash: false,
  areaCode: true,
  answer: '7 (999) 975 70 65',
  pattern: 'C () _'
}, {
  plus: false,
  brackets: false,
  space: true,
  dash: false,
  areaCode: true,
  answer: '7 999 975 70 65',
  pattern: 'C _'
}, {
  plus: false,
  brackets: true,
  space: false,
  dash: false,
  areaCode: true,
  answer: '7(999)9757065',
  pattern: 'C ()'
}, {
  plus: true,
  brackets: false,
  space: true,
  dash: false,
  areaCode: true,
  answer: '+7 999 975 70 65',
  pattern: '+ C _'
}, {
  plus: true,
  brackets: true,
  space: true,
  dash: true,
  areaCode: true,
  answer: '+7 (999) 975 - 70 - 65',
  pattern: '+ C () _ -'
}, {
  plus: true,
  brackets: true,
  space: false,
  dash: true,
  areaCode: true,
  answer: '+7(999)975-70-65',
  pattern: '+ C () -'
}, {
  plus: true,
  brackets: false,
  space: true,
  dash: true,
  areaCode: true,
  answer: '+7 999 975 - 70 - 65',
  pattern: '+ C _ -'
}, {
  plus: false,
  brackets: true,
  space: true,
  dash: true,
  areaCode: true,
  answer: '7 (999) 975 - 70 - 65',
  pattern: '() C _ -'
}, {
  plus: true,
  brackets: false,
  space: true,
  dash: true,
  areaCode: true,
  answer: '+7 999 975 - 70 - 65',
  pattern: '+ C _ -'
}, {
  plus: true,
  brackets: true,
  space: true,
  dash: true,
  areaCode: false,
  answer: '(999) 975 - 70 - 65',
  pattern: '+ () _ -'
}, {
  plus: true,
  brackets: true,
  space: false,
  dash: true,
  areaCode: false,
  answer: '(999)975-70-65',
  pattern: '+ () -'
}, {
  plus: true,
  brackets: false,
  space: true,
  dash: true,
  areaCode: false,
  answer: '999 975 - 70 - 65',
  pattern: '+ _ -'
}, {
  plus: false,
  brackets: true,
  space: true,
  dash: true,
  areaCode: false,
  answer: '(999) 975 - 70 - 65',
  pattern: '() _ -'
}, {
  plus: true,
  brackets: false,
  space: true,
  dash: true,
  areaCode: false,
  answer: '999 975 - 70 - 65',
  pattern: '+ _ -'
}];
var testPhones = ['79999757065', '7-999-975-7065', '7-999-975-70-65', '7-(999)-975-70-65', '7(999)975-70-65', '7 999 975 70 65', '7 (999) 975 70 65', '+79999757065', '+7-999-975-7065', '+7-999-975-70-65', '+7-(999)-975-70-65', '+7(999)975-70-65', '+7 999 975 70 65', '7 (999) 975 70 65'];
describe('Test core function {filter}', function () {
  testPhones.forEach(function (phone) {
    describe("Test different phone numbers : ".concat(phone), function () {
      describe("Using different options ", function () {
        tests.forEach(function (item) {
          it("Should return value in correct pattern: ".concat(item.pattern), function () {
            assert.equal((0, _vueE.filter)(phone, item), item.answer);
          });
        });
      });
    });
    it('Should return empty string for empty string', function () {
      assert.equal((0, _vueE.filter)('', {
        plus: true,
        brackets: false,
        space: true,
        dash: false,
        areaCode: true
      }), '');
    });
  });
});
describe('Vue global function { $filterPhone } must be equal to core function { filter }', function () {
  it('function { filter } should be equal to { $filterPhone }', function () {
    assert.equal(_vueE.filter.toString(), _vue.default.prototype.$filterPhone.toString());
  });
});
