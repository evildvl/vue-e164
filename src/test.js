import { filter } from './vue-e164.js'
const assert = require('assert')

const tests = [
  {
    plus: true,
    brackets: true,
    space: true,
    dash: false,
    areaCode: true,
    answer: '+7 (999) 975 70 65',
    pattern: '+ C () _'
  },
  {
    plus: false,
    brackets: false,
    space: false,
    dash: false,
    areaCode: true,
    answer: '79999757065',
    pattern: 'C'
  },
  {
    plus: true,
    brackets: false,
    space: false,
    dash: false,
    areaCode: true,
    answer: '+79999757065',
    pattern: '+ C'
  },
  {
    plus: true,
    brackets: true,
    space: false,
    dash: false,
    areaCode: true,
    answer: '+7(999)9757065',
    pattern: '+ C ()'
  },
  {
    plus: false,
    brackets: true,
    space: true,
    dash: false,
    areaCode: true,
    answer: '7 (999) 975 70 65',
    pattern: 'C () _'
  },
  {
    plus: false,
    brackets: false,
    space: true,
    dash: false,
    areaCode: true,
    answer: '7 999 975 70 65',
    pattern: 'C _'
  },
  {
    plus: false,
    brackets: true,
    space: false,
    dash: false,
    areaCode: true,
    answer: '7(999)9757065',
    pattern: 'C ()'
  },
  {
    plus: true,
    brackets: false,
    space: true,
    dash: false,
    areaCode: true,
    answer: '+7 999 975 70 65',
    pattern: '+ C _'
  },
  {
    plus: true,
    brackets: true,
    space: true,
    dash: true,
    areaCode: true,
    answer: '+7 (999) 975 - 70 - 65',
    pattern: '+ C () _ -'
  },
  {
    plus: true,
    brackets: true,
    space: false,
    dash: true,
    areaCode: true,
    answer: '+7(999)975-70-65',
    pattern: '+ C () -'
  },
  {
    plus: true,
    brackets: false,
    space: true,
    dash: true,
    areaCode: true,
    answer: '+7 999 975 - 70 - 65',
    pattern: '+ C _ -'
  },
  {
    plus: false,
    brackets: true,
    space: true,
    dash: true,
    areaCode: true,
    answer: '7 (999) 975 - 70 - 65',
    pattern: '() C _ -'
  },
  {
    plus: true,
    brackets: false,
    space: true,
    dash: true,
    areaCode: true,
    answer: '+7 999 975 - 70 - 65',
    pattern: '+ C _ -'
  },
    {
        plus: true,
        brackets: true,
        space: true,
        dash: true,
        areaCode: false,
        answer: '(999) 975 - 70 - 65',
        pattern: '+ () _ -'
    },
    {
        plus: true,
        brackets: true,
        space: false,
        dash: true,
        areaCode: false,
        answer: '(999)975-70-65',
        pattern: '+ () -'
    },
    {
        plus: true,
        brackets: false,
        space: true,
        dash: true,
        areaCode: false,
        answer: '999 975 - 70 - 65',
        pattern: '+ _ -'
    },
    {
        plus: false,
        brackets: true,
        space: true,
        dash: true,
        areaCode: false,
        answer: '(999) 975 - 70 - 65',
        pattern: '() _ -'
    },
    {
        plus: true,
        brackets: false,
        space: true,
        dash: true,
        areaCode: false,
        answer: '999 975 - 70 - 65',
        pattern: '+ _ -'
    }
]

let testPhones = [
    '79999757065',
    '7-999-975-7065',
    '7-999-975-70-65',
    '7-(999)-975-70-65',
    '7(999)975-70-65',
    '7 999 975 70 65',
    '7 (999) 975 70 65',
    '+79999757065',
    '+7-999-975-7065',
    '+7-999-975-70-65',
    '+7-(999)-975-70-65',
    '+7(999)975-70-65',
    '+7 999 975 70 65',
    '7 (999) 975 70 65'
]

testPhones.forEach((phone) => {
    describe(`Test different phone numbers : ${phone}`, () => {
        describe(`Using different options: `, () => {
            tests.forEach((item) => {
                it(`Should return value in correct pattern: ${item.pattern}`, () => {
                    assert.equal(filter(phone, item), item.answer)
                })
            })

        })
    })
    it('Should return empty string for empty string', () => {
        assert.equal(filter('', {
            plus: true,
            brackets: false,
            space: true,
            dash: false,
            areaCode: true,
        }), '')
    })
})

