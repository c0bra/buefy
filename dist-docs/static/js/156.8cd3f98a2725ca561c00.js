webpackJsonp([156], {1308: function (t, r, n) { 'use strict'; var o = n(1309); r.a = o.a }, 1309: function (t, r, n) { 'use strict'; r.a = {data: function () { return {events: []} }, methods: {onLoad: function (t, r) { this.events.push(r + ' loaded') }, onError: function (t, r) { this.events.push(r + ' fails to load') }}} }, 1752: function (t, r, n) { 'use strict'; var o = n(1753); n.d(r, 'a', function () { return o.a }), n.d(r, 'b', function () { return o.b }) }, 1753: function (t, r, n) { 'use strict'; n.d(r, 'a', function () { return o }), n.d(r, 'b', function () { return e }); var o = function () { var t = this, r = t.$createElement, n = t._self._c || r; return n('section', [n('b-image', {attrs: {src: 'https://picsum.photos/id/error/600/400', alt: 'A problematic image', ratio: '6by4'}, on: {load: t.onLoad, error: t.onError}}), n('br'), n('b-image', {attrs: {src: 'https://picsum.photos/id/error/600/400', 'src-fallback': 'https://picsum.photos/id/237/600/400', ratio: '6by4'}, on: {load: t.onLoad, error: t.onError}}), n('pre', {staticStyle: {'max-height': '400px'}}, [n('b', [t._v('Events:')]), t._v(t._s(t.events))])], 1) }, e = [] }, 381: function (t, r, n) { 'use strict'; Object.defineProperty(r, '__esModule', {value: !0}); var o = n(1752), e = n(1308), s = n(0), a = Object(s.a)(e.a, o.a, o.b, !1, null, null, null); r.default = a.exports }})
