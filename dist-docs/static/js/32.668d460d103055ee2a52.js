webpackJsonp([32, 112, 113, 114, 221, 293, 294], {1396: function (e, t, n) { 'use strict'; var i = n(1397); t.a = i.a }, 1397: function (e, t, n) { 'use strict'; t.a = {data: function () { return {isSwitched: !1, isSwitchedCustom: 'Yes'} }} }, 1398: function (e, t, n) { 'use strict'; var i = n(1399); t.a = i.a }, 1399: function (e, t, n) { 'use strict'; t.a = {data: function () { return {lightMode: !1} }} }, 1400: function (e, t, n) { 'use strict'; var i = n(1401); t.a = i.a }, 1401: function (e, t, n) { 'use strict'; t.a = {data: function () { return {size: '', type: null, passiveType: null, isRounded: !1, isOutlined: !1, leftLabel: !1} }} }, 1906: function (e, t, n) { 'use strict'; var i = n(1907); n.d(t, 'a', function () { return i.a }), n.d(t, 'b', function () { return i.b }) }, 1907: function (e, t, n) { 'use strict'; n.d(t, 'a', function () { return i }), n.d(t, 'b', function () { return s }); var i = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n('section', [n('b-field', [n('b-switch', [e._v('Default')])], 1), n('b-field', [n('b-switch', {model: {value: e.isSwitched, callback: function (t) { e.isSwitched = t }, expression: 'isSwitched'}}, [e._v(' ' + e._s(e.isSwitched) + ' ')])], 1), n('b-field', [n('b-switch', {attrs: {'true-value': 'Yes', 'false-value': 'No'}, model: {value: e.isSwitchedCustom, callback: function (t) { e.isSwitchedCustom = t }, expression: 'isSwitchedCustom'}}, [e._v(' ' + e._s(e.isSwitchedCustom) + ' ')])], 1), n('b-field', [n('b-switch', {attrs: {disabled: ''}}, [e._v('Disabled')])], 1)], 1) }, s = [] }, 1908: function (e, t, n) { 'use strict'; var i = n(1909); n.d(t, 'a', function () { return i.a }), n.d(t, 'b', function () { return i.b }) }, 1909: function (e, t, n) { 'use strict'; n.d(t, 'a', function () { return i }), n.d(t, 'b', function () { return s }); var i = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n('section', [n('b-field', [n('b-switch', {attrs: {value: !0}}, [e._v(' Default ')])], 1), n('b-field', [n('b-switch', {attrs: {value: !0, type: 'is-info'}}, [e._v(' Info ')])], 1), n('b-field', [n('b-switch', {attrs: {value: !0, type: 'is-success'}}, [e._v(' Success ')])], 1), n('b-field', [n('b-switch', {attrs: {value: !0, type: 'is-danger'}}, [e._v(' Danger ')])], 1), n('b-field', [n('b-switch', {attrs: {value: !0, type: 'is-warning'}}, [e._v(' Warning ')])], 1), n('b-field', [n('b-switch', {attrs: {'passive-type': 'is-dark', type: 'is-warning'}, model: {value: e.lightMode, callback: function (t) { e.lightMode = t }, expression: 'lightMode'}}, [e._v(' ' + e._s(e.lightMode ? 'Light Mode' : 'Dark Mode') + ' ')])], 1)], 1) }, s = [] }, 1910: function (e, t, n) { 'use strict'; var i = n(1911); n.d(t, 'a', function () { return i.a }), n.d(t, 'b', function () { return i.b }) }, 1911: function (e, t, n) { 'use strict'; n.d(t, 'a', function () { return i }), n.d(t, 'b', function () { return s }); var i = function () { var e = this.$createElement, t = this._self._c || e; return t('section', [t('b-field', [t('b-switch', {attrs: {size: 'is-small'}}, [this._v('Small')])], 1), t('b-field', [t('b-switch', [this._v('Default')])], 1), t('b-field', [t('b-switch', {attrs: {size: 'is-medium'}}, [this._v('Medium')])], 1), t('b-field', [t('b-switch', {attrs: {size: 'is-large'}}, [this._v('Large')])], 1)], 1) }, s = [] }, 1912: function (e, t, n) { 'use strict'; var i = n(1913); n.d(t, 'a', function () { return i.a }), n.d(t, 'b', function () { return i.b }) }, 1913: function (e, t, n) { 'use strict'; n.d(t, 'a', function () { return i }), n.d(t, 'b', function () { return s }); var i = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n('section', [n('b-field', {attrs: {grouped: ''}}, [n('b-switch', {model: {value: e.isRounded, callback: function (t) { e.isRounded = t }, expression: 'isRounded'}}, [e._v('Rounded')]), n('b-switch', {model: {value: e.isOutlined, callback: function (t) { e.isOutlined = t }, expression: 'isOutlined'}}, [e._v('Outlined')])], 1), n('b-field', {attrs: {label: 'Type'}}, [n('b-select', {attrs: {expanded: '', placeholder: 'Type'}, model: {value: e.type, callback: function (t) { e.type = t }, expression: 'type'}}, [n('option', {attrs: {value: 'null'}}, [e._v('Default')]), n('option', {attrs: {value: 'is-primary'}}, [e._v('Primary')]), n('option', {attrs: {value: 'is-success'}}, [e._v('Success')]), n('option', {attrs: {value: 'is-warning'}}, [e._v('Warning')]), n('option', {attrs: {value: 'is-danger'}}, [e._v('Danger')])])], 1), n('b-field', {attrs: {label: 'Passive Type'}}, [n('b-select', {attrs: {expanded: '', placeholder: 'Passive Type'}, model: {value: e.passiveType, callback: function (t) { e.passiveType = t }, expression: 'passiveType'}}, [n('option', {attrs: {value: 'null'}}, [e._v('Default')]), n('option', {attrs: {value: 'is-primary'}}, [e._v('Primary')]), n('option', {attrs: {value: 'is-success'}}, [e._v('Success')]), n('option', {attrs: {value: 'is-warning'}}, [e._v('Warning')]), n('option', {attrs: {value: 'is-danger'}}, [e._v('Danger')])])], 1), n('b-field', {attrs: {label: 'Size'}}, [n('b-select', {attrs: {expanded: ''}, model: {value: e.size, callback: function (t) { e.size = t }, expression: 'size'}}, [n('option', {attrs: {value: ''}}, [e._v('Default')]), n('option', {attrs: {value: 'is-small'}}, [e._v('is-small')]), n('option', {attrs: {value: 'is-medium'}}, [e._v('is-medium')]), n('option', {attrs: {value: 'is-large'}}, [e._v('is-large')])])], 1), n('b-field', {attrs: {label: 'Left Label'}}, [n('b-radio', {attrs: {'native-value': !1}, model: {value: e.leftLabel, callback: function (t) { e.leftLabel = t }, expression: 'leftLabel'}}, [e._v('False')]), n('b-radio', {attrs: {'native-value': !0}, model: {value: e.leftLabel, callback: function (t) { e.leftLabel = t }, expression: 'leftLabel'}}, [e._v('True')])], 1), n('b-switch', {attrs: {rounded: e.isRounded, outlined: e.isOutlined, size: e.size, type: e.type, 'left-label': e.leftLabel, 'passive-type': e.passiveType}}, [e._v('Sample')])], 1) }, s = [] }, 2226: function (e, t, n) { 'use strict'; var i = n(2227); t.a = i.a }, 2227: function (e, t, n) { 'use strict'; var i = n(491), s = n(492), a = n(493), l = n(2504), o = n.n(l), d = n(494), c = n(2505), u = n.n(c), r = n(495), f = n(2506), p = n.n(f), b = n(496), v = n(2507), h = n.n(v); t.a = {data: function () { return {api: i.default, variables: s.default, ExSimple: a.default, ExTypes: d.default, ExSizes: r.default, ExStyles: b.default, ExSimpleCode: o.a, ExTypesCode: u.a, ExSizesCode: p.a, ExStylesCode: h.a} }} }, 2502: function (e, t, n) { 'use strict'; var i = n(2503); n.d(t, 'a', function () { return i.a }), n.d(t, 'b', function () { return i.b }) }, 2503: function (e, t, n) { 'use strict'; n.d(t, 'a', function () { return i }), n.d(t, 'b', function () { return s }); var i = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n('div', [n('Example', {attrs: {component: e.ExSimple, code: e.ExSimpleCode, vertical: ''}}), n('Example', {attrs: {component: e.ExTypes, code: e.ExTypesCode, title: 'Types', vertical: ''}}), n('Example', {attrs: {component: e.ExSizes, code: e.ExSizesCode, title: 'Sizes', vertical: ''}}), n('Example', {attrs: {component: e.ExStyles, code: e.ExStylesCode, title: 'Styles', vertical: ''}}), n('ApiView', {attrs: {data: e.api}}), n('VariablesView', {attrs: {data: e.variables}})], 1) }, s = [] }, 2504: function (e, t) { e.exports = '<template>\n    <section>\n        <b-field>\n            <b-switch>Default</b-switch>\n        </b-field>\n        <b-field>\n            <b-switch v-model="isSwitched">\n                {{ isSwitched }}\n            </b-switch>\n        </b-field>\n        <b-field>\n            <b-switch v-model="isSwitchedCustom"\n                true-value="Yes"\n                false-value="No">\n                {{ isSwitchedCustom }}\n            </b-switch>\n        </b-field>\n        <b-field>\n            <b-switch disabled>Disabled</b-switch>\n        </b-field>\n    </section>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                isSwitched: false,\n                isSwitchedCustom: \'Yes\'\n            }\n        }\n    }\n<\/script>\n' }, 2505: function (e, t) { e.exports = '<template>\n    <section>\n        <b-field>\n            <b-switch :value="true">\n                Default\n            </b-switch>\n        </b-field>\n        <b-field>\n            <b-switch :value="true"\n            type="is-info">\n                Info\n            </b-switch>\n        </b-field>\n        <b-field>\n            <b-switch :value="true"\n            type="is-success">\n                Success\n            </b-switch>\n        </b-field>\n        <b-field>\n            <b-switch :value="true"\n            type="is-danger">\n                Danger\n            </b-switch>\n        </b-field>\n        <b-field>\n            <b-switch :value="true"\n            type="is-warning">\n                Warning\n            </b-switch>\n        </b-field>\n        <b-field>\n            <b-switch\n                v-model="lightMode"\n                passive-type=\'is-dark\'\n                type=\'is-warning\'>\n                {{ lightMode ? "Light Mode" : "Dark Mode" }}\n            </b-switch>\n        </b-field>\n    </section>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            lightMode: false\n        }\n    }\n}\n<\/script>\n' }, 2506: function (e, t) { e.exports = '<template>\n    <section>\n        <b-field>\n            <b-switch size="is-small">Small</b-switch>\n        </b-field>\n        <b-field>\n            <b-switch>Default</b-switch>\n        </b-field>\n        <b-field>\n            <b-switch size="is-medium">Medium</b-switch>\n        </b-field>\n        <b-field>\n            <b-switch size="is-large">Large</b-switch>\n        </b-field>\n    </section>\n</template>\n' }, 2507: function (e, t) { e.exports = '<template>\n    <section>\n        <b-field grouped>\n            <b-switch v-model="isRounded">Rounded</b-switch>\n            <b-switch v-model="isOutlined">Outlined</b-switch>\n        </b-field>\n        <b-field label="Type">\n            <b-select expanded v-model="type" placeholder="Type">\n                <option value="null">Default</option>\n                <option value="is-primary">Primary</option>\n                <option value="is-success">Success</option>\n                <option value="is-warning">Warning</option>\n                <option value="is-danger">Danger</option>\n            </b-select>\n        </b-field>\n        <b-field label="Passive Type">\n            <b-select expanded v-model="passiveType" placeholder="Passive Type">\n                <option value="null">Default</option>\n                <option value="is-primary">Primary</option>\n                <option value="is-success">Success</option>\n                <option value="is-warning">Warning</option>\n                <option value="is-danger">Danger</option>\n            </b-select>\n        </b-field>\n        <b-field label="Size">\n            <b-select expanded v-model="size">\n                <option value="">Default</option>\n                <option value="is-small">is-small</option>\n                <option value="is-medium">is-medium</option>\n                <option value="is-large">is-large</option>\n            </b-select>\n        </b-field>\n        <b-field label="Left Label">\n            <b-radio v-model=\'leftLabel\' :native-value=\'false\'>False</b-radio>\n            <b-radio v-model=\'leftLabel\' :native-value=\'true\'>True</b-radio>\n        </b-field>\n        <b-switch\n            :rounded="isRounded"\n            :outlined="isOutlined"\n            :size="size"\n            :type="type"\n            :left-label=\'leftLabel\'\n            :passive-type=\'passiveType\'>Sample</b-switch>\n    </section>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                size: \'\',\n                type: null,\n                passiveType: null,\n                isRounded: false,\n                isOutlined: false,\n                leftLabel: false,\n            }\n        }\n    }\n<\/script>\n' }, 491: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.default = [{props: [{name: '<code>type</code>', description: 'Type (color) of the switch, optional', type: 'String', values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass", default: '—'}, {name: '<code>passive-type</code>', description: 'Type (color) of the switch when switch is passive, optional', type: 'String', values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass", default: '—'}, {name: '<code>v-model</code>', description: 'Binding value', type: 'Any', values: '—', default: '<code>false</code>'}, {name: '<code>native-value</code>', description: 'Same as native <code>value</code>', type: 'Any', values: '—', default: '—'}, {name: '<code>true-value</code>', description: "Overrides the returned value when it's checked", type: 'Any', values: '—', default: '<code>true</code>'}, {name: '<code>false-value</code>', description: "Overrides the returned value when it's not checked", type: 'Any', values: '—', default: '<code>false</code>'}, {name: '<code>disabled</code>', description: 'Same as native <code>disabled</code>', type: 'Boolean', values: '—', default: '<code>false</code>'}, {name: '<code>name</code>', description: 'Same as native <code>name</code>', type: 'String', values: '—', default: '—'}, {name: '<code>size</code>', description: 'Size  of the control, optional', type: 'String', values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>', default: '—'}, {name: '<code>rounded</code>', description: 'Rounded style', type: 'Boolean', values: '—', default: '<code>true</code>'}, {name: '<code>outlined</code>', description: 'Outlined style', type: 'Boolean', values: '—', default: '<code>false</code>'}], events: [{name: '<code>input</code>', description: 'Triggers when the value of the switch is changed', parameters: '<code>value: Boolean</code>'}, {name: '<code>[any].native</code>', description: 'Listen to any event using this syntax, e.g <code>click.native</code>', parameters: '<code>event: $event</code>'}]}] }, 492: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.default = [{name: '<code>$switch-width-number</code>', default: '<code>2.75</code>'}, {name: '<code>$switch-width</code>', default: '<code>$switch-width-number * 1em</code>'}, {name: '<code>$switch-padding</code>', default: '<code>0.2em</code>'}, {name: '<code>$switch-active-background-color</code>', default: '<code>$primary</code>'}, {name: '<code>$switch-colors</code>', default: '<code>$form-colors</code>'}] }, 493: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var i = n(1906), s = n(1396), a = n(0), l = Object(a.a)(s.a, i.a, i.b, !1, null, null, null); t.default = l.exports }, 494: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var i = n(1908), s = n(1398), a = n(0), l = Object(a.a)(s.a, i.a, i.b, !1, null, null, null); t.default = l.exports }, 495: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var i = n(1910), s = n(0), a = Object(s.a)({}, i.a, i.b, !1, null, null, null); t.default = a.exports }, 496: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var i = n(1912), s = n(1400), a = n(0), l = Object(a.a)(s.a, i.a, i.b, !1, null, null, null); t.default = l.exports }, 609: function (e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var i = n(2502), s = n(2226), a = n(0), l = Object(a.a)(s.a, i.a, i.b, !1, null, null, null); t.default = l.exports }})
