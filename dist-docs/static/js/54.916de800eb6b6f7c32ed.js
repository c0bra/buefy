webpackJsonp([54], {1456: function (e, n, a) { 'use strict'; var t = a(1457); n.a = t.a }, 1457: function (e, n, a) { 'use strict'; n.a = {data: function () { return {data: [{id: 1, first_name: 'Jesse', last_name: 'Simmons', date: '2016-10-15 13:43:27', gender: 'Male'}, {id: 2, first_name: 'John', last_name: 'Jacobs', date: '2016-12-15 06:00:53', gender: 'Male'}, {id: 3, first_name: 'Tina', last_name: 'Gilbert', date: '2016-04-26 06:26:28', gender: 'Female'}, {id: 4, first_name: 'Clarence', last_name: 'Flores', date: '2016-04-10 10:28:46', gender: 'Male'}, {id: 5, first_name: 'Anne', last_name: 'Lee', date: '2016-12-06 14:38:38', gender: 'Female'}], columns: [{field: 'gender', label: 'Gender', sortable: !0}, {field: 'id', label: 'ID', width: '40', numeric: !0}, {field: 'first_name', label: 'First Name', sortable: !0}, {field: 'last_name', label: 'Last Name'}, {field: 'date', label: 'Date', centered: !0}], rowGroups: ['gender']} }} }, 1458: function (e, n, a) { var t = a(2045); typeof t === 'string' && (t = [[e.i, t, '']]), t.locals && (e.exports = t.locals); a(1140)('7372875f', t, !0) }, 2042: function (e, n, a) { 'use strict'; var t = a(2043); a.d(n, 'a', function () { return t.a }), a.d(n, 'b', function () { return t.b }) }, 2043: function (e, n, a) { 'use strict'; a.d(n, 'a', function () { return t }), a.d(n, 'b', function () { return r }); var t = function () { var e = this, n = e.$createElement, a = e._self._c || n; return a('b-table', {attrs: {data: e.data, columns: e.columns, checkable: '', 'default-sort': 'gender', 'group-by': 'gender'}, scopedSlots: e._u([{key: 'row-group', fn: function (n) { return [a('strong', [a('small', [e._v(e._s(n.row[n.groupBy]))])])] }}])}) }, r = [] }, 2044: function (e, n, a) { 'use strict'; var t = a(1458); a.n(t).a }, 2045: function (e, n, a) { (e.exports = a(1139)(!0)).push([e.i, 'tr.is-info{background:#167df0;color:#fff}', '', {version: 3, sources: ['/Users/brianh/repos/test/buefy/docs/pages/components/table/examples/docs/pages/components/table/examples/ExRowGrouping.vue'], names: [], mappings: 'AAmFA,WACA,mBAAA,AACA,UAAA,CACA', file: 'ExRowGrouping.vue?vue&type=style&index=0&lang=css&', sourcesContent: ['<template>\n  <b-table :data="data" :columns="columns" checkable default-sort="gender" group-by="gender">\n      <template v-slot:row-group="props">\n        <strong><small>{{ props.row[props.groupBy] }}</small></strong>\n      </template>\n  </b-table>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      data: [\n        {\n          id: 1,\n          first_name: "Jesse",\n          last_name: "Simmons",\n          date: "2016-10-15 13:43:27",\n          gender: "Male",\n        },\n        {\n          id: 2,\n          first_name: "John",\n          last_name: "Jacobs",\n          date: "2016-12-15 06:00:53",\n          gender: "Male",\n        },\n        {\n          id: 3,\n          first_name: "Tina",\n          last_name: "Gilbert",\n          date: "2016-04-26 06:26:28",\n          gender: "Female",\n        },\n        {\n          id: 4,\n          first_name: "Clarence",\n          last_name: "Flores",\n          date: "2016-04-10 10:28:46",\n          gender: "Male",\n        },\n        {\n          id: 5,\n          first_name: "Anne",\n          last_name: "Lee",\n          date: "2016-12-06 14:38:38",\n          gender: "Female",\n        },\n      ],\n      columns: [\n        {\n          field: "gender",\n          label: "Gender",\n          sortable: true\n        },\n        {\n          field: "id",\n          label: "ID",\n          width: "40",\n          numeric: true,\n        },\n        {\n          field: "first_name",\n          label: "First Name",\n          sortable: true,\n        },\n        {\n          field: "last_name",\n          label: "Last Name",\n        },\n        {\n          field: "date",\n          label: "Date",\n          centered: true,\n        },\n      ],\n      rowGroups: ["gender"],\n    };\n  }\n};\n<\/script>\n\n<style>\ntr.is-info {\n  background: #167df0;\n  color: #fff;\n}\n</style>\n'], sourceRoot: ''}]) }, 516: function (e, n, a) { 'use strict'; Object.defineProperty(n, '__esModule', {value: !0}); var t = a(2042), r = a(1456), s = (a(2044), a(0)), l = Object(s.a)(r.a, t.a, t.b, !1, null, null, null); n.default = l.exports }})
