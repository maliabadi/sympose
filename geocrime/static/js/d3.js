(function () {
    function t(t) {
        return t.target
    }

    function n(t) {
        return t.source
    }

    function e(t, n) {
        try {
            for (var e in n)Object.defineProperty(t.prototype, e, {value: n[e], enumerable: !1})
        } catch (r) {
            t.prototype = n
        }
    }

    function r(t) {
        for (var n = -1, e = t.length, r = []; e > ++n;)r.push(t[n]);
        return r
    }

    function i(t) {
        return Array.prototype.slice.call(t)
    }

    function u() {
    }

    function a(t) {
        return t
    }

    function o() {
        return!0
    }

    function c(t) {
        return"function" == typeof t ? t : function () {
            return t
        }
    }

    function l(t, n, e) {
        return function () {
            var r = e.apply(n, arguments);
            return arguments.length ? t : r
        }
    }

    function s(t) {
        return null != t && !isNaN(t)
    }

    function f(t) {
        return t.length
    }

    function h(t) {
        return t.trim().replace(/\s+/g, " ")
    }

    function d(t) {
        for (var n = 1; t * n % 1;)n *= 10;
        return n
    }

    function g(t) {
        return 1 === t.length ? function (n, e) {
            t(null == n ? e : null)
        } : t
    }

    function p(t) {
        return t.responseText
    }

    function m(t) {
        return JSON.parse(t.responseText)
    }

    function v(t) {
        var n = document.createRange();
        return n.selectNode(document.body), n.createContextualFragment(t.responseText)
    }

    function y(t) {
        return t.responseXML
    }

    function M() {
    }

    function b(t) {
        function n() {
            for (var n, r = e, i = -1, u = r.length; u > ++i;)(n = r[i].on) && n.apply(this, arguments);
            return t
        }

        var e = [], r = new u;
        return n.on = function (n, i) {
            var u, a = r.get(n);
            return 2 > arguments.length ? a && a.on : (a && (a.on = null, e = e.slice(0, u = e.indexOf(a)).concat(e.slice(u + 1)), r.remove(n)), i && e.push(r.set(n, {on: i})), t)
        }, n
    }

    function x(t, n) {
        return n - (t ? 1 + Math.floor(Math.log(t + Math.pow(10, 1 + Math.floor(Math.log(t) / Math.LN10) - n)) / Math.LN10) : 1)
    }

    function _(t) {
        return t + ""
    }

    function w(t, n) {
        var e = Math.pow(10, 3 * Math.abs(8 - n));
        return{scale: n > 8 ? function (t) {
            return t / e
        } : function (t) {
            return t * e
        }, symbol: t}
    }

    function S(t) {
        return function (n) {
            return 0 >= n ? 0 : n >= 1 ? 1 : t(n)
        }
    }

    function k(t) {
        return function (n) {
            return 1 - t(1 - n)
        }
    }

    function E(t) {
        return function (n) {
            return.5 * (.5 > n ? t(2 * n) : 2 - t(2 - 2 * n))
        }
    }

    function A(t) {
        return t * t
    }

    function N(t) {
        return t * t * t
    }

    function T(t) {
        if (0 >= t)return 0;
        if (t >= 1)return 1;
        var n = t * t, e = n * t;
        return 4 * (.5 > t ? e : 3 * (t - n) + e - .75)
    }

    function q(t) {
        return function (n) {
            return Math.pow(n, t)
        }
    }

    function C(t) {
        return 1 - Math.cos(t * Ru / 2)
    }

    function z(t) {
        return Math.pow(2, 10 * (t - 1))
    }

    function D(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function L(t, n) {
        var e;
        return 2 > arguments.length && (n = .45), arguments.length ? e = n / (2 * Ru) * Math.asin(1 / t) : (t = 1, e = n / 4), function (r) {
            return 1 + t * Math.pow(2, 10 * -r) * Math.sin(2 * (r - e) * Ru / n)
        }
    }

    function F(t) {
        return t || (t = 1.70158), function (n) {
            return n * n * ((t + 1) * n - t)
        }
    }

    function H(t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }

    function R() {
        d3.event.stopPropagation(), d3.event.preventDefault()
    }

    function P() {
        for (var t, n = d3.event; t = n.sourceEvent;)n = t;
        return n
    }

    function j(t) {
        for (var n = new M, e = 0, r = arguments.length; r > ++e;)n[arguments[e]] = b(n);
        return n.of = function (e, r) {
            return function (i) {
                try {
                    var u = i.sourceEvent = d3.event;
                    i.target = t, d3.event = i, n[i.type].apply(e, r)
                } finally {
                    d3.event = u
                }
            }
        }, n
    }

    function O(t) {
        var n = [t.a, t.b], e = [t.c, t.d], r = U(n), i = Y(n, e), u = U(I(e, n, -i)) || 0;
        n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Ou, this.translate = [t.e, t.f], this.scale = [r, u], this.skew = u ? Math.atan2(i, u) * Ou : 0
    }

    function Y(t, n) {
        return t[0] * n[0] + t[1] * n[1]
    }

    function U(t) {
        var n = Math.sqrt(Y(t, t));
        return n && (t[0] /= n, t[1] /= n), n
    }

    function I(t, n, e) {
        return t[0] += e * n[0], t[1] += e * n[1], t
    }

    function V(t) {
        return"transform" == t ? d3.interpolateTransform : d3.interpolate
    }

    function X(t, n) {
        return n = n - (t = +t) ? 1 / (n - t) : 0, function (e) {
            return(e - t) * n
        }
    }

    function Z(t, n) {
        return n = n - (t = +t) ? 1 / (n - t) : 0, function (e) {
            return Math.max(0, Math.min(1, (e - t) * n))
        }
    }

    function B() {
    }

    function $(t, n, e) {
        return new J(t, n, e)
    }

    function J(t, n, e) {
        this.r = t, this.g = n, this.b = e
    }

    function G(t) {
        return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
    }

    function K(t, n, e) {
        var r, i, u, a = 0, o = 0, c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(t))switch (i = r[2].split(","), r[1]) {
            case"hsl":
                return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
            case"rgb":
                return n(nn(i[0]), nn(i[1]), nn(i[2]))
        }
        return(u = aa.get(t)) ? n(u.r, u.g, u.b) : (null != t && "#" === t.charAt(0) && (4 === t.length ? (a = t.charAt(1), a += a, o = t.charAt(2), o += o, c = t.charAt(3), c += c) : 7 === t.length && (a = t.substring(1, 3), o = t.substring(3, 5), c = t.substring(5, 7)), a = parseInt(a, 16), o = parseInt(o, 16), c = parseInt(c, 16)), n(a, o, c))
    }

    function W(t, n, e) {
        var r, i, u = Math.min(t /= 255, n /= 255, e /= 255), a = Math.max(t, n, e), o = a - u, c = (a + u) / 2;
        return o ? (i = .5 > c ? o / (a + u) : o / (2 - a - u), r = t == a ? (n - e) / o + (e > n ? 6 : 0) : n == a ? (e - t) / o + 2 : (t - n) / o + 4, r *= 60) : i = r = 0, en(r, i, c)
    }

    function Q(t, n, e) {
        t = tn(t), n = tn(n), e = tn(e);
        var r = gn((.4124564 * t + .3575761 * n + .1804375 * e) / sa), i = gn((.2126729 * t + .7151522 * n + .072175 * e) / fa), u = gn((.0193339 * t + .119192 * n + .9503041 * e) / ha);
        return ln(116 * i - 16, 500 * (r - i), 200 * (i - u))
    }

    function tn(t) {
        return.04045 >= (t /= 255) ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function nn(t) {
        var n = parseFloat(t);
        return"%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n
    }

    function en(t, n, e) {
        return new rn(t, n, e)
    }

    function rn(t, n, e) {
        this.h = t, this.s = n, this.l = e
    }

    function un(t, n, e) {
        function r(t) {
            return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? u + (a - u) * t / 60 : 180 > t ? a : 240 > t ? u + (a - u) * (240 - t) / 60 : u
        }

        function i(t) {
            return Math.round(255 * r(t))
        }

        var u, a;
        return t %= 360, 0 > t && (t += 360), n = 0 > n ? 0 : n > 1 ? 1 : n, e = 0 > e ? 0 : e > 1 ? 1 : e, a = .5 >= e ? e * (1 + n) : e + n - e * n, u = 2 * e - a, $(i(t + 120), i(t), i(t - 120))
    }

    function an(t, n, e) {
        return new on(t, n, e)
    }

    function on(t, n, e) {
        this.h = t, this.c = n, this.l = e
    }

    function cn(t, n, e) {
        return ln(e, Math.cos(t *= ju) * n, Math.sin(t) * n)
    }

    function ln(t, n, e) {
        return new sn(t, n, e)
    }

    function sn(t, n, e) {
        this.l = t, this.a = n, this.b = e
    }

    function fn(t, n, e) {
        var r = (t + 16) / 116, i = r + n / 500, u = r - e / 200;
        return i = dn(i) * sa, r = dn(r) * fa, u = dn(u) * ha, $(pn(3.2404542 * i - 1.5371385 * r - .4985314 * u), pn(-.969266 * i + 1.8760108 * r + .041556 * u), pn(.0556434 * i - .2040259 * r + 1.0572252 * u))
    }

    function hn(t, n, e) {
        return an(180 * (Math.atan2(e, n) / Ru), Math.sqrt(n * n + e * e), t)
    }

    function dn(t) {
        return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
    }

    function gn(t) {
        return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
    }

    function pn(t) {
        return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
    }

    function mn(t) {
        return Iu(t, Ma), t
    }

    function vn(t) {
        return function () {
            return ga(t, this)
        }
    }

    function yn(t) {
        return function () {
            return pa(t, this)
        }
    }

    function Mn(t, n) {
        function e() {
            this.removeAttribute(t)
        }

        function r() {
            this.removeAttributeNS(t.space, t.local)
        }

        function i() {
            this.setAttribute(t, n)
        }

        function u() {
            this.setAttributeNS(t.space, t.local, n)
        }

        function a() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }

        function o() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }

        return t = d3.ns.qualify(t), null == n ? t.local ? r : e : "function" == typeof n ? t.local ? o : a : t.local ? u : i
    }

    function bn(t) {
        return RegExp("(?:^|\\s+)" + d3.requote(t) + "(?:\\s+|$)", "g")
    }

    function xn(t, n) {
        function e() {
            for (var e = -1; i > ++e;)t[e](this, n)
        }

        function r() {
            for (var e = -1, r = n.apply(this, arguments); i > ++e;)t[e](this, r)
        }

        t = t.trim().split(/\s+/).map(_n);
        var i = t.length;
        return"function" == typeof n ? r : e
    }

    function _n(t) {
        var n = bn(t);
        return function (e, r) {
            if (i = e.classList)return r ? i.add(t) : i.remove(t);
            var i = e.className, u = null != i.baseVal, a = u ? i.baseVal : i;
            r ? (n.lastIndex = 0, n.test(a) || (a = h(a + " " + t), u ? i.baseVal = a : e.className = a)) : a && (a = h(a.replace(n, " ")), u ? i.baseVal = a : e.className = a)
        }
    }

    function wn(t, n, e) {
        function r() {
            this.style.removeProperty(t)
        }

        function i() {
            this.style.setProperty(t, n, e)
        }

        function u() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }

        return null == n ? r : "function" == typeof n ? u : i
    }

    function Sn(t, n) {
        function e() {
            delete this[t]
        }

        function r() {
            this[t] = n
        }

        function i() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }

        return null == n ? e : "function" == typeof n ? i : r
    }

    function kn(t) {
        return{__data__: t}
    }

    function En(t) {
        return function () {
            return ya(this, t)
        }
    }

    function An(t) {
        return arguments.length || (t = d3.ascending), function (n, e) {
            return t(n && n.__data__, e && e.__data__)
        }
    }

    function Nn(t, n, e) {
        function r() {
            var n = this[u];
            n && (this.removeEventListener(t, n, n.$), delete this[u])
        }

        function i() {
            function i(t) {
                var e = d3.event;
                d3.event = t, o[0] = a.__data__;
                try {
                    n.apply(a, o)
                } finally {
                    d3.event = e
                }
            }

            var a = this, o = Yu(arguments);
            r.call(this), this.addEventListener(t, this[u] = i, i.$ = e), i._ = n
        }

        var u = "__on" + t, a = t.indexOf(".");
        return a > 0 && (t = t.substring(0, a)), n ? i : r
    }

    function Tn(t, n) {
        for (var e = 0, r = t.length; r > e; e++)for (var i, u = t[e], a = 0, o = u.length; o > a; a++)(i = u[a]) && n(i, a, e);
        return t
    }

    function qn(t) {
        return Iu(t, xa), t
    }

    function Cn(t, n) {
        return Iu(t, wa), t.id = n, t
    }

    function zn(t, n, e, r) {
        var i = t.__transition__ || (t.__transition__ = {active: 0, count: 0}), a = i[e];
        if (!a) {
            var o = r.time;
            return a = i[e] = {tween: new u, event: d3.dispatch("start", "end"), time: o, ease: r.ease, delay: r.delay, duration: r.duration}, ++i.count, d3.timer(function (r) {
                function u(r) {
                    return i.active > e ? l() : (i.active = e, h.start.call(t, s, n), a.tween.forEach(function (e, r) {
                        (r = r.call(t, s, n)) && p.push(r)
                    }), c(r) || d3.timer(c, 0, o), 1)
                }

                function c(r) {
                    if (i.active !== e)return l();
                    for (var u = (r - d) / g, a = f(u), o = p.length; o > 0;)p[--o].call(t, a);
                    return u >= 1 ? (l(), h.end.call(t, s, n), 1) : void 0
                }

                function l() {
                    return--i.count ? delete i[e] : delete t.__transition__, 1
                }

                var s = t.__data__, f = a.ease, h = a.event, d = a.delay, g = a.duration, p = [];
                return r >= d ? u(r) : d3.timer(u, d, o), 1
            }, 0, o), a
        }
    }

    function Dn(t) {
        return null == t && (t = ""), function () {
            this.textContent = t
        }
    }

    function Ln(t, n, e, r) {
        var i = t.id;
        return Tn(t, "function" == typeof e ? function (t, u, a) {
            t.__transition__[i].tween.set(n, r(e.call(t, t.__data__, u, a)))
        } : (e = r(e), function (t) {
            t.__transition__[i].tween.set(n, e)
        }))
    }

    function Fn() {
        for (var t, n = Date.now(), e = qa; e;)t = n - e.then, t >= e.delay && (e.flush = e.callback(t)), e = e.next;
        var r = Hn() - n;
        r > 24 ? (isFinite(r) && (clearTimeout(Aa), Aa = setTimeout(Fn, r)), Ea = 0) : (Ea = 1, Ca(Fn))
    }

    function Hn() {
        for (var t = null, n = qa, e = 1 / 0; n;)n.flush ? (delete Ta[n.callback.id], n = t ? t.next = n.next : qa = n.next) : (e = Math.min(e, n.then + n.delay), n = (t = n).next);
        return e
    }

    function Rn(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > za && (window.scrollX || window.scrollY)) {
                e = d3.select(document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                var i = e[0][0].getScreenCTM();
                za = !(i.f || i.e), e.remove()
            }
            return za ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
        }
        var u = t.getBoundingClientRect();
        return[n.clientX - u.left - t.clientLeft, n.clientY - u.top - t.clientTop]
    }

    function Pn() {
    }

    function jn(t) {
        var n = t[0], e = t[t.length - 1];
        return e > n ? [n, e] : [e, n]
    }

    function On(t) {
        return t.rangeExtent ? t.rangeExtent() : jn(t.range())
    }

    function Yn(t, n) {
        var e, r = 0, i = t.length - 1, u = t[r], a = t[i];
        return u > a && (e = r, r = i, i = e, e = u, u = a, a = e), (n = n(a - u)) && (t[r] = n.floor(u), t[i] = n.ceil(a)), t
    }

    function Un() {
        return Math
    }

    function In(t, n, e, r) {
        function i() {
            var i = Math.min(t.length, n.length) > 2 ? Gn : Jn, c = r ? Z : X;
            return a = i(t, n, c, e), o = i(n, t, c, d3.interpolate), u
        }

        function u(t) {
            return a(t)
        }

        var a, o;
        return u.invert = function (t) {
            return o(t)
        }, u.domain = function (n) {
            return arguments.length ? (t = n.map(Number), i()) : t
        }, u.range = function (t) {
            return arguments.length ? (n = t, i()) : n
        }, u.rangeRound = function (t) {
            return u.range(t).interpolate(d3.interpolateRound)
        }, u.clamp = function (t) {
            return arguments.length ? (r = t, i()) : r
        }, u.interpolate = function (t) {
            return arguments.length ? (e = t, i()) : e
        }, u.ticks = function (n) {
            return Bn(t, n)
        }, u.tickFormat = function (n) {
            return $n(t, n)
        }, u.nice = function () {
            return Yn(t, Xn), i()
        }, u.copy = function () {
            return In(t, n, e, r)
        }, i()
    }

    function Vn(t, n) {
        return d3.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
    }

    function Xn(t) {
        return t = Math.pow(10, Math.round(Math.log(t) / Math.LN10) - 1), t && {floor: function (n) {
            return Math.floor(n / t) * t
        }, ceil: function (n) {
            return Math.ceil(n / t) * t
        }}
    }

    function Zn(t, n) {
        var e = jn(t), r = e[1] - e[0], i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)), u = n / r * i;
        return.15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
    }

    function Bn(t, n) {
        return d3.range.apply(d3, Zn(t, n))
    }

    function $n(t, n) {
        return d3.format(",." + Math.max(0, -Math.floor(Math.log(Zn(t, n)[2]) / Math.LN10 + .01)) + "f")
    }

    function Jn(t, n, e, r) {
        var i = e(t[0], t[1]), u = r(n[0], n[1]);
        return function (t) {
            return u(i(t))
        }
    }

    function Gn(t, n, e, r) {
        var i = [], u = [], a = 0, o = Math.min(t.length, n.length) - 1;
        for (t[o] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); o >= ++a;)i.push(e(t[a - 1], t[a])), u.push(r(n[a - 1], n[a]));
        return function (n) {
            var e = d3.bisect(t, n, 1, o) - 1;
            return u[e](i[e](n))
        }
    }

    function Kn(t, n) {
        function e(e) {
            return t(n(e))
        }

        var r = n.pow;
        return e.invert = function (n) {
            return r(t.invert(n))
        }, e.domain = function (i) {
            return arguments.length ? (n = 0 > i[0] ? Qn : Wn, r = n.pow, t.domain(i.map(n)), e) : t.domain().map(r)
        }, e.nice = function () {
            return t.domain(Yn(t.domain(), Un)), e
        }, e.ticks = function () {
            var e = jn(t.domain()), i = [];
            if (e.every(isFinite)) {
                var u = Math.floor(e[0]), a = Math.ceil(e[1]), o = r(e[0]), c = r(e[1]);
                if (n === Qn)for (i.push(r(u)); a > u++;)for (var l = 9; l > 0; l--)i.push(r(u) * l); else {
                    for (; a > u; u++)for (var l = 1; 10 > l; l++)i.push(r(u) * l);
                    i.push(r(u))
                }
                for (u = 0; o > i[u]; u++);
                for (a = i.length; i[a - 1] > c; a--);
                i = i.slice(u, a)
            }
            return i
        }, e.tickFormat = function (t, i) {
            if (2 > arguments.length && (i = Da), !arguments.length)return i;
            var u, a = Math.max(.1, t / e.ticks().length), o = n === Qn ? (u = -1e-12, Math.floor) : (u = 1e-12, Math.ceil);
            return function (t) {
                return a >= t / r(o(n(t) + u)) ? i(t) : ""
            }
        }, e.copy = function () {
            return Kn(t.copy(), n)
        }, Vn(e, t)
    }

    function Wn(t) {
        return Math.log(0 > t ? 0 : t) / Math.LN10
    }

    function Qn(t) {
        return-Math.log(t > 0 ? 0 : -t) / Math.LN10
    }

    function te(t, n) {
        function e(n) {
            return t(r(n))
        }

        var r = ne(n), i = ne(1 / n);
        return e.invert = function (n) {
            return i(t.invert(n))
        }, e.domain = function (n) {
            return arguments.length ? (t.domain(n.map(r)), e) : t.domain().map(i)
        }, e.ticks = function (t) {
            return Bn(e.domain(), t)
        }, e.tickFormat = function (t) {
            return $n(e.domain(), t)
        }, e.nice = function () {
            return e.domain(Yn(e.domain(), Xn))
        }, e.exponent = function (t) {
            if (!arguments.length)return n;
            var u = e.domain();
            return r = ne(n = t), i = ne(1 / n), e.domain(u)
        }, e.copy = function () {
            return te(t.copy(), n)
        }, Vn(e, t)
    }

    function ne(t) {
        return function (n) {
            return 0 > n ? -Math.pow(-n, t) : Math.pow(n, t)
        }
    }

    function ee(t, n) {
        function e(n) {
            return a[((i.get(n) || i.set(n, t.push(n))) - 1) % a.length]
        }

        function r(n, e) {
            return d3.range(t.length).map(function (t) {
                return n + e * t
            })
        }

        var i, a, o;
        return e.domain = function (r) {
            if (!arguments.length)return t;
            t = [], i = new u;
            for (var a, o = -1, c = r.length; c > ++o;)i.has(a = r[o]) || i.set(a, t.push(a));
            return e[n.t].apply(e, n.a)
        }, e.range = function (t) {
            return arguments.length ? (a = t, o = 0, n = {t: "range", a: arguments}, e) : a
        }, e.rangePoints = function (i, u) {
            2 > arguments.length && (u = 0);
            var c = i[0], l = i[1], s = (l - c) / (Math.max(1, t.length - 1) + u);
            return a = r(2 > t.length ? (c + l) / 2 : c + s * u / 2, s), o = 0, n = {t: "rangePoints", a: arguments}, e
        }, e.rangeBands = function (i, u, c) {
            2 > arguments.length && (u = 0), 3 > arguments.length && (c = u);
            var l = i[1] < i[0], s = i[l - 0], f = i[1 - l], h = (f - s) / (t.length - u + 2 * c);
            return a = r(s + h * c, h), l && a.reverse(), o = h * (1 - u), n = {t: "rangeBands", a: arguments}, e
        }, e.rangeRoundBands = function (i, u, c) {
            2 > arguments.length && (u = 0), 3 > arguments.length && (c = u);
            var l = i[1] < i[0], s = i[l - 0], f = i[1 - l], h = Math.floor((f - s) / (t.length - u + 2 * c)), d = f - s - (t.length - u) * h;
            return a = r(s + Math.round(d / 2), h), l && a.reverse(), o = Math.round(h * (1 - u)), n = {t: "rangeRoundBands", a: arguments}, e
        }, e.rangeBand = function () {
            return o
        }, e.rangeExtent = function () {
            return jn(n.a[0])
        }, e.copy = function () {
            return ee(t, n)
        }, e.domain(t)
    }

    function re(t, n) {
        function e() {
            var e = 0, u = n.length;
            for (i = []; u > ++e;)i[e - 1] = d3.quantile(t, e / u);
            return r
        }

        function r(t) {
            return isNaN(t = +t) ? 0 / 0 : n[d3.bisect(i, t)]
        }

        var i;
        return r.domain = function (n) {
            return arguments.length ? (t = n.filter(function (t) {
                return!isNaN(t)
            }).sort(d3.ascending), e()) : t
        }, r.range = function (t) {
            return arguments.length ? (n = t, e()) : n
        }, r.quantiles = function () {
            return i
        }, r.copy = function () {
            return re(t, n)
        }, e()
    }

    function ie(t, n, e) {
        function r(n) {
            return e[Math.max(0, Math.min(a, Math.floor(u * (n - t))))]
        }

        function i() {
            return u = e.length / (n - t), a = e.length - 1, r
        }

        var u, a;
        return r.domain = function (e) {
            return arguments.length ? (t = +e[0], n = +e[e.length - 1], i()) : [t, n]
        }, r.range = function (t) {
            return arguments.length ? (e = t, i()) : e
        }, r.copy = function () {
            return ie(t, n, e)
        }, i()
    }

    function ue(t, n) {
        function e(e) {
            return n[d3.bisect(t, e)]
        }

        return e.domain = function (n) {
            return arguments.length ? (t = n, e) : t
        }, e.range = function (t) {
            return arguments.length ? (n = t, e) : n
        }, e.copy = function () {
            return ue(t, n)
        }, e
    }

    function ae(t) {
        function n(t) {
            return+t
        }

        return n.invert = n, n.domain = n.range = function (e) {
            return arguments.length ? (t = e.map(n), n) : t
        }, n.ticks = function (n) {
            return Bn(t, n)
        }, n.tickFormat = function (n) {
            return $n(t, n)
        }, n.copy = function () {
            return ae(t)
        }, n
    }

    function oe(t) {
        return t.innerRadius
    }

    function ce(t) {
        return t.outerRadius
    }

    function le(t) {
        return t.startAngle
    }

    function se(t) {
        return t.endAngle
    }

    function fe(t) {
        function n(n) {
            function a() {
                s.push("M", u(t(f), l))
            }

            for (var o, s = [], f = [], h = -1, d = n.length, g = c(e), p = c(r); d > ++h;)i.call(this, o = n[h], h) ? f.push([+g.call(this, o, h), +p.call(this, o, h)]) : f.length && (a(), f = []);
            return f.length && a(), s.length ? s.join("") : null
        }

        var e = he, r = de, i = o, u = ge, a = u.key, l = .7;
        return n.x = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.y = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.defined = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.interpolate = function (t) {
            return arguments.length ? (a = "function" == typeof t ? u = t : (u = Oa.get(t) || ge).key, n) : a
        }, n.tension = function (t) {
            return arguments.length ? (l = t, n) : l
        }, n
    }

    function he(t) {
        return t[0]
    }

    function de(t) {
        return t[1]
    }

    function ge(t) {
        return t.join("L")
    }

    function pe(t) {
        return ge(t) + "Z"
    }

    function me(t) {
        for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; e > ++n;)i.push("V", (r = t[n])[1], "H", r[0]);
        return i.join("")
    }

    function ve(t) {
        for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; e > ++n;)i.push("H", (r = t[n])[0], "V", r[1]);
        return i.join("")
    }

    function ye(t, n) {
        return 4 > t.length ? ge(t) : t[1] + xe(t.slice(1, t.length - 1), _e(t, n))
    }

    function Me(t, n) {
        return 3 > t.length ? ge(t) : t[0] + xe((t.push(t[0]), t), _e([t[t.length - 2]].concat(t, [t[1]]), n))
    }

    function be(t, n) {
        return 3 > t.length ? ge(t) : t[0] + xe(t, _e(t, n))
    }

    function xe(t, n) {
        if (1 > n.length || t.length != n.length && t.length != n.length + 2)return ge(t);
        var e = t.length != n.length, r = "", i = t[0], u = t[1], a = n[0], o = a, c = 1;
        if (e && (r += "Q" + (u[0] - 2 * a[0] / 3) + "," + (u[1] - 2 * a[1] / 3) + "," + u[0] + "," + u[1], i = t[1], c = 2), n.length > 1) {
            o = n[1], u = t[c], c++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (u[0] - o[0]) + "," + (u[1] - o[1]) + "," + u[0] + "," + u[1];
            for (var l = 2; n.length > l; l++, c++)u = t[c], o = n[l], r += "S" + (u[0] - o[0]) + "," + (u[1] - o[1]) + "," + u[0] + "," + u[1]
        }
        if (e) {
            var s = t[c];
            r += "Q" + (u[0] + 2 * o[0] / 3) + "," + (u[1] + 2 * o[1] / 3) + "," + s[0] + "," + s[1]
        }
        return r
    }

    function _e(t, n) {
        for (var e, r = [], i = (1 - n) / 2, u = t[0], a = t[1], o = 1, c = t.length; c > ++o;)e = u, u = a, a = t[o], r.push([i * (a[0] - e[0]), i * (a[1] - e[1])]);
        return r
    }

    function we(t) {
        if (3 > t.length)return ge(t);
        var n = 1, e = t.length, r = t[0], i = r[0], u = r[1], a = [i, i, i, (r = t[1])[0]], o = [u, u, u, r[1]], c = [i, ",", u];
        for (Ne(c, a, o); e > ++n;)r = t[n], a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), Ne(c, a, o);
        for (n = -1; 2 > ++n;)a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), Ne(c, a, o);
        return c.join("")
    }

    function Se(t) {
        if (4 > t.length)return ge(t);
        for (var n, e = [], r = -1, i = t.length, u = [0], a = [0]; 3 > ++r;)n = t[r], u.push(n[0]), a.push(n[1]);
        for (e.push(Ae(Ia, u) + "," + Ae(Ia, a)), --r; i > ++r;)n = t[r], u.shift(), u.push(n[0]), a.shift(), a.push(n[1]), Ne(e, u, a);
        return e.join("")
    }

    function ke(t) {
        for (var n, e, r = -1, i = t.length, u = i + 4, a = [], o = []; 4 > ++r;)e = t[r % i], a.push(e[0]), o.push(e[1]);
        for (n = [Ae(Ia, a), ",", Ae(Ia, o)], --r; u > ++r;)e = t[r % i], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), Ne(n, a, o);
        return n.join("")
    }

    function Ee(t, n) {
        var e = t.length - 1;
        if (e)for (var r, i, u = t[0][0], a = t[0][1], o = t[e][0] - u, c = t[e][1] - a, l = -1; e >= ++l;)r = t[l], i = l / e, r[0] = n * r[0] + (1 - n) * (u + i * o), r[1] = n * r[1] + (1 - n) * (a + i * c);
        return we(t)
    }

    function Ae(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
    }

    function Ne(t, n, e) {
        t.push("C", Ae(Ya, n), ",", Ae(Ya, e), ",", Ae(Ua, n), ",", Ae(Ua, e), ",", Ae(Ia, n), ",", Ae(Ia, e))
    }

    function Te(t, n) {
        return(n[1] - t[1]) / (n[0] - t[0])
    }

    function qe(t) {
        for (var n = 0, e = t.length - 1, r = [], i = t[0], u = t[1], a = r[0] = Te(i, u); e > ++n;)r[n] = (a + (a = Te(i = u, u = t[n + 1]))) / 2;
        return r[n] = a, r
    }

    function Ce(t) {
        for (var n, e, r, i, u = [], a = qe(t), o = -1, c = t.length - 1; c > ++o;)n = Te(t[o], t[o + 1]), 1e-6 > Math.abs(n) ? a[o] = a[o + 1] = 0 : (e = a[o] / n, r = a[o + 1] / n, i = e * e + r * r, i > 9 && (i = 3 * n / Math.sqrt(i), a[o] = i * e, a[o + 1] = i * r));
        for (o = -1; c >= ++o;)i = (t[Math.min(c, o + 1)][0] - t[Math.max(0, o - 1)][0]) / (6 * (1 + a[o] * a[o])), u.push([i || 0, a[o] * i || 0]);
        return u
    }

    function ze(t) {
        return 3 > t.length ? ge(t) : t[0] + xe(t, Ce(t))
    }

    function De(t) {
        for (var n, e, r, i = -1, u = t.length; u > ++i;)n = t[i], e = n[0], r = n[1] + Pa, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r);
        return t
    }

    function Le(t) {
        function n(n) {
            function o() {
                m.push("M", l(t(y), d), h, f(t(v.reverse()), d), "Z")
            }

            for (var s, g, p, m = [], v = [], y = [], M = -1, b = n.length, x = c(e), _ = c(i), w = e === r ? function () {
                return g
            } : c(r), S = i === u ? function () {
                return p
            } : c(u); b > ++M;)a.call(this, s = n[M], M) ? (v.push([g = +x.call(this, s, M), p = +_.call(this, s, M)]), y.push([+w.call(this, s, M), +S.call(this, s, M)])) : v.length && (o(), v = [], y = []);
            return v.length && o(), m.length ? m.join("") : null
        }

        var e = he, r = he, i = 0, u = de, a = o, l = ge, s = l.key, f = l, h = "L", d = .7;
        return n.x = function (t) {
            return arguments.length ? (e = r = t, n) : r
        }, n.x0 = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.x1 = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.y = function (t) {
            return arguments.length ? (i = u = t, n) : u
        }, n.y0 = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.y1 = function (t) {
            return arguments.length ? (u = t, n) : u
        }, n.defined = function (t) {
            return arguments.length ? (a = t, n) : a
        }, n.interpolate = function (t) {
            return arguments.length ? (s = "function" == typeof t ? l = t : (l = Oa.get(t) || ge).key, f = l.reverse || l, h = l.closed ? "M" : "L", n) : s
        }, n.tension = function (t) {
            return arguments.length ? (d = t, n) : d
        }, n
    }

    function Fe(t) {
        return t.radius
    }

    function He(t) {
        return[t.x, t.y]
    }

    function Re(t) {
        return function () {
            var n = t.apply(this, arguments), e = n[0], r = n[1] + Pa;
            return[e * Math.cos(r), e * Math.sin(r)]
        }
    }

    function Pe() {
        return 64
    }

    function je() {
        return"circle"
    }

    function Oe(t) {
        var n = Math.sqrt(t / Ru);
        return"M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z"
    }

    function Ye(t, n) {
        t.attr("transform", function (t) {
            return"translate(" + n(t) + ",0)"
        })
    }

    function Ue(t, n) {
        t.attr("transform", function (t) {
            return"translate(0," + n(t) + ")"
        })
    }

    function Ie(t, n, e) {
        if (r = [], e && n.length > 1) {
            for (var r, i, u, a = jn(t.domain()), o = -1, c = n.length, l = (n[1] - n[0]) / ++e; c > ++o;)for (i = e; --i > 0;)(u = +n[o] - i * l) >= a[0] && r.push(u);
            for (--o, i = 0; e > ++i && (u = +n[o] + i * l) < a[1];)r.push(u)
        }
        return r
    }

    function Ve() {
        Ja || (Ja = d3.select("body").append("div").style("visibility", "hidden").style("top", 0).style("height", 0).style("width", 0).style("overflow-y", "scroll").append("div").style("height", "2000px").node().parentNode);
        var t, n = d3.event;
        try {
            Ja.scrollTop = 1e3, Ja.dispatchEvent(n), t = 1e3 - Ja.scrollTop
        } catch (e) {
            t = n.wheelDelta || 5 * -n.detail
        }
        return t
    }

    function Xe(t) {
        for (var n = t.source, e = t.target, r = Be(n, e), i = [n]; n !== r;)n = n.parent, i.push(n);
        for (var u = i.length; e !== r;)i.splice(u, 0, e), e = e.parent;
        return i
    }

    function Ze(t) {
        for (var n = [], e = t.parent; null != e;)n.push(t), t = e, e = e.parent;
        return n.push(t), n
    }

    function Be(t, n) {
        if (t === n)return t;
        for (var e = Ze(t), r = Ze(n), i = e.pop(), u = r.pop(), a = null; i === u;)a = i, i = e.pop(), u = r.pop();
        return a
    }

    function $e(t) {
        t.fixed |= 2
    }

    function Je(t) {
        t.fixed &= 1
    }

    function Ge(t) {
        t.fixed |= 4, t.px = t.x, t.py = t.y
    }

    function Ke(t) {
        t.fixed &= 3
    }

    function We(t, n, e) {
        var r = 0, i = 0;
        if (t.charge = 0, !t.leaf)for (var u, a = t.nodes, o = a.length, c = -1; o > ++c;)u = a[c], null != u && (We(u, n, e), t.charge += u.charge, r += u.charge * u.cx, i += u.charge * u.cy);
        if (t.point) {
            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
            var l = n * e[t.point.index];
            t.charge += t.pointCharge = l, r += l * t.point.x, i += l * t.point.y
        }
        t.cx = r / t.charge, t.cy = i / t.charge
    }

    function Qe() {
        return 20
    }

    function tr() {
        return 1
    }

    function nr(t) {
        return t.x
    }

    function er(t) {
        return t.y
    }

    function rr(t, n, e) {
        t.y0 = n, t.y = e
    }

    function ir(t) {
        return d3.range(t.length)
    }

    function ur(t) {
        for (var n = -1, e = t[0].length, r = []; e > ++n;)r[n] = 0;
        return r
    }

    function ar(t) {
        for (var n, e = 1, r = 0, i = t[0][1], u = t.length; u > e; ++e)(n = t[e][1]) > i && (r = e, i = n);
        return r
    }

    function or(t) {
        return t.reduce(cr, 0)
    }

    function cr(t, n) {
        return t + n[1]
    }

    function lr(t, n) {
        return sr(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1))
    }

    function sr(t, n) {
        for (var e = -1, r = +t[0], i = (t[1] - r) / n, u = []; n >= ++e;)u[e] = i * e + r;
        return u
    }

    function fr(t) {
        return[d3.min(t), d3.max(t)]
    }

    function hr(t, n) {
        return d3.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = mr, t
    }

    function dr(t) {
        return t.children
    }

    function gr(t) {
        return t.value
    }

    function pr(t, n) {
        return n.value - t.value
    }

    function mr(t) {
        return d3.merge(t.map(function (t) {
            return(t.children || []).map(function (n) {
                return{source: t, target: n}
            })
        }))
    }

    function vr(t, n) {
        return t.value - n.value
    }

    function yr(t, n) {
        var e = t._pack_next;
        t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n
    }

    function Mr(t, n) {
        t._pack_next = n, n._pack_prev = t
    }

    function br(t, n) {
        var e = n.x - t.x, r = n.y - t.y, i = t.r + n.r;
        return i * i - e * e - r * r > .001
    }

    function xr(t) {
        function n(t) {
            s = Math.min(t.x - t.r, s), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), d = Math.max(t.y + t.r, d)
        }

        if ((e = t.children) && (l = e.length)) {
            var e, r, i, u, a, o, c, l, s = 1 / 0, f = -1 / 0, h = 1 / 0, d = -1 / 0;
            if (e.forEach(_r), r = e[0], r.x = -r.r, r.y = 0, n(r), l > 1 && (i = e[1], i.x = i.r, i.y = 0, n(i), l > 2))for (u = e[2], kr(r, i, u), n(u), yr(r, u), r._pack_prev = u, yr(u, i), i = r._pack_next, a = 3; l > a; a++) {
                kr(r, i, u = e[a]);
                var g = 0, p = 1, m = 1;
                for (o = i._pack_next; o !== i; o = o._pack_next, p++)if (br(o, u)) {
                    g = 1;
                    break
                }
                if (1 == g)for (c = r._pack_prev; c !== o._pack_prev && !br(c, u); c = c._pack_prev, m++);
                g ? (m > p || p == m && i.r < r.r ? Mr(r, i = o) : Mr(r = c, i), a--) : (yr(r, u), i = u, n(u))
            }
            var v = (s + f) / 2, y = (h + d) / 2, M = 0;
            for (a = 0; l > a; a++)u = e[a], u.x -= v, u.y -= y, M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y));
            t.r = M, e.forEach(wr)
        }
    }

    function _r(t) {
        t._pack_next = t._pack_prev = t
    }

    function wr(t) {
        delete t._pack_next, delete t._pack_prev
    }

    function Sr(t, n, e, r) {
        var i = t.children;
        if (t.x = n += r * t.x, t.y = e += r * t.y, t.r *= r, i)for (var u = -1, a = i.length; a > ++u;)Sr(i[u], n, e, r)
    }

    function kr(t, n, e) {
        var r = t.r + e.r, i = n.x - t.x, u = n.y - t.y;
        if (r && (i || u)) {
            var a = n.r + e.r, o = i * i + u * u;
            a *= a, r *= r;
            var c = .5 + (r - a) / (2 * o), l = Math.sqrt(Math.max(0, 2 * a * (r + o) - (r -= o) * r - a * a)) / (2 * o);
            e.x = t.x + c * i + l * u, e.y = t.y + c * u - l * i
        } else e.x = t.x + r, e.y = t.y
    }

    function Er(t) {
        return 1 + d3.max(t, function (t) {
            return t.y
        })
    }

    function Ar(t) {
        return t.reduce(function (t, n) {
            return t + n.x
        }, 0) / t.length
    }

    function Nr(t) {
        var n = t.children;
        return n && n.length ? Nr(n[0]) : t
    }

    function Tr(t) {
        var n, e = t.children;
        return e && (n = e.length) ? Tr(e[n - 1]) : t
    }

    function qr(t, n) {
        return t.parent == n.parent ? 1 : 2
    }

    function Cr(t) {
        var n = t.children;
        return n && n.length ? n[0] : t._tree.thread
    }

    function zr(t) {
        var n, e = t.children;
        return e && (n = e.length) ? e[n - 1] : t._tree.thread
    }

    function Dr(t, n) {
        var e = t.children;
        if (e && (i = e.length))for (var r, i, u = -1; i > ++u;)n(r = Dr(e[u], n), t) > 0 && (t = r);
        return t
    }

    function Lr(t, n) {
        return t.x - n.x
    }

    function Fr(t, n) {
        return n.x - t.x
    }

    function Hr(t, n) {
        return t.depth - n.depth
    }

    function Rr(t, n) {
        function e(t, r) {
            var i = t.children;
            if (i && (a = i.length))for (var u, a, o = null, c = -1; a > ++c;)u = i[c], e(u, o), o = u;
            n(t, r)
        }

        e(t, null)
    }

    function Pr(t) {
        for (var n, e = 0, r = 0, i = t.children, u = i.length; --u >= 0;)n = i[u]._tree, n.prelim += e, n.mod += e, e += n.shift + (r += n.change)
    }

    function jr(t, n, e) {
        t = t._tree, n = n._tree;
        var r = e / (n.number - t.number);
        t.change += r, n.change -= r, n.shift += e, n.prelim += e, n.mod += e
    }

    function Or(t, n, e) {
        return t._tree.ancestor.parent == n.parent ? t._tree.ancestor : e
    }

    function Yr(t) {
        return{x: t.x, y: t.y, dx: t.dx, dy: t.dy}
    }

    function Ur(t, n) {
        var e = t.x + n[3], r = t.y + n[0], i = t.dx - n[1] - n[3], u = t.dy - n[0] - n[2];
        return 0 > i && (e += i / 2, i = 0), 0 > u && (r += u / 2, u = 0), {x: e, y: r, dx: i, dy: u}
    }

    function Ir(t, n) {
        function e(t, e) {
            return d3.xhr(t, n, e).response(r)
        }

        function r(t) {
            return e.parse(t.responseText)
        }

        function i(n) {
            return n.map(u).join(t)
        }

        function u(t) {
            return a.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
        }

        var a = RegExp('["' + t + "\n]"), o = t.charCodeAt(0);
        return e.parse = function (t) {
            var n;
            return e.parseRows(t, function (t) {
                return n ? n(t) : (n = Function("d", "return {" + t.map(function (t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
                }).join(",") + "}"), void 0)
            })
        }, e.parseRows = function (t, n) {
            function e() {
                if (s >= l)return a;
                if (i)return i = !1, u;
                var n = s;
                if (34 === t.charCodeAt(n)) {
                    for (var e = n; l > e++;)if (34 === t.charCodeAt(e)) {
                        if (34 !== t.charCodeAt(e + 1))break;
                        ++e
                    }
                    s = e + 2;
                    var r = t.charCodeAt(e + 1);
                    return 13 === r ? (i = !0, 10 === t.charCodeAt(e + 2) && ++s) : 10 === r && (i = !0), t.substring(n + 1, e).replace(/""/g, '"')
                }
                for (; l > s;) {
                    var r = t.charCodeAt(s++), c = 1;
                    if (10 === r)i = !0; else if (13 === r)i = !0, 10 === t.charCodeAt(s) && (++s, ++c); else if (r !== o)continue;
                    return t.substring(n, s - c)
                }
                return t.substring(n)
            }

            for (var r, i, u = {}, a = {}, c = [], l = t.length, s = 0, f = 0; (r = e()) !== a;) {
                for (var h = []; r !== u && r !== a;)h.push(r), r = e();
                (!n || (h = n(h, f++))) && c.push(h)
            }
            return c
        }, e.format = function (t) {
            return t.map(i).join("\n")
        }, e
    }

    function Vr(t, n) {
        no.hasOwnProperty(t.type) && no[t.type](t, n)
    }

    function Xr(t, n, e) {
        var r, i = -1, u = t.length - e;
        for (n.lineStart(); u > ++i;)r = t[i], n.point(r[0], r[1]);
        n.lineEnd()
    }

    function Zr(t, n) {
        var e = -1, r = t.length;
        for (n.polygonStart(); r > ++e;)Xr(t[e], n, 1);
        n.polygonEnd()
    }

    function Br(t) {
        return[Math.atan2(t[1], t[0]), Math.asin(Math.max(-1, Math.min(1, t[2])))]
    }

    function $r(t, n) {
        return Pu > Math.abs(t[0] - n[0]) && Pu > Math.abs(t[1] - n[1])
    }

    function Jr(t) {
        var n = t[0], e = t[1], r = Math.cos(e);
        return[r * Math.cos(n), r * Math.sin(n), Math.sin(e)]
    }

    function Gr(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function Kr(t, n) {
        return[t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function Wr(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function Qr(t, n) {
        return[t[0] * n, t[1] * n, t[2] * n]
    }

    function ti(t) {
        var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function ni(t) {
        function n(n) {
            function r(e, r) {
                e = t(e, r), n.point(e[0], e[1])
            }

            function u() {
                s = 0 / 0, p.point = a, n.lineStart()
            }

            function a(r, u) {
                var a = Jr([r, u]), o = t(r, u);
                e(s, f, l, h, d, g, s = o[0], f = o[1], l = r, h = a[0], d = a[1], g = a[2], i, n), n.point(s, f)
            }

            function o() {
                p.point = r, n.lineEnd()
            }

            function c() {
                var t, r, c, m, v, y, M;
                u(), p.point = function (n, e) {
                    a(t = n, r = e), c = s, m = f, v = h, y = d, M = g, p.point = a
                }, p.lineEnd = function () {
                    e(s, f, l, h, d, g, c, m, t, v, y, M, i, n), p.lineEnd = o, o()
                }
            }

            var l, s, f, h, d, g, p = {point: r, lineStart: u, lineEnd: o, polygonStart: function () {
                n.polygonStart(), p.lineStart = c
            }, polygonEnd: function () {
                n.polygonEnd(), p.lineStart = u
            }};
            return p
        }

        function e(n, i, u, a, o, c, l, s, f, h, d, g, p, m) {
            var v = l - n, y = s - i, M = v * v + y * y;
            if (M > 4 * r && p--) {
                var b = a + h, x = o + d, _ = c + g, w = Math.sqrt(b * b + x * x + _ * _), S = Math.asin(_ /= w), k = Pu > Math.abs(Math.abs(_) - 1) ? (u + f) / 2 : Math.atan2(x, b), E = t(k, S), A = E[0], N = E[1], T = A - n, q = N - i, C = y * T - v * q;
                (C * C / M > r || Math.abs((v * T + y * q) / M - .5) > .3) && (e(n, i, u, a, o, c, A, N, k, b /= w, x /= w, _, p, m), m.point(A, N), e(A, N, k, b, x, _, l, s, f, h, d, g, p, m))
            }
        }

        var r = .5, i = 16;
        return n.precision = function (t) {
            return arguments.length ? (i = (r = t * t) > 0 && 16, n) : Math.sqrt(r)
        }, n
    }

    function ei(t, n) {
        function e(t, n) {
            var e = Math.sqrt(u - 2 * i * Math.sin(n)) / i;
            return[e * Math.sin(t *= i), a - e * Math.cos(t)]
        }

        var r = Math.sin(t), i = (r + Math.sin(n)) / 2, u = 1 + r * (2 * i - r), a = Math.sqrt(u) / i;
        return e.invert = function (t, n) {
            var e = a - n;
            return[Math.atan2(t, e) / i, Math.asin((u - (t * t + e * e) * i * i) / (2 * i))]
        }, e
    }

    function ri(t) {
        function n(t, n) {
            r > t && (r = t), t > u && (u = t), i > n && (i = n), n > a && (a = n)
        }

        function e() {
            o.point = o.lineEnd = Pn
        }

        var r, i, u, a, o = {point: n, lineStart: Pn, lineEnd: Pn, polygonStart: function () {
            o.lineEnd = e
        }, polygonEnd: function () {
            o.point = n
        }};
        return function (n) {
            return a = u = -(r = i = 1 / 0), d3.geo.stream(n, t(o)), [
                [r, i],
                [u, a]
            ]
        }
    }

    function ii(t, n) {
        if (!io) {
            ++uo, t *= ju;
            var e = Math.cos(n *= ju);
            ao += (e * Math.cos(t) - ao) / uo, oo += (e * Math.sin(t) - oo) / uo, co += (Math.sin(n) - co) / uo
        }
    }

    function ui() {
        var t, n;
        io = 1, ai(), io = 2;
        var e = lo.point;
        lo.point = function (r, i) {
            e(t = r, n = i)
        }, lo.lineEnd = function () {
            lo.point(t, n), oi(), lo.lineEnd = oi
        }
    }

    function ai() {
        function t(t, i) {
            t *= ju;
            var u = Math.cos(i *= ju), a = u * Math.cos(t), o = u * Math.sin(t), c = Math.sin(i), l = Math.atan2(Math.sqrt((l = e * c - r * o) * l + (l = r * a - n * c) * l + (l = n * o - e * a) * l), n * a + e * o + r * c);
            uo += l, ao += l * (n + (n = a)), oo += l * (e + (e = o)), co += l * (r + (r = c))
        }

        var n, e, r;
        io > 1 || (1 > io && (io = 1, uo = ao = oo = co = 0), lo.point = function (i, u) {
            i *= ju;
            var a = Math.cos(u *= ju);
            n = a * Math.cos(i), e = a * Math.sin(i), r = Math.sin(u), lo.point = t
        })
    }

    function oi() {
        lo.point = ii
    }

    function ci(t, n) {
        var e = Math.cos(t), r = Math.sin(t);
        return function (i, u, a, o) {
            null != i ? (i = li(e, i), u = li(e, u), (a > 0 ? u > i : i > u) && (i += 2 * a * Ru)) : (i = t + 2 * a * Ru, u = t);
            for (var c, l = a * n, s = i; a > 0 ? s > u : u > s; s -= l)o.point((c = Br([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
        }
    }

    function li(t, n) {
        var e = Jr(n);
        e[0] -= t, ti(e);
        var r = Math.acos(Math.max(-1, Math.min(1, -e[1])));
        return((0 > -e[2] ? -r : r) + 2 * Math.PI - Pu) % (2 * Math.PI)
    }

    function si(t, n, e) {
        return function (r) {
            function i(n, e) {
                t(n, e) && r.point(n, e)
            }

            function u(t, n) {
                m.point(t, n)
            }

            function a() {
                v.point = u, m.lineStart()
            }

            function o() {
                v.point = i, m.lineEnd()
            }

            function c(t, n) {
                M.point(t, n), p.push([t, n])
            }

            function l() {
                M.lineStart(), p = []
            }

            function s() {
                c(p[0][0], p[0][1]), M.lineEnd();
                var t, n = M.clean(), e = y.buffer(), i = e.length;
                if (!i)return g = !0, d += mi(p, -1), p = null, void 0;
                if (p = null, 1 & n) {
                    t = e[0], h += mi(t, 1);
                    var u, i = t.length - 1, a = -1;
                    for (r.lineStart(); i > ++a;)r.point((u = t[a])[0], u[1]);
                    return r.lineEnd(), void 0
                }
                i > 1 && 2 & n && e.push(e.pop().concat(e.shift())), f.push(e.filter(gi))
            }

            var f, h, d, g, p, m = n(r), v = {point: i, lineStart: a, lineEnd: o, polygonStart: function () {
                v.point = c, v.lineStart = l, v.lineEnd = s, g = !1, d = h = 0, f = [], r.polygonStart()
            }, polygonEnd: function () {
                v.point = i, v.lineStart = a, v.lineEnd = o, f = d3.merge(f), f.length ? fi(f, e, r) : (-Pu > h || g && -Pu > d) && (r.lineStart(), e(null, null, 1, r), r.lineEnd()), r.polygonEnd(), f = null
            }, sphere: function () {
                r.polygonStart(), r.lineStart(), e(null, null, 1, r), r.lineEnd(), r.polygonEnd()
            }}, y = pi(), M = n(y);
            return v
        }
    }

    function fi(t, n, e) {
        var r = [], i = [];
        if (t.forEach(function (t) {
            var n = t.length;
            if (!(1 >= n)) {
                var e = t[0], u = t[n - 1], a = {point: e, points: t, other: null, visited: !1, entry: !0, subject: !0}, o = {point: e, points: [e], other: a, visited: !1, entry: !1, subject: !1};
                a.other = o, r.push(a), i.push(o), a = {point: u, points: [u], other: null, visited: !1, entry: !1, subject: !0}, o = {point: u, points: [u], other: a, visited: !1, entry: !0, subject: !1}, a.other = o, r.push(a), i.push(o)
            }
        }), i.sort(di), hi(r), hi(i), r.length)for (var u, a, o, c = r[0]; ;) {
            for (u = c; u.visited;)if ((u = u.next) === c)return;
            a = u.points, e.lineStart();
            do {
                if (u.visited = u.other.visited = !0, u.entry) {
                    if (u.subject)for (var l = 0; a.length > l; l++)e.point((o = a[l])[0], o[1]); else n(u.point, u.next.point, 1, e);
                    u = u.next
                } else {
                    if (u.subject) {
                        a = u.prev.points;
                        for (var l = a.length; --l >= 0;)e.point((o = a[l])[0], o[1])
                    } else n(u.point, u.prev.point, -1, e);
                    u = u.prev
                }
                u = u.other, a = u.points
            } while (!u.visited);
            e.lineEnd()
        }
    }

    function hi(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; n > ++r;)i.next = e = t[r], e.prev = i, i = e;
            i.next = e = t[0], e.prev = i
        }
    }

    function di(t, n) {
        return(0 > (t = t.point)[0] ? t[1] - Ru / 2 - Pu : Ru / 2 - t[1]) - (0 > (n = n.point)[0] ? n[1] - Ru / 2 - Pu : Ru / 2 - n[1])
    }

    function gi(t) {
        return t.length > 1
    }

    function pi() {
        var t, n = [];
        return{lineStart: function () {
            n.push(t = [])
        }, point: function (n, e) {
            t.push([n, e])
        }, lineEnd: Pn, buffer: function () {
            var e = n;
            return n = [], t = null, e
        }}
    }

    function mi(t, n) {
        if (!(e = t.length))return 0;
        for (var e, r, i, u = 0, a = 0, o = t[0], c = o[0], l = o[1], s = Math.cos(l), f = Math.atan2(n * Math.sin(c) * s, Math.sin(l)), h = 1 - n * Math.cos(c) * s, d = f; e > ++u;)o = t[u], s = Math.cos(l = o[1]), r = Math.atan2(n * Math.sin(c = o[0]) * s, Math.sin(l)), i = 1 - n * Math.cos(c) * s, Pu > Math.abs(h - 2) && Pu > Math.abs(i - 2) || (Pu > Math.abs(i) || Pu > Math.abs(h) || (Pu > Math.abs(Math.abs(r - f) - Ru) ? i + h > 2 && (a += 4 * (r - f)) : a += Pu > Math.abs(h - 2) ? 4 * (r - d) : ((3 * Ru + r - f) % (2 * Ru) - Ru) * (h + i)), d = f, f = r, h = i);
        return a
    }

    function vi(t) {
        var n, e = 0 / 0, r = 0 / 0, i = 0 / 0;
        return{lineStart: function () {
            t.lineStart(), n = 1
        }, point: function (u, a) {
            var o = u > 0 ? Ru : -Ru, c = Math.abs(u - e);
            Pu > Math.abs(c - Ru) ? (t.point(e, r = (r + a) / 2 > 0 ? Ru / 2 : -Ru / 2), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(o, r), t.point(u, r), n = 0) : i !== o && c >= Ru && (Pu > Math.abs(e - i) && (e -= i * Pu), Pu > Math.abs(u - o) && (u -= o * Pu), r = yi(e, r, u, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(o, r), n = 0), t.point(e = u, r = a), i = o
        }, lineEnd: function () {
            t.lineEnd(), e = r = 0 / 0
        }, clean: function () {
            return 2 - n
        }}
    }

    function yi(t, n, e, r) {
        var i, u, a = Math.sin(t - e);
        return Math.abs(a) > Pu ? Math.atan((Math.sin(n) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) / (i * u * a)) : (n + r) / 2
    }

    function Mi(t, n, e, r) {
        var i;
        if (null == t)i = e * Ru / 2, r.point(-Ru, i), r.point(0, i), r.point(Ru, i), r.point(Ru, 0), r.point(Ru, -i), r.point(0, -i), r.point(-Ru, -i), r.point(-Ru, 0), r.point(-Ru, i); else if (Math.abs(t[0] - n[0]) > Pu) {
            var u = (t[0] < n[0] ? 1 : -1) * Ru;
            i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i)
        } else r.point(n[0], n[1])
    }

    function bi(t) {
        function n(t, n) {
            return Math.cos(t) * Math.cos(n) > u
        }

        function e(t) {
            var e, i, u, a;
            return{lineStart: function () {
                u = i = !1, a = 1
            }, point: function (o, c) {
                var l, s = [o, c], f = n(o, c);
                !e && (u = i = f) && t.lineStart(), f !== i && (l = r(e, s), ($r(e, l) || $r(s, l)) && (s[0] += Pu, s[1] += Pu, f = n(s[0], s[1]))), f !== i && (a = 0, (i = f) ? (t.lineStart(), l = r(s, e), t.point(l[0], l[1])) : (l = r(e, s), t.point(l[0], l[1]), t.lineEnd()), e = l), !f || e && $r(e, s) || t.point(s[0], s[1]), e = s
            }, lineEnd: function () {
                i && t.lineEnd(), e = null
            }, clean: function () {
                return a | (u && i) << 1
            }}
        }

        function r(t, n) {
            var e = Jr(t, 0), r = Jr(n, 0), i = [1, 0, 0], a = Kr(e, r), o = Gr(a, a), c = a[0], l = o - c * c;
            if (!l)return t;
            var s = u * o / l, f = -u * c / l, h = Kr(i, a), d = Qr(i, s), g = Qr(a, f);
            Wr(d, g);
            var p = h, m = Gr(d, p), v = Gr(p, p), y = Math.sqrt(m * m - v * (Gr(d, d) - 1)), M = Qr(p, (-m - y) / v);
            return Wr(M, d), Br(M)
        }

        var i = t * ju, u = Math.cos(i), a = ci(i, 6 * ju);
        return si(n, e, a)
    }

    function xi(t, n) {
        function e(e, r) {
            return e = t(e, r), n(e[0], e[1])
        }

        return t.invert && n.invert && (e.invert = function (e, r) {
            return e = n.invert(e, r), e && t.invert(e[0], e[1])
        }), e
    }

    function _i(t, n) {
        return[t, n]
    }

    function wi(t, n, e) {
        var r = d3.range(t, n - Pu, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return[t, n]
            })
        }
    }

    function Si(t, n, e) {
        var r = d3.range(t, n - Pu, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return[n, t]
            })
        }
    }

    function ki(t, n, e, r) {
        function i(t) {
            var n = Math.sin(t *= d) * g, e = Math.sin(d - t) * g, r = e * l + n * f, i = e * s + n * h, u = e * a + n * c;
            return[Math.atan2(i, r) / ju, Math.atan2(u, Math.sqrt(r * r + i * i)) / ju]
        }

        var u = Math.cos(n), a = Math.sin(n), o = Math.cos(r), c = Math.sin(r), l = u * Math.cos(t), s = u * Math.sin(t), f = o * Math.cos(e), h = o * Math.sin(e), d = Math.acos(Math.max(-1, Math.min(1, a * c + u * o * Math.cos(e - t)))), g = 1 / Math.sin(d);
        return i.distance = d, i
    }

    function Ei(t, n) {
        return[t / (2 * Ru), Math.max(-.5, Math.min(.5, Math.log(Math.tan(Ru / 4 + n / 2)) / (2 * Ru)))]
    }

    function Ai(t) {
        return"m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function Ni(t) {
        var n = ni(function (n, e) {
            return t([n * Ou, e * Ou])
        });
        return function (t) {
            return t = n(t), {point: function (n, e) {
                t.point(n * ju, e * ju)
            }, sphere: function () {
                t.sphere()
            }, lineStart: function () {
                t.lineStart()
            }, lineEnd: function () {
                t.lineEnd()
            }, polygonStart: function () {
                t.polygonStart()
            }, polygonEnd: function () {
                t.polygonEnd()
            }}
        }
    }

    function Ti() {
        function t(t, n) {
            a.push("M", t, ",", n, u)
        }

        function n(t, n) {
            a.push("M", t, ",", n), o.point = e
        }

        function e(t, n) {
            a.push("L", t, ",", n)
        }

        function r() {
            o.point = t
        }

        function i() {
            a.push("Z")
        }

        var u = Ai(4.5), a = [], o = {point: t, lineStart: function () {
            o.point = n
        }, lineEnd: r, polygonStart: function () {
            o.lineEnd = i
        }, polygonEnd: function () {
            o.lineEnd = r, o.point = t
        }, pointRadius: function (t) {
            return u = Ai(t), o
        }, result: function () {
            if (a.length) {
                var t = a.join("");
                return a = [], t
            }
        }};
        return o
    }

    function qi(t) {
        function n(n, e) {
            t.moveTo(n, e), t.arc(n, e, a, 0, 2 * Ru)
        }

        function e(n, e) {
            t.moveTo(n, e), o.point = r
        }

        function r(n, e) {
            t.lineTo(n, e)
        }

        function i() {
            o.point = n
        }

        function u() {
            t.closePath()
        }

        var a = 4.5, o = {point: n, lineStart: function () {
            o.point = e
        }, lineEnd: i, polygonStart: function () {
            o.lineEnd = u
        }, polygonEnd: function () {
            o.lineEnd = i, o.point = n
        }, pointRadius: function (t) {
            return a = t, o
        }, result: Pn};
        return o
    }

    function Ci() {
        function t(t, n) {
            po += i * t - r * n, r = t, i = n
        }

        var n, e, r, i;
        mo.point = function (u, a) {
            mo.point = t, n = r = u, e = i = a
        }, mo.lineEnd = function () {
            t(n, e)
        }
    }

    function zi(t, n) {
        io || (ao += t, oo += n, ++co)
    }

    function Di() {
        function t(t, r) {
            var i = t - n, u = r - e, a = Math.sqrt(i * i + u * u);
            ao += a * (n + t) / 2, oo += a * (e + r) / 2, co += a, n = t, e = r
        }

        var n, e;
        if (1 !== io) {
            if (!(1 > io))return;
            io = 1, ao = oo = co = 0
        }
        vo.point = function (r, i) {
            vo.point = t, n = r, e = i
        }
    }

    function Li() {
        vo.point = zi
    }

    function Fi() {
        function t(t, n) {
            var e = i * t - r * n;
            ao += e * (r + t), oo += e * (i + n), co += 3 * e, r = t, i = n
        }

        var n, e, r, i;
        2 > io && (io = 2, ao = oo = co = 0), vo.point = function (u, a) {
            vo.point = t, n = r = u, e = i = a
        }, vo.lineEnd = function () {
            t(n, e)
        }
    }

    function Hi() {
        function t(t, n) {
            if (t *= ju, n *= ju, !(Pu > Math.abs(Math.abs(u) - Ru / 2) && Pu > Math.abs(Math.abs(n) - Ru / 2))) {
                var e = Math.cos(n), c = Math.sin(n);
                if (Pu > Math.abs(u - Ru / 2))Mo += 2 * (t - r); else {
                    var l = t - i, s = Math.cos(l), f = Math.atan2(Math.sqrt((f = e * Math.sin(l)) * f + (f = a * c - o * e * s) * f), o * c + a * e * s), h = (f + Ru + u + n) / 4;
                    Mo += (0 > l && l > -Ru || l > Ru ? -4 : 4) * Math.atan(Math.sqrt(Math.abs(Math.tan(h) * Math.tan(h - f / 2) * Math.tan(h - Ru / 4 - u / 2) * Math.tan(h - Ru / 4 - n / 2))))
                }
                r = i, i = t, u = n, a = e, o = c
            }
        }

        var n, e, r, i, u, a, o;
        bo.point = function (c, l) {
            bo.point = t, r = i = (n = c) * ju, u = (e = l) * ju, a = Math.cos(u), o = Math.sin(u)
        }, bo.lineEnd = function () {
            t(n, e)
        }
    }

    function Ri(t) {
        return Pi(function () {
            return t
        })()
    }

    function Pi(t) {
        function n(t) {
            return t = a(t[0] * ju, t[1] * ju), [t[0] * s + o, c - t[1] * s]
        }

        function e(t) {
            return t = a.invert((t[0] - o) / s, (c - t[1]) / s), t && [t[0] * Ou, t[1] * Ou]
        }

        function r() {
            a = xi(u = Oi(p, m, v), i);
            var t = i(d, g);
            return o = f - t[0] * s, c = h + t[1] * s, n
        }

        var i, u, a, o, c, l = ni(function (t, n) {
            return t = i(t, n), [t[0] * s + o, c - t[1] * s]
        }), s = 150, f = 480, h = 250, d = 0, g = 0, p = 0, m = 0, v = 0, y = so, M = null;
        return n.stream = function (t) {
            return ji(u, y(l(t)))
        }, n.clipAngle = function (t) {
            return arguments.length ? (y = null == t ? (M = t, so) : bi(M = +t), n) : M
        }, n.scale = function (t) {
            return arguments.length ? (s = +t, r()) : s
        }, n.translate = function (t) {
            return arguments.length ? (f = +t[0], h = +t[1], r()) : [f, h]
        }, n.center = function (t) {
            return arguments.length ? (d = t[0] % 360 * ju, g = t[1] % 360 * ju, r()) : [d * Ou, g * Ou]
        }, n.rotate = function (t) {
            return arguments.length ? (p = t[0] % 360 * ju, m = t[1] % 360 * ju, v = t.length > 2 ? t[2] % 360 * ju : 0, r()) : [p * Ou, m * Ou, v * Ou]
        }, d3.rebind(n, l, "precision"), function () {
            return i = t.apply(this, arguments), n.invert = i.invert && e, r()
        }
    }

    function ji(t, n) {
        return{point: function (e, r) {
            r = t(e * ju, r * ju), e = r[0], n.point(e > Ru ? e - 2 * Ru : -Ru > e ? e + 2 * Ru : e, r[1])
        }, sphere: function () {
            n.sphere()
        }, lineStart: function () {
            n.lineStart()
        }, lineEnd: function () {
            n.lineEnd()
        }, polygonStart: function () {
            n.polygonStart()
        }, polygonEnd: function () {
            n.polygonEnd()
        }}
    }

    function Oi(t, n, e) {
        return t ? n || e ? xi(Ui(t), Ii(n, e)) : Ui(t) : n || e ? Ii(n, e) : _i
    }

    function Yi(t) {
        return function (n, e) {
            return n += t, [n > Ru ? n - 2 * Ru : -Ru > n ? n + 2 * Ru : n, e]
        }
    }

    function Ui(t) {
        var n = Yi(t);
        return n.invert = Yi(-t), n
    }

    function Ii(t, n) {
        function e(t, n) {
            var e = Math.cos(n), o = Math.cos(t) * e, c = Math.sin(t) * e, l = Math.sin(n), s = l * r + o * i;
            return[Math.atan2(c * u - s * a, o * r - l * i), Math.asin(Math.max(-1, Math.min(1, s * u + c * a)))]
        }

        var r = Math.cos(t), i = Math.sin(t), u = Math.cos(n), a = Math.sin(n);
        return e.invert = function (t, n) {
            var e = Math.cos(n), o = Math.cos(t) * e, c = Math.sin(t) * e, l = Math.sin(n), s = l * u - c * a;
            return[Math.atan2(c * u + l * a, o * r + s * i), Math.asin(Math.max(-1, Math.min(1, s * r - o * i)))]
        }, e
    }

    function Vi(t, n) {
        function e(n, e) {
            var r = Math.cos(n), i = Math.cos(e), u = t(r * i);
            return[u * i * Math.sin(n), u * Math.sin(e)]
        }

        return e.invert = function (t, e) {
            var r = Math.sqrt(t * t + e * e), i = n(r), u = Math.sin(i), a = Math.cos(i);
            return[Math.atan2(t * u, r * a), Math.asin(r && e * u / r)]
        }, e
    }

    function Xi(t, n, e, r) {
        var i, u, a, o, c, l, s;
        return i = r[t], u = i[0], a = i[1], i = r[n], o = i[0], c = i[1], i = r[e], l = i[0], s = i[1], (s - a) * (o - u) - (c - a) * (l - u) > 0
    }

    function Zi(t, n, e) {
        return(e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0])
    }

    function Bi(t, n, e, r) {
        var i = t[0], u = e[0], a = n[0] - i, o = r[0] - u, c = t[1], l = e[1], s = n[1] - c, f = r[1] - l, h = (o * (c - l) - f * (i - u)) / (f * a - o * s);
        return[i + h * a, c + h * s]
    }

    function $i(t, n) {
        var e = {list: t.map(function (t, n) {
            return{index: n, x: t[0], y: t[1]}
        }).sort(function (t, n) {
            return t.y < n.y ? -1 : t.y > n.y ? 1 : t.x < n.x ? -1 : t.x > n.x ? 1 : 0
        }), bottomSite: null}, r = {list: [], leftEnd: null, rightEnd: null, init: function () {
            r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
        }, createHalfEdge: function (t, n) {
            return{edge: t, side: n, vertex: null, l: null, r: null}
        }, insert: function (t, n) {
            n.l = t, n.r = t.r, t.r.l = n, t.r = n
        }, leftBound: function (t) {
            var n = r.leftEnd;
            do n = n.r; while (n != r.rightEnd && i.rightOf(n, t));
            return n = n.l
        }, del: function (t) {
            t.l.r = t.r, t.r.l = t.l, t.edge = null
        }, right: function (t) {
            return t.r
        }, left: function (t) {
            return t.l
        }, leftRegion: function (t) {
            return null == t.edge ? e.bottomSite : t.edge.region[t.side]
        }, rightRegion: function (t) {
            return null == t.edge ? e.bottomSite : t.edge.region[_o[t.side]]
        }}, i = {bisect: function (t, n) {
            var e = {region: {l: t, r: n}, ep: {l: null, r: null}}, r = n.x - t.x, i = n.y - t.y, u = r > 0 ? r : -r, a = i > 0 ? i : -i;
            return e.c = t.x * r + t.y * i + .5 * (r * r + i * i), u > a ? (e.a = 1, e.b = i / r, e.c /= r) : (e.b = 1, e.a = r / i, e.c /= i), e
        }, intersect: function (t, n) {
            var e = t.edge, r = n.edge;
            if (!e || !r || e.region.r == r.region.r)return null;
            var i = e.a * r.b - e.b * r.a;
            if (1e-10 > Math.abs(i))return null;
            var u, a, o = (e.c * r.b - r.c * e.b) / i, c = (r.c * e.a - e.c * r.a) / i, l = e.region.r, s = r.region.r;
            l.y < s.y || l.y == s.y && l.x < s.x ? (u = t, a = e) : (u = n, a = r);
            var f = o >= a.region.r.x;
            return f && "l" === u.side || !f && "r" === u.side ? null : {x: o, y: c}
        }, rightOf: function (t, n) {
            var e = t.edge, r = e.region.r, i = n.x > r.x;
            if (i && "l" === t.side)return 1;
            if (!i && "r" === t.side)return 0;
            if (1 === e.a) {
                var u = n.y - r.y, a = n.x - r.x, o = 0, c = 0;
                if (!i && 0 > e.b || i && e.b >= 0 ? c = o = u >= e.b * a : (c = n.x + n.y * e.b > e.c, 0 > e.b && (c = !c), c || (o = 1)), !o) {
                    var l = r.x - e.region.l.x;
                    c = e.b * (a * a - u * u) < l * u * (1 + 2 * a / l + e.b * e.b), 0 > e.b && (c = !c)
                }
            } else {
                var s = e.c - e.a * n.x, f = n.y - s, h = n.x - r.x, d = s - r.y;
                c = f * f > h * h + d * d
            }
            return"l" === t.side ? c : !c
        }, endPoint: function (t, e, r) {
            t.ep[e] = r, t.ep[_o[e]] && n(t)
        }, distance: function (t, n) {
            var e = t.x - n.x, r = t.y - n.y;
            return Math.sqrt(e * e + r * r)
        }}, u = {list: [], insert: function (t, n, e) {
            t.vertex = n, t.ystar = n.y + e;
            for (var r = 0, i = u.list, a = i.length; a > r; r++) {
                var o = i[r];
                if (!(t.ystar > o.ystar || t.ystar == o.ystar && n.x > o.vertex.x))break
            }
            i.splice(r, 0, t)
        }, del: function (t) {
            for (var n = 0, e = u.list, r = e.length; r > n && e[n] != t; ++n);
            e.splice(n, 1)
        }, empty: function () {
            return 0 === u.list.length
        }, nextEvent: function (t) {
            for (var n = 0, e = u.list, r = e.length; r > n; ++n)if (e[n] == t)return e[n + 1];
            return null
        }, min: function () {
            var t = u.list[0];
            return{x: t.vertex.x, y: t.ystar}
        }, extractMin: function () {
            return u.list.shift()
        }};
        r.init(), e.bottomSite = e.list.shift();
        for (var a, o, c, l, s, f, h, d, g, p, m, v, y, M = e.list.shift(); ;)if (u.empty() || (a = u.min()), M && (u.empty() || M.y < a.y || M.y == a.y && M.x < a.x))o = r.leftBound(M), c = r.right(o), h = r.rightRegion(o), v = i.bisect(h, M), f = r.createHalfEdge(v, "l"), r.insert(o, f), p = i.intersect(o, f), p && (u.del(o), u.insert(o, p, i.distance(p, M))), o = f, f = r.createHalfEdge(v, "r"), r.insert(o, f), p = i.intersect(f, c), p && u.insert(f, p, i.distance(p, M)), M = e.list.shift(); else {
            if (u.empty())break;
            o = u.extractMin(), l = r.left(o), c = r.right(o), s = r.right(c), h = r.leftRegion(o), d = r.rightRegion(c), m = o.vertex, i.endPoint(o.edge, o.side, m), i.endPoint(c.edge, c.side, m), r.del(o), u.del(c), r.del(c), y = "l", h.y > d.y && (g = h, h = d, d = g, y = "r"), v = i.bisect(h, d), f = r.createHalfEdge(v, y), r.insert(l, f), i.endPoint(v, _o[y], m), p = i.intersect(l, f), p && (u.del(l), u.insert(l, p, i.distance(p, h))), p = i.intersect(f, s), p && u.insert(f, p, i.distance(p, h))
        }
        for (o = r.right(r.leftEnd); o != r.rightEnd; o = r.right(o))n(o.edge)
    }

    function Ji() {
        return{leaf: !0, nodes: [], point: null}
    }

    function Gi(t, n, e, r, i, u) {
        if (!t(n, e, r, i, u)) {
            var a = .5 * (e + i), o = .5 * (r + u), c = n.nodes;
            c[0] && Gi(t, c[0], e, r, a, o), c[1] && Gi(t, c[1], a, r, i, o), c[2] && Gi(t, c[2], e, o, a, u), c[3] && Gi(t, c[3], a, o, i, u)
        }
    }

    function Ki() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Wi(t, n, e, r) {
        for (var i, u, a = 0, o = n.length, c = e.length; o > a;) {
            if (r >= c)return-1;
            if (i = n.charCodeAt(a++), 37 === i) {
                if (u = Yo[n.charAt(a++)], !u || 0 > (r = u(t, e, r)))return-1
            } else if (i != e.charCodeAt(r++))return-1
        }
        return r
    }

    function Qi(t) {
        return RegExp("^(?:" + t.map(d3.requote).join("|") + ")", "i")
    }

    function tu(t) {
        for (var n = new u, e = -1, r = t.length; r > ++e;)n.set(t[e].toLowerCase(), e);
        return n
    }

    function nu(t, n, e) {
        t += "";
        var r = t.length;
        return e > r ? Array(e - r + 1).join(n) + t : t
    }

    function eu(t, n, e) {
        Lo.lastIndex = 0;
        var r = Lo.exec(n.substring(e));
        return r ? e += r[0].length : -1
    }

    function ru(t, n, e) {
        Do.lastIndex = 0;
        var r = Do.exec(n.substring(e));
        return r ? e += r[0].length : -1
    }

    function iu(t, n, e) {
        Ro.lastIndex = 0;
        var r = Ro.exec(n.substring(e));
        return r ? (t.m = Po.get(r[0].toLowerCase()), e += r[0].length) : -1
    }

    function uu(t, n, e) {
        Fo.lastIndex = 0;
        var r = Fo.exec(n.substring(e));
        return r ? (t.m = Ho.get(r[0].toLowerCase()), e += r[0].length) : -1
    }

    function au(t, n, e) {
        return Wi(t, "" + Oo.c, n, e)
    }

    function ou(t, n, e) {
        return Wi(t, "" + Oo.x, n, e)
    }

    function cu(t, n, e) {
        return Wi(t, "" + Oo.X, n, e)
    }

    function lu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 4));
        return r ? (t.y = +r[0], e += r[0].length) : -1
    }

    function su(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.y = fu(+r[0]), e += r[0].length) : -1
    }

    function fu(t) {
        return t + (t > 68 ? 1900 : 2e3)
    }

    function hu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.m = r[0] - 1, e += r[0].length) : -1
    }

    function du(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.d = +r[0], e += r[0].length) : -1
    }

    function gu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.H = +r[0], e += r[0].length) : -1
    }

    function pu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.M = +r[0], e += r[0].length) : -1
    }

    function mu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.S = +r[0], e += r[0].length) : -1
    }

    function vu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 3));
        return r ? (t.L = +r[0], e += r[0].length) : -1
    }

    function yu(t, n, e) {
        var r = Io.get(n.substring(e, e += 2).toLowerCase());
        return null == r ? -1 : (t.p = r, e)
    }

    function Mu(t) {
        var n = t.getTimezoneOffset(), e = n > 0 ? "-" : "+", r = ~~(Math.abs(n) / 60), i = Math.abs(n) % 60;
        return e + nu(r, "0", 2) + nu(i, "0", 2)
    }

    function bu(t) {
        return t.toISOString()
    }

    function xu(t, n, e) {
        function r(n) {
            var e = t(n), r = u(e, 1);
            return r - n > n - e ? e : r
        }

        function i(e) {
            return n(e = t(new wo(e - 1)), 1), e
        }

        function u(t, e) {
            return n(t = new wo(+t), e), t
        }

        function a(t, r, u) {
            var a = i(t), o = [];
            if (u > 1)for (; r > a;)e(a) % u || o.push(new Date(+a)), n(a, 1); else for (; r > a;)o.push(new Date(+a)), n(a, 1);
            return o
        }

        function o(t, n, e) {
            try {
                wo = Ki;
                var r = new Ki;
                return r._ = t, a(r, n, e)
            } finally {
                wo = Date
            }
        }

        t.floor = t, t.round = r, t.ceil = i, t.offset = u, t.range = a;
        var c = t.utc = _u(t);
        return c.floor = c, c.round = _u(r), c.ceil = _u(i), c.offset = _u(u), c.range = o, t
    }

    function _u(t) {
        return function (n, e) {
            try {
                wo = Ki;
                var r = new Ki;
                return r._ = n, t(r, e)._
            } finally {
                wo = Date
            }
        }
    }

    function wu(t, n, e) {
        function r(n) {
            return t(n)
        }

        return r.invert = function (n) {
            return ku(t.invert(n))
        }, r.domain = function (n) {
            return arguments.length ? (t.domain(n), r) : t.domain().map(ku)
        }, r.nice = function (t) {
            return r.domain(Yn(r.domain(), function () {
                return t
            }))
        }, r.ticks = function (e, i) {
            var u = Su(r.domain());
            if ("function" != typeof e) {
                var a = u[1] - u[0], o = a / e, c = d3.bisect(Xo, o);
                if (c == Xo.length)return n.year(u, e);
                if (!c)return t.ticks(e).map(ku);
                Math.log(o / Xo[c - 1]) < Math.log(Xo[c] / o) && --c, e = n[c], i = e[1], e = e[0].range
            }
            return e(u[0], new Date(+u[1] + 1), i)
        }, r.tickFormat = function () {
            return e
        }, r.copy = function () {
            return wu(t.copy(), n, e)
        }, d3.rebind(r, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function Su(t) {
        var n = t[0], e = t[t.length - 1];
        return e > n ? [n, e] : [e, n]
    }

    function ku(t) {
        return new Date(t)
    }

    function Eu(t) {
        return function (n) {
            for (var e = t.length - 1, r = t[e]; !r[1](n);)r = t[--e];
            return r[0](n)
        }
    }

    function Au(t) {
        var n = new Date(t, 0, 1);
        return n.setFullYear(t), n
    }

    function Nu(t) {
        var n = t.getFullYear(), e = Au(n), r = Au(n + 1);
        return n + (t - e) / (r - e)
    }

    function Tu(t) {
        var n = new Date(Date.UTC(t, 0, 1));
        return n.setUTCFullYear(t), n
    }

    function qu(t) {
        var n = t.getUTCFullYear(), e = Tu(n), r = Tu(n + 1);
        return n + (t - e) / (r - e)
    }

    var Cu = ".", zu = ",", Du = [3, 3];
    Date.now || (Date.now = function () {
        return+new Date
    });
    try {
        document.createElement("div").style.setProperty("opacity", 0, "")
    } catch (Lu) {
        var Fu = CSSStyleDeclaration.prototype, Hu = Fu.setProperty;
        Fu.setProperty = function (t, n, e) {
            Hu.call(this, t, n + "", e)
        }
    }
    d3 = {version: "3.0.5"};
    var Ru = Math.PI, Pu = 1e-6, ju = Ru / 180, Ou = 180 / Ru, Yu = i;
    try {
        Yu(document.documentElement.childNodes)[0].nodeType
    } catch (Uu) {
        Yu = r
    }
    var Iu = [].__proto__ ? function (t, n) {
        t.__proto__ = n
    } : function (t, n) {
        for (var e in n)t[e] = n[e]
    };
    d3.map = function (t) {
        var n = new u;
        for (var e in t)n.set(e, t[e]);
        return n
    }, e(u, {has: function (t) {
        return Vu + t in this
    }, get: function (t) {
        return this[Vu + t]
    }, set: function (t, n) {
        return this[Vu + t] = n
    }, remove: function (t) {
        return t = Vu + t, t in this && delete this[t]
    }, keys: function () {
        var t = [];
        return this.forEach(function (n) {
            t.push(n)
        }), t
    }, values: function () {
        var t = [];
        return this.forEach(function (n, e) {
            t.push(e)
        }), t
    }, entries: function () {
        var t = [];
        return this.forEach(function (n, e) {
            t.push({key: n, value: e})
        }), t
    }, forEach: function (t) {
        for (var n in this)n.charCodeAt(0) === Xu && t.call(this, n.substring(1), this[n])
    }});
    var Vu = "\0", Xu = Vu.charCodeAt(0);
    d3.functor = c, d3.rebind = function (t, n) {
        for (var e, r = 1, i = arguments.length; i > ++r;)t[e = arguments[r]] = l(t, n, n[e]);
        return t
    }, d3.ascending = function (t, n) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, d3.descending = function (t, n) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }, d3.mean = function (t, n) {
        var e, r = t.length, i = 0, u = -1, a = 0;
        if (1 === arguments.length)for (; r > ++u;)s(e = t[u]) && (i += (e - i) / ++a); else for (; r > ++u;)s(e = n.call(t, t[u], u)) && (i += (e - i) / ++a);
        return a ? i : void 0
    }, d3.median = function (t, n) {
        return arguments.length > 1 && (t = t.map(n)), t = t.filter(s), t.length ? d3.quantile(t.sort(d3.ascending), .5) : void 0
    }, d3.min = function (t, n) {
        var e, r, i = -1, u = t.length;
        if (1 === arguments.length) {
            for (; u > ++i && (null == (e = t[i]) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = t[i]) && e > r && (e = r)
        } else {
            for (; u > ++i && (null == (e = n.call(t, t[i], i)) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = n.call(t, t[i], i)) && e > r && (e = r)
        }
        return e
    }, d3.max = function (t, n) {
        var e, r, i = -1, u = t.length;
        if (1 === arguments.length) {
            for (; u > ++i && (null == (e = t[i]) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = t[i]) && r > e && (e = r)
        } else {
            for (; u > ++i && (null == (e = n.call(t, t[i], i)) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = n.call(t, t[i], i)) && r > e && (e = r)
        }
        return e
    }, d3.extent = function (t, n) {
        var e, r, i, u = -1, a = t.length;
        if (1 === arguments.length) {
            for (; a > ++u && (null == (e = i = t[u]) || e != e);)e = i = void 0;
            for (; a > ++u;)null != (r = t[u]) && (e > r && (e = r), r > i && (i = r))
        } else {
            for (; a > ++u && (null == (e = i = n.call(t, t[u], u)) || e != e);)e = void 0;
            for (; a > ++u;)null != (r = n.call(t, t[u], u)) && (e > r && (e = r), r > i && (i = r))
        }
        return[e, i]
    }, d3.random = {normal: function (t, n) {
        var e = arguments.length;
        return 2 > e && (n = 1), 1 > e && (t = 0), function () {
            var e, r, i;
            do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1);
            return t + n * e * Math.sqrt(-2 * Math.log(i) / i)
        }
    }, logNormal: function (t, n) {
        var e = arguments.length;
        2 > e && (n = 1), 1 > e && (t = 0);
        var r = d3.random.normal();
        return function () {
            return Math.exp(t + n * r())
        }
    }, irwinHall: function (t) {
        return function () {
            for (var n = 0, e = 0; t > e; e++)n += Math.random();
            return n / t
        }
    }}, d3.sum = function (t, n) {
        var e, r = 0, i = t.length, u = -1;
        if (1 === arguments.length)for (; i > ++u;)isNaN(e = +t[u]) || (r += e); else for (; i > ++u;)isNaN(e = +n.call(t, t[u], u)) || (r += e);
        return r
    }, d3.quantile = function (t, n) {
        var e = (t.length - 1) * n + 1, r = Math.floor(e), i = +t[r - 1], u = e - r;
        return u ? i + u * (t[r] - i) : i
    }, d3.shuffle = function (t) {
        for (var n, e, r = t.length; r;)e = 0 | Math.random() * r--, n = t[r], t[r] = t[e], t[e] = n;
        return t
    }, d3.transpose = function (t) {
        return d3.zip.apply(d3, t)
    }, d3.zip = function () {
        if (!(r = arguments.length))return[];
        for (var t = -1, n = d3.min(arguments, f), e = Array(n); n > ++t;)for (var r, i = -1, u = e[t] = Array(r); r > ++i;)u[i] = arguments[i][t];
        return e
    }, d3.bisector = function (t) {
        return{left: function (n, e, r, i) {
            for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = n.length); i > r;) {
                var u = r + i >>> 1;
                e > t.call(n, n[u], u) ? r = u + 1 : i = u
            }
            return r
        }, right: function (n, e, r, i) {
            for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = n.length); i > r;) {
                var u = r + i >>> 1;
                t.call(n, n[u], u) > e ? i = u : r = u + 1
            }
            return r
        }}
    };
    var Zu = d3.bisector(function (t) {
        return t
    });
    d3.bisectLeft = Zu.left, d3.bisect = d3.bisectRight = Zu.right, d3.nest = function () {
        function t(n, o) {
            if (o >= a.length)return r ? r.call(i, n) : e ? n.sort(e) : n;
            for (var c, l, s, f = -1, h = n.length, d = a[o++], g = new u, p = {}; h > ++f;)(s = g.get(c = d(l = n[f]))) ? s.push(l) : g.set(c, [l]);
            return g.forEach(function (n, e) {
                p[n] = t(e, o)
            }), p
        }

        function n(t, e) {
            if (e >= a.length)return t;
            var r, i = [], u = o[e++];
            for (r in t)i.push({key: r, values: n(t[r], e)});
            return u && i.sort(function (t, n) {
                return u(t.key, n.key)
            }), i
        }

        var e, r, i = {}, a = [], o = [];
        return i.map = function (n) {
            return t(n, 0)
        }, i.entries = function (e) {
            return n(t(e, 0), 0)
        }, i.key = function (t) {
            return a.push(t), i
        }, i.sortKeys = function (t) {
            return o[a.length - 1] = t, i
        }, i.sortValues = function (t) {
            return e = t, i
        }, i.rollup = function (t) {
            return r = t, i
        }, i
    }, d3.keys = function (t) {
        var n = [];
        for (var e in t)n.push(e);
        return n
    }, d3.values = function (t) {
        var n = [];
        for (var e in t)n.push(t[e]);
        return n
    }, d3.entries = function (t) {
        var n = [];
        for (var e in t)n.push({key: e, value: t[e]});
        return n
    }, d3.permute = function (t, n) {
        for (var e = [], r = -1, i = n.length; i > ++r;)e[r] = t[n[r]];
        return e
    }, d3.merge = function (t) {
        return Array.prototype.concat.apply([], t)
    }, d3.range = function (t, n, e) {
        if (3 > arguments.length && (e = 1, 2 > arguments.length && (n = t, t = 0)), 1 / 0 === (n - t) / e)throw Error("infinite range");
        var r, i = [], u = d(Math.abs(e)), a = -1;
        if (t *= u, n *= u, e *= u, 0 > e)for (; (r = t + e * ++a) > n;)i.push(r / u); else for (; n > (r = t + e * ++a);)i.push(r / u);
        return i
    }, d3.requote = function (t) {
        return t.replace(Bu, "\\$&")
    };
    var Bu = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    d3.round = function (t, n) {
        return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t)
    }, d3.xhr = function (t, n, e) {
        function r() {
            var t = l.status;
            !t && l.responseText || t >= 200 && 300 > t || 304 === t ? u.load.call(i, c.call(i, l)) : u.error.call(i, l)
        }

        var i = {}, u = d3.dispatch("progress", "load", "error"), o = {}, c = a, l = new (window.XDomainRequest && /^(http(s)?:)?\/\//.test(t) ? XDomainRequest : XMLHttpRequest);
        return"onload"in l ? l.onload = l.onerror = r : l.onreadystatechange = function () {
            l.readyState > 3 && r()
        }, l.onprogress = function (t) {
            var n = d3.event;
            d3.event = t;
            try {
                u.progress.call(i, l)
            } finally {
                d3.event = n
            }
        }, i.header = function (t, n) {
            return t = (t + "").toLowerCase(), 2 > arguments.length ? o[t] : (null == n ? delete o[t] : o[t] = n + "", i)
        }, i.mimeType = function (t) {
            return arguments.length ? (n = null == t ? null : t + "", i) : n
        }, i.response = function (t) {
            return c = t, i
        }, ["get", "post"].forEach(function (t) {
            i[t] = function () {
                return i.send.apply(i, [t].concat(Yu(arguments)))
            }
        }), i.send = function (e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), l.open(e, t, !0), null == n || "accept"in o || (o.accept = n + ",*/*"), l.setRequestHeader)for (var a in o)l.setRequestHeader(a, o[a]);
            return null != n && l.overrideMimeType && l.overrideMimeType(n), null != u && i.on("error", u).on("load", function (t) {
                u(null, t)
            }), l.send(null == r ? null : r), i
        }, i.abort = function () {
            return l.abort(), i
        }, d3.rebind(i, u, "on"), 2 === arguments.length && "function" == typeof n && (e = n, n = null), null == e ? i : i.get(g(e))
    }, d3.text = function () {
        return d3.xhr.apply(d3, arguments).response(p)
    }, d3.json = function (t, n) {
        return d3.xhr(t, "application/json", n).response(m)
    }, d3.html = function (t, n) {
        return d3.xhr(t, "text/html", n).response(v)
    }, d3.xml = function () {
        return d3.xhr.apply(d3, arguments).response(y)
    };
    var $u = {svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/"};
    d3.ns = {prefix: $u, qualify: function (t) {
        var n = t.indexOf(":"), e = t;
        return n >= 0 && (e = t.substring(0, n), t = t.substring(n + 1)), $u.hasOwnProperty(e) ? {space: $u[e], local: t} : t
    }}, d3.dispatch = function () {
        for (var t = new M, n = -1, e = arguments.length; e > ++n;)t[arguments[n]] = b(t);
        return t
    }, M.prototype.on = function (t, n) {
        var e = t.indexOf("."), r = "";
        return e > 0 && (r = t.substring(e + 1), t = t.substring(0, e)), 2 > arguments.length ? this[t].on(r) : this[t].on(r, n)
    }, d3.format = function (t) {
        var n = Ju.exec(t), e = n[1] || " ", r = n[2] || ">", i = n[3] || "", u = n[4] || "", a = n[5], o = +n[6], c = n[7], l = n[8], s = n[9], f = 1, h = "", d = !1;
        switch (l && (l = +l.substring(1)), (a || "0" === e && "=" === r) && (a = e = "0", r = "=", c && (o -= Math.floor((o - 1) / 4))), s) {
            case"n":
                c = !0, s = "g";
                break;
            case"%":
                f = 100, h = "%", s = "f";
                break;
            case"p":
                f = 100, h = "%", s = "r";
                break;
            case"b":
            case"o":
            case"x":
            case"X":
                u && (u = "0" + s.toLowerCase());
            case"c":
            case"d":
                d = !0, l = 0;
                break;
            case"s":
                f = -1, s = "r"
        }
        "#" === u && (u = ""), "r" != s || l || (s = "g"), s = Gu.get(s) || _;
        var g = a && c;
        return function (t) {
            if (d && t % 1)return"";
            var n = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : i;
            if (0 > f) {
                var p = d3.formatPrefix(t, l);
                t = p.scale(t), h = p.symbol
            } else t *= f;
            t = s(t, l), !a && c && (t = Ku(t));
            var m = u.length + t.length + (g ? 0 : n.length), v = o > m ? Array(m = o - m + 1).join(e) : "";
            return g && (t = Ku(v + t)), Cu && t.replace(".", Cu), n += u, ("<" === r ? n + t + v : ">" === r ? v + n + t : "^" === r ? v.substring(0, m >>= 1) + n + t + v.substring(m) : n + (g ? t : v + t)) + h
        }
    };
    var Ju = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/, Gu = d3.map({b: function (t) {
        return t.toString(2)
    }, c: function (t) {
        return String.fromCharCode(t)
    }, o: function (t) {
        return t.toString(8)
    }, x: function (t) {
        return t.toString(16)
    }, X: function (t) {
        return t.toString(16).toUpperCase()
    }, g: function (t, n) {
        return t.toPrecision(n)
    }, e: function (t, n) {
        return t.toExponential(n)
    }, f: function (t, n) {
        return t.toFixed(n)
    }, r: function (t, n) {
        return d3.round(t, n = x(t, n)).toFixed(Math.max(0, Math.min(20, n)))
    }}), Ku = a;
    if (Du) {
        var Wu = Du.length;
        Ku = function (t) {
            for (var n = t.lastIndexOf("."), e = n >= 0 ? "." + t.substring(n + 1) : (n = t.length, ""), r = [], i = 0, u = Du[0]; n > 0 && u > 0;)r.push(t.substring(n -= u, n + u)), u = Du[i = (i + 1) % Wu];
            return r.reverse().join(zu || "") + e
        }
    }
    var Qu = ["y", "z", "a", "f", "p", "n", "μ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(w);
    d3.formatPrefix = function (t, n) {
        var e = 0;
        return t && (0 > t && (t *= -1), n && (t = d3.round(t, x(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3)))), Qu[8 + e / 3]
    };
    var ta = function () {
        return a
    }, na = d3.map({linear: ta, poly: q, quad: function () {
        return A
    }, cubic: function () {
        return N
    }, sin: function () {
        return C
    }, exp: function () {
        return z
    }, circle: function () {
        return D
    }, elastic: L, back: F, bounce: function () {
        return H
    }}), ea = d3.map({"in": a, out: k, "in-out": E, "out-in": function (t) {
        return E(k(t))
    }});
    d3.ease = function (t) {
        var n = t.indexOf("-"), e = n >= 0 ? t.substring(0, n) : t, r = n >= 0 ? t.substring(n + 1) : "in";
        return e = na.get(e) || ta, r = ea.get(r) || a, S(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, d3.event = null, d3.transform = function (t) {
        var n = document.createElementNS(d3.ns.prefix.svg, "g");
        return(d3.transform = function (t) {
            n.setAttribute("transform", t);
            var e = n.transform.baseVal.consolidate();
            return new O(e ? e.matrix : ra)
        })(t)
    }, O.prototype.toString = function () {
        return"translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var ra = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
    d3.interpolate = function (t, n) {
        for (var e, r = d3.interpolators.length; --r >= 0 && !(e = d3.interpolators[r](t, n)););
        return e
    }, d3.interpolateNumber = function (t, n) {
        return n -= t, function (e) {
            return t + n * e
        }
    }, d3.interpolateRound = function (t, n) {
        return n -= t, function (e) {
            return Math.round(t + n * e)
        }
    }, d3.interpolateString = function (t, n) {
        var e, r, i, u, a, o = 0, c = 0, l = [], s = [];
        for (ia.lastIndex = 0, r = 0; e = ia.exec(n); ++r)e.index && l.push(n.substring(o, c = e.index)), s.push({i: l.length, x: e[0]}), l.push(null), o = ia.lastIndex;
        for (n.length > o && l.push(n.substring(o)), r = 0, u = s.length; (e = ia.exec(t)) && u > r; ++r)if (a = s[r], a.x == e[0]) {
            if (a.i)if (null == l[a.i + 1])for (l[a.i - 1] += a.x, l.splice(a.i, 1), i = r + 1; u > i; ++i)s[i].i--; else for (l[a.i - 1] += a.x + l[a.i + 1], l.splice(a.i, 2), i = r + 1; u > i; ++i)s[i].i -= 2; else if (null == l[a.i + 1])l[a.i] = a.x; else for (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1), i = r + 1; u > i; ++i)s[i].i--;
            s.splice(r, 1), u--, r--
        } else a.x = d3.interpolateNumber(parseFloat(e[0]), parseFloat(a.x));
        for (; u > r;)a = s.pop(), null == l[a.i + 1] ? l[a.i] = a.x : (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1)), u--;
        return 1 === l.length ? null == l[0] ? s[0].x : function () {
            return n
        } : function (t) {
            for (r = 0; u > r; ++r)l[(a = s[r]).i] = a.x(t);
            return l.join("")
        }
    }, d3.interpolateTransform = function (t, n) {
        var e, r = [], i = [], u = d3.transform(t), a = d3.transform(n), o = u.translate, c = a.translate, l = u.rotate, s = a.rotate, f = u.skew, h = a.skew, d = u.scale, g = a.scale;
        return o[0] != c[0] || o[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), i.push({i: 1, x: d3.interpolateNumber(o[0], c[0])}, {i: 3, x: d3.interpolateNumber(o[1], c[1])})) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), i.push({i: r.push(r.pop() + "rotate(", null, ")") - 2, x: d3.interpolateNumber(l, s)})) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? i.push({i: r.push(r.pop() + "skewX(", null, ")") - 2, x: d3.interpolateNumber(f, h)}) : h && r.push(r.pop() + "skewX(" + h + ")"), d[0] != g[0] || d[1] != g[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({i: e - 4, x: d3.interpolateNumber(d[0], g[0])}, {i: e - 2, x: d3.interpolateNumber(d[1], g[1])})) : (1 != g[0] || 1 != g[1]) && r.push(r.pop() + "scale(" + g + ")"), e = i.length, function (t) {
            for (var n, u = -1; e > ++u;)r[(n = i[u]).i] = n.x(t);
            return r.join("")
        }
    }, d3.interpolateRgb = function (t, n) {
        t = d3.rgb(t), n = d3.rgb(n);
        var e = t.r, r = t.g, i = t.b, u = n.r - e, a = n.g - r, o = n.b - i;
        return function (t) {
            return"#" + G(Math.round(e + u * t)) + G(Math.round(r + a * t)) + G(Math.round(i + o * t))
        }
    }, d3.interpolateHsl = function (t, n) {
        t = d3.hsl(t), n = d3.hsl(n);
        var e = t.h, r = t.s, i = t.l, u = n.h - e, a = n.s - r, o = n.l - i;
        return u > 180 ? u -= 360 : -180 > u && (u += 360), function (t) {
            return un(e + u * t, r + a * t, i + o * t) + ""
        }
    }, d3.interpolateLab = function (t, n) {
        t = d3.lab(t), n = d3.lab(n);
        var e = t.l, r = t.a, i = t.b, u = n.l - e, a = n.a - r, o = n.b - i;
        return function (t) {
            return fn(e + u * t, r + a * t, i + o * t) + ""
        }
    }, d3.interpolateHcl = function (t, n) {
        t = d3.hcl(t), n = d3.hcl(n);
        var e = t.h, r = t.c, i = t.l, u = n.h - e, a = n.c - r, o = n.l - i;
        return u > 180 ? u -= 360 : -180 > u && (u += 360), function (t) {
            return cn(e + u * t, r + a * t, i + o * t) + ""
        }
    }, d3.interpolateArray = function (t, n) {
        var e, r = [], i = [], u = t.length, a = n.length, o = Math.min(t.length, n.length);
        for (e = 0; o > e; ++e)r.push(d3.interpolate(t[e], n[e]));
        for (; u > e; ++e)i[e] = t[e];
        for (; a > e; ++e)i[e] = n[e];
        return function (t) {
            for (e = 0; o > e; ++e)i[e] = r[e](t);
            return i
        }
    }, d3.interpolateObject = function (t, n) {
        var e, r = {}, i = {};
        for (e in t)e in n ? r[e] = V(e)(t[e], n[e]) : i[e] = t[e];
        for (e in n)e in t || (i[e] = n[e]);
        return function (t) {
            for (e in r)i[e] = r[e](t);
            return i
        }
    };
    var ia = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    d3.interpolators = [d3.interpolateObject, function (t, n) {
        return n instanceof Array && d3.interpolateArray(t, n)
    }, function (t, n) {
        return("string" == typeof t || "string" == typeof n) && d3.interpolateString(t + "", n + "")
    }, function (t, n) {
        return("string" == typeof n ? aa.has(n) || /^(#|rgb\(|hsl\()/.test(n) : n instanceof B) && d3.interpolateRgb(t, n)
    }, function (t, n) {
        return!isNaN(t = +t) && !isNaN(n = +n) && d3.interpolateNumber(t, n)
    }], B.prototype.toString = function () {
        return this.rgb() + ""
    }, d3.rgb = function (t, n, e) {
        return 1 === arguments.length ? t instanceof J ? $(t.r, t.g, t.b) : K("" + t, $, un) : $(~~t, ~~n, ~~e)
    };
    var ua = J.prototype = new B;
    ua.brighter = function (t) {
        t = Math.pow(.7, arguments.length ? t : 1);
        var n = this.r, e = this.g, r = this.b, i = 30;
        return n || e || r ? (n && i > n && (n = i), e && i > e && (e = i), r && i > r && (r = i), $(Math.min(255, Math.floor(n / t)), Math.min(255, Math.floor(e / t)), Math.min(255, Math.floor(r / t)))) : $(i, i, i)
    }, ua.darker = function (t) {
        return t = Math.pow(.7, arguments.length ? t : 1), $(Math.floor(t * this.r), Math.floor(t * this.g), Math.floor(t * this.b))
    }, ua.hsl = function () {
        return W(this.r, this.g, this.b)
    }, ua.toString = function () {
        return"#" + G(this.r) + G(this.g) + G(this.b)
    };
    var aa = d3.map({aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"});
    aa.forEach(function (t, n) {
        aa.set(t, K(n, $, un))
    }), d3.hsl = function (t, n, e) {
        return 1 === arguments.length ? t instanceof rn ? en(t.h, t.s, t.l) : K("" + t, W, en) : en(+t, +n, +e)
    };
    var oa = rn.prototype = new B;
    oa.brighter = function (t) {
        return t = Math.pow(.7, arguments.length ? t : 1), en(this.h, this.s, this.l / t)
    }, oa.darker = function (t) {
        return t = Math.pow(.7, arguments.length ? t : 1), en(this.h, this.s, t * this.l)
    }, oa.rgb = function () {
        return un(this.h, this.s, this.l)
    }, d3.hcl = function (t, n, e) {
        return 1 === arguments.length ? t instanceof on ? an(t.h, t.c, t.l) : t instanceof sn ? hn(t.l, t.a, t.b) : hn((t = Q((t = d3.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : an(+t, +n, +e)
    };
    var ca = on.prototype = new B;
    ca.brighter = function (t) {
        return an(this.h, this.c, Math.min(100, this.l + la * (arguments.length ? t : 1)))
    }, ca.darker = function (t) {
        return an(this.h, this.c, Math.max(0, this.l - la * (arguments.length ? t : 1)))
    }, ca.rgb = function () {
        return cn(this.h, this.c, this.l).rgb()
    }, d3.lab = function (t, n, e) {
        return 1 === arguments.length ? t instanceof sn ? ln(t.l, t.a, t.b) : t instanceof on ? cn(t.l, t.c, t.h) : Q((t = d3.rgb(t)).r, t.g, t.b) : ln(+t, +n, +e)
    };
    var la = 18, sa = .95047, fa = 1, ha = 1.08883, da = sn.prototype = new B;
    da.brighter = function (t) {
        return ln(Math.min(100, this.l + la * (arguments.length ? t : 1)), this.a, this.b)
    }, da.darker = function (t) {
        return ln(Math.max(0, this.l - la * (arguments.length ? t : 1)), this.a, this.b)
    }, da.rgb = function () {
        return fn(this.l, this.a, this.b)
    };
    var ga = function (t, n) {
        return n.querySelector(t)
    }, pa = function (t, n) {
        return n.querySelectorAll(t)
    }, ma = document.documentElement, va = ma.matchesSelector || ma.webkitMatchesSelector || ma.mozMatchesSelector || ma.msMatchesSelector || ma.oMatchesSelector, ya = function (t, n) {
        return va.call(t, n)
    };
    "function" == typeof Sizzle && (ga = function (t, n) {
        return Sizzle(t, n)[0] || null
    }, pa = function (t, n) {
        return Sizzle.uniqueSort(Sizzle(t, n))
    }, ya = Sizzle.matchesSelector);
    var Ma = [];
    d3.selection = function () {
        return ba
    }, d3.selection.prototype = Ma, Ma.select = function (t) {
        var n, e, r, i, u = [];
        "function" != typeof t && (t = vn(t));
        for (var a = -1, o = this.length; o > ++a;) {
            u.push(n = []), n.parentNode = (r = this[a]).parentNode;
            for (var c = -1, l = r.length; l > ++c;)(i = r[c]) ? (n.push(e = t.call(i, i.__data__, c)), e && "__data__"in i && (e.__data__ = i.__data__)) : n.push(null)
        }
        return mn(u)
    }, Ma.selectAll = function (t) {
        var n, e, r = [];
        "function" != typeof t && (t = yn(t));
        for (var i = -1, u = this.length; u > ++i;)for (var a = this[i], o = -1, c = a.length; c > ++o;)(e = a[o]) && (r.push(n = Yu(t.call(e, e.__data__, o))), n.parentNode = e);
        return mn(r)
    }, Ma.attr = function (t, n) {
        if (2 > arguments.length) {
            if ("string" == typeof t) {
                var e = this.node();
                return t = d3.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
            }
            for (n in t)this.each(Mn(n, t[n]));
            return this
        }
        return this.each(Mn(t, n))
    }, Ma.classed = function (t, n) {
        if (2 > arguments.length) {
            if ("string" == typeof t) {
                var e = this.node(), r = (t = t.trim().split(/^|\s+/g)).length, i = -1;
                if (n = e.classList) {
                    for (; r > ++i;)if (!n.contains(t[i]))return!1
                } else for (n = e.className, null != n.baseVal && (n = n.baseVal); r > ++i;)if (!bn(t[i]).test(n))return!1;
                return!0
            }
            for (n in t)this.each(xn(n, t[n]));
            return this
        }
        return this.each(xn(t, n))
    }, Ma.style = function (t, n, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (n = "");
                for (e in t)this.each(wn(e, t[e], n));
                return this
            }
            if (2 > r)return getComputedStyle(this.node(), null).getPropertyValue(t);
            e = ""
        }
        return this.each(wn(t, n, e))
    }, Ma.property = function (t, n) {
        if (2 > arguments.length) {
            if ("string" == typeof t)return this.node()[t];
            for (n in t)this.each(Sn(n, t[n]));
            return this
        }
        return this.each(Sn(t, n))
    }, Ma.text = function (t) {
        return arguments.length ? this.each("function" == typeof t ? function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        } : null == t ? function () {
            this.textContent = ""
        } : function () {
            this.textContent = t
        }) : this.node().textContent
    }, Ma.html = function (t) {
        return arguments.length ? this.each("function" == typeof t ? function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        } : null == t ? function () {
            this.innerHTML = ""
        } : function () {
            this.innerHTML = t
        }) : this.node().innerHTML
    }, Ma.append = function (t) {
        function n() {
            return this.appendChild(document.createElementNS(this.namespaceURI, t))
        }

        function e() {
            return this.appendChild(document.createElementNS(t.space, t.local))
        }

        return t = d3.ns.qualify(t), this.select(t.local ? e : n)
    }, Ma.insert = function (t, n) {
        function e() {
            return this.insertBefore(document.createElementNS(this.namespaceURI, t), ga(n, this))
        }

        function r() {
            return this.insertBefore(document.createElementNS(t.space, t.local), ga(n, this))
        }

        return t = d3.ns.qualify(t), this.select(t.local ? r : e)
    }, Ma.remove = function () {
        return this.each(function () {
            var t = this.parentNode;
            t && t.removeChild(this)
        })
    }, Ma.data = function (t, n) {
        function e(t, e) {
            var r, i, a, o = t.length, f = e.length, h = Math.min(o, f), d = Array(f), g = Array(f), p = Array(o);
            if (n) {
                var m, v = new u, y = new u, M = [];
                for (r = -1; o > ++r;)m = n.call(i = t[r], i.__data__, r), v.has(m) ? p[r] = i : v.set(m, i), M.push(m);
                for (r = -1; f > ++r;)m = n.call(e, a = e[r], r), (i = v.get(m)) ? (d[r] = i, i.__data__ = a) : y.has(m) || (g[r] = kn(a)), y.set(m, a), v.remove(m);
                for (r = -1; o > ++r;)v.has(M[r]) && (p[r] = t[r])
            } else {
                for (r = -1; h > ++r;)i = t[r], a = e[r], i ? (i.__data__ = a, d[r] = i) : g[r] = kn(a);
                for (; f > r; ++r)g[r] = kn(e[r]);
                for (; o > r; ++r)p[r] = t[r]
            }
            g.update = d, g.parentNode = d.parentNode = p.parentNode = t.parentNode, c.push(g), l.push(d), s.push(p)
        }

        var r, i, a = -1, o = this.length;
        if (!arguments.length) {
            for (t = Array(o = (r = this[0]).length); o > ++a;)(i = r[a]) && (t[a] = i.__data__);
            return t
        }
        var c = qn([]), l = mn([]), s = mn([]);
        if ("function" == typeof t)for (; o > ++a;)e(r = this[a], t.call(r, r.parentNode.__data__, a)); else for (; o > ++a;)e(r = this[a], t);
        return l.enter = function () {
            return c
        }, l.exit = function () {
            return s
        }, l
    }, Ma.datum = function (t) {
        return arguments.length ? this.property("__data__", t) : this.property("__data__")
    }, Ma.filter = function (t) {
        var n, e, r, i = [];
        "function" != typeof t && (t = En(t));
        for (var u = 0, a = this.length; a > u; u++) {
            i.push(n = []), n.parentNode = (e = this[u]).parentNode;
            for (var o = 0, c = e.length; c > o; o++)(r = e[o]) && t.call(r, r.__data__, o) && n.push(r)
        }
        return mn(i)
    }, Ma.order = function () {
        for (var t = -1, n = this.length; n > ++t;)for (var e, r = this[t], i = r.length - 1, u = r[i]; --i >= 0;)(e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e);
        return this
    }, Ma.sort = function (t) {
        t = An.apply(this, arguments);
        for (var n = -1, e = this.length; e > ++n;)this[n].sort(t);
        return this.order()
    }, Ma.on = function (t, n, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (n = !1);
                for (e in t)this.each(Nn(e, t[e], n));
                return this
            }
            if (2 > r)return(r = this.node()["__on" + t]) && r._;
            e = !1
        }
        return this.each(Nn(t, n, e))
    }, Ma.each = function (t) {
        return Tn(this, function (n, e, r) {
            t.call(n, n.__data__, e, r)
        })
    }, Ma.call = function (t) {
        var n = Yu(arguments);
        return t.apply(n[0] = this, n), this
    }, Ma.empty = function () {
        return!this.node()
    }, Ma.node = function () {
        for (var t = 0, n = this.length; n > t; t++)for (var e = this[t], r = 0, i = e.length; i > r; r++) {
            var u = e[r];
            if (u)return u
        }
        return null
    }, Ma.transition = function () {
        var t, n, e = _a || ++Sa, r = [], i = Object.create(ka);
        i.time = Date.now();
        for (var u = -1, a = this.length; a > ++u;) {
            r.push(t = []);
            for (var o = this[u], c = -1, l = o.length; l > ++c;)(n = o[c]) && zn(n, c, e, i), t.push(n)
        }
        return Cn(r, e)
    };
    var ba = mn([
        [document]
    ]);
    ba[0].parentNode = ma, d3.select = function (t) {
        return"string" == typeof t ? ba.select(t) : mn([
            [t]
        ])
    }, d3.selectAll = function (t) {
        return"string" == typeof t ? ba.selectAll(t) : mn([Yu(t)])
    };
    var xa = [];
    d3.selection.enter = qn, d3.selection.enter.prototype = xa, xa.append = Ma.append, xa.insert = Ma.insert, xa.empty = Ma.empty, xa.node = Ma.node, xa.select = function (t) {
        for (var n, e, r, i, u, a = [], o = -1, c = this.length; c > ++o;) {
            r = (i = this[o]).update, a.push(n = []), n.parentNode = i.parentNode;
            for (var l = -1, s = i.length; s > ++l;)(u = i[l]) ? (n.push(r[l] = e = t.call(i.parentNode, u.__data__, l)), e.__data__ = u.__data__) : n.push(null)
        }
        return mn(a)
    };
    var _a, wa = [], Sa = 0, ka = {ease: T, delay: 0, duration: 250};
    wa.call = Ma.call, wa.empty = Ma.empty, wa.node = Ma.node, d3.transition = function (t) {
        return arguments.length ? _a ? t.transition() : t : ba.transition()
    }, d3.transition.prototype = wa, wa.select = function (t) {
        var n, e, r, i = this.id, u = [];
        "function" != typeof t && (t = vn(t));
        for (var a = -1, o = this.length; o > ++a;) {
            u.push(n = []);
            for (var c = this[a], l = -1, s = c.length; s > ++l;)(r = c[l]) && (e = t.call(r, r.__data__, l)) ? ("__data__"in r && (e.__data__ = r.__data__), zn(e, l, i, r.__transition__[i]), n.push(e)) : n.push(null)
        }
        return Cn(u, i)
    }, wa.selectAll = function (t) {
        var n, e, r, i, u, a = this.id, o = [];
        "function" != typeof t && (t = yn(t));
        for (var c = -1, l = this.length; l > ++c;)for (var s = this[c], f = -1, h = s.length; h > ++f;)if (r = s[f]) {
            u = r.__transition__[a], e = t.call(r, r.__data__, f), o.push(n = []);
            for (var d = -1, g = e.length; g > ++d;)zn(i = e[d], d, a, u), n.push(i)
        }
        return Cn(o, a)
    }, wa.filter = function (t) {
        var n, e, r, i = [];
        "function" != typeof t && (t = En(t));
        for (var u = 0, a = this.length; a > u; u++) {
            i.push(n = []);
            for (var e = this[u], o = 0, c = e.length; c > o; o++)(r = e[o]) && t.call(r, r.__data__, o) && n.push(r)
        }
        return Cn(i, this.id, this.time).ease(this.ease())
    }, wa.attr = function (t, n) {
        function e() {
            this.removeAttribute(u)
        }

        function r() {
            this.removeAttributeNS(u.space, u.local)
        }

        if (2 > arguments.length) {
            for (n in t)this.attr(n, t[n]);
            return this
        }
        var i = V(t), u = d3.ns.qualify(t);
        return Ln(this, "attr." + t, n, function (t) {
            function n() {
                var n, e = this.getAttribute(u);
                return e !== t && (n = i(e, t), function (t) {
                    this.setAttribute(u, n(t))
                })
            }

            function a() {
                var n, e = this.getAttributeNS(u.space, u.local);
                return e !== t && (n = i(e, t), function (t) {
                    this.setAttributeNS(u.space, u.local, n(t))
                })
            }

            return null == t ? u.local ? r : e : (t += "", u.local ? a : n)
        })
    }, wa.attrTween = function (t, n) {
        function e(t, e) {
            var r = n.call(this, t, e, this.getAttribute(i));
            return r && function (t) {
                this.setAttribute(i, r(t))
            }
        }

        function r(t, e) {
            var r = n.call(this, t, e, this.getAttributeNS(i.space, i.local));
            return r && function (t) {
                this.setAttributeNS(i.space, i.local, r(t))
            }
        }

        var i = d3.ns.qualify(t);
        return this.tween("attr." + t, i.local ? r : e)
    }, wa.style = function (t, n, e) {
        function r() {
            this.style.removeProperty(t)
        }

        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof t) {
                2 > i && (n = "");
                for (e in t)this.style(e, t[e], n);
                return this
            }
            e = ""
        }
        var u = V(t);
        return Ln(this, "style." + t, n, function (n) {
            function i() {
                var r, i = getComputedStyle(this, null).getPropertyValue(t);
                return i !== n && (r = u(i, n), function (n) {
                    this.style.setProperty(t, r(n), e)
                })
            }

            return null == n ? r : (n += "", i)
        })
    }, wa.styleTween = function (t, n, e) {
        return 3 > arguments.length && (e = ""), this.tween("style." + t, function (r, i) {
            var u = n.call(this, r, i, getComputedStyle(this, null).getPropertyValue(t));
            return u && function (n) {
                this.style.setProperty(t, u(n), e)
            }
        })
    }, wa.text = function (t) {
        return Ln(this, "text", t, Dn)
    }, wa.remove = function () {
        return this.each("end.transition", function () {
            var t;
            !this.__transition__ && (t = this.parentNode) && t.removeChild(this)
        })
    }, wa.ease = function (t) {
        var n = this.id;
        return 1 > arguments.length ? this.node().__transition__[n].ease : ("function" != typeof t && (t = d3.ease.apply(d3, arguments)), Tn(this, function (e) {
            e.__transition__[n].ease = t
        }))
    }, wa.delay = function (t) {
        var n = this.id;
        return Tn(this, "function" == typeof t ? function (e, r, i) {
            e.__transition__[n].delay = 0 | t.call(e, e.__data__, r, i)
        } : (t |= 0, function (e) {
            e.__transition__[n].delay = t
        }))
    }, wa.duration = function (t) {
        var n = this.id;
        return Tn(this, "function" == typeof t ? function (e, r, i) {
            e.__transition__[n].duration = Math.max(1, 0 | t.call(e, e.__data__, r, i))
        } : (t = Math.max(1, 0 | t), function (e) {
            e.__transition__[n].duration = t
        }))
    }, wa.each = function (t, n) {
        var e = this.id;
        if (2 > arguments.length) {
            var r = ka, i = _a;
            _a = e, Tn(this, function (n, r, i) {
                ka = n.__transition__[e], t.call(n, n.__data__, r, i)
            }), ka = r, _a = i
        } else Tn(this, function (r) {
            r.__transition__[e].event.on(t, n)
        });
        return this
    }, wa.transition = function () {
        for (var t, n, e, r, i = this.id, u = ++Sa, a = [], o = 0, c = this.length; c > o; o++) {
            a.push(t = []);
            for (var n = this[o], l = 0, s = n.length; s > l; l++)(e = n[l]) && (r = Object.create(e.__transition__[i]), r.delay += r.duration, zn(e, l, u, r)), t.push(e)
        }
        return Cn(a, u)
    }, wa.tween = function (t, n) {
        var e = this.id;
        return 2 > arguments.length ? this.node().__transition__[e].tween.get(t) : Tn(this, null == n ? function (n) {
            n.__transition__[e].tween.remove(t)
        } : function (r) {
            r.__transition__[e].tween.set(t, n)
        })
    };
    var Ea, Aa, Na = 0, Ta = {}, qa = null;
    d3.timer = function (t, n, e) {
        if (3 > arguments.length) {
            if (2 > arguments.length)n = 0; else if (!isFinite(n))return;
            e = Date.now()
        }
        var r = Ta[t.id];
        r && r.callback === t ? (r.then = e, r.delay = n) : Ta[t.id = ++Na] = qa = {callback: t, then: e, delay: n, next: qa}, Ea || (Aa = clearTimeout(Aa), Ea = 1, Ca(Fn))
    }, d3.timer.flush = function () {
        for (var t, n = Date.now(), e = qa; e;)t = n - e.then, e.delay || (e.flush = e.callback(t)), e = e.next;
        Hn()
    };
    var Ca = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        setTimeout(t, 17)
    };
    d3.mouse = function (t) {
        return Rn(t, P())
    };
    var za = /WebKit/.test(navigator.userAgent) ? -1 : 0;
    d3.touches = function (t, n) {
        return 2 > arguments.length && (n = P().touches), n ? Yu(n).map(function (n) {
            var e = Rn(t, n);
            return e.identifier = n.identifier, e
        }) : []
    }, d3.scale = {}, d3.scale.linear = function () {
        return In([0, 1], [0, 1], d3.interpolate, !1)
    }, d3.scale.log = function () {
        return Kn(d3.scale.linear(), Wn)
    };
    var Da = d3.format(".0e");
    Wn.pow = function (t) {
        return Math.pow(10, t)
    }, Qn.pow = function (t) {
        return-Math.pow(10, -t)
    }, d3.scale.pow = function () {
        return te(d3.scale.linear(), 1)
    }, d3.scale.sqrt = function () {
        return d3.scale.pow().exponent(.5)
    }, d3.scale.ordinal = function () {
        return ee([], {t: "range", a: [
            []
        ]})
    }, d3.scale.category10 = function () {
        return d3.scale.ordinal().range(La)
    }, d3.scale.category20 = function () {
        return d3.scale.ordinal().range(Fa)
    }, d3.scale.category20b = function () {
        return d3.scale.ordinal().range(Ha)
    }, d3.scale.category20c = function () {
        return d3.scale.ordinal().range(Ra)
    };
    var La = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"], Fa = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"], Ha = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"], Ra = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    d3.scale.quantile = function () {
        return re([], [])
    }, d3.scale.quantize = function () {
        return ie(0, 1, [0, 1])
    }, d3.scale.threshold = function () {
        return ue([.5], [0, 1])
    }, d3.scale.identity = function () {
        return ae([0, 1])
    }, d3.svg = {}, d3.svg.arc = function () {
        function t() {
            var t = n.apply(this, arguments), u = e.apply(this, arguments), a = r.apply(this, arguments) + Pa, o = i.apply(this, arguments) + Pa, c = (a > o && (c = a, a = o, o = c), o - a), l = Ru > c ? "0" : "1", s = Math.cos(a), f = Math.sin(a), h = Math.cos(o), d = Math.sin(o);
            return c >= ja ? t ? "M0," + u + "A" + u + "," + u + " 0 1,1 0," + -u + "A" + u + "," + u + " 0 1,1 0," + u + "M0," + t + "A" + t + "," + t + " 0 1,0 0," + -t + "A" + t + "," + t + " 0 1,0 0," + t + "Z" : "M0," + u + "A" + u + "," + u + " 0 1,1 0," + -u + "A" + u + "," + u + " 0 1,1 0," + u + "Z" : t ? "M" + u * s + "," + u * f + "A" + u + "," + u + " 0 " + l + ",1 " + u * h + "," + u * d + "L" + t * h + "," + t * d + "A" + t + "," + t + " 0 " + l + ",0 " + t * s + "," + t * f + "Z" : "M" + u * s + "," + u * f + "A" + u + "," + u + " 0 " + l + ",1 " + u * h + "," + u * d + "L0,0" + "Z"
        }

        var n = oe, e = ce, r = le, i = se;
        return t.innerRadius = function (e) {
            return arguments.length ? (n = c(e), t) : n
        }, t.outerRadius = function (n) {
            return arguments.length ? (e = c(n), t) : e
        }, t.startAngle = function (n) {
            return arguments.length ? (r = c(n), t) : r
        }, t.endAngle = function (n) {
            return arguments.length ? (i = c(n), t) : i
        }, t.centroid = function () {
            var t = (n.apply(this, arguments) + e.apply(this, arguments)) / 2, u = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + Pa;
            return[Math.cos(u) * t, Math.sin(u) * t]
        }, t
    };
    var Pa = -Ru / 2, ja = 2 * Ru - 1e-6;
    d3.svg.line = function () {
        return fe(a)
    };
    var Oa = d3.map({linear: ge, "linear-closed": pe, "step-before": me, "step-after": ve, basis: we, "basis-open": Se, "basis-closed": ke, bundle: Ee, cardinal: be, "cardinal-open": ye, "cardinal-closed": Me, monotone: ze});
    Oa.forEach(function (t, n) {
        n.key = t, n.closed = /-closed$/.test(t)
    });
    var Ya = [0, 2 / 3, 1 / 3, 0], Ua = [0, 1 / 3, 2 / 3, 0], Ia = [0, 1 / 6, 2 / 3, 1 / 6];
    d3.svg.line.radial = function () {
        var t = fe(De);
        return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
    }, me.reverse = ve, ve.reverse = me, d3.svg.area = function () {
        return Le(a)
    }, d3.svg.area.radial = function () {
        var t = Le(De);
        return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
    }, d3.svg.chord = function () {
        function e(t, n) {
            var e = r(this, o, t, n), c = r(this, l, t, n);
            return"M" + e.p0 + u(e.r, e.p1, e.a1 - e.a0) + (i(e, c) ? a(e.r, e.p1, e.r, e.p0) : a(e.r, e.p1, c.r, c.p0) + u(c.r, c.p1, c.a1 - c.a0) + a(c.r, c.p1, e.r, e.p0)) + "Z"
        }

        function r(t, n, e, r) {
            var i = n.call(t, e, r), u = s.call(t, i, r), a = f.call(t, i, r) + Pa, o = h.call(t, i, r) + Pa;
            return{r: u, a0: a, a1: o, p0: [u * Math.cos(a), u * Math.sin(a)], p1: [u * Math.cos(o), u * Math.sin(o)]}
        }

        function i(t, n) {
            return t.a0 == n.a0 && t.a1 == n.a1
        }

        function u(t, n, e) {
            return"A" + t + "," + t + " 0 " + +(e > Ru) + ",1 " + n
        }

        function a(t, n, e, r) {
            return"Q 0,0 " + r
        }

        var o = n, l = t, s = Fe, f = le, h = se;
        return e.radius = function (t) {
            return arguments.length ? (s = c(t), e) : s
        }, e.source = function (t) {
            return arguments.length ? (o = c(t), e) : o
        }, e.target = function (t) {
            return arguments.length ? (l = c(t), e) : l
        }, e.startAngle = function (t) {
            return arguments.length ? (f = c(t), e) : f
        }, e.endAngle = function (t) {
            return arguments.length ? (h = c(t), e) : h
        }, e
    }, d3.svg.diagonal = function () {
        function e(t, n) {
            var e = r.call(this, t, n), a = i.call(this, t, n), o = (e.y + a.y) / 2, c = [e, {x: e.x, y: o}, {x: a.x, y: o}, a];
            return c = c.map(u), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }

        var r = n, i = t, u = He;
        return e.source = function (t) {
            return arguments.length ? (r = c(t), e) : r
        }, e.target = function (t) {
            return arguments.length ? (i = c(t), e) : i
        }, e.projection = function (t) {
            return arguments.length ? (u = t, e) : u
        }, e
    }, d3.svg.diagonal.radial = function () {
        var t = d3.svg.diagonal(), n = He, e = t.projection;
        return t.projection = function (t) {
            return arguments.length ? e(Re(n = t)) : n
        }, t
    }, d3.svg.symbol = function () {
        function t(t, r) {
            return(Va.get(n.call(this, t, r)) || Oe)(e.call(this, t, r))
        }

        var n = je, e = Pe;
        return t.type = function (e) {
            return arguments.length ? (n = c(e), t) : n
        }, t.size = function (n) {
            return arguments.length ? (e = c(n), t) : e
        }, t
    };
    var Va = d3.map({circle: Oe, cross: function (t) {
        var n = Math.sqrt(t / 5) / 2;
        return"M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z"
    }, diamond: function (t) {
        var n = Math.sqrt(t / (2 * Za)), e = n * Za;
        return"M0," + -n + "L" + e + ",0" + " 0," + n + " " + -e + ",0" + "Z"
    }, square: function (t) {
        var n = Math.sqrt(t) / 2;
        return"M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z"
    }, "triangle-down": function (t) {
        var n = Math.sqrt(t / Xa), e = n * Xa / 2;
        return"M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z"
    }, "triangle-up": function (t) {
        var n = Math.sqrt(t / Xa), e = n * Xa / 2;
        return"M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z"
    }});
    d3.svg.symbolTypes = Va.keys();
    var Xa = Math.sqrt(3), Za = Math.tan(30 * ju);
    d3.svg.axis = function () {
        function t(t) {
            t.each(function () {
                var t, f = d3.select(this), h = null == l ? e.ticks ? e.ticks.apply(e, c) : e.domain() : l, d = null == n ? e.tickFormat ? e.tickFormat.apply(e, c) : String : n, g = Ie(e, h, s), p = f.selectAll(".minor").data(g, String), m = p.enter().insert("line", "g").attr("class", "tick minor").style("opacity", 1e-6), v = d3.transition(p.exit()).style("opacity", 1e-6).remove(), y = d3.transition(p).style("opacity", 1), M = f.selectAll("g").data(h, String), b = M.enter().insert("g", "path").style("opacity", 1e-6), x = d3.transition(M.exit()).style("opacity", 1e-6).remove(), _ = d3.transition(M).style("opacity", 1), w = On(e), S = f.selectAll(".domain").data([0]), k = d3.transition(S), E = e.copy(), A = this.__chart__ || E;
                this.__chart__ = E, S.enter().append("path").attr("class", "domain"), b.append("line").attr("class", "tick"), b.append("text");
                var N = b.select("line"), T = _.select("line"), q = M.select("text").text(d), C = b.select("text"), z = _.select("text");
                switch (r) {
                    case"bottom":
                        t = Ye, m.attr("y2", u), y.attr("x2", 0).attr("y2", u), N.attr("y2", i), C.attr("y", Math.max(i, 0) + o), T.attr("x2", 0).attr("y2", i), z.attr("x", 0).attr("y", Math.max(i, 0) + o), q.attr("dy", ".71em").style("text-anchor", "middle"), k.attr("d", "M" + w[0] + "," + a + "V0H" + w[1] + "V" + a);
                        break;
                    case"top":
                        t = Ye, m.attr("y2", -u), y.attr("x2", 0).attr("y2", -u), N.attr("y2", -i), C.attr("y", -(Math.max(i, 0) + o)), T.attr("x2", 0).attr("y2", -i), z.attr("x", 0).attr("y", -(Math.max(i, 0) + o)), q.attr("dy", "0em").style("text-anchor", "middle"), k.attr("d", "M" + w[0] + "," + -a + "V0H" + w[1] + "V" + -a);
                        break;
                    case"left":
                        t = Ue, m.attr("x2", -u), y.attr("x2", -u).attr("y2", 0), N.attr("x2", -i), C.attr("x", -(Math.max(i, 0) + o)), T.attr("x2", -i).attr("y2", 0), z.attr("x", -(Math.max(i, 0) + o)).attr("y", 0), q.attr("dy", ".32em").style("text-anchor", "end"), k.attr("d", "M" + -a + "," + w[0] + "H0V" + w[1] + "H" + -a);
                        break;
                    case"right":
                        t = Ue, m.attr("x2", u), y.attr("x2", u).attr("y2", 0), N.attr("x2", i), C.attr("x", Math.max(i, 0) + o), T.attr("x2", i).attr("y2", 0), z.attr("x", Math.max(i, 0) + o).attr("y", 0), q.attr("dy", ".32em").style("text-anchor", "start"), k.attr("d", "M" + a + "," + w[0] + "H0V" + w[1] + "H" + a)
                }
                if (e.ticks)b.call(t, A), _.call(t, E), x.call(t, E), m.call(t, A), y.call(t, E), v.call(t, E); else {
                    var D = E.rangeBand() / 2, L = function (t) {
                        return E(t) + D
                    };
                    b.call(t, L), _.call(t, L)
                }
            })
        }

        var n, e = d3.scale.linear(), r = "bottom", i = 6, u = 6, a = 6, o = 3, c = [10], l = null, s = 0;
        return t.scale = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.orient = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.ticks = function () {
            return arguments.length ? (c = arguments, t) : c
        }, t.tickValues = function (n) {
            return arguments.length ? (l = n, t) : l
        }, t.tickFormat = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.tickSize = function (n, e) {
            if (!arguments.length)return i;
            var r = arguments.length - 1;
            return i = +n, u = r > 1 ? +e : i, a = r > 0 ? +arguments[r] : i, t
        }, t.tickPadding = function (n) {
            return arguments.length ? (o = +n, t) : o
        }, t.tickSubdivide = function (n) {
            return arguments.length ? (s = +n, t) : s
        }, t
    }, d3.svg.brush = function () {
        function t(u) {
            u.each(function () {
                var u, a = d3.select(this), s = a.selectAll(".background").data([0]), f = a.selectAll(".extent").data([0]), h = a.selectAll(".resize").data(l, String);
                a.style("pointer-events", "all").on("mousedown.brush", i).on("touchstart.brush", i), s.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), f.enter().append("rect").attr("class", "extent").style("cursor", "move"), h.enter().append("g").attr("class",function (t) {
                    return"resize " + t
                }).style("cursor",function (t) {
                    return Ba[t]
                }).append("rect").attr("x",function (t) {
                    return/[ew]$/.test(t) ? -3 : null
                }).attr("y",function (t) {
                    return/^[ns]/.test(t) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", t.empty() ? "none" : null), h.exit().remove(), o && (u = On(o), s.attr("x", u[0]).attr("width", u[1] - u[0]), e(a)), c && (u = On(c), s.attr("y", u[0]).attr("height", u[1] - u[0]), r(a)), n(a)
            })
        }

        function n(t) {
            t.selectAll(".resize").attr("transform", function (t) {
                return"translate(" + s[+/e$/.test(t)][0] + "," + s[+/^s/.test(t)][1] + ")"
            })
        }

        function e(t) {
            t.select(".extent").attr("x", s[0][0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1][0] - s[0][0])
        }

        function r(t) {
            t.select(".extent").attr("y", s[0][1]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", s[1][1] - s[0][1])
        }

        function i() {
            function i() {
                var t = d3.event.changedTouches;
                return t ? d3.touches(v, t)[0] : d3.mouse(v)
            }

            function l() {
                32 == d3.event.keyCode && (S || (p = null, k[0] -= s[1][0], k[1] -= s[1][1], S = 2), R())
            }

            function f() {
                32 == d3.event.keyCode && 2 == S && (k[0] += s[1][0], k[1] += s[1][1], S = 0, R())
            }

            function h() {
                var t = i(), u = !1;
                m && (t[0] += m[0], t[1] += m[1]), S || (d3.event.altKey ? (p || (p = [(s[0][0] + s[1][0]) / 2, (s[0][1] + s[1][1]) / 2]), k[0] = s[+(t[0] < p[0])][0], k[1] = s[+(t[1] < p[1])][1]) : p = null), _ && d(t, o, 0) && (e(b), u = !0), w && d(t, c, 1) && (r(b), u = !0), u && (n(b), M({type: "brush", mode: S ? "move" : "resize"}))
            }

            function d(t, n, e) {
                var r, i, a = On(n), o = a[0], c = a[1], l = k[e], f = s[1][e] - s[0][e];
                return S && (o -= l, c -= f + l), r = Math.max(o, Math.min(c, t[e])), S ? i = (r += l) + f : (p && (l = Math.max(o, Math.min(c, 2 * p[e] - r))), r > l ? (i = r, r = l) : i = l), s[0][e] !== r || s[1][e] !== i ? (u = null, s[0][e] = r, s[1][e] = i, !0) : void 0
            }

            function g() {
                h(), b.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), d3.select("body").style("cursor", null), E.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), M({type: "brushend"}), R()
            }

            var p, m, v = this, y = d3.select(d3.event.target), M = a.of(v, arguments), b = d3.select(v), x = y.datum(), _ = !/^(n|s)$/.test(x) && o, w = !/^(e|w)$/.test(x) && c, S = y.classed("extent"), k = i(), E = d3.select(window).on("mousemove.brush", h).on("mouseup.brush", g).on("touchmove.brush", h).on("touchend.brush", g).on("keydown.brush", l).on("keyup.brush", f);
            if (S)k[0] = s[0][0] - k[0], k[1] = s[0][1] - k[1]; else if (x) {
                var A = +/w$/.test(x), N = +/^n/.test(x);
                m = [s[1 - A][0] - k[0], s[1 - N][1] - k[1]], k[0] = s[A][0], k[1] = s[N][1]
            } else d3.event.altKey && (p = k.slice());
            b.style("pointer-events", "none").selectAll(".resize").style("display", null), d3.select("body").style("cursor", y.style("cursor")), M({type: "brushstart"}), h(), R()
        }

        var u, a = j(t, "brushstart", "brush", "brushend"), o = null, c = null, l = $a[0], s = [
            [0, 0],
            [0, 0]
        ];
        return t.x = function (n) {
            return arguments.length ? (o = n, l = $a[!o << 1 | !c], t) : o
        }, t.y = function (n) {
            return arguments.length ? (c = n, l = $a[!o << 1 | !c], t) : c
        }, t.extent = function (n) {
            var e, r, i, a, l;
            return arguments.length ? (u = [
                [0, 0],
                [0, 0]
            ], o && (e = n[0], r = n[1], c && (e = e[0], r = r[0]), u[0][0] = e, u[1][0] = r, o.invert && (e = o(e), r = o(r)), e > r && (l = e, e = r, r = l), s[0][0] = 0 | e, s[1][0] = 0 | r), c && (i = n[0], a = n[1], o && (i = i[1], a = a[1]), u[0][1] = i, u[1][1] = a, c.invert && (i = c(i), a = c(a)), i > a && (l = i, i = a, a = l), s[0][1] = 0 | i, s[1][1] = 0 | a), t) : (n = u || s, o && (e = n[0][0], r = n[1][0], u || (e = s[0][0], r = s[1][0], o.invert && (e = o.invert(e), r = o.invert(r)), e > r && (l = e, e = r, r = l))), c && (i = n[0][1], a = n[1][1], u || (i = s[0][1], a = s[1][1], c.invert && (i = c.invert(i), a = c.invert(a)), i > a && (l = i, i = a, a = l))), o && c ? [
                [e, i],
                [r, a]
            ] : o ? [e, r] : c && [i, a])
        }, t.clear = function () {
            return u = null, s[0][0] = s[0][1] = s[1][0] = s[1][1] = 0, t
        }, t.empty = function () {
            return o && s[0][0] === s[1][0] || c && s[0][1] === s[1][1]
        }, d3.rebind(t, a, "on")
    };
    var Ba = {n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize"}, $a = [
        ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
        ["e", "w"],
        ["n", "s"],
        []
    ];
    d3.behavior = {}, d3.behavior.drag = function () {
        function t() {
            this.on("mousedown.drag", n).on("touchstart.drag", n)
        }

        function n() {
            function t() {
                var t = o.parentNode;
                return null != s ? d3.touches(t).filter(function (t) {
                    return t.identifier === s
                })[0] : d3.mouse(t)
            }

            function n() {
                if (!o.parentNode)return i();
                var n = t(), e = n[0] - f[0], r = n[1] - f[1];
                h |= e | r, f = n, R(), c({type: "drag", x: n[0] + a[0], y: n[1] + a[1], dx: e, dy: r})
            }

            function i() {
                c({type: "dragend"}), h && (R(), d3.event.target === l && d.on("click.drag", u, !0)), d.on(null != s ? "touchmove.drag-" + s : "mousemove.drag", null).on(null != s ? "touchend.drag-" + s : "mouseup.drag", null)
            }

            function u() {
                R(), d.on("click.drag", null)
            }

            var a, o = this, c = e.of(o, arguments), l = d3.event.target, s = d3.event.touches ? d3.event.changedTouches[0].identifier : null, f = t(), h = 0, d = d3.select(window).on(null != s ? "touchmove.drag-" + s : "mousemove.drag", n).on(null != s ? "touchend.drag-" + s : "mouseup.drag", i, !0);
            r ? (a = r.apply(o, arguments), a = [a.x - f[0], a.y - f[1]]) : a = [0, 0], null == s && R(), c({type: "dragstart"})
        }

        var e = j(t, "drag", "dragstart", "dragend"), r = null;
        return t.origin = function (n) {
            return arguments.length ? (r = n, t) : r
        }, d3.rebind(t, e, "on")
    }, d3.behavior.zoom = function () {
        function t() {
            this.on("mousedown.zoom", o).on("mousewheel.zoom", c).on("mousemove.zoom", l).on("DOMMouseScroll.zoom", c).on("dblclick.zoom", s).on("touchstart.zoom", f).on("touchmove.zoom", h).on("touchend.zoom", f)
        }

        function n(t) {
            return[(t[0] - b[0]) / x, (t[1] - b[1]) / x]
        }

        function e(t) {
            return[t[0] * x + b[0], t[1] * x + b[1]]
        }

        function r(t) {
            x = Math.max(_[0], Math.min(_[1], t))
        }

        function i(t, n) {
            n = e(n), b[0] += t[0] - n[0], b[1] += t[1] - n[1]
        }

        function u() {
            m && m.domain(p.range().map(function (t) {
                return(t - b[0]) / x
            }).map(p.invert)), y && y.domain(v.range().map(function (t) {
                return(t - b[1]) / x
            }).map(v.invert))
        }

        function a(t) {
            u(), d3.event.preventDefault(), t({type: "zoom", scale: x, translate: b})
        }

        function o() {
            function t() {
                l = 1, i(d3.mouse(u), f), a(o)
            }

            function e() {
                l && R(), s.on("mousemove.zoom", null).on("mouseup.zoom", null), l && d3.event.target === c && s.on("click.zoom", r, !0)
            }

            function r() {
                R(), s.on("click.zoom", null)
            }

            var u = this, o = w.of(u, arguments), c = d3.event.target, l = 0, s = d3.select(window).on("mousemove.zoom", t).on("mouseup.zoom", e), f = n(d3.mouse(u));
            window.focus(), R()
        }

        function c() {
            d || (d = n(d3.mouse(this))), r(Math.pow(2, .002 * Ve()) * x), i(d3.mouse(this), d), a(w.of(this, arguments))
        }

        function l() {
            d = null
        }

        function s() {
            var t = d3.mouse(this), e = n(t), u = Math.log(x) / Math.LN2;
            r(Math.pow(2, d3.event.shiftKey ? Math.ceil(u) - 1 : Math.floor(u) + 1)), i(t, e), a(w.of(this, arguments))
        }

        function f() {
            var t = d3.touches(this), e = Date.now();
            if (g = x, d = {}, t.forEach(function (t) {
                d[t.identifier] = n(t)
            }), R(), 1 === t.length) {
                if (500 > e - M) {
                    var u = t[0], o = n(t[0]);
                    r(2 * x), i(u, o), a(w.of(this, arguments))
                }
                M = e
            }
        }

        function h() {
            var t = d3.touches(this), n = t[0], e = d[n.identifier];
            if (u = t[1]) {
                var u, o = d[u.identifier];
                n = [(n[0] + u[0]) / 2, (n[1] + u[1]) / 2], e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2], r(d3.event.scale * g)
            }
            i(n, e), M = null, a(w.of(this, arguments))
        }

        var d, g, p, m, v, y, M, b = [0, 0], x = 1, _ = Ga, w = j(t, "zoom");
        return t.translate = function (n) {
            return arguments.length ? (b = n.map(Number), u(), t) : b
        }, t.scale = function (n) {
            return arguments.length ? (x = +n, u(), t) : x
        }, t.scaleExtent = function (n) {
            return arguments.length ? (_ = null == n ? Ga : n.map(Number), t) : _
        }, t.x = function (n) {
            return arguments.length ? (m = n, p = n.copy(), b = [0, 0], x = 1, t) : m
        }, t.y = function (n) {
            return arguments.length ? (y = n, v = n.copy(), b = [0, 0], x = 1, t) : y
        }, d3.rebind(t, w, "on")
    };
    var Ja, Ga = [0, 1 / 0];
    d3.layout = {}, d3.layout.bundle = function () {
        return function (t) {
            for (var n = [], e = -1, r = t.length; r > ++e;)n.push(Xe(t[e]));
            return n
        }
    }, d3.layout.chord = function () {
        function t() {
            var t, l, f, h, d, g = {}, p = [], m = d3.range(u), v = [];
            for (e = [], r = [], t = 0, h = -1; u > ++h;) {
                for (l = 0, d = -1; u > ++d;)l += i[h][d];
                p.push(l), v.push(d3.range(u)), t += l
            }
            for (a && m.sort(function (t, n) {
                return a(p[t], p[n])
            }), o && v.forEach(function (t, n) {
                t.sort(function (t, e) {
                    return o(i[n][t], i[n][e])
                })
            }), t = (2 * Ru - s * u) / t, l = 0, h = -1; u > ++h;) {
                for (f = l, d = -1; u > ++d;) {
                    var y = m[h], M = v[y][d], b = i[y][M], x = l, _ = l += b * t;
                    g[y + "-" + M] = {index: y, subindex: M, startAngle: x, endAngle: _, value: b}
                }
                r[y] = {index: y, startAngle: f, endAngle: l, value: (l - f) / t}, l += s
            }
            for (h = -1; u > ++h;)for (d = h - 1; u > ++d;) {
                var w = g[h + "-" + d], S = g[d + "-" + h];
                (w.value || S.value) && e.push(w.value < S.value ? {source: S, target: w} : {source: w, target: S})
            }
            c && n()
        }

        function n() {
            e.sort(function (t, n) {
                return c((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2)
            })
        }

        var e, r, i, u, a, o, c, l = {}, s = 0;
        return l.matrix = function (t) {
            return arguments.length ? (u = (i = t) && i.length, e = r = null, l) : i
        }, l.padding = function (t) {
            return arguments.length ? (s = t, e = r = null, l) : s
        }, l.sortGroups = function (t) {
            return arguments.length ? (a = t, e = r = null, l) : a
        }, l.sortSubgroups = function (t) {
            return arguments.length ? (o = t, e = null, l) : o
        }, l.sortChords = function (t) {
            return arguments.length ? (c = t, e && n(), l) : c
        }, l.chords = function () {
            return e || t(), e
        }, l.groups = function () {
            return r || t(), r
        }, l
    }, d3.layout.force = function () {
        function t(t) {
            return function (n, e, r, i) {
                if (n.point !== t) {
                    var u = n.cx - t.x, a = n.cy - t.y, o = 1 / Math.sqrt(u * u + a * a);
                    if (v > (i - e) * o) {
                        var c = n.charge * o * o;
                        return t.px -= u * c, t.py -= a * c, !0
                    }
                    if (n.point && isFinite(o)) {
                        var c = n.pointCharge * o * o;
                        t.px -= u * c, t.py -= a * c
                    }
                }
                return!n.charge
            }
        }

        function n(t) {
            t.px = d3.event.x, t.py = d3.event.y, l.resume()
        }

        var e, r, i, u, o, l = {}, s = d3.dispatch("start", "tick", "end"), f = [1, 1], h = .9, d = Qe, g = tr, p = -30, m = .1, v = .8, y = [], M = [];
        return l.tick = function () {
            if (.005 > (r *= .99))return s.end({type: "end", alpha: r = 0}), !0;
            var n, e, a, c, l, d, g, v, b, x = y.length, _ = M.length;
            for (e = 0; _ > e; ++e)a = M[e], c = a.source, l = a.target, v = l.x - c.x, b = l.y - c.y, (d = v * v + b * b) && (d = r * u[e] * ((d = Math.sqrt(d)) - i[e]) / d, v *= d, b *= d, l.x -= v * (g = c.weight / (l.weight + c.weight)), l.y -= b * g, c.x += v * (g = 1 - g), c.y += b * g);
            if ((g = r * m) && (v = f[0] / 2, b = f[1] / 2, e = -1, g))for (; x > ++e;)a = y[e], a.x += (v - a.x) * g, a.y += (b - a.y) * g;
            if (p)for (We(n = d3.geom.quadtree(y), r, o), e = -1; x > ++e;)(a = y[e]).fixed || n.visit(t(a));
            for (e = -1; x > ++e;)a = y[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * h, a.y -= (a.py - (a.py = a.y)) * h);
            s.tick({type: "tick", alpha: r})
        }, l.nodes = function (t) {
            return arguments.length ? (y = t, l) : y
        }, l.links = function (t) {
            return arguments.length ? (M = t, l) : M
        }, l.size = function (t) {
            return arguments.length ? (f = t, l) : f
        }, l.linkDistance = function (t) {
            return arguments.length ? (d = c(t), l) : d
        }, l.distance = l.linkDistance, l.linkStrength = function (t) {
            return arguments.length ? (g = c(t), l) : g
        }, l.friction = function (t) {
            return arguments.length ? (h = t, l) : h
        }, l.charge = function (t) {
            return arguments.length ? (p = "function" == typeof t ? t : +t, l) : p
        }, l.gravity = function (t) {
            return arguments.length ? (m = t, l) : m
        }, l.theta = function (t) {
            return arguments.length ? (v = t, l) : v
        }, l.alpha = function (t) {
            return arguments.length ? (r ? r = t > 0 ? t : 0 : t > 0 && (s.start({type: "start", alpha: r = t}), d3.timer(l.tick)), l) : r
        }, l.start = function () {
            function t(t, r) {
                for (var i, u = n(e), a = -1, o = u.length; o > ++a;)if (!isNaN(i = u[a][t]))return i;
                return Math.random() * r
            }

            function n() {
                if (!a) {
                    for (a = [], r = 0; s > r; ++r)a[r] = [];
                    for (r = 0; h > r; ++r) {
                        var t = M[r];
                        a[t.source.index].push(t.target), a[t.target.index].push(t.source)
                    }
                }
                return a[e]
            }

            var e, r, a, c, s = y.length, h = M.length, m = f[0], v = f[1];
            for (e = 0; s > e; ++e)(c = y[e]).index = e, c.weight = 0;
            for (i = [], u = [], e = 0; h > e; ++e)c = M[e], "number" == typeof c.source && (c.source = y[c.source]), "number" == typeof c.target && (c.target = y[c.target]), i[e] = d.call(this, c, e), u[e] = g.call(this, c, e), ++c.source.weight, ++c.target.weight;
            for (e = 0; s > e; ++e)c = y[e], isNaN(c.x) && (c.x = t("x", m)), isNaN(c.y) && (c.y = t("y", v)), isNaN(c.px) && (c.px = c.x), isNaN(c.py) && (c.py = c.y);
            if (o = [], "function" == typeof p)for (e = 0; s > e; ++e)o[e] = +p.call(this, y[e], e); else for (e = 0; s > e; ++e)o[e] = p;
            return l.resume()
        }, l.resume = function () {
            return l.alpha(.1)
        }, l.stop = function () {
            return l.alpha(0)
        }, l.drag = function () {
            e || (e = d3.behavior.drag().origin(a).on("dragstart", $e).on("drag", n).on("dragend", Je)), this.on("mouseover.force", Ge).on("mouseout.force", Ke).call(e)
        }, d3.rebind(l, s, "on")
    }, d3.layout.partition = function () {
        function t(n, e, r, i) {
            var u = n.children;
            if (n.x = e, n.y = n.depth * i, n.dx = r, n.dy = i, u && (a = u.length)) {
                var a, o, c, l = -1;
                for (r = n.value ? r / n.value : 0; a > ++l;)t(o = u[l], e, c = o.value * r, i), e += c
            }
        }

        function n(t) {
            var e = t.children, r = 0;
            if (e && (i = e.length))for (var i, u = -1; i > ++u;)r = Math.max(r, n(e[u]));
            return 1 + r
        }

        function e(e, u) {
            var a = r.call(this, e, u);
            return t(a[0], 0, i[0], i[1] / n(a[0])), a
        }

        var r = d3.layout.hierarchy(), i = [1, 1];
        return e.size = function (t) {
            return arguments.length ? (i = t, e) : i
        }, hr(e, r)
    }, d3.layout.pie = function () {
        function t(u) {
            var a = u.map(function (e, r) {
                return+n.call(t, e, r)
            }), o = +("function" == typeof r ? r.apply(this, arguments) : r), c = (("function" == typeof i ? i.apply(this, arguments) : i) - r) / d3.sum(a), l = d3.range(u.length);
            null != e && l.sort(e === Ka ? function (t, n) {
                return a[n] - a[t]
            } : function (t, n) {
                return e(u[t], u[n])
            });
            var s = [];
            return l.forEach(function (t) {
                var n;
                s[t] = {data: u[t], value: n = a[t], startAngle: o, endAngle: o += n * c}
            }), s
        }

        var n = Number, e = Ka, r = 0, i = 2 * Ru;
        return t.value = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.sort = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.startAngle = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.endAngle = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    var Ka = {};
    d3.layout.stack = function () {
        function t(a, c) {
            var l = a.map(function (e, r) {
                return n.call(t, e, r)
            }), s = l.map(function (n) {
                return n.map(function (n, e) {
                    return[u.call(t, n, e), o.call(t, n, e)]
                })
            }), f = e.call(t, s, c);
            l = d3.permute(l, f), s = d3.permute(s, f);
            var h, d, g, p = r.call(t, s, c), m = l.length, v = l[0].length;
            for (d = 0; v > d; ++d)for (i.call(t, l[0][d], g = p[d], s[0][d][1]), h = 1; m > h; ++h)i.call(t, l[h][d], g += s[h - 1][d][1], s[h][d][1]);
            return a
        }

        var n = a, e = ir, r = ur, i = rr, u = nr, o = er;
        return t.values = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.order = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Wa.get(n) || ir, t) : e
        }, t.offset = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Qa.get(n) || ur, t) : r
        }, t.x = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t.y = function (n) {
            return arguments.length ? (o = n, t) : o
        }, t.out = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    var Wa = d3.map({"inside-out": function (t) {
        var n, e, r = t.length, i = t.map(ar), u = t.map(or), a = d3.range(r).sort(function (t, n) {
            return i[t] - i[n]
        }), o = 0, c = 0, l = [], s = [];
        for (n = 0; r > n; ++n)e = a[n], c > o ? (o += u[e], l.push(e)) : (c += u[e], s.push(e));
        return s.reverse().concat(l)
    }, reverse: function (t) {
        return d3.range(t.length).reverse()
    }, "default": ir}), Qa = d3.map({silhouette: function (t) {
        var n, e, r, i = t.length, u = t[0].length, a = [], o = 0, c = [];
        for (e = 0; u > e; ++e) {
            for (n = 0, r = 0; i > n; n++)r += t[n][e][1];
            r > o && (o = r), a.push(r)
        }
        for (e = 0; u > e; ++e)c[e] = (o - a[e]) / 2;
        return c
    }, wiggle: function (t) {
        var n, e, r, i, u, a, o, c, l, s = t.length, f = t[0], h = f.length, d = [];
        for (d[0] = c = l = 0, e = 1; h > e; ++e) {
            for (n = 0, i = 0; s > n; ++n)i += t[n][e][1];
            for (n = 0, u = 0, o = f[e][0] - f[e - 1][0]; s > n; ++n) {
                for (r = 0, a = (t[n][e][1] - t[n][e - 1][1]) / (2 * o); n > r; ++r)a += (t[r][e][1] - t[r][e - 1][1]) / o;
                u += a * t[n][e][1]
            }
            d[e] = c -= i ? u / i * o : 0, l > c && (l = c)
        }
        for (e = 0; h > e; ++e)d[e] -= l;
        return d
    }, expand: function (t) {
        var n, e, r, i = t.length, u = t[0].length, a = 1 / i, o = [];
        for (e = 0; u > e; ++e) {
            for (n = 0, r = 0; i > n; n++)r += t[n][e][1];
            if (r)for (n = 0; i > n; n++)t[n][e][1] /= r; else for (n = 0; i > n; n++)t[n][e][1] = a
        }
        for (e = 0; u > e; ++e)o[e] = 0;
        return o
    }, zero: ur});
    d3.layout.histogram = function () {
        function t(t, u) {
            for (var a, o, c = [], l = t.map(e, this), s = r.call(this, l, u), f = i.call(this, s, l, u), u = -1, h = l.length, d = f.length - 1, g = n ? 1 : 1 / h; d > ++u;)a = c[u] = [], a.dx = f[u + 1] - (a.x = f[u]), a.y = 0;
            if (d > 0)for (u = -1; h > ++u;)o = l[u], o >= s[0] && s[1] >= o && (a = c[d3.bisect(f, o, 1, d) - 1], a.y += g, a.push(t[u]));
            return c
        }

        var n = !0, e = Number, r = fr, i = lr;
        return t.value = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.range = function (n) {
            return arguments.length ? (r = c(n), t) : r
        }, t.bins = function (n) {
            return arguments.length ? (i = "number" == typeof n ? function (t) {
                return sr(t, n)
            } : c(n), t) : i
        }, t.frequency = function (e) {
            return arguments.length ? (n = !!e, t) : n
        }, t
    }, d3.layout.hierarchy = function () {
        function t(n, a, o) {
            var c = i.call(e, n, a);
            if (n.depth = a, o.push(n), c && (l = c.length)) {
                for (var l, s, f = -1, h = n.children = [], d = 0, g = a + 1; l > ++f;)s = t(c[f], g, o), s.parent = n, h.push(s), d += s.value;
                r && h.sort(r), u && (n.value = d)
            } else u && (n.value = +u.call(e, n, a) || 0);
            return n
        }

        function n(t, r) {
            var i = t.children, a = 0;
            if (i && (o = i.length))for (var o, c = -1, l = r + 1; o > ++c;)a += n(i[c], l); else u && (a = +u.call(e, t, r) || 0);
            return u && (t.value = a), a
        }

        function e(n) {
            var e = [];
            return t(n, 0, e), e
        }

        var r = pr, i = dr, u = gr;
        return e.sort = function (t) {
            return arguments.length ? (r = t, e) : r
        }, e.children = function (t) {
            return arguments.length ? (i = t, e) : i
        }, e.value = function (t) {
            return arguments.length ? (u = t, e) : u
        }, e.revalue = function (t) {
            return n(t, 0), t
        }, e
    }, d3.layout.pack = function () {
        function t(t, i) {
            var u = n.call(this, t, i), a = u[0];
            a.x = 0, a.y = 0, Rr(a, function (t) {
                t.r = Math.sqrt(t.value)
            }), Rr(a, xr);
            var o = r[0], c = r[1], l = Math.max(2 * a.r / o, 2 * a.r / c);
            if (e > 0) {
                var s = e * l / 2;
                Rr(a, function (t) {
                    t.r += s
                }), Rr(a, xr), Rr(a, function (t) {
                    t.r -= s
                }), l = Math.max(2 * a.r / o, 2 * a.r / c)
            }
            return Sr(a, o / 2, c / 2, 1 / l), u
        }

        var n = d3.layout.hierarchy().sort(vr), e = 0, r = [1, 1];
        return t.size = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.padding = function (n) {
            return arguments.length ? (e = +n, t) : e
        }, hr(t, n)
    }, d3.layout.cluster = function () {
        function t(t, i) {
            var u, a = n.call(this, t, i), o = a[0], c = 0;
            Rr(o, function (t) {
                var n = t.children;
                n && n.length ? (t.x = Ar(n), t.y = Er(n)) : (t.x = u ? c += e(t, u) : 0, t.y = 0, u = t)
            });
            var l = Nr(o), s = Tr(o), f = l.x - e(l, s) / 2, h = s.x + e(s, l) / 2;
            return Rr(o, function (t) {
                t.x = (t.x - f) / (h - f) * r[0], t.y = (1 - (o.y ? t.y / o.y : 1)) * r[1]
            }), a
        }

        var n = d3.layout.hierarchy().sort(null).value(null), e = qr, r = [1, 1];
        return t.separation = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.size = function (n) {
            return arguments.length ? (r = n, t) : r
        }, hr(t, n)
    }, d3.layout.tree = function () {
        function t(t, i) {
            function u(t, n) {
                var r = t.children, i = t._tree;
                if (r && (a = r.length)) {
                    for (var a, c, l, s = r[0], f = s, h = -1; a > ++h;)l = r[h], u(l, c), f = o(l, c, f), c = l;
                    Pr(t);
                    var d = .5 * (s._tree.prelim + l._tree.prelim);
                    n ? (i.prelim = n._tree.prelim + e(t, n), i.mod = i.prelim - d) : i.prelim = d
                } else n && (i.prelim = n._tree.prelim + e(t, n))
            }

            function a(t, n) {
                t.x = t._tree.prelim + n;
                var e = t.children;
                if (e && (r = e.length)) {
                    var r, i = -1;
                    for (n += t._tree.mod; r > ++i;)a(e[i], n)
                }
            }

            function o(t, n, r) {
                if (n) {
                    for (var i, u = t, a = t, o = n, c = t.parent.children[0], l = u._tree.mod, s = a._tree.mod, f = o._tree.mod, h = c._tree.mod; o = zr(o), u = Cr(u), o && u;)c = Cr(c), a = zr(a), a._tree.ancestor = t, i = o._tree.prelim + f - u._tree.prelim - l + e(o, u), i > 0 && (jr(Or(o, t, r), t, i), l += i, s += i), f += o._tree.mod, l += u._tree.mod, h += c._tree.mod, s += a._tree.mod;
                    o && !zr(a) && (a._tree.thread = o, a._tree.mod += f - s), u && !Cr(c) && (c._tree.thread = u, c._tree.mod += l - h, r = t)
                }
                return r
            }

            var c = n.call(this, t, i), l = c[0];
            Rr(l, function (t, n) {
                t._tree = {ancestor: t, prelim: 0, mod: 0, change: 0, shift: 0, number: n ? n._tree.number + 1 : 0}
            }), u(l), a(l, -l._tree.prelim);
            var s = Dr(l, Fr), f = Dr(l, Lr), h = Dr(l, Hr), d = s.x - e(s, f) / 2, g = f.x + e(f, s) / 2, p = h.depth || 1;
            return Rr(l, function (t) {
                t.x = (t.x - d) / (g - d) * r[0], t.y = t.depth / p * r[1], delete t._tree
            }), c
        }

        var n = d3.layout.hierarchy().sort(null).value(null), e = qr, r = [1, 1];
        return t.separation = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.size = function (n) {
            return arguments.length ? (r = n, t) : r
        }, hr(t, n)
    }, d3.layout.treemap = function () {
        function t(t, n) {
            for (var e, r, i = -1, u = t.length; u > ++i;)r = (e = t[i]).value * (0 > n ? 0 : n), e.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function n(e) {
            var u = e.children;
            if (u && u.length) {
                var a, o, c, l = f(e), s = [], h = u.slice(), g = 1 / 0, p = "slice" === d ? l.dx : "dice" === d ? l.dy : "slice-dice" === d ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (t(h, l.dx * l.dy / e.value), s.area = 0; (c = h.length) > 0;)s.push(a = h[c - 1]), s.area += a.area, "squarify" !== d || g >= (o = r(s, p)) ? (h.pop(), g = o) : (s.area -= s.pop().area, i(s, p, l, !1), p = Math.min(l.dx, l.dy), s.length = s.area = 0, g = 1 / 0);
                s.length && (i(s, p, l, !0), s.length = s.area = 0), u.forEach(n)
            }
        }

        function e(n) {
            var r = n.children;
            if (r && r.length) {
                var u, a = f(n), o = r.slice(), c = [];
                for (t(o, a.dx * a.dy / n.value), c.area = 0; u = o.pop();)c.push(u), c.area += u.area, null != u.z && (i(c, u.z ? a.dx : a.dy, a, !o.length), c.length = c.area = 0);
                r.forEach(e)
            }
        }

        function r(t, n) {
            for (var e, r = t.area, i = 0, u = 1 / 0, a = -1, o = t.length; o > ++a;)(e = t[a].area) && (u > e && (u = e), e > i && (i = e));
            return r *= r, n *= n, r ? Math.max(n * i * g / r, r / (n * u * g)) : 1 / 0
        }

        function i(t, n, e, r) {
            var i, u = -1, a = t.length, o = e.x, l = e.y, s = n ? c(t.area / n) : 0;
            if (n == e.dx) {
                for ((r || s > e.dy) && (s = e.dy); a > ++u;)i = t[u], i.x = o, i.y = l, i.dy = s, o += i.dx = Math.min(e.x + e.dx - o, s ? c(i.area / s) : 0);
                i.z = !0, i.dx += e.x + e.dx - o, e.y += s, e.dy -= s
            } else {
                for ((r || s > e.dx) && (s = e.dx); a > ++u;)i = t[u], i.x = o, i.y = l, i.dx = s, l += i.dy = Math.min(e.y + e.dy - l, s ? c(i.area / s) : 0);
                i.z = !1, i.dy += e.y + e.dy - l, e.x += s, e.dx -= s
            }
        }

        function u(r) {
            var i = a || o(r), u = i[0];
            return u.x = 0, u.y = 0, u.dx = l[0], u.dy = l[1], a && o.revalue(u), t([u], u.dx * u.dy / u.value), (a ? e : n)(u), h && (a = i), i
        }

        var a, o = d3.layout.hierarchy(), c = Math.round, l = [1, 1], s = null, f = Yr, h = !1, d = "squarify", g = .5 * (1 + Math.sqrt(5));
        return u.size = function (t) {
            return arguments.length ? (l = t, u) : l
        }, u.padding = function (t) {
            function n(n) {
                var e = t.call(u, n, n.depth);
                return null == e ? Yr(n) : Ur(n, "number" == typeof e ? [e, e, e, e] : e)
            }

            function e(n) {
                return Ur(n, t)
            }

            if (!arguments.length)return s;
            var r;
            return f = null == (s = t) ? Yr : "function" == (r = typeof t) ? n : "number" === r ? (t = [t, t, t, t], e) : e, u
        }, u.round = function (t) {
            return arguments.length ? (c = t ? Math.round : Number, u) : c != Number
        }, u.sticky = function (t) {
            return arguments.length ? (h = t, a = null, u) : h
        }, u.ratio = function (t) {
            return arguments.length ? (g = t, u) : g
        }, u.mode = function (t) {
            return arguments.length ? (d = t + "", u) : d
        }, hr(u, o)
    }, d3.csv = Ir(",", "text/csv"), d3.tsv = Ir("	", "text/tab-separated-values"), d3.geo = {}, d3.geo.stream = function (t, n) {
        to.hasOwnProperty(t.type) ? to[t.type](t, n) : Vr(t, n)
    };
    var to = {Feature: function (t, n) {
        Vr(t.geometry, n)
    }, FeatureCollection: function (t, n) {
        for (var e = t.features, r = -1, i = e.length; i > ++r;)Vr(e[r].geometry, n)
    }}, no = {Sphere: function (t, n) {
        n.sphere()
    }, Point: function (t, n) {
        var e = t.coordinates;
        n.point(e[0], e[1])
    }, MultiPoint: function (t, n) {
        for (var e, r = t.coordinates, i = -1, u = r.length; u > ++i;)e = r[i], n.point(e[0], e[1])
    }, LineString: function (t, n) {
        Xr(t.coordinates, n, 0)
    }, MultiLineString: function (t, n) {
        for (var e = t.coordinates, r = -1, i = e.length; i > ++r;)Xr(e[r], n, 0)
    }, Polygon: function (t, n) {
        Zr(t.coordinates, n)
    }, MultiPolygon: function (t, n) {
        for (var e = t.coordinates, r = -1, i = e.length; i > ++r;)Zr(e[r], n)
    }, GeometryCollection: function (t, n) {
        for (var e = t.geometries, r = -1, i = e.length; i > ++r;)Vr(e[r], n)
    }};
    d3.geo.albersUsa = function () {
        function t(t) {
            return n(t)(t)
        }

        function n(t) {
            var n = t[0], a = t[1];
            return a > 50 ? r : -140 > n ? i : 21 > a ? u : e
        }

        var e = d3.geo.albers(), r = d3.geo.albers().rotate([160, 0]).center([0, 60]).parallels([55, 65]), i = d3.geo.albers().rotate([160, 0]).center([0, 20]).parallels([8, 18]), u = d3.geo.albers().rotate([60, 0]).center([0, 10]).parallels([8, 18]);
        return t.scale = function (n) {
            return arguments.length ? (e.scale(n), r.scale(.6 * n), i.scale(n), u.scale(1.5 * n), t.translate(e.translate())) : e.scale()
        }, t.translate = function (n) {
            if (!arguments.length)return e.translate();
            var a = e.scale(), o = n[0], c = n[1];
            return e.translate(n), r.translate([o - .4 * a, c + .17 * a]), i.translate([o - .19 * a, c + .2 * a]), u.translate([o + .58 * a, c + .43 * a]), t
        }, t.scale(e.scale())
    }, (d3.geo.albers = function () {
        var t = 29.5 * ju, n = 45.5 * ju, e = Pi(ei), r = e(t, n);
        return r.parallels = function (r) {
            return arguments.length ? e(t = r[0] * ju, n = r[1] * ju) : [t * Ou, n * Ou]
        }, r.rotate([98, 0]).center([0, 38]).scale(1e3)
    }).raw = ei;
    var eo = Vi(function (t) {
        return Math.sqrt(2 / (1 + t))
    }, function (t) {
        return 2 * Math.asin(t / 2)
    });
    (d3.geo.azimuthalEqualArea = function () {
        return Ri(eo)
    }).raw = eo;
    var ro = Vi(function (t) {
        var n = Math.acos(t);
        return n && n / Math.sin(n)
    }, a);
    (d3.geo.azimuthalEquidistant = function () {
        return Ri(ro)
    }).raw = ro, d3.geo.bounds = ri(a), d3.geo.centroid = function (t) {
        io = uo = ao = oo = co = 0, d3.geo.stream(t, lo);
        var n;
        return uo && Math.abs(n = Math.sqrt(ao * ao + oo * oo + co * co)) > Pu ? [Math.atan2(oo, ao) * Ou, Math.asin(Math.max(-1, Math.min(1, co / n))) * Ou] : void 0
    };
    var io, uo, ao, oo, co, lo = {sphere: function () {
        2 > io && (io = 2, uo = ao = oo = co = 0)
    }, point: ii, lineStart: ai, lineEnd: oi, polygonStart: function () {
        2 > io && (io = 2, uo = ao = oo = co = 0), lo.lineStart = ui
    }, polygonEnd: function () {
        lo.lineStart = ai
    }};
    d3.geo.circle = function () {
        function t() {
            var t = "function" == typeof r ? r.apply(this, arguments) : r, n = Oi(-t[0] * ju, -t[1] * ju, 0).invert, i = [];
            return e(null, null, 1, {point: function (t, e) {
                i.push(t = n(t, e)), t[0] *= Ou, t[1] *= Ou
            }}), {type: "Polygon", coordinates: [i]}
        }

        var n, e, r = [0, 0], i = 6;
        return t.origin = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.angle = function (r) {
            return arguments.length ? (e = ci((n = +r) * ju, i * ju), t) : n
        }, t.precision = function (r) {
            return arguments.length ? (e = ci(n * ju, (i = +r) * ju), t) : i
        }, t.angle(90)
    };
    var so = si(o, vi, Mi);
    (d3.geo.equirectangular = function () {
        return Ri(_i).scale(250 / Ru)
    }).raw = _i.invert = _i;
    var fo = Vi(function (t) {
        return 1 / t
    }, Math.atan);
    (d3.geo.gnomonic = function () {
        return Ri(fo)
    }).raw = fo, d3.geo.graticule = function () {
        function t() {
            return{type: "MultiLineString", coordinates: n()}
        }

        function n() {
            return d3.range(Math.ceil(r / c) * c, e, c).map(a).concat(d3.range(Math.ceil(u / l) * l, i, l).map(o))
        }

        var e, r, i, u, a, o, c = 22.5, l = c, s = 2.5;
        return t.lines = function () {
            return n().map(function (t) {
                return{type: "LineString", coordinates: t}
            })
        }, t.outline = function () {
            return{type: "Polygon", coordinates: [a(r).concat(o(i).slice(1), a(e).reverse().slice(1), o(u).reverse().slice(1))]}
        }, t.extent = function (n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], i = +n[1][1], r > e && (n = r, r = e, e = n), u > i && (n = u, u = i, i = n), t.precision(s)) : [
                [r, u],
                [e, i]
            ]
        }, t.step = function (n) {
            return arguments.length ? (c = +n[0], l = +n[1], t) : [c, l]
        }, t.precision = function (n) {
            return arguments.length ? (s = +n, a = wi(u, i, s), o = Si(r, e, s), t) : s
        }, t.extent([
            [-180 + Pu, -90 + Pu],
            [180 - Pu, 90 - Pu]
        ])
    }, d3.geo.interpolate = function (t, n) {
        return ki(t[0] * ju, t[1] * ju, n[0] * ju, n[1] * ju)
    }, d3.geo.greatArc = function () {
        function e() {
            for (var t = r || a.apply(this, arguments), n = i || o.apply(this, arguments), e = u || d3.geo.interpolate(t, n), l = 0, s = c / e.distance, f = [t]; 1 > (l += s);)f.push(e(l));
            return f.push(n), {type: "LineString", coordinates: f}
        }

        var r, i, u, a = n, o = t, c = 6 * ju;
        return e.distance = function () {
            return(u || d3.geo.interpolate(r || a.apply(this, arguments), i || o.apply(this, arguments))).distance
        }, e.source = function (t) {
            return arguments.length ? (a = t, r = "function" == typeof t ? null : t, u = r && i ? d3.geo.interpolate(r, i) : null, e) : a
        }, e.target = function (t) {
            return arguments.length ? (o = t, i = "function" == typeof t ? null : t, u = r && i ? d3.geo.interpolate(r, i) : null, e) : o
        }, e.precision = function (t) {
            return arguments.length ? (c = t * ju, e) : c / ju
        }, e
    }, Ei.invert = function (t, n) {
        return[2 * Ru * t, 2 * Math.atan(Math.exp(2 * Ru * n)) - Ru / 2]
    }, (d3.geo.mercator = function () {
        return Ri(Ei).scale(500)
    }).raw = Ei;
    var ho = Vi(function () {
        return 1
    }, Math.asin);
    (d3.geo.orthographic = function () {
        return Ri(ho)
    }).raw = ho, d3.geo.path = function () {
        function t(t) {
            return t && d3.geo.stream(t, r(i.pointRadius("function" == typeof u ? +u.apply(this, arguments) : u))), i.result()
        }

        var n, e, r, i, u = 4.5;
        return t.area = function (t) {
            return go = 0, d3.geo.stream(t, r(mo)), go
        }, t.centroid = function (t) {
            return io = ao = oo = co = 0, d3.geo.stream(t, r(vo)), co ? [ao / co, oo / co] : void 0
        }, t.bounds = function (t) {
            return ri(r)(t)
        }, t.projection = function (e) {
            return arguments.length ? (r = (n = e) ? e.stream || Ni(e) : a, t) : n
        }, t.context = function (n) {
            return arguments.length ? (i = null == (e = n) ? new Ti : new qi(n), t) : e
        }, t.pointRadius = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : +n, t) : u
        }, t.projection(d3.geo.albersUsa()).context(null)
    };
    var go, po, mo = {point: Pn, lineStart: Pn, lineEnd: Pn, polygonStart: function () {
        po = 0, mo.lineStart = Ci
    }, polygonEnd: function () {
        mo.lineStart = mo.lineEnd = mo.point = Pn, go += Math.abs(po / 2)
    }}, vo = {point: zi, lineStart: Di, lineEnd: Li, polygonStart: function () {
        vo.lineStart = Fi
    }, polygonEnd: function () {
        vo.point = zi, vo.lineStart = Di, vo.lineEnd = Li
    }};
    d3.geo.area = function (t) {
        return yo = 0, d3.geo.stream(t, bo), yo
    };
    var yo, Mo, bo = {sphere: function () {
        yo += 4 * Ru
    }, point: Pn, lineStart: Pn, lineEnd: Pn, polygonStart: function () {
        Mo = 0, bo.lineStart = Hi
    }, polygonEnd: function () {
        yo += 0 > Mo ? 4 * Ru + Mo : Mo, bo.lineStart = bo.lineEnd = bo.point = Pn
    }};
    d3.geo.projection = Ri, d3.geo.projectionMutator = Pi;
    var xo = Vi(function (t) {
        return 1 / (1 + t)
    }, function (t) {
        return 2 * Math.atan(t)
    });
    (d3.geo.stereographic = function () {
        return Ri(xo)
    }).raw = xo, d3.geom = {}, d3.geom.hull = function (t) {
        if (3 > t.length)return[];
        var n, e, r, i, u, a, o, c, l, s, f = t.length, h = f - 1, d = [], g = [], p = 0;
        for (n = 1; f > n; ++n)t[n][1] < t[p][1] ? p = n : t[n][1] == t[p][1] && (p = t[n][0] < t[p][0] ? n : p);
        for (n = 0; f > n; ++n)n !== p && (i = t[n][1] - t[p][1], r = t[n][0] - t[p][0], d.push({angle: Math.atan2(i, r), index: n}));
        for (d.sort(function (t, n) {
            return t.angle - n.angle
        }), l = d[0].angle, c = d[0].index, o = 0, n = 1; h > n; ++n)e = d[n].index, l == d[n].angle ? (r = t[c][0] - t[p][0], i = t[c][1] - t[p][1], u = t[e][0] - t[p][0], a = t[e][1] - t[p][1], r * r + i * i >= u * u + a * a ? d[n].index = -1 : (d[o].index = -1, l = d[n].angle, o = n, c = e)) : (l = d[n].angle, o = n, c = e);
        for (g.push(p), n = 0, e = 0; 2 > n; ++e)-1 !== d[e].index && (g.push(d[e].index), n++);
        for (s = g.length; h > e; ++e)if (-1 !== d[e].index) {
            for (; !Xi(g[s - 2], g[s - 1], d[e].index, t);)--s;
            g[s++] = d[e].index
        }
        var m = [];
        for (n = 0; s > n; ++n)m.push(t[g[n]]);
        return m
    }, d3.geom.polygon = function (t) {
        return t.area = function () {
            for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; e > ++n;)r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
            return.5 * r
        }, t.centroid = function (n) {
            var e, r, i = -1, u = t.length, a = 0, o = 0, c = t[u - 1];
            for (arguments.length || (n = -1 / (6 * t.area())); u > ++i;)e = c, c = t[i], r = e[0] * c[1] - c[0] * e[1], a += (e[0] + c[0]) * r, o += (e[1] + c[1]) * r;
            return[a * n, o * n]
        }, t.clip = function (n) {
            for (var e, r, i, u, a, o, c = -1, l = t.length, s = t[l - 1]; l > ++c;) {
                for (e = n.slice(), n.length = 0, u = t[c], a = e[(i = e.length) - 1], r = -1; i > ++r;)o = e[r], Zi(o, s, u) ? (Zi(a, s, u) || n.push(Bi(a, o, s, u)), n.push(o)) : Zi(a, s, u) && n.push(Bi(a, o, s, u)), a = o;
                s = u
            }
            return n
        }, t
    }, d3.geom.voronoi = function (t) {
        var n = t.map(function () {
            return[]
        }), e = 1e6;
        return $i(t, function (t) {
            var r, i, u, a, o, c;
            1 === t.a && t.b >= 0 ? (r = t.ep.r, i = t.ep.l) : (r = t.ep.l, i = t.ep.r), 1 === t.a ? (o = r ? r.y : -e, u = t.c - t.b * o, c = i ? i.y : e, a = t.c - t.b * c) : (u = r ? r.x : -e, o = t.c - t.a * u, a = i ? i.x : e, c = t.c - t.a * a);
            var l = [u, o], s = [a, c];
            n[t.region.l.index].push(l, s), n[t.region.r.index].push(l, s)
        }), n = n.map(function (n, e) {
            var r = t[e][0], i = t[e][1], u = n.map(function (t) {
                return Math.atan2(t[0] - r, t[1] - i)
            });
            return d3.range(n.length).sort(function (t, n) {
                return u[t] - u[n]
            }).filter(function (t, n, e) {
                return!n || u[t] - u[e[n - 1]] > Pu
            }).map(function (t) {
                return n[t]
            })
        }), n.forEach(function (n, r) {
            var i = n.length;
            if (!i)return n.push([-e, -e], [-e, e], [e, e], [e, -e]);
            if (!(i > 2)) {
                var u = t[r], a = n[0], o = n[1], c = u[0], l = u[1], s = a[0], f = a[1], h = o[0], d = o[1], g = Math.abs(h - s), p = d - f;
                if (Pu > Math.abs(p)) {
                    var m = f > l ? -e : e;
                    n.push([-e, m], [e, m])
                } else if (Pu > g) {
                    var v = s > c ? -e : e;
                    n.push([v, -e], [v, e])
                } else {
                    var m = (s - c) * (d - f) > (h - s) * (f - l) ? e : -e, y = Math.abs(p) - g;
                    Pu > Math.abs(y) ? n.push([0 > p ? m : -m, m]) : (y > 0 && (m *= -1), n.push([-e, m], [e, m]))
                }
            }
        }), n
    };
    var _o = {l: "r", r: "l"};
    d3.geom.delaunay = function (t) {
        var n = t.map(function () {
            return[]
        }), e = [];
        return $i(t, function (e) {
            n[e.region.l.index].push(t[e.region.r.index])
        }), n.forEach(function (n, r) {
            var i = t[r], u = i[0], a = i[1];
            n.forEach(function (t) {
                t.angle = Math.atan2(t[0] - u, t[1] - a)
            }), n.sort(function (t, n) {
                return t.angle - n.angle
            });
            for (var o = 0, c = n.length - 1; c > o; o++)e.push([i, n[o], n[o + 1]])
        }), e
    }, d3.geom.quadtree = function (t, n, e, r, i) {
        function u(t, n, e, r, i, u) {
            if (!isNaN(n.x) && !isNaN(n.y))if (t.leaf) {
                var o = t.point;
                o ? .01 > Math.abs(o.x - n.x) + Math.abs(o.y - n.y) ? a(t, n, e, r, i, u) : (t.point = null, a(t, o, e, r, i, u), a(t, n, e, r, i, u)) : t.point = n
            } else a(t, n, e, r, i, u)
        }

        function a(t, n, e, r, i, a) {
            var o = .5 * (e + i), c = .5 * (r + a), l = n.x >= o, s = n.y >= c, f = (s << 1) + l;
            t.leaf = !1, t = t.nodes[f] || (t.nodes[f] = Ji()), l ? e = o : i = o, s ? r = c : a = c, u(t, n, e, r, i, a)
        }

        var o, c = -1, l = t.length;
        if (5 > arguments.length)if (3 === arguments.length)i = e, r = n, e = n = 0; else for (n = e = 1 / 0, r = i = -1 / 0; l > ++c;)o = t[c], n > o.x && (n = o.x), e > o.y && (e = o.y), o.x > r && (r = o.x), o.y > i && (i = o.y);
        var s = r - n, f = i - e;
        s > f ? i = e + s : r = n + f;
        var h = Ji();
        return h.add = function (t) {
            u(h, t, n, e, r, i)
        }, h.visit = function (t) {
            Gi(t, h, n, e, r, i)
        }, t.forEach(h.add), h
    }, d3.time = {};
    var wo = Date, So = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Ki.prototype = {getDate: function () {
        return this._.getUTCDate()
    }, getDay: function () {
        return this._.getUTCDay()
    }, getFullYear: function () {
        return this._.getUTCFullYear()
    }, getHours: function () {
        return this._.getUTCHours()
    }, getMilliseconds: function () {
        return this._.getUTCMilliseconds()
    }, getMinutes: function () {
        return this._.getUTCMinutes()
    }, getMonth: function () {
        return this._.getUTCMonth()
    }, getSeconds: function () {
        return this._.getUTCSeconds()
    }, getTime: function () {
        return this._.getTime()
    }, getTimezoneOffset: function () {
        return 0
    }, valueOf: function () {
        return this._.valueOf()
    }, setDate: function () {
        ko.setUTCDate.apply(this._, arguments)
    }, setDay: function () {
        ko.setUTCDay.apply(this._, arguments)
    }, setFullYear: function () {
        ko.setUTCFullYear.apply(this._, arguments)
    }, setHours: function () {
        ko.setUTCHours.apply(this._, arguments)
    }, setMilliseconds: function () {
        ko.setUTCMilliseconds.apply(this._, arguments)
    }, setMinutes: function () {
        ko.setUTCMinutes.apply(this._, arguments)
    }, setMonth: function () {
        ko.setUTCMonth.apply(this._, arguments)
    }, setSeconds: function () {
        ko.setUTCSeconds.apply(this._, arguments)
    }, setTime: function () {
        ko.setTime.apply(this._, arguments)
    }};
    var ko = Date.prototype, Eo = "%a %b %e %X %Y", Ao = "%m/%d/%Y", No = "%H:%M:%S", To = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], qo = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Co = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], zo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    d3.time.format = function (t) {
        function n(n) {
            for (var r, i, u, a = [], o = -1, c = 0; e > ++o;)37 === t.charCodeAt(o) && (a.push(t.substring(c, o)), null != (i = jo[r = t.charAt(++o)]) && (r = t.charAt(++o)), (u = Oo[r]) && (r = u(n, null == i ? "e" === r ? " " : "0" : i)), a.push(r), c = o + 1);
            return a.push(t.substring(c, o)), a.join("")
        }

        var e = t.length;
        return n.parse = function (n) {
            var e = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}, r = Wi(e, t, n, 0);
            if (r != n.length)return null;
            "p"in e && (e.H = e.H % 12 + 12 * e.p);
            var i = new wo;
            return i.setFullYear(e.y, e.m, e.d), i.setHours(e.H, e.M, e.S, e.L), i
        }, n.toString = function () {
            return t
        }, n
    };
    var Do = Qi(To), Lo = Qi(qo), Fo = Qi(Co), Ho = tu(Co), Ro = Qi(zo), Po = tu(zo), jo = {"-": "", _: " ", 0: "0"}, Oo = {a: function (t) {
        return qo[t.getDay()]
    }, A: function (t) {
        return To[t.getDay()]
    }, b: function (t) {
        return zo[t.getMonth()]
    }, B: function (t) {
        return Co[t.getMonth()]
    }, c: d3.time.format(Eo), d: function (t, n) {
        return nu(t.getDate(), n, 2)
    }, e: function (t, n) {
        return nu(t.getDate(), n, 2)
    }, H: function (t, n) {
        return nu(t.getHours(), n, 2)
    }, I: function (t, n) {
        return nu(t.getHours() % 12 || 12, n, 2)
    }, j: function (t, n) {
        return nu(1 + d3.time.dayOfYear(t), n, 3)
    }, L: function (t, n) {
        return nu(t.getMilliseconds(), n, 3)
    }, m: function (t, n) {
        return nu(t.getMonth() + 1, n, 2)
    }, M: function (t, n) {
        return nu(t.getMinutes(), n, 2)
    }, p: function (t) {
        return t.getHours() >= 12 ? "PM" : "AM"
    }, S: function (t, n) {
        return nu(t.getSeconds(), n, 2)
    }, U: function (t, n) {
        return nu(d3.time.sundayOfYear(t), n, 2)
    }, w: function (t) {
        return t.getDay()
    }, W: function (t, n) {
        return nu(d3.time.mondayOfYear(t), n, 2)
    }, x: d3.time.format(Ao), X: d3.time.format(No), y: function (t, n) {
        return nu(t.getFullYear() % 100, n, 2)
    }, Y: function (t, n) {
        return nu(t.getFullYear() % 1e4, n, 4)
    }, Z: Mu, "%": function () {
        return"%"
    }}, Yo = {a: eu, A: ru, b: iu, B: uu, c: au, d: du, e: du, H: gu, I: gu, L: vu, m: hu, M: pu, p: yu, S: mu, x: ou, X: cu, y: su, Y: lu}, Uo = /^\s*\d+/, Io = d3.map({am: 0, pm: 1});
    d3.time.format.utc = function (t) {
        function n(t) {
            try {
                wo = Ki;
                var n = new wo;
                return n._ = t, e(n)
            } finally {
                wo = Date
            }
        }

        var e = d3.time.format(t);
        return n.parse = function (t) {
            try {
                wo = Ki;
                var n = e.parse(t);
                return n && n._
            } finally {
                wo = Date
            }
        }, n.toString = e.toString, n
    };
    var Vo = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    d3.time.format.iso = Date.prototype.toISOString ? bu : Vo, bu.parse = function (t) {
        var n = new Date(t);
        return isNaN(n) ? null : n
    }, bu.toString = Vo.toString, d3.time.second = xu(function (t) {
        return new wo(1e3 * Math.floor(t / 1e3))
    }, function (t, n) {
        t.setTime(t.getTime() + 1e3 * Math.floor(n))
    }, function (t) {
        return t.getSeconds()
    }), d3.time.seconds = d3.time.second.range, d3.time.seconds.utc = d3.time.second.utc.range, d3.time.minute = xu(function (t) {
        return new wo(6e4 * Math.floor(t / 6e4))
    }, function (t, n) {
        t.setTime(t.getTime() + 6e4 * Math.floor(n))
    }, function (t) {
        return t.getMinutes()
    }), d3.time.minutes = d3.time.minute.range, d3.time.minutes.utc = d3.time.minute.utc.range, d3.time.hour = xu(function (t) {
        var n = t.getTimezoneOffset() / 60;
        return new wo(36e5 * (Math.floor(t / 36e5 - n) + n))
    }, function (t, n) {
        t.setTime(t.getTime() + 36e5 * Math.floor(n))
    }, function (t) {
        return t.getHours()
    }), d3.time.hours = d3.time.hour.range, d3.time.hours.utc = d3.time.hour.utc.range, d3.time.day = xu(function (t) {
        var n = new wo(1970, 0);
        return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
    }, function (t, n) {
        t.setDate(t.getDate() + n)
    }, function (t) {
        return t.getDate() - 1
    }), d3.time.days = d3.time.day.range, d3.time.days.utc = d3.time.day.utc.range, d3.time.dayOfYear = function (t) {
        var n = d3.time.year(t);
        return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5)
    }, So.forEach(function (t, n) {
        t = t.toLowerCase(), n = 7 - n;
        var e = d3.time[t] = xu(function (t) {
            return(t = d3.time.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
        }, function (t, n) {
            t.setDate(t.getDate() + 7 * Math.floor(n))
        }, function (t) {
            var e = d3.time.year(t).getDay();
            return Math.floor((d3.time.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
        });
        d3.time[t + "s"] = e.range, d3.time[t + "s"].utc = e.utc.range, d3.time[t + "OfYear"] = function (t) {
            var e = d3.time.year(t).getDay();
            return Math.floor((d3.time.dayOfYear(t) + (e + n) % 7) / 7)
        }
    }), d3.time.week = d3.time.sunday, d3.time.weeks = d3.time.sunday.range, d3.time.weeks.utc = d3.time.sunday.utc.range, d3.time.weekOfYear = d3.time.sundayOfYear, d3.time.month = xu(function (t) {
        return t = d3.time.day(t), t.setDate(1), t
    }, function (t, n) {
        t.setMonth(t.getMonth() + n)
    }, function (t) {
        return t.getMonth()
    }), d3.time.months = d3.time.month.range, d3.time.months.utc = d3.time.month.utc.range, d3.time.year = xu(function (t) {
        return t = d3.time.day(t), t.setMonth(0, 1), t
    }, function (t, n) {
        t.setFullYear(t.getFullYear() + n)
    }, function (t) {
        return t.getFullYear()
    }), d3.time.years = d3.time.year.range, d3.time.years.utc = d3.time.year.utc.range;
    var Xo = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], Zo = [
        [d3.time.second, 1],
        [d3.time.second, 5],
        [d3.time.second, 15],
        [d3.time.second, 30],
        [d3.time.minute, 1],
        [d3.time.minute, 5],
        [d3.time.minute, 15],
        [d3.time.minute, 30],
        [d3.time.hour, 1],
        [d3.time.hour, 3],
        [d3.time.hour, 6],
        [d3.time.hour, 12],
        [d3.time.day, 1],
        [d3.time.day, 2],
        [d3.time.week, 1],
        [d3.time.month, 1],
        [d3.time.month, 3],
        [d3.time.year, 1]
    ], Bo = [
        [d3.time.format("%Y"), o],
        [d3.time.format("%B"), function (t) {
            return t.getMonth()
        }],
        [d3.time.format("%b %d"), function (t) {
            return 1 != t.getDate()
        }],
        [d3.time.format("%a %d"), function (t) {
            return t.getDay() && 1 != t.getDate()
        }],
        [d3.time.format("%I %p"), function (t) {
            return t.getHours()
        }],
        [d3.time.format("%I:%M"), function (t) {
            return t.getMinutes()
        }],
        [d3.time.format(":%S"), function (t) {
            return t.getSeconds()
        }],
        [d3.time.format(".%L"), function (t) {
            return t.getMilliseconds()
        }]
    ], $o = d3.scale.linear(), Jo = Eu(Bo);
    Zo.year = function (t, n) {
        return $o.domain(t.map(Nu)).ticks(n).map(Au)
    }, d3.time.scale = function () {
        return wu(d3.scale.linear(), Zo, Jo)
    };
    var Go = Zo.map(function (t) {
        return[t[0].utc, t[1]]
    }), Ko = [
        [d3.time.format.utc("%Y"), o],
        [d3.time.format.utc("%B"), function (t) {
            return t.getUTCMonth()
        }],
        [d3.time.format.utc("%b %d"), function (t) {
            return 1 != t.getUTCDate()
        }],
        [d3.time.format.utc("%a %d"), function (t) {
            return t.getUTCDay() && 1 != t.getUTCDate()
        }],
        [d3.time.format.utc("%I %p"), function (t) {
            return t.getUTCHours()
        }],
        [d3.time.format.utc("%I:%M"), function (t) {
            return t.getUTCMinutes()
        }],
        [d3.time.format.utc(":%S"), function (t) {
            return t.getUTCSeconds()
        }],
        [d3.time.format.utc(".%L"), function (t) {
            return t.getUTCMilliseconds()
        }]
    ], Wo = Eu(Ko);
    Go.year = function (t, n) {
        return $o.domain(t.map(qu)).ticks(n).map(Tu)
    }, d3.time.scale.utc = function () {
        return wu(d3.scale.linear(), Go, Wo)
    }
})();