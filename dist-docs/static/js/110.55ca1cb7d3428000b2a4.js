webpackJsonp([110], {1408: function (e, t, a) { 'use strict'; var n = a(1409); t.a = n.a }, 1409: function (e, t, a) { 'use strict'; t.a = {data: function () { var e = [{id: 1, first_name: 'Jesse', last_name: 'Simmons', date: '2016-10-15 13:43:27', gender: 'Male'}, {id: 2, first_name: 'John', last_name: 'Jacobs', date: '2016-12-15 06:00:53', gender: 'Male'}, {id: 3, first_name: 'Tina', last_name: 'Gilbert', date: '2016-04-26 06:26:28', gender: 'Female'}, {id: 4, first_name: 'Clarence', last_name: 'Flores', date: '2016-04-10 10:28:46', gender: 'Male'}, {id: 5, first_name: 'Anne', last_name: 'Lee', date: '2016-12-06 14:38:38', gender: 'Female'}]; return {data: e, checkboxPosition: 'left', checkedRows: [e[1], e[3]], columns: [{field: 'id', label: 'ID', width: '40', numeric: !0}, {field: 'first_name', label: 'First Name'}, {field: 'last_name', label: 'Last Name'}, {field: 'date', label: 'Date', centered: !0}, {field: 'gender', label: 'Gender'}]} }} }, 1920: function (e, t, a) { 'use strict'; var n = a(1921); a.d(t, 'a', function () { return n.a }), a.d(t, 'b', function () { return n.b }) }, 1921: function (e, t, a) { 'use strict'; a.d(t, 'a', function () { return n }), a.d(t, 'b', function () { return c }); var n = function () { var e = this, t = e.$createElement, a = e._self._c || t; return a('section', [a('b-field', {attrs: {grouped: '', 'group-multiline': ''}}, [a('b-button', {staticClass: 'field', attrs: {label: 'Clear checked', type: 'is-danger', 'icon-left': 'close'}, on: {click: function (t) { e.checkedRows = [] }}}), a('b-select', {model: {value: e.checkboxPosition, callback: function (t) { e.checkboxPosition = t }, expression: 'checkboxPosition'}}, [a('option', {attrs: {value: 'left'}}, [e._v('Checkbox at left')]), a('option', {attrs: {value: 'right'}}, [e._v('Checkbox at right')])])], 1), a('b-tabs', [a('b-tab-item', {attrs: {label: 'Table'}}, [a('b-table', {attrs: {data: e.data, columns: e.columns, 'checked-rows': e.checkedRows, 'is-row-checkable': function (e) { return e.id !== 3 && e.id !== 4 }, checkable: '', 'checkbox-position': e.checkboxPosition}, on: {'update:checkedRows': function (t) { e.checkedRows = t }, 'update:checked-rows': function (t) { e.checkedRows = t }}, scopedSlots: e._u([{key: 'bottom-left', fn: function () { return [a('b', [e._v('Total checked')]), e._v(': ' + e._s(e.checkedRows.length) + ' ')] }, proxy: !0}])})], 1), a('b-tab-item', {attrs: {label: 'Checked rows'}}, [a('pre', [e._v(e._s(e.checkedRows))])])], 1)], 1) }, c = [] }, 502: function (e, t, a) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var n = a(1920), c = a(1408), o = a(0), i = Object(o.a)(c.a, n.a, n.b, !1, null, null, null); t.default = i.exports }})
