/* @flow */
/**
  * vue-e164
  * (c) 2018 Stanislav Mihaylov
  * @license MIT
  */

const vueE164 = {}

vueE164.install = function (Vue: any, options: {plus: boolean, brackets: boolean, space: boolean}) {
  function standart (string: string): string {
    let newString: any = string.match(/[0-9]{0,14}/g)
    if (newString === null) {
      return ''
    }
    return `+${newString.join('').substring(0, 15)}`
  }
  function filter (value: string, _options: {plus: boolean, brackets: boolean, space: boolean}) {
    if (!value) return ''
    let e164: string = standart(value)
    if (_options.plus && !_options.brackets && !_options.space) {
      return e164
    } else if (!_options.plus && !_options.brackets && !_options.space) {
      return e164.split('+').join('')
    } else if (_options.plus && _options.brackets && !_options.space) {
      return `+${e164.substr(1, 1)}(${e164.substr(2, 3)})${e164.substring(5)}`
    } else if (_options.plus && !_options.brackets && _options.space) {
      return `+${e164.substr(1, 1)} ${e164.substr(2, 3)} ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (_options.plus && _options.brackets && _options.space) {
      return `+${e164.substr(1, 1)} (${e164.substr(2, 3)}) ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (!_options.plus && _options.brackets && _options.space) {
      return `${e164.substr(1, 1)} (${e164.substr(2, 3)}) ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (!_options.plus && !_options.brackets && _options.space) {
      return `${e164.substr(1, 1)} ${e164.substr(2, 3)} ${e164.substr(5, 3)} ${e164.substr(8, 2)} ${e164.substr(10, 2)}`
    } else if (!_options.plus && _options.brackets && !_options.space) {
      return `${e164.substr(1, 1)}(${e164.substr(2, 3)})${e164.substring(5)}`
    } else {
      return ''
    }
  }
  Vue.filter('phone', function (value: string) :string {
    return filter(value, options)
  })
  Vue.directive('phone', function (el, binding) {
    el.innerHTML = filter(el.innerHTML, binding.value)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueE164)
}

export default vueE164
