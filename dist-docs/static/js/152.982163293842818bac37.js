webpackJsonp([152], {1314: function (e, t, n) { 'use strict'; var a = n(1315); t.a = a.a }, 1315: function (e, t, n) { 'use strict'; t.a = {data: function () { return {beLazy: !1, value: null} }} }, 1766: function (e, t, n) { 'use strict'; var a = n(1767); n.d(t, 'a', function () { return a.a }), n.d(t, 'b', function () { return a.b }) }, 1767: function (e, t, n) { 'use strict'; n.d(t, 'a', function () { return a }), n.d(t, 'b', function () { return u }); var a = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n('section', [n('b-field', [n('b-switch', {model: {value: e.beLazy, callback: function (t) { e.beLazy = t }, expression: 'beLazy'}}, [e._v('Enable lazy')])], 1), n('b-field', [n('b-input', {attrs: {type: 'text', lazy: e.beLazy, placeholder: 'Input'}, model: {value: e.value, callback: function (t) { e.value = t }, expression: 'value'}})], 1), n('p', {staticClass: 'content'}, [e._v(' Value is: ' + e._s(e.value) + ' ')])], 1) }, u = [] }, 390: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var a = n(1766), u = n(1314), l = n(0), c = Object(l.a)(u.a, a.a, a.b, !1, null, null, null); t.default = c.exports }})
