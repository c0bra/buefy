webpackJsonp([190], {1232: function (t, e, n) { 'use strict'; var i = n(1233); e.a = i.a }, 1233: function (t, e, n) { 'use strict'; e.a = {data: function () { return {time: new Date(), isAmPm: !1} }, computed: {format: function () { return this.isAmPm ? '12' : '24' }}} }, 1636: function (t, e, n) { 'use strict'; var i = n(1637); n.d(e, 'a', function () { return i.a }), n.d(e, 'b', function () { return i.b }) }, 1637: function (t, e, n) { 'use strict'; n.d(e, 'a', function () { return i }), n.d(e, 'b', function () { return c }); var i = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('section', [n('b-field', [n('b-switch', {model: {value: t.isAmPm, callback: function (e) { t.isAmPm = e }, expression: 'isAmPm'}}, [t._v('AM/PM')])], 1), n('b-field', {attrs: {label: 'Select time'}}, [n('b-clockpicker', {attrs: {placeholder: 'Click to select...', 'hour-format': t.format}, model: {value: t.time, callback: function (e) { t.time = e }, expression: 'time'}}, [n('b-button', {attrs: {label: 'Now', type: 'is-primary', 'icon-left': 'clock'}, on: {click: function (e) { t.time = new Date() }}}), n('b-button', {attrs: {label: 'Clear', type: 'is-danger', 'icon-left': 'close', outlined: ''}, on: {click: function (e) { t.time = null }}})], 1)], 1)], 1) }, c = [] }, 314: function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', {value: !0}); var i = n(1636), c = n(1232), r = n(0), l = Object(r.a)(c.a, i.a, i.b, !1, null, null, null); e.default = l.exports }})
