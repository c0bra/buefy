webpackJsonp([195], {1218: function (t, e, i) { 'use strict'; var s = i(1219); e.a = s.a }, 1219: function (t, e, i) { 'use strict'; e.a = {data: function () { return {gallery: !1, al: {hasGrayscale: !0, itemsToShow: 2, breakpoints: {768: {hasGrayscale: !1, itemsToShow: 4}, 960: {hasGrayscale: !0, itemsToShow: 6}}}, items: [{title: 'Slide 1', image: 'https://picsum.photos/id/0/1230/500'}, {title: 'Slide 2', image: 'https://picsum.photos/id/1/1230/500'}, {title: 'Slide 3', image: 'https://picsum.photos/id/2/1230/500'}, {title: 'Slide 4', image: 'https://picsum.photos/id/3/1230/500'}, {title: 'Slide 5', image: 'https://picsum.photos/id/4/1230/500'}, {title: 'Slide 6', image: 'https://picsum.photos/id/5/1230/500'}, {title: 'Slide 7', image: 'https://picsum.photos/id/6/1230/500'}, {title: 'Slide 8', image: 'https://picsum.photos/id/7/1230/500'}]} }, methods: {switchGallery: function (t) { this.gallery = t, t ? document.documentElement.classList.add('is-clipped') : document.documentElement.classList.remove('is-clipped') }}} }, 1618: function (t, e, i) { 'use strict'; var s = i(1619); i.d(e, 'a', function () { return s.a }), i.d(e, 'b', function () { return s.b }) }, 1619: function (t, e, i) { 'use strict'; i.d(e, 'a', function () { return s }), i.d(e, 'b', function () { return a }); var s = function () { var t = this, e = t.$createElement, i = t._self._c || e; return i('b-carousel', {attrs: {autoplay: !1, 'with-carousel-list': '', indicator: !1, overlay: t.gallery}, on: {click: function (e) { return t.switchGallery(!0) }}, scopedSlots: t._u([{key: 'list', fn: function (e) { return [i('b-carousel-list', t._b({attrs: {data: t.items, 'as-indicator': ''}, on: {switch: function (t) { return e.switch(t, !1) }}, model: {value: e.active, callback: function (i) { t.$set(e, 'active', i) }, expression: 'props.active'}}, 'b-carousel-list', t.al, !1))] }}, {key: 'overlay', fn: function () { return [i('div', {staticClass: 'has-text-centered has-text-white'}, [t._v(" Hello i'am overlay! ")])] }, proxy: !0}])}, [t._l(t.items, function (t, e) { return i('b-carousel-item', {key: e}, [i('figure', {staticClass: 'image'}, [i('img', {attrs: {src: t.image}})])]) }), t.gallery ? i('span', {staticClass: 'modal-close is-large', on: {click: function (e) { return t.switchGallery(!1) }}}) : t._e()], 2) }, a = [] }, 302: function (t, e, i) { 'use strict'; Object.defineProperty(e, '__esModule', {value: !0}); var s = i(1618), a = i(1218), l = i(0), c = Object(l.a)(a.a, s.a, s.b, !1, null, null, null); e.default = c.exports }})
