webpackJsonp([205], {1184: function (e, t, n) { 'use strict'; var r = n(1185); t.a = r.a }, 1185: function (e, t, n) { 'use strict'; t.a = {data: function () { return {data: ['Orange', 'Apple', 'Banana', 'Pear', 'Lemon', 'Strawberry', 'Kiwi'], name: '', selected: null} }, computed: {filteredDataArray: function () { var e = this; return this.data.filter(function (t) { return t.toString().toLowerCase().indexOf(e.name.toLowerCase()) >= 0 }) }}, methods: {showAddFruit: function () { var e = this; this.$buefy.dialog.prompt({message: 'Fruit', inputAttrs: {placeholder: 'e.g. Watermelon', maxlength: 20, value: this.name}, confirmText: 'Add', onConfirm: function (t) { e.data.push(t), e.$refs.autocomplete.setSelected(t) }}) }}} }, 1574: function (e, t, n) { 'use strict'; var r = n(1575); n.d(t, 'a', function () { return r.a }), n.d(t, 'b', function () { return r.b }) }, 1575: function (e, t, n) { 'use strict'; n.d(t, 'a', function () { return r }), n.d(t, 'b', function () { return a }); var r = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n('section', [n('p', {staticClass: 'content'}, [n('b', [e._v('Selected:')]), e._v(' ' + e._s(e.selected))]), n('b-field', {attrs: {label: 'Find or add a Fruit'}}, [n('b-autocomplete', {ref: 'autocomplete', attrs: {data: e.filteredDataArray, placeholder: 'e.g. Orange'}, on: {select: function (t) { return e.selected = t }}, scopedSlots: e._u([{key: 'header', fn: function () { return [n('a', {on: {click: e.showAddFruit}}, [n('span', [e._v(' Add new... ')])])] }, proxy: !0}, {key: 'empty', fn: function () { return [e._v('No results for ' + e._s(e.name))] }, proxy: !0}]), model: {value: e.name, callback: function (t) { e.name = t }, expression: 'name'}})], 1)], 1) }, a = [] }, 278: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var r = n(1574), a = n(1184), o = n(0), u = Object(o.a)(a.a, r.a, r.b, !1, null, null, null); t.default = u.exports }})
