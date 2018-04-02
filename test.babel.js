import { filter } from './dist/vue-e164.js'

var tests = [
    {
        plus: true,
        brackets: true,
        space: true,
        answer: '+7 (999) 975 70 65'
    },
    {
        plus: false,
        brackets: true,
        space: true,
        answer: '7 (999) 975 70 65'
    }
]

tests.forEach((item) => {
  expect(filter('79999757065')).toBe(item.answer)
})
