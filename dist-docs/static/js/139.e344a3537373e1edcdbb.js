webpackJsonp([139], {1340: function (t, n, i) { 'use strict'; var e = i(1341); n.a = e.a }, 1341: function (t, n, i) { 'use strict'; n.a = {methods: {simple: function () { this.$buefy.notification.open('Something happened') }, success: function () { this.$buefy.notification.open({message: 'Something happened correctly!', type: 'is-success'}) }, danger: function () { var t = this; this.$buefy.notification.open({duration: 5e3, message: "Something's not good, also I'm on <b>bottom</b>", position: 'is-bottom-right', type: 'is-danger', hasIcon: !0}).$on('close', function () { t.$buefy.notification.open('Custom notification closed!') }) }}} }, 1808: function (t, n, i) { 'use strict'; var e = i(1809); i.d(n, 'a', function () { return e.a }), i.d(n, 'b', function () { return e.b }) }, 1809: function (t, n, i) { 'use strict'; i.d(n, 'a', function () { return e }), i.d(n, 'b', function () { return o }); var e = function () { var t = this.$createElement, n = this._self._c || t; return n('section', [n('div', {staticClass: 'buttons'}, [n('b-button', {attrs: {label: 'Launch notification (default)', size: 'is-medium'}, on: {click: this.simple}}), n('b-button', {attrs: {label: 'Launch notification (custom)', type: 'is-success', size: 'is-medium'}, on: {click: this.success}}), n('b-button', {attrs: {label: 'Launch notification (custom)', type: 'is-danger', size: 'is-medium'}, on: {click: this.danger}})], 1)]) }, o = [] }, 423: function (t, n, i) { 'use strict'; Object.defineProperty(n, '__esModule', {value: !0}); var e = i(1808), o = i(1340), s = i(0), c = Object(s.a)(o.a, e.a, e.b, !1, null, null, null); n.default = c.exports }})
