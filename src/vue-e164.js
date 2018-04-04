/* @flow */
/**
  * vue-e164
  * (c) 2018 Stanislav Mihaylov
  * @license MIT
  */

const vueE164 = {}

function standart (string/*: string */)/*: string */ {
  let newString/*: any */ = string.match(/[0-9]{0,14}/g)
  if (newString === null) {
    return ''
  }
  return `+${newString.join('').substring(0, 15)}`
}

export function filter (value/*: string */, _options/*: {plus: boolean, brackets: boolean, space: boolean, dash: boolean, areaCode: boolean} */) {
  if (!value) return ''
  let reg = /^(\+)(\d)(\d{2,3})(\d{3})(\d{2})(\d{2})/ig
  let plus = (_options.plus) ? '+' : ''
  let brackets = (_options.brackets) ? {l: '(', r: ')'} : {l: '', r: ''}
  let space = (_options.space) ? ' ' : ''
  let dash = (_options.dash) ? '-' : ''
  let e164 = standart(value)
  let ph = reg.exec(e164)
  let areaCode = (_options.areaCode) ? ph[2] : ''
  return `${(_options.areaCode) ? plus: ''}${areaCode}${(_options.areaCode) ? space : ''}${brackets.l}${ph[3]}${brackets.r}${space}${ph[4]}${space}${dash}${(_options.dash) ? space : ''}${ph[5]}${space}${dash}${(_options.dash) ? space : ''}${ph[6]}`
}

vueE164.install = function (Vue /*: any */, options/*: {plus: boolean, brackets: boolean, space: boolean, dash: boolean, areaCode: boolean} */) {
  Vue.filter('phone', function (value/*: string */) /*: string */ {
    return filter(value, options)
  })
  Vue.directive('phone', function (el, binding) {
    el.innerHTML = filter(el.innerHTML, binding.value)
  })
  Vue.prototype.$filterPhone = filter
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueE164)
}

export default vueE164
