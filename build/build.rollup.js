var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var rollup = require('rollup')
var babel = require('@rollup/plugin-babel');

var version = process.env.VERSION || require('../package.json').version
var author = process.env.VERSION || require('../package.json').author
var license = process.env.VERSION || require('../package.json').license

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