# vue-e164
[![npm version](https://img.shields.io/npm/v/vue-e164.svg?style=flat-square)](https://www.npmjs.org/package/vue-e164)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/evildvl/vue-e164.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/evildvl/vue-e164/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/evildvl/vue-e164.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/evildvl/vue-e164/context:javascript)

> Vue.js filter for phone formatting with E.164 support

Includes:
* Filter
* Global method
* Directive

### Setup

NPM

``` bash
npm install --save vue-e164
```

CDN

```html
<script src="//unpkg.com/vue-e164/dist/vue-e164.js"></script>
```

```javascript
import e164 from 'vue-164'

const options = {
  plus: true,
  brackets: false,
  space: false,
  dash: false,
  areaCode: true
}

Vue.use(e164, options)
```

### Options

**plus** {Boolean} - add plus symbol before area code

**brackets** {Boolean}  - add brackets

**space** {Boolean} - split number by space

**dash** {Boolean} - split number by dash

**areaCode** {Boolean} - set to false to exclude area code and plus

If you want to use E.164 standart, you need this options:

```
{
  plus: true,
  brackets: false,
  space: false,
  dash: false,
  areaCode: true
}
```

### Examples
|  plus | brackets | space | dash  | areaCode |         Result         |
|:-----:|:--------:|:-----:|:-----:|:--------:|:----------------------:|
|  true |   true   |  true | false |   true   |  `+1 (495) 000 99 88`  |
| false |   false  | false | false |   true   |      `14950009988`     |
|  true |   false  | false | false |   true   | `+14950009988` (E.164) |
|  true |   true   | false | false |   true   |    `+1(495)0009988`    |
| false |   true   |  true | false |   true   |   `1 (495) 000 99 88`  |
| false |   false  |  true | false |   true   |    `1 495 000 99 88`   |
| false |   true   | false | false |   true   |     `1(495)0009988`    |
|  true |   false  |  true | false |   true   |   `+1 495 000 99 88`   |
|  true |   true   |  true | true  |   true   |`+1 (495) 000 - 99 - 88`|
|  true |   true   | false | true  |   true   |   `+1(495)000-99-88`   |
|  true |   false  |  true | true  |   true   | `+1 495 000 - 99 - 88` |
| false |   true   |  true | true  |   true   |`1 (495) 000 - 99 - 88` |
|  true |   false  |  true | true  |   true   | `+1 495 000 - 99 - 88` |
|  true |   true   |  true | true  |  false   |  `(495) 000 - 99 - 88` |
|  true |   true   | false | true  |  false   |    `(495)000-99-88`    |
|  true |   false  |  true | true  |  false   |   `495 000 - 99 - 88`  |
| false |   true   |  true | true  |  false   | `(495) 000 - 99 - 88`  |
|  true |   false  |  true | true  |  false   |  `495 000 - 99 - 88`   |

### Usage

vue-e164 adds `phone` filter, and can be used as any other vue.js filter.
```
<template>
  <p>{{ string | phone }}</p>
</template>
```

If you need to use different options for each element, from `v0.0.2` you can use directive `v-phone`:
```
<template>
  <p v-phone="{ plus: true, brackets: false, space: false, dash: false, areaCode: true }">{{ string }}</p>
</template>
```

From `v1.2.0` you can use global function `$filterPhone`:

```javascript
...
methods: {
    applyFilter (phoneInput) {
        return this.$filterPhone(phoneInput, {
              plus: true,
              brackets: false,
              space: false,
              dash: false,
              areaCode: true
        })
    } 
}
...
/* Or as computed property */
...
data () {
    return {
      phone: '70005555555'
    }
},
computed: {
    filteredPhone () {
        return this.$filterPhone(this.phone, {
          plus: true,
          brackets: false,
          space: false,
          dash: false,
          areaCode: true
        })
    }
}
...
```

## Test

```bash
npm run build
npm run test
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-2020 Stanislav Mihaylov