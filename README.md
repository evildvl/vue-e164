# vue-e164
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

> Vue.js filter for phone formatting with E.164 support

### Setup

``` bash
npm install --save vue-e164
```

```javascript
import e164 from 'vue-164'

const options = {
  plus: true,
  brackets: false,
  space: false
}

Vue.use(e164, options)
```

### Options

**plus** {Boolean} - add plus symbol before area code
**brackets** {Boolean}  - add brackets
**space** {Boolean} - split number by space

If you want to use E.164 standart, you need this options:

```
{
  plus: true,
  brackets: false,
  space: false
}
```

### Examples
|  plus | brackets | space |         Result         |
|:-----:|:--------:|:-----:|:----------------------:|
|  true |   true   |  true |  `+1 (495) 000 99 88`  |
| false |   false  | false |      `14950009988`     |
|  true |   false  | false | `+14950009988` (E.164) |
|  true |   true   | false |    `+1(495)0009988`    |
| false |   true   |  true |   `1 (495) 000 99 88`  |
| false |   false  |  true |    `1 495 000 99 88`   |
| false |   true   | false |     `1(495)0009988`    |
|  true |   false  |  true |   `+1 495 000 99 88`   |

### Usage

vue-e164 add `phone` filter, and can be used as any other vue.js filter.
```
<template>
  <p>{{ string | phone }}</p>
</template>
```

If you need to use different options for each element, from `v0.0.2` you can use directive `v-phone`:
```
<template>
  <p v-phone="{ plus: true, brackets: false, space: false }">{{ string }}</p>
</template>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Stanislav Mihaylov