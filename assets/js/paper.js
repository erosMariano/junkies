/*!
 * Paper.js v0.12.15 - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2020, Jürg Lehni & Jonathan Puckey
 * http://juerglehni.com/ & https://puckey.studio/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: Wed Mar 17 10:49:48 2021 +0100
 *
 ***
 *
 * Straps.js - Class inheritance library with support for bean-style accessors
 *
 * Copyright (c) 2006 - 2020 Jürg Lehni
 * http://juerglehni.com/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Acorn.js
 * https://marijnhaverbeke.nl/acorn/
 *
 * Acorn is a tiny, fast JavaScript parser written in JavaScript,
 * created by Marijn Haverbeke and released under an MIT license.
 *
 */
var paper = function (w, j) {
    var M = (w = w || require("./node/self.js")).window,
        A = w.document,
        R = new function () {
            function n(t, e, n) {
                var i;
                return t && ((i = f(t, "length")) && "number" == typeof i.value ? s : function (t, e) {
                    for (var n in this) this.hasOwnProperty(n) && t.call(e, this[n], n, this)
                }).call(t, e, n = n || t), n
            }
            var r = /^(statics|enumerable|beans|preserve)$/,
                t = [],
                i = t.slice,
                a = Object.create,
                f = Object.getOwnPropertyDescriptor,
                d = Object.defineProperty,
                s = t.forEach || function (t, e) {
                    for (var n = 0, i = this.length; n < i; n++) t.call(e, this[n], n, this)
                },
                o = Object.assign || function (t) {
                    for (var e = 1, n = arguments.length; e < n; e++) {
                        var i, r = arguments[e];
                        for (i in r) r.hasOwnProperty(i) && (t[i] = r[i])
                    }
                    return t
                };

            function h(a, o, h, u, l) {
                var c = {};

                function t(t, e) {
                    var n, i = "function" == typeof (e = "string" == typeof (e = e || (e = f(o, t)) && (e.get ? e : e.value)) && "#" === e[0] ? a[e.substring(1)] || e : e),
                        r = e,
                        s = l || i && !e.base ? e && e.get ? t in a : a[t] : null;
                    l && s || (i && s && (e.base = s), i && !1 !== u && (n = t.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (c[n[3].toLowerCase() + n[4]] = n[2]), r && !i && r.get && "function" == typeof r.get && _.isPlainObject(r) || (r = {
                        value: r,
                        writable: !0
                    }), (f(a, t) || {
                        configurable: !0
                    }).configurable && (r.configurable = !0, r.enumerable = null != h ? h : !n), d(a, t, r))
                }
                if (o) {
                    for (var e in o) o.hasOwnProperty(e) && !r.test(e) && t(e);
                    for (var e in c) {
                        var n = c[e],
                            i = a["set" + n],
                            n = a["get" + n] || i && a["is" + n];
                        !n || !0 !== u && 0 !== n.length || t(e, {
                            get: n,
                            set: i
                        })
                    }
                }
                return a
            }

            function _() {
                for (var t = 0, e = arguments.length; t < e; t++) {
                    var n = arguments[t];
                    n && o(this, n)
                }
                return this
            }
            return h(_, {
                inject: function (t) {
                    var e, n, i;
                    t && (e = !0 === t.statics ? t : t.statics, n = t.beans, i = t.preserve, e !== t && h(this.prototype, t, t.enumerable, n, i), h(this, e, null, n, i));
                    for (var r = 1, s = arguments.length; r < s; r++) this.inject(arguments[r]);
                    return this
                },
                extend: function () {
                    for (var t, e, n, i = this, r = 0, s = arguments.length; r < s && (!t || !e); r++) n = arguments[r], t = t || n.initialize, e = e || n.prototype;
                    return e = (t = t || function () {
                        i.apply(this, arguments)
                    }).prototype = e || a(this.prototype), d(e, "constructor", {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }), h(t, this), arguments.length && this.inject.apply(t, arguments), t.base = i, t
                }
            }).inject({
                enumerable: !1,
                initialize: _,
                set: _,
                inject: function () {
                    for (var t = 0, e = arguments.length; t < e; t++) {
                        var n = arguments[t];
                        n && h(this, n, n.enumerable, n.beans, n.preserve)
                    }
                    return this
                },
                extend: function () {
                    var t = a(this);
                    return t.inject.apply(t, arguments)
                },
                each: function (t, e) {
                    return n(this, t, e)
                },
                clone: function () {
                    return new this.constructor(this)
                },
                statics: {
                    set: o,
                    each: n,
                    create: a,
                    define: d,
                    describe: f,
                    clone: function (t) {
                        return o(new t.constructor, t)
                    },
                    isPlainObject: function (t) {
                        t = null != t && t.constructor;
                        return t && (t === Object || t === _ || "Object" === t.name)
                    },
                    pick: function (t, e) {
                        return t !== j ? t : e
                    },
                    slice: function (t, e, n) {
                        return i.call(t, e, n)
                    }
                }
            })
        };
    "undefined" != typeof module && (module.exports = R), R.inject({
        enumerable: !1,
        toString: function () {
            return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + R.each(this, function (t, e) {
                /^_/.test(e) || this.push(e + ": " + ("number" == (e = typeof t) ? x.instance.number(t) : "string" == e ? "'" + t + "'" : t))
            }, []).join(", ") + " }"
        },
        getClassName: function () {
            return this._class || ""
        },
        importJSON: function (t) {
            return R.importJSON(t, this)
        },
        exportJSON: function (t) {
            return R.exportJSON(this, t)
        },
        toJSON: function () {
            return R.serialize(this)
        },
        set: function (t, e) {
            return t && R.filter(this, t, e, this._prioritize), this
        }
    }, {
        beans: !1,
        statics: {
            exports: {},
            extend: function t() {
                var e = t.base.apply(this, arguments),
                    n = e.prototype._class;
                return n && !R.exports[n] && (R.exports[n] = e), e
            },
            equals: function (t, e) {
                if (t === e) return !0;
                if (t && t.equals) return t.equals(e);
                if (e && e.equals) return e.equals(t);
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    if (Array.isArray(t) && Array.isArray(e)) {
                        if ((n = t.length) !== e.length) return !1;
                        for (; n--;)
                            if (!R.equals(t[n], e[n])) return !1
                    } else {
                        var n, i = Object.keys(t);
                        if ((n = i.length) !== Object.keys(e).length) return !1;
                        for (; n--;) {
                            var r = i[n];
                            if (!e.hasOwnProperty(r) || !R.equals(t[r], e[r])) return !1
                        }
                    }
                    return !0
                }
                return !1
            },
            read: function (t, e, n, i) {
                if (this === R) {
                    var r = this.peek(t, e);
                    return t.__index++, r
                }
                var s = this.prototype,
                    a = s._readIndex,
                    o = e || a && t.__index || 0,
                    r = t.length,
                    e = t[o];
                return i = i || r - o, e instanceof this || n && n.readNull && null == e && i <= 1 ? (a && (t.__index = o + 1), e && n && n.clone ? e.clone() : e) : (e = R.create(s), a && (e.__read = !0), e = e.initialize.apply(e, 0 < o || o + i < r ? R.slice(t, o, o + i) : t) || e, a && (t.__index = o + e.__read, (o = e.__filtered) && (t.__filtered = o, e.__filtered = j), e.__read = j), e)
            },
            peek: function (t, e) {
                return t[t.__index = e || t.__index || 0]
            },
            remain: function (t) {
                return t.length - (t.__index || 0)
            },
            readList: function (t, e, n, i) {
                for (var r, s = [], e = e || 0, a = i ? e + i : t.length, o = e; o < a; o++) s.push(Array.isArray(r = t[o]) ? this.read(r, 0, n) : this.read(t, o, n, 1));
                return s
            },
            readNamed: function (t, e, n, i, r) {
                var s, a, o = this.getNamed(t, e),
                    h = o !== j;
                return h && ((a = t.__filtered) || (s = this.getSource(t), (a = t.__filtered = R.create(s)).__unfiltered = s), a[e] = j), this.read(h ? [o] : t, n, i, r)
            },
            readSupported: function (n, i) {
                var t = this.getSource(n),
                    r = this,
                    s = !1;
                return t && Object.keys(t).forEach(function (t) {
                    var e;
                    t in i && ((e = r.readNamed(n, t)) !== j && (i[t] = e), s = !0)
                }), s
            },
            getSource: function (t) {
                var e, n = t.__source;
                return n === j && (e = 1 === t.length && t[0], n = t.__source = e && R.isPlainObject(e) ? e : null), n
            },
            getNamed: function (t, e) {
                var n = this.getSource(t);
                if (n) return e ? n[e] : t.__filtered || n
            },
            hasNamed: function (t, e) {
                return !!this.getNamed(t, e)
            },
            filter: function (n, i, r, t) {
                var s;

                function e(t) {
                    var e;
                    r && t in r || s && t in s || (e = i[t]) !== j && (n[t] = e)
                }
                if (t) {
                    for (var a, o = {}, h = 0, u = t.length; h < u; h++)(a = t[h]) in i && (e(a), o[a] = !0);
                    s = o
                }
                return Object.keys(i.__unfiltered || i).forEach(e), n
            },
            isPlainValue: function (t, e) {
                return R.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t
            },
            serialize: function (t, e, n, i) {
                e = e || {};
                var r = !i;
                if (r && (e.formatter = new x(e.precision), i = {
                        length: 0,
                        definitions: {},
                        references: {},
                        add: function (t, e) {
                            var n = "#" + t._id,
                                i = this.references[n];
                            return i || (this.length++, e = e.call(t), (t = t._class) && e[0] !== t && e.unshift(t), this.definitions[n] = e, i = this.references[n] = [n]), i
                        }
                    }), t && t._serialize) {
                    var s = t._serialize(e, i),
                        a = t._class;
                    !a || t._compactSerialize || !r && n || s[0] === a || s.unshift(a)
                } else if (Array.isArray(t)) {
                    s = [];
                    for (var o = 0, h = t.length; o < h; o++) s[o] = R.serialize(t[o], e, n, i)
                } else if (R.isPlainObject(t)) {
                    s = {};
                    for (var u = Object.keys(t), o = 0, h = u.length; o < h; o++) {
                        var l = u[o];
                        s[l] = R.serialize(t[l], e, n, i)
                    }
                } else s = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                return r && 0 < i.length ? [
                    ["dictionary", i.definitions], s
                ] : s
            },
            deserialize: function (t, e, n, i, r) {
                var s = t,
                    a = !n,
                    o = a && t && t.length && "dictionary" === t[0][0];
                if (n = n || {}, Array.isArray(t)) {
                    var h = t[0],
                        u = "dictionary" === h;
                    if (1 == t.length && /^#/.test(h)) return n.dictionary[h];
                    s = [];
                    for (var l, c = (h = R.exports[h]) ? 1 : 0, f = t.length; c < f; c++) s.push(R.deserialize(t[c], e, n, u, o));
                    h && (l = s, s = e ? e(h, l, a || r) : new h(l))
                } else if (R.isPlainObject(t))
                    for (var d in s = {}, i && (n.dictionary = s), t) s[d] = R.deserialize(t[d], e, n);
                return o ? s[1] : s
            },
            exportJSON: function (t, e) {
                t = R.serialize(t, e);
                return e && 0 == e.asString ? t : JSON.stringify(t)
            },
            importJSON: function (t, s) {
                return R.deserialize("string" == typeof t ? JSON.parse(t) : t, function (t, e, n) {
                    var i = n && s && s.constructor === t,
                        r = i ? s : R.create(t.prototype);
                    return !(1 === e.length && r instanceof V) || !i && r instanceof a || (n = e[0], R.isPlainObject(n) && (n.insert = !1, i && (e = e.concat([{
                        insert: !0
                    }])))), (i ? r.set : t).apply(r, e), i && (s = null), r
                })
            },
            push: function (t, e) {
                var n = e.length;
                if (n < 4096) t.push.apply(t, e);
                else {
                    var i = t.length;
                    t.length += n;
                    for (var r = 0; r < n; r++) t[i + r] = e[r]
                }
                return t
            },
            splice: function (t, e, n, i) {
                var r = e && e.length,
                    s = n === j;
                (n = s ? t.length : n) > t.length && (n = t.length);
                for (var a = 0; a < r; a++) e[a]._index = n + a;
                if (s) return R.push(t, e), [];
                i = [n, i];
                e && R.push(i, e);
                for (var o = t.splice.apply(t, i), a = 0, h = o.length; a < h; a++) o[a]._index = j;
                for (a = n + r, h = t.length; a < h; a++) t[a]._index = a;
                return o
            },
            capitalize: function (t) {
                return t.replace(/\b[a-z]/g, function (t) {
                    return t.toUpperCase()
                })
            },
            camelize: function (t) {
                return t.replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase()
                })
            },
            hyphenate: function (t) {
                return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }
        }
    });
    var t = {
            on: function (t, e) {
                var n, i;
                return "string" != typeof t ? R.each(t, function (t, e) {
                    this.on(e, t)
                }, this) : (n = (i = this._eventTypes) && i[t], -1 === (i = (i = this._callbacks = this._callbacks || {})[t] = i[t] || []).indexOf(e) && (i.push(e), n && n.install && 1 === i.length && n.install.call(this, t))), this
            },
            off: function (t, e) {
                if ("string" == typeof t) {
                    var n, i = this._eventTypes,
                        r = i && i[t],
                        i = this._callbacks && this._callbacks[t];
                    return i && (!e || -1 !== (n = i.indexOf(e)) && 1 === i.length ? (r && r.uninstall && r.uninstall.call(this, t), delete this._callbacks[t]) : -1 !== n && i.splice(n, 1)), this
                }
                R.each(t, function (t, e) {
                    this.off(e, t)
                }, this)
            },
            once: function (e, n) {
                return this.on(e, function t() {
                    n.apply(this, arguments), this.off(e, t)
                })
            },
            emit: function (t, e) {
                if (!(r = this._callbacks && this._callbacks[t])) return !1;
                var n = R.slice(arguments, 1),
                    i = e && e.target && !e.currentTarget,
                    r = r.slice();
                i && (e.currentTarget = this);
                for (var s = 0, a = r.length; s < a; s++)
                    if (0 == r[s].apply(this, n)) {
                        e && e.stop && e.stop();
                        break
                    } return i && delete e.currentTarget, !0
            },
            responds: function (t) {
                return !(!this._callbacks || !this._callbacks[t])
            },
            attach: "#on",
            detach: "#off",
            fire: "#emit",
            _installEvents: function (t) {
                var e, n = this._eventTypes,
                    i = this._callbacks,
                    r = t ? "install" : "uninstall";
                if (n)
                    for (var s in i) 0 < i[s].length && ((e = (e = n[s]) && e[r]) && e.call(this, s))
            },
            statics: {
                inject: function t(s) {
                    var a, e = s._events;
                    return e && (a = {}, R.each(e, function (t, e) {
                        var n = "string" == typeof t,
                            i = n ? t : e,
                            e = R.capitalize(i),
                            r = i.substring(2).toLowerCase();
                        a[r] = n ? {} : t, i = "_" + i, s["get" + e] = function () {
                            return this[i]
                        }, s["set" + e] = function (t) {
                            var e = this[i];
                            e && this.off(r, e), t && this.on(r, t), this[i] = t
                        }
                    }), s._eventTypes = a), t.base.apply(this, arguments)
                }
            }
        },
        l = R.extend({
            _class: "PaperScope",
            initialize: function t() {
                (Bt = this).settings = new R({
                    applyMatrix: !0,
                    insertItems: !0,
                    handleSize: 4,
                    hitTolerance: 0
                }), this.project = null, this.projects = [], this.tools = [], this._id = t._id++, t._scopes[this._id] = this;
                var e, n, s, i = t.prototype;
                this.support || (n = ut.getContext(1, 1) || {}, i.support = {
                    nativeDash: "setLineDash" in n || "mozDash" in n,
                    nativeBlendModes: lt.nativeModes
                }, ut.release(n)), this.agent || (e = w.navigator.userAgent.toLowerCase(), n = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(e) || [])[0], s = i.agent = i.browser = {
                    platform: n = "darwin" === n ? "mac" : n
                }, n && (s[n] = !0), e.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, function (t, e, n, i, r) {
                    s.chrome || (n = "opera" === e ? i : /^(node|trident)$/.test(e) ? r : n, s.version = n, s.versionNumber = parseFloat(n), s.name = e = {
                        trident: "msie",
                        jsdom: "node"
                    } [e] || e, s[e] = !0)
                }), s.chrome && delete s.webkit, s.atom && delete s.chrome)
            },
            version: "0.12.15",
            getView: function () {
                var t = this.project;
                return t && t._view
            },
            getPaper: function () {
                return this
            },
            execute: function (t, e) {
                e = Bt.PaperScript.execute(t, this, e);
                return Y.updateFocus(), e
            },
            install: function (e) {
                var t, n = this;
                for (t in R.each(["project", "view", "tool"], function (t) {
                        R.define(e, t, {
                            configurable: !0,
                            get: function () {
                                return n[t]
                            }
                        })
                    }), this) !/^_/.test(t) && this[t] && (e[t] = this[t])
            },
            setup: function (t) {
                return (Bt = this).project = new i(t), this
            },
            createCanvas: function (t, e) {
                return ut.getCanvas(t, e)
            },
            activate: function () {
                Bt = this
            },
            clear: function () {
                for (var t = this.projects, e = this.tools, n = t.length - 1; 0 <= n; n--) t[n].remove();
                for (n = e.length - 1; 0 <= n; n--) e[n].remove()
            },
            remove: function () {
                this.clear(), delete l._scopes[this._id]
            },
            statics: new function () {
                function t(n) {
                    return n += "Attribute",
                        function (t, e) {
                            return t[n](e) || t[n]("data-paper-" + e)
                        }
                }
                return {
                    _scopes: {},
                    _id: 0,
                    get: function (t) {
                        return this._scopes[t] || null
                    },
                    getAttribute: t("get"),
                    hasAttribute: t("has")
                }
            }
        }),
        e = R.extend(t, {
            initialize: function (t) {
                this._scope = Bt, this._index = this._scope[this._list].push(this) - 1, !t && this._scope[this._reference] || this.activate()
            },
            activate: function () {
                if (!this._scope) return !1;
                var t = this._scope[this._reference];
                return t && t !== this && t.emit("deactivate"), (this._scope[this._reference] = this).emit("activate", t), !0
            },
            isActive: function () {
                return this._scope[this._reference] === this
            },
            remove: function () {
                return null != this._index && (R.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), !(this._scope = null))
            },
            getView: function () {
                return this._scope.getView()
            }
        }),
        D = {
            findItemBoundsCollisions: function (t, e, n) {
                function i(t) {
                    for (var e = new Array(t.length), n = 0; n < t.length; n++) {
                        var i = t[n].getBounds();
                        e[n] = [i.left, i.top, i.right, i.bottom]
                    }
                    return e
                }
                var r = i(t),
                    e = e && e !== t ? i(e) : r;
                return this.findBoundsCollisions(r, e, n || 0)
            },
            findCurveBoundsCollisions: function (t, e, n, i) {
                function r(t) {
                    for (var e = Math.min, n = Math.max, i = new Array(t.length), r = 0; r < t.length; r++) {
                        var s = t[r];
                        i[r] = [e(s[0], s[2], s[4], s[6]), e(s[1], s[3], s[5], s[7]), n(s[0], s[2], s[4], s[6]), n(s[1], s[3], s[5], s[7])]
                    }
                    return i
                }
                var s = r(t),
                    e = e && e !== t ? r(e) : s;
                if (i) {
                    for (var a = this.findBoundsCollisions(s, e, n || 0, !1, !0), o = this.findBoundsCollisions(s, e, n || 0, !0, !0), h = [], u = 0, l = a.length; u < l; u++) h[u] = {
                        hor: a[u],
                        ver: o[u]
                    };
                    return h
                }
                return this.findBoundsCollisions(s, e, n || 0)
            },
            findBoundsCollisions: function (t, e, n, i, r) {
                var s = !e || t === e,
                    a = s ? t : t.concat(e),
                    o = t.length,
                    h = a.length;

                function u(t, e, n) {
                    for (var i = 0, r = t.length; i < r;) {
                        var s = r + i >>> 1;
                        a[t[s]][e] < n ? i = 1 + s : r = s
                    }
                    return i - 1
                }
                for (var l = i ? 1 : 0, c = 2 + l, f = i ? 0 : 1, d = 2 + f, _ = new Array(h), g = 0; g < h; g++) _[g] = g;
                _.sort(function (t, e) {
                    return a[t][l] - a[e][l]
                });
                for (var p = [], v = new Array(o), g = 0; g < h; g++) {
                    var m = _[g],
                        y = a[m],
                        w = s ? m : m - o,
                        x = m < o,
                        b = s || !x,
                        C = x ? [] : null;
                    if (p.length) {
                        var S = u(p, c, y[l] - n) + 1;
                        if (p.splice(0, S), s && r)
                            for (var C = C.concat(p), k = 0; k < p.length; k++) v[M = p[k]].push(w);
                        else
                            for (var I = y[d], P = y[f], k = 0; k < p.length; k++) {
                                var M = p[k],
                                    A = a[M],
                                    T = M < o,
                                    O = s || o <= M;
                                (r || (x && O || b && T) && I >= A[f] - n && P <= A[d] + n) && (x && O && C.push(s ? M : M - o), b && T && v[M].push(w))
                            }
                    }
                    x && (t === e && C.push(m), v[m] = C), p.length ? (y = u(p, c, y[c]), p.splice(y + 1, 0, m)) : p.push(m)
                }
                for (g = 0; g < v.length; g++) {
                    var z = v[g];
                    z && z.sort(function (t, e) {
                        return t - e
                    })
                }
                return v
            }
        },
        x = R.extend({
            initialize: function (t) {
                this.precision = R.pick(t, 5), this.multiplier = Math.pow(10, this.precision)
            },
            number: function (t) {
                return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t
            },
            pair: function (t, e, n) {
                return this.number(t) + (n || ",") + this.number(e)
            },
            point: function (t, e) {
                return this.number(t.x) + (e || ",") + this.number(t.y)
            },
            size: function (t, e) {
                return this.number(t.width) + (e || ",") + this.number(t.height)
            },
            rectangle: function (t, e) {
                return this.point(t, e) + (e || ",") + this.size(t, e)
            }
        });
    x.instance = new x;
    var q = new function () {
            var f = [
                    [.5773502691896257],
                    [0, .7745966692414834],
                    [.33998104358485626, .8611363115940526],
                    [0, .5384693101056831, .906179845938664],
                    [.2386191860831969, .6612093864662645, .932469514203152],
                    [0, .4058451513773972, .7415311855993945, .9491079123427585],
                    [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                    [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                    [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                    [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                    [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                    [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                    [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                    [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                    [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                ],
                d = [
                    [1],
                    [.8888888888888888, .5555555555555556],
                    [.6521451548625461, .34785484513745385],
                    [.5688888888888889, .47862867049936647, .23692688505618908],
                    [.46791393457269104, .3607615730481386, .17132449237917036],
                    [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                    [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                    [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                    [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                    [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                    [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                    [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                    [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                    [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                    [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                ],
                m = Math.abs,
                y = Math.sqrt,
                w = Math.pow,
                e = Math.log2 || function (t) {
                    return Math.log(t) * Math.LOG2E
                },
                x = 1e-12,
                b = 112e-18;

            function C(t, e, n) {
                return t < e ? e : n < t ? n : t
            }

            function _(t, e, n) {
                function i(t) {
                    var e = 134217729 * t,
                        e = t - e + e;
                    return [e, t - e]
                }
                var r, s, a = e * e - t * n,
                    o = e * e + t * n;
                return 3 * m(a) < o && (r = i(t), s = i(e), o = i(n), a = (e = e * e) - (n = t * n) + (s[0] * s[0] - e + 2 * s[0] * s[1] + s[1] * s[1] - (r[0] * o[0] - n + r[0] * o[1] + r[1] * o[0] + r[1] * o[1]))), a
            }

            function S() {
                var t = Math.max.apply(Math, arguments);
                return t && (t < 1e-8 || 1e8 < t) ? w(2, -Math.round(e(t))) : 0
            }
            return {
                EPSILON: x,
                MACHINE_EPSILON: b,
                CURVETIME_EPSILON: 1e-8,
                GEOMETRIC_EPSILON: 1e-7,
                TRIGONOMETRIC_EPSILON: 1e-8,
                KAPPA: 4 * (y(2) - 1) / 3,
                isZero: function (t) {
                    return -x <= t && t <= x
                },
                isMachineZero: function (t) {
                    return -b <= t && t <= b
                },
                clamp: C,
                integrate: function (t, e, n, i) {
                    for (var r = f[i - 2], s = d[i - 2], a = .5 * (n - e), o = a + e, h = 0, u = i + 1 >> 1, l = 1 & i ? s[h++] * t(o) : 0; h < u;) {
                        var c = a * r[h];
                        l += s[h++] * (t(o + c) + t(o - c))
                    }
                    return a * l
                },
                findRoot: function (t, e, n, i, r, s, a) {
                    for (var o = 0; o < s; o++) {
                        var h = t(n),
                            u = h / e(n),
                            l = n - u;
                        if (m(u) < a) {
                            n = l;
                            break
                        }
                        n = 0 < h ? (r = n, l <= i ? .5 * (i + r) : l) : (i = n, r <= l ? .5 * (i + r) : l)
                    }
                    return C(n, i, r)
                },
                solveQuadratic: function (t, e, n, i, r, s) {
                    var a, o = 1 / 0;
                    if (m(t) < x) {
                        if (m(e) < x) return m(n) < x ? -1 : 0;
                        a = -n / e
                    } else {
                        var h, u = _(t, e *= -.5, n);
                        u && m(u) < b && ((h = S(m(t), m(e), m(n))) && (u = _(t *= h, e *= h, n *= h))), -b <= u && (l = u < 0 ? 0 : y(u), o = 0 === (c = e + (e < 0 ? -l : l)) ? -(a = n / t) : (a = c / t, n / c))
                    }
                    var l = 0,
                        t = null == r,
                        n = r - x,
                        c = s + x;
                    return isFinite(a) && (t || n < a && a < c) && (i[l++] = t ? a : C(a, r, s)), o !== a && isFinite(o) && (t || n < o && o < c) && (i[l++] = t ? o : C(o, r, s)), l
                },
                solveCubic: function (e, n, i, r, t, s, a) {
                    var o, h, u, l, c, f = S(m(e), m(n), m(i), m(r));

                    function d(t) {
                        t = e * (o = t);
                        l = (t + (h = t + n)) * o + (u = h * o + i), c = u * o + r
                    }
                    if (f && (e *= f, n *= f, i *= f, r *= f), m(e) < x) e = n, h = i, u = r, o = 1 / 0;
                    else if (m(r) < x) h = n, u = i, o = 0;
                    else {
                        d(-n / e / 3);
                        var _ = c / e,
                            g = w(m(_), 1 / 3),
                            p = _ < 0 ? -1 : 1,
                            _ = -l / e,
                            _ = 0 < _ ? 1.324717957244746 * Math.max(g, y(_)) : g,
                            v = o - p * _;
                        if (v !== o) {
                            for (; d(v), v = 0 === l ? o : o - c / l / (1 + b), p * o < p * v;);
                            m(e) * o * o > m(r / o) && (h = ((u = -r / o) - i) / o)
                        }
                    }
                    g = q.solveQuadratic(e, h, u, t, s, a), _ = null == s;
                    return isFinite(o) && (0 === g || 0 < g && o !== t[0] && o !== t[1]) && (_ || s - x < o && o < a + x) && (t[g++] = _ ? o : C(o, s, a)), g
                }
            }
        },
        o = {
            _id: 1,
            _pools: {},
            get: function (t) {
                if (t) {
                    var e = this._pools[t];
                    return (e = e || (this._pools[t] = {
                        _id: 1
                    }))._id++
                }
                return this._id++
            }
        },
        E = R.extend({
            _class: "Point",
            _readIndex: !0,
            initialize: function (t, e) {
                var n, i = typeof t,
                    r = this.__read,
                    s = 0;
                return "number" == i ? (this._set(t, (n = "number" == typeof e) ? e : t), r && (s = n ? 2 : 1)) : "undefined" == i || null === t ? (this._set(0, 0), r && (s = null === t ? 1 : 0)) : (t = "string" == i ? t.split(/[\s,]+/) || [] : t, s = 1, Array.isArray(t) ? this._set(+t[0], +(1 < t.length ? t[1] : t[0])) : "x" in t ? this._set(t.x || 0, t.y || 0) : "width" in t ? this._set(t.width || 0, t.height || 0) : "angle" in t ? (this._set(t.length || 0, 0), this.setAngle(t.angle || 0)) : (this._set(0, 0), s = 0)), r && (this.__read = s), this
            },
            set: "#initialize",
            _set: function (t, e) {
                return this.x = t, this.y = e, this
            },
            equals: function (t) {
                return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1
            },
            clone: function () {
                return new E(this.x, this.y)
            },
            toString: function () {
                var t = x.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
            },
            _serialize: function (t) {
                t = t.formatter;
                return [t.number(this.x), t.number(this.y)]
            },
            getLength: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            setLength: function (t) {
                var e;
                this.isZero() ? (e = this._angle || 0, this._set(Math.cos(e) * t, Math.sin(e) * t)) : (t = t / this.getLength(), q.isZero(t) && this.getAngle(), this._set(this.x * t, this.y * t))
            },
            getAngle: function () {
                return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
            },
            setAngle: function (t) {
                this.setAngleInRadians.call(this, t * Math.PI / 180)
            },
            getAngleInDegrees: "#getAngle",
            setAngleInDegrees: "#setAngle",
            getAngleInRadians: function () {
                if (arguments.length) {
                    var t = E.read(arguments),
                        e = this.getLength() * t.getLength();
                    if (q.isZero(e)) return NaN;
                    e = this.dot(t) / e;
                    return Math.acos(e < -1 ? -1 : 1 < e ? 1 : e)
                }
                return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
            },
            setAngleInRadians: function (t) {
                var e;
                this._angle = t, this.isZero() || (e = this.getLength(), this._set(Math.cos(t) * e, Math.sin(t) * e))
            },
            getQuadrant: function () {
                return 0 <= this.x ? 0 <= this.y ? 1 : 4 : 0 <= this.y ? 2 : 3
            }
        }, {
            beans: !1,
            getDirectedAngle: function () {
                var t = E.read(arguments);
                return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
            },
            getDistance: function () {
                var t = arguments,
                    e = E.read(t),
                    n = e.x - this.x,
                    e = e.y - this.y,
                    e = n * n + e * e;
                return R.read(t) ? e : Math.sqrt(e)
            },
            normalize: function (t) {
                t === j && (t = 1);
                var e = this.getLength(),
                    t = 0 !== e ? t / e : 0,
                    e = new E(this.x * t, this.y * t);
                return 0 <= t && (e._angle = this._angle), e
            },
            rotate: function (t, e) {
                if (0 === t) return this.clone();
                t = t * Math.PI / 180;
                var n = e ? this.subtract(e) : this,
                    i = Math.sin(t),
                    t = Math.cos(t),
                    n = new E(n.x * t - n.y * i, n.x * i + n.y * t);
                return e ? n.add(e) : n
            },
            transform: function (t) {
                return t ? t._transformPoint(this) : this
            },
            add: function () {
                var t = E.read(arguments);
                return new E(this.x + t.x, this.y + t.y)
            },
            subtract: function () {
                var t = E.read(arguments);
                return new E(this.x - t.x, this.y - t.y)
            },
            multiply: function () {
                var t = E.read(arguments);
                return new E(this.x * t.x, this.y * t.y)
            },
            divide: function () {
                var t = E.read(arguments);
                return new E(this.x / t.x, this.y / t.y)
            },
            modulo: function () {
                var t = E.read(arguments);
                return new E(this.x % t.x, this.y % t.y)
            },
            negate: function () {
                return new E(-this.x, -this.y)
            },
            isInside: function () {
                return b.read(arguments).contains(this)
            },
            isClose: function () {
                var t = arguments,
                    e = E.read(t),
                    t = R.read(t);
                return this.getDistance(e) <= t
            },
            isCollinear: function () {
                var t = E.read(arguments);
                return E.isCollinear(this.x, this.y, t.x, t.y)
            },
            isColinear: "#isCollinear",
            isOrthogonal: function () {
                var t = E.read(arguments);
                return E.isOrthogonal(this.x, this.y, t.x, t.y)
            },
            isZero: function () {
                var t = q.isZero;
                return t(this.x) && t(this.y)
            },
            isNaN: function () {
                return isNaN(this.x) || isNaN(this.y)
            },
            isInQuadrant: function (t) {
                return 0 <= this.x * (1 < t && t < 4 ? -1 : 1) && 0 <= this.y * (2 < t ? -1 : 1)
            },
            dot: function () {
                var t = E.read(arguments);
                return this.x * t.x + this.y * t.y
            },
            cross: function () {
                var t = E.read(arguments);
                return this.x * t.y - this.y * t.x
            },
            project: function () {
                var t = E.read(arguments),
                    e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                return new E(t.x * e, t.y * e)
            },
            statics: {
                min: function () {
                    var t = arguments,
                        e = E.read(t),
                        t = E.read(t);
                    return new E(Math.min(e.x, t.x), Math.min(e.y, t.y))
                },
                max: function () {
                    var t = arguments,
                        e = E.read(t),
                        t = E.read(t);
                    return new E(Math.max(e.x, t.x), Math.max(e.y, t.y))
                },
                random: function () {
                    return new E(Math.random(), Math.random())
                },
                isCollinear: function (t, e, n, i) {
                    return Math.abs(t * i - e * n) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                },
                isOrthogonal: function (t, e, n, i) {
                    return Math.abs(t * n + e * i) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                }
            }
        }, R.each(["round", "ceil", "floor", "abs"], function (t) {
            var e = Math[t];
            this[t] = function () {
                return new E(e(this.x), e(this.y))
            }
        }, {})),
        u = E.extend({
            initialize: function (t, e, n, i) {
                this._x = t, this._y = e, this._owner = n, this._setter = i
            },
            _set: function (t, e, n) {
                return this._x = t, this._y = e, n || this._owner[this._setter](this), this
            },
            getX: function () {
                return this._x
            },
            setX: function (t) {
                this._x = t, this._owner[this._setter](this)
            },
            getY: function () {
                return this._y
            },
            setY: function (t) {
                this._y = t, this._owner[this._setter](this)
            },
            isSelected: function () {
                return !!(this._owner._selection & this._getSelection())
            },
            setSelected: function (t) {
                this._owner._changeSelection(this._getSelection(), t)
            },
            _getSelection: function () {
                return "setPosition" === this._setter ? 4 : 0
            }
        }),
        O = R.extend({
            _class: "Size",
            _readIndex: !0,
            initialize: function (t, e) {
                var n, i = typeof t,
                    r = this.__read,
                    s = 0;
                return "number" == i ? (this._set(t, (n = "number" == typeof e) ? e : t), r && (s = n ? 2 : 1)) : "undefined" == i || null === t ? (this._set(0, 0), r && (s = null === t ? 1 : 0)) : (t = "string" == i ? t.split(/[\s,]+/) || [] : t, s = 1, Array.isArray(t) ? this._set(+t[0], +(1 < t.length ? t[1] : t[0])) : "width" in t ? this._set(t.width || 0, t.height || 0) : "x" in t ? this._set(t.x || 0, t.y || 0) : (this._set(0, 0), s = 0)), r && (this.__read = s), this
            },
            set: "#initialize",
            _set: function (t, e) {
                return this.width = t, this.height = e, this
            },
            equals: function (t) {
                return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1
            },
            clone: function () {
                return new O(this.width, this.height)
            },
            toString: function () {
                var t = x.instance;
                return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function (t) {
                t = t.formatter;
                return [t.number(this.width), t.number(this.height)]
            },
            add: function () {
                var t = O.read(arguments);
                return new O(this.width + t.width, this.height + t.height)
            },
            subtract: function () {
                var t = O.read(arguments);
                return new O(this.width - t.width, this.height - t.height)
            },
            multiply: function () {
                var t = O.read(arguments);
                return new O(this.width * t.width, this.height * t.height)
            },
            divide: function () {
                var t = O.read(arguments);
                return new O(this.width / t.width, this.height / t.height)
            },
            modulo: function () {
                var t = O.read(arguments);
                return new O(this.width % t.width, this.height % t.height)
            },
            negate: function () {
                return new O(-this.width, -this.height)
            },
            isZero: function () {
                var t = q.isZero;
                return t(this.width) && t(this.height)
            },
            isNaN: function () {
                return isNaN(this.width) || isNaN(this.height)
            },
            statics: {
                min: function (t, e) {
                    return new O(Math.min(t.width, e.width), Math.min(t.height, e.height))
                },
                max: function (t, e) {
                    return new O(Math.max(t.width, e.width), Math.max(t.height, e.height))
                },
                random: function () {
                    return new O(Math.random(), Math.random())
                }
            }
        }, R.each(["round", "ceil", "floor", "abs"], function (t) {
            var e = Math[t];
            this[t] = function () {
                return new O(e(this.width), e(this.height))
            }
        }, {})),
        n = O.extend({
            initialize: function (t, e, n, i) {
                this._width = t, this._height = e, this._owner = n, this._setter = i
            },
            _set: function (t, e, n) {
                return this._width = t, this._height = e, n || this._owner[this._setter](this), this
            },
            getWidth: function () {
                return this._width
            },
            setWidth: function (t) {
                this._width = t, this._owner[this._setter](this)
            },
            getHeight: function () {
                return this._height
            },
            setHeight: function (t) {
                this._height = t, this._owner[this._setter](this)
            }
        }),
        b = R.extend({
            _class: "Rectangle",
            _readIndex: !0,
            beans: !0,
            initialize: function (t, e, n, i) {
                var r, s, a, o, h, u, l = arguments,
                    c = typeof t;
                "number" == c ? (this._set(t, e, n, i), r = 4) : "undefined" == c || null === t ? (this._set(0, 0, 0, 0), r = null === t ? 1 : 0) : 1 === l.length && (Array.isArray(t) ? (this._set.apply(this, t), r = 1) : t.x !== j || t.width !== j ? (this._set(t.x || 0, t.y || 0, t.width || 0, t.height || 0), r = 1) : t.from === j && t.to === j && (this._set(0, 0, 0, 0), R.readSupported(l, this) && (r = 1))), r === j && (a = E.readNamed(l, "from"), s = R.peek(l), c = a.x, a = a.y, s && s.x !== j || R.hasNamed(l, "to") ? (o = (u = E.readNamed(l, "to")).x - c, h = u.y - a, o < 0 && (c = u.x, o = -o), h < 0 && (a = u.y, h = -h)) : (o = (u = O.read(l)).width, h = u.height), this._set(c, a, o, h), r = l.__index);
                l = l.__filtered;
                return l && (this.__filtered = l), this.__read && (this.__read = r), this
            },
            set: "#initialize",
            _set: function (t, e, n, i) {
                return this.x = t, this.y = e, this.width = n, this.height = i, this
            },
            clone: function () {
                return new b(this.x, this.y, this.width, this.height)
            },
            equals: function (t) {
                var e = R.isPlainValue(t) ? b.read(arguments) : t;
                return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1
            },
            toString: function () {
                var t = x.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function (t) {
                t = t.formatter;
                return [t.number(this.x), t.number(this.y), t.number(this.width), t.number(this.height)]
            },
            getPoint: function (t) {
                return new(t ? E : u)(this.x, this.y, this, "setPoint")
            },
            setPoint: function () {
                var t = E.read(arguments);
                this.x = t.x, this.y = t.y
            },
            getSize: function (t) {
                return new(t ? O : n)(this.width, this.height, this, "setSize")
            },
            _fw: 1,
            _fh: 1,
            setSize: function () {
                var t = O.read(arguments),
                    e = this._sx,
                    n = this._sy,
                    i = t.width,
                    t = t.height;
                e && (this.x += (this.width - i) * e), n && (this.y += (this.height - t) * n), this.width = i, this.height = t, this._fw = this._fh = 1
            },
            getLeft: function () {
                return this.x
            },
            setLeft: function (t) {
                var e;
                this._fw || (e = t - this.x, this.width -= .5 === this._sx ? 2 * e : e), this.x = t, this._sx = this._fw = 0
            },
            getTop: function () {
                return this.y
            },
            setTop: function (t) {
                var e;
                this._fh || (e = t - this.y, this.height -= .5 === this._sy ? 2 * e : e), this.y = t, this._sy = this._fh = 0
            },
            getRight: function () {
                return this.x + this.width
            },
            setRight: function (t) {
                var e;
                this._fw || (e = t - this.x, this.width = .5 === this._sx ? 2 * e : e), this.x = t - this.width, this._sx = 1, this._fw = 0
            },
            getBottom: function () {
                return this.y + this.height
            },
            setBottom: function (t) {
                var e;
                this._fh || (e = t - this.y, this.height = .5 === this._sy ? 2 * e : e), this.y = t - this.height, this._sy = 1, this._fh = 0
            },
            getCenterX: function () {
                return this.x + this.width / 2
            },
            setCenterX: function (t) {
                this._fw || .5 === this._sx ? this.x = t - this.width / 2 : (this._sx && (this.x += 2 * (t - this.x) * this._sx), this.width = 2 * (t - this.x)), this._sx = .5, this._fw = 0
            },
            getCenterY: function () {
                return this.y + this.height / 2
            },
            setCenterY: function (t) {
                this._fh || .5 === this._sy ? this.y = t - this.height / 2 : (this._sy && (this.y += 2 * (t - this.y) * this._sy), this.height = 2 * (t - this.y)), this._sy = .5, this._fh = 0
            },
            getCenter: function (t) {
                return new(t ? E : u)(this.getCenterX(), this.getCenterY(), this, "setCenter")
            },
            setCenter: function () {
                var t = E.read(arguments);
                return this.setCenterX(t.x), this.setCenterY(t.y), this
            },
            getArea: function () {
                return this.width * this.height
            },
            isEmpty: function () {
                return 0 === this.width || 0 === this.height
            },
            contains: function (t) {
                return t && t.width !== j || 4 === (Array.isArray(t) ? t : arguments).length ? this._containsRectangle(b.read(arguments)) : this._containsPoint(E.read(arguments))
            },
            _containsPoint: function (t) {
                var e = t.x,
                    t = t.y;
                return e >= this.x && t >= this.y && e <= this.x + this.width && t <= this.y + this.height
            },
            _containsRectangle: function (t) {
                var e = t.x,
                    n = t.y;
                return e >= this.x && n >= this.y && e + t.width <= this.x + this.width && n + t.height <= this.y + this.height
            },
            intersects: function () {
                var t = b.read(arguments),
                    e = R.read(arguments) || 0;
                return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e
            },
            intersect: function () {
                var t = b.read(arguments),
                    e = Math.max(this.x, t.x),
                    n = Math.max(this.y, t.y),
                    i = Math.min(this.x + this.width, t.x + t.width),
                    t = Math.min(this.y + this.height, t.y + t.height);
                return new b(e, n, i - e, t - n)
            },
            unite: function () {
                var t = b.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x + t.width),
                    t = Math.max(this.y + this.height, t.y + t.height);
                return new b(e, n, i - e, t - n)
            },
            include: function () {
                var t = E.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x),
                    t = Math.max(this.y + this.height, t.y);
                return new b(e, n, i - e, t - n)
            },
            expand: function () {
                var t = O.read(arguments),
                    e = t.width,
                    t = t.height;
                return new b(this.x - e / 2, this.y - t / 2, this.width + e, this.height + t)
            },
            scale: function (t, e) {
                return this.expand(this.width * t - this.width, this.height * (e === j ? t : e) - this.height)
            }
        }, R.each([
            ["Top", "Left"],
            ["Top", "Right"],
            ["Bottom", "Left"],
            ["Bottom", "Right"],
            ["Left", "Center"],
            ["Top", "Center"],
            ["Right", "Center"],
            ["Bottom", "Center"]
        ], function (t, e) {
            var n = t.join(""),
                i = /^[RL]/.test(n);
            4 <= e && (t[1] += i ? "Y" : "X");
            var e = t[i ? 0 : 1],
                i = t[i ? 1 : 0],
                r = "get" + e,
                s = "get" + i,
                a = "set" + e,
                o = "set" + i,
                h = "set" + n;
            this["get" + n] = function (t) {
                return new(t ? E : u)(this[r](), this[s](), this, h)
            }, this[h] = function () {
                var t = E.read(arguments);
                this[a](t.x), this[o](t.y)
            }
        }, {
            beans: !0
        })),
        r = b.extend({
            initialize: function (t, e, n, i, r, s) {
                this._set(t, e, n, i, !0), this._owner = r, this._setter = s
            },
            _set: function (t, e, n, i, r) {
                return this._x = t, this._y = e, this._width = n, this._height = i, r || this._owner[this._setter](this), this
            }
        }, new function () {
            var n = b.prototype;
            return R.each(["x", "y", "width", "height"], function (t) {
                var e = R.capitalize(t),
                    n = "_" + t;
                this["get" + e] = function () {
                    return this[n]
                }, this["set" + e] = function (t) {
                    this[n] = t, this._dontNotify || this._owner[this._setter](this)
                }
            }, R.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function (t) {
                var e = "set" + t;
                this[e] = function () {
                    this._dontNotify = !0, n[e].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this)
                }
            }, {
                isSelected: function () {
                    return !!(2 & this._owner._selection)
                },
                setSelected: function (t) {
                    var e = this._owner;
                    e._changeSelection && e._changeSelection(2, t)
                }
            }))
        }),
        z = R.extend({
            _class: "Matrix",
            initialize: function t(e, n) {
                var i = arguments,
                    r = i.length,
                    s = !0;
                if (6 <= r ? this._set.apply(this, i) : 1 === r || 2 === r ? e instanceof t ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, n) : Array.isArray(e) ? this._set.apply(this, n ? e.concat([n]) : e) : s = !1 : r ? s = !1 : this.reset(), !s) throw new Error("Unsupported matrix parameters");
                return this
            },
            set: "#initialize",
            _set: function (t, e, n, i, r, s, a) {
                return this._a = t, this._b = e, this._c = n, this._d = i, this._tx = r, this._ty = s, a || this._changed(), this
            },
            _serialize: function (t, e) {
                return R.serialize(this.getValues(), t, !0, e)
            },
            _changed: function () {
                var t = this._owner;
                t && (t._applyMatrix ? t.transform(null, !0) : t._changed(25))
            },
            clone: function () {
                return new z(this._a, this._b, this._c, this._d, this._tx, this._ty)
            },
            equals: function (t) {
                return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty
            },
            toString: function () {
                var t = x.instance;
                return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
            },
            reset: function (t) {
                return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this
            },
            apply: function (t, e) {
                var n = this._owner;
                return !!n && (n.transform(null, R.pick(t, !0), e), this.isIdentity())
            },
            translate: function () {
                var t = E.read(arguments),
                    e = t.x,
                    t = t.y;
                return this._tx += e * this._a + t * this._c, this._ty += e * this._b + t * this._d, this._changed(), this
            },
            scale: function () {
                var t = arguments,
                    e = E.read(t),
                    t = E.read(t, 0, {
                        readNull: !0
                    });
                return t && this.translate(t), this._a *= e.x, this._b *= e.x, this._c *= e.y, this._d *= e.y, t && this.translate(t.negate()), this._changed(), this
            },
            rotate: function (t) {
                t *= Math.PI / 180;
                var e = E.read(arguments, 1),
                    n = e.x,
                    i = e.y,
                    r = Math.cos(t),
                    s = Math.sin(t),
                    a = n - n * r + i * s,
                    o = i - n * s - i * r,
                    h = this._a,
                    e = this._b,
                    n = this._c,
                    i = this._d;
                return this._a = r * h + s * n, this._b = r * e + s * i, this._c = -s * h + r * n, this._d = -s * e + r * i, this._tx += a * h + o * n, this._ty += a * e + o * i, this._changed(), this
            },
            shear: function () {
                var t = arguments,
                    e = E.read(t),
                    n = E.read(t, 0, {
                        readNull: !0
                    });
                n && this.translate(n);
                var i = this._a,
                    t = this._b;
                return this._a += e.y * this._c, this._b += e.y * this._d, this._c += e.x * i, this._d += e.x * t, n && this.translate(n.negate()), this._changed(), this
            },
            skew: function () {
                var t = arguments,
                    e = E.read(t),
                    n = E.read(t, 0, {
                        readNull: !0
                    }),
                    t = Math.PI / 180,
                    t = new E(Math.tan(e.x * t), Math.tan(e.y * t));
                return this.shear(t, n)
            },
            append: function (t, e) {
                var n, i, r, s, a, o, h, u, l;
                return t && (n = this._a, i = this._b, r = this._c, s = this._d, a = t._a, o = t._c, h = t._b, u = t._d, l = t._tx, t = t._ty, this._a = a * n + h * r, this._c = o * n + u * r, this._b = a * i + h * s, this._d = o * i + u * s, this._tx += l * n + t * r, this._ty += l * i + t * s, e || this._changed()), this
            },
            prepend: function (t, e) {
                var n, i, r, s, a, o, h, u, l, c, f;
                return t && (n = this._a, i = this._b, r = this._c, s = this._d, a = this._tx, o = this._ty, h = t._a, u = t._c, l = t._b, c = t._d, f = t._tx, t = t._ty, this._a = h * n + u * i, this._c = h * r + u * s, this._b = l * n + c * i, this._d = l * r + c * s, this._tx = h * a + u * o + f, this._ty = l * a + c * o + t, e || this._changed()), this
            },
            appended: function (t) {
                return this.clone().append(t)
            },
            prepended: function (t) {
                return this.clone().prepend(t)
            },
            invert: function () {
                var t = this._a,
                    e = this._b,
                    n = this._c,
                    i = this._d,
                    r = this._tx,
                    s = this._ty,
                    a = t * i - e * n,
                    o = null;
                return a && !isNaN(a) && isFinite(r) && isFinite(s) && (this._a = i / a, this._b = -e / a, this._c = -n / a, this._d = t / a, this._tx = (n * s - i * r) / a, this._ty = (e * r - t * s) / a, o = this), o
            },
            inverted: function () {
                return this.clone().invert()
            },
            concatenate: "#append",
            preConcatenate: "#prepend",
            chain: "#appended",
            _shiftless: function () {
                return new z(this._a, this._b, this._c, this._d, 0, 0)
            },
            _orNullIfIdentity: function () {
                return this.isIdentity() ? null : this
            },
            isIdentity: function () {
                return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty
            },
            isInvertible: function () {
                var t = this._a * this._d - this._c * this._b;
                return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
            },
            isSingular: function () {
                return !this.isInvertible()
            },
            transform: function (t, e, n) {
                return arguments.length < 3 ? this._transformPoint(E.read(arguments)) : this._transformCoordinates(t, e, n)
            },
            _transformPoint: function (t, e, n) {
                var i = t.x,
                    t = t.y;
                return (e = e || new E)._set(i * this._a + t * this._c + this._tx, i * this._b + t * this._d + this._ty, n)
            },
            _transformCoordinates: function (t, e, n) {
                for (var i = 0, r = 2 * n; i < r; i += 2) {
                    var s = t[i],
                        a = t[i + 1];
                    e[i] = s * this._a + a * this._c + this._tx, e[i + 1] = s * this._b + a * this._d + this._ty
                }
                return e
            },
            _transformCorners: function (t) {
                var e = t.x,
                    n = t.y,
                    i = e + t.width,
                    t = n + t.height,
                    t = [e, n, i, n, i, t, e, t];
                return this._transformCoordinates(t, t, 4)
            },
            _transformBounds: function (t, e, n) {
                for (var i = this._transformCorners(t), r = i.slice(0, 2), s = r.slice(), a = 2; a < 8; a++) {
                    var o = i[a],
                        h = 1 & a;
                    o < r[h] ? r[h] = o : o > s[h] && (s[h] = o)
                }
                return (e = e || new b)._set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
            },
            inverseTransform: function () {
                return this._inverseTransform(E.read(arguments))
            },
            _inverseTransform: function (t, e, n) {
                var i = this._a,
                    r = this._b,
                    s = this._c,
                    a = this._d,
                    o = this._tx,
                    h = this._ty,
                    u = i * a - r * s,
                    l = null;
                return u && !isNaN(u) && isFinite(o) && isFinite(h) && (h = t.x - this._tx, t = t.y - this._ty, l = (e = e || new E)._set((h * a - t * s) / u, (t * i - h * r) / u, n)), l
            },
            decompose: function () {
                var t, e, n, i, r = this._a,
                    s = this._b,
                    a = this._c,
                    o = this._d,
                    h = r * o - s * a,
                    u = Math.sqrt,
                    l = Math.atan2,
                    c = 180 / Math.PI;
                return i = 0 !== r || 0 !== s ? (t = u(r * r + s * s), e = Math.acos(r / t) * (0 < s ? 1 : -1), n = [t, h / t], [l(r * a + s * o, t * t), 0]) : 0 !== a || 0 !== o ? (i = u(a * a + o * o), e = Math.asin(a / i) * (0 < o ? 1 : -1), n = [h / i, i], [0, l(r * a + s * o, i * i)]) : n = [e = 0, 0], {
                    translation: this.getTranslation(),
                    rotation: e * c,
                    scaling: new E(n),
                    skewing: new E(i[0] * c, i[1] * c)
                }
            },
            getValues: function () {
                return [this._a, this._b, this._c, this._d, this._tx, this._ty]
            },
            getTranslation: function () {
                return new E(this._tx, this._ty)
            },
            getScaling: function () {
                return this.decompose().scaling
            },
            getRotation: function () {
                return this.decompose().rotation
            },
            applyToContext: function (t) {
                this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty)
            }
        }, R.each(["a", "b", "c", "d", "tx", "ty"], function (t) {
            var e = R.capitalize(t),
                n = "_" + t;
            this["get" + e] = function () {
                return this[n]
            }, this["set" + e] = function (t) {
                this[n] = t, this._changed()
            }
        }, {})),
        L = R.extend({
            _class: "Line",
            initialize: function (t, e, n, i, r) {
                (4 <= arguments.length ? (this._px = t, this._py = e, this._vx = n, this._vy = i, r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, n)) || (this._vx -= this._px, this._vy -= this._py)
            },
            getPoint: function () {
                return new E(this._px, this._py)
            },
            getVector: function () {
                return new E(this._vx, this._vy)
            },
            getLength: function () {
                return this.getVector().getLength()
            },
            intersect: function (t, e) {
                return L.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e)
            },
            getSide: function (t, e) {
                return L.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e)
            },
            getDistance: function (t) {
                return Math.abs(this.getSignedDistance(t))
            },
            getSignedDistance: function (t) {
                return L.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0)
            },
            isCollinear: function (t) {
                return E.isCollinear(this._vx, this._vy, t._vx, t._vy)
            },
            isOrthogonal: function (t) {
                return E.isOrthogonal(this._vx, this._vy, t._vx, t._vy)
            },
            statics: {
                intersect: function (t, e, n, i, r, s, a, o, h, u) {
                    h || (n -= t, i -= e, a -= r, o -= s);
                    h = n * o - i * a;
                    if (!q.isMachineZero(h)) {
                        r = t - r, s = e - s, o = (a * s - o * r) / h, h = (n * s - i * r) / h;
                        if (u || -1e-12 < o && o < 1 + 1e-12 && -1e-12 < h && h < 1 + 1e-12) return new E(t + (o = !u ? o <= 0 ? 0 : 1 <= o ? 1 : o : o) * n, e + o * i)
                    }
                },
                getSide: function (t, e, n, i, r, s, a, o) {
                    a || (n -= t, i -= e);
                    t = r - t, e = t * i - (s - e) * n;
                    return (e = !o && q.isMachineZero(e) && 0 <= (e = (t * n + t * n) / (n * n + i * i)) && e <= 1 ? 0 : e) < 0 ? -1 : 0 < e ? 1 : 0
                },
                getSignedDistance: function (t, e, n, i, r, s, a) {
                    return a || (n -= t, i -= e), 0 === n ? 0 < i ? r - t : t - r : 0 === i ? n < 0 ? s - e : e - s : ((r - t) * i - (s - e) * n) / (n < i ? i * Math.sqrt(1 + n * n / (i * i)) : n * Math.sqrt(1 + i * i / (n * n)))
                },
                getDistance: function (t, e, n, i, r, s, a) {
                    return Math.abs(L.getSignedDistance(t, e, n, i, r, s, a))
                }
            }
        }),
        i = e.extend({
            _class: "Project",
            _list: "projects",
            _reference: "project",
            _compactSerialize: !0,
            initialize: function (t) {
                e.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new I(null, null, this), this._view = Y.create(this, t || ut.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0
            },
            _serialize: function (t, e) {
                return R.serialize(this._children, t, !0, e)
            },
            _changed: function (t, e) {
                1 & t && ((r = this._view) && (r._needsUpdate = !0, !r._requested && r._autoUpdate && r.requestUpdate()));
                var n, i, r, s = this._changes;
                s && e && ((r = (n = this._changesById)[i = e._id]) ? r.flags |= t : s.push(n[i] = {
                    item: e,
                    flags: t
                }))
            },
            clear: function () {
                for (var t = this._children, e = t.length - 1; 0 <= e; e--) t[e].remove()
            },
            isEmpty: function () {
                return !this._children.length
            },
            remove: function t() {
                return !!t.base.call(this) && (this._view && this._view.remove(), !0)
            },
            getView: function () {
                return this._view
            },
            getCurrentStyle: function () {
                return this._currentStyle
            },
            setCurrentStyle: function (t) {
                this._currentStyle.set(t)
            },
            getIndex: function () {
                return this._index
            },
            getOptions: function () {
                return this._scope.settings
            },
            getLayers: function () {
                return this._children
            },
            getActiveLayer: function () {
                return this._activeLayer || new a({
                    project: this,
                    insert: !0
                })
            },
            getSymbolDefinitions: function () {
                var n = [],
                    i = {};
                return this.getItems({
                    class: s,
                    match: function (t) {
                        var e = t._definition,
                            t = e._id;
                        return i[t] || (i[t] = !0, n.push(e)), !1
                    }
                }), n
            },
            getSymbols: "getSymbolDefinitions",
            getSelectedItems: function () {
                var t, e = this._selectionItems,
                    n = [];
                for (t in e) {
                    var i = e[t],
                        r = i._selection;
                    1 & r && i.isInserted() ? n.push(i) : r || this._updateSelection(i)
                }
                return n
            },
            _updateSelection: function (t) {
                var e = t._id,
                    n = this._selectionItems;
                t._selection ? n[e] !== t && (this._selectionCount++, n[e] = t) : n[e] === t && (this._selectionCount--, delete n[e])
            },
            selectAll: function () {
                for (var t = this._children, e = 0, n = t.length; e < n; e++) t[e].setFullySelected(!0)
            },
            deselectAll: function () {
                var t, e = this._selectionItems;
                for (t in e) e[t].setFullySelected(!1)
            },
            addLayer: function (t) {
                return this.insertLayer(j, t)
            },
            insertLayer: function (t, e) {
                return e instanceof a ? (e._remove(!1, !0), R.splice(this._children, [e], t, 0), e._setProject(this, !0), (t = e._name) && e.setName(t), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)) : e = null, e
            },
            _insertItem: function (t, e, n) {
                return e = this.insertLayer(t, e) || (this._activeLayer || this._insertItem(j, new a(V.NO_INSERT), !0)).insertChild(t, e), n && e.activate && e.activate(), e
            },
            getItems: function (t) {
                return V._getItems(this, t)
            },
            getItem: function (t) {
                return V._getItems(this, t, null, null, !0)[0] || null
            },
            importJSON: function (t) {
                this.activate();
                var e = this._activeLayer;
                return R.importJSON(t, e && e.isEmpty() && e)
            },
            removeOn: function (t) {
                var e = this._removeSets;
                if (e) {
                    "mouseup" === t && (e.mousedrag = null);
                    var n = e[t];
                    if (n) {
                        for (var i in n) {
                            var r, s = n[i];
                            for (r in e) {
                                var a = e[r];
                                a && a != n && delete a[s._id]
                            }
                            s.remove()
                        }
                        e[t] = null
                    }
                }
            },
            draw: function (t, e, n) {
                this._updateVersion++, t.save(), e.applyToContext(t);
                for (var i = this._children, r = new R({
                        offset: new E(0, 0),
                        pixelRatio: n,
                        viewMatrix: e.isIdentity() ? null : e,
                        matrices: [new z],
                        updateMatrix: !0
                    }), s = 0, a = i.length; s < a; s++) i[s].draw(t, r);
                if (t.restore(), 0 < this._selectionCount) {
                    t.save(), t.strokeWidth = 1;
                    var o, h = this._selectionItems,
                        u = this._scope.settings.handleSize,
                        l = this._updateVersion;
                    for (o in h) h[o]._drawSelection(t, e, u, h, l);
                    t.restore()
                }
            }
        }),
        V = R.extend(t, {
            statics: {
                extend: function t(e) {
                    return e._serializeFields && (e._serializeFields = R.set({}, this.prototype._serializeFields, e._serializeFields)), t.base.apply(this, arguments)
                },
                NO_INSERT: {
                    insert: !1
                }
            },
            _class: "Item",
            _name: null,
            _applyMatrix: !0,
            _canApplyMatrix: !0,
            _canScaleStroke: !1,
            _pivot: null,
            _visible: !0,
            _blendMode: "normal",
            _opacity: 1,
            _locked: !1,
            _guide: !1,
            _clipMask: !1,
            _selection: 0,
            _selectBounds: !0,
            _selectChildren: !1,
            _serializeFields: {
                name: null,
                applyMatrix: null,
                matrix: new z,
                pivot: null,
                visible: !0,
                blendMode: "normal",
                opacity: 1,
                locked: !1,
                guide: !1,
                clipMask: !1,
                selected: !1,
                data: {}
            },
            _prioritize: ["applyMatrix"]
        }, new function () {
            var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"];
            return R.each(t, function (t) {
                this._events[t] = {
                    install: function (t) {
                        this.getView()._countItemEvent(t, 1)
                    },
                    uninstall: function (t) {
                        this.getView()._countItemEvent(t, -1)
                    }
                }
            }, {
                _events: {
                    onFrame: {
                        install: function () {
                            this.getView()._animateItem(this, !0)
                        },
                        uninstall: function () {
                            this.getView()._animateItem(this, !1)
                        }
                    },
                    onLoad: {},
                    onError: {}
                },
                statics: {
                    _itemHandlers: t
                }
            })
        }, {
            initialize: function () {},
            _initialize: function (t, e) {
                var n = t && R.isPlainObject(t),
                    i = n && !0 === t.internal,
                    r = this._matrix = new z,
                    s = n && t.project || Bt.project,
                    a = Bt.settings;
                return this._id = i ? null : o.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && a.applyMatrix, e && r.translate(e), (r._owner = this)._style = new I(s._currentStyle, this, s), i || n && 0 == t.insert || !a.insertItems && (!n || !0 !== t.insert) ? this._setProject(s) : (n && t.parent || s)._insertItem(j, this, !0), n && t !== V.NO_INSERT && this.set(t, {
                    internal: !0,
                    insert: !0,
                    project: !0,
                    parent: !0
                }), n
            },
            _serialize: function (i, r) {
                var s = {},
                    a = this;

                function t(t) {
                    for (var e in t) {
                        var n = a[e];
                        R.equals(n, "leading" === e ? 1.2 * t.fontSize : t[e]) || (s[e] = R.serialize(n, i, "data" !== e, r))
                    }
                }
                return t(this._serializeFields), this instanceof g || t(this._style._defaults), [this._class, s]
            },
            _changed: function (t) {
                var e = this._symbol,
                    n = this._parent || e,
                    i = this._project;
                8 & t && (this._bounds = this._position = this._decomposed = j), 16 & t && (this._globalMatrix = j), n && 72 & t && V._clearBoundsCache(n), 2 & t && V._clearBoundsCache(this), i && i._changed(t, this), e && e._changed(t)
            },
            getId: function () {
                return this._id
            },
            getName: function () {
                return this._name
            },
            setName: function (t) {
                if (this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported.");
                var e, n = this._getOwner();
                t && n && (e = n._children, ((n = n._namedChildren)[t] = n[t] || []).push(this), t in e || (e[t] = this)), this._name = t || j, this._changed(256)
            },
            getStyle: function () {
                return this._style
            },
            setStyle: function (t) {
                this.getStyle().set(t)
            }
        }, R.each(["locked", "visible", "blendMode", "opacity", "guide"], function (e) {
            var t = R.capitalize(e),
                n = "_" + e,
                i = {
                    locked: 256,
                    visible: 265
                };
            this["get" + t] = function () {
                return this[n]
            }, this["set" + t] = function (t) {
                t != this[n] && (this[n] = t, this._changed(i[e] || 257))
            }
        }, {}), {
            beans: !0,
            getSelection: function () {
                return this._selection
            },
            setSelection: function (t) {
                t !== this._selection && (this._selection = t, (t = this._project) && (t._updateSelection(this), this._changed(257)))
            },
            _changeSelection: function (t, e) {
                var n = this._selection;
                this.setSelection(e ? n | t : n & ~t)
            },
            isSelected: function () {
                if (this._selectChildren)
                    for (var t = this._children, e = 0, n = t.length; e < n; e++)
                        if (t[e].isSelected()) return !0;
                return !!(1 & this._selection)
            },
            setSelected: function (t) {
                if (this._selectChildren)
                    for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setSelected(t);
                this._changeSelection(1, t)
            },
            isFullySelected: function () {
                var t = this._children,
                    e = !!(1 & this._selection);
                if (t && e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (!t[n].isFullySelected()) return !1;
                    return !0
                }
                return e
            },
            setFullySelected: function (t) {
                var e = this._children;
                if (e)
                    for (var n = 0, i = e.length; n < i; n++) e[n].setFullySelected(t);
                this._changeSelection(1, t)
            },
            isClipMask: function () {
                return this._clipMask
            },
            setClipMask: function (t) {
                this._clipMask != (t = !!t) && ((this._clipMask = t) && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(257), this._parent && this._parent._changed(2048))
            },
            getData: function () {
                return this._data || (this._data = {}), this._data
            },
            setData: function (t) {
                this._data = t
            },
            getPosition: function (t) {
                var e = t ? E : u,
                    t = this._position || (this._position = this._getPositionFromBounds());
                return new e(t.x, t.y, this, "setPosition")
            },
            setPosition: function () {
                this.translate(E.read(arguments).subtract(this.getPosition(!0)))
            },
            _getPositionFromBounds: function (t) {
                return this._pivot ? this._matrix._transformPoint(this._pivot) : (t || this.getBounds()).getCenter(!0)
            },
            getPivot: function () {
                var t = this._pivot;
                return t ? new u(t.x, t.y, this, "setPivot") : null
            },
            setPivot: function () {
                this._pivot = E.read(arguments, 0, {
                    clone: !0,
                    readNull: !0
                }), this._position = j
            }
        }, R.each({
            getStrokeBounds: {
                stroke: !0
            },
            getHandleBounds: {
                handle: !0
            },
            getInternalBounds: {
                internal: !0
            }
        }, function (e, t) {
            this[t] = function (t) {
                return this.getBounds(t, e)
            }
        }, {
            beans: !0,
            getBounds: function (t, e) {
                var n = e || t instanceof z,
                    i = R.set({}, n ? e : t, this._boundsOptions);
                i.stroke && !this.getStrokeScaling() || (i.cacheItem = this);
                i = this._getCachedBounds(n && t, i).rect;
                return arguments.length ? i : new r(i.x, i.y, i.width, i.height, this, "setBounds")
            },
            setBounds: function () {
                var t = b.read(arguments),
                    e = this.getBounds(),
                    n = this._matrix,
                    i = new z,
                    r = t.getCenter();
                i.translate(r), t.width == e.width && t.height == e.height || (n.isInvertible() || (n.set(n._backup || (new z).translate(n.getTranslation())), e = this.getBounds()), i.scale(0 !== e.width ? t.width / e.width : 0, 0 !== e.height ? t.height / e.height : 0)), r = e.getCenter(), i.translate(-r.x, -r.y), this.transform(i)
            },
            _getBounds: function (t, e) {
                var n = this._children;
                return n && n.length ? (V._updateBoundsCache(this, e.cacheItem), V._getBounds(n, t, e)) : new b
            },
            _getBoundsCacheKey: function (t, e) {
                return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join("")
            },
            _getCachedBounds: function (t, e, n) {
                t = t && t._orNullIfIdentity();
                var i = e.internal && !n,
                    r = e.cacheItem,
                    s = i ? null : this._matrix._orNullIfIdentity(),
                    a = r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, i),
                    n = this._bounds;
                if (V._updateBoundsCache(this._parent || this._symbol, r), a && n && a in n) return {
                    rect: (o = n[a]).rect.clone(),
                    nonscaling: o.nonscaling
                };
                var o, t = this._getBounds(t || s, e),
                    s = t.rect || t,
                    e = this._style,
                    e = t.nonscaling || e.hasStroke() && !e.getStrokeScaling();
                return a && (n || (this._bounds = n = {}), o = n[a] = {
                    rect: s.clone(),
                    nonscaling: e,
                    internal: i
                }), {
                    rect: s,
                    nonscaling: e
                }
            },
            _getStrokeMatrix: function (t, e) {
                e = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item, t = e ? e.getViewMatrix().invert() : t;
                return t && t._shiftless()
            },
            statics: {
                _updateBoundsCache: function (t, e) {
                    var n;
                    t && e && (n = e._id, (t = t._boundsCache = t._boundsCache || {
                        ids: {},
                        list: []
                    }).ids[n] || (t.list.push(e), t.ids[n] = e))
                },
                _clearBoundsCache: function (t) {
                    var e = t._boundsCache;
                    if (e) {
                        t._bounds = t._position = t._boundsCache = j;
                        for (var n = 0, i = e.list, r = i.length; n < r; n++) {
                            var s = i[n];
                            s !== t && (s._bounds = s._position = j, s._boundsCache && V._clearBoundsCache(s))
                        }
                    }
                },
                _getBounds: function (t, e, n) {
                    var i = u = 1 / 0,
                        r = l = -u,
                        s = !1;
                    n = n || {};
                    for (var a = 0, o = t.length; a < o; a++) {
                        var h, u, l, c = t[a];
                        c._visible && !c.isEmpty(!0) && (c = (h = c._getCachedBounds(e && e.appended(c._matrix), n, !0)).rect, u = Math.min(c.x, u), i = Math.min(c.y, i), l = Math.max(c.x + c.width, l), r = Math.max(c.y + c.height, r), h.nonscaling && (s = !0))
                    }
                    return {
                        rect: isFinite(u) ? new b(u, i, l - u, r - i) : new b,
                        nonscaling: s
                    }
                }
            }
        }), {
            beans: !0,
            _decompose: function () {
                return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose())
            },
            getRotation: function () {
                var t = this._decompose();
                return t ? t.rotation : 0
            },
            setRotation: function (t) {
                var e, n = this.getRotation();
                null != n && null != t && (e = this._decomposed, this.rotate(t - n), e && (e.rotation = t, this._decomposed = e))
            },
            getScaling: function () {
                var t = this._decompose(),
                    t = t && t.scaling;
                return new u(t ? t.x : 1, t ? t.y : 1, this, "setScaling")
            },
            setScaling: function () {
                var t, e, n, i, r = this.getScaling(),
                    s = E.read(arguments, 0, {
                        clone: !0,
                        readNull: !0
                    });
                r && s && !r.equals(s) && (t = this.getRotation(), e = this._decomposed, n = new z, (i = q.isZero)(r.x) || i(r.y) ? (n.translate(e.translation), t && n.rotate(t), n.scale(s.x, s.y), this._matrix.set(n)) : (i = this.getPosition(!0), n.translate(i), t && n.rotate(t), n.scale(s.x / r.x, s.y / r.y), t && n.rotate(-t), n.translate(i.negate()), this.transform(n)), e && (e.scaling = s, this._decomposed = e))
            },
            getMatrix: function () {
                return this._matrix
            },
            setMatrix: function () {
                var t = this._matrix;
                t.set.apply(t, arguments)
            },
            getGlobalMatrix: function (t) {
                if (i = this._globalMatrix)
                    for (var e = this._parent, n = []; e;) {
                        if (!e._globalMatrix) {
                            for (var i = null, r = 0, s = n.length; r < s; r++) n[r]._globalMatrix = null;
                            break
                        }
                        n.push(e), e = e._parent
                    }
                return i || (i = this._globalMatrix = this._matrix.clone(), (e = this._parent) && i.prepend(e.getGlobalMatrix(!0))), t ? i : i.clone()
            },
            getViewMatrix: function () {
                return this.getGlobalMatrix().prepend(this.getView()._matrix)
            },
            getApplyMatrix: function () {
                return this._applyMatrix
            },
            setApplyMatrix: function (t) {
                (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
            },
            getTransformContent: "#getApplyMatrix",
            setTransformContent: "#setApplyMatrix"
        }, {
            getProject: function () {
                return this._project
            },
            _setProject: function (t, e) {
                if (this._project !== t) {
                    this._project && this._installEvents(!1), this._project = t;
                    for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._setProject(t);
                    e = !0
                }
                e && this._installEvents(!0)
            },
            getView: function () {
                return this._project._view
            },
            _installEvents: function t(e) {
                t.base.call(this, e);
                for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._installEvents(e)
            },
            getLayer: function () {
                for (var t = this; t = t._parent;)
                    if (t instanceof a) return t;
                return null
            },
            getParent: function () {
                return this._parent
            },
            setParent: function (t) {
                return t.addChild(this)
            },
            _getOwner: "#getParent",
            getChildren: function () {
                return this._children
            },
            setChildren: function (t) {
                this.removeChildren(), this.addChildren(t)
            },
            getFirstChild: function () {
                return this._children && this._children[0] || null
            },
            getLastChild: function () {
                return this._children && this._children[this._children.length - 1] || null
            },
            getNextSibling: function () {
                var t = this._getOwner();
                return t && t._children[this._index + 1] || null
            },
            getPreviousSibling: function () {
                var t = this._getOwner();
                return t && t._children[this._index - 1] || null
            },
            getIndex: function () {
                return this._index
            },
            equals: function (t) {
                return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1
            },
            _equals: function (t) {
                return R.equals(this._children, t._children)
            },
            clone: function (t) {
                var e = new this.constructor(V.NO_INSERT),
                    n = this._children,
                    i = R.pick(t ? t.insert : j, t === j || !0 === t),
                    t = R.pick(t ? t.deep : j, !0);
                n && e.copyAttributes(this), n && !t || e.copyContent(this), n || e.copyAttributes(this), i && e.insertAbove(this);
                var r = this._name,
                    i = this._parent;
                if (r && i) {
                    for (var n = i._children, s = r, a = 1; n[r];) r = s + " " + a++;
                    r !== s && e.setName(r)
                }
                return e
            },
            copyContent: function (t) {
                for (var e = t._children, n = 0, i = e && e.length; n < i; n++) this.addChild(e[n].clone(!1), !0)
            },
            copyAttributes: function (t, e) {
                this.setStyle(t._style);
                for (var n = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], i = 0, r = n.length; i < r; i++) {
                    var s = n[i];
                    t.hasOwnProperty(s) && (this[s] = t[s])
                }
                e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
                var a = t._data,
                    e = t._name;
                this._data = a ? R.clone(a) : null, e && this.setName(e)
            },
            rasterize: function (t, e) {
                var n, i;
                R.isPlainObject(t) ? (a = t.resolution, n = t.insert, i = t.raster) : (a = t, n = e), i ? i.matrix.reset(!0) : i = new c(V.NO_INSERT);
                var r = this.getStrokeBounds(),
                    s = (a || this.getView().getResolution()) / 72,
                    t = r.getTopLeft().floor(),
                    e = r.getBottomRight().ceil(),
                    a = new O(e.subtract(t)),
                    r = a.multiply(s);
                return i.setSize(r, !0), r.isZero() || (e = i.getContext(!0), r = (new z).scale(s).translate(t.negate()), e.save(), r.applyToContext(e), this.draw(e, new R({
                    matrices: [r]
                })), e.restore()), i.transform((new z).translate(t.add(a.divide(2))).scale(1 / s)), n !== j && !n || i.insertAbove(this), i
            },
            contains: function () {
                var t = this._matrix;
                return t.isInvertible() && !!this._contains(t._inverseTransform(E.read(arguments)))
            },
            _contains: function (t) {
                var e = this._children;
                if (e) {
                    for (var n = e.length - 1; 0 <= n; n--)
                        if (e[n].contains(t)) return !0;
                    return !1
                }
                return t.isInside(this.getInternalBounds())
            },
            isInside: function () {
                return b.read(arguments).contains(this.getBounds())
            },
            _asPathItem: function () {
                return new W.Rectangle({
                    rectangle: this.getInternalBounds(),
                    matrix: this._matrix,
                    insert: !1
                })
            },
            intersects: function (t, e) {
                return t instanceof V && 0 < this._asPathItem().getIntersections(t._asPathItem(), null, e, !0).length
            }
        }, new function () {
            function t() {
                var t = arguments;
                return this._hitTest(E.read(t), T.getOptions(t))
            }

            function e() {
                var t = arguments,
                    e = E.read(t),
                    n = T.getOptions(t),
                    t = [];
                return this._hitTest(e, new R({
                    all: t
                }, n)), t
            }

            function n(t, e, n, i) {
                var r = this._children;
                if (r)
                    for (var s = r.length - 1; 0 <= s; s--) {
                        var a = r[s],
                            a = a !== i && a._hitTest(t, e, n);
                        if (a && !e.all) return a
                    }
                return null
            }
            return i.inject({
                hitTest: t,
                hitTestAll: e,
                _hitTest: n
            }), {
                hitTest: t,
                hitTestAll: e,
                _hitTestChildren: n
            }
        }, {
            _hitTest: function (i, e, t) {
                if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null;
                var n = this._matrix,
                    r = t ? t.appended(n) : this.getGlobalMatrix().prepend(this.getView()._matrix),
                    s = Math.max(e.tolerance, 1e-12),
                    a = e._tolerancePadding = new O(W._getStrokePadding(s, n._shiftless().invert()));
                if (!(i = n._inverseTransform(i)) || !this._children && !this.getBounds({
                        internal: !0,
                        stroke: !0,
                        handle: !0
                    }).expand(a.multiply(2))._containsPoint(i)) return null;
                var o, h, u = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== R.hyphenate(this._class) || e.class && !(this instanceof e.class)),
                    l = e.match,
                    c = this;

                function f(t) {
                    return (t = t && l && !l(t) ? null : t) && e.all && e.all.push(t), t
                }

                function d(t, e) {
                    var n = e ? o["get" + e]() : c.getPosition();
                    if (i.subtract(n).divide(a).length <= 1) return new T(t, c, {
                        name: e ? R.hyphenate(e) : t,
                        point: n
                    })
                }
                var _ = e.position,
                    t = e.center,
                    s = e.bounds;
                if (u && this._parent && (_ || t || s)) {
                    if ((t || s) && (o = this.getInternalBounds()), !(h = _ && d("position") || t && d("center", "Center")) && s)
                        for (var g = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], p = 0; p < 8 && !h; p++) h = d("bounds", g[p]);
                    h = f(h)
                }
                return (h = h || (this._hitTestChildren(i, e, r) || u && f(this._hitTestSelf(i, e, r, this.getStrokeScaling() ? null : r._shiftless().invert())) || null)) && h.point && (h.point = n.transform(h.point)), h
            },
            _hitTestSelf: function (t, e) {
                if (e.fill && this.hasFill() && this._contains(t)) return new T("fill", this)
            },
            matches: function (t, e) {
                var n = typeof t;
                if ("object" == n) {
                    for (var i in t)
                        if (t.hasOwnProperty(i) && !this.matches(i, t[i])) return !1;
                    return !0
                }
                if ("function" == n) return t(this);
                if ("match" === t) return e(this);
                n = /^(empty|editable)$/.test(t) ? this["is" + R.capitalize(t)]() : "type" === t ? R.hyphenate(this._class) : this[t];
                if ("class" === t) {
                    if ("function" == typeof e) return this instanceof e;
                    n = this._class
                }
                if ("function" == typeof e) return !!e(n);
                if (e) {
                    if (e.test) return e.test(n);
                    if (R.isPlainObject(e)) return function t(e, n) {
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var r = e[i],
                                    i = n[i];
                                if (R.isPlainObject(r) && R.isPlainObject(i)) {
                                    if (!t(r, i)) return !1
                                } else if (!R.equals(r, i)) return !1
                            } return !0
                    }(e, n)
                }
                return R.equals(n, e)
            },
            getItems: function (t) {
                return V._getItems(this, t, this._matrix)
            },
            getItem: function (t) {
                return V._getItems(this, t, this._matrix, null, !0)[0] || null
            },
            statics: {
                _getItems: function t(e, n, i, r, s) {
                    var a, o, h;
                    r || (o = (a = "object" == typeof n && n) && a.overlapping, h = a && a.inside, u = (v = o || h) && b.read([v]), r = {
                        items: [],
                        recursive: a && !1 !== a.recursive,
                        inside: !!h,
                        overlapping: !!o,
                        rect: u,
                        path: o && new W.Rectangle({
                            rectangle: u,
                            insert: !1
                        })
                    }, a && (n = R.filter({}, n, {
                        recursive: !0,
                        inside: !0,
                        overlapping: !0
                    })));
                    var u, l = e._children,
                        c = r.items;
                    i = (u = r.rect) && (i || new z);
                    for (var f = 0, d = l && l.length; f < d; f++) {
                        var _ = l[f],
                            g = i && i.appended(_._matrix),
                            p = !0;
                        if (u) {
                            var v = _.getBounds(g);
                            if (!u.intersects(v)) continue;
                            u.contains(v) || r.overlapping && (v.contains(u) || r.path.intersects(_, g)) || (p = !1)
                        }
                        if (p && _.matches(n) && (c.push(_), s)) break;
                        if (!1 !== r.recursive && t(_, n, g, r, s), s && 0 < c.length) break
                    }
                    return c
                }
            }
        }, {
            importJSON: function (t) {
                t = R.importJSON(t, this);
                return t !== this ? this.addChild(t) : t
            },
            addChild: function (t) {
                return this.insertChild(j, t)
            },
            insertChild: function (t, e) {
                e = e ? this.insertChildren(t, [e]) : null;
                return e && e[0]
            },
            addChildren: function (t) {
                return this.insertChildren(this._children.length, t)
            },
            insertChildren: function (t, e) {
                var n = this._children;
                if (n && e && 0 < e.length) {
                    for (var i = {}, r = (e = R.slice(e)).length - 1; 0 <= r; r--) {
                        var s = (u = e[r]) && u._id;
                        !u || i[s] ? e.splice(r, 1) : (u._remove(!1, !0), i[s] = !0)
                    }
                    R.splice(n, e, t, 0);
                    for (var a = this._project, o = a._changes, r = 0, h = e.length; r < h; r++) {
                        var u, l = (u = e[r])._name;
                        u._parent = this, u._setProject(a, !0), l && u.setName(l), o && u._changed(5)
                    }
                    this._changed(11)
                } else e = null;
                return e
            },
            _insertItem: "#insertChild",
            _insertAt: function (t, e) {
                var n = t && t._getOwner(),
                    i = t !== this && n ? this : null;
                return i && (i._remove(!1, !0), n._insertItem(t._index + e, i)), i
            },
            insertAbove: function (t) {
                return this._insertAt(t, 1)
            },
            insertBelow: function (t) {
                return this._insertAt(t, 0)
            },
            sendToBack: function () {
                var t = this._getOwner();
                return t ? t._insertItem(0, this) : null
            },
            bringToFront: function () {
                var t = this._getOwner();
                return t ? t._insertItem(j, this) : null
            },
            appendTop: "#addChild",
            appendBottom: function (t) {
                return this.insertChild(0, t)
            },
            moveAbove: "#insertAbove",
            moveBelow: "#insertBelow",
            addTo: function (t) {
                return t._insertItem(j, this)
            },
            copyTo: function (t) {
                return this.clone(!1).addTo(t)
            },
            reduce: function (t) {
                var e = this._children;
                if (e && 1 === e.length) {
                    t = e[0].reduce(t);
                    return this._parent ? (t.insertAbove(this), this.remove()) : t.remove(), t
                }
                return this
            },
            _removeNamed: function () {
                var t, e, n, i, r = this._getOwner();
                r && (t = r._children, -1 !== (r = (i = (e = r._namedChildren)[n = this._name]) ? i.indexOf(this) : -1) && (t[n] == this && delete t[n], i.splice(r, 1), i.length ? t[n] = i[0] : delete e[n]))
            },
            _remove: function (t, e) {
                var n = this._getOwner(),
                    i = this._project,
                    r = this._index;
                return this._style && this._style._dispose(), !!n && (this._name && this._removeNamed(), null != r && (i._activeLayer === this && (i._activeLayer = this.getNextSibling() || this.getPreviousSibling()), R.splice(n._children, null, r, 1)), this._installEvents(!1), t && i._changes && this._changed(5), e && n._changed(11, this), !(this._parent = null))
            },
            remove: function () {
                return this._remove(!0, !0)
            },
            replaceWith: function (t) {
                t = t && t.insertBelow(this);
                return t && this.remove(), t
            },
            removeChildren: function (t, e) {
                if (!this._children) return null;
                t = t || 0, e = R.pick(e, this._children.length);
                for (var n = R.splice(this._children, null, t, e - t), i = n.length - 1; 0 <= i; i--) n[i]._remove(!0, !1);
                return 0 < n.length && this._changed(11), n
            },
            clear: "#removeChildren",
            reverseChildren: function () {
                if (this._children) {
                    this._children.reverse();
                    for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._index = t;
                    this._changed(11)
                }
            },
            isEmpty: function (t) {
                var e = this._children,
                    n = e ? e.length : 0;
                if (t) {
                    for (var i = 0; i < n; i++)
                        if (!e[i].isEmpty(t)) return !1;
                    return !0
                }
                return !n
            },
            isEditable: function () {
                for (var t = this; t;) {
                    if (!t._visible || t._locked) return !1;
                    t = t._parent
                }
                return !0
            },
            hasFill: function () {
                return this.getStyle().hasFill()
            },
            hasStroke: function () {
                return this.getStyle().hasStroke()
            },
            hasShadow: function () {
                return this.getStyle().hasShadow()
            },
            _getOrder: function (t) {
                function e(t) {
                    for (var e = []; e.unshift(t), t = t._parent;);
                    return e
                }
                for (var n = e(this), i = e(t), r = 0, s = Math.min(n.length, i.length); r < s; r++)
                    if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                return 0
            },
            hasChildren: function () {
                return this._children && 0 < this._children.length
            },
            isInserted: function () {
                return !!this._parent && this._parent.isInserted()
            },
            isAbove: function (t) {
                return -1 === this._getOrder(t)
            },
            isBelow: function (t) {
                return 1 === this._getOrder(t)
            },
            isParent: function (t) {
                return this._parent === t
            },
            isChild: function (t) {
                return t && t._parent === this
            },
            isDescendant: function (t) {
                for (var e = this; e = e._parent;)
                    if (e === t) return !0;
                return !1
            },
            isAncestor: function (t) {
                return !!t && t.isDescendant(this)
            },
            isSibling: function (t) {
                return this._parent === t._parent
            },
            isGroupedWith: function (t) {
                for (var e = this._parent; e;) {
                    if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                    e = e._parent
                }
                return !1
            }
        }, R.each(["rotate", "scale", "shear", "skew"], function (n) {
            var i = "rotate" === n;
            this[n] = function () {
                var t = arguments,
                    e = (i ? R : E).read(t),
                    t = E.read(t, 0, {
                        readNull: !0
                    });
                return this.transform((new z)[n](e, t || this.getPosition(!0)))
            }
        }, {
            translate: function () {
                var t = new z;
                return this.transform(t.translate.apply(t, arguments))
            },
            transform: function (t, e, n) {
                var i, r, s = this._matrix,
                    a = t && !t.isIdentity(),
                    o = n && this._canApplyMatrix || this._applyMatrix && (a || !s.isIdentity() || e && this._children);
                if (!a && !o) return this;
                a && (!t.isInvertible() && s.isInvertible() && (s._backup = s.getValues()), s.prepend(t, !0), i = (r = this._style).getFillColor(!0), r = r.getStrokeColor(!0), i && i.transform(t), r && r.transform(t)), (o = o && this._transformContent(s, e, n)) && ((e = this._pivot) && s._transformPoint(e, e, !0), s.reset(!0), n && this._canApplyMatrix && (this._applyMatrix = !0));
                var h = this._bounds,
                    s = this._position;
                (a || o) && this._changed(25);
                n = a && h && t.decompose();
                if (n && n.skewing.isZero() && n.rotation % 90 == 0) {
                    for (var u in h) {
                        var l = h[u];
                        l.nonscaling ? delete h[u] : !o && l.internal || (l = l.rect, t._transformBounds(l, l))
                    }
                    n = (this._bounds = h)[this._getBoundsCacheKey(this._boundsOptions || {})];
                    n && (this._position = this._getPositionFromBounds(n.rect))
                } else a && s && this._pivot && (this._position = t._transformPoint(s, s));
                return this
            },
            _transformContent: function (t, e, n) {
                var i = this._children;
                if (i) {
                    for (var r = 0, s = i.length; r < s; r++) i[r].transform(t, e, n);
                    return !0
                }
            },
            globalToLocal: function () {
                return this.getGlobalMatrix(!0)._inverseTransform(E.read(arguments))
            },
            localToGlobal: function () {
                return this.getGlobalMatrix(!0)._transformPoint(E.read(arguments))
            },
            parentToLocal: function () {
                return this._matrix._inverseTransform(E.read(arguments))
            },
            localToParent: function () {
                return this._matrix._transformPoint(E.read(arguments))
            },
            fitBounds: function (t, e) {
                t = b.read(arguments);
                var n = this.getBounds(),
                    i = n.height / n.width,
                    r = t.height / t.width,
                    r = (e ? r < i : i < r) ? t.width / n.width : t.height / n.height,
                    r = new b(new E, new O(n.width * r, n.height * r));
                r.setCenter(t.getCenter()), this.setBounds(r)
            }
        }), {
            _setStyles: function (t, e, n) {
                var i, r, s = this._style,
                    a = this._matrix;
                s.hasFill() && (t.fillStyle = s.getFillColor().toCanvasStyle(t, a)), s.hasStroke() && (t.strokeStyle = s.getStrokeColor().toCanvasStyle(t, a), t.lineWidth = s.getStrokeWidth(), i = s.getStrokeJoin(), r = s.getStrokeCap(), a = s.getMiterLimit(), i && (t.lineJoin = i), r && (t.lineCap = r), a && (t.miterLimit = a), Bt.support.nativeDash && (r = s.getDashArray(), a = s.getDashOffset(), r && r.length && ("setLineDash" in t ? (t.setLineDash(r), t.lineDashOffset = a) : (t.mozDash = r, t.mozDashOffset = a)))), s.hasShadow() && (e = e.pixelRatio || 1, e = (n = n._shiftless().prepend((new z).scale(e, e))).transform(new E(s.getShadowBlur(), 0)), n = n.transform(this.getShadowOffset()), t.shadowColor = s.getShadowColor().toCanvasStyle(t), t.shadowBlur = e.getLength(), t.shadowOffsetX = n.x, t.shadowOffsetY = n.y)
            },
            draw: function (t, e, n) {
                this._updateVersion = this._project._updateVersion;
                if (this._visible && 0 !== this._opacity) {
                    var i = e.matrices,
                        r = e.viewMatrix,
                        s = this._matrix,
                        a = i[i.length - 1].appended(s);
                    if (a.isInvertible()) {
                        r = r ? r.appended(a) : a, i.push(a), e.updateMatrix && (this._globalMatrix = a);
                        var o, h, u, l = this._blendMode,
                            c = q.clamp(this._opacity, 0, 1),
                            f = "normal" === l,
                            d = lt.nativeModes[l],
                            _ = f && 1 === c || e.dontStart || e.clip || (d || f && c < 1) && this._canComposite(),
                            a = e.pixelRatio || 1;
                        if (!_) {
                            var g = this.getStrokeBounds(r);
                            if (!g.width || !g.height) return void i.pop();
                            u = e.offset, h = e.offset = g.getTopLeft().floor(), o = t, t = ut.getContext(g.getSize().ceil().add(1).multiply(a)), 1 !== a && t.scale(a, a)
                        }
                        t.save();
                        f = n ? n.appended(s) : this._canScaleStroke && !this.getStrokeScaling(!0) && r, g = !_ && e.clipItem, n = !f || g;
                        _ ? (t.globalAlpha = c, d && (t.globalCompositeOperation = l)) : n && t.translate(-h.x, -h.y), n && (_ ? s : r).applyToContext(t), g && e.clipItem.draw(t, e.extend({
                            clip: !0
                        })), f && (t.setTransform(a, 0, 0, a, 0, 0), (g = e.offset) && t.translate(-g.x, -g.y)), this._draw(t, e, r, f), t.restore(), i.pop(), e.clip && !e.dontFinish && t.clip(this.getFillRule()), _ || (lt.process(l, t, o, c, h.subtract(u).multiply(a)), ut.release(t), e.offset = u)
                    }
                }
            },
            _isUpdated: function (t) {
                var e = this._parent;
                if (e instanceof $) return e._isUpdated(t);
                var n = this._updateVersion === t;
                return !n && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, n = !0), n
            },
            _drawSelection: function (t, e, n, i, r) {
                var s = this._selection,
                    a = 1 & s,
                    o = 2 & s || a && this._selectBounds,
                    s = 4 & s;
                if (((a = !this._drawSelected ? !1 : a) || o || s) && this._isUpdated(r)) {
                    var h = this.getSelectedColor(!0) || (h = this.getLayer()) && h.getSelectedColor(!0),
                        e = e.appended(this.getGlobalMatrix(!0)),
                        u = n / 2;
                    if (t.strokeStyle = t.fillStyle = h ? h.toCanvasStyle(t) : "#009dec", a && this._drawSelected(t, e, i), s) {
                        var i = this.getPosition(!0),
                            s = this._parent,
                            i = s ? s.localToGlobal(i) : i,
                            l = i.x,
                            c = i.y;
                        t.beginPath(), t.arc(l, c, u, 0, 2 * Math.PI, !0), t.stroke();
                        for (var f = [
                                [0, -1],
                                [1, 0],
                                [0, 1],
                                [-1, 0]
                            ], d = u, _ = n + 1, g = 0; g < 4; g++) {
                            var p = f[g],
                                v = p[0],
                                p = p[1];
                            t.moveTo(l + v * d, c + p * d), t.lineTo(l + v * _, c + p * _), t.stroke()
                        }
                    }
                    if (o) {
                        var m = e._transformCorners(this.getInternalBounds());
                        t.beginPath();
                        for (g = 0; g < 8; g++) t[g ? "lineTo" : "moveTo"](m[g], m[++g]);
                        t.closePath(), t.stroke();
                        for (g = 0; g < 8; g++) t.fillRect(m[g] - u, m[++g] - u, n, n)
                    }
                }
            },
            _canComposite: function () {
                return !1
            }
        }, R.each(["down", "drag", "up", "move"], function (e) {
            this["removeOn" + R.capitalize(e)] = function () {
                var t = {};
                return t[e] = !0, this.removeOn(t)
            }
        }, {
            removeOn: function (t) {
                for (var e in t) {
                    var n;
                    t[e] && (n = "mouse" + e, (e = (e = this._project)._removeSets = e._removeSets || {})[n] = e[n] || {}, e[n][this._id] = this)
                }
                return this
            }
        }), {
            tween: function (t, e, n) {
                n || (n = e, e = t, t = null, n || (n = e, e = null));
                var i = n && n.easing,
                    r = n && n.start,
                    n = null != n && ("number" == typeof n ? n : n.duration),
                    s = new ot(this, t, e, n, i, r);
                return n && this.on("frame", function t(e) {
                    s._handleFrame(1e3 * e.time), s.running || this.off("frame", t)
                }), s
            },
            tweenTo: function (t, e) {
                return this.tween(null, t, e)
            },
            tweenFrom: function (t, e) {
                return this.tween(t, null, e)
            }
        }),
        g = V.extend({
            _class: "Group",
            _selectBounds: !1,
            _selectChildren: !0,
            _serializeFields: {
                children: []
            },
            initialize: function (t) {
                this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments)
            },
            _changed: function t(e) {
                t.base.call(this, e), 2050 & e && (this._clipItem = j)
            },
            _getClipItem: function () {
                if ((t = this._clipItem) === j) {
                    for (var t = null, e = this._children, n = 0, i = e.length; n < i; n++)
                        if (e[n]._clipMask) {
                            t = e[n];
                            break
                        } this._clipItem = t
                }
                return t
            },
            isClipped: function () {
                return !!this._getClipItem()
            },
            setClipped: function (t) {
                var e = this.getFirstChild();
                e && e.setClipMask(t)
            },
            _getBounds: function t(e, n) {
                var i = this._getClipItem();
                return i ? i._getCachedBounds(i._matrix.prepended(e), R.set({}, n, {
                    stroke: !1
                })) : t.base.call(this, e, n)
            },
            _hitTestChildren: function t(e, n, i) {
                var r = this._getClipItem();
                return (!r || r.contains(e)) && t.base.call(this, e, n, i, r)
            },
            _draw: function (t, e) {
                var n = e.clip,
                    i = !n && this._getClipItem();
                e = e.extend({
                    clipItem: i,
                    clip: !1
                }), n ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : i && i.draw(t, e.extend({
                    clip: !0
                }));
                for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                    var o = r[s];
                    o !== i && o.draw(t, e)
                }
            }
        }),
        a = g.extend({
            _class: "Layer",
            initialize: function () {
                g.apply(this, arguments)
            },
            _getOwner: function () {
                return this._parent || null != this._index && this._project
            },
            isInserted: function t() {
                return this._parent ? t.base.call(this) : null != this._index
            },
            activate: function () {
                this._project._activeLayer = this
            },
            _hitTestSelf: function () {}
        }),
        d = V.extend({
            _class: "Shape",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _canScaleStroke: !0,
            _serializeFields: {
                type: null,
                size: null,
                radius: null
            },
            initialize: function (t, e) {
                this._initialize(t, e)
            },
            _equals: function (t) {
                return this._type === t._type && this._size.equals(t._size) && R.equals(this._radius, t._radius)
            },
            copyContent: function (t) {
                this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius)
            },
            getType: function () {
                return this._type
            },
            setType: function (t) {
                this._type = t
            },
            getShape: "#getType",
            setShape: "#setType",
            getSize: function () {
                var t = this._size;
                return new n(t.width, t.height, this, "setSize")
            },
            setSize: function () {
                var t, e, n, i = O.read(arguments);
                this._size ? this._size.equals(i) || (t = this._type, e = i.width, n = i.height, "rectangle" === t ? this._radius.set(O.min(this._radius, i.divide(2).abs())) : "circle" === t ? (e = n = (e + n) / 2, this._radius = e / 2) : "ellipse" === t && this._radius._set(e / 2, n / 2), this._size._set(e, n), this._changed(9)) : this._size = i.clone()
            },
            getRadius: function () {
                var t = this._radius;
                return "circle" === this._type ? t : new n(t.width, t.height, this, "setRadius")
            },
            setRadius: function (t) {
                var e = this._type;
                if ("circle" === e) {
                    if (t === this._radius) return;
                    var n = 2 * t;
                    this._radius = t, this._size._set(n, n)
                } else if (t = O.read(arguments), this._radius) {
                    if (this._radius.equals(t)) return;
                    this._radius.set(t), "rectangle" === e ? (n = O.max(this._size, t.multiply(2)), this._size.set(n)) : "ellipse" === e && this._size._set(2 * t.width, 2 * t.height)
                } else this._radius = t.clone();
                this._changed(9)
            },
            isEmpty: function () {
                return !1
            },
            toPath: function (t) {
                var e = new W[R.capitalize(this._type)]({
                    center: new E,
                    size: this._size,
                    radius: this._radius,
                    insert: !1
                });
                return e.copyAttributes(this), Bt.settings.applyMatrix && e.setApplyMatrix(!0), t !== j && !t || e.insertAbove(this), e
            },
            toShape: "#clone",
            _asPathItem: function () {
                return this.toPath(!1)
            },
            _draw: function (t, e, n, i) {
                var r, s, a, o, h, u = this._style,
                    l = u.hasFill(),
                    c = u.hasStroke(),
                    f = e.dontFinish || e.clip,
                    d = !i;
                (l || c || f) && (a = this._type, o = this._radius, h = "circle" === a, e.dontStart || t.beginPath(), d && h ? t.arc(0, 0, o, 0, 2 * Math.PI, !0) : (r = h ? o : o.width, s = h ? o : o.height, o = (h = this._size).width, h = h.height, d && "rectangle" === a && 0 === r && 0 === s ? t.rect(-o / 2, -h / 2, o, h) : (h = [-(d = o / 2), -(a = h / 2) + s, -d, (h = s * (o = .44771525016920644)) - a, (o = r * o) - d, -a, -d + r, -a, d - r, -a, d - o, -a, d, h - a, d, -a + s, d, a - s, d, a - h, d - o, a, d - r, a, -d + r, a, o - d, a, -d, a - h, -d, a - s], i && i.transform(h, h, 32), t.moveTo(h[0], h[1]), t.bezierCurveTo(h[2], h[3], h[4], h[5], h[6], h[7]), d !== r && t.lineTo(h[8], h[9]), t.bezierCurveTo(h[10], h[11], h[12], h[13], h[14], h[15]), a !== s && t.lineTo(h[16], h[17]), t.bezierCurveTo(h[18], h[19], h[20], h[21], h[22], h[23]), d !== r && t.lineTo(h[24], h[25]), t.bezierCurveTo(h[26], h[27], h[28], h[29], h[30], h[31]))), t.closePath()), f || !l && !c || (this._setStyles(t, e, n), l && (t.fill(u.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), c && t.stroke())
            },
            _canComposite: function () {
                return !(this.hasFill() && this.hasStroke())
            },
            _getBounds: function (t, e) {
                var n = new b(this._size).setCenter(0, 0),
                    i = this._style,
                    i = e.stroke && i.hasStroke() && i.getStrokeWidth();
                return t && (n = t._transformBounds(n)), i ? n.expand(W._getStrokePadding(i, this._getStrokeMatrix(t, e))) : n
            }
        }, new function () {
            function f(t, e, n) {
                var i = t._radius;
                if (!i.isZero())
                    for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                        var a = new E(1 < s && s < 4 ? -1 : 1, 2 < s ? -1 : 1),
                            o = a.multiply(r),
                            h = o.subtract(a.multiply(i));
                        if (new b(n ? o.add(a.multiply(n)) : o, h).contains(e)) return {
                            point: h,
                            quadrant: s
                        }
                    }
            }

            function d(t, e, n, i) {
                t = t.divide(e);
                return (!i || t.isInQuadrant(i)) && t.subtract(t.normalize()).multiply(e).divide(n).length <= 1
            }
            return {
                _contains: function t(e) {
                    if ("rectangle" !== this._type) return e.divide(this.size).getLength() <= .5;
                    var n = f(this, e);
                    return n ? e.subtract(n.point).divide(this._radius).getLength() <= 1 : t.base.call(this, e)
                },
                _hitTestSelf: function t(e, n, i, r) {
                    var s, a, o, h = !1,
                        u = this._style,
                        l = n.stroke && u.hasStroke(),
                        c = n.fill && u.hasFill();
                    return (l || c) && (a = this._type, s = this._radius, o = l ? u.getStrokeWidth() / 2 : 0, c = n._tolerancePadding.add(W._getStrokePadding(o, !u.getStrokeScaling() && r)), h = "rectangle" === a ? (u = f(this, e, o = c.multiply(2))) ? d(e.subtract(u.point), s, c, u.quadrant) : (u = (a = new b(this._size).setCenter(0, 0)).expand(o), o = a.expand(o.negate()), u._containsPoint(e) && !o._containsPoint(e)) : d(e, s, c)), h ? new T(l ? "stroke" : "fill", this) : t.base.apply(this, arguments)
                }
            }
        }, {
            statics: new function () {
                function i(t, e, n, i, r) {
                    var s = R.create(d.prototype);
                    return s._type = t, s._size = n, s._radius = i, s._initialize(R.getNamed(r), e), s
                }
                return {
                    Circle: function () {
                        var t = arguments,
                            e = E.readNamed(t, "center"),
                            n = R.readNamed(t, "radius");
                        return i("circle", e, new O(2 * n), n, t)
                    },
                    Rectangle: function () {
                        var t = arguments,
                            e = b.readNamed(t, "rectangle"),
                            n = O.min(O.readNamed(t, "radius"), e.getSize(!0).divide(2));
                        return i("rectangle", e.getCenter(!0), e.getSize(!0), n, t)
                    },
                    Ellipse: function () {
                        var t = arguments,
                            e = d._readEllipse(t),
                            n = e.radius;
                        return i("ellipse", e.center, n.multiply(2), n, t)
                    },
                    _readEllipse: function (t) {
                        var e, n;
                        return n = R.hasNamed(t, "radius") ? (e = E.readNamed(t, "center"), O.readNamed(t, "radius")) : (e = (n = b.readNamed(t, "rectangle")).getCenter(!0), n.getSize(!0).divide(2)), {
                            center: e,
                            radius: n
                        }
                    }
                }
            }
        }),
        c = V.extend({
            _class: "Raster",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: {
                stroke: !1,
                handle: !1
            },
            _serializeFields: {
                crossOrigin: null,
                source: null
            },
            _prioritize: ["crossOrigin"],
            _smoothing: "low",
            beans: !0,
            initialize: function (t, e) {
                var n, i;
                this._initialize(t, e !== j && E.read(arguments)) || ((i = "string" == (i = typeof t) ? A.getElementById(t) : "object" == i ? t : null) && i !== V.NO_INSERT && (i.getContext || null != i.naturalHeight ? n = i : i && ((i = O.read(arguments)).isZero() || (n = ut.getCanvas(i)))), n ? this.setImage(n) : this.setSource(t)), this._size || (this._size = new O, this._loaded = !1)
            },
            _equals: function (t) {
                return this.getSource() === t.getSource()
            },
            copyContent: function (t) {
                var e = t._image,
                    n = t._canvas;
                e ? this._setImage(e) : n && ((e = ut.getCanvas(t._size)).getContext("2d").drawImage(n, 0, 0), this._setImage(e)), this._crossOrigin = t._crossOrigin
            },
            getSize: function () {
                var t = this._size;
                return new n(t ? t.width : 0, t ? t.height : 0, this, "setSize")
            },
            setSize: function (t, e) {
                var n, i = O.read(arguments);
                i.equals(this._size) ? e && this.clear() : 0 < i.width && 0 < i.height ? (n = !e && this.getElement(), this._setImage(ut.getCanvas(i)), n && this.getContext(!0).drawImage(n, 0, 0, i.width, i.height)) : (this._canvas && ut.release(this._canvas), this._size = i.clone())
            },
            getWidth: function () {
                return this._size ? this._size.width : 0
            },
            setWidth: function (t) {
                this.setSize(t, this.getHeight())
            },
            getHeight: function () {
                return this._size ? this._size.height : 0
            },
            setHeight: function (t) {
                this.setSize(this.getWidth(), t)
            },
            getLoaded: function () {
                return this._loaded
            },
            isEmpty: function () {
                var t = this._size;
                return !t || 0 === t.width && 0 === t.height
            },
            getResolution: function () {
                var t = this._matrix,
                    e = new E(0, 0).transform(t),
                    n = new E(1, 0).transform(t).subtract(e),
                    e = new E(0, 1).transform(t).subtract(e);
                return new O(72 / n.getLength(), 72 / e.getLength())
            },
            getPpi: "#getResolution",
            getImage: function () {
                return this._image
            },
            setImage: function (e) {
                var i = this;

                function n(t) {
                    var e = i.getView(),
                        n = t && t.type || "load";
                    e && i.responds(n) && (Bt = e._scope, i.emit(n, new et(t)))
                }
                this._setImage(e), this._loaded ? setTimeout(n, 0) : e && N.add(e, {
                    load: function (t) {
                        i._setImage(e), n(t)
                    },
                    error: n
                })
            },
            _setImage: function (t) {
                this._canvas && ut.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new O(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(1033)
            },
            getCanvas: function () {
                if (!this._canvas) {
                    var e = ut.getContext(this._size);
                    try {
                        this._image && e.drawImage(this._image, 0, 0), this._canvas = e.canvas
                    } catch (t) {
                        ut.release(e)
                    }
                }
                return this._canvas
            },
            setCanvas: "#setImage",
            getContext: function (t) {
                return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(1025)), this._context
            },
            setContext: function (t) {
                this._context = t
            },
            getSource: function () {
                var t = this._image;
                return t && t.src || this.toDataURL()
            },
            setSource: function (t) {
                var e = new w.Image,
                    n = this._crossOrigin;
                n && (e.crossOrigin = n), t && (e.src = t), this.setImage(e)
            },
            getCrossOrigin: function () {
                var t = this._image;
                return t && t.crossOrigin || this._crossOrigin || ""
            },
            setCrossOrigin: function (t) {
                this._crossOrigin = t;
                var e = this._image;
                e && (e.crossOrigin = t)
            },
            getSmoothing: function () {
                return this._smoothing
            },
            setSmoothing: function (t) {
                this._smoothing = "string" == typeof t ? t : t ? "low" : "off", this._changed(257)
            },
            getElement: function () {
                return this._canvas || this._loaded && this._image
            }
        }, {
            beans: !1,
            getSubCanvas: function () {
                var t = b.read(arguments),
                    e = ut.getContext(t.getSize());
                return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
            },
            getSubRaster: function () {
                var t = b.read(arguments),
                    e = new c(V.NO_INSERT);
                return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e
            },
            toDataURL: function () {
                var t = this._image,
                    t = t && t.src;
                if (/^data:/.test(t)) return t;
                t = this.getCanvas();
                return t ? t.toDataURL.apply(t, arguments) : null
            },
            drawImage: function (t) {
                var e = E.read(arguments, 1);
                this.getContext(!0).drawImage(t, e.x, e.y)
            },
            getAverageColor: function (t) {
                if (t ? t instanceof _ ? i = (r = t).getBounds() : "object" == typeof t && ("width" in t ? i = new b(t) : "x" in t && (i = new b(t.x - .5, t.y - .5, 1, 1))) : i = this.getBounds(), !i) return null;
                var e = Math.min(i.width, 32),
                    n = Math.min(i.height, 32),
                    t = c._sampleContext;
                t ? t.clearRect(0, 0, 33, 33) : t = c._sampleContext = ut.getContext(new O(32)), t.save();
                var i = (new z).scale(e / i.width, n / i.height).translate(-i.x, -i.y);
                i.applyToContext(t), r && r.draw(t, new R({
                    clip: !0,
                    matrices: [i]
                })), this._matrix.applyToContext(t);
                var r = this.getElement(),
                    i = this._size;
                r && t.drawImage(r, -i.width / 2, -i.height / 2), t.restore();
                for (var s = t.getImageData(.5, .5, Math.ceil(e), Math.ceil(n)).data, a = [0, 0, 0], o = 0, h = 0, u = s.length; h < u; h += 4) {
                    var l = s[h + 3];
                    o += l, l /= 255, a[0] += s[h] * l, a[1] += s[h + 1] * l, a[2] += s[h + 2] * l
                }
                for (h = 0; h < 3; h++) a[h] /= o;
                return o ? C.read(a) : null
            },
            getPixel: function () {
                var t = E.read(arguments),
                    t = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                return new C("rgb", [t[0] / 255, t[1] / 255, t[2] / 255], t[3] / 255)
            },
            setPixel: function () {
                var t = arguments,
                    e = E.read(t),
                    n = C.read(t),
                    i = n._convert("rgb"),
                    r = n._alpha,
                    s = this.getContext(!0),
                    t = s.createImageData(1, 1),
                    n = t.data;
                n[0] = 255 * i[0], n[1] = 255 * i[1], n[2] = 255 * i[2], n[3] = null != r ? 255 * r : 255, s.putImageData(t, e.x, e.y)
            },
            clear: function () {
                var t = this._size;
                this.getContext(!0).clearRect(0, 0, t.width + 1, t.height + 1)
            },
            createImageData: function () {
                var t = O.read(arguments);
                return this.getContext().createImageData(t.width, t.height)
            },
            getImageData: function () {
                var t = b.read(arguments);
                return t.isEmpty() && (t = new b(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
            },
            setImageData: function (t) {
                var e = E.read(arguments, 1);
                this.getContext(!0).putImageData(t, e.x, e.y)
            },
            _getBounds: function (t, e) {
                var n = new b(this._size).setCenter(0, 0);
                return t ? t._transformBounds(n) : n
            },
            _hitTestSelf: function (t) {
                if (this._contains(t)) {
                    var e = this;
                    return new T("pixel", e, {
                        offset: t.add(e._size.divide(2)).round(),
                        color: {
                            get: function () {
                                return e.getPixel(this.offset)
                            }
                        }
                    })
                }
            },
            _draw: function (t, e, n) {
                var i = this.getElement();
                i && 0 < i.width && 0 < i.height && (t.globalAlpha = q.clamp(this._opacity, 0, 1), this._setStyles(t, e, n), e = this._smoothing, P.setPrefixed(t, (n = "off" === e) ? "imageSmoothingEnabled" : "imageSmoothingQuality", !n && e), t.drawImage(i, -this._size.width / 2, -this._size.height / 2))
            },
            _canComposite: function () {
                return !0
            }
        }),
        s = V.extend({
            _class: "SymbolItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: {
                stroke: !0
            },
            _serializeFields: {
                symbol: null
            },
            initialize: function (t, e) {
                this._initialize(t, e !== j && E.read(arguments, 1)) || this.setDefinition(t instanceof p ? t : new p(t))
            },
            _equals: function (t) {
                return this._definition === t._definition
            },
            copyContent: function (t) {
                this.setDefinition(t._definition)
            },
            getDefinition: function () {
                return this._definition
            },
            setDefinition: function (t) {
                this._definition = t, this._changed(9)
            },
            getSymbol: "#getDefinition",
            setSymbol: "#setDefinition",
            isEmpty: function () {
                return this._definition._item.isEmpty()
            },
            _getBounds: function (t, e) {
                var n = this._definition._item;
                return n._getCachedBounds(n._matrix.prepended(t), e)
            },
            _hitTestSelf: function (t, e, n) {
                e = e.extend({
                    all: !1
                }), n = this._definition._item._hitTest(t, e, n);
                return n && (n.item = this), n
            },
            _draw: function (t, e) {
                this._definition._item.draw(t, e)
            }
        }),
        p = R.extend({
            _class: "SymbolDefinition",
            initialize: function (t, e) {
                this._id = o.get(), this.project = Bt.project, t && this.setItem(t, e)
            },
            _serialize: function (t, e) {
                return e.add(this, function () {
                    return R.serialize([this._class, this._item], t, !1, e)
                })
            },
            _changed: function (t) {
                8 & t && V._clearBoundsCache(this), 1 & t && this.project._changed(t)
            },
            getItem: function () {
                return this._item
            },
            setItem: function (t, e) {
                t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), (this._item = t).remove(), t.setSelected(!1), e || t.setPosition(new E), (t._symbol = this)._changed(9)
            },
            getDefinition: "#getItem",
            setDefinition: "#setItem",
            place: function (t) {
                return new s(this, t)
            },
            clone: function () {
                return new p(this._item.clone(!1))
            },
            equals: function (t) {
                return t === this || t && this._item.equals(t._item) || !1
            }
        }),
        T = R.extend({
            _class: "HitResult",
            initialize: function (t, e, n) {
                this.type = t, this.item = e, n && this.inject(n)
            },
            statics: {
                getOptions: function (t) {
                    t = t && R.read(t);
                    return new R({
                        type: null,
                        tolerance: Bt.settings.hitTolerance,
                        fill: !t,
                        stroke: !t,
                        segments: !t,
                        handles: !1,
                        ends: !1,
                        position: !1,
                        center: !1,
                        bounds: !1,
                        guides: !1,
                        selected: !1
                    }, t)
                }
            }
        }),
        U = R.extend({
            _class: "Segment",
            beans: !0,
            _selection: 0,
            initialize: function (t, e, n, i, r, s) {
                var a, o, h, u, l = arguments.length;
                0 < l && (null == t || "object" == typeof t ? u = 1 === l && t && "point" in t ? (a = t.point, o = t.handleIn, h = t.handleOut, t.selection) : (a = t, o = e, h = n, i) : (a = [t, e], o = n !== j ? [n, i] : null, h = r !== j ? [r, s] : null)), new f(a, this, "_point"), new f(o, this, "_handleIn"), new f(h, this, "_handleOut"), u && this.setSelection(u)
            },
            _serialize: function (t, e) {
                var n = this._point,
                    i = this._selection,
                    n = i || this.hasHandles() ? [n, this._handleIn, this._handleOut] : n;
                return i && n.push(i), R.serialize(n, t, !0, e)
            },
            _changed: function (t) {
                var e, n, i, r = this._path;
                r && (e = r._curves, n = this._index, e && (t && t !== this._point && t !== this._handleIn || !(i = 0 < n ? e[n - 1] : r._closed ? e[e.length - 1] : null) || i._changed(), t && t !== this._point && t !== this._handleOut || !(i = e[n]) || i._changed()), r._changed(41))
            },
            getPoint: function () {
                return this._point
            },
            setPoint: function () {
                this._point.set(E.read(arguments))
            },
            getHandleIn: function () {
                return this._handleIn
            },
            setHandleIn: function () {
                this._handleIn.set(E.read(arguments))
            },
            getHandleOut: function () {
                return this._handleOut
            },
            setHandleOut: function () {
                this._handleOut.set(E.read(arguments))
            },
            hasHandles: function () {
                return !this._handleIn.isZero() || !this._handleOut.isZero()
            },
            isSmooth: function () {
                var t = this._handleIn,
                    e = this._handleOut;
                return !t.isZero() && !e.isZero() && t.isCollinear(e)
            },
            clearHandles: function () {
                this._handleIn._set(0, 0), this._handleOut._set(0, 0)
            },
            getSelection: function () {
                return this._selection
            },
            setSelection: function (t) {
                var e = this._selection,
                    n = this._path;
                this._selection = t = t || 0, n && t !== e && (n._updateSelection(this, e, t), n._changed(257))
            },
            _changeSelection: function (t, e) {
                var n = this._selection;
                this.setSelection(e ? n | t : n & ~t)
            },
            isSelected: function () {
                return !!(7 & this._selection)
            },
            setSelected: function (t) {
                this._changeSelection(7, t)
            },
            getIndex: function () {
                return this._index !== j ? this._index : null
            },
            getPath: function () {
                return this._path || null
            },
            getCurve: function () {
                var t = this._path,
                    e = this._index;
                return t ? (0 < e && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
            },
            getLocation: function () {
                var t = this.getCurve();
                return t ? new Z(t, this === t._segment1 ? 0 : 1) : null
            },
            getNext: function () {
                var t = this._path && this._path._segments;
                return t && (t[this._index + 1] || this._path._closed && t[0]) || null
            },
            smooth: function (t, e, n) {
                var i = t || {},
                    r = i.type,
                    s = i.factor,
                    a = this.getPrevious(),
                    o = this.getNext(),
                    h = (a || this)._point,
                    u = this._point,
                    l = (o || this)._point,
                    c = h.getDistance(u),
                    t = u.getDistance(l);
                if (r && "catmull-rom" !== r) {
                    if ("geometric" !== r) throw new Error("Smoothing method '" + r + "' not supported.");
                    a && o && (i = h.subtract(l), r = (_ = s === j ? .4 : s) * c / (c + t), e || this.setHandleIn(i.multiply(r)), n || this.setHandleOut(i.multiply(r - _)))
                } else {
                    var f, d, _ = s === j ? .5 : s,
                        s = Math.pow(c, _),
                        c = s * s,
                        t = Math.pow(t, _),
                        _ = t * t;
                    !e && a && (f = 2 * _ + 3 * t * s + c, this.setHandleIn(0 !== (d = 3 * t * (t + s)) ? new E((_ * h._x + f * u._x - c * l._x) / d - u._x, (_ * h._y + f * u._y - c * l._y) / d - u._y) : new E)), !n && o && (f = 2 * c + 3 * s * t + _, this.setHandleOut(0 !== (d = 3 * s * (s + t)) ? new E((c * l._x + f * u._x - _ * h._x) / d - u._x, (c * l._y + f * u._y - _ * h._y) / d - u._y) : new E))
                }
            },
            getPrevious: function () {
                var t = this._path && this._path._segments;
                return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            isFirst: function () {
                return !this._index
            },
            isLast: function () {
                var t = this._path;
                return t && this._index === t._segments.length - 1 || !1
            },
            reverse: function () {
                var t = this._handleIn,
                    e = this._handleOut,
                    n = t.clone();
                t.set(e), e.set(n)
            },
            reversed: function () {
                return new U(this._point, this._handleOut, this._handleIn)
            },
            remove: function () {
                return !!this._path && !!this._path.removeSegment(this._index)
            },
            clone: function () {
                return new U(this._point, this._handleIn, this._handleOut)
            },
            equals: function (t) {
                return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1
            },
            toString: function () {
                var t = ["point: " + this._point];
                return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
            },
            transform: function (t) {
                this._transformCoordinates(t, new Array(6), !0), this._changed()
            },
            interpolate: function (t, e, n) {
                var i = 1 - n,
                    r = n,
                    s = t._point,
                    a = e._point,
                    o = t._handleIn,
                    n = e._handleIn,
                    e = e._handleOut,
                    t = t._handleOut;
                this._point._set(i * s._x + r * a._x, i * s._y + r * a._y, !0), this._handleIn._set(i * o._x + r * n._x, i * o._y + r * n._y, !0), this._handleOut._set(i * t._x + r * e._x, i * t._y + r * e._y, !0), this._changed()
            },
            _transformCoordinates: function (t, e, n) {
                var i = this._point,
                    r = n && this._handleIn.isZero() ? null : this._handleIn,
                    s = n && this._handleOut.isZero() ? null : this._handleOut,
                    a = i._x,
                    o = i._y,
                    h = 2;
                return e[0] = a, e[1] = o, r && (e[h++] = r._x + a, e[h++] = r._y + o), s && (e[h++] = s._x + a, e[h++] = s._y + o), t && (t._transformCoordinates(e, e, h / 2), a = e[0], o = e[1], n ? (i._x = a, i._y = o, h = 2, r && (r._x = e[h++] - a, r._y = e[h++] - o), s && (s._x = e[h++] - a, s._y = e[h++] - o)) : (r || (e[h++] = a, e[h++] = o), s || (e[h++] = a, e[h++] = o))), e
            }
        }),
        f = E.extend({
            initialize: function (t, e, n) {
                var i, r, s;
                t ? (i = t[0]) !== j ? r = t[1] : ((i = (s = t).x) === j && (i = (s = E.read(arguments)).x), r = s.y, s = s.selected) : i = r = 0, this._x = i, this._y = r, (this._owner = e)[n] = this, s && this.setSelected(!0)
            },
            _set: function (t, e) {
                return this._x = t, this._y = e, this._owner._changed(this), this
            },
            getX: function () {
                return this._x
            },
            setX: function (t) {
                this._x = t, this._owner._changed(this)
            },
            getY: function () {
                return this._y
            },
            setY: function (t) {
                this._y = t, this._owner._changed(this)
            },
            isZero: function () {
                var t = q.isZero;
                return t(this._x) && t(this._y)
            },
            isSelected: function () {
                return !!(this._owner._selection & this._getSelection())
            },
            setSelected: function (t) {
                this._owner._changeSelection(this._getSelection(), t)
            },
            _getSelection: function () {
                var t = this._owner;
                return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0
            }
        }),
        H = R.extend({
            _class: "Curve",
            beans: !0,
            initialize: function (t, e, n, i, r, s, a, o) {
                var h, u, l, c, f, d, _ = arguments.length;
                3 === _ ? (this._path = t, h = e, u = n) : _ ? 1 === _ ? "segment1" in t ? (h = new U(t.segment1), u = new U(t.segment2)) : "point1" in t ? (l = t.point1, f = t.handle1, d = t.handle2, c = t.point2) : Array.isArray(t) && (l = [t[0], t[1]], c = [t[6], t[7]], f = [t[2] - t[0], t[3] - t[1]], d = [t[4] - t[6], t[5] - t[7]]) : 2 === _ ? (h = new U(t), u = new U(e)) : 4 === _ ? (l = t, f = e, d = n, c = i) : 8 === _ && (l = [t, e], c = [a, o], f = [n - t, i - e], d = [r - a, s - o]) : (h = new U, u = new U), this._segment1 = h || new U(l, null, f), this._segment2 = u || new U(c, d, null)
            },
            _serialize: function (t, e) {
                return R.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e)
            },
            _changed: function () {
                this._length = this._bounds = j
            },
            clone: function () {
                return new H(this._segment1, this._segment2)
            },
            toString: function () {
                var t = ["point1: " + this._segment1._point];
                return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
            },
            classify: function () {
                return H.classify(this.getValues())
            },
            remove: function () {
                var t, e, n = !1;
                return this._path && (e = (t = this._segment2)._handleOut, (n = t.remove()) && this._segment1._handleOut.set(e)), n
            },
            getPoint1: function () {
                return this._segment1._point
            },
            setPoint1: function () {
                this._segment1._point.set(E.read(arguments))
            },
            getPoint2: function () {
                return this._segment2._point
            },
            setPoint2: function () {
                this._segment2._point.set(E.read(arguments))
            },
            getHandle1: function () {
                return this._segment1._handleOut
            },
            setHandle1: function () {
                this._segment1._handleOut.set(E.read(arguments))
            },
            getHandle2: function () {
                return this._segment2._handleIn
            },
            setHandle2: function () {
                this._segment2._handleIn.set(E.read(arguments))
            },
            getSegment1: function () {
                return this._segment1
            },
            getSegment2: function () {
                return this._segment2
            },
            getPath: function () {
                return this._path
            },
            getIndex: function () {
                return this._segment1._index
            },
            getNext: function () {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
            },
            getPrevious: function () {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            isFirst: function () {
                return !this._segment1._index
            },
            isLast: function () {
                var t = this._path;
                return t && this._segment1._index === t._curves.length - 1 || !1
            },
            isSelected: function () {
                return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected()
            },
            setSelected: function (t) {
                this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t)
            },
            getValues: function (t) {
                return H.getValues(this._segment1, this._segment2, t)
            },
            getPoints: function () {
                for (var t = this.getValues(), e = [], n = 0; n < 8; n += 2) e.push(new E(t[n], t[n + 1]));
                return e
            }
        }, {
            getLength: function () {
                return null == this._length && (this._length = H.getLength(this.getValues(), 0, 1)), this._length
            },
            getArea: function () {
                return H.getArea(this.getValues())
            },
            getLine: function () {
                return new L(this._segment1._point, this._segment2._point)
            },
            getPart: function (t, e) {
                return new H(H.getPart(this.getValues(), t, e))
            },
            getPartLength: function (t, e) {
                return H.getLength(this.getValues(), t, e)
            },
            divideAt: function (t) {
                return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t))
            },
            divideAtTime: function (t, e) {
                var n, i, r, s, a, o, h = null;
                return 1e-8 <= t && t <= 1 - 1e-8 && (n = (o = H.subdivide(this.getValues(), t))[0], i = o[1], r = e || this.hasHandles(), s = this._segment1, a = this._segment2, t = this._path, r && (s._handleOut._set(n[2] - n[0], n[3] - n[1]), a._handleIn._set(i[4] - i[6], i[5] - i[7])), o = n[6], e = n[7], e = new U(new E(o, e), r && new E(n[4] - o, n[5] - e), r && new E(i[2] - o, i[3] - e)), h = t ? (t.insert(s._index + 1, e), this.getNext()) : (this._segment2 = e, this._changed(), new H(e, a))), h
            },
            splitAt: function (t) {
                var e = this._path;
                return e ? e.splitAt(t) : null
            },
            splitAtTime: function (t) {
                return this.splitAt(this.getLocationAtTime(t))
            },
            divide: function (t, e) {
                return this.divideAtTime(t === j ? .5 : e ? t : this.getTimeAt(t))
            },
            split: function (t, e) {
                return this.splitAtTime(t === j ? .5 : e ? t : this.getTimeAt(t))
            },
            reversed: function () {
                return new H(this._segment2.reversed(), this._segment1.reversed())
            },
            clearHandles: function () {
                this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0)
            },
            statics: {
                getValues: function (t, e, n, i) {
                    var r = t._point,
                        s = t._handleOut,
                        a = e._handleIn,
                        o = e._point,
                        t = r.x,
                        e = r.y,
                        r = o.x,
                        o = o.y,
                        o = i ? [t, e, t, e, r, o, r, o] : [t, e, t + s._x, e + s._y, r + a._x, o + a._y, r, o];
                    return n && n._transformCoordinates(o, o, 4), o
                },
                subdivide: function (t, e) {
                    var n = t[0],
                        i = t[1],
                        r = t[2],
                        s = t[3],
                        a = t[4],
                        o = t[5],
                        h = t[6],
                        u = t[7],
                        l = 1 - (e = e === j ? .5 : e),
                        c = l * n + e * r,
                        f = l * i + e * s,
                        d = l * r + e * a,
                        _ = l * s + e * o,
                        t = l * a + e * h,
                        r = l * o + e * u,
                        s = l * c + e * d,
                        a = l * f + e * _,
                        o = l * d + e * t,
                        d = l * _ + e * r,
                        _ = l * s + e * o,
                        e = l * a + e * d;
                    return [
                        [n, i, c, f, s, a, _, e],
                        [_, e, o, d, t, r, h, u]
                    ]
                },
                getMonoCurves: function (t, e) {
                    var n, i, r = [],
                        s = e ? 0 : 1,
                        a = t[0 + s],
                        o = t[2 + s],
                        e = t[4 + s],
                        s = t[6 + s];
                    return !(o <= a == e <= o && e <= o == s <= e || H.isStraight(t)) && (i = q.solveQuadratic(3 * (o - e) - a + s, 2 * (a + e) - 4 * o, o - a, n = [], 1e-8, 1 - 1e-8)) ? (n.sort(), o = n[0], a = H.subdivide(t, o), r.push(a[0]), 1 < i && (o = (n[1] - o) / (1 - o), a = H.subdivide(a[1], o), r.push(a[0])), r.push(a[1])) : r.push(t), r
                },
                solveCubic: function (t, e, n, i, r, s) {
                    var a = t[e],
                        o = t[e + 2],
                        h = t[e + 4],
                        t = t[e + 6],
                        e = 0;
                    return e = !(a < n && t < n && o < n && h < n || n < a && n < t && n < o && n < h) ? q.solveCubic(t - a - (t = 3 * (o - a)) - (o = 3 * (h - o) - t), o, t, a - n, i, r, s) : e
                },
                getTimeOf: function (t, e) {
                    var n = new E(t[0], t[1]),
                        i = new E(t[6], t[7]);
                    if (null === (e.isClose(n, 1e-12) ? 0 : e.isClose(i, 1e-12) ? 1 : null))
                        for (var r = [e.x, e.y], s = [], a = 0; a < 2; a++)
                            for (var o = H.solveCubic(t, a, r[a], s, 0, 1), h = 0; h < o; h++) {
                                var u = s[h];
                                if (e.isClose(H.getPoint(t, u), 1e-7)) return u
                            }
                    return e.isClose(n, 1e-7) ? 0 : e.isClose(i, 1e-7) ? 1 : null
                },
                getNearestTime: function (n, i) {
                    if (H.isStraight(n)) {
                        var t = n[0],
                            e = n[1],
                            r = n[6] - t,
                            s = n[7] - e,
                            a = r * r + s * s;
                        if (0 == a) return 0;
                        a = ((i.x - t) * r + (i.y - e) * s) / a;
                        return a < 1e-12 ? 0 : .999999999999 < a ? 1 : H.getTimeOf(n, new E(t + a * r, e + a * s))
                    }
                    var o = 1 / 0,
                        h = 0;

                    function u(t) {
                        if (0 <= t && t <= 1) {
                            var e = i.getDistance(H.getPoint(n, t), !0);
                            return e < o ? (o = e, h = t, 1) : void 0
                        }
                    }
                    for (var l = 0; l <= 100; l++) u(l / 100);
                    for (var c = .005; 1e-8 < c;) u(h - c) || u(h + c) || (c /= 2);
                    return h
                },
                getPart: function (t, e, n) {
                    var i, r = n < e;
                    return r && (i = e, e = n, n = i), 0 < e && (t = H.subdivide(t, e)[1]), n < 1 && (t = H.subdivide(t, (n - e) / (1 - e))[0]), r ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                },
                isFlatEnough: function (t, e) {
                    var n = t[0],
                        i = t[1],
                        r = t[2],
                        s = t[3],
                        a = t[4],
                        o = t[5],
                        h = t[6],
                        t = t[7],
                        r = 3 * r - 2 * n - h,
                        s = 3 * s - 2 * i - t,
                        n = 3 * a - 2 * h - n,
                        i = 3 * o - 2 * t - i;
                    return Math.max(r * r, n * n) + Math.max(s * s, i * i) <= 16 * e * e
                },
                getArea: function (t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = t[3],
                        s = t[4],
                        a = t[5],
                        o = t[6],
                        t = t[7];
                    return 3 * ((t - n) * (i + s) - (o - e) * (r + a) + r * (e - s) - i * (n - a) + t * (s + e / 3) - o * (a + n / 3)) / 20
                },
                getBounds: function (t) {
                    for (var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0; r < 2; r++) H._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, n, i);
                    return new b(e[0], e[1], n[0] - e[0], n[1] - e[1])
                },
                _addBounds: function (t, e, n, i, r, s, a, o, h) {
                    function u(t, e) {
                        var n = t - e,
                            e = t + e;
                        n < a[r] && (a[r] = n), e > o[r] && (o[r] = e)
                    }
                    var l = a[r] + (s /= 2),
                        c = o[r] - s;
                    if (t < l || e < l || n < l || i < l || c < t || c < e || c < n || c < i)
                        if (e < t != e < i && n < t != n < i) u(t, 0), u(i, 0);
                        else {
                            var f = q.solveQuadratic(3 * (e - n) - t + i, 2 * (t + n) - 4 * e, e - t, h);
                            u(i, 0);
                            for (var d = 0; d < f; d++) {
                                var _ = h[d],
                                    g = 1 - _;
                                1e-8 <= _ && _ <= 1 - 1e-8 && u(g * g * g * t + 3 * g * g * _ * e + 3 * g * _ * _ * n + _ * _ * _ * i, s)
                            }
                        }
                }
            }
        }, R.each(["getBounds", "getStrokeBounds", "getHandleBounds"], function (t) {
            this[t] = function () {
                return this._bounds || (this._bounds = {}), (this._bounds[t] || (this._bounds[t] = W[t]([this._segment1, this._segment2], !1, this._path))).clone()
            }
        }, {}), R.each({
            isStraight: function (t, e, n, i) {
                if (e.isZero() && n.isZero()) return !0;
                var r = i.subtract(t);
                if (r.isZero()) return !1;
                if (r.isCollinear(e) && r.isCollinear(n)) {
                    var s = new L(t, i);
                    if (s.getDistance(t.add(e)) < 1e-7 && s.getDistance(i.add(n)) < 1e-7) {
                        i = r.dot(r), e = r.dot(e) / i, i = r.dot(n) / i;
                        return 0 <= e && e <= 1 && i <= 0 && -1 <= i
                    }
                }
                return !1
            },
            isLinear: function (t, e, n, i) {
                t = i.subtract(t).divide(3);
                return e.equals(t) && n.negate().equals(t)
            }
        }, function (a, t) {
            this[t] = function (t) {
                var e = this._segment1,
                    n = this._segment2;
                return a(e._point, e._handleOut, n._handleIn, n._point, t)
            }, this.statics[t] = function (t, e) {
                var n = t[0],
                    i = t[1],
                    r = t[6],
                    s = t[7];
                return a(new E(n, i), new E(t[2] - n, t[3] - i), new E(t[4] - r, t[5] - s), new E(r, s), e)
            }
        }, {
            statics: {},
            hasHandles: function () {
                return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero()
            },
            hasLength: function (t) {
                return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0)
            },
            isCollinear: function (t) {
                return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine())
            },
            isHorizontal: function () {
                return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-8
            },
            isVertical: function () {
                return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-8
            }
        }), {
            beans: !1,
            getLocationAt: function (t, e) {
                return this.getLocationAtTime(e ? t : this.getTimeAt(t))
            },
            getLocationAtTime: function (t) {
                return null != t && 0 <= t && t <= 1 ? new Z(this, t) : null
            },
            getTimeAt: function (t, e) {
                return H.getTimeAt(this.getValues(), t, e)
            },
            getParameterAt: "#getTimeAt",
            getTimesWithTangent: function () {
                var t = E.read(arguments);
                return t.isZero() ? [] : H.getTimesWithTangent(this.getValues(), t)
            },
            getOffsetAtTime: function (t) {
                return this.getPartLength(0, t)
            },
            getLocationOf: function () {
                return this.getLocationAtTime(this.getTimeOf(E.read(arguments)))
            },
            getOffsetOf: function () {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getTimeOf: function () {
                return H.getTimeOf(this.getValues(), E.read(arguments))
            },
            getParameterOf: "#getTimeOf",
            getNearestLocation: function () {
                var t = E.read(arguments),
                    e = this.getValues(),
                    n = H.getNearestTime(e, t),
                    e = H.getPoint(e, n);
                return new Z(this, n, e, null, t.getDistance(e))
            },
            getNearestPoint: function () {
                var t = this.getNearestLocation.apply(this, arguments);
                return t && t.getPoint()
            }
        }, new function () {
            var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"];
            return R.each(t, function (i) {
                this[i + "At"] = function (t, e) {
                    var n = this.getValues();
                    return H[i](n, e ? t : H.getTimeAt(n, t))
                }, this[i + "AtTime"] = function (t) {
                    return H[i](this.getValues(), t)
                }
            }, {
                statics: {
                    _evaluateMethods: t
                }
            })
        }, new function () {
            function l(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    a = t[5],
                    o = t[6],
                    t = t[7],
                    h = 9 * (i - s) + 3 * (o - e),
                    u = 6 * (e + s) - 12 * i,
                    l = 3 * (i - e),
                    c = 9 * (r - a) + 3 * (t - n),
                    f = 6 * (n + a) - 12 * r,
                    d = 3 * (r - n);
                return function (t) {
                    var e = (h * t + u) * t + l,
                        t = (c * t + f) * t + d;
                    return Math.sqrt(e * e + t * t)
                }
            }

            function c(t, e) {
                return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t))))
            }

            function n(t, e, n, i) {
                if (null == e || e < 0 || 1 < e) return null;
                var r = t[0],
                    s = t[1],
                    a = t[2],
                    o = t[3],
                    h = t[4],
                    u = t[5],
                    l = t[6],
                    c = t[7],
                    f = q.isZero;
                f(a - r) && f(o - s) && (a = r, o = s), f(h - l) && f(u - c) && (h = l, u = c);
                var d, _, g = 3 * (a - r),
                    p = 3 * (h - a) - g,
                    v = l - r - g - p,
                    m = 3 * (o - s),
                    t = 3 * (u - o) - m,
                    f = c - s - m - t;
                return 0 === n ? (d = 0 === e ? r : 1 === e ? l : ((v * e + p) * e + g) * e + r, _ = 0 === e ? s : 1 === e ? c : ((f * e + t) * e + m) * e + s) : (0, _ = e < 1e-8 ? (d = g, m) : 1 - 1e-8 < e ? (d = 3 * (l - h), 3 * (c - u)) : (d = (3 * v * e + 2 * p) * e + g, (3 * f * e + 2 * t) * e + m), i && (0 === d && 0 === _ && (e < 1e-8 || 1 - 1e-8 < e) && (d = h - a, _ = u - o), (o = Math.sqrt(d * d + _ * _)) && (d /= o, _ /= o)), 3 === n && (h = 6 * v * e + 2 * p, u = 6 * f * e + 2 * t, d = 0 !== (t = Math.pow(d * d + _ * _, 1.5)) ? (d * u - _ * h) / t : 0, _ = 0)), 2 === n ? new E(_, -d) : new E(d, _)
            }
            return {
                statics: {
                    classify: function (t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2],
                            r = t[3],
                            s = t[4],
                            a = t[5],
                            o = t[6],
                            h = t[7],
                            t = i * (n - h) + r * (o - e) + e * h - n * o,
                            i = 3 * (s * (r - n) + a * (e - i) + i * n - r * e),
                            r = i - t,
                            o = r - t + (e * (h - a) + n * (s - o) + o * a - h * s),
                            a = Math.sqrt(o * o + r * r + i * i),
                            h = 0 !== a ? 1 / a : 0,
                            s = q.isZero,
                            a = "serpentine";

                        function u(t, e, n) {
                            var i = e !== j,
                                r = i && 0 < e && e < 1,
                                s = i && 0 < n && n < 1;
                            return !i || (r || s) && ("loop" !== t || r && s) || (r = s = !(t = "arch")), {
                                type: t,
                                roots: r || s ? r && s ? e < n ? [e, n] : [n, e] : [r ? e : n] : null
                            }
                        }
                        if (r *= h, i *= h, s(o *= h)) return s(r) ? u(s(i) ? "line" : "quadratic") : u(a, i / (3 * r));
                        i = 3 * r * r - 4 * o * i;
                        if (s(i)) return u("cusp", r / (2 * o));
                        s = 0 < i ? Math.sqrt(i / 3) : Math.sqrt(-i), o *= 2;
                        return u(0 < i ? a : "loop", (r + s) / o, (r - s) / o)
                    },
                    getLength: function (t, e, n, i) {
                        if (e === j && (e = 0), n === j && (n = 1), H.isStraight(t)) {
                            var r = t;
                            n < 1 && (r = H.subdivide(r, n)[0], e /= n);
                            var s = (r = 0 < e ? H.subdivide(r, e)[1] : r)[6] - r[0],
                                r = r[7] - r[1];
                            return Math.sqrt(s * s + r * r)
                        }
                        return q.integrate(i || l(t), e, n, c(e, n))
                    },
                    getTimeAt: function (t, e, n) {
                        if (n === j && (n = e < 0 ? 1 : 0), 0 === e) return n;
                        var i = Math.abs,
                            r = 0 < e,
                            s = r ? n : 0,
                            a = r ? 1 : n,
                            o = l(t),
                            h = H.getLength(t, s, a, o),
                            t = i(e) - h;
                        if (i(t) < 1e-12) return r ? a : s;
                        if (1e-12 < t) return null;
                        var u = 0;
                        return q.findRoot(function (t) {
                            return u += q.integrate(o, n, t, c(n, t)), n = t, u - e
                        }, o, n + e / h, s, a, 32, 1e-12)
                    },
                    getPoint: function (t, e) {
                        return n(t, e, 0, !1)
                    },
                    getTangent: function (t, e) {
                        return n(t, e, 1, !0)
                    },
                    getWeightedTangent: function (t, e) {
                        return n(t, e, 1, !1)
                    },
                    getNormal: function (t, e) {
                        return n(t, e, 2, !0)
                    },
                    getWeightedNormal: function (t, e) {
                        return n(t, e, 2, !1)
                    },
                    getCurvature: function (t, e) {
                        return n(t, e, 3, !1).x
                    },
                    getPeaks: function (t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2],
                            r = t[3],
                            s = t[4],
                            a = t[5],
                            o = 3 * i - e - 3 * s + t[6],
                            s = 3 * e - 6 * i + 3 * s,
                            i = -3 * e + 3 * i,
                            t = 3 * r - n - 3 * a + t[7],
                            a = 3 * n - 6 * r + 3 * a,
                            n = -3 * n + 3 * r,
                            r = [];
                        return q.solveCubic(9 * (o * o + t * t), 9 * (o * s + a * t), 2 * (s * s + a * a) + 3 * (i * o + n * t), i * s + a * n, r, 1e-8, 1 - 1e-8), r.sort()
                    }
                }
            }
        }, new function () {
            function T(t, e, n, i, r, s, a) {
                var o = !a && n.getPrevious() === r,
                    h = !a && n !== r && n.getNext() === r;
                null !== i && (o ? 1e-8 : 0) <= i && i <= (h ? 1 - 1e-8 : 1) && null !== s && (h ? 1e-8 : 0) <= s && s <= (o ? 1 - 1e-8 : 1) && (i = new Z(n, i, null, a), a = new Z(r, s, null, a), (i._intersection = a)._intersection = i, e && !e(i) || Z.insert(t, i, !0))
            }

            function O(t, e, n, i, r, s, a, o, h, u, l, c, f) {
                if (4096 <= ++h || 40 <= ++o) return h;
                var d, _, g = e[0],
                    p = e[1],
                    v = e[6],
                    m = e[7],
                    y = L.getSignedDistance,
                    w = y(g, p, v, m, e[2], e[3]),
                    x = y(g, p, v, m, e[4], e[5]),
                    b = 0 < w * x ? .75 : 4 / 9,
                    C = b * Math.min(0, w, x),
                    S = b * Math.max(0, w, x),
                    k = y(g, p, v, m, t[0], t[1]),
                    I = y(g, p, v, m, t[2], t[3]),
                    b = y(g, p, v, m, t[4], t[5]),
                    p = y(g, p, v, m, t[6], t[7]),
                    v = function (t, e, n, i) {
                        var r = [0, t],
                            s = [1 / 3, e],
                            a = [2 / 3, n],
                            o = [1, i],
                            e = e - (2 * t + i) / 3,
                            t = n - (t + 2 * i) / 3;
                        o = e * t < 0 ? [
                            [r, s, o],
                            [r, a, o]
                        ] : [2 <= (i = e / t) ? [r, s, o] : i <= .5 ? [r, a, o] : [r, s, a, o],
                            [r, o]
                        ];
                        return (e || t) < 0 ? o.reverse() : o
                    }(k, I, b, p),
                    m = v[0],
                    v = v[1];
                if (0 === w && 0 === x && 0 === k && 0 === I && 0 === b && 0 === p || null == (d = z(m, v, C, S)) || null == (_ = z(m.reverse(), v.reverse(), C, S))) return h;
                var P, M, A, S = u + (l - u) * d,
                    l = u + (l - u) * _;
                return Math.max(f - c, l - S) < 1e-9 ? (P = (S + l) / 2, A = (c + f) / 2, T(r, s, a ? i : n, a ? A : P, a ? n : i, a ? P : A)) : (t = H.getPart(t, d, _), u = f - c, h = .8 < _ - d ? u < l - S ? (h = O(e, (M = H.subdivide(t, .5))[0], i, n, r, s, !a, o, h, c, f, S, P = (S + l) / 2), O(e, M[1], i, n, r, s, !a, o, h, c, f, P, l)) : (h = O((M = H.subdivide(e, .5))[0], t, i, n, r, s, !a, o, h, c, A = (c + f) / 2, S, l), O(M[1], t, i, n, r, s, !a, o, h, A, f, S, l)) : 0 == u || 1e-9 <= u ? O(e, t, i, n, r, s, !a, o, h, c, f, S, l) : O(t, e, n, i, r, s, a, o, h, S, l, c, f)), h
            }

            function z(t, e, n, i) {
                return t[0][1] < n ? r(t, !0, n) : e[0][1] > i ? r(e, !1, i) : t[0][0]
            }

            function r(t, e, n) {
                for (var i = t[0][0], r = t[0][1], s = 1, a = t.length; s < a; s++) {
                    var o = t[s][0],
                        h = t[s][1];
                    if (e ? n <= h : h <= n) return h === n ? o : i + (n - r) * (o - i) / (h - r);
                    i = o, r = h
                }
                return null
            }

            function y(t, e, n, i, r) {
                var s = q.isZero;
                if (s(i) && s(r)) {
                    s = H.getTimeOf(t, new E(e, n));
                    return null === s ? [] : [s]
                }
                for (var i = Math.atan2(-r, i), a = Math.sin(i), o = Math.cos(i), h = [], i = [], u = 0; u < 8; u += 2) {
                    var l = t[u] - e,
                        c = t[u + 1] - n;
                    h.push(l * o - c * a, l * a + c * o)
                }
                return H.solveCubic(h, 1, 0, i, 0, 1), i
            }

            function x(t, e, n, i, r, s) {
                var a = 1e-12,
                    o = Math.min,
                    h = Math.max;
                if (h(t[0], t[2], t[4], t[6]) + a > o(e[0], e[2], e[4], e[6]) && o(t[0], t[2], t[4], t[6]) - a < h(e[0], e[2], e[4], e[6]) && h(t[1], t[3], t[5], t[7]) + a > o(e[1], e[3], e[5], e[7]) && o(t[1], t[3], t[5], t[7]) - a < h(e[1], e[3], e[5], e[7])) {
                    var u = w(t, e);
                    if (u)
                        for (var l = 0; l < 2; l++) {
                            var c = u[l];
                            T(r, s, n, c[0], i, c[1], !0)
                        } else {
                            var f = H.isStraight(t),
                                d = H.isStraight(e),
                                _ = f && d,
                                o = f && !d,
                                h = r.length;
                            if ((_ ? function (t, e, n, i, r, s) {
                                    var a = L.intersect(t[0], t[1], t[6], t[7], e[0], e[1], e[6], e[7]);
                                    a && T(r, s, n, H.getTimeOf(t, a), i, H.getTimeOf(e, a))
                                } : f || d ? function (t, e, n, i, r, s, a) {
                                    for (var o = e[0], h = e[1], u = y(t, o, h, e[6] - o, e[7] - h), l = 0, c = u.length; l < c; l++) {
                                        var f = u[l],
                                            d = H.getPoint(t, f),
                                            d = H.getTimeOf(e, d);
                                        null !== d && T(r, s, a ? i : n, a ? d : f, a ? n : i, a ? f : d)
                                    }
                                } : O)(o ? e : t, o ? t : e, o ? i : n, o ? n : i, r, s, o, 0, 0, 0, 1, 0, 1), !_ || r.length === h)
                                for (l = 0; l < 4; l++) {
                                    var g = l >> 1,
                                        p = 1 & l,
                                        v = 6 * g,
                                        m = 6 * p,
                                        v = new E(t[v], t[1 + v]),
                                        m = new E(e[m], e[1 + m]);
                                    v.isClose(m, a) && T(r, s, n, g, i, p)
                                }
                        }
                }
                return r
            }

            function b(t, e, n, i) {
                t = H.classify(t);
                return "loop" === t.type && T(n, i, e, (t = t.roots)[0], e, t[1]), n
            }

            function w(t, e) {
                function n(t) {
                    var e = t[6] - t[0],
                        t = t[7] - t[1];
                    return e * e + t * t
                }
                var i = Math.abs,
                    r = L.getDistance,
                    s = 1e-7,
                    a = H.isStraight(t),
                    o = H.isStraight(e),
                    h = a && o,
                    u = n(t) < n(e),
                    l = u ? e : t,
                    c = u ? t : e,
                    f = l[0],
                    d = l[1],
                    _ = l[6] - f,
                    u = l[7] - d;
                if (r(f, d, _, u, c[0], c[1], !0) < s && r(f, d, _, u, c[6], c[7], !0) < s) !h && r(f, d, _, u, l[2], l[3], !0) < s && r(f, d, _, u, l[4], l[5], !0) < s && r(f, d, _, u, c[2], c[3], !0) < s && r(f, d, _, u, c[4], c[5], !0) < s && (a = o = h = !0);
                else if (h) return null;
                if (a ^ o) return null;
                for (var g = [t, e], p = [], v = 0; v < 4 && p.length < 2; v++) {
                    var m = 1 & v,
                        y = 1 ^ m,
                        w = v >> 1,
                        y = H.getTimeOf(g[m], new E(g[y][w ? 6 : 0], g[y][w ? 7 : 1]));
                    if (null != y && (w = m ? [w, y] : [y, w], (!p.length || 1e-8 < i(w[0] - p[0][0]) && 1e-8 < i(w[1] - p[0][1])) && p.push(w)), 2 < v && !p.length) break
                }
                return 2 !== p.length ? p = null : h || (t = H.getPart(t, p[0][0], p[1][0]), (i((e = H.getPart(e, p[0][1], p[1][1]))[2] - t[2]) > s || i(e[3] - t[3]) > s || i(e[4] - t[4]) > s || i(e[5] - t[5]) > s) && (p = null)), p
            }
            return {
                getIntersections: function (t) {
                    var e = this.getValues(),
                        n = t && t !== this && t.getValues();
                    return n ? x(e, n, this, t, []) : b(e, this, [])
                },
                statics: {
                    getOverlaps: w,
                    getIntersections: function (t, e, n, i, r, s) {
                        for (var a = !e, o = t.length, h = (e = a ? t : e).length, u = new Array(o), l = a ? u : new Array(h), c = [], f = 0; f < o; f++) u[f] = t[f].getValues(i);
                        if (!a)
                            for (f = 0; f < h; f++) l[f] = e[f].getValues(r);
                        for (var d = D.findCurveBoundsCollisions(u, l, 1e-7), _ = 0; _ < o; _++) {
                            var g = t[_],
                                p = u[_];
                            a && b(p, g, c, n);
                            var v = d[_];
                            if (v)
                                for (var m = 0; m < v.length; m++) {
                                    if (s && c.length) return c;
                                    var y, w = v[m];
                                    (!a || _ < w) && (y = e[w], x(p, l[w], g, y, c, n))
                                }
                        }
                        return c
                    },
                    getCurveLineIntersections: y,
                    getTimesWithTangent: function (t, e) {
                        var n, i = t[0],
                            r = t[1],
                            s = t[2],
                            a = t[3],
                            o = t[4],
                            h = t[5],
                            u = t[6],
                            l = t[7],
                            e = (t = e.normalize()).x,
                            t = t.y,
                            u = 3 * u - 9 * o + 9 * s - 3 * i,
                            l = 3 * l - 9 * h + 9 * a - 3 * r,
                            o = 6 * o - 12 * s + 6 * i,
                            h = 6 * h - 12 * a + 6 * r,
                            s = 3 * s - 3 * i,
                            i = 3 * a - 3 * r,
                            a = 2 * u * t - 2 * l * e,
                            r = [];
                        return Math.abs(a) < q.CURVETIME_EPSILON ? 0 == (a = u * h - l * o) || 0 <= (n = -(u * i - l * s) / a) && n <= 1 && r.push(n) : (n = o * t - h * e, 0 <= (i = (o * o - 4 * u * s) * t * t + (-2 * o * h + 4 * l * s + 4 * u * i) * e * t + (h * h - 4 * l * i) * e * e) && 0 != a && (i = (-n + (e = Math.sqrt(i))) / a, 0 <= (a = -(n + e) / a) && a <= 1 && r.push(a), 0 <= i && i <= 1 && r.push(i))), r
                    }
                }
            }
        }),
        Z = R.extend({
            _class: "CurveLocation",
            initialize: function (t, e, n, i, r) {
                var s;
                .99999999 <= e && ((s = t.getNext()) && (e = 0, t = s)), this._setCurve(t), this._time = e, this._point = n || t.getPointAtTime(e), this._overlap = i, this._distance = r, this._intersection = this._next = this._previous = null
            },
            _setPath: function (t) {
                this._path = t, this._version = t ? t._version : 0
            },
            _setCurve: function (t) {
                this._setPath(t._path), this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2
            },
            _setSegment: function (t) {
                var e = t.getCurve();
                e ? this._setCurve(e) : (this._setPath(t._path), this._segment1 = t, this._segment2 = null), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone()
            },
            getSegment: function () {
                var t, e, n = this._segment;
                return n || (t = this.getCurve(), 0 === (e = this.getTime()) ? n = t._segment1 : 1 === e ? n = t._segment2 : null != e && (n = t.getPartLength(0, e) < t.getPartLength(e, 1) ? t._segment1 : t._segment2), this._segment = n), n
            },
            getCurve: function () {
                var t = this._path,
                    e = this;

                function n(t) {
                    t = t && t.getCurve();
                    if (t && null != (e._time = t.getTimeOf(e._point))) return e._setCurve(t), t
                }
                return t && t._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null), this._curve || n(this._segment) || n(this._segment1) || n(this._segment2.getPrevious())
            },
            getPath: function () {
                var t = this.getCurve();
                return t && t._path
            },
            getIndex: function () {
                var t = this.getCurve();
                return t && t.getIndex()
            },
            getTime: function () {
                var t = this.getCurve(),
                    e = this._time;
                return t && null == e ? this._time = t.getTimeOf(this._point) : e
            },
            getParameter: "#getTime",
            getPoint: function () {
                return this._point
            },
            getOffset: function () {
                if (null == (t = this._offset)) {
                    var t = 0,
                        e = this.getPath(),
                        n = this.getIndex();
                    if (e && null != n)
                        for (var i = e.getCurves(), r = 0; r < n; r++) t += i[r].getLength();
                    this._offset = t += this.getCurveOffset()
                }
                return t
            },
            getCurveOffset: function () {
                var t, e, n = this._curveOffset;
                return null == n && (t = this.getCurve(), e = this.getTime(), this._curveOffset = n = null != e && t && t.getPartLength(0, e)), n
            },
            getIntersection: function () {
                return this._intersection
            },
            getDistance: function () {
                return this._distance
            },
            divide: function () {
                var t = this.getCurve(),
                    t = t && t.divideAtTime(this.getTime());
                return t && this._setSegment(t._segment1), t
            },
            split: function () {
                var t = this.getCurve(),
                    e = t._path,
                    t = t && t.splitAtTime(this.getTime());
                return t && this._setSegment(e.getLastSegment()), t
            },
            equals: function (t, e) {
                var n, i, r, s, a = this === t;
                return !a && t instanceof Z && (r = this.getCurve(), s = t.getCurve(), (n = r._path) === s._path && (r = (i = Math.abs)(this.getOffset() - t.getOffset()), s = !e && this._intersection, t = !e && t._intersection, a = (r < 1e-7 || n && i(n.getLength() - r) < 1e-7) && (!s && !t || s && t && s.equals(t, !0)))), a
            },
            toString: function () {
                var t = [],
                    e = this.getPoint(),
                    n = x.instance;
                e && t.push("point: " + e);
                e = this.getIndex();
                null != e && t.push("index: " + e);
                e = this.getTime();
                return null != e && t.push("time: " + n.number(e)), null != this._distance && t.push("distance: " + n.number(this._distance)), "{ " + t.join(", ") + " }"
            },
            isTouching: function () {
                var t = this._intersection;
                if (t && this.getTangent().isCollinear(t.getTangent())) {
                    var e = this.getCurve(),
                        t = t.getCurve();
                    return !(e.isStraight() && t.isStraight() && e.getLine().intersect(t.getLine()))
                }
                return !1
            },
            isCrossing: function () {
                var t = this._intersection;
                if (!t) return !1;
                var e = this.getTime(),
                    n = t.getTime(),
                    i = 1e-8,
                    r = 1 - i,
                    s = i <= e && e <= r,
                    a = i <= n && n <= r;
                if (s && a) return !this.isTouching();
                var o = this.getCurve(),
                    h = o && e < i ? o.getPrevious() : o,
                    u = t.getCurve(),
                    t = u && n < i ? u.getPrevious() : u;
                if (r < e && (o = o.getNext()), r < n && (u = u.getNext()), !(h && o && t && u)) return !1;
                var l = [];

                function c(t, e) {
                    var n = t.getValues(),
                        i = H.classify(n).roots || H.getPeaks(n),
                        t = i.length,
                        i = H.getLength(n, e && t ? i[t - 1] : 0, !e && t ? i[0] : 1);
                    l.push(t ? i : i / 32)
                }

                function f(t, e, n) {
                    return e < n ? e < t && t < n : e < t || t < n
                }
                s || (c(h, !0), c(o, !1)), a || (c(t, !0), c(u, !1));
                i = this.getPoint(), r = Math.min.apply(Math, l), o = s ? o.getTangentAtTime(e) : o.getPointAt(r).subtract(i), h = s ? o.negate() : h.getPointAt(-r).subtract(i), u = a ? u.getTangentAtTime(n) : u.getPointAt(r).subtract(i), i = a ? u.negate() : t.getPointAt(-r).subtract(i), h = h.getAngle(), o = o.getAngle(), i = i.getAngle(), u = u.getAngle();
                return !!(s ? f(h, i, u) ^ f(o, i, u) && f(h, u, i) ^ f(o, u, i) : f(i, h, o) ^ f(u, h, o) && f(i, o, h) ^ f(u, o, h))
            },
            hasOverlap: function () {
                return !!this._overlap
            }
        }, R.each(H._evaluateMethods, function (t) {
            var n = t + "At";
            this[t] = function () {
                var t = this.getCurve(),
                    e = this.getTime();
                return null != e && t && t[n](e, !0)
            }
        }, {
            preserve: !0
        }), new function () {
            function i(r, s, t) {
                var a = r.length,
                    e = 0,
                    n = a - 1;

                function i(t, e) {
                    for (var n = t + e; - 1 <= n && n <= a; n += e) {
                        var i = r[(n % a + a) % a];
                        if (!s.getPoint().isClose(i.getPoint(), 1e-7)) break;
                        if (s.equals(i)) return i
                    }
                    return null
                }
                for (; e <= n;) {
                    var o, h = e + n >>> 1,
                        u = r[h];
                    if (t && (o = s.equals(u) ? u : i(h, -1) || i(h, 1))) return s._overlap && (o._overlap = o._intersection._overlap = !0), o;
                    var l = s.getPath(),
                        c = u.getPath();
                    (l !== c ? l._id - c._id : s.getIndex() + s.getTime() - (u.getIndex() + u.getTime())) < 0 ? n = h - 1 : e = 1 + h
                }
                return r.splice(e, 0, s), s
            }
            return {
                statics: {
                    insert: i,
                    expand: function (t) {
                        for (var e = t.slice(), n = t.length - 1; 0 <= n; n--) i(e, t[n]._intersection, !1);
                        return e
                    }
                }
            }
        }),
        _ = V.extend({
            _class: "PathItem",
            _selectBounds: !1,
            _canScaleStroke: !0,
            beans: !0,
            initialize: function () {},
            statics: {
                create: function (t) {
                    var e, n, i;
                    return R.isPlainObject(t) ? (n = t.segments, e = t.pathData) : Array.isArray(t) ? n = t : "string" == typeof t && (e = t), n ? i = (i = n[0]) && Array.isArray(i[0]) : e && (i = 1 < (e.match(/m/gi) || []).length || /z\s*\S+/i.test(e)), new(i ? $ : W)(t)
                }
            },
            _asPathItem: function () {
                return this
            },
            isClockwise: function () {
                return 0 <= this.getArea()
            },
            setClockwise: function (t) {
                this.isClockwise() != (t = !!t) && this.reverse()
            },
            setPathData: function (t) {
                var e, n, i = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                    r = !1,
                    s = new E,
                    a = new E;

                function o(t, e) {
                    t = +c[t];
                    return r && (t += s[e]), t
                }

                function h(t) {
                    return new E(o(t, "x"), o(t + 1, "y"))
                }
                this.clear();
                for (var u = 0, l = i && i.length; u < l; u++) {
                    var c, f = i[u],
                        d = f[0],
                        _ = d.toLowerCase(),
                        g = (c = f.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g)) && c.length,
                        r = d === _;
                    switch ("z" !== e || /[mz]/.test(_) || this.moveTo(s), _) {
                        case "m":
                        case "l":
                            for (var p = "m" === _, v = 0; v < g; v += 2) this[p ? "moveTo" : "lineTo"](s = h(v)), p && (a = s, p = !1);
                            n = s;
                            break;
                        case "h":
                        case "v":
                            for (var m = "h" === _ ? "x" : "y", s = s.clone(), v = 0; v < g; v++) s[m] = o(v, m), this.lineTo(s);
                            n = s;
                            break;
                        case "c":
                            for (v = 0; v < g; v += 6) this.cubicCurveTo(h(v), n = h(v + 2), s = h(v + 4));
                            break;
                        case "s":
                            for (v = 0; v < g; v += 4) this.cubicCurveTo(/[cs]/.test(e) ? s.multiply(2).subtract(n) : s, n = h(v), s = h(v + 2)), e = _;
                            break;
                        case "q":
                            for (v = 0; v < g; v += 4) this.quadraticCurveTo(n = h(v), s = h(v + 2));
                            break;
                        case "t":
                            for (v = 0; v < g; v += 2) this.quadraticCurveTo(n = /[qt]/.test(e) ? s.multiply(2).subtract(n) : s, s = h(v)), e = _;
                            break;
                        case "a":
                            for (v = 0; v < g; v += 7) this.arcTo(s = h(v + 5), new O(+c[v], +c[v + 1]), +c[v + 2], +c[v + 4], +c[v + 3]);
                            break;
                        case "z":
                            this.closePath(1e-12), s = a
                    }
                    e = _
                }
            },
            _canComposite: function () {
                return !(this.hasFill() && this.hasStroke())
            },
            _contains: function (t) {
                t = t.isInside(this.getBounds({
                    internal: !0,
                    handle: !0
                })) ? this._getWinding(t) : {};
                return t.onPath || !!("evenodd" === this.getFillRule() ? 1 & t.windingL || 1 & t.windingR : t.winding)
            },
            getIntersections: function (t, e, n, i) {
                var r = this === t || !t,
                    s = this._matrix._orNullIfIdentity(),
                    n = r ? s : (n || t._matrix)._orNullIfIdentity();
                return r || this.getBounds(s).intersects(t.getBounds(n), 1e-12) ? H.getIntersections(this.getCurves(), !r && t.getCurves(), e, s, n, i) : []
            },
            getCrossings: function (t) {
                return this.getIntersections(t, function (t) {
                    return t.isCrossing()
                })
            },
            getNearestLocation: function () {
                for (var t = E.read(arguments), e = this.getCurves(), n = 1 / 0, i = null, r = 0, s = e.length; r < s; r++) {
                    var a = e[r].getNearestLocation(t);
                    a._distance < n && (n = a._distance, i = a)
                }
                return i
            },
            getNearestPoint: function () {
                var t = this.getNearestLocation.apply(this, arguments);
                return t && t.getPoint()
            },
            interpolate: function (t, e, n) {
                var i = !this._children,
                    r = i ? "_segments" : "_children",
                    s = t[r],
                    a = e[r],
                    o = this[r];
                if (!s || !a || s.length !== a.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
                var e = o.length,
                    h = a.length;
                if (e < h)
                    for (var u = i ? U : W, l = e; l < h; l++) this.add(new u);
                else h < e && this[i ? "removeSegments" : "removeChildren"](h, e);
                for (l = 0; l < h; l++) o[l].interpolate(s[l], a[l], n);
                i && (this.setClosed(t._closed), this._changed(9))
            },
            compare: function (t) {
                var e = !1;
                if (t) {
                    var n = this._children || [this],
                        i = t._children ? t._children.slice() : [t],
                        r = n.length,
                        t = i.length,
                        s = [],
                        a = 0;
                    e = !0;
                    for (var o = D.findItemBoundsCollisions(n, i, q.GEOMETRIC_EPSILON), h = r - 1; 0 <= h && e; h--) {
                        var u = n[h],
                            e = !1,
                            l = o[h];
                        if (l)
                            for (var c = l.length - 1; 0 <= c && !e; c--) u.compare(i[l[c]]) && (s[l[c]] || (s[l[c]] = !0, a++), e = !0)
                    }
                    e = e && a === t
                }
                return e
            }
        }),
        W = _.extend({
            _class: "Path",
            _serializeFields: {
                segments: [],
                closed: !1
            },
            initialize: function (t) {
                this._closed = !1, this._segments = [], this._version = 0;
                var e = arguments,
                    e = Array.isArray(t) ? "object" == typeof t[0] ? t : e : !t || t.size !== j || t.x === j && t.point === j ? null : e;
                e && 0 < e.length ? this.setSegments(e) : (this._curves = j, this._segmentSelection = 0, e || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!e && t)
            },
            _equals: function (t) {
                return this._closed === t._closed && R.equals(this._segments, t._segments)
            },
            copyContent: function (t) {
                this.setSegments(t._segments), this._closed = t._closed
            },
            _changed: function t(e) {
                if (t.base.call(this, e), 8 & e) {
                    if (this._length = this._area = j, 32 & e) this._version++;
                    else if (this._curves)
                        for (var n = 0, i = this._curves.length; n < i; n++) this._curves[n]._changed()
                } else 64 & e && (this._bounds = j)
            },
            getStyle: function () {
                var t = this._parent;
                return (t instanceof $ ? t : this)._style
            },
            getSegments: function () {
                return this._segments
            },
            setSegments: function (t) {
                var e, n = this.isFullySelected(),
                    i = t && t.length;
                this._segments.length = 0, this._segmentSelection = 0, this._curves = j, i && ("boolean" == typeof (e = t[i - 1]) && (this.setClosed(e), i--), this._add(U.readList(t, 0, {}, i))), n && this.setFullySelected(!0)
            },
            getFirstSegment: function () {
                return this._segments[0]
            },
            getLastSegment: function () {
                return this._segments[this._segments.length - 1]
            },
            getCurves: function () {
                var t = this._curves,
                    e = this._segments;
                if (!t)
                    for (var n = this._countCurves(), t = this._curves = new Array(n), i = 0; i < n; i++) t[i] = new H(this, e[i], e[i + 1] || e[0]);
                return t
            },
            getFirstCurve: function () {
                return this.getCurves()[0]
            },
            getLastCurve: function () {
                var t = this.getCurves();
                return t[t.length - 1]
            },
            isClosed: function () {
                return this._closed
            },
            setClosed: function (t) {
                var e;
                this._closed != (t = !!t) && (this._closed = t, this._curves && (e = this._curves.length = this._countCurves(), t && (this._curves[e - 1] = new H(this, this._segments[e - 1], this._segments[0]))), this._changed(41))
            }
        }, {
            beans: !0,
            getPathData: function (n, t) {
                var i, r, s, a, o, h, u, l, e = this._segments,
                    c = e.length,
                    f = new x(t),
                    d = new Array(6),
                    _ = !0,
                    g = [];

                function p(t, e) {
                    t._transformCoordinates(n, d), i = d[0], r = d[1], _ ? (g.push("M" + f.pair(i, r)), _ = !1) : (o = d[2], h = d[3], o === i && h === r && u === s && l === a ? e || (t = r - a, g.push(0 == (e = i - s) ? "v" + f.number(t) : 0 == t ? "h" + f.number(e) : "l" + f.pair(e, t))) : g.push("c" + f.pair(u - s, l - a) + " " + f.pair(o - s, h - a) + " " + f.pair(i - s, r - a))), s = i, a = r, u = d[4], l = d[5]
                }
                if (!c) return "";
                for (var v = 0; v < c; v++) p(e[v]);
                return this._closed && 0 < c && (p(e[0], !0), g.push("z")), g.join("")
            },
            isEmpty: function () {
                return !this._segments.length
            },
            _transformContent: function (t) {
                for (var e = this._segments, n = new Array(6), i = 0, r = e.length; i < r; i++) e[i]._transformCoordinates(t, n, !0);
                return !0
            },
            _add: function (t, e) {
                for (var n = this._segments, i = this._curves, r = t.length, s = null == e, e = s ? n.length : e, a = 0; a < r; a++) {
                    var o = t[a];
                    (o = o._path ? t[a] = o.clone() : o)._path = this, o._index = e + a, o._selection && this._updateSelection(o, 0, o._selection)
                }
                if (s) R.push(n, t);
                else {
                    n.splice.apply(n, [e, 0].concat(t));
                    for (var a = e + r, h = n.length; a < h; a++) n[a]._index = a
                }
                if (i) {
                    var u = this._countCurves(),
                        l = 0 < e && e + r - 1 === u ? e - 1 : e,
                        s = l,
                        c = Math.min(l + r, u);
                    t._curves && (i.splice.apply(i, [l, 0].concat(t._curves)), s += t._curves.length);
                    for (a = s; a < c; a++) i.splice(a, 0, new H(this, null, null));
                    this._adjustCurves(l, c)
                }
                return this._changed(41), t
            },
            _adjustCurves: function (t, e) {
                for (var n, i = this._segments, r = this._curves, s = t; s < e; s++)(n = r[s])._path = this, n._segment1 = i[s], n._segment2 = i[s + 1] || i[0], n._changed();
                (n = r[this._closed && !t ? i.length - 1 : t - 1]) && (n._segment2 = i[t] || i[0], n._changed()), (n = r[e]) && (n._segment1 = i[e], n._changed())
            },
            _countCurves: function () {
                var t = this._segments.length;
                return !this._closed && 0 < t ? t - 1 : t
            },
            add: function (t) {
                var e = arguments;
                return 1 < e.length && "number" != typeof t ? this._add(U.readList(e)) : this._add([U.read(e)])[0]
            },
            insert: function (t, e) {
                var n = arguments;
                return 2 < n.length && "number" != typeof e ? this._add(U.readList(n, 1), t) : this._add([U.read(n, 1)], t)[0]
            },
            addSegment: function () {
                return this._add([U.read(arguments)])[0]
            },
            insertSegment: function (t) {
                return this._add([U.read(arguments, 1)], t)[0]
            },
            addSegments: function (t) {
                return this._add(U.readList(t))
            },
            insertSegments: function (t, e) {
                return this._add(U.readList(e), t)
            },
            removeSegment: function (t) {
                return this.removeSegments(t, t + 1)[0] || null
            },
            removeSegments: function (t, e, n) {
                t = t || 0, e = R.pick(e, this._segments.length);
                var i = this._segments,
                    r = this._curves,
                    s = i.length,
                    a = i.splice(t, e - t),
                    o = a.length;
                if (!o) return a;
                for (var h = 0; h < o; h++) {
                    var u = a[h];
                    u._selection && this._updateSelection(u, u._selection, 0), u._index = u._path = null
                }
                for (var h = t, l = i.length; h < l; h++) i[h]._index = h;
                if (r) {
                    for (t = 0 < t && e === s + (this._closed ? 1 : 0) ? t - 1 : t, h = (r = r.splice(t, o)).length - 1; 0 <= h; h--) r[h]._path = null;
                    n && (a._curves = r.slice(1)), this._adjustCurves(t, t)
                }
                return this._changed(41), a
            },
            clear: "#removeSegments",
            hasHandles: function () {
                for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                    if (t[e].hasHandles()) return !0;
                return !1
            },
            clearHandles: function () {
                for (var t = this._segments, e = 0, n = t.length; e < n; e++) t[e].clearHandles()
            },
            getLength: function () {
                if (null == this._length) {
                    for (var t = this.getCurves(), e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
                    this._length = e
                }
                return this._length
            },
            getArea: function () {
                if (null == (n = this._area)) {
                    for (var t = this._segments, e = this._closed, n = 0, i = 0, r = t.length; i < r; i++) {
                        var s = i + 1 === r;
                        n += H.getArea(H.getValues(t[i], t[s ? 0 : i + 1], null, s && !e))
                    }
                    this._area = n
                }
                return n
            },
            isFullySelected: function () {
                var t = this._segments.length;
                return this.isSelected() && 0 < t && this._segmentSelection === 7 * t
            },
            setFullySelected: function (t) {
                t && this._selectSegments(!0), this.setSelected(t)
            },
            setSelection: function t(e) {
                1 & e || this._selectSegments(!1), t.base.call(this, e)
            },
            _selectSegments: function (t) {
                var e = this._segments,
                    n = e.length,
                    i = t ? 7 : 0;
                this._segmentSelection = i * n;
                for (var r = 0; r < n; r++) e[r]._selection = i
            },
            _updateSelection: function (t, e, n) {
                t._selection = n, 0 < (this._segmentSelection += n - e) && this.setSelected(!0)
            },
            divideAt: function (t) {
                var e, t = this.getLocationAt(t);
                return t && (e = t.getCurve().divideAt(t.getCurveOffset())) ? e._segment1 : null
            },
            splitAt: function (t) {
                var e = this.getLocationAt(t),
                    n = e && e.index,
                    t = e && e.time;
                1 - 1e-8 < t && (n++, t = 0);
                e = this.getCurves();
                if (0 <= n && n < e.length) {
                    1e-8 <= t && e[n++].divideAtTime(t);
                    var i, n = this.removeSegments(n, this._segments.length, !0);
                    return this._closed ? (this.setClosed(!1), i = this) : ((i = new W(V.NO_INSERT)).insertAbove(this), i.copyAttributes(this)), i._add(n, 0), this.addSegment(n[0]), i
                }
                return null
            },
            split: function (t, e) {
                e = e === j ? t : (t = this.getCurves()[t]) && t.getLocationAtTime(e);
                return null != e ? this.splitAt(e) : null
            },
            join: function (t, e) {
                var n = e || 0;
                if (t && t !== this) {
                    var i = t._segments,
                        r = this.getLastSegment(),
                        s = t.getLastSegment();
                    if (!s) return this;
                    r && r._point.isClose(s._point, n) && t.reverse();
                    e = t.getFirstSegment();
                    r && r._point.isClose(e._point, n) ? (r.setHandleOut(e._handleOut), this._add(i.slice(1))) : ((r = this.getFirstSegment()) && r._point.isClose(e._point, n) && t.reverse(), s = t.getLastSegment(), r && r._point.isClose(s._point, n) ? (r.setHandleIn(s._handleIn), this._add(i.slice(0, i.length - 1), 0)) : this._add(i.slice())), t._closed && this._add([i[0]]), t.remove()
                }
                i = this.getFirstSegment(), t = this.getLastSegment();
                return i !== t && i._point.isClose(t._point, n) && (i.setHandleIn(t._handleIn), t.remove(), this.setClosed(!0)), this
            },
            reduce: function (t) {
                for (var e = this.getCurves(), n = t && t.simplify, i = n ? 1e-7 : 0, r = e.length - 1; 0 <= r; r--) {
                    var s = e[r];
                    !s.hasHandles() && (!s.hasLength(i) || n && s.isCollinear(s.getNext())) && s.remove()
                }
                return this
            },
            reverse: function () {
                this._segments.reverse();
                for (var t = 0, e = this._segments.length; t < e; t++) {
                    var n = this._segments[t],
                        i = n._handleIn;
                    n._handleIn = n._handleOut, n._handleOut = i, n._index = t
                }
                this._curves = null, this._changed(9)
            },
            flatten: function (t) {
                for (var e = new m(this, t || .25, 256, !0).parts, n = e.length, i = [], r = 0; r < n; r++) i.push(new U(e[r].curve.slice(0, 2)));
                !this._closed && 0 < n && i.push(new U(e[n - 1].curve.slice(6))), this.setSegments(i)
            },
            simplify: function (t) {
                t = new h(this).fit(t || 2.5);
                return t && this.setSegments(t), !!t
            },
            smooth: function (t) {
                var r = this,
                    e = t || {},
                    t = e.type || "asymmetric",
                    n = this._segments,
                    s = n.length,
                    a = this._closed;

                function i(t, e) {
                    var n = t && t.index;
                    if (null != n) {
                        var i = t.path;
                        if (i && i !== r) throw new Error(t._class + " " + n + " of " + i + " is not part of " + r);
                        e && t instanceof H && n++
                    } else n = "number" == typeof t ? t : e;
                    return Math.min(n < 0 && a ? n % s : n < 0 ? n + s : n, s - 1)
                }
                var o = a && e.from === j && e.to === j,
                    h = i(e.from, 0),
                    u = i(e.to, s - 1);
                if (u < h && (a ? h -= s : (c = h, h = u, u = c)), /^(?:asymmetric|continuous)$/.test(t)) {
                    var l = "asymmetric" === t,
                        c = Math.min,
                        t = u - h + 1,
                        f = t - 1,
                        t = o ? c(t, 4) : 1,
                        d = t,
                        t = t,
                        _ = [];
                    if (a || (d = c(1, h), t = c(1, s - u - 1)), !((f += d + t) <= 1)) {
                        for (var g = 0, p = h - d; g <= f; g++, p++) _[g] = n[(p < 0 ? p + s : p) % s]._point;
                        for (var v = f - 1, m = [M = _[0]._x + 2 * _[1]._x], y = [A = _[0]._y + 2 * _[1]._y], w = [P = 2], x = [], b = [], g = 1; g < f; g++) var C = g < v,
                            S = C ? 4 : l ? 3 : 8,
                            k = C ? 2 : l ? 0 : 1,
                            I = (C || l ? 1 : 2) / P,
                            P = w[g] = (C ? 4 : l ? 2 : 7) - I,
                            M = m[g] = S * _[g]._x + k * _[g + 1]._x - I * M,
                            A = y[g] = S * _[g]._y + k * _[g + 1]._y - I * A;
                        x[v] = m[v] / w[v], b[v] = y[v] / w[v];
                        for (g = f - 2; 0 <= g; g--) x[g] = (m[g] - x[g + 1]) / w[g], b[g] = (y[g] - b[g + 1]) / w[g];
                        x[f] = (3 * _[f]._x - x[v]) / 2, b[f] = (3 * _[f]._y - b[v]) / 2;
                        for (var g = d, T = f - t, p = h; g <= T; g++, p++) {
                            var O = n[p < 0 ? p + s : p],
                                z = O._point,
                                E = x[g] - z._x,
                                z = b[g] - z._y;
                            (o || g < T) && O.setHandleOut(E, z), (o || d < g) && O.setHandleIn(-E, -z)
                        }
                    }
                } else
                    for (g = h; g <= u; g++) n[g < 0 ? g + s : g].smooth(e, !o && g === h, !o && g === u)
            },
            toShape: function (t) {
                if (!this._closed) return null;
                var e, n, i, r, s, a, o = this._segments;

                function h(t, e) {
                    var n = o[t],
                        i = n.getNext(),
                        t = o[e],
                        e = t.getNext();
                    return n._handleOut.isZero() && i._handleIn.isZero() && t._handleOut.isZero() && e._handleIn.isZero() && i._point.subtract(n._point).isCollinear(e._point.subtract(t._point))
                }

                function u(t) {
                    var e = o[t],
                        n = e.getNext(),
                        i = e._handleOut,
                        r = n._handleIn,
                        s = .5522847498307936;
                    if (i.isOrthogonal(r)) {
                        t = e._point, e = n._point, n = new L(t, i, !0).intersect(new L(e, r, !0), !0);
                        return n && q.isZero(i.getLength() / n.subtract(t).getLength() - s) && q.isZero(r.getLength() / n.subtract(e).getLength() - s)
                    }
                }

                function l(t, e) {
                    return o[t]._point.getDistance(o[e]._point)
                }
                if (!this.hasHandles() && 4 === o.length && h(0, 2) && h(1, 3) && (s = o[r = 1], a = s.getPrevious(), r = s.getNext(), a._handleOut.isZero() && s._handleIn.isZero() && s._handleOut.isZero() && r._handleIn.isZero() && s._point.subtract(a._point).isOrthogonal(r._point.subtract(s._point))) ? (e = d.Rectangle, n = new O(l(0, 3), l(0, 1)), i = o[1]._point.add(o[2]._point).divide(2)) : 8 === o.length && u(0) && u(2) && u(4) && u(6) && h(1, 5) && h(3, 7) ? (e = d.Rectangle, f = (n = new O(l(1, 6), l(0, 3))).subtract(new O(l(0, 7), l(1, 2))).divide(2), i = o[3]._point.add(o[4]._point).divide(2)) : 4 === o.length && u(0) && u(1) && u(2) && u(3) && (f = q.isZero(l(0, 2) - l(1, 3)) ? (e = d.Circle, l(0, 2) / 2) : (e = d.Ellipse, new O(l(2, 0) / 2, l(3, 1) / 2)), i = o[1]._point), e) {
                    var c = this.getPosition(!0),
                        f = new e({
                            center: c,
                            size: n,
                            radius: f,
                            insert: !1
                        });
                    return f.copyAttributes(this, !0), f._matrix.prepend(this._matrix), f.rotate(i.subtract(c).getAngle() + 90), t !== j && !t || f.insertAbove(this), f
                }
                return null
            },
            toPath: "#clone",
            compare: function t(e) {
                if (!e || e instanceof $) return t.base.call(this, e);
                var n = this.getCurves(),
                    i = e.getCurves(),
                    r = n.length,
                    s = i.length;
                if (!r || !s) return r == s;
                for (var a, o, h = n[0].getValues(), u = [], l = 0, c = 0, f = 0; f < s; f++) {
                    var d = i[f].getValues();
                    if (u.push(d), p = H.getOverlaps(h, d)) {
                        a = !f && 0 < p[0][0] ? s - 1 : f, o = p[0][1];
                        break
                    }
                }
                for (var _, g = Math.abs, d = u[a]; h && d;) {
                    var p = H.getOverlaps(h, d);
                    if (p)
                        if (g(p[0][0] - c) < 1e-8) {
                            1 === (c = p[1][0]) && (h = ++l < r ? n[l].getValues() : null, c = 0);
                            var v = p[0][1];
                            if (g(v - o) < 1e-8) {
                                if (_ = _ || [a, v], 1 === (o = p[1][1]) && (d = u[a = ++a >= s ? 0 : a] || i[a].getValues(), o = 0), !h) return _[0] === a && _[1] === o;
                                continue
                            }
                        } break
                }
                return !1
            },
            _hitTestSelf: function (n, r, t, i) {
                var s, a, o, h, e, u, l = this,
                    c = this.getStyle(),
                    f = this._segments,
                    d = f.length,
                    _ = this._closed,
                    g = r._tolerancePadding,
                    p = g,
                    v = r.stroke && c.hasStroke(),
                    m = r.fill && c.hasFill(),
                    y = r.curves,
                    w = v ? c.getStrokeWidth() / 2 : m && 0 < r.tolerance || y ? 0 : null;

                function x(t, e) {
                    return n.subtract(t).divide(e).length <= 1
                }

                function b(t, e, n) {
                    if (!r.selected || e.isSelected()) {
                        var i = t._point;
                        if (x(e = e !== i ? e.add(i) : e, p)) return new T(n, l, {
                            segment: t,
                            point: e
                        })
                    }
                }

                function C(t, e) {
                    return (e || r.segments) && b(t, t._point, "segment") || !e && r.handles && (b(t, t._handleIn, "handle-in") || b(t, t._handleOut, "handle-out"))
                }

                function S(t) {
                    h.add(t)
                }

                function k(t) {
                    var e = _ || 0 < t._index && t._index < d - 1;
                    return "round" === (e ? s : a) ? x(t._point, p) : (h = new W({
                        internal: !0,
                        closed: !0
                    }), e ? t.isSmooth() || W._addBevelJoin(t, s, w, o, null, i, S, !0) : "square" === a && W._addSquareCap(t, a, w, null, i, S, !0), !h.isEmpty() && (h.contains(n) || (t = h.getNearestLocation(n)) && x(t.getPoint(), g)))
                }
                if (null !== w && (0 < w ? (s = c.getStrokeJoin(), a = c.getStrokeCap(), o = c.getMiterLimit(), p = p.add(W._getStrokePadding(w, i))) : s = a = "round"), !r.ends || r.segments || _) {
                    if (r.segments || r.handles)
                        for (var I = 0; I < d; I++)
                            if (e = C(f[I])) return e
                } else if (e = C(f[0], !0) || C(f[d - 1], !0)) return e;
                if (null !== w && ((u = this.getNearestLocation(n)) && (0 === (c = u.getTime()) || 1 === c && 1 < d ? k(u.getSegment()) || (u = null) : x(u.getPoint(), p) || (u = null)), !u && "miter" === s && 1 < d))
                    for (I = 0; I < d; I++) {
                        var P = f[I];
                        if (n.getDistance(P._point) <= o * w && k(P)) {
                            u = P.getLocation();
                            break
                        }
                    }
                return !u && m && this._contains(n) || u && !v && !y ? new T("fill", this) : u ? new T(v ? "stroke" : "curve", this, {
                    location: u,
                    point: u.getPoint()
                }) : null
            }
        }, R.each(H._evaluateMethods, function (e) {
            this[e + "At"] = function (t) {
                t = this.getLocationAt(t);
                return t && t[e]()
            }
        }, {
            beans: !1,
            getLocationOf: function () {
                for (var t = E.read(arguments), e = this.getCurves(), n = 0, i = e.length; n < i; n++) {
                    var r = e[n].getLocationOf(t);
                    if (r) return r
                }
                return null
            },
            getOffsetOf: function () {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getLocationAt: function (t) {
                if ("number" == typeof t) {
                    for (var e = this.getCurves(), n = 0, i = 0, r = e.length; i < r; i++) {
                        var s = n,
                            a = e[i];
                        if (t < (n += a.getLength())) return a.getLocationAt(t - s)
                    }
                    if (0 < e.length && t <= this.getLength()) return new Z(e[e.length - 1], 1)
                } else if (t && t.getPath && t.getPath() === this) return t;
                return null
            },
            getOffsetsWithTangent: function () {
                var t = E.read(arguments);
                if (t.isZero()) return [];
                for (var e = [], n = 0, i = this.getCurves(), r = 0, s = i.length; r < s; r++) {
                    for (var a = i[r], o = a.getTimesWithTangent(t), h = 0, u = o.length; h < u; h++) {
                        var l = n + a.getOffsetAtTime(o[h]);
                        e.indexOf(l) < 0 && e.push(l)
                    }
                    n += a.length
                }
                return e
            }
        }), new function () {
            function v(i, t, r) {
                var s, a, o, h, u, l, c, f, e = t._segments,
                    n = e.length,
                    d = new Array(6),
                    _ = !0;

                function g(t) {
                    var e, n;
                    a = r ? (t._transformCoordinates(r, d), s = d[0], d[1]) : (e = t._point, s = e._x, e._y), _ ? (i.moveTo(s, a), _ = !1) : (l = r ? (u = d[2], d[3]) : (n = t._handleIn, u = s + n._x, a + n._y), u === s && l === a && c === o && f === h ? i.lineTo(s, a) : i.bezierCurveTo(c, f, u, l, s, a)), o = s, h = a, f = r ? (c = d[4], d[5]) : (n = t._handleOut, c = o + n._x, h + n._y)
                }
                for (var p = 0; p < n; p++) g(e[p]);
                t._closed && 0 < n && g(e[0])
            }
            return {
                _draw: function (t, e, n, i) {
                    var r = e.dontStart,
                        s = e.dontFinish || e.clip,
                        a = this.getStyle(),
                        o = a.hasFill(),
                        h = a.hasStroke(),
                        u = a.getDashArray(),
                        l = !Bt.support.nativeDash && h && u && u.length;

                    function c(t) {
                        return u[(t % l + l) % l]
                    }
                    if (r || t.beginPath(), (o || h && !l || s) && (v(t, this, i), this._closed && t.closePath()), !s && (o || h) && (this._setStyles(t, e, n), o && (t.fill(a.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), h)) {
                        if (l) {
                            r || t.beginPath();
                            for (var f, d = new m(this, .25, 32, !1, i), _ = d.length, g = -a.getDashOffset(), p = 0; 0 < g;) g -= c(p--) + c(p--);
                            for (; g < _;) f = g + c(p++), (0 < g || 0 < f) && d.drawPart(t, Math.max(g, 0), Math.max(f, 0)), g = f + c(p++)
                        }
                        t.stroke()
                    }
                },
                _drawSelected: function (t, e) {
                    t.beginPath(), v(t, this, e), t.stroke(),
                        function (n, t, e, i) {
                            if (!(i <= 0))
                                for (var r, s, a = i / 2, o = i - 2, h = a - 1, u = new Array(6), l = 0, c = t.length; l < c; l++) {
                                    var f = t[l],
                                        d = f._selection;
                                    f._transformCoordinates(e, u), r = u[0], s = u[1], 2 & d && _(2), 4 & d && _(4), n.fillRect(r - a, s - a, i, i), 0 < o && !(1 & d) && (d = n.fillStyle, n.fillStyle = "#ffffff", n.fillRect(r - h, s - h, o, o), n.fillStyle = d)
                                }

                            function _(t) {
                                var e = u[t],
                                    t = u[t + 1];
                                r == e && s == t || (n.beginPath(), n.moveTo(r, s), n.lineTo(e, t), n.stroke(), n.beginPath(), n.arc(e, t, a, 0, 2 * Math.PI, !0), n.fill())
                            }
                        }(t, this._segments, e, Bt.settings.handleSize)
                }
            }
        }, new function () {
            function T(t) {
                t = t._segments;
                if (!t.length) throw new Error("Use a moveTo() command first");
                return t[t.length - 1]
            }
            return {
                moveTo: function () {
                    var t = this._segments;
                    1 === t.length && this.removeSegment(0), t.length || this._add([new U(E.read(arguments))])
                },
                moveBy: function () {
                    throw new Error("moveBy() is unsupported on Path items.")
                },
                lineTo: function () {
                    this._add([new U(E.read(arguments))])
                },
                cubicCurveTo: function () {
                    var t = arguments,
                        e = E.read(t),
                        n = E.read(t),
                        i = E.read(t),
                        t = T(this);
                    t.setHandleOut(e.subtract(t._point)), this._add([new U(i, n.subtract(i))])
                },
                quadraticCurveTo: function () {
                    var t = arguments,
                        e = E.read(t),
                        n = E.read(t),
                        t = T(this)._point;
                    this.cubicCurveTo(e.add(t.subtract(e).multiply(1 / 3)), e.add(n.subtract(e).multiply(1 / 3)), n)
                },
                curveTo: function () {
                    var t = arguments,
                        e = E.read(t),
                        n = E.read(t),
                        i = R.pick(R.read(t), .5),
                        r = 1 - i,
                        t = T(this)._point,
                        r = e.subtract(t.multiply(r * r)).subtract(n.multiply(i * i)).divide(2 * i * r);
                    if (r.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + i);
                    this.quadraticCurveTo(r, n)
                },
                arcTo: function () {
                    var t, e = arguments,
                        n = Math.abs,
                        i = Math.sqrt,
                        r = T(this),
                        s = r._point,
                        a = E.read(e),
                        o = R.peek(e);
                    if ("boolean" == typeof (f = R.pick(o, !0))) var h = (_ = s.add(a).divide(2)).add(_.subtract(s).rotate(f ? -90 : 90));
                    else if (R.remain(e) <= 2) h = a, a = E.read(e);
                    else if (!s.equals(a)) {
                        var u = O.read(e),
                            l = q.isZero;
                        if (l(u.width) || l(u.height)) return this.lineTo(a);
                        var c = R.read(e),
                            f = !!R.read(e),
                            d = !!R.read(e),
                            _ = s.add(a).divide(2),
                            g = (M = s.subtract(_).rotate(-c)).x,
                            p = M.y,
                            v = n(u.width),
                            m = n(u.height),
                            y = v * v,
                            o = m * m,
                            l = g * g,
                            e = p * p,
                            u = i(l / y + e / o);
                        if (1 < u && (y = (v *= u) * v, o = (m *= u) * m), (u = n(u = (y * o - y * e - o * l) / (y * e + o * l)) < 1e-12 ? 0 : u) < 0) throw new Error("Cannot create an arc with the given arguments");
                        w = new E(v * p / m, -m * g / v).multiply((d === f ? -1 : 1) * i(u)).rotate(c).add(_), c = (x = (t = (new z).translate(w).rotate(c).scale(v, m))._inverseTransform(s)).getDirectedAngle(t._inverseTransform(a)), !f && 0 < c ? c -= 360 : f && c < 0 && (c += 360)
                    }
                    if (h) {
                        var w, v = new L(s.add(h).divide(2), h.subtract(s).rotate(90), !0),
                            m = new L(h.add(a).divide(2), a.subtract(h).rotate(90), !0),
                            f = new L(s, a),
                            h = f.getSide(h);
                        if (!(w = v.intersect(m, !0))) {
                            if (!h) return this.lineTo(a);
                            throw new Error("Cannot create an arc with the given arguments")
                        }
                        var x, c = (x = s.subtract(w)).getDirectedAngle(a.subtract(w)),
                            f = f.getSide(w, !0);
                        0 === f ? c = h * n(c) : h === f && (c += c < 0 ? 360 : -360)
                    }
                    if (c) {
                        for (var n = n(c), b = 360 <= n ? 4 : Math.ceil((n - 1e-7) / 90), C = c / b, c = C * Math.PI / 360, S = 4 / 3 * Math.sin(c) / (1 + Math.cos(c)), k = [], I = 0; I <= b; I++) {
                            var P, M = a,
                                A = null;
                            I < b && (A = x.rotate(90).multiply(S), t ? (M = t._transformPoint(x), A = t._transformPoint(x.add(A)).subtract(M)) : M = w.add(x)), I ? (P = x.rotate(-90).multiply(S), t && (P = t._transformPoint(x.add(P)).subtract(M)), k.push(new U(M, P, A))) : r.setHandleOut(A), x = x.rotate(C)
                        }
                        this._add(k)
                    }
                },
                lineBy: function () {
                    var t = E.read(arguments),
                        e = T(this)._point;
                    this.lineTo(e.add(t))
                },
                curveBy: function () {
                    var t = arguments,
                        e = E.read(t),
                        n = E.read(t),
                        i = R.read(t),
                        t = T(this)._point;
                    this.curveTo(t.add(e), t.add(n), i)
                },
                cubicCurveBy: function () {
                    var t = arguments,
                        e = E.read(t),
                        n = E.read(t),
                        i = E.read(t),
                        t = T(this)._point;
                    this.cubicCurveTo(t.add(e), t.add(n), t.add(i))
                },
                quadraticCurveBy: function () {
                    var t = arguments,
                        e = E.read(t),
                        n = E.read(t),
                        t = T(this)._point;
                    this.quadraticCurveTo(t.add(e), t.add(n))
                },
                arcBy: function () {
                    var t = arguments,
                        e = T(this)._point,
                        n = e.add(E.read(t)),
                        i = R.pick(R.peek(t), !0);
                    "boolean" == typeof i ? this.arcTo(n, i) : this.arcTo(n, e.add(E.read(t)))
                },
                closePath: function (t) {
                    this.setClosed(!0), this.join(this, t)
                }
            }
        }, {
            _getBounds: function (t, e) {
                var n = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds";
                return W[n](this._segments, this._closed, this, t, e)
            },
            statics: {
                getBounds: function (t, e, n, i, r, s) {
                    var a = t[0];
                    if (!a) return new b;
                    var o = new Array(6),
                        h = a._transformCoordinates(i, new Array(6)),
                        u = h.slice(0, 2),
                        l = u.slice(),
                        c = new Array(2);

                    function f(t) {
                        t._transformCoordinates(i, o);
                        for (var e = 0; e < 2; e++) H._addBounds(h[e], h[e + 4], o[e + 2], o[e], e, s ? s[e] : 0, u, l, c);
                        t = h;
                        h = o, o = t
                    }
                    for (var d = 1, _ = t.length; d < _; d++) f(t[d]);
                    return e && f(a), new b(u[0], u[1], l[0] - u[0], l[1] - u[1])
                },
                getStrokeBounds: function (t, e, n, i, r) {
                    var s = n.getStyle(),
                        a = s.hasStroke(),
                        o = s.getStrokeWidth(),
                        h = a && n._getStrokeMatrix(i, r),
                        u = a && W._getStrokePadding(o, h),
                        l = W.getBounds(t, e, n, i, r, u);
                    if (!a) return l;
                    var c = o / 2,
                        f = s.getStrokeJoin(),
                        o = s.getStrokeCap(),
                        d = s.getMiterLimit(),
                        _ = new b(new O(u));

                    function g(t) {
                        l = l.include(t)
                    }

                    function p(t) {
                        l = l.unite(_.setCenter(t._point.transform(i)))
                    }

                    function v(t, e) {
                        "round" === e || t.isSmooth() ? p(t) : W._addBevelJoin(t, e, c, d, i, h, g)
                    }

                    function m(t, e) {
                        "round" === e ? p(t) : W._addSquareCap(t, e, c, i, h, g)
                    }
                    var y = t.length - (e ? 0 : 1);
                    if (0 < y) {
                        for (var w = 1; w < y; w++) v(t[w], f);
                        e ? v(t[0], f) : (m(t[0], o), m(t[t.length - 1], o))
                    }
                    return l
                },
                _getStrokePadding: function (t, e) {
                    if (!e) return [t, t];
                    var n = new E(t, 0).transform(e),
                        i = new E(0, t).transform(e),
                        r = n.getAngleInRadians(),
                        s = n.getLength(),
                        t = i.getLength(),
                        e = Math.sin(r),
                        n = Math.cos(r),
                        i = Math.tan(r),
                        r = Math.atan2(t * i, s),
                        i = Math.atan2(t, i * s);
                    return [Math.abs(s * Math.cos(r) * n + t * Math.sin(r) * e), Math.abs(t * Math.sin(i) * n + s * Math.cos(i) * e)]
                },
                _addBevelJoin: function (t, e, n, i, r, s, a, o) {
                    var h = t.getCurve(),
                        t = h.getPrevious(),
                        r = h.getPoint1().transform(r),
                        t = t.getNormalAtTime(1).multiply(n).transform(s),
                        h = h.getNormalAtTime(0).multiply(n).transform(s),
                        s = t.getDirectedAngle(h);
                    (s < 0 || 180 <= s) && (t = t.negate(), h = h.negate()), o && a(r), a(r.add(t)), "miter" !== e || (t = new L(r.add(t), new E(-t.y, t.x), !0).intersect(new L(r.add(h), new E(-h.y, h.x), !0), !0)) && r.getDistance(t) <= i * n && a(t), a(r.add(h))
                },
                _addSquareCap: function (t, e, n, i, r, s, a) {
                    i = t._point.transform(i), t = t.getLocation(), r = t.getNormal().multiply(0 === t.getTime() ? n : -n).transform(r);
                    "square" === e && (a && (s(i.subtract(r)), s(i.add(r))), i = i.add(r.rotate(-90))), s(i.add(r)), s(i.subtract(r))
                },
                getHandleBounds: function (t, e, n, i, r) {
                    var s, a, o, h = n.getStyle();
                    r.stroke && h.hasStroke() && (o = n._getStrokeMatrix(i, r), r = n = h.getStrokeWidth() / 2, "miter" === h.getStrokeJoin() && (r = n * h.getMiterLimit()), "square" === h.getStrokeCap() && (r = Math.max(r, n * Math.SQRT2)), s = W._getStrokePadding(n, o), a = W._getStrokePadding(r, o));
                    for (var u = new Array(6), l = 1 / 0, c = -l, f = l, d = c, _ = 0, g = t.length; _ < g; _++) {
                        t[_]._transformCoordinates(i, u);
                        for (var p = 0; p < 6; p += 2) {
                            var v = p ? s : a,
                                m = v ? v[0] : 0,
                                y = v ? v[1] : 0,
                                w = u[p],
                                x = u[p + 1],
                                v = w - m,
                                w = w + m,
                                m = x - y,
                                y = x + y;
                            v < l && (l = v), c < w && (c = w), m < f && (f = m), d < y && (d = y)
                        }
                    }
                    return new b(l, f, c - l, d - f)
                }
            }
        });
    W.inject({
        statics: new function () {
            var u = .5522847498307936,
                a = [new U([-1, 0], [0, u], [0, -u]), new U([0, -1], [-u, 0], [u, 0]), new U([1, 0], [0, -u], [0, u]), new U([0, 1], [u, 0], [-u, 0])];

            function l(t, e, n) {
                var i = R.getNamed(n),
                    n = new W(i && 0 == i.insert && V.NO_INSERT);
                return n._add(t), n._closed = e, n.set(i, {
                    insert: !0
                })
            }

            function i(t, e, n) {
                for (var i = new Array(4), r = 0; r < 4; r++) {
                    var s = a[r];
                    i[r] = new U(s._point.multiply(e).add(t), s._handleIn.multiply(e), s._handleOut.multiply(e))
                }
                return l(i, !0, n)
            }
            return {
                Line: function () {
                    var t = arguments;
                    return l([new U(E.readNamed(t, "from")), new U(E.readNamed(t, "to"))], !1, t)
                },
                Circle: function () {
                    var t = arguments,
                        e = E.readNamed(t, "center"),
                        n = R.readNamed(t, "radius");
                    return i(e, new O(n), t)
                },
                Rectangle: function () {
                    var t, e, n = arguments,
                        i = b.readNamed(n, "rectangle"),
                        r = O.readNamed(n, "radius", 0, {
                            readNull: !0
                        }),
                        s = i.getBottomLeft(!0),
                        a = i.getTopLeft(!0),
                        o = i.getTopRight(!0),
                        h = i.getBottomRight(!0);
                    return l(!r || r.isZero() ? [new U(s), new U(a), new U(o), new U(h)] : (t = (r = O.min(r, i.getSize(!0).divide(2))).width, e = r.height, i = t * u, r = e * u, [new U(s.add(t, 0), null, [-i, 0]), new U(s.subtract(0, e), [0, r]), new U(a.add(0, e), null, [0, -r]), new U(a.add(t, 0), [-i, 0], null), new U(o.subtract(t, 0), null, [i, 0]), new U(o.add(0, e), [0, -r], null), new U(h.subtract(0, e), null, [0, r]), new U(h.subtract(t, 0), [i, 0])]), !0, n)
                },
                RoundRectangle: "#Rectangle",
                Ellipse: function () {
                    var t = arguments,
                        e = d._readEllipse(t);
                    return i(e.center, e.radius, t)
                },
                Oval: "#Ellipse",
                Arc: function () {
                    var t = arguments,
                        e = E.readNamed(t, "from"),
                        n = E.readNamed(t, "through"),
                        i = E.readNamed(t, "to"),
                        r = R.getNamed(t),
                        t = new W(r && 0 == r.insert && V.NO_INSERT);
                    return t.moveTo(e), t.arcTo(n, i), t.set(r)
                },
                RegularPolygon: function () {
                    for (var t = arguments, e = E.readNamed(t, "center"), n = R.readNamed(t, "sides"), i = R.readNamed(t, "radius"), r = 360 / n, s = n % 3 == 0, a = new E(0, s ? -i : i), o = s ? -1 : .5, h = new Array(n), u = 0; u < n; u++) h[u] = new U(e.add(a.rotate((u + o) * r)));
                    return l(h, !0, t)
                },
                Star: function () {
                    for (var t = arguments, e = E.readNamed(t, "center"), n = 2 * R.readNamed(t, "points"), i = R.readNamed(t, "radius1"), r = R.readNamed(t, "radius2"), s = 360 / n, a = new E(0, -1), o = new Array(n), h = 0; h < n; h++) o[h] = new U(e.add(a.rotate(s * h).multiply(h % 2 ? r : i)));
                    return l(o, !0, t)
                }
            }
        }
    });
    var $ = _.extend({
        _class: "CompoundPath",
        _serializeFields: {
            children: []
        },
        beans: !0,
        initialize: function (t) {
            this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments))
        },
        insertChildren: function t(e, n) {
            var i = n,
                r = i[0];
            r && "number" == typeof r[0] && (i = [i]);
            for (var s = n.length - 1; 0 <= s; s--) {
                var a = i[s];
                i !== n || a instanceof W || (i = R.slice(i)), Array.isArray(a) ? i[s] = new W({
                    segments: a,
                    insert: !1
                }) : a instanceof $ && (i.splice.apply(i, [s, 1].concat(a.removeChildren())), a.remove())
            }
            return t.base.call(this, e, i)
        },
        reduce: function t(e) {
            for (var n, i = this._children, r = i.length - 1; 0 <= r; r--)(n = i[r].reduce(e)).isEmpty() && n.remove();
            return i.length ? t.base.call(this) : ((n = new W(V.NO_INSERT)).copyAttributes(this), n.insertAbove(this), this.remove(), n)
        },
        isClosed: function () {
            for (var t = this._children, e = 0, n = t.length; e < n; e++)
                if (!t[e]._closed) return !1;
            return !0
        },
        setClosed: function (t) {
            for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setClosed(t)
        },
        getFirstSegment: function () {
            var t = this.getFirstChild();
            return t && t.getFirstSegment()
        },
        getLastSegment: function () {
            var t = this.getLastChild();
            return t && t.getLastSegment()
        },
        getCurves: function () {
            for (var t = this._children, e = [], n = 0, i = t.length; n < i; n++) R.push(e, t[n].getCurves());
            return e
        },
        getFirstCurve: function () {
            var t = this.getFirstChild();
            return t && t.getFirstCurve()
        },
        getLastCurve: function () {
            var t = this.getLastChild();
            return t && t.getLastCurve()
        },
        getArea: function () {
            for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getArea();
            return e
        },
        getLength: function () {
            for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
            return e
        },
        getPathData: function (t, e) {
            for (var n = this._children, i = [], r = 0, s = n.length; r < s; r++) {
                var a = n[r],
                    o = a._matrix;
                i.push(a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e))
            }
            return i.join("")
        },
        _hitTestChildren: function t(e, n, i) {
            return t.base.call(this, e, n.class === W || "path" === n.type ? n : R.set({}, n, {
                fill: !1
            }), i)
        },
        _draw: function (t, e, n, i) {
            var r = this._children;
            if (r.length) {
                e = e.extend({
                    dontStart: !0,
                    dontFinish: !0
                }), t.beginPath();
                for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, i);
                e.clip || (this._setStyles(t, e, n), (n = this._style).hasFill() && (t.fill(n.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), n.hasStroke() && t.stroke())
            }
        },
        _drawSelected: function (t, e, n) {
            for (var i = this._children, r = 0, s = i.length; r < s; r++) {
                var a = i[r],
                    o = a._matrix;
                n[a._id] || a._drawSelected(t, o.isIdentity() ? e : e.appended(o))
            }
        }
    }, new function () {
        function n(t, e) {
            t = t._children;
            if (e && !t.length) throw new Error("Use a moveTo() command first");
            return t[t.length - 1]
        }
        return R.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function (e) {
            this[e] = function () {
                var t = n(this, !0);
                t[e].apply(t, arguments)
            }
        }, {
            moveTo: function () {
                var t = n(this),
                    e = t && t.isEmpty() ? t : new W(V.NO_INSERT);
                e !== t && this.addChild(e), e.moveTo.apply(e, arguments)
            },
            moveBy: function () {
                var t = n(this, !0),
                    e = t && t.getLastSegment(),
                    t = E.read(arguments);
                this.moveTo(e ? t.add(e._point) : t)
            },
            closePath: function (t) {
                n(this, !0).closePath(t)
            }
        })
    }, R.each(["reverse", "flatten", "simplify", "smooth"], function (s) {
        this[s] = function (t) {
            for (var e, n = this._children, i = 0, r = n.length; i < r; i++) e = n[i][s](t) || e;
            return e
        }
    }, {}));
    _.inject(new function () {
        var z = Math.min,
            E = Math.max,
            L = Math.abs,
            C = {
                unite: {
                    1: !0,
                    2: !0
                },
                intersect: {
                    2: !0
                },
                subtract: {
                    1: !0
                },
                exclude: {
                    1: !0,
                    "-1": !0
                }
            };

        function S(t) {
            return t._children || [t]
        }

        function k(t, e) {
            var n = t.clone(!1).reduce({
                simplify: !0
            }).transform(null, !0, !0);
            if (e) {
                for (var i = S(n), r = 0, s = i.length; r < s; r++)(t = i[r])._closed || t.isEmpty() || (t.closePath(1e-12), t.getFirstSegment().setHandleIn(0, 0), t.getLastSegment().setHandleOut(0, 0));
                n = n.resolveCrossings().reorient("nonzero" === n.getFillRule(), !0)
            }
            return n
        }

        function I(t, e, n, i, r) {
            var s = new $(V.NO_INSERT);
            return s.addChildren(t, !0), s = s.reduce({
                simplify: e
            }), r && 0 == r.insert || s.insertAbove(i && n.isSibling(i) && n.getIndex() < i.getIndex() ? i : n), s.copyAttributes(n, !0), s
        }

        function P(t) {
            return t.hasOverlap() || t.isCrossing()
        }

        function n(t, e, n, i) {
            if (i && (0 == i.trace || i.stroke) && /^(subtract|intersect)$/.test(n)) return M(t, e, n);
            var r = k(t, !0),
                s = e && t !== e && k(e, !0),
                a = C[n];
            a[n] = !0, s && (a.subtract || a.exclude) ^ (s.isClockwise() ^ r.isClockwise()) && s.reverse();
            var o, h = O(Z.expand(r.getIntersections(s, P))),
                u = S(r),
                n = s && S(s),
                l = [],
                c = [];

            function f(t) {
                for (var e = 0, n = t.length; e < n; e++) {
                    var i = t[e];
                    R.push(l, i._segments), R.push(c, i.getCurves()), i._overlapsOnly = !0
                }
            }

            function d(t) {
                for (var e = [], n = 0, i = t && t.length; n < i; n++) e.push(c[t[n]]);
                return e
            }
            if (h.length) {
                f(u), n && f(n);
                for (var _ = new Array(c.length), g = 0, p = c.length; g < p; g++) _[g] = c[g].getValues();
                for (var v = D.findCurveBoundsCollisions(_, _, 0, !0), m = {}, g = 0; g < c.length; g++) {
                    var y = c[g],
                        w = y._path._id;
                    (m[w] = m[w] || {})[y.getIndex()] = {
                        hor: d(v[g].hor),
                        ver: d(v[g].ver)
                    }
                }
                for (g = 0, p = h.length; g < p; g++) B(h[g]._segment, r, s, m, a);
                for (g = 0, p = l.length; g < p; g++) {
                    var x = l[g],
                        b = x._intersection;
                    x._winding || B(x, r, s, m, a), b && b._overlap || (x._path._overlapsOnly = !1)
                }
                o = F(l, a)
            } else o = T(n ? u.concat(n) : u.slice(), function (t) {
                return !!a[t]
            });
            return I(o, !0, t, e, i)
        }

        function M(t, e, n) {
            var i = k(t),
                r = k(e),
                s = i.getIntersections(r, P),
                a = "subtract" === n,
                o = "divide" === n,
                h = {},
                u = [];

            function l(t) {
                return !h[t._id] && (o || r.contains(t.getPointAt(t.getLength() / 2)) ^ a) && (u.unshift(t), h[t._id] = !0)
            }
            for (var c = s.length - 1; 0 <= c; c--) {
                var f = s[c].split();
                f && (l(f) && f.getFirstSegment().setHandleIn(0, 0), i.getLastSegment().setHandleOut(0, 0))
            }
            return l(i), I(u, !1, t, e)
        }

        function b(t, e) {
            for (var n = t; n;) {
                if (n === e) return;
                n = n._previous
            }
            for (; t._next && t._next !== e;) t = t._next;
            if (!t._next) {
                for (; e._previous;) e = e._previous;
                (t._next = e)._previous = t
            }
        }

        function A(t) {
            for (var e = t.length - 1; 0 <= e; e--) t[e].clearHandles()
        }

        function T(t, e, n) {
            var i = t && t.length;
            if (i) {
                var r = R.each(t, function (t, e) {
                        this[t._id] = {
                            container: null,
                            winding: t.isClockwise() ? 1 : -1,
                            index: e
                        }
                    }, {}),
                    s = t.slice().sort(function (t, e) {
                        return L(e.getArea()) - L(t.getArea())
                    }),
                    a = s[0],
                    o = D.findItemBoundsCollisions(s, null, q.GEOMETRIC_EPSILON);
                null == n && (n = a.isClockwise());
                for (var h = 0; h < i; h++) {
                    var u, l = s[h],
                        c = r[l._id],
                        f = 0,
                        d = o[h];
                    if (d)
                        for (var _ = null, g = d.length - 1; 0 <= g; g--)
                            if (d[g] < h) {
                                var _ = _ || l.getInteriorPoint(),
                                    p = s[d[g]];
                                if (p.contains(_)) {
                                    var v = r[p._id],
                                        f = v.winding;
                                    c.winding += f, c.container = v.exclude ? v.container : p;
                                    break
                                }
                            } e(c.winding) === e(f) ? (c.exclude = !0, t[c.index] = null) : (u = c.container, l.setClockwise(u ? !u.isClockwise() : n))
                }
            }
            return t
        }

        function O(t, e, n) {
            var i, r, s, a = e && [],
                o = !1,
                h = n || [],
                u = n && {};

            function l(t) {
                return t._path._id + "." + t._segment1._index
            }
            for (var c = (n && n.length) - 1; 0 <= c; c--)(f = n[c])._path && (u[l(f)] = !0);
            for (c = t.length - 1; 0 <= c; c--) {
                var f, d = t[c],
                    _ = d._time,
                    g = _,
                    p = e && !e(d);
                if ((f = d._curve) && (f !== r ? (o = !f.hasHandles() || u && u[l(f)], i = [], s = null, r = f) : 1e-8 <= s && (_ /= s)), p) i && i.push(d);
                else {
                    if (e && a.unshift(d), s = g, _ < 1e-8) v = f._segment1;
                    else if (1 - 1e-8 < _) v = f._segment2;
                    else {
                        g = f.divideAtTime(_, !0);
                        o && h.push(f, g);
                        for (var v = g._segment1, m = i.length - 1; 0 <= m; m--) {
                            var y = i[m];
                            y._time = (y._time - _) / (1 - _)
                        }
                    }
                    d._setSegment(v);
                    var w = v._intersection,
                        d = d._intersection;
                    if (w) {
                        b(w, d);
                        for (var x = w; x;) b(x._intersection, w), x = x._next
                    } else v._intersection = d
                }
            }
            return n || A(h), a || t
        }

        function N(u, l, c, f, d) {
            var t, e = Array.isArray(l) ? l : l[c ? "hor" : "ver"],
                _ = c ? 1 : 0,
                g = 1 ^ _,
                n = [u.x, u.y],
                p = n[_],
                v = n[g],
                m = 1e-6,
                y = p - 1e-9,
                w = p + 1e-9,
                i = 0,
                r = 0,
                x = 0,
                b = 0,
                C = !1,
                s = !1,
                S = 1,
                k = [];

            function a(t) {
                var e = t[g + 0],
                    n = t[g + 2],
                    i = t[g + 4],
                    r = t[g + 6];
                if (v <= E(e, n, i, r) && v >= z(e, n, i, r))
                    for (var s, e = t[_ + 0], n = t[_ + 2], i = t[_ + 4], r = t[_ + 6], a = y > E(e, n, i, r) || w < z(e, n, i, r) ? [t] : H.getMonoCurves(t, c), o = 0, h = a.length; o < h; o++)
                        if (s = function (t) {
                                var e = t[g + 0],
                                    n = t[g + 6];
                                if (!(v < z(e, n) || v > E(e, n))) {
                                    var i = t[_ + 0],
                                        r = t[_ + 2],
                                        s = t[_ + 4],
                                        a = t[_ + 6];
                                    if (e !== n) {
                                        var o = v === e ? 0 : v !== n && !(y > E(i, r, s, a) || w < z(i, r, s, a)) && 0 < H.solveCubic(t, g, v, k, 0, 1) ? k[0] : 1,
                                            h = 0 === o ? i : 1 === o ? a : H.getPoint(t, o)[c ? "y" : "x"],
                                            r = n < e ? 1 : -1,
                                            s = A[g] > A[g + 6] ? 1 : -1,
                                            n = A[_ + 6];
                                        return v !== e ? (h < y ? x += r : w < h ? b += r : C = !0, p - m < h && h < p + m && (S /= 2)) : (r != s ? i < y ? x += r : w < i && (b += r) : i != n && (n < w && w < h ? (b += r, C = !0) : y < n && h < y && (x += r, C = !0)), S /= 4), A = t, !d && y < h && h < w && 0 === H.getTangent(t, o)[c ? "x" : "y"] && N(u, l, !c, f, !0)
                                    }(i < w && y < a || a < w && y < i) && (C = !0)
                                }
                            }(a[o])) return s
            }
            for (var o = 0, h = e.length; o < h; o++) {
                var I = e[o],
                    P = I._path,
                    M = I.getValues();
                if (!(o && e[o - 1]._path === P || (A = null, P._closed || (t = H.getValues(P.getLastCurve().getSegment2(), I.getSegment1(), null, !f))[g] !== t[g + 6] && (A = t), A)))
                    for (var A = M, T = P.getLastCurve(); T && T !== I;) {
                        var O = T.getValues();
                        if (O[g] !== O[g + 6]) {
                            A = O;
                            break
                        }
                        T = T.getPrevious()
                    }
                if (M = a(M)) return M;
                if (o + 1 === h || e[o + 1]._path !== P) {
                    if (t && (M = a(t))) return M;
                    i += x = C && !x && !b ? b = P.isClockwise(f) ^ c ? 1 : -1 : x, r += b, x = b = 0, C = C && !(s = !0), t = null
                }
            }
            return i = L(i), r = L(r), {
                winding: E(i, r),
                windingL: i,
                windingR: r,
                quality: S,
                onPath: s
            }
        }

        function B(t, e, n, i, r) {
            var s = [],
                a = t,
                o = 0;
            do {} while ((p = t.getCurve()) && (c = p.getLength(), s.push({
                    segment: t,
                    curve: p,
                    length: c
                }), o += c), (t = t.getNext()) && !t._intersection && t !== a);
            for (var h = [.5, .25, .75], u = {
                    winding: 0,
                    quality: -1
                }, l = 0; l < h.length && u.quality < .5; l++)
                for (var c = o * h[l], f = 0, d = s.length; f < d; f++) {
                    var _ = s[f],
                        g = _.length;
                    if (c <= g) {
                        var p, v = (p = _.curve)._path,
                            m = v._parent,
                            y = m instanceof $ ? m : v,
                            w = q.clamp(p.getTimeAt(c), .001, .999),
                            x = p.getPointAtTime(w),
                            _ = L(p.getTangentAtTime(w).y) < Math.SQRT1_2,
                            m = null;
                        if (r.subtract && n) {
                            w = (y === e ? n : e)._getWinding(x, _, !0);
                            if (y === e && w.winding || y === n && !w.winding) {
                                if (w.quality < 1) continue;
                                m = {
                                    winding: 0,
                                    quality: 1
                                }
                            }
                        }(m = m || N(x, i[v._id][p.getIndex()], _, !0)).quality > u.quality && (u = m);
                        break
                    }
                    c -= g
                }
            for (f = s.length - 1; 0 <= f; f--) s[f].segment._winding = u
        }

        function F(t, e) {
            var h, n = [];

            function u(t) {
                return !(!t || t._visited || e && (!e[(t = t._winding || {}).winding] || e.unite && 2 === t.winding && t.windingL && t.windingR))
            }

            function l(t) {
                if (t)
                    for (var e = 0, n = h.length; e < n; e++)
                        if (t === h[e]) return !0;
                return !1
            }

            function i(t) {
                for (var e = t._segments, n = 0, i = e.length; n < i; n++) e[n]._visited = !0
            }
            t.sort(function (t, e) {
                var n = t._intersection,
                    i = e._intersection,
                    r = !(!n || !n._overlap),
                    s = !(!i || !i._overlap),
                    a = t._path,
                    o = e._path;
                return r ^ s ? r ? 1 : -1 : !n ^ !i ? n ? 1 : -1 : a !== o ? a._id - o._id : t._index - e._index
            });
            for (var r = 0, s = t.length; r < s; r++) {
                var a, o, c, f, d, _ = t[r],
                    g = u(_),
                    p = null,
                    v = !1,
                    m = !0,
                    y = [];
                for (g && _._path._overlapsOnly && (f = _._path, d = _._intersection._segment._path, f.compare(d) && (f.getArea() && n.push(f.clone(!1)), i(f), i(d), g = !1)); g;) {
                    var w = !p,
                        x = function (s, a) {
                            var t = s._intersection,
                                e = t,
                                o = [];

                            function n(t, e) {
                                for (; t && t !== e;) {
                                    var n, i = t._segment,
                                        r = i && i._path;
                                    r && (r = (n = i.getNext() || r.getFirstSegment())._intersection, i !== s && (l(i) || l(n) || n && u(i) && (u(n) || r && u(r._segment))) && o.push(i), a && h.push(i)), t = t._next
                                }
                            }
                            if (a && (h = [s]), t) {
                                for (n(t); t && t._previous;) t = t._previous;
                                n(t, e)
                            }
                            return o
                        }(_, w),
                        b = x.shift(),
                        C = !(v = !w && (l(_) || l(b))) && b;
                    if (w && (p = new W(V.NO_INSERT), a = null), v) {
                        (_.isFirst() || _.isLast()) && (m = _._path._closed), _._visited = !0;
                        break
                    }
                    if (C && a && (y.push(a), a = null), a || (C && x.push(_), a = {
                            start: p._segments.length,
                            crossings: x,
                            visited: o = [],
                            handleIn: c
                        }), !u(_ = C ? b : _)) {
                        p.removeSegments(a.start);
                        for (var S = 0, k = o.length; S < k; S++) o[S]._visited = !1;
                        for (o.length = 0;
                            (_ = a && a.crossings.shift()) && _._path || (_ = null, (a = y.pop()) && (o = a.visited, c = a.handleIn)), a && !u(_););
                        if (!_) break
                    }
                    b = _.getNext();
                    p.add(new U(_._point, c, b && _._handleOut)), _._visited = !0, o.push(_), _ = b || _._path.getFirstSegment(), c = b && b._handleIn
                }
                v && (m && (p.getFirstSegment().setHandleIn(c), p.setClosed(m)), 0 !== p.getArea() && n.push(p))
            }
            return n
        }
        return {
            _getWinding: function (t, e, n) {
                return N(t, this.getCurves(), e, n)
            },
            unite: function (t, e) {
                return n(this, t, "unite", e)
            },
            intersect: function (t, e) {
                return n(this, t, "intersect", e)
            },
            subtract: function (t, e) {
                return n(this, t, "subtract", e)
            },
            exclude: function (t, e) {
                return n(this, t, "exclude", e)
            },
            divide: function (t, e) {
                return e && (0 == e.trace || e.stroke) ? M(this, t, "divide") : I([this.subtract(t, e), this.intersect(t, e)], !0, this, t, e)
            },
            resolveCrossings: function () {
                var t = this._children,
                    e = t || [this];

                function n(t, e) {
                    t = t && t._intersection;
                    return t && t._overlap && t._path === e
                }
                var i = !1,
                    r = !1,
                    s = this.getIntersections(null, function (t) {
                        return t.hasOverlap() ? i = !0 : t.isCrossing() && (r = !0)
                    }),
                    a = i && r && [],
                    s = Z.expand(s);
                if (i)
                    for (var o = O(s, function (t) {
                            return t.hasOverlap()
                        }, a), h = o.length - 1; 0 <= h; h--) {
                        var u = o[h],
                            l = u._path,
                            c = u._segment,
                            f = c.getPrevious(),
                            u = c.getNext();
                        n(f, l) && n(u, l) && (c.remove(), f._handleOut._set(0, 0), u._handleIn._set(0, 0), f === c || f.getCurve().hasLength() || (u._handleIn.set(f._handleIn), f.remove()))
                    }
                r && (O(s, i && function (t) {
                    var e = t.getCurve(),
                        n = t.getSegment(),
                        i = t._intersection,
                        t = i._curve,
                        i = i._segment;
                    if (e && t && e._path && t._path) return !0;
                    n && (n._intersection = null), i && (i._intersection = null)
                }, a), a && A(a), e = F(R.each(e, function (t) {
                    R.push(this, t._segments)
                }, [])));
                var d, a = e.length;
                return 1 < a && t ? (e !== t && this.setChildren(e), d = this) : 1 !== a || t || (e[0] !== this && this.setSegments(e[0].removeSegments()), d = this), d || ((d = new $(V.NO_INSERT)).addChildren(e), (d = d.reduce()).copyAttributes(this), this.replaceWith(d)), d
            },
            reorient: function (e, t) {
                var n = this._children;
                return n && n.length ? this.setChildren(T(this.removeChildren(), function (t) {
                    return !!(e ? t : 1 & t)
                }, t)) : t !== j && this.setClockwise(t), this
            },
            getInteriorPoint: function () {
                var t = this.getBounds().getCenter(!0);
                if (!this.contains(t)) {
                    for (var e = this.getCurves(), n = t.y, i = [], r = [], s = 0, a = e.length; s < a; s++) {
                        var o = e[s].getValues(),
                            h = o[1],
                            u = o[3],
                            l = o[5],
                            c = o[7];
                        if (n >= z(h, u, l, c) && n <= E(h, u, l, c))
                            for (var f = H.getMonoCurves(o), d = 0, _ = f.length; d < _; d++) {
                                var g = f[d],
                                    p = g[1],
                                    v = g[7];
                                p !== v && (p <= n && n <= v || v <= n && n <= p) && (g = n === p ? g[0] : n === v ? g[6] : 1 === H.solveCubic(g, 1, n, r, 0, 1) ? H.getPoint(g, r[0]).x : (g[0] + g[6]) / 2, i.push(g))
                            }
                    }
                    1 < i.length && (i.sort(function (t, e) {
                        return t - e
                    }), t.x = (i[0] + i[1]) / 2)
                }
                return t
            }
        }
    });
    var m = R.extend({
            _class: "PathFlattener",
            initialize: function (t, o, e, h, n) {
                var i, r = [],
                    u = [],
                    l = 0,
                    c = 1 / (e || 32),
                    s = t._segments,
                    a = s[0];

                function f(t, e) {
                    e = H.getValues(t, e, n);
                    r.push(e),
                        function t(e, n, i, r) {
                            {
                                var s, a;
                                !(c < r - i) || h && H.isStraight(e) || H.isFlatEnough(e, o || .25) ? (s = e[6] - e[0], a = e[7] - e[1], 0 < (a = Math.sqrt(s * s + a * a)) && (l += a, u.push({
                                    offset: l,
                                    curve: e,
                                    index: n,
                                    time: r
                                }))) : (a = H.subdivide(e, .5), e = (i + r) / 2, t(a[0], n, i, e), t(a[1], n, e, r))
                            }
                        }(e, t._index, 0, 1)
                }
                for (var d = 1, _ = s.length; d < _; d++) f(a, i = s[d]), a = i;
                t._closed && f(i || a, s[0]), this.curves = r, this.parts = u, this.length = l, this.index = 0
            },
            _get: function (t) {
                for (var e, n = this.parts, i = n.length, r = this.index;
                    (e = r) && !(n[--r].offset < t););
                for (; e < i; e++) {
                    var s = n[e];
                    if (s.offset >= t) {
                        var a = n[(this.index = e) - 1],
                            o = a && a.index === s.index ? a.time : 0,
                            a = a ? a.offset : 0;
                        return {
                            index: s.index,
                            time: o + (s.time - o) * (t - a) / (s.offset - a)
                        }
                    }
                }
                return {
                    index: n[i - 1].index,
                    time: 1
                }
            },
            drawPart: function (t, e, n) {
                for (var i = this._get(e), r = this._get(n), s = i.index, a = r.index; s <= a; s++) {
                    var o = H.getPart(this.curves[s], s === i.index ? i.time : 0, s === r.index ? r.time : 1);
                    s === i.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2))
                }
            }
        }, R.each(H._evaluateMethods, function (e) {
            this[e + "At"] = function (t) {
                t = this._get(t);
                return H[e](this.curves[t.index], t.time)
            }
        }, {})),
        h = R.extend({
            initialize: function (t) {
                for (var e, n = this.points = [], i = t._segments, t = t._closed, r = 0, s = i.length; r < s; r++) {
                    var a = i[r].point;
                    e && e.equals(a) || n.push(e = a.clone())
                }
                t && (n.unshift(n[n.length - 1]), n.push(n[1])), this.closed = t
            },
            fit: function (t) {
                var e = this.points,
                    n = e.length,
                    i = null;
                return 0 < n && (i = [new U(e[0])], 1 < n && (this.fitCubic(i, t, 0, n - 1, e[1].subtract(e[0]), e[n - 2].subtract(e[n - 1])), this.closed && (i.shift(), i.pop()))), i
            },
            fitCubic: function (t, e, n, i, r, s) {
                var a = this.points;
                if (i - n != 1) {
                    for (var o, h = this.chordLengthParameterize(n, i), u = Math.max(e, e * e), l = !0, c = 0; c <= 4; c++) {
                        var f = this.generateBezier(n, i, h, r, s),
                            d = this.findMaxError(n, i, f, h);
                        if (d.error < e && l) return void this.addCurve(t, f);
                        if (o = d.index, d.error >= u) break;
                        l = this.reparameterize(n, i, h, f), u = d.error
                    }
                    var _ = a[o - 1].subtract(a[o + 1]);
                    this.fitCubic(t, e, n, o, r, _), this.fitCubic(t, e, o, i, _.negate(), s)
                } else {
                    var g = a[n],
                        _ = a[i],
                        a = g.getDistance(_) / 3;
                    this.addCurve(t, [g, g.add(r.normalize(a)), _.add(s.normalize(a)), _])
                }
            },
            addCurve: function (t, e) {
                t[t.length - 1].setHandleOut(e[1].subtract(e[0])), t.push(new U(e[3], e[2].subtract(e[3])))
            },
            generateBezier: function (t, e, n, i, r) {
                for (var s = Math.abs, a = this.points, o = a[t], h = a[e], u = [
                        [0, 0],
                        [0, 0]
                    ], l = [0, 0], c = 0, f = e - t + 1; c < f; c++) {
                    var d = n[c],
                        _ = 1 - d,
                        g = 3 * d * _,
                        p = _ * _ * _,
                        v = g * _,
                        m = g * d,
                        _ = d * d * d,
                        g = i.normalize(v),
                        d = r.normalize(m),
                        _ = a[t + c].subtract(o.multiply(p + v)).subtract(h.multiply(m + _));
                    u[0][0] += g.dot(g), u[0][1] += g.dot(d), u[1][0] = u[0][1], u[1][1] += d.dot(d), l[0] += g.dot(_), l[1] += d.dot(_)
                }
                var y, w, e = u[0][0] * u[1][1] - u[1][0] * u[0][1];
                1e-12 < s(e) ? (w = u[0][0] * l[1] - u[1][0] * l[0], y = (l[0] * u[1][1] - l[1] * u[0][1]) / e, w = w / e) : (e = u[0][0] + u[0][1], C = u[1][0] + u[1][1], y = w = 1e-12 < s(e) ? l[0] / e : 1e-12 < s(C) ? l[1] / C : 0);
                var x, b, s = h.getDistance(o),
                    C = 1e-12 * s;
                return y < C || w < C ? y = w = s / 3 : (C = h.subtract(o), x = i.normalize(y), b = r.normalize(w), x.dot(C) - b.dot(C) > s * s && (y = w = s / 3, x = b = null)), [o, o.add(x || i.normalize(y)), h.add(b || r.normalize(w)), h]
            },
            reparameterize: function (t, e, n, i) {
                for (var r = t; r <= e; r++) n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
                for (var r = 1, s = n.length; r < s; r++)
                    if (n[r] <= n[r - 1]) return !1;
                return !0
            },
            findRoot: function (t, e, n) {
                for (var i = [], r = [], s = 0; s <= 2; s++) i[s] = t[s + 1].subtract(t[s]).multiply(3);
                for (s = 0; s <= 1; s++) r[s] = i[s + 1].subtract(i[s]).multiply(2);
                var a = this.evaluate(3, t, n),
                    o = this.evaluate(2, i, n),
                    h = this.evaluate(1, r, n),
                    e = a.subtract(e),
                    h = o.dot(o) + e.dot(h);
                return q.isMachineZero(h) ? n : n - e.dot(o) / h
            },
            evaluate: function (t, e, n) {
                for (var i = e.slice(), r = 1; r <= t; r++)
                    for (var s = 0; s <= t - r; s++) i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
                return i[0]
            },
            chordLengthParameterize: function (t, e) {
                for (var n = [0], i = t + 1; i <= e; i++) n[i - t] = n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
                for (var i = 1, r = e - t; i <= r; i++) n[i] /= n[r];
                return n
            },
            findMaxError: function (t, e, n, i) {
                for (var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1; a < e; a++) {
                    var o = this.evaluate(3, n, i[a - t]).subtract(this.points[a]),
                        o = o.x * o.x + o.y * o.y;
                    s <= o && (s = o, r = a)
                }
                return {
                    error: s,
                    index: r
                }
            }
        }),
        v = V.extend({
            _class: "TextItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _serializeFields: {
                content: null
            },
            _boundsOptions: {
                stroke: !1,
                handle: !1
            },
            initialize: function (t) {
                this._content = "", this._lines = [];
                var e = t && R.isPlainObject(t) && t.x === j && t.y === j;
                this._initialize(e && t, !e && E.read(arguments))
            },
            _equals: function (t) {
                return this._content === t._content
            },
            copyContent: function (t) {
                this.setContent(t._content)
            },
            getContent: function () {
                return this._content
            },
            setContent: function (t) {
                this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(521)
            },
            isEmpty: function () {
                return !this._content
            },
            getCharacterStyle: "#getStyle",
            setCharacterStyle: "#setStyle",
            getParagraphStyle: "#getStyle",
            setParagraphStyle: "#setStyle"
        }),
        y = v.extend({
            _class: "PointText",
            initialize: function () {
                v.apply(this, arguments)
            },
            getPoint: function () {
                var t = this._matrix.getTranslation();
                return new u(t.x, t.y, this, "setPoint")
            },
            setPoint: function () {
                var t = E.read(arguments);
                this.translate(t.subtract(this._matrix.getTranslation()))
            },
            _draw: function (t, e, n) {
                if (this._content) {
                    this._setStyles(t, e, n);
                    var i = this._lines,
                        n = this._style,
                        r = n.hasFill(),
                        s = n.hasStroke(),
                        a = n.getLeading(),
                        o = t.shadowColor;
                    t.font = n.getFontStyle(), t.textAlign = n.getJustification();
                    for (var h = 0, u = i.length; h < u; h++) {
                        t.shadowColor = o;
                        var l = i[h];
                        r && (t.fillText(l, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), s && t.strokeText(l, 0, 0), t.translate(0, a)
                    }
                }
            },
            _getBounds: function (t, e) {
                var n = this._style,
                    i = this._lines,
                    r = i.length,
                    s = n.getJustification(),
                    a = n.getLeading(),
                    n = this.getView().getTextWidth(n.getFontStyle(), i),
                    i = 0;
                "left" !== s && (i -= n / ("center" === s ? 2 : 1));
                a = new b(i, r ? -.75 * a : 0, n, r * a);
                return t ? t._transformBounds(a, a) : a
            }
        }),
        C = R.extend(new function () {
            var v, m = {
                    gray: ["gray"],
                    rgb: ["red", "green", "blue"],
                    hsb: ["hue", "saturation", "brightness"],
                    hsl: ["hue", "saturation", "lightness"],
                    gradient: ["gradient", "origin", "destination", "highlight"]
                },
                y = {},
                w = {
                    transparent: [0, 0, 0, 0]
                };
            var r = [
                    [0, 3, 1],
                    [2, 0, 1],
                    [1, 0, 3],
                    [1, 2, 0],
                    [3, 1, 0],
                    [0, 1, 2]
                ],
                n = {
                    "rgb-hsb": function (t, e, n) {
                        var i = Math.max(t, e, n),
                            r = i - Math.min(t, e, n);
                        return [0 == r ? 0 : 60 * (i == t ? (e - n) / r + (e < n ? 6 : 0) : i == e ? (n - t) / r + 2 : (t - e) / r + 4), 0 === i ? 0 : r / i, i]
                    },
                    "hsb-rgb": function (t, e, n) {
                        t = (t / 60 % 6 + 6) % 6;
                        var i = Math.floor(t),
                            t = t - i,
                            t = [n, n * (1 - e), n * (1 - e * t), n * (1 - e * (1 - t))];
                        return [t[(i = r[i])[0]], t[i[1]], t[i[2]]]
                    },
                    "rgb-hsl": function (t, e, n) {
                        var i = Math.max(t, e, n),
                            r = Math.min(t, e, n),
                            s = i - r,
                            a = 0 == s,
                            o = (i + r) / 2;
                        return [a ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4), a ? 0 : o < .5 ? s / (i + r) : s / (2 - i - r), o]
                    },
                    "hsl-rgb": function (t, e, n) {
                        if (0 === e) return [n, n, n];
                        for (var i = [(t = (t / 360 % 1 + 1) % 1) + 1 / 3, t, t - 1 / 3], r = n < .5 ? n * (1 + e) : n + e - n * e, s = 2 * n - r, a = [], o = 0; o < 3; o++) {
                            var h = i[o];
                            h < 0 && (h += 1), 1 < h && --h, a[o] = 6 * h < 1 ? s + 6 * (r - s) * h : 2 * h < 1 ? r : 3 * h < 2 ? s + (r - s) * (2 / 3 - h) * 6 : s
                        }
                        return a
                    },
                    "rgb-gray": function (t, e, n) {
                        return [.2989 * t + .587 * e + .114 * n]
                    },
                    "gray-rgb": function (t) {
                        return [t, t, t]
                    },
                    "gray-hsb": function (t) {
                        return [0, 0, t]
                    },
                    "gray-hsl": function (t) {
                        return [0, 0, t]
                    },
                    "gradient-rgb": function () {
                        return []
                    },
                    "rgb-gradient": function () {
                        return []
                    }
                };
            return R.each(m, function (t, s) {
                y[s] = [], R.each(t, function (t, e) {
                    var n = R.capitalize(t),
                        i = /^(hue|saturation)$/.test(t),
                        r = y[s][e] = "gradient" === s ? "gradient" === t ? function (t) {
                            var e = this._components[0];
                            return e !== (t = S.read(Array.isArray(t) ? t : arguments, 0, {
                                readNull: !0
                            })) && (e && e._removeOwner(this), t && t._addOwner(this)), t
                        } : function () {
                            return E.read(arguments, 0, {
                                readNull: "highlight" === t,
                                clone: !0
                            })
                        } : function (t) {
                            return null == t || isNaN(t) ? 0 : +t
                        };
                    this["get" + n] = function () {
                        return (this._type === s || i && /^hs[bl]$/.test(this._type) ? this._components : this._convert(s))[e]
                    }, this["set" + n] = function (t) {
                        this._type === s || i && /^hs[bl]$/.test(this._type) || (this._components = this._convert(s), this._properties = m[s], this._type = s), this._components[e] = r.call(this, t), this._changed()
                    }
                }, this)
            }, {
                _class: "Color",
                _readIndex: !0,
                initialize: function t(e) {
                    var n, i, r = arguments,
                        s = this.__read,
                        a = 0,
                        o = null != (e = Array.isArray(e) ? (r = e)[0] : e) && typeof e;
                    if ("string" === o && e in m && (h = e, e = r[1], Array.isArray(e) ? (n = e, l = r[2]) : (s && (a = 1), r = R.slice(r, 1), o = typeof e)), !n) {
                        if (i = "number" === o ? r : "object" === o && null != e.length ? e : null) {
                            var h = h || (3 <= i.length ? "rgb" : "gray"),
                                u = m[h].length,
                                l = i[u];
                            s && (a += i === arguments ? u + (null != l ? 1 : 0) : 1), i.length > u && (i = R.slice(i, 0, u))
                        } else if ("string" === o) {
                            u = function (t) {
                                var e = t.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i) || t.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i),
                                    n = "rgb";
                                if (e)
                                    for (var i = e[4] ? 4 : 3, r = new Array(i), s = 0; s < i; s++) {
                                        var a = e[s + 1];
                                        r[s] = parseInt(1 == a.length ? a + a : a, 16) / 255
                                    } else if (e = t.match(/^(rgb|hsl)a?\((.*)\)$/)) {
                                        n = e[1], r = e[2].trim().split(/[,\s]+/g);
                                        for (var o = "hsl" === n, s = 0, h = Math.min(r.length, 4); s < h; s++) {
                                            var u, l = r[s],
                                                a = parseFloat(l);
                                            o ? 0 === s ? (u = l.match(/([a-z]*)$/)[1], a *= {
                                                turn: 360,
                                                rad: 180 / Math.PI,
                                                grad: .9
                                            } [u] || 1) : s < 3 && (a /= 100) : s < 3 && (a /= /%$/.test(l) ? 100 : 255), r[s] = a
                                        }
                                    } else {
                                        var c, f = w[t];
                                        r = (f = f || (M ? (v || ((v = ut.getContext(1, 1)).globalCompositeOperation = "copy"), v.fillStyle = "rgba(0,0,0,0)", v.fillStyle = t, v.fillRect(0, 0, 1, 1), c = v.getImageData(0, 0, 1, 1).data, w[t] = [c[0] / 255, c[1] / 255, c[2] / 255]) : [0, 0, 0])).slice()
                                    } return [n, r]
                            }(e);
                            h = u[0], 4 === (n = u[1]).length && (l = n[3], n.length--)
                        } else if ("object" === o)
                            if (e.constructor === t) {
                                if (h = e._type, n = e._components.slice(), l = e._alpha, "gradient" === h)
                                    for (var c = 1, f = n.length; c < f; c++) {
                                        var d = n[c];
                                        d && (n[c] = d.clone())
                                    }
                            } else if (e.constructor === S) h = "gradient", i = r;
                        else {
                            h = "hue" in e ? "lightness" in e ? "hsl" : "hsb" : "gradient" in e || "stops" in e || "radial" in e ? "gradient" : "gray" in e ? "gray" : "rgb";
                            var _ = m[h],
                                g = y[h];
                            this._components = n = [];
                            for (c = 0, f = _.length; c < f; c++) null == (p = e[_[c]]) && !c && "gradient" === h && "stops" in e && (p = {
                                stops: e.stops,
                                radial: e.radial
                            }), null != (p = g[c].call(this, p)) && (n[c] = p);
                            l = e.alpha
                        }
                        s && h && (a = 1)
                    }
                    if (this._type = h || "rgb", !n) {
                        this._components = n = [];
                        for (var p, c = 0, f = (g = y[this._type]).length; c < f; c++) null != (p = g[c].call(this, i && i[c])) && (n[c] = p)
                    }
                    return this._components = n, this._properties = m[this._type], this._alpha = l, s && (this.__read = a), this
                },
                set: "#initialize",
                _serialize: function (t, e) {
                    var n = this.getComponents();
                    return R.serialize(/^(gray|rgb)$/.test(this._type) ? n : [this._type].concat(n), t, !0, e)
                },
                _changed: function () {
                    this._canvasStyle = null, this._owner && (this._setter ? this._owner[this._setter](this) : this._owner._changed(129))
                },
                _convert: function (t) {
                    var e;
                    return this._type === t ? this._components.slice() : (e = n[this._type + "-" + t]) ? e.apply(this, this._components) : n["rgb-" + t].apply(this, n[this._type + "-rgb"].apply(this, this._components))
                },
                convert: function (t) {
                    return new C(t, this._convert(t), this._alpha)
                },
                getType: function () {
                    return this._type
                },
                setType: function (t) {
                    this._components = this._convert(t), this._properties = m[t], this._type = t
                },
                getComponents: function () {
                    var t = this._components.slice();
                    return null != this._alpha && t.push(this._alpha), t
                },
                getAlpha: function () {
                    return null != this._alpha ? this._alpha : 1
                },
                setAlpha: function (t) {
                    this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed()
                },
                hasAlpha: function () {
                    return null != this._alpha
                },
                equals: function (t) {
                    var e = R.isPlainValue(t, !0) ? C.read(arguments) : t;
                    return e === this || e && this._class === e._class && this._type === e._type && this.getAlpha() === e.getAlpha() && R.equals(this._components, e._components) || !1
                },
                toString: function () {
                    for (var t = this._properties, e = [], n = "gradient" === this._type, i = x.instance, r = 0, s = t.length; r < s; r++) {
                        var a = this._components[r];
                        null != a && e.push(t[r] + ": " + (n ? a : i.number(a)))
                    }
                    return null != this._alpha && e.push("alpha: " + i.number(this._alpha)), "{ " + e.join(", ") + " }"
                },
                toCSS: function (t) {
                    var e = this._convert("rgb"),
                        n = t || null == this._alpha ? 1 : this._alpha;

                    function i(t) {
                        return Math.round(255 * (t < 0 ? 0 : 1 < t ? 1 : t))
                    }
                    return e = [i(e[0]), i(e[1]), i(e[2])], n < 1 && e.push(n < 0 ? 0 : n), t ? "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1) : (4 == e.length ? "rgba(" : "rgb(") + e.join(",") + ")"
                },
                toCanvasStyle: function (t, e) {
                    if (this._canvasStyle) return this._canvasStyle;
                    if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                    var n, i = this._components,
                        r = i[0],
                        s = r._stops,
                        a = i[1],
                        o = i[2],
                        i = i[3],
                        e = e && e.inverted();
                    e && (a = e._transformPoint(a), o = e._transformPoint(o), i = i && e._transformPoint(i)), n = r._radial ? (e = o.getDistance(a), !i || (r = i.subtract(a)).getLength() > e && (i = a.add(r.normalize(e - .1))), t.createRadialGradient((i = i || a).x, i.y, 0, a.x, a.y, e)) : t.createLinearGradient(a.x, a.y, o.x, o.y);
                    for (var h = 0, u = s.length; h < u; h++) {
                        var l = s[h],
                            c = l._offset;
                        n.addColorStop(null == c ? h / (u - 1) : c, l._color.toCanvasStyle())
                    }
                    return this._canvasStyle = n
                },
                transform: function (t) {
                    if ("gradient" === this._type) {
                        for (var e = this._components, n = 1, i = e.length; n < i; n++) {
                            var r = e[n];
                            t._transformPoint(r, r, !0)
                        }
                        this._changed()
                    }
                },
                statics: {
                    _types: m,
                    random: function () {
                        var t = Math.random;
                        return new C(t(), t(), t())
                    },
                    _setOwner: function (t, e, n) {
                        return t && !(t = t._owner && e && t._owner !== e ? t.clone() : t)._owner ^ !e && (t._owner = e || null, t._setter = n || null), t
                    }
                }
            })
        }, new function () {
            return R.each({
                add: function (t, e) {
                    return t + e
                },
                subtract: function (t, e) {
                    return t - e
                },
                multiply: function (t, e) {
                    return t * e
                },
                divide: function (t, e) {
                    return t / e
                }
            }, function (a, t) {
                this[t] = function (t) {
                    t = C.read(arguments);
                    for (var e = this._type, n = this._components, i = t._convert(e), r = 0, s = n.length; r < s; r++) i[r] = a(n[r], i[r]);
                    return new C(e, i, null != this._alpha ? a(this._alpha, t.getAlpha()) : null)
                }
            }, {})
        }),
        S = R.extend({
            _class: "Gradient",
            initialize: function (t, e) {
                this._id = o.get(), t && R.isPlainObject(t) && (this.set(t), t = e = null), null == this._stops && this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1)
            },
            _serialize: function (t, e) {
                return e.add(this, function () {
                    return R.serialize([this._stops, this._radial], t, !0, e)
                })
            },
            _changed: function () {
                for (var t = 0, e = this._owners && this._owners.length; t < e; t++) this._owners[t]._changed()
            },
            _addOwner: function (t) {
                this._owners || (this._owners = []), this._owners.push(t)
            },
            _removeOwner: function (t) {
                t = this._owners ? this._owners.indexOf(t) : -1; - 1 != t && (this._owners.splice(t, 1), this._owners.length || (this._owners = j))
            },
            clone: function () {
                for (var t = [], e = 0, n = this._stops.length; e < n; e++) t[e] = this._stops[e].clone();
                return new S(t, this._radial)
            },
            getStops: function () {
                return this._stops
            },
            setStops: function (t) {
                if (t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
                var e = this._stops;
                if (e)
                    for (var n = 0, i = e.length; n < i; n++) e[n]._owner = j;
                for (n = 0, i = (e = this._stops = k.readList(t, 0, {
                        clone: !0
                    })).length; n < i; n++) e[n]._owner = this;
                this._changed()
            },
            getRadial: function () {
                return this._radial
            },
            setRadial: function (t) {
                this._radial = t, this._changed()
            },
            equals: function (t) {
                if (t === this) return !0;
                if (t && this._class === t._class) {
                    var e = this._stops,
                        n = t._stops,
                        i = e.length;
                    if (i === n.length) {
                        for (var r = 0; r < i; r++)
                            if (!e[r].equals(n[r])) return !1;
                        return !0
                    }
                }
                return !1
            }
        }),
        k = R.extend({
            _class: "GradientStop",
            initialize: function (t, e) {
                var n = t,
                    i = e;
                "object" == typeof t && e === j && (Array.isArray(t) && "number" != typeof t[0] ? (n = t[0], i = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (n = t.color, i = t.offset || t.rampPoint || 0)), this.setColor(n), this.setOffset(i)
            },
            clone: function () {
                return new k(this._color.clone(), this._offset)
            },
            _serialize: function (t, e) {
                var n = this._color,
                    i = this._offset;
                return R.serialize(null == i ? [n] : [n, i], t, !0, e)
            },
            _changed: function () {
                this._owner && this._owner._changed(129)
            },
            getOffset: function () {
                return this._offset
            },
            setOffset: function (t) {
                this._offset = t, this._changed()
            },
            getRampPoint: "#getOffset",
            setRampPoint: "#setOffset",
            getColor: function () {
                return this._color
            },
            setColor: function () {
                C._setOwner(this._color, null), this._color = C._setOwner(C.read(arguments, 0), this, "setColor"), this._changed()
            },
            equals: function (t) {
                return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1
            }
        }),
        I = R.extend(new function () {
            var i = {
                    fillColor: null,
                    fillRule: "nonzero",
                    strokeColor: null,
                    strokeWidth: 1,
                    strokeCap: "butt",
                    strokeJoin: "miter",
                    strokeScaling: !0,
                    miterLimit: 10,
                    dashOffset: 0,
                    dashArray: [],
                    shadowColor: null,
                    shadowBlur: 0,
                    shadowOffset: new E,
                    selectedColor: null
                },
                r = R.set({}, i, {
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    fontSize: 12,
                    leading: null,
                    justification: "left"
                }),
                s = R.set({}, r, {
                    fillColor: new C
                }),
                n = {
                    strokeWidth: 193,
                    strokeCap: 193,
                    strokeJoin: 193,
                    strokeScaling: 201,
                    miterLimit: 193,
                    fontFamily: 9,
                    fontWeight: 9,
                    fontSize: 9,
                    font: 9,
                    leading: 9,
                    justification: 9
                },
                a = {
                    beans: !0
                },
                d = {
                    _class: "Style",
                    beans: !0,
                    initialize: function (t, e, n) {
                        this._values = {}, this._owner = e, this._project = e && e._project || n || Bt.project, this._defaults = !e || e instanceof g ? r : e instanceof v ? s : i, t && this.set(t)
                    }
                };
            return R.each(r, function (t, h) {
                var u = /Color$/.test(h),
                    l = "shadowOffset" === h,
                    e = R.capitalize(h),
                    o = n[h],
                    c = "set" + e,
                    f = "get" + e;
                d[c] = function (t) {
                    var e, n = this._owner,
                        i = n && n._children,
                        r = i && 0 < i.length && !(n instanceof $);
                    if (r)
                        for (var s = 0, a = i.length; s < a; s++) i[s]._style[c](t);
                    "selectedColor" !== h && r || !(h in this._defaults) || (e = this._values[h]) !== t && (u && (e && (C._setOwner(e, null), e._canvasStyle = null), t && t.constructor === C && (t = C._setOwner(t, n, r && c))), this._values[h] = t, n && n._changed(o || 129))
                }, d[f] = function (t) {
                    var e, n = this._owner,
                        i = n && n._children,
                        r = i && 0 < i.length && !(n instanceof $);
                    if (r && !t)
                        for (var s = 0, a = i.length; s < a; s++) {
                            var o = i[s]._style[f]();
                            if (s) {
                                if (!R.equals(e, o)) return j
                            } else e = o
                        } else h in this._defaults && ((e = this._values[h]) === j ? (e = this._defaults[h]) && e.clone && (e = e.clone()) : !(t = u ? C : l ? E : null) || e && e.constructor === t || (this._values[h] = e = t.read([e], 0, {
                            readNull: !0,
                            clone: !0
                        })));
                    return e = e && u ? C._setOwner(e, n, r && c) : e
                }, a[f] = function (t) {
                    return this._style[f](t)
                }, a[c] = function (t) {
                    this._style[c](t)
                }
            }), R.each({
                Font: "FontFamily",
                WindingRule: "FillRule"
            }, function (t, e) {
                var n = "get" + e,
                    e = "set" + e;
                d[n] = a[n] = "#get" + t, d[e] = a[e] = "#set" + t
            }), V.inject(a), d
        }, {
            set: function (t) {
                var e, n = t instanceof I,
                    i = n ? t._values : t;
                if (i)
                    for (var r in i) r in this._defaults && (e = i[r], this[r] = e && n && e.clone ? e.clone() : e)
            },
            equals: function (t) {
                function e(t, e, n) {
                    var i, r = t._values,
                        s = e._values,
                        a = e._defaults;
                    for (i in r) {
                        var o = r[i],
                            h = s[i];
                        if (!(n && i in s || R.equals(o, h === j ? a[i] : h))) return !1
                    }
                    return !0
                }
                return t === this || t && this._class === t._class && e(this, t) && e(t, this, !0) || !1
            },
            _dispose: function () {
                var t = this.getFillColor();
                t && (t._canvasStyle = null), (t = this.getStrokeColor()) && (t._canvasStyle = null), (t = this.getShadowColor()) && (t._canvasStyle = null)
            },
            hasFill: function () {
                var t = this.getFillColor();
                return !!t && 0 < t.alpha
            },
            hasStroke: function () {
                var t = this.getStrokeColor();
                return !!t && 0 < t.alpha && 0 < this.getStrokeWidth()
            },
            hasShadow: function () {
                var t = this.getShadowColor();
                return !!t && 0 < t.alpha && (0 < this.getShadowBlur() || !this.getShadowOffset().isZero())
            },
            getView: function () {
                return this._project._view
            },
            getFontStyle: function () {
                var t = this.getFontSize();
                return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
            },
            getFont: "#getFontFamily",
            setFont: "#setFontFamily",
            getLeading: function t() {
                var e = t.base.call(this),
                    n = this.getFontSize();
                return /pt|em|%|px/.test(n) && (n = this.getView().getPixelSize(n)), null != e ? e : 1.2 * n
            }
        }),
        P = new function () {
            function r(t, e, n, i) {
                for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), a = 0; a < 6; a++) {
                    var o = r[a],
                        o = o ? o + s : e;
                    if (o in t) {
                        if (!n) return t[o];
                        t[o] = i;
                        break
                    }
                }
            }
            return {
                getStyles: function (t) {
                    var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                        e = e && e.defaultView;
                    return e && e.getComputedStyle(t, "")
                },
                getBounds: function (t, e) {
                    var n, i = t.ownerDocument,
                        r = i.body,
                        s = i.documentElement;
                    try {
                        n = t.getBoundingClientRect()
                    } catch (t) {
                        n = {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    var a = n.left - (s.clientLeft || r.clientLeft || 0),
                        t = n.top - (s.clientTop || r.clientTop || 0);
                    return e || (a += (i = i.defaultView).pageXOffset || s.scrollLeft || r.scrollLeft, t += i.pageYOffset || s.scrollTop || r.scrollTop), new b(a, t, n.width, n.height)
                },
                getViewportBounds: function (t) {
                    var e = t.ownerDocument,
                        t = e.defaultView,
                        e = e.documentElement;
                    return new b(0, 0, t.innerWidth || e.clientWidth, t.innerHeight || e.clientHeight)
                },
                getOffset: function (t, e) {
                    return P.getBounds(t, e).getPoint()
                },
                getSize: function (t) {
                    return P.getBounds(t, !0).getSize()
                },
                isInvisible: function (t) {
                    return P.getSize(t).equals(new O(0, 0))
                },
                isInView: function (t) {
                    return !P.isInvisible(t) && P.getViewportBounds(t).intersects(P.getBounds(t, !0))
                },
                isInserted: function (t) {
                    return A.body.contains(t)
                },
                getPrefixed: function (t, e) {
                    return t && r(t, e)
                },
                setPrefixed: function (t, e, n) {
                    if ("object" == typeof e)
                        for (var i in e) r(t, i, !0, e[i]);
                    else r(t, e, !0, n)
                }
            }
        },
        N = {
            add: function (t, e) {
                if (t)
                    for (var n in e)
                        for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) {
                            var o = r[s];
                            t.addEventListener(o, i, t === A && ("touchstart" === o || "touchmove" === o) && {
                                passive: !1
                            })
                        }
            },
            remove: function (t, e) {
                if (t)
                    for (var n in e)
                        for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.removeEventListener(r[s], i, !1)
            },
            getPoint: function (t) {
                t = t.targetTouches ? (t.targetTouches.length ? t.targetTouches : t.changedTouches)[0] : t;
                return new E(t.pageX || t.clientX + A.documentElement.scrollLeft, t.pageY || t.clientY + A.documentElement.scrollTop)
            },
            getTarget: function (t) {
                return t.target || t.srcElement
            },
            getRelatedTarget: function (t) {
                return t.relatedTarget || t.toElement
            },
            getOffset: function (t, e) {
                return N.getPoint(t).subtract(P.getOffset(e || N.getTarget(t)))
            }
        };
    N.requestAnimationFrame = new function () {
        var e, i = P.getPrefixed(M, "requestAnimationFrame"),
            r = !1,
            s = [];

        function a() {
            var t = s;
            s = [];
            for (var e = 0, n = t.length; e < n; e++) t[e]();
            (r = i && s.length) && i(a)
        }
        return function (t) {
            s.push(t), i ? r || (i(a), r = !0) : e = e || setInterval(a, 1e3 / 60)
        }
    };
    var B, F, G, J, X, K, Q, Y = R.extend(t, {
            _class: "View",
            initialize: function t(e, n) {
                function i(t) {
                    return n[t] || parseInt(n.getAttribute(t), 10)
                }

                function r() {
                    var t = P.getSize(n);
                    return t.isNaN() || t.isZero() ? new O(i("width"), i("height")) : t
                }
                var s, a, o, h, u;
                M && n ? (this._id = n.getAttribute("id"), null == this._id && n.setAttribute("id", this._id = "paper-view-" + t._id++), N.add(n, this._viewEvents), P.setPrefixed(n.style, {
                    userDrag: u = "none",
                    userSelect: u,
                    touchCallout: u,
                    contentZooming: u,
                    tapHighlightColor: "rgba(0,0,0,0)"
                }), l.hasAttribute(n, "resize") && N.add(M, (a = this)._windowEvents = {
                    resize: function () {
                        a.setViewSize(r())
                    }
                }), s = r(), l.hasAttribute(n, "stats") && "undefined" != typeof Stats && (this._stats = new Stats, h = (o = this._stats.domElement).style, u = P.getOffset(n), h.position = "absolute", h.left = u.x + "px", h.top = u.y + "px", A.body.appendChild(o))) : (s = new O(n), n = null), this._project = e, this._scope = e._scope, this._element = n, this._pixelRatio || (this._pixelRatio = M && M.devicePixelRatio || 1), this._setElementSize(s.width, s.height), this._viewSize = s, t._views.push(this), ((t._viewsById[this._id] = this)._matrix = new z)._owner = this, t._focused || (t._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = {
                    native: {},
                    virtual: {}
                }, this._autoUpdate = !Bt.agent.node, this._needsUpdate = !1
            },
            remove: function () {
                if (!this._project) return !1;
                Y._focused === this && (Y._focused = null), Y._views.splice(Y._views.indexOf(this), 1), delete Y._viewsById[this._id];
                var t = this._project;
                return t._view === this && (t._view = null), N.remove(this._element, this._viewEvents), N.remove(M, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0
            },
            _events: R.each(V._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), function (t) {
                this[t] = {}
            }, {
                onFrame: {
                    install: function () {
                        this.play()
                    },
                    uninstall: function () {
                        this.pause()
                    }
                }
            }),
            _animate: !1,
            _time: 0,
            _count: 0,
            getAutoUpdate: function () {
                return this._autoUpdate
            },
            setAutoUpdate: function (t) {
                (this._autoUpdate = t) && this.requestUpdate()
            },
            update: function () {},
            draw: function () {
                this.update()
            },
            requestUpdate: function () {
                var e;
                this._requested || (e = this, N.requestAnimationFrame(function () {
                    var t;
                    e._requested = !1, e._animate && (e.requestUpdate(), t = e._element, P.getPrefixed(A, "hidden") && "true" !== l.getAttribute(t, "keepalive") || !P.isInView(t) || e._handleFrame()), e._autoUpdate && e.update()
                }), this._requested = !0)
            },
            play: function () {
                this._animate = !0, this.requestUpdate()
            },
            pause: function () {
                this._animate = !1
            },
            _handleFrame: function () {
                Bt = this._scope;
                var t = Date.now() / 1e3,
                    e = this._last ? t - this._last : 0;
                this._last = t, this.emit("frame", new R({
                    delta: e,
                    time: this._time += e,
                    count: this._count++
                })), this._stats && this._stats.update()
            },
            _animateItem: function (t, e) {
                var n = this._frameItems;
                e ? (n[t._id] = {
                    item: t,
                    time: 0,
                    count: 0
                }, 1 == ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete n[t._id], 0 == --this._frameItemCount && this.off("frame", this._handleFrameItems))
            },
            _handleFrameItems: function (t) {
                for (var e in this._frameItems) {
                    e = this._frameItems[e];
                    e.item.emit("frame", new R(t, {
                        time: e.time += t.delta,
                        count: e.count++
                    }))
                }
            },
            _changed: function () {
                this._project._changed(4097), this._bounds = this._decomposed = j
            },
            getElement: function () {
                return this._element
            },
            getPixelRatio: function () {
                return this._pixelRatio
            },
            getResolution: function () {
                return 72 * this._pixelRatio
            },
            getViewSize: function () {
                var t = this._viewSize;
                return new n(t.width, t.height, this, "setViewSize")
            },
            setViewSize: function () {
                var t = O.read(arguments),
                    e = t.subtract(this._viewSize);
                e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", {
                    size: t,
                    delta: e
                }), this._autoUpdate && this.update())
            },
            _setElementSize: function (t, e) {
                var n = this._element;
                n && (n.width !== t && (n.width = t), n.height !== e && (n.height = e))
            },
            getBounds: function () {
                return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new b(new E, this._viewSize))), this._bounds
            },
            getSize: function () {
                return this.getBounds().getSize()
            },
            isVisible: function () {
                return P.isInView(this._element)
            },
            isInserted: function () {
                return P.isInserted(this._element)
            },
            getPixelSize: function (t) {
                var e, n, i = this._element;
                return i ? (n = i.parentNode, (i = A.createElement("div")).style.fontSize = t, n.appendChild(i), e = parseFloat(P.getStyles(i).fontSize), n.removeChild(i)) : e = parseFloat(e), e
            },
            getTextWidth: function (t, e) {
                return 0
            }
        }, R.each(["rotate", "scale", "shear", "skew"], function (n) {
            var i = "rotate" === n;
            this[n] = function () {
                var t = arguments,
                    e = (i ? R : E).read(t),
                    t = E.read(t, 0, {
                        readNull: !0
                    });
                return this.transform((new z)[n](e, t || this.getCenter(!0)))
            }
        }, {
            _decompose: function () {
                return this._decomposed || (this._decomposed = this._matrix.decompose())
            },
            translate: function () {
                var t = new z;
                return this.transform(t.translate.apply(t, arguments))
            },
            getCenter: function () {
                return this.getBounds().getCenter()
            },
            setCenter: function () {
                var t = E.read(arguments);
                this.translate(this.getCenter().subtract(t))
            },
            getZoom: function () {
                var t = this._decompose().scaling;
                return (t.x + t.y) / 2
            },
            setZoom: function (t) {
                this.transform((new z).scale(t / this.getZoom(), this.getCenter()))
            },
            getRotation: function () {
                return this._decompose().rotation
            },
            setRotation: function (t) {
                var e = this.getRotation();
                null != e && null != t && this.rotate(t - e)
            },
            getScaling: function () {
                var t = this._decompose().scaling;
                return new u(t.x, t.y, this, "setScaling")
            },
            setScaling: function () {
                var t = this.getScaling(),
                    e = E.read(arguments, 0, {
                        clone: !0,
                        readNull: !0
                    });
                t && e && this.scale(e.x / t.x, e.y / t.y)
            },
            getMatrix: function () {
                return this._matrix
            },
            setMatrix: function () {
                var t = this._matrix;
                t.set.apply(t, arguments)
            },
            transform: function (t) {
                this._matrix.append(t)
            },
            scrollBy: function () {
                this.translate(E.read(arguments).negate())
            }
        }), {
            projectToView: function () {
                return this._matrix._transformPoint(E.read(arguments))
            },
            viewToProject: function () {
                return this._matrix._inverseTransform(E.read(arguments))
            },
            getEventPoint: function (t) {
                return this.viewToProject(N.getOffset(t, this._element))
            }
        }, {
            statics: {
                _views: [],
                _viewsById: {},
                _id: 0,
                create: function (t, e) {
                    return A && "string" == typeof e && (e = A.getElementById(e)), new(M ? tt : Y)(t, e)
                }
            }
        }, new function () {
            if (M) {
                var i, r, t, e, n, _ = !1,
                    s = !1,
                    a = M.navigator;
                a.pointerEnabled || a.msPointerEnabled ? (t = "pointerdown MSPointerDown", e = "pointermove MSPointerMove", n = "pointerup pointercancel MSPointerUp MSPointerCancel") : (t = "touchstart", e = "touchmove", n = "touchend touchcancel", "ontouchstart" in M && a.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (t += " mousedown", e += " mousemove", n += " mouseup"));
                var o = {},
                    a = {
                        mouseout: function (t) {
                            var e, n, i, r = Y._focused,
                                s = N.getRelatedTarget(t);
                            !r || s && "HTML" !== s.nodeName || (n = (e = N.getOffset(t, r._element)).x, s = (i = Math.abs)(n), e.x = i(i = s - (1 << 25)) < s ? i * (n < 0 ? -1 : 1) : n, f(r, t, r.viewToProject(e)))
                        },
                        scroll: c
                    };
                o[t] = function (t) {
                    var e = Y._focused = l(t);
                    _ || (_ = !0, e._handleMouseEvent("mousedown", t))
                }, a[e] = function (t) {
                    var e, n = Y._focused;
                    s || ((e = l(t)) ? n !== e && (n && f(n, t), i = i || n, n = Y._focused = r = e) : r && r === n && (i && !i.isInserted() && (i = null), n = Y._focused = i, i = null, c())), n && f(n, t)
                }, a[t] = function () {
                    s = !0
                }, a[n] = function (t) {
                    var e = Y._focused;
                    e && _ && e._handleMouseEvent("mouseup", t), s = _ = !1
                }, N.add(A, a), N.add(M, {
                    load: c
                });
                var g, p, v, m, y, w, x, b, C = !1,
                    S = !1,
                    u = {
                        doubleclick: "click",
                        mousedrag: "mousemove"
                    },
                    k = !1,
                    h = {
                        mousedown: {
                            mousedown: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mouseup: {
                            mouseup: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mousemove: {
                            mousedrag: 1,
                            mousemove: 1,
                            mouseenter: 1,
                            mouseleave: 1
                        }
                    };
                return {
                    _viewEvents: o,
                    _handleMouseEvent: function (t, e, n) {
                        var i = this._itemEvents,
                            r = i.native[t],
                            s = "mousemove" === t,
                            a = this._scope.tool,
                            o = this;

                        function h(t) {
                            return i.virtual[t] || o.responds(t) || a && a.responds(t)
                        }
                        s && _ && h("mousedrag") && (t = "mousedrag"), n = n || this.getEventPoint(e);
                        var u = this.getBounds().contains(n),
                            l = r && u && o._project.hitTest(n, {
                                tolerance: 0,
                                fill: !0,
                                stroke: !0
                            }),
                            c = l && l.item || null,
                            f = !1,
                            l = {};
                        if (l[t.substr(5)] = !0, r && c !== m && (m && I(m, null, "mouseleave", e, n), c && I(c, null, "mouseenter", e, n), m = c), k ^ u && (I(this, null, u ? "mouseenter" : "mouseleave", e, n), f = !0), !u && !l.drag || n.equals(p) || (P(this, c, s ? t : "mousemove", e, n, p), f = !0), k = u, l.down && u || l.up && g) {
                            if (P(this, c, t, e, n, g), l.down) {
                                if (b = c === w && Date.now() - x < 300, v = w = c, !S && c) {
                                    for (var d = c; d && !d.responds("mousedrag");) d = d._parent;
                                    d && (y = c)
                                }
                                g = n
                            } else l.up && (S || c !== v || (x = Date.now(), P(this, c, b ? "doubleclick" : "click", e, n, g), b = !1), v = y = null);
                            f = !(k = !1)
                        }
                        p = n, f && a && (C = a._handleMouseEvent(t, e, n, l) || C), !1 !== e.cancelable && (C && !l.move || l.down && h("mouseup")) && e.preventDefault()
                    },
                    _handleKeyEvent: function (e, n, i, r) {
                        var s, a = this._scope,
                            t = a.tool;

                        function o(t) {
                            t.responds(e) && (Bt = a, t.emit(e, s = s || new nt(e, n, i, r)))
                        }
                        this.isVisible() && (o(this), t && t.responds(e) && o(t))
                    },
                    _countItemEvent: function (t, e) {
                        var n, i = this._itemEvents,
                            r = i.native,
                            i = i.virtual;
                        for (n in h) r[n] = (r[n] || 0) + (h[n][t] || 0) * e;
                        i[t] = (i[t] || 0) + e
                    },
                    statics: {
                        updateFocus: c,
                        _resetState: function () {
                            _ = s = C = k = !1, i = r = g = p = v = m = y = w = x = b = null
                        }
                    }
                }
            }

            function l(t) {
                t = N.getTarget(t);
                return t.getAttribute && Y._viewsById[t.getAttribute("id")]
            }

            function c() {
                var t = Y._focused;
                if (!t || !t.isVisible())
                    for (var e = 0, n = Y._views.length; e < n; e++)
                        if ((t = Y._views[e]).isVisible()) {
                            Y._focused = r = t;
                            break
                        }
            }

            function f(t, e, n) {
                t._handleMouseEvent("mousemove", e, n)
            }

            function I(t, i, e, r, s, a, n) {
                var o, h = !1;
                for (; t && t !== n && ! function t(e, n) {
                        if (e.responds(n)) {
                            if (o = o || new rt(n, r, s, i || e, a ? s.subtract(a) : null), e.emit(n, o) && (C = !0, o.prevented && (S = !0), o.stopped)) return h = !0
                        } else if (n = u[n]) return t(e, n)
                    }(t, e);) t = t._parent;
                return h
            }

            function P(t, e, n, i, r, s) {
                return t._project.removeOn(n), S = C = !1, y && I(y, null, n, i, r, s) || e && e !== y && !e.isDescendant(y) && I(e, null, "mousedrag" === n ? "mousemove" : n, i, r, s, y) || I(t, y || e || t, n, i, r, s)
            }
        }),
        tt = Y.extend({
            _class: "CanvasView",
            initialize: function (t, e) {
                if (!(e instanceof M.HTMLCanvasElement)) {
                    var n = O.read(arguments, 1);
                    if (n.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + R.slice(arguments, 1));
                    e = ut.getCanvas(n)
                }
                var i = this._context = e.getContext("2d");
                i.save(), this._pixelRatio = 1, /^off|false$/.test(l.getAttribute(e, "hidpi")) || (n = M.devicePixelRatio || 1, i = P.getPrefixed(i, "backingStorePixelRatio") || 1, this._pixelRatio = n / i), Y.call(this, t, e), this._needsUpdate = !0
            },
            remove: function t() {
                return this._context.restore(), t.base.call(this)
            },
            _setElementSize: function t(e, n) {
                var i, r, s = this._pixelRatio;
                t.base.call(this, e * s, n * s), 1 !== s && (r = this._element, i = this._context, l.hasAttribute(r, "resize") || ((r = r.style).width = e + "px", r.height = n + "px"), i.restore(), i.save(), i.scale(s, s))
            },
            getContext: function () {
                return this._context
            },
            getPixelSize: function t(e) {
                var n, i, r = Bt.agent;
                return r && r.firefox ? n = t.base.call(this, e) : (r = (i = this._context).font, i.font = e + " serif", n = parseFloat(i.font), i.font = r), n
            },
            getTextWidth: function (t, e) {
                var n = this._context,
                    i = n.font,
                    r = 0;
                n.font = t;
                for (var s = 0, a = e.length; s < a; s++) r = Math.max(r, n.measureText(e[s]).width);
                return n.font = i, r
            },
            update: function () {
                if (!this._needsUpdate) return !1;
                var t = this._project,
                    e = this._context,
                    n = this._viewSize;
                return e.clearRect(0, 0, n.width + 1, n.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), !(this._needsUpdate = !1)
            }
        }),
        et = R.extend({
            _class: "Event",
            initialize: function (t) {
                this.event = t, this.type = t && t.type
            },
            prevented: !1,
            stopped: !1,
            preventDefault: function () {
                this.prevented = !0, this.event.preventDefault()
            },
            stopPropagation: function () {
                this.stopped = !0, this.event.stopPropagation()
            },
            stop: function () {
                this.stopPropagation(), this.preventDefault()
            },
            getTimeStamp: function () {
                return this.event.timeStamp
            },
            getModifiers: function () {
                return it.modifiers
            }
        }),
        nt = et.extend({
            _class: "KeyEvent",
            initialize: function (t, e, n, i) {
                this.type = t, this.event = e, this.key = n, this.character = i
            },
            toString: function () {
                return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }"
            }
        }),
        it = new function () {
            var h, i, n = {
                    "\t": "tab",
                    " ": "space",
                    "\b": "backspace",
                    "\x7f": "delete",
                    Spacebar: "space",
                    Del: "delete",
                    Win: "meta",
                    Esc: "escape"
                },
                r = {
                    tab: "\t",
                    space: " ",
                    enter: "\r"
                },
                u = {},
                l = {},
                c = new R({
                    shift: !1,
                    control: !1,
                    alt: !1,
                    meta: !1,
                    capsLock: !1,
                    space: !1
                }).inject({
                    option: {
                        get: function () {
                            return this.alt
                        }
                    },
                    command: {
                        get: function () {
                            var t = Bt && Bt.agent;
                            return t && t.mac ? this.meta : this.control
                        }
                    }
                });

            function s(t) {
                var e = t.key || t.keyIdentifier,
                    e = /^U\+/.test(e) ? String.fromCharCode(parseInt(e.substr(2), 16)) : /^Arrow[A-Z]/.test(e) ? e.substr(5) : "Unidentified" === e || e === j ? String.fromCharCode(t.keyCode) : e;
                return n[e] || (1 < e.length ? R.hyphenate(e) : e.toLowerCase())
            }

            function f(t, e, n, i) {
                var r, s = Y._focused;
                if ((u[e] = t) ? l[e] = n : delete l[e], 1 < e.length && (r = R.camelize(e)) in c) {
                    c[r] = t;
                    var a = Bt && Bt.agent;
                    if ("meta" === r && a && a.mac)
                        if (t) h = {};
                        else {
                            for (var o in h) o in l && f(!1, o, h[o], i);
                            h = null
                        }
                } else t && h && (h[e] = n);
                s && s._handleKeyEvent(t ? "keydown" : "keyup", i, e, n)
            }
            return N.add(A, {
                keydown: function (t) {
                    var e = s(t),
                        n = Bt && Bt.agent;
                    1 < e.length || n && n.chrome && (t.altKey || n.mac && t.metaKey || !n.mac && t.ctrlKey) ? f(!0, e, r[e] || (1 < e.length ? "" : e), t) : i = e
                },
                keypress: function (t) {
                    var e, n;
                    i && (e = s(t), n = 32 <= (n = t.charCode) ? String.fromCharCode(n) : 1 < e.length ? "" : e, f(!0, e = e !== i ? n.toLowerCase() : e, n, t), i = null)
                },
                keyup: function (t) {
                    var e = s(t);
                    e in l && f(!1, e, l[e], t)
                }
            }), N.add(M, {
                blur: function (t) {
                    for (var e in l) f(!1, e, l[e], t)
                }
            }), {
                modifiers: c,
                isDown: function (t) {
                    return !!u[t]
                }
            }
        },
        rt = et.extend({
            _class: "MouseEvent",
            initialize: function (t, e, n, i, r) {
                this.type = t, this.event = e, this.point = n, this.target = i, this.delta = r
            },
            toString: function () {
                return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }"
            }
        }),
        st = et.extend({
            _class: "ToolEvent",
            _item: null,
            initialize: function (t, e, n) {
                this.tool = t, this.type = e, this.event = n
            },
            _choosePoint: function (t, e) {
                return t || (e ? e.clone() : null)
            },
            getPoint: function () {
                return this._choosePoint(this._point, this.tool._point)
            },
            setPoint: function (t) {
                this._point = t
            },
            getLastPoint: function () {
                return this._choosePoint(this._lastPoint, this.tool._lastPoint)
            },
            setLastPoint: function (t) {
                this._lastPoint = t
            },
            getDownPoint: function () {
                return this._choosePoint(this._downPoint, this.tool._downPoint)
            },
            setDownPoint: function (t) {
                this._downPoint = t
            },
            getMiddlePoint: function () {
                return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint
            },
            setMiddlePoint: function (t) {
                this._middlePoint = t
            },
            getDelta: function () {
                return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta
            },
            setDelta: function (t) {
                this._delta = t
            },
            getCount: function () {
                return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"]
            },
            setCount: function (t) {
                this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t
            },
            getItem: function () {
                if (!this._item) {
                    var t = this.tool._scope.project.hitTest(this.getPoint());
                    if (t) {
                        for (var e = t.item, n = e._parent;
                            /^(Group|CompoundPath)$/.test(n._class);) n = (e = n)._parent;
                        this._item = e
                    }
                }
                return this._item
            },
            setItem: function (t) {
                this._item = t
            },
            toString: function () {
                return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }"
            }
        }),
        at = e.extend({
            _class: "Tool",
            _list: "tools",
            _reference: "tool",
            _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"],
            initialize: function (t) {
                e.call(this), this._moveCount = -1, this._downCount = -1, this.set(t)
            },
            getMinDistance: function () {
                return this._minDistance
            },
            setMinDistance: function (t) {
                null != (this._minDistance = t) && null != this._maxDistance && t > this._maxDistance && (this._maxDistance = t)
            },
            getMaxDistance: function () {
                return this._maxDistance
            },
            setMaxDistance: function (t) {
                this._maxDistance = t, null != this._minDistance && null != t && t < this._minDistance && (this._minDistance = t)
            },
            getFixedDistance: function () {
                return this._minDistance == this._maxDistance ? this._minDistance : null
            },
            setFixedDistance: function (t) {
                this._minDistance = this._maxDistance = t
            },
            _handleMouseEvent: function (t, e, a, o) {
                Bt = this._scope, o.drag && !this.responds(t) && (t = "mousemove");
                var h = o.move || o.drag,
                    n = this.responds(t),
                    i = this.minDistance,
                    r = this.maxDistance,
                    s = !1,
                    u = this;

                function l(t, e) {
                    var n = a,
                        i = h ? u._point : u._downPoint || n;
                    if (h) {
                        if (0 <= u._moveCount && n.equals(i)) return;
                        if (i && (null != t || null != e)) {
                            var r = n.subtract(i),
                                s = r.getLength();
                            if (s < (t || 0)) return;
                            e && (n = i.add(r.normalize(Math.min(s, e))))
                        }
                        u._moveCount++
                    }
                    return u._point = n, u._lastPoint = i || n, o.down && (u._moveCount = -1, u._downPoint = n, u._downCount++), 1
                }

                function c() {
                    n && (s = u.emit(t, new st(u, t, e)) || s)
                }
                if (o.down) l(), c();
                else if (o.up) l(null, r), c();
                else if (n)
                    for (; l(i, r);) c();
                return s
            }
        }),
        ot = R.extend(t, {
            _class: "Tween",
            statics: {
                easings: new R({
                    linear: function (t) {
                        return t
                    },
                    easeInQuad: function (t) {
                        return t * t
                    },
                    easeOutQuad: function (t) {
                        return t * (2 - t)
                    },
                    easeInOutQuad: function (t) {
                        return t < .5 ? 2 * t * t : 2 * (2 - t) * t - 1
                    },
                    easeInCubic: function (t) {
                        return t * t * t
                    },
                    easeOutCubic: function (t) {
                        return --t * t * t + 1
                    },
                    easeInOutCubic: function (t) {
                        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                    },
                    easeInQuart: function (t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function (t) {
                        return 1 - --t * t * t * t
                    },
                    easeInOutQuart: function (t) {
                        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
                    },
                    easeInQuint: function (t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function (t) {
                        return 1 + --t * t * t * t * t
                    },
                    easeInOutQuint: function (t) {
                        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
                    }
                })
            },
            initialize: function t(e, n, i, r, s, a) {
                this.object = e;
                var o = typeof s,
                    e = "function" == o;
                this.type = e ? o : "string" == o ? s : "linear", this.easing = e ? s : t.easings[this.type], this.duration = r, this.running = !1, this._then = null, this._startTime = null;
                r = n || i;
                this._keys = r ? Object.keys(r) : [], this._parsedKeys = this._parseKeys(this._keys), this._from = r && this._getState(n), this._to = r && this._getState(i), !1 !== a && this.start()
            },
            then: function (t) {
                return this._then = t, this
            },
            start: function () {
                return this._startTime = null, this.running = !0, this
            },
            stop: function () {
                return this.running = !1, this
            },
            update: function (e) {
                if (this.running) {
                    1 <= e && (this.running = !(e = 1));

                    function t(t) {
                        return "function" == typeof t ? t(n, e) : t
                    }
                    for (var n = this.easing(e), i = this._keys, r = 0, s = i && i.length; r < s; r++) {
                        var a = i[r],
                            o = t(this._from[a]),
                            h = t(this._to[a]),
                            o = o && h && o.__add && h.__add ? h.__subtract(o).__multiply(n).__add(o) : (h - o) * n + o;
                        this._setProperty(this._parsedKeys[a], o)
                    }
                    this.responds("update") && this.emit("update", new R({
                        progress: e,
                        factor: n
                    })), !this.running && this._then && this._then(this.object)
                }
                return this
            },
            _events: {
                onUpdate: {}
            },
            _handleFrame: function (t) {
                var e = this._startTime,
                    n = e ? (t - e) / this.duration : 0;
                e || (this._startTime = t), this.update(n)
            },
            _getState: function (t) {
                for (var e = this._keys, n = {}, i = 0, r = e.length; i < r; i++) {
                    var s, a = e[i],
                        o = this._parsedKeys[a],
                        h = this._getProperty(o);
                    t ? (s = this._resolveValue(h, t[a]), this._setProperty(o, s), s = (s = this._getProperty(o)) && s.clone ? s.clone() : s, this._setProperty(o, h)) : s = h && h.clone ? h.clone() : h, n[a] = s
                }
                return n
            },
            _resolveValue: function (t, e) {
                if (e) {
                    if (Array.isArray(e) && 2 === e.length) {
                        var n = e[0];
                        return n && n.match && n.match(/^[+\-\*\/]=/) ? this._calculate(t, n[0], e[1]) : e
                    }
                    if ("string" == typeof e) {
                        n = e.match(/^[+\-*/]=(.*)/);
                        if (n) {
                            n = JSON.parse(n[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
                            return this._calculate(t, e[0], n)
                        }
                    }
                }
                return e
            },
            _calculate: function (t, e, n) {
                return Bt.PaperScript.calculateBinary(t, e, n)
            },
            _parseKeys: function (t) {
                for (var e = {}, n = 0, i = t.length; n < i; n++) {
                    var r = t[n],
                        s = r.replace(/\.([^.]*)/g, "/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
                    e[r] = s.split("/")
                }
                return e
            },
            _getProperty: function (t, e) {
                for (var n = this.object, i = 0, r = t.length - (e || 0); i < r && n; i++) n = n[t[i]];
                return n
            },
            _setProperty: function (t, e) {
                var n = this._getProperty(t, 1);
                n && (n[t[t.length - 1]] = e)
            }
        }),
        ht = function (n) {
            var i = new w.XMLHttpRequest;
            return i.open((n.method || "get").toUpperCase(), n.url, R.pick(n.async, !0)), n.mimeType && i.overrideMimeType(n.mimeType), i.onload = function () {
                var t = i.status;
                0 === t || 200 === t ? n.onLoad && n.onLoad.call(i, i.responseText) : i.onerror()
            }, i.onerror = function () {
                var t = i.status,
                    e = 'Could not load "' + n.url + '" (Status: ' + t + ")";
                if (!n.onError) throw new Error(e);
                n.onError(e, t)
            }, i.send(null)
        },
        ut = R.exports.CanvasProvider = {
            canvases: [],
            getCanvas: function (t, e) {
                if (!M) return null;
                var n, i = !0;
                "object" == typeof t && (e = t.height, t = t.width), this.canvases.length ? n = this.canvases.pop() : (n = A.createElement("canvas"), i = !1);
                var r = n.getContext("2d");
                if (!r) throw new Error("Canvas " + n + " is unable to provide a 2D context.");
                return n.width === t && n.height === e ? i && r.clearRect(0, 0, t + 1, e + 1) : (n.width = t, n.height = e), r.save(), n
            },
            getContext: function (t, e) {
                e = this.getCanvas(t, e);
                return e ? e.getContext("2d") : null
            },
            release: function (t) {
                t = t && t.canvas ? t.canvas : t;
                t && t.getContext && (t.getContext("2d").restore(), this.canvases.push(t))
            }
        },
        lt = new function () {
            var _, g, p, v, m, y, w, x, b, C, S, a = Math.min,
                o = Math.max,
                t = Math.abs;

            function h(t, e, n) {
                return .2989 * t + .587 * e + .114 * n
            }

            function e(t, e, n, i) {
                var r, s = i - h(t, e, n),
                    i = h(b = t + s, C = e + s, S = n + s),
                    n = a(b, C, S),
                    s = o(b, C, S);
                n < 0 && (b = i + (b - i) * i / (r = i - n), C = i + (C - i) * i / r, S = i + (S - i) * i / r), 255 < s && (b = i + (b - i) * (r = 255 - i) / (s = s - i), C = i + (C - i) * r / s, S = i + (S - i) * r / s)
            }

            function n(t, e, n) {
                return o(t, e, n) - a(t, e, n)
            }

            function i(t, e, n, i) {
                var r = [t, e, n],
                    s = o(t, e, n),
                    n = a(t, e, n),
                    e = 0 === a(n = n === t ? 0 : n === e ? 1 : 2, s = s === t ? 0 : s === e ? 1 : 2) ? 1 === o(n, s) ? 2 : 1 : 0;
                r[s] > r[n] ? (r[e] = (r[e] - r[n]) * i / (r[s] - r[n]), r[s] = i) : r[e] = r[s] = 0, r[n] = 0, b = r[0], C = r[1], S = r[2]
            }
            var k = {
                    multiply: function () {
                        b = m * _ / 255, C = y * g / 255, S = w * p / 255
                    },
                    screen: function () {
                        b = m + _ - m * _ / 255, C = y + g - y * g / 255, S = w + p - w * p / 255
                    },
                    overlay: function () {
                        b = m < 128 ? 2 * m * _ / 255 : 255 - 2 * (255 - m) * (255 - _) / 255, C = y < 128 ? 2 * y * g / 255 : 255 - 2 * (255 - y) * (255 - g) / 255, S = w < 128 ? 2 * w * p / 255 : 255 - 2 * (255 - w) * (255 - p) / 255
                    },
                    "soft-light": function () {
                        var t = _ * m / 255;
                        b = t + m * (255 - (255 - m) * (255 - _) / 255 - t) / 255, C = (t = g * y / 255) + y * (255 - (255 - y) * (255 - g) / 255 - t) / 255, S = (t = p * w / 255) + w * (255 - (255 - w) * (255 - p) / 255 - t) / 255
                    },
                    "hard-light": function () {
                        b = _ < 128 ? 2 * _ * m / 255 : 255 - 2 * (255 - _) * (255 - m) / 255, C = g < 128 ? 2 * g * y / 255 : 255 - 2 * (255 - g) * (255 - y) / 255, S = p < 128 ? 2 * p * w / 255 : 255 - 2 * (255 - p) * (255 - w) / 255
                    },
                    "color-dodge": function () {
                        b = 0 === m ? 0 : 255 === _ ? 255 : a(255, 255 * m / (255 - _)), C = 0 === y ? 0 : 255 === g ? 255 : a(255, 255 * y / (255 - g)), S = 0 === w ? 0 : 255 === p ? 255 : a(255, 255 * w / (255 - p))
                    },
                    "color-burn": function () {
                        b = 255 === m ? 255 : 0 === _ ? 0 : o(0, 255 - 255 * (255 - m) / _), C = 255 === y ? 255 : 0 === g ? 0 : o(0, 255 - 255 * (255 - y) / g), S = 255 === w ? 255 : 0 === p ? 0 : o(0, 255 - 255 * (255 - w) / p)
                    },
                    darken: function () {
                        b = m < _ ? m : _, C = y < g ? y : g, S = w < p ? w : p
                    },
                    lighten: function () {
                        b = _ < m ? m : _, C = g < y ? y : g, S = p < w ? w : p
                    },
                    difference: function () {
                        (b = m - _) < 0 && (b = -b), (C = y - g) < 0 && (C = -C), (S = w - p) < 0 && (S = -S)
                    },
                    exclusion: function () {
                        b = m + _ * (255 - m - m) / 255, C = y + g * (255 - y - y) / 255, S = w + p * (255 - w - w) / 255
                    },
                    hue: function () {
                        i(_, g, p, n(m, y, w)), e(b, C, S, h(m, y, w))
                    },
                    saturation: function () {
                        i(m, y, w, n(_, g, p)), e(b, C, S, h(m, y, w))
                    },
                    luminosity: function () {
                        e(m, y, w, h(_, g, p))
                    },
                    color: function () {
                        e(_, g, p, h(m, y, w))
                    },
                    add: function () {
                        b = a(m + _, 255), C = a(y + g, 255), S = a(w + p, 255)
                    },
                    subtract: function () {
                        b = o(m - _, 0), C = o(y - g, 0), S = o(w - p, 0)
                    },
                    average: function () {
                        b = (m + _) / 2, C = (y + g) / 2, S = (w + p) / 2
                    },
                    negation: function () {
                        b = 255 - t(255 - _ - m), C = 255 - t(255 - g - y), S = 255 - t(255 - p - w)
                    }
                },
                I = this.nativeModes = R.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function (t) {
                    this[t] = !0
                }, {}),
                r = ut.getContext(1, 1);
            r && (R.each(k, function (t, e) {
                var n = "darken" === e,
                    i = !1;
                r.save();
                try {
                    r.fillStyle = n ? "#300" : "#a00", r.fillRect(0, 0, 1, 1), r.globalCompositeOperation = e, r.globalCompositeOperation === e && (r.fillStyle = n ? "#a00" : "#300", r.fillRect(0, 0, 1, 1), i = r.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51)
                } catch (t) {}
                r.restore(), I[e] = i
            }), ut.release(r)), this.process = function (t, e, n, i, r) {
                var s = e.canvas,
                    a = "normal" === t;
                if (a || I[t]) n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.globalAlpha = i, a || (n.globalCompositeOperation = t), n.drawImage(s, r.x, r.y), n.restore();
                else {
                    var o = k[t];
                    if (o) {
                        for (var t = n.getImageData(r.x, r.y, s.width, s.height), h = t.data, u = e.getImageData(0, 0, s.width, s.height).data, l = 0, c = h.length; l < c; l += 4) {
                            _ = u[l], m = h[l], g = u[l + 1], y = h[l + 1], p = u[l + 2], w = h[l + 2], v = u[l + 3], x = h[l + 3], o();
                            var f = v * i / 255,
                                d = 1 - f;
                            h[l] = f * b + d * m, h[l + 1] = f * C + d * y, h[l + 2] = f * S + d * w, h[l + 3] = v * i + d * x
                        }
                        n.putImageData(t, r.x, r.y)
                    }
                }
            }
        },
        ct = new function () {
            var i = "http://www.w3.org/2000/svg",
                t = "http://www.w3.org/2000/xmlns",
                e = "http://www.w3.org/1999/xlink",
                a = {
                    href: e,
                    xlink: t,
                    xmlns: t + "/",
                    "xmlns:xlink": t + "/"
                };

            function r(t, e, n) {
                for (var i in e) {
                    var r = e[i],
                        s = a[i];
                    "number" == typeof r && n && (r = n.number(r)), s ? t.setAttributeNS(s, i, r) : t.setAttribute(i, r)
                }
                return t
            }
            return {
                svg: i,
                xmlns: t,
                xlink: e,
                create: function (t, e, n) {
                    return r(A.createElementNS(i, t), e, n)
                },
                get: function (t, e) {
                    var n = a[e];
                    return "null" === (e = n ? t.getAttributeNS(n, e) : t.getAttribute(e)) ? null : e
                },
                set: r
            }
        },
        ft = R.each({
            fillColor: ["fill", "color"],
            fillRule: ["fill-rule", "string"],
            strokeColor: ["stroke", "color"],
            strokeWidth: ["stroke-width", "number"],
            strokeCap: ["stroke-linecap", "string"],
            strokeJoin: ["stroke-linejoin", "string"],
            strokeScaling: ["vector-effect", "lookup", {
                true: "none",
                false: "non-scaling-stroke"
            }, function (t, e) {
                return !e && (t instanceof _ || t instanceof d || t instanceof v)
            }],
            miterLimit: ["stroke-miterlimit", "number"],
            dashArray: ["stroke-dasharray", "array"],
            dashOffset: ["stroke-dashoffset", "number"],
            fontFamily: ["font-family", "string"],
            fontWeight: ["font-weight", "string"],
            fontSize: ["font-size", "number"],
            justification: ["text-anchor", "lookup", {
                left: "start",
                center: "middle",
                right: "end"
            }],
            opacity: ["opacity", "number"],
            blendMode: ["mix-blend-mode", "style"]
        }, function (t, e) {
            var n = R.capitalize(e),
                i = t[2];
            this[e] = {
                type: t[1],
                property: e,
                attribute: t[0],
                toSVG: i,
                fromSVG: i && R.each(i, function (t, e) {
                    this[t] = e
                }, {}),
                exportFilter: t[3],
                get: "get" + n,
                set: "set" + n
            }
        }, {});

    function dt(t, e, n) {
        var i, r, s = new R,
            a = t.getTranslation();
        return e && (t.isInvertible() ? (i = (t = t._shiftless())._inverseTransform(a), a = null) : i = new E, s[n ? "cx" : "x"] = i.x, s[n ? "cy" : "y"] = i.y), t.isIdentity() || ((r = t.decompose()) ? (e = [], n = r.rotation, i = r.scaling, r = r.skewing, a && !a.isZero() && e.push("translate(" + B.point(a) + ")"), n && e.push("rotate(" + B.number(n) + ")"), q.isZero(i.x - 1) && q.isZero(i.y - 1) || e.push("scale(" + B.point(i) + ")"), r.x && e.push("skewX(" + B.number(r.x) + ")"), r.y && e.push("skewY(" + B.number(r.y) + ")"), s.transform = e.join(" ")) : s.transform = "matrix(" + t.getValues().join(",") + ")"), s
    }

    function _t(t, e) {
        for (var n = dt(t._matrix), i = t._children, r = ct.create("g", n, B), s = 0, a = i.length; s < a; s++) {
            var o, h = i[s],
                u = wt(h, e);
            u && (h.isClipMask() ? ((o = ct.create("clipPath")).appendChild(u), mt(h, o, "clip"), ct.set(r, {
                "clip-path": "url(#" + o.id + ")"
            })) : r.appendChild(u))
        }
        return r
    }

    function gt(t) {
        var e, n = t._type,
            i = t._radius,
            r = dt(t._matrix, !0, "rectangle" !== n);
        return "rectangle" === n && (n = "rect", t = (e = t._size).width, e = e.height, r.x -= t / 2, r.y -= e / 2, r.width = t, r.height = e, i.isZero() && (i = null)), i && ("circle" === n ? r.r = i : (r.rx = i.width, r.ry = i.height)), ct.create(n, r, B)
    }

    function pt(r, t, e) {
        var s = {},
            a = !e && r.getParent(),
            o = [];
        return null != r._name && (s.id = r._name), R.each(ft, function (t) {
            var e = t.get,
                n = t.type,
                i = r[e]();
            (t.exportFilter ? !t.exportFilter(r, i) : a && R.equals(a[e](), i)) || ("color" !== n || null == i || (e = i.getAlpha()) < 1 && (s[t.attribute + "-opacity"] = e), "style" === n ? o.push(t.attribute + ": " + i) : s[t.attribute] = null == i ? "none" : "color" === n ? i.gradient ? function (t) {
                if (!(o = vt(t, "color"))) {
                    var e, n, i = t.getGradient(),
                        r = i._radial,
                        s = t.getOrigin(),
                        a = t.getDestination();
                    r ? (e = {
                        cx: s.x,
                        cy: s.y,
                        r: s.getDistance(a)
                    }, (n = t.getHighlight()) && (e.fx = n.x, e.fy = n.y)) : e = {
                        x1: s.x,
                        y1: s.y,
                        x2: a.x,
                        y2: a.y
                    }, e.gradientUnits = "userSpaceOnUse";
                    for (var o = ct.create((r ? "radial" : "linear") + "Gradient", e, B), h = i._stops, u = 0, l = h.length; u < l; u++) {
                        var c = h[u],
                            f = c._color,
                            d = f.getAlpha(),
                            c = c._offset;
                        e = {
                            offset: null == c ? u / (l - 1) : c
                        }, f && (e["stop-color"] = f.toCSS(!0)), d < 1 && (e["stop-opacity"] = d), o.appendChild(ct.create("stop", e, B))
                    }
                    mt(t, o, "color")
                }
                return "url(#" + o.id + ")"
            }(i) : i.toCSS(!0) : "array" === n ? i.join(",") : "lookup" === n ? t.toSVG[i] : i)
        }), o.length && (s.style = o.join(";")), 1 === s.opacity && delete s.opacity, r._visible || (s.visibility = "hidden"), ct.set(t, s, B)
    }

    function vt(t, e) {
        return F = F || {
            ids: {},
            svgs: {}
        }, t && F.svgs[e + "-" + (t._id || t.__id || (t.__id = o.get("svg")))]
    }

    function mt(t, e, n) {
        F || vt();
        var i = F.ids[n] = (F.ids[n] || 0) + 1;
        e.id = n + "-" + i, F.svgs[n + "-" + (t._id || t.__id)] = e
    }

    function yt(t, e) {
        var n = t,
            i = null;
        if (F) {
            for (var r in n = "svg" === t.nodeName.toLowerCase() && t, F.svgs) i || (n || (n = ct.create("svg")).appendChild(t), i = n.insertBefore(ct.create("defs"), n.firstChild)), i.appendChild(F.svgs[r]);
            F = null
        }
        return e.asString ? (new w.XMLSerializer).serializeToString(n) : n
    }

    function wt(t, e, n) {
        var i = G[t._class],
            r = i && i(t, e);
        return r && ((i = e.onExport) && (r = i(t, r, e) || r), (e = JSON.stringify(t._data)) && "{}" !== e && "null" !== e && r.setAttribute("data-paper-data", e)), r && pt(t, r, n)
    }

    function xt(t) {
        return B = new x((t = t || {}).precision), t
    }

    function bt(t, e, n, i, r, s) {
        s = ct.get(t, e) || s, n = null == s ? i ? null : n ? "" : 0 : n ? s : parseFloat(s);
        return /%\s*$/.test(s) ? n / 100 * (r ? 1 : J[/x|^width/.test(e) ? "width" : "height"]) : n
    }

    function Ct(t, e, n, i, r, s, a) {
        return e = bt(t, e || "x", !1, i, r, s), n = bt(t, n || "y", !1, i, r, a), !i || null != e && null != n ? new E(e, n) : null
    }

    function St(t, e, n, i, r) {
        return e = bt(t, e || "width", !1, i, r), n = bt(t, n || "height", !1, i, r), !i || null != e && null != n ? new O(e, n) : null
    }

    function kt(t, e, n) {
        return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? Et(t) || t : "lookup" === e ? n[t] : t
    }

    function It(t, e, n, i) {
        var r = t.childNodes,
            s = "clippath" === e,
            a = "defs" === e,
            o = new g,
            h = o._project,
            e = h._currentStyle,
            u = [];
        if (s || a || (o = zt(o, t, i), h._currentStyle = o._style.clone()), i)
            for (var l = t.querySelectorAll("defs"), c = 0, f = l.length; c < f; c++) Lt(l[c], n, !1);
        for (c = 0, f = r.length; c < f; c++) {
            var d, _ = r[c];
            1 !== _.nodeType || /^defs$/i.test(_.nodeName) || !(d = Lt(_, n, !1)) || d instanceof p || u.push(d)
        }
        return o.addChildren(u), s && (o = zt(o.reduce(), t, i)), h._currentStyle = e, (s || a) && (o.remove(), o = null), o
    }

    function Pt(t, e) {
        for (var n = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), i = [], r = 0, s = n.length; r < s; r += 2) i.push(new E(parseFloat(n[r]), parseFloat(n[r + 1])));
        t = new W(i);
        return "polygon" === e && t.closePath(), t
    }

    function Mt(t, e) {
        var n, i = (bt(t, "href", !0) || "").substring(1),
            e = "radialgradient" === e;
        if (i)(n = X[i].getGradient())._radial ^ e && ((n = n.clone())._radial = e);
        else {
            for (var r = t.childNodes, s = [], a = 0, o = r.length; a < o; a++) {
                var h = r[a];
                1 === h.nodeType && s.push(zt(new k, h))
            }
            n = new S(s, e)
        }
        var u, l, c, i = "userSpaceOnUse" !== bt(t, "gradientUnits", !0);
        return e ? (l = (u = Ct(t, "cx", "cy", !1, i, "50%", "50%")).add(bt(t, "r", !1, !1, i, "50%"), 0), c = Ct(t, "fx", "fy", !0, i)) : (u = Ct(t, "x1", "y1", !1, i, "0%", "0%"), l = Ct(t, "x2", "y2", !1, i, "100%", "0%")), zt(new C(n, u, l, c), t)._scaleToBounds = i, null
    }

    function At(t, e, n, i) {
        if (t.transform) {
            for (var r = (i.getAttribute(n) || "").split(/\)\s*/g), s = new z, a = 0, o = r.length; a < o; a++) {
                var h = r[a];
                if (!h) break;
                for (var u = h.split(/\(\s*/), h = u[0], l = u[1].split(/[\s,]+/g), c = 0, f = l.length; c < f; c++) l[c] = parseFloat(l[c]);
                switch (h) {
                    case "matrix":
                        s.append(new z(l[0], l[1], l[2], l[3], l[4], l[5]));
                        break;
                    case "rotate":
                        s.rotate(l[0], l[1] || 0, l[2] || 0);
                        break;
                    case "translate":
                        s.translate(l[0], l[1] || 0);
                        break;
                    case "scale":
                        s.scale(l);
                        break;
                    case "skewX":
                        s.skew(l[0], 0);
                        break;
                    case "skewY":
                        s.skew(0, l[0])
                }
            }
            t.transform(s)
        }
    }

    function Tt(t, e, n) {
        n = "fill-opacity" === n ? "getFillColor" : "getStrokeColor", n = t[n] && t[n]();
        n && n.setAlpha(parseFloat(e))
    }

    function Ot(t, e, n) {
        var i = t.attributes[e],
            i = i && i.value;
        return !i && t.style && (e = R.camelize(e), (i = t.style[e]) || n.node[e] === n.parent[e] || (i = n.node[e])), i ? "none" === i ? null : i : j
    }

    function zt(i, r, t) {
        var e = r.parentNode,
            s = {
                node: P.getStyles(r) || {},
                parent: !t && !/^defs$/i.test(e.tagName) && P.getStyles(e) || {}
            };
        return R.each(Q, function (t, e) {
            var n = Ot(r, e, s);
            i = n !== j && t(i, n, e, r, s) || i
        }), i
    }

    function Et(t) {
        t = t && t.match(/\((?:["'#]*)([^"')]+)/), t = t && t[1], t = t && X[M ? t.replace(M.location.href.split("#")[0] + "#", "") : t];
        return t && t._scaleToBounds && ((t = t.clone())._scaleToBounds = !0), t
    }

    function Lt(t, e, n) {
        var i, r, s, a = t.nodeName.toLowerCase(),
            o = "#document" !== a,
            h = A.body;
        n && o && (J = Bt.getView().getSize(), J = St(t, null, null, !0) || J, i = ct.create("svg", {
            style: "stroke-width: 1px; stroke-miterlimit: 10"
        }), r = t.parentNode, s = t.nextSibling, i.appendChild(t), h.appendChild(i));
        var u = Bt.settings,
            l = u.applyMatrix,
            c = u.insertItems;
        u.applyMatrix = !1, u.insertItems = !1;
        var f = K[a],
            a = f && f(t, a, e, n) || null;
        return u.insertItems = c, u.applyMatrix = l, a && (!o || a instanceof g || (a = zt(a, t, n)), u = e.onImport, o = o && t.getAttribute("data-paper-data"), u && (a = u(t, a, e) || a), e.expandShapes && a instanceof d && (a.remove(), a = a.toPath()), o && (a._data = JSON.parse(o))), i && (h.removeChild(i), r && (s ? r.insertBefore(t, s) : r.appendChild(t))), n && (X = {}, a && R.pick(e.applyMatrix, l) && a.matrix.apply(!0, !0)), a
    }

    function Nt(i, r, s) {
        if (!i) return null;
        r = "function" == typeof r ? {
            onLoad: r
        } : r || {};
        var a = Bt,
            o = null;

        function t(t) {
            try {
                var e = "object" == typeof t ? t : (new w.DOMParser).parseFromString(t.trim(), "image/svg+xml");
                if (!e.nodeName) throw e = null, new Error("Unsupported SVG source: " + i);
                Bt = a, o = Lt(e, r, !0), r && !1 === r.insert || s._insertItem(j, o);
                var n = r.onLoad;
                n && n(o, t)
            } catch (t) {
                h(t)
            }
        }

        function h(t, e) {
            var n = r.onError;
            if (!n) throw new Error(t);
            n(t, e)
        }
        if ("string" != typeof i || /^[\s\S]*</.test(i)) {
            if ("undefined" != typeof File && i instanceof File) {
                var e = new FileReader;
                return e.onload = function () {
                    t(e.result)
                }, e.onerror = function () {
                    h(e.error)
                }, e.readAsText(i)
            }
            t(i)
        } else {
            var n = A.getElementById(i);
            n ? t(n) : ht({
                url: i,
                async: !0,
                onLoad: t,
                onError: h
            })
        }
        return o
    }
    G = {
        Group: _t,
        Layer: _t,
        Raster: function (t, e) {
            var n = dt(t._matrix, !0),
                i = t.getSize(),
                r = t.getImage();
            return n.x -= i.width / 2, n.y -= i.height / 2, n.width = i.width, n.height = i.height, n.href = 0 == e.embedImages && r && r.src || t.toDataURL(), ct.create("image", n, B)
        },
        Path: function (t, e) {
            var n = e.matchShapes;
            if (n) {
                var i = t.toShape(!1);
                if (i) return gt(i)
            }
            var r = t._segments,
                s = r.length,
                a = dt(t._matrix);
            if (n && 2 <= s && !t.hasHandles())
                if (2 < s) {
                    for (var o = t._closed ? "polygon" : "polyline", h = [], u = 0; u < s; u++) h.push(B.point(r[u]._point));
                    a.points = h.join(" ")
                } else {
                    o = "line";
                    i = r[0]._point, n = r[1]._point;
                    a.set({
                        x1: i.x,
                        y1: i.y,
                        x2: n.x,
                        y2: n.y
                    })
                }
            else o = "path", a.d = t.getPathData(null, e.precision);
            return ct.create(o, a, B)
        },
        Shape: gt,
        CompoundPath: function (t, e) {
            var n = dt(t._matrix);
            return (e = t.getPathData(null, e.precision)) && (n.d = e), ct.create("path", n, B)
        },
        SymbolItem: function (t, e) {
            var n = dt(t._matrix, !0),
                i = t._definition,
                r = vt(i, "symbol"),
                s = i._item,
                t = s.getStrokeBounds();
            return r || ((r = ct.create("symbol", {
                viewBox: B.rectangle(t)
            })).appendChild(wt(s, e)), mt(i, r, "symbol")), n.href = "#" + r.id, n.x += t.x, n.y += t.y, n.width = t.width, n.height = t.height, n.overflow = "visible", ct.create("use", n, B)
        },
        PointText: function (t) {
            var e = ct.create("text", dt(t._matrix, !0), B);
            return e.textContent = t._content, e
        }
    }, V.inject({
        exportSVG: function (t) {
            return yt(wt(this, t = xt(t), !0), t)
        }
    }), i.inject({
        exportSVG: function (t) {
            t = xt(t);
            var e = this._children,
                n = this.getView(),
                i = R.pick(t.bounds, "view"),
                r = t.matrix || "view" === i && n._matrix,
                r = r && z.read([r]),
                n = "view" === i ? new b([0, 0], n.getViewSize()) : "content" === i ? V._getBounds(e, r, {
                    stroke: !0
                }).rect : b.read([i], 0, {
                    readNull: !0
                }),
                i = {
                    version: "1.1",
                    xmlns: ct.svg,
                    "xmlns:xlink": ct.xlink
                };
            n && (i.width = n.width, i.height = n.height, (n.x || 0 === n.x || n.y || 0 === n.y) && (i.viewBox = B.rectangle(n)));
            var i = ct.create("svg", i, B),
                s = i;
            r && !r.isIdentity() && (s = i.appendChild(ct.create("g", dt(r), B)));
            for (var a = 0, o = e.length; a < o; a++) s.appendChild(wt(e[a], t, !0));
            return yt(i, t)
        }
    }), X = {}, K = {
        "#document": function (t, e, n, i) {
            for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) {
                var o = r[s];
                if (1 === o.nodeType) return Lt(o, n, i)
            }
        },
        g: It,
        svg: It,
        clippath: It,
        polygon: Pt,
        polyline: Pt,
        path: function (t) {
            return _.create(t.getAttribute("d"))
        },
        lineargradient: Mt,
        radialgradient: Mt,
        image: function (e) {
            var t = new c(bt(e, "href", !0));
            return t.on("load", function () {
                var t = St(e);
                this.setSize(t);
                t = Ct(e).add(t.divide(2));
                this._matrix.append((new z).translate(t))
            }), t
        },
        symbol: function (t, e, n, i) {
            return new p(It(t, e, n, i), !0)
        },
        defs: It,
        use: function (t) {
            var e = (bt(t, "href", !0) || "").substring(1),
                e = X[e],
                t = Ct(t);
            return e ? e instanceof p ? e.place(t) : e.clone().translate(t) : null
        },
        circle: function (t) {
            return new d.Circle(Ct(t, "cx", "cy"), bt(t, "r"))
        },
        ellipse: function (t) {
            return new d.Ellipse({
                center: Ct(t, "cx", "cy"),
                radius: St(t, "rx", "ry")
            })
        },
        rect: function (t) {
            return new d.Rectangle(new b(Ct(t), St(t)), St(t, "rx", "ry"))
        },
        line: function (t) {
            return new W.Line(Ct(t, "x1", "y1"), Ct(t, "x2", "y2"))
        },
        text: function (t) {
            var e = new y(Ct(t).add(Ct(t, "dx", "dy")));
            return e.setContent(t.textContent.trim() || ""), e
        },
        switch: It
    }, Q = R.set(R.each(ft, function (n) {
        this[n.attribute] = function (t, e) {
            t[n.set] && (t[n.set](kt(e, n.type, n.fromSVG)), "color" !== n.type || (e = t[n.get]()) && e._scaleToBounds && (t = t.getBounds(), e.transform((new z).translate(t.getPoint()).scale(t.getSize()))))
        }
    }, {}), {
        id: function (t, e) {
            (X[e] = t).setName && t.setName(e)
        },
        "clip-path": function (t, e) {
            e = Et(e);
            if (e) {
                if ((e = e.clone()).setClipMask(!0), !(t instanceof g)) return new g(e, t);
                t.insertChild(0, e)
            }
        },
        gradientTransform: At,
        transform: At,
        "fill-opacity": Tt,
        "stroke-opacity": Tt,
        visibility: function (t, e) {
            t.setVisible && t.setVisible("visible" === e)
        },
        display: function (t, e) {
            t.setVisible && t.setVisible(null !== e)
        },
        "stop-color": function (t, e) {
            t.setColor && t.setColor(e)
        },
        "stop-opacity": function (t, e) {
            t._color && t._color.setAlpha(parseFloat(e))
        },
        offset: function (t, e) {
            var n;
            t.setOffset && (n = e.match(/(.*)%$/), t.setOffset(n ? n[1] / 100 : parseFloat(e)))
        },
        viewBox: function (t, e, n, i, r) {
            var s, a, o = new b(kt(e, "array")),
                e = St(i, null, null, !0);
            t instanceof g ? (a = e ? e.divide(o.getSize()) : 1, s = (new z).scale(a).translate(o.getPoint().negate()), a = t) : t instanceof p && (e && o.setSize(e), a = t._item), a && ("visible" !== Ot(i, "overflow", r) && ((o = new d.Rectangle(o)).setClipMask(!0), a.addChild(o)), s && a.transform(s))
        }
    }), V.inject({
        importSVG: function (t, e) {
            return Nt(t, e, this)
        }
    }), i.inject({
        importSVG: function (t, e) {
            return this.activate(), Nt(t, e, this)
        }
    }), R.exports.PaperScript = function () {
        var t, e, n, i = this,
            r = i.acorn;
        if (!r && "undefined" != typeof require) try {
            r = require("acorn")
        } catch (t) {}

        function p(t, e) {
            return (i.acorn || r).parse(t, e)
        }
        r || (r = t = e = {}, s = this, n = function (t) {
            "use strict";
            var f, d, o, n;
            t.version = "0.5.0", t.parse = function (t, e) {
                return d = String(t), o = d.length, r(e), Wt(),
                    function (t) {
                        m = y = h, f.locations && (w = new Zt);
                        x = C = null, b = [], Kt();
                        var e = t || ue(),
                            n = !0;
                        t || (e.body = []);
                        for (; g !== O;) {
                            var i = xe();
                            e.body.push(i), n && fe(i) && ae(!0), n = !1
                        }
                        return ce(e, "Program")
                    }(f.program)
            };
            var i = t.defaultOptions = {
                ecmaVersion: 5,
                strictSemicolons: !1,
                allowTrailingCommas: !0,
                forbidReserved: !1,
                allowReturnOutsideFunction: !1,
                locations: !1,
                onComment: null,
                ranges: !1,
                program: null,
                sourceFile: null,
                directSourceFile: null
            };

            function r(t) {
                for (var e in f = t || {}, i) Object.prototype.hasOwnProperty.call(f, e) || (f[e] = i[e]);
                n = f.sourceFile || null
            }
            var h, _, s, a, u, g, p, l, c, v, m, y, w, x, b, C, S = t.getLineInfo = function (t, e) {
                for (var n = 1, i = 0;;) {
                    Vt.lastIndex = i;
                    var r = Vt.exec(t);
                    if (!(r && r.index < e)) break;
                    ++n, i = r.index + r[0].length
                }
                return {
                    line: n,
                    column: e - i
                }
            };

            function k(t, e) {
                var n = S(d, t);
                e += " (" + n.line + ":" + n.column + ")";
                e = new SyntaxError(e);
                throw e.pos = t, e.loc = n, e.raisedAt = h, e
            }
            t.tokenize = function (t, e) {
                d = String(t), o = d.length, r(e), Wt();
                var n = {};

                function i(t) {
                    return y = s, Kt(t), n.start = _, n.end = s, n.startLoc = a, n.endLoc = u, n.type = g, n.value = p, n
                }
                return i.jumpTo = function (t, e) {
                    var n;
                    if (h = t, f.locations)
                        for (c = 1, v = Vt.lastIndex = 0;
                            (n = Vt.exec(d)) && n.index < t;) ++c, v = n.index + n[0].length;
                    l = e, Jt()
                }, i
            };
            var e, I = [],
                P = {
                    type: "num"
                },
                M = {
                    type: "regexp"
                },
                A = {
                    type: "string"
                },
                T = {
                    type: "name"
                },
                O = {
                    type: "eof"
                },
                z = {
                    keyword: "break"
                },
                E = {
                    keyword: "case",
                    beforeExpr: !0
                },
                L = {
                    keyword: "catch"
                },
                N = {
                    keyword: "continue"
                },
                B = {
                    keyword: "debugger"
                },
                F = {
                    keyword: "default"
                },
                j = {
                    keyword: "do",
                    isLoop: !0
                },
                R = {
                    keyword: "else",
                    beforeExpr: !0
                },
                D = {
                    keyword: "finally"
                },
                q = {
                    keyword: "for",
                    isLoop: !0
                },
                V = {
                    keyword: "function"
                },
                U = {
                    keyword: "if"
                },
                H = {
                    keyword: "return",
                    beforeExpr: !0
                },
                Z = {
                    keyword: "switch"
                },
                W = {
                    keyword: "throw",
                    beforeExpr: !0
                },
                $ = {
                    keyword: "try"
                },
                G = {
                    keyword: "var"
                },
                J = {
                    keyword: "while",
                    isLoop: !0
                },
                X = {
                    keyword: "with"
                },
                K = {
                    keyword: "new",
                    beforeExpr: !0
                },
                Q = {
                    keyword: "this"
                },
                Y = {
                    keyword: "null",
                    atomValue: null
                },
                tt = {
                    keyword: "true",
                    atomValue: !0
                },
                et = {
                    keyword: "false",
                    atomValue: !1
                },
                nt = {
                    keyword: "in",
                    binop: 7,
                    beforeExpr: !0
                },
                it = {
                    break: z,
                    case: E,
                    catch: L,
                    continue: N,
                    debugger: B,
                    default: F,
                    do: j,
                    else: R,
                    finally: D,
                    for: q,
                    function: V,
                    if: U,
                    return: H,
                    switch: Z,
                    throw: W,
                    try: $,
                    var: G,
                    while: J,
                    with: X,
                    null: Y,
                    true: tt,
                    false: et,
                    new: K,
                    in: nt,
                    instanceof: {
                        keyword: "instanceof",
                        binop: 7,
                        beforeExpr: !0
                    },
                    this: Q,
                    typeof: {
                        keyword: "typeof",
                        prefix: !0,
                        beforeExpr: !0
                    },
                    void: {
                        keyword: "void",
                        prefix: !0,
                        beforeExpr: !0
                    },
                    delete: {
                        keyword: "delete",
                        prefix: !0,
                        beforeExpr: !0
                    }
                },
                rt = {
                    type: "[",
                    beforeExpr: !0
                },
                st = {
                    type: "]"
                },
                at = {
                    type: "{",
                    beforeExpr: !0
                },
                ot = {
                    type: "}"
                },
                ht = {
                    type: "(",
                    beforeExpr: !0
                },
                ut = {
                    type: ")"
                },
                lt = {
                    type: ",",
                    beforeExpr: !0
                },
                ct = {
                    type: ";",
                    beforeExpr: !0
                },
                ft = {
                    type: ":",
                    beforeExpr: !0
                },
                dt = {
                    type: "."
                },
                _t = {
                    type: "?",
                    beforeExpr: !0
                },
                gt = {
                    binop: 10,
                    beforeExpr: !0
                },
                pt = {
                    isAssign: !0,
                    beforeExpr: !0
                },
                vt = {
                    isAssign: !0,
                    beforeExpr: !0
                },
                mt = {
                    postfix: !0,
                    prefix: !0,
                    isUpdate: !0
                },
                yt = {
                    prefix: !0,
                    beforeExpr: !0
                },
                wt = {
                    binop: 1,
                    beforeExpr: !0
                },
                xt = {
                    binop: 2,
                    beforeExpr: !0
                },
                bt = {
                    binop: 3,
                    beforeExpr: !0
                },
                Ct = {
                    binop: 4,
                    beforeExpr: !0
                },
                St = {
                    binop: 5,
                    beforeExpr: !0
                },
                kt = {
                    binop: 6,
                    beforeExpr: !0
                },
                It = {
                    binop: 7,
                    beforeExpr: !0
                },
                Pt = {
                    binop: 8,
                    beforeExpr: !0
                },
                Mt = {
                    binop: 9,
                    prefix: !0,
                    beforeExpr: !0
                },
                At = {
                    binop: 10,
                    beforeExpr: !0
                };
            for (e in t.tokTypes = {
                    bracketL: rt,
                    bracketR: st,
                    braceL: at,
                    braceR: ot,
                    parenL: ht,
                    parenR: ut,
                    comma: lt,
                    semi: ct,
                    colon: ft,
                    dot: dt,
                    question: _t,
                    slash: gt,
                    eq: pt,
                    name: T,
                    eof: O,
                    num: P,
                    regexp: M,
                    string: A
                }, it) t.tokTypes["_" + e] = it[e];

            function Tt(t) {
                t = t.split(" ");
                var n = "",
                    e = [];
                t: for (var i = 0; i < t.length; ++i) {
                    for (var r = 0; r < e.length; ++r)
                        if (e[r][0].length == t[i].length) {
                            e[r].push(t[i]);
                            continue t
                        } e.push([t[i]])
                }

                function s(t) {
                    if (1 == t.length) return n += "return str === " + JSON.stringify(t[0]) + ";";
                    n += "switch(str){";
                    for (var e = 0; e < t.length; ++e) n += "case " + JSON.stringify(t[e]) + ":";
                    n += "return true}return false;"
                }
                if (3 < e.length) {
                    e.sort(function (t, e) {
                        return e.length - t.length
                    }), n += "switch(str.length){";
                    for (i = 0; i < e.length; ++i) {
                        var a = e[i];
                        n += "case " + a[0].length + ":", s(a)
                    }
                    n += "}"
                } else s(t);
                return new Function("str", n)
            }
            var Ot, zt = Tt("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
                Et = Tt("class enum extends super const export import"),
                Lt = Tt("implements interface let package private protected public static yield"),
                Nt = Tt("eval arguments"),
                Bt = Tt("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
                Ft = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                jt = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
                Rt = new RegExp("[" + jt + "]"),
                Dt = new RegExp("[" + jt + "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"),
                qt = /[\n\r\u2028\u2029]/,
                Vt = /\r\n|[\n\r\u2028\u2029]/g,
                Ut = t.isIdentifierStart = function (t) {
                    return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || 170 <= t && Rt.test(String.fromCharCode(t)))
                },
                Ht = t.isIdentifierChar = function (t) {
                    return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || 170 <= t && Dt.test(String.fromCharCode(t))))
                };

            function Zt() {
                this.line = c, this.column = h - v
            }

            function Wt() {
                c = 1, h = v = 0, l = !0, Jt()
            }

            function $t(t, e) {
                s = h, f.locations && (u = new Zt), g = t, Jt(), p = e, l = t.beforeExpr
            }

            function Gt() {
                for (var t = h, e = f.onComment && f.locations && new Zt, n = d.charCodeAt(h += 2); h < o && 10 !== n && 13 !== n && 8232 !== n && 8233 !== n;) ++h, n = d.charCodeAt(h);
                f.onComment && f.onComment(!1, d.slice(t + 2, h), t, h, e, f.locations && new Zt)
            }

            function Jt() {
                for (; h < o;) {
                    var t, e = d.charCodeAt(h);
                    if (32 === e) ++h;
                    else if (13 === e) ++h, 10 === (t = d.charCodeAt(h)) && ++h, f.locations && (++c, v = h);
                    else if (10 === e || 8232 === e || 8233 === e) ++h, f.locations && (++c, v = h);
                    else if (8 < e && e < 14) ++h;
                    else if (47 === e)
                        if (42 === (t = d.charCodeAt(h + 1))) ! function () {
                            var t, e = f.onComment && f.locations && new Zt,
                                n = h,
                                i = d.indexOf("*/", h += 2);
                            if (-1 === i && k(h - 2, "Unterminated comment"), h = i + 2, f.locations)
                                for (Vt.lastIndex = n;
                                    (t = Vt.exec(d)) && t.index < h;) ++c, v = t.index + t[0].length;
                            f.onComment && f.onComment(!0, d.slice(n + 2, i), n, h, e, f.locations && new Zt)
                        }();
                        else {
                            if (47 !== t) break;
                            Gt()
                        }
                    else if (160 === e) ++h;
                    else {
                        if (!(5760 <= e && Ft.test(String.fromCharCode(e)))) break;
                        ++h
                    }
                }
            }

            function Xt(t) {
                switch (t) {
                    case 46:
                        return 48 <= (a = d.charCodeAt(h + 1)) && a <= 57 ? ee(!0) : (++h, $t(dt));
                    case 40:
                        return ++h, $t(ht);
                    case 41:
                        return ++h, $t(ut);
                    case 59:
                        return ++h, $t(ct);
                    case 44:
                        return ++h, $t(lt);
                    case 91:
                        return ++h, $t(rt);
                    case 93:
                        return ++h, $t(st);
                    case 123:
                        return ++h, $t(at);
                    case 125:
                        return ++h, $t(ot);
                    case 58:
                        return ++h, $t(ft);
                    case 63:
                        return ++h, $t(_t);
                    case 48:
                        var e = d.charCodeAt(h + 1);
                        if (120 === e || 88 === e) return function () {
                            h += 2;
                            var t = te(16);
                            null == t && k(_ + 2, "Expected hexadecimal number");
                            Ut(d.charCodeAt(h)) && k(h, "Identifier directly after number");
                            return $t(P, t)
                        }();
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return ee(!1);
                    case 34:
                    case 39:
                        return function (t) {
                            h++;
                            for (var e = "";;) {
                                o <= h && k(_, "Unterminated string constant");
                                var n = d.charCodeAt(h);
                                if (n === t) return ++h, $t(A, e);
                                if (92 === n) {
                                    n = d.charCodeAt(++h);
                                    var i = /^[0-7]+/.exec(d.slice(h, h + 3));
                                    for (i = i && i[0]; i && 255 < parseInt(i, 8);) i = i.slice(0, -1);
                                    if (++h, i = "0" === i ? null : i) C && k(h - 2, "Octal literal in strict mode"), e += String.fromCharCode(parseInt(i, 8)), h += i.length - 1;
                                    else switch (n) {
                                        case 110:
                                            e += "\n";
                                            break;
                                        case 114:
                                            e += "\r";
                                            break;
                                        case 120:
                                            e += String.fromCharCode(ne(2));
                                            break;
                                        case 117:
                                            e += String.fromCharCode(ne(4));
                                            break;
                                        case 85:
                                            e += String.fromCharCode(ne(8));
                                            break;
                                        case 116:
                                            e += "\t";
                                            break;
                                        case 98:
                                            e += "\b";
                                            break;
                                        case 118:
                                            e += "\v";
                                            break;
                                        case 102:
                                            e += "\f";
                                            break;
                                        case 48:
                                            e += "\0";
                                            break;
                                        case 13:
                                            10 === d.charCodeAt(h) && ++h;
                                        case 10:
                                            f.locations && (v = h, ++c);
                                            break;
                                        default:
                                            e += String.fromCharCode(n)
                                    }
                                } else 13 !== n && 10 !== n && 8232 !== n && 8233 !== n || k(_, "Unterminated string constant"), e += String.fromCharCode(n), ++h
                            }
                        }(t);
                    case 47:
                        return s = d.charCodeAt(h + 1), l ? (++h, Yt()) : 61 === s ? Qt(vt, 2) : Qt(gt, 1);
                    case 37:
                    case 42:
                        return 61 === d.charCodeAt(h + 1) ? Qt(vt, 2) : Qt(At, 1);
                    case 124:
                    case 38:
                        return e = t, (s = d.charCodeAt(h + 1)) === e ? Qt(124 === e ? wt : xt, 2) : 61 === s ? Qt(vt, 2) : Qt(124 === e ? bt : St, 1);
                    case 94:
                        return 61 === d.charCodeAt(h + 1) ? Qt(vt, 2) : Qt(Ct, 1);
                    case 43:
                    case 45:
                        return i = t, (r = d.charCodeAt(h + 1)) === i ? 45 == r && 62 == d.charCodeAt(h + 2) && qt.test(d.slice(y, h)) ? (h += 3, Gt(), Jt(), Kt()) : Qt(mt, 2) : 61 === r ? Qt(vt, 2) : Qt(Mt, 1);
                    case 60:
                    case 62:
                        return i = t, r = d.charCodeAt(h + 1), n = 1, r === i ? (n = 62 === i && 62 === d.charCodeAt(h + 2) ? 3 : 2, 61 === d.charCodeAt(h + n) ? Qt(vt, n + 1) : Qt(Pt, n)) : 33 == r && 60 == i && 45 == d.charCodeAt(h + 2) && 45 == d.charCodeAt(h + 3) ? (h += 4, Gt(), Jt(), Kt()) : (61 === r && (n = 61 === d.charCodeAt(h + 2) ? 3 : 2), Qt(It, n));
                    case 61:
                    case 33:
                        return n = t, 61 === d.charCodeAt(h + 1) ? Qt(kt, 61 === d.charCodeAt(h + 2) ? 3 : 2) : Qt(61 === n ? pt : yt, 1);
                    case 126:
                        return Qt(yt, 1)
                }
                var n, i, r, s, a;
                return !1
            }

            function Kt(t) {
                if (t ? h = _ + 1 : _ = h, f.locations && (a = new Zt), t) return Yt();
                if (o <= h) return $t(O);
                var e = d.charCodeAt(h);
                if (Ut(e) || 92 === e) return re();
                t = Xt(e);
                if (!1 === t) {
                    e = String.fromCharCode(e);
                    if ("\\" === e || Rt.test(e)) return re();
                    k(h, "Unexpected character '" + e + "'")
                }
                return t
            }

            function Qt(t, e) {
                var n = d.slice(h, h + e);
                h += e, $t(t, n)
            }

            function Yt() {
                for (var t, e, n = h;;) {
                    o <= h && k(n, "Unterminated regular expression");
                    var i = d.charAt(h);
                    if (qt.test(i) && k(n, "Unterminated regular expression"), t) t = !1;
                    else {
                        if ("[" === i) e = !0;
                        else if ("]" === i && e) e = !1;
                        else if ("/" === i && !e) break;
                        t = "\\" === i
                    }++h
                }
                var r = d.slice(n, h);
                ++h;
                var s = ie();
                s && !/^[gmsiy]*$/.test(s) && k(n, "Invalid regexp flag");
                try {
                    var a = new RegExp(r, s)
                } catch (t) {
                    t instanceof SyntaxError && k(n, t.message), k(t)
                }
                return $t(M, a)
            }

            function te(t, e) {
                for (var n = h, i = 0, r = 0, s = null == e ? 1 / 0 : e; r < s; ++r) {
                    var a = d.charCodeAt(h),
                        a = 97 <= a ? a - 97 + 10 : 65 <= a ? a - 65 + 10 : 48 <= a && a <= 57 ? a - 48 : 1 / 0;
                    if (t <= a) break;
                    ++h, i = i * t + a
                }
                return h === n || null != e && h - n !== e ? null : i
            }

            function ee(t) {
                var e = h,
                    n = !1,
                    i = 48 === d.charCodeAt(h);
                t || null !== te(10) || k(e, "Invalid number"), 46 === d.charCodeAt(h) && (++h, te(10), n = !0);
                t = d.charCodeAt(h);
                69 !== t && 101 !== t || (43 !== (t = d.charCodeAt(++h)) && 45 !== t || ++h, null === te(10) && k(e, "Invalid number"), n = !0), Ut(d.charCodeAt(h)) && k(h, "Identifier directly after number");
                var r, t = d.slice(e, h);
                return n ? r = parseFloat(t) : i && 1 !== t.length ? /[89]/.test(t) || C ? k(e, "Invalid number") : r = parseInt(t, 8) : r = parseInt(t, 10), $t(P, r)
            }

            function ne(t) {
                t = te(16, t);
                return null === t && k(_, "Bad character escape sequence"), t
            }

            function ie() {
                for (var t, e = !(Ot = !1), n = h;;) {
                    var i = d.charCodeAt(h);
                    if (Ht(i)) Ot && (t += d.charAt(h)), ++h;
                    else {
                        if (92 !== i) break;
                        Ot || (t = d.slice(n, h)), Ot = !0, 117 != d.charCodeAt(++h) && k(h, "Expecting Unicode escape sequence \\uXXXX"), ++h;
                        var r = ne(4),
                            i = String.fromCharCode(r);
                        i || k(h - 1, "Invalid Unicode escape"), (e ? Ut : Ht)(r) || k(h - 4, "Invalid Unicode escape"), t += i
                    }
                    e = !1
                }
                return Ot ? t : d.slice(n, h)
            }

            function re() {
                var t = ie(),
                    e = T;
                return $t(e = !Ot && Bt(t) ? it[t] : e, t)
            }

            function se() {
                m = _, y = s, w = u, Kt()
            }

            function ae(t) {
                if (C = t, h = _, f.locations)
                    for (; h < v;) v = d.lastIndexOf("\n", v - 2) + 1, --c;
                Jt(), Kt()
            }

            function oe() {
                this.type = null, this.start = _, this.end = null
            }

            function he() {
                this.start = a, (this.end = null) !== n && (this.source = n)
            }

            function ue() {
                var t = new oe;
                return f.locations && (t.loc = new he), f.directSourceFile && (t.sourceFile = f.directSourceFile), f.ranges && (t.range = [_, 0]), t
            }

            function le(t) {
                var e = new oe;
                return e.start = t.start, f.locations && (e.loc = new he, e.loc.start = t.loc.start), f.ranges && (e.range = [t.range[0], 0]), e
            }

            function ce(t, e) {
                return t.type = e, t.end = y, f.locations && (t.loc.end = w), f.ranges && (t.range[1] = y), t
            }

            function fe(t) {
                return 5 <= f.ecmaVersion && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value
            }

            function de(t) {
                return g === t && (se(), 1)
            }

            function _e() {
                return !f.strictSemicolons && (g === O || g === ot || qt.test(d.slice(y, _)))
            }

            function ge() {
                de(ct) || _e() || ve()
            }

            function pe(t) {
                (g === t ? se : ve)()
            }

            function ve() {
                k(_, "Unexpected token")
            }

            function me(t) {
                "Identifier" !== t.type && "MemberExpression" !== t.type && k(t.start, "Assigning to rvalue"), C && "Identifier" === t.type && Nt(t.name) && k(t.start, "Assigning to " + t.name + " in strict mode")
            }
            var ye = {
                    kind: "loop"
                },
                we = {
                    kind: "switch"
                };

            function xe() {
                (g === gt || g === vt && "/=" == p) && Kt(!0);
                var t, e, n, i = g,
                    r = ue();
                switch (i) {
                    case z:
                    case N:
                        se();
                        var s = i === z;
                        de(ct) || _e() ? r.label = null : g !== T ? ve() : (r.label = Ne(), ge());
                        for (var a = 0; a < b.length; ++a) {
                            var o = b[a];
                            if (null == r.label || o.name === r.label.name) {
                                if (null != o.kind && (s || "loop" === o.kind)) break;
                                if (r.label && s) break
                            }
                        }
                        return a === b.length && k(r.start, "Unsyntactic " + i.keyword), ce(r, s ? "BreakStatement" : "ContinueStatement");
                    case B:
                        return se(), ge(), ce(r, "DebuggerStatement");
                    case j:
                        return se(), b.push(ye), r.body = xe(), b.pop(), pe(J), r.test = be(), ge(), ce(r, "DoWhileStatement");
                    case q:
                        if (se(), b.push(ye), pe(ht), g === ct) return Se(r, null);
                        if (g === G) {
                            var h = ue();
                            return se(), Ie(h, !0), ce(h, "VariableDeclaration"), 1 === h.declarations.length && de(nt) ? ke(r, h) : Se(r, h)
                        }
                        h = Pe(!1, !0);
                        return de(nt) ? (me(h), ke(r, h)) : Se(r, h);
                    case V:
                        return se(), Ee(r, !0);
                    case U:
                        return se(), r.test = be(), r.consequent = xe(), r.alternate = de(R) ? xe() : null, ce(r, "IfStatement");
                    case H:
                        return x || f.allowReturnOutsideFunction || k(_, "'return' outside of function"), se(), de(ct) || _e() ? r.argument = null : (r.argument = Pe(), ge()), ce(r, "ReturnStatement");
                    case Z:
                        se(), r.discriminant = be(), r.cases = [], pe(at), b.push(we);
                        for (; g != ot;) g === E || g === F ? (n = g === E, t && ce(t, "SwitchCase"), r.cases.push(t = ue()), t.consequent = [], se(), n ? t.test = Pe() : (e && k(m, "Multiple default clauses"), e = !0, t.test = null), pe(ft)) : (t || ve(), t.consequent.push(xe()));
                        return t && ce(t, "SwitchCase"), se(), b.pop(), ce(r, "SwitchStatement");
                    case W:
                        return se(), qt.test(d.slice(y, _)) && k(y, "Illegal newline after throw"), r.argument = Pe(), ge(), ce(r, "ThrowStatement");
                    case $:
                        return se(), r.block = Ce(), r.handler = null, g === L && (c = ue(), se(), pe(ht), c.param = Ne(), C && Nt(c.param.name) && k(c.param.start, "Binding " + c.param.name + " in strict mode"), pe(ut), c.guard = null, c.body = Ce(), r.handler = ce(c, "CatchClause")), r.guardedHandlers = I, r.finalizer = de(D) ? Ce() : null, r.handler || r.finalizer || k(r.start, "Missing catch or finally clause"), ce(r, "TryStatement");
                    case G:
                        return se(), Ie(r), ge(), ce(r, "VariableDeclaration");
                    case J:
                        return se(), r.test = be(), b.push(ye), r.body = xe(), b.pop(), ce(r, "WhileStatement");
                    case X:
                        return C && k(_, "'with' in strict mode"), se(), r.object = be(), r.body = xe(), ce(r, "WithStatement");
                    case at:
                        return Ce();
                    case ct:
                        return se(), ce(r, "EmptyStatement");
                    default:
                        var u = p,
                            l = Pe();
                        if (i === T && "Identifier" === l.type && de(ft)) {
                            for (a = 0; a < b.length; ++a) b[a].name === u && k(l.start, "Label '" + u + "' is already declared");
                            var c = g.isLoop ? "loop" : g === Z ? "switch" : null;
                            return b.push({
                                name: u,
                                kind: c
                            }), r.body = xe(), b.pop(), r.label = l, ce(r, "LabeledStatement")
                        }
                        return r.expression = l, ge(), ce(r, "ExpressionStatement")
                }
            }

            function be() {
                pe(ht);
                var t = Pe();
                return pe(ut), t
            }

            function Ce(t) {
                var e, n = ue(),
                    i = !0,
                    r = !1;
                for (n.body = [], pe(at); !de(ot);) {
                    var s = xe();
                    n.body.push(s), i && t && fe(s) && (e = r, ae(r = !0)), i = !1
                }
                return r && !e && ae(!1), ce(n, "BlockStatement")
            }

            function Se(t, e) {
                return t.init = e, pe(ct), t.test = g === ct ? null : Pe(), pe(ct), t.update = g === ut ? null : Pe(), pe(ut), t.body = xe(), b.pop(), ce(t, "ForStatement")
            }

            function ke(t, e) {
                return t.left = e, t.right = Pe(), pe(ut), t.body = xe(), b.pop(), ce(t, "ForInStatement")
            }

            function Ie(t, e) {
                for (t.declarations = [], t.kind = "var";;) {
                    var n = ue();
                    if (n.id = Ne(), C && Nt(n.id.name) && k(n.id.start, "Binding " + n.id.name + " in strict mode"), n.init = de(pt) ? Pe(!0, e) : null, t.declarations.push(ce(n, "VariableDeclarator")), !de(lt)) break
                }
                return t
            }

            function Pe(t, e) {
                var n = Me(e);
                if (t || g !== lt) return n;
                var i = le(n);
                for (i.expressions = [n]; de(lt);) i.expressions.push(Me(e));
                return ce(i, "SequenceExpression")
            }

            function Me(t) {
                var e = function (t) {
                    var e = function (t) {
                        return function t(e, n, i) {
                            var r = g.binop;
                            if (null != r && (!i || g !== nt) && n < r) {
                                var s = le(e);
                                s.left = e, s.operator = p;
                                var a = g;
                                se(), s.right = t(Ae(), r, i);
                                var a = ce(s, a === wt || a === xt ? "LogicalExpression" : "BinaryExpression");
                                return t(a, n, i)
                            }
                            return e
                        }(Ae(), -1, t)
                    }(t);
                    if (de(_t)) {
                        var n = le(e);
                        return n.test = e, n.consequent = Pe(!0), pe(ft), n.alternate = Pe(!0, t), ce(n, "ConditionalExpression")
                    }
                    return e
                }(t);
                if (g.isAssign) {
                    var n = le(e);
                    return n.operator = p, n.left = e, se(), n.right = Me(t), me(e), ce(n, "AssignmentExpression")
                }
                return e
            }

            function Ae() {
                if (g.prefix) {
                    var t = ue(),
                        e = g.isUpdate;
                    return t.operator = p, t.prefix = !0, l = !0, se(), t.argument = Ae(), e ? me(t.argument) : C && "delete" === t.operator && "Identifier" === t.argument.type && k(t.start, "Deleting local variable in strict mode"), ce(t, e ? "UpdateExpression" : "UnaryExpression")
                }
                for (var n = Te(Oe()); g.postfix && !_e();)(t = le(n)).operator = p, t.prefix = !1, me(t.argument = n), se(), n = ce(t, "UpdateExpression");
                return n
            }

            function Te(t, e) {
                var n;
                return de(dt) ? ((n = le(t)).object = t, n.property = Ne(!0), n.computed = !1, Te(ce(n, "MemberExpression"), e)) : de(rt) ? ((n = le(t)).object = t, n.property = Pe(), n.computed = !0, pe(st), Te(ce(n, "MemberExpression"), e)) : e || !de(ht) ? t : ((n = le(t)).callee = t, n.arguments = Le(ut, !1), Te(ce(n, "CallExpression"), e))
            }

            function Oe() {
                switch (g) {
                    case Q:
                        var t = ue();
                        return se(), ce(t, "ThisExpression");
                    case T:
                        return Ne();
                    case P:
                    case A:
                    case M:
                        return (t = ue()).value = p, t.raw = d.slice(_, s), se(), ce(t, "Literal");
                    case Y:
                    case tt:
                    case et:
                        return (t = ue()).value = g.atomValue, t.raw = g.keyword, se(), ce(t, "Literal");
                    case ht:
                        var e = a,
                            n = _;
                        se();
                        var i = Pe();
                        return i.start = n, i.end = s, f.locations && (i.loc.start = e, i.loc.end = u), f.ranges && (i.range = [n, s]), pe(ut), i;
                    case rt:
                        t = ue();
                        return se(), t.elements = Le(st, !0, !0), ce(t, "ArrayExpression");
                    case at:
                        return function () {
                            var t = ue(),
                                e = !0,
                                n = !1;
                            t.properties = [], se();
                            for (; !de(ot);) {
                                if (e) e = !1;
                                else if (pe(lt), f.allowTrailingCommas && de(ot)) break;
                                var i, r = {
                                        key: ze()
                                    },
                                    s = !1;
                                if (de(ft) ? (r.value = Pe(!0), i = r.kind = "init") : 5 <= f.ecmaVersion && "Identifier" === r.key.type && ("get" === r.key.name || "set" === r.key.name) ? (s = n = !0, i = r.kind = r.key.name, r.key = ze(), g !== ht && ve(), r.value = Ee(ue(), !1)) : ve(), "Identifier" === r.key.type && (C || n))
                                    for (var a = 0; a < t.properties.length; ++a) {
                                        var o, h = t.properties[a];
                                        h.key.name !== r.key.name || (o = (o = i == h.kind || s && "init" === h.kind || "init" === i && ("get" === h.kind || "set" === h.kind)) && !C && "init" === i && "init" === h.kind ? !1 : o) && k(r.key.start, "Redefinition of property")
                                    }
                                t.properties.push(r)
                            }
                            return ce(t, "ObjectExpression")
                        }();
                    case V:
                        t = ue();
                        return se(), Ee(t, !1);
                    case K:
                        return function () {
                            var t = ue();
                            se(), t.callee = Te(Oe(), !0), de(ht) ? t.arguments = Le(ut, !1) : t.arguments = I;
                            return ce(t, "NewExpression")
                        }();
                    default:
                        ve()
                }
            }

            function ze() {
                return g === P || g === A ? Oe() : Ne(!0)
            }

            function Ee(t, e) {
                g === T ? t.id = Ne() : e ? ve() : t.id = null, t.params = [];
                var n = !0;
                for (pe(ht); !de(ut);) n ? n = !1 : pe(lt), t.params.push(Ne());
                var i = x,
                    r = b;
                if (x = !0, b = [], t.body = Ce(!0), x = i, b = r, C || t.body.body.length && fe(t.body.body[0]))
                    for (var s = t.id ? -1 : 0; s < t.params.length; ++s) {
                        var a = s < 0 ? t.id : t.params[s];
                        if ((Lt(a.name) || Nt(a.name)) && k(a.start, "Defining '" + a.name + "' in strict mode"), 0 <= s)
                            for (var o = 0; o < s; ++o) a.name === t.params[o].name && k(a.start, "Argument name clash in strict mode")
                    }
                return ce(t, e ? "FunctionDeclaration" : "FunctionExpression")
            }

            function Le(t, e, n) {
                for (var i = [], r = !0; !de(t);) {
                    if (r) r = !1;
                    else if (pe(lt), e && f.allowTrailingCommas && de(t)) break;
                    n && g === lt ? i.push(null) : i.push(Pe(!0))
                }
                return i
            }

            function Ne(t) {
                var e = ue();
                return t && "everywhere" == f.forbidReserved && (t = !1), g === T ? (!t && (f.forbidReserved && (3 === f.ecmaVersion ? zt : Et)(p) || C && Lt(p)) && -1 == d.slice(_, s).indexOf("\\") && k(_, "The keyword '" + p + "' is reserved"), e.name = p) : t && g.keyword ? e.name = g.keyword : ve(), l = !1, se(), ce(e, "Identifier")
            }
        }, "object" == typeof t && "object" == typeof e ? n(t) : "function" == typeof define && define.amd ? define(["exports"], n) : n(s.acorn || (s.acorn = {})), r.version || (r = null));
        var v = {
                "+": "__add",
                "-": "__subtract",
                "*": "__multiply",
                "/": "__divide",
                "%": "__modulo",
                "==": "__equals",
                "!=": "__equals"
            },
            m = {
                "-": "__negate",
                "+": "__self"
            },
            s = R.each(["add", "subtract", "multiply", "divide", "modulo", "equals", "negate"], function (t) {
                this["__" + t] = "#" + t
            }, {
                __self: function () {
                    return this
                }
            });

        function _(t, e, n) {
            var i = v[e];
            if (t && t[i]) {
                i = t[i](n);
                return "!=" === e ? !i : i
            }
            switch (e) {
                case "+":
                    return t + n;
                case "-":
                    return t - n;
                case "*":
                    return t * n;
                case "/":
                    return t / n;
                case "%":
                    return t % n;
                case "==":
                    return t == n;
                case "!=":
                    return t != n
            }
        }

        function g(t, e) {
            var n = m[t];
            if (e && e[n]) return e[n]();
            switch (t) {
                case "+":
                    return +e;
                case "-":
                    return -e
            }
        }

        function y(h, t) {
            if (!h) return "";
            var s = [];

            function u(t) {
                for (var e = 0, n = s.length; e < n; e++) {
                    var i = s[e];
                    if (i[0] >= t) break;
                    t += i[1]
                }
                return t
            }

            function l(t) {
                return h.substring(u(t.range[0]), u(t.range[1]))
            }

            function c(t, e) {
                for (var n = u(t.range[0]), t = u(t.range[1]), i = 0, r = s.length - 1; 0 <= r; r--)
                    if (n > s[r][0]) {
                        i = r + 1;
                        break
                    } s.splice(i, 0, [n, e.length - t + n]), h = h.substring(0, n) + e + h.substring(t)
            }

            function f(t, e) {
                switch (t.type) {
                    case "UnaryExpression":
                        t.operator in m && "Literal" !== t.argument.type && (n = l(t.argument), c(t, '$__("' + t.operator + '", ' + n + ")"));
                        break;
                    case "BinaryExpression":
                        t.operator in v && "Literal" !== t.left.type && (i = l(t.left), r = l(t.right), a = t.left, o = t.right, a = h.substring(u(a.range[1]), u(o.range[0])), o = t.operator, c(t, "__$__(" + i + "," + a.replace(new RegExp("\\" + o), '"' + o + '"') + ", " + r + ")"));
                        break;
                    case "UpdateExpression":
                    case "AssignmentExpression":
                        var n, i, r, s, a = e && e.type;
                        "ForStatement" === a || "BinaryExpression" === a && /^[=!<>]/.test(e.operator) || "MemberExpression" === a && e.computed || ("UpdateExpression" === t.type ? (o = (n = l(t.argument)) + " = " + (s = "__$__(" + n + ', "' + t.operator[0] + '", 1)'), t.prefix ? o = "(" + o + ")" : "AssignmentExpression" !== a && "VariableDeclarator" !== a && "BinaryExpression" !== a || (o = n + "; " + (o = l(e.left || e.id) === n ? s : o)), c(t, o)) : /^.=$/.test(t.operator) && "Literal" !== t.left.type && (i = l(t.left), r = l(t.right), s = i + " = __$__(" + i + ', "' + t.operator[0] + '", ' + r + ")", c(t, /^\(.*\)$/.test(l(t)) ? "(" + s + ")" : s)))
                }
                var a, o
            }
            var e, n = (t = t || {}).url || "",
                i = t.sourceMaps,
                r = t.paperFeatures || {},
                a = t.source || h,
                o = t.offset || 0,
                d = Bt.agent,
                _ = d.versionNumber,
                g = !1,
                t = /\r\n|\n|\r/gm;
            return i && (d.chrome && 30 <= _ || d.webkit && 537.76 <= _ || d.firefox && 23 <= _ || d.node) && (d.node ? o -= 2 : M && n && !M.location.href.indexOf(n) && (o = (e = A.getElementsByTagName("html")[0].innerHTML).substr(0, e.indexOf(h) + 1).match(t).length + 1), (e = ["AA" + function (t) {
                var e = "";
                for (t = (Math.abs(t) << 1) + (t < 0 ? 1 : 0); t || !e;) {
                    var n = 31 & t;
                    (t >>= 5) && (n |= 32), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [n]
                }
                return e
            }((g = 0 < o && !(d.chrome && 36 <= _ || d.safari && 600 <= _ || d.firefox && 40 <= _ || d.node)) ? 0 : o) + "A"]).length = (h.match(t) || []).length + 1 + (g ? o : 0), e = {
                version: 3,
                file: n,
                names: [],
                mappings: e.join(";AACA"),
                sourceRoot: "",
                sources: [n],
                sourcesContent: [a]
            }), !1 === r.operatorOverloading && !1 === r.moduleExports || function t(e, n, i) {
                if (e) {
                    for (var r in e)
                        if ("range" !== r && "loc" !== r) {
                            var s = e[r];
                            if (Array.isArray(s))
                                for (var a = 0, o = s.length; a < o; a++) t(s[a], e, i);
                            else s && "object" == typeof s && t(s, e, i)
                        }! 1 !== i.operatorOverloading && f(e, n), !1 !== i.moduleExports && function (t) {
                        switch (t.type) {
                            case "ExportDefaultDeclaration":
                                c({
                                    range: [t.start, t.declaration.start]
                                }, "module.exports = ");
                                break;
                            case "ExportNamedDeclaration":
                                var e, n = t.declaration,
                                    i = t.specifiers;
                                n ? (e = n.declarations) && (e.forEach(function (t) {
                                    c(t, "module.exports." + l(t))
                                }), c({
                                    range: [t.start, n.start + n.kind.length]
                                }, "")) : !i || (i = i.map(function (t) {
                                    return "module.exports." + (t = l(t)) + " = " + t + "; "
                                }).join("")) && c(t, i)
                        }
                    }(e)
                }
            }(p(h, {
                ranges: !0,
                preserveParens: !0,
                sourceType: "module"
            }), null, r), e && (g && (h = new Array(o + 1).join("\n") + h), /^(inline|both)$/.test(i) && (h += "\n//# sourceMappingURL=data:application/json;base64," + w.btoa(unescape(encodeURIComponent(JSON.stringify(e))))), h += "\n//# sourceURL=" + (n || "paperscript")), {
                url: n,
                source: a,
                code: h,
                map: e
            }
        }

        function o(i, t, e) {
            var n, r = (Bt = t).getView(),
                s = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(i) && !/\bnew\s+Tool\b/.test(i) ? new at : null,
                a = s ? s._events : [],
                o = ["onFrame", "onResize"].concat(a),
                h = [],
                u = [],
                l = "object" == typeof i ? i : y(i, e);

            function c(t, e) {
                for (var n in t) !e && /^_/.test(n) || !new RegExp("([\\b\\s\\W]|^)" + n.replace(/\$/g, "\\$") + "\\b").test(i) || (h.push(n), u.push(t[n]))
            }
            i = l.code, c({
                __$__: _,
                $__: g,
                paper: t,
                tool: s
            }, !0), c(t), i = "var module = { exports: {} }; " + i;
            var f = R.each(o, function (t) {
                new RegExp("\\s+" + t + "\\b").test(i) && (h.push(t), this.push("module.exports." + t + " = " + t + ";"))
            }, []).join("\n");
            f && (i += "\n" + f), i += "\nreturn module.exports;";
            e = Bt.agent;
            A && (e.chrome || e.firefox && e.versionNumber < 40) ? (l = A.createElement("script"), o = A.head || A.getElementsByTagName("head")[0], e.firefox && (i = "\n" + i), l.appendChild(A.createTextNode("document.__paperscript__ = function(" + h + ") {" + i + "\n}")), o.appendChild(l), n = A.__paperscript__, delete A.__paperscript__, o.removeChild(l)) : n = Function(h, i);
            var d = (f = n && n.apply(t, u)) || {};
            return R.each(a, function (t) {
                var e = d[t];
                e && (s[t] = e)
            }), r && (d.onResize && r.setOnResize(d.onResize), r.emit("resize", {
                size: r.size,
                delta: new E
            }), d.onFrame && r.setOnFrame(d.onFrame), r.requestUpdate()), f
        }

        function a(t) {
            if (/^text\/(?:x-|)paperscript$/.test(t.type) && "true" !== l.getAttribute(t, "ignore")) {
                var e = l.getAttribute(t, "canvas"),
                    n = A.getElementById(e),
                    i = t.src || t.getAttribute("data-src"),
                    r = l.hasAttribute(t, "async"),
                    s = "data-paper-scope";
                if (!n) throw new Error('Unable to find canvas with id "' + e + '"');
                var a = l.get(n.getAttribute(s)) || (new l).setup(n);
                return n.setAttribute(s, a._id), i ? ht({
                    url: i,
                    async: r,
                    mimeType: "text/plain",
                    onLoad: function (t) {
                        o(t, a, i)
                    }
                }) : o(t.innerHTML, a, t.baseURI), t.setAttribute("data-paper-ignore", "true"), a
            }
        }

        function h() {
            R.each(A && A.getElementsByTagName("script"), a)
        }
        return E.inject(s), O.inject(s), C.inject(s), M && ("complete" === A.readyState ? setTimeout(h) : N.add(M, {
            load: h
        })), {
            compile: y,
            execute: o,
            load: function (t) {
                return t ? a(t) : h()
            },
            parse: p,
            calculateBinary: _,
            calculateUnary: g
        }
    }.call(this);
    var Bt = new(l.inject(R.exports, {
        Base: R,
        Numerical: q,
        Key: it,
        DomEvent: N,
        DomElement: P,
        document: A,
        window: M,
        Symbol: p,
        PlacedSymbol: s
    }));
    return Bt.agent.node && require("./node/extend.js")(Bt), "function" == typeof define && define.amd ? define("paper", Bt) : "object" == typeof module && module && (module.exports = Bt), Bt
}.call(this, "object" == typeof self ? self : null);