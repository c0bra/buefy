webpackJsonp([187], {1226: function (t, e, n) { 'use strict'; var c = n(1227); e.a = c.a }, 1227: function (t, e, n) { 'use strict'; e.a = {data: function () { return {isAmPm: !1} }, computed: {format: function () { return this.isAmPm ? '12' : '24' }}} }, 1630: function (t, e, n) { 'use strict'; var c = n(1631); n.d(e, 'a', function () { return c.a }), n.d(e, 'b', function () { return c.b }) }, 1631: function (t, e, n) { 'use strict'; n.d(e, 'a', function () { return c }), n.d(e, 'b', function () { return r }); var c = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('section', [n('b-field', [n('b-switch', {model: {value: t.isAmPm, callback: function (e) { t.isAmPm = e }, expression: 'isAmPm'}}, [t._v('AM/PM')])], 1), n('b-field', {attrs: {label: 'Select time'}}, [n('b-clockpicker', {attrs: {rounded: '', placeholder: 'Click to select...', icon: 'clock', 'hour-format': t.format}})], 1)], 1) }, r = [] }, 311: function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', {value: !0}); var c = n(1630), r = n(1226), i = n(0), u = Object(i.a)(r.a, c.a, c.b, !1, null, null, null); e.default = u.exports }})
