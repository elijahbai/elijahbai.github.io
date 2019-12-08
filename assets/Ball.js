!
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        }: t(e)
    } ("undefined" != typeof window ? window: this,
        function(e, t) {
            function n(e) {
                var t = e.length,
                    n = it.type(e);
                return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            function r(e, t, n) {
                if (it.isFunction(t)) return it.grep(e,
                    function(e, r) {
                        return !! t.call(e, r, e) !== n
                    });
                if (t.nodeType) return it.grep(e,
                    function(e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (ft.test(t)) return it.filter(t, e, n);
                    t = it.filter(t, e)
                }
                return it.grep(e,
                    function(e) {
                        return it.inArray(e, t) >= 0 !== n
                    })
            }
            function i(e, t) {
                do e = e[t];
                while (e && 1 !== e.nodeType);
                return e
            }
            function s(e) {
                var t = xt[e] = {};
                return it.each(e.match(bt) || [],
                    function(e, n) {
                        t[n] = !0
                    }),
                    t
            }
            function o() {
                dt.addEventListener ? (dt.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (dt.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
            }
            function a() { (dt.addEventListener || "load" === event.type || "complete" === dt.readyState) && (o(), it.ready())
            }
            function l(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var r = "data-" + t.replace(Tt, "-$1").toLowerCase();
                    if (n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: St.test(n) ? it.parseJSON(n) : n
                        } catch(i) {}
                        it.data(e, t, n)
                    } else n = void 0
                }
                return n
            }
            function u(e) {
                var t;
                for (t in e) if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
                return ! 0
            }
            function h(e, t, n, r) {
                if (it.acceptData(e)) {
                    var i, s, o = it.expando,
                        a = e.nodeType,
                        l = a ? it.cache: e,
                        u = a ? e[o] : e[o] && o;
                    if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[o] = W.pop() || it.guid++:o),
                    l[u] || (l[u] = a ? {}: {
                        toJSON: it.noop
                    }),
                    ("object" == typeof t || "function" == typeof t) && (r ? l[u] = it.extend(l[u], t) : l[u].data = it.extend(l[u].data, t)),
                        s = l[u],
                    r || (s.data || (s.data = {}), s = s.data),
                    void 0 !== n && (s[it.camelCase(t)] = n),
                        "string" == typeof t ? (i = s[t], null == i && (i = s[it.camelCase(t)])) : i = s,
                        i
                }
            }
            function c(e, t, n) {
                if (it.acceptData(e)) {
                    var r, i, s = e.nodeType,
                        o = s ? it.cache: e,
                        a = s ? e[it.expando] : it.expando;
                    if (o[a]) {
                        if (t && (r = n ? o[a] : o[a].data)) {
                            it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")),
                                i = t.length;
                            for (; i--;) delete r[t[i]];
                            if (n ? !u(r) : !it.isEmptyObject(r)) return
                        } (n || (delete o[a].data, u(o[a]))) && (s ? it.cleanData([e], !0) : nt.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
                    }
                }
            }
            function f() {
                return ! 0
            }
            function p() {
                return ! 1
            }
            function d() {
                try {
                    return dt.activeElement
                } catch(e) {}
            }
            function m(e) {
                var t = Ot.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement) for (; t.length;) n.createElement(t.pop());
                return n
            }
            function g(e, t) {
                var n, r, i = 0,
                    s = typeof e.getElementsByTagName !== Et ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Et ? e.querySelectorAll(t || "*") : void 0;
                if (!s) for (s = [], n = e.childNodes || e; null != (r = n[i]); i++) ! t || it.nodeName(r, t) ? s.push(r) : it.merge(s, g(r, t));
                return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], s) : s
            }
            function v(e) {
                Rt.test(e.type) && (e.defaultChecked = e.checked)
            }
            function y(e, t) {
                return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function b(e) {
                return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type,
                    e
            }
            function x(e) {
                var t = qt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function w(e, t) {
                for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
            }
            function A(e, t) {
                if (1 === t.nodeType && it.hasData(e)) {
                    var n, r, i, s = it._data(e),
                        o = it._data(t, s),
                        a = s.events;
                    if (a) {
                        delete o.handle,
                            o.events = {};
                        for (n in a) for (r = 0, i = a[n].length; i > r; r++) it.event.add(t, n, a[n][r])
                    }
                    o.data && (o.data = it.extend({},
                        o.data))
                }
            }
            function E(e, t) {
                var n, r, i;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                        i = it._data(t);
                        for (r in i.events) it.removeEvent(t, r, i.handle);
                        t.removeAttribute(it.expando)
                    }
                    "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Rt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }
            }
            function S(t, n) {
                var r, i = it(n.createElement(t)).appendTo(n.body),
                    s = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display: it.css(i[0], "display");
                return i.detach(),
                    s
            }
            function T(e) {
                var t = dt,
                    n = Qt[e];
                return n || (n = S(e, t), "none" !== n && n || (Jt = (Jt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Jt[0].contentWindow || Jt[0].contentDocument).document, t.write(), t.close(), n = S(e, t), Jt.detach()), Qt[e] = n),
                    n
            }
            function C(e, t) {
                return {
                    get: function() {
                        var n = e();
                        if (null != n) return n ? void delete this.get: (this.get = t).apply(this, arguments)
                    }
                }
            }
            function _(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;) if (t = pn[i] + n, t in e) return t;
                return r
            }
            function P(e, t) {
                for (var n, r, i, s = [], o = 0, a = e.length; a > o; o++) r = e[o],
                r.style && (s[o] = it._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Pt(r) && (s[o] = it._data(r, "olddisplay", T(r.nodeName)))) : (i = Pt(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n: it.css(r, "display"))));
                for (o = 0; a > o; o++) r = e[o],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "": "none"));
                return e
            }
            function M(e, t, n) {
                var r = un.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }
            function R(e, t, n, r, i) {
                for (var s = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2)"margin" === n && (o += it.css(e, n + _t[s], !0, i)),
                    r ? ("content" === n && (o -= it.css(e, "padding" + _t[s], !0, i)), "margin" !== n && (o -= it.css(e, "border" + _t[s] + "Width", !0, i))) : (o += it.css(e, "padding" + _t[s], !0, i), "padding" !== n && (o += it.css(e, "border" + _t[s] + "Width", !0, i)));
                return o
            }
            function L(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth: e.offsetHeight,
                    s = en(e),
                    o = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, s);
                if (0 >= i || null == i) {
                    if (i = tn(e, t, s), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
                    r = o && (nt.boxSizingReliable() || i === e.style[t]),
                        i = parseFloat(i) || 0
                }
                return i + R(e, t, n || (o ? "border": "content"), r, s) + "px"
            }
            function N(e, t, n, r, i) {
                return new N.prototype.init(e, t, n, r, i)
            }
            function k() {
                return setTimeout(function() {
                    dn = void 0
                }),
                    dn = it.now()
            }
            function D(e, t) {
                var n, r = {
                        height: e
                    },
                    i = 0;
                for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = _t[i],
                    r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e),
                    r
            }
            function I(e, t, n) {
                for (var r, i = (xn[t] || []).concat(xn["*"]), s = 0, o = i.length; o > s; s++) if (r = i[s].call(n, t, e)) return r
            }
            function O(e, t, n) {
                var r, i, s, o, a, l, u, h, c = this,
                    f = {},
                    p = e.style,
                    d = e.nodeType && Pt(e),
                    m = it._data(e, "fxshow");
                n.queue || (a = it._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--,
                        it.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = it.css(e, "display"), h = "none" === u ? it._data(e, "olddisplay") || T(e.nodeName) : u, "inline" === h && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || c.always(function() {
                    p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                }));
                for (r in t) if (i = t[r], gn.exec(i)) {
                    if (delete t[r], s = s || "toggle" === i, i === (d ? "hide": "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        d = !0
                    }
                    f[r] = m && m[r] || it.style(e, r)
                } else u = void 0;
                if (it.isEmptyObject(f))"inline" === ("none" === u ? T(e.nodeName) : u) && (p.display = u);
                else {
                    m ? "hidden" in m && (d = m.hidden) : m = it._data(e, "fxshow", {}),
                    s && (m.hidden = !d),
                        d ? it(e).show() : c.done(function() {
                            it(e).hide()
                        }),
                        c.done(function() {
                            var t;
                            it._removeData(e, "fxshow");
                            for (t in f) it.style(e, t, f[t])
                        });
                    for (r in f) o = I(d ? m[r] : 0, r, c),
                    r in m || (m[r] = o.start, d && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
            function F(e, t) {
                var n, r, i, s, o;
                for (n in e) if (r = it.camelCase(n), i = t[r], s = e[n], it.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = it.cssHooks[r], o && "expand" in o) {
                    s = o.expand(s),
                        delete e[r];
                    for (n in s) n in e || (e[n] = s[n], t[n] = i)
                } else t[r] = i
            }
            function $(e, t, n) {
                var r, i, s = 0,
                    o = bn.length,
                    a = it.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (i) return ! 1;
                        for (var t = dn || k(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, s = 1 - r, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                        return a.notifyWith(e, [u, s, n]),
                            1 > s && l ? n: (a.resolveWith(e, [u]), !1)
                    },
                    u = a.promise({
                        elem: e,
                        props: it.extend({},
                            t),
                        opts: it.extend(!0, {
                                specialEasing: {}
                            },
                            n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: dn || k(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = it.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(r),
                                r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? u.tweens.length: 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) u.tweens[n].run(1);
                            return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]),
                                this
                        }
                    }),
                    h = u.props;
                for (F(h, u.opts.specialEasing); o > s; s++) if (r = bn[s].call(u, e, h, u.opts)) return r;
                return it.map(h, I, u),
                it.isFunction(u.opts.start) && u.opts.start.call(e, u),
                    it.fx.timer(it.extend(l, {
                        elem: e,
                        anim: u,
                        queue: u.opts.queue
                    })),
                    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            function B(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        s = t.toLowerCase().match(bt) || [];
                    if (it.isFunction(n)) for (; r = s[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function H(e, t, n, r) {
                function i(a) {
                    var l;
                    return s[a] = !0,
                        it.each(e[a] || [],
                            function(e, a) {
                                var u = a(t, n, r);
                                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
                            }),
                        l
                }
                var s = {},
                    o = e === Gn;
                return i(t.dataTypes[0]) || !s["*"] && i("*")
            }
            function j(e, t) {
                var n, r, i = it.ajaxSettings.flatOptions || {};
                for (r in t) void 0 !== t[r] && ((i[r] ? e: n || (n = {}))[r] = t[r]);
                return n && it.extend(!0, e, n),
                    e
            }
            function z(e, t, n) {
                for (var r, i, s, o, a = e.contents,
                         l = e.dataTypes;
                     "*" === l[0];) l.shift(),
                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i) for (o in a) if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
                if (l[0] in n) s = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            s = o;
                            break
                        }
                        r || (r = o)
                    }
                    s = s || r
                }
                return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
            }
            function V(e, t, n, r) {
                var i, s, o, a, l, u = {},
                    h = e.dataTypes.slice();
                if (h[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                for (s = h.shift(); s;) if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = h.shift()) if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
                    if (o = u[l + " " + s] || u["* " + s], !o) for (i in u) if (a = i.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        o === !0 ? o = u[i] : u[i] !== !0 && (s = a[0], h.unshift(a[1]));
                        break
                    }
                    if (o !== !0) if (o && e["throws"]) t = o(t);
                    else try {
                            t = o(t)
                        } catch(c) {
                            return {
                                state: "parsererror",
                                error: o ? c: "No conversion from " + l + " to " + s
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }
            function G(e, t, n, r) {
                var i;
                if (it.isArray(t)) it.each(t,
                    function(t, i) {
                        n || Wn.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
                    });
                else if (n || "object" !== it.type(t)) r(e, t);
                else for (i in t) G(e + "[" + i + "]", t[i], n, r)
            }
            function U() {
                try {
                    return new e.XMLHttpRequest
                } catch(t) {}
            }
            function X() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch(t) {}
            }
            function q(e) {
                return it.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
            }
            var W = [],
                Y = W.slice,
                K = W.concat,
                Z = W.push,
                J = W.indexOf,
                Q = {},
                et = Q.toString,
                tt = Q.hasOwnProperty,
                nt = {},
                rt = "1.11.1",
                it = function(e, t) {
                    return new it.fn.init(e, t)
                },
                st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ot = /^-ms-/,
                at = /-([\da-z])/gi,
                lt = function(e, t) {
                    return t.toUpperCase()
                };
            it.fn = it.prototype = {
                jquery: rt,
                constructor: it,
                selector: "",
                length: 0,
                toArray: function() {
                    return Y.call(this)
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
                },
                pushStack: function(e) {
                    var t = it.merge(this.constructor(), e);
                    return t.prevObject = this,
                        t.context = this.context,
                        t
                },
                each: function(e, t) {
                    return it.each(this, e, t)
                },
                map: function(e) {
                    return this.pushStack(it.map(this,
                        function(t, n) {
                            return e.call(t, n, t)
                        }))
                },
                slice: function() {
                    return this.pushStack(Y.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq( - 1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t: 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: Z,
                sort: W.sort,
                splice: W.splice
            },
                it.extend = it.fn.extend = function() {
                    var e, t, n, r, i, s, o = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        u = !1;
                    for ("boolean" == typeof o && (u = o, o = arguments[a] || {},
                        a++), "object" == typeof o || it.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++) if (null != (i = arguments[a])) for (r in i) e = o[r],
                        n = i[r],
                    o !== n && (u && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, s = e && it.isArray(e) ? e: []) : s = e && it.isPlainObject(e) ? e: {},
                        o[r] = it.extend(u, s, n)) : void 0 !== n && (o[r] = n));
                    return o
                },
                it.extend({
                    expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isFunction: function(e) {
                        return "function" === it.type(e)
                    },
                    isArray: Array.isArray ||
                    function(e) {
                        return "array" === it.type(e)
                    },
                    isWindow: function(e) {
                        return null != e && e == e.window
                    },
                    isNumeric: function(e) {
                        return ! it.isArray(e) && e - parseFloat(e) >= 0
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return ! 1;
                        return ! 0
                    },
                    isPlainObject: function(e) {
                        var t;
                        if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return ! 1;
                        try {
                            if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                        } catch(n) {
                            return ! 1
                        }
                        if (nt.ownLast) for (t in e) return tt.call(e, t);
                        for (t in e);
                        return void 0 === t || tt.call(e, t)
                    },
                    type: function(e) {
                        return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Q[et.call(e)] || "object": typeof e
                    },
                    globalEval: function(t) {
                        t && it.trim(t) && (e.execScript ||
                        function(t) {
                            e.eval.call(e, t)
                        })(t)
                    },
                    camelCase: function(e) {
                        return e.replace(ot, "ms-").replace(at, lt)
                    },
                    nodeName: function(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function(e, t, r) {
                        var i, s = 0,
                            o = e.length,
                            a = n(e);
                        if (r) {
                            if (a) for (; o > s && (i = t.apply(e[s], r), i !== !1); s++);
                            else for (s in e) if (i = t.apply(e[s], r), i === !1) break
                        } else if (a) for (; o > s && (i = t.call(e[s], s, e[s]), i !== !1); s++);
                        else for (s in e) if (i = t.call(e[s], s, e[s]), i === !1) break;
                        return e
                    },
                    trim: function(e) {
                        return null == e ? "": (e + "").replace(st, "")
                    },
                    makeArray: function(e, t) {
                        var r = t || [];
                        return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : Z.call(r, e)),
                            r
                    },
                    inArray: function(e, t, n) {
                        var r;
                        if (t) {
                            if (J) return J.call(t, e, n);
                            for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
                        }
                        return - 1
                    },
                    merge: function(e, t) {
                        for (var n = +t.length,
                                 r = 0,
                                 i = e.length; n > r;) e[i++] = t[r++];
                        if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
                        return e.length = i,
                            e
                    },
                    grep: function(e, t, n) {
                        for (var r, i = [], s = 0, o = e.length, a = !n; o > s; s++) r = !t(e[s], s),
                        r !== a && i.push(e[s]);
                        return i
                    },
                    map: function(e, t, r) {
                        var i, s = 0,
                            o = e.length,
                            a = n(e),
                            l = [];
                        if (a) for (; o > s; s++) i = t(e[s], s, r),
                        null != i && l.push(i);
                        else for (s in e) i = t(e[s], s, r),
                        null != i && l.push(i);
                        return K.apply([], l)
                    },
                    guid: 1,
                    proxy: function(e, t) {
                        var n, r, i;
                        return "string" == typeof t && (i = e[t], t = e, e = i),
                            it.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
                                return e.apply(t || this, n.concat(Y.call(arguments)))
                            },
                                r.guid = e.guid = e.guid || it.guid++, r) : void 0
                    },
                    now: function() {
                        return + new Date
                    },
                    support: nt
                }),
                it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
                    function(e, t) {
                        Q["[object " + t + "]"] = t.toLowerCase()
                    });
            var ut = function(e) {
                function t(e, t, n, r) {
                    var i, s, o, a, l, u, c, p, d, m;
                    if ((t ? t.ownerDocument || t: H) !== N && L(t), t = t || N, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (a = t.nodeType) && 9 !== a) return [];
                    if (D && !r) {
                        if (i = yt.exec(e)) if (o = i[1]) {
                            if (9 === a) {
                                if (s = t.getElementById(o), !s || !s.parentNode) return n;
                                if (s.id === o) return n.push(s),
                                    n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && $(t, s) && s.id === o) return n.push(s),
                                n
                        } else {
                            if (i[2]) return Q.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((o = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)),
                                n
                        }
                        if (w.qsa && (!I || !I.test(e))) {
                            if (p = c = B, d = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (u = T(e), (c = t.getAttribute("id")) ? p = c.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                                d = bt.test(e) && h(t.parentNode) || t,
                                    m = u.join(",")
                            }
                            if (m) try {
                                return Q.apply(n, d.querySelectorAll(m)),
                                    n
                            } catch(g) {} finally {
                                c || t.removeAttribute("id")
                            }
                        }
                    }
                    return _(e.replace(lt, "$1"), t, n, r)
                }
                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > A.cacheLength && delete e[t.shift()],
                            e[n + " "] = r
                    }
                    var t = [];
                    return e
                }
                function r(e) {
                    return e[B] = !0,
                        e
                }
                function i(e) {
                    var t = N.createElement("div");
                    try {
                        return !! e(t)
                    } catch(n) {
                        return ! 1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                            t = null
                    }
                }
                function s(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) A.attrHandle[n[r]] = t
                }
                function o(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                    return e ? 1 : -1
                }
                function a(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function u(e) {
                    return r(function(t) {
                        return t = +t,
                            r(function(n, r) {
                                for (var i, s = e([], n.length, t), o = s.length; o--;) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                            })
                    })
                }
                function h(e) {
                    return e && typeof e.getElementsByTagName !== q && e
                }
                function c() {}
                function f(e) {
                    for (var t = 0,
                             n = e.length,
                             r = ""; n > t; t++) r += e[t].value;
                    return r
                }
                function p(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        s = z++;
                    return t.first ?
                        function(t, n, s) {
                            for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, s)
                        }: function(t, n, o) {
                        var a, l, u = [j, s];
                        if (o) {
                            for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, o)) return ! 0
                        } else for (; t = t[r];) if (1 === t.nodeType || i) {
                            if (l = t[B] || (t[B] = {}), (a = l[r]) && a[0] === j && a[1] === s) return u[2] = a[2];
                            if (l[r] = u, u[2] = e(t, n, o)) return ! 0
                        }
                    }
                }
                function d(e) {
                    return e.length > 1 ?
                        function(t, n, r) {
                            for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                            return ! 0
                        }: e[0]
                }
                function m(e, n, r) {
                    for (var i = 0,
                             s = n.length; s > i; i++) t(e, n[i], r);
                    return r
                }
                function g(e, t, n, r, i) {
                    for (var s, o = [], a = 0, l = e.length, u = null != t; l > a; a++)(s = e[a]) && (!n || n(s, r, i)) && (o.push(s), u && t.push(a));
                    return o
                }
                function v(e, t, n, i, s, o) {
                    return i && !i[B] && (i = v(i)),
                    s && !s[B] && (s = v(s, o)),
                        r(function(r, o, a, l) {
                            var u, h, c, f = [],
                                p = [],
                                d = o.length,
                                v = r || m(t || "*", a.nodeType ? [a] : a, []),
                                y = !e || !r && t ? v: g(v, f, e, a, l),
                                b = n ? s || (r ? e: d || i) ? [] : o: y;
                            if (n && n(y, b, a, l), i) for (u = g(b, p), i(u, [], a, l), h = u.length; h--;)(c = u[h]) && (b[p[h]] = !(y[p[h]] = c));
                            if (r) {
                                if (s || e) {
                                    if (s) {
                                        for (u = [], h = b.length; h--;)(c = b[h]) && u.push(y[h] = c);
                                        s(null, b = [], u, l)
                                    }
                                    for (h = b.length; h--;)(c = b[h]) && (u = s ? tt.call(r, c) : f[h]) > -1 && (r[u] = !(o[u] = c))
                                }
                            } else b = g(b === o ? b.splice(d, b.length) : b),
                                s ? s(null, o, b, l) : Q.apply(o, b)
                        })
                }
                function y(e) {
                    for (var t, n, r, i = e.length,
                             s = A.relative[e[0].type], o = s || A.relative[" "], a = s ? 1 : 0, l = p(function(e) {
                                return e === t
                            },
                            o, !0), u = p(function(e) {
                                return tt.call(t, e) > -1
                            },
                            o, !0), h = [function(e, n, r) {
                            return ! s && (r || n !== P) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                        }]; i > a; a++) if (n = A.relative[e[a].type]) h = [p(d(h), n)];
                    else {
                        if (n = A.filter[e[a].type].apply(null, e[a].matches), n[B]) {
                            for (r = ++a; i > r && !A.relative[e[r].type]; r++);
                            return v(a > 1 && d(h), a > 1 && f(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*": ""
                                })).replace(lt, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                        }
                        h.push(n)
                    }
                    return d(h)
                }
                function b(e, n) {
                    var i = n.length > 0,
                        s = e.length > 0,
                        o = function(r, o, a, l, u) {
                            var h, c, f, p = 0,
                                d = "0",
                                m = r && [],
                                v = [],
                                y = P,
                                b = r || s && A.find.TAG("*", u),
                                x = j += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (u && (P = o !== N && o); d !== w && null != (h = b[d]); d++) {
                                if (s && h) {
                                    for (c = 0; f = e[c++];) if (f(h, o, a)) {
                                        l.push(h);
                                        break
                                    }
                                    u && (j = x)
                                }
                                i && ((h = !f && h) && p--, r && m.push(h))
                            }
                            if (p += d, i && d !== p) {
                                for (c = 0; f = n[c++];) f(m, v, o, a);
                                if (r) {
                                    if (p > 0) for (; d--;) m[d] || v[d] || (v[d] = Z.call(l));
                                    v = g(v)
                                }
                                Q.apply(l, v),
                                u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return u && (j = x, P = y),
                                m
                        };
                    return i ? r(o) : o
                }
                var x, w, A, E, S, T, C, _, P, M, R, L, N, k, D, I, O, F, $, B = "sizzle" + -new Date,
                    H = e.document,
                    j = 0,
                    z = 0,
                    V = n(),
                    G = n(),
                    U = n(),
                    X = function(e, t) {
                        return e === t && (R = !0),
                            0
                    },
                    q = "undefined",
                    W = 1 << 31,
                    Y = {}.hasOwnProperty,
                    K = [],
                    Z = K.pop,
                    J = K.push,
                    Q = K.push,
                    et = K.slice,
                    tt = K.indexOf ||
                        function(e) {
                            for (var t = 0,
                                     n = this.length; n > t; t++) if (this[t] === e) return t;
                            return - 1
                        },
                    nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    rt = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    st = it.replace("w", "w#"),
                    ot = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + rt + "*\\]",
                    at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                    lt = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
                    ut = new RegExp("^" + rt + "*," + rt + "*"),
                    ht = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
                    ct = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
                    ft = new RegExp(at),
                    pt = new RegExp("^" + st + "$"),
                    dt = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ot),
                        PSEUDO: new RegExp("^" + at),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + nt + ")$", "i"),
                        needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    mt = /^(?:input|select|textarea|button)$/i,
                    gt = /^h\d$/i,
                    vt = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /[+~]/,
                    xt = /'|\\/g,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
                    At = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    };
                try {
                    Q.apply(K = et.call(H.childNodes), H.childNodes),
                        K[H.childNodes.length].nodeType
                } catch(Et) {
                    Q = {
                        apply: K.length ?
                            function(e, t) {
                                J.apply(e, et.call(t))
                            }: function(e, t) {
                            for (var n = e.length,
                                     r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {},
                    S = t.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return t ? "HTML" !== t.nodeName: !1
                    },
                    L = t.setDocument = function(e) {
                        var t, n = e ? e.ownerDocument || e: H,
                            r = n.defaultView;
                        return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, k = n.documentElement, D = !S(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload",
                            function() {
                                L()
                            },
                            !1) : r.attachEvent && r.attachEvent("onunload",
                            function() {
                                L()
                            })), w.attributes = i(function(e) {
                            return e.className = "i",
                                !e.getAttribute("className")
                        }), w.getElementsByTagName = i(function(e) {
                            return e.appendChild(n.createComment("")),
                                !e.getElementsByTagName("*").length
                        }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                                    e.firstChild.className = "i",
                                2 === e.getElementsByClassName("i").length
                            }), w.getById = i(function(e) {
                            return k.appendChild(e).id = B,
                            !n.getElementsByName || !n.getElementsByName(B).length
                        }), w.getById ? (A.find.ID = function(e, t) {
                            if (typeof t.getElementById !== q && D) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        },
                            A.filter.ID = function(e) {
                                var t = e.replace(wt, At);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete A.find.ID, A.filter.ID = function(e) {
                            var t = e.replace(wt, At);
                            return function(e) {
                                var n = typeof e.getAttributeNode !== q && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), A.find.TAG = w.getElementsByTagName ?
                            function(e, t) {
                                return typeof t.getElementsByTagName !== q ? t.getElementsByTagName(e) : void 0
                            }: function(e, t) {
                            var n, r = [],
                                i = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = s[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return s
                        },
                            A.find.CLASS = w.getElementsByClassName &&
                                function(e, t) {
                                    return typeof t.getElementsByClassName !== q && D ? t.getElementsByClassName(e) : void 0
                                },
                            O = [], I = [], (w.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                            e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowclip^='']").length && I.push("[*^$]=" + rt + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || I.push("\\[" + rt + "*(?:value|" + nt + ")"),
                            e.querySelectorAll(":checked").length || I.push(":checked")
                        }), i(function(e) {
                            var t = n.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && I.push("name" + rt + "*[*^$|!~]?="),
                            e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                I.push(",.*:")
                        })), (w.matchesSelector = vt.test(F = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && i(function(e) {
                            w.disconnectedMatch = F.call(e, "div"),
                                F.call(e, "[s!='']:x"),
                                O.push("!=", at)
                        }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), t = vt.test(k.compareDocumentPosition), $ = t || vt.test(k.contains) ?
                            function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement: e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            }: function(e, t) {
                            if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                            return ! 1
                        },
                            X = t ?
                                function(e, t) {
                                    if (e === t) return R = !0,
                                        0;
                                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return r ? r: (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === H && $(H, e) ? -1 : t === n || t.ownerDocument === H && $(H, t) ? 1 : M ? tt.call(M, e) - tt.call(M, t) : 0 : 4 & r ? -1 : 1)
                                }: function(e, t) {
                                if (e === t) return R = !0,
                                    0;
                                var r, i = 0,
                                    s = e.parentNode,
                                    a = t.parentNode,
                                    l = [e],
                                    u = [t];
                                if (!s || !a) return e === n ? -1 : t === n ? 1 : s ? -1 : a ? 1 : M ? tt.call(M, e) - tt.call(M, t) : 0;
                                if (s === a) return o(e, t);
                                for (r = e; r = r.parentNode;) l.unshift(r);
                                for (r = t; r = r.parentNode;) u.unshift(r);
                                for (; l[i] === u[i];) i++;
                                return i ? o(l[i], u[i]) : l[i] === H ? -1 : u[i] === H ? 1 : 0
                            },
                            n) : N
                    },
                    t.matches = function(e, n) {
                        return t(e, null, null, n)
                    },
                    t.matchesSelector = function(e, n) {
                        if ((e.ownerDocument || e) !== N && L(e), n = n.replace(ct, "='$1']"), !(!w.matchesSelector || !D || O && O.test(n) || I && I.test(n))) try {
                            var r = F.call(e, n);
                            if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch(i) {}
                        return t(n, N, null, [e]).length > 0
                    },
                    t.contains = function(e, t) {
                        return (e.ownerDocument || e) !== N && L(e),
                            $(e, t)
                    },
                    t.attr = function(e, t) { (e.ownerDocument || e) !== N && L(e);
                        var n = A.attrHandle[t.toLowerCase()],
                            r = n && Y.call(A.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                        return void 0 !== r ? r: w.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
                    },
                    t.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    },
                    t.uniqueSort = function(e) {
                        var t, n = [],
                            r = 0,
                            i = 0;
                        if (R = !w.detectDuplicates, M = !w.sortStable && e.slice(0), e.sort(X), R) {
                            for (; t = e[i++];) t === e[i] && (r = n.push(i));
                            for (; r--;) e.splice(n[r], 1)
                        }
                        return M = null,
                            e
                    },
                    E = t.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else for (; t = e[r++];) n += E(t);
                        return n
                    },
                    A = t.selectors = {
                        cacheLength: 50,
                        createPseudo: r,
                        match: dt,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(wt, At),
                                    e[3] = (e[3] || e[4] || e[5] || "").replace(wt, At),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                                    e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return dt.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && ft.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(wt, At).toLowerCase();
                                return "*" === e ?
                                    function() {
                                        return ! 0
                                    }: function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = V[e + " "];
                                return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && V(e,
                                        function(e) {
                                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== q && e.getAttribute("class") || "")
                                        })
                            },
                            ATTR: function(e, n, r) {
                                return function(i) {
                                    var s = t.attr(i, e);
                                    return null == s ? "!=" === n: n ? (s += "", "=" === n ? s === r: "!=" === n ? s !== r: "^=" === n ? r && 0 === s.indexOf(r) : "*=" === n ? r && s.indexOf(r) > -1 : "$=" === n ? r && s.slice( - r.length) === r: "~=" === n ? (" " + s + " ").indexOf(r) > -1 : "|=" === n ? s === r || s.slice(0, r.length + 1) === r + "-": !1) : !0
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var s = "nth" !== e.slice(0, 3),
                                    o = "last" !== e.slice( - 4),
                                    a = "of-type" === t;
                                return 1 === r && 0 === i ?
                                    function(e) {
                                        return !! e.parentNode
                                    }: function(t, n, l) {
                                    var u, h, c, f, p, d, m = s !== o ? "nextSibling": "previousSibling",
                                        g = t.parentNode,
                                        v = a && t.nodeName.toLowerCase(),
                                        y = !l && !a;
                                    if (g) {
                                        if (s) {
                                            for (; m;) {
                                                for (c = t; c = c[m];) if (a ? c.nodeName.toLowerCase() === v: 1 === c.nodeType) return ! 1;
                                                d = m = "only" === e && !d && "nextSibling"
                                            }
                                            return ! 0
                                        }
                                        if (d = [o ? g.firstChild: g.lastChild], o && y) {
                                            for (h = g[B] || (g[B] = {}), u = h[e] || [], p = u[0] === j && u[1], f = u[0] === j && u[2], c = p && g.childNodes[p]; c = ++p && c && c[m] || (f = p = 0) || d.pop();) if (1 === c.nodeType && ++f && c === t) {
                                                h[e] = [j, p, f];
                                                break
                                            }
                                        } else if (y && (u = (t[B] || (t[B] = {}))[e]) && u[0] === j) f = u[1];
                                        else for (; (c = ++p && c && c[m] || (f = p = 0) || d.pop()) && ((a ? c.nodeName.toLowerCase() !== v: 1 !== c.nodeType) || !++f || (y && ((c[B] || (c[B] = {}))[e] = [j, f]), c !== t)););
                                        return f -= i,
                                        f === r || f % r === 0 && f / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, n) {
                                var i, s = A.pseudos[e] || A.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return s[B] ? s(n) : s.length > 1 ? (i = [e, e, "", n], A.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                    for (var r, i = s(e, n), o = i.length; o--;) r = tt.call(e, i[o]),
                                        e[r] = !(t[r] = i[o])
                                }) : function(e) {
                                    return s(e, 0, i)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: r(function(e) {
                                var t = [],
                                    n = [],
                                    i = C(e.replace(lt, "$1"));
                                return i[B] ? r(function(e, t, n, r) {
                                    for (var s, o = i(e, null, r, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
                                }) : function(e, r, s) {
                                    return t[0] = e,
                                        i(t, null, s, n),
                                        !n.pop()
                                }
                            }),
                            has: r(function(e) {
                                return function(n) {
                                    return t(e, n).length > 0
                                }
                            }),
                            contains: r(function(e) {
                                return function(t) {
                                    return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                                }
                            }),
                            lang: r(function(e) {
                                return pt.test(e || "") || t.error("unsupported lang: " + e),
                                    e = e.replace(wt, At).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do
                                            if (n = D ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                                            n === e || 0 === n.indexOf(e + "-");
                                        while ((t = t.parentNode) && 1 === t.nodeType);
                                        return ! 1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === k
                            },
                            focus: function(e) {
                                return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return e.disabled === !1
                            },
                            disabled: function(e) {
                                return e.disabled === !0
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                e.selected === !0
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                                return ! 0
                            },
                            parent: function(e) {
                                return ! A.pseudos.empty(e)
                            },
                            header: function(e) {
                                return gt.test(e.nodeName)
                            },
                            input: function(e) {
                                return mt.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: u(function() {
                                return [0]
                            }),
                            last: u(function(e, t) {
                                return [t - 1]
                            }),
                            eq: u(function(e, t, n) {
                                return [0 > n ? n + t: n]
                            }),
                            even: u(function(e, t) {
                                for (var n = 0; t > n; n += 2) e.push(n);
                                return e
                            }),
                            odd: u(function(e, t) {
                                for (var n = 1; t > n; n += 2) e.push(n);
                                return e
                            }),
                            lt: u(function(e, t, n) {
                                for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: u(function(e, t, n) {
                                for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    },
                    A.pseudos.nth = A.pseudos.eq;
                for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) A.pseudos[x] = a(x);
                for (x in {
                    submit: !0,
                    reset: !0
                }) A.pseudos[x] = l(x);
                return c.prototype = A.filters = A.pseudos,
                    A.setFilters = new c,
                    T = t.tokenize = function(e, n) {
                        var r, i, s, o, a, l, u, h = G[e + " "];
                        if (h) return n ? 0 : h.slice(0);
                        for (a = e, l = [], u = A.preFilter; a;) { (!r || (i = ut.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(s = [])),
                            r = !1,
                        (i = ht.exec(a)) && (r = i.shift(), s.push({
                            value: r,
                            type: i[0].replace(lt, " ")
                        }), a = a.slice(r.length));
                            for (o in A.filter) ! (i = dt[o].exec(a)) || u[o] && !(i = u[o](i)) || (r = i.shift(), s.push({
                                value: r,
                                type: o,
                                matches: i
                            }), a = a.slice(r.length));
                            if (!r) break
                        }
                        return n ? a.length: a ? t.error(e) : G(e, l).slice(0)
                    },
                    C = t.compile = function(e, t) {
                        var n, r = [],
                            i = [],
                            s = U[e + " "];
                        if (!s) {
                            for (t || (t = T(e)), n = t.length; n--;) s = y(t[n]),
                                s[B] ? r.push(s) : i.push(s);
                            s = U(e, b(i, r)),
                                s.selector = e
                        }
                        return s
                    },
                    _ = t.select = function(e, t, n, r) {
                        var i, s, o, a, l, u = "function" == typeof e && e,
                            c = !r && T(e = u.selector || e);
                        if (n = n || [], 1 === c.length) {
                            if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === t.nodeType && D && A.relative[s[1].type]) {
                                if (t = (A.find.ID(o.matches[0].replace(wt, At), t) || [])[0], !t) return n;
                                u && (t = t.parentNode),
                                    e = e.slice(s.shift().value.length)
                            }
                            for (i = dt.needsContext.test(e) ? 0 : s.length; i--&&(o = s[i], !A.relative[a = o.type]);) if ((l = A.find[a]) && (r = l(o.matches[0].replace(wt, At), bt.test(s[0].type) && h(t.parentNode) || t))) {
                                if (s.splice(i, 1), e = r.length && f(s), !e) return Q.apply(n, r),
                                    n;
                                break
                            }
                        }
                        return (u || C(e, c))(r, t, !D, n, bt.test(e) && h(t.parentNode) || t),
                            n
                    },
                    w.sortStable = B.split("").sort(X).join("") === B,
                    w.detectDuplicates = !!R,
                    L(),
                    w.sortDetached = i(function(e) {
                        return 1 & e.compareDocumentPosition(N.createElement("div"))
                    }),
                i(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || s("type|href|height|width",
                    function(e, t, n) {
                        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }),
                w.attributes && i(function(e) {
                    return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || s("value",
                    function(e, t, n) {
                        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                    }),
                i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || s(nt,
                    function(e, t, n) {
                        var r;
                        return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
                    }),
                    t
            } (e);
            it.find = ut,
                it.expr = ut.selectors,
                it.expr[":"] = it.expr.pseudos,
                it.unique = ut.uniqueSort,
                it.text = ut.getText,
                it.isXMLDoc = ut.isXML,
                it.contains = ut.contains;
            var ht = it.expr.match.needsContext,
                ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                ft = /^.[^:#\[\.,]*$/;
            it.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t,
                        function(e) {
                            return 1 === e.nodeType
                        }))
            },
                it.fn.extend({
                    find: function(e) {
                        var t, n = [],
                            r = this,
                            i = r.length;
                        if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
                            for (t = 0; i > t; t++) if (it.contains(r[t], this)) return ! 0
                        }));
                        for (t = 0; i > t; t++) it.find(e, r[t], n);
                        return n = this.pushStack(i > 1 ? it.unique(n) : n),
                            n.selector = this.selector ? this.selector + " " + e: e,
                            n
                    },
                    filter: function(e) {
                        return this.pushStack(r(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(r(this, e || [], !0))
                    },
                    is: function(e) {
                        return !! r(this, "string" == typeof e && ht.test(e) ? it(e) : e || [], !1).length
                    }
                });
            var pt, dt = e.document,
                mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                gt = it.fn.init = function(e, t) {
                    var n, r;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return ! t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: dt, !0)), ct.test(n[1]) && it.isPlainObject(t)) for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        if (r = dt.getElementById(n[2]), r && r.parentNode) {
                            if (r.id !== n[2]) return pt.find(e);
                            this.length = 1,
                                this[0] = r
                        }
                        return this.context = dt,
                            this.selector = e,
                            this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
                };
            gt.prototype = it.fn,
                pt = it(dt);
            var vt = /^(?:parents|prev(?:Until|All))/,
                yt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            it.extend({
                dir: function(e, t, n) {
                    for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i),
                        i = i[t];
                    return r
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }),
                it.fn.extend({
                    has: function(e) {
                        var t, n = it(e, this),
                            r = n.length;
                        return this.filter(function() {
                            for (t = 0; r > t; t++) if (it.contains(this, n[t])) return ! 0
                        })
                    },
                    closest: function(e, t) {
                        for (var n, r = 0,
                                 i = this.length,
                                 s = [], o = ht.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        }
                        return this.pushStack(s.length > 1 ? it.unique(s) : s)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                    },
                    add: function(e, t) {
                        return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
                    }
                }),
                it.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t: null
                        },
                        parents: function(e) {
                            return it.dir(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return it.dir(e, "parentNode", n)
                        },
                        next: function(e) {
                            return i(e, "nextSibling")
                        },
                        prev: function(e) {
                            return i(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return it.dir(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return it.dir(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return it.dir(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return it.dir(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return it.sibling((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return it.sibling(e.firstChild)
                        },
                        contents: function(e) {
                            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: it.merge([], e.childNodes)
                        }
                    },
                    function(e, t) {
                        it.fn[e] = function(n, r) {
                            var i = it.map(this, t, n);
                            return "Until" !== e.slice( - 5) && (r = n),
                            r && "string" == typeof r && (i = it.filter(r, i)),
                            this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())),
                                this.pushStack(i)
                        }
                    });
            var bt = /\S+/g,
                xt = {};
            it.Callbacks = function(e) {
                e = "string" == typeof e ? xt[e] || s(e) : it.extend({},
                    e);
                var t, n, r, i, o, a, l = [],
                    u = !e.once && [],
                    h = function(s) {
                        for (n = e.memory && s, r = !0, o = a || 0, a = 0, i = l.length, t = !0; l && i > o; o++) if (l[o].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                        t = !1,
                        l && (u ? u.length && h(u.shift()) : n ? l = [] : c.disable())
                    },
                    c = {
                        add: function() {
                            if (l) {
                                var r = l.length; !
                                    function s(t) {
                                        it.each(t,
                                            function(t, n) {
                                                var r = it.type(n);
                                                "function" === r ? e.unique && c.has(n) || l.push(n) : n && n.length && "string" !== r && s(n)
                                            })
                                    } (arguments),
                                    t ? i = l.length: n && (a = r, h(n))
                            }
                            return this
                        },
                        remove: function() {
                            return l && it.each(arguments,
                                function(e, n) {
                                    for (var r; (r = it.inArray(n, l, r)) > -1;) l.splice(r, 1),
                                    t && (i >= r && i--, o >= r && o--)
                                }),
                                this
                        },
                        has: function(e) {
                            return e ? it.inArray(e, l) > -1 : !(!l || !l.length)
                        },
                        empty: function() {
                            return l = [],
                                i = 0,
                                this
                        },
                        disable: function() {
                            return l = u = n = void 0,
                                this
                        },
                        disabled: function() {
                            return ! l
                        },
                        lock: function() {
                            return u = void 0,
                            n || c.disable(),
                                this
                        },
                        locked: function() {
                            return ! u
                        },
                        fireWith: function(e, n) {
                            return ! l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : h(n)),
                                this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments),
                                this
                        },
                        fired: function() {
                            return !! r
                        }
                    };
                return c
            },
                it.extend({
                    Deferred: function(e) {
                        var t = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]],
                            n = "pending",
                            r = {
                                state: function() {
                                    return n
                                },
                                always: function() {
                                    return i.done(arguments).fail(arguments),
                                        this
                                },
                                then: function() {
                                    var e = arguments;
                                    return it.Deferred(function(n) {
                                        it.each(t,
                                            function(t, s) {
                                                var o = it.isFunction(e[t]) && e[t];
                                                i[s[1]](function() {
                                                    var e = o && o.apply(this, arguments);
                                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                                })
                                            }),
                                            e = null
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? it.extend(e, r) : r
                                }
                            },
                            i = {};
                        return r.pipe = r.then,
                            it.each(t,
                                function(e, s) {
                                    var o = s[2],
                                        a = s[3];
                                    r[s[1]] = o.add,
                                    a && o.add(function() {
                                            n = a
                                        },
                                        t[1 ^ e][2].disable, t[2][2].lock),
                                        i[s[0]] = function() {
                                            return i[s[0] + "With"](this === i ? r: this, arguments),
                                                this
                                        },
                                        i[s[0] + "With"] = o.fireWith
                                }),
                            r.promise(i),
                        e && e.call(i, i),
                            i
                    },
                    when: function(e) {
                        var t, n, r, i = 0,
                            s = Y.call(arguments),
                            o = s.length,
                            a = 1 !== o || e && it.isFunction(e.promise) ? o: 0,
                            l = 1 === a ? e: it.Deferred(),
                            u = function(e, n, r) {
                                return function(i) {
                                    n[e] = this,
                                        r[e] = arguments.length > 1 ? Y.call(arguments) : i,
                                        r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                                }
                            };
                        if (o > 1) for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) s[i] && it.isFunction(s[i].promise) ? s[i].promise().done(u(i, r, s)).fail(l.reject).progress(u(i, n, t)) : --a;
                        return a || l.resolveWith(r, s),
                            l.promise()
                    }
                });
            var wt;
            it.fn.ready = function(e) {
                return it.ready.promise().done(e),
                    this
            },
                it.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? it.readyWait++:it.ready(!0)
                    },
                    ready: function(e) {
                        if (e === !0 ? !--it.readyWait: !it.isReady) {
                            if (!dt.body) return setTimeout(it.ready);
                            it.isReady = !0,
                            e !== !0 && --it.readyWait > 0 || (wt.resolveWith(dt, [it]), it.fn.triggerHandler && (it(dt).triggerHandler("ready"), it(dt).off("ready")))
                        }
                    }
                }),
                it.ready.promise = function(t) {
                    if (!wt) if (wt = it.Deferred(), "complete" === dt.readyState) setTimeout(it.ready);
                    else if (dt.addEventListener) dt.addEventListener("DOMContentLoaded", a, !1),
                        e.addEventListener("load", a, !1);
                    else {
                        dt.attachEvent("onreadystatechange", a),
                            e.attachEvent("onload", a);
                        var n = !1;
                        try {
                            n = null == e.frameElement && dt.documentElement
                        } catch(r) {}
                        n && n.doScroll && !
                            function i() {
                                if (!it.isReady) {
                                    try {
                                        n.doScroll("left")
                                    } catch(e) {
                                        return setTimeout(i, 50)
                                    }
                                    o(),
                                        it.ready()
                                }
                            } ()
                    }
                    return wt.promise(t)
                };
            var At, Et = "undefined";
            for (At in it(nt)) break;
            nt.ownLast = "0" !== At,
                nt.inlineBlockNeedsLayout = !1,
                it(function() {
                    var e, t, n, r;
                    n = dt.getElementsByTagName("body")[0],
                    n && n.style && (t = dt.createElement("div"), r = dt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Et && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
                }),
                function() {
                    var e = dt.createElement("div");
                    if (null == nt.deleteExpando) {
                        nt.deleteExpando = !0;
                        try {
                            delete e.test
                        } catch(t) {
                            nt.deleteExpando = !1
                        }
                    }
                    e = null
                } (),
                it.acceptData = function(e) {
                    var t = it.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
                };
            var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Tt = /([A-Z])/g;
            it.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando],
                    !!e && !u(e)
                },
                data: function(e, t, n) {
                    return h(e, t, n)
                },
                removeData: function(e, t) {
                    return c(e, t)
                },
                _data: function(e, t, n) {
                    return h(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return c(e, t, !0)
                }
            }),
                it.fn.extend({
                    data: function(e, t) {
                        var n, r, i, s = this[0],
                            o = s && s.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = it.data(s), 1 === s.nodeType && !it._data(s, "parsedAttrs"))) {
                                for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), l(s, r, i[r])));
                                it._data(s, "parsedAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each(function() {
                            it.data(this, e)
                        }) : arguments.length > 1 ? this.each(function() {
                            it.data(this, e, t)
                        }) : s ? l(s, e, it.data(s, e)) : void 0
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            it.removeData(this, e)
                        })
                    }
                }),
                it.extend({
                    queue: function(e, t, n) {
                        var r;
                        return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = it.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            s = it._queueHooks(e, t),
                            o = function() {
                                it.dequeue(e, t)
                            };
                        "inprogress" === i && (i = n.shift(), r--),
                        i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)),
                        !r && s && s.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return it._data(e, n) || it._data(e, n, {
                                empty: it.Callbacks("once memory").add(function() {
                                    it._removeData(e, t + "queue"),
                                        it._removeData(e, n)
                                })
                            })
                    }
                }),
                it.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--),
                            arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                                var n = it.queue(this, e, t);
                                it._queueHooks(this, e),
                                "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
                            })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            it.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            i = it.Deferred(),
                            s = this,
                            o = this.length,
                            a = function() {--r || i.resolveWith(s, [s])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = it._data(s[o], e + "queueHooks"),
                        n && n.empty && (r++, n.empty.add(a));
                        return a(),
                            i.promise(t)
                    }
                });
            var Ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                _t = ["Top", "Right", "Bottom", "Left"],
                Pt = function(e, t) {
                    return e = t || e,
                    "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
                },
                Mt = it.access = function(e, t, n, r, i, s, o) {
                    var a = 0,
                        l = e.length,
                        u = null == n;
                    if ("object" === it.type(n)) {
                        i = !0;
                        for (a in n) it.access(e, t, a, n[a], !0, s, o)
                    } else if (void 0 !== r && (i = !0, it.isFunction(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                            return u.call(it(e), n)
                        })), t)) for (; l > a; a++) t(e[a], n, o ? r: r.call(e[a], a, t(e[a], n)));
                    return i ? e: u ? t.call(e) : l ? t(e[0], n) : s
                },
                Rt = /^(?:checkbox|radio)$/i; !
                function() {
                    var e = dt.createElement("input"),
                        t = dt.createElement("div"),
                        n = dt.createDocumentFragment();
                    if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== dt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick",
                            function() {
                                nt.noCloneEvent = !1
                            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
                        nt.deleteExpando = !0;
                        try {
                            delete t.test
                        } catch(r) {
                            nt.deleteExpando = !1
                        }
                    }
                } (),
                function() {
                    var t, n, r = dt.createElement("div");
                    for (t in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) n = "on" + t,
                    (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
                    r = null
                } ();
            var Lt = /^(?:input|select|textarea)$/i,
                Nt = /^key/,
                kt = /^(?:mouse|pointer|contextmenu)|click/,
                Dt = /^(?:focusinfocus|focusoutblur)$/,
                It = /^([^.]*)(?:\.(.+)|)$/;
            it.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var s, o, a, l, u, h, c, f, p, d, m, g = it._data(e);
                    if (g) {
                        for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = it.guid++), (o = g.events) || (o = g.events = {}), (h = g.handle) || (h = g.handle = function(e) {
                            return typeof it === Et || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(h.elem, arguments)
                        },
                            h.elem = e), t = (t || "").match(bt) || [""], a = t.length; a--;) s = It.exec(t[a]) || [],
                            p = m = s[1],
                            d = (s[2] || "").split(".").sort(),
                        p && (u = it.event.special[p] || {},
                            p = (i ? u.delegateType: u.bindType) || p, u = it.event.special[p] || {},
                            c = it.extend({
                                    type: p,
                                    origType: m,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && it.expr.match.needsContext.test(i),
                                    namespace: d.join(".")
                                },
                                l), (f = o[p]) || (f = o[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, d, h) !== !1 || (e.addEventListener ? e.addEventListener(p, h, !1) : e.attachEvent && e.attachEvent("on" + p, h))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), it.event.global[p] = !0);
                        e = null
                    }
                },
                remove: function(e, t, n, r, i) {
                    var s, o, a, l, u, h, c, f, p, d, m, g = it.hasData(e) && it._data(e);
                    if (g && (h = g.events)) {
                        for (t = (t || "").match(bt) || [""], u = t.length; u--;) if (a = It.exec(t[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                            for (c = it.event.special[p] || {},
                                     p = (r ? c.delegateType: c.bindType) || p, f = h[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = f.length; s--;) o = f[s],
                            !i && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (f.splice(s, 1), o.selector && f.delegateCount--, c.remove && c.remove.call(e, o));
                            l && !f.length && (c.teardown && c.teardown.call(e, d, g.handle) !== !1 || it.removeEvent(e, p, g.handle), delete h[p])
                        } else for (p in h) it.event.remove(e, p + t[u], n, r, !0);
                        it.isEmptyObject(h) && (delete g.handle, it._removeData(e, "events"))
                    }
                },
                trigger: function(t, n, r, i) {
                    var s, o, a, l, u, h, c, f = [r || dt],
                        p = tt.call(t, "type") ? t.type: t,
                        d = tt.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = h = r = r || dt, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), o = p.indexOf(":") < 0 && "on" + p, t = t[it.expando] ? t: new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = d.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), u = it.event.special[p] || {},
                        i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                        if (!i && !u.noBubble && !it.isWindow(r)) {
                            for (l = u.delegateType || p, Dt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a),
                                h = a;
                            h === (r.ownerDocument || dt) && f.push(h.defaultView || h.parentWindow || e)
                        }
                        for (c = 0; (a = f[c++]) && !t.isPropagationStopped();) t.type = c > 1 ? l: u.bindType || p,
                            s = (it._data(a, "events") || {})[t.type] && it._data(a, "handle"),
                        s && s.apply(a, n),
                            s = o && a[o],
                        s && s.apply && it.acceptData(a) && (t.result = s.apply(a, n), t.result === !1 && t.preventDefault());
                        if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && it.acceptData(r) && o && r[p] && !it.isWindow(r)) {
                            h = r[o],
                            h && (r[o] = null),
                                it.event.triggered = p;
                            try {
                                r[p]()
                            } catch(m) {}
                            it.event.triggered = void 0,
                            h && (r[o] = h)
                        }
                        return t.result
                    }
                },
                dispatch: function(e) {
                    e = it.event.fix(e);
                    var t, n, r, i, s, o = [],
                        a = Y.call(arguments),
                        l = (it._data(this, "events") || {})[e.type] || [],
                        u = it.event.special[e.type] || {};
                    if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (o = it.event.handlers.call(this, e, l), t = 0; (i = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, s = 0; (r = i.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, s, o = [],
                        a = t.delegateCount,
                        l = e.target;
                    if (a && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], s = 0; a > s; s++) r = t[s],
                            n = r.selector + " ",
                        void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null, [l]).length),
                        i[n] && i.push(r);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    }
                    return a < t.length && o.push({
                        elem: this,
                        handlers: t.slice(a)
                    }),
                        o
                },
                fix: function(e) {
                    if (e[it.expando]) return e;
                    var t, n, r, i = e.type,
                        s = e,
                        o = this.fixHooks[i];
                    for (o || (this.fixHooks[i] = o = kt.test(i) ? this.mouseHooks: Nt.test(i) ? this.keyHooks: {}), r = o.props ? this.props.concat(o.props) : this.props, e = new it.Event(s), t = r.length; t--;) n = r[t],
                        e[n] = s[n];
                    return e.target || (e.target = s.srcElement || dt),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                        e.metaKey = !!e.metaKey,
                        o.filter ? o.filter(e, s) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                            e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, i, s = t.button,
                            o = t.fromElement;
                        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || dt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                        !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement: o),
                        e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                            e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== d() && this.focus) try {
                                return this.focus(),
                                    !1
                            } catch(e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === d() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return it.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = it.extend(new it.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i),
                    i.isDefaultPrevented() && n.preventDefault()
                }
            },
                it.removeEvent = dt.removeEventListener ?
                    function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n, !1)
                    }: function(e, t, n) {
                    var r = "on" + t;
                    e.detachEvent && (typeof e[r] === Et && (e[r] = null), e.detachEvent(r, n))
                },
                it.Event = function(e, t) {
                    return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f: p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
                },
                it.Event.prototype = {
                    isDefaultPrevented: p,
                    isPropagationStopped: p,
                    isImmediatePropagationStopped: p,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = f,
                        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = f,
                        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = f,
                        e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                            this.stopPropagation()
                    }
                },
                it.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    },
                    function(e, t) {
                        it.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, r = this,
                                    i = e.relatedTarget,
                                    s = e.handleObj;
                                return (!i || i !== r && !it.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t),
                                    n
                            }
                        }
                    }),
            nt.submitBubbles || (it.event.special.submit = {
                setup: function() {
                    return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit",
                        function(e) {
                            var t = e.target,
                                n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form: void 0;
                            n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit",
                                function(e) {
                                    e._submit_bubble = !0
                                }), it._data(n, "submitBubbles", !0))
                        })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
                }
            }),
            nt.changeBubbles || (it.event.special.change = {
                setup: function() {
                    return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change",
                        function(e) {
                            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                        }), it.event.add(this, "click._change",
                        function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1),
                                it.event.simulate("change", this, e, !0)
                        })), !1) : void it.event.add(this, "beforeactivate._change",
                        function(e) {
                            var t = e.target;
                            Lt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change",
                                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                                }), it._data(t, "changeBubbles", !0))
                        })
                },
                handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function() {
                    return it.event.remove(this, "._change"),
                        !Lt.test(this.nodeName)
                }
            }),
            nt.focusinBubbles || it.each({
                    focus: "focusin",
                    blur: "focusout"
                },
                function(e, t) {
                    var n = function(e) {
                        it.event.simulate(t, e.target, it.event.fix(e), !0)
                    };
                    it.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this,
                                i = it._data(r, t);
                            i || r.addEventListener(e, n, !0),
                                it._data(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this,
                                i = it._data(r, t) - 1;
                            i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
                        }
                    }
                }),
                it.fn.extend({
                    on: function(e, t, n, r, i) {
                        var s, o;
                        if ("object" == typeof e) {
                            "string" != typeof t && (n = n || t, t = void 0);
                            for (s in e) this.on(s, t, n, e[s], i);
                            return this
                        }
                        if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
                        else if (!r) return this;
                        return 1 === i && (o = r, r = function(e) {
                            return it().off(e),
                                o.apply(this, arguments)
                        },
                            r.guid = o.guid || (o.guid = it.guid++)),
                            this.each(function() {
                                it.event.add(this, e, r, n, t)
                            })
                    },
                    one: function(e, t, n, r) {
                        return this.on(e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                            it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
                            this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this
                        }
                        return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
                        n === !1 && (n = p),
                            this.each(function() {
                                it.event.remove(this, e, n, t)
                            })
                    },
                    trigger: function(e, t) {
                        return this.each(function() {
                            it.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        return n ? it.event.trigger(e, t, n, !0) : void 0
                    }
                });
            var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                Ft = / jQuery\d+="(?:null|\d+)"/g,
                $t = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
                Bt = /^\s+/,
                Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                jt = /<([\w:]+)/,
                zt = /<tbody/i,
                Vt = /<|&#?\w+;/,
                Gt = /<(?:script|style|link)/i,
                Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Xt = /^$|\/(?:java|ecma)script/i,
                qt = /^true\/(.*)/,
                Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Yt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                Kt = m(dt),
                Zt = Kt.appendChild(dt.createElement("div"));
            Yt.optgroup = Yt.option,
                Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead,
                Yt.th = Yt.td,
                it.extend({
                    clone: function(e, t, n) {
                        var r, i, s, o, a, l = it.contains(e.ownerDocument, e);
                        if (nt.html5Clone || it.isXMLDoc(e) || !$t.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Zt.innerHTML = e.outerHTML, Zt.removeChild(s = Zt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e))) for (r = g(s), a = g(e), o = 0; null != (i = a[o]); ++o) r[o] && E(i, r[o]);
                        if (t) if (n) for (a = a || g(e), r = r || g(s), o = 0; null != (i = a[o]); o++) A(i, r[o]);
                        else A(e, s);
                        return r = g(s, "script"),
                        r.length > 0 && w(r, !l && g(e, "script")),
                            r = a = i = null,
                            s
                    },
                    buildFragment: function(e, t, n, r) {
                        for (var i, s, o, a, l, u, h, c = e.length,
                                 f = m(t), p = [], d = 0; c > d; d++) if (s = e[d], s || 0 === s) if ("object" === it.type(s)) it.merge(p, s.nodeType ? [s] : s);
                        else if (Vt.test(s)) {
                            for (a = a || f.appendChild(t.createElement("div")), l = (jt.exec(s) || ["", ""])[1].toLowerCase(), h = Yt[l] || Yt._default, a.innerHTML = h[1] + s.replace(Ht, "<$1></$2>") + h[2], i = h[0]; i--;) a = a.lastChild;
                            if (!nt.leadingWhitespace && Bt.test(s) && p.push(t.createTextNode(Bt.exec(s)[0])), !nt.tbody) for (s = "table" !== l || zt.test(s) ? "<table>" !== h[1] || zt.test(s) ? 0 : a: a.firstChild, i = s && s.childNodes.length; i--;) it.nodeName(u = s.childNodes[i], "tbody") && !u.childNodes.length && s.removeChild(u);
                            for (it.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                            a = f.lastChild
                        } else p.push(t.createTextNode(s));
                        for (a && f.removeChild(a), nt.appendChecked || it.grep(g(p, "input"), v), d = 0; s = p[d++];) if ((!r || -1 === it.inArray(s, r)) && (o = it.contains(s.ownerDocument, s), a = g(f.appendChild(s), "script"), o && w(a), n)) for (i = 0; s = a[i++];) Xt.test(s.type || "") && n.push(s);
                        return a = null,
                            f
                    },
                    cleanData: function(e, t) {
                        for (var n, r, i, s, o = 0,
                                 a = it.expando,
                                 l = it.cache,
                                 u = nt.deleteExpando,
                                 h = it.event.special; null != (n = e[o]); o++) if ((t || it.acceptData(n)) && (i = n[a], s = i && l[i])) {
                            if (s.events) for (r in s.events) h[r] ? it.event.remove(n, r) : it.removeEvent(n, r, s.handle);
                            l[i] && (delete l[i], u ? delete n[a] : typeof n.removeAttribute !== Et ? n.removeAttribute(a) : n[a] = null, W.push(i))
                        }
                    }
                }),
                it.fn.extend({
                    text: function(e) {
                        return Mt(this,
                            function(e) {
                                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || dt).createTextNode(e))
                            },
                            null, e, arguments.length)
                    },
                    append: function() {
                        return this.domManip(arguments,
                            function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = y(this, e);
                                    t.appendChild(e)
                                }
                            })
                    },
                    prepend: function() {
                        return this.domManip(arguments,
                            function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = y(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            })
                    },
                    before: function() {
                        return this.domManip(arguments,
                            function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            })
                    },
                    after: function() {
                        return this.domManip(arguments,
                            function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            })
                    },
                    remove: function(e, t) {
                        for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(g(n)),
                        n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                        return this
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) {
                            for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                            e.options && it.nodeName(e, "select") && (e.options.length = 0)
                        }
                        return this
                    },
                    clone: function(e, t) {
                        return e = null == e ? !1 : e,
                            t = null == t ? e: t,
                            this.map(function() {
                                return it.clone(this, e, t)
                            })
                    },
                    html: function(e) {
                        return Mt(this,
                            function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ft, "") : void 0;
                                if (! ("string" != typeof e || Gt.test(e) || !nt.htmlSerialize && $t.test(e) || !nt.leadingWhitespace && Bt.test(e) || Yt[(jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                                    e = e.replace(Ht, "<$1></$2>");
                                    try {
                                        for (; r > n; n++) t = this[n] || {},
                                        1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch(i) {}
                                }
                                t && this.empty().append(e)
                            },
                            null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = arguments[0];
                        return this.domManip(arguments,
                            function(t) {
                                e = this.parentNode,
                                    it.cleanData(g(this)),
                                e && e.replaceChild(t, this)
                            }),
                            e && (e.length || e.nodeType) ? this: this.remove()
                    },
                    detach: function(e) {
                        return this.remove(e, !0)
                    },
                    domManip: function(e, t) {
                        e = K.apply([], e);
                        var n, r, i, s, o, a, l = 0,
                            u = this.length,
                            h = this,
                            c = u - 1,
                            f = e[0],
                            p = it.isFunction(f);
                        if (p || u > 1 && "string" == typeof f && !nt.checkClone && Ut.test(f)) return this.each(function(n) {
                            var r = h.eq(n);
                            p && (e[0] = f.call(this, n, r.html())),
                                r.domManip(e, t)
                        });
                        if (u && (a = it.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                            for (s = it.map(g(a, "script"), b), i = s.length; u > l; l++) r = a,
                            l !== c && (r = it.clone(r, !0, !0), i && it.merge(s, g(r, "script"))),
                                t.call(this[l], r, l);
                            if (i) for (o = s[s.length - 1].ownerDocument, it.map(s, x), l = 0; i > l; l++) r = s[l],
                            Xt.test(r.type || "") && !it._data(r, "globalEval") && it.contains(o, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Wt, "")));
                            a = n = null
                        }
                        return this
                    }
                }),
                it.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    },
                    function(e, t) {
                        it.fn[e] = function(e) {
                            for (var n, r = 0,
                                     i = [], s = it(e), o = s.length - 1; o >= r; r++) n = r === o ? this: this.clone(!0),
                                it(s[r])[t](n),
                                Z.apply(i, n.get());
                            return this.pushStack(i)
                        }
                    });
            var Jt, Qt = {}; !
                function() {
                    var e;
                    nt.shrinkWrapBlocks = function() {
                        if (null != e) return e;
                        e = !1;
                        var t, n, r;
                        return n = dt.getElementsByTagName("body")[0],
                            n && n.style ? (t = dt.createElement("div"), r = dt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Et && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(dt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
                    }
                } ();
            var en, tn, nn = /^margin/,
                rn = new RegExp("^(" + Ct + ")(?!px)[a-z%]+$", "i"),
                sn = /^(top|right|bottom|left)$/;
            e.getComputedStyle ? (en = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            },
                tn = function(e, t, n) {
                    var r, i, s, o, a = e.style;
                    return n = n || en(e),
                        o = n ? n.getPropertyValue(t) || n[t] : void 0,
                    n && ("" !== o || it.contains(e.ownerDocument, e) || (o = it.style(e, t)), rn.test(o) && nn.test(t) && (r = a.width, i = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = r, a.minWidth = i, a.maxWidth = s)),
                        void 0 === o ? o: o + ""
                }) : dt.documentElement.currentStyle && (en = function(e) {
                return e.currentStyle
            },
                tn = function(e, t, n) {
                    var r, i, s, o, a = e.style;
                    return n = n || en(e),
                        o = n ? n[t] : void 0,
                    null == o && a && a[t] && (o = a[t]),
                    rn.test(o) && !sn.test(t) && (r = a.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em": o, o = a.pixelLeft + "px", a.left = r, s && (i.left = s)),
                        void 0 === o ? o: o + "" || "auto"
                }),
                function() {
                    function t() {
                        var t, n, r, i;
                        n = dt.getElementsByTagName("body")[0],
                        n && n.style && (t = dt.createElement("div"), r = dt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, l = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                                width: "4px"
                            }).width, i = t.appendChild(dt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === i[0].offsetHeight, a && (i[0].style.display = "", i[1].style.display = "none", a = 0 === i[0].offsetHeight), n.removeChild(r))
                    }
                    var n, r, i, s, o, a, l;
                    n = dt.createElement("div"),
                        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        i = n.getElementsByTagName("a")[0],
                        r = i && i.style,
                    r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
                        reliableHiddenOffsets: function() {
                            return null == a && t(),
                                a
                        },
                        boxSizingReliable: function() {
                            return null == o && t(),
                                o
                        },
                        pixelPosition: function() {
                            return null == s && t(),
                                s
                        },
                        reliableMarginRight: function() {
                            return null == l && t(),
                                l
                        }
                    }))
                } (),
                it.swap = function(e, t, n, r) {
                    var i, s, o = {};
                    for (s in t) o[s] = e.style[s],
                        e.style[s] = t[s];
                    i = n.apply(e, r || []);
                    for (s in t) e.style[s] = o[s];
                    return i
                };
            var on = /alpha\([^)]*\)/i,
                an = /opacity\s*=\s*([^)]*)/,
                ln = /^(none|table(?!-c[ea]).+)/,
                un = new RegExp("^(" + Ct + ")(.*)$", "i"),
                hn = new RegExp("^([+-])=(" + Ct + ")", "i"),
                cn = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                fn = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                pn = ["Webkit", "O", "Moz", "ms"];
            it.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = tn(e, "opacity");
                                return "" === n ? "1": n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": nt.cssFloat ? "cssFloat": "styleFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, s, o, a = it.camelCase(t),
                            l = e.style;
                        if (t = it.cssProps[a] || (it.cssProps[a] = _(l, a)), o = it.cssHooks[t] || it.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i: l[t];
                        if (s = typeof n, "string" === s && (i = hn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || it.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                            l[t] = n
                        } catch(u) {}
                    }
                },
                css: function(e, t, n, r) {
                    var i, s, o, a = it.camelCase(t);
                    return t = it.cssProps[a] || (it.cssProps[a] = _(e.style, a)),
                        o = it.cssHooks[t] || it.cssHooks[a],
                    o && "get" in o && (s = o.get(e, !0, n)),
                    void 0 === s && (s = tn(e, t, r)),
                    "normal" === s && t in fn && (s = fn[t]),
                        "" === n || n ? (i = parseFloat(s), n === !0 || it.isNumeric(i) ? i || 0 : s) : s
                }
            }),
                it.each(["height", "width"],
                    function(e, t) {
                        it.cssHooks[t] = {
                            get: function(e, n, r) {
                                return n ? ln.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, cn,
                                    function() {
                                        return L(e, t, r)
                                    }) : L(e, t, r) : void 0
                            },
                            set: function(e, n, r) {
                                var i = r && en(e);
                                return M(e, n, r ? R(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
                            }
                        }
                    }),
            nt.opacity || (it.cssHooks.opacity = {
                get: function(e, t) {
                    return an.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
                },
                set: function(e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                        s = r && r.filter || n.filter || "";
                    n.zoom = 1,
                    (t >= 1 || "" === t) && "" === it.trim(s.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = on.test(s) ? s.replace(on, i) : s + " " + i)
                }
            }),
                it.cssHooks.marginRight = C(nt.reliableMarginRight,
                    function(e, t) {
                        return t ? it.swap(e, {
                                display: "inline-block"
                            },
                            tn, [e, "marginRight"]) : void 0
                    }),
                it.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    },
                    function(e, t) {
                        it.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var r = 0,
                                         i = {},
                                         s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + _t[r] + t] = s[r] || s[r - 2] || s[0];
                                return i
                            }
                        },
                        nn.test(e) || (it.cssHooks[e + t].set = M)
                    }),
                it.fn.extend({
                    css: function(e, t) {
                        return Mt(this,
                            function(e, t, n) {
                                var r, i, s = {},
                                    o = 0;
                                if (it.isArray(t)) {
                                    for (r = en(e), i = t.length; i > o; o++) s[t[o]] = it.css(e, t[o], !1, r);
                                    return s
                                }
                                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
                            },
                            e, t, arguments.length > 1)
                    },
                    show: function() {
                        return P(this, !0)
                    },
                    hide: function() {
                        return P(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                            Pt(this) ? it(this).show() : it(this).hide()
                        })
                    }
                }),
                it.Tween = N,
                N.prototype = {
                    constructor: N,
                    init: function(e, t, n, r, i, s) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = i || "swing",
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = r,
                            this.unit = s || (it.cssNumber[n] ? "": "px")
                    },
                    cur: function() {
                        var e = N.propHooks[this.prop];
                        return e && e.get ? e.get(this) : N.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = N.propHooks[this.prop];
                        return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                            this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : N.propHooks._default.set(this),
                            this
                    }
                },
                N.prototype.init.prototype = N.prototype,
                N.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
                        },
                        set: function(e) {
                            it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                        }
                    }
                },
                N.propHooks.scrollTop = N.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                it.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return.5 - Math.cos(e * Math.PI) / 2
                    }
                },
                it.fx = N.prototype.init,
                it.fx.step = {};
            var dn, mn, gn = /^(?:toggle|show|hide)$/,
                vn = new RegExp("^(?:([+-])=|)(" + Ct + ")([a-z%]*)$", "i"),
                yn = /queueHooks$/,
                bn = [O],
                xn = {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = vn.exec(t),
                            s = i && i[3] || (it.cssNumber[e] ? "": "px"),
                            o = (it.cssNumber[e] || "px" !== s && +r) && vn.exec(it.css(n.elem, e)),
                            a = 1,
                            l = 20;
                        if (o && o[3] !== s) {
                            s = s || o[3],
                                i = i || [],
                                o = +r || 1;
                            do a = a || ".5",
                                o /= a,
                                it.style(n.elem, e, o + s);
                            while (a !== (a = n.cur() / r) && 1 !== a && --l)
                        }
                        return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]),
                            n
                    }]
                };
            it.Animation = it.extend($, {
                tweener: function(e, t) {
                    it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0,
                             i = e.length; i > r; r++) n = e[r],
                        xn[n] = xn[n] || [],
                        xn[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? bn.unshift(e) : bn.push(e)
                }
            }),
                it.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? it.extend({},
                        e) : {
                        complete: n || !n && t || it.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !it.isFunction(t) && t
                    };
                    return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default,
                    (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                        r.old = r.complete,
                        r.complete = function() {
                            it.isFunction(r.old) && r.old.call(this),
                            r.queue && it.dequeue(this, r.queue)
                        },
                        r
                },
                it.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(Pt).css("opacity", 0).show().end().animate({
                                opacity: t
                            },
                            e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = it.isEmptyObject(e),
                            s = it.speed(t, n, r),
                            o = function() {
                                var t = $(this, it.extend({},
                                    e), s); (i || it._data(this, "finish")) && t.stop(!0)
                            };
                        return o.finish = o,
                            i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop,
                                t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0),
                        t && e !== !1 && this.queue(e || "fx", []),
                            this.each(function() {
                                var t = !0,
                                    i = null != e && e + "queueHooks",
                                    s = it.timers,
                                    o = it._data(this);
                                if (i) o[i] && o[i].stop && r(o[i]);
                                else for (i in o) o[i] && o[i].stop && yn.test(i) && r(o[i]);
                                for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1)); (t || !n) && it.dequeue(this, e)
                            })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function() {
                                var t, n = it._data(this),
                                    r = n[e + "queue"],
                                    i = n[e + "queueHooks"],
                                    s = it.timers,
                                    o = r ? r.length: 0;
                                for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                it.each(["toggle", "show", "hide"],
                    function(e, t) {
                        var n = it.fn[t];
                        it.fn[t] = function(e, r, i) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, i)
                        }
                    }),
                it.each({
                        slideDown: D("show"),
                        slideUp: D("hide"),
                        slideToggle: D("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    },
                    function(e, t) {
                        it.fn[e] = function(e, n, r) {
                            return this.animate(t, e, n, r)
                        }
                    }),
                it.timers = [],
                it.fx.tick = function() {
                    var e, t = it.timers,
                        n = 0;
                    for (dn = it.now(); n < t.length; n++) e = t[n],
                    e() || t[n] !== e || t.splice(n--, 1);
                    t.length || it.fx.stop(),
                        dn = void 0
                },
                it.fx.timer = function(e) {
                    it.timers.push(e),
                        e() ? it.fx.start() : it.timers.pop()
                },
                it.fx.interval = 13,
                it.fx.start = function() {
                    mn || (mn = setInterval(it.fx.tick, it.fx.interval))
                },
                it.fx.stop = function() {
                    clearInterval(mn),
                        mn = null
                },
                it.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                it.fn.delay = function(e, t) {
                    return e = it.fx ? it.fx.speeds[e] || e: e,
                        t = t || "fx",
                        this.queue(t,
                            function(t, n) {
                                var r = setTimeout(t, e);
                                n.stop = function() {
                                    clearTimeout(r)
                                }
                            })
                },
                function() {
                    var e, t, n, r, i;
                    t = dt.createElement("div"),
                        t.setAttribute("className", "t"),
                        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        r = t.getElementsByTagName("a")[0],
                        n = dt.createElement("select"),
                        i = n.appendChild(dt.createElement("option")),
                        e = t.getElementsByTagName("input")[0],
                        r.style.cssText = "top:1px",
                        nt.getSetAttribute = "t" !== t.className,
                        nt.style = /top/.test(r.getAttribute("style")),
                        nt.hrefNormalized = "/a" === r.getAttribute("href"),
                        nt.checkOn = !!e.value,
                        nt.optSelected = i.selected,
                        nt.enctype = !!dt.createElement("form").enctype,
                        n.disabled = !0,
                        nt.optDisabled = !i.disabled,
                        e = dt.createElement("input"),
                        e.setAttribute("value", ""),
                        nt.input = "" === e.getAttribute("value"),
                        e.value = "t",
                        e.setAttribute("type", "radio"),
                        nt.radioValue = "t" === e.value
                } ();
            var wn = /\r/g;
            it.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0]; {
                        if (arguments.length) return r = it.isFunction(e),
                            this.each(function(n) {
                                var i;
                                1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": it.isArray(i) && (i = it.map(i,
                                    function(e) {
                                        return null == e ? "": e + ""
                                    })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            });
                        if (i) return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()],
                            t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "": n)
                    }
                }
            }),
                it.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = it.find.attr(e, "value");
                                return null != t ? t: it.trim(it.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                for (var t, n, r = e.options,
                                         i = e.selectedIndex,
                                         s = "select-one" === e.type || 0 > i,
                                         o = s ? null: [], a = s ? i + 1 : r.length, l = 0 > i ? a: s ? i: 0; a > l; l++) if (n = r[l], !(!n.selected && l !== i || (nt.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = it(n).val(), s) return t;
                                    o.push(t)
                                }
                                return o
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options,
                                         s = it.makeArray(t), o = i.length; o--;) if (r = i[o], it.inArray(it.valHooks.option.get(r), s) >= 0) try {
                                    r.selected = n = !0
                                } catch(a) {
                                    r.scrollHeight
                                } else r.selected = !1;
                                return n || (e.selectedIndex = -1),
                                    i
                            }
                        }
                    }
                }),
                it.each(["radio", "checkbox"],
                    function() {
                        it.valHooks[this] = {
                            set: function(e, t) {
                                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
                            }
                        },
                        nt.checkOn || (it.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on": e.value
                        })
                    });
            var An, En, Sn = it.expr.attrHandle,
                Tn = /^(?:checked|selected)$/i,
                Cn = nt.getSetAttribute,
                _n = nt.input;
            it.fn.extend({
                attr: function(e, t) {
                    return Mt(this, it.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        it.removeAttr(this, e)
                    })
                }
            }),
                it.extend({
                    attr: function(e, t, n) {
                        var r, i, s = e.nodeType;
                        if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === Et ? it.prop(e, t, n) : (1 === s && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? En: An)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i: (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
                    },
                    removeAttr: function(e, t) {
                        var n, r, i = 0,
                            s = t && t.match(bt);
                        if (s && 1 === e.nodeType) for (; n = s[i++];) r = it.propFix[n] || n,
                            it.expr.match.bool.test(n) ? _n && Cn || !Tn.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""),
                            e.removeAttribute(Cn ? n: r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                        t
                                }
                            }
                        }
                    }
                }),
                En = {
                    set: function(e, t, n) {
                        return t === !1 ? it.removeAttr(e, n) : _n && Cn || !Tn.test(n) ? e.setAttribute(!Cn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0,
                            n
                    }
                },
                it.each(it.expr.match.bool.source.match(/\w+/g),
                    function(e, t) {
                        var n = Sn[t] || it.find.attr;
                        Sn[t] = _n && Cn || !Tn.test(t) ?
                            function(e, t, r) {
                                var i, s;
                                return r || (s = Sn[t], Sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Sn[t] = s),
                                    i
                            }: function(e, t, n) {
                            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
                        }
                    }),
            _n && Cn || (it.attrHooks.value = {
                set: function(e, t, n) {
                    return it.nodeName(e, "input") ? void(e.defaultValue = t) : An && An.set(e, t, n)
                }
            }),
            Cn || (An = {
                set: function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
                        r.value = t += "",
                        "value" === n || t === e.getAttribute(n) ? t: void 0
                }
            },
                Sn.id = Sn.name = Sn.coords = function(e, t, n) {
                    var r;
                    return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value: null
                },
                it.valHooks.button = {
                    get: function(e, t) {
                        var n = e.getAttributeNode(t);
                        return n && n.specified ? n.value: void 0
                    },
                    set: An.set
                },
                it.attrHooks.contenteditable = {
                    set: function(e, t, n) {
                        An.set(e, "" === t ? !1 : t, n)
                    }
                },
                it.each(["width", "height"],
                    function(e, t) {
                        it.attrHooks[t] = {
                            set: function(e, n) {
                                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                            }
                        }
                    })),
            nt.style || (it.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || void 0
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Pn = /^(?:input|select|textarea|button|object)$/i,
                Mn = /^(?:a|area)$/i;
            it.fn.extend({
                prop: function(e, t) {
                    return Mt(this, it.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = it.propFix[e] || e,
                        this.each(function() {
                            try {
                                this[e] = void 0,
                                    delete this[e]
                            } catch(t) {}
                        })
                }
            }),
                it.extend({
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    },
                    prop: function(e, t, n) {
                        var r, i, s, o = e.nodeType;
                        if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !it.isXMLDoc(e),
                        s && (t = it.propFix[t] || t, i = it.propHooks[t]),
                            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = it.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Pn.test(e.nodeName) || Mn.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    }
                }),
            nt.hrefNormalized || it.each(["href", "src"],
                function(e, t) {
                    it.propHooks[t] = {
                        get: function(e) {
                            return e.getAttribute(t, 4)
                        }
                    }
                }),
            nt.optSelected || (it.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                        null
                }
            }),
                it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
                    function() {
                        it.propFix[this.toLowerCase()] = this
                    }),
            nt.enctype || (it.propFix.enctype = "encoding");
            var Rn = /[\t\r\n\f]/g;
            it.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, s, o, a = 0,
                        l = this.length,
                        u = "string" == typeof e && e;
                    if (it.isFunction(e)) return this.each(function(t) {
                        it(this).addClass(e.call(this, t, this.className))
                    });
                    if (u) for (t = (e || "").match(bt) || []; l > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Rn, " ") : " ")) {
                        for (s = 0; i = t[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = it.trim(r),
                        n.className !== o && (n.className = o)
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, s, o, a = 0,
                        l = this.length,
                        u = 0 === arguments.length || "string" == typeof e && e;
                    if (it.isFunction(e)) return this.each(function(t) {
                        it(this).removeClass(e.call(this, t, this.className))
                    });
                    if (u) for (t = (e || "").match(bt) || []; l > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Rn, " ") : "")) {
                        for (s = 0; i = t[s++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        o = e ? it.trim(r) : "",
                        n.className !== o && (n.className = o)
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ?
                        function(n) {
                            it(this).toggleClass(e.call(this, n, this.className, t), t)
                        }: function() {
                        if ("string" === n) for (var t, r = 0,
                                                     i = it(this), s = e.match(bt) || []; t = s[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else(n === Et || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": it._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ",
                             n = 0,
                             r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Rn, " ").indexOf(t) >= 0) return ! 0;
                    return ! 1
                }
            }),
                it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                    function(e, t) {
                        it.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }),
                it.fn.extend({
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    },
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    }
                });
            var Ln = it.now(),
                Nn = /\?/,
                kn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            it.parseJSON = function(t) {
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
                var n, r = null,
                    i = it.trim(t + "");
                return i && !it.trim(i.replace(kn,
                    function(e, t, i, s) {
                        return n && t && (r = 0),
                            0 === r ? e: (n = i || t, r += !s - !i, "")
                    })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
            },
                it.parseXML = function(t) {
                    var n, r;
                    if (!t || "string" != typeof t) return null;
                    try {
                        e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
                    } catch(i) {
                        n = void 0
                    }
                    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t),
                        n
                };
            var Dn, In, On = /#.*$/,
                Fn = /([?&])_=[^&]*/,
                $n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Hn = /^(?:GET|HEAD)$/,
                jn = /^\/\//,
                zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Vn = {},
                Gn = {},
                Un = "*/".concat("*");
            try {
                In = location.href
            } catch(Xn) {
                In = dt.createElement("a"),
                    In.href = "",
                    In = In.href
            }
            Dn = zn.exec(In.toLowerCase()) || [],
                it.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: In,
                        type: "GET",
                        isLocal: Bn.test(Dn[1]),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Un,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /xml/,
                            html: /html/,
                            json: /json/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": it.parseJSON,
                            "text xml": it.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? j(j(e, it.ajaxSettings), t) : j(it.ajaxSettings, e)
                    },
                    ajaxPrefilter: B(Vn),
                    ajaxTransport: B(Gn),
                    ajax: function(e, t) {
                        function n(e, t, n, r) {
                            var i, h, v, y, x, A = t;
                            2 !== b && (b = 2, a && clearTimeout(a), u = void 0, o = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = z(c, w, n)), y = V(c, y, w, i), i ? (c.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[s] = x), x = w.getResponseHeader("etag"), x && (it.etag[s] = x)), 204 === e || "HEAD" === c.type ? A = "nocontent": 304 === e ? A = "notmodified": (A = y.state, h = y.data, v = y.error, i = !v)) : (v = A, (e || !A) && (A = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || A) + "", i ? d.resolveWith(f, [h, A, w]) : d.rejectWith(f, [w, A, v]), w.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess": "ajaxError", [w, c, i ? h: v]), m.fireWith(f, [w, A]), l && (p.trigger("ajaxComplete", [w, c]), --it.active || it.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e, e = void 0),
                            t = t || {};
                        var r, i, s, o, a, l, u, h, c = it.ajaxSetup({},
                            t),
                            f = c.context || c,
                            p = c.context && (f.nodeType || f.jquery) ? it(f) : it.event,
                            d = it.Deferred(),
                            m = it.Callbacks("once memory"),
                            g = c.statusCode || {},
                            v = {},
                            y = {},
                            b = 0,
                            x = "canceled",
                            w = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (2 === b) {
                                        if (!h) for (h = {}; t = $n.exec(o);) h[t[1].toLowerCase()] = t[2];
                                        t = h[e.toLowerCase()]
                                    }
                                    return null == t ? null: t
                                },
                                getAllResponseHeaders: function() {
                                    return 2 === b ? o: null
                                },
                                setRequestHeader: function(e, t) {
                                    var n = e.toLowerCase();
                                    return b || (e = y[n] = y[n] || e, v[e] = t),
                                        this
                                },
                                overrideMimeType: function(e) {
                                    return b || (c.mimeType = e),
                                        this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e) if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                                    else w.always(e[w.status]);
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || x;
                                    return u && u.abort(t),
                                        n(0, t),
                                        this
                                }
                            };
                        if (d.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, c.url = ((e || c.url || In) + "").replace(On, "").replace(jn, Dn[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = it.trim(c.dataType || "*").toLowerCase().match(bt) || [""], null == c.crossDomain && (r = zn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === Dn[1] && r[2] === Dn[2] && (r[3] || ("http:" === r[1] ? "80": "443")) === (Dn[3] || ("http:" === Dn[1] ? "80": "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = it.param(c.data, c.traditional)), H(Vn, c, t, w), 2 === b) return w;
                        l = c.global,
                        l && 0 === it.active++&&it.event.trigger("ajaxStart"),
                            c.type = c.type.toUpperCase(),
                            c.hasContent = !Hn.test(c.type),
                            s = c.url,
                        c.hasContent || (c.data && (s = c.url += (Nn.test(s) ? "&": "?") + c.data, delete c.data), c.cache === !1 && (c.url = Fn.test(s) ? s.replace(Fn, "$1_=" + Ln++) : s + (Nn.test(s) ? "&": "?") + "_=" + Ln++)),
                        c.ifModified && (it.lastModified[s] && w.setRequestHeader("If-Modified-Since", it.lastModified[s]), it.etag[s] && w.setRequestHeader("If-None-Match", it.etag[s])),
                        (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", c.contentType),
                            w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Un + "; q=0.01": "") : c.accepts["*"]);
                        for (i in c.headers) w.setRequestHeader(i, c.headers[i]);
                        if (c.beforeSend && (c.beforeSend.call(f, w, c) === !1 || 2 === b)) return w.abort();
                        x = "abort";
                        for (i in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) w[i](c[i]);
                        if (u = H(Gn, c, t, w)) {
                            w.readyState = 1,
                            l && p.trigger("ajaxSend", [w, c]),
                            c.async && c.timeout > 0 && (a = setTimeout(function() {
                                    w.abort("timeout")
                                },
                                c.timeout));
                            try {
                                b = 1,
                                    u.send(v, n)
                            } catch(A) {
                                if (! (2 > b)) throw A;
                                n( - 1, A)
                            }
                        } else n( - 1, "No Transport");
                        return w
                    },
                    getJSON: function(e, t, n) {
                        return it.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return it.get(e, void 0, t, "script")
                    }
                }),
                it.each(["get", "post"],
                    function(e, t) {
                        it[t] = function(e, n, r, i) {
                            return it.isFunction(n) && (i = i || r, r = n, n = void 0),
                                it.ajax({
                                    url: e,
                                    type: t,
                                    dataType: i,
                                    data: n,
                                    success: r
                                })
                        }
                    }),
                it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                    function(e, t) {
                        it.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    }),
                it._evalUrl = function(e) {
                    return it.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                },
                it.fn.extend({
                    wrapAll: function(e) {
                        if (it.isFunction(e)) return this.each(function(t) {
                            it(this).wrapAll(e.call(this, t))
                        });
                        if (this[0]) {
                            var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]),
                                t.map(function() {
                                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                    return e
                                }).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        return this.each(it.isFunction(e) ?
                            function(t) {
                                it(this).wrapInner(e.call(this, t))
                            }: function() {
                            var t = it(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = it.isFunction(e);
                        return this.each(function(n) {
                            it(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }),
                it.expr.filters.hidden = function(e) {
                    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
                },
                it.expr.filters.visible = function(e) {
                    return ! it.expr.filters.hidden(e)
                };
            var qn = /%20/g,
                Wn = /\[\]$/,
                Yn = /\r?\n/g,
                Kn = /^(?:submit|button|image|reset|file)$/i,
                Zn = /^(?:input|select|textarea|keygen)/i;
            it.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        t = it.isFunction(t) ? t() : null == t ? "": t,
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e,
                    function() {
                        i(this.name, this.value)
                    });
                else for (n in e) G(n, e[n], t, i);
                return r.join("&").replace(qn, "+")
            },
                it.fn.extend({
                    serialize: function() {
                        return it.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = it.prop(this, "elements");
                            return e ? it.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !it(this).is(":disabled") && Zn.test(this.nodeName) && !Kn.test(e) && (this.checked || !Rt.test(e))
                        }).map(function(e, t) {
                            var n = it(this).val();
                            return null == n ? null: it.isArray(n) ? it.map(n,
                                function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(Yn, "\r\n")
                                    }
                                }) : {
                                name: t.name,
                                value: n.replace(Yn, "\r\n")
                            }
                        }).get()
                    }
                }),
                it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
                    function() {
                        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || X()
                    }: U;
            var Jn = 0,
                Qn = {},
                er = it.ajaxSettings.xhr();
            e.ActiveXObject && it(e).on("unload",
                function() {
                    for (var e in Qn) Qn[e](void 0, !0)
                }),
                nt.cors = !!er && "withCredentials" in er,
                er = nt.ajax = !!er,
            er && it.ajaxTransport(function(e) {
                if (!e.crossDomain || nt.cors) {
                    var t;
                    return {
                        send: function(n, r) {
                            var i, s = e.xhr(),
                                o = ++Jn;
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                            e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                            s.send(e.hasContent && e.data || null),
                                t = function(n, i) {
                                    var a, l, u;
                                    if (t && (i || 4 === s.readyState)) if (delete Qn[o], t = void 0, s.onreadystatechange = it.noop, i) 4 !== s.readyState && s.abort();
                                    else {
                                        u = {},
                                            a = s.status,
                                        "string" == typeof s.responseText && (u.text = s.responseText);
                                        try {
                                            l = s.statusText
                                        } catch(h) {
                                            l = ""
                                        }
                                        a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                    }
                                    u && r(a, l, u, s.getAllResponseHeaders())
                                },
                                e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Qn[o] = t: t()
                        },
                        abort: function() {
                            t && t(void 0, !0)
                        }
                    }
                }
            }),
                it.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /(?:java|ecma)script/
                    },
                    converters: {
                        "text script": function(e) {
                            return it.globalEval(e),
                                e
                        }
                    }
                }),
                it.ajaxPrefilter("script",
                    function(e) {
                        void 0 === e.cache && (e.cache = !1),
                        e.crossDomain && (e.type = "GET", e.global = !1)
                    }),
                it.ajaxTransport("script",
                    function(e) {
                        if (e.crossDomain) {
                            var t, n = dt.head || it("head")[0] || dt.documentElement;
                            return {
                                send: function(r, i) {
                                    t = dt.createElement("script"),
                                        t.async = !0,
                                    e.scriptCharset && (t.charset = e.scriptCharset),
                                        t.src = e.url,
                                        t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                                        },
                                        n.insertBefore(t, n.firstChild)
                                },
                                abort: function() {
                                    t && t.onload(void 0, !0)
                                }
                            }
                        }
                    });
            var tr = [],
                nr = /(=)\?(?=&|$)|\?\?/;
            it.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = tr.pop() || it.expando + "_" + Ln++;
                    return this[e] = !0,
                        e
                }
            }),
                it.ajaxPrefilter("json jsonp",
                    function(t, n, r) {
                        var i, s, o, a = t.jsonp !== !1 && (nr.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
                        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Nn.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                            return o || it.error(i + " was not called"),
                                o[0]
                        },
                            t.dataTypes[0] = "json", s = e[i], e[i] = function() {
                            o = arguments
                        },
                            r.always(function() {
                                e[i] = s,
                                t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)),
                                o && it.isFunction(s) && s(o[0]),
                                    o = s = void 0
                            }), "script") : void 0
                    }),
                it.parseHTML = function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1),
                        t = t || dt;
                    var r = ct.exec(e),
                        i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
                };
            var rr = it.fn.load;
            it.fn.load = function(e, t, n) {
                if ("string" != typeof e && rr) return rr.apply(this, arguments);
                var r, i, s, o = this,
                    a = e.indexOf(" ");
                return a >= 0 && (r = it.trim(e.slice(a, e.length)), e = e.slice(0, a)),
                    it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"),
                o.length > 0 && it.ajax({
                    url: e,
                    type: s,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments,
                        o.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
                }).complete(n &&
                    function(e, t) {
                        o.each(n, i || [e.responseText, t, e])
                    }),
                    this
            },
                it.expr.filters.animated = function(e) {
                    return it.grep(it.timers,
                        function(t) {
                            return e === t.elem
                        }).length
                };
            var ir = e.document.documentElement;
            it.offset = {
                setOffset: function(e, t, n) {
                    var r, i, s, o, a, l, u, h = it.css(e, "position"),
                        c = it(e),
                        f = {};
                    "static" === h && (e.style.position = "relative"),
                        a = c.offset(),
                        s = it.css(e, "top"),
                        l = it.css(e, "left"),
                        u = ("absolute" === h || "fixed" === h) && it.inArray("auto", [s, l]) > -1,
                        u ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(l) || 0),
                    it.isFunction(t) && (t = t.call(e, n, a)),
                    null != t.top && (f.top = t.top - a.top + o),
                    null != t.left && (f.left = t.left - a.left + i),
                        "using" in t ? t.using.call(e, f) : c.css(f)
                }
            },
                it.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                            it.offset.setOffset(this, e, t)
                        });
                        var t, n, r = {
                                top: 0,
                                left: 0
                            },
                            i = this[0],
                            s = i && i.ownerDocument;
                        if (s) return t = s.documentElement,
                            it.contains(t, i) ? (typeof i.getBoundingClientRect !== Et && (r = i.getBoundingClientRect()), n = q(s), {
                                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                            }) : r
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n = {
                                    top: 0,
                                    left: 0
                                },
                                r = this[0];
                            return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - n.top - it.css(r, "marginTop", !0),
                                left: t.left - n.left - it.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
                            return e || ir
                        })
                    }
                }),
                it.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    },
                    function(e, t) {
                        var n = /Y/.test(t);
                        it.fn[e] = function(r) {
                            return Mt(this,
                                function(e, r, i) {
                                    var s = q(e);
                                    return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(n ? it(s).scrollLeft() : i, n ? i: it(s).scrollTop()) : e[r] = i)
                                },
                                e, r, arguments.length, null)
                        }
                    }),
                it.each(["top", "left"],
                    function(e, t) {
                        it.cssHooks[t] = C(nt.pixelPosition,
                            function(e, n) {
                                return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px": n) : void 0
                            })
                    }),
                it.each({
                        Height: "height",
                        Width: "width"
                    },
                    function(e, t) {
                        it.each({
                                padding: "inner" + e,
                                content: t,
                                "": "outer" + e
                            },
                            function(n, r) {
                                it.fn[r] = function(r, i) {
                                    var s = arguments.length && (n || "boolean" != typeof r),
                                        o = n || (r === !0 || i === !0 ? "margin": "border");
                                    return Mt(this,
                                        function(t, n, r) {
                                            var i;
                                            return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, o) : it.style(t, n, r, o)
                                        },
                                        t, s ? r: void 0, s, null)
                                }
                            })
                    }),
                it.fn.size = function() {
                    return this.length
                },
                it.fn.andSelf = it.fn.addBack,
            "function" == typeof define && define.amd && define("jquery", [],
                function() {
                    return it
                });
            var sr = e.jQuery,
                or = e.$;
            return it.noConflict = function(t) {
                return e.$ === it && (e.$ = or),
                t && e.jQuery === it && (e.jQuery = sr),
                    it
            },
            typeof t === Et && (e.jQuery = e.$ = it),
                it
        }),
    function(e, t) {
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, r = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote], button[data-confirm]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(t) {
                var n = e('meta[name="csrf-token"]').attr("content");
                n && t.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function() {
                var t = e("meta[name=csrf-token]").attr("content"),
                    n = e("meta[name=csrf-param]").attr("content");
                e('form input[name="' + n + '"]').val(t)
            },
            fire: function(t, n, r) {
                var i = e.Event(n);
                return t.trigger(i, r),
                i.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e.attr("href")
            },
            handleRemote: function(r) {
                var i, s, o, a, l, u, h, c;
                if (n.fire(r, "ajax:before")) {
                    if (a = r.data("cross-domain"), l = a === t ? null: a, u = r.data("with-credentials") || null, h = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                        i = r.attr("method"),
                            s = r.attr("action"),
                            o = r.serializeArray();
                        var f = r.data("ujs:submit-button");
                        f && (o.push(f), r.data("ujs:submit-button", null))
                    } else r.is(n.inputChangeSelector) ? (i = r.data("method"), s = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", s = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : (i = r.data("method"), s = n.href(r), o = r.data("params") || null);
                    return c = {
                        type: i || "GET",
                        data: o,
                        dataType: h,
                        beforeSend: function(e, i) {
                            return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script),
                                n.fire(r, "ajax:beforeSend", [e, i]) ? void r.trigger("ajax:send", e) : !1
                        },
                        success: function(e, t, n) {
                            r.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            r.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            r.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: l
                    },
                    u && (c.xhrFields = {
                        withCredentials: u
                    }),
                    s && (c.url = s),
                        n.ajax(c)
                }
                return ! 1
            },
            handleMethod: function(r) {
                var i = n.href(r),
                    s = r.data("method"),
                    o = r.attr("target"),
                    a = e("meta[name=csrf-token]").attr("content"),
                    l = e("meta[name=csrf-param]").attr("content"),
                    u = e('<form method="post" action="' + i + '"></form>'),
                    h = '<input name="_method" value="' + s + '" type="hidden" />';
                l !== t && a !== t && (h += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
                o && u.attr("target", o),
                    u.hide().append(h).appendTo("body"),
                    u.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, r;
                n = e.is("button") ? "html": "val",
                    r = e.data("disable-with"),
                    e.data("ujs:enable-with", e[n]()),
                r !== t && e[n](r),
                    e.prop("disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var t = e.is("button") ? "html": "val";
                e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")),
                    e.prop("disabled", !1)
            },
            allowAction: function(e) {
                var t, r = e.data("confirm"),
                    i = !1;
                return r ? (n.fire(e, "confirm") && (i = n.confirm(r), t = n.fire(e, "confirm:complete", [i])), i && t) : !0
            },
            blankInputs: function(t, n, r) {
                var i, s, o = e(),
                    a = n || "input,textarea",
                    l = t.find(a);
                return l.each(function() {
                    if (i = e(this), s = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !s == !r) {
                        if (i.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length) return ! 0;
                        o = o.add(i)
                    }
                }),
                    o.length ? o: !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"),
                    t.stopImmediatePropagation(),
                    !1
            },
            disableElement: function(e) {
                var r = e.data("disable-with");
                e.data("ujs:enable-with", e.html()),
                r !== t && e.html(r),
                    e.bind("click.railsDisable",
                        function(e) {
                            return n.stopEverything(e)
                        })
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
                    e.unbind("click.railsDisable")
            }
        },
        n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
            e.crossDomain || n.CSRFProtection(r)
        }), r.delegate(n.linkDisableSelector, "ajax:complete",
            function() {
                n.enableElement(e(this))
            }), r.delegate(n.buttonDisableSelector, "ajax:complete",
            function() {
                n.enableFormElement(e(this))
            }), r.delegate(n.linkClickSelector, "click.rails",
            function(r) {
                var i = e(this),
                    s = i.data("method"),
                    o = i.data("params"),
                    a = r.metaKey || r.ctrlKey;
                if (!n.allowAction(i)) return n.stopEverything(r);
                if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== t) {
                    if (a && (!s || "GET" === s) && !o) return ! 0;
                    var l = n.handleRemote(i);
                    return l === !1 ? n.enableElement(i) : l.error(function() {
                        n.enableElement(i)
                    }),
                        !1
                }
                return i.data("method") ? (n.handleMethod(i), !1) : void 0
            }), r.delegate(n.buttonClickSelector, "click.rails",
            function(t) {
                var r = e(this);
                if (!n.allowAction(r)) return n.stopEverything(t);
                r.is(n.buttonDisableSelector) && n.disableFormElement(r);
                var i = n.handleRemote(r);
                return i === !1 ? n.enableFormElement(r) : i.error(function() {
                    n.enableFormElement(r)
                }),
                    !1
            }), r.delegate(n.inputChangeSelector, "change.rails",
            function(t) {
                var r = e(this);
                return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
            }), r.delegate(n.formSubmitSelector, "submit.rails",
            function(r) {
                var i, s, o = e(this),
                    a = o.data("remote") !== t;
                if (!n.allowAction(o)) return n.stopEverything(r);
                if (o.attr("novalidate") == t && (i = n.blankInputs(o, n.requiredInputSelector), i && n.fire(o, "ajax:aborted:required", [i]))) return n.stopEverything(r);
                if (a) {
                    if (s = n.nonBlankInputs(o, n.fileInputSelector)) {
                        setTimeout(function() {
                                n.disableFormElements(o)
                            },
                            13);
                        var l = n.fire(o, "ajax:aborted:file", [s]);
                        return l || setTimeout(function() {
                                n.enableFormElements(o)
                            },
                            13),
                            l
                    }
                    return n.handleRemote(o),
                        !1
                }
                setTimeout(function() {
                        n.disableFormElements(o)
                    },
                    13)
            }), r.delegate(n.formInputClickSelector, "click.rails",
            function(t) {
                var r = e(this);
                if (!n.allowAction(r)) return n.stopEverything(t);
                var i = r.attr("name"),
                    s = i ? {
                        name: i,
                        value: r.val()
                    }: null;
                r.closest("form").data("ujs:submit-button", s)
            }), r.delegate(n.formSubmitSelector, "ajax:send.rails",
            function(t) {
                this == t.target && n.disableFormElements(e(this))
            }), r.delegate(n.formSubmitSelector, "ajax:complete.rails",
            function(t) {
                this == t.target && n.enableFormElements(e(this))
            }), e(function() {
            n.refreshCSRFTokens()
        }))
    } (jQuery),
    function() {
        var e = this,
            t = e._,
            n = Array.prototype,
            r = Object.prototype,
            i = Function.prototype,
            s = n.push,
            o = n.slice,
            a = n.concat,
            l = r.toString,
            u = r.hasOwnProperty,
            h = Array.isArray,
            c = Object.keys,
            f = i.bind,
            p = function(e) {
                return e instanceof p ? e: this instanceof p ? void(this._wrapped = e) : new p(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : e._ = p,
            p.VERSION = "1.7.0";
        var d = function(e, t, n) {
            if (void 0 === t) return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function(n, r, i, s) {
                        return e.call(t, n, r, i, s)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        };
        p.iteratee = function(e, t, n) {
            return null == e ? p.identity: p.isFunction(e) ? d(e, t, n) : p.isObject(e) ? p.matches(e) : p.property(e)
        },
            p.each = p.forEach = function(e, t, n) {
                if (null == e) return e;
                t = d(t, n);
                var r, i = e.length;
                if (i === +i) for (r = 0; i > r; r++) t(e[r], r, e);
                else {
                    var s = p.keys(e);
                    for (r = 0, i = s.length; i > r; r++) t(e[s[r]], s[r], e)
                }
                return e
            },
            p.map = p.collect = function(e, t, n) {
                if (null == e) return [];
                t = p.iteratee(t, n);
                for (var r, i = e.length !== +e.length && p.keys(e), s = (i || e).length, o = Array(s), a = 0; s > a; a++) r = i ? i[a] : a,
                    o[a] = t(e[r], r, e);
                return o
            };
        var m = "Reduce of empty array with no initial value";
        p.reduce = p.foldl = p.inject = function(e, t, n, r) {
            null == e && (e = []),
                t = d(t, r, 4);
            var i, s = e.length !== +e.length && p.keys(e),
                o = (s || e).length,
                a = 0;
            if (arguments.length < 3) {
                if (!o) throw new TypeError(m);
                n = e[s ? s[a++] : a++]
            }
            for (; o > a; a++) i = s ? s[a] : a,
                n = t(n, e[i], i, e);
            return n
        },
            p.reduceRight = p.foldr = function(e, t, n, r) {
                null == e && (e = []),
                    t = d(t, r, 4);
                var i, s = e.length !== +e.length && p.keys(e),
                    o = (s || e).length;
                if (arguments.length < 3) {
                    if (!o) throw new TypeError(m);
                    n = e[s ? s[--o] : --o]
                }
                for (; o--;) i = s ? s[o] : o,
                    n = t(n, e[i], i, e);
                return n
            },
            p.find = p.detect = function(e, t, n) {
                var r;
                return t = p.iteratee(t, n),
                    p.some(e,
                        function(e, n, i) {
                            return t(e, n, i) ? (r = e, !0) : void 0
                        }),
                    r
            },
            p.filter = p.select = function(e, t, n) {
                var r = [];
                return null == e ? r: (t = p.iteratee(t, n), p.each(e,
                    function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    }), r)
            },
            p.reject = function(e, t, n) {
                return p.filter(e, p.negate(p.iteratee(t)), n)
            },
            p.every = p.all = function(e, t, n) {
                if (null == e) return ! 0;
                t = p.iteratee(t, n);
                var r, i, s = e.length !== +e.length && p.keys(e),
                    o = (s || e).length;
                for (r = 0; o > r; r++) if (i = s ? s[r] : r, !t(e[i], i, e)) return ! 1;
                return ! 0
            },
            p.some = p.any = function(e, t, n) {
                if (null == e) return ! 1;
                t = p.iteratee(t, n);
                var r, i, s = e.length !== +e.length && p.keys(e),
                    o = (s || e).length;
                for (r = 0; o > r; r++) if (i = s ? s[r] : r, t(e[i], i, e)) return ! 0;
                return ! 1
            },
            p.contains = p.include = function(e, t) {
                return null == e ? !1 : (e.length !== +e.length && (e = p.values(e)), p.indexOf(e, t) >= 0)
            },
            p.invoke = function(e, t) {
                var n = o.call(arguments, 2),
                    r = p.isFunction(t);
                return p.map(e,
                    function(e) {
                        return (r ? t: e[t]).apply(e, n)
                    })
            },
            p.pluck = function(e, t) {
                return p.map(e, p.property(t))
            },
            p.where = function(e, t) {
                return p.filter(e, p.matches(t))
            },
            p.findWhere = function(e, t) {
                return p.find(e, p.matches(t))
            },
            p.max = function(e, t, n) {
                var r, i, s = -1 / 0,
                    o = -1 / 0;
                if (null == t && null != e) {
                    e = e.length === +e.length ? e: p.values(e);
                    for (var a = 0,
                             l = e.length; l > a; a++) r = e[a],
                    r > s && (s = r)
                } else t = p.iteratee(t, n),
                    p.each(e,
                        function(e, n, r) {
                            i = t(e, n, r),
                            (i > o || i === -1 / 0 && s === -1 / 0) && (s = e, o = i)
                        });
                return s
            },
            p.min = function(e, t, n) {
                var r, i, s = 1 / 0,
                    o = 1 / 0;
                if (null == t && null != e) {
                    e = e.length === +e.length ? e: p.values(e);
                    for (var a = 0,
                             l = e.length; l > a; a++) r = e[a],
                    s > r && (s = r)
                } else t = p.iteratee(t, n),
                    p.each(e,
                        function(e, n, r) {
                            i = t(e, n, r),
                            (o > i || 1 / 0 === i && 1 / 0 === s) && (s = e, o = i)
                        });
                return s
            },
            p.shuffle = function(e) {
                for (var t, n = e && e.length === +e.length ? e: p.values(e), r = n.length, i = Array(r), s = 0; r > s; s++) t = p.random(0, s),
                t !== s && (i[s] = i[t]),
                    i[t] = n[s];
                return i
            },
            p.sample = function(e, t, n) {
                return null == t || n ? (e.length !== +e.length && (e = p.values(e)), e[p.random(e.length - 1)]) : p.shuffle(e).slice(0, Math.max(0, t))
            },
            p.sortBy = function(e, t, n) {
                return t = p.iteratee(t, n),
                    p.pluck(p.map(e,
                        function(e, n, r) {
                            return {
                                value: e,
                                index: n,
                                criteria: t(e, n, r)
                            }
                        }).sort(function(e, t) {
                        var n = e.criteria,
                            r = t.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (r > n || void 0 === r) return - 1
                        }
                        return e.index - t.index
                    }), "value")
            };
        var g = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = p.iteratee(n, r),
                    p.each(t,
                        function(r, s) {
                            var o = n(r, s, t);
                            e(i, r, o)
                        }),
                    i
            }
        };
        p.groupBy = g(function(e, t, n) {
            p.has(e, n) ? e[n].push(t) : e[n] = [t]
        }),
            p.indexBy = g(function(e, t, n) {
                e[n] = t
            }),
            p.countBy = g(function(e, t, n) {
                p.has(e, n) ? e[n]++:e[n] = 1
            }),
            p.sortedIndex = function(e, t, n, r) {
                n = p.iteratee(n, r, 1);
                for (var i = n(t), s = 0, o = e.length; o > s;) {
                    var a = s + o >>> 1;
                    n(e[a]) < i ? s = a + 1 : o = a
                }
                return s
            },
            p.toArray = function(e) {
                return e ? p.isArray(e) ? o.call(e) : e.length === +e.length ? p.map(e, p.identity) : p.values(e) : []
            },
            p.size = function(e) {
                return null == e ? 0 : e.length === +e.length ? e.length: p.keys(e).length
            },
            p.partition = function(e, t, n) {
                t = p.iteratee(t, n);
                var r = [],
                    i = [];
                return p.each(e,
                    function(e, n, s) { (t(e, n, s) ? r: i).push(e)
                    }),
                    [r, i]
            },
            p.first = p.head = p.take = function(e, t, n) {
                return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : o.call(e, 0, t)
            },
            p.initial = function(e, t, n) {
                return o.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
            },
            p.last = function(e, t, n) {
                return null == e ? void 0 : null == t || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
            },
            p.rest = p.tail = p.drop = function(e, t, n) {
                return o.call(e, null == t || n ? 1 : t)
            },
            p.compact = function(e) {
                return p.filter(e, p.identity)
            };
        var v = function(e, t, n, r) {
            if (t && p.every(e, p.isArray)) return a.apply(r, e);
            for (var i = 0,
                     o = e.length; o > i; i++) {
                var l = e[i];
                p.isArray(l) || p.isArguments(l) ? t ? s.apply(r, l) : v(l, t, n, r) : n || r.push(l)
            }
            return r
        };
        p.flatten = function(e, t) {
            return v(e, t, !1, [])
        },
            p.without = function(e) {
                return p.difference(e, o.call(arguments, 1))
            },
            p.uniq = p.unique = function(e, t, n, r) {
                if (null == e) return [];
                p.isBoolean(t) || (r = n, n = t, t = !1),
                null != n && (n = p.iteratee(n, r));
                for (var i = [], s = [], o = 0, a = e.length; a > o; o++) {
                    var l = e[o];
                    if (t) o && s === l || i.push(l),
                        s = l;
                    else if (n) {
                        var u = n(l, o, e);
                        p.indexOf(s, u) < 0 && (s.push(u), i.push(l))
                    } else p.indexOf(i, l) < 0 && i.push(l)
                }
                return i
            },
            p.union = function() {
                return p.uniq(v(arguments, !0, !0, []))
            },
            p.intersection = function(e) {
                if (null == e) return [];
                for (var t = [], n = arguments.length, r = 0, i = e.length; i > r; r++) {
                    var s = e[r];
                    if (!p.contains(t, s)) {
                        for (var o = 1; n > o && p.contains(arguments[o], s); o++);
                        o === n && t.push(s)
                    }
                }
                return t
            },
            p.difference = function(e) {
                var t = v(o.call(arguments, 1), !0, !0, []);
                return p.filter(e,
                    function(e) {
                        return ! p.contains(t, e)
                    })
            },
            p.zip = function(e) {
                if (null == e) return [];
                for (var t = p.max(arguments, "length").length, n = Array(t), r = 0; t > r; r++) n[r] = p.pluck(arguments, r);
                return n
            },
            p.object = function(e, t) {
                if (null == e) return {};
                for (var n = {},
                         r = 0,
                         i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            },
            p.indexOf = function(e, t, n) {
                if (null == e) return - 1;
                var r = 0,
                    i = e.length;
                if (n) {
                    if ("number" != typeof n) return r = p.sortedIndex(e, t),
                        e[r] === t ? r: -1;
                    r = 0 > n ? Math.max(0, i + n) : n
                }
                for (; i > r; r++) if (e[r] === t) return r;
                return - 1
            },
            p.lastIndexOf = function(e, t, n) {
                if (null == e) return - 1;
                var r = e.length;
                for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;) if (e[r] === t) return r;
                return - 1
            },
            p.range = function(e, t, n) {
                arguments.length <= 1 && (t = e || 0, e = 0),
                    n = n || 1;
                for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), s = 0; r > s; s++, e += n) i[s] = e;
                return i
            };
        var y = function() {};
        p.bind = function(e, t) {
            var n, r;
            if (f && e.bind === f) return f.apply(e, o.call(arguments, 1));
            if (!p.isFunction(e)) throw new TypeError("Bind must be called on a function");
            return n = o.call(arguments, 2),
                r = function() {
                    if (! (this instanceof r)) return e.apply(t, n.concat(o.call(arguments)));
                    y.prototype = e.prototype;
                    var i = new y;
                    y.prototype = null;
                    var s = e.apply(i, n.concat(o.call(arguments)));
                    return p.isObject(s) ? s: i
                }
        },
            p.partial = function(e) {
                var t = o.call(arguments, 1);
                return function() {
                    for (var n = 0,
                             r = t.slice(), i = 0, s = r.length; s > i; i++) r[i] === p && (r[i] = arguments[n++]);
                    for (; n < arguments.length;) r.push(arguments[n++]);
                    return e.apply(this, r)
                }
            },
            p.bindAll = function(e) {
                var t, n, r = arguments.length;
                if (1 >= r) throw new Error("bindAll must be passed function names");
                for (t = 1; r > t; t++) n = arguments[t],
                    e[n] = p.bind(e[n], e);
                return e
            },
            p.memoize = function(e, t) {
                var n = function(r) {
                    var i = n.cache,
                        s = t ? t.apply(this, arguments) : r;
                    return p.has(i, s) || (i[s] = e.apply(this, arguments)),
                        i[s]
                };
                return n.cache = {},
                    n
            },
            p.delay = function(e, t) {
                var n = o.call(arguments, 2);
                return setTimeout(function() {
                        return e.apply(null, n)
                    },
                    t)
            },
            p.defer = function(e) {
                return p.delay.apply(p, [e, 1].concat(o.call(arguments, 1)))
            },
            p.throttle = function(e, t, n) {
                var r, i, s, o = null,
                    a = 0;
                n || (n = {});
                var l = function() {
                    a = n.leading === !1 ? 0 : p.now(),
                        o = null,
                        s = e.apply(r, i),
                    o || (r = i = null)
                };
                return function() {
                    var u = p.now();
                    a || n.leading !== !1 || (a = u);
                    var h = t - (u - a);
                    return r = this,
                        i = arguments,
                        0 >= h || h > t ? (clearTimeout(o), o = null, a = u, s = e.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(l, h)),
                        s
                }
            },
            p.debounce = function(e, t, n) {
                var r, i, s, o, a, l = function() {
                    var u = p.now() - o;
                    t > u && u > 0 ? r = setTimeout(l, t - u) : (r = null, n || (a = e.apply(s, i), r || (s = i = null)))
                };
                return function() {
                    s = this,
                        i = arguments,
                        o = p.now();
                    var u = n && !r;
                    return r || (r = setTimeout(l, t)),
                    u && (a = e.apply(s, i), s = i = null),
                        a
                }
            },
            p.wrap = function(e, t) {
                return p.partial(t, e)
            },
            p.negate = function(e) {
                return function() {
                    return ! e.apply(this, arguments)
                }
            },
            p.compose = function() {
                var e = arguments,
                    t = e.length - 1;
                return function() {
                    for (var n = t,
                             r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                    return r
                }
            },
            p.after = function(e, t) {
                return function() {
                    return--e < 1 ? t.apply(this, arguments) : void 0
                }
            },
            p.before = function(e, t) {
                var n;
                return function() {
                    return--e > 0 ? n = t.apply(this, arguments) : t = null,
                        n
                }
            },
            p.once = p.partial(p.before, 2),
            p.keys = function(e) {
                if (!p.isObject(e)) return [];
                if (c) return c(e);
                var t = [];
                for (var n in e) p.has(e, n) && t.push(n);
                return t
            },
            p.values = function(e) {
                for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
                return r
            },
            p.pairs = function(e) {
                for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
                return r
            },
            p.invert = function(e) {
                for (var t = {},
                         n = p.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
                return t
            },
            p.functions = p.methods = function(e) {
                var t = [];
                for (var n in e) p.isFunction(e[n]) && t.push(n);
                return t.sort()
            },
            p.extend = function(e) {
                if (!p.isObject(e)) return e;
                for (var t, n, r = 1,
                         i = arguments.length; i > r; r++) {
                    t = arguments[r];
                    for (n in t) u.call(t, n) && (e[n] = t[n])
                }
                return e
            },
            p.pick = function(e, t, n) {
                var r, i = {};
                if (null == e) return i;
                if (p.isFunction(t)) {
                    t = d(t, n);
                    for (r in e) {
                        var s = e[r];
                        t(s, r, e) && (i[r] = s)
                    }
                } else {
                    var l = a.apply([], o.call(arguments, 1));
                    e = new Object(e);
                    for (var u = 0,
                             h = l.length; h > u; u++) r = l[u],
                    r in e && (i[r] = e[r])
                }
                return i
            },
            p.omit = function(e, t, n) {
                if (p.isFunction(t)) t = p.negate(t);
                else {
                    var r = p.map(a.apply([], o.call(arguments, 1)), String);
                    t = function(e, t) {
                        return ! p.contains(r, t)
                    }
                }
                return p.pick(e, t, n)
            },
            p.defaults = function(e) {
                if (!p.isObject(e)) return e;
                for (var t = 1,
                         n = arguments.length; n > t; t++) {
                    var r = arguments[t];
                    for (var i in r) void 0 === e[i] && (e[i] = r[i])
                }
                return e
            },
            p.clone = function(e) {
                return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({},
                    e) : e
            },
            p.tap = function(e, t) {
                return t(e),
                    e
            };
        var b = function(e, t, n, r) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof p && (e = e._wrapped),
            t instanceof p && (t = t._wrapped);
            var i = l.call(e);
            if (i !== l.call(t)) return ! 1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return + e !== +e ? +t !== +t: 0 === +e ? 1 / +e === 1 / t: +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return + e === +t
            }
            if ("object" != typeof e || "object" != typeof t) return ! 1;
            for (var s = n.length; s--;) if (n[s] === e) return r[s] === t;
            var o = e.constructor,
                a = t.constructor;
            if (o !== a && "constructor" in e && "constructor" in t && !(p.isFunction(o) && o instanceof o && p.isFunction(a) && a instanceof a)) return ! 1;
            n.push(e),
                r.push(t);
            var u, h;
            if ("[object Array]" === i) {
                if (u = e.length, h = u === t.length) for (; u--&&(h = b(e[u], t[u], n, r)););
            } else {
                var c, f = p.keys(e);
                if (u = f.length, h = p.keys(t).length === u) for (; u--&&(c = f[u], h = p.has(t, c) && b(e[c], t[c], n, r)););
            }
            return n.pop(),
                r.pop(),
                h
        };
        p.isEqual = function(e, t) {
            return b(e, t, [], [])
        },
            p.isEmpty = function(e) {
                if (null == e) return ! 0;
                if (p.isArray(e) || p.isString(e) || p.isArguments(e)) return 0 === e.length;
                for (var t in e) if (p.has(e, t)) return ! 1;
                return ! 0
            },
            p.isElement = function(e) {
                return ! (!e || 1 !== e.nodeType)
            },
            p.isArray = h ||
                function(e) {
                    return "[object Array]" === l.call(e)
                },
            p.isObject = function(e) {
                var t = typeof e;
                return "function" === t || "object" === t && !!e
            },
            p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
                function(e) {
                    p["is" + e] = function(t) {
                        return l.call(t) === "[object " + e + "]"
                    }
                }),
        p.isArguments(arguments) || (p.isArguments = function(e) {
            return p.has(e, "callee")
        }),
        "function" != typeof / . / &&(p.isFunction = function(e) {
            return "function" == typeof e || !1
        }),
            p.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            },
            p.isNaN = function(e) {
                return p.isNumber(e) && e !== +e
            },
            p.isBoolean = function(e) {
                return e === !0 || e === !1 || "[object Boolean]" === l.call(e)
            },
            p.isNull = function(e) {
                return null === e
            },
            p.isUndefined = function(e) {
                return void 0 === e
            },
            p.has = function(e, t) {
                return null != e && u.call(e, t)
            },
            p.noConflict = function() {
                return e._ = t,
                    this
            },
            p.identity = function(e) {
                return e
            },
            p.constant = function(e) {
                return function() {
                    return e
                }
            },
            p.noop = function() {},
            p.property = function(e) {
                return function(t) {
                    return t[e]
                }
            },
            p.matches = function(e) {
                var t = p.pairs(e),
                    n = t.length;
                return function(e) {
                    if (null == e) return ! n;
                    e = new Object(e);
                    for (var r = 0; n > r; r++) {
                        var i = t[r],
                            s = i[0];
                        if (i[1] !== e[s] || !(s in e)) return ! 1
                    }
                    return ! 0
                }
            },
            p.times = function(e, t, n) {
                var r = Array(Math.max(0, e));
                t = d(t, n, 1);
                for (var i = 0; e > i; i++) r[i] = t(i);
                return r
            },
            p.random = function(e, t) {
                return null == t && (t = e, e = 0),
                e + Math.floor(Math.random() * (t - e + 1))
            },
            p.now = Date.now ||
                function() {
                    return (new Date).getTime()
                };
        var x = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            w = p.invert(x),
            A = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + p.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "": "" + e,
                        r.test(e) ? e.replace(i, t) : e
                }
            };
        p.escape = A(x),
            p.unescape = A(w),
            p.result = function(e, t) {
                if (null == e) return void 0;
                var n = e[t];
                return p.isFunction(n) ? e[t]() : n
            };
        var E = 0;
        p.uniqueId = function(e) {
            var t = ++E + "";
            return e ? e + t: t
        },
            p.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
        var S = /(.)^/,
            T = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            C = /\\|'|\r|\n|\u2028|\u2029/g,
            _ = function(e) {
                return "\\" + T[e]
            };
        p.template = function(e, t, n) { ! t && n && (t = n),
            t = p.defaults({},
                t, p.templateSettings);
            var r = RegExp([(t.escape || S).source, (t.interpolate || S).source, (t.evaluate || S).source].join("|") + "|$", "g"),
                i = 0,
                s = "__p+='";
            e.replace(r,
                function(t, n, r, o, a) {
                    return s += e.slice(i, a).replace(C, _),
                        i = a + t.length,
                        n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": o && (s += "';\n" + o + "\n__p+='"),
                        t
                }),
                s += "';\n",
            t.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var o = new Function(t.variable || "obj", "_", s)
            } catch(a) {
                throw a.source = s,
                    a
            }
            var l = function(e) {
                    return o.call(this, e, p)
                },
                u = t.variable || "obj";
            return l.source = "function(" + u + "){\n" + s + "}",
                l
        },
            p.chain = function(e) {
                var t = p(e);
                return t._chain = !0,
                    t
            };
        var P = function(e) {
            return this._chain ? p(e).chain() : e
        };
        p.mixin = function(e) {
            p.each(p.functions(e),
                function(t) {
                    var n = p[t] = e[t];
                    p.prototype[t] = function() {
                        var e = [this._wrapped];
                        return s.apply(e, arguments),
                            P.call(this, n.apply(p, e))
                    }
                })
        },
            p.mixin(p),
            p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
                function(e) {
                    var t = n[e];
                    p.prototype[e] = function() {
                        var n = this._wrapped;
                        return t.apply(n, arguments),
                        "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
                            P.call(this, n)
                    }
                }),
            p.each(["concat", "join", "slice"],
                function(e) {
                    var t = n[e];
                    p.prototype[e] = function() {
                        return P.call(this, t.apply(this._wrapped, arguments))
                    }
                }),
            p.prototype.value = function() {
                return this._wrapped
            },
        "function" == typeof define && define.amd && define("underscore", [],
            function() {
                return p
            })
    }.call(this),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"],
            function(n, r, i) {
                e.Backbone = t(e, i, n, r)
            });
        else if ("undefined" != typeof exports) {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {},
            e._, e.jQuery || e.Zepto || e.ender || e.$)
    } (this,
        function(e, t, n, r) {
            {
                var i = e.Backbone,
                    s = [],
                    o = (s.push, s.slice);
                s.splice
            }
            t.VERSION = "1.1.2",
                t.$ = r,
                t.noConflict = function() {
                    return e.Backbone = i,
                        this
                },
                t.emulateHTTP = !1,
                t.emulateJSON = !1;
            var a = t.Events = {
                    on: function(e, t, n) {
                        if (!u(this, "on", e, [t, n]) || !t) return this;
                        this._events || (this._events = {});
                        var r = this._events[e] || (this._events[e] = []);
                        return r.push({
                            callback: t,
                            context: n,
                            ctx: n || this
                        }),
                            this
                    },
                    once: function(e, t, r) {
                        if (!u(this, "once", e, [t, r]) || !t) return this;
                        var i = this,
                            s = n.once(function() {
                                i.off(e, s),
                                    t.apply(this, arguments)
                            });
                        return s._callback = t,
                            this.on(e, s, r)
                    },
                    off: function(e, t, r) {
                        var i, s, o, a, l, h, c, f;
                        if (!this._events || !u(this, "off", e, [t, r])) return this;
                        if (!e && !t && !r) return this._events = void 0,
                            this;
                        for (a = e ? [e] : n.keys(this._events), l = 0, h = a.length; h > l; l++) if (e = a[l], o = this._events[e]) {
                            if (this._events[e] = i = [], t || r) for (c = 0, f = o.length; f > c; c++) s = o[c],
                            (t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && i.push(s);
                            i.length || delete this._events[e]
                        }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var t = o.call(arguments, 1);
                        if (!u(this, "trigger", e, t)) return this;
                        var n = this._events[e],
                            r = this._events.all;
                        return n && h(n, t),
                        r && h(r, arguments),
                            this
                    },
                    stopListening: function(e, t, r) {
                        var i = this._listeningTo;
                        if (!i) return this;
                        var s = !t && !r;
                        r || "object" != typeof t || (r = this),
                        e && ((i = {})[e._listenId] = e);
                        for (var o in i) e = i[o],
                            e.off(t, r, this),
                        (s || n.isEmpty(e._events)) && delete this._listeningTo[o];
                        return this
                    }
                },
                l = /\s+/,
                u = function(e, t, n, r) {
                    if (!n) return ! 0;
                    if ("object" == typeof n) {
                        for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                        return ! 1
                    }
                    if (l.test(n)) {
                        for (var s = n.split(l), o = 0, a = s.length; a > o; o++) e[t].apply(e, [s[o]].concat(r));
                        return ! 1
                    }
                    return ! 0
                },
                h = function(e, t) {
                    var n, r = -1,
                        i = e.length,
                        s = t[0],
                        o = t[1],
                        a = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++r < i;)(n = e[r]).callback.call(n.ctx, s);
                            return;
                        case 2:
                            for (; ++r < i;)(n = e[r]).callback.call(n.ctx, s, o);
                            return;
                        case 3:
                            for (; ++r < i;)(n = e[r]).callback.call(n.ctx, s, o, a);
                            return;
                        default:
                            for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t);
                            return
                    }
                },
                c = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            n.each(c,
                function(e, t) {
                    a[t] = function(t, r, i) {
                        var s = this._listeningTo || (this._listeningTo = {}),
                            o = t._listenId || (t._listenId = n.uniqueId("l"));
                        return s[o] = t,
                        i || "object" != typeof r || (i = this),
                            t[e](r, i, this),
                            this
                    }
                }),
                a.bind = a.on,
                a.unbind = a.off,
                n.extend(t, a);
            var f = t.Model = function(e, t) {
                var r = e || {};
                t || (t = {}),
                    this.cid = n.uniqueId("c"),
                    this.attributes = {},
                t.collection && (this.collection = t.collection),
                t.parse && (r = this.parse(r, t) || {}),
                    r = n.defaults({},
                        r, n.result(this, "defaults")),
                    this.set(r, t),
                    this.changed = {},
                    this.initialize.apply(this, arguments)
            };
            n.extend(f.prototype, a, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function() {
                    return n.clone(this.attributes)
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                get: function(e) {
                    return this.attributes[e]
                },
                escape: function(e) {
                    return n.escape(this.get(e))
                },
                has: function(e) {
                    return null != this.get(e)
                },
                set: function(e, t, r) {
                    var i, s, o, a, l, u, h, c;
                    if (null == e) return this;
                    if ("object" == typeof e ? (s = e, r = t) : (s = {})[e] = t, r || (r = {}), !this._validate(s, r)) return ! 1;
                    o = r.unset,
                        l = r.silent,
                        a = [],
                        u = this._changing,
                        this._changing = !0,
                    u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}),
                        c = this.attributes,
                        h = this._previousAttributes,
                    this.idAttribute in s && (this.id = s[this.idAttribute]);
                    for (i in s) t = s[i],
                    n.isEqual(c[i], t) || a.push(i),
                        n.isEqual(h[i], t) ? delete this.changed[i] : this.changed[i] = t,
                        o ? delete c[i] : c[i] = t;
                    if (!l) {
                        a.length && (this._pending = r);
                        for (var f = 0,
                                 p = a.length; p > f; f++) this.trigger("change:" + a[f], this, c[a[f]], r)
                    }
                    if (u) return this;
                    if (!l) for (; this._pending;) r = this._pending,
                        this._pending = !1,
                        this.trigger("change", this, r);
                    return this._pending = !1,
                        this._changing = !1,
                        this
                },
                unset: function(e, t) {
                    return this.set(e, void 0, n.extend({},
                        t, {
                            unset: !0
                        }))
                },
                clear: function(e) {
                    var t = {};
                    for (var r in this.attributes) t[r] = void 0;
                    return this.set(t, n.extend({},
                        e, {
                            unset: !0
                        }))
                },
                hasChanged: function(e) {
                    return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
                },
                changedAttributes: function(e) {
                    if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                    var t, r = !1,
                        i = this._changing ? this._previousAttributes: this.attributes;
                    for (var s in e) n.isEqual(i[s], t = e[s]) || ((r || (r = {}))[s] = t);
                    return r
                },
                previous: function(e) {
                    return null != e && this._previousAttributes ? this._previousAttributes[e] : null
                },
                previousAttributes: function() {
                    return n.clone(this._previousAttributes)
                },
                fetch: function(e) {
                    e = e ? n.clone(e) : {},
                    void 0 === e.parse && (e.parse = !0);
                    var t = this,
                        r = e.success;
                    return e.success = function(n) {
                        return t.set(t.parse(n, e), e) ? (r && r(t, n, e), void t.trigger("sync", t, n, e)) : !1
                    },
                        F(this, e),
                        this.sync("read", this, e)
                },
                save: function(e, t, r) {
                    var i, s, o, a = this.attributes;
                    if (null == e || "object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
                                validate: !0
                            },
                            r), i && !r.wait) {
                        if (!this.set(i, r)) return ! 1
                    } else if (!this._validate(i, r)) return ! 1;
                    i && r.wait && (this.attributes = n.extend({},
                        a, i)),
                    void 0 === r.parse && (r.parse = !0);
                    var l = this,
                        u = r.success;
                    return r.success = function(e) {
                        l.attributes = a;
                        var t = l.parse(e, r);
                        return r.wait && (t = n.extend(i || {},
                            t)),
                            n.isObject(t) && !l.set(t, r) ? !1 : (u && u(l, e, r), void l.trigger("sync", l, e, r))
                    },
                        F(this, r),
                        s = this.isNew() ? "create": r.patch ? "patch": "update",
                    "patch" === s && (r.attrs = i),
                        o = this.sync(s, this, r),
                    i && r.wait && (this.attributes = a),
                        o
                },
                destroy: function(e) {
                    e = e ? n.clone(e) : {};
                    var t = this,
                        r = e.success,
                        i = function() {
                            t.trigger("destroy", t, t.collection, e)
                        };
                    if (e.success = function(n) { (e.wait || t.isNew()) && i(),
                        r && r(t, n, e),
                        t.isNew() || t.trigger("sync", t, n, e)
                        },
                            this.isNew()) return e.success(),
                        !1;
                    F(this, e);
                    var s = this.sync("delete", this, e);
                    return e.wait || i(),
                        s
                },
                url: function() {
                    var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || O();
                    return this.isNew() ? e: e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                },
                parse: function(e) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return ! this.has(this.idAttribute)
                },
                isValid: function(e) {
                    return this._validate({},
                        n.extend(e || {},
                            {
                                validate: !0
                            }))
                },
                _validate: function(e, t) {
                    if (!t.validate || !this.validate) return ! 0;
                    e = n.extend({},
                        this.attributes, e);
                    var r = this.validationError = this.validate(e, t) || null;
                    return r ? (this.trigger("invalid", this, r, n.extend(t, {
                        validationError: r
                    })), !1) : !0
                }
            });
            var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
            n.each(p,
                function(e) {
                    f.prototype[e] = function() {
                        var t = o.call(arguments);
                        return t.unshift(this.attributes),
                            n[e].apply(n, t)
                    }
                });
            var d = t.Collection = function(e, t) {
                    t || (t = {}),
                    t.model && (this.model = t.model),
                    void 0 !== t.comparator && (this.comparator = t.comparator),
                        this._reset(),
                        this.initialize.apply(this, arguments),
                    e && this.reset(e, n.extend({
                            silent: !0
                        },
                        t))
                },
                m = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                g = {
                    add: !0,
                    remove: !1
                };
            n.extend(d.prototype, a, {
                model: f,
                initialize: function() {},
                toJSON: function(e) {
                    return this.map(function(t) {
                        return t.toJSON(e)
                    })
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                add: function(e, t) {
                    return this.set(e, n.extend({
                            merge: !1
                        },
                        t, g))
                },
                remove: function(e, t) {
                    var r = !n.isArray(e);
                    e = r ? [e] : n.clone(e),
                    t || (t = {});
                    var i, s, o, a;
                    for (i = 0, s = e.length; s > i; i++) a = e[i] = this.get(e[i]),
                    a && (delete this._byId[a.id], delete this._byId[a.cid], o = this.indexOf(a), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, a.trigger("remove", a, this, t)), this._removeReference(a, t));
                    return r ? e[0] : e
                },
                set: function(e, t) {
                    t = n.defaults({},
                        t, m),
                    t.parse && (e = this.parse(e, t));
                    var r = !n.isArray(e);
                    e = r ? e ? [e] : [] : n.clone(e);
                    var i, s, o, a, l, u, h, c = t.at,
                        p = this.model,
                        d = this.comparator && null == c && t.sort !== !1,
                        g = n.isString(this.comparator) ? this.comparator: null,
                        v = [],
                        y = [],
                        b = {},
                        x = t.add,
                        w = t.merge,
                        A = t.remove,
                        E = !d && x && A ? [] : !1;
                    for (i = 0, s = e.length; s > i; i++) {
                        if (l = e[i] || {},
                                o = l instanceof f ? a = l: l[p.prototype.idAttribute || "id"], u = this.get(o)) A && (b[u.cid] = !0),
                        w && (l = l === a ? a.attributes: l, t.parse && (l = u.parse(l, t)), u.set(l, t), d && !h && u.hasChanged(g) && (h = !0)),
                            e[i] = u;
                        else if (x) {
                            if (a = e[i] = this._prepareModel(l, t), !a) continue;
                            v.push(a),
                                this._addReference(a, t)
                        }
                        a = u || a,
                        !E || !a.isNew() && b[a.id] || E.push(a),
                            b[a.id] = !0
                    }
                    if (A) {
                        for (i = 0, s = this.length; s > i; ++i) b[(a = this.models[i]).cid] || y.push(a);
                        y.length && this.remove(y, t)
                    }
                    if (v.length || E && E.length) if (d && (h = !0), this.length += v.length, null != c) for (i = 0, s = v.length; s > i; i++) this.models.splice(c + i, 0, v[i]);
                    else {
                        E && (this.models.length = 0);
                        var S = E || v;
                        for (i = 0, s = S.length; s > i; i++) this.models.push(S[i])
                    }
                    if (h && this.sort({
                            silent: !0
                        }), !t.silent) {
                        for (i = 0, s = v.length; s > i; i++)(a = v[i]).trigger("add", a, this, t); (h || E && E.length) && this.trigger("sort", this, t)
                    }
                    return r ? e[0] : e
                },
                reset: function(e, t) {
                    t || (t = {});
                    for (var r = 0,
                             i = this.models.length; i > r; r++) this._removeReference(this.models[r], t);
                    return t.previousModels = this.models,
                        this._reset(),
                        e = this.add(e, n.extend({
                                silent: !0
                            },
                            t)),
                    t.silent || this.trigger("reset", this, t),
                        e
                },
                push: function(e, t) {
                    return this.add(e, n.extend({
                            at: this.length
                        },
                        t))
                },
                pop: function(e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e),
                        t
                },
                unshift: function(e, t) {
                    return this.add(e, n.extend({
                            at: 0
                        },
                        t))
                },
                shift: function(e) {
                    var t = this.at(0);
                    return this.remove(t, e),
                        t
                },
                slice: function() {
                    return o.apply(this.models, arguments)
                },
                get: function(e) {
                    return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
                },
                at: function(e) {
                    return this.models[e]
                },
                where: function(e, t) {
                    return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find": "filter"](function(t) {
                        for (var n in e) if (e[n] !== t.get(n)) return ! 1;
                        return ! 0
                    })
                },
                findWhere: function(e) {
                    return this.where(e, !0)
                },
                sort: function(e) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return e || (e = {}),
                        n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
                    e.silent || this.trigger("sort", this, e),
                        this
                },
                pluck: function(e) {
                    return n.invoke(this.models, "get", e)
                },
                fetch: function(e) {
                    e = e ? n.clone(e) : {},
                    void 0 === e.parse && (e.parse = !0);
                    var t = e.success,
                        r = this;
                    return e.success = function(n) {
                        var i = e.reset ? "reset": "set";
                        r[i](n, e),
                        t && t(r, n, e),
                            r.trigger("sync", r, n, e)
                    },
                        F(this, e),
                        this.sync("read", this, e)
                },
                create: function(e, t) {
                    if (t = t ? n.clone(t) : {},
                            !(e = this._prepareModel(e, t))) return ! 1;
                    t.wait || this.add(e, t);
                    var r = this,
                        i = t.success;
                    return t.success = function(e, n) {
                        t.wait && r.add(e, t),
                        i && i(e, n, t)
                    },
                        e.save(null, t),
                        e
                },
                parse: function(e) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0,
                        this.models = [],
                        this._byId = {}
                },
                _prepareModel: function(e, t) {
                    if (e instanceof f) return e;
                    t = t ? n.clone(t) : {},
                        t.collection = this;
                    var r = new this.model(e, t);
                    return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
                },
                _addReference: function(e) {
                    this._byId[e.cid] = e,
                    null != e.id && (this._byId[e.id] = e),
                    e.collection || (e.collection = this),
                        e.on("all", this._onModelEvent, this)
                },
                _removeReference: function(e) {
                    this === e.collection && delete e.collection,
                        e.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(e, t, n, r) { ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
                }
            });
            var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
            n.each(v,
                function(e) {
                    d.prototype[e] = function() {
                        var t = o.call(arguments);
                        return t.unshift(this.models),
                            n[e].apply(n, t)
                    }
                });
            var y = ["groupBy", "countBy", "sortBy", "indexBy"];
            n.each(y,
                function(e) {
                    d.prototype[e] = function(t, r) {
                        var i = n.isFunction(t) ? t: function(e) {
                            return e.get(t)
                        };
                        return n[e](this.models, i, r)
                    }
                });
            var b = t.View = function(e) {
                    this.cid = n.uniqueId("view"),
                    e || (e = {}),
                        n.extend(this, n.pick(e, w)),
                        this._ensureElement(),
                        this.initialize.apply(this, arguments),
                        this.delegateEvents()
                },
                x = /^(\S+)\s*(.*)$/,
                w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            n.extend(b.prototype, a, {
                tagName: "div",
                $: function(e) {
                    return this.$el.find(e)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(),
                        this.stopListening(),
                        this
                },
                setElement: function(e, n) {
                    return this.$el && this.undelegateEvents(),
                        this.$el = e instanceof t.$ ? e: t.$(e),
                        this.el = this.$el[0],
                    n !== !1 && this.delegateEvents(),
                        this
                },
                delegateEvents: function(e) {
                    if (!e && !(e = n.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var t in e) {
                        var r = e[t];
                        if (n.isFunction(r) || (r = this[e[t]]), r) {
                            var i = t.match(x),
                                s = i[1],
                                o = i[2];
                            r = n.bind(r, this),
                                s += ".delegateEvents" + this.cid,
                                "" === o ? this.$el.on(s, r) : this.$el.on(s, o, r)
                        }
                    }
                    return this
                },
                undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid),
                        this
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(n.result(this, "el"), !1);
                    else {
                        var e = n.extend({},
                            n.result(this, "attributes"));
                        this.id && (e.id = n.result(this, "id")),
                        this.className && (e["class"] = n.result(this, "className"));
                        var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                        this.setElement(r, !1)
                    }
                }
            }),
                t.sync = function(e, r, i) {
                    var s = E[e];
                    n.defaults(i || (i = {}), {
                        emulateHTTP: t.emulateHTTP,
                        emulateJSON: t.emulateJSON
                    });
                    var o = {
                        type: s,
                        dataType: "json"
                    };
                    if (i.url || (o.url = n.result(r, "url") || O()), null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                            model: o.data
                        }: {}), i.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
                        o.type = "POST",
                        i.emulateJSON && (o.data._method = s);
                        var a = i.beforeSend;
                        i.beforeSend = function(e) {
                            return e.setRequestHeader("X-HTTP-Method-Override", s),
                                a ? a.apply(this, arguments) : void 0
                        }
                    }
                    "GET" === o.type || i.emulateJSON || (o.processData = !1),
                    "PATCH" === o.type && A && (o.xhr = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    });
                    var l = i.xhr = t.ajax(n.extend(o, i));
                    return r.trigger("request", r, l, i),
                        l
                };
            var A = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
                E = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    "delete": "DELETE",
                    read: "GET"
                };
            t.ajax = function() {
                return t.$.ajax.apply(t.$, arguments)
            };
            var S = t.Router = function(e) {
                    e || (e = {}),
                    e.routes && (this.routes = e.routes),
                        this._bindRoutes(),
                        this.initialize.apply(this, arguments)
                },
                T = /\((.*?)\)/g,
                C = /(\(\?)?:\w+/g,
                _ = /\*\w+/g,
                P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            n.extend(S.prototype, a, {
                initialize: function() {},
                route: function(e, r, i) {
                    n.isRegExp(e) || (e = this._routeToRegExp(e)),
                    n.isFunction(r) && (i = r, r = ""),
                    i || (i = this[r]);
                    var s = this;
                    return t.history.route(e,
                        function(n) {
                            var o = s._extractParameters(e, n);
                            s.execute(i, o),
                                s.trigger.apply(s, ["route:" + r].concat(o)),
                                s.trigger("route", r, o),
                                t.history.trigger("route", s, r, o)
                        }),
                        this
                },
                execute: function(e, t) {
                    e && e.apply(this, t)
                },
                navigate: function(e, n) {
                    return t.history.navigate(e, n),
                        this
                },
                _bindRoutes: function() {
                    if (this.routes) {
                        this.routes = n.result(this, "routes");
                        for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                    }
                },
                _routeToRegExp: function(e) {
                    return e = e.replace(P, "\\$&").replace(T, "(?:$1)?").replace(C,
                        function(e, t) {
                            return t ? e: "([^/?]+)"
                        }).replace(_, "([^?]*?)"),
                        new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                },
                _extractParameters: function(e, t) {
                    var r = e.exec(t).slice(1);
                    return n.map(r,
                        function(e, t) {
                            return t === r.length - 1 ? e || null: e ? decodeURIComponent(e) : null
                        })
                }
            });
            var M = t.History = function() {
                    this.handlers = [],
                        n.bindAll(this, "checkUrl"),
                    "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                R = /^[#\/]|\s+$/g,
                L = /^\/+|\/+$/g,
                N = /msie [\w.]+/,
                k = /\/$/,
                D = /#.*$/;
            M.started = !1,
                n.extend(M.prototype, a, {
                    interval: 50,
                    atRoot: function() {
                        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                    },
                    getHash: function(e) {
                        var t = (e || this).location.href.match(/#(.*)$/);
                        return t ? t[1] : ""
                    },
                    getFragment: function(e, t) {
                        if (null == e) if (this._hasPushState || !this._wantsHashChange || t) {
                            e = decodeURI(this.location.pathname + this.location.search);
                            var n = this.root.replace(k, "");
                            e.indexOf(n) || (e = e.slice(n.length))
                        } else e = this.getHash();
                        return e.replace(R, "")
                    },
                    start: function(e) {
                        if (M.started) throw new Error("Backbone.history has already been started");
                        M.started = !0,
                            this.options = n.extend({
                                    root: "/"
                                },
                                this.options, e),
                            this.root = this.options.root,
                            this._wantsHashChange = this.options.hashChange !== !1,
                            this._wantsPushState = !!this.options.pushState,
                            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                        var r = this.getFragment(),
                            i = document.documentMode,
                            s = N.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                        if (this.root = ("/" + this.root + "/").replace(L, "/"), s && this._wantsHashChange) {
                            var o = t.$('<iframe src="javascript:0" tabindex="-1">');
                            this.iframe = o.hide().appendTo("body")[0].contentWindow,
                                this.navigate(r)
                        }
                        this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                            this.fragment = r;
                        var a = this.location;
                        if (this._wantsHashChange && this._wantsPushState) {
                            if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0),
                                this.location.replace(this.root + "#" + this.fragment),
                                !0;
                            this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(R, ""), this.history.replaceState({},
                                document.title, this.root + this.fragment))
                        }
                        return this.options.silent ? void 0 : this.loadUrl()
                    },
                    stop: function() {
                        t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
                        this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                            M.started = !1
                    },
                    route: function(e, t) {
                        this.handlers.unshift({
                            route: e,
                            callback: t
                        })
                    },
                    checkUrl: function() {
                        var e = this.getFragment();
                        return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))),
                            e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
                    },
                    loadUrl: function(e) {
                        return e = this.fragment = this.getFragment(e),
                            n.any(this.handlers,
                                function(t) {
                                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                                })
                    },
                    navigate: function(e, t) {
                        if (!M.started) return ! 1;
                        t && t !== !0 || (t = {
                            trigger: !!t
                        });
                        var n = this.root + (e = this.getFragment(e || ""));
                        if (e = e.replace(D, ""), this.fragment !== e) {
                            if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState": "pushState"]({},
                                document.title, n);
                            else {
                                if (!this._wantsHashChange) return this.location.assign(n);
                                this._updateHash(this.location, e, t.replace),
                                this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                            }
                            return t.trigger ? this.loadUrl(e) : void 0
                        }
                    },
                    _updateHash: function(e, t, n) {
                        if (n) {
                            var r = e.href.replace(/(javascript:|#).*$/, "");
                            e.replace(r + "#" + t)
                        } else e.hash = "#" + t
                    }
                }),
                t.history = new M;
            var I = function(e, t) {
                var r, i = this;
                r = e && n.has(e, "constructor") ? e.constructor: function() {
                    return i.apply(this, arguments)
                },
                    n.extend(r, i, t);
                var s = function() {
                    this.constructor = r
                };
                return s.prototype = i.prototype,
                    r.prototype = new s,
                e && n.extend(r.prototype, e),
                    r.__super__ = i.prototype,
                    r
            };
            f.extend = d.extend = S.extend = b.extend = M.extend = I;
            var O = function() {
                    throw new Error('A "url" property or function must be specified')
                },
                F = function(e, t) {
                    var n = t.error;
                    t.error = function(r) {
                        n && n(e, r, t),
                            e.trigger("error", e, r, t)
                    }
                };
            return t
        }),
    function e(t, n, r) {
        function i(o, a) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (s) return s(o, !0);
                    throw Error("Cannot find module '" + o + "'")
                }
                l = n[o] = {
                    exports: {}
                },
                    t[o][0].call(l.exports,
                        function(e) {
                            var n = t[o][1][e];
                            return i(n ? n: e)
                        },
                        l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var s = "function" == typeof require && require,
                 o = 0; o < r.length; o++) i(r[o]);
        return i
    } ({
            1 : [function(e, t) {
                t = {
                    isDomPresent: !0,
                    navigator: navigator,
                    window: window,
                    document: document,
                    ajax: function(e) {
                        var t = new XMLHttpRequest;
                        if (t.open("GET", e, !1), t.overrideMimeType && t.overrideMimeType("text/plain"), t.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT"), t.send(null), 200 !== t.status && 0 !== t.status) throw "XMLHttpRequest failed, status code " + t.status;
                        return t.responseText
                    }
                },
                    window.Processing = e("./src/")(t)
            },
                {
                    "./src/": 27
                }],
            2 : [function(e, t) {
                t.exports = {
                    name: "Processing.js",
                    version: "1.4.8",
                    dependencies: {
                        argv: "~0.0.2",
                        browserify: "~2.18.1",
                        express: "~3.3.3",
                        "node-minify": "~0.7.3",
                        nunjucks: "~0.1.9",
                        open: "0.0.3"
                    },
                    devDependencies: {
                        grunt: "~0.4.1",
                        "grunt-cli": "~0.1.8",
                        "grunt-contrib-jshint": "~0.4.3"
                    }
                }
            },
                {}],
            3 : [function(e, t) {
                t.exports = function(e) {
                    if (! (e instanceof Array)) {
                        if (e.iterator instanceof Function) return e.iterator();
                        throw "Unable to iterate: " + e
                    }
                    var t = -1;
                    this.hasNext = function() {
                        return++t < e.length
                    },
                        this.next = function() {
                            return e[t]
                        }
                }
            },
                {}],
            4 : [function(e, t) {
                t.exports = {
                    X: 0,
                    Y: 1,
                    Z: 2,
                    R: 3,
                    G: 4,
                    B: 5,
                    A: 6,
                    U: 7,
                    V: 8,
                    NX: 9,
                    NY: 10,
                    NZ: 11,
                    EDGE: 12,
                    SR: 13,
                    SG: 14,
                    SB: 15,
                    SA: 16,
                    SW: 17,
                    TX: 18,
                    TY: 19,
                    TZ: 20,
                    VX: 21,
                    VY: 22,
                    VZ: 23,
                    VW: 24,
                    AR: 25,
                    AG: 26,
                    AB: 27,
                    DR: 3,
                    DG: 4,
                    DB: 5,
                    DA: 6,
                    SPR: 28,
                    SPG: 29,
                    SPB: 30,
                    SHINE: 31,
                    ER: 32,
                    EG: 33,
                    EB: 34,
                    BEEN_LIT: 35,
                    VERTEX_FIELD_COUNT: 36,
                    P2D: 1,
                    JAVA2D: 1,
                    WEBGL: 2,
                    P3D: 2,
                    OPENGL: 2,
                    PDF: 0,
                    DXF: 0,
                    OTHER: 0,
                    WINDOWS: 1,
                    MAXOSX: 2,
                    LINUX: 3,
                    EPSILON: 1e-4,
                    MAX_FLOAT: 3.4028235e38,
                    MIN_FLOAT: -3.4028235e38,
                    MAX_INT: 2147483647,
                    MIN_INT: -2147483648,
                    PI: Math.PI,
                    TWO_PI: 2 * Math.PI,
                    TAU: 2 * Math.PI,
                    HALF_PI: Math.PI / 2,
                    THIRD_PI: Math.PI / 3,
                    QUARTER_PI: Math.PI / 4,
                    DEG_TO_RAD: Math.PI / 180,
                    RAD_TO_DEG: 180 / Math.PI,
                    WHITESPACE: " 	\n\r\f\xa0",
                    RGB: 1,
                    ARGB: 2,
                    HSB: 3,
                    ALPHA: 4,
                    CMYK: 5,
                    TIFF: 0,
                    TARGA: 1,
                    JPEG: 2,
                    GIF: 3,
                    BLUR: 11,
                    GRAY: 12,
                    INVERT: 13,
                    OPAQUE: 14,
                    POSTERIZE: 15,
                    THRESHOLD: 16,
                    ERODE: 17,
                    DILATE: 18,
                    REPLACE: 0,
                    BLEND: 1,
                    ADD: 2,
                    SUBTRACT: 4,
                    LIGHTEST: 8,
                    DARKEST: 16,
                    DIFFERENCE: 32,
                    EXCLUSION: 64,
                    MULTIPLY: 128,
                    SCREEN: 256,
                    OVERLAY: 512,
                    HARD_LIGHT: 1024,
                    SOFT_LIGHT: 2048,
                    DODGE: 4096,
                    BURN: 8192,
                    ALPHA_MASK: 4278190080,
                    RED_MASK: 16711680,
                    GREEN_MASK: 65280,
                    BLUE_MASK: 255,
                    CUSTOM: 0,
                    ORTHOGRAPHIC: 2,
                    PERSPECTIVE: 3,
                    POINT: 2,
                    POINTS: 2,
                    LINE: 4,
                    LINES: 4,
                    TRIANGLE: 8,
                    TRIANGLES: 9,
                    TRIANGLE_STRIP: 10,
                    TRIANGLE_FAN: 11,
                    QUAD: 16,
                    QUADS: 16,
                    QUAD_STRIP: 17,
                    POLYGON: 20,
                    PATH: 21,
                    RECT: 30,
                    ELLIPSE: 31,
                    ARC: 32,
                    SPHERE: 40,
                    BOX: 41,
                    GROUP: 0,
                    PRIMITIVE: 1,
                    GEOMETRY: 3,
                    VERTEX: 0,
                    BEZIER_VERTEX: 1,
                    CURVE_VERTEX: 2,
                    BREAK: 3,
                    CLOSESHAPE: 4,
                    OPEN: 1,
                    CLOSE: 2,
                    CORNER: 0,
                    CORNERS: 1,
                    RADIUS: 2,
                    CENTER_RADIUS: 2,
                    CENTER: 3,
                    DIAMETER: 3,
                    CENTER_DIAMETER: 3,
                    BASELINE: 0,
                    TOP: 101,
                    BOTTOM: 102,
                    NORMAL: 1,
                    NORMALIZED: 1,
                    IMAGE: 2,
                    MODEL: 4,
                    SHAPE: 5,
                    SQUARE: "butt",
                    ROUND: "round",
                    PROJECT: "square",
                    MITER: "miter",
                    BEVEL: "bevel",
                    AMBIENT: 0,
                    DIRECTIONAL: 1,
                    SPOT: 3,
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 10,
                    RETURN: 13,
                    ESC: 27,
                    DELETE: 127,
                    CODED: 65535,
                    SHIFT: 16,
                    CONTROL: 17,
                    ALT: 18,
                    CAPSLK: 20,
                    PGUP: 33,
                    PGDN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123,
                    NUMLK: 144,
                    META: 157,
                    INSERT: 155,
                    ARROW: "default",
                    CROSS: "crosshair",
                    HAND: "pointer",
                    MOVE: "move",
                    TEXT: "text",
                    WAIT: "wait",
                    NOCURSOR: "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",
                    DISABLE_OPENGL_2X_SMOOTH: 1,
                    ENABLE_OPENGL_2X_SMOOTH: -1,
                    ENABLE_OPENGL_4X_SMOOTH: 2,
                    ENABLE_NATIVE_FONTS: 3,
                    DISABLE_DEPTH_TEST: 4,
                    ENABLE_DEPTH_TEST: -4,
                    ENABLE_DEPTH_SORT: 5,
                    DISABLE_DEPTH_SORT: -5,
                    DISABLE_OPENGL_ERROR_REPORT: 6,
                    ENABLE_OPENGL_ERROR_REPORT: -6,
                    ENABLE_ACCURATE_TEXTURES: 7,
                    DISABLE_ACCURATE_TEXTURES: -7,
                    HINT_COUNT: 10,
                    SINCOS_LENGTH: 720,
                    PRECISIONB: 15,
                    PRECISIONF: 32768,
                    PREC_MAXVAL: 32767,
                    PREC_ALPHA_SHIFT: 9,
                    PREC_RED_SHIFT: 1,
                    NORMAL_MODE_AUTO: 0,
                    NORMAL_MODE_SHAPE: 1,
                    NORMAL_MODE_VERTEX: 2,
                    MAX_LIGHTS: 8
                }
            },
                {}],
            5 : [function(e, t) {
                t.exports = function(e) {
                    function t() {}
                    function n(e, t, n) {
                        if (e.hasOwnProperty(t) && "function" == typeof e[t]) {
                            var r = e[t];
                            if ("$overloads" in r) r.$defaultOverload = n;
                            else if ("$overloads" in n || r.length !== n.length) {
                                var i;
                                "$overloads" in n ? (i = n.$overloads.slice(0), i[r.length] = r, r = n.$defaultOverload) : (i = [], i[n.length] = n, i[r.length] = r);
                                var s = function() {
                                    return (s.$overloads[arguments.length] || ("$methodArgsIndex" in s && arguments.length > s.$methodArgsIndex ? s.$overloads[s.$methodArgsIndex] : null) || s.$defaultOverload).apply(this, arguments)
                                };
                                s.$overloads = i,
                                "$methodArgsIndex" in n && (s.$methodArgsIndex = n.$methodArgsIndex),
                                    s.$defaultOverload = r,
                                    s.name = t,
                                    e[t] = s
                            }
                        } else e[t] = n
                    }
                    function r(e, t) {
                        function r(n) {
                            i.defineProperty(e, n, {
                                get: function() {
                                    return t[n]
                                },
                                set: function(e) {
                                    t[n] = e
                                },
                                enumerable: !0
                            })
                        }
                        var s, o = [];
                        for (s in t)"function" == typeof t[s] ? n(e, s, t[s]) : "$" === s.charAt(0) || s in e || o.push(s);
                        for (; 0 < o.length;) r(o.shift());
                        e.$super = t
                    }
                    t.prototype = e.PConstants;
                    var i = new t;
                    return Object.keys(e).forEach(function(t) {
                        i[t] = e[t]
                    }),
                        i.defineProperty = function(e, t, n) {
                            "defineProperty" in Object ? Object.defineProperty(e, t, n) : (n.hasOwnProperty("get") && e.__defineGetter__(t, n.get), n.hasOwnProperty("set") && e.__defineSetter__(t, n.set))
                        },
                        i.extendClassChain = function(e) {
                            for (var t = [e], n = e.$upcast; n; n = n.$upcast) r(n, e),
                                t.push(n),
                                e = n;
                            for (; 0 < t.length;) t.pop().$self = e
                        },
                        i.extendStaticMembers = function(e, t) {
                            r(e, t)
                        },
                        i.extendInterfaceMembers = function(e, t) {
                            r(e, t)
                        },
                        i.addMethod = function(e, t, n, r) {
                            var i = e[t];
                            if (i || r) {
                                var s = n.length;
                                if ("$overloads" in i) i.$overloads[s] = n;
                                else {
                                    var o = function() {
                                            return (o.$overloads[arguments.length] || ("$methodArgsIndex" in o && arguments.length > o.$methodArgsIndex ? o.$overloads[o.$methodArgsIndex] : null) || o.$defaultOverload).apply(this, arguments)
                                        },
                                        a = [];
                                    i && (a[i.length] = i),
                                        a[s] = n,
                                        o.$overloads = a,
                                        o.$defaultOverload = i || n,
                                    r && (o.$methodArgsIndex = s),
                                        o.name = t,
                                        e[t] = o
                                }
                            } else e[t] = n
                        },
                        i.createJavaArray = function(e, t) {
                            var n = null,
                                r = null;
                            if ("string" == typeof e) if ("boolean" === e) r = !1;
                            else {
                                var s;
                                s = "string" != typeof e ? !1 : -1 !== "byte int char color float long double".split(" ").indexOf(e),
                                s && (r = 0)
                            }
                            if ("number" == typeof t[0]) if (s = 0 | t[0], 1 >= t.length) {
                                n = [],
                                    n.length = s;
                                for (var o = 0; s > o; ++o) n[o] = r
                            } else for (n = [], r = t.slice(1), o = 0; s > o; ++o) n.push(i.createJavaArray(e, r));
                            return n
                        },
                        i.defineProperty(i, "screenWidth", {
                            get: function() {
                                return window.innerWidth
                            }
                        }),
                        i.defineProperty(i, "screenHeight", {
                            get: function() {
                                return window.innerHeight
                            }
                        }),
                        i
                }
            },
                {}],
            6 : [function(e, t) {
                t.exports = function(e, t) {
                    var n = t.window,
                        r = t.document,
                        i = n.XMLHttpRequest,
                        s = t.noop,
                        o = t.isDOMPresent,
                        a = t.version;
                    e.version = a ? a: "@DEV-VERSION@",
                        e.lib = {},
                        e.registerLibrary = function(t, n) {
                            e.lib[t] = n,
                            n.hasOwnProperty("init") && n.init(defaultScope)
                        },
                        e.Sketch = function(e) {
                            this.attachFunction = e,
                                this.options = {
                                    pauseOnBlur: !1,
                                    globalKeyEvents: !1
                                },
                                this.onExit = this.onFrameEnd = this.onFrameStart = this.onLoop = this.onPause = this.onSetup = this.onLoad = s,
                                this.params = {},
                                this.imageCache = {
                                    pending: 0,
                                    images: {},
                                    operaCache: {},
                                    add: function(e, t) {
                                        if (!this.images[e] && (o || (this.images[e] = null), t || (t = new Image, t.onload = function(e) {
                                                return function() {
                                                    e.pending--
                                                }
                                            } (this), this.pending++, t.src = e), this.images[e] = t, n.opera)) {
                                            var i = r.createElement("div");
                                            i.appendChild(t),
                                                i.style.position = "absolute",
                                                i.style.opacity = 0,
                                                i.style.width = "1px",
                                                i.style.height = "1px",
                                            this.operaCache[e] || (r.body.appendChild(i), this.operaCache[e] = i)
                                        }
                                    }
                                },
                                this.sourceCode = void 0,
                                this.attach = function(e) {
                                    if ("function" == typeof this.attachFunction) this.attachFunction(e);
                                    else {
                                        if (!this.sourceCode) throw "Unable to attach sketch to the processing instance";
                                        var t = new Function("return (" + this.sourceCode + ");")();
                                        t(e),
                                            this.attachFunction = t
                                    }
                                },
                                this.toString = function() {
                                    var e, t;
                                    t = "((function(Sketch) {\n" + ("var sketch = new Sketch(\n" + this.sourceCode + ");\n");
                                    for (e in this.options) if (this.options.hasOwnProperty(e)) {
                                        var n = this.options[e];
                                        t += "sketch.options." + e + " = " + ("string" == typeof n ? '"' + n + '"': "" + n) + ";\n"
                                    }
                                    for (e in this.imageCache) this.options.hasOwnProperty(e) && (t += 'sketch.imageCache.add("' + e + '");\n');
                                    return t + "return sketch;\n})(Processing.Sketch))"
                                }
                        };
                    var l = e.loadSketchFromSources = function(t, s) {
                            function o(e, t) {
                                var r = new i;
                                r.onreadystatechange = function() {
                                    if (4 === r.readyState) {
                                        var e;
                                        200 !== r.status && 0 !== r.status ? e = "Invalid XHR status " + r.status: "" === r.responseText && (e = "withCredentials" in new i && !1 === (new i).withCredentials && "file:" === n.location.protocol ? "XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.": "File is empty."),
                                            t(r.responseText, e)
                                    }
                                },
                                    r.open("GET", e, !0),
                                r.overrideMimeType && r.overrideMimeType("application/json"),
                                    r.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT"),
                                    r.send(null)
                            }
                            function a(n, i) {
                                function s(r, s) {
                                    if (l[n] = r, ++c, s && u.push(i + " ==> " + s), c === h) {
                                        if (0 !== u.length) throw "Processing.js: Unable to load pjs sketch files: " + u.join("\n");
                                        try {
                                            return new e(t, l.join("\n"))
                                        } catch(o) {
                                            throw console.log("Processing.js: Unable to execute pjs sketch."),
                                                o
                                        }
                                    }
                                }
                                if ("#" === i.charAt(0)) {
                                    var a = r.getElementById(i.substring(1));
                                    a ? s(a.text || a.textContent) : s("", "Unable to load pjs sketch: element with id '" + i.substring(1) + "' was not found")
                                } else o(i, s)
                            }
                            for (var l = [], u = [], h = s.length, c = 0, f = 0; h > f; ++f) a(f, s[f])
                        },
                        u = function() {
                            r.removeEventListener("DOMContentLoaded", u, !1),
                                processingInstances = [],
                                e.instances = processingInstances;
                            for (var t, n = r.getElementsByTagName("canvas"), i = 0, s = n.length; s > i; i++) {
                                var o = n[i].getAttribute("data-processing-sources");
                                if (null === o && (o = n[i].getAttribute("data-src"), null === o && (o = n[i].getAttribute("datasrc"))), o) {
                                    for (t = o.split(/\s+/g), o = 0; o < t.length;) t[o] ? o++:t.splice(o, 1);
                                    l(n[i], t)
                                }
                            }
                            for (n = r.getElementsByTagName("script"), s = [], i = n.length - 1; i >= 0; i--) s.push(n[i]);
                            for (i = 0, o = s.length; o > i; i++) if (t = s[i], t.getAttribute && (n = t.getAttribute("type")) && ("text/processing" === n.toLowerCase() || "application/processing" === n.toLowerCase())) {
                                var a = t.getAttribute("data-processing-target"),
                                    n = void 0;
                                if (a) n = r.getElementById(a);
                                else {
                                    for (a = t.nextSibling; a && 1 !== a.nodeType;) a = a.nextSibling;
                                    a && "canvas" === a.nodeName.toLowerCase() && (n = a)
                                }
                                n && (t.getAttribute("src") ? (t = t.getAttribute("src").split(/\s+/), l(n, t)) : (t = t.textContent || t.text, new e(n, t)))
                            }
                        };
                    return r.addEventListener("DOMContentLoaded", u, !1),
                        e.reload = function() {
                            if (0 < processingInstances.length) for (var e = processingInstances.length - 1; e >= 0; e--) processingInstances[e] && processingInstances[e].exit();
                            u()
                        },
                        e.disableInit = function() {
                            r.removeEventListener("DOMContentLoaded", u, !1)
                        },
                        e
                }
            },
                {}],
            7 : [function(e, t) {
                t.exports = function(e, t) {
                    return null === e || null === t ? null === e && null === t: "string" == typeof e || "object" != typeof e ? e === t: e.equals instanceof Function ? e.equals(t) : e === t
                }
            },
                {}],
            8 : [function(e, t) {
                t.exports = function(e, t) {
                    if ("string" == typeof e) {
                        for (var n = 0,
                                 r = 0; r < e.length; ++r) n = 31 * n + e.charCodeAt(r) & 4294967295;
                        return n
                    }
                    return "object" != typeof e ? 4294967295 & e: e.hashCode instanceof Function ? e.hashCode() : (e.$id === t && (e.$id = Math.floor(65536 * Math.random()) - 32768 << 16 | Math.floor(65536 * Math.random())), e.$id)
                }
            },
                {}],
            9 : [function(e, t) {
                t.exports = function(e) {
                    function t(e) {
                        var t = -1;
                        this.hasNext = function() {
                            return t + 1 < e.length
                        },
                            this.next = function() {
                                return e[++t]
                            },
                            this.remove = function() {
                                e.splice(t--, 1)
                            }
                    }
                    function n(e) {
                        var i = [];
                        e && e.toArray && (i = e.toArray()),
                            this.get = function(e) {
                                return i[e]
                            },
                            this.contains = function(e) {
                                return - 1 < this.indexOf(e)
                            },
                            this.indexOf = function(e) {
                                for (var t = 0,
                                         n = i.length; n > t; ++t) if (r(e, i[t])) return t;
                                return - 1
                            },
                            this.lastIndexOf = function(e) {
                                for (var t = i.length - 1; t >= 0; --t) if (r(e, i[t])) return t;
                                return - 1
                            },
                            this.add = function() {
                                if (1 === arguments.length) i.push(arguments[0]);
                                else {
                                    if (2 !== arguments.length) throw "Please use the proper number of parameters.";
                                    var e = arguments[0];
                                    if ("number" != typeof e) throw typeof e + " is not a number";
                                    if (! (e >= 0 && e <= i.length)) throw e + " is not a valid index";
                                    i.splice(e, 0, arguments[1])
                                }
                            },
                            this.addAll = function(e, t) {
                                var n;
                                if ("number" == typeof e) {
                                    if (0 > e || e > i.length) throw "Index out of bounds for addAll: " + e + " greater or equal than " + i.length;
                                    for (n = new ObjectIterator(t); n.hasNext();) i.splice(e++, 0, n.next())
                                } else for (n = new ObjectIterator(e); n.hasNext();) i.push(n.next())
                            },
                            this.set = function() {
                                if (2 !== arguments.length) throw "Please use the proper number of parameters.";
                                var e = arguments[0];
                                if ("number" != typeof e) throw typeof e + " is not a number";
                                if (! (e >= 0 && e < i.length)) throw e + " is not a valid index.";
                                i.splice(e, 1, arguments[1])
                            },
                            this.size = function() {
                                return i.length
                            },
                            this.clear = function() {
                                i.length = 0
                            },
                            this.remove = function(e) {
                                return "number" == typeof e ? i.splice(e, 1)[0] : (e = this.indexOf(e), e > -1 ? (i.splice(e, 1), !0) : !1)
                            },
                            this.removeAll = function(e) {
                                var t, r, i, s = new n;
                                for (s.addAll(this), this.clear(), r = t = 0; t < s.size(); t++) i = s.get(t),
                                e.contains(i) || this.add(r++, i);
                                return this.size() < s.size() ? !0 : !1
                            },
                            this.isEmpty = function() {
                                return ! i.length
                            },
                            this.clone = function() {
                                return new n(this)
                            },
                            this.toArray = function() {
                                return i.slice(0)
                            },
                            this.iterator = function() {
                                return new t(i)
                            }
                    }
                    var r = e.virtEquals;
                    return n
                }
            },
                {}],
            10 : [function(e, t) {
                t.exports = function(e, t) {
                    var n = function(r) {
                        return this.code = "string" == typeof r && 1 === r.length ? r.charCodeAt(0) : "number" == typeof r ? r: r instanceof n ? r: 0 / 0,
                            e[this.code] === t ? e[this.code] = this: e[this.code]
                    };
                    return n.prototype.toString = function() {
                        return String.fromCharCode(this.code)
                    },
                        n.prototype.valueOf = function() {
                            return this.code
                        },
                        n
                } ({})
            },
                {}],
            11 : [function(e, t) {
                t.exports = function(e) {
                    function t() {
                        function e(e) {
                            return e = n(e) % h.length,
                                0 > e ? h.length + e: e
                        }
                        function i() {
                            if (! (c <= u * h.length)) {
                                for (var t = [], n = 0; n < h.length; ++n) void 0 !== h[n] && (t = t.concat(h[n]));
                                for (n = 2 * h.length, h = [], h.length = n, n = 0; n < t.length; ++n) {
                                    var r = e(t[n].key),
                                        i = h[r];
                                    void 0 === i && (h[r] = i = []),
                                        i.push(t[n])
                                }
                            }
                        }
                        function s(e, t) {
                            function n() {
                                for (; ! o;) if (++s, i >= h.length) o = !0;
                                else {
                                    if (! (void 0 === h[i] || s >= h[i].length)) break;
                                    s = -1,
                                        ++i
                                }
                            }
                            var r, i = 0,
                                s = -1,
                                o = !1;
                            this.hasNext = function() {
                                return ! o
                            },
                                this.next = function() {
                                    return r = e(h[i][s]),
                                        n(),
                                        r
                                },
                                this.remove = function() {
                                    void 0 !== r && (t(r), --s, n())
                                },
                                n()
                        }
                        function o(e, t, n) {
                            this.clear = function() {
                                f.clear()
                            },
                                this.contains = function(e) {
                                    return t(e)
                                },
                                this.containsAll = function(e) {
                                    for (e = e.iterator(); e.hasNext();) if (!this.contains(e.next())) return ! 1;
                                    return ! 0
                                },
                                this.isEmpty = function() {
                                    return f.isEmpty()
                                },
                                this.iterator = function() {
                                    return new s(e, n)
                                },
                                this.remove = function(e) {
                                    return this.contains(e) ? (n(e), !0) : !1
                                },
                                this.removeAll = function(e) {
                                    for (e = e.iterator(); e.hasNext();) {
                                        var t = e.next();
                                        this.contains(t) && n(t)
                                    }
                                    return ! 0
                                },
                                this.retainAll = function(e) {
                                    for (var t = this.iterator(), r = []; t.hasNext();) {
                                        var i = t.next();
                                        e.contains(i) || r.push(i)
                                    }
                                    for (e = 0; e < r.length; ++e) n(r[e]);
                                    return 0 < r.length
                                },
                                this.size = function() {
                                    return f.size()
                                },
                                this.toArray = function() {
                                    for (var e = [], t = this.iterator(); t.hasNext();) e.push(t.next());
                                    return e
                                }
                        }
                        function a(e) {
                            this._isIn = function(t) {
                                return t === f && void 0 === e.removed
                            },
                                this.equals = function(t) {
                                    return r(e.key, t.getKey())
                                },
                                this.getKey = function() {
                                    return e.key
                                },
                                this.getValue = function() {
                                    return e.value
                                },
                                this.hashCode = function() {
                                    return n(e.key)
                                },
                                this.setValue = function(t) {
                                    var n = e.value;
                                    return e.value = t,
                                        n
                                }
                        }
                        if (1 === arguments.length && arguments[0] instanceof t) return arguments[0].clone();
                        var l = 0 < arguments.length ? arguments[0] : 16,
                            u = 1 < arguments.length ? arguments[1] : .75,
                            h = [];
                        h.length = l;
                        var c = 0,
                            f = this;
                        this.clear = function() {
                            c = 0,
                                h = [],
                                h.length = l
                        },
                            this.clone = function() {
                                var e = new t;
                                return e.putAll(this),
                                    e
                            },
                            this.containsKey = function(t) {
                                var n = e(t),
                                    n = h[n];
                                if (void 0 === n) return ! 1;
                                for (var i = 0; i < n.length; ++i) if (r(n[i].key, t)) return ! 0;
                                return ! 1
                            },
                            this.containsValue = function(e) {
                                for (var t = 0; t < h.length; ++t) {
                                    var n = h[t];
                                    if (void 0 !== n) for (var i = 0; i < n.length; ++i) if (r(n[i].value, e)) return ! 0
                                }
                                return ! 1
                            },
                            this.entrySet = function() {
                                return new o(function(e) {
                                        return new a(e)
                                    },
                                    function(e) {
                                        return e instanceof a && e._isIn(f)
                                    },
                                    function(e) {
                                        return f.remove(e.getKey())
                                    })
                            },
                            this.get = function(t) {
                                var n = e(t),
                                    n = h[n];
                                if (void 0 === n) return null;
                                for (var i = 0; i < n.length; ++i) if (r(n[i].key, t)) return n[i].value;
                                return null
                            },
                            this.isEmpty = function() {
                                return 0 === c
                            },
                            this.keySet = function() {
                                return new o(function(e) {
                                        return e.key
                                    },
                                    function(e) {
                                        return f.containsKey(e)
                                    },
                                    function(e) {
                                        return f.remove(e)
                                    })
                            },
                            this.values = function() {
                                return new o(function(e) {
                                        return e.value
                                    },
                                    function(e) {
                                        return f.containsValue(e)
                                    },
                                    function(e) {
                                        return f.removeByValue(e)
                                    })
                            },
                            this.put = function(t, n) {
                                var s = e(t),
                                    o = h[s];
                                if (void 0 === o) return++c,
                                    h[s] = [{
                                        key: t,
                                        value: n
                                    }],
                                    i(),
                                    null;
                                for (s = 0; s < o.length; ++s) if (r(o[s].key, t)) {
                                    var a = o[s].value;
                                    return o[s].value = n,
                                        a
                                }
                                return++c,
                                    o.push({
                                        key: t,
                                        value: n
                                    }),
                                    i(),
                                    null
                            },
                            this.putAll = function(e) {
                                for (e = e.entrySet().iterator(); e.hasNext();) {
                                    var t = e.next();
                                    this.put(t.getKey(), t.getValue())
                                }
                            },
                            this.remove = function(t) {
                                var n = e(t),
                                    i = h[n];
                                if (void 0 === i) return null;
                                for (var s = 0; s < i.length; ++s) if (r(i[s].key, t)) return--c,
                                    t = i[s].value,
                                    i[s].removed = !0,
                                    1 < i.length ? i.splice(s, 1) : h[n] = void 0,
                                    t;
                                return null
                            },
                            this.removeByValue = function(e) {
                                var t, n, r, i;
                                for (t in h) if (h.hasOwnProperty(t)) for (n = 0, r = h[t].length; r > n; n++) if (i = h[t][n], i.value === e) return h[t].splice(n, 1),
                                    !0;
                                return ! 1
                            },
                            this.size = function() {
                                return c
                            }
                    }
                    var n = e.virtHashCode,
                        r = e.virtEquals;
                    return t
                }
            },
                {}],
            12 : [function(e, t) {
                t.exports = function(e, t) {
                    function n(e, n) {
                        e === t && (e = ""),
                            this.name = e,
                        n === t && (n = 0),
                            this.size = n,
                            this.glyph = !1,
                            this.descent = this.ascent = 0,
                            this.leading = 1.2 * n;
                        var s = e.indexOf(" Italic Bold");
                        if ( - 1 !== s && (e = e.substring(0, s)), this.style = "normal", s = e.indexOf(" Italic"), -1 !== s && (e = e.substring(0, s), this.style = "italic"), this.weight = "normal", s = e.indexOf(" Bold"), -1 !== s && (e = e.substring(0, s), this.weight = "bold"), this.family = "sans-serif", e !== t) switch (e) {
                            case "sans-serif":
                            case "serif":
                            case "monospace":
                            case "fantasy":
                            case "cursive":
                                this.family = e;
                                break;
                            default:
                                this.family = '"' + e + '", sans-serif'
                        }
                        var s = this.size / 250,
                            o = r.createElement("canvas");
                        o.width = 500,
                            o.height = 500,
                            o.style.opacity = 0;
                        var a = this.getCSSDefinition("250px", "normal"),
                            l = o.getContext("2d");
                        l.font = a,
                            o.width = l.measureText("dbflkhyjqpg").width,
                            l.font = a,
                            a = r.createElement("div"),
                            a.style.position = "absolute",
                            a.style.opacity = 0,
                            a.style.fontFamily = '"' + this.name + '"',
                            a.style.fontSize = "250px",
                            a.innerHTML = "dbflkhyjqpg<br/>dbflkhyjqpg",
                            r.body.appendChild(a);
                        var u = o.width,
                            h = o.height,
                            o = h / 2;
                        l.fillStyle = "white",
                            l.fillRect(0, 0, u, h),
                            l.fillStyle = "black",
                            l.fillText("dbflkhyjqpg", 0, o);
                        for (var h = l.getImageData(0, 0, u, h).data, c = 0, f = 4 * u, p = h.length; ++c < p && 255 === h[c];) i();
                        for (u = Math.round(c / f), c = p - 1; 0 < --c && 255 === h[c];) i();
                        h = Math.round(c / f),
                            this.ascent = s * (o - u),
                            this.descent = s * (h - o),
                        r.defaultView.getComputedStyle && (o = r.defaultView.getComputedStyle(a, null).getPropertyValue("height"), o = s * o.replace("px", ""), o >= 2 * this.size && (this.leading = Math.round(o / 2))),
                            r.body.removeChild(a),
                            s = this.caching ? l: void 0,
                            this.context2d = s,
                            this.css = this.getCSSDefinition(),
                        this.context2d && (this.context2d.font = this.css)
                    }
                    var r = e.Browser.document,
                        i = e.noop;
                    return n.prototype.caching = !0,
                        n.prototype.getCSSDefinition = function(e, n) {
                            return e === t && (e = this.size + "px"),
                            n === t && (n = this.leading + "px"),
                                [this.style, "normal", this.weight, e + "/" + n, this.family].join(" ")
                        },
                        n.prototype.measureTextWidth = function(e) {
                            return this.context2d.measureText(e).width
                        },
                        n.prototype.measureTextWidthFallback = function(e) {
                            var t = r.createElement("canvas").getContext("2d");
                            return t.font = this.css,
                                t.measureText(e).width
                        },
                        n.PFontCache = {
                            length: 0
                        },
                        n.get = function(e, t) {
                            t = (10 * t + .5 | 0) / 10;
                            var r = n.PFontCache,
                                i = e + "/" + t;
                            if (!r[i]) {
                                if (r[i] = new n(e, t), r.length++, 50 === r.length) {
                                    n.prototype.measureTextWidth = n.prototype.measureTextWidthFallback,
                                        n.prototype.caching = !1;
                                    for (var s in r)"length" !== s && (r[s].context2d = null);
                                    return new n(e, t)
                                }
                                if (400 === r.length) return n.PFontCache = {},
                                    n.get = n.getFallback,
                                    new n(e, t)
                            }
                            return r[i]
                        },
                        n.getFallback = function(e, t) {
                            return new n(e, t)
                        },
                        n.list = function() {
                            return ["sans-serif", "serif", "monospace", "fantasy", "cursive"]
                        },
                        n.preloading = {
                            template: {},
                            initialized: !1,
                            initialize: function() {
                                var e = r.createElement("style");
                                e.setAttribute("type", "text/css"),
                                    e.innerHTML = '@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,' +
                                        function() {
                                            return "#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,
                                                function(e) {
                                                    return "AAAAAAAA".substr(~~e ? 7 - e: 6)
                                                })
                                        } () + "')\n       format('truetype');\n}",
                                    r.head.appendChild(e),
                                    e = r.createElement("span"),
                                    e.style.cssText = 'position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;',
                                    e.innerHTML = "AAAAAAAA",
                                    r.body.appendChild(e),
                                    this.template = e,
                                    this.initialized = !0
                            },
                            getElementWidth: function(e) {
                                return r.defaultView.getComputedStyle(e, "").getPropertyValue("width")
                            },
                            timeAttempted: 0,
                            pending: function(e) {
                                this.initialized || this.initialize();
                                for (var t, n, i = this.getElementWidth(this.template), s = 0; s < this.fontList.length; s++) {
                                    if (t = this.fontList[s], n = this.getElementWidth(t), 4e3 > this.timeAttempted && n === i) return this.timeAttempted += e,
                                        !0;
                                    r.body.removeChild(t),
                                        this.fontList.splice(s--, 1),
                                        this.timeAttempted = 0
                                }
                                return 0 === this.fontList.length ? !1 : !0
                            },
                            fontList: [],
                            addedList: {},
                            add: function(e) {
                                this.initialized || this.initialize();
                                var t = "object" == typeof e ? e.fontFace: e;
                                if (e = "object" == typeof e ? e.url: e, !this.addedList[t]) {
                                    var n = r.createElement("style");
                                    n.setAttribute("type", "text/css"),
                                        n.innerHTML = "@font-face{\n  font-family: '" + t + "';\n  src:  url('" + e + "');\n}\n",
                                        r.head.appendChild(n),
                                        this.addedList[t] = !0,
                                        e = r.createElement("span"),
                                        e.style.cssText = "position: absolute; top: 0; left: 0; opacity: 0;",
                                        e.style.fontFamily = '"' + t + '", "PjsEmptyFont", fantasy',
                                        e.innerHTML = "AAAAAAAA",
                                        r.body.appendChild(e),
                                        this.fontList.push(e)
                                }
                            }
                        },
                        n
                }
            },
                {}],
            13 : [function(e, t) {
                t.exports = function(e) {
                    var t = e.p,
                        n = function() {
                            0 === arguments.length ? this.reset() : 1 === arguments.length && arguments[0] instanceof n ? this.set(arguments[0].array()) : 6 === arguments.length && this.set(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        };
                    return n.prototype = {
                        set: function() {
                            if (6 === arguments.length) {
                                var e = arguments;
                                this.set([e[0], e[1], e[2], e[3], e[4], e[5]])
                            } else 1 === arguments.length && arguments[0] instanceof n ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0] instanceof Array && (this.elements = arguments[0].slice())
                        },
                        get: function() {
                            var e = new n;
                            return e.set(this.elements),
                                e
                        },
                        reset: function() {
                            this.set([1, 0, 0, 0, 1, 0])
                        },
                        array: function() {
                            return this.elements.slice()
                        },
                        translate: function(e, t) {
                            this.elements[2] = e * this.elements[0] + t * this.elements[1] + this.elements[2],
                                this.elements[5] = e * this.elements[3] + t * this.elements[4] + this.elements[5]
                        },
                        invTranslate: function(e, t) {
                            this.translate( - e, -t)
                        },
                        transpose: function() {},
                        mult: function(e, t) {
                            var n, r;
                            return e instanceof PVector ? (n = e.x, r = e.y, t || (t = new PVector)) : e instanceof Array && (n = e[0], r = e[1], t || (t = [])),
                                t instanceof Array ? (t[0] = this.elements[0] * n + this.elements[1] * r + this.elements[2], t[1] = this.elements[3] * n + this.elements[4] * r + this.elements[5]) : t instanceof PVector && (t.x = this.elements[0] * n + this.elements[1] * r + this.elements[2], t.y = this.elements[3] * n + this.elements[4] * r + this.elements[5], t.z = 0),
                                t
                        },
                        multX: function(e, t) {
                            return e * this.elements[0] + t * this.elements[1] + this.elements[2]
                        },
                        multY: function(e, t) {
                            return e * this.elements[3] + t * this.elements[4] + this.elements[5]
                        },
                        skewX: function(e) {
                            this.apply(1, 0, 1, e, 0, 0)
                        },
                        skewY: function(e) {
                            this.apply(1, 0, 1, 0, e, 0)
                        },
                        shearX: function(e) {
                            this.apply(1, 0, 1, Math.tan(e), 0, 0)
                        },
                        shearY: function(e) {
                            this.apply(1, 0, 1, 0, Math.tan(e), 0)
                        },
                        determinant: function() {
                            return this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3]
                        },
                        invert: function() {
                            var e = this.determinant();
                            if (Math.abs(e) > PConstants.MIN_INT) {
                                var t = this.elements[0],
                                    n = this.elements[1],
                                    r = this.elements[2],
                                    i = this.elements[3],
                                    s = this.elements[4],
                                    o = this.elements[5];
                                return this.elements[0] = s / e,
                                    this.elements[3] = -i / e,
                                    this.elements[1] = -n / e,
                                    this.elements[4] = t / e,
                                    this.elements[2] = (n * o - s * r) / e,
                                    this.elements[5] = (i * r - t * o) / e,
                                    !0
                            }
                            return ! 1
                        },
                        scale: function(e, t) {
                            e && !t && (t = e),
                            e && t && (this.elements[0] *= e, this.elements[1] *= t, this.elements[3] *= e, this.elements[4] *= t)
                        },
                        invScale: function(e, t) {
                            e && !t && (t = e),
                                this.scale(1 / e, 1 / t)
                        },
                        apply: function() {
                            var e;
                            1 === arguments.length && arguments[0] instanceof n ? e = arguments[0].array() : 6 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                            for (var t = [0, 0, this.elements[2], 0, 0, this.elements[5]], r = 0, i = 0; 2 > i; i++) for (var s = 0; 3 > s; s++, r++) t[r] += this.elements[3 * i + 0] * e[s + 0] + this.elements[3 * i + 1] * e[s + 3];
                            this.elements = t.slice()
                        },
                        preApply: function() {
                            var e;
                            1 === arguments.length && arguments[0] instanceof n ? e = arguments[0].array() : 6 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                            var t = [0, 0, e[2], 0, 0, e[5]];
                            t[2] = e[2] + this.elements[2] * e[0] + this.elements[5] * e[1],
                                t[5] = e[5] + this.elements[2] * e[3] + this.elements[5] * e[4],
                                t[0] = this.elements[0] * e[0] + this.elements[3] * e[1],
                                t[3] = this.elements[0] * e[3] + this.elements[3] * e[4],
                                t[1] = this.elements[1] * e[0] + this.elements[4] * e[1],
                                t[4] = this.elements[1] * e[3] + this.elements[4] * e[4],
                                this.elements = t.slice()
                        },
                        rotate: function(e) {
                            var t = Math.cos(e);
                            e = Math.sin(e);
                            var n = this.elements[0],
                                r = this.elements[1];
                            this.elements[0] = t * n + e * r,
                                this.elements[1] = -e * n + t * r,
                                n = this.elements[3],
                                r = this.elements[4],
                                this.elements[3] = t * n + e * r,
                                this.elements[4] = -e * n + t * r
                        },
                        rotateZ: function(e) {
                            this.rotate(e)
                        },
                        invRotateZ: function(e) {
                            this.rotateZ(e - Math.PI)
                        },
                        print: function() {
                            var e = printMatrixHelper(this.elements),
                                e = "" + t.nfs(this.elements[0], e, 4) + " " + t.nfs(this.elements[1], e, 4) + " " + t.nfs(this.elements[2], e, 4) + "\n" + t.nfs(this.elements[3], e, 4) + " " + t.nfs(this.elements[4], e, 4) + " " + t.nfs(this.elements[5], e, 4) + "\n\n";
                            t.println(e)
                        }
                    },
                        n
                }
            },
                {}],
            14 : [function(e, t) {
                t.exports = function(e, t) {
                    var n = e.p,
                        r = function() {
                            this.reset()
                        };
                    return r.prototype = {
                        set: function() {
                            16 === arguments.length ? this.elements = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof r ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0] instanceof Array && (this.elements = arguments[0].slice())
                        },
                        get: function() {
                            var e = new r;
                            return e.set(this.elements),
                                e
                        },
                        reset: function() {
                            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                        },
                        array: function() {
                            return this.elements.slice()
                        },
                        translate: function(e, n, r) {
                            r === t && (r = 0),
                                this.elements[3] += e * this.elements[0] + n * this.elements[1] + r * this.elements[2],
                                this.elements[7] += e * this.elements[4] + n * this.elements[5] + r * this.elements[6],
                                this.elements[11] += e * this.elements[8] + n * this.elements[9] + r * this.elements[10],
                                this.elements[15] += e * this.elements[12] + n * this.elements[13] + r * this.elements[14]
                        },
                        transpose: function() {
                            var e = this.elements[4];
                            this.elements[4] = this.elements[1],
                                this.elements[1] = e,
                                e = this.elements[8],
                                this.elements[8] = this.elements[2],
                                this.elements[2] = e,
                                e = this.elements[6],
                                this.elements[6] = this.elements[9],
                                this.elements[9] = e,
                                e = this.elements[3],
                                this.elements[3] = this.elements[12],
                                this.elements[12] = e,
                                e = this.elements[7],
                                this.elements[7] = this.elements[13],
                                this.elements[13] = e,
                                e = this.elements[11],
                                this.elements[11] = this.elements[14],
                                this.elements[14] = e
                        },
                        mult: function(e, t) {
                            var n, r, i, s;
                            return e instanceof PVector ? (n = e.x, r = e.y, i = e.z, s = 1, t || (t = new PVector)) : e instanceof Array && (n = e[0], r = e[1], i = e[2], s = e[3] || 1, !t || 3 !== t.length && 4 !== t.length) && (t = [0, 0, 0]),
                            t instanceof Array && (3 === t.length ? (t[0] = this.elements[0] * n + this.elements[1] * r + this.elements[2] * i + this.elements[3], t[1] = this.elements[4] * n + this.elements[5] * r + this.elements[6] * i + this.elements[7], t[2] = this.elements[8] * n + this.elements[9] * r + this.elements[10] * i + this.elements[11]) : 4 === t.length && (t[0] = this.elements[0] * n + this.elements[1] * r + this.elements[2] * i + this.elements[3] * s, t[1] = this.elements[4] * n + this.elements[5] * r + this.elements[6] * i + this.elements[7] * s, t[2] = this.elements[8] * n + this.elements[9] * r + this.elements[10] * i + this.elements[11] * s, t[3] = this.elements[12] * n + this.elements[13] * r + this.elements[14] * i + this.elements[15] * s)),
                            t instanceof PVector && (t.x = this.elements[0] * n + this.elements[1] * r + this.elements[2] * i + this.elements[3], t.y = this.elements[4] * n + this.elements[5] * r + this.elements[6] * i + this.elements[7], t.z = this.elements[8] * n + this.elements[9] * r + this.elements[10] * i + this.elements[11]),
                                t
                        },
                        preApply: function() {
                            var e;
                            1 === arguments.length && arguments[0] instanceof r ? e = arguments[0].array() : 16 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                            for (var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0, i = 0; 4 > i; i++) for (var s = 0; 4 > s; s++, n++) t[n] += this.elements[s + 0] * e[4 * i + 0] + this.elements[s + 4] * e[4 * i + 1] + this.elements[s + 8] * e[4 * i + 2] + this.elements[s + 12] * e[4 * i + 3];
                            this.elements = t.slice()
                        },
                        apply: function() {
                            var e;
                            1 === arguments.length && arguments[0] instanceof r ? e = arguments[0].array() : 16 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                            for (var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0, i = 0; 4 > i; i++) for (var s = 0; 4 > s; s++, n++) t[n] += this.elements[4 * i + 0] * e[s + 0] + this.elements[4 * i + 1] * e[s + 4] + this.elements[4 * i + 2] * e[s + 8] + this.elements[4 * i + 3] * e[s + 12];
                            this.elements = t.slice()
                        },
                        rotate: function(e, t, n, r) {
                            if (n) {
                                var i = Math.cos(e);
                                e = Math.sin(e);
                                var s = 1 - i;
                                this.apply(s * t * t + i, s * t * n - e * r, s * t * r + e * n, 0, s * t * n + e * r, s * n * n + i, s * n * r - e * t, 0, s * t * r - e * n, s * n * r + e * t, s * r * r + i, 0, 0, 0, 0, 1)
                            } else this.rotateZ(e)
                        },
                        invApply: function() {
                            inverseCopy === t && (inverseCopy = new r);
                            var e = arguments;
                            return inverseCopy.set(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                                inverseCopy.invert() ? (this.preApply(inverseCopy), !0) : !1
                        },
                        rotateX: function(e) {
                            var t = Math.cos(e);
                            e = Math.sin(e),
                                this.apply([1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1])
                        },
                        rotateY: function(e) {
                            var t = Math.cos(e);
                            e = Math.sin(e),
                                this.apply([t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1])
                        },
                        rotateZ: function(e) {
                            var t = Math.cos(e);
                            e = Math.sin(e),
                                this.apply([t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                        },
                        scale: function(e, t, n) { ! e || t || n ? e && t && !n && (n = 1) : t = n = e,
                        e && t && n && (this.elements[0] *= e, this.elements[1] *= t, this.elements[2] *= n, this.elements[4] *= e, this.elements[5] *= t, this.elements[6] *= n, this.elements[8] *= e, this.elements[9] *= t, this.elements[10] *= n, this.elements[12] *= e, this.elements[13] *= t, this.elements[14] *= n)
                        },
                        skewX: function(e) {
                            e = Math.tan(e),
                                this.apply(1, e, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        },
                        skewY: function(e) {
                            e = Math.tan(e),
                                this.apply(1, 0, 0, 0, e, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        },
                        shearX: function(e) {
                            e = Math.tan(e),
                                this.apply(1, e, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        },
                        shearY: function(e) {
                            e = Math.tan(e),
                                this.apply(1, 0, 0, 0, e, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        },
                        multX: function(e, t, n, r) {
                            return n ? r ? this.elements[0] * e + this.elements[1] * t + this.elements[2] * n + this.elements[3] * r: this.elements[0] * e + this.elements[1] * t + this.elements[2] * n + this.elements[3] : this.elements[0] * e + this.elements[1] * t + this.elements[3]
                        },
                        multY: function(e, t, n, r) {
                            return n ? r ? this.elements[4] * e + this.elements[5] * t + this.elements[6] * n + this.elements[7] * r: this.elements[4] * e + this.elements[5] * t + this.elements[6] * n + this.elements[7] : this.elements[4] * e + this.elements[5] * t + this.elements[7]
                        },
                        multZ: function(e, t, n, r) {
                            return r ? this.elements[8] * e + this.elements[9] * t + this.elements[10] * n + this.elements[11] * r: this.elements[8] * e + this.elements[9] * t + this.elements[10] * n + this.elements[11]
                        },
                        multW: function(e, t, n, r) {
                            return r ? this.elements[12] * e + this.elements[13] * t + this.elements[14] * n + this.elements[15] * r: this.elements[12] * e + this.elements[13] * t + this.elements[14] * n + this.elements[15]
                        },
                        invert: function() {
                            var e = this.elements[0] * this.elements[5] - this.elements[1] * this.elements[4],
                                t = this.elements[0] * this.elements[6] - this.elements[2] * this.elements[4],
                                n = this.elements[0] * this.elements[7] - this.elements[3] * this.elements[4],
                                r = this.elements[1] * this.elements[6] - this.elements[2] * this.elements[5],
                                i = this.elements[1] * this.elements[7] - this.elements[3] * this.elements[5],
                                s = this.elements[2] * this.elements[7] - this.elements[3] * this.elements[6],
                                o = this.elements[8] * this.elements[13] - this.elements[9] * this.elements[12],
                                a = this.elements[8] * this.elements[14] - this.elements[10] * this.elements[12],
                                l = this.elements[8] * this.elements[15] - this.elements[11] * this.elements[12],
                                u = this.elements[9] * this.elements[14] - this.elements[10] * this.elements[13],
                                h = this.elements[9] * this.elements[15] - this.elements[11] * this.elements[13],
                                c = this.elements[10] * this.elements[15] - this.elements[11] * this.elements[14],
                                f = e * c - t * h + n * u + r * l - i * a + s * o;
                            if (1e-9 >= Math.abs(f)) return ! 1;
                            var p = [];
                            return p[0] = +this.elements[5] * c - this.elements[6] * h + this.elements[7] * u,
                                p[4] = -this.elements[4] * c + this.elements[6] * l - this.elements[7] * a,
                                p[8] = +this.elements[4] * h - this.elements[5] * l + this.elements[7] * o,
                                p[12] = -this.elements[4] * u + this.elements[5] * a - this.elements[6] * o,
                                p[1] = -this.elements[1] * c + this.elements[2] * h - this.elements[3] * u,
                                p[5] = +this.elements[0] * c - this.elements[2] * l + this.elements[3] * a,
                                p[9] = -this.elements[0] * h + this.elements[1] * l - this.elements[3] * o,
                                p[13] = +this.elements[0] * u - this.elements[1] * a + this.elements[2] * o,
                                p[2] = +this.elements[13] * s - this.elements[14] * i + this.elements[15] * r,
                                p[6] = -this.elements[12] * s + this.elements[14] * n - this.elements[15] * t,
                                p[10] = +this.elements[12] * i - this.elements[13] * n + this.elements[15] * e,
                                p[14] = -this.elements[12] * r + this.elements[13] * t - this.elements[14] * e,
                                p[3] = -this.elements[9] * s + this.elements[10] * i - this.elements[11] * r,
                                p[7] = +this.elements[8] * s - this.elements[10] * n + this.elements[11] * t,
                                p[11] = -this.elements[8] * i + this.elements[9] * n - this.elements[11] * e,
                                p[15] = +this.elements[8] * r - this.elements[9] * t + this.elements[10] * e,
                                e = 1 / f,
                                p[0] *= e,
                                p[1] *= e,
                                p[2] *= e,
                                p[3] *= e,
                                p[4] *= e,
                                p[5] *= e,
                                p[6] *= e,
                                p[7] *= e,
                                p[8] *= e,
                                p[9] *= e,
                                p[10] *= e,
                                p[11] *= e,
                                p[12] *= e,
                                p[13] *= e,
                                p[14] *= e,
                                p[15] *= e,
                                this.elements = p.slice(),
                                !0
                        },
                        toString: function() {
                            for (var e = "",
                                     t = 0; 15 > t; t++) e += this.elements[t] + ", ";
                            return e += this.elements[15]
                        },
                        print: function() {
                            var e = printMatrixHelper(this.elements),
                                e = "" + n.nfs(this.elements[0], e, 4) + " " + n.nfs(this.elements[1], e, 4) + " " + n.nfs(this.elements[2], e, 4) + " " + n.nfs(this.elements[3], e, 4) + "\n" + n.nfs(this.elements[4], e, 4) + " " + n.nfs(this.elements[5], e, 4) + " " + n.nfs(this.elements[6], e, 4) + " " + n.nfs(this.elements[7], e, 4) + "\n" + n.nfs(this.elements[8], e, 4) + " " + n.nfs(this.elements[9], e, 4) + " " + n.nfs(this.elements[10], e, 4) + " " + n.nfs(this.elements[11], e, 4) + "\n" + n.nfs(this.elements[12], e, 4) + " " + n.nfs(this.elements[13], e, 4) + " " + n.nfs(this.elements[14], e, 4) + " " + n.nfs(this.elements[15], e, 4) + "\n\n";
                            n.println(e)
                        },
                        invTranslate: function(e, t, n) {
                            this.preApply(1, 0, 0, -e, 0, 1, 0, -t, 0, 0, 1, -n, 0, 0, 0, 1)
                        },
                        invRotateX: function(e) {
                            var t = Math.cos( - e);
                            e = Math.sin( - e),
                                this.preApply([1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1])
                        },
                        invRotateY: function(e) {
                            var t = Math.cos( - e);
                            e = Math.sin( - e),
                                this.preApply([t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1])
                        },
                        invRotateZ: function(e) {
                            var t = Math.cos( - e);
                            e = Math.sin( - e),
                                this.preApply([t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                        },
                        invScale: function(e, t, n) {
                            this.preApply([1 / e, 0, 0, 0, 0, 1 / t, 0, 0, 0, 0, 1 / n, 0, 0, 0, 0, 1])
                        }
                    },
                        r
                }
            },
                {}],
            15 : [function(e, t) {
                t.exports = function(e) {
                    var t = e.PConstants,
                        n = e.PMatrix2D,
                        r = e.PMatrix3D;
                    return e = function(e) {
                        this.family = e || t.GROUP,
                            this.style = this.visible = !0,
                            this.children = [],
                            this.nameTable = [],
                            this.params = [],
                            this.name = "",
                            this.parent = this.height = this.width = this.close = this.kind = this.matrix = this.image = null
                    },
                        e.prototype = {
                            isVisible: function() {
                                return this.visible
                            },
                            setVisible: function(e) {
                                this.visible = e
                            },
                            disableStyle: function() {
                                this.style = !1;
                                for (var e = 0,
                                         t = this.children.length; t > e; e++) this.children[e].disableStyle()
                            },
                            enableStyle: function() {
                                this.style = !0;
                                for (var e = 0,
                                         t = this.children.length; t > e; e++) this.children[e].enableStyle()
                            },
                            getFamily: function() {
                                return this.family
                            },
                            getWidth: function() {
                                return this.width
                            },
                            getHeight: function() {
                                return this.height
                            },
                            setName: function(e) {
                                this.name = e
                            },
                            getName: function() {
                                return this.name
                            },
                            draw: function(e) {
                                if (!e) throw "render context missing for draw() in PShape";
                                this.visible && (this.pre(e), this.drawImpl(e), this.post(e))
                            },
                            drawImpl: function(e) {
                                this.family === t.GROUP ? this.drawGroup(e) : this.family === t.PRIMITIVE ? this.drawPrimitive(e) : this.family === t.GEOMETRY ? this.drawGeometry(e) : this.family === t.PATH && this.drawPath(e)
                            },
                            drawPath: function(e) {
                                var n, r;
                                if (0 !== this.vertices.length) {
                                    if (e.beginShape(), 0 === this.vertexCodes.length) if (2 === this.vertices[0].length) for (n = 0, r = this.vertices.length; r > n; n++) e.vertex(this.vertices[n][0], this.vertices[n][1]);
                                    else for (n = 0, r = this.vertices.length; r > n; n++) e.vertex(this.vertices[n][0], this.vertices[n][1], this.vertices[n][2]);
                                    else {
                                        var i = 0;
                                        if (2 === this.vertices[0].length) for (n = 0, r = this.vertexCodes.length; r > n; n++) this.vertexCodes[n] === t.VERTEX ? (e.vertex(this.vertices[i][0], this.vertices[i][1], this.vertices[i].moveTo), e.breakShape = !1, i++) : this.vertexCodes[n] === t.BEZIER_VERTEX ? (e.bezierVertex(this.vertices[i + 0][0], this.vertices[i + 0][1], this.vertices[i + 1][0], this.vertices[i + 1][1], this.vertices[i + 2][0], this.vertices[i + 2][1]), i += 3) : this.vertexCodes[n] === t.CURVE_VERTEX ? (e.curveVertex(this.vertices[i][0], this.vertices[i][1]), i++) : this.vertexCodes[n] === t.BREAK && (e.breakShape = !0);
                                        else for (n = 0, r = this.vertexCodes.length; r > n; n++) this.vertexCodes[n] === t.VERTEX ? (e.vertex(this.vertices[i][0], this.vertices[i][1], this.vertices[i][2]), !0 === this.vertices[i].moveTo ? vertArray[vertArray.length - 1].moveTo = !0 : !1 === this.vertices[i].moveTo && (vertArray[vertArray.length - 1].moveTo = !1), e.breakShape = !1) : this.vertexCodes[n] === t.BEZIER_VERTEX ? (e.bezierVertex(this.vertices[i + 0][0], this.vertices[i + 0][1], this.vertices[i + 0][2], this.vertices[i + 1][0], this.vertices[i + 1][1], this.vertices[i + 1][2], this.vertices[i + 2][0], this.vertices[i + 2][1], this.vertices[i + 2][2]), i += 3) : this.vertexCodes[n] === t.CURVE_VERTEX ? (e.curveVertex(this.vertices[i][0], this.vertices[i][1], this.vertices[i][2]), i++) : this.vertexCodes[n] === t.BREAK && (e.breakShape = !0)
                                    }
                                    e.endShape(this.close ? t.CLOSE: t.OPEN)
                                }
                            },
                            drawGeometry: function(e) {
                                var t, n;
                                if (e.beginShape(this.kind), this.style) for (t = 0, n = this.vertices.length; n > t; t++) e.vertex(this.vertices[t]);
                                else for (t = 0, n = this.vertices.length; n > t; t++) {
                                    var r = this.vertices[t];
                                    0 === r[2] ? e.vertex(r[0], r[1]) : e.vertex(r[0], r[1], r[2])
                                }
                                e.endShape()
                            },
                            drawGroup: function(e) {
                                for (var t = 0,
                                         n = this.children.length; n > t; t++) this.children[t].draw(e)
                            },
                            drawPrimitive: function(e) {
                                if (this.kind === t.POINT) e.point(this.params[0], this.params[1]);
                                else if (this.kind === t.LINE) 4 === this.params.length ? e.line(this.params[0], this.params[1], this.params[2], this.params[3]) : e.line(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
                                else if (this.kind === t.TRIANGLE) e.triangle(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
                                else if (this.kind === t.QUAD) e.quad(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5], this.params[6], this.params[7]);
                                else if (this.kind === t.RECT) if (null !== this.image) {
                                    var n = imageModeConvert;
                                    e.imageMode(t.CORNER),
                                        e.image(this.image, this.params[0], this.params[1], this.params[2], this.params[3]),
                                        imageModeConvert = n
                                } else n = e.curRectMode,
                                    e.rectMode(t.CORNER),
                                    e.rect(this.params[0], this.params[1], this.params[2], this.params[3]),
                                    e.curRectMode = n;
                                else this.kind === t.ELLIPSE ? (n = e.curEllipseMode, e.ellipseMode(t.CORNER), e.ellipse(this.params[0], this.params[1], this.params[2], this.params[3]), e.curEllipseMode = n) : this.kind === t.ARC ? (n = curEllipseMode, e.ellipseMode(t.CORNER), e.arc(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]), curEllipseMode = n) : this.kind === t.BOX ? 1 === this.params.length ? e.box(this.params[0]) : e.box(this.params[0], this.params[1], this.params[2]) : this.kind === t.SPHERE && e.sphere(this.params[0])
                            },
                            pre: function(e) {
                                this.matrix && (e.pushMatrix(), e.transform(this.matrix)),
                                this.style && (e.pushStyle(), this.styles(e))
                            },
                            post: function(e) {
                                this.matrix && e.popMatrix(),
                                this.style && e.popStyle()
                            },
                            styles: function(e) {
                                this.stroke ? (e.stroke(this.strokeColor), e.strokeWeight(this.strokeWeight), e.strokeCap(this.strokeCap), e.strokeJoin(this.strokeJoin)) : e.noStroke(),
                                    this.fill ? e.fill(this.fillColor) : e.noFill()
                            },
                            getChild: function(e) {
                                var t, n;
                                if ("number" == typeof e) return this.children[e];
                                var r;
                                if ("" === e || this.name === e) return this;
                                if (0 < this.nameTable.length) {
                                    for (t = 0, n = this.nameTable.length; n > t || r; t++) if (this.nameTable[t].getName === e) {
                                        r = this.nameTable[t];
                                        break
                                    }
                                    if (r) return r
                                }
                                for (t = 0, n = this.children.length; n > t; t++) if (r = this.children[t].getChild(e)) return r;
                                return null
                            },
                            getChildCount: function() {
                                return this.children.length
                            },
                            addChild: function(e) {
                                this.children.push(e),
                                    e.parent = this,
                                null !== e.getName() && this.addName(e.getName(), e)
                            },
                            addName: function(e, t) {
                                null !== this.parent ? this.parent.addName(e, t) : this.nameTable.push([e, t])
                            },
                            translate: function() {
                                2 === arguments.length ? (this.checkMatrix(2), this.matrix.translate(arguments[0], arguments[1])) : (this.checkMatrix(3), this.matrix.translate(arguments[0], arguments[1], 0))
                            },
                            checkMatrix: function(e) {
                                null === this.matrix ? this.matrix = 2 === e ? new n: new r: 3 === e && this.matrix instanceof n && (this.matrix = new r)
                            },
                            rotateX: function(e) {
                                this.rotate(e, 1, 0, 0)
                            },
                            rotateY: function(e) {
                                this.rotate(e, 0, 1, 0)
                            },
                            rotateZ: function(e) {
                                this.rotate(e, 0, 0, 1)
                            },
                            rotate: function() {
                                1 === arguments.length ? (this.checkMatrix(2), this.matrix.rotate(arguments[0])) : (this.checkMatrix(3), this.matrix.rotate(arguments[0], arguments[1], arguments[2], arguments[3]))
                            },
                            scale: function() {
                                2 === arguments.length ? (this.checkMatrix(2), this.matrix.scale(arguments[0], arguments[1])) : 3 === arguments.length ? (this.checkMatrix(2), this.matrix.scale(arguments[0], arguments[1], arguments[2])) : (this.checkMatrix(2), this.matrix.scale(arguments[0]))
                            },
                            resetMatrix: function() {
                                this.checkMatrix(2),
                                    this.matrix.reset()
                            },
                            applyMatrix: function(e) {
                                1 === arguments.length ? this.applyMatrix(e.elements[0], e.elements[1], 0, e.elements[2], e.elements[3], e.elements[4], 0, e.elements[5], 0, 0, 1, 0, 0, 0, 0, 1) : 6 === arguments.length ? (this.checkMatrix(2), this.matrix.apply(arguments[0], arguments[1], arguments[2], 0, arguments[3], arguments[4], arguments[5], 0, 0, 0, 1, 0, 0, 0, 0, 1)) : 16 === arguments.length && (this.checkMatrix(3), this.matrix.apply(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]))
                            }
                        },
                        e
                }
            },
                {}],
            16 : [function(e, t) {
                t.exports = function(e) {
                    var t = e.CommonFunctions,
                        n = e.PConstants,
                        r = e.PShape,
                        i = e.XMLElement,
                        s = e.colors,
                        o = function() {
                            if (r.call(this), 1 === arguments.length) {
                                if (this.element = arguments[0], this.vertexCodes = [], this.vertices = [], this.opacity = 1, this.stroke = !1, this.strokeColor = n.ALPHA_MASK, this.strokeWeight = 1, this.strokeCap = n.SQUARE, this.strokeJoin = n.MITER, this.strokeName = this.strokeGradientPaint = this.strokeGradient = null, this.strokeOpacity = 1, this.fill = !0, this.fillColor = n.ALPHA_MASK, this.fillName = this.fillGradientPaint = this.fillGradient = null, this.fillOpacity = 1, "svg" !== this.element.getName()) throw "root is not <svg>, it's <" + this.element.getName() + ">"
                            } else 2 === arguments.length && ("string" == typeof arguments[1] ? -1 < arguments[1].indexOf(".svg") && (this.element = new i(!0, arguments[1]), this.vertexCodes = [], this.vertices = [], this.opacity = 1, this.stroke = !1, this.strokeColor = n.ALPHA_MASK, this.strokeWeight = 1, this.strokeCap = n.SQUARE, this.strokeJoin = n.MITER, this.strokeName = this.strokeGradientPaint = this.strokeGradient = "", this.strokeOpacity = 1, this.fill = !0, this.fillColor = n.ALPHA_MASK, this.fillGradientPaint = this.fillGradient = null, this.fillOpacity = 1) : arguments[0] && (this.element = arguments[1], this.vertexCodes = arguments[0].vertexCodes.slice(), this.vertices = arguments[0].vertices.slice(), this.stroke = arguments[0].stroke, this.strokeColor = arguments[0].strokeColor, this.strokeWeight = arguments[0].strokeWeight, this.strokeCap = arguments[0].strokeCap, this.strokeJoin = arguments[0].strokeJoin, this.strokeGradient = arguments[0].strokeGradient, this.strokeGradientPaint = arguments[0].strokeGradientPaint, this.strokeName = arguments[0].strokeName, this.fill = arguments[0].fill, this.fillColor = arguments[0].fillColor, this.fillGradient = arguments[0].fillGradient, this.fillGradientPaint = arguments[0].fillGradientPaint, this.fillName = arguments[0].fillName, this.strokeOpacity = arguments[0].strokeOpacity, this.fillOpacity = arguments[0].fillOpacity, this.opacity = arguments[0].opacity));
                            this.name = this.element.getStringAttribute("id"),
                                this.visible = "none" !== this.element.getStringAttribute("display", "inline");
                            var e = this.element.getAttribute("transform");
                            e && (this.matrix = this.parseMatrix(e)),
                                e = this.element.getStringAttribute("viewBox"),
                            null !== e && (e = e.split(" "), this.width = e[2], this.height = e[3]);
                            var e = this.element.getStringAttribute("width"),
                                t = this.element.getStringAttribute("height");
                            if (null !== e) this.width = this.parseUnitSize(e),
                                this.height = this.parseUnitSize(t);
                            else if (0 === this.width || 0 === this.height) throw this.height = this.width = 1,
                                "The width and/or height is not readable in the <svg> tag of this file.";
                            this.parseColors(this.element),
                                this.parseChildren(this.element)
                        };
                    return o.prototype = new r,
                        o.prototype.parseMatrix = function() {
                            function e(e) {
                                var t = [];
                                return e.replace(/\((.*?)\)/,
                                    function() {
                                        return function(e, n) {
                                            t = n.replace(/,+/g, " ").split(/\s+/)
                                        }
                                    } ()),
                                    t
                            }
                            return function(n) {
                                this.checkMatrix(2);
                                var r = [];
                                if (n.replace(/\s*(\w+)\((.*?)\)/g,
                                        function(e) {
                                            r.push(t.trim(e))
                                        }), 0 === r.length) return null;
                                n = 0;
                                for (var i = r.length; i > n; n++) {
                                    var s = e(r[n]);
                                    if ( - 1 !== r[n].indexOf("matrix")) this.matrix.set(s[0], s[2], s[4], s[1], s[3], s[5]);
                                    else if ( - 1 !== r[n].indexOf("translate")) this.matrix.translate(s[0], 2 === s.length ? s[1] : 0);
                                    else if ( - 1 !== r[n].indexOf("scale")) this.matrix.scale(s[0], 2 === s.length ? s[1] : s[0]);
                                    else if ( - 1 !== r[n].indexOf("rotate")) {
                                        var o = s[0];
                                        1 === s.length ? this.matrix.rotate(t.radians(o)) : 3 === s.length && (this.matrix.translate(s[1], s[2]), this.matrix.rotate(t.radians(s[0])), this.matrix.translate( - s[1], -s[2]))
                                    } else - 1 !== r[n].indexOf("skewX") ? this.matrix.skewX(parseFloat(s[0])) : -1 !== r[n].indexOf("skewY") ? this.matrix.skewY(s[0]) : -1 !== r[n].indexOf("shearX") ? this.matrix.shearX(s[0]) : -1 !== r[n].indexOf("shearY") && this.matrix.shearY(s[0])
                                }
                                return this.matrix
                            }
                        } (),
                        o.prototype.parseChildren = function(e) {
                            e = e.getChildren();
                            var t, n, i = new r;
                            for (t = 0, n = e.length; n > t; t++) {
                                var s = this.parseChild(e[t]);
                                s && i.addChild(s)
                            }
                            for (t = 0, n = i.children.length; n > t; t++) this.children.push(i.children[t])
                        },
                        o.prototype.getName = function() {
                            return this.name
                        },
                        o.prototype.parseChild = function(e) {
                            var t, n = e.getName();
                            return "g" === n ? t = new o(this, e) : "defs" === n ? t = new o(this, e) : "line" === n ? (t = new o(this, e), t.parseLine()) : "circle" === n ? (t = new o(this, e), t.parseEllipse(!0)) : "ellipse" === n ? (t = new o(this, e), t.parseEllipse(!1)) : "rect" === n ? (t = new o(this, e), t.parseRect()) : "polygon" === n ? (t = new o(this, e), t.parsePoly(!0)) : "polyline" === n ? (t = new o(this, e), t.parsePoly(!1)) : "path" === n ? (t = new o(this, e), t.parsePath()) : "radialGradient" === n ? unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient") : "linearGradient" === n ? unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient") : "text" === n ? unimplemented("PShapeSVG.prototype.parseChild, name = text") : "filter" === n ? unimplemented("PShapeSVG.prototype.parseChild, name = filter") : "mask" === n && unimplemented("PShapeSVG.prototype.parseChild, name = mask"),
                                t
                        },
                        o.prototype.parsePath = function() {
                            this.family = n.PATH,
                                this.kind = 0;
                            var e = t.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g, " "));
                            if (null !== e) for (var r, i, s, e = e.split(""), o = 0, a = 0, l = 0, u = 0, h = u = l = 0, c = 0, f = 0, p = 0, d = p = u = f = l = 0, m = 0, g = "", v = [], y = !1; d < e.length;) if (m = e[d].charCodeAt(0), m >= 65 && 90 >= m || m >= 97 && 122 >= m) {
                                if (s = d, d++, d < e.length) for (v = [], m = e[d].charCodeAt(0); ! (m >= 65 && 90 >= m || m >= 97 && 100 >= m || m >= 102 && 122 >= m) && !1 === y;) 32 === m ? "" !== g && (v.push(parseFloat(g)), g = "") : 45 === m ? 101 === e[d - 1].charCodeAt(0) ? g += e[d].toString() : ("" !== g && v.push(parseFloat(g)), g = e[d].toString()) : g += e[d].toString(),
                                    d++,
                                    d === e.length ? y = !0 : m = e[d].charCodeAt(0);
                                if ("" !== g && (v.push(parseFloat(g)), g = ""), i = e[s], m = i.charCodeAt(0), 77 === m) {
                                    if (2 <= v.length && 0 === v.length % 2 && (o = v[0], a = v[1], this.parsePathMoveto(o, a), 2 < v.length)) for (s = 2, m = v.length; m > s; s += 2) o = v[s],
                                        a = v[s + 1],
                                        this.parsePathLineto(o, a)
                                } else if (109 === m) {
                                    if (2 <= v.length && 0 === v.length % 2 && (o += v[0], a += v[1], this.parsePathMoveto(o, a), 2 < v.length)) for (s = 2, m = v.length; m > s; s += 2) o += v[s],
                                        a += v[s + 1],
                                        this.parsePathLineto(o, a)
                                } else if (76 === m) {
                                    if (2 <= v.length && 0 === v.length % 2) for (s = 0, m = v.length; m > s; s += 2) o = v[s],
                                        a = v[s + 1],
                                        this.parsePathLineto(o, a)
                                } else if (108 === m) {
                                    if (2 <= v.length && 0 === v.length % 2) for (s = 0, m = v.length; m > s; s += 2) o += v[s],
                                        a += v[s + 1],
                                        this.parsePathLineto(o, a)
                                } else if (72 === m) for (s = 0, m = v.length; m > s; s++) o = v[s],
                                    this.parsePathLineto(o, a);
                                else if (104 === m) for (s = 0, m = v.length; m > s; s++) o += v[s],
                                    this.parsePathLineto(o, a);
                                else if (86 === m) for (s = 0, m = v.length; m > s; s++) a = v[s],
                                    this.parsePathLineto(o, a);
                                else if (118 === m) for (s = 0, m = v.length; m > s; s++) a += v[s],
                                    this.parsePathLineto(o, a);
                                else if (67 === m) {
                                    if (6 <= v.length && 0 === v.length % 6) for (s = 0, m = v.length; m > s; s += 6) l = v[s],
                                        h = v[s + 1],
                                        u = v[s + 2],
                                        c = v[s + 3],
                                        f = v[s + 4],
                                        p = v[s + 5],
                                        this.parsePathCurveto(l, h, u, c, f, p),
                                        o = f,
                                        a = p
                                } else if (99 === m) {
                                    if (6 <= v.length && 0 === v.length % 6) for (s = 0, m = v.length; m > s; s += 6) l = o + v[s],
                                        h = a + v[s + 1],
                                        u = o + v[s + 2],
                                        c = a + v[s + 3],
                                        f = o + v[s + 4],
                                        p = a + v[s + 5],
                                        this.parsePathCurveto(l, h, u, c, f, p),
                                        o = f,
                                        a = p
                                } else if (83 === m) {
                                    if (4 <= v.length && 0 === v.length % 4) for (s = 0, m = v.length; m > s; s += 4)"c" === r.toLowerCase() || "s" === r.toLowerCase() ? (l = this.vertices[this.vertices.length - 2][0], f = this.vertices[this.vertices.length - 2][1], u = this.vertices[this.vertices.length - 1][0], p = this.vertices[this.vertices.length - 1][1], l = u + (u - l), h = p + (p - f)) : (l = this.vertices[this.vertices.length - 1][0], h = this.vertices[this.vertices.length - 1][1]),
                                        u = v[s],
                                        c = v[s + 1],
                                        f = v[s + 2],
                                        p = v[s + 3],
                                        this.parsePathCurveto(l, h, u, c, f, p),
                                        o = f,
                                        a = p
                                } else if (115 === m) {
                                    if (4 <= v.length && 0 === v.length % 4) for (s = 0, m = v.length; m > s; s += 4)"c" === r.toLowerCase() || "s" === r.toLowerCase() ? (l = this.vertices[this.vertices.length - 2][0], f = this.vertices[this.vertices.length - 2][1], u = this.vertices[this.vertices.length - 1][0], p = this.vertices[this.vertices.length - 1][1], l = u + (u - l), h = p + (p - f)) : (l = this.vertices[this.vertices.length - 1][0], h = this.vertices[this.vertices.length - 1][1]),
                                        u = o + v[s],
                                        c = a + v[s + 1],
                                        f = o + v[s + 2],
                                        p = a + v[s + 3],
                                        this.parsePathCurveto(l, h, u, c, f, p),
                                        o = f,
                                        a = p
                                } else if (81 === m) {
                                    if (4 <= v.length && 0 === v.length % 4) for (s = 0, m = v.length; m > s; s += 4) l = v[s],
                                        u = v[s + 1],
                                        f = v[s + 2],
                                        p = v[s + 3],
                                        this.parsePathQuadto(o, a, l, u, f, p),
                                        o = f,
                                        a = p
                                } else if (113 === m) {
                                    if (4 <= v.length && 0 === v.length % 4) for (s = 0, m = v.length; m > s; s += 4) l = o + v[s],
                                        u = a + v[s + 1],
                                        f = o + v[s + 2],
                                        p = a + v[s + 3],
                                        this.parsePathQuadto(o, a, l, u, f, p),
                                        o = f,
                                        a = p
                                } else if (84 === m) {
                                    if (2 <= v.length && 0 === v.length % 2) for (s = 0, m = v.length; m > s; s += 2)"q" === r.toLowerCase() || "t" === r.toLowerCase() ? (l = this.vertices[this.vertices.length - 2][0], f = this.vertices[this.vertices.length - 2][1], u = this.vertices[this.vertices.length - 1][0], p = this.vertices[this.vertices.length - 1][1], l = u + (u - l), u = p + (p - f)) : (l = o, u = a),
                                        f = v[s],
                                        p = v[s + 1],
                                        this.parsePathQuadto(o, a, l, u, f, p),
                                        o = f,
                                        a = p
                                } else if (116 === m) {
                                    if (2 <= v.length && 0 === v.length % 2) for (s = 0, m = v.length; m > s; s += 2)"q" === r.toLowerCase() || "t" === r.toLowerCase() ? (l = this.vertices[this.vertices.length - 2][0], f = this.vertices[this.vertices.length - 2][1], u = this.vertices[this.vertices.length - 1][0], p = this.vertices[this.vertices.length - 1][1], l = u + (u - l), u = p + (p - f)) : (l = o, u = a),
                                        f = o + v[s],
                                        p = a + v[s + 1],
                                        this.parsePathQuadto(o, a, l, u, f, p),
                                        o = f,
                                        a = p
                                } else(90 === m || 122 === m) && (this.close = !0);
                                r = i.toString()
                            } else d++
                        },
                        o.prototype.parsePathQuadto = function(e, t, r, i, s, o) {
                            if (! (0 < this.vertices.length)) throw "Path must start with M/m";
                            this.parsePathCode(n.BEZIER_VERTEX),
                                this.parsePathVertex(e + 2 * (r - e) / 3, t + 2 * (i - t) / 3),
                                this.parsePathVertex(s + 2 * (r - s) / 3, o + 2 * (i - o) / 3),
                                this.parsePathVertex(s, o)
                        },
                        o.prototype.parsePathCurveto = function(e, t, r, i, s, o) {
                            if (! (0 < this.vertices.length)) throw "Path must start with M/m";
                            this.parsePathCode(n.BEZIER_VERTEX),
                                this.parsePathVertex(e, t),
                                this.parsePathVertex(r, i),
                                this.parsePathVertex(s, o)
                        },
                        o.prototype.parsePathLineto = function(e, t) {
                            if (! (0 < this.vertices.length)) throw "Path must start with M/m";
                            this.parsePathCode(n.VERTEX),
                                this.parsePathVertex(e, t),
                                this.vertices[this.vertices.length - 1].moveTo = !1
                        },
                        o.prototype.parsePathMoveto = function(e, t) {
                            0 < this.vertices.length && this.parsePathCode(n.BREAK),
                                this.parsePathCode(n.VERTEX),
                                this.parsePathVertex(e, t),
                                this.vertices[this.vertices.length - 1].moveTo = !0
                        },
                        o.prototype.parsePathVertex = function(e, t) {
                            var n = [];
                            n[0] = e,
                                n[1] = t,
                                this.vertices.push(n)
                        },
                        o.prototype.parsePathCode = function(e) {
                            this.vertexCodes.push(e)
                        },
                        o.prototype.parsePoly = function(e) {
                            if (this.family = n.PATH, this.close = e, e = t.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g, " ")), null !== e) {
                                if (e = e.split(" "), 0 !== e.length % 2) throw "Error parsing polygon points: odd number of coordinates provided";
                                for (var r = 0,
                                         i = e.length; i > r; r++) {
                                    var s = [];
                                    s[0] = e[r],
                                        s[1] = e[++r],
                                        this.vertices.push(s)
                                }
                            }
                        },
                        o.prototype.parseRect = function() {
                            if (this.kind = n.RECT, this.family = n.PRIMITIVE, this.params = [], this.params[0] = this.element.getFloatAttribute("x"), this.params[1] = this.element.getFloatAttribute("y"), this.params[2] = this.element.getFloatAttribute("width"), this.params[3] = this.element.getFloatAttribute("height"), 0 > this.params[2] || 0 > this.params[3]) throw "svg error: negative width or height found while parsing <rect>"
                        },
                        o.prototype.parseEllipse = function(e) {
                            this.kind = n.ELLIPSE,
                                this.family = n.PRIMITIVE,
                                this.params = [],
                                this.params[0] = 0 | this.element.getFloatAttribute("cx"),
                                this.params[1] = 0 | this.element.getFloatAttribute("cy");
                            var t;
                            if (e) {
                                if (e = t = this.element.getFloatAttribute("r"), 0 > e) throw "svg error: negative radius found while parsing <circle>"
                            } else if (e = this.element.getFloatAttribute("rx"), t = this.element.getFloatAttribute("ry"), 0 > e || 0 > t) throw "svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";
                            this.params[0] -= e,
                                this.params[1] -= t,
                                this.params[2] = 2 * e,
                                this.params[3] = 2 * t
                        },
                        o.prototype.parseLine = function() {
                            this.kind = n.LINE,
                                this.family = n.PRIMITIVE,
                                this.params = [],
                                this.params[0] = this.element.getFloatAttribute("x1"),
                                this.params[1] = this.element.getFloatAttribute("y1"),
                                this.params[2] = this.element.getFloatAttribute("x2"),
                                this.params[3] = this.element.getFloatAttribute("y2")
                        },
                        o.prototype.parseColors = function(e) {
                            if (e.hasAttribute("opacity") && this.setOpacity(e.getAttribute("opacity")), e.hasAttribute("stroke") && this.setStroke(e.getAttribute("stroke")), e.hasAttribute("stroke-width") && this.setStrokeWeight(e.getAttribute("stroke-width")), e.hasAttribute("stroke-linejoin") && this.setStrokeJoin(e.getAttribute("stroke-linejoin")), e.hasAttribute("stroke-linecap") && this.setStrokeCap(e.getStringAttribute("stroke-linecap")), e.hasAttribute("fill") && this.setFill(e.getStringAttribute("fill")), e.hasAttribute("style")) {
                                e = e.getStringAttribute("style").toString().split(";");
                                for (var n = 0,
                                         r = e.length; r > n; n++) {
                                    var i = t.trim(e[n].split(":"));
                                    "fill" === i[0] ? this.setFill(i[1]) : "fill-opacity" === i[0] ? this.setFillOpacity(i[1]) : "stroke" === i[0] ? this.setStroke(i[1]) : "stroke-width" === i[0] ? this.setStrokeWeight(i[1]) : "stroke-linecap" === i[0] ? this.setStrokeCap(i[1]) : "stroke-linejoin" === i[0] ? this.setStrokeJoin(i[1]) : "stroke-opacity" === i[0] ? this.setStrokeOpacity(i[1]) : "opacity" === i[0] && this.setOpacity(i[1])
                                }
                            }
                        },
                        o.prototype.setFillOpacity = function(e) {
                            this.fillOpacity = parseFloat(e),
                                this.fillColor = 255 * this.fillOpacity << 24 | 16777215 & this.fillColor
                        },
                        o.prototype.setFill = function(e) {
                            var t = 4278190080 & this.fillColor;
                            "none" === e ? this.fill = !1 : 0 === e.indexOf("#") ? (this.fill = !0, 4 === e.length && (e = e.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3")), this.fillColor = t | 16777215 & parseInt(e.substring(1), 16)) : 0 === e.indexOf("rgb") ? (this.fill = !0, this.fillColor = t | this.parseRGB(e)) : 0 === e.indexOf("url(#") ? this.fillName = e.substring(5, e.length - 1) : s[e] && (this.fill = !0, this.fillColor = t | 16777215 & parseInt(s[e].substring(1), 16))
                        },
                        o.prototype.setOpacity = function(e) {
                            this.strokeColor = 255 * parseFloat(e) << 24 | 16777215 & this.strokeColor,
                                this.fillColor = 255 * parseFloat(e) << 24 | 16777215 & this.fillColor
                        },
                        o.prototype.setStroke = function(e) {
                            var t = 4278190080 & this.strokeColor;
                            "none" === e ? this.stroke = !1 : "#" === e.charAt(0) ? (this.stroke = !0, 4 === e.length && (e = e.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3")), this.strokeColor = t | 16777215 & parseInt(e.substring(1), 16)) : 0 === e.indexOf("rgb") ? (this.stroke = !0, this.strokeColor = t | this.parseRGB(e)) : 0 === e.indexOf("url(#") ? this.strokeName = e.substring(5, e.length - 1) : s[e] && (this.stroke = !0, this.strokeColor = t | 16777215 & parseInt(s[e].substring(1), 16))
                        },
                        o.prototype.setStrokeWeight = function(e) {
                            this.strokeWeight = this.parseUnitSize(e)
                        },
                        o.prototype.setStrokeJoin = function(e) {
                            "miter" === e ? this.strokeJoin = n.MITER: "round" === e ? this.strokeJoin = n.ROUND: "bevel" === e && (this.strokeJoin = n.BEVEL)
                        },
                        o.prototype.setStrokeCap = function(e) {
                            "butt" === e ? this.strokeCap = n.SQUARE: "round" === e ? this.strokeCap = n.ROUND: "square" === e && (this.strokeCap = n.PROJECT)
                        },
                        o.prototype.setStrokeOpacity = function(e) {
                            this.strokeOpacity = parseFloat(e),
                                this.strokeColor = 255 * this.strokeOpacity << 24 | 16777215 & this.strokeColor
                        },
                        o.prototype.parseRGB = function(e) {
                            return e = e.substring(e.indexOf("(") + 1, e.indexOf(")")).split(", "),
                            e[0] << 16 | e[1] << 8 | e[2]
                        },
                        o.prototype.parseUnitSize = function(e) {
                            var t = e.length - 2;
                            return 0 > t ? e: e.indexOf("pt") === t ? 1.25 * parseFloat(e.substring(0, t)) : e.indexOf("pc") === t ? 15 * parseFloat(e.substring(0, t)) : e.indexOf("mm") === t ? 3.543307 * parseFloat(e.substring(0, t)) : e.indexOf("cm") === t ? 35.43307 * parseFloat(e.substring(0, t)) : e.indexOf("in") === t ? 90 * parseFloat(e.substring(0, t)) : parseFloat(e.indexOf("px") === t ? e.substring(0, t) : e)
                        },
                        o
                }
            },
                {}],
            17 : [function(e, t) {
                t.exports = function(e, t) {
                    function n(e, t, n) {
                        this.x = e || 0,
                            this.y = t || 0,
                            this.z = n || 0
                    }
                    function r(e) {
                        return function(t, n) {
                            var r = t.get();
                            return r[e](n),
                                r
                        }
                    }
                    var i = e.PConstants;
                    n.fromAngle = function(e, r) {
                        return (r === t || null === r) && (r = new n),
                            r.x = Math.cos(e),
                            r.y = Math.sin(e),
                            r
                    },
                        n.random2D = function(e) {
                            return n.fromAngle(Math.random() * i.TWO_PI, e)
                        },
                        n.random3D = function(e) {
                            var r = Math.random() * i.TWO_PI,
                                s = 2 * Math.random() - 1,
                                o = Math.sqrt(1 - s * s),
                                a = o * Math.cos(r),
                                r = o * Math.sin(r);
                            return e === t || null === e ? e = new n(a, r, s) : e.set(a, r, s),
                                e
                        },
                        n.dist = function(e, t) {
                            return e.dist(t)
                        },
                        n.dot = function(e, t) {
                            return e.dot(t)
                        },
                        n.cross = function(e, t) {
                            return e.cross(t)
                        },
                        n.sub = function(e, t) {
                            return new n(e.x - t.x, e.y - t.y, e.z - t.z)
                        },
                        n.angleBetween = function(e, t) {
                            return Math.acos(e.dot(t) / (e.mag() * t.mag()))
                        },
                        n.lerp = function(e, t, r) {
                            return e = new n(e.x, e.y, e.z),
                                e.lerp(t, r),
                                e
                        },
                        n.prototype = {
                            set: function(e, t, n) {
                                1 === arguments.length ? this.set(e.x || e[0] || 0, e.y || e[1] || 0, e.z || e[2] || 0) : (this.x = e, this.y = t, this.z = n)
                            },
                            get: function() {
                                return new n(this.x, this.y, this.z)
                            },
                            mag: function() {
                                var e = this.x,
                                    t = this.y,
                                    n = this.z;
                                return Math.sqrt(e * e + t * t + n * n)
                            },
                            magSq: function() {
                                var e = this.x,
                                    t = this.y,
                                    n = this.z;
                                return e * e + t * t + n * n
                            },
                            setMag: function(e, n) {
                                return n !== t ? (e.normalize(), e.mult(n), e) : (n = e, this.normalize(), this.mult(n), void 0)
                            },
                            add: function(e, t, n) {
                                1 === arguments.length ? (this.x += e.x, this.y += e.y, this.z += e.z) : (this.x += e, this.y += t, this.z += n)
                            },
                            sub: function(e, t, n) {
                                1 === arguments.length ? (this.x -= e.x, this.y -= e.y, this.z -= e.z) : (this.x -= e, this.y -= t, this.z -= n)
                            },
                            mult: function(e) {
                                "number" == typeof e ? (this.x *= e, this.y *= e, this.z *= e) : (this.x *= e.x, this.y *= e.y, this.z *= e.z)
                            },
                            div: function(e) {
                                "number" == typeof e ? (this.x /= e, this.y /= e, this.z /= e) : (this.x /= e.x, this.y /= e.y, this.z /= e.z)
                            },
                            rotate: function(e) {
                                var t = this.x,
                                    n = Math.cos(e);
                                e = Math.sin(e),
                                    this.x = n * this.x - e * this.y,
                                    this.y = e * t + n * this.y
                            },
                            dist: function(e) {
                                var t = this.x - e.x,
                                    n = this.y - e.y;
                                return e = this.z - e.z,
                                    Math.sqrt(t * t + n * n + e * e)
                            },
                            dot: function(e, t, n) {
                                return 1 === arguments.length ? this.x * e.x + this.y * e.y + this.z * e.z: this.x * e + this.y * t + this.z * n
                            },
                            cross: function(e) {
                                var t = this.x,
                                    r = this.y,
                                    i = this.z;
                                return new n(r * e.z - e.y * i, i * e.x - e.z * t, t * e.y - e.x * r)
                            },
                            lerp: function(e, t, n, r) {
                                var i, s;
                                2 === arguments.length ? (r = t, i = e.x, s = e.y, n = e.z) : (i = e, s = t),
                                    this.x += (i - this.x) * r,
                                    this.y += (s - this.y) * r,
                                    this.z += (n - this.z) * r
                            },
                            normalize: function() {
                                var e = this.mag();
                                e > 0 && this.div(e)
                            },
                            limit: function(e) {
                                this.mag() > e && (this.normalize(), this.mult(e))
                            },
                            heading: function() {
                                return - Math.atan2( - this.y, this.x)
                            },
                            heading2D: function() {
                                return this.heading()
                            },
                            toString: function() {
                                return "[" + this.x + ", " + this.y + ", " + this.z + "]"
                            },
                            array: function() {
                                return [this.x, this.y, this.z]
                            }
                        };
                    for (var s in n.prototype) n.prototype.hasOwnProperty(s) && !n.hasOwnProperty(s) && (n[s] = r(s));
                    return n
                }
            },
                {}],
            18 : [function(e, t) {
                t.exports = function() {
                    var e = function(e, t, n, r, i) {
                        this.fullName = e || "",
                            this.name = t || "",
                            this.namespace = n || "",
                            this.value = r,
                            this.type = i
                    };
                    return e.prototype = {
                        getName: function() {
                            return this.name
                        },
                        getFullName: function() {
                            return this.fullName
                        },
                        getNamespace: function() {
                            return this.namespace
                        },
                        getValue: function() {
                            return this.value
                        },
                        getType: function() {
                            return this.type
                        },
                        setValue: function(e) {
                            this.value = e
                        }
                    },
                        e
                }
            },
                {}],
            19 : [function(e, t) {
                t.exports = function(e, t) {
                    var n = e.Browser,
                        r = n.ajax,
                        i = n.window.DOMParser,
                        s = e.XMLAttribute,
                        o = function(e, n, r, i) {
                            this.attributes = [],
                                this.children = [],
                                this.name = this.fullName = null,
                                this.namespace = "",
                                this.parent = this.content = null,
                                this.systemID = this.lineNr = "",
                                this.type = "ELEMENT",
                            e && ("string" == typeof e ? n === t && -1 < e.indexOf("<") ? this.parse(e) : (this.fullName = e, this.namespace = n, this.systemId = r, this.lineNr = i) : this.parse(n))
                        };
                    return o.prototype = {
                        parse: function(e) {
                            var t;
                            try {
                                var n = e.substring(e.length - 4); (".xml" === n || ".svg" === n) && (e = r(e)),
                                    t = (new i).parseFromString(e, "text/xml");
                                var s = t.documentElement;
                                if (!s) throw "Error loading document";
                                return this.parseChildrenRecursive(null, s),
                                    this
                            } catch(o) {
                                throw o
                            }
                        },
                        parseChildrenRecursive: function(e, t) {
                            var n, r, i, a;
                            if (e ? (n = new o(t.nodeName), n.parent = e) : (this.fullName = t.localName, this.name = t.nodeName, n = this), 3 === t.nodeType && "" !== t.textContent) return this.createPCDataElement(t.textContent);
                            if (4 === t.nodeType) return this.createCDataElement(t.textContent);
                            if (t.attributes) for (i = 0, a = t.attributes.length; a > i; i++) r = t.attributes[i],
                                r = new s(r.getname, r.nodeName, r.namespaceURI, r.nodeValue, r.nodeType),
                                n.attributes.push(r);
                            if (t.childNodes) for (i = 0, a = t.childNodes.length; a > i; i++) r = n.parseChildrenRecursive(n, t.childNodes[i]),
                            null !== r && n.children.push(r);
                            return n
                        },
                        createElement: function(e, n, r, i) {
                            return r === t ? new o(e, n) : new o(e, n, r, i)
                        },
                        createPCDataElement: function(e) {
                            if ("" === e.replace(/^\s+$/g, "")) return null;
                            var t = new o;
                            return t.type = "TEXT",
                                t.content = e,
                                t
                        },
                        createCDataElement: function(e) {
                            var t = this.createPCDataElement(e);
                            if (null === t) return null;
                            t.type = "CDATA";
                            var n, r = {
                                "<": "&lt;",
                                ">": "&gt;",
                                "'": "&apos;",
                                '"': "&quot;"
                            };
                            for (n in r) Object.hasOwnProperty(r, n) || (e = e.replace(RegExp(n, "g"), r[n]));
                            return t.cdata = e,
                                t
                        },
                        hasAttribute: function() {
                            return 1 === arguments.length ? null !== this.getAttribute(arguments[0]) : 2 === arguments.length ? null !== this.getAttribute(arguments[0], arguments[1]) : void 0
                        },
                        equals: function(e) {
                            if (! (e instanceof o)) return ! 1;
                            var t, n;
                            if (this.fullName !== e.fullName || this.attributes.length !== e.getAttributeCount() || this.attributes.length !== e.attributes.length) return ! 1;
                            var r, i;
                            for (t = 0, n = this.attributes.length; n > t; t++) if (r = this.attributes[t].getName(), i = this.attributes[t].getNamespace(), r = e.findAttribute(r, i), null === r || this.attributes[t].getValue() !== r.getValue() || this.attributes[t].getType() !== r.getType()) return ! 1;
                            if (this.children.length !== e.getChildCount()) return ! 1;
                            if (0 < this.children.length) {
                                for (t = 0, n = this.children.length; n > t; t++) if (r = this.getChild(t), i = e.getChild(t), !r.equals(i)) return ! 1;
                                return ! 0
                            }
                            return this.content === e.content
                        },
                        getContent: function() {
                            if ("TEXT" === this.type || "CDATA" === this.type) return this.content;
                            var e = this.children;
                            return 1 !== e.length || "TEXT" !== e[0].type && "CDATA" !== e[0].type ? null: e[0].content
                        },
                        getAttribute: function() {
                            var e;
                            return 2 === arguments.length ? (e = this.findAttribute(arguments[0])) ? e.getValue() : arguments[1] : 1 === arguments.length ? (e = this.findAttribute(arguments[0])) ? e.getValue() : null: 3 === arguments.length ? (e = this.findAttribute(arguments[0], arguments[1])) ? e.getValue() : arguments[2] : void 0
                        },
                        getStringAttribute: function() {
                            return 1 === arguments.length ? this.getAttribute(arguments[0]) : 2 === arguments.length ? this.getAttribute(arguments[0], arguments[1]) : this.getAttribute(arguments[0], arguments[1], arguments[2])
                        },
                        getString: function(e) {
                            return this.getStringAttribute(e)
                        },
                        getFloatAttribute: function() {
                            return 1 === arguments.length ? parseFloat(this.getAttribute(arguments[0], 0)) : 2 === arguments.length ? this.getAttribute(arguments[0], arguments[1]) : this.getAttribute(arguments[0], arguments[1], arguments[2])
                        },
                        getFloat: function(e) {
                            return this.getFloatAttribute(e)
                        },
                        getIntAttribute: function() {
                            return 1 === arguments.length ? this.getAttribute(arguments[0], 0) : 2 === arguments.length ? this.getAttribute(arguments[0], arguments[1]) : this.getAttribute(arguments[0], arguments[1], arguments[2])
                        },
                        getInt: function(e) {
                            return this.getIntAttribute(e)
                        },
                        hasChildren: function() {
                            return 0 < this.children.length
                        },
                        addChild: function(e) {
                            null !== e && (e.parent = this, this.children.push(e))
                        },
                        insertChild: function(e, t) {
                            if (e) {
                                if (null === e.getLocalName() && !this.hasChildren()) {
                                    var n = this.children[this.children.length - 1];
                                    if (null === n.getLocalName()) return void n.setContent(n.getContent() + e.getContent())
                                }
                                e.parent = this,
                                    this.children.splice(t, 0, e)
                            }
                        },
                        getChild: function(e) {
                            if ("number" == typeof e) return this.children[e];
                            if ( - 1 !== e.indexOf("/")) return this.getChildRecursive(e.split("/"), 0);
                            for (var t, n, r = 0,
                                     i = this.getChildCount(); i > r; r++) if (t = this.getChild(r), n = t.getName(), null !== n && n === e) return t;
                            return null
                        },
                        getChildren: function() {
                            if (1 === arguments.length) {
                                if ("number" == typeof arguments[0]) return this.getChild(arguments[0]);
                                if ( - 1 !== arguments[0].indexOf("/")) return this.getChildrenRecursive(arguments[0].split("/"), 0);
                                for (var e, t, n = [], r = 0, i = this.getChildCount(); i > r; r++) e = this.getChild(r),
                                    t = e.getName(),
                                null !== t && t === arguments[0] && n.push(e);
                                return n
                            }
                            return this.children
                        },
                        getChildCount: function() {
                            return this.children.length
                        },
                        getChildRecursive: function(e, t) {
                            if (t === e.length) return this;
                            for (var n, r, i = e[t], s = 0, o = this.getChildCount(); o > s; s++) if (n = this.getChild(s), r = n.getName(), null !== r && r === i) return n.getChildRecursive(e, t + 1);
                            return null
                        },
                        getChildrenRecursive: function(e, t) {
                            if (t === e.length - 1) return this.getChildren(e[t]);
                            for (var n = this.getChildren(e[t]), r = [], i = 0; i < n.length; i++) r = r.concat(n[i].getChildrenRecursive(e, t + 1));
                            return r
                        },
                        isLeaf: function() {
                            return ! this.hasChildren()
                        },
                        listChildren: function() {
                            for (var e = [], t = 0, n = this.children.length; n > t; t++) e.push(this.getChild(t).getName());
                            return e
                        },
                        removeAttribute: function(e, t) {
                            this.namespace = t || "";
                            for (var n = 0,
                                     r = this.attributes.length; r > n; n++) if (this.attributes[n].getName() === e && this.attributes[n].getNamespace() === this.namespace) {
                                this.attributes.splice(n, 1);
                                break
                            }
                        },
                        removeChild: function(e) {
                            if (e) for (var t = 0,
                                            n = this.children.length; n > t; t++) if (this.children[t].equals(e)) {
                                this.children.splice(t, 1);
                                break
                            }
                        },
                        removeChildAtIndex: function(e) {
                            this.children.length > e && this.children.splice(e, 1)
                        },
                        findAttribute: function(e, t) {
                            this.namespace = t || "";
                            for (var n = 0,
                                     r = this.attributes.length; r > n; n++) if (this.attributes[n].getName() === e && this.attributes[n].getNamespace() === this.namespace) return this.attributes[n];
                            return null
                        },
                        setAttribute: function() {
                            var e;
                            if (3 === arguments.length) {
                                e = arguments[0].indexOf(":");
                                var t = arguments[0].substring(e + 1); (e = this.findAttribute(t, arguments[1])) ? e.setValue(arguments[2]) : (e = new s(arguments[0], t, arguments[1], arguments[2], "CDATA"), this.attributes.push(e))
                            } else(e = this.findAttribute(arguments[0])) ? e.setValue(arguments[1]) : (e = new s(arguments[0], arguments[0], null, arguments[1], "CDATA"), this.attributes.push(e))
                        },
                        setString: function(e, t) {
                            this.setAttribute(e, t)
                        },
                        setInt: function(e, t) {
                            this.setAttribute(e, t)
                        },
                        setFloat: function(e, t) {
                            this.setAttribute(e, t)
                        },
                        setContent: function(e) {
                            0 < this.children.length && Processing.debug("Tried to set content for XMLElement with children"),
                                this.content = e
                        },
                        setName: function() {
                            if (1 === arguments.length) this.name = arguments[0],
                                this.fullName = arguments[0],
                                this.namespace = null;
                            else {
                                var e = arguments[0].indexOf(":");
                                this.name = null === arguments[1] || 0 > e ? arguments[0] : arguments[0].substring(e + 1),
                                    this.fullName = arguments[0],
                                    this.namespace = arguments[1]
                            }
                        },
                        getName: function() {
                            return this.fullName
                        },
                        getLocalName: function() {
                            return this.name
                        },
                        getAttributeCount: function() {
                            return this.attributes.length
                        },
                        toString: function() {
                            if ("TEXT" === this.type) return this.content;
                            if ("CDATA" === this.type) return this.cdata;
                            var e, t = this.fullName,
                                n = "<" + t;
                            for (e = 0; e < this.attributes.length; e++) var r = this.attributes[e],
                                n = n + (" " + r.getName() + '="' + r.getValue() + '"');
                            if (0 === this.children.length) n = "" === this.content ? n + "/>": n + (">" + this.content + "</" + t + ">");
                            else {
                                for (n += ">", e = 0; e < this.children.length; e++) n += this.children[e].toString();
                                n += "</" + t + ">"
                            }
                            return n
                        }
                    },
                        o.parse = function(e) {
                            var t = new o;
                            return t.parse(e),
                                t
                        },
                        o
                }
            },
                {}],
            20 : [function(e, t) {
                t.exports = {
                    aliceblue: "#f0f8ff",
                    antiquewhite: "#faebd7",
                    aqua: "#00ffff",
                    aquamarine: "#7fffd4",
                    azure: "#f0ffff",
                    beige: "#f5f5dc",
                    bisque: "#ffe4c4",
                    black: "#000000",
                    blanchedalmond: "#ffebcd",
                    blue: "#0000ff",
                    blueviolet: "#8a2be2",
                    brown: "#a52a2a",
                    burlywood: "#deb887",
                    cadetblue: "#5f9ea0",
                    chartreuse: "#7fff00",
                    chocolate: "#d2691e",
                    coral: "#ff7f50",
                    cornflowerblue: "#6495ed",
                    cornsilk: "#fff8dc",
                    crimson: "#dc143c",
                    cyan: "#00ffff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkgray: "#a9a9a9",
                    darkgreen: "#006400",
                    darkkhaki: "#bdb76b",
                    darkmagenta: "#8b008b",
                    darkolivegreen: "#556b2f",
                    darkorange: "#ff8c00",
                    darkorchid: "#9932cc",
                    darkred: "#8b0000",
                    darksalmon: "#e9967a",
                    darkseagreen: "#8fbc8f",
                    darkslateblue: "#483d8b",
                    darkslategray: "#2f4f4f",
                    darkturquoise: "#00ced1",
                    darkviolet: "#9400d3",
                    deeppink: "#ff1493",
                    deepskyblue: "#00bfff",
                    dimgray: "#696969",
                    dodgerblue: "#1e90ff",
                    firebrick: "#b22222",
                    floralwhite: "#fffaf0",
                    forestgreen: "#228b22",
                    fuchsia: "#ff00ff",
                    gainsboro: "#dcdcdc",
                    ghostwhite: "#f8f8ff",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gray: "#808080",
                    green: "#008000",
                    greenyellow: "#adff2f",
                    honeydew: "#f0fff0",
                    hotpink: "#ff69b4",
                    indianred: "#cd5c5c",
                    indigo: "#4b0082",
                    ivory: "#fffff0",
                    khaki: "#f0e68c",
                    lavender: "#e6e6fa",
                    lavenderblush: "#fff0f5",
                    lawngreen: "#7cfc00",
                    lemonchiffon: "#fffacd",
                    lightblue: "#add8e6",
                    lightcoral: "#f08080",
                    lightcyan: "#e0ffff",
                    lightgoldenrodyellow: "#fafad2",
                    lightgrey: "#d3d3d3",
                    lightgreen: "#90ee90",
                    lightpink: "#ffb6c1",
                    lightsalmon: "#ffa07a",
                    lightseagreen: "#20b2aa",
                    lightskyblue: "#87cefa",
                    lightslategray: "#778899",
                    lightsteelblue: "#b0c4de",
                    lightyellow: "#ffffe0",
                    lime: "#00ff00",
                    limegreen: "#32cd32",
                    linen: "#faf0e6",
                    magenta: "#ff00ff",
                    maroon: "#800000",
                    mediumaquamarine: "#66cdaa",
                    mediumblue: "#0000cd",
                    mediumorchid: "#ba55d3",
                    mediumpurple: "#9370d8",
                    mediumseagreen: "#3cb371",
                    mediumslateblue: "#7b68ee",
                    mediumspringgreen: "#00fa9a",
                    mediumturquoise: "#48d1cc",
                    mediumvioletred: "#c71585",
                    midnightblue: "#191970",
                    mintcream: "#f5fffa",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    oldlace: "#fdf5e6",
                    olive: "#808000",
                    olivedrab: "#6b8e23",
                    orange: "#ffa500",
                    orangered: "#ff4500",
                    orchid: "#da70d6",
                    palegoldenrod: "#eee8aa",
                    palegreen: "#98fb98",
                    paleturquoise: "#afeeee",
                    palevioletred: "#d87093",
                    papayawhip: "#ffefd5",
                    peachpuff: "#ffdab9",
                    peru: "#cd853f",
                    pink: "#ffc0cb",
                    plum: "#dda0dd",
                    powderblue: "#b0e0e6",
                    purple: "#800080",
                    red: "#ff0000",
                    rosybrown: "#bc8f8f",
                    royalblue: "#4169e1",
                    saddlebrown: "#8b4513",
                    salmon: "#fa8072",
                    sandybrown: "#f4a460",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    sienna: "#a0522d",
                    silver: "#c0c0c0",
                    skyblue: "#87ceeb",
                    slateblue: "#6a5acd",
                    slategray: "#708090",
                    snow: "#fffafa",
                    springgreen: "#00ff7f",
                    steelblue: "#4682b4",
                    tan: "#d2b48c",
                    teal: "#008080",
                    thistle: "#d8bfd8",
                    tomato: "#ff6347",
                    turquoise: "#40e0d0",
                    violet: "#ee82ee",
                    wheat: "#f5deb3",
                    white: "#ffffff",
                    whitesmoke: "#f5f5f5",
                    yellow: "#ffff00",
                    yellowgreen: "#9acd32"
                }
            },
                {}],
            21 : [function(e, t) {
                t.exports = function(e, t, n) {
                    return function(r, i) {
                        r.__contains = function(e, t) {
                            return "string" != typeof e ? e.contains.apply(e, i(arguments)) : null !== e && null !== t && "string" == typeof t && -1 < e.indexOf(t)
                        },
                            r.__replaceAll = function(e, t, n) {
                                return "string" != typeof e ? e.replaceAll.apply(e, i(arguments)) : e.replace(RegExp(t, "g"), n)
                            },
                            r.__replaceFirst = function(e, t, n) {
                                return "string" != typeof e ? e.replaceFirst.apply(e, i(arguments)) : e.replace(RegExp(t, ""), n)
                            },
                            r.__replace = function(e, t, n) {
                                if ("string" != typeof e) return e.replace.apply(e, i(arguments));
                                if (t instanceof RegExp) return e.replace(t, n);
                                if ("string" != typeof t && (t = t.toString()), "" === t) return e;
                                var r = e.indexOf(t);
                                if (0 > r) return e;
                                var s = 0,
                                    o = "";
                                do o += e.substring(s, r) + n,
                                    s = r + t.length;
                                while (0 <= (r = e.indexOf(t, s)));
                                return o + e.substring(s)
                            },
                            r.__equals = function(e, n) {
                                return e.equals instanceof Function ? e.equals.apply(e, i(arguments)) : t(e, n)
                            },
                            r.__equalsIgnoreCase = function(e, t) {
                                return "string" != typeof e ? e.equalsIgnoreCase.apply(e, i(arguments)) : e.toLowerCase() === t.toLowerCase()
                            },
                            r.__toCharArray = function(e) {
                                if ("string" != typeof e) return e.toCharArray.apply(e, i(arguments));
                                for (var t = [], n = 0, r = e.length; r > n; ++n) t[n] = new Char(e.charAt(n));
                                return t
                            },
                            r.__split = function(e, t, r) {
                                if ("string" != typeof e) return e.split.apply(e, i(arguments));
                                var s = RegExp(t);
                                if (r === n || 1 > r) return e.split(s);
                                for (var o, a = [], l = e; - 1 !== (o = l.search(s)) && a.length < r - 1;) {
                                    var u = s.exec(l).toString();
                                    a.push(l.substring(0, o)),
                                        l = l.substring(o + u.length)
                                }
                                return - 1 === o && "" === l || a.push(l),
                                    a
                            },
                            r.__codePointAt = function(e, t) {
                                var n, r = e.charCodeAt(t);
                                return r >= 55296 && 56319 >= r ? (n = e.charCodeAt(t + 1), 1024 * (r - 55296) + (n - 56320) + 65536) : r
                            },
                            r.__matches = function(e, t) {
                                return RegExp(t).test(e)
                            },
                            r.__startsWith = function(e, t, n) {
                                return "string" != typeof e ? e.startsWith.apply(e, i(arguments)) : (n = n || 0, 0 > n || n > e.length ? !1 : "" === t || t === e ? !0 : e.indexOf(t) === n)
                            },
                            r.__endsWith = function(e, t) {
                                if ("string" != typeof e) return e.endsWith.apply(e, i(arguments));
                                var n = t ? t.length: 0;
                                return "" === t || t === e ? !0 : e.indexOf(t) === e.length - n
                            },
                            r.__hashCode = function(t) {
                                return t.hashCode instanceof Function ? t.hashCode.apply(t, i(arguments)) : e(t)
                            },
                            r.__printStackTrace = function(e) {
                                r.println("Exception: " + e.toString())
                            }
                    }
                }
            },
                {}],
            22 : [function(e, t) {
                t.exports = function(e, t) {
                    function n(e, t) {
                        var n = e || 362436069,
                            r = t || 521288629,
                            i = function() {
                                return n = 36969 * (65535 & n) + (n >>> 16) & 4294967295,
                                    r = 18e3 * (65535 & r) + (r >>> 16) & 4294967295,
                                4294967295 & ((65535 & n) << 16 | 65535 & r)
                            };
                        this.doubleGenerator = function() {
                            var e = i() / 4294967296;
                            return 0 > e ? 1 + e: e
                        },
                            this.intGenerator = i
                    }
                    function r(e) {
                        function r(e, t, n, r) {
                            e &= 15;
                            var i = 8 > e ? t: n;
                            return t = 4 > e ? n: 12 === e || 14 === e ? t: r,
                            (0 === (1 & e) ? i: -i) + (0 === (2 & e) ? t: -t)
                        }
                        function i(e, t, n) {
                            return t = 0 === (1 & e) ? t: n,
                                0 === (2 & e) ? -t: t
                        }
                        function s(e, t, n) {
                            return t + e * (n - t)
                        }
                        e = e !== t ? new n(e) : n.createRandomized();
                        var o, a, l = new Uint8Array(512);
                        for (o = 0; 256 > o; ++o) l[o] = o;
                        for (o = 0; 256 > o; ++o) {
                            var u = l[a = 255 & e.intGenerator()];
                            l[a] = l[o],
                                l[o] = u
                        }
                        for (o = 0; 256 > o; ++o) l[o + 256] = l[o];
                        this.noise3d = function(e, t, n) {
                            var i = 255 & Math.floor(e),
                                o = 255 & Math.floor(t),
                                a = 255 & Math.floor(n);
                            e -= Math.floor(e),
                                t -= Math.floor(t),
                                n -= Math.floor(n);
                            var u = (3 - 2 * e) * e * e,
                                h = (3 - 2 * t) * t * t,
                                c = l[i] + o,
                                f = l[c] + a,
                                c = l[c + 1] + a,
                                o = l[i + 1] + o,
                                i = l[o] + a,
                                a = l[o + 1] + a;
                            return s((3 - 2 * n) * n * n, s(h, s(u, r(l[f], e, t, n), r(l[i], e - 1, t, n)), s(u, r(l[c], e, t - 1, n), r(l[a], e - 1, t - 1, n))), s(h, s(u, r(l[f + 1], e, t, n - 1), r(l[i + 1], e - 1, t, n - 1)), s(u, r(l[c + 1], e, t - 1, n - 1), r(l[a + 1], e - 1, t - 1, n - 1))))
                        },
                            this.noise2d = function(e, t) {
                                var n = 255 & Math.floor(e),
                                    r = 255 & Math.floor(t);
                                e -= Math.floor(e),
                                    t -= Math.floor(t);
                                var o = (3 - 2 * e) * e * e,
                                    a = l[n] + r,
                                    n = l[n + 1] + r;
                                return s((3 - 2 * t) * t * t, s(o, i(l[a], e, t), i(l[n], e - 1, t)), s(o, i(l[a + 1], e, t - 1), i(l[n + 1], e - 1, t - 1)))
                            },
                            this.noise1d = function(e) {
                                var t = 255 & Math.floor(e);
                                return e -= Math.floor(e),
                                    s((3 - 2 * e) * e * e, 0 === (1 & l[t]) ? -e: e, 0 === (1 & l[t + 1]) ? -(e - 1) : e - 1)
                            }
                    }
                    var i = function() {
                        return Math.random()
                    };
                    e.abs = Math.abs,
                        e.ceil = Math.ceil,
                        e.exp = Math.exp,
                        e.floor = Math.floor,
                        e.log = Math.log,
                        e.pow = Math.pow,
                        e.round = Math.round,
                        e.sqrt = Math.sqrt,
                        e.acos = Math.acos,
                        e.asin = Math.asin,
                        e.atan = Math.atan,
                        e.atan2 = Math.atan2,
                        e.cos = Math.cos,
                        e.sin = Math.sin,
                        e.tan = Math.tan,
                        e.constrain = function(e, t, n) {
                            return e > n ? n: t > e ? t: e
                        },
                        e.dist = function() {
                            var e, t, n;
                            return 4 === arguments.length ? (e = arguments[0] - arguments[2], t = arguments[1] - arguments[3], Math.sqrt(e * e + t * t)) : 6 === arguments.length ? (e = arguments[0] - arguments[3], t = arguments[1] - arguments[4], n = arguments[2] - arguments[5], Math.sqrt(e * e + t * t + n * n)) : void 0
                        },
                        e.lerp = function(e, t, n) {
                            return (t - e) * n + e
                        },
                        e.mag = function(e, t, n) {
                            return Math.sqrt(n ? e * e + t * t + n * n: e * e + t * t)
                        },
                        e.map = function(e, t, n, r, i) {
                            return r + (i - r) * ((e - t) / (n - t))
                        },
                        e.max = function() {
                            if (2 === arguments.length) return arguments[0] < arguments[1] ? arguments[1] : arguments[0];
                            var e = 1 === arguments.length ? arguments[0] : arguments;
                            if (! ("length" in e && 0 < e.length)) throw "Non-empty array is expected";
                            for (var t = e[0], n = e.length, r = 1; n > r; ++r) t < e[r] && (t = e[r]);
                            return t
                        },
                        e.min = function() {
                            if (2 === arguments.length) return arguments[0] < arguments[1] ? arguments[0] : arguments[1];
                            var e = 1 === arguments.length ? arguments[0] : arguments;
                            if (! ("length" in e && 0 < e.length)) throw "Non-empty array is expected";
                            for (var t = e[0], n = e.length, r = 1; n > r; ++r) t > e[r] && (t = e[r]);
                            return t
                        },
                        e.norm = function(e, t, n) {
                            return (e - t) / (n - t)
                        },
                        e.sq = function(e) {
                            return e * e
                        },
                        e.degrees = function(e) {
                            return 180 * e / Math.PI
                        },
                        e.random = function() {
                            if (0 === arguments.length) return i();
                            if (1 === arguments.length) return i() * arguments[0];
                            var e = arguments[0],
                                t = arguments[1];
                            return i() * (t - e) + e
                        },
                        n.createRandomized = function() {
                            var e = new Date;
                            return new n(e / 6e4 & 4294967295, 4294967295 & e)
                        },
                        e.randomSeed = function(e) {
                            i = new n(e).doubleGenerator,
                                this.haveNextNextGaussian = !1
                        },
                        e.randomGaussian = function() {
                            if (this.haveNextNextGaussian) return this.haveNextNextGaussian = !1,
                                this.nextNextGaussian;
                            var e, t, n;
                            do e = 2 * i() - 1,
                                t = 2 * i() - 1,
                                n = e * e + t * t;
                            while (n >= 1 || 0 === n);
                            return n = Math.sqrt( - 2 * Math.log(n) / n),
                                this.nextNextGaussian = t * n,
                                this.haveNextNextGaussian = !0,
                            e * n
                        };
                    var s = t,
                        o = 4,
                        a = .5,
                        l = t;
                    e.noise = function(e, n, i) {
                        s === t && (s = new r(l));
                        for (var u = s,
                                 h = 1,
                                 c = 1,
                                 f = 0,
                                 p = 0; o > p; ++p) {
                            switch (h *= a, arguments.length) {
                                case 1:
                                    f += h * (1 + u.noise1d(c * e)) / 2;
                                    break;
                                case 2:
                                    f += h * (1 + u.noise2d(c * e, c * n)) / 2;
                                    break;
                                case 3:
                                    f += h * (1 + u.noise3d(c * e, c * n, c * i)) / 2
                            }
                            c *= 2
                        }
                        return f
                    },
                        e.noiseDetail = function(e, n) {
                            o = e,
                            n !== t && (a = n)
                        },
                        e.noiseSeed = function(e) {
                            l = e,
                                s = t
                        }
                }
            },
                {}],
            23 : [function(e, t) {
                t.exports = function(e) {
                    var t = {
                        trim: function(e) {
                            if (e instanceof Array) {
                                for (var t = [], n = 0; n < e.length; n++) t.push(e[n].replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, ""));
                                return t
                            }
                            return e.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, "")
                        },
                        radians: function(e) {
                            return e / 180 * Math.PI
                        },
                        nfCoreScalar: function(t, n, r, i, s, o) {
                            if (n = 0 > t ? r: n, r = 0 === s, s = s === e || 0 > s ? 0 : s, t = Math.abs(t), r) for (s = 1, t *= 10; 1e-6 < Math.abs(Math.round(t) - t) && 7 > s;)++s,
                                t *= 10;
                            else 0 !== s && (t *= Math.pow(10, s));
                            for (r = 2 * t, Math.floor(t) === t ? r = t: Math.floor(r) === r ? (t = Math.floor(t), r = t + t % 2) : r = Math.round(t), t = "", i += s; i > 0 || r > 0;) i--,
                                t = "" + r % 10 + t,
                                r = Math.floor(r / 10);
                            if (o !== e) for (i = t.length - 3 - s; i > 0;) t = t.substring(0, i) + o + t.substring(i),
                                i -= 3;
                            return s > 0 ? n + t.substring(0, t.length - s) + "." + t.substring(t.length - s, t.length) : n + t
                        },
                        nfCore: function(e, n, r, i, s, o) {
                            if (e instanceof Array) {
                                for (var a = [], l = 0, u = e.length; u > l; l++) a.push(t.nfCoreScalar(e[l], n, r, i, s, o));
                                return a
                            }
                            return t.nfCoreScalar(e, n, r, i, s, o)
                        },
                        nf: function(e, n, r) {
                            return t.nfCore(e, "", "-", n, r)
                        },
                        nfs: function(e, n, r) {
                            return t.nfCore(e, " ", "-", n, r)
                        },
                        nfp: function(e, n, r) {
                            return t.nfCore(e, "+", "-", n, r)
                        },
                        nfc: function(e, n) {
                            return t.nfCore(e, "", "-", 0, n, ",")
                        },
                        withCommonFunctions: function(e) {
                            "trim radians nf nfs nfp nfc".split(" ").forEach(function(n) {
                                e[n] = t[n]
                            })
                        }
                    };
                    return t
                } ()
            },
                {}],
            24 : [function(e, t) {
                t.exports = function(e, t, n, r, i, s) {
                    function o(t) {
                        var n = t,
                            i = 0,
                            s = 0;
                        if (e.pmouseX = e.mouseX, e.pmouseY = e.mouseY, n.offsetParent) do i += n.offsetLeft,
                            s += n.offsetTop;
                        while (n = n.offsetParent);
                        n = t;
                        do i -= n.scrollLeft || 0,
                            s -= n.scrollTop || 0;
                        while (n = n.parentNode);
                        var o, a, l, u;
                        return r.defaultView && r.defaultView.getComputedStyle && (o = parseInt(r.defaultView.getComputedStyle(t, null).paddingLeft, 10) || 0, a = parseInt(r.defaultView.getComputedStyle(t, null).paddingTop, 10) || 0, l = parseInt(r.defaultView.getComputedStyle(t, null).borderLeftWidth, 10) || 0, u = parseInt(r.defaultView.getComputedStyle(t, null).borderTopWidth, 10) || 0),
                            i = i + o + l,
                            s = s + a + u,
                            i += window.pageXOffset,
                            s += window.pageYOffset,
                        {
                            X: i,
                            Y: s
                        }
                    }
                    function a(t, n) {
                        var r = o(t, n);
                        e.mouseX = n.pageX - r.X,
                            e.mouseY = n.pageY - r.Y
                    }
                    function l(e) {
                        var t, n = o(e.changedTouches[0].target, e.changedTouches[0]);
                        for (t = 0; t < e.touches.length; t++) {
                            var r = e.touches[t];
                            r.offsetX = r.pageX - n.X,
                                r.offsetY = r.pageY - n.Y
                        }
                        for (t = 0; t < e.targetTouches.length; t++) r = e.targetTouches[t],
                            r.offsetX = r.pageX - n.X,
                            r.offsetY = r.pageY - n.Y;
                        for (t = 0; t < e.changedTouches.length; t++) r = e.changedTouches[t],
                            r.offsetX = r.pageX - n.X,
                            r.offsetY = r.pageY - n.Y;
                        return e
                    }
                    n(t, "touchstart",
                        function(r) {
                            t.setAttribute("style", "-webkit-user-select: none"),
                                t.setAttribute("onclick", "void(0)"),
                                t.setAttribute("style", "-webkit-tap-highlight-color:rgba(0,0,0,0)");
                            for (var o = 0,
                                     u = eventHandlers.length; u > o; o++) {
                                var h = eventHandlers[o].type;
                                "mouseout" !== h && "mousemove" !== h && "mousedown" !== h && "mouseup" !== h && "DOMMouseScroll" !== h && "mousewheel" !== h && "touchstart" !== h || detachEventHandler(eventHandlers[o])
                            }
                            e.touchStart !== s || e.touchMove !== s || e.touchEnd !== s || e.touchCancel !== s ? (n(t, "touchstart",
                                function(t) {
                                    e.touchStart !== s && (t = l(t), e.touchStart(t))
                                }), n(t, "touchmove",
                                function(t) {
                                    e.touchMove !== s && (t.preventDefault(), t = l(t), e.touchMove(t))
                                }), n(t, "touchend",
                                function(t) {
                                    e.touchEnd !== s && (t = l(t), e.touchEnd(t))
                                }), n(t, "touchcancel",
                                function(t) {
                                    e.touchCancel !== s && (t = l(t), e.touchCancel(t))
                                })) : (n(t, "touchstart",
                                function(n) {
                                    a(t, n.touches[0]),
                                        e.__mousePressed = !0,
                                        e.mouseDragging = !1,
                                        e.mouseButton = i.LEFT,
                                    "function" == typeof e.mousePressed && e.mousePressed()
                                }), n(t, "touchmove",
                                function(n) {
                                    n.preventDefault(),
                                        a(t, n.touches[0]),
                                    "function" != typeof e.mouseMoved || e.__mousePressed || e.mouseMoved(),
                                    "function" == typeof e.mouseDragged && e.__mousePressed && (e.mouseDragged(), e.mouseDragging = !0)
                                }), n(t, "touchend",
                                function() {
                                    e.__mousePressed = !1,
                                    "function" != typeof e.mouseClicked || e.mouseDragging || e.mouseClicked(),
                                    "function" == typeof e.mouseReleased && e.mouseReleased()
                                })),
                                t.dispatchEvent(r)
                        }),
                        function() {
                            var r = !0,
                                i = function(e) {
                                    e.preventDefault(),
                                        e.stopPropagation()
                                };
                            e.disableContextMenu = function() {
                                r && (n(t, "contextmenu", i), r = !1)
                            },
                                e.enableContextMenu = function() {
                                    r || (detachEventHandler({
                                        elem: t,
                                        type: "contextmenu",
                                        fn: i
                                    }), r = !0)
                                }
                        } (),
                        n(t, "mousemove",
                            function(n) {
                                a(t, n),
                                "function" != typeof e.mouseMoved || e.__mousePressed || e.mouseMoved(),
                                "function" == typeof e.mouseDragged && e.__mousePressed && (e.mouseDragged(), e.mouseDragging = !0)
                            }),
                        n(t, "mouseout",
                            function() {
                                "function" == typeof e.mouseOut && e.mouseOut()
                            }),
                        n(t, "mouseover",
                            function(n) {
                                a(t, n),
                                "function" == typeof e.mouseOver && e.mouseOver()
                            }),
                        t.onmousedown = function() {
                            return t.focus(),
                                !1
                        },
                        n(t, "mousedown",
                            function(t) {
                                switch (e.__mousePressed = !0, e.mouseDragging = !1, t.which) {
                                    case 1:
                                        e.mouseButton = i.LEFT;
                                        break;
                                    case 2:
                                        e.mouseButton = i.CENTER;
                                        break;
                                    case 3:
                                        e.mouseButton = i.RIGHT
                                }
                                "function" == typeof e.mousePressed && e.mousePressed()
                            }),
                        n(t, "mouseup",
                            function() {
                                e.__mousePressed = !1,
                                "function" != typeof e.mouseClicked || e.mouseDragging || e.mouseClicked(),
                                "function" == typeof e.mouseReleased && e.mouseReleased()
                            });
                    var u = function(t) {
                        var n = 0;
                        t.wheelDelta ? (n = t.wheelDelta / 120, window.opera && (n = -n)) : t.detail && (n = -t.detail / 3),
                        (e.mouseScroll = n) && "function" == typeof e.mouseScrolled && e.mouseScrolled()
                    };
                    n(r, "DOMMouseScroll", u),
                        n(r, "mousewheel", u)
                }
            },
                {}],
            25 : [function(e, t) {
                t.exports = function(e, t) {
                    function n() {
                        var t = "abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
                        l && Object.keys(l).forEach(function(e) {
                            t.push(e)
                        });
                        var n, r, i = {};
                        for (n = 0, r = t.length; r > n; ++n) i[t[n]] = null;
                        for (var s in e.lib) if (e.lib.hasOwnProperty(s) && e.lib[s].exports) {
                            var o = e.lib[s].exports;
                            for (n = 0, r = o.length; r > n; ++n) i[o[n]] = null
                        }
                        return i
                    }
                    function r(e) {
                        function t(e) {
                            var t = /^\s*/.exec(e);
                            if (t[0].length === e.length) e = {
                                left: t[0],
                                middle: "",
                                right: ""
                            };
                            else {
                                var n = /\s*$/.exec(e);
                                e = {
                                    left: t[0],
                                    middle: e.substring(t[0].length, n.index),
                                    right: n[0]
                                }
                            }
                            return e.untrim = function(e) {
                                return this.left + e + this.right
                            },
                                e
                        }
                        function r(e) {
                            return e.replace(/^\s+/, "").replace(/\s+$/, "")
                        }
                        function i(e, t) {
                            for (var n = 0,
                                     r = t.length; r > n; ++n) e[t[n]] = null;
                            return e
                        }
                        function l(e) {
                            for (var t in e) if (e.hasOwnProperty(t)) return ! 1;
                            return ! 0
                        }
                        function u(e) {
                            return e.substring(2, e.length - 1)
                        }
                        function h(e, t) {
                            var n = yt.length;
                            return yt.push(e),
                            '"' + t + n + '"'
                        }
                        function c(e) {
                            return e = e.replace(wt,
                                function(e) {
                                    return h(e, "E")
                                }),
                                e = e.replace(At,
                                    function(e) {
                                        return h(e, "D")
                                    }),
                                e = e.replace(Ct,
                                    function(e) {
                                        return h(e, "H")
                                    })
                        }
                        function f(e, t) {
                            return e.replace(St,
                                function(e, n, r) {
                                    return r !== t ? e: h(e, "G")
                                })
                        }
                        function p(e) {
                            this.name = e
                        }
                        function d(e, t) {
                            this.params = e,
                                this.methodArgsParam = t
                        }
                        function m(e) {
                            var t = r(e.substring(1, e.length - 1));
                            e = [];
                            var n = null;
                            if ("" !== t) for (var t = t.split(","), i = 0; i < t.length; ++i) {
                                var s = /\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(t[i]);
                                if (i === t.length - 1 && 0 <= t[i].indexOf("...")) {
                                    n = new p(s[1]);
                                    break
                                }
                                e.push(new p(s[1]))
                            }
                            return new d(e, n)
                        }
                        function g(e) {
                            function n(e, n, r, s) {
                                return e = yt[s],
                                    i = !0,
                                    e = t(e.substring(1, e.length - 1)),
                                "__" + r + ("" === e.middle ? h("(" + n.replace(/\.\s*$/, "") + ")", "B") : h("(" + n.replace(/\.\s*$/, "") + "," + e.middle + ")", "B"))
                            }
                            function r(e, t, n) {
                                return i = !0,
                                "__instanceof" + h("(" + t + ", " + n + ")", "B")
                            }
                            e = e.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,
                                function(e, t, n) {
                                    return n
                                }),
                                e = e.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,
                                    function(e) {
                                        return h(e, "F")
                                    }),
                                e = e.replace(Ct,
                                    function(e) {
                                        return h(e, "H")
                                    }),
                                e = e.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
                                    function(e, t, n) {
                                        return e = n.replace(/"C(\d+)"/g,
                                            function(e, t) {
                                                return yt[t]
                                            }).replace(/\[\s*\]/g, "[null]").replace(/\s*\]\s*\[\s*/g, ", "),
                                            e = "{" + e.substring(1, e.length - 1) + "}",
                                            t = "('" + t + "', " + h(e, "A") + ")",
                                        "$p.createJavaArray" + h(t, "B")
                                    }),
                                e = e.replace(/(\.\s*length)\s*"B\d+"/g, "$1"),
                                e = e.replace(/#([0-9A-Fa-f]{6})\b/g,
                                    function(e, t) {
                                        return "0xFF" + t
                                    }),
                                e = e.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,
                                    function(e, t, n) {
                                        return t = yt[t],
                                            /^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(t) ? /^\(\s*int\s*\)$/.test(t) ? "(int)" + n: (t = t.split(/"C(\d+)"/g), 1 < t.length && !/^\[\s*\]$/.test(yt[t[1]]) ? e: "" + n) : e
                                    }),
                                e = e.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,
                                    function(e, n) {
                                        var r = t(n);
                                        return r.untrim("__int_cast(" + r.middle + ")")
                                    }),
                                e = e.replace(/\bsuper(\s*"B\d+")/g, "$$superCstr$1").replace(/\bsuper(\s*\.)/g, "$$super$1"),
                                e = e.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,
                                    function(e, t, n) {
                                        return t === n ? e: "" === n ? "0" + t: t
                                    }),
                                e = e.replace(/\b(\.?\d+\.?)[fF]\b/g, "$1"),
                                e = e.replace(/([^\s])%([^=\s])/g, "$1 % $2"),
                                e = e.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g, "__$1"),
                                e = e.replace(/\b(boolean|byte|char|float|int)\s*"B/g,
                                    function(e, t) {
                                        return "parse" + t.substring(0, 1).toUpperCase() + t.substring(1) + '"B'
                                    }),
                                e = e.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,
                                    function(e, t, n, r, i, s) {
                                        return n ? (e = yt[r], i ? "pixels.setPixel" + h("(" + e.substring(1, e.length - 1) + "," + s + ")", "B") : "pixels.getPixel" + h("(" + e.substring(1, e.length - 1) + ")", "B")) : t ? "pixels.getLength" + h("()", "B") : i ? "pixels.set" + h("(" + s + ")", "B") : "pixels.toArray" + h("()", "B")
                                    });
                            var i;
                            do i = !1,
                                e = e.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g, n);
                            while (i);
                            do i = !1,
                                e = e.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g, r);
                            while (i);
                            return e = e.replace(/\bthis(\s*"B\d+")/g, "$$constr$1")
                        }
                        function v(e, t) {
                            this.baseInterfaceName = e,
                                this.body = t,
                                t.owner = this
                        }
                        function y(e) {
                            var t = RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(e);
                            e = ft;
                            var n = "class" + ++xt;
                            ft = n;
                            var r = t[1] + "$" + n,
                                t = new v(r, pt(yt[t[2]], r, "", "implements " + t[1]));
                            return t.classId = n,
                                t.scopeId = e,
                                bt[n] = t,
                                ft = e,
                                t
                        }
                        function b(e, t, n) {
                            this.name = e,
                                this.params = t,
                                this.body = n
                        }
                        function x(e) {
                            return e = RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(e),
                                new b("function" !== e[1] ? e[1] : null, m(yt[e[2]]), mt(yt[e[3]]))
                        }
                        function w(e) {
                            this.members = e
                        }
                        function A(e) {
                            e = e.split(",");
                            for (var t = 0; t < e.length; ++t) {
                                var n = e[t].indexOf(":");
                                e[t] = 0 > n ? {
                                    value: vt(e[t])
                                }: {
                                    label: r(e[t].substring(0, n)),
                                    value: vt(r(e[t].substring(n + 1)))
                                }
                            }
                            return new w(e)
                        }
                        function E(e) {
                            if ("(" === e.charAt(0) || "[" === e.charAt(0)) return e.charAt(0) + E(e.substring(1, e.length - 1)) + e.charAt(e.length - 1);
                            if ("{" === e.charAt(0)) return /^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(e) ? "{" + h(e.substring(1, e.length - 1), "I") + "}": "[" + E(e.substring(1, e.length - 1)) + "]";
                            e = t(e);
                            var n = g(e.middle),
                                n = n.replace(/"[ABC](\d+)"/g,
                                    function(e, t) {
                                        return E(yt[t])
                                    });
                            return e.untrim(n)
                        }
                        function S(e) {
                            return e.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,
                                function(e, t, n, r, i, o) {
                                    return t ? e: ct({
                                        name: n,
                                        member: i,
                                        callSign: !!o
                                    }) + (r === s ? "": r)
                                })
                        }
                        function T(e, t) {
                            this.expr = e,
                                this.transforms = t
                        }
                        function C(e, t, n) {
                            this.name = e,
                                this.value = t,
                                this.isDefault = n
                        }
                        function _(e, t) {
                            var n, i, s = e.indexOf("=");
                            return 0 > s ? (n = e, s = t, i = !0) : (n = e.substring(0, s), s = vt(e.substring(s + 1)), i = !1),
                                new C(r(n.replace(/(\s*"C\d+")+/g, "")), s, i)
                        }
                        function P(e) {
                            return "int" === e || "float" === e ? "0": "boolean" === e ? "false": "color" === e ? "0x00000000": "null"
                        }
                        function M(e, t) {
                            this.definitions = e,
                                this.varType = t
                        }
                        function R(e) {
                            this.expression = e
                        }
                        function L(e) {
                            if (Et.test(e)) {
                                var t = Tt.exec(e);
                                e = e.substring(t[0].length).split(",");
                                for (var n = P(t[2]), r = 0; r < e.length; ++r) e[r] = _(e[r], n);
                                return new M(e, t[2])
                            }
                            return new R(vt(e))
                        }
                        function N(e, t, n) {
                            this.initStatement = e,
                                this.condition = t,
                                this.step = n
                        }
                        function k(e, t) {
                            this.initStatement = e,
                                this.container = t
                        }
                        function D(e, t) {
                            this.initStatement = e,
                                this.container = t
                        }
                        function I(e) {
                            return /\bin\b/.test(e) ? (e = e.substring(1, e.length - 1).split(/\bin\b/g), new k(L(r(e[0])), vt(e[1]))) : 0 <= e.indexOf(":") && 0 > e.indexOf(";") ? (e = e.substring(1, e.length - 1).split(":"), new D(L(r(e[0])), vt(e[1]))) : (e = e.substring(1, e.length - 1).split(";"), new N(L(r(e[0])), vt(e[1]), vt(e[2])))
                        }
                        function O(e) {
                            e.sort(function(e, t) {
                                return t.weight - e.weight
                            })
                        }
                        function F(e, t, n) {
                            this.name = e,
                                this.body = t,
                                this.isStatic = n,
                                t.owner = this
                        }
                        function $(e, t, n) {
                            this.name = e,
                                this.body = t,
                                this.isStatic = n,
                                t.owner = this
                        }
                        function B(e) {
                            var t = wt.exec(e);
                            wt.lastIndex = 0;
                            var n = 0 <= t[1].indexOf("static"),
                                r = yt[u(t[6])];
                            e = ft;
                            var i = "class" + ++xt;
                            return ft = i,
                                t = "interface" === t[2] ? new F(t[3], dt(r, t[3], t[4]), n) : new $(t[3], pt(r, t[3], t[4], t[5]), n),
                                t.classId = i,
                                t.scopeId = e,
                                bt[i] = t,
                                ft = e,
                                t
                        }
                        function H(e, t, n, r) {
                            this.name = e,
                                this.params = t,
                                this.body = n,
                                this.isStatic = r
                        }
                        function j(e) {
                            e = At.exec(e),
                                At.lastIndex = 0;
                            var t = 0 <= e[1].indexOf("static"),
                                n = ";" !== e[6] ? yt[u(e[6])] : "{}";
                            return new H(e[3], m(yt[u(e[4])]), mt(n), t)
                        }
                        function z(e, t, n) {
                            this.definitions = e,
                                this.fieldType = t,
                                this.isStatic = n
                        }
                        function V(e) {
                            var t = Tt.exec(e),
                                n = 0 <= t[1].indexOf("static");
                            e = e.substring(t[0].length).split(/,\s*/g);
                            for (var r = P(t[2]), i = 0; i < e.length; ++i) e[i] = _(e[i], r);
                            return new z(e, t[2], n)
                        }
                        function G(e, t) {
                            this.params = e,
                                this.body = t
                        }
                        function U(e) {
                            e = RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(e);
                            var t = m(yt[e[1]]);
                            return new G(t, mt(yt[e[2]]))
                        }
                        function X(e, t, n, r, i, s) {
                            for (this.name = e, this.interfacesNames = t, this.methodsNames = n, this.fields = r, this.innerClasses = i, this.misc = s, e = 0, t = r.length; t > e; ++e) r[e].owner = this
                        }
                        function q(e, t, n, r, i, s, o, a, l) {
                            for (this.name = e, this.baseClassName = t, this.interfacesNames = n, this.functions = r, this.methods = i, this.fields = s, this.cstrs = o, this.innerClasses = a, this.misc = l, e = 0, t = s.length; t > e; ++e) s[e].owner = this
                        }
                        function W(e, t) {
                            this.name = e,
                                this.body = t,
                                t.owner = this
                        }
                        function Y(e, t) {
                            this.name = e,
                                this.body = t,
                                t.owner = this
                        }
                        function K(e) {
                            var t = wt.exec(e);
                            wt.lastIndex = 0;
                            var n = yt[u(t[6])];
                            e = ft;
                            var r = "class" + ++xt;
                            return ft = r,
                                t = "interface" === t[2] ? new W(t[3], dt(n, t[3], t[4])) : new Y(t[3], pt(n, t[3], t[4], t[5])),
                                t.classId = r,
                                t.scopeId = e,
                                bt[r] = t,
                                ft = e,
                                t
                        }
                        function Z(e, t, n) {
                            this.name = e,
                                this.params = t,
                                this.body = n
                        }
                        function J(e) {
                            return e = At.exec(e),
                                At.lastIndex = 0,
                                new Z(e[3], m(yt[u(e[4])]), mt(yt[u(e[6])]))
                        }
                        function Q(e, t) {
                            this.argument = e,
                                this.misc = t
                        }
                        function et(e, t) {
                            this.argument = e,
                                this.misc = t
                        }
                        function tt(e, t, n) {
                            this.name = e,
                                this.argument = t,
                                this.misc = n
                        }
                        function nt(e) {
                            this.expr = e
                        }
                        function rt(e) {
                            this.label = e
                        }
                        function it(e) {
                            for (var t = [], n = 0, r = e.length; r > n; ++n) {
                                var s = e[n];
                                s instanceof M ? t = t.concat(s.getNames()) : s instanceof Q && s.argument.initStatement instanceof M ? t = t.concat(s.argument.initStatement.getNames()) : (s instanceof F || s instanceof $ || s instanceof W || s instanceof Y || s instanceof Z || s instanceof b) && t.push(s.name)
                            }
                            return i({},
                                t)
                        }
                        function st(e) {
                            this.statements = e
                        }
                        function ot(e) {
                            this.statements = e
                        }
                        var at = n(),
                            lt = [];
                        e = e.replace(/\r\n?|\n\r/g, "\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,
                            function(e, t, n, r, i, s, o, a) {
                                return t || n ? (t = lt.length, lt.push(e), "'" + t + "'") : r ? (t = lt.length, lt.push(s), i + "'" + t + "'") : "" !== a ? " ": "\n"
                            }),
                            e = e.replace(/__x([0-9A-F]{4})/g,
                                function(e, t) {
                                    return "__x005F_x" + t
                                }),
                            e = e.replace(/\$/g, "__x0024"),
                            e = e.replace(/return\s*[\n\r]+/g, "return ");
                        var ut, ht = function(e, t, n, r) {
                            return t || r ? e: (ut = !0, "")
                        };
                        do ut = !1,
                            e = e.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g, ht);
                        while (ut);
                        var ct, ft, pt, dt, mt, gt, vt, yt = function(e) {
                                var t = [];
                                e = e.split(/([\{\[\(\)\]\}])/);
                                for (var n = e[0], r = [], i = 1; i < e.length; i += 2) {
                                    var s = e[i];
                                    if ("[" === s || "{" === s || "(" === s) r.push(n),
                                        n = s;
                                    else if ("]" === s || "}" === s || ")" === s) {
                                        var o = "}" === s ? "A": ")" === s ? "B": "C",
                                            a = t.length;
                                        t.push(n + s),
                                            n = r.pop() + '"' + o + (a + 1) + '"'
                                    }
                                    n += e[i + 1]
                                }
                                return t.unshift(n),
                                    t
                            } (e),
                            bt = {},
                            xt = 0,
                            wt = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
                            At = /\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,
                            Et = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
                            St = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,
                            Tt = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,
                            Ct = /\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;
                        return p.prototype.toString = function() {
                            return this.name
                        },
                            d.prototype.getNames = function() {
                                for (var e = [], t = 0, n = this.params.length; n > t; ++t) e.push(this.params[t].name);
                                return e
                            },
                            d.prototype.prependMethodArgs = function(e) {
                                return this.methodArgsParam ? "{\nvar " + this.methodArgsParam.name + " = Array.prototype.slice.call(arguments, " + this.params.length + ");\n" + e.substring(1) : e
                            },
                            d.prototype.toString = function() {
                                if (0 === this.params.length) return "()";
                                for (var e = "(",
                                         t = 0,
                                         n = this.params.length; n > t; ++t) e += this.params[t] + ", ";
                                return e.substring(0, e.length - 2) + ")"
                            },
                            v.prototype.toString = function() {
                                return "new (" + this.body + ")"
                            },
                            b.prototype.toString = function() {
                                var e = ct,
                                    t = i({
                                            "this": null
                                        },
                                        this.params.getNames());
                                ct = function(n) {
                                    return t.hasOwnProperty(n.name) ? n.name: e(n)
                                };
                                var n = "function";
                                this.name && (n += " " + this.name);
                                var r = this.params.prependMethodArgs(this.body.toString()),
                                    n = n + (this.params + " " + r);
                                return ct = e,
                                    n
                            },
                            w.prototype.toString = function() {
                                var e = ct;
                                ct = function(t) {
                                    return "this" === t.name ? "this": e(t)
                                };
                                for (var t = "",
                                         n = 0,
                                         r = this.members.length; r > n; ++n) this.members[n].label && (t += this.members[n].label + ": "),
                                    t += this.members[n].value.toString() + ", ";
                                return ct = e,
                                    t.substring(0, t.length - 2)
                            },
                            T.prototype.toString = function() {
                                var e = this.transforms;
                                return S(this.expr).replace(/"!(\d+)"/g,
                                    function(t, n) {
                                        return e[n].toString()
                                    })
                            },
                            vt = function(e) {
                                var t = [];
                                return e = E(e),
                                    e = e.replace(/"H(\d+)"/g,
                                        function(e, n) {
                                            return t.push(x(yt[n])),
                                            '"!' + (t.length - 1) + '"'
                                        }),
                                    e = e.replace(/"F(\d+)"/g,
                                        function(e, n) {
                                            return t.push(y(yt[n])),
                                            '"!' + (t.length - 1) + '"'
                                        }),
                                    e = e.replace(/"I(\d+)"/g,
                                        function(e, n) {
                                            return t.push(A(yt[n])),
                                            '"!' + (t.length - 1) + '"'
                                        }),
                                    new T(e, t)
                            },
                            C.prototype.toString = function() {
                                return this.name + " = " + this.value
                            },
                            M.prototype.getNames = function() {
                                for (var e = [], t = 0, n = this.definitions.length; n > t; ++t) e.push(this.definitions[t].name);
                                return e
                            },
                            M.prototype.toString = function() {
                                return "var " + this.definitions.join(",")
                            },
                            R.prototype.toString = function() {
                                return this.expression.toString()
                            },
                            N.prototype.toString = function() {
                                return "(" + this.initStatement + "; " + this.condition + "; " + this.step + ")"
                            },
                            k.prototype.toString = function() {
                                var e = this.initStatement.toString();
                                return 0 <= e.indexOf("=") && (e = e.substring(0, e.indexOf("="))),
                                "(" + e + " in " + this.container + ")"
                            },
                            D.iteratorId = 0,
                            D.prototype.toString = function() {
                                var e = this.initStatement.toString(),
                                    t = "$it" + D.iteratorId++,
                                    e = e.replace(/^\s*var\s*/, "").split("=")[0];
                                return "(" + ("var " + t + " = new $p.ObjectIterator(" + this.container + "), " + e + " = void(0)") + "; " + (t + ".hasNext() && ((" + e + " = " + t + ".next()) || true)") + ";)"
                            },
                            F.prototype.toString = function() {
                                return "" + this.body
                            },
                            $.prototype.toString = function() {
                                return "" + this.body
                            },
                            H.prototype.toString = function() {
                                var e = i({},
                                    this.params.getNames()),
                                    t = ct;
                                ct = function(n) {
                                    return e.hasOwnProperty(n.name) ? n.name: t(n)
                                };
                                var n = this.params.prependMethodArgs(this.body.toString()),
                                    n = "function " + this.methodId + this.params + " " + n + "\n";
                                return ct = t,
                                    n
                            },
                            z.prototype.getNames = function() {
                                for (var e = [], t = 0, n = this.definitions.length; n > t; ++t) e.push(this.definitions[t].name);
                                return e
                            },
                            z.prototype.toString = function() {
                                var e = ct({
                                    name: "[this]"
                                });
                                if (this.isStatic) {
                                    for (var t = this.owner.name,
                                             n = [], r = 0, i = this.definitions.length; i > r; ++r) {
                                        var s = this.definitions[r],
                                            o = s.name,
                                            a = t + "." + o;
                                        n.push("if(" + a + " === void(0)) {\n " + a + " = " + s.value + "; }\n$p.defineProperty(" + e + ", '" + o + "', { get: function(){return " + a + ";}, set: function(val){" + a + " = val;} });\n")
                                    }
                                    return n.join("")
                                }
                                return e + "." + this.definitions.join("; " + e + ".")
                            },
                            G.prototype.toString = function() {
                                var e = i({},
                                    this.params.getNames()),
                                    t = ct;
                                ct = function(n) {
                                    return e.hasOwnProperty(n.name) ? n.name: t(n)
                                };
                                var n = "function $constr_" + this.params.params.length + this.params.toString(),
                                    r = this.params.prependMethodArgs(this.body.toString());
                                return /\$(superCstr|constr)\b/.test(r) || (r = "{\n$superCstr();\n" + r.substring(1)),
                                    ct = t,
                                n + r + "\n"
                            },
                            X.prototype.getMembers = function(e, t, n) {
                                this.owner.base && this.owner.base.body.getMembers(e, t, n);
                                var r, i, s, o;
                                for (r = 0, s = this.fields.length; s > r; ++r) {
                                    var a = this.fields[r].getNames();
                                    for (i = 0, o = a.length; o > i; ++i) e[a[i]] = this.fields[r]
                                }
                                for (r = 0, s = this.methodsNames.length; s > r; ++r) t[this.methodsNames[r]] = !0;
                                for (r = 0, s = this.innerClasses.length; s > r; ++r) e = this.innerClasses[r],
                                    n[e.name] = e
                            },
                            X.prototype.toString = function() {
                                for (var e = this.owner,
                                         t = 0; e;)++t,
                                    e = e.scope;
                                var e = this.name,
                                    n = t = "";
                                this.getMembers({},
                                    {},
                                    {});
                                var r, i;
                                if (this.owner.interfaces) {
                                    var s, o = [];
                                    for (r = 0, i = this.interfacesNames.length; i > r; ++r) this.owner.interfaces[r] && (s = ct({
                                        name: this.interfacesNames[r]
                                    }), o.push(s), t += "$p.extendInterfaceMembers(" + e + ", " + s + ");\n");
                                    n += e + ".$interfaces = [" + o.join(", ") + "];\n"
                                }
                                for (n = n + (e + ".$isInterface = true;\n") + (e + ".$methods = ['" + this.methodsNames.join("', '") + "'];\n"), O(this.innerClasses), r = 0, i = this.innerClasses.length; i > r; ++r) o = this.innerClasses[r],
                                o.isStatic && (t += e + "." + o.name + " = " + o + ";\n");
                                for (r = 0, i = this.fields.length; i > r; ++r) o = this.fields[r],
                                o.isStatic && (t += e + "." + o.definitions.join(";\n" + e + ".") + ";\n");
                                return "(function() {\nfunction " + e + "() { throw 'Unable to create the interface'; }\n" + t + n + "return " + e + ";\n})()"
                            },
                            dt = function(e, n, r) {
                                e = e.substring(1, e.length - 1),
                                    e = c(e),
                                    e = f(e, n);
                                var i = [],
                                    o = [];
                                e = e.replace(/"([DE])(\d+)"/g,
                                    function(e, t, n) {
                                        return "D" === t ? i.push(n) : "E" === t && o.push(n),
                                            ""
                                    }),
                                    e = e.split(/;(?:\s*;)*/g);
                                var a, l;
                                for (r !== s && (a = r.replace(/^\s*extends\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g)), r = 0, l = i.length; l > r; ++r) {
                                    var u = j(yt[i[r]]);
                                    i[r] = u.name
                                }
                                for (r = 0, l = e.length - 1; l > r; ++r) u = t(e[r]),
                                    e[r] = V(u.middle);
                                for (u = e.pop(), r = 0, l = o.length; l > r; ++r) o[r] = B(yt[o[r]]);
                                return new X(n, a, i, e, o, {
                                    tail: u
                                })
                            },
                            q.prototype.getMembers = function(e, t, n) {
                                this.owner.base && this.owner.base.body.getMembers(e, t, n);
                                var r, i, s, o;
                                for (r = 0, s = this.fields.length; s > r; ++r) {
                                    var a = this.fields[r].getNames();
                                    for (i = 0, o = a.length; o > i; ++i) e[a[i]] = this.fields[r]
                                }
                                for (r = 0, s = this.methods.length; s > r; ++r) e = this.methods[r],
                                    t[e.name] = e;
                                for (r = 0, s = this.innerClasses.length; s > r; ++r) t = this.innerClasses[r],
                                    n[t.name] = t
                            },
                            q.prototype.toString = function() {
                                var e = "$this_" +
                                        function(e) {
                                            for (var t = 0; e;)++t,
                                                e = e.scope;
                                            return t
                                        } (this.owner),
                                    t = this.name,
                                    n = "var " + e + " = this;\n",
                                    i = "",
                                    s = "",
                                    o = {},
                                    a = {},
                                    l = {};
                                this.getMembers(o, a, l);
                                var u = ct;
                                ct = function(n) {
                                    var r = n.name;
                                    return "this" === r ? n.callSign || !n.member ? e + ".$self": e: o.hasOwnProperty(r) ? o[r].isStatic ? t + "." + r: e + "." + r: l.hasOwnProperty(r) ? e + "." + r: a.hasOwnProperty(r) ? a[r].isStatic ? t + "." + r: e + ".$self." + r: u(n)
                                };
                                var h;
                                this.baseClassName ? (h = u({
                                    name: this.baseClassName
                                }), n = n + ("var $super = { $upcast: " + e + " };\n") + ("function $superCstr(){" + h + ".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"), s += t + ".$base = " + h + ";\n") : n += "function $superCstr(){$p.extendClassChain(" + e + ")}\n",
                                this.owner.base && (i += "$p.extendStaticMembers(" + t + ", " + h + ");\n");
                                var c, f, p;
                                if (this.owner.interfaces) {
                                    for (f = [], h = 0, c = this.interfacesNames.length; c > h; ++h) this.owner.interfaces[h] && (p = u({
                                        name: this.interfacesNames[h]
                                    }), f.push(p), i += "$p.extendInterfaceMembers(" + t + ", " + p + ");\n");
                                    s += t + ".$interfaces = [" + f.join(", ") + "];\n"
                                }
                                for (0 < this.functions.length && (n += this.functions.join("\n") + "\n"), O(this.innerClasses), h = 0, c = this.innerClasses.length; c > h; ++h) f = this.innerClasses[h],
                                    f.isStatic ? (i += t + "." + f.name + " = " + f + ";\n", n += e + "." + f.name + " = " + t + "." + f.name + ";\n") : n += e + "." + f.name + " = " + f + ";\n";
                                for (h = 0, c = this.fields.length; c > h; ++h) {
                                    var d = this.fields[h];
                                    if (d.isStatic) for (i += t + "." + d.definitions.join(";\n" + t + ".") + ";\n", f = 0, p = d.definitions.length; p > f; ++f) var m = d.definitions[f].name,
                                        g = t + "." + m,
                                        n = n + ("$p.defineProperty(" + e + ", '" + m + "', {get: function(){return " + g + "}, set: function(val){" + g + " = val}});\n");
                                    else n += e + "." + d.definitions.join(";\n" + e + ".") + ";\n"
                                }
                                for (f = {},
                                         h = 0, c = this.methods.length; c > h; ++h) p = this.methods[h],
                                    d = f[p.name],
                                    m = p.name + "$" + p.params.params.length,
                                    g = !!p.params.methodArgsParam,
                                    d ? (++d, m += "_" + d) : d = 1,
                                    p.methodId = m,
                                    f[p.name] = d,
                                    p.isStatic ? (i += p, i += "$p.addMethod(" + t + ", '" + p.name + "', " + m + ", " + g + ");\n") : n += p,
                                    n += "$p.addMethod(" + e + ", '" + p.name + "', " + m + ", " + g + ");\n";
                                for (n += r(this.misc.tail), 0 < this.cstrs.length && (n += this.cstrs.join("\n") + "\n"), n += "function $constr() {\n", f = [], h = 0, c = this.cstrs.length; c > h; ++h) p = this.cstrs[h].params.params.length,
                                    f.push("if(arguments.length " + (this.cstrs[h].params.methodArgsParam ? ">=": "===") + " " + p + ") { $constr_" + p + ".apply(" + e + ", arguments); }");
                                return 0 < f.length && (n += f.join(" else ") + " else "),
                                    n += "$superCstr();\n}\n",
                                    n += "$constr.apply(null, arguments);\n",
                                    ct = u,
                                "(function() {\nfunction " + t + "() {\n" + n + "}\n" + i + s + "return " + t + ";\n})()"
                            },
                            pt = function(e, n, r, i) {
                                e = e.substring(1, e.length - 1),
                                    e = c(e),
                                    e = f(e, n);
                                var o = [],
                                    a = [],
                                    l = [],
                                    u = [];
                                e = e.replace(/"([DEGH])(\d+)"/g,
                                    function(e, t, n) {
                                        return "D" === t ? o.push(n) : "E" === t ? a.push(n) : "H" === t ? u.push(n) : l.push(n),
                                            ""
                                    }),
                                    e = e.replace(/^(?:\s*;)+/, "").split(/;(?:\s*;)*/g);
                                var h, p;
                                for (r !== s && (h = r.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g, "$1")), i !== s && (p = i.replace(/^\s*implements\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g)), r = 0; r < u.length; ++r) u[r] = x(yt[u[r]]);
                                for (r = 0; r < o.length; ++r) o[r] = j(yt[o[r]]);
                                for (r = 0; r < e.length - 1; ++r) i = t(e[r]),
                                    e[r] = V(i.middle);
                                for (i = e.pop(), r = 0; r < l.length; ++r) l[r] = U(yt[l[r]]);
                                for (r = 0; r < a.length; ++r) a[r] = B(yt[a[r]]);
                                return new q(n, h, p, u, o, e, l, a, {
                                    tail: i
                                })
                            },
                            W.prototype.toString = function() {
                                return "var " + this.name + " = " + this.body + ";\n$p." + this.name + " = " + this.name + ";\n"
                            },
                            Y.prototype.toString = function() {
                                return "var " + this.name + " = " + this.body + ";\n$p." + this.name + " = " + this.name + ";\n"
                            },
                            Z.prototype.toString = function() {
                                var e = i({},
                                    this.params.getNames()),
                                    t = ct;
                                ct = function(n) {
                                    return e.hasOwnProperty(n.name) ? n.name: t(n)
                                };
                                var n = this.params.prependMethodArgs(this.body.toString()),
                                    n = "function " + this.name + this.params + " " + n + "\n$p." + this.name + " = " + this.name + ";\n" + this.name + " = " + this.name + ".bind($p);";
                                return ct = t,
                                    n
                            },
                            Q.prototype.toString = function() {
                                return this.misc.prefix + this.argument.toString()
                            },
                            et.prototype.toString = function() {
                                return this.misc.prefix + this.argument.toString()
                            },
                            tt.prototype.toString = function() {
                                var e = this.misc.prefix;
                                return this.argument !== s && (e += this.argument.toString()),
                                    e
                            },
                            nt.prototype.toString = function() {
                                return "case " + this.expr + ":"
                            },
                            rt.prototype.toString = function() {
                                return this.label
                            },
                            gt = function(e, n, i) {
                                var o = RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),
                                    a = [];
                                e = e.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g, "$1");
                                for (var l, u, h = 0; null !== (l = o.exec(e));) {
                                    if (l[1] !== s) u = e.lastIndexOf('"B', o.lastIndex),
                                        h = e.substring(h, u),
                                        a.push("for" === l[1] ? new Q(I(yt[l[2]]), {
                                            prefix: h
                                        }) : "catch" === l[1] ? new et(m(yt[l[2]]), {
                                            prefix: h
                                        }) : new tt(l[1], vt(yt[l[2]]), {
                                            prefix: h
                                        }));
                                    else if (l[3] !== s) a.push(new tt(l[3], s, {
                                        prefix: e.substring(h, o.lastIndex)
                                    }));
                                    else if (l[4] !== s) {
                                        if (u = e.substring(h, o.lastIndex - l[4].length), 0 !== r(u).length) continue;
                                        a.push(u),
                                            h = l[4].charAt(1),
                                            l = l[5],
                                            a.push("D" === h ? n(yt[l]) : "E" === h ? i(yt[l]) : "H" === h ? x(yt[l]) : mt(yt[l]))
                                    } else if (l[6] !== s) a.push(new nt(vt(r(l[7]))));
                                    else if (l[8] !== s) {
                                        if (u = e.substring(h, o.lastIndex - l[8].length), 0 !== r(u).length) continue;
                                        a.push(new rt(e.substring(h, o.lastIndex)))
                                    } else l = t(e.substring(h, o.lastIndex - 1)),
                                        a.push(l.left),
                                        a.push(L(l.middle)),
                                        a.push(l.right + ";");
                                    h = o.lastIndex
                                }
                                return n = t(e.substring(h)),
                                    a.push(n.left),
                                "" !== n.middle && (a.push(L(n.middle)), a.push(";" + n.right)),
                                    a
                            },
                            st.prototype.toString = function() {
                                var e = it(this.statements),
                                    t = ct;
                                l(e) || (ct = function(n) {
                                    return e.hasOwnProperty(n.name) ? n.name: t(n)
                                });
                                var n = "{\n" + this.statements.join("") + "\n}";
                                return ct = t,
                                    n
                            },
                            mt = function(e) {
                                return e = t(e.substring(1, e.length - 1)),
                                    new st(gt(e.middle))
                            },
                            ot.prototype.toString = function() {
                                for (var e, t = [], n = [], r = 0, i = this.statements.length; i > r; ++r) e = this.statements[r],
                                    e instanceof Y || e instanceof W ? t.push(e) : n.push(e);
                                O(t);
                                var s = it(this.statements);
                                return ct = function(e) {
                                    return e = e.name,
                                        s.hasOwnProperty(e) ? e: at.hasOwnProperty(e) || a.hasOwnProperty(e) || o.hasOwnProperty(e) ? "$p." + e: e
                                },
                                    t = "// this code was autogenerated from PJS\n(function($p) {\n" + t.join("") + "\n" + n.join("") + "\n})",
                                    ct = null,
                                    t
                            },
                            e = function() {
                                var e = c(yt[0]),
                                    e = e.replace(/\bimport\s+[^;]+;/g, "");
                                return new ot(gt(e, J, K))
                            } (),
                            function(e) {
                                function t(e, t) {
                                    for (var n, i = t.split("."), o = e.scope; o;) {
                                        if (o.hasOwnProperty(i[0])) {
                                            n = o[i[0]];
                                            break
                                        }
                                        o = o.scope
                                    }
                                    n === s && (n = r[i[0]]);
                                    for (var o = 1,
                                             a = i.length; a > o && n; ++o) n = n.inScope[i[o]];
                                    return n
                                }
                                var n, r = {};
                                for (n in bt) if (bt.hasOwnProperty(n)) {
                                    e = bt[n];
                                    var i = e.scopeId,
                                        o = e.name;
                                    i ? (i = bt[i], e.scope = i, i.inScope === s && (i.inScope = {}), i.inScope[o] = e) : r[o] = e
                                }
                                for (n in bt) if (bt.hasOwnProperty(n)) {
                                    e = bt[n],
                                    (o = e.body.baseClassName) && (o = t(e, o)) && (e.base = o, o.derived || (o.derived = []), o.derived.push(e));
                                    var a, l, o = e.body.interfacesNames,
                                        i = [];
                                    if (o && 0 < o.length) {
                                        for (a = 0, l = o.length; l > a; ++a) {
                                            var u = t(e, o[a]);
                                            i.push(u),
                                            u && (u.derived || (u.derived = []), u.derived.push(e))
                                        }
                                        0 < i.length && (e.interfaces = i)
                                    }
                                }
                            } (e),
                            function(e) {
                                function t(e, t) {
                                    var n = s[e];
                                    if (!n) return ! 1;
                                    var r = n.indexOf(t);
                                    return 0 > r ? !1 : (n.splice(r, 1), 0 < n.length ? !1 : (delete s[e], !0))
                                }
                                e = [];
                                var n, r, i, s = {};
                                for (n in bt) if (bt.hasOwnProperty(n)) if (i = bt[n], i.inScope || i.derived) {
                                    var o = [];
                                    if (i.inScope) for (r in i.inScope) i.inScope.hasOwnProperty(r) && o.push(i.inScope[r]);
                                    i.derived && (o = o.concat(i.derived)),
                                        s[n] = o
                                } else e.push(n),
                                    i.weight = 0;
                                for (; 0 < e.length;) if (n = e.shift(), i = bt[n], i.scopeId && t(i.scopeId, i) && (e.push(i.scopeId), bt[i.scopeId].weight = i.weight + 1), i.base && t(i.base.classId, i) && (e.push(i.base.classId), i.base.weight = i.weight + 1), i.interfaces) for (n = 0, r = i.interfaces.length; r > n; ++n) i.interfaces[n] && t(i.interfaces[n].classId, i) && (e.push(i.interfaces[n].classId), i.interfaces[n].weight = i.weight + 1)
                            } (e),
                            e = e.toString(),
                            e = e.replace(/\s*\n(?:[\t ]*\n)+/g, "\n\n"),
                            e = e.replace(/__x([0-9A-F]{4})/g,
                                function(e, t) {
                                    return String.fromCharCode(parseInt(t, 16))
                                }),
                            function(e, t) {
                                return e.replace(/'(\d+)'/g,
                                    function(e, n) {
                                        var r = t[n];
                                        return "/" === r.charAt(0) ? r: /^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(r) ? "(new $p.Character(" + r + "))": r
                                    })
                            } (e, lt)
                    }
                    function i(e, t) {
                        var n = RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(e);
                        if (n && 2 === n.length) for (var r = [], n = n.splice(1, 2)[0].replace(/\{([\s\S]*?)\}/g,
                            function() {
                                return function(e, t) {
                                    return r.push(t),
                                    "{" + (r.length - 1) + "}"
                                }
                            } ()).replace("\n", "").replace("\r", "").split(";"), i = function(e) {
                                return e.replace(/^\s*["']?/, "").replace(/["']?\s*$/, "")
                            },
                                                          s = 0, o = n.length; o > s; s++) {
                            var a = n[s].split("=");
                            if (a && 2 === a.length) {
                                var l = i(a[0]),
                                    u = i(a[1]),
                                    a = [];
                                if ("preload" === l) for (a = u.split(","), l = 0, u = a.length; u > l; l++) {
                                    var h = i(a[l]);
                                    t.imageCache.add(h)
                                } else if ("font" === l) for (a = u.split(","), l = 0, u = a.length; u > l; l++) {
                                    var h = i(a[l]),
                                        c = /^\{(\d*?)\}$/.exec(h);
                                    PFont.preloading.add(c ? JSON.parse("{" + r[c[1]] + "}") : h)
                                } else "pauseOnBlur" === l ? t.options.pauseOnBlur = "true" === u: "globalKeyEvents" === l ? t.options.globalKeyEvents = "true" === u: "param-" === l.substring(0, 6) ? t.params[l.substring(6)] = u: t.options[l] = u
                            }
                        }
                        return e
                    }
                    var s, o = t.defaultScope,
                        a = o.PConstants,
                        l = t.aFunctions,
                        u = t.Browser.document;
                    return e.compile = function(t) {
                        var n = new e.Sketch;
                        return t = i(t, n),
                            t = r(t),
                            n.sourceCode = t,
                            n
                    },
                        e.logger = new
                            function(e) {
                                var t = {
                                    BufferMax: 200
                                };
                                return t.wrapper = e.createElement("div"),
                                    t.wrapper.setAttribute("style", "opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa"),
                                    t.dragger = e.createElement("div"),
                                    t.dragger.setAttribute("style", "display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333"),
                                    t.closer = e.createElement("div"),
                                    t.closer.onmouseover = function() {
                                        t.closer.style.setProperty("background-color", "#ccc")
                                    },
                                    t.closer.onmouseout = function() {
                                        t.closer.style.setProperty("background-color", "#ddd")
                                    },
                                    t.closer.innerHTML = "&#10006;",
                                    t.closer.setAttribute("style", "opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;"),
                                    t.javaconsole = e.createElement("div"),
                                    t.javaconsole.setAttribute("style", "overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;"),
                                    t.wrapper.appendChild(t.dragger),
                                    t.wrapper.appendChild(t.javaconsole),
                                    t.wrapper.appendChild(t.closer),
                                    t.dragger.onmousedown = function(n) {
                                        t.divheight = t.wrapper.style.height,
                                            e.selection ? e.selection.empty() : window.getSelection().removeAllRanges();
                                        var r = n.screenY;
                                        window.onmousemove = function(e) {
                                            t.wrapper.style.height = parseFloat(t.divheight) + (r - e.screenY) + "px",
                                                t.javaconsole.style.height = parseFloat(t.divheight) + (r - e.screenY) - 10 + "px"
                                        },
                                            window.onmouseup = function(n) {
                                                e.selection ? e.selection.empty() : window.getSelection().removeAllRanges(),
                                                    t.wrapper.style.height = parseFloat(t.divheight) + (r - n.screenY) + "px",
                                                    t.javaconsole.style.height = parseFloat(t.divheight) + (r - n.screenY) - 10 + "px",
                                                    window.onmousemove = null,
                                                    window.onmouseup = null
                                            }
                                    },
                                    t.BufferArray = [],
                                    t.print = t.log = function(e) {
                                        t.BufferArray[t.BufferArray.length - 1] ? t.BufferArray[t.BufferArray.length - 1] += e + "": t.BufferArray.push(e),
                                            t.javaconsole.innerHTML = t.BufferArray.join(""),
                                        "hidden" === t.wrapper.style.visibility && (t.wrapper.style.visibility = "visible"),
                                        "hidden" === t.wrapper.style.visibility && (t.wrapper.style.visibility = "visible")
                                    },
                                    t.println = function(n) {
                                        e.body.appendChild(t.wrapper),
                                            t.print(n),
                                            t.BufferArray.push("<br/>"),
                                            t.javaconsole.innerHTML = t.BufferArray.join(""),
                                        "hidden" === t.wrapper.style.visibility && (t.wrapper.style.visibility = "visible"),
                                            t.BufferArray.length > t.BufferMax ? t.BufferArray.splice(0, 1) : t.javaconsole.scrollTop = t.javaconsole.scrollHeight,
                                        "hidden" === t.wrapper.style.visibility && (t.wrapper.style.visibility = "visible")
                                    },
                                    t.showconsole = function() {
                                        t.wrapper.style.visibility = "visible"
                                    },
                                    t.hideconsole = function() {
                                        t.wrapper.style.visibility = "hidden"
                                    },
                                    t.closer.onclick = function() {
                                        t.hideconsole()
                                    },
                                    t.hideconsole(),
                                    t
                            } (u),
                        e
                }
            },
                {}],
            26 : [function(e, t) {
                t.exports = function(e, t) {
                    function n(e, t) {
                        return e in l ? l[e] : "function" == typeof l[t] ? l[t] : function(e) {
                            if (e instanceof Array) return e;
                            if ("number" == typeof e) {
                                var t = [];
                                return t.length = e,
                                    t
                            }
                        }
                    }
                    var r = e.defaultScope,
                        i = e.extend,
                        s = e.Browser,
                        o = s.ajax,
                        a = s.navigator,
                        l = s.window,
                        u = s.document,
                        h = e.noop,
                        c = r.PConstants;
                    PFont = r.PFont,
                        PShapeSVG = r.PShapeSVG,
                        PVector = r.PVector,
                        Char = Character = r.Char,
                        ObjectIterator = r.ObjectIterator,
                        XMLElement = r.XMLElement,
                        XML = r.XML;
                    var f = l.HTMLCanvasElement,
                        p = l.HTMLImageElement,
                        d = l.localStorage;
                    u.head || (u.head = u.getElementsByTagName("head")[0]);
                    var m = n("Float32Array", "WebGLFloatArray"),
                        g = n("Int32Array", "WebGLIntArray"),
                        v = n("Uint16Array", "WebGLUnsignedShortArray"),
                        y = n("Uint8Array", "WebGLUnsignedByteArray");
                    if (9 <= u.documentMode && !u.doctype) throw "The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";
                    var b = [],
                        x = {},
                        w = this.Processing = function(e, n, s) {
                            function A(e, t, n) {
                                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n),
                                    ot.push({
                                        elem: e,
                                        type: t,
                                        fn: n
                                    })
                            }
                            function E(e, n, r, i) {
                                var s = On.locations[e];
                                s === t && (s = lt.getUniformLocation(n, r), On.locations[e] = s),
                                null !== s && (4 === i.length ? lt.uniform4fv(s, i) : 3 === i.length ? lt.uniform3fv(s, i) : 2 === i.length ? lt.uniform2fv(s, i) : lt.uniform1f(s, i))
                            }
                            function S(e, n, r, i) {
                                var s = On.locations[e];
                                s === t && (s = lt.getUniformLocation(n, r), On.locations[e] = s),
                                null !== s && (4 === i.length ? lt.uniform4iv(s, i) : 3 === i.length ? lt.uniform3iv(s, i) : 2 === i.length ? lt.uniform2iv(s, i) : lt.uniform1i(s, i))
                            }
                            function T(e, n, r, i, s) {
                                var o = On.locations[e];
                                o === t && (o = lt.getUniformLocation(n, r), On.locations[e] = o),
                                -1 !== o && (16 === s.length ? lt.uniformMatrix4fv(o, i, s) : 9 === s.length ? lt.uniformMatrix3fv(o, i, s) : lt.uniformMatrix2fv(o, i, s))
                            }
                            function C(e, n, r, i, s) {
                                var o = On.attributes[e];
                                o === t && (o = lt.getAttribLocation(n, r), On.attributes[e] = o),
                                -1 !== o && (lt.bindBuffer(lt.ARRAY_BUFFER, s), lt.vertexAttribPointer(o, i, lt.FLOAT, !1, 0, 0), lt.enableVertexAttribArray(o))
                            }
                            function _(e, n, r) {
                                var i = On.attributes[e];
                                i === t && (i = lt.getAttribLocation(n, r), On.attributes[e] = i),
                                -1 !== i && lt.disableVertexAttribArray(i)
                            }
                            function P(e, t, n, r) {
                                return Rn === c.HSB ? (n = at.color.toRGB(e, t, n), e = n[0], t = n[1], n = n[2]) : (e = Math.round(255 * (e / Tn)), t = Math.round(255 * (t / Cn)), n = Math.round(255 * (n / _n))),
                                    r = Math.round(255 * (r / Sn)),
                                    e = 0 > e ? 0 : e,
                                    t = 0 > t ? 0 : t,
                                    n = 0 > n ? 0 : n,
                                    r = 0 > r ? 0 : r,
                                (r > 255 ? 255 : r) << 24 & c.ALPHA_MASK | (e > 255 ? 255 : e) << 16 & c.RED_MASK | (t > 255 ? 255 : t) << 8 & c.GREEN_MASK | (n > 255 ? 255 : n) & c.BLUE_MASK
                            }
                            function M(e) {
                                if (Tn >= e && e >= 0) {
                                    if (Rn === c.RGB) return P(e, e, e, Sn);
                                    if (Rn === c.HSB) return P(0, 0, e / Tn * _n, Sn)
                                }
                                return e ? (e > 2147483647 && (e -= 4294967296), e) : void 0
                            }
                            function R(e) {
                                var t, n, r;
                                t = ((e & c.RED_MASK) >>> 16) / 255,
                                    n = ((e & c.GREEN_MASK) >>> 8) / 255,
                                    r = (e & c.BLUE_MASK) / 255,
                                    e = at.max(at.max(t, n), r);
                                var i = at.min(at.min(t, n), r);
                                return i === e ? [0, 0, e * _n] : (t = (t === e ? (n - r) / (e - i) : n === e ? 2 + (r - t) / (e - i) : 4 + (t - n) / (e - i)) / 6, 0 > t ? t += 1 : t > 1 && (t -= 1), [t * Tn, (e - i) / e * Cn, e * _n])
                            }
                            function L() {
                                lt.restore(),
                                    Jt = nn = !0
                            }
                            function N() {
                                var e = (Date.now() - Dn) / 1e3;
                                In++;
                                var t = In / e;
                                e > .5 && (Dn = Date.now(), In = 0, at.__frameRate = t),
                                    at.frameCount++
                            }
                            function k(e) {
                                return e = parseInt("0x" + e, 16),
                                e > 2147483647 && (e -= 4294967296),
                                    e
                            }
                            function D(e) {
                                return "number" == typeof e ? 0 !== e: "boolean" == typeof e ? e: "string" == typeof e ? "true" === e.toLowerCase() : e instanceof Char ? 49 === e.code || 84 === e.code || 116 === e.code: void 0
                            }
                            function I(e) {
                                return "number" == typeof e ? e: "boolean" == typeof e ? e ? 1 : 0 : "string" == typeof e ? parseFloat(e) : e instanceof Char ? e.code: void 0
                            }
                            function O(e, t) {
                                return "number" == typeof e ? 4294967295 & e: "boolean" == typeof e ? e ? 1 : 0 : "string" == typeof e ? 4294967295 & parseInt(e, t || 10) : e instanceof Char ? e.code: void 0
                            }
                            function F() {
                                Yt && (Jt && (lt.fillStyle = at.color.toString(Zt), Jt = !1), lt.fill())
                            }
                            function $() {
                                Qt && (nn && (lt.strokeStyle = at.color.toString(tn), nn = !1), lt.stroke())
                            }
                            function B() {
                                F(),
                                    $(),
                                    lt.closePath()
                            }
                            function H(e, n, r) {
                                var i = Jr.shift();
                                i === t && (i = {},
                                    i.canvas = u.createElement("canvas"), i.context = i.canvas.getContext("2d")),
                                    Jr.push(i);
                                var s = i.canvas,
                                    o = i.context;
                                return n = n || e.width,
                                    r = r || e.height,
                                    s.width = n,
                                    s.height = r,
                                    e ? "data" in e ? o.putImageData(e, 0, 0) : (o.clearRect(0, 0, n, r), o.drawImage(e, 0, 0, n, r)) : o.clearRect(0, 0, n, r),
                                    i
                            }
                            function j(e) {
                                return {
                                    getLength: function(e) {
                                        return function() {
                                            if (e.isRemote) throw "Image is loaded remotely. Cannot get length.";
                                            return e.imageData.data.length ? e.imageData.data.length / 4 : 0
                                        }
                                    } (e),
                                    getPixel: function(e) {
                                        return function(t) {
                                            t *= 4;
                                            var n = e.imageData.data;
                                            if (e.isRemote) throw "Image is loaded remotely. Cannot get pixels.";
                                            return n[t + 3] << 24 & c.ALPHA_MASK | n[t] << 16 & c.RED_MASK | n[t + 1] << 8 & c.GREEN_MASK | n[t + 2] & c.BLUE_MASK
                                        }
                                    } (e),
                                    setPixel: function(e) {
                                        return function(t, n) {
                                            var r = 4 * t,
                                                i = e.imageData.data;
                                            if (e.isRemote) throw "Image is loaded remotely. Cannot set pixel.";
                                            i[r + 0] = (n & c.RED_MASK) >>> 16,
                                                i[r + 1] = (n & c.GREEN_MASK) >>> 8,
                                                i[r + 2] = n & c.BLUE_MASK,
                                                i[r + 3] = (n & c.ALPHA_MASK) >>> 24,
                                                e.__isDirty = !0
                                        }
                                    } (e),
                                    toArray: function(e) {
                                        return function() {
                                            var t = [],
                                                n = e.imageData.data,
                                                r = e.width * e.height;
                                            if (e.isRemote) throw "Image is loaded remotely. Cannot get pixels.";
                                            for (var i = 0,
                                                     s = 0; r > i; i++, s += 4) t.push(n[s + 3] << 24 & c.ALPHA_MASK | n[s] << 16 & c.RED_MASK | n[s + 1] << 8 & c.GREEN_MASK | n[s + 2] & c.BLUE_MASK);
                                            return t
                                        }
                                    } (e),
                                    set: function(e) {
                                        return function(t) {
                                            var n, r, i;
                                            if (this.isRemote) throw "Image is loaded remotely. Cannot set pixels.";
                                            r = e.imageData.data;
                                            for (var s = 0,
                                                     o = t.length; o > s; s++) i = t[s],
                                                n = 4 * s,
                                                r[n + 0] = (i & c.RED_MASK) >>> 16,
                                                r[n + 1] = (i & c.GREEN_MASK) >>> 8,
                                                r[n + 2] = i & c.BLUE_MASK,
                                                r[n + 3] = (i & c.ALPHA_MASK) >>> 24;
                                            e.__isDirty = !0
                                        }
                                    } (e)
                                }
                            }
                            function z(e, t, n, r) {
                                var i = new Qr(n, r, c.ARGB);
                                return i.fromImageData(at.toImageData(e, t, n, r)),
                                    i
                            }
                            function V(e, t, n, r, i) {
                                if (i.isRemote) throw "Image is loaded remotely. Cannot get x,y,w,h.";
                                var s = new Qr(n, r, c.ARGB),
                                    o = s.imageData.data,
                                    a = i.width,
                                    l = i.height;
                                i = i.imageData.data;
                                var u = Math.max(0, -t),
                                    h = Math.max(0, -e);
                                for (r = Math.min(r, l - t), l = Math.min(n, a - e); r > u; ++u) for (var f = 4 * ((t + u) * a + (e + h)), p = 4 * (u * n + h), d = h; l > d; ++d) o[p++] = i[f++],
                                    o[p++] = i[f++],
                                    o[p++] = i[f++],
                                    o[p++] = i[f++];
                                return s.__isDirty = !0,
                                    s
                            }
                            function G() {
                                Zn && (lt = $t, Zn = !1, at.updatePixels())
                            }
                            function U() {
                                function e(e, t) {
                                    e[t] = function() {
                                        G(),
                                            lt[t].apply(lt, arguments)
                                    }
                                }
                                function t(e, t) {
                                    at.defineProperty(e, t, {
                                        get: function() {
                                            return G(),
                                                lt[t]
                                        },
                                        set: function(e) {
                                            G(),
                                                lt[t] = e
                                        }
                                    })
                                }
                                for (var n in lt)"function" == typeof lt[n] ? e(this, n) : t(this, n)
                            }
                            function X(e) {
                                return e instanceof String ? e: "number" == typeof e ? e === (0 | e) ? e.toString() : at.nf(e, 0, 3) : null === e || e === t ? "": e.toString()
                            }
                            function q(e, t, n, r) {
                                var i;
                                0 > e.indexOf("\n") ? (e = [e], i = 1) : (e = e.split(/\r?\n/g), i = e.length);
                                var s = 0;
                                zn === c.TOP ? s = Xn + qn: zn === c.CENTER ? s = Xn / 2 - (i - 1) * Wn / 2 : zn === c.BOTTOM && (s = -(qn + (i - 1) * Wn));
                                for (var o = 0; i > o; ++o) ht.text$line(e[o], t, n + s, r, jn),
                                    s += Wn
                            }
                            function W(e, t, n, r, i, s) {
                                if (0 !== e.length && 0 !== r && 0 !== i && !(Un > i)) {
                                    for (var o = -1,
                                             a = 0,
                                             l = 0,
                                             u = [], h = 0, f = e.length; f > h; h++) {
                                        var p = e[h],
                                            d = " " === p,
                                            m = Yn.measureTextWidth(p);
                                        if ("\n" !== p && r >= l + m) d && (o = h),
                                            l += m;
                                        else {
                                            if (o + 1 === a) {
                                                if (! (h > 0)) return;
                                                o = h
                                            }
                                            "\n" === p ? (u.push({
                                                text: e.substring(a, h),
                                                width: l
                                            }), a = h + 1) : (u.push({
                                                text: e.substring(a, o + 1),
                                                width: l
                                            }), a = o + 1),
                                                l = 0,
                                                h = a - 1
                                        }
                                    }
                                    for (f > a && u.push({
                                        text: e.substring(a),
                                        width: l
                                    }), e = 1, o = Xn, jn === c.CENTER ? e = r / 2 : jn === c.RIGHT && (e = r), r = u.length, a = Math.min(r, Math.floor(i / Wn)), zn === c.TOP ? o = Xn + qn: zn === c.CENTER ? o = i / 2 - Wn * (a / 2 - 1) : zn === c.BOTTOM && (o = qn + Wn), a = 0; r > a && (h = a * Wn, !(o + h > i - qn)); a++) l = u[a],
                                        ht.text$line(l.text, t + e, n + o + h, s, jn)
                                }
                            }
                            function Y(e) {
                                ht = "3D" === e ? new Br: "2D" === e ? new $r: new Hr;
                                for (var t in Hr.prototype) Hr.prototype.hasOwnProperty(t) && 0 > t.indexOf("$") && (at[t] = ht[t]);
                                ht.$init()
                            }
                            function K(e) {
                                return function() {
                                    return Y("2D"),
                                        ht[e].apply(this, arguments)
                                }
                            }
                            function Z(e) {
                                switch (e = e.which || e.keyCode) {
                                    case 13:
                                        return 10;
                                    case 91:
                                    case 93:
                                    case 224:
                                        return 157;
                                    case 57392:
                                        return 17;
                                    case 46:
                                        return 127;
                                    case 45:
                                        return 155
                                }
                                return e
                            }
                            function J(e) {
                                return "function" == typeof e.preventDefault ? e.preventDefault() : "function" == typeof e.stopPropagation && e.stopPropagation(),
                                    !1
                            }
                            function Q() {
                                for (var e in Qn) if (Qn.hasOwnProperty(e)) return void(at.__keyPressed = !0);
                                at.__keyPressed = !1
                            }
                            function et(e, t) {
                                Qn[e] = t,
                                    er = null,
                                    at.key = t,
                                    at.keyCode = e,
                                    at.keyPressed(),
                                    at.keyCode = 0,
                                    at.keyTyped(),
                                    Q()
                            }
                            function tt(e) {
                                var t = Z(e);
                                if (t === c.DELETE) et(t, new Char(127));
                                else {
                                    if (! (0 > tr.indexOf(t))) {
                                        var n = new Char(c.CODED);
                                        return at.key = n,
                                            at.keyCode = t,
                                            Qn[t] = n,
                                            at.keyPressed(),
                                            er = null,
                                            Q(),
                                            J(e)
                                    }
                                    er = t
                                }
                            }
                            function nt(e) {
                                if (null !== er) {
                                    var t, n = er;
                                    t = e.which || e.keyCode;
                                    var r = e.shiftKey || e.ctrlKey || e.altKey || e.metaKey;
                                    switch (t) {
                                        case 13:
                                            t = r ? 13 : 10;
                                            break;
                                        case 8:
                                            t = r ? 127 : 8
                                    }
                                    return t = new Char(t),
                                        et(n, t),
                                        J(e)
                                }
                            }
                            function rt(e) {
                                e = Z(e);
                                var n = Qn[e];
                                n !== t && (at.key = n, at.keyCode = e, at.keyReleased(), delete Qn[e], Q())
                            }
                            if (! (this instanceof w)) throw "called Processing constructor as if it were a function: missing 'new'.";
                            var it = {},
                                st = e === t && n === t,
                                it = st ? u.createElement("canvas") : "string" == typeof e ? u.getElementById(e) : e;
                            if (! ("getContext" in it)) throw "called Processing constructor without passing canvas element reference or id.";
                            var ot = [],
                                at = this;
                            at.Char = at.Character = Char,
                                i.withCommonFunctions(at),
                                i.withMath(at),
                                i.withProxyFunctions(at,
                                    function(e) {
                                        return Array.prototype.slice.call(e, 1)
                                    }),
                                i.withTouch(at, it, A, u, c),
                            s && Object.keys(s).forEach(function(e) {
                                at[e] = s[e]
                            }),
                                at.externals = {
                                    canvas: it,
                                    context: t,
                                    sketch: t,
                                    window: l
                                },
                                at.name = "Processing.js Instance",
                                at.use3DContext = !1,
                                at.focused = !1,
                                at.breakShape = !1,
                                at.glyphTable = {},
                                at.pmouseX = 0,
                                at.pmouseY = 0,
                                at.mouseX = 0,
                                at.mouseY = 0,
                                at.mouseButton = 0,
                                at.mouseScroll = 0,
                                at.mouseClicked = t,
                                at.mouseDragged = t,
                                at.mouseMoved = t,
                                at.mousePressed = t,
                                at.mouseReleased = t,
                                at.mouseScrolled = t,
                                at.mouseOver = t,
                                at.mouseOut = t,
                                at.touchStart = t,
                                at.touchEnd = t,
                                at.touchMove = t,
                                at.touchCancel = t,
                                at.key = t,
                                at.keyCode = t,
                                at.keyPressed = h,
                                at.keyReleased = h,
                                at.keyTyped = h,
                                at.draw = t,
                                at.setup = t,
                                at.__mousePressed = !1,
                                at.__keyPressed = !1,
                                at.__frameRate = 60,
                                at.frameCount = 0,
                                at.width = 100,
                                at.height = 100;
                            var lt, ut, ht, ct, ft, pt, dt, mt, gt, vt, yt, bt, xt, wt, At, Et, St, Tt, Ct, _t, Pt, Mt, Rt, Lt, Nt, kt, Dt, It, Ot, Ft, $t, Bt, Ht, jt, zt, Vt, Gt, Ut, Xt, qt, Wt, Yt = !0,
                                Kt = [1, 1, 1, 1],
                                Zt = 4294967295,
                                Jt = !0,
                                Qt = !0,
                                en = [0, 0, 0, 1],
                                tn = 4278190080,
                                nn = !0,
                                rn = 1,
                                sn = !1,
                                on = !1,
                                an = !0,
                                ln = 0,
                                un = c.CORNER,
                                hn = c.CENTER,
                                cn = 0,
                                fn = 0,
                                pn = 0,
                                dn = c.NORMAL_MODE_AUTO,
                                mn = 60,
                                gn = 1e3 / mn,
                                vn = it.style.cursor,
                                yn = c.POLYGON,
                                bn = 0,
                                xn = 20,
                                wn = !1,
                                An = -3355444,
                                En = 20,
                                Sn = 255,
                                Tn = 255,
                                Cn = 255,
                                _n = 255,
                                Pn = 0,
                                Mn = 0,
                                Rn = c.RGB,
                                Ln = null,
                                Nn = null,
                                kn = Date.now(),
                                Dn = kn,
                                In = 0,
                                On = {
                                    attributes: {},
                                    locations: {}
                                },
                                Fn = 0,
                                $n = 0,
                                Bn = c.IMAGE,
                                Hn = !1,
                                jn = c.LEFT,
                                zn = c.BASELINE,
                                Vn = c.MODEL,
                                Gn = "Arial",
                                Un = 12,
                                Xn = 9,
                                qn = 2,
                                Wn = 14,
                                Yn = PFont.get(Gn, Un),
                                Kn = null,
                                Zn = !1,
                                Jn = 1e3,
                                Qn = [],
                                er = null,
                                tr = [c.SHIFT, c.CONTROL, c.ALT, c.CAPSLK, c.PGUP, c.PGDN, c.END, c.HOME, c.LEFT, c.UP, c.RIGHT, c.DOWN, c.NUMLK, c.INSERT, c.F1, c.F2, c.F3, c.F4, c.F5, c.F6, c.F7, c.F8, c.F9, c.F10, c.F11, c.F12, c.META],
                                nr = 0,
                                rr = 0,
                                ir = 0,
                                sr = [],
                                or = [],
                                ar = [],
                                lr = new m(c.SINCOS_LENGTH),
                                ur = new m(c.SINCOS_LENGTH),
                                hr = !1,
                                cr = 60 * (Math.PI / 180),
                                fr = at.width / 2,
                                pr = at.height / 2,
                                dr = pr / Math.tan(cr / 2),
                                mr = dr / 10,
                                gr = 10 * dr,
                                vr = at.width / at.height,
                                yr = [],
                                br = [],
                                xr = 0,
                                wr = !1,
                                Ar = !1,
                                Er = !0,
                                Sr = c.CORNER,
                                Tr = [],
                                Cr = new m([.5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5]),
                                _r = new m([.5, .5, .5, .5, -.5, .5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, .5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5]),
                                Pr = new m([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]),
                                Mr = new m([0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]),
                                Rr = new m([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
                                Lr = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );" + (/Windows/.test(a.userAgent) ? "  spotAttenuation = 1.0; ": "  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;") + "  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
                                Nr = function(e, t, n) {
                                    var r = e.createShader(e.VERTEX_SHADER);
                                    if (e.shaderSource(r, t), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) throw e.getShaderInfoLog(r);
                                    if (t = e.createShader(e.FRAGMENT_SHADER), e.shaderSource(t, n), e.compileShader(t), !e.getShaderParameter(t, e.COMPILE_STATUS)) throw e.getShaderInfoLog(t);
                                    if (n = e.createProgram(), e.attachShader(n, r), e.attachShader(n, t), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)) throw "Error linking shaders.";
                                    return n
                                },
                                kr = function(e, t, n, r) {
                                    return {
                                        x: e,
                                        y: t,
                                        w: n,
                                        h: r
                                    }
                                },
                                Dr = kr,
                                Ir = function(e, t, n, r, i) {
                                    return {
                                        x: e,
                                        y: t,
                                        w: i ? n: n - e,
                                        h: i ? r: r - t
                                    }
                                },
                                Or = function(e, t, n, r) {
                                    return {
                                        x: e - n / 2,
                                        y: t - r / 2,
                                        w: n,
                                        h: r
                                    }
                                },
                                Fr = function() {},
                                $r = function() {},
                                Br = function() {},
                                Hr = function() {};
                            $r.prototype = new Fr,
                                $r.prototype.constructor = $r,
                                Br.prototype = new Fr,
                                Br.prototype.constructor = Br,
                                Hr.prototype = new Fr,
                                Hr.prototype.constructor = Hr,
                                Fr.prototype.a3DOnlyFunction = h,
                                at.shape = function(e, t, n, r, i) {
                                    1 <= arguments.length && null !== arguments[0] && e.isVisible() && (at.pushMatrix(), Sr === c.CENTER ? 5 === arguments.length ? (at.translate(t - r / 2, n - i / 2), at.scale(r / e.getWidth(), i / e.getHeight())) : 3 === arguments.length ? at.translate(t - e.getWidth() / 2, -e.getHeight() / 2) : at.translate( - e.getWidth() / 2, -e.getHeight() / 2) : Sr === c.CORNER ? 5 === arguments.length ? (at.translate(t, n), at.scale(r / e.getWidth(), i / e.getHeight())) : 3 === arguments.length && at.translate(t, n) : Sr === c.CORNERS && (5 === arguments.length ? (r -= t, i -= n, at.translate(t, n), at.scale(r / e.getWidth(), i / e.getHeight())) : 3 === arguments.length && at.translate(t, n)), e.draw(at), (1 === arguments.length && Sr === c.CENTER || 1 < arguments.length) && at.popMatrix())
                                },
                                at.shapeMode = function(e) {
                                    Sr = e
                                },
                                at.loadShape = function(e) {
                                    return 1 === arguments.length && -1 < e.indexOf(".svg") ? new PShapeSVG(null, e) : null
                                },
                                at.loadXML = function(e) {
                                    return new XML(at, e)
                                };
                            var jr = function(e) {
                                    for (var t = 0,
                                             n = 0; n < e.length; n++) t = 0 !== n ? Math.max(t, Math.abs(e[n])) : Math.abs(e[n]);
                                    return e = (t + "").indexOf("."),
                                        0 === e ? e = 1 : -1 === e && (e = (t + "").length),
                                        e
                                },
                                zr = at.PMatrix2D = function() {
                                    0 === arguments.length ? this.reset() : 1 === arguments.length && arguments[0] instanceof zr ? this.set(arguments[0].array()) : 6 === arguments.length && this.set(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                                };
                            zr.prototype = {
                                set: function() {
                                    if (6 === arguments.length) {
                                        var e = arguments;
                                        this.set([e[0], e[1], e[2], e[3], e[4], e[5]])
                                    } else 1 === arguments.length && arguments[0] instanceof zr ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0] instanceof Array && (this.elements = arguments[0].slice())
                                },
                                get: function() {
                                    var e = new zr;
                                    return e.set(this.elements),
                                        e
                                },
                                reset: function() {
                                    this.set([1, 0, 0, 0, 1, 0])
                                },
                                array: function() {
                                    return this.elements.slice()
                                },
                                translate: function(e, t) {
                                    this.elements[2] = e * this.elements[0] + t * this.elements[1] + this.elements[2],
                                        this.elements[5] = e * this.elements[3] + t * this.elements[4] + this.elements[5]
                                },
                                invTranslate: function(e, t) {
                                    this.translate( - e, -t)
                                },
                                transpose: function() {},
                                mult: function(e, t) {
                                    var n, r;
                                    return e instanceof PVector ? (n = e.x, r = e.y, t || (t = new PVector)) : e instanceof Array && (n = e[0], r = e[1], t || (t = [])),
                                        t instanceof Array ? (t[0] = this.elements[0] * n + this.elements[1] * r + this.elements[2], t[1] = this.elements[3] * n + this.elements[4] * r + this.elements[5]) : t instanceof PVector && (t.x = this.elements[0] * n + this.elements[1] * r + this.elements[2], t.y = this.elements[3] * n + this.elements[4] * r + this.elements[5], t.z = 0),
                                        t
                                },
                                multX: function(e, t) {
                                    return e * this.elements[0] + t * this.elements[1] + this.elements[2]
                                },
                                multY: function(e, t) {
                                    return e * this.elements[3] + t * this.elements[4] + this.elements[5]
                                },
                                skewX: function(e) {
                                    this.apply(1, 0, 1, e, 0, 0)
                                },
                                skewY: function(e) {
                                    this.apply(1, 0, 1, 0, e, 0)
                                },
                                shearX: function(e) {
                                    this.apply(1, 0, 1, Math.tan(e), 0, 0)
                                },
                                shearY: function(e) {
                                    this.apply(1, 0, 1, 0, Math.tan(e), 0)
                                },
                                determinant: function() {
                                    return this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3]
                                },
                                invert: function() {
                                    var e = this.determinant();
                                    if (Math.abs(e) > c.MIN_INT) {
                                        var t = this.elements[0],
                                            n = this.elements[1],
                                            r = this.elements[2],
                                            i = this.elements[3],
                                            s = this.elements[4],
                                            o = this.elements[5];
                                        return this.elements[0] = s / e,
                                            this.elements[3] = -i / e,
                                            this.elements[1] = -n / e,
                                            this.elements[4] = t / e,
                                            this.elements[2] = (n * o - s * r) / e,
                                            this.elements[5] = (i * r - t * o) / e,
                                            !0
                                    }
                                    return ! 1
                                },
                                scale: function(e, t) {
                                    e && !t && (t = e),
                                    e && t && (this.elements[0] *= e, this.elements[1] *= t, this.elements[3] *= e, this.elements[4] *= t)
                                },
                                invScale: function(e, t) {
                                    e && !t && (t = e),
                                        this.scale(1 / e, 1 / t)
                                },
                                apply: function() {
                                    var e;
                                    1 === arguments.length && arguments[0] instanceof zr ? e = arguments[0].array() : 6 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                                    for (var t = [0, 0, this.elements[2], 0, 0, this.elements[5]], n = 0, r = 0; 2 > r; r++) for (var i = 0; 3 > i; i++, n++) t[n] += this.elements[3 * r + 0] * e[i + 0] + this.elements[3 * r + 1] * e[i + 3];
                                    this.elements = t.slice()
                                },
                                preApply: function() {
                                    var e;
                                    1 === arguments.length && arguments[0] instanceof zr ? e = arguments[0].array() : 6 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                                    var t = [0, 0, e[2], 0, 0, e[5]];
                                    t[2] = e[2] + this.elements[2] * e[0] + this.elements[5] * e[1],
                                        t[5] = e[5] + this.elements[2] * e[3] + this.elements[5] * e[4],
                                        t[0] = this.elements[0] * e[0] + this.elements[3] * e[1],
                                        t[3] = this.elements[0] * e[3] + this.elements[3] * e[4],
                                        t[1] = this.elements[1] * e[0] + this.elements[4] * e[1],
                                        t[4] = this.elements[1] * e[3] + this.elements[4] * e[4],
                                        this.elements = t.slice()
                                },
                                rotate: function(e) {
                                    var t = Math.cos(e);
                                    e = Math.sin(e);
                                    var n = this.elements[0],
                                        r = this.elements[1];
                                    this.elements[0] = t * n + e * r,
                                        this.elements[1] = -e * n + t * r,
                                        n = this.elements[3],
                                        r = this.elements[4],
                                        this.elements[3] = t * n + e * r,
                                        this.elements[4] = -e * n + t * r
                                },
                                rotateZ: function(e) {
                                    this.rotate(e)
                                },
                                invRotateZ: function(e) {
                                    this.rotateZ(e - Math.PI)
                                },
                                print: function() {
                                    var e = jr(this.elements),
                                        e = "" + at.nfs(this.elements[0], e, 4) + " " + at.nfs(this.elements[1], e, 4) + " " + at.nfs(this.elements[2], e, 4) + "\n" + at.nfs(this.elements[3], e, 4) + " " + at.nfs(this.elements[4], e, 4) + " " + at.nfs(this.elements[5], e, 4) + "\n\n";
                                    at.println(e)
                                }
                            };
                            var Vr = at.PMatrix3D = function() {
                                this.reset()
                            };
                            Vr.prototype = {
                                set: function() {
                                    16 === arguments.length ? this.elements = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Vr ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0] instanceof Array && (this.elements = arguments[0].slice())
                                },
                                get: function() {
                                    var e = new Vr;
                                    return e.set(this.elements),
                                        e
                                },
                                reset: function() {
                                    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                                },
                                array: function() {
                                    return this.elements.slice()
                                },
                                translate: function(e, n, r) {
                                    r === t && (r = 0),
                                        this.elements[3] += e * this.elements[0] + n * this.elements[1] + r * this.elements[2],
                                        this.elements[7] += e * this.elements[4] + n * this.elements[5] + r * this.elements[6],
                                        this.elements[11] += e * this.elements[8] + n * this.elements[9] + r * this.elements[10],
                                        this.elements[15] += e * this.elements[12] + n * this.elements[13] + r * this.elements[14]
                                },
                                transpose: function() {
                                    var e = this.elements[4];
                                    this.elements[4] = this.elements[1],
                                        this.elements[1] = e,
                                        e = this.elements[8],
                                        this.elements[8] = this.elements[2],
                                        this.elements[2] = e,
                                        e = this.elements[6],
                                        this.elements[6] = this.elements[9],
                                        this.elements[9] = e,
                                        e = this.elements[3],
                                        this.elements[3] = this.elements[12],
                                        this.elements[12] = e,
                                        e = this.elements[7],
                                        this.elements[7] = this.elements[13],
                                        this.elements[13] = e,
                                        e = this.elements[11],
                                        this.elements[11] = this.elements[14],
                                        this.elements[14] = e
                                },
                                mult: function(e, t) {
                                    var n, r, i, s;
                                    return e instanceof PVector ? (n = e.x, r = e.y, i = e.z, s = 1, t || (t = new PVector)) : e instanceof Array && (n = e[0], r = e[1], i = e[2], s = e[3] || 1, !t || 3 !== t.length && 4 !== t.length) && (t = [0, 0, 0]),
                                    t instanceof Array && (3 === t.length ? (t[0] = this.elements[0] * n + this.elements[1] * r + this.elements[2] * i + this.elements[3], t[1] = this.elements[4] * n + this.elements[5] * r + this.elements[6] * i + this.elements[7], t[2] = this.elements[8] * n + this.elements[9] * r + this.elements[10] * i + this.elements[11]) : 4 === t.length && (t[0] = this.elements[0] * n + this.elements[1] * r + this.elements[2] * i + this.elements[3] * s, t[1] = this.elements[4] * n + this.elements[5] * r + this.elements[6] * i + this.elements[7] * s, t[2] = this.elements[8] * n + this.elements[9] * r + this.elements[10] * i + this.elements[11] * s, t[3] = this.elements[12] * n + this.elements[13] * r + this.elements[14] * i + this.elements[15] * s)),
                                    t instanceof PVector && (t.x = this.elements[0] * n + this.elements[1] * r + this.elements[2] * i + this.elements[3], t.y = this.elements[4] * n + this.elements[5] * r + this.elements[6] * i + this.elements[7], t.z = this.elements[8] * n + this.elements[9] * r + this.elements[10] * i + this.elements[11]),
                                        t
                                },
                                preApply: function() {
                                    var e;
                                    1 === arguments.length && arguments[0] instanceof Vr ? e = arguments[0].array() : 16 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                                    for (var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0, r = 0; 4 > r; r++) for (var i = 0; 4 > i; i++, n++) t[n] += this.elements[i + 0] * e[4 * r + 0] + this.elements[i + 4] * e[4 * r + 1] + this.elements[i + 8] * e[4 * r + 2] + this.elements[i + 12] * e[4 * r + 3];
                                    this.elements = t.slice()
                                },
                                apply: function() {
                                    var e;
                                    1 === arguments.length && arguments[0] instanceof Vr ? e = arguments[0].array() : 16 === arguments.length ? e = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0] instanceof Array && (e = arguments[0]);
                                    for (var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0, r = 0; 4 > r; r++) for (var i = 0; 4 > i; i++, n++) t[n] += this.elements[4 * r + 0] * e[i + 0] + this.elements[4 * r + 1] * e[i + 4] + this.elements[4 * r + 2] * e[i + 8] + this.elements[4 * r + 3] * e[i + 12];
                                    this.elements = t.slice()
                                },
                                rotate: function(e, t, n, r) {
                                    if (4 > arguments.length) this.rotateZ(e);
                                    else {
                                        var i = new PVector(t, n, r),
                                            s = i.mag();
                                        if (0 !== s) {
                                            1 != s && (i.normalize(), t = i.x, n = i.y, r = i.z);
                                            var i = at.cos(e),
                                                s = at.sin(e),
                                                o = 1 - i;
                                            this.apply(o * t * t + i, o * t * n - s * r, o * t * r + s * n, 0, o * t * n + s * r, o * n * n + i, o * n * r - s * t, 0, o * t * r - s * n, o * n * r + s * t, o * r * r + i, 0, 0, 0, 0, 1)
                                        }
                                    }
                                },
                                invApply: function() {
                                    qt === t && (qt = new Vr);
                                    var e = arguments;
                                    return qt.set(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                                        qt.invert() ? (this.preApply(qt), !0) : !1
                                },
                                rotateX: function(e) {
                                    var t = at.cos(e);
                                    e = at.sin(e),
                                        this.apply([1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1])
                                },
                                rotateY: function(e) {
                                    var t = at.cos(e);
                                    e = at.sin(e),
                                        this.apply([t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1])
                                },
                                rotateZ: function(e) {
                                    var t = Math.cos(e);
                                    e = Math.sin(e),
                                        this.apply([t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                                },
                                scale: function(e, t, n) { ! e || t || n ? e && t && !n && (n = 1) : t = n = e,
                                e && t && n && (this.elements[0] *= e, this.elements[1] *= t, this.elements[2] *= n, this.elements[4] *= e, this.elements[5] *= t, this.elements[6] *= n, this.elements[8] *= e, this.elements[9] *= t, this.elements[10] *= n, this.elements[12] *= e, this.elements[13] *= t, this.elements[14] *= n)
                                },
                                skewX: function(e) {
                                    e = Math.tan(e),
                                        this.apply(1, e, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                },
                                skewY: function(e) {
                                    e = Math.tan(e),
                                        this.apply(1, 0, 0, 0, e, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                },
                                shearX: function(e) {
                                    e = Math.tan(e),
                                        this.apply(1, e, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                },
                                shearY: function(e) {
                                    e = Math.tan(e),
                                        this.apply(1, 0, 0, 0, e, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                },
                                multX: function(e, t, n, r) {
                                    return n ? r ? this.elements[0] * e + this.elements[1] * t + this.elements[2] * n + this.elements[3] * r: this.elements[0] * e + this.elements[1] * t + this.elements[2] * n + this.elements[3] : this.elements[0] * e + this.elements[1] * t + this.elements[3]
                                },
                                multY: function(e, t, n, r) {
                                    return n ? r ? this.elements[4] * e + this.elements[5] * t + this.elements[6] * n + this.elements[7] * r: this.elements[4] * e + this.elements[5] * t + this.elements[6] * n + this.elements[7] : this.elements[4] * e + this.elements[5] * t + this.elements[7]
                                },
                                multZ: function(e, t, n, r) {
                                    return r ? this.elements[8] * e + this.elements[9] * t + this.elements[10] * n + this.elements[11] * r: this.elements[8] * e + this.elements[9] * t + this.elements[10] * n + this.elements[11]
                                },
                                multW: function(e, t, n, r) {
                                    return r ? this.elements[12] * e + this.elements[13] * t + this.elements[14] * n + this.elements[15] * r: this.elements[12] * e + this.elements[13] * t + this.elements[14] * n + this.elements[15]
                                },
                                invert: function() {
                                    var e = this.elements[0] * this.elements[5] - this.elements[1] * this.elements[4],
                                        t = this.elements[0] * this.elements[6] - this.elements[2] * this.elements[4],
                                        n = this.elements[0] * this.elements[7] - this.elements[3] * this.elements[4],
                                        r = this.elements[1] * this.elements[6] - this.elements[2] * this.elements[5],
                                        i = this.elements[1] * this.elements[7] - this.elements[3] * this.elements[5],
                                        s = this.elements[2] * this.elements[7] - this.elements[3] * this.elements[6],
                                        o = this.elements[8] * this.elements[13] - this.elements[9] * this.elements[12],
                                        a = this.elements[8] * this.elements[14] - this.elements[10] * this.elements[12],
                                        l = this.elements[8] * this.elements[15] - this.elements[11] * this.elements[12],
                                        u = this.elements[9] * this.elements[14] - this.elements[10] * this.elements[13],
                                        h = this.elements[9] * this.elements[15] - this.elements[11] * this.elements[13],
                                        c = this.elements[10] * this.elements[15] - this.elements[11] * this.elements[14],
                                        f = e * c - t * h + n * u + r * l - i * a + s * o;
                                    if (1e-9 >= Math.abs(f)) return ! 1;
                                    var p = [];
                                    return p[0] = +this.elements[5] * c - this.elements[6] * h + this.elements[7] * u,
                                        p[4] = -this.elements[4] * c + this.elements[6] * l - this.elements[7] * a,
                                        p[8] = +this.elements[4] * h - this.elements[5] * l + this.elements[7] * o,
                                        p[12] = -this.elements[4] * u + this.elements[5] * a - this.elements[6] * o,
                                        p[1] = -this.elements[1] * c + this.elements[2] * h - this.elements[3] * u,
                                        p[5] = +this.elements[0] * c - this.elements[2] * l + this.elements[3] * a,
                                        p[9] = -this.elements[0] * h + this.elements[1] * l - this.elements[3] * o,
                                        p[13] = +this.elements[0] * u - this.elements[1] * a + this.elements[2] * o,
                                        p[2] = +this.elements[13] * s - this.elements[14] * i + this.elements[15] * r,
                                        p[6] = -this.elements[12] * s + this.elements[14] * n - this.elements[15] * t,
                                        p[10] = +this.elements[12] * i - this.elements[13] * n + this.elements[15] * e,
                                        p[14] = -this.elements[12] * r + this.elements[13] * t - this.elements[14] * e,
                                        p[3] = -this.elements[9] * s + this.elements[10] * i - this.elements[11] * r,
                                        p[7] = +this.elements[8] * s - this.elements[10] * n + this.elements[11] * t,
                                        p[11] = -this.elements[8] * i + this.elements[9] * n - this.elements[11] * e,
                                        p[15] = +this.elements[8] * r - this.elements[9] * t + this.elements[10] * e,
                                        e = 1 / f,
                                        p[0] *= e,
                                        p[1] *= e,
                                        p[2] *= e,
                                        p[3] *= e,
                                        p[4] *= e,
                                        p[5] *= e,
                                        p[6] *= e,
                                        p[7] *= e,
                                        p[8] *= e,
                                        p[9] *= e,
                                        p[10] *= e,
                                        p[11] *= e,
                                        p[12] *= e,
                                        p[13] *= e,
                                        p[14] *= e,
                                        p[15] *= e,
                                        this.elements = p.slice(),
                                        !0
                                },
                                toString: function() {
                                    for (var e = "",
                                             t = 0; 15 > t; t++) e += this.elements[t] + ", ";
                                    return e += this.elements[15]
                                },
                                print: function() {
                                    var e = jr(this.elements),
                                        e = "" + at.nfs(this.elements[0], e, 4) + " " + at.nfs(this.elements[1], e, 4) + " " + at.nfs(this.elements[2], e, 4) + " " + at.nfs(this.elements[3], e, 4) + "\n" + at.nfs(this.elements[4], e, 4) + " " + at.nfs(this.elements[5], e, 4) + " " + at.nfs(this.elements[6], e, 4) + " " + at.nfs(this.elements[7], e, 4) + "\n" + at.nfs(this.elements[8], e, 4) + " " + at.nfs(this.elements[9], e, 4) + " " + at.nfs(this.elements[10], e, 4) + " " + at.nfs(this.elements[11], e, 4) + "\n" + at.nfs(this.elements[12], e, 4) + " " + at.nfs(this.elements[13], e, 4) + " " + at.nfs(this.elements[14], e, 4) + " " + at.nfs(this.elements[15], e, 4) + "\n\n";
                                    at.println(e)
                                },
                                invTranslate: function(e, t, n) {
                                    this.preApply(1, 0, 0, -e, 0, 1, 0, -t, 0, 0, 1, -n, 0, 0, 0, 1)
                                },
                                invRotateX: function(e) {
                                    var t = Math.cos( - e);
                                    e = Math.sin( - e),
                                        this.preApply([1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1])
                                },
                                invRotateY: function(e) {
                                    var t = Math.cos( - e);
                                    e = Math.sin( - e),
                                        this.preApply([t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1])
                                },
                                invRotateZ: function(e) {
                                    var t = Math.cos( - e);
                                    e = Math.sin( - e),
                                        this.preApply([t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                                },
                                invScale: function(e, t, n) {
                                    this.preApply([1 / e, 0, 0, 0, 0, 1 / t, 0, 0, 0, 0, 1 / n, 0, 0, 0, 0, 1])
                                }
                            };
                            var Gr = at.PMatrixStack = function() {
                                this.matrixStack = []
                            };
                            Gr.prototype.load = function() {
                                var e = ht.$newPMatrix();
                                e.set(1 === arguments.length ? arguments[0] : arguments),
                                    this.matrixStack.push(e)
                            },
                                $r.prototype.$newPMatrix = function() {
                                    return new zr
                                },
                                Br.prototype.$newPMatrix = function() {
                                    return new Vr
                                },
                                Gr.prototype.push = function() {
                                    this.matrixStack.push(this.peek())
                                },
                                Gr.prototype.pop = function() {
                                    return this.matrixStack.pop()
                                },
                                Gr.prototype.peek = function() {
                                    var e = ht.$newPMatrix();
                                    return e.set(this.matrixStack[this.matrixStack.length - 1]),
                                        e
                                },
                                Gr.prototype.mult = function(e) {
                                    this.matrixStack[this.matrixStack.length - 1].apply(e)
                                },
                                at.split = function(e, t) {
                                    return e.split(t)
                                },
                                at.splitTokens = function(e, n) {
                                    if (n === t) return e.split(/\s+/g);
                                    var r, i, s = n.split(/()/g),
                                        o = "",
                                        a = e.length,
                                        l = [];
                                    for (r = 0; a > r; r++) i = e[r],
                                        -1 < s.indexOf(i) ? ("" !== o && l.push(o), o = "") : o += i;
                                    return "" !== o && l.push(o),
                                        l
                                },
                                at.append = function(e, t) {
                                    return e[e.length] = t,
                                        e
                                },
                                at.concat = function(e, t) {
                                    return e.concat(t)
                                },
                                at.sort = function(e, t) {
                                    var n = [];
                                    if (0 < e.length) {
                                        for (var r = t > 0 ? t: e.length, i = 0; r > i; i++) n.push(e[i]);
                                        if ("string" == typeof e[0] ? n.sort() : n.sort(function(e, t) {
                                                return e - t
                                            }), t > 0) for (r = n.length; r < e.length; r++) n.push(e[r])
                                    }
                                    return n
                                },
                                at.splice = function(e, t, n) {
                                    if (0 === t.length) return e;
                                    if (t instanceof Array) for (var r = 0; r < t.length; n++, r++) e.splice(n, 0, t[r]);
                                    else e.splice(n, 0, t);
                                    return e
                                },
                                at.subset = function(e, n, r) {
                                    return e.slice(n, r !== t ? n + r: e.length)
                                },
                                at.join = function(e, t) {
                                    return e.join(t)
                                },
                                at.shorten = function(e) {
                                    for (var t = [], n = e.length, r = 0; n > r; r++) t[r] = e[r];
                                    return t.pop(),
                                        t
                                },
                                at.expand = function(e, t) {
                                    var n = e.slice(0);
                                    return n.length = t || 2 * e.length,
                                        n
                                },
                                at.arrayCopy = function() {
                                    var e, n, r, i = 0,
                                        s = 0;
                                    2 === arguments.length ? (e = arguments[0], n = arguments[1], r = e.length) : 3 === arguments.length ? (e = arguments[0], n = arguments[1], r = arguments[2]) : 5 === arguments.length && (e = arguments[0], i = arguments[1], n = arguments[2], s = arguments[3], r = arguments[4]);
                                    for (var o = i; r + i > o; o++, s++) {
                                        if (n[s] === t) throw "array index out of bounds exception";
                                        n[s] = e[o]
                                    }
                                },
                                at.reverse = function(e) {
                                    return e.reverse()
                                },
                                at.mix = function(e, t, n) {
                                    return e + ((t - e) * n >> 8)
                                },
                                at.peg = function(e) {
                                    return 0 > e ? 0 : e > 255 ? 255 : e
                                },
                                at.modes = function() {
                                    function e(e, t, n, r, i, o, a, l, u, h, c) {
                                        return e = s(((4278190080 & e) >>> 24) + t, 255) << 24,
                                            n += (u - n) * t >> 8,
                                            r += (h - r) * t >> 8,
                                            t = i + ((c - i) * t >> 8),
                                        e | (0 > n ? 0 : n > 255 ? 255 : n) << 16 | (0 > r ? 0 : r > 255 ? 255 : r) << 8 | (0 > t ? 0 : t > 255 ? 255 : t)
                                    }
                                    var t = c.ALPHA_MASK,
                                        n = c.RED_MASK,
                                        r = c.GREEN_MASK,
                                        i = c.BLUE_MASK,
                                        s = Math.min,
                                        o = Math.max;
                                    return {
                                        replace: function(e, t) {
                                            return t
                                        },
                                        blend: function(e, o) {
                                            var a = (o & t) >>> 24,
                                                l = e & n,
                                                u = e & r,
                                                h = e & i,
                                                c = o & n,
                                                f = o & r,
                                                p = o & i;
                                            return s(((e & t) >>> 24) + a, 255) << 24 | l + ((c - l) * a >> 8) & n | u + ((f - u) * a >> 8) & r | h + ((p - h) * a >> 8) & i
                                        },
                                        add: function(e, o) {
                                            var a = (o & t) >>> 24;
                                            return s(((e & t) >>> 24) + a, 255) << 24 | s((e & n) + ((o & n) >> 8) * a, n) & n | s((e & r) + ((o & r) >> 8) * a, r) & r | s((e & i) + ((o & i) * a >> 8), i)
                                        },
                                        subtract: function(e, a) {
                                            var l = (a & t) >>> 24;
                                            return s(((e & t) >>> 24) + l, 255) << 24 | o((e & n) - ((a & n) >> 8) * l, r) & n | o((e & r) - ((a & r) >> 8) * l, i) & r | o((e & i) - ((a & i) * l >> 8), 0)
                                        },
                                        lightest: function(e, a) {
                                            var l = (a & t) >>> 24;
                                            return s(((e & t) >>> 24) + l, 255) << 24 | o(e & n, ((a & n) >> 8) * l) & n | o(e & r, ((a & r) >> 8) * l) & r | o(e & i, (a & i) * l >> 8)
                                        },
                                        darkest: function(e, o) {
                                            var a = (o & t) >>> 24,
                                                l = e & n,
                                                u = e & r,
                                                h = e & i,
                                                c = s(e & n, ((o & n) >> 8) * a),
                                                f = s(e & r, ((o & r) >> 8) * a),
                                                p = s(e & i, (o & i) * a >> 8);
                                            return s(((e & t) >>> 24) + a, 255) << 24 | l + ((c - l) * a >> 8) & n | u + ((f - u) * a >> 8) & r | h + ((p - h) * a >> 8) & i
                                        },
                                        difference: function(s, o) {
                                            var a = (s & n) >> 16,
                                                l = (s & r) >> 8,
                                                u = s & i,
                                                h = (o & n) >> 16,
                                                c = (o & r) >> 8,
                                                f = o & i;
                                            return e(s, (o & t) >>> 24, a, l, u, h, c, f, a > h ? a - h: h - a, l > c ? l - c: c - l, u > f ? u - f: f - u)
                                        },
                                        exclusion: function(s, o) {
                                            var a = (s & n) >> 16,
                                                l = (s & r) >> 8,
                                                u = s & i,
                                                h = (o & n) >> 16,
                                                c = (o & r) >> 8,
                                                f = o & i;
                                            return e(s, (o & t) >>> 24, a, l, u, h, c, f, a + h - (a * h >> 7), l + c - (l * c >> 7), u + f - (u * f >> 7))
                                        },
                                        multiply: function(s, o) {
                                            var a = (s & n) >> 16,
                                                l = (s & r) >> 8,
                                                u = s & i,
                                                h = (o & n) >> 16,
                                                c = (o & r) >> 8,
                                                f = o & i;
                                            return e(s, (o & t) >>> 24, a, l, u, h, c, f, a * h >> 8, l * c >> 8, u * f >> 8)
                                        },
                                        screen: function(s, o) {
                                            var a = (s & n) >> 16,
                                                l = (s & r) >> 8,
                                                u = s & i,
                                                h = (o & n) >> 16,
                                                c = (o & r) >> 8,
                                                f = o & i;
                                            return e(s, (o & t) >>> 24, a, l, u, h, c, f, 255 - ((255 - a) * (255 - h) >> 8), 255 - ((255 - l) * (255 - c) >> 8), 255 - ((255 - u) * (255 - f) >> 8))
                                        },
                                        hard_light: function(s, o) {
                                            var a = (s & n) >> 16,
                                                l = (s & r) >> 8,
                                                u = s & i,
                                                h = (o & n) >> 16,
                                                c = (o & r) >> 8,
                                                f = o & i;
                                            return e(s, (o & t) >>> 24, a, l, u, h, c, f, 128 > h ? a * h >> 7 : 255 - ((255 - a) * (255 - h) >> 7), 128 > c ? l * c >> 7 : 255 - ((255 - l) * (255 - c) >> 7), 128 > f ? u * f >> 7 : 255 - ((255 - u) * (255 - f) >> 7))
                                        },
                                        soft_light: function(s, o) {
                                            var a = (s & n) >> 16,
                                                l = (s & r) >> 8,
                                                u = s & i,
                                                h = (o & n) >> 16,
                                                c = (o & r) >> 8,
                                                f = o & i;
                                            return e(s, (o & t) >>> 24, a, l, u, h, c, f, (a * h >> 7) + (a * a >> 8) - (a * a * h >> 15), (l * c >> 7) + (l * l >> 8) - (l * l * c >> 15), (u * f >> 7) + (u * u >> 8) - (u * u * f >> 15))
                                        },
                                        overlay: function(s, o) {
                                            var a = (s & n) >> 16,
                                                l = (s & r) >> 8,
                                                u = s & i,
                                                h = (o & n) >> 16,
                                                c = (o & r) >> 8,
                                                f = o & i;
                                            return e(s, (o & t) >>> 24, a, l, u, h, c, f, 128 > a ? a * h >> 7 : 255 - ((255 - a) * (255 - h) >> 7), 128 > l ? l * c >> 7 : 255 - ((255 - l) * (255 - c) >> 7), 128 > u ? u * f >> 7 : 255 - ((255 - u) * (255 - f) >> 7))
                                        },
                                        dodge: function(s, o) {
                                            var a = (o & t) >>> 24,
                                                l = (s & n) >> 16,
                                                u = (s & r) >> 8,
                                                h = s & i,
                                                c = (o & n) >> 16,
                                                f = (o & r) >> 8,
                                                p = o & i,
                                                d = 255;
                                            255 !== c && (d = (l << 8) / (255 - c), d = 0 > d ? 0 : d > 255 ? 255 : d);
                                            var m = 255;
                                            255 !== f && (m = (u << 8) / (255 - f), m = 0 > m ? 0 : m > 255 ? 255 : m);
                                            var g = 255;
                                            return 255 !== p && (g = (h << 8) / (255 - p), g = 0 > g ? 0 : g > 255 ? 255 : g),
                                                e(s, a, l, u, h, c, f, p, d, m, g)
                                        },
                                        burn: function(s, o) {
                                            var a = (o & t) >>> 24,
                                                l = (s & n) >> 16,
                                                u = (s & r) >> 8,
                                                h = s & i,
                                                c = (o & n) >> 16,
                                                f = (o & r) >> 8,
                                                p = o & i,
                                                d = 0;
                                            0 !== c && (d = (255 - l << 8) / c, d = 255 - (0 > d ? 0 : d > 255 ? 255 : d));
                                            var m = 0;
                                            0 !== f && (m = (255 - u << 8) / f, m = 255 - (0 > m ? 0 : m > 255 ? 255 : m));
                                            var g = 0;
                                            return 0 !== p && (g = (255 - h << 8) / p, g = 255 - (0 > g ? 0 : g > 255 ? 255 : g)),
                                                e(s, a, l, u, h, c, f, p, d, m, g)
                                        }
                                    }
                                } (),
                                at.color = function(e, n, r, i) {
                                    return e !== t && n !== t && r !== t && i !== t ? P(e, n, r, i) : e !== t && n !== t && r !== t ? P(e, n, r, Sn) : e !== t && n !== t ? (e & c.ALPHA_MASK ? (n = Math.round(255 * (n / Sn)), n = n > 255 ? 255 : n, e = e - (e & c.ALPHA_MASK) + ((0 > n ? 0 : n) << 24 & c.ALPHA_MASK)) : e = Rn === c.RGB ? P(e, e, e, n) : Rn === c.HSB ? P(0, 0, e / Tn * _n, n) : void 0, e) : "number" == typeof e ? M(e) : P(Tn, Cn, _n, Sn)
                                },
                                at.color.toString = function(e) {
                                    return "rgba(" + ((e & c.RED_MASK) >>> 16) + "," + ((e & c.GREEN_MASK) >>> 8) + "," + (e & c.BLUE_MASK) + "," + ((e & c.ALPHA_MASK) >>> 24) / 255 + ")"
                                },
                                at.color.toInt = function(e, t, n, r) {
                                    return r << 24 & c.ALPHA_MASK | e << 16 & c.RED_MASK | t << 8 & c.GREEN_MASK | n & c.BLUE_MASK
                                },
                                at.color.toArray = function(e) {
                                    return [(e & c.RED_MASK) >>> 16, (e & c.GREEN_MASK) >>> 8, e & c.BLUE_MASK, (e & c.ALPHA_MASK) >>> 24]
                                },
                                at.color.toGLArray = function(e) {
                                    return [((e & c.RED_MASK) >>> 16) / 255, ((e & c.GREEN_MASK) >>> 8) / 255, (e & c.BLUE_MASK) / 255, ((e & c.ALPHA_MASK) >>> 24) / 255]
                                },
                                at.color.toRGB = function(e, t, n) {
                                    e = e > Tn ? Tn: e,
                                        t = t > Cn ? Cn: t,
                                        n = n > _n ? _n: n,
                                        e = 360 * (e / Tn),
                                        t = 100 * (t / Cn),
                                        n = 100 * (n / _n);
                                    var r = Math.round(255 * (n / 100));
                                    if (0 === t) return [r, r, r];
                                    e %= 360;
                                    var i = e % 60,
                                        s = Math.round(255 * (n * (100 - t) / 1e4)),
                                        o = Math.round(255 * (n * (6e3 - t * i) / 6e5));
                                    switch (t = Math.round(255 * (n * (6e3 - t * (60 - i)) / 6e5)), Math.floor(e / 60)) {
                                        case 0:
                                            return [r, t, s];
                                        case 1:
                                            return [o, r, s];
                                        case 2:
                                            return [s, r, t];
                                        case 3:
                                            return [s, o, r];
                                        case 4:
                                            return [t, s, r];
                                        case 5:
                                            return [r, s, o]
                                    }
                                },
                                at.brightness = function(e) {
                                    return R(e)[2]
                                },
                                at.saturation = function(e) {
                                    return R(e)[1]
                                },
                                at.hue = function(e) {
                                    return R(e)[0]
                                },
                                at.red = function(e) {
                                    return ((e & c.RED_MASK) >>> 16) / 255 * Tn
                                },
                                at.green = function(e) {
                                    return ((e & c.GREEN_MASK) >>> 8) / 255 * Cn
                                },
                                at.blue = function(e) {
                                    return (e & c.BLUE_MASK) / 255 * _n
                                },
                                at.alpha = function(e) {
                                    return ((e & c.ALPHA_MASK) >>> 24) / 255 * Sn
                                },
                                at.lerpColor = function(e, t, n) {
                                    var r, i, s, o, a, l;
                                    return e = at.color(e),
                                        t = at.color(t),
                                        Rn === c.HSB ? (s = R(e), e = ((e & c.ALPHA_MASK) >>> 24) / Sn, i = R(t), t = ((t & c.ALPHA_MASK) >>> 24) / Sn, l = at.lerp(s[0], i[0], n), r = at.lerp(s[1], i[1], n), s = at.lerp(s[2], i[2], n), s = at.color.toRGB(l, r, s), n = at.lerp(e, t, n) * Sn, n << 24 & c.ALPHA_MASK | s[0] << 16 & c.RED_MASK | s[1] << 8 & c.GREEN_MASK | s[2] & c.BLUE_MASK) : (r = (e & c.RED_MASK) >>> 16, i = (e & c.GREEN_MASK) >>> 8, s = e & c.BLUE_MASK, e = ((e & c.ALPHA_MASK) >>> 24) / Sn, o = (t & c.RED_MASK) >>> 16, a = (t & c.GREEN_MASK) >>> 8, l = t & c.BLUE_MASK, t = ((t & c.ALPHA_MASK) >>> 24) / Sn, r = 0 | at.lerp(r, o, n), i = 0 | at.lerp(i, a, n), s = 0 | at.lerp(s, l, n), n = at.lerp(e, t, n) * Sn, n << 24 & c.ALPHA_MASK | r << 16 & c.RED_MASK | i << 8 & c.GREEN_MASK | s & c.BLUE_MASK)
                                },
                                at.colorMode = function() {
                                    Rn = arguments[0],
                                    1 < arguments.length && (Tn = arguments[1], Cn = arguments[2] || arguments[1], _n = arguments[3] || arguments[1], Sn = arguments[4] || arguments[1])
                                },
                                at.blendColor = function(e, t, n) {
                                    return n === c.REPLACE ? at.modes.replace(e, t) : n === c.BLEND ? at.modes.blend(e, t) : n === c.ADD ? at.modes.add(e, t) : n === c.SUBTRACT ? at.modes.subtract(e, t) : n === c.LIGHTEST ? at.modes.lightest(e, t) : n === c.DARKEST ? at.modes.darkest(e, t) : n === c.DIFFERENCE ? at.modes.difference(e, t) : n === c.EXCLUSION ? at.modes.exclusion(e, t) : n === c.MULTIPLY ? at.modes.multiply(e, t) : n === c.SCREEN ? at.modes.screen(e, t) : n === c.HARD_LIGHT ? at.modes.hard_light(e, t) : n === c.SOFT_LIGHT ? at.modes.soft_light(e, t) : n === c.OVERLAY ? at.modes.overlay(e, t) : n === c.DODGE ? at.modes.dodge(e, t) : n === c.BURN ? at.modes.burn(e, t) : void 0
                                },
                                at.printMatrix = function() {
                                    Vt.print()
                                },
                                $r.prototype.translate = function(e, t) {
                                    Vt.translate(e, t),
                                        Gt.invTranslate(e, t),
                                        lt.translate(e, t)
                                },
                                Br.prototype.translate = function(e, t, n) {
                                    Vt.translate(e, t, n),
                                        Gt.invTranslate(e, t, n)
                                },
                                $r.prototype.scale = function(e, t) {
                                    Vt.scale(e, t),
                                        Gt.invScale(e, t),
                                        lt.scale(e, t || e)
                                },
                                Br.prototype.scale = function(e, t, n) {
                                    Vt.scale(e, t, n),
                                        Gt.invScale(e, t, n)
                                },
                                $r.prototype.transform = function(e) {
                                    e = e.array(),
                                        lt.transform(e[0], e[3], e[1], e[4], e[2], e[5])
                                },
                                Br.prototype.transformm = function() {
                                    throw "p.transform is currently not supported in 3D mode"
                                },
                                $r.prototype.pushMatrix = function() {
                                    Ut.load(Vt),
                                        Xt.load(Gt),
                                        lt.save()
                                },
                                Br.prototype.pushMatrix = function() {
                                    Ut.load(Vt),
                                        Xt.load(Gt)
                                },
                                $r.prototype.popMatrix = function() {
                                    Vt.set(Ut.pop()),
                                        Gt.set(Xt.pop()),
                                        L()
                                },
                                Br.prototype.popMatrix = function() {
                                    Vt.set(Ut.pop()),
                                        Gt.set(Xt.pop())
                                },
                                $r.prototype.resetMatrix = function() {
                                    Vt.reset(),
                                        Gt.reset(),
                                        lt.setTransform(1, 0, 0, 1, 0, 0)
                                },
                                Br.prototype.resetMatrix = function() {
                                    Vt.reset(),
                                        Gt.reset()
                                },
                                Fr.prototype.applyMatrix = function() {
                                    var e = arguments;
                                    Vt.apply(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                                        Gt.invApply(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                                },
                                $r.prototype.applyMatrix = function() {
                                    for (var e = arguments,
                                             t = e.length; 16 > t; t++) e[t] = 0;
                                    e[10] = e[15] = 1,
                                        Fr.prototype.applyMatrix.apply(this, e)
                                },
                                at.rotateX = function(e) {
                                    Vt.rotateX(e),
                                        Gt.invRotateX(e)
                                },
                                $r.prototype.rotateZ = function() {
                                    throw "rotateZ() is not supported in 2D mode. Use rotate(float) instead."
                                },
                                Br.prototype.rotateZ = function(e) {
                                    Vt.rotateZ(e),
                                        Gt.invRotateZ(e)
                                },
                                at.rotateY = function(e) {
                                    Vt.rotateY(e),
                                        Gt.invRotateY(e)
                                },
                                $r.prototype.rotate = function(e) {
                                    Vt.rotateZ(e),
                                        Gt.invRotateZ(e),
                                        lt.rotate(e)
                                },
                                Br.prototype.rotate = function(e) {
                                    4 > arguments.length ? at.rotateZ(e) : (Vt.rotate(e, arguments[1], arguments[2], arguments[3]), Gt.rotate( - e, arguments[1], arguments[2], arguments[3]))
                                },
                                $r.prototype.shearX = function(e) {
                                    Vt.shearX(e),
                                        lt.transform(1, 0, e, 1, 0, 0)
                                },
                                Br.prototype.shearX = function(e) {
                                    Vt.shearX(e)
                                },
                                $r.prototype.shearY = function(e) {
                                    Vt.shearY(e),
                                        lt.transform(1, e, 0, 1, 0, 0)
                                },
                                Br.prototype.shearY = function(e) {
                                    Vt.shearY(e)
                                },
                                at.pushStyle = function() {
                                    lt.save(),
                                        at.pushMatrix(),
                                        Tr.push({
                                            doFill: Yt,
                                            currentFillColor: Zt,
                                            doStroke: Qt,
                                            currentStrokeColor: tn,
                                            curTint: Ln,
                                            curRectMode: un,
                                            curColorMode: Rn,
                                            colorModeX: Tn,
                                            colorModeZ: _n,
                                            colorModeY: Cn,
                                            colorModeA: Sn,
                                            curTextFont: Yn,
                                            horizontalTextAlignment: jn,
                                            verticalTextAlignment: zn,
                                            textMode: Vn,
                                            curFontName: Gn,
                                            curTextSize: Un,
                                            curTextAscent: Xn,
                                            curTextDescent: qn,
                                            curTextLeading: Wn
                                        })
                                },
                                at.popStyle = function() {
                                    var e = Tr.pop();
                                    if (!e) throw "Too many popStyle() without enough pushStyle()";
                                    L(),
                                        at.popMatrix(),
                                        Yt = e.doFill,
                                        Zt = e.currentFillColor,
                                        Qt = e.doStroke,
                                        tn = e.currentStrokeColor,
                                        Ln = e.curTint,
                                        un = e.curRectMode,
                                        Rn = e.curColorMode,
                                        Tn = e.colorModeX,
                                        _n = e.colorModeZ,
                                        Cn = e.colorModeY,
                                        Sn = e.colorModeA,
                                        Yn = e.curTextFont,
                                        Gn = e.curFontName,
                                        Un = e.curTextSize,
                                        jn = e.horizontalTextAlignment,
                                        zn = e.verticalTextAlignment,
                                        Vn = e.textMode,
                                        Xn = e.curTextAscent,
                                        qn = e.curTextDescent,
                                        Wn = e.curTextLeading
                                },
                                at.year = function() {
                                    return (new Date).getFullYear()
                                },
                                at.month = function() {
                                    return (new Date).getMonth() + 1
                                },
                                at.day = function() {
                                    return (new Date).getDate()
                                },
                                at.hour = function() {
                                    return (new Date).getHours()
                                },
                                at.minute = function() {
                                    return (new Date).getMinutes()
                                },
                                at.second = function() {
                                    return (new Date).getSeconds()
                                },
                                at.millis = function() {
                                    return Date.now() - kn
                                },
                                $r.prototype.redraw = function() {
                                    N(),
                                        lt.lineWidth = rn;
                                    var e = at.pmouseX,
                                        t = at.pmouseY;
                                    at.pmouseX = Pn,
                                        at.pmouseY = Mn,
                                        lt.save(),
                                        at.draw(),
                                        L(),
                                        Pn = at.mouseX,
                                        Mn = at.mouseY,
                                        at.pmouseX = e,
                                        at.pmouseY = t
                                },
                                Br.prototype.redraw = function() {
                                    N();
                                    var e = at.pmouseX,
                                        t = at.pmouseY;
                                    at.pmouseX = Pn,
                                        at.pmouseY = Mn,
                                        lt.clear(lt.DEPTH_BUFFER_BIT),
                                        On = {
                                            attributes: {},
                                            locations: {}
                                        },
                                        at.noLights(),
                                        at.lightFalloff(1, 0, 0),
                                        at.shininess(1),
                                        at.ambient(255, 255, 255),
                                        at.specular(0, 0, 0),
                                        at.emissive(0, 0, 0),
                                        at.camera(),
                                        at.draw(),
                                        Pn = at.mouseX,
                                        Mn = at.mouseY,
                                        at.pmouseX = e,
                                        at.pmouseY = t
                                },
                                at.noLoop = function() {
                                    sn = an = !1,
                                        clearInterval(ln),
                                        ut.onPause()
                                },
                                at.loop = function() {
                                    sn || (Dn = Date.now(), In = 0, ln = l.setInterval(function() {
                                            try {
                                                ut.onFrameStart(),
                                                    at.redraw(),
                                                    ut.onFrameEnd()
                                            } catch(e) {
                                                throw l.clearInterval(ln),
                                                    e
                                            }
                                        },
                                        gn), sn = an = !0, ut.onLoop())
                                },
                                at.frameRate = function(e) {
                                    mn = e,
                                        gn = 1e3 / mn,
                                    an && (at.noLoop(), at.loop())
                                },
                                at.exit = function() {
                                    l.clearInterval(ln);
                                    var e = at.externals.canvas.id;
                                    b.splice(x[e], 1),
                                        delete x[e],
                                        delete it.onmousedown;
                                    for (var t in w.lib) w.lib.hasOwnProperty(t) && w.lib[t].hasOwnProperty("detach") && w.lib[t].detach(at);
                                    for (e = ot.length; e--;) {
                                        var n = ot[e];
                                        t = n.elem;
                                        var r = n.type,
                                            n = n.fn;
                                        t.removeEventListener ? t.removeEventListener(r, n, !1) : t.detachEvent && t.detachEvent("on" + r, n)
                                    }
                                    ut.onExit()
                                },
                                at.cursor = function() {
                                    if (1 < arguments.length || 1 === arguments.length && arguments[0] instanceof at.PImage) {
                                        var e, t, n = arguments[0];
                                        if (3 <= arguments.length) {
                                            if (e = arguments[1], t = arguments[2], 0 > e || 0 > t || t >= n.height || e >= n.width) throw "x and y must be non-negative and less than the dimensions of the image"
                                        } else e = n.width >>> 1,
                                            t = n.height >>> 1;
                                        n = 'url("' + n.toDataURL() + '") ' + e + " " + t + ", default",
                                            it.style.cursor = n
                                    } else it.style.cursor = 1 === arguments.length ? arguments[0] : vn
                                },
                                at.noCursor = function() {
                                    it.style.cursor = c.NOCURSOR
                                },
                                at.link = function(e, n) {
                                    n !== t ? l.open(e, n) : l.location = e
                                },
                                at.beginDraw = h,
                                at.endDraw = h,
                                $r.prototype.toImageData = function(e, n, r, i) {
                                    return e = e !== t ? e: 0,
                                        n = n !== t ? n: 0,
                                        r = r !== t ? r: at.width,
                                        i = i !== t ? i: at.height,
                                        lt.getImageData(e, n, r, i)
                                },
                                Br.prototype.toImageData = function(e, n, r, i) {
                                    e = e !== t ? e: 0,
                                        n = n !== t ? n: 0,
                                        r = r !== t ? r: at.width,
                                        i = i !== t ? i: at.height;
                                    var s = u.createElement("canvas").getContext("2d").createImageData(r, i),
                                        o = new y(4 * r * i);
                                    lt.readPixels(e, n, r, i, lt.RGBA, lt.UNSIGNED_BYTE, o),
                                        e = 0,
                                        n = o.length;
                                    for (var a = s.data; n > e; e++) a[e] = o[4 * (i - 1 - Math.floor(e / 4 / r)) * r + e % (4 * r)];
                                    return s
                                },
                                at.status = function(e) {
                                    l.status = e
                                },
                                at.binary = function(e, t) {
                                    var n;
                                    if (t > 0) n = t;
                                    else if (e instanceof Char) n = 16,
                                        e |= 0;
                                    else for (n = 32; n > 1 && !(e >>> n - 1 & 1);) n--;
                                    for (var r = ""; n > 0;) r += e >>> --n & 1 ? "1": "0";
                                    return r
                                },
                                at.unbinary = function(e) {
                                    for (var t = e.length - 1,
                                             n = 1,
                                             r = 0; t >= 0;) {
                                        var i = e[t--];
                                        if ("0" !== i && "1" !== i) throw "the value passed into unbinary was not an 8 bit binary number";
                                        "1" === i && (r += n),
                                            n <<= 1
                                    }
                                    return r
                                },
                                at.hex = function(e, n) {
                                    1 === arguments.length && (n = e instanceof Char ? 4 : 8);
                                    var r = e,
                                        i = n,
                                        i = i === t || null === i ? i = 8 : i;
                                    for (0 > r && (r = 4294967295 + r + 1), r = Number(r).toString(16).toUpperCase(); r.length < i;) r = "0" + r;
                                    return r.length >= i && (r = r.substring(r.length - i, r.length)),
                                        r
                                },
                                at.unhex = function(e) {
                                    if (e instanceof Array) {
                                        for (var t = [], n = 0; n < e.length; n++) t.push(k(e[n]));
                                        return t
                                    }
                                    return k(e)
                                },
                                at.loadStrings = function(e) {
                                    return d[e] ? d[e].split("\n") : (e = o(e), "string" != typeof e || "" === e ? [] : (e = e.replace(/(\r\n?)/g, "\n").replace(/\n$/, ""), e.split("\n")))
                                },
                                at.saveStrings = function(e, t) {
                                    d[e] = t.join("\n")
                                },
                                at.loadBytes = function(e) {
                                    e = o(e);
                                    for (var t = [], n = 0; n < e.length; n++) t.push(e.charCodeAt(n));
                                    return t
                                },
                                at.matchAll = function(e, t) {
                                    for (var n, r = [], i = RegExp(t, "g"); null !== (n = i.exec(e));) r.push(n),
                                    0 === n[0].length && ++i.lastIndex;
                                    return 0 < r.length ? r: null
                                },
                                at.match = function(e, t) {
                                    return e.match(t)
                                },
                                at.println = function(e) {
                                    w.logger.println(e)
                                },
                                at.print = function(e) {
                                    w.logger.print(e)
                                },
                                at.str = function(e) {
                                    if (e instanceof Array) {
                                        for (var t = [], n = 0; n < e.length; n++) t.push(e[n].toString() + "");
                                        return t
                                    }
                                    return e.toString() + ""
                                },
                                at.parseBoolean = function(e) {
                                    if (e instanceof Array) {
                                        for (var t = [], n = 0; n < e.length; n++) t.push(D(e[n]));
                                        return t
                                    }
                                    return D(e)
                                },
                                at.parseByte = function(e) {
                                    if (e instanceof Array) {
                                        for (var t = [], n = 0; n < e.length; n++) t.push(0 - (128 & e[n]) | 127 & e[n]);
                                        return t
                                    }
                                    return 0 - (128 & e) | 127 & e
                                },
                                at.parseChar = function(e) {
                                    if ("number" == typeof e) return new Char(String.fromCharCode(65535 & e));
                                    if (e instanceof Array) {
                                        for (var t = [], n = 0; n < e.length; n++) t.push(new Char(String.fromCharCode(65535 & e[n])));
                                        return t
                                    }
                                    throw "char() may receive only one argument of type int, byte, int[], or byte[]."
                                },
                            at.parseFloat = function(e) {
                                if (e instanceof Array) {
                                    for (var t = [], n = 0; n < e.length; n++) t.push(I(e[n]));
                                    return t
                                }
                                return I(e)
                            },
                            at.parseInt = function(e, t) {
                                if (e instanceof Array) {
                                    for (var n = [], r = 0; r < e.length; r++) n.push("string" != typeof e[r] || /^\s*[+\-]?\d+\s*$/.test(e[r]) ? O(e[r], t) : 0);
                                    return n
                                }
                                return O(e, t)
                            },
                            at.__int_cast = function(e) {
                                return 0 | e
                            },
                            at.__instanceof = function(e, t) {
                                if ("function" != typeof t) throw "Function is expected as type argument for instanceof operator";
                                if ("string" == typeof e) return t === Object || t === String;
                                if (e instanceof t) return ! 0;
                                if ("object" != typeof e || null === e) return ! 1;
                                var n = e.constructor;
                                if (t.$isInterface) {
                                    for (var r = []; n;) n.$interfaces && (r = r.concat(n.$interfaces)),
                                        n = n.$base;
                                    for (; 0 < r.length;) {
                                        if (n = r.shift(), n === t) return ! 0;
                                        n.$interfaces && (r = r.concat(n.$interfaces))
                                    }
                                    return ! 1
                                }
                                for (; n.hasOwnProperty("$base");) if (n = n.$base, n === t) return ! 0;
                                return ! 1
                            },
                            Fr.prototype.size = function(e, t, n) {
                                Qt && at.stroke(0),
                                Yt && at.fill(255),
                                    n = {
                                        fillStyle: lt.fillStyle,
                                        strokeStyle: lt.strokeStyle,
                                        lineCap: lt.lineCap,
                                        lineJoin: lt.lineJoin
                                    },
                                0 < it.style.length && (it.style.removeProperty("width"), it.style.removeProperty("height")),
                                    it.width = at.width = e || 100,
                                    it.height = at.height = t || 100;
                                for (var r in n) n.hasOwnProperty(r) && (lt[r] = n[r]);
                                for (at.textFont(Yn), at.background(), Jn = Math.max(1e3, .05 * e * t), at.externals.context = lt, e = 0; e < c.SINCOS_LENGTH; e++) lr[e] = at.sin(.5 * e * (c.PI / 180)),
                                    ur[e] = at.cos(.5 * e * (c.PI / 180))
                            },
                            $r.prototype.size = function() {
                                lt === t && (lt = it.getContext("2d"), Ut = new Gr, Xt = new Gr, Vt = new zr, Gt = new zr),
                                    Fr.prototype.size.apply(this, arguments)
                            },
                            Br.prototype.size = function() {
                                var e = !1;
                                return function(t, n) {
                                    if (e) throw "Multiple calls to size() for 3D renders are not allowed.";
                                    e = !0;
                                    try {
                                        it.width = at.width = t || 100,
                                            it.height = at.height = n || 100;
                                        for (var r, i = it,
                                                 s = ["experimental-webgl", "webgl", "webkit-3d"], o = 0, a = s.length; a > o && !(r = i.getContext(s[o], {
                                            antialias: !1,
                                            preserveDrawingBuffer: !0
                                        })); o++);
                                        lt = r,
                                            kt = lt.createTexture(),
                                            Dt = lt.createTexture()
                                    } catch(l) {
                                        w.debug(l)
                                    }
                                    if (!lt) throw "WebGL context is not supported on this browser.";
                                    lt.viewport(0, 0, it.width, it.height),
                                        lt.enable(lt.DEPTH_TEST),
                                        lt.enable(lt.BLEND),
                                        lt.blendFunc(lt.SRC_ALPHA, lt.ONE_MINUS_SRC_ALPHA),
                                        bt = Nr(lt, "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}", "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}"),
                                        xt = Nr(lt, "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}", "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}"),
                                        at.strokeWeight(1),
                                        yt = Nr(lt, Lr, "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}"),
                                        lt.useProgram(yt),
                                        S("usingTexture3d", yt, "usingTexture", Hn),
                                        at.lightFalloff(1, 0, 0),
                                        at.shininess(1),
                                        at.ambient(255, 255, 255),
                                        at.specular(0, 0, 0),
                                        at.emissive(0, 0, 0),
                                        wt = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, wt),
                                        lt.bufferData(lt.ARRAY_BUFFER, Cr, lt.STATIC_DRAW),
                                        At = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, At),
                                        lt.bufferData(lt.ARRAY_BUFFER, Pr, lt.STATIC_DRAW),
                                        Et = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, Et),
                                        lt.bufferData(lt.ARRAY_BUFFER, _r, lt.STATIC_DRAW),
                                        St = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, St),
                                        lt.bufferData(lt.ARRAY_BUFFER, Mr, lt.STATIC_DRAW),
                                        Tt = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, Tt),
                                        lt.bufferData(lt.ARRAY_BUFFER, Rr, lt.STATIC_DRAW),
                                        Ct = lt.createBuffer(),
                                        _t = lt.createBuffer(),
                                        Pt = lt.createBuffer(),
                                        Mt = lt.createBuffer(),
                                        Rt = lt.createBuffer(),
                                        Nt = lt.createBuffer(),
                                        Lt = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, Lt),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m([0, 0, 0]), lt.STATIC_DRAW),
                                        It = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, It),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0]), lt.STATIC_DRAW),
                                        Ot = lt.createBuffer(),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, Ot),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m([0, 0, 1, 0, 1, 1, 0, 1]), lt.STATIC_DRAW),
                                        Ft = lt.createBuffer(),
                                        lt.bindBuffer(lt.ELEMENT_ARRAY_BUFFER, Ft),
                                        lt.bufferData(lt.ELEMENT_ARRAY_BUFFER, new v([0, 1, 2, 2, 3, 0]), lt.STATIC_DRAW),
                                        jt = new Vr,
                                        zt = new Vr,
                                        Vt = new Vr,
                                        Gt = new Vr,
                                        Wt = new Vr,
                                        at.camera(),
                                        at.perspective(),
                                        Ut = new Gr,
                                        Xt = new Gr,
                                        ft = new Vr,
                                        pt = new Vr,
                                        dt = new Vr,
                                        mt = new Vr,
                                        gt = new Vr,
                                        vt = new Vr,
                                        vt.set( - 1, 3, -3, 1, 3, -6, 3, 0, -3, 3, 0, 0, 1, 0, 0, 0),
                                        Fr.prototype.size.apply(this, arguments)
                                }
                            } (),
                            $r.prototype.ambientLight = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.ambientLight = function(e, t, n, r, i, s) {
                                if (nr === c.MAX_LIGHTS) throw "can only create " + c.MAX_LIGHTS + " lights";
                                r = new PVector(r, i, s),
                                    i = new Vr,
                                    i.scale(1, -1, 1),
                                    i.apply(Vt.array()),
                                    i.mult(r, r),
                                    e = P(e, t, n, 0),
                                    e = [((e & c.RED_MASK) >>> 16) / 255, ((e & c.GREEN_MASK) >>> 8) / 255, (e & c.BLUE_MASK) / 255],
                                    lt.useProgram(yt),
                                    E("uLights.color.3d." + nr, yt, "uLights" + nr + ".color", e),
                                    E("uLights.position.3d." + nr, yt, "uLights" + nr + ".position", r.array()),
                                    S("uLights.type.3d." + nr, yt, "uLights" + nr + ".type", 0),
                                    S("uLightCount3d", yt, "uLightCount", ++nr)
                            },
                            $r.prototype.directionalLight = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.directionalLight = function(e, t, n, r, i, s) {
                                if (nr === c.MAX_LIGHTS) throw "can only create " + c.MAX_LIGHTS + " lights";
                                lt.useProgram(yt);
                                var o = new Vr;
                                o.scale(1, -1, 1),
                                    o.apply(Vt.array()),
                                    o = o.array(),
                                    r = [o[0] * r + o[4] * i + o[8] * s, o[1] * r + o[5] * i + o[9] * s, o[2] * r + o[6] * i + o[10] * s],
                                    e = P(e, t, n, 0),
                                    E("uLights.color.3d." + nr, yt, "uLights" + nr + ".color", [((e & c.RED_MASK) >>> 16) / 255, ((e & c.GREEN_MASK) >>> 8) / 255, (e & c.BLUE_MASK) / 255]),
                                    E("uLights.position.3d." + nr, yt, "uLights" + nr + ".position", r),
                                    S("uLights.type.3d." + nr, yt, "uLights" + nr + ".type", 1),
                                    S("uLightCount3d", yt, "uLightCount", ++nr)
                            },
                            $r.prototype.lightFalloff = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.lightFalloff = function(e, t, n) {
                                lt.useProgram(yt),
                                    E("uFalloff3d", yt, "uFalloff", [e, t, n])
                            },
                            $r.prototype.lightSpecular = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.lightSpecular = function(e, t, n) {
                                e = P(e, t, n, 0),
                                    e = [((e & c.RED_MASK) >>> 16) / 255, ((e & c.GREEN_MASK) >>> 8) / 255, (e & c.BLUE_MASK) / 255],
                                    lt.useProgram(yt),
                                    E("uSpecular3d", yt, "uSpecular", e)
                            },
                            at.lights = function() {
                                at.ambientLight(128, 128, 128),
                                    at.directionalLight(128, 128, 128, 0, 0, -1),
                                    at.lightFalloff(1, 0, 0),
                                    at.lightSpecular(0, 0, 0)
                            },
                            $r.prototype.pointLight = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.pointLight = function(e, t, n, r, i, s) {
                                if (nr === c.MAX_LIGHTS) throw "can only create " + c.MAX_LIGHTS + " lights";
                                r = new PVector(r, i, s),
                                    i = new Vr,
                                    i.scale(1, -1, 1),
                                    i.apply(Vt.array()),
                                    i.mult(r, r),
                                    e = P(e, t, n, 0),
                                    e = [((e & c.RED_MASK) >>> 16) / 255, ((e & c.GREEN_MASK) >>> 8) / 255, (e & c.BLUE_MASK) / 255],
                                    lt.useProgram(yt),
                                    E("uLights.color.3d." + nr, yt, "uLights" + nr + ".color", e),
                                    E("uLights.position.3d." + nr, yt, "uLights" + nr + ".position", r.array()),
                                    S("uLights.type.3d." + nr, yt, "uLights" + nr + ".type", 2),
                                    S("uLightCount3d", yt, "uLightCount", ++nr)
                            },
                            $r.prototype.noLights = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.noLights = function() {
                                nr = 0,
                                    lt.useProgram(yt),
                                    S("uLightCount3d", yt, "uLightCount", nr)
                            },
                            $r.prototype.spotLight = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.spotLight = function(e, t, n, r, i, s, o, a, l, u, h) {
                                if (nr === c.MAX_LIGHTS) throw "can only create " + c.MAX_LIGHTS + " lights";
                                lt.useProgram(yt),
                                    r = new PVector(r, i, s),
                                    i = new Vr,
                                    i.scale(1, -1, 1),
                                    i.apply(Vt.array()),
                                    i.mult(r, r),
                                    i = i.array(),
                                    o = [i[0] * o + i[4] * a + i[8] * l, i[1] * o + i[5] * a + i[9] * l, i[2] * o + i[6] * a + i[10] * l],
                                    e = P(e, t, n, 0),
                                    E("uLights.color.3d." + nr, yt, "uLights" + nr + ".color", [((e & c.RED_MASK) >>> 16) / 255, ((e & c.GREEN_MASK) >>> 8) / 255, (e & c.BLUE_MASK) / 255]),
                                    E("uLights.position.3d." + nr, yt, "uLights" + nr + ".position", r.array()),
                                    E("uLights.direction.3d." + nr, yt, "uLights" + nr + ".direction", o),
                                    E("uLights.concentration.3d." + nr, yt, "uLights" + nr + ".concentration", h),
                                    E("uLights.angle.3d." + nr, yt, "uLights" + nr + ".angle", u),
                                    S("uLights.type.3d." + nr, yt, "uLights" + nr + ".type", 3),
                                    S("uLightCount3d", yt, "uLightCount", ++nr)
                            },
                            $r.prototype.beginCamera = function() {
                                throw "beginCamera() is not available in 2D mode"
                            },
                            Br.prototype.beginCamera = function() {
                                if (hr) throw "You cannot call beginCamera() again before calling endCamera()";
                                hr = !0,
                                    Vt = zt,
                                    Gt = jt
                            },
                            $r.prototype.endCamera = function() {
                                throw "endCamera() is not available in 2D mode"
                            },
                            Br.prototype.endCamera = function() {
                                if (!hr) throw "You cannot call endCamera() before calling beginCamera()";
                                Vt.set(jt),
                                    Gt.set(zt),
                                    hr = !1
                            },
                            at.camera = function(e, n, r, i, s, o, a, l, u) {
                                e === t && (fr = at.width / 2, pr = at.height / 2, dr = pr / Math.tan(cr / 2), e = fr, n = pr, r = dr, i = fr, s = pr, a = o = 0, l = 1, u = 0),
                                    i = new PVector(e - i, n - s, r - o);
                                var h = new PVector(a, l, u);
                                i.normalize(),
                                    u = PVector.cross(h, i),
                                    h = PVector.cross(i, u),
                                    u.normalize(),
                                    h.normalize(),
                                    a = u.x,
                                    l = u.y,
                                    u = u.z,
                                    s = h.x,
                                    o = h.y;
                                var h = h.z,
                                    c = i.x,
                                    f = i.y;
                                i = i.z,
                                    jt.set(a, l, u, 0, s, o, h, 0, c, f, i, 0, 0, 0, 0, 1),
                                    jt.translate( - e, -n, -r),
                                    zt.reset(),
                                    zt.invApply(a, l, u, 0, s, o, h, 0, c, f, i, 0, 0, 0, 0, 1),
                                    zt.translate(e, n, r),
                                    Vt.set(jt),
                                    Gt.set(zt)
                            },
                            at.perspective = function(e, t, n, r) {
                                0 === arguments.length && (pr = it.height / 2, dr = pr / Math.tan(cr / 2), mr = dr / 10, gr = 10 * dr, vr = at.width / at.height, e = cr, t = vr, n = mr, r = gr);
                                var i, s;
                                i = n * Math.tan(e / 2),
                                    s = -i,
                                    at.frustum(s * t, i * t, s, i, n, r)
                            },
                            $r.prototype.frustum = function() {
                                throw "Processing.js: frustum() is not supported in 2D mode"
                            },
                            Br.prototype.frustum = function(e, t, n, r, i, s) {
                                Wt = new Vr,
                                    Wt.set(2 * i / (t - e), 0, (t + e) / (t - e), 0, 0, 2 * i / (r - n), (r + n) / (r - n), 0, 0, 0, -(s + i) / (s - i), -(2 * s * i) / (s - i), 0, 0, -1, 0),
                                    e = new Vr,
                                    e.set(Wt),
                                    e.transpose(),
                                    lt.useProgram(bt),
                                    T("projection2d", bt, "uProjection", !1, e.array()),
                                    lt.useProgram(yt),
                                    T("projection3d", yt, "uProjection", !1, e.array()),
                                    lt.useProgram(xt),
                                    T("uProjectionUS", xt, "uProjection", !1, e.array())
                            },
                            at.ortho = function(e, t, n, r, i, s) {
                                0 === arguments.length && (e = 0, t = at.width, n = 0, r = at.height, i = -10, s = 10);
                                var o = 2 / (t - e),
                                    a = 2 / (r - n),
                                    l = -2 / (s - i),
                                    u = -(t + e) / (t - e),
                                    h = -(r + n) / (r - n),
                                    c = -(s + i) / (s - i);
                                Wt = new Vr,
                                    Wt.set(o, 0, 0, u, 0, a, 0, h, 0, 0, l, c, 0, 0, 0, 1),
                                    o = new Vr,
                                    o.set(Wt),
                                    o.transpose(),
                                    lt.useProgram(bt),
                                    T("projection2d", bt, "uProjection", !1, o.array()),
                                    lt.useProgram(yt),
                                    T("projection3d", yt, "uProjection", !1, o.array()),
                                    lt.useProgram(xt),
                                    T("uProjectionUS", xt, "uProjection", !1, o.array())
                            },
                            at.printProjection = function() {
                                Wt.print()
                            },
                            at.printCamera = function() {
                                jt.print()
                            },
                            $r.prototype.box = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.box = function(e, t, n) {
                                t && n || (t = n = e);
                                var r = new Vr;
                                r.scale(e, t, n),
                                    e = new Vr,
                                    e.scale(1, -1, 1),
                                    e.apply(Vt.array()),
                                    e.transpose(),
                                Yt && (lt.useProgram(yt), T("model3d", yt, "uModel", !1, r.array()), T("view3d", yt, "uView", !1, e.array()), lt.enable(lt.POLYGON_OFFSET_FILL), lt.polygonOffset(1, 1), E("color3d", yt, "uColor", Kt), nr > 0 ? (t = new Vr, t.set(e), n = new Vr, n.set(r), t.mult(n), n = new Vr, n.set(t), n.invert(), n.transpose(), T("uNormalTransform3d", yt, "uNormalTransform", !1, n.array()), C("aNormal3d", yt, "aNormal", 3, At)) : _("aNormal3d", yt, "aNormal"), C("aVertex3d", yt, "aVertex", 3, wt), _("aColor3d", yt, "aColor"), _("aTexture3d", yt, "aTexture"), lt.drawArrays(lt.TRIANGLES, 0, Cr.length / 3), lt.disable(lt.POLYGON_OFFSET_FILL)),
                                rn > 0 && Qt && (lt.useProgram(bt), T("uModel2d", bt, "uModel", !1, r.array()), T("uView2d", bt, "uView", !1, e.array()), E("uColor2d", bt, "uColor", en), S("uIsDrawingText2d", bt, "uIsDrawingText", !1), C("vertex2d", bt, "aVertex", 3, Et), _("aTextureCoord2d", bt, "aTextureCoord"), lt.drawArrays(lt.LINES, 0, _r.length / 3))
                            },
                            at.sphereDetail = function(e, t) {
                                var n;
                                if (1 === arguments.length && (e = t = arguments[0]), 3 > e && (e = 3), 2 > t && (t = 2), e !== ir || t !== rr) {
                                    var r = c.SINCOS_LENGTH / e,
                                        i = new m(e),
                                        s = new m(e);
                                    for (n = 0; e > n; n++) i[n] = ur[n * r % c.SINCOS_LENGTH | 0],
                                        s[n] = lr[n * r % c.SINCOS_LENGTH | 0];
                                    n = e * (t - 1) + 2,
                                        r = 0,
                                        sr = new m(n),
                                        or = new m(n),
                                        ar = new m(n);
                                    var o = .5 * c.SINCOS_LENGTH / t,
                                        a = o;
                                    for (n = 1; t > n; n++) {
                                        for (var l = lr[a % c.SINCOS_LENGTH | 0], u = -ur[a % c.SINCOS_LENGTH | 0], h = 0; e > h; h++) sr[r] = i[h] * l,
                                            or[r] = u,
                                            ar[r++] = s[h] * l;
                                        a += o
                                    }
                                    for (ir = e, rr = t, Ht = [], i = 0; ir > i; i++) Ht.push(0),
                                        Ht.push( - 1),
                                        Ht.push(0),
                                        Ht.push(sr[i]),
                                        Ht.push(or[i]),
                                        Ht.push(ar[i]);
                                    for (Ht.push(0), Ht.push( - 1), Ht.push(0), Ht.push(sr[0]), Ht.push(or[0]), Ht.push(ar[0]), o = 0, i = 2; rr > i; i++) {
                                        for (s = n = o, r = o += ir, a = 0; ir > a; a++) Ht.push(sr[s]),
                                            Ht.push(or[s]),
                                            Ht.push(ar[s++]),
                                            Ht.push(sr[r]),
                                            Ht.push(or[r]),
                                            Ht.push(ar[r++]);
                                        s = n,
                                            r = o,
                                            Ht.push(sr[s]),
                                            Ht.push(or[s]),
                                            Ht.push(ar[s]),
                                            Ht.push(sr[r]),
                                            Ht.push(or[r]),
                                            Ht.push(ar[r])
                                    }
                                    for (i = 0; ir > i; i++) r = o + i,
                                        Ht.push(sr[r]),
                                        Ht.push(or[r]),
                                        Ht.push(ar[r]),
                                        Ht.push(0),
                                        Ht.push(1),
                                        Ht.push(0);
                                    Ht.push(sr[o]),
                                        Ht.push(or[o]),
                                        Ht.push(ar[o]),
                                        Ht.push(0),
                                        Ht.push(1),
                                        Ht.push(0),
                                        lt.bindBuffer(lt.ARRAY_BUFFER, Ct),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m(Ht), lt.STATIC_DRAW)
                                }
                            },
                            $r.prototype.sphere = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.sphere = function(e) { (3 > ir || 2 > rr) && at.sphereDetail(30);
                                var t = new Vr;
                                if (t.scale(e, e, e), e = new Vr, e.scale(1, -1, 1), e.apply(Vt.array()), e.transpose(), Yt) {
                                    if (nr > 0) {
                                        var n = new Vr;
                                        n.set(e);
                                        var r = new Vr;
                                        r.set(t),
                                            n.mult(r),
                                            r = new Vr,
                                            r.set(n),
                                            r.invert(),
                                            r.transpose(),
                                            T("uNormalTransform3d", yt, "uNormalTransform", !1, r.array()),
                                            C("aNormal3d", yt, "aNormal", 3, Ct)
                                    } else _("aNormal3d", yt, "aNormal");
                                    lt.useProgram(yt),
                                        _("aTexture3d", yt, "aTexture"),
                                        T("uModel3d", yt, "uModel", !1, t.array()),
                                        T("uView3d", yt, "uView", !1, e.array()),
                                        C("aVertex3d", yt, "aVertex", 3, Ct),
                                        _("aColor3d", yt, "aColor"),
                                        lt.enable(lt.POLYGON_OFFSET_FILL),
                                        lt.polygonOffset(1, 1),
                                        E("uColor3d", yt, "uColor", Kt),
                                        lt.drawArrays(lt.TRIANGLE_STRIP, 0, Ht.length / 3),
                                        lt.disable(lt.POLYGON_OFFSET_FILL)
                                }
                                rn > 0 && Qt && (lt.useProgram(bt), T("uModel2d", bt, "uModel", !1, t.array()), T("uView2d", bt, "uView", !1, e.array()), C("aVertex2d", bt, "aVertex", 3, Ct), _("aTextureCoord2d", bt, "aTextureCoord"), E("uColor2d", bt, "uColor", en), S("uIsDrawingText", bt, "uIsDrawingText", !1), lt.drawArrays(lt.LINE_STRIP, 0, Ht.length / 3))
                            },
                            at.modelX = function(e, t, n) {
                                var r = Vt.array(),
                                    i = zt.array(),
                                    s = r[0] * e + r[1] * t + r[2] * n + r[3],
                                    o = r[4] * e + r[5] * t + r[6] * n + r[7],
                                    a = r[8] * e + r[9] * t + r[10] * n + r[11];
                                return t = r[12] * e + r[13] * t + r[14] * n + r[15],
                                    e = i[0] * s + i[1] * o + i[2] * a + i[3] * t,
                                    i = i[12] * s + i[13] * o + i[14] * a + i[15] * t,
                                    0 !== i ? e / i: e
                            },
                            at.modelY = function(e, t, n) {
                                var r = Vt.array(),
                                    i = zt.array(),
                                    s = r[0] * e + r[1] * t + r[2] * n + r[3],
                                    o = r[4] * e + r[5] * t + r[6] * n + r[7],
                                    a = r[8] * e + r[9] * t + r[10] * n + r[11];
                                return t = r[12] * e + r[13] * t + r[14] * n + r[15],
                                    e = i[4] * s + i[5] * o + i[6] * a + i[7] * t,
                                    i = i[12] * s + i[13] * o + i[14] * a + i[15] * t,
                                    0 !== i ? e / i: e
                            },
                            at.modelZ = function(e, t, n) {
                                var r = Vt.array(),
                                    i = zt.array(),
                                    s = r[0] * e + r[1] * t + r[2] * n + r[3],
                                    o = r[4] * e + r[5] * t + r[6] * n + r[7],
                                    a = r[8] * e + r[9] * t + r[10] * n + r[11];
                                return t = r[12] * e + r[13] * t + r[14] * n + r[15],
                                    e = i[8] * s + i[9] * o + i[10] * a + i[11] * t,
                                    i = i[12] * s + i[13] * o + i[14] * a + i[15] * t,
                                    0 !== i ? e / i: e
                            },
                            $r.prototype.ambient = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.ambient = function(e, t, n) {
                                lt.useProgram(yt),
                                    S("uUsingMat3d", yt, "uUsingMat", !0),
                                    e = at.color(e, t, n),
                                    E("uMaterialAmbient3d", yt, "uMaterialAmbient", at.color.toGLArray(e).slice(0, 3))
                            },
                            $r.prototype.emissive = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.emissive = function(e, t, n) {
                                lt.useProgram(yt),
                                    S("uUsingMat3d", yt, "uUsingMat", !0),
                                    e = at.color(e, t, n),
                                    E("uMaterialEmissive3d", yt, "uMaterialEmissive", at.color.toGLArray(e).slice(0, 3))
                            },
                            $r.prototype.shininess = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.shininess = function(e) {
                                lt.useProgram(yt),
                                    S("uUsingMat3d", yt, "uUsingMat", !0),
                                    E("uShininess3d", yt, "uShininess", e)
                            },
                            $r.prototype.specular = Fr.prototype.a3DOnlyFunction,
                            Br.prototype.specular = function(e, t, n) {
                                lt.useProgram(yt),
                                    S("uUsingMat3d", yt, "uUsingMat", !0),
                                    e = at.color(e, t, n),
                                    E("uMaterialSpecular3d", yt, "uMaterialSpecular", at.color.toGLArray(e).slice(0, 3))
                            },
                            at.screenX = function(e, t, n) {
                                var r = Vt.array();
                                if (16 === r.length) {
                                    var i = r[0] * e + r[1] * t + r[2] * n + r[3],
                                        s = r[4] * e + r[5] * t + r[6] * n + r[7],
                                        o = r[8] * e + r[9] * t + r[10] * n + r[11];
                                    return t = r[12] * e + r[13] * t + r[14] * n + r[15],
                                        n = Wt.array(),
                                        e = n[0] * i + n[1] * s + n[2] * o + n[3] * t,
                                        i = n[12] * i + n[13] * s + n[14] * o + n[15] * t,
                                    0 !== i && (e /= i),
                                    at.width * (1 + e) / 2
                                }
                                return Vt.multX(e, t)
                            },
                            at.screenY = function(e, t, n) {
                                var r = Vt.array();
                                if (16 === r.length) {
                                    var i = r[0] * e + r[1] * t + r[2] * n + r[3],
                                        s = r[4] * e + r[5] * t + r[6] * n + r[7],
                                        o = r[8] * e + r[9] * t + r[10] * n + r[11];
                                    return t = r[12] * e + r[13] * t + r[14] * n + r[15],
                                        n = Wt.array(),
                                        e = n[4] * i + n[5] * s + n[6] * o + n[7] * t,
                                        i = n[12] * i + n[13] * s + n[14] * o + n[15] * t,
                                    0 !== i && (e /= i),
                                    at.height * (1 + e) / 2
                                }
                                return Vt.multY(e, t)
                            },
                            at.screenZ = function(e, t, n) {
                                var r = Vt.array();
                                if (16 !== r.length) return 0;
                                var i = Wt.array(),
                                    s = r[0] * e + r[1] * t + r[2] * n + r[3],
                                    o = r[4] * e + r[5] * t + r[6] * n + r[7],
                                    a = r[8] * e + r[9] * t + r[10] * n + r[11];
                                return t = r[12] * e + r[13] * t + r[14] * n + r[15],
                                    e = i[8] * s + i[9] * o + i[10] * a + i[11] * t,
                                    i = i[12] * s + i[13] * o + i[14] * a + i[15] * t,
                                0 !== i && (e /= i),
                                (e + 1) / 2
                            },
                            Fr.prototype.fill = function() {
                                var e = at.color.apply(this, arguments);
                                e === Zt && Yt || (Yt = !0, Zt = e)
                            },
                            $r.prototype.fill = function() {
                                Fr.prototype.fill.apply(this, arguments),
                                    Jt = !0
                            },
                            Br.prototype.fill = function() {
                                Fr.prototype.fill.apply(this, arguments),
                                    Kt = at.color.toGLArray(Zt)
                            },
                            at.noFill = function() {
                                Yt = !1
                            },
                            Fr.prototype.stroke = function() {
                                var e = at.color.apply(this, arguments);
                                e === tn && Qt || (Qt = !0, tn = e)
                            },
                            $r.prototype.stroke = function() {
                                Fr.prototype.stroke.apply(this, arguments),
                                    nn = !0
                            },
                            Br.prototype.stroke = function() {
                                Fr.prototype.stroke.apply(this, arguments),
                                    en = at.color.toGLArray(tn)
                            },
                            at.noStroke = function() {
                                Qt = !1
                            },
                            Fr.prototype.strokeWeight = function(e) {
                                rn = e
                            },
                            $r.prototype.strokeWeight = function(e) {
                                Fr.prototype.strokeWeight.apply(this, arguments),
                                    lt.lineWidth = e
                            },
                            Br.prototype.strokeWeight = function(e) {
                                Fr.prototype.strokeWeight.apply(this, arguments),
                                    lt.useProgram(bt),
                                    E("pointSize2d", bt, "uPointSize", e),
                                    lt.useProgram(xt),
                                    E("pointSizeUnlitShape", xt, "uPointSize", e),
                                    lt.lineWidth(e)
                            },
                            at.strokeCap = function(e) {
                                ht.$ensureContext().lineCap = e
                            },
                            at.strokeJoin = function(e) {
                                ht.$ensureContext().lineJoin = e
                            },
                            $r.prototype.smooth = function() {
                                on = !0;
                                var e = it.style;
                                e.setProperty("image-rendering", "optimizeQuality", "important"),
                                    e.setProperty("-ms-interpolation-mode", "bicubic", "important"),
                                lt.hasOwnProperty("mozImageSmoothingEnabled") && (lt.mozImageSmoothingEnabled = !0)
                            },
                            Br.prototype.smooth = function() {
                                on = !0
                            },
                            $r.prototype.noSmooth = function() {
                                on = !1;
                                var e = it.style;
                                e.setProperty("image-rendering", "optimizeSpeed", "important"),
                                    e.setProperty("image-rendering", "-moz-crisp-edges", "important"),
                                    e.setProperty("image-rendering", "-webkit-optimize-contrast", "important"),
                                    e.setProperty("image-rendering", "optimize-contrast", "important"),
                                    e.setProperty("-ms-interpolation-mode", "nearest-neighbor", "important"),
                                lt.hasOwnProperty("mozImageSmoothingEnabled") && (lt.mozImageSmoothingEnabled = !1)
                            },
                            Br.prototype.noSmooth = function() {
                                on = !1
                            },
                            $r.prototype.point = function(e, t) {
                                Qt && (e = Math.round(e), t = Math.round(t), lt.fillStyle = at.color.toString(tn), Jt = !0, rn > 1 ? (lt.beginPath(), lt.arc(e, t, rn / 2, 0, c.TWO_PI, !1), lt.fill()) : lt.fillRect(e, t, 1, 1))
                            },
                            Br.prototype.point = function(e, t, n) {
                                var r = new Vr;
                                r.translate(e, t, n || 0),
                                    r.transpose(),
                                    e = new Vr,
                                    e.scale(1, -1, 1),
                                    e.apply(Vt.array()),
                                    e.transpose(),
                                    lt.useProgram(bt),
                                    T("uModel2d", bt, "uModel", !1, r.array()),
                                    T("uView2d", bt, "uView", !1, e.array()),
                                rn > 0 && Qt && (E("uColor2d", bt, "uColor", en), S("uIsDrawingText2d", bt, "uIsDrawingText", !1), S("uSmooth2d", bt, "uSmooth", on), C("aVertex2d", bt, "aVertex", 3, Lt), _("aTextureCoord2d", bt, "aTextureCoord"), lt.drawArrays(lt.POINTS, 0, 1))
                            },
                            at.beginShape = function(e) {
                                yn = e,
                                    yr = []
                            },
                            $r.prototype.vertex = function(e, t, n) {
                                var r = [];
                                Er && (Er = !1),
                                    r.isVert = !0,
                                    r[0] = e,
                                    r[1] = t,
                                    r[2] = 0,
                                    r[3] = 0,
                                    r[4] = 0,
                                    r[5] = Zt,
                                    r[6] = tn,
                                    yr.push(r),
                                n && (yr[yr.length - 1].moveTo = n)
                            },
                            Br.prototype.vertex = function(e, n, r, i, s) {
                                var o = [];
                                Er && (Er = !1),
                                    o.isVert = !0,
                                s === t && Hn && (s = i, i = r, r = 0),
                                i !== t && s !== t && (Bn === c.IMAGE && (i /= Fn, s /= $n), i = i > 1 ? 1 : i, i = 0 > i ? 0 : i, s = s > 1 ? 1 : s, s = 0 > s ? 0 : s),
                                    o[0] = e,
                                    o[1] = n,
                                    o[2] = r || 0,
                                    o[3] = i || 0,
                                    o[4] = s || 0,
                                    o[5] = Kt[0],
                                    o[6] = Kt[1],
                                    o[7] = Kt[2],
                                    o[8] = Kt[3],
                                    o[9] = en[0],
                                    o[10] = en[1],
                                    o[11] = en[2],
                                    o[12] = en[3],
                                    o[13] = cn,
                                    o[14] = fn,
                                    o[15] = pn,
                                    yr.push(o)
                            };
                            var Ur = function(e, t) {
                                    var n = new Vr;
                                    n.scale(1, -1, 1),
                                        n.apply(Vt.array()),
                                        n.transpose(),
                                        lt.useProgram(xt),
                                        T("uViewUS", xt, "uView", !1, n.array()),
                                        S("uSmoothUS", xt, "uSmooth", on),
                                        C("aVertexUS", xt, "aVertex", 3, Lt),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m(e), lt.STREAM_DRAW),
                                        C("aColorUS", xt, "aColor", 4, Mt),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m(t), lt.STREAM_DRAW),
                                        lt.drawArrays(lt.POINTS, 0, e.length / 3)
                                },
                                Xr = function(e, t, n) {
                                    t = "LINES" === t ? lt.LINES: "LINE_LOOP" === t ? lt.LINE_LOOP: lt.LINE_STRIP;
                                    var r = new Vr;
                                    r.scale(1, -1, 1),
                                        r.apply(Vt.array()),
                                        r.transpose(),
                                        lt.useProgram(xt),
                                        T("uViewUS", xt, "uView", !1, r.array()),
                                        C("aVertexUS", xt, "aVertex", 3, _t),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m(e), lt.STREAM_DRAW),
                                        C("aColorUS", xt, "aColor", 4, Rt),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m(n), lt.STREAM_DRAW),
                                        lt.drawArrays(t, 0, e.length / 3)
                                },
                                qr = function(e, t, n, r) {
                                    t = "TRIANGLES" === t ? lt.TRIANGLES: "TRIANGLE_FAN" === t ? lt.TRIANGLE_FAN: lt.TRIANGLE_STRIP;
                                    var i = new Vr;
                                    i.scale(1, -1, 1),
                                        i.apply(Vt.array()),
                                        i.transpose(),
                                        lt.useProgram(yt),
                                        T("model3d", yt, "uModel", !1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
                                        T("view3d", yt, "uView", !1, i.array()),
                                        lt.enable(lt.POLYGON_OFFSET_FILL),
                                        lt.polygonOffset(1, 1),
                                        E("color3d", yt, "uColor", [ - 1, 0, 0, 0]),
                                        C("vertex3d", yt, "aVertex", 3, Pt),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m(e), lt.STREAM_DRAW),
                                    Hn && null !== Ln && Nn(n),
                                        C("aColor3d", yt, "aColor", 4, Mt),
                                        lt.bufferData(lt.ARRAY_BUFFER, new m(n), lt.STREAM_DRAW),
                                        _("aNormal3d", yt, "aNormal"),
                                    Hn && (S("uUsingTexture3d", yt, "uUsingTexture", Hn), C("aTexture3d", yt, "aTexture", 2, Nt), lt.bufferData(lt.ARRAY_BUFFER, new m(r), lt.STREAM_DRAW)),
                                        lt.drawArrays(t, 0, e.length / 3),
                                        lt.disable(lt.POLYGON_OFFSET_FILL)
                                };
                            $r.prototype.endShape = function(e) {
                                if (0 !== yr.length) { (e = e === c.CLOSE) && yr.push(yr[0]);
                                    var n, r = [],
                                        i = [],
                                        s = [],
                                        o = [];
                                    Er = !0;
                                    var a, l, u = yr.length;
                                    for (a = 0; u > a; a++) for (n = yr[a], l = 0; 3 > l; l++) r.push(n[l]);
                                    for (a = 0; u > a; a++) for (n = yr[a], l = 5; 9 > l; l++) i.push(n[l]);
                                    for (a = 0; u > a; a++) for (n = yr[a], l = 9; 13 > l; l++) s.push(n[l]);
                                    for (a = 0; u > a; a++) n = yr[a],
                                        o.push(n[3]),
                                        o.push(n[4]);
                                    if (!wr || yn !== c.POLYGON && yn !== t) if (!Ar || yn !== c.POLYGON && yn !== t) if (yn === c.POINTS) for (a = 0; u > a; a++) n = yr[a],
                                    Qt && at.stroke(n[6]),
                                        at.point(n[0], n[1]);
                                    else if (yn === c.LINES) for (a = 0; u > a + 1; a += 2) n = yr[a],
                                    Qt && at.stroke(yr[a + 1][6]),
                                        at.line(n[0], n[1], yr[a + 1][0], yr[a + 1][1]);
                                    else if (yn === c.TRIANGLES) for (a = 0; u > a + 2; a += 3) n = yr[a],
                                        lt.beginPath(),
                                        lt.moveTo(n[0], n[1]),
                                        lt.lineTo(yr[a + 1][0], yr[a + 1][1]),
                                        lt.lineTo(yr[a + 2][0], yr[a + 2][1]),
                                        lt.lineTo(n[0], n[1]),
                                    Yt && (at.fill(yr[a + 2][5]), F()),
                                    Qt && (at.stroke(yr[a + 2][6]), $()),
                                        lt.closePath();
                                    else if (yn === c.TRIANGLE_STRIP) for (a = 0; u > a + 1; a++) n = yr[a],
                                        lt.beginPath(),
                                        lt.moveTo(yr[a + 1][0], yr[a + 1][1]),
                                        lt.lineTo(n[0], n[1]),
                                    Qt && at.stroke(yr[a + 1][6]),
                                    Yt && at.fill(yr[a + 1][5]),
                                    u > a + 2 && (lt.lineTo(yr[a + 2][0], yr[a + 2][1]), Qt && at.stroke(yr[a + 2][6]), Yt && at.fill(yr[a + 2][5])),
                                        B();
                                    else if (yn === c.TRIANGLE_FAN) {
                                        if (u > 2) for (lt.beginPath(), lt.moveTo(yr[0][0], yr[0][1]), lt.lineTo(yr[1][0], yr[1][1]), lt.lineTo(yr[2][0], yr[2][1]), Yt && (at.fill(yr[2][5]), F()), Qt && (at.stroke(yr[2][6]), $()), lt.closePath(), a = 3; u > a; a++) n = yr[a],
                                            lt.beginPath(),
                                            lt.moveTo(yr[0][0], yr[0][1]),
                                            lt.lineTo(yr[a - 1][0], yr[a - 1][1]),
                                            lt.lineTo(n[0], n[1]),
                                        Yt && (at.fill(n[5]), F()),
                                        Qt && (at.stroke(n[6]), $()),
                                            lt.closePath()
                                    } else if (yn === c.QUADS) for (a = 0; u > a + 3; a += 4) {
                                        for (n = yr[a], lt.beginPath(), lt.moveTo(n[0], n[1]), l = 1; 4 > l; l++) lt.lineTo(yr[a + l][0], yr[a + l][1]);
                                        lt.lineTo(n[0], n[1]),
                                        Yt && (at.fill(yr[a + 3][5]), F()),
                                        Qt && (at.stroke(yr[a + 3][6]), $()),
                                            lt.closePath()
                                    } else if (yn === c.QUAD_STRIP) {
                                        if (u > 3) for (a = 0; u > a + 1; a += 2) n = yr[a],
                                            lt.beginPath(),
                                            u > a + 3 ? (lt.moveTo(yr[a + 2][0], yr[a + 2][1]), lt.lineTo(n[0], n[1]), lt.lineTo(yr[a + 1][0], yr[a + 1][1]), lt.lineTo(yr[a + 3][0], yr[a + 3][1]), Yt && at.fill(yr[a + 3][5]), Qt && at.stroke(yr[a + 3][6])) : (lt.moveTo(n[0], n[1]), lt.lineTo(yr[a + 1][0], yr[a + 1][1])),
                                            B()
                                    } else {
                                        for (lt.beginPath(), lt.moveTo(yr[0][0], yr[0][1]), a = 1; u > a; a++) n = yr[a],
                                        n.isVert && (n.moveTo ? lt.moveTo(n[0], n[1]) : lt.lineTo(n[0], n[1]));
                                        B()
                                    } else {
                                        for (lt.beginPath(), a = 0; u > a; a++) n = yr[a],
                                            yr[a].isVert ? yr[a].moveTo ? lt.moveTo(n[0], n[1]) : lt.lineTo(n[0], n[1]) : lt.bezierCurveTo(yr[a][0], yr[a][1], yr[a][2], yr[a][3], yr[a][4], yr[a][5]);
                                        B()
                                    } else if (u > 3) {
                                        for (r = [], i = 1 - bn, lt.beginPath(), lt.moveTo(yr[1][0], yr[1][1]), a = 1; u > a + 2; a++) n = yr[a],
                                            r[0] = [n[0], n[1]],
                                            r[1] = [n[0] + (i * yr[a + 1][0] - i * yr[a - 1][0]) / 6, n[1] + (i * yr[a + 1][1] - i * yr[a - 1][1]) / 6],
                                            r[2] = [yr[a + 1][0] + (i * yr[a][0] - i * yr[a + 2][0]) / 6, yr[a + 1][1] + (i * yr[a][1] - i * yr[a + 2][1]) / 6],
                                            r[3] = [yr[a + 1][0], yr[a + 1][1]],
                                            lt.bezierCurveTo(r[1][0], r[1][1], r[2][0], r[2][1], r[3][0], r[3][1]);
                                        B()
                                    }
                                    Ar = wr = !1,
                                        br = [],
                                        xr = 0,
                                    e && yr.pop()
                                }
                            },
                                Br.prototype.endShape = function(e) {
                                    if (0 !== yr.length) {
                                        var n = e === c.CLOSE;
                                        e = [];
                                        var r, i = [],
                                            s = [],
                                            o = [],
                                            a = [];
                                        Er = !0;
                                        var l, u, h = yr.length;
                                        for (l = 0; h > l; l++) for (r = yr[l], u = 0; 3 > u; u++) i.push(r[u]);
                                        for (l = 0; h > l; l++) for (r = yr[l], u = 5; 9 > u; u++) s.push(r[u]);
                                        for (l = 0; h > l; l++) for (r = yr[l], u = 9; 13 > u; u++) o.push(r[u]);
                                        for (l = 0; h > l; l++) r = yr[l],
                                            a.push(r[3]),
                                            a.push(r[4]);
                                        if (n) {
                                            for (i.push(yr[0][0]), i.push(yr[0][1]), i.push(yr[0][2]), l = 5; 9 > l; l++) s.push(yr[0][l]);
                                            for (l = 9; 13 > l; l++) o.push(yr[0][l]);
                                            a.push(yr[0][3]),
                                                a.push(yr[0][4])
                                        }
                                        if (!wr || yn !== c.POLYGON && yn !== t) if (!Ar || yn !== c.POLYGON && yn !== t) {
                                            if (yn === c.POINTS) {
                                                for (l = 0; h > l; l++) for (r = yr[l], u = 0; 3 > u; u++) e.push(r[u]);
                                                Ur(e, o)
                                            } else if (yn === c.LINES) {
                                                for (l = 0; h > l; l++) for (r = yr[l], u = 0; 3 > u; u++) e.push(r[u]);
                                                for (l = 0; h > l; l++) for (r = yr[l], u = 5; 9 > u; u++) s.push(r[u]);
                                                Xr(e, "LINES", o)
                                            } else if (yn === c.TRIANGLES) {
                                                if (h > 2) for (l = 0; h > l + 2; l += 3) {
                                                    for (i = [], a = [], e = [], s = [], o = [], u = 0; 3 > u; u++) for (n = 0; 3 > n; n++) e.push(yr[l + u][n]),
                                                        i.push(yr[l + u][n]);
                                                    for (u = 0; 3 > u; u++) for (n = 3; 5 > n; n++) a.push(yr[l + u][n]);
                                                    for (u = 0; 3 > u; u++) for (n = 5; 9 > n; n++) s.push(yr[l + u][n]),
                                                        o.push(yr[l + u][n + 4]);
                                                    Qt && Xr(e, "LINE_LOOP", o),
                                                    (Yt || Hn) && qr(i, "TRIANGLES", s, a)
                                                }
                                            } else if (yn === c.TRIANGLE_STRIP) {
                                                if (h > 2) for (l = 0; h > l + 2; l++) {
                                                    for (e = [], i = [], o = [], s = [], a = [], u = 0; 3 > u; u++) for (n = 0; 3 > n; n++) e.push(yr[l + u][n]),
                                                        i.push(yr[l + u][n]);
                                                    for (u = 0; 3 > u; u++) for (n = 3; 5 > n; n++) a.push(yr[l + u][n]);
                                                    for (u = 0; 3 > u; u++) for (n = 5; 9 > n; n++) o.push(yr[l + u][n + 4]),
                                                        s.push(yr[l + u][n]); (Yt || Hn) && qr(i, "TRIANGLE_STRIP", s, a),
                                                    Qt && Xr(e, "LINE_LOOP", o)
                                                }
                                            } else if (yn === c.TRIANGLE_FAN) {
                                                if (h > 2) {
                                                    for (l = 0; 3 > l; l++) for (r = yr[l], u = 0; 3 > u; u++) e.push(r[u]);
                                                    for (l = 0; 3 > l; l++) for (r = yr[l], u = 9; 13 > u; u++) o.push(r[u]);
                                                    for (Qt && Xr(e, "LINE_LOOP", o), l = 2; h > l + 1; l++) {
                                                        for (e = [], o = [], e.push(yr[0][0]), e.push(yr[0][1]), e.push(yr[0][2]), o.push(yr[0][9]), o.push(yr[0][10]), o.push(yr[0][11]), o.push(yr[0][12]), u = 0; 2 > u; u++) for (n = 0; 3 > n; n++) e.push(yr[l + u][n]);
                                                        for (u = 0; 2 > u; u++) for (n = 9; 13 > n; n++) o.push(yr[l + u][n]);
                                                        Qt && Xr(e, "LINE_STRIP", o)
                                                    } (Yt || Hn) && qr(i, "TRIANGLE_FAN", s, a)
                                                }
                                            } else if (yn === c.QUADS) for (l = 0; h > l + 3; l += 4) {
                                                for (e = [], u = 0; 4 > u; u++) for (r = yr[l + u], n = 0; 3 > n; n++) e.push(r[n]);
                                                if (Qt && Xr(e, "LINE_LOOP", o), Yt) {
                                                    for (i = [], s = [], a = [], u = 0; 3 > u; u++) i.push(yr[l][u]);
                                                    for (u = 5; 9 > u; u++) s.push(yr[l][u]);
                                                    for (u = 0; 3 > u; u++) i.push(yr[l + 1][u]);
                                                    for (u = 5; 9 > u; u++) s.push(yr[l + 1][u]);
                                                    for (u = 0; 3 > u; u++) i.push(yr[l + 3][u]);
                                                    for (u = 5; 9 > u; u++) s.push(yr[l + 3][u]);
                                                    for (u = 0; 3 > u; u++) i.push(yr[l + 2][u]);
                                                    for (u = 5; 9 > u; u++) s.push(yr[l + 2][u]);
                                                    Hn && (a.push(yr[l + 0][3]), a.push(yr[l + 0][4]), a.push(yr[l + 1][3]), a.push(yr[l + 1][4]), a.push(yr[l + 3][3]), a.push(yr[l + 3][4]), a.push(yr[l + 2][3]), a.push(yr[l + 2][4])),
                                                        qr(i, "TRIANGLE_STRIP", s, a)
                                                }
                                            } else if (yn === c.QUAD_STRIP) {
                                                if (h > 3) {
                                                    for (l = 0; 2 > l; l++) for (r = yr[l], u = 0; 3 > u; u++) e.push(r[u]);
                                                    for (l = 0; 2 > l; l++) for (r = yr[l], u = 9; 13 > u; u++) o.push(r[u]);
                                                    for (Xr(e, "LINE_STRIP", o), h > 4 && h % 2 > 0 && (i.splice(i.length - 3), yr.pop()), l = 0; h > l + 3; l += 2) {
                                                        for (e = [], o = [], u = 0; 3 > u; u++) e.push(yr[l + 1][u]);
                                                        for (u = 0; 3 > u; u++) e.push(yr[l + 3][u]);
                                                        for (u = 0; 3 > u; u++) e.push(yr[l + 2][u]);
                                                        for (u = 0; 3 > u; u++) e.push(yr[l + 0][u]);
                                                        for (u = 9; 13 > u; u++) o.push(yr[l + 1][u]);
                                                        for (u = 9; 13 > u; u++) o.push(yr[l + 3][u]);
                                                        for (u = 9; 13 > u; u++) o.push(yr[l + 2][u]);
                                                        for (u = 9; 13 > u; u++) o.push(yr[l + 0][u]);
                                                        Qt && Xr(e, "LINE_STRIP", o)
                                                    } (Yt || Hn) && qr(i, "TRIANGLE_LIST", s, a)
                                                }
                                            } else if (1 === h) {
                                                for (u = 0; 3 > u; u++) e.push(yr[0][u]);
                                                for (u = 9; 13 > u; u++) o.push(yr[0][u]);
                                                Ur(e, o)
                                            } else {
                                                for (l = 0; h > l; l++) {
                                                    for (r = yr[l], u = 0; 3 > u; u++) e.push(r[u]);
                                                    for (u = 5; 9 > u; u++) o.push(r[u])
                                                }
                                                Qt && n ? Xr(e, "LINE_LOOP", o) : Qt && !n && Xr(e, "LINE_STRIP", o),
                                                (Yt || Hn) && qr(i, "TRIANGLE_FAN", s, a)
                                            }
                                            Hn = !1,
                                                lt.useProgram(yt),
                                                S("usingTexture3d", yt, "uUsingTexture", Hn)
                                        } else e = i,
                                            e.splice(e.length - 3),
                                            o.splice(o.length - 4),
                                        Qt && Xr(e, null, o),
                                        Yt && qr(i, "TRIANGLES", s);
                                        else Qt && Xr(i, null, o),
                                        Yt && qr(i, null, s);
                                        Ar = wr = !1,
                                            br = [],
                                            xr = 0
                                    }
                                };
                            var Wr = function(e, t) {
                                    var n = 1 / e,
                                        r = n * n,
                                        i = r * n;
                                    t.set(0, 0, 0, 1, i, r, n, 0, 6 * i, 2 * r, 0, 0, 6 * i, 0, 0, 0)
                                },
                                Yr = function() {
                                    dt || (ft = new Vr, dt = new Vr, wn = !0);
                                    var e = bn;
                                    ft.set((e - 1) / 2, (e + 3) / 2, ( - 3 - e) / 2, (1 - e) / 2, 1 - e, ( - 5 - e) / 2, e + 2, (e - 1) / 2, (e - 1) / 2, 0, (1 - e) / 2, 0, 0, 1, 0, 0),
                                        Wr(xn, dt),
                                    gt || (pt = new Vr),
                                        pt.set(ft),
                                        pt.preApply(gt),
                                        dt.apply(ft)
                                };
                            $r.prototype.bezierVertex = function() {
                                Ar = !0;
                                var e = [];
                                if (Er) throw "vertex() must be used at least once before calling bezierVertex()";
                                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                yr.push(e),
                                    yr[yr.length - 1].isVert = !1
                            },
                                Br.prototype.bezierVertex = function() {
                                    if (Ar = !0, Er) throw "vertex() must be used at least once before calling bezierVertex()";
                                    if (9 === arguments.length) {
                                        mt === t && (mt = new Vr);
                                        var e = yr.length - 1;
                                        Wr(En, mt),
                                            mt.apply(vt);
                                        for (var n = mt.array(), r = yr[e][0], i = yr[e][1], e = yr[e][2], s = n[4] * r + n[5] * arguments[0] + n[6] * arguments[3] + n[7] * arguments[6], o = n[8] * r + n[9] * arguments[0] + n[10] * arguments[3] + n[11] * arguments[6], a = n[12] * r + n[13] * arguments[0] + n[14] * arguments[3] + n[15] * arguments[6], l = n[4] * i + n[5] * arguments[1] + n[6] * arguments[4] + n[7] * arguments[7], u = n[8] * i + n[9] * arguments[1] + n[10] * arguments[4] + n[11] * arguments[7], h = n[12] * i + n[13] * arguments[1] + n[14] * arguments[4] + n[15] * arguments[7], c = n[4] * e + n[5] * arguments[2] + n[6] * arguments[5] + n[7] * arguments[8], f = n[8] * e + n[9] * arguments[2] + n[10] * arguments[5] + n[11] * arguments[8], n = n[12] * e + n[13] * arguments[2] + n[14] * arguments[5] + n[15] * arguments[8], p = 0; En > p; p++) r += s,
                                            s += o,
                                            o += a,
                                            i += l,
                                            l += u,
                                            u += h,
                                            e += c,
                                            c += f,
                                            f += n,
                                            at.vertex(r, i, e);
                                        at.vertex(arguments[6], arguments[7], arguments[8])
                                    }
                                },
                                at.texture = function(e) {
                                    var t = ht.$ensureContext();
                                    if (e.__texture) t.bindTexture(t.TEXTURE_2D, e.__texture);
                                    else {
                                        if ("canvas" === e.localName) t.bindTexture(t.TEXTURE_2D, kt),
                                            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e),
                                            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                            t.generateMipmap(t.TEXTURE_2D);
                                        else {
                                            var n, r = t.createTexture(),
                                                i = u.createElement("canvas"),
                                                s = i.getContext("2d");
                                            if (e.width & 0 === e.width - 1) i.width = e.width;
                                            else {
                                                for (n = 1; n < e.width;) n *= 2;
                                                i.width = n
                                            }
                                            if (e.height & 0 === e.height - 1) i.height = e.height;
                                            else {
                                                for (n = 1; n < e.height;) n *= 2;
                                                i.height = n
                                            }
                                            s.drawImage(e.sourceImg, 0, 0, e.width, e.height, 0, 0, i.width, i.height),
                                                t.bindTexture(t.TEXTURE_2D, r),
                                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR),
                                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, i),
                                                t.generateMipmap(t.TEXTURE_2D),
                                                e.__texture = r
                                        }
                                        Fn = e.width,
                                            $n = e.height
                                    }
                                    Hn = !0,
                                        t.useProgram(yt),
                                        S("usingTexture3d", yt, "uUsingTexture", Hn)
                                },
                                at.textureMode = function(e) {
                                    Bn = e
                                },
                                $r.prototype.curveVertex = function(e, t) {
                                    wr = !0,
                                        at.vertex(e, t)
                                },
                                Br.prototype.curveVertex = function(e, t, n) {
                                    wr = !0,
                                    wn || Yr();
                                    var r = [];
                                    if (r[0] = e, r[1] = t, r[2] = n, br.push(r), xr++, xr > 3) {
                                        var i = br[xr - 4][0],
                                            s = br[xr - 4][1],
                                            o = br[xr - 4][2],
                                            a = br[xr - 3][0],
                                            l = br[xr - 3][1],
                                            u = br[xr - 3][2],
                                            h = br[xr - 2][0],
                                            c = br[xr - 2][1],
                                            f = br[xr - 2][2],
                                            p = br[xr - 1][0],
                                            d = br[xr - 1][1],
                                            m = br[xr - 1][2];
                                        e = a,
                                            t = l,
                                            n = u;
                                        var g = dt.array(),
                                            r = g[4] * i + g[5] * a + g[6] * h + g[7] * p,
                                            v = g[8] * i + g[9] * a + g[10] * h + g[11] * p,
                                            i = g[12] * i + g[13] * a + g[14] * h + g[15] * p,
                                            a = g[4] * s + g[5] * l + g[6] * c + g[7] * d,
                                            h = g[8] * s + g[9] * l + g[10] * c + g[11] * d,
                                            s = g[12] * s + g[13] * l + g[14] * c + g[15] * d,
                                            l = g[4] * o + g[5] * u + g[6] * f + g[7] * m,
                                            c = g[8] * o + g[9] * u + g[10] * f + g[11] * m,
                                            o = g[12] * o + g[13] * u + g[14] * f + g[15] * m;
                                        for (at.vertex(e, t, n), u = 0; xn > u; u++) e += r,
                                            r += v,
                                            v += i,
                                            t += a,
                                            a += h,
                                            h += s,
                                            n += l,
                                            l += c,
                                            c += o,
                                            at.vertex(e, t, n)
                                    }
                                },
                                $r.prototype.curve = function(e, t, n, r, i, s, o, a) {
                                    at.beginShape(),
                                        at.curveVertex(e, t),
                                        at.curveVertex(n, r),
                                        at.curveVertex(i, s),
                                        at.curveVertex(o, a),
                                        at.endShape()
                                },
                                Br.prototype.curve = function(e, n, r, i, s, o, a, l, u, h, c, f) {
                                    f !== t ? (at.beginShape(), at.curveVertex(e, n, r), at.curveVertex(i, s, o), at.curveVertex(a, l, u), at.curveVertex(h, c, f)) : (at.beginShape(), at.curveVertex(e, n), at.curveVertex(r, i), at.curveVertex(s, o), at.curveVertex(a, l)),
                                        at.endShape()
                                },
                                at.curveTightness = function(e) {
                                    bn = e
                                },
                                at.curveDetail = function(e) {
                                    xn = e,
                                        Yr()
                                },
                                at.rectMode = function(e) {
                                    un = e
                                },
                                at.imageMode = function(e) {
                                    switch (e) {
                                        case c.CORNER:
                                            Dr = kr;
                                            break;
                                        case c.CORNERS:
                                            Dr = Ir;
                                            break;
                                        case c.CENTER:
                                            Dr = Or;
                                            break;
                                        default:
                                            throw "Invalid imageMode"
                                    }
                                },
                                at.ellipseMode = function(e) {
                                    hn = e
                                },
                                at.arc = function(e, t, n, r, i, s) {
                                    if (! (0 >= n || i > s)) {
                                        for (hn === c.CORNERS ? (n -= e, r -= t) : hn === c.RADIUS ? (e -= n, t -= r, n *= 2, r *= 2) : hn === c.CENTER && (e -= n / 2, t -= r / 2); 0 > i;) i += c.TWO_PI,
                                            s += c.TWO_PI;
                                        s - i > c.TWO_PI && (i = 0, s = c.TWO_PI),
                                            n /= 2,
                                            r /= 2,
                                            e += n,
                                            t += r,
                                            i = 0 | .5 + 2 * i * at.RAD_TO_DEG,
                                            s = 0 | .5 + 2 * s * at.RAD_TO_DEG;
                                        var o, a;
                                        if (Yt) {
                                            var l = Qt;
                                            for (Qt = !1, at.beginShape(), at.vertex(e, t), o = i; s >= o; o++) a = o % c.SINCOS_LENGTH,
                                                at.vertex(e + ur[a] * n, t + lr[a] * r);
                                            at.endShape(c.CLOSE),
                                                Qt = l
                                        }
                                        if (Qt) {
                                            for (l = Yt, Yt = !1, at.beginShape(), o = i; s >= o; o++) a = o % c.SINCOS_LENGTH,
                                                at.vertex(e + ur[a] * n, t + lr[a] * r);
                                            at.endShape(),
                                                Yt = l
                                        }
                                    }
                                },
                                $r.prototype.line = function(e, n, r, i) {
                                    if (Qt) if (e = Math.round(e), r = Math.round(r), n = Math.round(n), i = Math.round(i), e === r && n === i) at.point(e, n);
                                    else {
                                        for (var s = t,
                                                 o = t,
                                                 a = !0,
                                                 s = Vt.array(), l = [1, 0, 0, 0, 1, 0], u = 0; 6 > u && a; u++) a = s[u] === l[u];
                                        a && (e === r ? (n > i && (s = n, n = i, i = s), i++, 1 === rn % 2 && lt.translate(.5, 0)) : n === i && (e > r && (s = e, e = r, r = s), r++, 1 === rn % 2 && lt.translate(0, .5)), 1 === rn && (o = lt.lineCap, lt.lineCap = "butt")),
                                            lt.beginPath(),
                                            lt.moveTo(e || 0, n || 0),
                                            lt.lineTo(r || 0, i || 0),
                                            $(),
                                        a && (e === r && 1 === rn % 2 ? lt.translate( - .5, 0) : n === i && 1 === rn % 2 && lt.translate(0, -.5), 1 === rn && (lt.lineCap = o))
                                    }
                                },
                                Br.prototype.line = function(e, n, r, i, s, o) { (s === t || o === t) && (o = 0, s = i, i = r, r = 0),
                                    e === i && n === s && r === o ? at.point(e, n, r) : (e = [e, n, r, i, s, o], n = new Vr, n.scale(1, -1, 1), n.apply(Vt.array()), n.transpose(), rn > 0 && Qt && (lt.useProgram(bt), T("uModel2d", bt, "uModel", !1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), T("uView2d", bt, "uView", !1, n.array()), E("uColor2d", bt, "uColor", en), S("uIsDrawingText", bt, "uIsDrawingText", !1), C("aVertex2d", bt, "aVertex", 3, _t), _("aTextureCoord2d", bt, "aTextureCoord"), lt.bufferData(lt.ARRAY_BUFFER, new m(e), lt.STREAM_DRAW), lt.drawArrays(lt.LINES, 0, 2)))
                                },
                                $r.prototype.bezier = function() {
                                    if (8 !== arguments.length) throw "You must use 8 parameters for bezier() in 2D mode";
                                    at.beginShape(),
                                        at.vertex(arguments[0], arguments[1]),
                                        at.bezierVertex(arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]),
                                        at.endShape()
                                },
                                Br.prototype.bezier = function() {
                                    if (12 !== arguments.length) throw "You must use 12 parameters for bezier() in 3D mode";
                                    at.beginShape(),
                                        at.vertex(arguments[0], arguments[1], arguments[2]),
                                        at.bezierVertex(arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]),
                                        at.endShape()
                                },
                                at.bezierDetail = function(e) {
                                    En = e
                                },
                                at.bezierPoint = function(e, t, n, r, i) {
                                    return (1 - i) * (1 - i) * (1 - i) * e + 3 * (1 - i) * (1 - i) * i * t + 3 * (1 - i) * i * i * n + i * i * i * r
                                },
                                at.bezierTangent = function(e, t, n, r, i) {
                                    return 3 * i * i * ( - e + 3 * t - 3 * n + r) + 6 * i * (e - 2 * t + n) + 3 * ( - e + t)
                                },
                                at.curvePoint = function(e, t, n, r, i) {
                                    return.5 * (2 * t + ( - e + n) * i + (2 * e - 5 * t + 4 * n - r) * i * i + ( - e + 3 * t - 3 * n + r) * i * i * i)
                                },
                                at.curveTangent = function(e, t, n, r, i) {
                                    return.5 * ( - e + n + 2 * (2 * e - 5 * t + 4 * n - r) * i + 3 * ( - e + 3 * t - 3 * n + r) * i * i)
                                },
                                at.triangle = function(e, t, n, r, i, s) {
                                    at.beginShape(c.TRIANGLES),
                                        at.vertex(e, t, 0),
                                        at.vertex(n, r, 0),
                                        at.vertex(i, s, 0),
                                        at.endShape()
                                },
                                at.quad = function(e, t, n, r, i, s, o, a) {
                                    at.beginShape(c.QUADS),
                                        at.vertex(e, t, 0),
                                        at.vertex(n, r, 0),
                                        at.vertex(i, s, 0),
                                        at.vertex(o, a, 0),
                                        at.endShape()
                                },
                                $r.prototype.rect = function(e, n, r, i, s, o, a, l) {
                                    if (r || i) if (un === c.CORNERS ? (r -= e, i -= n) : un === c.RADIUS ? (r *= 2, i *= 2, e -= r / 2, n -= i / 2) : un === c.CENTER && (e -= r / 2, n -= i / 2), e = Math.round(e), n = Math.round(n), r = Math.round(r), i = Math.round(i), s !== t) {
                                        l === t && (l = a = o = s);
                                        var u = r / 2,
                                            h = i / 2; (s > u || s > h) && (s = Math.min(u, h)),
                                        (o > u || o > h) && (o = Math.min(u, h)),
                                        (a > u || a > h) && (a = Math.min(u, h)),
                                        (l > u || l > h) && (l = Math.min(u, h)),
                                        Yt && !Qt || lt.translate(.5, .5),
                                            lt.beginPath(),
                                            lt.moveTo(e + s, n),
                                            lt.lineTo(e + r - o, n),
                                            lt.quadraticCurveTo(e + r, n, e + r, n + o),
                                            lt.lineTo(e + r, n + i - a),
                                            lt.quadraticCurveTo(e + r, n + i, e + r - a, n + i),
                                            lt.lineTo(e + l, n + i),
                                            lt.quadraticCurveTo(e, n + i, e, n + i - l),
                                            lt.lineTo(e, n + s),
                                            lt.quadraticCurveTo(e, n, e + s, n),
                                        Yt && !Qt || lt.translate( - .5, -.5),
                                            F(),
                                            $()
                                    } else Qt && 1 === rn % 2 && lt.translate(.5, .5),
                                        lt.beginPath(),
                                        lt.rect(e, n, r, i),
                                        F(),
                                        $(),
                                    Qt && 1 === rn % 2 && lt.translate( - .5, -.5)
                                },
                                Br.prototype.rect = function(e, n, r, i, s) {
                                    if (s !== t) throw "rect() with rounded corners is not supported in 3D mode";
                                    un === c.CORNERS ? (r -= e, i -= n) : un === c.RADIUS ? (r *= 2, i *= 2, e -= r / 2, n -= i / 2) : un === c.CENTER && (e -= r / 2, n -= i / 2),
                                        s = new Vr,
                                        s.translate(e, n, 0),
                                        s.scale(r, i, 1),
                                        s.transpose(),
                                        n = new Vr,
                                        n.scale(1, -1, 1),
                                        n.apply(Vt.array()),
                                        n.transpose(),
                                    rn > 0 && Qt && (lt.useProgram(bt), T("uModel2d", bt, "uModel", !1, s.array()), T("uView2d", bt, "uView", !1, n.array()), E("uColor2d", bt, "uColor", en), S("uIsDrawingText2d", bt, "uIsDrawingText", !1), C("aVertex2d", bt, "aVertex", 3, St), _("aTextureCoord2d", bt, "aTextureCoord"), lt.drawArrays(lt.LINE_LOOP, 0, Mr.length / 3)),
                                    Yt && (lt.useProgram(yt), T("uModel3d", yt, "uModel", !1, s.array()), T("uView3d", yt, "uView", !1, n.array()), lt.enable(lt.POLYGON_OFFSET_FILL), lt.polygonOffset(1, 1), E("color3d", yt, "uColor", Kt), nr > 0 ? (e = new Vr, e.set(n), n = new Vr, n.set(s), e.mult(n), n = new Vr, n.set(e), n.invert(), n.transpose(), T("uNormalTransform3d", yt, "uNormalTransform", !1, n.array()), C("aNormal3d", yt, "aNormal", 3, Tt)) : _("normal3d", yt, "aNormal"), C("vertex3d", yt, "aVertex", 3, St), lt.drawArrays(lt.TRIANGLE_FAN, 0, Mr.length / 3), lt.disable(lt.POLYGON_OFFSET_FILL))
                                },
                                $r.prototype.ellipse = function(e, t, n, r) {
                                    if (e = e || 0, t = t || 0, !(0 >= n && 0 >= r)) if (hn === c.RADIUS ? (n *= 2, r *= 2) : hn === c.CORNERS ? (n -= e, r -= t, e += n / 2, t += r / 2) : hn === c.CORNER && (e += n / 2, t += r / 2), n === r) lt.beginPath(),
                                        lt.arc(e, t, n / 2, 0, c.TWO_PI, !1),
                                        F(),
                                        $();
                                    else {
                                        n /= 2,
                                            r /= 2;
                                        var i = .5522847498307933 * n,
                                            s = .5522847498307933 * r;
                                        at.beginShape(),
                                            at.vertex(e + n, t),
                                            at.bezierVertex(e + n, t - s, e + i, t - r, e, t - r),
                                            at.bezierVertex(e - i, t - r, e - n, t - s, e - n, t),
                                            at.bezierVertex(e - n, t + s, e - i, t + r, e, t + r),
                                            at.bezierVertex(e + i, t + r, e + n, t + s, e + n, t),
                                            at.endShape()
                                    }
                                },
                                Br.prototype.ellipse = function(e, t, n, r) {
                                    if (e = e || 0, t = t || 0, !(0 >= n && 0 >= r)) {
                                        hn === c.RADIUS ? (n *= 2, r *= 2) : hn === c.CORNERS ? (n -= e, r -= t, e += n / 2, t += r / 2) : hn === c.CORNER && (e += n / 2, t += r / 2),
                                            n /= 2,
                                            r /= 2;
                                        var i = .5522847498307933 * n,
                                            s = .5522847498307933 * r;
                                        if (at.beginShape(), at.vertex(e + n, t), at.bezierVertex(e + n, t - s, 0, e + i, t - r, 0, e, t - r, 0), at.bezierVertex(e - i, t - r, 0, e - n, t - s, 0, e - n, t, 0), at.bezierVertex(e - n, t + s, 0, e - i, t + r, 0, e, t + r, 0), at.bezierVertex(e + i, t + r, 0, e + n, t + s, 0, e + n, t, 0), at.endShape(), Yt) {
                                            for (i = r = n = 0; i < yr.length; i++) n += yr[i][0],
                                                r += yr[i][1];
                                            for (n /= yr.length, r /= yr.length, i = [], e = [], t = [], i[0] = n, i[1] = r, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = Kt[0], i[6] = Kt[1], i[7] = Kt[2], i[8] = Kt[3], i[9] = en[0], i[10] = en[1], i[11] = en[2], i[12] = en[3], i[13] = cn, i[14] = fn, i[15] = pn, yr.unshift(i), i = 0; i < yr.length; i++) {
                                                for (n = 0; 3 > n; n++) e.push(yr[i][n]);
                                                for (n = 5; 9 > n; n++) t.push(yr[i][n])
                                            }
                                            qr(e, "TRIANGLE_FAN", t)
                                        }
                                    }
                                },
                                at.normal = function(e, t, n) {
                                    if (3 !== arguments.length || "number" != typeof e || "number" != typeof t || "number" != typeof n) throw "normal() requires three numeric arguments.";
                                    cn = e,
                                        fn = t,
                                        pn = n,
                                    0 !== yn && (dn === c.NORMAL_MODE_AUTO ? dn = c.NORMAL_MODE_SHAPE: dn === c.NORMAL_MODE_SHAPE && (dn = c.NORMAL_MODE_VERTEX))
                                },
                                at.save = function(e, n) {
                                    return n !== t ? l.open(n.toDataURL(), "_blank") : l.open(at.externals.canvas.toDataURL(), "_blank")
                                };
                            var Kr = 0;
                            at.saveFrame = function(e) {
                                e === t && (e = "screen-####.png"),
                                    e = e.replace(/#+/,
                                        function(e) {
                                            for (var t = "" + Kr++; t.length < e.length;) t = "0" + t;
                                            return t
                                        }),
                                    at.save(e)
                            };
                            var Zr = u.createElement("canvas").getContext("2d"),
                                Jr = [t, t, t],
                                Qr = function(e, t, n) {
                                    if (this.__isDirty = !1, e instanceof p) this.fromHTMLImageData(e);
                                    else if (t || n) {
                                        if (this.width = e || 1, this.height = t || 1, e = this.sourceImg = u.createElement("canvas"), e.width = this.width, e.height = this.height, this.imageData = e.getContext("2d").createImageData(this.width, this.height), this.format = n === c.ARGB || n === c.ALPHA ? n: c.RGB, this.format === c.RGB) for (n = 3, e = this.imageData.data, t = e.length; t > n; n += 4) e[n] = 255;
                                        this.__isDirty = !0,
                                            this.updatePixels()
                                    } else this.height = this.width = 0,
                                        this.imageData = Zr.createImageData(1, 1),
                                        this.format = c.ARGB;
                                    this.pixels = j(this)
                                };
                            Qr.prototype = {
                                __isPImage: !0,
                                updatePixels: function() {
                                    var e = this.sourceImg;
                                    e && e instanceof f && this.__isDirty && e.getContext("2d").putImageData(this.imageData, 0, 0),
                                        this.__isDirty = !1
                                },
                                fromHTMLImageData: function(e) {
                                    var t = H(e);
                                    try {
                                        var n = t.context.getImageData(0, 0, e.width, e.height);
                                        this.fromImageData(n)
                                    } catch(r) {
                                        e.width && e.height && (this.isRemote = !0, this.width = e.width, this.height = e.height)
                                    }
                                    this.sourceImg = e
                                },
                                get: function(e, t, n, r) {
                                    return arguments.length ? 2 === arguments.length ? at.get(e, t, this) : 4 === arguments.length ? at.get(e, t, n, r, this) : void 0 : at.get(this)
                                },
                                set: function(e, t, n) {
                                    at.set(e, t, n, this),
                                        this.__isDirty = !0
                                },
                                blend: function(e, t, n, r, i, s, o, a, l, u) {
                                    9 === arguments.length ? at.blend(this, e, t, n, r, i, s, o, a, l, this) : 10 === arguments.length && at.blend(e, t, n, r, i, s, o, a, l, u, this),
                                        delete this.sourceImg
                                },
                                copy: function(e, t, n, r, i, s, o, a, l) {
                                    8 === arguments.length ? at.blend(this, e, t, n, r, i, s, o, a, c.REPLACE, this) : 9 === arguments.length && at.blend(e, t, n, r, i, s, o, a, l, c.REPLACE, this),
                                        delete this.sourceImg
                                },
                                filter: function(e, t) {
                                    2 === arguments.length ? at.filter(e, t, this) : 1 === arguments.length && at.filter(e, null, this),
                                        delete this.sourceImg
                                },
                                save: function(e) {
                                    at.save(e, this)
                                },
                                resize: function(e, t) {
                                    if (this.isRemote) throw "Image is loaded remotely. Cannot resize.";
                                    if (0 !== this.width || 0 !== this.height) {
                                        0 === e && 0 !== t ? e = Math.floor(this.width / this.height * t) : 0 === t && 0 !== e && (t = Math.floor(this.height / this.width * e));
                                        var n = H(this.imageData).canvas,
                                            n = H(n, e, t).context.getImageData(0, 0, e, t);
                                        this.fromImageData(n)
                                    }
                                },
                                mask: function(e) {
                                    var t, n, r = this.toImageData();
                                    if (e instanceof Qr || e.__isPImage) {
                                        if (e.width !== this.width || e.height !== this.height) throw "mask must have the same dimensions as PImage.";
                                        for (e = e.toImageData(), t = 2, n = 4 * this.width * this.height; n > t; t += 4) r.data[t + 1] = e.data[t]
                                    } else if (e instanceof Array) {
                                        if (this.width * this.height !== e.length) throw "mask array must be the same length as PImage pixels array.";
                                        for (t = 0, n = e.length; n > t; ++t) r.data[4 * t + 3] = e[t]
                                    }
                                    this.fromImageData(r)
                                },
                                loadPixels: h,
                                toImageData: function() {
                                    return this.isRemote ? this.sourceImg: this.__isDirty ? H(this.sourceImg).context.getImageData(0, 0, this.width, this.height) : this.imageData
                                },
                                toDataURL: function() {
                                    if (this.isRemote) throw "Image is loaded remotely. Cannot create dataURI.";
                                    return H(this.imageData).canvas.toDataURL()
                                },
                                fromImageData: function(e) {
                                    var t = e.width,
                                        n = e.height,
                                        r = u.createElement("canvas"),
                                        i = r.getContext("2d");
                                    this.width = r.width = t,
                                        this.height = r.height = n,
                                        i.putImageData(e, 0, 0),
                                        this.format = c.ARGB,
                                        this.imageData = e,
                                        this.sourceImg = r
                                }
                            },
                                at.PImage = Qr,
                                at.createImage = function(e, t, n) {
                                    return new Qr(e, t, n)
                                },
                                at.loadImage = function(e, t, n) {
                                    if (ut.imageCache.images[e]) return t = new Qr(ut.imageCache.images[e]),
                                        t.loaded = !0,
                                        t;
                                    t = new Qr;
                                    var r = u.createElement("img");
                                    return t.sourceImg = r,
                                        r.onload = function(e, t, n) {
                                            return function() {
                                                t.fromHTMLImageData(e),
                                                    t.loaded = !0,
                                                n && n()
                                            }
                                        } (r, t, n),
                                        r.src = e,
                                        t
                                },
                                at.requestImage = at.loadImage,
                                at.get = function(e, t, n, r, i) {
                                    if (void 0 !== i) return V(e, t, n, r, i);
                                    if (void 0 !== r) return z(e, t, n, r);
                                    if (void 0 !== n) {
                                        if (n.isRemote) throw "Image is loaded remotely. Cannot get x,y.";
                                        return e = 4 * t * n.width + 4 * e,
                                            n = n.imageData.data,
                                        n[e + 3] << 24 & c.ALPHA_MASK | n[e] << 16 & c.RED_MASK | n[e + 1] << 8 & c.GREEN_MASK | n[e + 2] & c.BLUE_MASK
                                    }
                                    return void 0 !== t ? (e >= at.width || 0 > e || 0 > t || t >= at.height ? n = 0 : Zn ? (e = 4 * ((0 | e) + at.width * (0 | t)), n = at.imageData.data, n = n[e + 3] << 24 & c.ALPHA_MASK | n[e] << 16 & c.RED_MASK | n[e + 1] << 8 & c.GREEN_MASK | n[e + 2] & c.BLUE_MASK) : (n = at.toImageData(0 | e, 0 | t, 1, 1).data, n = n[3] << 24 & c.ALPHA_MASK | n[0] << 16 & c.RED_MASK | n[1] << 8 & c.GREEN_MASK | n[2] & c.BLUE_MASK), n) : void 0 !== e ? V(0, 0, e.width, e.height, e) : z(0, 0, at.width, at.height)
                                },
                                at.createGraphics = function(e, t, n) {
                                    var r = new w;
                                    return r.size(e, t, n),
                                        r.background(0, 0),
                                        r
                                },
                                at.set = function(e, t, n, r) {
                                    if (3 === arguments.length)"number" == typeof n ? e < at.width && e >= 0 && t >= 0 && t < at.height && (Zn || (at.loadPixels(), null === Kn && ($t = lt, Kn = new U), Zn = !0, lt = Kn, Bt = 0), at.pixels.setPixel((0 | e) + at.width * (0 | t), n), ++Bt > Jn && G()) : (n instanceof Qr || n.__isPImage) && at.image(n, e, t);
                                    else if (4 === arguments.length) {
                                        if (r.isRemote) throw "Image is loaded remotely. Cannot set x,y.";
                                        var i = at.color.toArray(n),
                                            s = 4 * t * r.width + 4 * e,
                                            o = r.imageData.data;
                                        o[s] = i[0],
                                            o[s + 1] = i[1],
                                            o[s + 2] = i[2],
                                            o[s + 3] = i[3]
                                    }
                                },
                                at.imageData = {},
                                at.pixels = {
                                    getLength: function() {
                                        return at.imageData.data.length ? at.imageData.data.length / 4 : 0
                                    },
                                    getPixel: function(e) {
                                        e *= 4;
                                        var t = at.imageData.data;
                                        return t[e + 3] << 24 & 4278190080 | t[e + 0] << 16 & 16711680 | t[e + 1] << 8 & 65280 | 255 & t[e + 2]
                                    },
                                    setPixel: function(e, t) {
                                        var n = 4 * e,
                                            r = at.imageData.data;
                                        r[n + 0] = (16711680 & t) >>> 16,
                                            r[n + 1] = (65280 & t) >>> 8,
                                            r[n + 2] = 255 & t,
                                            r[n + 3] = (4278190080 & t) >>> 24
                                    },
                                    toArray: function() {
                                        for (var e = [], t = at.imageData.width * at.imageData.height, n = at.imageData.data, r = 0, i = 0; t > r; r++, i += 4) e.push(n[i + 3] << 24 & 4278190080 | n[i + 0] << 16 & 16711680 | n[i + 1] << 8 & 65280 | 255 & n[i + 2]);
                                        return e
                                    },
                                    set: function(e) {
                                        for (var t = 0,
                                                 n = e.length; n > t; t++) this.setPixel(t, e[t])
                                    }
                                },
                                at.loadPixels = function() {
                                    at.imageData = ht.$ensureContext().getImageData(0, 0, at.width, at.height)
                                },
                                at.updatePixels = function() {
                                    at.imageData && ht.$ensureContext().putImageData(at.imageData, 0, 0)
                                },
                                at.hint = function(e) {
                                    var t = ht.$ensureContext();
                                    e === c.DISABLE_DEPTH_TEST ? (t.disable(t.DEPTH_TEST), t.depthMask(!1), t.clear(t.DEPTH_BUFFER_BIT)) : e === c.ENABLE_DEPTH_TEST ? (t.enable(t.DEPTH_TEST), t.depthMask(!0)) : e === c.ENABLE_OPENGL_2X_SMOOTH || e === c.ENABLE_OPENGL_4X_SMOOTH ? on = !0 : e === c.DISABLE_OPENGL_2X_SMOOTH && (on = !1)
                                };
                            var ei = function(e, t, n, r) {
                                if (e instanceof Qr || e.__isPImage) {
                                    if (!e.loaded) throw "Error using image in background(): PImage not loaded.";
                                    if (e.width !== at.width || e.height !== at.height) throw "Background image must be the same dimensions as the canvas."
                                } else e = at.color(e, t, n, r);
                                An = e
                            };
                            $r.prototype.background = function(e, n, r, i) {
                                e !== t && ei(e, n, r, i),
                                    An instanceof Qr || An.__isPImage ? (lt.save(), lt.setTransform(1, 0, 0, 1, 0, 0), at.image(An, 0, 0)) : (lt.save(), lt.setTransform(1, 0, 0, 1, 0, 0), at.alpha(An) !== Sn && lt.clearRect(0, 0, at.width, at.height), lt.fillStyle = at.color.toString(An), lt.fillRect(0, 0, at.width, at.height), Jt = !0),
                                    L()
                            },
                                Br.prototype.background = function(e, t, n, r) {
                                    0 < arguments.length && ei(e, t, n, r);
                                    var i = at.color.toGLArray(An);
                                    lt.clearColor(i[0], i[1], i[2], i[3]),
                                        lt.clear(lt.COLOR_BUFFER_BIT | lt.DEPTH_BUFFER_BIT)
                                },
                                $r.prototype.image = function(e, t, n, r, i) {
                                    if (t = Math.round(t), n = Math.round(n), 0 < e.width) {
                                        var s = Dr(t || 0, n || 0, r || e.width, i || e.height, 4 > arguments.length);
                                        if (e.sourceImg && null === Ln) {
                                            var o = e.sourceImg;
                                            e.__isDirty && e.updatePixels(),
                                                lt.drawImage(o, 0, 0, o.width, o.height, s.x, s.y, s.w, s.h)
                                        } else o = e.toImageData(),
                                        null !== Ln && (Ln(o), e.__isDirty = !0),
                                            lt.drawImage(H(o).canvas, 0, 0, e.width, e.height, s.x, s.y, s.w, s.h)
                                    }
                                },
                                Br.prototype.image = function(e, t, n, r, i) {
                                    0 < e.width && (t = Math.round(t), n = Math.round(n), r = r || e.width, i = i || e.height, at.beginShape(at.QUADS), at.texture(e), at.vertex(t, n, 0, 0, 0), at.vertex(t, n + i, 0, 0, i), at.vertex(t + r, n + i, 0, r, i), at.vertex(t + r, n, 0, r, 0), at.endShape())
                                },
                                at.tint = function(e, t, n, r) {
                                    e = at.color(e, t, n, r);
                                    var i = at.red(e) / Tn,
                                        s = at.green(e) / Cn,
                                        o = at.blue(e) / _n,
                                        a = at.alpha(e) / Sn;
                                    Ln = function(e) {
                                        var t = e.data;
                                        e = 4 * e.width * e.height;
                                        for (var n = 0; e > n;) t[n++] *= i,
                                            t[n++] *= s,
                                            t[n++] *= o,
                                            t[n++] *= a
                                    },
                                        Nn = function(e) {
                                            for (var t = 0; t < e.length;) e[t++] = i,
                                                e[t++] = s,
                                                e[t++] = o,
                                                e[t++] = a
                                        }
                                },
                                at.noTint = function() {
                                    Nn = Ln = null
                                },
                                at.copy = function(e, n, r, i, s, o, a, l, u) {
                                    u === t && (u = l, l = a, a = o, o = s, s = i, i = r, r = n, n = e, e = at),
                                        at.blend(e, n, r, i, s, o, a, l, u, c.REPLACE)
                                },
                                at.blend = function(e, n, r, i, s, o, a, l, u, h, c) {
                                    if (e.isRemote) throw "Image is loaded remotely. Cannot blend image.";
                                    h === t && (h = u, u = l, l = a, a = o, o = s, s = i, i = r, r = n, n = e, e = at),
                                        i = n + i,
                                        s = r + s,
                                        l = o + l,
                                        u = a + u;
                                    var f = c || at;
                                    c !== t && h !== t || at.loadPixels(),
                                        e.loadPixels(),
                                        e === at && at.intersect(n, r, i, s, o, a, l, u) ? at.blit_resize(at.get(n, r, i - n, s - r), 0, 0, i - n - 1, s - r - 1, f.imageData.data, f.width, f.height, o, a, l, u, h) : at.blit_resize(e, n, r, i, s, f.imageData.data, f.width, f.height, o, a, l, u, h),
                                    c === t && at.updatePixels()
                                };
                            var ti = function(e, t) {
                                var n, r, i, s, o, a, l, u, h, c, f, p, d = 0,
                                    m = t.pixels.getLength(),
                                    v = new g(m);
                                if (e) for (; m > d;) for (n = d, r = d + t.width; r > d;) i = s = t.pixels.getPixel(d),
                                    a = d - 1,
                                    o = d + 1,
                                    l = d - t.width,
                                    u = d + t.width,
                                n > a && (a = d),
                                o >= r && (o = d),
                                0 > l && (l = 0),
                                u >= m && (u = d),
                                    l = t.pixels.getPixel(l),
                                    a = t.pixels.getPixel(a),
                                    u = t.pixels.getPixel(u),
                                    o = t.pixels.getPixel(o),
                                    i = 77 * (i >> 16 & 255) + 151 * (i >> 8 & 255) + 28 * (255 & i),
                                    c = 77 * (a >> 16 & 255) + 151 * (a >> 8 & 255) + 28 * (255 & a),
                                    h = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o),
                                    f = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l),
                                    p = 77 * (u >> 16 & 255) + 151 * (u >> 8 & 255) + 28 * (255 & u),
                                i > c && (s = a, i = c),
                                i > h && (s = o, i = h),
                                i > f && (s = l, i = f),
                                i > p && (s = u),
                                    v[d++] = s;
                                else for (; m > d;) for (n = d, r = d + t.width; r > d;) i = s = t.pixels.getPixel(d),
                                    a = d - 1,
                                    o = d + 1,
                                    l = d - t.width,
                                    u = d + t.width,
                                n > a && (a = d),
                                o >= r && (o = d),
                                0 > l && (l = 0),
                                u >= m && (u = d),
                                    l = t.pixels.getPixel(l),
                                    a = t.pixels.getPixel(a),
                                    u = t.pixels.getPixel(u),
                                    o = t.pixels.getPixel(o),
                                    i = 77 * (i >> 16 & 255) + 151 * (i >> 8 & 255) + 28 * (255 & i),
                                    c = 77 * (a >> 16 & 255) + 151 * (a >> 8 & 255) + 28 * (255 & a),
                                    h = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o),
                                    f = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l),
                                    p = 77 * (u >> 16 & 255) + 151 * (u >> 8 & 255) + 28 * (255 & u),
                                c > i && (s = a, i = c),
                                h > i && (s = o, i = h),
                                f > i && (s = l, i = f),
                                p > i && (s = u),
                                    v[d++] = s;
                                t.pixels.set(v)
                            };
                            at.filter = function(e, n, r) {
                                var i, s, o, a;
                                if (3 === arguments.length ? (r.loadPixels(), i = r) : (at.loadPixels(), i = at), n === t && (n = null), i.isRemote) throw "Image is loaded remotely. Cannot filter image.";
                                var l = i.pixels.getLength();
                                switch (e) {
                                    case c.BLUR:
                                        var u, h, f, p, d, g, v, y, b, x = n || 1,
                                            w = i;
                                        o = w.pixels.getLength(),
                                            a = new m(o),
                                            l = new m(o),
                                            s = new m(o),
                                            o = new m(o);
                                        var A, E, S, T, C = 0,
                                            x = at.floor(3.5 * x),
                                            x = 1 > x ? 1 : 248 > x ? x: 248;
                                        if (at.shared.blurRadius !== x) {
                                            at.shared.blurRadius = x,
                                                at.shared.blurKernelSize = 1 + (at.shared.blurRadius << 1),
                                                at.shared.blurKernel = new m(at.shared.blurKernelSize);
                                            var _ = at.shared.blurKernel,
                                                P = at.shared.blurKernelSize;
                                            for (T = 0; P > T; T++) _[T] = 0;
                                            for (P = (x - 1) * (x - 1), T = 1; x > T; T++) _[x + T] = _[void 0] = P;
                                            _[x] = x * x
                                        }
                                        x = w.height,
                                            T = w.width,
                                            _ = at.shared.blurKernelSize,
                                            y = at.shared.blurRadius;
                                        var P = at.shared.blurKernel,
                                            M = w.imageData.data;
                                        for (E = 0; x > E; E++) {
                                            for (A = 0; T > A; A++) {
                                                if (f = h = u = p = w = 0, g = A - y, 0 > g) d = -g,
                                                    g = 0;
                                                else {
                                                    if (g >= T) break;
                                                    d = 0
                                                }
                                                for (S = d; _ > S && !(g >= T); S++) v = 4 * (g + C),
                                                    d = P[S],
                                                    p += d * M[v + 3],
                                                    u += d * M[v],
                                                    h += d * M[v + 1],
                                                    f += d * M[v + 2],
                                                    w += d,
                                                    g++;
                                                v = C + A,
                                                    o[v] = p / w,
                                                    a[v] = u / w,
                                                    l[v] = h / w,
                                                    s[v] = f / w
                                            }
                                            C += T
                                        }
                                        for (C = 0, y = -y, b = y * T, E = 0; x > E; E++) {
                                            for (A = 0; T > A; A++) {
                                                if (f = h = u = p = w = 0, 0 > y) d = v = -y,
                                                    g = A;
                                                else {
                                                    if (y >= x) break;
                                                    d = 0,
                                                        v = y,
                                                        g = A + b
                                                }
                                                for (S = d; _ > S && !(v >= x); S++) d = P[S],
                                                    p += d * o[g],
                                                    u += d * a[g],
                                                    h += d * l[g],
                                                    f += d * s[g],
                                                    w += d,
                                                    v++,
                                                    g += T;
                                                v = 4 * (A + C),
                                                    M[v] = u / w,
                                                    M[v + 1] = h / w,
                                                    M[v + 2] = f / w,
                                                    M[v + 3] = p / w
                                            }
                                            C += T,
                                                b += T,
                                                y++
                                        }
                                        break;
                                    case c.GRAY:
                                        if (i.format === c.ALPHA) {
                                            for (a = 0; l > a; a++) s = 255 - i.pixels.getPixel(a),
                                                i.pixels.setPixel(a, 4278190080 | s << 16 | s << 8 | s);
                                            i.format = c.RGB
                                        } else for (a = 0; l > a; a++) s = i.pixels.getPixel(a),
                                            o = 77 * (s >> 16 & 255) + 151 * (s >> 8 & 255) + 28 * (255 & s) >> 8,
                                            i.pixels.setPixel(a, s & c.ALPHA_MASK | o << 16 | o << 8 | o);
                                        break;
                                    case c.INVERT:
                                        for (a = 0; l > a; a++) i.pixels.setPixel(a, 16777215 ^ i.pixels.getPixel(a));
                                        break;
                                    case c.POSTERIZE:
                                        if (null === n) throw "Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
                                        if (s = at.floor(n), 2 > s || s > 255) throw "Levels must be between 2 and 255 for filter(POSTERIZE, levels)";
                                        for (o = s - 1, a = 0; l > a; a++) C = i.pixels.getPixel(a) >> 16 & 255,
                                            x = i.pixels.getPixel(a) >> 8 & 255,
                                            T = 255 & i.pixels.getPixel(a),
                                            C = 255 * (C * s >> 8) / o,
                                            x = 255 * (x * s >> 8) / o,
                                            T = 255 * (T * s >> 8) / o,
                                            i.pixels.setPixel(a, 4278190080 & i.pixels.getPixel(a) | C << 16 | x << 8 | T);
                                        break;
                                    case c.OPAQUE:
                                        for (a = 0; l > a; a++) i.pixels.setPixel(a, 4278190080 | i.pixels.getPixel(a));
                                        i.format = c.RGB;
                                        break;
                                    case c.THRESHOLD:
                                        if (null === n && (n = .5), 0 > n || n > 1) throw "Level must be between 0 and 1 for filter(THRESHOLD, level)";
                                        for (s = at.floor(255 * n), a = 0; l > a; a++) o = at.max((i.pixels.getPixel(a) & c.RED_MASK) >> 16, at.max((i.pixels.getPixel(a) & c.GREEN_MASK) >> 8, i.pixels.getPixel(a) & c.BLUE_MASK)),
                                            i.pixels.setPixel(a, i.pixels.getPixel(a) & c.ALPHA_MASK | (s > o ? 0 : 16777215));
                                        break;
                                    case c.ERODE:
                                        ti(!0, i);
                                        break;
                                    case c.DILATE:
                                        ti(!1, i)
                                }
                                i.updatePixels()
                            },
                                at.shared = {
                                    fracU: 0,
                                    ifU: 0,
                                    fracV: 0,
                                    ifV: 0,
                                    u1: 0,
                                    u2: 0,
                                    v1: 0,
                                    v2: 0,
                                    sX: 0,
                                    sY: 0,
                                    iw: 0,
                                    iw1: 0,
                                    ih1: 0,
                                    ul: 0,
                                    ll: 0,
                                    ur: 0,
                                    lr: 0,
                                    cUL: 0,
                                    cLL: 0,
                                    cUR: 0,
                                    cLR: 0,
                                    srcXOffset: 0,
                                    srcYOffset: 0,
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 0,
                                    srcBuffer: null,
                                    blurRadius: 0,
                                    blurKernelSize: 0,
                                    blurKernel: null
                                },
                                at.intersect = function(e, t, n, r, i, s, o, a) {
                                    return n = n - e + 1,
                                        r = r - t + 1,
                                        o = o - i + 1,
                                        a = a - s + 1,
                                        e > i ? (o += i - e, o > n && (o = n)) : (e = n + e - i, o > e && (o = e)),
                                        t > s ? (a += s - t, a > r && (a = r)) : (t = r + t - s, a > t && (a = t)),
                                        !(0 >= o || 0 >= a)
                                };
                            var ni = {};
                            if (ni[c.BLEND] = at.modes.blend, ni[c.ADD] = at.modes.add, ni[c.SUBTRACT] = at.modes.subtract, ni[c.LIGHTEST] = at.modes.lightest, ni[c.DARKEST] = at.modes.darkest, ni[c.REPLACE] = at.modes.replace, ni[c.DIFFERENCE] = at.modes.difference, ni[c.EXCLUSION] = at.modes.exclusion, ni[c.MULTIPLY] = at.modes.multiply, ni[c.SCREEN] = at.modes.screen, ni[c.OVERLAY] = at.modes.overlay, ni[c.HARD_LIGHT] = at.modes.hard_light, ni[c.SOFT_LIGHT] = at.modes.soft_light, ni[c.DODGE] = at.modes.dodge, ni[c.BURN] = at.modes.burn, at.blit_resize = function(e, t, n, r, i, s, o, a, l, u, h, f, p) {
                                    if (0 > t && (t = 0), 0 > n && (n = 0), r >= e.width && (r = e.width - 1), i >= e.height && (i = e.height - 1), r -= t, i -= n, h -= l, f -= u, !(0 >= h || 0 >= f || 0 >= r || 0 >= i || l >= o || u >= a || t >= e.width || n >= e.height)) {
                                        r = Math.floor(r / h * c.PRECISIONF),
                                            i = Math.floor(i / f * c.PRECISIONF);
                                        var d = at.shared;
                                        d.srcXOffset = Math.floor(0 > l ? -l * r: t * c.PRECISIONF),
                                            d.srcYOffset = Math.floor(0 > u ? -u * i: n * c.PRECISIONF),
                                        0 > l && (h += l, l = 0),
                                        0 > u && (f += u, u = 0),
                                            h = Math.min(h, o - l),
                                            f = Math.min(f, a - u),
                                            t = u * o + l;
                                        var m;
                                        d.srcBuffer = e.imageData.data,
                                            d.iw = e.width,
                                            d.iw1 = e.width - 1,
                                            d.ih1 = e.height - 1,
                                            n = ni[p];
                                        var g, v, y, b;
                                        l = c.ALPHA_MASK,
                                            u = c.RED_MASK;
                                        var x = c.GREEN_MASK,
                                            w = c.BLUE_MASK,
                                            A = c.PREC_MAXVAL,
                                            E = c.PRECISIONB,
                                            S = c.PREC_RED_SHIFT,
                                            T = c.PREC_ALPHA_SHIFT,
                                            C = d.srcBuffer,
                                            _ = Math.min;
                                        for (p = 0; f > p; p++) {
                                            for (d.sX = d.srcXOffset, d.fracV = d.srcYOffset & A, d.ifV = A - d.fracV, d.v1 = (d.srcYOffset >> E) * d.iw, d.v2 = _((d.srcYOffset >> E) + 1, d.ih1) * d.iw, e = 0; h > e; e++) a = 4 * (t + e),
                                                m = s[a + 3] << 24 & l | s[a] << 16 & u | s[a + 1] << 8 & x | s[a + 2] & w,
                                                d.fracU = d.sX & A,
                                                d.ifU = A - d.fracU,
                                                d.ul = d.ifU * d.ifV >> E,
                                                d.ll = d.ifU * d.fracV >> E,
                                                d.ur = d.fracU * d.ifV >> E,
                                                d.lr = d.fracU * d.fracV >> E,
                                                d.u1 = d.sX >> E,
                                                d.u2 = _(d.u1 + 1, d.iw1),
                                                g = 4 * (d.v1 + d.u1),
                                                v = 4 * (d.v1 + d.u2),
                                                y = 4 * (d.v2 + d.u1),
                                                b = 4 * (d.v2 + d.u2),
                                                d.cUL = C[g + 3] << 24 & l | C[g] << 16 & u | C[g + 1] << 8 & x | C[g + 2] & w,
                                                d.cUR = C[v + 3] << 24 & l | C[v] << 16 & u | C[v + 1] << 8 & x | C[v + 2] & w,
                                                d.cLL = C[y + 3] << 24 & l | C[y] << 16 & u | C[y + 1] << 8 & x | C[y + 2] & w,
                                                d.cLR = C[b + 3] << 24 & l | C[b] << 16 & u | C[b + 1] << 8 & x | C[b + 2] & w,
                                                d.r = d.ul * ((d.cUL & u) >> 16) + d.ll * ((d.cLL & u) >> 16) + d.ur * ((d.cUR & u) >> 16) + d.lr * ((d.cLR & u) >> 16) << S & u,
                                                d.g = d.ul * (d.cUL & x) + d.ll * (d.cLL & x) + d.ur * (d.cUR & x) + d.lr * (d.cLR & x) >>> E & x,
                                                d.b = d.ul * (d.cUL & w) + d.ll * (d.cLL & w) + d.ur * (d.cUR & w) + d.lr * (d.cLR & w) >>> E,
                                                d.a = d.ul * ((d.cUL & l) >>> 24) + d.ll * ((d.cLL & l) >>> 24) + d.ur * ((d.cUR & l) >>> 24) + d.lr * ((d.cLR & l) >>> 24) << T & l,
                                                m = n(m, d.a | d.r | d.g | d.b),
                                                s[a] = (m & u) >>> 16,
                                                s[a + 1] = (m & x) >>> 8,
                                                s[a + 2] = m & w,
                                                s[a + 3] = (m & l) >>> 24,
                                                d.sX += r;
                                            t += o,
                                                d.srcYOffset += i
                                        }
                                    }
                                },
                                    at.loadFont = function(e, n) {
                                        if (e === t) throw "font name required in loadFont.";
                                        if ( - 1 === e.indexOf(".svg")) return n === t && (n = Yn.size),
                                            PFont.get(e, n);
                                        var r = at.loadGlyphs(e);
                                        return {
                                            name: e,
                                            css: "12px sans-serif",
                                            glyph: !0,
                                            units_per_em: r.units_per_em,
                                            horiz_adv_x: 1 / r.units_per_em * r.horiz_adv_x,
                                            ascent: r.ascent,
                                            descent: r.descent,
                                            width: function(t) {
                                                for (var n = 0,
                                                         r = t.length,
                                                         i = 0; r > i; i++) try {
                                                    n += parseFloat(at.glyphLook(at.glyphTable[e], t[i]).horiz_adv_x)
                                                } catch(s) {
                                                    w.debug(s)
                                                }
                                                return n / at.glyphTable[e].units_per_em
                                            }
                                        }
                                    },
                                    at.createFont = function(e, t) {
                                        return at.loadFont(e, t)
                                    },
                                    at.textFont = function(e, n) {
                                        n !== t && (e.glyph || (e = PFont.get(e.name, n)), Un = n),
                                            Yn = e,
                                            Gn = Yn.name,
                                            Xn = Yn.ascent,
                                            qn = Yn.descent,
                                            Wn = Yn.leading,
                                            ht.$ensureContext().font = Yn.css
                                    },
                                    at.textSize = function(e) {
                                        Yn = PFont.get(Gn, e),
                                            Un = e,
                                            Xn = Yn.ascent,
                                            qn = Yn.descent,
                                            Wn = Yn.leading,
                                            ht.$ensureContext().font = Yn.css
                                    },
                                    at.textAscent = function() {
                                        return Xn
                                    },
                                    at.textDescent = function() {
                                        return qn
                                    },
                                    at.textLeading = function(e) {
                                        Wn = e
                                    },
                                    at.textAlign = function(e, t) {
                                        jn = e,
                                            zn = t || c.BASELINE
                                    },
                                    $r.prototype.textWidth = function(e) {
                                        e = X(e).split(/\r?\n/g);
                                        var t, n = 0,
                                            r = e.length;
                                        for (lt.font = Yn.css, t = 0; r > t; ++t) n = Math.max(n, Yn.measureTextWidth(e[t]));
                                        return 0 | n
                                    },
                                    Br.prototype.textWidth = function(e) {
                                        e = X(e).split(/\r?\n/g);
                                        var n, r = 0,
                                            i = e.length;
                                        ct === t && (ct = u.createElement("canvas"));
                                        var s = ct.getContext("2d");
                                        for (s.font = Yn.css, n = 0; i > n; ++n) r = Math.max(r, s.measureText(e[n]).width);
                                        return 0 | r
                                    },
                                    at.glyphLook = function(e, t) {
                                        try {
                                            switch (t) {
                                                case "1":
                                                    return e.one;
                                                case "2":
                                                    return e.two;
                                                case "3":
                                                    return e.three;
                                                case "4":
                                                    return e.four;
                                                case "5":
                                                    return e.five;
                                                case "6":
                                                    return e.six;
                                                case "7":
                                                    return e.seven;
                                                case "8":
                                                    return e.eight;
                                                case "9":
                                                    return e.nine;
                                                case "0":
                                                    return e.zero;
                                                case " ":
                                                    return e.space;
                                                case "$":
                                                    return e.dollar;
                                                case "!":
                                                    return e.exclam;
                                                case '"':
                                                    return e.quotedbl;
                                                case "#":
                                                    return e.numbersign;
                                                case "%":
                                                    return e.percent;
                                                case "&":
                                                    return e.ampersand;
                                                case "'":
                                                    return e.quotesingle;
                                                case "(":
                                                    return e.parenleft;
                                                case ")":
                                                    return e.parenright;
                                                case "*":
                                                    return e.asterisk;
                                                case "+":
                                                    return e.plus;
                                                case ",":
                                                    return e.comma;
                                                case "-":
                                                    return e.hyphen;
                                                case ".":
                                                    return e.period;
                                                case "/":
                                                    return e.slash;
                                                case "_":
                                                    return e.underscore;
                                                case ":":
                                                    return e.colon;
                                                case ";":
                                                    return e.semicolon;
                                                case "<":
                                                    return e.less;
                                                case "=":
                                                    return e.equal;
                                                case ">":
                                                    return e.greater;
                                                case "?":
                                                    return e.question;
                                                case "@":
                                                    return e.at;
                                                case "[":
                                                    return e.bracketleft;
                                                case "\\":
                                                    return e.backslash;
                                                case "]":
                                                    return e.bracketright;
                                                case "^":
                                                    return e.asciicircum;
                                                case "`":
                                                    return e.grave;
                                                case "{":
                                                    return e.braceleft;
                                                case "|":
                                                    return e.bar;
                                                case "}":
                                                    return e.braceright;
                                                case "~":
                                                    return e.asciitilde;
                                                default:
                                                    return e[t]
                                            }
                                        } catch(n) {
                                            w.debug(n)
                                        }
                                    },
                                    $r.prototype.text$line = function(e, t, n, r, i) {
                                        if (r = r = 0, Yn.glyph) {
                                            for (r = at.glyphTable[Gn], lt.save(), lt.translate(t, n + Un), i !== c.RIGHT && i !== c.CENTER || r.width(e), t = 1 / r.units_per_em * Un, lt.scale(t, t), t = 0, n = e.length; n > t; t++) try {
                                                at.glyphLook(r, e[t]).draw()
                                            } catch(s) {
                                                w.debug(s)
                                            }
                                            L()
                                        } else e && "fillText" in lt && (Jt && (lt.fillStyle = at.color.toString(Zt), Jt = !1), (i === c.RIGHT || i === c.CENTER) && (r = Yn.measureTextWidth(e), r = i === c.RIGHT ? -r: -r / 2), lt.fillText(e, t + r, n))
                                    },
                                    Br.prototype.text$line = function(e, n, r, i, s) {
                                        ct === t && (ct = u.createElement("canvas"));
                                        var o = lt;
                                        lt = ct.getContext("2d"),
                                            lt.font = Yn.css;
                                        var a = Yn.measureTextWidth(e);
                                        ct.width = a,
                                            ct.height = Un,
                                            lt = ct.getContext("2d"),
                                            lt.font = Yn.css,
                                            lt.textBaseline = "top",
                                            $r.prototype.text$line(e, 0, 0, 0, c.LEFT),
                                            e = ct.width / ct.height,
                                            lt = o,
                                            lt.bindTexture(lt.TEXTURE_2D, Dt),
                                            lt.texImage2D(lt.TEXTURE_2D, 0, lt.RGBA, lt.RGBA, lt.UNSIGNED_BYTE, ct),
                                            lt.texParameteri(lt.TEXTURE_2D, lt.TEXTURE_MAG_FILTER, lt.LINEAR),
                                            lt.texParameteri(lt.TEXTURE_2D, lt.TEXTURE_MIN_FILTER, lt.LINEAR),
                                            lt.texParameteri(lt.TEXTURE_2D, lt.TEXTURE_WRAP_T, lt.CLAMP_TO_EDGE),
                                            lt.texParameteri(lt.TEXTURE_2D, lt.TEXTURE_WRAP_S, lt.CLAMP_TO_EDGE),
                                            o = 0,
                                            s === c.RIGHT ? o = -a: s === c.CENTER && (o = -a / 2),
                                            s = new Vr,
                                            a = .5 * Un,
                                            s.translate(n + o - a / 2, r - a, i),
                                            s.scale( - e * a, -a, a),
                                            s.translate( - 1, -1, -1),
                                            s.transpose(),
                                            n = new Vr,
                                            n.scale(1, -1, 1),
                                            n.apply(Vt.array()),
                                            n.transpose(),
                                            lt.useProgram(bt),
                                            C("aVertex2d", bt, "aVertex", 3, It),
                                            C("aTextureCoord2d", bt, "aTextureCoord", 2, Ot),
                                            S("uSampler2d", bt, "uSampler", [0]),
                                            S("uIsDrawingText2d", bt, "uIsDrawingText", !0),
                                            T("uModel2d", bt, "uModel", !1, s.array()),
                                            T("uView2d", bt, "uView", !1, n.array()),
                                            E("uColor2d", bt, "uColor", Kt),
                                            lt.bindBuffer(lt.ELEMENT_ARRAY_BUFFER, Ft),
                                            lt.drawElements(lt.TRIANGLES, 6, lt.UNSIGNED_SHORT, 0)
                                    },
                                    at.text = function() {
                                        Vn !== c.SHAPE && (3 === arguments.length ? q(X(arguments[0]), arguments[1], arguments[2], 0) : 4 === arguments.length ? q(X(arguments[0]), arguments[1], arguments[2], arguments[3]) : 5 === arguments.length ? W(X(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], 0) : 6 === arguments.length && W(X(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]))
                                    },
                                    at.textMode = function(e) {
                                        Vn = e
                                    },
                                    at.loadGlyphs = function(e) {
                                        var n, r, i, s, o, a, h, c, f, p, d, m, g = function(e, t) {
                                                var n, r = 0,
                                                    i = [],
                                                    s = RegExp(e, "g");
                                                for (n = i[r] = s.exec(t); n;) r++,
                                                    n = i[r] = s.exec(t);
                                                return i
                                            },
                                            v = function(e) {
                                                var t = g("[A-Za-z][0-9\\- ]+|Z", e);
                                                m = "return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();",
                                                    c = e = a = o = s = i = r = n = 0,
                                                    f = "",
                                                    p = t.length - 1;
                                                for (var l = 0; p > l; l++) {
                                                    var u = t[l][0];
                                                    switch (e = g("[0-9\\-]+", u), u[0]) {
                                                        case "M":
                                                            n = parseFloat(e[0][0]),
                                                                r = parseFloat(e[1][0]),
                                                                m += "curContext.moveTo(" + n + "," + -r + ");";
                                                            break;
                                                        case "L":
                                                            n = parseFloat(e[0][0]),
                                                                r = parseFloat(e[1][0]),
                                                                m += "curContext.lineTo(" + n + "," + -r + ");";
                                                            break;
                                                        case "H":
                                                            n = parseFloat(e[0][0]),
                                                                m += "curContext.lineTo(" + n + "," + -r + ");";
                                                            break;
                                                        case "V":
                                                            r = parseFloat(e[0][0]),
                                                                m += "curContext.lineTo(" + n + "," + -r + ");";
                                                            break;
                                                        case "T":
                                                            o = parseFloat(e[0][0]),
                                                                a = parseFloat(e[1][0]),
                                                                "Q" === f || "T" === f ? (e = Math.sqrt(Math.pow(n - i, 2) + Math.pow(s - r, 2)), c = Math.PI + Math.atan2(i - n, s - r), i = n + Math.sin(c) * e, s = r + Math.cos(c) * e) : (i = n, s = r),
                                                                m += "curContext.quadraticCurveTo(" + i + "," + -s + "," + o + "," + -a + ");",
                                                                n = o,
                                                                r = a;
                                                            break;
                                                        case "Q":
                                                            i = parseFloat(e[0][0]),
                                                                s = parseFloat(e[1][0]),
                                                                o = parseFloat(e[2][0]),
                                                                a = parseFloat(e[3][0]),
                                                                m += "curContext.quadraticCurveTo(" + i + "," + -s + "," + o + "," + -a + ");",
                                                                n = o,
                                                                r = a;
                                                            break;
                                                        case "Z":
                                                            m += "curContext.closePath();"
                                                    }
                                                    f = u[0]
                                                }
                                                return m += "afterPathDraw();",
                                                    m += "curContext.translate(" + d + ",0);",
                                                    m += "}}",
                                                    new Function("beforePathDraw", "afterPathDraw", m)(function() {
                                                            return lt.save(),
                                                                ht.$ensureContext()
                                                        },
                                                        function() {
                                                            F(),
                                                                $(),
                                                                L()
                                                        })
                                            },
                                            y = function(n) {
                                                var r = n.getElementsByTagName("font");
                                                at.glyphTable[e].horiz_adv_x = r[0].getAttribute("horiz-adv-x"),
                                                    r = n.getElementsByTagName("font-face")[0],
                                                    at.glyphTable[e].units_per_em = parseFloat(r.getAttribute("units-per-em")),
                                                    at.glyphTable[e].ascent = parseFloat(r.getAttribute("ascent")),
                                                    at.glyphTable[e].descent = parseFloat(r.getAttribute("descent")),
                                                    n = n.getElementsByTagName("glyph");
                                                for (var r = n.length,
                                                         i = 0; r > i; i++) {
                                                    var s = n[i].getAttribute("unicode"),
                                                        o = n[i].getAttribute("glyph-name");
                                                    d = n[i].getAttribute("horiz-adv-x"),
                                                    null === d && (d = at.glyphTable[e].horiz_adv_x),
                                                        h = n[i].getAttribute("d"),
                                                    h !== t && (m = v(h), at.glyphTable[e][o] = {
                                                        name: o,
                                                        unicode: s,
                                                        horiz_adv_x: d,
                                                        draw: m.draw
                                                    })
                                                }
                                            };
                                        return at.glyphTable[e] = {},
                                            function() {
                                                var t;
                                                try {
                                                    t = u.implementation.createDocument("", "", null)
                                                } catch(n) {
                                                    return void w.debug(n.message)
                                                }
                                                try {
                                                    t.async = !1,
                                                        t.load(e),
                                                        y(t.getElementsByTagName("svg")[0])
                                                } catch(r) {
                                                    w.debug(r);
                                                    try {
                                                        var i = new l.XMLHttpRequest;
                                                        i.open("GET", e, !1),
                                                            i.send(null),
                                                            y(i.responseXML.documentElement)
                                                    } catch(s) {
                                                        w.debug(r)
                                                    }
                                                }
                                            } (e),
                                            at.glyphTable[e]
                                    },
                                    at.param = function(e) {
                                        var t = "data-processing-" + e;
                                        if (it.hasAttribute(t)) return it.getAttribute(t);
                                        for (var t = 0,
                                                 n = it.childNodes.length; n > t; ++t) {
                                            var r = it.childNodes.item(t);
                                            if (1 === r.nodeType && "param" === r.tagName.toLowerCase() && r.getAttribute("name") === e) return r.getAttribute("value")
                                        }
                                        return ut.params.hasOwnProperty(e) ? ut.params[e] : null
                                    },
                                    Hr.prototype.translate = K("translate"), Hr.prototype.transform = K("transform"), Hr.prototype.scale = K("scale"), Hr.prototype.pushMatrix = K("pushMatrix"), Hr.prototype.popMatrix = K("popMatrix"), Hr.prototype.resetMatrix = K("resetMatrix"), Hr.prototype.applyMatrix = K("applyMatrix"), Hr.prototype.rotate = K("rotate"), Hr.prototype.rotateZ = K("rotateZ"), Hr.prototype.shearX = K("shearX"), Hr.prototype.shearY = K("shearY"), Hr.prototype.redraw = K("redraw"), Hr.prototype.toImageData = K("toImageData"), Hr.prototype.ambientLight = K("ambientLight"), Hr.prototype.directionalLight = K("directionalLight"), Hr.prototype.lightFalloff = K("lightFalloff"), Hr.prototype.lightSpecular = K("lightSpecular"), Hr.prototype.pointLight = K("pointLight"), Hr.prototype.noLights = K("noLights"), Hr.prototype.spotLight = K("spotLight"), Hr.prototype.beginCamera = K("beginCamera"), Hr.prototype.endCamera = K("endCamera"), Hr.prototype.frustum = K("frustum"), Hr.prototype.box = K("box"), Hr.prototype.sphere = K("sphere"), Hr.prototype.ambient = K("ambient"), Hr.prototype.emissive = K("emissive"), Hr.prototype.shininess = K("shininess"), Hr.prototype.specular = K("specular"), Hr.prototype.fill = K("fill"), Hr.prototype.stroke = K("stroke"), Hr.prototype.strokeWeight = K("strokeWeight"), Hr.prototype.smooth = K("smooth"), Hr.prototype.noSmooth = K("noSmooth"), Hr.prototype.point = K("point"), Hr.prototype.vertex = K("vertex"), Hr.prototype.endShape = K("endShape"), Hr.prototype.bezierVertex = K("bezierVertex"), Hr.prototype.curveVertex = K("curveVertex"), Hr.prototype.curve = K("curve"), Hr.prototype.line = K("line"), Hr.prototype.bezier = K("bezier"), Hr.prototype.rect = K("rect"), Hr.prototype.ellipse = K("ellipse"), Hr.prototype.background = K("background"), Hr.prototype.image = K("image"), Hr.prototype.textWidth = K("textWidth"), Hr.prototype.text$line = K("text$line"), Hr.prototype.$ensureContext = K("$ensureContext"), Hr.prototype.$newPMatrix = K("$newPMatrix"), Hr.prototype.size = function(e, t, n) {
                                    Y(n === c.WEBGL ? "3D": "2D"),
                                        at.size(e, t, n)
                                },
                                    Hr.prototype.$init = h, $r.prototype.$init = function() {
                                    at.size(at.width, at.height),
                                        lt.lineCap = "round",
                                        at.noSmooth(),
                                        at.disableContextMenu()
                                },
                                    Br.prototype.$init = function() {
                                        at.use3DContext = !0,
                                            at.disableContextMenu()
                                    },
                                    Fr.prototype.$ensureContext = function() {
                                        return lt
                                    },
                                it.getAttribute("tabindex") || it.setAttribute("tabindex", 0), st) ut = new w.Sketch,
                                Y(),
                                at.size = function(e, t, n) {
                                    Y(n && n === c.WEBGL ? "3D": "2D"),
                                        at.size(e, t, n)
                                };
                            else {
                                ut = n instanceof w.Sketch ? n: "function" == typeof n ? new w.Sketch(n) : n ? w.compile(n) : new w.Sketch(function() {}),
                                    at.externals.sketch = ut,
                                    Y(),
                                    it.onfocus = function() {
                                        at.focused = !0
                                    },
                                    it.onblur = function() {
                                        at.focused = !1,
                                        ut.options.globalKeyEvents || (at.__keyPressed = !1, Qn = [], er = null)
                                    },
                                ut.options.pauseOnBlur && (A(l, "focus",
                                    function() {
                                        an && at.loop()
                                    }), A(l, "blur",
                                    function() {
                                        an && sn && (at.noLoop(), an = !0),
                                            at.__keyPressed = !1,
                                            Qn = [],
                                            er = null
                                    }));
                                var ri = ut.options.globalKeyEvents ? l: it;
                                A(ri, "keydown", tt),
                                    A(ri, "keypress", nt),
                                    A(ri, "keyup", rt);
                                for (var ii in w.lib) w.lib.hasOwnProperty(ii) && (w.lib[ii].hasOwnProperty("attach") ? w.lib[ii].attach(at) : w.lib[ii] instanceof Function && w.lib[ii].call(this));
                                var si = function(e) {
                                    if (ut.imageCache.pending || PFont.preloading.pending(100)) l.setTimeout(function() {
                                            si(e)
                                        },
                                        100);
                                    else {
                                        if (l.opera) {
                                            var t, n, i = ut.imageCache.operaCache;
                                            for (t in i) i.hasOwnProperty(t) && (n = i[t], null !== n && u.body.removeChild(n), delete i[t])
                                        }
                                        ut.attach(e, r),
                                            ut.onLoad(e),
                                        e.setup && (e.setup(), e.resetMatrix(), ut.onSetup()),
                                            G(),
                                        e.draw && (an ? e.loop() : e.redraw())
                                    }
                                };
                                this.externals.canvas.id !== t && this.externals.canvas.id.length || (this.externals.canvas.id = "__processing" + b.length),
                                    x[this.externals.canvas.id] = b.length,
                                    b.push(this),
                                    si(at)
                            }
                        };
                    return w.debug = function() {
                        return "console" in l ?
                            function(e) {
                                l.console.log("Processing.js: " + e)
                            }: h
                    } (),
                        w.prototype = r,
                        w.instances = b,
                        w.getInstanceById = function(e) {
                            return b[x[e]]
                        },
                        function(e) {
                            function t(e) {
                                return function() {
                                    throw "Processing.js does not support " + e + "."
                                }
                            }
                            for (var n, r, i = "open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "), s = i.length; s--;) n = i[s],
                                r = n.replace("()", ""),
                                e[r] = t(n)
                        } (r),
                        w
                }
            },
                {}],
            27 : [function(e, t) {
                var n = {
                    virtEquals: e("./Helpers/virtEquals"),
                    virtHashCode: e("./Helpers/virtHashCode"),
                    ObjectIterator: e("./Helpers/ObjectIterator"),
                    PConstants: e("./Helpers/PConstants"),
                    ArrayList: e("./Objects/ArrayList"),
                    HashMap: e("./Objects/HashMap"),
                    PVector: e("./Objects/PVector"),
                    PFont: e("./Objects/PFont"),
                    Char: e("./Objects/Char"),
                    XMLAttribute: e("./Objects/XMLAttribute"),
                    XMLElement: e("./Objects/XMLElement"),
                    PMatrix2D: e("./Objects/PMatrix2D"),
                    PMatrix3D: e("./Objects/PMatrix3D"),
                    PShape: e("./Objects/PShape"),
                    colors: e("./Objects/webcolors"),
                    PShapeSVG: e("./Objects/PShapeSVG"),
                    CommonFunctions: e("./P5Functions/commonFunctions"),
                    defaultScope: e("./Helpers/defaultScope"),
                    Processing: e("./Processing"),
                    setupParser: e("./Parser/Parser"),
                    finalize: e("./Helpers/finalizeProcessing")
                };
                n.extend = {
                    withMath: e("./P5Functions/Math.js"),
                    withProxyFunctions: e("./P5Functions/JavaProxyFunctions")(n.virtHashCode, n.virtEquals),
                    withTouch: e("./P5Functions/touchmouse"),
                    withCommonFunctions: n.CommonFunctions.withCommonFunctions
                },
                    t.exports = function(t, r) {
                        var i = function() {},
                            s = n.virtEquals,
                            o = n.virtHashCode,
                            a = n.PConstants,
                            l = n.CommonFunctions,
                            u = n.ObjectIterator,
                            h = n.Char,
                            c = n.XMLAttribute(),
                            f = n.ArrayList({
                                virtHashCode: o,
                                virtEquals: s
                            }),
                            s = n.HashMap({
                                virtHashCode: o,
                                virtEquals: s
                            }),
                            o = n.PVector({
                                PConstants: a
                            }),
                            p = n.PFont({
                                Browser: t,
                                noop: i
                            }),
                            c = n.XMLElement({
                                Browser: t,
                                XMLAttribute: c
                            }),
                            d = n.PMatrix2D({
                                p: l
                            }),
                            m = n.PMatrix3D({
                                p: l
                            }),
                            d = n.PShape({
                                PConstants: a,
                                PMatrix2D: d,
                                PMatrix3D: m
                            }),
                            l = n.PShapeSVG({
                                CommonFunctions: l,
                                PConstants: a,
                                PShape: d,
                                XMLElement: c,
                                colors: n.colors
                            }),
                            a = n.defaultScope({
                                ArrayList: f,
                                HashMap: s,
                                PVector: o,
                                PFont: p,
                                PShapeSVG: l,
                                ObjectIterator: u,
                                PConstants: a,
                                Char: h,
                                XMLElement: c,
                                XML: c
                            }),
                            u = n.Processing({
                                defaultScope: a,
                                Browser: t,
                                extend: n.extend,
                                noop: i
                            }),
                            u = n.setupParser(u, {
                                Browser: t,
                                aFunctions: r,
                                defaultScope: a
                            });
                        return u = n.finalize(u, {
                            version: e("../package.json").version,
                            isDomPresent: t.isDomPresent,
                            window: t.window,
                            document: t.document,
                            noop: i
                        })
                    }
            },
                {
                    "../package.json": 2,
                    "./Helpers/ObjectIterator": 3,
                    "./Helpers/PConstants": 4,
                    "./Helpers/defaultScope": 5,
                    "./Helpers/finalizeProcessing": 6,
                    "./Helpers/virtEquals": 7,
                    "./Helpers/virtHashCode": 8,
                    "./Objects/ArrayList": 9,
                    "./Objects/Char": 10,
                    "./Objects/HashMap": 11,
                    "./Objects/PFont": 12,
                    "./Objects/PMatrix2D": 13,
                    "./Objects/PMatrix3D": 14,
                    "./Objects/PShape": 15,
                    "./Objects/PShapeSVG": 16,
                    "./Objects/PVector": 17,
                    "./Objects/XMLAttribute": 18,
                    "./Objects/XMLElement": 19,
                    "./Objects/webcolors": 20,
                    "./P5Functions/JavaProxyFunctions": 21,
                    "./P5Functions/Math.js": 22,
                    "./P5Functions/commonFunctions": 23,
                    "./P5Functions/touchmouse": 24,
                    "./Parser/Parser": 25,
                    "./Processing": 26
                }]
        },
        {},
        [1]),
    function() {
        var e, t, n, r;
        window.App = this,
            window.UA = navigator.userAgent.toLowerCase(),
            String.prototype.capitalize = function() {
                return this.charAt(0).toUpperCase() + this.slice(1)
            },
            Number.prototype.toZeroPadding = function(e) {
                return null == e && (e = 3),
                    (Array(e).join("0") + this).slice( - e)
            },
            Array.prototype.remove = function(e, t) {
                var n;
                return "number" != typeof e ? this.remove(this.indexOf(e)) : (n = this.slice((t || e) + 1 || this.length), this.push.apply(this, n))
            },
            t = new Date,
            r = t.getYear(),
            n = t.getMonth() + 1,
            e = t.getDate(),
        2e3 > r && (r += 1900),
            window.Time = {
                now: {
                    year: r,
                    month: n,
                    day: e
                }
            }
    }.call(this),
    function() {
        window.Lightbox = {
            wrapperId: "#DOMWindowOverlay",
            boxId: "#DOMWindow",
            closeId: "#DOMWindowClose",
            show: function(e) {
                return $(this.boxId).append(e),
                    $("html, body").css({
                        overflow: "hidden"
                    }),
                    $(this.wrapperId).show(),
                    this.bindClose()
            },
            hide: function() {
                return $(this.wrapperId).hide(),
                    $("html, body").css({
                        overflow: "auto"
                    }),
                    $(this.boxId).empty(),
                    $(this.closeId).off("click")
            },
            bindClose: function() {
                return $(this.closeId).on("click",
                    function(e) {
                        return function(t) {
                            return t.preventDefault(),
                                e.hide()
                        }
                    } (this))
            }
        }
    }.call(this),
    function() {
        this.Pixels = function() {
            function e(e, t, n) {
                var r, i, s;
                for (this.p = e, this.width = t, this.height = n, this.numParticles = 44, this.mx = 0, this.my = 0, this.impulsX = 0, this.impulsY = 0, this.impulsToX = 0, this.impulsToY = 0, this.pulse = !1, this.resetFrame = 0, this.resetFrameInterval = 600, this.pixels = [], r = i = 0, s = this.numParticles; s > i; r = i += 1) this.pixels[r] = {
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    toX: this.width,
                    toY: this.height,
                    color: 200 * Math.random() + 55,
                    angle: Math.random() * Math.PI * 2,
                    size: 0,
                    toSize: 6 * Math.random() + 1,
                    r: 0,
                    g: 0,
                    b: 0,
                    toR: 255 * Math.random(),
                    toG: 255 * Math.random(),
                    toB: 255 * Math.random()
                },
                    this.pixels[r].toX = this.pixels[r].x,
                    this.pixels[r].toY = this.pixels[r].y,
                    this.pixels[r].speedX = 0,
                    this.pixels[r].speedY = 0;
                this.transition = function() {
                    var t, n, i;
                    for (i = [], r = t = 0, n = this.pixels.length; n > t; r = t += 1) e = this.pixels[r],
                        e.toX = Math.random() * this.width,
                        e.toY = Math.random() * this.height,
                        e.speedX = Math.cos(e.angle) * Math.random() * 3 / 8,
                        i.push(e.speedY = Math.sin(e.angle) * Math.random() * 3 / 8);
                    return i
                }
            }
            return e.prototype.resize = function(e, t) {
                this.width = e,
                    this.height = t,
                    this.p.fill(255),
                    this.p.rect(0, 0, e, t)
            },
                e.prototype.framecount = 0,
                e.prototype.update = function() {
                    var e, t, n, r, i, s, o, a;
                    for (this.mx = Math.random() * this.width, this.my = Math.random() * this.height, this.impulsX = this.impulsX + (this.impulsToX - this.impulsX) / 30, this.impulsY = this.impulsY + (this.impulsToY - this.impulsY) / 30, e = i = 0, o = this.pixels.length; o > i; e = i += 1) this.pixels[e].x = this.pixels[e].x + (this.pixels[e].toX - this.pixels[e].x) / 10,
                        this.pixels[e].y = this.pixels[e].y + (this.pixels[e].toY - this.pixels[e].y) / 10,
                        this.pixels[e].size = this.pixels[e].size + (this.pixels[e].toSize - this.pixels[e].size) / 10,
                        this.pixels[e].r = this.pixels[e].r + (this.pixels[e].toR - this.pixels[e].r) / 10,
                        this.pixels[e].g = this.pixels[e].g + (this.pixels[e].toG - this.pixels[e].g) / 10,
                        this.pixels[e].b = this.pixels[e].b + (this.pixels[e].toB - this.pixels[e].b) / 10;
                    for (e = s = 0, a = this.pixels.length; a > s; e = s += 1) this.pixels[e].toX += this.pixels[e].speedX,
                        this.pixels[e].toY += this.pixels[e].speedY,
                    this.pixels[e].x < 0 && (this.pixels[e].x = this.width, this.pixels[e].toX = this.width),
                    this.pixels[e].x > this.width && (this.pixels[e].x = 0, this.pixels[e].toX = 0),
                    this.pixels[e].y < 0 && (this.pixels[e].y = this.height, this.pixels[e].toY = this.height),
                    this.pixels[e].y > this.height && (this.pixels[e].y = 0, this.pixels[e].toY = 0),
                        this.pixels[e].toX += Math.floor(this.impulsX * this.pixels[e].size / 30),
                        this.pixels[e].toY += Math.floor(this.impulsY * this.pixels[e].size / 30);
                    return r = Math.random(),
                    .03 > r && (t = Math.floor(Math.random() * this.pixels.length), n = Math.floor(Math.random() * this.pixels.length), this.pixels[t].size = 40 * Math.random(), this.pixels[t].size = 20 * Math.random()),
                        this.framecount++,
                        r = Math.random(),
                    this.pulse && (this.impulsX = 800 * Math.random() - 400, this.impulsY = 400 * -Math.random() + 100, this.pulse = !1),
                        this.framecount > this.resetFrame ? (this.framecount = 0, this.resetFrame = this.resetFrameInterval, this.impulsX = 80 * Math.random() - 40, this.impulsY = 40 * -Math.random() + 10, r = Math.random(), this.transition()) : void 0
                },
                e.prototype.draw = function() {
                    var e, t, n, r;
                    for (r = [], e = t = 0, n = this.pixels.length; n > t; e = t += 1) this.p.fill(Math.floor(this.pixels[e].r), Math.floor(this.pixels[e].g), Math.floor(this.pixels[e].b)),
                        r.push(this.p.ellipse(this.pixels[e].x, this.pixels[e].y, this.pixels[e].size, this.pixels[e].size));
                    return r
                },
                e
        } ()
    }.call(this),
    function() {
        this.Contact = function() {
            function e() {
                new App.Contact.Mail("#form_contact")
            }
            return e
        } (),
            this.Contact.Mail = function() {
                function e(e) {
                    var t, n, r;
                    r = this,
                        t = $(e),
                        n = $("" + e + " .submit"),
                        n.on("click",
                            function(t) {
                                var n;
                                return t.preventDefault(),
                                    n = r.validate(e),
                                    n !== !1 ? ($(this).val("Sending..."), $(this).addClass("activated"), $(this).attr({
                                        disabled: "disabled"
                                    }), r.deliver(e)) : void 0
                            })
                }
                return e.prototype.deliver = function(e) {
                    var t, n, r;
                    return r = this,
                        n = {},
                        t = $(e),
                        $("" + e + " input, " + e + " textarea").each(function() {
                            return n[$(this).attr("name")] = $(this).val()
                        }),
                        $.ajax({
                            type: t.attr("method"),
                            data: n,
                            url: t.attr("action"),
                            success: function(t) {
                                return r.deliverComplete(t, e).empty(e)
                            },
                            error: function(t) {
                                return r.deliverComplete(t.responseText, e)
                            }
                        })
                },
                    e.prototype.empty = function(e) {
                        return $("" + e + " .input, " + e + " textarea").each(function() {
                            return $(this).val("")
                        })
                    },
                    e.prototype.deliverComplete = function(e, t) {
                        var n;
                        return App.Lightbox.show(e),
                            n = $("" + t + " .submit"),
                            this.resetBtn(n),
                            this
                    },
                    e.prototype.resetBtn = function(e) {
                        e.val("Send"),
                            e.removeClass("activated"),
                            e.removeAttr("disabled")
                    },
                    e.prototype.validate = function(e) {
                        var t, n, r;
                        return r = this,
                            t = $(e),
                            n = 0,
                            $(e).children(".input").each(function() {
                                var e, t, i, s;
                                if (i = $(this).attr("type"), t = $(this).attr("id"), s = $(this).val(), void 0 === i && (i = "text"), e = !0, "email" === i) {
                                    if (e = r.validateMail(s), e === !1) return $(this).addClass("error"),
                                        void(n += 1);
                                    $(this).removeClass("error")
                                }
                                return "text" === i ? (e = r.validateLength(s), e === !1 ? ($(this).addClass("error"), n += 1) : $(this).removeClass("error")) : void 0
                            }),
                            0 === n ? !0 : !1
                    },
                    e.prototype.validateMail = function(e) {
                        return e.match(/^(?:(?:(?:(?:[a-zA-Z0-9_!#\$\%&'*+/ = ?\ ^ ` {}~ | \ - ] + )( ? :\. ( ? :[a - zA - Z0 - 9_ ! #\$\ % &'*+/=?\^`{}~|\-]+))*)|(?:"(?:\\[^\r\n]|[^\\"])*")))\@(?:(?:(?:(?:[a-zA-Z0-9_!#\$\%&' * +/=?\^`{}~|\-]+)(?:\.(?:[a-zA-Z0-9_!#\$\%&'*+/ = ?\ ^ ` {}~ | \ - ] + )) * ) | ( ? :\ [( ? :\\\S | [\x21 - \x5a\x5e - \x7e]) * \]))) $ / ) ? !0 : !1
                    },
                    e.prototype.validateLength = function(e) {
                        return e.length > 0 ? !0 : !1
                    },
                    e
            } ()
    }.call(this),
    function() {
        this.Work = function() {
            function e(e) {
                return e.hide(),
                    this.$placeholder = $("#placeholder"),
                    this.$frontImg = $("#front"),
                    this.$frontIfr = $("#frontifr"),
                    this.$lis = $("#placeholder").find("li"),
                    this.init(),
                    this.set(),
                    this
            }
            return e.prototype.init = function() {
                return this.$lis.first().addClass("current"),
                    this.fetch(this.$lis.first()),
                    this
            },
                e.prototype.set = function() {
                    var e;
                    return e = this,
                        this.$lis.on("click",
                            function() {
                                return e.$lis.removeClass("current"),
                                    $(this).addClass("current"),
                                    e.fetch($(this))
                            }),
                        this
                },
                e.prototype.fetch = function(e) {
                    var t, n, r;
                    return t = e.children("img"),
                        r = t.data("yid"),
                        null != r ? (this.$frontIfr.attr("src", this.ytsrc(r)), this.$frontIfr.show(), this.$frontImg.hide()) : (this.$frontIfr.attr("src", ""), this.$frontIfr.hide(), n = t.attr("src"), this.$frontImg.attr("src", n), this.$frontImg.show()),
                        this
                },
                e.prototype.ytsrc = function(e) {
                    return "//www.youtube.com/embed/" + e + "?rel=0&autohide=0&showinfo=0&controls=1&enablejsapi=1&theme=light&color=white&fs=1&vq=hd1080"
                },
                e
        } ()
    }.call(this),
    function() {
        var e, t = {}.hasOwnProperty,
            n = function(e, n) {
                function r() {
                    this.constructor = e
                }
                for (var i in n) t.call(n, i) && (e[i] = n[i]);
                return r.prototype = n.prototype,
                    e.prototype = new r,
                    e.__super__ = n.prototype,
                    e
            };
        e = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return n(t, e),
                t.prototype.initialize = function(e, t, n, r) {
                    return this.id = e,
                        this.$menu = t,
                        this.$loader = n,
                        this.$canvas = r,
                        Backbone.history.start({
                            pushState: !0
                        })
                },
                t.prototype.routes = {
                    "*href": "load"
                },
                t.prototype.work = App.Work,
                t.prototype.contact = App.Contact,
                t.prototype.klass = null,
                t.prototype.render = function() {
                    var e, t, n;
                    null != this.klass && delete this.klass,
                        e = $(this.id).children(),
                        t = $(e).attr("id"),
                        this.$canvas.show(),
                        n = this[t],
                        this.klass = null != n ? new n(this.$canvas) : null
                },
                t.prototype.load = function(e) {
                    var t, n;
                    this.loadFlg = !0,
                        setTimeout(function(e) {
                            return function() {
                                return e.loadFlg !== !1 ? e.$loader.show() : void 0
                            }
                        } (this), 100),
                        e = null === e ? "/": "/" + e,
                        t = e.split(/\//),
                        t = "/" + t[1],
                        this.$menu.children("li").each(function() {
                            var e, n;
                            return e = $(this).children("a"),
                                n = e.attr("href"),
                                n === t ? $(this).addClass("current") : $(this).removeClass("current")
                        }),
                        n = this,
                        $(this.id).load("" + e + " " + this.id + " > *",
                            function(t, r, i) {
                                var s;
                                return "error" === r && (s = $(i.responseText).find(".Error").parent().html(), scrollTo(0, 1), $(n.id).empty().append(s), n.afterLoad(e)),
                                    setTimeout(function() {
                                            return scrollTo(0, 1),
                                                n.render(),
                                                n.afterLoad(e)
                                        },
                                        1)
                            })
                },
                t.prototype.afterLoad = function(e) {
                    var t;
                    e = e.split(/\//),
                        t = e[e.length - 1],
                        t = "" === t ? "": t.toUpperCase() + " | ",
                        t += "",
                        document.title = t,
                        this.loadFlg = !1,
                        this.$loader.hide()
                },
                t
        } (Backbone.Router),
            $(function() {
                var t, n, r, i, s, o, a, l, u, h, c, f, p, d, m, g;
                t = $("body"),
                    l = "#main",
                    i = $("#menu"),
                    r = $("#DOMJack"),
                    n = $("#px"),
                    p = new e(l, i, r, n),
                    c = function(e) {
                        var t, n;
                        return t = $(e.currentTarget),
                            null != t.attr("target") && "_blank" === t.attr("target") ? !0 : (n = t.attr("href"), e.preventDefault(), p.navigate(n, !0), !1)
                    },
                    $(document).on("click", "a", c),
                    u = t.data("mode"),
                    t.attr("id", u),
                    o = 255,
                u.match(/night/) && (o = 0),
                    $(document).on("click", "a",
                        function() {
                            return m.pulse = !0
                        }),
                    g = window.innerWidth,
                    a = window.innerHeight,
                    s = document.getElementById("cvpx"),
                    f = !1,
                    h = new Processing(s),
                    m = new App.Pixels(h, g, a),
                    h.setup = function() {
                        return h.size(g, a),
                            h.fill(o),
                            h.rect(0, 0, g, a),
                            h.noStroke(),
                            h.frameRate(60)
                    },
                    h.draw = function() {
                        return f ? (m.update(), h.fill(o, 150), h.rect(0, 0, g, a), m.draw()) : void 0
                    },
                    h.setup(),
                    setTimeout(function() {
                            return f = !0
                        },
                        100),
                    d = !1,
                    $(window).on("resize",
                        function() {
                            return d !== !1 && clearTimeout(d),
                                d = setTimeout(function() {
                                        return g = window.innerWidth,
                                            a = window.innerHeight,
                                            h.size(g, a),
                                            m.resize(g, a)
                                    },
                                    400)
                        })
            })
    }.call(this);
