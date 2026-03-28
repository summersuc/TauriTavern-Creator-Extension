//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/* @__NO_SIDE_EFFECTS__ */
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, T = te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, E = te((e) => e.replace(re, "-$1").toLowerCase()), ie = te((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = te((e) => e ? `on${ie(e)}` : ""), D = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, O = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, se = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ce = (e) => {
	let t = g(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, le, ue = () => le ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function de(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? he(r) : de(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var fe = /;(?![^(]*\))/g, pe = /:([^]+)/, me = /\/\*[^]*?\*\//g;
function he(e) {
	let t = {};
	return e.replace(me, "").split(fe).forEach((e) => {
		if (e) {
			let n = e.split(pe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ge = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _e = /* @__PURE__ */ e(ge);
ge + "";
function ve(e) {
	return !!e || e === "";
}
function ye(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = be(e[r], t[r]);
	return n;
}
function be(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? ye(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !be(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function xe(e, t) {
	return e.findIndex((e) => be(e, t));
}
var Se = (e) => !!(e && e.__v_isRef === !0), A = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Se(e) ? A(e.value) : JSON.stringify(e, Ce, 2) : String(e), Ce = (e, t) => Se(t) ? Ce(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[we(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => we(e)) } : _(t) ? we(t) : v(t) && !d(t) && !C(t) ? String(t) : t, we = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, j, Te = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = j, !e && j && (this.index = (j.scopes ||= []).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		this._on > 0 && --this._on === 0 && (j = this.prevScope, this.prevScope = void 0);
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Ee() {
	return j;
}
var M, De = /* @__PURE__ */ new WeakSet(), Oe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && j.active && j.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, De.has(this) && (De.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Me(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ge(this), Fe(this);
		let e = M, t = Ve;
		M = this, Ve = !0;
		try {
			return this.fn();
		} finally {
			Ie(this), M = e, Ve = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) ze(e);
			this.deps = this.depsTail = void 0, Ge(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? De.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Le(this) && this.run();
	}
	get dirty() {
		return Le(this);
	}
}, ke = 0, Ae, je;
function Me(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = je, je = e;
		return;
	}
	e.next = Ae, Ae = e;
}
function Ne() {
	ke++;
}
function Pe() {
	if (--ke > 0) return;
	if (je) {
		let e = je;
		for (je = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ae;) {
		let t = Ae;
		for (Ae = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Fe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ie(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), ze(r), Be(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Le(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Re(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Re(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ke) || (e.globalVersion = Ke, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Le(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = Ve;
	M = e, Ve = !0;
	try {
		Fe(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, Ve = r, Ie(e), e.flags &= -3;
	}
}
function ze(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) ze(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Be(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ve = !0, He = [];
function Ue() {
	He.push(Ve), Ve = !1;
}
function We() {
	let e = He.pop();
	Ve = e === void 0 ? !0 : e;
}
function Ge(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var Ke = 0, qe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Je = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !Ve || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new qe(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, Ye(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ke++, this.notify(e);
	}
	notify(e) {
		Ne();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Pe();
		}
	}
};
function Ye(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ye(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Xe = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ Symbol(""), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (Ve && M) {
		let t = Xe.get(e);
		t || Xe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Je()), r.map = t, r.key = n), r.track();
	}
}
function et(e, t, n, r, i, a) {
	let o = Xe.get(e);
	if (!o) {
		Ke++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ne(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === $e || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get($e)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Ze)), f(e) && s(o.get(Qe)));
				break;
			case "delete":
				i || (s(o.get(Ze)), f(e) && s(o.get(Qe)));
				break;
			case "set":
				f(e) && s(o.get(Ze));
				break;
		}
	}
	Pe();
}
function tt(e) {
	let t = /* @__PURE__ */ F(e);
	return t === e ? t : (N(t, "iterate", $e), /* @__PURE__ */ Bt(e) ? t : t.map(Ut));
}
function nt(e) {
	return N(e = /* @__PURE__ */ F(e), "iterate", $e), e;
}
function rt(e, t) {
	return /* @__PURE__ */ zt(e) ? Wt(/* @__PURE__ */ Rt(e) ? Ut(t) : t) : Ut(t);
}
var it = {
	__proto__: null,
	[Symbol.iterator]() {
		return at(this, Symbol.iterator, (e) => rt(this, e));
	},
	concat(...e) {
		return tt(this).concat(...e.map((e) => d(e) ? tt(e) : e));
	},
	entries() {
		return at(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
	},
	every(e, t) {
		return st(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return st(this, "filter", e, t, (e) => e.map((e) => rt(this, e)), arguments);
	},
	find(e, t) {
		return st(this, "find", e, t, (e) => rt(this, e), arguments);
	},
	findIndex(e, t) {
		return st(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return st(this, "findLast", e, t, (e) => rt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return st(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return st(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return lt(this, "includes", e);
	},
	indexOf(...e) {
		return lt(this, "indexOf", e);
	},
	join(e) {
		return tt(this).join(e);
	},
	lastIndexOf(...e) {
		return lt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return st(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ut(this, "pop");
	},
	push(...e) {
		return ut(this, "push", e);
	},
	reduce(e, ...t) {
		return ct(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ct(this, "reduceRight", e, t);
	},
	shift() {
		return ut(this, "shift");
	},
	some(e, t) {
		return st(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ut(this, "splice", e);
	},
	toReversed() {
		return tt(this).toReversed();
	},
	toSorted(e) {
		return tt(this).toSorted(e);
	},
	toSpliced(...e) {
		return tt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ut(this, "unshift", e);
	},
	values() {
		return at(this, "values", (e) => rt(this, e));
	}
};
function at(e, t, n) {
	let r = nt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Bt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ot = Array.prototype;
function st(e, t, n, r, i, a) {
	let o = nt(e), s = o !== e && !/* @__PURE__ */ Bt(e), c = o[t];
	if (c !== ot[t]) {
		let t = c.apply(e, a);
		return s ? Ut(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, rt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ct(e, t, n, r) {
	let i = nt(e), a = i !== e && !/* @__PURE__ */ Bt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = rt(e, t)), n.call(this, t, rt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? rt(e, c) : c;
}
function lt(e, t, n) {
	let r = /* @__PURE__ */ F(e);
	N(r, "iterate", $e);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Vt(n[0]) ? (n[0] = /* @__PURE__ */ F(n[0]), r[t](...n)) : i;
}
function ut(e, t, n = []) {
	Ue(), Ne();
	let r = (/* @__PURE__ */ F(e))[t].apply(e, n);
	return Pe(), We(), r;
}
var dt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), ft = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function pt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ F(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var mt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Mt : jt : i ? At : kt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = it[t])) return e;
			if (t === "hasOwnProperty") return pt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ I(e) ? e : n);
		if ((_(t) ? ft.has(t) : dt(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ I(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ It(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ It(o) : /* @__PURE__ */ P(o) : o;
	}
}, ht = class extends mt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ zt(i);
			if (!/* @__PURE__ */ Bt(n) && !/* @__PURE__ */ zt(n) && (i = /* @__PURE__ */ F(i), n = /* @__PURE__ */ F(n)), !a && /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ I(e) ? e : r);
		return e === /* @__PURE__ */ F(r) && (o ? D(n, i) && et(e, "set", t, n, i) : et(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && et(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !ft.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", d(e) ? "length" : Ze), Reflect.ownKeys(e);
	}
}, gt = class extends mt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, _t = /* @__PURE__ */ new ht(), vt = /* @__PURE__ */ new gt(), yt = /* @__PURE__ */ new ht(!0), bt = (e) => e, xt = (e) => Reflect.getPrototypeOf(e);
function St(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ F(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? bt : t ? Wt : Ut;
		return !t && N(a, "iterate", l ? Qe : Ze), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Ct(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function wt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ F(r), a = /* @__PURE__ */ F(n);
			e || (D(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = xt(i), s = t ? bt : e ? Wt : Ut;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ F(t), "iterate", Ze), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ F(n), i = /* @__PURE__ */ F(t);
			return e || (D(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ F(a), s = t ? bt : e ? Wt : Ut;
			return !e && N(o, "iterate", Ze), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Ct("add"),
		set: Ct("set"),
		delete: Ct("delete"),
		clear: Ct("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ F(this), r = xt(n), i = /* @__PURE__ */ F(e), a = !t && !/* @__PURE__ */ Bt(e) && !/* @__PURE__ */ zt(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), et(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Bt(n) && !/* @__PURE__ */ zt(n) && (n = /* @__PURE__ */ F(n));
			let r = /* @__PURE__ */ F(this), { has: i, get: a } = xt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ F(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && et(r, "set", e, n, s) : et(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ F(this), { has: n, get: r } = xt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ F(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && et(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ F(this), t = e.size !== 0, n = e.clear();
			return t && et(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = St(r, e, t);
	}), n;
}
function Tt(e, t) {
	let n = wt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Et = { get: /* @__PURE__ */ Tt(!1, !1) }, Dt = { get: /* @__PURE__ */ Tt(!1, !0) }, Ot = { get: /* @__PURE__ */ Tt(!0, !1) }, kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap();
function Nt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function Pt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Nt(S(e));
}
/* @__NO_SIDE_EFFECTS__ */
function P(e) {
	return /* @__PURE__ */ zt(e) ? e : Lt(e, !1, _t, Et, kt);
}
/* @__NO_SIDE_EFFECTS__ */
function Ft(e) {
	return Lt(e, !1, yt, Dt, At);
}
/* @__NO_SIDE_EFFECTS__ */
function It(e) {
	return Lt(e, !0, vt, Ot, jt);
}
function Lt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Pt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Rt(e) {
	return /* @__PURE__ */ zt(e) ? /* @__PURE__ */ Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function zt(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function Bt(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Vt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function F(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ F(t) : e;
}
function Ht(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && O(e, "__v_skip", !0), e;
}
var Ut = (e) => v(e) ? /* @__PURE__ */ P(e) : e, Wt = (e) => v(e) ? /* @__PURE__ */ It(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function I(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function Gt(e) {
	return Kt(e, !1);
}
function Kt(e, t) {
	return /* @__PURE__ */ I(e) ? e : new qt(e, t);
}
var qt = class {
	constructor(e, t) {
		this.dep = new Je(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ F(e), this._value = t ? e : Ut(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Bt(e) || /* @__PURE__ */ zt(e);
		e = n ? e : /* @__PURE__ */ F(e), D(e, t) && (this._rawValue = e, this._value = n ? e : Ut(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ I(e) ? e.value : e;
}
var Jt = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Yt(e) {
	return /* @__PURE__ */ Rt(e) ? e : new Proxy(e, Jt);
}
var Xt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Je(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ke - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Me(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Re(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function Zt(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new Xt(r, i, n);
}
var Qt = {}, $t = /* @__PURE__ */ new WeakMap(), en = void 0;
function tn(e, t = !1, n = en) {
	if (n) {
		let t = $t.get(n);
		t || $t.set(n, t = []), t.push(e);
	}
}
function nn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Bt(e) || o === !1 || o === 0 ? rn(e, 1) : rn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ I(e) ? (g = () => e.value, y = /* @__PURE__ */ Bt(e)) : /* @__PURE__ */ Rt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Rt(e) || /* @__PURE__ */ Bt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ I(e)) return e.value;
		if (/* @__PURE__ */ Rt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ue();
			try {
				_();
			} finally {
				We();
			}
		}
		let t = en;
		en = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			en = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => rn(e(), t);
	}
	let x = Ee(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill(Qt) : Qt, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => D(e, C[t])) : D(e, C))) {
				_ && _();
				let t = en;
				en = m;
				try {
					let t = [
						e,
						C === Qt ? void 0 : b && C[0] === Qt ? [] : C,
						v
					];
					C = e, f ? f(n, 3, t) : n(...t);
				} finally {
					en = t;
				}
			}
		} else m.run();
	};
	return u && u(w), m = new Oe(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => tn(e, !1, m), _ = m.onStop = () => {
		let e = $t.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			$t.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function rn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ I(e)) rn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) rn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		rn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) rn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && rn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function an(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		sn(e, t, n);
	}
}
function on(e, t, n, r) {
	if (h(e)) {
		let i = an(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			sn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(on(e[a], t, n, r));
		return i;
	}
}
function sn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Ue(), an(o, null, 10, [
				e,
				i,
				a
			]), We();
			return;
		}
	}
	cn(e, r, a, i, s);
}
function cn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var R = [], ln = -1, un = [], dn = null, fn = 0, pn = /* @__PURE__ */ Promise.resolve(), mn = null;
function hn(e) {
	let t = mn || pn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function gn(e) {
	let t = ln + 1, n = R.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = R[r], a = Sn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function _n(e) {
	if (!(e.flags & 1)) {
		let t = Sn(e), n = R[R.length - 1];
		!n || !(e.flags & 2) && t >= Sn(n) ? R.push(e) : R.splice(gn(t), 0, e), e.flags |= 1, vn();
	}
}
function vn() {
	mn ||= pn.then(Cn);
}
function yn(e) {
	d(e) ? un.push(...e) : dn && e.id === -1 ? dn.splice(fn + 1, 0, e) : e.flags & 1 || (un.push(e), e.flags |= 1), vn();
}
function bn(e, t, n = ln + 1) {
	for (; n < R.length; n++) {
		let t = R[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			R.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function xn(e) {
	if (un.length) {
		let e = [...new Set(un)].sort((e, t) => Sn(e) - Sn(t));
		if (un.length = 0, dn) {
			dn.push(...e);
			return;
		}
		for (dn = e, fn = 0; fn < dn.length; fn++) {
			let e = dn[fn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		dn = null, fn = 0;
	}
}
var Sn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Cn(e) {
	try {
		for (ln = 0; ln < R.length; ln++) {
			let e = R[ln];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), an(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; ln < R.length; ln++) {
			let e = R[ln];
			e && (e.flags &= -2);
		}
		ln = -1, R.length = 0, xn(e), mn = null, (R.length || un.length) && Cn(e);
	}
}
var z = null, wn = null;
function Tn(e) {
	let t = z;
	return z = e, wn = e && e.type.__scopeId || null, t;
}
function En(e, t = z, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && na(-1);
		let i = Tn(t), a;
		try {
			a = e(...n);
		} finally {
			Tn(i), r._d && na(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Dn(e, n) {
	if (z === null) return e;
	let r = Ia(z), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && rn(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function On(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ue(), on(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), We());
	}
}
function kn(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function An(e, t, n = !1) {
	let r = xa();
	if (r || ci) {
		let i = ci ? ci._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var jn = /* @__PURE__ */ Symbol.for("v-scx"), Mn = () => An(jn);
function Nn(e, t, n) {
	return Pn(e, t, n);
}
function Pn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Da) {
		if (c === "sync") {
			let e = Mn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Z;
	u.call = (e, t, n) => on(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		H(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : _n(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = nn(e, n, u);
	return Da && (f ? f.push(h) : d && h()), h;
}
function Fn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? In(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = wa(this), s = Pn(i, a.bind(r), n);
	return o(), s;
}
function In(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Ln = /* @__PURE__ */ Symbol("_vte"), Rn = (e) => e.__isTeleport, zn = (e) => e && (e.disabled || e.disabled === ""), Bn = (e) => e && (e.defer || e.defer === ""), Vn = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Hn = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Un = (e, t) => {
	let n = e && e.to;
	return g(n) ? t ? t(n) : null : n;
}, Wn = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g } } = l, _ = zn(t.props), { shapeFlag: v, children: y, dynamicChildren: b } = t;
		if (e == null) {
			let e = t.el = h(""), l = t.anchor = h("");
			p(e, n, r), p(l, n, r);
			let d = (e, t) => {
				v & 16 && u(y, e, t, i, a, o, s, c);
			}, f = () => {
				let e = t.target = Un(t.props, m), n = Yn(e, t, h, p);
				e && (o !== "svg" && Vn(e) ? o = "svg" : o !== "mathml" && Hn(e) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), _ || (d(e, n), Jn(t, !1)));
			};
			_ && (d(n, l), Jn(t, !0)), Bn(t.props) || a && a.pendingBranch ? (t.el.__isMounted = !1, H(() => {
				t.el.__isMounted === !1 && (f(), delete t.el.__isMounted);
			}, a)) : f();
		} else {
			t.el = e.el, t.targetStart = e.targetStart;
			let u = t.anchor = e.anchor, p = t.target = e.target, h = t.targetAnchor = e.targetAnchor;
			if (e.el.__isMounted === !1) {
				H(() => {
					Wn.process(e, t, n, r, i, a, o, s, c, l);
				}, a);
				return;
			}
			let g = zn(e.props), v = g ? n : p, y = g ? u : h;
			if (o === "svg" || Vn(p) ? o = "svg" : (o === "mathml" || Hn(p)) && (o = "mathml"), b ? (f(e.dynamicChildren, b, v, i, a, o, s), Wi(e, t, !0)) : c || d(e, t, v, y, i, a, o, s, !1), _) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Gn(t, n, u, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = Un(t.props, m);
				e && Gn(t, e, null, l, 0);
			} else g && Gn(t, p, h, l, 1);
			Jn(t, _);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e;
		if (d && (i(l), i(u)), a && i(c), o & 16) {
			let e = a || !zn(f);
			for (let i = 0; i < s.length; i++) {
				let a = s[i];
				r(a, t, n, e, !!a.dynamicChildren);
			}
		}
	},
	move: Gn,
	hydrate: Kn
};
function Gn(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), (!d || zn(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function Kn(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = Un(t.props, c), h = zn(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || Yn(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || Yn(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), Jn(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var qn = Wn;
function Jn(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function Yn(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Ln] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var Xn = /* @__PURE__ */ Symbol("_leaveCb"), Zn = /* @__PURE__ */ Symbol("_enterCb");
function Qn() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Er(() => {
		e.isMounted = !0;
	}), kr(() => {
		e.isUnmounting = !0;
	}), e;
}
var $n = [Function, Array], er = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: $n,
	onEnter: $n,
	onAfterEnter: $n,
	onEnterCancelled: $n,
	onBeforeLeave: $n,
	onLeave: $n,
	onAfterLeave: $n,
	onLeaveCancelled: $n,
	onBeforeAppear: $n,
	onAppear: $n,
	onAfterAppear: $n,
	onAppearCancelled: $n
}, tr = (e) => {
	let t = e.subTree;
	return t.component ? tr(t.component) : t;
}, nr = {
	name: "BaseTransition",
	props: er,
	setup(e, { slots: t }) {
		let n = xa(), r = Qn();
		return () => {
			let i = t.default && ur(t.default(), !0);
			if (!i || !i.length) return;
			let a = rr(i), o = /* @__PURE__ */ F(e), { mode: s } = o;
			if (r.isLeaving) return sr(a);
			let c = cr(a);
			if (!c) return sr(a);
			let l = or(c, o, r, n, (e) => l = e);
			c.type !== W && lr(c, l);
			let u = n.subTree && cr(n.subTree);
			if (u && u.type !== W && !oa(u, c) && tr(n).type !== W) {
				let e = or(u, o, r, n);
				if (lr(u, e), s === "out-in" && c.type !== W) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, sr(a);
				s === "in-out" && c.type !== W ? e.delayLeave = (e, t, n) => {
					let i = ar(r, u);
					i[String(u.key)] = u, e[Xn] = () => {
						t(), e[Xn] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function rr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== W) {
			t = n;
			break;
		}
	}
	return t;
}
var ir = nr;
function ar(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function or(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: p, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = ar(n, e), C = (e, t) => {
		e && on(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), d(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, ee = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) if (a) r = _ || c;
			else return;
			t[Xn] && t[Xn](!0);
			let i = S[x];
			i && oa(e, i) && i.el[Xn] && i.el[Xn](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = f;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || f;
			else return;
			let s = !1;
			t[Zn] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), ee.delayedLeave && ee.delayedLeave(), t[Zn] = void 0);
			};
			let c = t[Zn].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Zn] && t[Zn](!0), n.isUnmounting) return r();
			C(p, [t]);
			let a = !1;
			t[Xn] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Xn] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Xn].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = or(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return ee;
}
function sr(e) {
	if (vr(e)) return e = da(e), e.children = null, e;
}
function cr(e) {
	if (!vr(e)) return Rn(e.type) && e.children ? rr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function lr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, lr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ur(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === U ? (o.patchFlag & 128 && i++, r = r.concat(ur(o.children, t, s))) : (t || o.type !== W) && r.push(s == null ? o : da(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function dr(e, t) {
	return h(e) ? s({ name: e.name }, t, { setup: e }) : e;
}
function fr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function pr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var mr = /* @__PURE__ */ new WeakMap();
function hr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => hr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (_r(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && hr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Ia(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ F(v), b = v === t ? i : (e) => pr(_, e) ? !1 : u(y, e), x = (e, t) => !(t && pr(_, t));
	if (m != null && m !== p) {
		if (gr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ I(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) an(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ I(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), mr.delete(e);
				};
				t.id = -1, mr.set(e, t), H(t, r);
			} else gr(e), i();
		}
	}
}
function gr(e) {
	let t = mr.get(e);
	t && (t.flags |= 8, mr.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var _r = (e) => !!e.type.__asyncLoader, vr = (e) => e.type.__isKeepAlive;
function yr(e, t) {
	xr(e, "a", t);
}
function br(e, t) {
	xr(e, "da", t);
}
function xr(e, t, n = Z) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Cr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) vr(e.parent.vnode) && Sr(r, t, n, e), e = e.parent;
	}
}
function Sr(e, t, n, r) {
	let i = Cr(t, e, r, !0);
	Ar(() => {
		c(r[t], i);
	}, n);
}
function Cr(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ue();
			let i = wa(n), a = on(t, n, e, r);
			return i(), We(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var wr = (e) => (t, n = Z) => {
	(!Da || e === "sp") && Cr(e, (...e) => t(...e), n);
}, Tr = wr("bm"), Er = wr("m"), Dr = wr("bu"), Or = wr("u"), kr = wr("bum"), Ar = wr("um"), jr = wr("sp"), Mr = wr("rtg"), Nr = wr("rtc");
function Pr(e, t = Z) {
	Cr("ec", e, t);
}
var Fr = "components", Ir = /* @__PURE__ */ Symbol.for("v-ndc");
function Lr(e) {
	return g(e) ? Rr(Fr, e, !1) || e : e || Ir;
}
function Rr(e, t, n = !0, r = !1) {
	let i = z || Z;
	if (i) {
		let n = i.type;
		if (e === Fr) {
			let e = La(n, !1);
			if (e && (e === t || e === T(t) || e === ie(T(t)))) return n;
		}
		let a = zr(i[e] || n[e], t) || zr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function zr(e, t) {
	return e && (e[t] || e[T(t)] || e[ie(T(t))]);
}
function B(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Rt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Bt(e), s = /* @__PURE__ */ zt(e), e = nt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Wt(Ut(e[n])) : Ut(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (v(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
var Br = (e) => e ? Ea(e) ? Ia(e) : Br(e.parent) : null, Vr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Br(e.parent),
	$root: (e) => Br(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Xr(e),
	$forceUpdate: (e) => e.f ||= () => {
		_n(e.update);
	},
	$nextTick: (e) => e.n ||= hn.bind(e.proxy),
	$watch: (e) => Fn.bind(e)
}), Hr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Ur = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Hr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Gr && (s[n] = 0);
		}
		let d = Vr[n], f, p;
		if (d) return n === "$attrs" && N(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Hr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Hr(n, c) || u(o, c) || u(i, c) || u(Vr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Wr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Gr = !0;
function Kr(e) {
	let t = Xr(e), n = e.proxy, i = e.ctx;
	Gr = !1, t.beforeCreate && Jr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: ae, directives: D, filters: oe } = t;
	if (u && qr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ P(t));
	}
	if (Gr = !0, o) for (let e in o) {
		let t = o[e], a = Q({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Yr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			kn(t, e[t]);
		});
	}
	f && Jr(f, e, "c");
	function O(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(Tr, p), O(Er, m), O(Dr, g), O(Or, _), O(yr, y), O(br, b), O(Pr, T), O(Nr, te), O(Mr, ne), O(kr, S), O(Ar, w), O(jr, re), d(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === r && (e.render = ee), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), D && (e.directives = D), re && fr(e);
}
function qr(e, t, n = r) {
	d(e) && (e = ti(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? An(r.from || n, r.default, !0) : An(r.from || n) : An(r), /* @__PURE__ */ I(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Jr(e, t, n) {
	on(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Yr(e, t, n, r) {
	let i = r.includes(".") ? In(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Nn(i, n);
	} else if (h(e)) Nn(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => Yr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && Nn(i, r, e);
	}
}
function Xr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Zr(c, e, o, !0)), Zr(c, t, o)), v(t) && a.set(t, c), c;
}
function Zr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Zr(e, a, n, !0), i && i.forEach((t) => Zr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Qr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Qr = {
	data: $r,
	props: ri,
	emits: ri,
	methods: ni,
	computed: ni,
	beforeCreate: V,
	created: V,
	beforeMount: V,
	mounted: V,
	beforeUpdate: V,
	updated: V,
	beforeDestroy: V,
	beforeUnmount: V,
	destroyed: V,
	unmounted: V,
	activated: V,
	deactivated: V,
	errorCaptured: V,
	serverPrefetch: V,
	components: ni,
	directives: ni,
	watch: ii,
	provide: $r,
	inject: ei
};
function $r(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function ei(e, t) {
	return ni(ti(e), ti(t));
}
function ti(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function V(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function ni(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ri(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Wr(e), Wr(t ?? {})) : t;
}
function ii(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = V(e[r], t[r]);
	return n;
}
function ai() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var oi = 0;
function si(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = ai(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: oi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ba,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || Y(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Ia(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (on(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = ci;
				ci = l;
				try {
					return e();
				} finally {
					ci = t;
				}
			}
		};
		return l;
	};
}
var ci = null, li = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function ui(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && li(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(se)));
	let c, l = i[c = ae(n)] || i[c = ae(T(n))];
	!l && o && (l = i[c = ae(E(n))]), l && on(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, on(u, e, 6, a);
	}
}
var di = /* @__PURE__ */ new WeakMap();
function fi(e, t, n = !1) {
	let r = n ? di : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = fi(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function pi(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, E(t)) || u(e, t));
}
function mi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Tn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = pa(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = pa(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : hi(c);
		}
	} catch (t) {
		$i.length = 0, sn(t, e, 1), v = Y(W);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = gi(y, a)), b = da(b, y, !1, !0));
	}
	return n.dirs && (b = da(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && lr(b, n.transition), v = b, Tn(_), v;
}
var hi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, gi = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function _i(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? vi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (yi(o, r, n) && !pi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? vi(r, o, l) : !0 : !!o;
	return !1;
}
function vi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (yi(t, e, a) && !pi(n, a)) return !0;
	}
	return !1;
}
function yi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !be(r, i) : r !== i;
}
function bi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var xi = {}, Si = () => Object.create(xi), Ci = (e) => Object.getPrototypeOf(e) === xi;
function wi(e, t, n, r = !1) {
	let i = {}, a = Si();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ei(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ft(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Ti(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ F(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (pi(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = T(o);
					i[t] = Di(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		Ei(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = E(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Di(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && et(e.attrs, "set", "");
}
function Ei(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : pi(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ F(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = Di(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function Di(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = wa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var Oi = /* @__PURE__ */ new WeakMap();
function ki(e, r, i = !1) {
	let a = i ? Oi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = ki(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = T(c[e]);
		Ai(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = T(e);
		if (Ai(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function Ai(e) {
	return e[0] !== "$" && !ee(e);
}
var ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Mi = (e) => d(e) ? e.map(pa) : [pa(e)], Ni = (e, t, n) => {
	if (t._n) return t;
	let r = En((...e) => Mi(t(...e)), n);
	return r._c = !1, r;
}, Pi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ji(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Ni(n, i, r);
		else if (i != null) {
			let e = Mi(i);
			t[n] = () => e;
		}
	}
}, Fi = (e, t) => {
	let n = Mi(t);
	e.slots.default = () => n;
}, Ii = (e, t, n) => {
	for (let r in t) (n || !ji(r)) && (e[r] = t[r]);
}, Li = (e, t, n) => {
	let r = e.slots = Si();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ii(r, t, n), n && O(r, "_", e, !0)) : Pi(t, r);
	} else t && Fi(e, t);
}, Ri = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Ii(a, n, r) : (o = !n.$stable, Pi(n, a)), s = n;
	} else n && (Fi(e, n), s = { default: 1 });
	if (o) for (let e in a) !ji(e) && s[e] == null && delete a[e];
}, H = Xi;
function zi(e) {
	return Bi(e);
}
function Bi(e, i) {
	let a = ue();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !oa(e, t) && (r = ye(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Zi:
				y(e, t, n, r);
				break;
			case W:
				b(e, t, n, r);
				break;
			case Qi:
				e ?? x(t, n, r, o);
				break;
			case U:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? D(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? hr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && hr(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, Vi(e, a), s, u), _ && On(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && _a(f, r, e);
		}
		_ && On(e, null, r, "beforeMount");
		let v = Ui(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && H(() => {
			try {
				f && _a(f, r, e), v && g.enter(d), _ && On(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Yi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ma(e[l]) : pa(e[l]), t, n, r, i, a, o, s);
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Hi(r, !1), (g = h.onVnodeBeforeUpdate) && _a(g, r, n, e), f && On(n, e, r, "beforeUpdate"), r && Hi(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, r, i, Vi(n, a), o) : s || de(e, n, l, null, r, i, Vi(n, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ie(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && H(() => {
			g && _a(g, r, n, e), f && On(n, e, r, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === U || !oa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Wi(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, D = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : O(t, n, r, i, a, o, c) : se(e, t, c);
	}, O = (e, t, n, r, i, a, o) => {
		let s = e.component = ba(e, r, i);
		if (vr(e) && (s.ctx.renderer = Se), Oa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = Y(W);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, se = (e, t, n) => {
		let r = t.component = e.component;
		if (_i(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ki(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							H(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Hi(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && _a(d, s, t, c), Hi(e, !0);
				let f = mi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && bi(e, f.el), r && H(r, i), (d = t.props && t.props.onVnodeUpdated) && H(() => _a(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = _r(t);
				if (Hi(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && _a(o, d, t), Hi(e, !0), s && Ce) {
					let t = () => {
						e.subTree = mi(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = mi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && H(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					H(() => _a(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && _r(d.vnode) && d.vnode.shapeFlag & 256) && e.a && H(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Oe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => _n(u), Hi(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ti(e, t.props, r, n), Ri(e, t.children, n), Ue(), bn(e), We();
	}, de = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, fe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? ma(t[p]) : pa(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ma(t[u]) : pa(t[u]);
			if (oa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ma(t[p]) : pa(t[p]);
			if (oa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ma(t[u]) : pa(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ma(t[u]) : pa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					he(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && oa(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Gi(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ji(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(n, r, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === U) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Qi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), H(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[Xn](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ue(), hr(s, null, n, e, !0), We()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !_r(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && _a(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && On(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== U || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === U && d & 384 || !i && u & 16) && ve(c, t, n), r && k(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && H(() => {
			_ && _a(_, t, e), h && On(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, k = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === U) {
			ge(n, r);
			return;
		}
		if (t === Qi) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		qi(c), qi(l), r && oe(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && H(s, t), H(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Ln];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, bn(r), xn(), !1);
	}, Se = {
		p: v,
		um: he,
		m: me,
		r: k,
		mt: O,
		mc: T,
		pc: de,
		pbc: E,
		n: ye,
		o: e
	}, A, Ce;
	return i && ([A, Ce] = i(Se)), {
		render: xe,
		hydrate: A,
		createApp: si(xe, A)
	};
}
function Vi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Hi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ui(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ma(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Wi(t, a)), a.type === Zi && (a.patchFlag === -1 && (a = i[e] = ma(a)), a.el = t.el), a.type === W && !a.el && (a.el = t.el);
	}
}
function Gi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Ki(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ki(t);
}
function qi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ji(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ji(t.subTree) : null;
}
var Yi = (e) => e.__isSuspense;
function Xi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : yn(e);
}
var U = /* @__PURE__ */ Symbol.for("v-fgt"), Zi = /* @__PURE__ */ Symbol.for("v-txt"), W = /* @__PURE__ */ Symbol.for("v-cmt"), Qi = /* @__PURE__ */ Symbol.for("v-stc"), $i = [], G = null;
function K(e = !1) {
	$i.push(G = e ? null : []);
}
function ea() {
	$i.pop(), G = $i[$i.length - 1] || null;
}
var ta = 1;
function na(e, t = !1) {
	ta += e, e < 0 && G && t && (G.hasOnce = !0);
}
function ra(e) {
	return e.dynamicChildren = ta > 0 ? G || n : null, ea(), ta > 0 && G && G.push(e), e;
}
function q(e, t, n, r, i, a) {
	return ra(J(e, t, n, r, i, a, !0));
}
function ia(e, t, n, r, i) {
	return ra(Y(e, t, n, r, i, !0));
}
function aa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function oa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var sa = ({ key: e }) => e ?? null, ca = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ I(e) || h(e) ? {
	i: z,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === U ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && sa(t),
		ref: t && ca(t),
		scopeId: wn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: z
	};
	return s ? (ha(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), ta > 0 && !o && G && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && G.push(c), c;
}
var Y = la;
function la(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Ir) && (e = W), aa(e)) {
		let r = da(e, t, !0);
		return n && ha(r, n), ta > 0 && !a && G && (r.shapeFlag & 6 ? G[G.indexOf(e)] = r : G.push(r)), r.patchFlag = -2, r;
	}
	if (Ra(e) && (e = e.__vccOpts), t) {
		t = ua(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = k(e)), v(n) && (/* @__PURE__ */ Vt(n) && !d(n) && (n = s({}, n)), t.style = de(n));
	}
	let o = g(e) ? 1 : Yi(e) ? 128 : Rn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function ua(e) {
	return e ? /* @__PURE__ */ Vt(e) || Ci(e) ? s({}, e) : e : null;
}
function da(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ga(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && sa(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(ca(t)) : [a, ca(t)] : ca(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== U ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && da(e.ssContent),
		ssFallback: e.ssFallback && da(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && lr(u, c.clone(u)), u;
}
function fa(e = " ", t = 0) {
	return Y(Zi, null, e, t);
}
function X(e = "", t = !1) {
	return t ? (K(), ia(W, null, e)) : Y(W, null, e);
}
function pa(e) {
	return e == null || typeof e == "boolean" ? Y(W) : d(e) ? Y(U, null, e.slice()) : aa(e) ? ma(e) : Y(Zi, null, String(e));
}
function ma(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : da(e);
}
function ha(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ha(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Ci(t) ? t._ctx = z : r === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: z
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [fa(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ga(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = de([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function _a(e, t, n, r = null) {
	on(e, t, 7, [n, r]);
}
var va = ai(), ya = 0;
function ba(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || va, o = {
		uid: ya++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Te(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: ki(i, a),
		emitsOptions: fi(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ui.bind(null, o), e.ce && e.ce(o), o;
}
var Z = null, xa = () => Z || z, Sa, Ca;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Sa = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), Ca = t("__VUE_SSR_SETTERS__", (e) => Da = e);
}
var wa = (e) => {
	let t = Z;
	return Sa(e), e.scope.on(), () => {
		e.scope.off(), Sa(t);
	};
}, Ta = () => {
	Z && Z.scope.off(), Sa(null);
};
function Ea(e) {
	return e.vnode.shapeFlag & 4;
}
var Da = !1;
function Oa(e, t = !1, n = !1) {
	t && Ca(t);
	let { props: r, children: i } = e.vnode, a = Ea(e);
	wi(e, r, a, t), Li(e, i, n || t);
	let o = a ? ka(e, t) : void 0;
	return t && Ca(!1), o;
}
function ka(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ur);
	let { setup: r } = n;
	if (r) {
		Ue();
		let n = e.setupContext = r.length > 1 ? Fa(e) : null, i = wa(e), a = an(r, e, 0, [e.props, n]), o = y(a);
		if (We(), i(), (o || e.sp) && !_r(e) && fr(e), o) {
			if (a.then(Ta, Ta), t) return a.then((n) => {
				Aa(e, n, t);
			}).catch((t) => {
				sn(t, e, 0);
			});
			e.asyncDep = a;
		} else Aa(e, a, t);
	} else Na(e, t);
}
function Aa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Yt(t)), Na(e, n);
}
var ja, Ma;
function Na(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && ja && !i.render) {
			let t = i.template || Xr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = ja(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, Ma && Ma(e);
	}
	{
		let t = wa(e);
		Ue();
		try {
			Kr(e);
		} finally {
			We(), t();
		}
	}
}
var Pa = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function Fa(e) {
	return {
		attrs: new Proxy(e.attrs, Pa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ia(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Yt(Ht(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Vr) return Vr[n](e);
		},
		has(e, t) {
			return t in e || t in Vr;
		}
	}) : e.proxy;
}
function La(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ra(e) {
	return h(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ Zt(e, t, Da);
function za(e, t, n) {
	try {
		na(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? aa(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && aa(n) && (n = [n]), Y(e, t, n));
	} finally {
		na(1);
	}
}
var Ba = "3.5.31", Va = void 0, Ha = typeof window < "u" && window.trustedTypes;
if (Ha) try {
	Va = /* @__PURE__ */ Ha.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ua = Va ? (e) => Va.createHTML(e) : (e) => e, Wa = "http://www.w3.org/2000/svg", Ga = "http://www.w3.org/1998/Math/MathML", Ka = typeof document < "u" ? document : null, qa = Ka && /* @__PURE__ */ Ka.createElement("template"), Ja = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ka.createElementNS(Wa, e) : t === "mathml" ? Ka.createElementNS(Ga, e) : n ? Ka.createElement(e, { is: n }) : Ka.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ka.createTextNode(e),
	createComment: (e) => Ka.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ka.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			qa.innerHTML = Ua(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = qa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ya = "transition", Xa = "animation", Za = /* @__PURE__ */ Symbol("_vtc"), Qa = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, $a = /* @__PURE__ */ s({}, er, Qa), eo = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = $a, e))((e, { slots: t }) => za(ir, ro(e), t)), to = (e, t = []) => {
	d(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, no = (e) => e ? d(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function ro(e) {
	let t = {};
	for (let n in e) n in Qa || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: c = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: u = o, appearToClass: d = c, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = io(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: ee = b } = t, te = (e, t, n, r) => {
		e._enterCancelled = r, so(e, t ? d : c), so(e, t ? u : o), n && n();
	}, ne = (e, t) => {
		e._isLeaving = !1, so(e, f), so(e, m), so(e, p), t && t();
	}, T = (e) => (t, n) => {
		let i = e ? w : y, o = () => te(t, e, n);
		to(i, [t, o]), co(() => {
			so(t, e ? l : a), oo(t, e ? d : c), no(i) || uo(t, r, g, o);
		});
	};
	return s(t, {
		onBeforeEnter(e) {
			to(v, [e]), oo(e, a), oo(e, o);
		},
		onBeforeAppear(e) {
			to(C, [e]), oo(e, l), oo(e, u);
		},
		onEnter: T(!1),
		onAppear: T(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => ne(e, t);
			oo(e, f), e._enterCancelled ? (oo(e, p), ho(e)) : (ho(e), oo(e, p)), co(() => {
				e._isLeaving && (so(e, f), oo(e, m), no(x) || uo(e, r, _, n));
			}), to(x, [e, n]);
		},
		onEnterCancelled(e) {
			te(e, !1, void 0, !0), to(b, [e]);
		},
		onAppearCancelled(e) {
			te(e, !0, void 0, !0), to(ee, [e]);
		},
		onLeaveCancelled(e) {
			ne(e), to(S, [e]);
		}
	});
}
function io(e) {
	if (e == null) return null;
	if (v(e)) return [ao(e.enter), ao(e.leave)];
	{
		let t = ao(e);
		return [t, t];
	}
}
function ao(e) {
	return ce(e);
}
function oo(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[Za] || (e[Za] = /* @__PURE__ */ new Set())).add(t);
}
function so(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[Za];
	n && (n.delete(t), n.size || (e[Za] = void 0));
}
function co(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var lo = 0;
function uo(e, t, n, r) {
	let i = e._endId = ++lo, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = fo(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function fo(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${Ya}Delay`), a = r(`${Ya}Duration`), o = po(i, a), s = r(`${Xa}Delay`), c = r(`${Xa}Duration`), l = po(s, c), u = null, d = 0, f = 0;
	t === Ya ? o > 0 && (u = Ya, d = o, f = a.length) : t === Xa ? l > 0 && (u = Xa, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? Ya : Xa : null, f = u ? u === Ya ? a.length : c.length : 0);
	let p = u === Ya && /\b(?:transform|all)(?:,|$)/.test(r(`${Ya}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function po(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => mo(t) + mo(e[n])));
}
function mo(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ho(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function go(e, t, n) {
	let r = e[Za];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var _o = /* @__PURE__ */ Symbol("_vod"), vo = /* @__PURE__ */ Symbol("_vsh"), yo = /* @__PURE__ */ Symbol(""), bo = /(?:^|;)\s*display\s*:/;
function xo(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Co(r, t, "");
		}
		else for (let e in t) n[e] ?? Co(r, e, "");
		for (let e in n) e === "display" && (a = !0), Co(r, e, n[e]);
	} else if (i) {
		if (t !== n) {
			let e = r[yo];
			e && (n += ";" + e), r.cssText = n, a = bo.test(n);
		}
	} else t && e.removeAttribute("style");
	_o in e && (e[_o] = a ? r.display : "", e[vo] && (r.display = "none"));
}
var So = /\s*!important$/;
function Co(e, t, n) {
	if (d(n)) n.forEach((n) => Co(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Eo(e, t);
		So.test(n) ? e.setProperty(E(r), n.replace(So, ""), "important") : e[r] = n;
	}
}
var wo = [
	"Webkit",
	"Moz",
	"ms"
], To = {};
function Eo(e, t) {
	let n = To[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return To[t] = r;
	r = ie(r);
	for (let n = 0; n < wo.length; n++) {
		let i = wo[n] + r;
		if (i in e) return To[t] = i;
	}
	return t;
}
var Do = "http://www.w3.org/1999/xlink";
function Oo(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Do, t.slice(6, t.length)) : e.setAttributeNS(Do, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function ko(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ua(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ao(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function jo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Mo = /* @__PURE__ */ Symbol("_vei");
function No(e, t, n, r, i = null) {
	let a = e[Mo] || (e[Mo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Fo(t);
		r ? Ao(e, n, a[t] = zo(r, i), s) : o && (jo(e, n, o, s), a[t] = void 0);
	}
}
var Po = /(?:Once|Passive|Capture)$/;
function Fo(e) {
	let t;
	if (Po.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Po);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var Io = 0, Lo = /* @__PURE__ */ Promise.resolve(), Ro = () => Io ||= (Lo.then(() => Io = 0), Date.now());
function zo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		on(Bo(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Ro(), n;
}
function Bo(e, t) {
	if (d(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ho = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? go(e, r, c) : t === "style" ? xo(e, n, r) : a(t) ? o(t) || No(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Uo(e, t, r, c)) ? (ko(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Wo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? ko(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Oo(e, t, r, c));
};
function Uo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Vo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Vo(t) && g(n) ? !1 : t in e;
}
function Wo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var Go = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ Symbol("_moveCb"), Jo = /* @__PURE__ */ Symbol("_enterCb"), Yo = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ s({}, $a, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = xa(), r = Qn(), i, a;
		return Or(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!es(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach(Xo), i.forEach(Zo);
			let r = i.filter(Qo);
			ho(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				oo(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[qo] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[qo] = null, so(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ F(e), s = ro(o), c = o.tag || U;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && (i.push(t), lr(t, or(t, s, r, n)), Go.set(t, $o(t.el)));
			}
			a = t.default ? ur(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && lr(t, or(t, s, r, n));
			}
			return Y(c, null, a);
		};
	}
});
function Xo(e) {
	let t = e.el;
	t[qo] && t[qo](), t[Jo] && t[Jo]();
}
function Zo(e) {
	Ko.set(e, $o(e.el));
}
function Qo(e) {
	let t = Go.get(e), n = Ko.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function $o(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function es(e, t, n) {
	let r = e.cloneNode(), i = e[Za];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = fo(r);
	return a.removeChild(r), o;
}
var ts = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => oe(t, e) : t;
};
function ns(e) {
	e.target.composing = !0;
}
function rs(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var is = /* @__PURE__ */ Symbol("_assign");
function as(e, t, n) {
	return t && (e = e.trim()), n && (e = se(e)), e;
}
var os = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[is] = ts(i);
		let a = r || i.props && i.props.type === "number";
		Ao(e, t ? "change" : "input", (t) => {
			t.target.composing || e[is](as(e.value, n, a));
		}), (n || a) && Ao(e, "change", () => {
			e.value = as(e.value, n, a);
		}), t || (Ao(e, "compositionstart", ns), Ao(e, "compositionend", rs), Ao(e, "change", rs));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[is] = ts(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? se(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ss = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = p(t);
		Ao(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? se(ls(e)) : ls(e));
			e[is](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, hn(() => {
				e._assigning = !1;
			});
		}), e[is] = ts(r);
	},
	mounted(e, { value: t }) {
		cs(e, t);
	},
	beforeUpdate(e, t, n) {
		e[is] = ts(n);
	},
	updated(e, { value: t }) {
		e._assigning || cs(e, t);
	}
};
function cs(e, t) {
	let n = e.multiple, r = d(t);
	if (!(n && !r && !p(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = ls(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = xe(t, o) > -1;
			} else a.selected = t.has(o);
			else if (be(ls(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function ls(e) {
	return "_value" in e ? e._value : e.value;
}
var us = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], ds = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => us.some((n) => e[`${n}Key`] && !t.includes(n))
}, fs = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = ds[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, ps = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, ms = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = E(n.key);
		if (t.some((e) => e === r || ps[e] === r)) return e(n);
	}));
}, hs = /* @__PURE__ */ s({ patchProp: Ho }, Ja), gs;
function _s() {
	return gs ||= zi(hs);
}
var vs = ((...e) => {
	let t = _s().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = bs(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ys(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ys(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function bs(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/app/context.ts
var xs = Symbol("creator-app");
function Ss() {
	let e = An(xs);
	if (!e) throw Error("Creator app context is unavailable.");
	return e;
}
//#endregion
//#region src/shell/bubble/FloatingBubble.vue?vue&type=script&setup=true&lang.ts
var Cs = ["onClick"], ws = { class: "feed-text" }, Ts = { class: "feed-title-row" }, Es = { class: "feed-title" }, Ds = {
	key: 0,
	class: "feed-repeat"
}, Os = {
	key: 0,
	class: "feed-message"
}, ks = {
	key: 1,
	class: "feed-chips"
}, As = {
	key: 0,
	class: "bubble-badge"
}, js = 48, Ms = 12, Ns = 12, Ps = 360, Fs = /* @__PURE__ */ dr({
	__name: "FloatingBubble",
	setup(e) {
		let { bubbleBus: t, settings: n, shell: r } = Ss(), i = /* @__PURE__ */ P({
			width: window.innerWidth,
			height: window.innerHeight
		}), a = n.state.bubblePosition ?? {
			x: i.width - 100,
			y: i.height - 100
		}, o = /* @__PURE__ */ Gt(a.x), s = /* @__PURE__ */ Gt(a.y), c = /* @__PURE__ */ Gt(!1), l = Q(() => t.state.unreadCount), u = 0, d = 0, f = 0, p = 0, m = () => {
			o.value = Math.max(Ms, Math.min(o.value, i.width - js - Ms)), s.value = Math.max(Ms, Math.min(s.value, i.height - js - Ms));
		}, h = () => {
			n.setBubblePosition({
				x: o.value,
				y: s.value
			});
		}, g = () => {
			i.width = window.innerWidth, i.height = window.innerHeight, m(), h();
		}, _ = (e) => {
			e && r.openPanel(e);
		}, v = Q(() => {
			let e = Math.min(Ps, i.width - Ms * 2), t = Math.min(Math.max(o.value - e + js - 6, Ms), i.width - e - Ms), n = Math.max(s.value - Ns - Ms, 0), r = Math.max(i.height - (s.value + js + Ns + Ms), 0), a = n >= 140 || n >= r;
			return {
				className: a ? "above" : "below",
				style: a ? {
					left: `${t}px`,
					bottom: `${i.height - s.value + Ns}px`,
					maxWidth: `${e}px`,
					maxHeight: `${n}px`
				} : {
					left: `${t}px`,
					top: `${s.value + js + Ns}px`,
					maxWidth: `${e}px`,
					maxHeight: `${r}px`
				}
			};
		}), y = (e) => {
			c.value = !0, u = e.clientX, d = e.clientY, f = o.value, p = s.value, e.currentTarget.setPointerCapture(e.pointerId);
		}, b = (e) => {
			c.value && (o.value = f + (e.clientX - u), s.value = p + (e.clientY - d), m());
		}, x = (e) => {
			c.value && (c.value = !1, e.currentTarget.releasePointerCapture(e.pointerId), h(), Math.abs(e.clientX - u) < 5 && Math.abs(e.clientY - d) < 5 && r.togglePanel());
		};
		return Er(() => {
			m(), h(), window.addEventListener("resize", g);
		}), Ar(() => {
			window.removeEventListener("resize", g);
		}), (e, n) => (K(), q("div", {
			class: "floating-bubble-container",
			style: de({
				left: `${o.value}px`,
				top: `${s.value}px`
			})
		}, [J("div", {
			class: k(["feed-stream", v.value.className]),
			style: de(v.value.style)
		}, [Y(Yo, { name: "feed-slide" }, {
			default: En(() => [(K(!0), q(U, null, B(L(t).state.queue, (e) => (K(), q("div", {
				key: e.id,
				class: k(["feed-item", [e.level, {
					clickable: !!e.panelTabId,
					"with-chips": !!e.chips?.length
				}]]),
				onClick: (t) => _(e.panelTabId)
			}, [J("div", { class: k(["feed-indicator", e.source]) }, null, 2), J("div", ws, [
				J("div", Ts, [J("span", Es, A(e.title), 1), e.repeatCount > 1 ? (K(), q("span", Ds, "x" + A(e.repeatCount), 1)) : X("", !0)]),
				e.message ? (K(), q("span", Os, A(e.message), 1)) : X("", !0),
				e.chips?.length ? (K(), q("div", ks, [(K(!0), q(U, null, B(e.chips, (t, n) => (K(), q("span", {
					key: `${e.id}-${n}-${t.tone}-${t.label}`,
					class: "feed-chip"
				}, [J("span", { class: k(["feed-chip-dot", t.tone]) }, null, 2), J("span", null, A(t.label), 1)]))), 128))])) : X("", !0)
			])], 10, Cs))), 128))]),
			_: 1
		})], 6), J("div", {
			class: "bubble-btn",
			onPointerdown: fs(y, ["stop", "prevent"]),
			onPointermove: b,
			onPointerup: x
		}, [n[0] ||= J("span", { class: "bubble-code-icon" }, "</>", -1), l.value > 0 ? (K(), q("span", As, A(l.value), 1)) : X("", !0)], 32)], 4));
	}
}), Is = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ls = /* @__PURE__ */ Is(Fs, [["__scopeId", "data-v-5e7677eb"]]), Rs = ["night", "day"], zs = "night", Bs = { class: "settings-pane" }, Vs = { class: "settings-header" }, Hs = { class: "settings-title" }, Us = { class: "settings-description" }, Ws = { class: "settings-card settings-card-master" }, Gs = { class: "settings-card-copy" }, Ks = ["checked"], qs = { class: "settings-group" }, Js = { class: "settings-group-header" }, Ys = { class: "settings-card appearance-card" }, Xs = { class: "settings-card-copy" }, Zs = ["aria-label"], Qs = ["onClick"], $s = { class: "settings-groups" }, ec = { class: "settings-group-header" }, tc = { class: "settings-list" }, nc = { class: "settings-card-copy" }, rc = ["checked", "onChange"], ic = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "CreatorSettingsPane",
	props: {
		title: {},
		description: {},
		extensionEnabled: { type: Boolean },
		appearanceMode: {},
		features: {},
		i18n: {}
	},
	emits: [
		"toggle-extension",
		"set-appearance",
		"toggle-feature"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Q(() => n.i18n.t.bind(n.i18n)), a = [
			"character-tools",
			"extension-dev",
			"memory-dev"
		], o = {
			"character-tools": "settings.area.characterTools",
			"extension-dev": "settings.area.extensionDev",
			"memory-dev": "settings.area.memoryDev"
		}, s = {
			night: "settings.appearanceNight",
			day: "settings.appearanceDay"
		}, c = Q(() => a.map((e) => ({
			area: e,
			label: i.value(o[e]),
			features: n.features.filter((t) => t.area === e)
		})).filter((e) => e.features.length > 0)), l = Q(() => Rs.map((e) => ({
			value: e,
			labelKey: s[e]
		}))), u = (e) => {
			r("toggle-extension", e.target.checked);
		}, d = (e) => {
			r("set-appearance", e);
		}, f = (e, t) => {
			r("toggle-feature", {
				id: e,
				enabled: t.target.checked
			});
		};
		return (e, t) => (K(), q("div", Bs, [
			J("div", Vs, [J("h2", Hs, A(n.title), 1), J("p", Us, A(n.description), 1)]),
			J("label", Ws, [J("div", Gs, [J("strong", null, A(i.value("settings.enableRuntime")), 1), J("span", null, A(i.value("settings.enableRuntimeDesc")), 1)]), J("input", {
				type: "checkbox",
				class: "settings-toggle",
				checked: n.extensionEnabled,
				onChange: u
			}, null, 40, Ks)]),
			J("section", qs, [J("header", Js, [J("h3", null, A(i.value("settings.appearance")), 1)]), J("div", Ys, [J("div", Xs, [J("strong", null, A(i.value("settings.appearance")), 1), J("span", null, A(i.value("settings.appearanceDesc")), 1)]), J("div", {
				class: "appearance-toggle",
				role: "group",
				"aria-label": i.value("settings.appearance")
			}, [(K(!0), q(U, null, B(l.value, (e) => (K(), q("button", {
				key: e.value,
				type: "button",
				class: k(["appearance-option", { active: n.appearanceMode === e.value }]),
				onClick: (t) => d(e.value)
			}, A(i.value(e.labelKey)), 11, Qs))), 128))], 8, Zs)])]),
			J("div", $s, [(K(!0), q(U, null, B(c.value, (e) => (K(), q("section", {
				key: e.area,
				class: "settings-group"
			}, [J("header", ec, [J("h3", null, A(e.label), 1), J("span", null, A(i.value("settings.featureCount", { n: e.features.length })), 1)]), J("div", tc, [(K(!0), q(U, null, B(e.features, (e) => (K(), q("label", {
				key: e.id,
				class: "settings-card"
			}, [J("div", nc, [J("strong", null, A(i.value(e.titleKey)), 1), J("span", null, A(i.value(e.descriptionKey)), 1)]), J("input", {
				type: "checkbox",
				class: "settings-toggle",
				checked: e.enabled,
				onChange: (t) => f(e.id, t)
			}, null, 40, rc)]))), 128))])]))), 128))])
		]));
	}
}), [["__scopeId", "data-v-81f23923"]]), ac = /* @__PURE__ */ dr({
	__name: "ExtensionSettings",
	setup(e) {
		let { registry: t, settings: n, i18n: r } = Ss(), i = r.t.bind(r), a = Q(() => t.features.map((e) => ({
			id: e.id,
			area: e.area,
			titleKey: e.titleKey,
			descriptionKey: e.descriptionKey,
			enabled: e.enabled
		}))), o = (e) => {
			n.setEnabled(e);
		}, s = (e) => {
			n.setAppearanceMode(e);
		}, c = async ({ id: e, enabled: n }) => {
			await t.setFeatureEnabled(e, n);
		};
		return (e, t) => (K(), ia(ic, {
			title: L(i)("settings.title"),
			description: L(i)("settings.description"),
			"extension-enabled": L(n).state.enabled,
			"appearance-mode": L(n).state.appearanceMode,
			features: a.value,
			i18n: L(r),
			onToggleExtension: o,
			onSetAppearance: s,
			onToggleFeature: t[0] ||= (e) => void c(e)
		}, null, 8, [
			"title",
			"description",
			"extension-enabled",
			"appearance-mode",
			"features",
			"i18n"
		]));
	}
}), oc = { class: "panel-sidebar" }, sc = { class: "sidebar-header" }, cc = { class: "sidebar-nav desktop-nav" }, lc = {
	key: 0,
	class: "category-title"
}, uc = ["onClick"], dc = { class: "mobile-nav" }, fc = ["onClick"], pc = { class: "panel-content" }, mc = { class: "content-header" }, hc = { class: "content-body" }, gc = {
	key: 0,
	class: "feature-host settings-host"
}, _c = {
	key: 1,
	class: "feature-host"
}, vc = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "MainPanel",
	setup(e) {
		let { registry: t, shell: n, i18n: r } = Ss(), i = r.t.bind(r), a = {
			"character-tools": "settings.area.characterTools",
			"extension-dev": "settings.area.extensionDev",
			"memory-dev": "settings.area.memoryDev"
		}, o = [
			"character-tools",
			"extension-dev",
			"memory-dev"
		], s = Q(() => n.state.activeTab), c = Q(() => t.getActiveFeatures().find((e) => e.id === s.value) ?? null), l = Q(() => [{
			id: "settings",
			label: i("panel.globalSettings")
		}, ...t.getActiveFeatures().map((e) => ({
			id: e.id,
			label: i(e.titleKey)
		}))]), u = (e) => t.getFeaturesByArea(e), d = (e) => {
			n.setActiveTab(e);
		};
		return (e, t) => (K(), q("div", {
			class: "main-panel-backdrop",
			onClick: t[3] ||= (e) => L(n).closePanel()
		}, [J("div", {
			class: "main-panel-window",
			onClick: t[2] ||= fs(() => {}, ["stop"])
		}, [J("div", oc, [
			J("div", sc, [J("h3", null, A(L(i)("panel.sidebarTitle")), 1)]),
			J("div", cc, [J("div", {
				class: k(["nav-item", { active: s.value === "settings" }]),
				onClick: t[0] ||= (e) => d("settings")
			}, A(L(i)("panel.globalSettings")), 3), (K(), q(U, null, B(o, (e) => J("div", {
				key: e,
				class: "nav-category"
			}, [u(e).length > 0 ? (K(), q("div", lc, A(L(i)(a[e])), 1)) : X("", !0), (K(!0), q(U, null, B(u(e), (e) => (K(), q("div", {
				key: e.id,
				class: k(["nav-item sub-item", { active: s.value === e.id }]),
				onClick: (t) => d(e.id)
			}, A(L(i)(e.titleKey)), 11, uc))), 128))])), 64))]),
			J("div", dc, [(K(!0), q(U, null, B(l.value, (e) => (K(), q("button", {
				key: e.id,
				class: k(["mobile-tab", { active: s.value === e.id }]),
				onClick: (t) => d(e.id)
			}, A(e.label), 11, fc))), 128))])
		]), J("div", pc, [J("div", mc, [J("button", {
			class: "close-btn",
			onClick: t[1] ||= (e) => L(n).closePanel()
		}, "✕")]), J("div", hc, [s.value === "settings" ? (K(), q("div", gc, [Y(ac)])) : c.value ? (K(), q("div", _c, [(K(), ia(Lr(c.value.component), { controller: c.value.controller }, null, 8, ["controller"]))])) : X("", !0)])])])]));
	}
}), [["__scopeId", "data-v-e597b7d6"]]), yc = /* @__PURE__ */ dr({
	__name: "App",
	setup(e) {
		let { shell: t } = Ss(), n = Q(() => t.state.panelOpen);
		return (e, t) => (K(), q(U, null, [Y(Ls), Y(eo, { name: "fade" }, {
			default: En(() => [n.value ? (K(), ia(vc, { key: 0 })) : X("", !0)]),
			_: 1
		})], 64));
	}
}), bc = { class: "fact-strip" }, xc = { class: "fact-label" }, Sc = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "FactStrip",
	props: { items: {} },
	setup(e) {
		return (t, n) => (K(), q("div", bc, [(K(!0), q(U, null, B(e.items, (e) => (K(), q("div", {
			key: `${e.label}:${e.value}`,
			class: "fact-chip"
		}, [J("span", xc, A(e.label), 1), J("strong", { class: k(["fact-value", [e.tone ?? "default", { monospace: e.monospace }]]) }, A(e.value), 3)]))), 128))]));
	}
}), [["__scopeId", "data-v-a262454a"]]), Cc = {
	"settings.title": "Creator Tools",
	"settings.description": "Enable or disable the floating assistant and individual tool modules. Changes apply immediately.",
	"settings.enableRuntime": "Enable Floating Assistant",
	"settings.enableRuntimeDesc": "Show or hide the floating bubble and tool panel.",
	"settings.appearance": "Appearance",
	"settings.appearanceDesc": "Switch the extension between its own night theme and warm white day theme.",
	"settings.appearanceNight": "Night",
	"settings.appearanceDay": "Day",
	"settings.area.characterTools": "Character Authoring",
	"settings.area.extensionDev": "Debugging & Logs",
	"settings.area.memoryDev": "Chat Memory",
	"settings.featureCount": "{n} tool(s)",
	"panel.sidebarTitle": "Creator Tools",
	"panel.globalSettings": "Settings",
	"worldInfo.title": "World Book Monitor",
	"worldInfo.featureDesc": "Track which entries are included in each AI prompt",
	"worldInfo.description": "View which World Book entries were included in the latest AI prompt. Click any entry to jump to its definition.",
	"worldInfo.legendConstant": "Always Active",
	"worldInfo.legendActivated": "Triggered",
	"worldInfo.emptyNoBatch": "No World Book data yet. Start a conversation to see activated entries.",
	"worldInfo.emptyNoEntries": "No World Book entries were activated this time.",
	"worldInfo.factTrigger": "Source",
	"worldInfo.factCaptured": "Time",
	"worldInfo.factEntries": "Entries",
	"worldInfo.factWorldbooks": "Books",
	"worldInfo.factConstant": "Always Active",
	"worldInfo.factTriggered": "Triggered",
	"worldInfo.badgeConstant": "Always Active",
	"worldInfo.badgeActivated": "Triggered",
	"worldInfo.groupStats": "{entries} entries · {constant} always active · {activated} triggered",
	"worldInfo.bubbleTitle": "World Book ×{n}",
	"worldInfo.bubbleMessage": "{trigger} · {n} book(s)",
	"llmApi.title": "AI Request History",
	"llmApi.featureDesc": "View recent AI requests and responses",
	"llmApi.description": "Browse recent AI requests and responses. Switch between formatted and raw views.",
	"llmApi.keepLabel": "History Limit",
	"llmApi.apply": "Apply",
	"llmApi.prev": "← Older",
	"llmApi.next": "Newer →",
	"llmApi.reload": "Refresh",
	"llmApi.preview": "Formatted",
	"llmApi.raw": "Raw",
	"llmApi.copyRequest": "Copy Request",
	"llmApi.copyResponse": "Copy Response",
	"llmApi.requestCopied": "Request Copied",
	"llmApi.responseCopied": "Response Copied",
	"llmApi.requestPreview": "Request",
	"llmApi.requestRaw": "Raw Request",
	"llmApi.responsePreview": "Response",
	"llmApi.responseRaw": "Raw Response",
	"llmApi.empty": "No AI requests recorded yet.",
	"llmApi.loading": "Loading…",
	"llmApi.factStatus": "Status",
	"llmApi.factSource": "Source",
	"llmApi.factModel": "Model",
	"llmApi.factDuration": "Duration",
	"llmApi.factResponse": "Response",
	"llmApi.factTimestamp": "Timestamp",
	"devLogs.title": "Application Logs",
	"devLogs.featureDesc": "Monitor frontend and backend logs in real time",
	"devLogs.description": "Real-time logs from the frontend and backend. Errors and warnings also appear as floating notifications.",
	"devLogs.tabFrontend": "Frontend",
	"devLogs.tabBackend": "Backend",
	"devLogs.filterPlaceholder": "Search logs…",
	"devLogs.captureConsole": "Capture browser console",
	"devLogs.copyVisible": "Copy Visible",
	"devLogs.copied": "Copied",
	"devLogs.clearView": "Clear",
	"devLogs.emptyFiltered": "No logs match the current filter.",
	"devLogs.emptyNone": "No logs yet.",
	"devLogs.summaryLine": "{total} entries · {warnings} warnings · {errors} errors",
	"devLogs.bubbleFrontendWarn": "Frontend Warning",
	"devLogs.bubbleFrontendError": "Frontend Error",
	"devLogs.bubbleBackendWarn": "Backend Warning",
	"devLogs.bubbleBackendError": "Backend Error",
	"chatLab.title": "Chat Memory Search",
	"chatLab.featureDesc": "Look up messages by content or metadata",
	"chatLab.description": "Look up messages in the current conversation by content or metadata. Useful for testing memory and recall logic.",
	"chatLab.refreshContext": "Refresh",
	"chatLab.contextEmpty": "Open a character or group chat to get started.",
	"chatLab.tabFindLast": "Find Last Message",
	"chatLab.tabSearch": "Search Messages",
	"chatLab.findLastTitle": "Find Last Message",
	"chatLab.findLastDesc": "Find the most recent message matching a role and custom metadata keys.",
	"chatLab.fieldExtraKeys": "Custom Keys",
	"chatLab.fieldRole": "Role",
	"chatLab.fieldLimit": "Limit",
	"chatLab.fieldQuery": "Keyword",
	"chatLab.fieldQueryPlaceholder": "Enter search keyword…",
	"chatLab.btnLocate": "Find",
	"chatLab.btnSearch": "Search",
	"chatLab.searchTitle": "Search Messages",
	"chatLab.searchDesc": "Search message content with optional role filter and result limit.",
	"chatLab.resultsTitle": "Results",
	"chatLab.resultsDesc": "Switch between formatted output and raw JSON.",
	"chatLab.viewPretty": "Formatted",
	"chatLab.viewRaw": "Raw JSON",
	"chatLab.copyJson": "Copy JSON",
	"chatLab.jsonCopied": "Copied",
	"chatLab.stateLoading": "Searching…",
	"chatLab.stateEmpty": "Run a query to see results here.",
	"chatLab.errorNoChat": "Please open a character or group chat first.",
	"chatLab.noResult": "No matching messages found.",
	"chatLab.roleAny": "Any",
	"chatLab.roleUser": "User",
	"chatLab.roleAssistant": "Assistant",
	"chatLab.roleSystem": "System",
	"chatLab.factMode": "Mode",
	"chatLab.factKind": "Type",
	"chatLab.factChat": "Chat",
	"chatLab.factWindow": "Range",
	"chatLab.windowEmpty": "No messages loaded",
	"chatLab.chatUnavailable": "Not available",
	"common.expandView": "Expand view",
	"common.close": "Close",
	"common.unknownModel": "Unknown"
}, wc = {
	"settings.title": "创作者工具",
	"settings.description": "启用或关闭悬浮助手和各个工具模块。更改立即生效。",
	"settings.enableRuntime": "启用悬浮助手",
	"settings.enableRuntimeDesc": "显示或隐藏悬浮气泡与工具面板。",
	"settings.appearance": "外观",
	"settings.appearanceDesc": "切换扩展的夜间主题与日间主题。",
	"settings.appearanceNight": "夜间",
	"settings.appearanceDay": "日间",
	"settings.area.characterTools": "角色卡编写",
	"settings.area.extensionDev": "调试与日志",
	"settings.area.memoryDev": "聊天记忆",
	"settings.featureCount": "{n} 个工具",
	"panel.sidebarTitle": "创作者工具",
	"panel.globalSettings": "设置",
	"worldInfo.title": "世界书监视器",
	"worldInfo.featureDesc": "追踪每次 AI 提示词中包含了哪些条目",
	"worldInfo.description": "查看最近一次 AI 提示词中包含了哪些世界书条目。点击任意条目可跳转到对应定义。",
	"worldInfo.legendConstant": "常驻",
	"worldInfo.legendActivated": "被触发",
	"worldInfo.emptyNoBatch": "暂无世界书数据。开始对话后将显示被激活的条目。",
	"worldInfo.emptyNoEntries": "本次没有世界书条目被激活。",
	"worldInfo.factTrigger": "来源",
	"worldInfo.factCaptured": "时间",
	"worldInfo.factEntries": "条目数",
	"worldInfo.factWorldbooks": "世界书数",
	"worldInfo.factConstant": "常驻",
	"worldInfo.factTriggered": "被触发",
	"worldInfo.badgeConstant": "常驻",
	"worldInfo.badgeActivated": "被触发",
	"worldInfo.groupStats": "{entries} 个条目 · {constant} 个常驻 · {activated} 个被触发",
	"worldInfo.bubbleTitle": "世界书 ×{n}",
	"worldInfo.bubbleMessage": "{trigger} · {n} 本世界书",
	"llmApi.title": "AI 请求记录",
	"llmApi.featureDesc": "查看最近的 AI 请求与回复",
	"llmApi.description": "浏览最近的 AI 请求与回复。可切换格式化视图和原始数据。",
	"llmApi.keepLabel": "保留条数",
	"llmApi.apply": "应用",
	"llmApi.prev": "← 更早",
	"llmApi.next": "更新 →",
	"llmApi.reload": "刷新",
	"llmApi.preview": "格式化",
	"llmApi.raw": "原始数据",
	"llmApi.copyRequest": "复制请求",
	"llmApi.copyResponse": "复制回复",
	"llmApi.requestCopied": "已复制请求",
	"llmApi.responseCopied": "已复制回复",
	"llmApi.requestPreview": "请求",
	"llmApi.requestRaw": "原始请求",
	"llmApi.responsePreview": "回复",
	"llmApi.responseRaw": "原始回复",
	"llmApi.empty": "暂无 AI 请求记录。",
	"llmApi.loading": "加载中…",
	"llmApi.factStatus": "状态",
	"llmApi.factSource": "来源",
	"llmApi.factModel": "模型",
	"llmApi.factDuration": "耗时",
	"llmApi.factResponse": "响应",
	"llmApi.factTimestamp": "时间",
	"devLogs.title": "应用日志",
	"devLogs.featureDesc": "实时监控前端与后端日志",
	"devLogs.description": "前端与后端的实时日志。错误和警告也会以浮动通知显示。",
	"devLogs.tabFrontend": "前端",
	"devLogs.tabBackend": "后端",
	"devLogs.filterPlaceholder": "搜索日志…",
	"devLogs.captureConsole": "捕获浏览器控制台",
	"devLogs.copyVisible": "复制可见内容",
	"devLogs.copied": "已复制",
	"devLogs.clearView": "清空",
	"devLogs.emptyFiltered": "没有日志匹配当前筛选条件。",
	"devLogs.emptyNone": "暂无日志。",
	"devLogs.summaryLine": "{total} 条记录 · {warnings} 条警告 · {errors} 条错误",
	"devLogs.bubbleFrontendWarn": "前端警告",
	"devLogs.bubbleFrontendError": "前端错误",
	"devLogs.bubbleBackendWarn": "后端警告",
	"devLogs.bubbleBackendError": "后端错误",
	"chatLab.title": "聊天记忆搜索",
	"chatLab.featureDesc": "按内容或元数据查找消息",
	"chatLab.description": "按内容或元数据查找当前对话中的消息。适用于测试记忆与检索逻辑。",
	"chatLab.refreshContext": "刷新",
	"chatLab.contextEmpty": "请先打开一个角色或群组对话。",
	"chatLab.tabFindLast": "查找最新消息",
	"chatLab.tabSearch": "搜索消息",
	"chatLab.findLastTitle": "查找最新消息",
	"chatLab.findLastDesc": "查找符合角色与自定义元数据键的最新消息。",
	"chatLab.fieldExtraKeys": "自定义键",
	"chatLab.fieldRole": "角色",
	"chatLab.fieldLimit": "数量上限",
	"chatLab.fieldQuery": "关键词",
	"chatLab.fieldQueryPlaceholder": "输入搜索关键词…",
	"chatLab.btnLocate": "查找",
	"chatLab.btnSearch": "搜索",
	"chatLab.searchTitle": "搜索消息",
	"chatLab.searchDesc": "按关键词搜索消息内容，可选角色筛选和数量限制。",
	"chatLab.resultsTitle": "结果",
	"chatLab.resultsDesc": "可在格式化输出和原始 JSON 之间切换。",
	"chatLab.viewPretty": "格式化",
	"chatLab.viewRaw": "原始 JSON",
	"chatLab.copyJson": "复制 JSON",
	"chatLab.jsonCopied": "已复制",
	"chatLab.stateLoading": "搜索中…",
	"chatLab.stateEmpty": "执行查询后结果将显示在此处。",
	"chatLab.errorNoChat": "请先打开一个角色或群组对话。",
	"chatLab.noResult": "未找到匹配的消息。",
	"chatLab.roleAny": "全部",
	"chatLab.roleUser": "用户",
	"chatLab.roleAssistant": "助手",
	"chatLab.roleSystem": "系统",
	"chatLab.factMode": "模式",
	"chatLab.factKind": "类型",
	"chatLab.factChat": "对话",
	"chatLab.factWindow": "范围",
	"chatLab.windowEmpty": "未加载消息",
	"chatLab.chatUnavailable": "不可用",
	"common.expandView": "展开查看",
	"common.close": "关闭",
	"common.unknownModel": "未知"
}, Tc = {
	"settings.title": "創作者工具",
	"settings.description": "啟用或關閉懸浮助手和各個工具模組。變更立即生效。",
	"settings.enableRuntime": "啟用懸浮助手",
	"settings.enableRuntimeDesc": "顯示或隱藏懸浮氣泡與工具面板。",
	"settings.appearance": "外觀",
	"settings.appearanceDesc": "切換擴充套件的夜間主題與日間主題。",
	"settings.appearanceNight": "夜間",
	"settings.appearanceDay": "日間",
	"settings.area.characterTools": "角色卡編寫",
	"settings.area.extensionDev": "偵錯與日誌",
	"settings.area.memoryDev": "聊天記憶",
	"settings.featureCount": "{n} 個工具",
	"panel.sidebarTitle": "創作者工具",
	"panel.globalSettings": "設定",
	"worldInfo.title": "世界書監視器",
	"worldInfo.featureDesc": "追蹤每次 AI 提示詞中包含了哪些條目",
	"worldInfo.description": "查看最近一次 AI 提示詞中包含了哪些世界書條目。點擊任意條目可跳轉到對應定義。",
	"worldInfo.legendConstant": "常駐",
	"worldInfo.legendActivated": "被觸發",
	"worldInfo.emptyNoBatch": "暫無世界書資料。開始對話後將顯示被啟用的條目。",
	"worldInfo.emptyNoEntries": "本次沒有世界書條目被啟用。",
	"worldInfo.factTrigger": "來源",
	"worldInfo.factCaptured": "時間",
	"worldInfo.factEntries": "條目數",
	"worldInfo.factWorldbooks": "世界書數",
	"worldInfo.factConstant": "常駐",
	"worldInfo.factTriggered": "被觸發",
	"worldInfo.badgeConstant": "常駐",
	"worldInfo.badgeActivated": "被觸發",
	"worldInfo.groupStats": "{entries} 個條目 · {constant} 個常駐 · {activated} 個被觸發",
	"worldInfo.bubbleTitle": "世界書 ×{n}",
	"worldInfo.bubbleMessage": "{trigger} · {n} 本世界書",
	"llmApi.title": "AI 請求記錄",
	"llmApi.featureDesc": "查看最近的 AI 請求與回覆",
	"llmApi.description": "瀏覽最近的 AI 請求與回覆。可切換格式化檢視和原始資料。",
	"llmApi.keepLabel": "保留筆數",
	"llmApi.apply": "套用",
	"llmApi.prev": "← 更早",
	"llmApi.next": "更新 →",
	"llmApi.reload": "重新整理",
	"llmApi.preview": "格式化",
	"llmApi.raw": "原始資料",
	"llmApi.copyRequest": "複製請求",
	"llmApi.copyResponse": "複製回覆",
	"llmApi.requestCopied": "已複製請求",
	"llmApi.responseCopied": "已複製回覆",
	"llmApi.requestPreview": "請求",
	"llmApi.requestRaw": "原始請求",
	"llmApi.responsePreview": "回覆",
	"llmApi.responseRaw": "原始回覆",
	"llmApi.empty": "暫無 AI 請求記錄。",
	"llmApi.loading": "載入中…",
	"llmApi.factStatus": "狀態",
	"llmApi.factSource": "來源",
	"llmApi.factModel": "模型",
	"llmApi.factDuration": "耗時",
	"llmApi.factResponse": "回應",
	"llmApi.factTimestamp": "時間",
	"devLogs.title": "應用程式日誌",
	"devLogs.featureDesc": "即時監控前端與後端日誌",
	"devLogs.description": "前端與後端的即時日誌。錯誤與警告也會以浮動通知顯示。",
	"devLogs.tabFrontend": "前端",
	"devLogs.tabBackend": "後端",
	"devLogs.filterPlaceholder": "搜尋日誌…",
	"devLogs.captureConsole": "擷取瀏覽器主控台",
	"devLogs.copyVisible": "複製可見內容",
	"devLogs.copied": "已複製",
	"devLogs.clearView": "清除",
	"devLogs.emptyFiltered": "沒有日誌符合目前的篩選條件。",
	"devLogs.emptyNone": "暫無日誌。",
	"devLogs.summaryLine": "{total} 筆記錄 · {warnings} 筆警告 · {errors} 筆錯誤",
	"devLogs.bubbleFrontendWarn": "前端警告",
	"devLogs.bubbleFrontendError": "前端錯誤",
	"devLogs.bubbleBackendWarn": "後端警告",
	"devLogs.bubbleBackendError": "後端錯誤",
	"chatLab.title": "聊天記憶搜尋",
	"chatLab.featureDesc": "依內容或中繼資料查找訊息",
	"chatLab.description": "依內容或中繼資料查找目前對話中的訊息。適用於測試記憶與檢索邏輯。",
	"chatLab.refreshContext": "重新整理",
	"chatLab.contextEmpty": "請先開啟一個角色或群組對話。",
	"chatLab.tabFindLast": "查找最新訊息",
	"chatLab.tabSearch": "搜尋訊息",
	"chatLab.findLastTitle": "查找最新訊息",
	"chatLab.findLastDesc": "查找符合角色與自訂中繼資料鍵的最新訊息。",
	"chatLab.fieldExtraKeys": "自訂鍵",
	"chatLab.fieldRole": "角色",
	"chatLab.fieldLimit": "數量上限",
	"chatLab.fieldQuery": "關鍵字",
	"chatLab.fieldQueryPlaceholder": "輸入搜尋關鍵字…",
	"chatLab.btnLocate": "查找",
	"chatLab.btnSearch": "搜尋",
	"chatLab.searchTitle": "搜尋訊息",
	"chatLab.searchDesc": "依關鍵字搜尋訊息內容，可選角色篩選與數量限制。",
	"chatLab.resultsTitle": "結果",
	"chatLab.resultsDesc": "可在格式化輸出與原始 JSON 之間切換。",
	"chatLab.viewPretty": "格式化",
	"chatLab.viewRaw": "原始 JSON",
	"chatLab.copyJson": "複製 JSON",
	"chatLab.jsonCopied": "已複製",
	"chatLab.stateLoading": "搜尋中…",
	"chatLab.stateEmpty": "執行查詢後結果將顯示在此處。",
	"chatLab.errorNoChat": "請先開啟一個角色或群組對話。",
	"chatLab.noResult": "未找到符合的訊息。",
	"chatLab.roleAny": "全部",
	"chatLab.roleUser": "使用者",
	"chatLab.roleAssistant": "助手",
	"chatLab.roleSystem": "系統",
	"chatLab.factMode": "模式",
	"chatLab.factKind": "類型",
	"chatLab.factChat": "對話",
	"chatLab.factWindow": "範圍",
	"chatLab.windowEmpty": "未載入訊息",
	"chatLab.chatUnavailable": "不可用",
	"common.expandView": "展開檢視",
	"common.close": "關閉",
	"common.unknownModel": "未知"
}, Ec = {
	en: Cc,
	"zh-Hans": wc,
	"zh-Hant": Tc
};
function Dc() {
	let e = navigator.language;
	return e.startsWith("zh") ? /^zh-(TW|HK|MO)/i.test(e) ? "zh-Hant" : "zh-Hans" : "en";
}
function Oc(e = Dc()) {
	let t = Ec[e];
	return {
		locale: e,
		t(e, n) {
			let r = t[e];
			if (n) for (let [e, t] of Object.entries(n)) r = r.replace(`{${e}}`, String(t));
			return r;
		}
	};
}
var kc = Symbol("i18n");
function Ac() {
	let e = An(kc);
	if (!e) throw Error("I18n context is unavailable.");
	return e;
}
//#endregion
//#region src/features/chat-lab/components/ChatLab.vue?vue&type=script&setup=true&lang.ts
var jc = { class: "chatlab-view" }, Mc = { class: "view-header" }, Nc = { class: "view-title" }, Pc = { class: "view-desc" }, Fc = {
	key: 0,
	class: "context-empty"
}, Ic = { class: "sandbox-container" }, Lc = { class: "operations-panel" }, Rc = { class: "tool-tabs" }, zc = {
	key: 0,
	class: "tool-section"
}, Bc = { class: "section-head" }, Vc = { class: "tool-grid find-grid" }, Hc = { class: "field field-span-2" }, Uc = { class: "field" }, Wc = ["value"], Gc = ["disabled"], Kc = {
	key: 1,
	class: "tool-section"
}, qc = { class: "section-head" }, Jc = { class: "tool-grid search-grid" }, Yc = { class: "field field-span-2" }, Xc = ["placeholder"], Zc = { class: "field" }, Qc = ["value"], $c = { class: "field compact" }, el = ["disabled"], tl = { class: "results-panel" }, nl = { class: "results-header" }, rl = { class: "results-actions" }, il = {
	key: 0,
	class: "toggle-group"
}, al = { class: "results-body" }, ol = {
	key: 0,
	class: "state-msg"
}, sl = {
	key: 1,
	class: "state-msg error"
}, cl = {
	key: 2,
	class: "state-msg empty"
}, ll = {
	key: 0,
	class: "json-renderer"
}, ul = {
	key: 1,
	class: "pretty-output"
}, dl = {
	key: 0,
	class: "search-results"
}, fl = { class: "result-meta" }, pl = { class: "result-badge" }, ml = { class: "result-snippet" }, hl = { class: "result-text" }, gl = {
	key: 1,
	class: "result-card"
}, _l = { class: "result-meta" }, vl = { class: "key-row" }, yl = { class: "result-text" }, bl = {
	key: 2,
	class: "result-card"
}, xl = { class: "result-text" }, Sl = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "ChatLab",
	props: { controller: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Gt("find"), r = /* @__PURE__ */ Gt("idle"), i = Q(() => !!t.controller.state.windowInfo), { t: a } = Ac(), o = [
			{
				label: a("chatLab.roleAny"),
				value: "any"
			},
			{
				label: a("chatLab.roleUser"),
				value: "user"
			},
			{
				label: a("chatLab.roleAssistant"),
				value: "assistant"
			},
			{
				label: a("chatLab.roleSystem"),
				value: "system"
			}
		], s = Q(() => m(t.controller.state.windowInfo?.chatRef)), c = Q(() => {
			let e = t.controller.state.windowInfo;
			return !e || e.windowLength === 0 ? a("chatLab.windowEmpty") : `${e.windowStartIndex} - ${e.windowStartIndex + e.windowLength - 1} / ${e.totalCount - 1}`;
		}), l = Q(() => [
			{
				label: a("chatLab.factMode"),
				value: t.controller.state.windowInfo?.mode ?? "inactive"
			},
			{
				label: a("chatLab.factKind"),
				value: t.controller.state.windowInfo?.chatKind ?? "inactive"
			},
			{
				label: a("chatLab.factChat"),
				value: s.value,
				monospace: !0
			},
			{
				label: a("chatLab.factWindow"),
				value: c.value,
				monospace: !0
			}
		]), u = Q(() => {
			let e = t.controller.state.searchResult;
			return !e || Array.isArray(e) || !("index" in e) || !("message" in e) ? null : e;
		}), d = Q(() => Array.isArray(t.controller.state.searchResult) ? t.controller.state.searchResult : []), f = Q(() => JSON.stringify(t.controller.state.searchResult, null, 2)), p = Q(() => {
			let e = t.controller.state.searchResult;
			return e && !Array.isArray(e) && "message" in e && typeof e.message == "string" ? e.message : null;
		});
		function m(e) {
			return e ? e.kind === "character" ? `${e.fileName} (${e.characterId})` : e.chatId : a("chatLab.chatUnavailable");
		}
		function h(e) {
			let t = e.message.mes;
			return typeof t == "string" ? t : JSON.stringify(e.message, null, 2);
		}
		function g(e) {
			return Object.keys(e.message);
		}
		async function _() {
			await navigator.clipboard.writeText(f.value), r.value = "copied", setTimeout(() => {
				r.value = "idle";
			}, 1500);
		}
		return (e, s) => (K(), q("div", jc, [
			J("div", Mc, [J("div", null, [J("h2", Nc, A(L(a)("chatLab.title")), 1), J("p", Pc, A(L(a)("chatLab.description")), 1)]), J("button", {
				class: "toolbar-btn",
				onClick: s[0] ||= (e) => void t.controller.refreshWindowInfo()
			}, A(L(a)("chatLab.refreshContext")), 1)]),
			Y(Sc, { items: l.value }, null, 8, ["items"]),
			i.value ? X("", !0) : (K(), q("div", Fc, A(L(a)("chatLab.contextEmpty")), 1)),
			J("div", Ic, [J("div", Lc, [J("div", Rc, [J("button", {
				class: k({ active: n.value === "find" }),
				onClick: s[1] ||= (e) => n.value = "find"
			}, A(L(a)("chatLab.tabFindLast")), 3), J("button", {
				class: k({ active: n.value === "search" }),
				onClick: s[2] ||= (e) => n.value = "search"
			}, A(L(a)("chatLab.tabSearch")), 3)]), n.value === "find" ? (K(), q("section", zc, [J("div", Bc, [J("h3", null, A(L(a)("chatLab.findLastTitle")), 1), J("p", null, A(L(a)("chatLab.findLastDesc")), 1)]), J("div", Vc, [
				J("label", Hc, [J("span", null, A(L(a)("chatLab.fieldExtraKeys")), 1), Dn(J("input", {
					"onUpdate:modelValue": s[3] ||= (e) => t.controller.state.extraKeysInput = e,
					type: "text",
					class: "ttce-control ttce-input-control mono-input",
					placeholder: "e.g. TavernDB_ACU_IsolatedData, isUser",
					onKeyup: s[4] ||= ms((e) => void t.controller.executeFindLast(), ["enter"])
				}, null, 544), [[os, t.controller.state.extraKeysInput]])]),
				J("label", Uc, [J("span", null, A(L(a)("chatLab.fieldRole")), 1), Dn(J("select", {
					"onUpdate:modelValue": s[5] ||= (e) => t.controller.state.locateRole = e,
					class: "ttce-control ttce-select-control"
				}, [(K(), q(U, null, B(o, (e) => J("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, Wc)), 64))], 512), [[ss, t.controller.state.locateRole]])]),
				J("button", {
					class: "primary-btn action-btn",
					disabled: t.controller.state.isLoading || !i.value,
					onClick: s[6] ||= (e) => void t.controller.executeFindLast()
				}, A(L(a)("chatLab.btnLocate")), 9, Gc)
			])])) : (K(), q("section", Kc, [J("div", qc, [J("h3", null, A(L(a)("chatLab.searchTitle")), 1), J("p", null, A(L(a)("chatLab.searchDesc")), 1)]), J("div", Jc, [
				J("label", Yc, [J("span", null, A(L(a)("chatLab.fieldQuery")), 1), Dn(J("input", {
					"onUpdate:modelValue": s[7] ||= (e) => t.controller.state.searchQuery = e,
					type: "text",
					class: "ttce-control ttce-input-control",
					placeholder: L(a)("chatLab.fieldQueryPlaceholder"),
					onKeyup: s[8] ||= ms((e) => void t.controller.executeSearch(), ["enter"])
				}, null, 40, Xc), [[os, t.controller.state.searchQuery]])]),
				J("label", Zc, [J("span", null, A(L(a)("chatLab.fieldRole")), 1), Dn(J("select", {
					"onUpdate:modelValue": s[9] ||= (e) => t.controller.state.searchRole = e,
					class: "ttce-control ttce-select-control"
				}, [(K(), q(U, null, B(o, (e) => J("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, Qc)), 64))], 512), [[ss, t.controller.state.searchRole]])]),
				J("label", $c, [J("span", null, A(L(a)("chatLab.fieldLimit")), 1), Dn(J("input", {
					"onUpdate:modelValue": s[10] ||= (e) => t.controller.state.searchLimit = e,
					type: "number",
					min: "1",
					step: "1",
					class: "ttce-control ttce-number-control"
				}, null, 512), [[
					os,
					t.controller.state.searchLimit,
					void 0,
					{ number: !0 }
				]])]),
				J("button", {
					class: "primary-btn action-btn field-span-2",
					disabled: t.controller.state.isLoading || !i.value || !t.controller.state.searchQuery.trim(),
					onClick: s[11] ||= (e) => void t.controller.executeSearch()
				}, A(L(a)("chatLab.btnSearch")), 9, el)
			])]))]), J("div", tl, [J("div", nl, [J("div", null, [J("h3", null, A(L(a)("chatLab.resultsTitle")), 1), J("p", null, A(L(a)("chatLab.resultsDesc")), 1)]), J("div", rl, [t.controller.state.searchResult ? (K(), q("div", il, [J("button", {
				class: k({ active: t.controller.state.viewMode === "pretty" }),
				onClick: s[12] ||= (e) => t.controller.state.viewMode = "pretty"
			}, A(L(a)("chatLab.viewPretty")), 3), J("button", {
				class: k({ active: t.controller.state.viewMode === "raw" }),
				onClick: s[13] ||= (e) => t.controller.state.viewMode = "raw"
			}, A(L(a)("chatLab.viewRaw")), 3)])) : X("", !0), t.controller.state.searchResult ? (K(), q("button", {
				key: 1,
				class: "toolbar-btn",
				onClick: s[14] ||= (e) => void _()
			}, A(r.value === "copied" ? L(a)("chatLab.jsonCopied") : L(a)("chatLab.copyJson")), 1)) : X("", !0)])]), J("div", al, [t.controller.state.isLoading ? (K(), q("div", ol, A(L(a)("chatLab.stateLoading")), 1)) : t.controller.state.errorMessage ? (K(), q("div", sl, A(t.controller.state.errorMessage), 1)) : t.controller.state.searchResult ? (K(), q(U, { key: 3 }, [t.controller.state.viewMode === "raw" ? (K(), q("pre", ll, A(f.value), 1)) : (K(), q("div", ul, [d.value.length ? (K(), q("div", dl, [(K(!0), q(U, null, B(d.value, (e) => (K(), q("article", {
				key: e.index,
				class: "result-card"
			}, [
				J("div", fl, [
					J("span", pl, A(e.role), 1),
					J("span", null, "Index " + A(e.index), 1),
					J("span", null, "Score " + A(e.score.toFixed(3)), 1)
				]),
				J("p", ml, A(e.snippet), 1),
				J("pre", hl, A(e.text), 1)
			]))), 128))])) : u.value ? (K(), q("article", gl, [
				J("div", _l, [s[15] ||= J("span", { class: "result-badge" }, "Locate Result", -1), J("span", null, "Index " + A(u.value.index), 1)]),
				J("div", vl, [(K(!0), q(U, null, B(g(u.value), (e) => (K(), q("span", {
					key: e,
					class: "key-chip"
				}, A(e), 1))), 128))]),
				J("pre", yl, A(h(u.value)), 1)
			])) : p.value ? (K(), q("article", bl, [J("pre", xl, A(p.value), 1)])) : X("", !0)]))], 64)) : (K(), q("div", cl, A(L(a)("chatLab.stateEmpty")), 1))])])])
		]));
	}
}), [["__scopeId", "data-v-e7d4c1ac"]]);
//#endregion
//#region src/features/chat-lab/module.ts
function Cl(e) {
	return e instanceof Error ? [
		"Failed to resolve active character id",
		"SillyTavern context chatId is empty for character chat",
		"SillyTavern context chatId is empty for group chat"
	].includes(e.message) : !1;
}
function wl(e) {
	let t = /* @__PURE__ */ P({
		extraKeysInput: "",
		locateRole: "any",
		searchQuery: "",
		searchRole: "any",
		searchLimit: 20,
		searchResult: null,
		viewMode: "pretty",
		isLoading: !1,
		errorMessage: null,
		windowInfo: null
	}), n = () => {
		t.searchResult = null, t.errorMessage = null;
	}, r = async () => {
		try {
			return await e.host.getChatWindowInfo();
		} catch (e) {
			if (Cl(e)) return null;
			throw e;
		}
	}, i = async () => {
		t.errorMessage = null, t.windowInfo = await r();
	}, a = async () => {
		let n = await r();
		if (t.windowInfo = n, n) return n;
		throw Error(e.i18n.t("chatLab.errorNoChat"));
	};
	return {
		state: t,
		async activate() {
			await i();
		},
		async deactivate() {},
		async refreshWindowInfo() {
			await i();
		},
		async executeFindLast() {
			t.isLoading = !0, n();
			try {
				await a();
				let n = t.extraKeysInput.split(",").map((e) => e.trim()).filter(Boolean), r = t.locateRole === "any" ? void 0 : t.locateRole;
				t.searchResult = await e.host.getChatHandle().locate.findLastMessage({
					role: r,
					hasExtraKeys: n.length > 0 ? n : void 0
				}) ?? { message: "No result found" };
			} catch (e) {
				t.errorMessage = e instanceof Error ? e.message : String(e);
			} finally {
				t.isLoading = !1;
			}
		},
		async executeSearch() {
			if (t.searchQuery) {
				t.isLoading = !0, n();
				try {
					await a();
					let n = Number.isFinite(t.searchLimit) && t.searchLimit > 0 ? Math.floor(t.searchLimit) : 20, r = await e.host.getChatHandle().searchMessages({
						query: t.searchQuery,
						limit: n,
						filters: { role: t.searchRole === "any" ? void 0 : t.searchRole }
					});
					t.searchResult = r.length > 0 ? r : { message: "No result found" };
				} catch (e) {
					t.errorMessage = e instanceof Error ? e.message : String(e);
				} finally {
					t.isLoading = !1;
				}
			}
		}
	};
}
var Tl = {
	id: "chat-lab",
	area: "memory-dev",
	titleKey: "chatLab.title",
	descriptionKey: "chatLab.featureDesc",
	order: 40,
	capabilities: ["chat"],
	defaultEnabled: !0,
	component: Sl,
	createController: wl
}, El = { class: "devlogs-view" }, Dl = { class: "view-header" }, Ol = { class: "heading" }, kl = { class: "view-title" }, Al = { class: "view-desc" }, jl = { class: "log-tabs" }, Ml = { class: "toolbar" }, Nl = { class: "summary-line" }, Pl = ["placeholder"], Fl = {
	key: 0,
	class: "capture-toggle"
}, Il = ["checked"], Ll = { class: "filter-row" }, Rl = ["onClick"], zl = { class: "log-terminal" }, Bl = {
	key: 0,
	class: "log-stream"
}, Vl = { class: "log-meta" }, Hl = { class: "log-time" }, Ul = { class: "log-level" }, Wl = {
	key: 0,
	class: "log-target"
}, Gl = { class: "log-message" }, Kl = {
	key: 1,
	class: "empty-log"
}, ql = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "DevLogsViewer",
	props: { controller: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Gt("frontend"), r = /* @__PURE__ */ Gt("ALL"), i = /* @__PURE__ */ Gt(""), a = /* @__PURE__ */ Gt("idle"), { t: o } = Ac(), s = (e) => new Date(e).toLocaleTimeString([], {
			hour12: !1,
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		}), c = (e) => ({
			id: e.id,
			timestampMs: e.timestampMs,
			level: e.level.toUpperCase(),
			message: e.message,
			target: e.target
		}), l = (e) => ({
			id: e.id,
			timestampMs: e.timestampMs,
			level: e.level,
			message: e.message,
			target: e.target
		}), u = Q(() => n.value === "frontend" ? t.controller.state.frontendLogs.map(c) : t.controller.state.backendLogs.map(l)), d = Q(() => {
			let e = i.value.trim().toLowerCase();
			return u.value.filter((t) => r.value !== "ALL" && t.level !== r.value ? !1 : e ? [
				t.message,
				t.target ?? "",
				t.level
			].some((t) => t.toLowerCase().includes(e)) : !0);
		}), f = Q(() => {
			let e = u.value, t = e.filter((e) => e.level === "WARN").length, n = e.filter((e) => e.level === "ERROR").length;
			return o("devLogs.summaryLine", {
				total: e.length,
				warnings: t,
				errors: n
			});
		}), p = async () => {
			let e = d.value.map((e) => {
				let t = e.target ? ` [${e.target}]` : "";
				return `[${s(e.timestampMs)}] [${e.level}]${t} ${e.message}`;
			}).join("\n");
			await navigator.clipboard.writeText(e), a.value = "copied", setTimeout(() => {
				a.value = "idle";
			}, 1500);
		}, m = () => {
			t.controller.clearLogs(n.value);
		}, h = async (e) => {
			let n = e.target;
			await t.controller.setFrontendConsoleCaptureEnabled(n.checked);
		};
		return (e, c) => (K(), q("div", El, [
			J("div", Dl, [J("div", Ol, [J("h2", kl, A(L(o)("devLogs.title")), 1), J("p", Al, A(L(o)("devLogs.description")), 1)]), J("div", jl, [J("button", {
				class: k({ active: n.value === "frontend" }),
				onClick: c[0] ||= (e) => n.value = "frontend"
			}, A(L(o)("devLogs.tabFrontend")), 3), J("button", {
				class: k({ active: n.value === "backend" }),
				onClick: c[1] ||= (e) => n.value = "backend"
			}, A(L(o)("devLogs.tabBackend")), 3)])]),
			J("div", Ml, [
				J("span", Nl, A(f.value), 1),
				Dn(J("input", {
					"onUpdate:modelValue": c[2] ||= (e) => i.value = e,
					type: "search",
					class: "search-input ttce-control ttce-input-control",
					placeholder: L(o)("devLogs.filterPlaceholder")
				}, null, 8, Pl), [[os, i.value]]),
				n.value === "frontend" ? (K(), q("label", Fl, [J("input", {
					checked: t.controller.state.frontendConsoleCaptureEnabled,
					type: "checkbox",
					onChange: c[3] ||= (e) => void h(e)
				}, null, 40, Il), J("span", null, A(L(o)("devLogs.captureConsole")), 1)])) : X("", !0),
				J("button", {
					class: "toolbar-btn",
					onClick: c[4] ||= (e) => void p()
				}, A(a.value === "copied" ? L(o)("devLogs.copied") : L(o)("devLogs.copyVisible")), 1),
				J("button", {
					class: "toolbar-btn",
					onClick: c[5] ||= (e) => m()
				}, A(L(o)("devLogs.clearView")), 1)
			]),
			J("div", Ll, [(K(), q(U, null, B([
				"ALL",
				"DEBUG",
				"INFO",
				"WARN",
				"ERROR"
			], (e) => J("button", {
				key: e,
				class: k(["filter-chip", { active: r.value === e }]),
				onClick: (t) => r.value = e
			}, A(e), 11, Rl)), 64))]),
			J("div", zl, [d.value.length ? (K(), q("div", Bl, [(K(!0), q(U, null, B(d.value, (e) => (K(), q("div", {
				key: `${n.value}-${e.id}`,
				class: k(["log-row", e.level.toLowerCase()])
			}, [J("div", Vl, [
				J("span", Hl, A(s(e.timestampMs)), 1),
				J("span", Ul, A(e.level), 1),
				e.target ? (K(), q("span", Wl, A(e.target), 1)) : X("", !0)
			]), J("div", Gl, A(e.message), 1)], 2))), 128))])) : (K(), q("div", Kl, A(u.value.length ? L(o)("devLogs.emptyFiltered") : L(o)("devLogs.emptyNone")), 1))])
		]));
	}
}), [["__scopeId", "data-v-7ec6d47d"]]), Jl = "dev-logs-tools";
function Yl(e) {
	let t = /* @__PURE__ */ P({
		frontendLogs: [],
		backendLogs: [],
		frontendConsoleCaptureEnabled: !1
	}), n = null, r = null;
	return {
		state: t,
		async activate() {
			let i = e.host.api.dev.frontendLogs, a = e.host.api.dev.backendLogs;
			t.frontendConsoleCaptureEnabled = await i.getConsoleCaptureEnabled(), t.frontendLogs = await i.list({ limit: 100 }), t.backendLogs = await a.tail({ limit: 100 }), n = await i.subscribe((n) => {
				if (t.frontendLogs.unshift(n), t.frontendLogs.length > 500 && t.frontendLogs.pop(), n.level === "warn" || n.level === "error") {
					let t = n.level === "error" ? "devLogs.bubbleFrontendError" : "devLogs.bubbleFrontendWarn";
					e.bubbleBus.push({
						source: "frontend-log",
						level: n.level,
						title: e.i18n.t(t),
						message: n.message,
						panelTabId: Jl
					});
				}
			}), r = await a.subscribe((n) => {
				if (t.backendLogs.unshift(n), t.backendLogs.length > 500 && t.backendLogs.pop(), n.level === "WARN" || n.level === "ERROR") {
					let t = n.level === "ERROR" ? "devLogs.bubbleBackendError" : "devLogs.bubbleBackendWarn";
					e.bubbleBus.push({
						source: "backend-log",
						level: n.level === "ERROR" ? "error" : "warn",
						title: e.i18n.t(t),
						message: n.message,
						panelTabId: Jl
					});
				}
			});
		},
		async deactivate() {
			await n?.(), await r?.(), n = null, r = null;
		},
		async setFrontendConsoleCaptureEnabled(n) {
			await e.host.api.dev.frontendLogs.setConsoleCaptureEnabled(n), t.frontendConsoleCaptureEnabled = n;
		},
		clearLogs(e) {
			(e === "frontend" || e === "all") && (t.frontendLogs = []), (e === "backend" || e === "all") && (t.backendLogs = []);
		}
	};
}
var Xl = {
	id: Jl,
	area: "extension-dev",
	titleKey: "devLogs.title",
	descriptionKey: "devLogs.featureDesc",
	order: 30,
	capabilities: ["dev.frontendLogs", "dev.backendLogs"],
	defaultEnabled: !0,
	component: ql,
	createController: Yl
}, Zl = { class: "expandable-pane" }, Ql = { class: "section-header" }, $l = ["title", "aria-label"], eu = ["data-ttce-appearance"], tu = { class: "viewer-dialog" }, nu = { class: "viewer-header" }, ru = ["title", "aria-label"], iu = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "ExpandableTextPane",
	props: {
		title: {},
		text: {},
		raw: { type: Boolean },
		fullscreenTitle: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ Gt(!1), { t: r } = Ac(), { settings: i } = Ss(), a = Q(() => t.fullscreenTitle ?? t.title), o = Q(() => i.state.appearanceMode), s = () => {
			n.value = !1;
		}, c = (e) => {
			e.key === "Escape" && s();
		};
		return Nn(n, (e) => {
			if (e) {
				window.addEventListener("keydown", c);
				return;
			}
			window.removeEventListener("keydown", c);
		}), kr(() => {
			window.removeEventListener("keydown", c);
		}), (e, i) => (K(), q("section", Zl, [
			J("div", Ql, [J("h4", null, A(t.title), 1), J("button", {
				type: "button",
				class: "expand-btn",
				title: L(r)("common.expandView"),
				"aria-label": L(r)("common.expandView"),
				onClick: i[0] ||= (e) => n.value = !0
			}, " ⤢ ", 8, $l)]),
			J("pre", { class: k(["text-viewer", { raw: t.raw }]) }, A(t.text), 3),
			(K(), ia(qn, { to: "body" }, [n.value ? (K(), q("div", {
				key: 0,
				class: "viewer-backdrop ttce-theme-root",
				"data-ttce-appearance": o.value,
				onClick: fs(s, ["self"])
			}, [J("div", tu, [J("div", nu, [J("h3", null, A(a.value), 1), J("button", {
				type: "button",
				class: "viewer-close",
				title: L(r)("common.close"),
				"aria-label": L(r)("common.close"),
				onClick: s
			}, " ✕ ", 8, ru)]), J("pre", { class: k(["viewer-content", { raw: t.raw }]) }, A(t.text), 3)])], 8, eu)) : X("", !0)]))
		]));
	}
}), [["__scopeId", "data-v-1aa0d9cc"]]), au = { class: "llmapi-view" }, ou = { class: "view-header" }, su = { class: "view-title" }, cu = { class: "view-desc" }, lu = { class: "keep-toolbar" }, uu = { class: "keep-control" }, du = {
	key: 0,
	class: "viewer-shell"
}, fu = { class: "viewer-toolbar" }, pu = { class: "nav-group" }, mu = ["disabled"], hu = ["disabled"], gu = { class: "position-label" }, _u = { class: "action-group" }, vu = { class: "toggle-group" }, yu = { class: "detail-head" }, bu = { class: "detail-title-row" }, xu = { class: "detail-endpoint" }, Su = {
	key: 0,
	class: "error-callout"
}, Cu = { class: "body-stack" }, wu = {
	key: 1,
	class: "empty-detail"
}, Tu = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "LlmApiViewer",
	props: { controller: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Gt(String(t.controller.state.keepLimit)), r = /* @__PURE__ */ Gt("idle"), { t: i } = Ac();
		Nn(() => t.controller.state.keepLimit, (e) => {
			n.value = String(e);
		}, { immediate: !0 });
		let a = Q(() => t.controller.state.logs.findIndex((e) => e.id === t.controller.state.selectedId)), o = Q(() => t.controller.state.logs[a.value] ?? null), s = Q(() => a.value < 0 ? "0 / 0" : `${a.value + 1} / ${t.controller.state.logs.length}`), c = Q(() => t.controller.state.viewMode === "raw"), l = Q(() => c.value ? i("llmApi.requestRaw") : i("llmApi.requestPreview")), u = Q(() => c.value ? i("llmApi.responseRaw") : i("llmApi.responsePreview")), d = Q(() => c.value ? t.controller.state.loadingRaw ? i("llmApi.loading") : t.controller.state.selectedRaw?.requestRaw ?? "" : t.controller.state.loadingPreview ? i("llmApi.loading") : t.controller.state.selectedPreview?.requestReadable ?? ""), f = Q(() => c.value ? t.controller.state.loadingRaw ? i("llmApi.loading") : t.controller.state.selectedRaw?.responseRaw ?? "" : t.controller.state.loadingPreview ? i("llmApi.loading") : t.controller.state.selectedPreview?.responseReadable ?? ""), p = Q(() => o.value ? `Entry #${o.value.id} - ${l.value}` : l.value), m = Q(() => o.value ? `Entry #${o.value.id} - ${u.value}` : u.value), h = Q(() => {
			let e = o.value;
			return e ? [
				{
					label: i("llmApi.factStatus"),
					value: e.ok ? "OK" : "ERROR",
					tone: e.ok ? "green" : "red"
				},
				{
					label: i("llmApi.factSource"),
					value: e.source
				},
				{
					label: i("llmApi.factModel"),
					value: e.model ?? i("common.unknownModel")
				},
				{
					label: i("llmApi.factDuration"),
					value: `${e.durationMs}ms`,
					monospace: !0
				},
				{
					label: i("llmApi.factResponse"),
					value: t.controller.state.selectedPreview?.responseRawKind ?? t.controller.state.selectedRaw?.responseRawKind ?? "unknown"
				},
				{
					label: i("llmApi.factTimestamp"),
					value: g(e.timestampMs),
					monospace: !0
				}
			] : [];
		}), g = (e) => new Date(e).toLocaleString([], {
			hour12: !1,
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		}), _ = async () => {
			let e = Number.parseInt(n.value, 10);
			if (Number.isNaN(e) || e < 1) {
				n.value = String(t.controller.state.keepLimit);
				return;
			}
			await t.controller.setKeepLimit(e);
		}, v = async (e) => {
			if (a.value < 0) return;
			let n = a.value + e, r = t.controller.state.logs[n];
			r && await t.controller.selectLog(r.id);
		}, y = async (e) => {
			let n = t.controller.state.viewMode === "preview" ? e === "request" ? t.controller.state.selectedPreview?.requestReadable ?? "" : t.controller.state.selectedPreview?.responseReadable ?? "" : e === "request" ? t.controller.state.selectedRaw?.requestRaw ?? "" : t.controller.state.selectedRaw?.responseRaw ?? "";
			await navigator.clipboard.writeText(n), r.value = e, setTimeout(() => {
				r.value = "idle";
			}, 1500);
		};
		return (e, g) => (K(), q("div", au, [J("div", ou, [J("div", null, [J("h2", su, A(L(i)("llmApi.title")), 1), J("p", cu, A(L(i)("llmApi.description")), 1)]), J("div", lu, [J("label", uu, [J("span", null, A(L(i)("llmApi.keepLabel")), 1), Dn(J("input", {
			"onUpdate:modelValue": g[0] ||= (e) => n.value = e,
			type: "number",
			min: "1",
			step: "1",
			class: "ttce-control ttce-number-control",
			onKeyup: g[1] ||= ms((e) => void _(), ["enter"])
		}, null, 544), [[os, n.value]])]), J("button", {
			class: "toolbar-btn",
			onClick: g[2] ||= (e) => void _()
		}, A(L(i)("llmApi.apply")), 1)])]), o.value ? (K(), q("div", du, [
			J("div", fu, [J("div", pu, [
				J("button", {
					class: "toolbar-btn",
					disabled: a.value >= t.controller.state.logs.length - 1,
					onClick: g[3] ||= (e) => void v(1)
				}, A(L(i)("llmApi.prev")), 9, mu),
				J("button", {
					class: "toolbar-btn",
					disabled: a.value <= 0,
					onClick: g[4] ||= (e) => void v(-1)
				}, A(L(i)("llmApi.next")), 9, hu),
				J("span", gu, A(s.value), 1)
			]), J("div", _u, [
				J("button", {
					class: "toolbar-btn",
					onClick: g[5] ||= (e) => void t.controller.reloadSelection()
				}, A(L(i)("llmApi.reload")), 1),
				J("div", vu, [J("button", {
					class: k({ active: t.controller.state.viewMode === "preview" }),
					onClick: g[6] ||= (e) => void t.controller.setViewMode("preview")
				}, A(L(i)("llmApi.preview")), 3), J("button", {
					class: k({ active: t.controller.state.viewMode === "raw" }),
					onClick: g[7] ||= (e) => void t.controller.setViewMode("raw")
				}, A(L(i)("llmApi.raw")), 3)]),
				J("button", {
					class: "toolbar-btn",
					onClick: g[8] ||= (e) => void y("request")
				}, A(r.value === "request" ? L(i)("llmApi.requestCopied") : L(i)("llmApi.copyRequest")), 1),
				J("button", {
					class: "toolbar-btn",
					onClick: g[9] ||= (e) => void y("response")
				}, A(r.value === "response" ? L(i)("llmApi.responseCopied") : L(i)("llmApi.copyResponse")), 1)
			])]),
			J("div", yu, [J("div", bu, [J("h3", null, "Entry #" + A(o.value.id), 1), J("span", xu, A(o.value.endpoint), 1)]), Y(Sc, { items: h.value }, null, 8, ["items"])]),
			t.controller.state.selectedPreview?.errorMessage && t.controller.state.viewMode === "preview" ? (K(), q("div", Su, A(t.controller.state.selectedPreview.errorMessage), 1)) : X("", !0),
			J("div", Cu, [Y(iu, {
				class: "detail-section request",
				title: l.value,
				"fullscreen-title": p.value,
				text: d.value,
				raw: c.value
			}, null, 8, [
				"title",
				"fullscreen-title",
				"text",
				"raw"
			]), Y(iu, {
				class: "detail-section response",
				title: u.value,
				"fullscreen-title": m.value,
				text: f.value,
				raw: c.value
			}, null, 8, [
				"title",
				"fullscreen-title",
				"text",
				"raw"
			])])
		])) : (K(), q("div", wu, A(L(i)("llmApi.empty")), 1))]));
	}
}), [["__scopeId", "data-v-3cb39889"]]);
//#endregion
//#region src/features/llm-api/module.ts
function Eu(e) {
	let t = /* @__PURE__ */ P({
		logs: [],
		selectedId: null,
		selectedPreview: null,
		selectedRaw: null,
		viewMode: "preview",
		keepLimit: 20,
		loadingIndex: !1,
		loadingPreview: !1,
		loadingRaw: !1
	}), n = null, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = e.host.api.dev.llmApiLogs, o = () => {
		t.selectedId = null, t.selectedPreview = null, t.selectedRaw = null;
	}, s = async (e, n = !1) => {
		try {
			if (!n) {
				let n = r.get(e);
				if (n) {
					t.selectedPreview = n;
					return;
				}
			}
			t.loadingPreview = !0;
			let i = await a.getPreview(e);
			r.set(e, i), t.selectedId === e && (t.selectedPreview = i);
		} finally {
			t.loadingPreview = !1;
		}
	}, c = async (e, n = !1) => {
		try {
			if (!n) {
				let n = i.get(e);
				if (n) {
					t.selectedRaw = n;
					return;
				}
			}
			t.loadingRaw = !0;
			let r = await a.getRaw(e);
			i.set(e, r), t.selectedId === e && (t.selectedRaw = r);
		} finally {
			t.loadingRaw = !1;
		}
	}, l = () => {
		if (t.selectedId === null || t.logs.some((e) => e.id === t.selectedId)) return;
		let e = t.logs[0];
		if (!e) {
			o();
			return;
		}
		t.selectedId = e.id, t.selectedPreview = r.get(e.id) ?? null, t.selectedRaw = i.get(e.id) ?? null, s(e.id), t.viewMode === "raw" && c(e.id);
	}, u = async (e = !0) => {
		try {
			t.loadingIndex = !0, t.logs = await a.index({ limit: t.keepLimit });
		} finally {
			t.loadingIndex = !1;
		}
		if (!t.logs.length) {
			o();
			return;
		}
		await d(e && t.selectedId !== null && t.logs.some((e) => e.id === t.selectedId) ? t.selectedId : t.logs[0].id);
	}, d = async (e) => {
		t.selectedId = e, t.selectedPreview = r.get(e) ?? null, t.selectedRaw = i.get(e) ?? null, await s(e), t.viewMode === "raw" && await c(e);
	};
	return {
		state: t,
		async activate() {
			t.keepLimit = await a.getKeep(), await u(!1), n = await a.subscribeIndex((e) => {
				let n = t.selectedId === null || t.selectedId === t.logs[0]?.id;
				if (t.logs.unshift(e), t.logs.length > t.keepLimit && t.logs.pop(), n) {
					d(e.id);
					return;
				}
				l();
			});
		},
		async deactivate() {
			await n?.(), n = null;
		},
		async reloadIndex() {
			await u();
		},
		async reloadSelection() {
			t.selectedId !== null && (r.delete(t.selectedId), i.delete(t.selectedId), t.selectedPreview = null, t.selectedRaw = null, await s(t.selectedId, !0), t.viewMode === "raw" && await c(t.selectedId, !0));
		},
		async selectLog(e) {
			await d(e);
		},
		async setViewMode(e) {
			if (t.viewMode = e, t.selectedId !== null) {
				if (e === "raw") {
					await c(t.selectedId);
					return;
				}
				await s(t.selectedId);
			}
		},
		async setKeepLimit(e) {
			await a.setKeep(e), t.keepLimit = e, await u();
		}
	};
}
var Du = {
	id: "llm-api-tools",
	area: "character-tools",
	titleKey: "llmApi.title",
	descriptionKey: "llmApi.featureDesc",
	order: 20,
	capabilities: ["dev.llmApiLogs"],
	defaultEnabled: !0,
	component: Tu,
	createController: Eu
}, Ou = { class: "worldinfo-view" }, ku = { class: "view-header" }, Au = { class: "view-title" }, ju = { class: "view-desc" }, Mu = { class: "legend" }, Nu = { class: "legend-chip" }, Pu = { class: "legend-chip" }, Fu = {
	key: 0,
	class: "empty-state"
}, Iu = {
	key: 1,
	class: "batch-layout"
}, Lu = {
	key: 0,
	class: "empty-state compact"
}, Ru = {
	key: 1,
	class: "world-groups"
}, zu = { class: "group-header" }, Bu = { class: "entry-list" }, Vu = ["onClick"], Hu = { class: "entry-main" }, Uu = { class: "entry-copy" }, Wu = { class: "entry-name" }, Gu = { class: "entry-meta" }, Ku = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "WorldInfoFeed",
	props: { controller: {} },
	setup(e) {
		let t = e, { t: n } = Ac(), r = {
			before: "Before Prompt",
			after: "After Prompt",
			an_top: "AN Top",
			an_bottom: "AN Bottom",
			depth: "Depth",
			em_top: "EM Top",
			em_bottom: "EM Bottom",
			outlet: "Outlet"
		}, i = Q(() => {
			let e = t.controller.state.lastBatch?.entries ?? [];
			return {
				total: e.length,
				constant: e.filter((e) => e.constant).length,
				activated: e.filter((e) => !e.constant).length,
				worlds: new Set(e.map((e) => e.world)).size
			};
		}), a = Q(() => {
			let e = t.controller.state.lastBatch;
			return e ? [
				{
					label: n("worldInfo.factTrigger"),
					value: e.trigger
				},
				{
					label: n("worldInfo.factCaptured"),
					value: s(e.timestampMs),
					monospace: !0
				},
				{
					label: n("worldInfo.factEntries"),
					value: i.value.total
				},
				{
					label: n("worldInfo.factWorldbooks"),
					value: i.value.worlds
				},
				{
					label: n("worldInfo.factConstant"),
					value: i.value.constant,
					tone: "blue"
				},
				{
					label: n("worldInfo.factTriggered"),
					value: i.value.activated,
					tone: "green"
				}
			] : [];
		}), o = Q(() => {
			let e = t.controller.state.lastBatch?.entries ?? [], n = /* @__PURE__ */ new Map();
			for (let t of e) {
				let e = n.get(t.world);
				e || (e = {
					world: t.world,
					entries: [],
					activatedCount: 0,
					constantCount: 0
				}, n.set(t.world, e)), e.entries.push(t), t.constant ? e.constantCount += 1 : e.activatedCount += 1;
			}
			return Array.from(n.values()).map((e) => ({
				...e,
				entries: e.entries.slice().sort((e, t) => Number(t.constant) - Number(e.constant))
			}));
		}), s = (e) => new Date(e).toLocaleString([], {
			hour12: !1,
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		}), c = (e) => e ? r[e] ?? e : "Default";
		return (e, r) => (K(), q("div", Ou, [J("div", ku, [J("div", null, [J("h2", Au, A(L(n)("worldInfo.title")), 1), J("p", ju, A(L(n)("worldInfo.description")), 1)]), J("div", Mu, [J("span", Nu, [r[0] ||= J("span", { class: "legend-dot constant" }, null, -1), J("span", null, A(L(n)("worldInfo.legendConstant")), 1)]), J("span", Pu, [r[1] ||= J("span", { class: "legend-dot activated" }, null, -1), J("span", null, A(L(n)("worldInfo.legendActivated")), 1)])])]), t.controller.state.lastBatch ? (K(), q("div", Iu, [Y(Sc, { items: a.value }, null, 8, ["items"]), i.value.total === 0 ? (K(), q("div", Lu, A(L(n)("worldInfo.emptyNoEntries")), 1)) : (K(), q("div", Ru, [(K(!0), q(U, null, B(o.value, (e) => (K(), q("section", {
			key: e.world,
			class: "world-group"
		}, [J("header", zu, [J("div", null, [J("h3", null, A(e.world), 1), J("p", null, A(L(n)("worldInfo.groupStats", {
			entries: e.entries.length,
			constant: e.constantCount,
			activated: e.activatedCount
		})), 1)])]), J("div", Bu, [(K(!0), q(U, null, B(e.entries, (e) => (K(), q("button", {
			key: `${e.world}-${e.uid}`,
			type: "button",
			class: "entry-card",
			onClick: (n) => void t.controller.openEntry(e.world, e.uid)
		}, [J("div", Hu, [J("span", { class: k(["entry-dot", {
			constant: e.constant,
			activated: !e.constant
		}]) }, null, 2), J("div", Uu, [J("div", Wu, A(e.displayName), 1), J("div", Gu, "UID " + A(e.uid) + " · " + A(c(e.position)), 1)])]), J("span", { class: k(["entry-badge", {
			constant: e.constant,
			activated: !e.constant
		}]) }, A(e.constant ? L(n)("worldInfo.badgeConstant") : L(n)("worldInfo.badgeActivated")), 3)], 8, Vu))), 128))])]))), 128))]))])) : (K(), q("div", Fu, A(L(n)("worldInfo.emptyNoBatch")), 1))]));
	}
}), [["__scopeId", "data-v-ceac820d"]]), qu = "world-info-tools";
function Ju(e) {
	return e.entries.map((e) => ({
		label: e.displayName,
		tone: e.constant ? "world-info-constant" : "world-info"
	}));
}
function Yu(e) {
	let t = /* @__PURE__ */ P({ lastBatch: null }), n = null;
	return {
		state: t,
		async activate() {
			let r = e.host.api.worldInfo;
			t.lastBatch = await r.getLastActivation(), n = await r.subscribeActivations((n) => {
				if (t.lastBatch = n, !n.entries.length) return;
				let r = new Set(n.entries.map((e) => e.world));
				e.bubbleBus.push({
					source: "world-info",
					level: "info",
					title: e.i18n.t("worldInfo.bubbleTitle", { n: n.entries.length }),
					message: e.i18n.t("worldInfo.bubbleMessage", {
						trigger: n.trigger,
						n: r.size
					}),
					chips: Ju(n),
					panelTabId: qu,
					meta: { trigger: n.trigger }
				});
			});
		},
		async deactivate() {
			await n?.(), n = null;
		},
		async openEntry(t, n) {
			await e.host.api.worldInfo.openEntry({
				world: t,
				uid: n
			}), e.shell.closePanel();
		}
	};
}
//#endregion
//#region src/features/modules.ts
var Xu = [
	{
		id: qu,
		area: "character-tools",
		titleKey: "worldInfo.title",
		descriptionKey: "worldInfo.featureDesc",
		order: 10,
		capabilities: ["worldInfo"],
		defaultEnabled: !0,
		component: Ku,
		createController: Yu
	},
	Du,
	Xl,
	Tl
];
//#endregion
//#region src/features/catalog.ts
function Zu(e) {
	return e.slice().sort((e, t) => e.order - t.order);
}
function Qu(e) {
	return Zu(Xu).filter((t) => e.supportsAll(t.capabilities));
}
//#endregion
//#region src/features/registry.ts
function $u(e) {
	let t = /* @__PURE__ */ P(Qu(e.host).map((t) => ({
		id: t.id,
		area: t.area,
		titleKey: t.titleKey,
		descriptionKey: t.descriptionKey,
		order: t.order,
		capabilities: t.capabilities,
		component: t.component,
		controller: t.createController(e),
		enabled: e.settings.isFeatureEnabled(t.id, t.defaultEnabled),
		active: !1
	}))), n = (e) => {
		let n = t.find((t) => t.id === e);
		if (!n) throw Error(`Unknown feature: ${e}`);
		return n;
	}, r = async (e) => {
		e.active ||= (await e.controller.activate(), !0);
	}, i = async (e) => {
		e.active &&= (await e.controller.deactivate(), !1);
	};
	return {
		features: t,
		async activateEnabledFeatures() {
			for (let e of t) e.enabled && await r(e);
		},
		async deactivateAllFeatures() {
			for (let e of t) await i(e);
		},
		async setFeatureEnabled(t, a) {
			let o = n(t);
			if (o.enabled !== a) {
				if (a) {
					await r(o), o.enabled = !0, e.settings.setFeatureEnabled(t, !0);
					return;
				}
				await i(o), o.enabled = !1, e.settings.setFeatureEnabled(t, !1), e.shell.state.activeTab === t && e.shell.setActiveTab("settings");
			}
		},
		getFeaturesByArea(e) {
			return t.filter((t) => t.enabled && t.area === e);
		},
		getActiveFeatures() {
			return t.filter((e) => e.active);
		}
	};
}
//#endregion
//#region src/app/shell-store.ts
function ed(e, t) {
	let n = /* @__PURE__ */ P({
		panelOpen: !1,
		activeTab: e.state.activeTab
	}), r = (t) => {
		n.activeTab = t, e.setActiveTab(t);
	}, i = (e) => {
		e && r(e), n.panelOpen = !0, t.markAllRead();
	};
	return {
		state: n,
		openPanel: i,
		closePanel() {
			n.panelOpen = !1;
		},
		togglePanel(e) {
			if (n.panelOpen && !e) {
				n.panelOpen = !1;
				return;
			}
			i(e);
		},
		setActiveTab: r
	};
}
//#endregion
//#region src/app/settings-store.ts
var td = "ttce:settings";
function nd() {
	return {
		enabled: !0,
		enabledFeatures: {},
		bubblePosition: null,
		activeTab: "settings",
		appearanceMode: zs
	};
}
function rd() {
	let e = localStorage.getItem(td);
	if (!e) return nd();
	try {
		let t = JSON.parse(e);
		return {
			...nd(),
			...t,
			appearanceMode: t.appearanceMode === "day" ? "day" : zs
		};
	} catch {
		return nd();
	}
}
function id(e) {
	return {
		enabled: e.enabled,
		enabledFeatures: { ...e.enabledFeatures },
		bubblePosition: e.bubblePosition ? { ...e.bubblePosition } : null,
		activeTab: e.activeTab,
		appearanceMode: e.appearanceMode
	};
}
function ad() {
	let e = /* @__PURE__ */ P(rd()), t = /* @__PURE__ */ new Set(), n = () => {
		localStorage.setItem(td, JSON.stringify(id(e)));
	}, r = () => {
		n(), t.forEach((e) => e());
	};
	return {
		state: e,
		subscribe(e) {
			return t.add(e), () => {
				t.delete(e);
			};
		},
		setEnabled(t) {
			e.enabled !== t && (e.enabled = t, r());
		},
		setAppearanceMode(t) {
			e.appearanceMode !== t && (e.appearanceMode = t, r());
		},
		isFeatureEnabled(t, n) {
			return e.enabledFeatures[t] ?? n;
		},
		setFeatureEnabled(t, n) {
			e.enabledFeatures[t] !== n && (e.enabledFeatures[t] = n, r());
		},
		setBubblePosition(t) {
			e.bubblePosition?.x === t.x && e.bubblePosition?.y === t.y || (e.bubblePosition = { ...t }, r());
		},
		setActiveTab(t) {
			e.activeTab !== t && (e.activeTab = t, r());
		}
	};
}
//#endregion
//#region src/shell/bubble/bubble-feed-bus.ts
function od() {
	let e = /* @__PURE__ */ P({
		queue: [],
		unreadCount: 0
	}), t = 0, n = /* @__PURE__ */ new Map(), r = (e) => {
		let t = n.get(e);
		t !== void 0 && clearTimeout(t);
		let r = setTimeout(() => i(e), 5e3);
		n.set(e, r);
	}, i = (t) => {
		let r = n.get(t);
		r !== void 0 && (clearTimeout(r), n.delete(t));
		let i = e.queue.findIndex((e) => e.id === t);
		i !== -1 && e.queue.splice(i, 1);
	}, a = (e, t) => e === t ? !0 : !e || !t || e.length !== t.length ? !1 : e.every((e, n) => {
		let r = t[n];
		return e.label === r.label && e.tone === r.tone;
	}), o = (t) => {
		for (let n = e.queue.length - 1; n >= 0; --n) {
			let r = e.queue[n];
			if (r.source === t.source && r.level === t.level && r.title === t.title && r.message === t.message && r.panelTabId === t.panelTabId && a(r.chips, t.chips)) return n;
		}
		return -1;
	};
	return {
		state: e,
		push(n) {
			let i = o(n);
			if (i !== -1) {
				let [t] = e.queue.splice(i, 1);
				t.repeatCount += 1, t.timestampMs = Date.now(), e.queue.push(t), e.unreadCount += 1, r(t.id);
				return;
			}
			let a = {
				...n,
				id: `feed_${Date.now()}_${t}`,
				timestampMs: Date.now(),
				repeatCount: 1
			};
			t += 1, e.queue.push(a), e.unreadCount += 1, r(a.id);
		},
		remove: i,
		markAllRead() {
			e.unreadCount = 0;
		}
	};
}
//#endregion
//#region src/app/create-creator-app.ts
async function sd(e, t = {}) {
	let n = t.settings ?? ad(), r = t.i18n ?? Oc(), i = od(), a = {
		host: e,
		settings: n,
		shell: ed(n, i),
		bubbleBus: i,
		i18n: r
	}, o = $u(a);
	return await o.activateEnabledFeatures(), {
		...a,
		registry: o
	};
}
//#endregion
//#region src/host/api.ts
function cd() {
	return window.__TAURITAVERN__?.api ?? null;
}
async function ld() {
	let e = window.__TAURITAVERN__?.ready ?? window.__TAURITAVERN_MAIN_READY__;
	e && await e;
}
//#endregion
//#region src/host/client.ts
function ud(e) {
	let t = /* @__PURE__ */ new Set();
	return e.chat && t.add("chat"), e.dev?.frontendLogs && t.add("dev.frontendLogs"), e.dev?.backendLogs && t.add("dev.backendLogs"), e.dev?.llmApiLogs && t.add("dev.llmApiLogs"), e.worldInfo && t.add("worldInfo"), t;
}
function dd(e = cd()) {
	if (!e) throw Error("TauriTavern host API is unavailable.");
	let t = ud(e);
	return {
		api: e,
		capabilities: t,
		supports(e) {
			return t.has(e);
		},
		supportsAll(e) {
			return e.every((e) => t.has(e));
		},
		getChatHandle() {
			if (!e.chat) throw Error("Chat API is unavailable.");
			return e.chat.current.handle();
		},
		getChatWindowInfo() {
			if (!e.chat) throw Error("Chat API is unavailable.");
			return e.chat.current.windowInfo();
		}
	};
}
//#endregion
//#region src/settings-page/ExtensionsPagePanel.vue?vue&type=script&setup=true&lang.ts
var fd = { class: "inline-drawer wide100p ttce-settings-drawer" }, pd = { class: "inline-drawer-content" }, md = ["data-ttce-appearance"], hd = /* @__PURE__ */ Is(/* @__PURE__ */ dr({
	__name: "ExtensionsPagePanel",
	props: {
		settings: {},
		features: {},
		setFeatureEnabled: { type: Function }
	},
	setup(e) {
		let t = e, n = Oc(), r = n.t.bind(n), i = Q(() => t.features.map((e) => ({
			id: e.id,
			area: e.area,
			titleKey: e.titleKey,
			descriptionKey: e.descriptionKey,
			enabled: t.settings.isFeatureEnabled(e.id, e.defaultEnabled)
		}))), a = (e) => {
			t.settings.setEnabled(e);
		}, o = (e) => {
			t.settings.setAppearanceMode(e);
		}, s = async ({ id: e, enabled: n }) => {
			await t.setFeatureEnabled(e, n);
		};
		return (e, c) => (K(), q("div", fd, [c[1] ||= J("div", { class: "inline-drawer-toggle inline-drawer-header" }, [J("div", { class: "ttce-settings-header" }, [J("i", { class: "fa-solid fa-code" }), J("b", null, "TauriTavern Creator Extension")]), J("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" })], -1), J("div", pd, [J("div", {
			class: "ttce-theme-root ttce-settings-surface",
			"data-ttce-appearance": t.settings.state.appearanceMode
		}, [Y(ic, {
			title: L(r)("settings.title"),
			description: L(r)("settings.description"),
			"extension-enabled": t.settings.state.enabled,
			"appearance-mode": t.settings.state.appearanceMode,
			features: i.value,
			i18n: L(n),
			onToggleExtension: a,
			onSetAppearance: o,
			onToggleFeature: c[0] ||= (e) => void s(e)
		}, null, 8, [
			"title",
			"description",
			"extension-enabled",
			"appearance-mode",
			"features",
			"i18n"
		])], 8, md)])]));
	}
}), [["__scopeId", "data-v-254ee4fb"]]), gd = "tauritavern-creator-extension-root", _d = "tauritavern-creator-extension-settings-root", vd = "ttce-theme-root", yd = null, bd = null, xd = null, Sd = null, Cd = null, wd = null, $ = null, Td = null, Ed = [], Dd = null, Od = Promise.resolve();
function kd() {
	return document.readyState === "loading" ? new Promise((e) => {
		document.addEventListener("DOMContentLoaded", () => e(), { once: !0 });
	}) : Promise.resolve();
}
function Ad(e, t, n) {
	document.getElementById(e)?.remove();
	let r = document.createElement("div");
	return r.id = e, r.className = n, t.appendChild(r), r;
}
function jd() {
	return document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
}
function Md() {
	!bd || !$ || (bd.dataset.ttceAppearance = $.state.appearanceMode);
}
async function Nd() {
	if (yd || !wd || !$ || !$.state.enabled) return;
	let e = await sd(wd, {
		settings: $,
		i18n: Td
	});
	if (!$.state.enabled) {
		await e.registry.deactivateAllFeatures();
		return;
	}
	Cd = e, bd = Ad(gd, document.body, vd), Md(), yd = vs(yc), yd.provide(xs, e), yd.provide(kc, e.i18n), yd.mount(bd);
}
async function Pd() {
	let e = Cd;
	Cd = null, e && await e.registry.deactivateAllFeatures(), yd?.unmount(), yd = null, bd?.remove(), bd = null;
}
async function Fd() {
	if ($) {
		if ($.state.enabled) {
			await Nd(), Md();
			return;
		}
		await Pd();
	}
}
function Id() {
	return Od = Od.catch((e) => {
		console.error("[TauriTavern Creator Extension] Runtime lifecycle sync failed.", e);
	}).then(() => Fd()), Od;
}
function Ld() {
	if (xd || !$) return;
	let e = jd();
	if (!e) {
		console.warn("[TauriTavern Creator Extension] Extensions settings container is unavailable.");
		return;
	}
	Sd = Ad(_d, e, "extension_container");
	let t = Td ?? Oc();
	xd = vs(hd, {
		settings: $,
		features: Ed,
		setFeatureEnabled: async (e, t) => {
			if (Cd) {
				await Cd.registry.setFeatureEnabled(e, t);
				return;
			}
			$?.setFeatureEnabled(e, t);
		}
	}), xd.provide(kc, t), xd.mount(Sd);
}
function Rd() {
	xd?.unmount(), xd = null, Sd?.remove(), Sd = null;
}
function zd() {
	Dd?.(), Dd = null, Od.finally(() => {
		Pd(), Rd();
	});
}
async function Bd() {
	await kd(), await ld();
	let e = cd();
	if (!e) {
		console.error("[TauriTavern Creator Extension] Host API is unavailable.");
		return;
	}
	wd = dd(e), $ = ad(), Td = Oc(), Ed = Qu(wd), Ld(), Dd = $.subscribe(() => {
		Id();
	}), await Id(), window.addEventListener("pagehide", zd, { once: !0 });
}
Bd();
//#endregion

//# sourceMappingURL=index.js.map