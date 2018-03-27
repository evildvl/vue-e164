/**
  * vue-e164
  * (c) 2018 Stanislav Mihaylov
  * @license MIT
  */

const vueE164 = {}

vueE164.install = function (Vue, options) {
  function standart (string) {
    let newString = string.match(/[0-9]{0,14}/g)
    if (newString === null) {
      return ''
    }
    return `+${newString.join('').substring(0, 15)}`
  }
  Vue.filter('phone', function (value) {
    if (!value) return ''
    let e164 = standart(value)
    if (options.plus && !options.brackets && !options.space) {
      return e164
    } else if (!options.plus && !options.brackets && !options.space) {
      return e164.split('+').join('')
    } else if (options.plus && options.brackets && !options.space) {
      return `+${e164.substr(1, 1)}(${e164.substr(2, 3)})${e164.substring(5)}`
    } else if (options.plus && !options.brackets && options.space) {
      return `+${e164.substr(1, 1)} ${e164.substr(2, 3)} ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (options.plus && options.brackets && options.space) {
      return `+${e164.substr(1, 1)} (${e164.substr(2, 3)}) ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (!options.plus && options.brackets && options.space) {
      return `${e164.substr(1, 1)} (${e164.substr(2, 3)}) ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (!options.plus && !options.brackets && options.space) {
      return `${e164.substr(1, 1)} ${e164.substr(2, 3)} ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (!options.plus && options.brackets && !options.space) {
      return `${e164.substr(1, 1)}(${e164.substr(2, 3)})${e164.substring(5)}`
    } else {
      return ''
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueE164)
}

export default vueE164
