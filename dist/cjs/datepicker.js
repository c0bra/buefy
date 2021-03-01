'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-1bb51959.js')
require('./chunk-8ffb4dee.js')
require('./chunk-a3ebdb68.js')
var __chunk_5 = require('./chunk-13e039f5.js')
require('./chunk-1e15a2e5.js')
require('./chunk-bcdfb68c.js')
require('./chunk-ae7e641a.js')
require('./chunk-168e28c7.js')
require('./chunk-eeae87c4.js')
require('./chunk-c0be824c.js')
var __chunk_16 = require('./chunk-11d9710c.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_16.Datepicker)
    }
}
__chunk_5.use(Plugin)

exports.BDatepicker = __chunk_16.Datepicker
exports.default = Plugin
