"use strict";

function _typeof(e) {
	return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	})(e)
}! function() {
	function r() {
		var e, t, o, n, r, i;
		!D && document.body && (D = !0, e = document.body, t = document.documentElement, o = window.innerHeight, n = e.scrollHeight, M = 0 <= document.compatMode.indexOf("CSS") ? t : e, p = e, x.keyboardSupport && window.addEventListener("keydown", a, !1), top != self ? E = !0 : I && o < n && (e.offsetHeight <= o || t.offsetHeight <= o) && ((r = document.createElement("div")).style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + M.scrollHeight + "px", document.body.appendChild(r), v = function() {
			i = i || setTimeout(function() {
				r.style.height = "0", r.style.height = M.scrollHeight + "px", i = null
			}, 500)
		}, setTimeout(v, 10), window.addEventListener("resize", v, !1), (y = new $(v)).observe(e, {
			attributes: !0,
			childList: !0,
			characterData: !1
		}), M.offsetHeight <= o && ((o = document.createElement("div")).style.clear = "both", e.appendChild(o))), x.fixedBackground || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll"))
	}

	function l(s, d, u) {
		var e, t, m, o, n;
		e = 0 < (e = d) ? 1 : -1, t = 0 < (t = u) ? 1 : -1, k.x === e && k.y === t || (k.x = e, k.y = t, C = [], O = 0), 1 != x.accelerationMax && ((o = Date.now() - O) < x.accelerationDelta && (1 < (o = (1 + 50 / o) / 2) && (o = Math.min(o, x.accelerationMax), d *= o, u *= o)), O = Date.now()), C.push({
			x: d,
			y: u,
			lastX: d < 0 ? .99 : -.99,
			lastY: u < 0 ? .99 : -.99,
			start: Date.now()
		}), z || (o = j(), m = s === o || s === document.body, null == s.$scrollBehavior && (n = X(o = s), null == N[n] && (o = getComputedStyle(o, "")["scroll-behavior"], N[n] = "smooth" == o), N[n]) && (s.$scrollBehavior = s.style.scrollBehavior, s.style.scrollBehavior = "auto"), n = function e(t) {
			t = Date.now();
			for (var o = 0, n = 0, r = 0; r < C.length; r++) {
				var i = C[r],
					l = t - i.start,
					a = l >= x.animationTime,
					c = a ? 1 : l / x.animationTime;
				x.pulseAlgorithm && (c = 1 <= (l = c) ? 1 : l <= 0 ? 0 : (1 == x.pulseNormalize && (x.pulseNormalize /= h(1)), h(l))), o += l = i.x * c - i.lastX >> 0, n += c = i.y * c - i.lastY >> 0, i.lastX += l, i.lastY += c, a && (C.splice(r, 1), r--)
			}
			m ? window.scrollBy(o, n) : (o && (s.scrollLeft += o), n && (s.scrollTop += n)), d || u || (C = []), C.length ? P(e, s, 1e3 / x.frameRate + 1) : (z = !1, null != s.$scrollBehavior && (s.style.scrollBehavior = s.$scrollBehavior, s.$scrollBehavior = null))
		}, P(n, s, 0), z = !0)
	}

	function e(e) {
		D || r();
		var t = e.target;
		if (e.defaultPrevented || e.ctrlKey || m(p, "embed") || m(t, "embed") && /\.pdf/i.test(t.src) || m(p, "object") || t.shadowRoot) return !0;
		var o = -e.wheelDeltaX || e.deltaX || 0,
			n = -e.wheelDeltaY || e.deltaY || 0;
		return T && (e.wheelDeltaX && w(e.wheelDeltaX, 120) && (o = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && w(e.wheelDeltaY, 120) && (n = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), o || n || (n = -e.wheelDelta || 0), 1 === e.deltaMode && (o *= 40, n *= 40), (t = s(t)) ? !! function(e) {
			if (e) return L.length || (L = [e, e, e]), e = Math.abs(e), L.push(e), L.shift(), clearTimeout(b), b = setTimeout(function() {
				try {
					localStorage.SS_deltaBuffer = L.join(",")
				} catch (e) {}
			}, 1e3), e = 120 < e && f(e), !f(120) && !f(100) && !e
		}(n) || (1.2 < Math.abs(o) && (o *= x.stepSize / 120), 1.2 < Math.abs(n) && (n *= x.stepSize / 120), l(t, o, n), e.preventDefault(), void c()) : !E || !q || (Object.defineProperty(e, "target", {
			value: window.frameElement
		}), parent.wheel(e))
	}

	function a(e) {
		var t = e.target,
			o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== B.spacebar;
		document.body.contains(p) || (p = document.activeElement);
		var n = /^(textarea|select|embed|object)$/i,
			r = /^(button|submit|radio|checkbox|file|color|image)$/i;
		if (!(n = e.defaultPrevented || n.test(t.nodeName) || m(t, "input") && !r.test(t.type) || m(p, "video"))) {
			n = e.target;
			var i = !1;
			if (-1 != document.URL.indexOf("www.youtube.com/watch"))
				do {
					if (i = n.classList && n.classList.contains("html5-video-controls")) break
				} while (n = n.parentNode);
			n = i
		}
		if (n || t.isContentEditable || o || (m(t, "button") || m(t, "input") && r.test(t.type)) && e.keyCode === B.spacebar || m(t, "input") && "radio" == t.type && H[e.keyCode]) return !0;
		if (n = t = 0, !(o = s(p))) return !E || !q || parent.keydown(e);
		switch (r = o.clientHeight, o == document.body && (r = window.innerHeight), e.keyCode) {
			case B.up:
				n = -x.arrowScroll;
				break;
			case B.down:
				n = x.arrowScroll;
				break;
			case B.spacebar:
				n = -(n = e.shiftKey ? 1 : -1) * r * .9;
				break;
			case B.pageup:
				n = .9 * -r;
				break;
			case B.pagedown:
				n = .9 * r;
				break;
			case B.home:
				o == document.body && document.scrollingElement && (o = document.scrollingElement), n = -o.scrollTop;
				break;
			case B.end:
				n = 0 < (r = o.scrollHeight - o.scrollTop - r) ? r + 10 : 0;
				break;
			case B.left:
				t = -x.arrowScroll;
				break;
			case B.right:
				t = x.arrowScroll;
				break;
			default:
				return !0
		}
		l(o, t, n), e.preventDefault(), c()
	}

	function t(e) {
		p = e.target
	}

	function c() {
		clearTimeout(n), n = setInterval(function() {
			Y = A = N = {}
		}, 1e3)
	}

	function i(e, t, o) {
		o = o ? Y : A;
		for (var n = e.length; n--;) o[X(e[n])] = t;
		return t
	}

	function s(e) {
		var t = [],
			o = document.body,
			n = M.scrollHeight;
		do {
			var r = A[X(e)];
			if (r) return i(t, r);
			if (t.push(e), n === e.scrollHeight) {
				if (r = d(M) && d(o) || u(M), E && M.clientHeight + 10 < M.scrollHeight || !E && r) return i(t, j())
			} else if (e.clientHeight + 10 < e.scrollHeight && u(e)) return i(t, e)
		} while (e = e.parentElement)
	}

	function d(e) {
		return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
	}

	function u(e) {
		return "scroll" === (e = getComputedStyle(e, "").getPropertyValue("overflow-y")) || "auto" === e
	}

	function m(e, t) {
		return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
	}

	function w(e, t) {
		return Math.floor(e / t) == e / t
	}

	function f(e) {
		return w(L[0], e) && w(L[1], e) && w(L[2], e)
	}

	function h(e) {
		var t;
		return (e *= x.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (t = Math.exp(-1), t += (e = 1 - Math.exp(-(e - 1))) * (1 - t)), t * x.pulseNormalize
	}

	function o(e) {
		for (var t in e) S.hasOwnProperty(t) && (x[t] = e[t])
	}
	var p, y, v, b, n, g, S = {
			frameRate: 150,
			animationTime: 400,
			stepSize: 100,
			pulseAlgorithm: !0,
			pulseScale: 4,
			pulseNormalize: 1,
			accelerationDelta: 50,
			accelerationMax: 3,
			keyboardSupport: !0,
			arrowScroll: 50,
			fixedBackground: !0,
			excluded: ""
		},
		x = S,
		E = !1,
		k = {
			x: 0,
			y: 0
		},
		D = !1,
		M = document.documentElement,
		L = [],
		T = /^Mac/.test(navigator.platform),
		B = {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			spacebar: 32,
			pageup: 33,
			pagedown: 34,
			end: 35,
			home: 36
		},
		H = {
			37: 1,
			38: 1,
			39: 1,
			40: 1
		},
		C = [],
		z = !1,
		O = Date.now(),
		X = (g = 0, function(e) {
			return e.uniqueID || (e.uniqueID = g++)
		}),
		Y = {},
		A = {},
		N = {};
	if (window.localStorage && localStorage.SS_deltaBuffer) try {
		L = localStorage.SS_deltaBuffer.split(",")
	} catch (e) {}
	var K, P = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, o) {
			window.setTimeout(e, o || 1e3 / 60)
		},
		$ = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
		j = (K = document.scrollingElement, function() {
			var e, t;
			return K || ((e = document.createElement("div")).style.cssText = "height:10000px;width:1px;", document.body.appendChild(e), t = document.body.scrollTop, window.scrollBy(0, 3), K = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)), K
		}),
		R = window.navigator.userAgent,
		_ = /Edge/.test(R),
		q = /chrome/i.test(R) && !_,
		_ = /safari/i.test(R) && !_,
		V = /mobile/i.test(R),
		F = /Windows NT 6.1/i.test(R) && /rv:11/i.test(R),
		I = _ && (/Version\/8/i.test(R) || /Version\/9/i.test(R)),
		R = (q || _ || F) && !V,
		W = !1;
	try {
		window.addEventListener("test", null, Object.defineProperty({}, "passive", {
			get: function() {
				W = !0
			}
		}))
	} catch (e) {}
	_ = !!W && {
		passive: !1
	};
	var U = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
	U && R && (window.addEventListener(U, e, _ || !1), window.addEventListener("mousedown", t, !1), window.addEventListener("load", r, !1)), o.destroy = function() {
		y && y.disconnect(), window.removeEventListener(U, e, !1), window.removeEventListener("mousedown", t, !1), window.removeEventListener("keydown", a, !1), window.removeEventListener("resize", v, !1), window.removeEventListener("load", r, !1)
	}, window.SmoothScrollOptions && o(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
		return o
	}) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = o : window.SmoothScroll = o
}();