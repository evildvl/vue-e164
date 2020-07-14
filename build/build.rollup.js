var path = require('path')
var rollup = require('rollup')
var babel = require('@rollup/plugin-babel');

rollup.rollup({
    input: path.resolve(__dirname, '..', 'src/vue-e164.js'),
    plugins: [babel]
})
.then(bundle => {
    bundle.generate({
        format: 'iife'
    }).then(() => {
        bundle.write({
            file: path.resolve(__dirname, '..' ,'dist/vue-e164.js')
        })
    })
})