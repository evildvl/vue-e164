import 'babel-polyfill'
import { filter } from '../vue-e164.js'
const assert = require('assert')

const tests = [
  {
    plus: true,
    brackets: true,
    space: true,
    answer: '+7 (999) 975 70 65',
    pattern: '+ () _'
  },
  {
    plus: false,
    brackets: false,
    space: false,
    answer: '79999757065',
    pattern: 'all options false'
  },
  {
    plus: true,
    brackets: false,
    space: false,
    answer: '+79999757065',
    pattern: '+'
  },
  {
    plus: true,
    brackets: true,
    space: false,
    answer: '+7(999)9757065',
    pattern: '+ ()'
  },
  {
    plus: false,
    brackets: true,
    space: true,
    answer: '7 (999) 975 70 65',
    pattern: '() _'
  },
  {
    plus: false,
    brackets: false,
    space: true,
    answer: '7 999 975 70 65',
    pattern: '_'
  },
  {
    plus: false,
    brackets: true,
    space: false,
    answer: '7(999)9757065',
    pattern: '()'
  },
  {
    plus: true,
    brackets: false,
    space: true,
    answer: '+7 999 975 70 65',
    pattern: '+ _'
  }
]

describe('Using different options', () => {
  tests.forEach((item) => {
    it(`Should return value in correct pattern: ${item.pattern}`, () => {
      assert.equal(filter('79999757065', item), item.answer)
    })
  })
})
