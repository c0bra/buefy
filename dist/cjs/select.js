'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-1bb51959.js')
require('./chunk-8ffb4dee.js')
require('./chunk-a3ebdb68.js')
var __chunk_5 = require('./chunk-13e039f5.js')
var __chunk_15 = require('./chunk-c0be824c.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_15.Select)
    }
}
__chunk_5.use(Plugin)

exports.BSelect = __chunk_15.Select
exports.default = Plugin
