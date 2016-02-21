/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function(a, b) {
        return new m.fn.init(a, b);
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
        return b.toUpperCase();
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return m.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], 
        c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, 
        f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g;
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }
            if (k.ownLast) for (b in a) return j.call(a, b);
            for (b in a) ;
            return void 0 === b || j.call(a, b);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
            } else if (g) {
                for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)));
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    function r(a) {
        var b = "length" in a && a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ea = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
            p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: oa(function() {
                    return [ 0 ];
                }),
                last: oa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: oa(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b;
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }
                m.push(c);
            }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, 
    m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a);
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c;
        });
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [ d ] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0));
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), 
                u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return x.find(a);
                this.length = 1, this[0] = d;
            }
            return this.context = y, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), m.makeArray(a, this));
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), 
            e = e[b];
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return m.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return m.sibling(a.firstChild);
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), 
            this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), b ? e = h.length : c && (g = d, j(c));
                }
                return this;
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
                }), this;
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], e = 0, this;
            },
            disable: function() {
                return h = i = c = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, c || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [], c = [ a, c.slice ? c.slice() : c ], b ? i.push(c) : j(c)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return k;
    }, m.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", m.Callbacks("once memory"), "resolved" ], [ "reject", "fail", m.Callbacks("once memory"), "rejected" ], [ "notify", "progress", m.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this;
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [ m ]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), 
                m(y).off("ready")));
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), 
        a.detachEvent("onload", J));
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), 
        m.ready());
    }
    m.ready.promise = function(b) {
        if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), 
        a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement;
            } catch (d) {}
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    I(), m.ready();
                }
            }();
        }
        return H.promise(b);
    };
    var K = "undefined", L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
        d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                k.deleteExpando = !1;
            }
        }
        a = null;
    }(), m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                } catch (e) {}
                m.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function P(a) {
        var b;
        for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), 
            j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), 
            g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 
            "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, 
            f;
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [ b ] : (b = m.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([ a ], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
        },
        data: function(a, b, c) {
            return Q(a, b, c);
        },
        removeData: function(a, b) {
            return R(a, b);
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return R(a, b, !0);
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), 
                    O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b);
            }) : f ? O(f, a, m.data(f, a)) : void 0;
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a);
            });
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
                m.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c);
                })
            });
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [ "Top", "Right", "Bottom", "Left" ], U = function(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
    }, V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c) m.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(m(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, 
        k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, 
        a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, 
        c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, 
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1;
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test;
            } catch (d) {
                k.deleteExpando = !1;
            }
        }
    }(), function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null;
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    function aa() {
        return !0;
    }
    function ba() {
        return !1;
    }
    function ca() {
        try {
            return y.activeElement;
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), 
                (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || "").match(E) || [ "" ], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), 
                o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, 
                j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), 
                j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                m.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), 
                    g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), 
                    delete k[o]);
                } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [ d || y ], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), 
            p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : m.makeArray(c, [ b ]), 
            k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), 
                    l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, 
                f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), 
                f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]();
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l);
                }
                return b.result;
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                    a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                    void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [ i ]).length), 
                e[c] && e.push(d);
                e.length && g.push({
                    elem: i,
                    handlers: e
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, 
                e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), 
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, 
        b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), 
            a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), m._data(c, "submitBubbles", !0));
            });
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
                }), m._data(b, "changeBubbles", !0));
            });
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName);
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
            }
        };
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba; else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), 
            this.each(function() {
                m.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0;
        }
    });
    function da(a) {
        var b = ea.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c;
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: k.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, sa = da(y), ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, 
    ra.th = ra.td;
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([ a ], f) : f;
    }
    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked);
    }
    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
    }
    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = m.extend({}, g.data));
        }
    }
    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando);
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, 
            ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), 
            h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]); else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) if (f = a[q], 
            f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [ f ] : f); else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || [ "", "" ])[1].toLowerCase(), 
                l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], 
                e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), 
                !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, 
                    e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild;
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), 
            h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                e = 0;
                while (f = h[e++]) oa.test(f.type || "") && c.push(f);
            }
            return h = null, o;
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) if ((b || m.acceptData(d)) && (f = d[i], 
            g = f && j[f])) {
                if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, 
                c.push(f));
            }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), 
            c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b);
            });
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 
            1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), 
                f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], 
                oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null;
            }
            return this;
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), 
            m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e);
        };
    });
    var Ca, Da = {};
    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f;
    }
    function Fa(a) {
        var b = y, c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), 
        c = Ea(a, b), Ca.detach()), Da[a] = c), c;
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), 
            d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
            b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), 
            c.removeChild(d), a) : void 0;
        };
    }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), 
        Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
    }) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle;
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), 
        Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), 
        h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), 
        void 0 === g ? g : g + "" || "auto";
    });
    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, 
            b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", 
            k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, 
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g;
                },
                boxSizingReliable: function() {
                    return null == f && i(), f;
                },
                pixelPosition: function() {
                    return null == e && i(), e;
                },
                reliableMarginRight: function() {
                    return null == h && i(), h;
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
                d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, 
                f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), 
                b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
                i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
                g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", 
                g = 0 === i[0].offsetHeight), c.removeChild(d));
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ta = [ "Webkit", "O", "Moz", "ms" ];
    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
        while (e--) if (b = Ta[e] + c, b in a) return b;
        return d;
    }
    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), 
        (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), 
        d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), 
        "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g;
    }
    function Ya(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c;
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
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], 
                void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c;
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], 
            g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), 
            "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
        }
    }), m.each([ "height", "width" ], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d);
                }) : Ya(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [ a, "marginRight" ]) : void 0;
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa);
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Va(this, !0);
        },
        hide: function() {
            return Va(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide();
            });
        }
    });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e);
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Za.propHooks._default.set(this), this;
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, m.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ ib ], eb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    function fb() {
        return setTimeout(function() {
            $a = void 0;
        }), $a = m.now();
    }
    function gb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, 
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], ab.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0;
            }
            o[d] = r && r[d] || m.style(a, d);
        } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), 
            q ? m(a).show() : n.done(function() {
                m(a).hide();
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b]);
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++) if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    m.Animation = m.extend(kb, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? db.unshift(a) : db.push(a);
        }
    }), m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
        }, d;
    }, m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), m.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), m.timers = [], m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $a = void 0;
    }, m.fx.timer = function(a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }, m.fx.interval = 13, m.fx.start = function() {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval));
    }, m.fx.stop = function() {
        clearInterval(_a), _a = null;
    }, m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), 
        a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, 
        k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), 
        k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, 
        c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), 
        k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), 
        k.radioValue = "t" === a.value;
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c);
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0;
                    } catch (h) {
                        d.scrollHeight;
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e;
                }
            }
        }
    }), m.each([ "radio", "checkbox" ], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a);
            });
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void m.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), 
            a.removeAttribute(qb ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            ob[b] = f), e;
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
    }), rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c);
        }
    }), qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", 
            "value" === c || b === a.getAttribute(c) ? b : void 0;
        }
    }, ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0;
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c);
        }
    }, m.each([ "width", "height" ], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            }
        };
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {}
            });
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, 
            e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), k.hrefNormalized || m.each([ "href", "src" ], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), m.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        m.propFix[this.toLowerCase()] = this;
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), 
            c.async = "false", c.loadXML(b));
        } catch (e) {
            c = void 0;
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), 
        c;
    };
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href;
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href;
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Mb(a, b, c, d) {
        var e = {}, f = a === Ib;
        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a;
    }
    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
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
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2];
                        }
                        b = j[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), 
            Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), 
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), 
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, i.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), 
                w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), h && (n.trigger("ajaxComplete", [ v, k ]), --m.active || m.event.trigger("ajaxStop")));
            }
            return v;
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script");
        }
    }), m.each([ "get", "post" ], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b));
            } : function() {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
            }).end();
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a);
    };
    var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;
    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vb(a + "[" + e + "]", b[e], c, d);
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+");
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a));
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                };
            }).get();
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b();
    } : Zb;
    var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb) Xb[a](void 0, !0);
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, 
                        e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText;
                            } catch (k) {
                                i = "";
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                        }
                        j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b();
                },
                abort: function() {
                    b && b(void 0, !0);
                }
            };
        }
    });
    function Zb() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a;
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), 
                    b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, 
                        b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                    }, c.insertBefore(b, c.firstChild);
                },
                abort: function() {
                    b && b.onload(void 0, !0);
                }
            };
        }
    });
    var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a;
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = m.buildFragment([ a ], b, e), e && e.length && m(e).remove(), 
        m.merge([], d.childNodes));
    };
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, e || [ a.responseText, b, a ]);
        }), this;
    }, m.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var cc = a.document.documentElement;
    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), 
            i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [ f, i ]) > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), 
            null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b);
            });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), 
            c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), 
                c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc;
            });
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), m.each([ "top", "left" ], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0;
        });
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), m.fn.size = function() {
        return this.length;
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m;
    });
    var ec = a.jQuery, fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
    }, typeof b === K && (a.jQuery = a.$ = m), m;
});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing = jQuery.easing.swing;

jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a;
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a;
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a;
        }
        return -h / 2 * (--f * (f - 2) - 1) + a;
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a;
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a;
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a;
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a;
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a;
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a;
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a;
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a;
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a;
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
    },
    easeInExpo: function(e, f, a, h, g) {
        return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    },
    easeOutExpo: function(e, f, a, h, g) {
        return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a;
        }
        if (f == g) {
            return a + h;
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * .3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * .3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k / 2) == 2) {
            return e + l;
        }
        if (!j) {
            j = k * (.3 * 1.5);
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        if (h < 1) {
            return -.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * .5 + l + e;
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a;
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
        }
        return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < 1 / 2.75) {
            return h * (7.5625 * f * f) + a;
        } else {
            if (f < 2 / 2.75) {
                return h * (7.5625 * (f -= 1.5 / 2.75) * f + .75) + a;
            } else {
                if (f < 2.5 / 2.75) {
                    return h * (7.5625 * (f -= 2.25 / 2.75) * f + .9375) + a;
                } else {
                    return h * (7.5625 * (f -= 2.625 / 2.75) * f + .984375) + a;
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * .5 + a;
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * .5 + h * .5 + a;
    }
});

/*!
 * Midnight.js 1.1.0
 * jQuery plugin to switch between multiple fixed header designs on the fly, so it looks in line with the content below it.
 * http://aerolab.github.io/midnight.js/
 *
 * Copyright (c) 2014 Aerolab <info@aerolab.co>
 *
 * Released under the MIT license
 * http://aerolab.github.io/midnight.js/LICENSE.txt
 */
!function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
}(function(t) {
    var e = 0, s = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(s) {
            var i, n, o;
            for (o = 0; null != (n = s[o]); o++) try {
                i = t._data(n, "events"), i && i.remove && t(n).triggerHandler("remove");
            } catch (r) {}
            e(s);
        };
    }(t.cleanData), t.widget = function(e, s, i) {
        var n, o, r, a, h = {}, d = e.split(".")[0];
        return e = e.split(".")[1], n = d + "-" + e, i || (i = s, s = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
            return !!t.data(e, n);
        }, t[d] = t[d] || {}, o = t[d][e], r = t[d][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new r(t, e);
        }, t.extend(r, o, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }), a = new s(), a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
            return t.isFunction(i) ? void (h[e] = function() {
                var t = function() {
                    return s.prototype[e].apply(this, arguments);
                }, n = function(t) {
                    return s.prototype[e].apply(this, t);
                };
                return function() {
                    var e, s = this._super, o = this._superApply;
                    return this._super = t, this._superApply = n, e = i.apply(this, arguments), this._super = s, 
                    this._superApply = o, e;
                };
            }()) : void (h[e] = i);
        }), r.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e : e
        }, h, {
            constructor: r,
            namespace: d,
            widgetName: e,
            widgetFullName: n
        }), o ? (t.each(o._childConstructors, function(e, s) {
            var i = s.prototype;
            t.widget(i.namespace + "." + i.widgetName, r, s._proto);
        }), delete o._childConstructors) : s._childConstructors.push(r), t.widget.bridge(e, r), 
        r;
    }, t.widget.extend = function(e) {
        for (var i, n, o = s.call(arguments, 1), r = 0, a = o.length; a > r; r++) for (i in o[r]) n = o[r][i], 
        o[r].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
        return e;
    }, t.widget.bridge = function(e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var r = "string" == typeof o, a = s.call(arguments, 1), h = this;
            return o = !r && a.length ? t.widget.extend.apply(null, [ o ].concat(a)) : o, this.each(r ? function() {
                var s, i = t.data(this, n);
                return "instance" === o ? (h = i, !1) : i ? t.isFunction(i[o]) && "_" !== o.charAt(0) ? (s = i[o].apply(i, a), 
                s !== i && void 0 !== s ? (h = s && s.jquery ? h.pushStack(s.get()) : s, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'");
            } : function() {
                var e = t.data(this, n);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this));
            }), h;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(s, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
            this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy();
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), s), this._create(), 
            this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, s) {
            var i, n, o, r = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (r = {}, i = e.split("."), e = i.shift(), i.length) {
                for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; i.length - 1 > o; o++) n[i[o]] = n[i[o]] || {}, 
                n = n[i[o]];
                if (e = i.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                n[e] = s;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                r[e] = s;
            }
            return this._setOptions(r), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), 
            e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
            this;
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _on: function(e, s, i) {
            var n, o = this;
            "boolean" != typeof e && (i = s, s = e, e = !1), i ? (s = n = t(s), this.bindings = this.bindings.add(s)) : (i = s, 
            s = this.element, n = this.widget()), t.each(i, function(i, r) {
                function a() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0;
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var h = i.match(/^([\w:-]*)\s*(.*)$/), d = h[1] + o.eventNamespace, l = h[2];
                l ? n.delegate(l, d, a) : s.bind(d, a);
            });
        },
        _off: function(e, s) {
            s = (s || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            e.unbind(s).undelegate(s), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
            this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            function s() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments);
            }
            var i = this;
            return setTimeout(s, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(e, s, i) {
            var n, o, r = this.options[e];
            if (i = i || {}, s = t.Event(s), s.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            s.target = this.element[0], o = s.originalEvent) for (n in o) n in s || (s[n] = o[n]);
            return this.element.trigger(s, i), !(t.isFunction(r) && r.apply(this.element[0], [ s ].concat(i)) === !1 || s.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, s) {
        t.Widget.prototype["_" + e] = function(i, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, a = n ? n === !0 || "number" == typeof n ? s : n.effect || s : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), r = !t.isEmptyObject(n), n.complete = o, n.delay && i.delay(n.delay), r && t.effects && t.effects.effect[a] ? i[e](n) : a !== e && i[a] ? i[a](n.duration, n.easing, o) : i.queue(function(s) {
                t(this)[e](), o && o.call(i[0]), s();
            });
        };
    }), t.widget;
}), function(t) {
    "use strict";
    t.widget("aerolab.midnight", {
        options: {
            headerClass: "midnightHeader",
            innerClass: "midnightInner",
            defaultClass: "default",
            classPrefix: ""
        },
        _headers: {},
        _headerInfo: {
            top: 0,
            height: 0
        },
        _$sections: [],
        _sections: [],
        _scrollTop: 0,
        _documentHeight: 0,
        _transformMode: !1,
        refresh: function() {
            this._headerInfo = {
                top: 0,
                height: this.element.outerHeight()
            }, this._$sections = t("[data-midnight]"), this._sections = [], this._setupHeaders(), 
            this.recalculate();
        },
        _create: function() {
            var e = this;
            this._scrollTop = window.pageYOffset || document.documentElement.scrollTop, this._documentHeight = t(document).height(), 
            this._headers = {}, this._transformMode = this._getSupportedTransform(), this.refresh(), 
            setInterval(function() {
                e._recalculateSections();
            }, 1e3), t(window).resize(function() {
                e.recalculate();
            }).trigger("resize"), this._updateHeadersLoop();
        },
        recalculate: function() {
            this._recalculateSections(), this._updateHeaderHeight(), this._recalculateHeaders(), 
            this._updateHeaders();
        },
        _getSupportedTransform: function() {
            for (var t = [ "transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform" ], e = 0; e < t.length; e++) if (void 0 !== document.createElement("div").style[t[e]]) return t[e];
            return !1;
        },
        _getContainerHeight: function() {
            var e = this.element.find("> ." + this.options.headerClass), s = 0, i = 0, n = this;
            return e.length ? e.each(function() {
                var e = t(this), o = e.find("> ." + n.options.innerClass);
                o.length ? (o.css("bottom", "auto").css("overflow", "auto"), i = o.outerHeight(), 
                o.css("bottom", "0")) : (e.css("bottom", "auto"), i = e.outerHeight(), e.css("bottom", "0")), 
                s = i > s ? i : s;
            }) : s = i = this.element.outerHeight(), s;
        },
        _setupHeaders: function() {
            var e = this;
            this._headers[this.options.defaultClass] = {}, this._$sections.each(function() {
                var s = t(this), i = s.data("midnight");
                "string" == typeof i && (i = i.trim(), "" !== i && (e._headers[i] = {}));
            });
            ({
                top: this.element.css("padding-top"),
                right: this.element.css("padding-right"),
                bottom: this.element.css("padding-bottom"),
                left: this.element.css("padding-left")
            });
            this.element.css({
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                overflow: "hidden"
            }), this._updateHeaderHeight();
            var s = this.element.find("> ." + this.options.headerClass);
            s.length ? s.filter("." + this.options.defaultClass).length || s.filter("." + this.options.headerClass + ":first").clone(!0, !0).attr("class", this.options.headerClass + " " + this.options.defaultClass) : this.element.wrapInner('<div class="' + this.options.headerClass + " " + this.options.defaultClass + '"></div>');
            var s = this.element.find("> ." + this.options.headerClass), i = s.filter("." + this.options.defaultClass).clone(!0, !0);
            for (var n in this._headers) if (this._headers.hasOwnProperty(n) && "undefined" == typeof this._headers[n].element) {
                var o = s.filter("." + n);
                this._headers[n].element = o.length ? o : i.clone(!0, !0).removeClass(this.options.defaultClass).addClass(n).appendTo(this.element);
                var r = {
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                };
                this._headers[n].element.css(r), this._transformMode !== !1 && this._headers[n].element.css(this._transformMode, "translateZ(0)"), 
                this._headers[n].element.find("> ." + this.options.innerClass).length || this._headers[n].element.wrapInner('<div class="' + this.options.innerClass + '"></div>'), 
                this._headers[n].inner = this._headers[n].element.find("> ." + this.options.innerClass), 
                this._headers[n].inner.css(r), this._transformMode !== !1 && this._headers[n].inner.css(this._transformMode, "translateZ(0)"), 
                this._headers[n].from = "", this._headers[n].progress = 0;
            }
            s.each(function() {
                var s = t(this), i = !1;
                for (var n in e._headers) e._headers.hasOwnProperty(n) && s.hasClass(n) && (i = !0);
                s.find("> ." + e.options.innerClass).length || s.wrapInner('<div class="' + e.options.innerClass + '"></div>'), 
                i ? s.show() : s.hide();
            });
        },
        _recalculateHeaders: function() {
            this._scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop, 
            this._scrollTop = Math.max(this._scrollTop, 0), this._scrollTop = Math.min(this._scrollTop, this._documentHeight);
            var t = this._headerInfo.height, e = this._scrollTop + this._headerInfo.top, s = e + t;
            if ("function" == typeof window.getComputedStyle) {
                var i = window.getComputedStyle(this.element[0], null), n = 0, o = 0;
                if (this._transformMode !== !1 && "string" == typeof i.transform) {
                    var r = i.transform.match(/(-?[0-9\.]+)/g);
                    null !== r && r.length >= 6 && !isNaN(parseFloat(r[5])) && (o = parseFloat(r[5]));
                }
                i.top.indexOf("px") >= 0 && !isNaN(parseFloat(i.top)) && (n = parseFloat(i.top)), 
                e += n + o, s += n + o;
            }
            for (var a in this._headers) this._headers.hasOwnProperty(a) && (this._headers[a].from = "", 
            this._headers[a].progress = 0);
            for (var h = 0; h < this._sections.length; h++) s >= this._sections[h].start && e <= this._sections[h].end && (this._headers[this._sections[h].className].visible = !0, 
            e >= this._sections[h].start && s <= this._sections[h].end ? (this._headers[this._sections[h].className].from = "top", 
            this._headers[this._sections[h].className].progress += 1) : s > this._sections[h].end && e < this._sections[h].end ? (this._headers[this._sections[h].className].from = "top", 
            this._headers[this._sections[h].className].progress = 1 - (s - this._sections[h].end) / t) : s > this._sections[h].start && e < this._sections[h].start && ("top" === this._headers[this._sections[h].className].from ? this._headers[this._sections[h].className].progress += (s - this._sections[h].start) / t : (this._headers[this._sections[h].className].from = "bottom", 
            this._headers[this._sections[h].className].progress = (s - this._sections[h].start) / t)));
        },
        _updateHeaders: function() {
            if ("undefined" != typeof this._headers[this.options.defaultClass]) {
                var t = 0, e = "";
                for (var s in this._headers) this._headers.hasOwnProperty(s) && "" !== !this._headers[s].from && (t += this._headers[s].progress, 
                e = s);
                1 > t && ("" === this._headers[this.options.defaultClass].from ? (this._headers[this.options.defaultClass].from = "top" === this._headers[e].from ? "bottom" : "top", 
                this._headers[this.options.defaultClass].progress = 1 - t) : this._headers[this.options.defaultClass].progress += 1 - t);
                for (var i in this._headers) if (this._headers.hasOwnProperty(i) && "" !== !this._headers[i].from) {
                    var n = 100 * (1 - this._headers[i].progress);
                    n >= 100 && (n = 110), -100 >= n && (n = -110), "top" === this._headers[i].from ? this._transformMode !== !1 ? (this._headers[i].element[0].style[this._transformMode] = "translateY(-" + n + "%) translateZ(0)", 
                    this._headers[i].inner[0].style[this._transformMode] = "translateY(+" + n + "%) translateZ(0)") : (this._headers[i].element[0].style.top = "-" + n + "%", 
                    this._headers[i].inner[0].style.top = "+" + n + "%") : this._transformMode !== !1 ? (this._headers[i].element[0].style[this._transformMode] = "translateY(+" + n + "%) translateZ(0)", 
                    this._headers[i].inner[0].style[this._transformMode] = "translateY(-" + n + "%) translateZ(0)") : (this._headers[i].element[0].style.top = "+" + n + "%", 
                    this._headers[i].inner[0].style.top = "-" + n + "%");
                }
            }
        },
        _recalculateSections: function() {
            this._documentHeight = t(document).height(), this._sections = [];
            for (var e = 0; e < this._$sections.length; e++) {
                var s = t(this._$sections[e]);
                this._sections.push({
                    element: s,
                    className: s.data("midnight"),
                    start: s.offset().top,
                    end: s.offset().top + s.outerHeight()
                });
            }
        },
        _updateHeaderHeight: function() {
            this._headerInfo.height = this._getContainerHeight(), this.element.css("height", this._headerInfo.height + "px");
        },
        _updateHeadersLoop: function() {
            var t = this;
            this._requestAnimationFrame(function() {
                t._updateHeadersLoop();
            }), this._recalculateHeaders(), this._updateHeaders();
        },
        _requestAnimationFrame: function(t) {
            var e = e || function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                    window.setTimeout(t, 1e3 / 60);
                };
            }();
            e(t);
        }
    });
}(jQuery);

!function(e) {
    var t = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1e3,
        pagination: true,
        updateURL: false,
        keyboard: true,
        beforeMove: null,
        afterMove: null,
        loop: true,
        responsiveFallback: false,
        direction: "vertical"
    };
    e.fn.swipeEvents = function() {
        return this.each(function() {
            function i(e) {
                var i = e.originalEvent.touches;
                if (i && i.length) {
                    t = i[0].pageX;
                    n = i[0].pageY;
                    r.bind("touchmove", s);
                }
            }
            function s(e) {
                var i = e.originalEvent.touches;
                if (i && i.length) {
                    var o = t - i[0].pageX;
                    var u = n - i[0].pageY;
                    if (o >= 50) {
                        r.trigger("swipeLeft");
                    }
                    if (o <= -50) {
                        r.trigger("swipeRight");
                    }
                    if (u >= 50) {
                        r.trigger("swipeUp");
                    }
                    if (u <= -50) {
                        r.trigger("swipeDown");
                    }
                    if (Math.abs(o) >= 50 || Math.abs(u) >= 50) {
                        r.unbind("touchmove", s);
                    }
                }
            }
            var t, n, r = e(this);
            r.bind("touchstart", i);
        });
    };
    e.fn.onepage_scroll = function(n) {
        function o() {
            var t = false;
            var n = typeof r.responsiveFallback;
            if (n == "number") {
                t = e(window).width() < r.responsiveFallback;
            }
            if (n == "boolean") {
                t = r.responsiveFallback;
            }
            if (n == "function") {
                valFunction = r.responsiveFallback();
                t = valFunction;
                typeOFv = typeof t;
                if (typeOFv == "number") {
                    t = e(window).width() < valFunction;
                }
            }
            if (t) {
                e("body").addClass("disabled-onepage-scroll");
                e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
                i.swipeEvents().unbind("swipeDown swipeUp");
            } else {
                if (e("body").hasClass("disabled-onepage-scroll")) {
                    e("body").removeClass("disabled-onepage-scroll");
                    e("html, body, .wrapper").animate({
                        scrollTop: 0
                    }, "fast");
                }
                i.swipeEvents().bind("swipeDown", function(t) {
                    if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
                    i.moveUp();
                }).bind("swipeUp", function(t) {
                    if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
                    i.moveDown();
                });
                e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(e) {
                    e.preventDefault();
                    var t = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                    u(e, t);
                });
            }
        }
        function u(e, t) {
            deltaOfInterest = t;
            var n = new Date().getTime();
            if (n - lastAnimation < quietPeriod + r.animationTime) {
                e.preventDefault();
                return;
            }
            if (deltaOfInterest < 0) {
                i.moveDown();
            } else {
                i.moveUp();
            }
            lastAnimation = n;
        }
        var r = e.extend({}, t, n), i = e(this), s = e(r.sectionContainer);
        total = s.length, status = "off", topPos = 0, leftPos = 0, lastAnimation = 0, quietPeriod = 500, 
        paginationList = "";
        e.fn.transformPage = function(t, n, r) {
            if (typeof t.beforeMove == "function") t.beforeMove(r);
            if (e("html").hasClass("ie8")) {
                if (t.direction == "horizontal") {
                    var s = i.width() / 100 * n;
                    e(this).animate({
                        left: s + "px"
                    }, t.animationTime);
                } else {
                    var s = i.height() / 100 * n;
                    e(this).animate({
                        top: s + "px"
                    }, t.animationTime);
                }
            } else {
                e(this).css({
                    "-webkit-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-webkit-transition": "all " + t.animationTime + "ms " + t.easing,
                    "-moz-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-moz-transition": "all " + t.animationTime + "ms " + t.easing,
                    "-ms-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-ms-transition": "all " + t.animationTime + "ms " + t.easing,
                    transform: t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    transition: "all " + t.animationTime + "ms " + t.easing
                });
            }
            e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                if (typeof t.afterMove == "function") t.afterMove(r);
            });
        };
        e.fn.moveDown = function() {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index");
            current = e(r.sectionContainer + "[data-index='" + index + "']");
            next = e(r.sectionContainer + "[data-index='" + (index + 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = 0;
                    next = e(r.sectionContainer + "[data-index='1']");
                } else {
                    return;
                }
            } else {
                pos = index * 100 * -1;
            }
            if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
            }
            e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index + 1);
                history.pushState({}, document.title, n);
            }
            t.transformPage(r, pos, next.data("index"));
        };
        e.fn.moveUp = function() {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index");
            current = e(r.sectionContainer + "[data-index='" + index + "']");
            next = e(r.sectionContainer + "[data-index='" + (index - 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = (total - 1) * 100 * -1;
                    next = e(r.sectionContainer + "[data-index='" + total + "']");
                } else {
                    return;
                }
            } else {
                pos = (next.data("index") - 1) * 100 * -1;
            }
            if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
            }
            e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index - 1);
                history.pushState({}, document.title, n);
            }
            t.transformPage(r, pos, next.data("index"));
        };
        e.fn.moveTo = function(t) {
            current = e(r.sectionContainer + ".active");
            next = e(r.sectionContainer + "[data-index='" + t + "']");
            if (next.length > 0) {
                if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
                current.removeClass("active");
                next.addClass("active");
                e(".onepage-pagination li a" + ".active").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + t + "']").addClass("active");
                e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                e("body").addClass("viewing-page-" + next.data("index"));
                pos = (t - 1) * 100 * -1;
                if (history.replaceState && r.updateURL == true) {
                    var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (t - 1);
                    history.pushState({}, document.title, n);
                }
                i.transformPage(r, pos, t);
            }
        };
        i.addClass("onepage-wrapper").css("position", "relative");
        e.each(s, function(t) {
            e(this).css({
                position: "absolute",
                top: topPos + "%"
            }).addClass("section").attr("data-index", t + 1);
            e(this).css({
                position: "absolute",
                left: r.direction == "horizontal" ? leftPos + "%" : 0,
                top: r.direction == "vertical" || r.direction != "horizontal" ? topPos + "%" : 0
            });
            if (r.direction == "horizontal") leftPos = leftPos + 100; else topPos = topPos + 100;
            if (r.pagination == true) {
                paginationList += "<li><a data-index='" + (t + 1) + "' href='#" + (t + 1) + "'></a></li>";
            }
        });
        i.swipeEvents().bind("swipeDown", function(t) {
            if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
            i.moveUp();
        }).bind("swipeUp", function(t) {
            if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
            i.moveDown();
        });
        if (r.pagination == true) {
            if (e("ul.onepage-pagination").length < 1) e("<ul class='onepage-pagination'></ul>").prependTo("body");
            if (r.direction == "horizontal") {
                posLeft = i.find(".onepage-pagination").width() / 2 * -1;
                i.find(".onepage-pagination").css("margin-left", posLeft);
            } else {
                posTop = i.find(".onepage-pagination").height() / 2 * -1;
                i.find(".onepage-pagination").css("margin-top", posTop);
            }
            e("ul.onepage-pagination").html(paginationList);
        }
        if (window.location.hash != "" && window.location.hash != "#1") {
            init_index = window.location.hash.replace("#", "");
            if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
                e(r.sectionContainer + "[data-index='" + init_index + "']").addClass("active");
                e("body").addClass("viewing-page-" + init_index);
                if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                next = e(r.sectionContainer + "[data-index='" + init_index + "']");
                if (next) {
                    next.addClass("active");
                    if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                    e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                    e("body").addClass("viewing-page-" + next.data("index"));
                    if (history.replaceState && r.updateURL == true) {
                        var a = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + init_index;
                        history.pushState({}, document.title, a);
                    }
                }
                pos = (init_index - 1) * 100 * -1;
                i.transformPage(r, pos, init_index);
            } else {
                e(r.sectionContainer + "[data-index='1']").addClass("active");
                e("body").addClass("viewing-page-1");
                if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='1']").addClass("active");
            }
        } else {
            e(r.sectionContainer + "[data-index='1']").addClass("active");
            e("body").addClass("viewing-page-1");
            if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='1']").addClass("active");
        }
        if (r.pagination == true) {
            e(".onepage-pagination li a").click(function() {
                var t = e(this).data("index");
                i.moveTo(t);
            });
        }
        e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(t) {
            t.preventDefault();
            var n = t.originalEvent.wheelDelta || -t.originalEvent.detail;
            if (!e("body").hasClass("disabled-onepage-scroll")) u(t, n);
        });
        if (r.responsiveFallback != false) {
            e(window).resize(function() {
                o();
            });
            o();
        }
        if (r.keyboard == true) {
            e(document).keydown(function(t) {
                var n = t.target.tagName.toLowerCase();
                if (!e("body").hasClass("disabled-onepage-scroll")) {
                    switch (t.which) {
                      case 38:
                        if (n != "input" && n != "textarea") i.moveUp();
                        break;

                      case 40:
                        if (n != "input" && n != "textarea") i.moveDown();
                        break;

                      case 32:
                        if (n != "input" && n != "textarea") i.moveDown();
                        break;

                      case 33:
                        if (n != "input" && n != "textarea") i.moveUp();
                        break;

                      case 34:
                        if (n != "input" && n != "textarea") i.moveDown();
                        break;

                      case 36:
                        i.moveTo(1);
                        break;

                      case 35:
                        i.moveTo(total);
                        break;

                      default:
                        return;
                    }
                }
            });
        }
        return false;
    };
}(window.jQuery);

(function($, window, document, undefined) {
    // Strict Mode
    "use strict";
    // Constants
    var NAME = "parallax";
    var MAGIC_NUMBER = 30;
    var DEFAULTS = {
        relativeInput: false,
        clipRelativeInput: false,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    function Plugin(element, options) {
        // DOM Context
        this.element = element;
        // Selections
        this.$context = $(element).data("api", this);
        this.$layers = this.$context.find(".layer");
        // Data Extraction
        var data = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        // Delete Null Data Values
        for (var key in data) {
            if (data[key] === null) delete data[key];
        }
        // Compose Settings Object
        $.extend(this, DEFAULTS, options, data);
        // States
        this.calibrationTimer = null;
        this.calibrationFlag = true;
        this.enabled = false;
        this.depths = [];
        this.raf = null;
        // Element Bounds
        this.bounds = null;
        this.ex = 0;
        this.ey = 0;
        this.ew = 0;
        this.eh = 0;
        // Element Center
        this.ecx = 0;
        this.ecy = 0;
        // Element Range
        this.erx = 0;
        this.ery = 0;
        // Calibration
        this.cx = 0;
        this.cy = 0;
        // Input
        this.ix = 0;
        this.iy = 0;
        // Motion
        this.mx = 0;
        this.my = 0;
        // Velocity
        this.vx = 0;
        this.vy = 0;
        // Callbacks
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
        this.onOrientationTimer = this.onOrientationTimer.bind(this);
        this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
        this.onAnimationFrame = this.onAnimationFrame.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
        // Initialise
        this.initialise();
    }
    Plugin.prototype.transformSupport = function(value) {
        var element = document.createElement("div");
        var propertySupport = false;
        var propertyValue = null;
        var featureSupport = false;
        var cssProperty = null;
        var jsProperty = null;
        for (var i = 0, l = this.vendors.length; i < l; i++) {
            if (this.vendors[i] !== null) {
                cssProperty = this.vendors[i][0] + "transform";
                jsProperty = this.vendors[i][1] + "Transform";
            } else {
                cssProperty = "transform";
                jsProperty = "transform";
            }
            if (element.style[jsProperty] !== undefined) {
                propertySupport = true;
                break;
            }
        }
        switch (value) {
          case "2D":
            featureSupport = propertySupport;
            break;

          case "3D":
            if (propertySupport) {
                var body = document.body || document.createElement("body");
                var documentElement = document.documentElement;
                var documentOverflow = documentElement.style.overflow;
                if (!document.body) {
                    documentElement.style.overflow = "hidden";
                    documentElement.appendChild(body);
                    body.style.overflow = "hidden";
                    body.style.background = "";
                }
                body.appendChild(element);
                element.style[jsProperty] = "translate3d(1px,1px,1px)";
                propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== "none";
                documentElement.style.overflow = documentOverflow;
                body.removeChild(element);
            }
            break;
        }
        return featureSupport;
    };
    Plugin.prototype.ww = null;
    Plugin.prototype.wh = null;
    Plugin.prototype.wcx = null;
    Plugin.prototype.wcy = null;
    Plugin.prototype.wrx = null;
    Plugin.prototype.wry = null;
    Plugin.prototype.portrait = null;
    Plugin.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    Plugin.prototype.vendors = [ null, [ "-webkit-", "webkit" ], [ "-moz-", "Moz" ], [ "-o-", "O" ], [ "-ms-", "ms" ] ];
    Plugin.prototype.motionSupport = !!window.DeviceMotionEvent;
    Plugin.prototype.orientationSupport = !!window.DeviceOrientationEvent;
    Plugin.prototype.orientationStatus = 0;
    Plugin.prototype.transform2DSupport = Plugin.prototype.transformSupport("2D");
    Plugin.prototype.transform3DSupport = Plugin.prototype.transformSupport("3D");
    Plugin.prototype.propertyCache = {};
    Plugin.prototype.initialise = function() {
        // Configure Styles
        if (this.$context.css("position") === "static") {
            this.$context.css({
                position: "relative"
            });
        }
        // Hardware Accelerate Context
        this.accelerate(this.$context);
        // Setup
        this.updateLayers();
        this.updateDimensions();
        this.enable();
        this.queueCalibration(this.calibrationDelay);
    };
    Plugin.prototype.updateLayers = function() {
        // Cache Layer Elements
        this.$layers = this.$context.find(".layer");
        this.depths = [];
        // Configure Layer Styles
        this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        });
        this.$layers.first().css({
            position: "relative"
        });
        // Hardware Accelerate Layers
        this.accelerate(this.$layers);
        // Cache Depths
        this.$layers.each($.proxy(function(index, element) {
            this.depths.push($(element).data("depth") || 0);
        }, this));
    };
    Plugin.prototype.updateDimensions = function() {
        this.ww = window.innerWidth;
        this.wh = window.innerHeight;
        this.wcx = this.ww * this.originX;
        this.wcy = this.wh * this.originY;
        this.wrx = Math.max(this.wcx, this.ww - this.wcx);
        this.wry = Math.max(this.wcy, this.wh - this.wcy);
    };
    Plugin.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect();
        this.ex = this.bounds.left;
        this.ey = this.bounds.top;
        this.ew = this.bounds.width;
        this.eh = this.bounds.height;
        this.ecx = this.ew * this.originX;
        this.ecy = this.eh * this.originY;
        this.erx = Math.max(this.ecx, this.ew - this.ecx);
        this.ery = Math.max(this.ecy, this.eh - this.ecy);
    };
    Plugin.prototype.queueCalibration = function(delay) {
        clearTimeout(this.calibrationTimer);
        this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    };
    Plugin.prototype.enable = function() {
        if (!this.enabled) {
            this.enabled = true;
            if (this.orientationSupport) {
                this.portrait = null;
                window.addEventListener("deviceorientation", this.onDeviceOrientation);
                setTimeout(this.onOrientationTimer, this.supportDelay);
            } else {
                this.cx = 0;
                this.cy = 0;
                this.portrait = false;
                window.addEventListener("mousemove", this.onMouseMove);
            }
            window.addEventListener("resize", this.onWindowResize);
            this.raf = requestAnimationFrame(this.onAnimationFrame);
        }
    };
    Plugin.prototype.disable = function() {
        if (this.enabled) {
            this.enabled = false;
            if (this.orientationSupport) {
                window.removeEventListener("deviceorientation", this.onDeviceOrientation);
            } else {
                window.removeEventListener("mousemove", this.onMouseMove);
            }
            window.removeEventListener("resize", this.onWindowResize);
            cancelAnimationFrame(this.raf);
        }
    };
    Plugin.prototype.calibrate = function(x, y) {
        this.calibrateX = x === undefined ? this.calibrateX : x;
        this.calibrateY = y === undefined ? this.calibrateY : y;
    };
    Plugin.prototype.invert = function(x, y) {
        this.invertX = x === undefined ? this.invertX : x;
        this.invertY = y === undefined ? this.invertY : y;
    };
    Plugin.prototype.friction = function(x, y) {
        this.frictionX = x === undefined ? this.frictionX : x;
        this.frictionY = y === undefined ? this.frictionY : y;
    };
    Plugin.prototype.scalar = function(x, y) {
        this.scalarX = x === undefined ? this.scalarX : x;
        this.scalarY = y === undefined ? this.scalarY : y;
    };
    Plugin.prototype.limit = function(x, y) {
        this.limitX = x === undefined ? this.limitX : x;
        this.limitY = y === undefined ? this.limitY : y;
    };
    Plugin.prototype.origin = function(x, y) {
        this.originX = x === undefined ? this.originX : x;
        this.originY = y === undefined ? this.originY : y;
    };
    Plugin.prototype.clamp = function(value, min, max) {
        value = Math.max(value, min);
        value = Math.min(value, max);
        return value;
    };
    Plugin.prototype.css = function(element, property, value) {
        var jsProperty = this.propertyCache[property];
        if (!jsProperty) {
            for (var i = 0, l = this.vendors.length; i < l; i++) {
                if (this.vendors[i] !== null) {
                    jsProperty = $.camelCase(this.vendors[i][1] + "-" + property);
                } else {
                    jsProperty = property;
                }
                if (element.style[jsProperty] !== undefined) {
                    this.propertyCache[property] = jsProperty;
                    break;
                }
            }
        }
        element.style[jsProperty] = value;
    };
    Plugin.prototype.accelerate = function($element) {
        for (var i = 0, l = $element.length; i < l; i++) {
            var element = $element[i];
            this.css(element, "transform", "translate3d(0,0,0)");
            this.css(element, "transform-style", "preserve-3d");
            this.css(element, "backface-visibility", "hidden");
        }
    };
    Plugin.prototype.setPosition = function(element, x, y) {
        x += "px";
        y += "px";
        if (this.transform3DSupport) {
            this.css(element, "transform", "translate3d(" + x + "," + y + ",0)");
        } else if (this.transform2DSupport) {
            this.css(element, "transform", "translate(" + x + "," + y + ")");
        } else {
            element.style.left = x;
            element.style.top = y;
        }
    };
    Plugin.prototype.onOrientationTimer = function(event) {
        if (this.orientationSupport && this.orientationStatus === 0) {
            this.disable();
            this.orientationSupport = false;
            this.enable();
        }
    };
    Plugin.prototype.onCalibrationTimer = function(event) {
        this.calibrationFlag = true;
    };
    Plugin.prototype.onWindowResize = function(event) {
        this.updateDimensions();
    };
    Plugin.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var dx = this.ix - this.cx;
        var dy = this.iy - this.cy;
        if (Math.abs(dx) > this.calibrationThreshold || Math.abs(dy) > this.calibrationThreshold) {
            this.queueCalibration(0);
        }
        if (this.portrait) {
            this.mx = this.calibrateX ? dy : this.iy;
            this.my = this.calibrateY ? dx : this.ix;
        } else {
            this.mx = this.calibrateX ? dx : this.ix;
            this.my = this.calibrateY ? dy : this.iy;
        }
        this.mx *= this.ew * (this.scalarX / 100);
        this.my *= this.eh * (this.scalarY / 100);
        if (!isNaN(parseFloat(this.limitX))) {
            this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
        }
        if (!isNaN(parseFloat(this.limitY))) {
            this.my = this.clamp(this.my, -this.limitY, this.limitY);
        }
        this.vx += (this.mx - this.vx) * this.frictionX;
        this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, l = this.$layers.length; i < l; i++) {
            var depth = this.depths[i];
            var layer = this.$layers[i];
            var xOffset = this.vx * depth * (this.invertX ? -1 : 1);
            var yOffset = this.vy * depth * (this.invertY ? -1 : 1);
            this.setPosition(layer, xOffset, yOffset);
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame);
    };
    Plugin.prototype.onDeviceOrientation = function(event) {
        // Validate environment and event properties.
        if (!this.desktop && event.beta !== null && event.gamma !== null) {
            // Set orientation status.
            this.orientationStatus = 1;
            // Extract Rotation
            var x = (event.beta || 0) / MAGIC_NUMBER;
            //  -90 :: 90
            var y = (event.gamma || 0) / MAGIC_NUMBER;
            // -180 :: 180
            // Detect Orientation Change
            var portrait = window.innerHeight > window.innerWidth;
            if (this.portrait !== portrait) {
                this.portrait = portrait;
                this.calibrationFlag = true;
            }
            // Set Calibration
            if (this.calibrationFlag) {
                this.calibrationFlag = false;
                this.cx = x;
                this.cy = y;
            }
            // Set Input
            this.ix = x;
            this.iy = y;
        }
    };
    Plugin.prototype.onMouseMove = function(event) {
        // Cache mouse coordinates.
        var clientX = event.clientX;
        var clientY = event.clientY;
        // Calculate Mouse Input
        if (!this.orientationSupport && this.relativeInput) {
            // Clip mouse coordinates inside element bounds.
            if (this.clipRelativeInput) {
                clientX = Math.max(clientX, this.ex);
                clientX = Math.min(clientX, this.ex + this.ew);
                clientY = Math.max(clientY, this.ey);
                clientY = Math.min(clientY, this.ey + this.eh);
            }
            // Calculate input relative to the element.
            this.ix = (clientX - this.ex - this.ecx) / this.erx;
            this.iy = (clientY - this.ey - this.ecy) / this.ery;
        } else {
            // Calculate input relative to the window.
            this.ix = (clientX - this.wcx) / this.wrx;
            this.iy = (clientY - this.wcy) / this.wry;
        }
    };
    var API = {
        enable: Plugin.prototype.enable,
        disable: Plugin.prototype.disable,
        updateLayers: Plugin.prototype.updateLayers,
        calibrate: Plugin.prototype.calibrate,
        friction: Plugin.prototype.friction,
        invert: Plugin.prototype.invert,
        scalar: Plugin.prototype.scalar,
        limit: Plugin.prototype.limit,
        origin: Plugin.prototype.origin
    };
    $.fn[NAME] = function(value) {
        var args = arguments;
        return this.each(function() {
            var $this = $(this);
            var plugin = $this.data(NAME);
            if (!plugin) {
                plugin = new Plugin(this, value);
                $this.data(NAME, plugin);
            }
            if (API[value]) {
                plugin[value].apply(plugin, Array.prototype.slice.call(args, 1));
            }
        });
    };
})(window.jQuery || window.Zepto, window, document);

(function(g) {
    var p = this, n, e = false, r = 0, l = 0, i = 0, s = 0, f, t, a = null, o = .97, q = 0, h = 1, m = .1, c = .1;
    var b = function(v) {
        l += v;
        q += (l - i) * h;
        i = l;
    };
    var u = function() {
        if (q < -m || q > m) {
            r = r + q;
            if (r > s) {
                r = q = 0;
            } else {
                if (r < f) {
                    q = 0;
                    r = f;
                }
            }
            n.scrollTop(-r);
            q *= o;
            if (a) {
                a();
            }
        }
    };
    var d = function() {
        if (!e) {
            return;
        }
        requestAnimFrame(d);
        u();
    };
    var k = function(x) {
        x.preventDefault();
        var v = x.originalEvent;
        var y = v.detail ? v.detail * -1 : v.wheelDelta / 40;
        var w = y < 0 ? -1 : 1;
        if (w != t) {
            q = 0;
            t = w;
        }
        r = -n.scrollTop();
        b(y);
    };
    window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(v) {
            window.setTimeout(v, 1e3 / 60);
        };
    }();
    var j = function() {
        var v = [], w = null, x = 30;
        return function(B) {
            if (B == 0) {
                return B;
            }
            if (w != null) {
                return B * w;
            }
            var y = Math.abs(B);
            outer: do {
                for (var A = 0; A < v.length; ++A) {
                    if (y <= v[A]) {
                        v.splice(A, 0, y);
                        break outer;
                    }
                }
                v.push(y);
            } while (false);
            var z = x / v[Math.floor(v.length / 3)];
            if (v.length == 500) {
                w = z;
            }
            return B * z;
        };
    }();
    g.fn.smoothWheel = function() {
        var v = jQuery.extend({}, arguments[0]);
        return this.each(function(w, x) {
            if (!("ontouchstart" in window)) {
                n = g(this);
                n.bind("mousewheel", k);
                n.bind("DOMMouseScroll", k);
                l = i = n.get(0).scrollTop;
                r = -l;
                f = n.get(0).clientHeight - n.get(0).scrollHeight;
                if (v.onRender) {
                    a = v.onRender;
                }
                if (v.remove) {
                    log("122", "smoothWheel", "remove", "");
                    e = false;
                    n.unbind("mousewheel", k);
                    n.unbind("DOMMouseScroll", k);
                } else {
                    if (!e) {
                        e = true;
                        d();
                    }
                }
            }
        });
    };
})(jQuery);

String.prototype.rightChars = function(n) {
    if (n <= 0) {
        return "";
    } else if (n > this.length) {
        return this;
    } else {
        return this.substring(this.length, this.length - n);
    }
};

(function($) {
    var options = {
        highlightSpeed: 60,
        typeSpeed: 100,
        clearDelay: 500,
        typeDelay: 200,
        clearOnHighlight: true,
        typerDataAttr: "data-typer-targets",
        typerInterval: 1200,
        highlightColor: "rgba(255, 255, 255, 0.99)",
        // set to null if not customized
        textColor: "#1f142f",
        // set to null if not customized
        initialDelay: 600
    }, highlight, clearText, backspace, type, spanWithColor, clearDelay, typeDelay, clearData, isNumber, typeWithAttribute, getHighlightInterval, getTypeInterval, typerInterval;
    spanWithColor = function(color, backgroundColor) {
        if (color === "rgba(255, 255, 255, 0)") {
            color = "rgb(0, 0, 0)";
        }
        var $h3 = $("h3#subline");
        $h3.addClass("hasSpan");
        return $("<span></span>").css("color", color).css("background-color", backgroundColor);
    };
    isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    clearData = function($e) {
        $e.removeData([ "typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing" ]);
    };
    type = function($e) {
        var // position = $e.data('typePosition'),
        text = $e.data("text"), oldLeft = $e.data("oldLeft"), oldRight = $e.data("oldRight");
        // if (!isNumber(position)) {
        // position = $e.data('leftStop');
        // }
        if (!text || text.length === 0) {
            clearData($e);
            return;
        }
        $e.text(oldLeft + text.charAt(0) + oldRight).data({
            oldLeft: oldLeft + text.charAt(0),
            text: text.substring(1)
        });
        // $e.text($e.text() + text.substring(position, position + 1));
        // $e.data('typePosition', position + 1);
        setTimeout(function() {
            type($e);
        }, getTypeInterval());
    };
    clearText = function($e) {
        $e.find("span").remove();
        $e.removeClass("hasSpan");
        setTimeout(function() {
            type($e);
        }, typeDelay());
    };
    highlight = function($e) {
        var position = $e.data("highlightPosition"), leftText, highlightedText, rightText;
        if (!isNumber(position)) {
            position = $e.data("rightStop") + 1;
        }
        if (position <= $e.data("leftStop")) {
            setTimeout(function() {
                clearText($e);
            }, clearDelay());
            return;
        }
        leftText = $e.text().substring(0, position - 1);
        highlightedText = $e.text().substring(position - 1, $e.data("rightStop") + 1);
        rightText = $e.text().substring($e.data("rightStop") + 1);
        $e.html(leftText).append(spanWithColor($e.data("backgroundColor"), $e.data("primaryColor")).append(highlightedText)).append(rightText);
        $e.data("highlightPosition", position - 1);
        setTimeout(function() {
            return highlight($e);
        }, getHighlightInterval());
    };
    typeWithAttribute = function($e) {
        var targets;
        if ($e.data("typing")) {
            return;
        }
        try {
            targets = JSON.parse($e.attr($.typer.options.typerDataAttr)).targets;
        } catch (e) {}
        if (typeof targets === "undefined") {
            targets = $.map($e.attr($.typer.options.typerDataAttr).split(","), function(e) {
                return $.trim(e);
            });
        }
        $e.typeTo(targets[Math.floor(Math.random() * targets.length)]);
    };
    // Expose our options to the world.
    $.typer = function() {
        return {
            options: options
        };
    }();
    $.extend($.typer, {
        options: options
    });
    //-- Methods to attach to jQuery sets
    $.fn.typer = function() {
        var $elements = $(this);
        return $elements.each(function() {
            var $e = $(this);
            if (typeof $e.attr($.typer.options.typerDataAttr) === "undefined") {
                return;
            }
            typeWithAttribute($e);
            setInterval(function() {
                typeWithAttribute($e);
            }, typerInterval());
        });
    };
    $.fn.typeTo = function(newString) {
        var $e = $(this), currentText = $e.text(), i = 0, j = 0;
        if (currentText === newString) {
            return $e;
        }
        if (currentText !== $e.html()) {
            return $e;
        }
        $e.data("typing", true);
        while (currentText.charAt(i) === newString.charAt(i)) {
            i++;
        }
        while (currentText.rightChars(j) === newString.rightChars(j)) {
            j++;
        }
        newString = newString.substring(i, newString.length - j + 1);
        $e.data({
            oldLeft: currentText.substring(0, i),
            oldRight: currentText.rightChars(j - 1),
            leftStop: i,
            rightStop: currentText.length - j,
            primaryColor: $.typer.options.highlightColor || $e.css("color"),
            backgroundColor: $.typer.options.textColor || $e.css("background-color"),
            text: newString
        });
        var initDelay = function() {
            highlight($e);
            return $e;
        };
        window.setTimeout(initDelay, $.typer.options.initialDelay);
    };
    //-- Helper methods. These can one day be customized further to include things like ranges of delays.
    getHighlightInterval = function() {
        return $.typer.options.highlightSpeed;
    };
    getTypeInterval = function() {
        return $.typer.options.typeSpeed;
    }, clearDelay = function() {
        return $.typer.options.clearDelay;
    }, typeDelay = function() {
        return $.typer.options.typeDelay;
    };
    typerInterval = function() {
        return $.typer.options.typerInterval;
    };
})(jQuery);

// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t) return e;
        }
        return -1;
    }, e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", [ "jquery" ], function(n) {
                return e(n, t);
            });
        } else {
            return e(t.jQuery, t);
        }
    })(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false;
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle);
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false;
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle);
                    }
                });
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh");
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e);
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e);
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset;
                    });
                    if (!o) {
                        l.reverse();
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([ i ]);
                        }
                    });
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                };
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element);
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100);
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return;
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([ e.backward ]);
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([ e.forward ]);
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([ e.forward ]);
                        }
                    });
                });
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([ p, y ].join(" "));
                    return delete a[this.id];
                }
            };
            return t;
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height();
                        }
                        return t - n(this).outerHeight();
                    };
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i);
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return;
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t);
                }
                if (this.options.triggerOnce) {
                    return this.destroy();
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false;
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true;
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty();
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return [];
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t];
                });
            };
            return t;
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) {
                    e = {};
                }
                if ((r = e.handler) == null) {
                    e.handler = t;
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i);
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i);
                    }
                    return new l(t, r, e);
                });
                n[m]("refresh");
                return this;
            },
            disable: function() {
                return d._invoke(this, "disable");
            },
            enable: function() {
                return d._invoke(this, "enable");
            },
            destroy: function() {
                return d._invoke(this, "destroy");
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1]);
                    }
                });
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1]);
                    }
                });
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical";
                }
                if (e == null) {
                    e = r;
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t]);
                });
                return this.pushStack(o);
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true;
                    });
                });
                return this;
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t);
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments);
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [ null, r ]);
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.");
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.");
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh();
                });
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height();
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
                }
                if (!e) {
                    return [];
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e);
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset;
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element;
                    });
                    return r[t] = n.unique(r[t]);
                });
                return r;
            },
            above: function(t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y;
                });
            },
            below: function(t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y;
                });
            },
            left: function(t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x;
                });
            },
            right: function(t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x;
                });
            },
            enable: function() {
                return h._invoke("enable");
            },
            disable: function() {
                return h._invoke("disable");
            },
            destroy: function() {
                return h._invoke("destroy");
            },
            extendFn: function(t, e) {
                return d[t] = e;
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true;
                });
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return [];
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e);
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset;
                });
                return n.map(o, function(t) {
                    return t.element;
                });
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t);
            } else {
                return h.aggregate.call(null, n);
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh");
        });
    });
}).call(this);

/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1;
    };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a;
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), 
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), 
            e.eventType = a) : e.eventName = a, e;
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
        }, a;
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = [];
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b];
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
        }, a;
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), 
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a;
    }()), d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase();
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null;
        }, this;
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), 
            this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), 
            this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c(), 
            this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), 
            this.finished = [];
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, 
                c = d.length; c > a; a++) b = d[a], e.push(b);
                return e;
            }.call(this), this.all = function() {
                var a, c, d, e;
                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                return e;
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e = this.boxes, 
            c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), 
            this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), 
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], 
                        d.push(this.doSync(e));
                        return d;
                    }.call(a));
                    return g;
                };
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0;
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), 
            this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
        }, e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0;
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), 
                f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), 
                this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), 
                f.push(this.scrolled = !0)) : f.push(void 0);
                return f;
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, 
            null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), 
            this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), 
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), 
            a;
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), 
            e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e);
                };
            }(this));
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a);
            } : function(a) {
                return a();
            };
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e;
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, 
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0;
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", 
            c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a;
        }, e.prototype.vendors = [ "moz", "webkit" ], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h;
            }.call(this));
            return d;
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], 
            g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g;
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText;
            } catch (c) {
                b = d(a).getPropertyValue("animation-name");
            }
            return "none" === b ? "" : b;
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a));
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a);
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0;
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e;
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; ) b += a.offsetTop;
            return b;
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, 
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), 
            b = d + a.clientHeight, e >= d && b >= f;
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b();
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, e;
    }();
}).call(this);

/**
 * cbpFixedScrollLayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpFixedScrollLayout = function() {
    // cache and initialize some values
    function init(config) {
        // click on a navigation link: the body is scrolled to the position of the respective section
        config.$navlinks.on("click", function() {
            scrollAnim(config.$sections.eq($(this).index()).offset().top, config);
            return false;
        });
        config.$navlinksBlack.on("click", function() {
            scrollAnim(config.$sections.eq($(this).index()).offset().top, config);
            return false;
        });
        // 2 waypoints defined:
        // First one when we scroll down: the current navigation link gets updated. 
        // A `new section´ is reached when it occupies more than 70% of the viewport
        // Second one when we scroll up: the current navigation link gets updated. 
        // A `new section´ is reached when it occupies more than 70% of the viewport
        config.$sections.waypoint(function(direction) {
            if (direction === "down") {
                changeNav($(this), config);
            }
        }, {
            offset: "30%"
        }).waypoint(function(direction) {
            if (direction === "up") {
                changeNav($(this), config);
            }
        }, {
            offset: "-30%"
        });
        // on window resize: the body is scrolled to the position of the current section
        $(window).on("debouncedresize", function() {
            scrollAnim(config.$sections.eq(config.currentLink).offset().top, config);
        });
    }
    // update the current navigation link
    function changeNav($section, config) {
        config.$navlinks.eq(config.currentLink).removeClass("cbp-fbcurrent");
        config.$navlinksBlack.eq(config.currentLink).removeClass("cbp-fbcurrent");
        config.currentLink = $section.index("section");
        config.$navlinks.eq(config.currentLink).addClass("cbp-fbcurrent");
        config.$navlinksBlack.eq(config.currentLink).addClass("cbp-fbcurrent");
    }
    // function to scroll / animate the body
    function scrollAnim(top, config) {
        config.$body.stop().animate({
            scrollTop: top
        }, config.animspeed, config.animeasing);
    }
    return {
        init: init
    };
}();

!function() {
    function a(b) {
        if (!(this instanceof a)) return null == b ? new a() : new a(b);
        if ("function" == typeof b) return this.random = b, this;
        var c;
        arguments.length && (this.seed = 0);
        for (var d = 0; d < arguments.length; d++) {
            if (c = 0, "string" == typeof arguments[d]) for (var e = 0; e < arguments[d].length; e++) c += (arguments[d].length - e) * arguments[d].charCodeAt(e); else c = arguments[d];
            this.seed += (arguments.length - d) * c;
        }
        return this.mt = this.mersenne_twister(this.seed), this.bimd5 = this.blueimp_md5(), 
        this.random = function() {
            return this.mt.random(this.seed);
        }, this;
    }
    function b(a, b) {
        if (a || (a = {}), b) for (var c in b) "undefined" == typeof a[c] && (a[c] = b[c]);
        return a;
    }
    function c(a, b) {
        if (a) throw new RangeError(b);
    }
    function d(a) {
        return function() {
            return this.natural(a);
        };
    }
    function e(a, b) {
        for (var c, d = r(a), e = 0, f = d.length; f > e; e++) c = d[e], b[c] = a[c] || b[c];
    }
    function f(a, b) {
        for (var c = 0, d = a.length; d > c; c++) b[c] = a[c];
    }
    function g(a, b) {
        var c = Array.isArray(a), d = b || (c ? new Array(a.length) : {});
        return c ? f(a, d) : e(a, d), d;
    }
    var h = 9007199254740992, i = -h, j = "0123456789", k = "abcdefghijklmnopqrstuvwxyz", l = k.toUpperCase(), m = j + "abcdef", n = Array.prototype.slice;
    a.prototype.VERSION = "0.7.6";
    var o = function() {
        throw new Error("No Base64 encoder available.");
    };
    !function() {
        "function" == typeof btoa ? o = btoa : "function" == typeof Buffer && (o = function(a) {
            return new Buffer(a).toString("base64");
        });
    }(), a.prototype.bool = function(a) {
        return a = b(a, {
            likelihood: 50
        }), c(a.likelihood < 0 || a.likelihood > 100, "Chance: Likelihood accepts values from 0 to 100."), 
        100 * this.random() < a.likelihood;
    }, a.prototype.character = function(a) {
        a = b(a), c(a.alpha && a.symbols, "Chance: Cannot specify both alpha and symbols.");
        var d, e, f = "!@#$%^&*()[]";
        return d = "lower" === a.casing ? k : "upper" === a.casing ? l : k + l, e = a.pool ? a.pool : a.alpha ? d : a.symbols ? f : d + j + f, 
        e.charAt(this.natural({
            max: e.length - 1
        }));
    }, a.prototype.floating = function(a) {
        a = b(a, {
            fixed: 4
        }), c(a.fixed && a.precision, "Chance: Cannot specify both fixed and precision.");
        var d, e = Math.pow(10, a.fixed), f = h / e, g = -f;
        c(a.min && a.fixed && a.min < g, "Chance: Min specified is out of range with fixed. Min should be, at least, " + g), 
        c(a.max && a.fixed && a.max > f, "Chance: Max specified is out of range with fixed. Max should be, at most, " + f), 
        a = b(a, {
            min: g,
            max: f
        }), d = this.integer({
            min: a.min * e,
            max: a.max * e
        });
        var i = (d / e).toFixed(a.fixed);
        return parseFloat(i);
    }, a.prototype.integer = function(a) {
        return a = b(a, {
            min: i,
            max: h
        }), c(a.min > a.max, "Chance: Min cannot be greater than Max."), Math.floor(this.random() * (a.max - a.min + 1) + a.min);
    }, a.prototype.natural = function(a) {
        return a = b(a, {
            min: 0,
            max: h
        }), c(a.min < 0, "Chance: Min cannot be less than zero."), this.integer(a);
    }, a.prototype.string = function(a) {
        a = b(a, {
            length: this.natural({
                min: 5,
                max: 20
            })
        }), c(a.length < 0, "Chance: Length cannot be less than zero.");
        var d = a.length, e = this.n(this.character, d, a);
        return e.join("");
    }, a.prototype.capitalize = function(a) {
        return a.charAt(0).toUpperCase() + a.substr(1);
    }, a.prototype.mixin = function(b) {
        for (var c in b) a.prototype[c] = b[c];
        return this;
    }, a.prototype.unique = function(a, d, e) {
        c("function" != typeof a, "Chance: The first argument must be a function."), e = b(e, {
            comparator: function(a, b) {
                return -1 !== a.indexOf(b);
            }
        });
        for (var f, g = [], h = 0, i = 50 * d, j = n.call(arguments, 2); g.length < d; ) if (f = a.apply(this, j), 
        e.comparator(g, f) || (g.push(f), h = 0), ++h > i) throw new RangeError("Chance: num is likely too large for sample set");
        return g;
    }, a.prototype.n = function(a, b) {
        c("function" != typeof a, "Chance: The first argument must be a function."), "undefined" == typeof b && (b = 1);
        var d = b, e = [], f = n.call(arguments, 2);
        for (d = Math.max(0, d), null; d--; null) e.push(a.apply(this, f));
        return e;
    }, a.prototype.pad = function(a, b, c) {
        return c = c || "0", a += "", a.length >= b ? a : new Array(b - a.length + 1).join(c) + a;
    }, a.prototype.pick = function(a, b) {
        if (0 === a.length) throw new RangeError("Chance: Cannot pick() from an empty array");
        return b && 1 !== b ? this.shuffle(a).slice(0, b) : a[this.natural({
            max: a.length - 1
        })];
    }, a.prototype.shuffle = function(a) {
        for (var b = a.slice(0), c = [], d = 0, e = Number(b.length), f = 0; e > f; f++) d = this.natural({
            max: b.length - 1
        }), c[f] = b[d], b.splice(d, 1);
        return c;
    }, a.prototype.weighted = function(a, b) {
        if (a.length !== b.length) throw new RangeError("Chance: length of array and weights must match");
        for (var c = b.length - 1; c >= 0; --c) b[c] <= 0 && (a.splice(c, 1), b.splice(c, 1));
        if (b.some(function(a) {
            return 1 > a;
        })) {
            var d = b.reduce(function(a, b) {
                return a > b ? b : a;
            }, b[0]), e = 1 / d;
            b = b.map(function(a) {
                return a * e;
            });
        }
        var f, g = b.reduce(function(a, b) {
            return a + b;
        }, 0), h = this.natural({
            min: 1,
            max: g
        }), i = 0;
        return b.some(function(b, c) {
            return i + b >= h ? (f = a[c], !0) : (i += b, !1);
        }), f;
    }, a.prototype.paragraph = function(a) {
        a = b(a);
        var c = a.sentences || this.natural({
            min: 3,
            max: 7
        }), d = this.n(this.sentence, c);
        return d.join(" ");
    }, a.prototype.sentence = function(a) {
        a = b(a);
        var c, d = a.words || this.natural({
            min: 12,
            max: 18
        }), e = this.n(this.word, d);
        return c = e.join(" "), c = this.capitalize(c) + ".";
    }, a.prototype.syllable = function(a) {
        a = b(a);
        for (var c, d = a.length || this.natural({
            min: 2,
            max: 3
        }), e = "bcdfghjklmnprstvwz", f = "aeiou", g = e + f, h = "", i = 0; d > i; i++) c = this.character(0 === i ? {
            pool: g
        } : -1 === e.indexOf(c) ? {
            pool: e
        } : {
            pool: f
        }), h += c;
        return h;
    }, a.prototype.word = function(a) {
        a = b(a), c(a.syllables && a.length, "Chance: Cannot specify both syllables AND length.");
        var d = a.syllables || this.natural({
            min: 1,
            max: 3
        }), e = "";
        if (a.length) {
            do e += this.syllable(); while (e.length < a.length);
            e = e.substring(0, a.length);
        } else for (var f = 0; d > f; f++) e += this.syllable();
        return e;
    }, a.prototype.age = function(a) {
        a = b(a);
        var c;
        switch (a.type) {
          case "child":
            c = {
                min: 1,
                max: 12
            };
            break;

          case "teen":
            c = {
                min: 13,
                max: 19
            };
            break;

          case "adult":
            c = {
                min: 18,
                max: 65
            };
            break;

          case "senior":
            c = {
                min: 65,
                max: 100
            };
            break;

          case "all":
            c = {
                min: 1,
                max: 100
            };
            break;

          default:
            c = {
                min: 18,
                max: 65
            };
        }
        return this.natural(c);
    }, a.prototype.birthday = function(a) {
        return a = b(a, {
            year: new Date().getFullYear() - this.age(a)
        }), this.date(a);
    }, a.prototype.cpf = function() {
        var a = this.n(this.natural, 9, {
            max: 9
        }), b = 2 * a[8] + 3 * a[7] + 4 * a[6] + 5 * a[5] + 6 * a[4] + 7 * a[3] + 8 * a[2] + 9 * a[1] + 10 * a[0];
        b = 11 - b % 11, b >= 10 && (b = 0);
        var c = 2 * b + 3 * a[8] + 4 * a[7] + 5 * a[6] + 6 * a[5] + 7 * a[4] + 8 * a[3] + 9 * a[2] + 10 * a[1] + 11 * a[0];
        return c = 11 - c % 11, c >= 10 && (c = 0), "" + a[0] + a[1] + a[2] + "." + a[3] + a[4] + a[5] + "." + a[6] + a[7] + a[8] + "-" + b + c;
    }, a.prototype.first = function(a) {
        return a = b(a, {
            gender: this.gender()
        }), this.pick(this.get("firstNames")[a.gender.toLowerCase()]);
    }, a.prototype.gender = function() {
        return this.pick([ "Male", "Female" ]);
    }, a.prototype.last = function() {
        return this.pick(this.get("lastNames"));
    }, a.prototype.mrz = function(a) {
        var c = function(a) {
            var b = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""), c = [ 7, 3, 1 ], d = 0;
            return "string" != typeof a && (a = a.toString()), a.split("").forEach(function(a, e) {
                var f = b.indexOf(a);
                a = -1 !== f ? 0 === f ? 0 : f + 9 : parseInt(a, 10), a *= c[e % c.length], d += a;
            }), d % 10;
        }, d = function(a) {
            var b = function(a) {
                return new Array(a + 1).join("<");
            }, d = [ "P<", a.issuer, a.last.toUpperCase(), "<<", a.first.toUpperCase(), b(39 - (a.last.length + a.first.length + 2)), a.passportNumber, c(a.passportNumber), a.nationality, a.dob, c(a.dob), a.gender, a.expiry, c(a.expiry), b(14), c(b(14)) ].join("");
            return d + c(d.substr(44, 10) + d.substr(57, 7) + d.substr(65, 7));
        }, e = this;
        return a = b(a, {
            first: this.first(),
            last: this.last(),
            passportNumber: this.integer({
                min: 1e8,
                max: 999999999
            }),
            dob: function() {
                var a = e.birthday({
                    type: "adult"
                });
                return [ a.getFullYear().toString().substr(2), e.pad(a.getMonth() + 1, 2), e.pad(a.getDate(), 2) ].join("");
            }(),
            expiry: function() {
                var a = new Date();
                return [ (a.getFullYear() + 5).toString().substr(2), e.pad(a.getMonth() + 1, 2), e.pad(a.getDate(), 2) ].join("");
            }(),
            gender: "Female" === this.gender() ? "F" : "M",
            issuer: "GBR",
            nationality: "GBR"
        }), d(a);
    }, a.prototype.name = function(a) {
        a = b(a);
        var c, d = this.first(a), e = this.last();
        return c = a.middle ? d + " " + this.first(a) + " " + e : a.middle_initial ? d + " " + this.character({
            alpha: !0,
            casing: "upper"
        }) + ". " + e : d + " " + e, a.prefix && (c = this.prefix(a) + " " + c), a.suffix && (c = c + " " + this.suffix(a)), 
        c;
    }, a.prototype.name_prefixes = function(a) {
        a = a || "all", a = a.toLowerCase();
        var b = [ {
            name: "Doctor",
            abbreviation: "Dr."
        } ];
        return ("male" === a || "all" === a) && b.push({
            name: "Mister",
            abbreviation: "Mr."
        }), ("female" === a || "all" === a) && (b.push({
            name: "Miss",
            abbreviation: "Miss"
        }), b.push({
            name: "Misses",
            abbreviation: "Mrs."
        })), b;
    }, a.prototype.prefix = function(a) {
        return this.name_prefix(a);
    }, a.prototype.name_prefix = function(a) {
        return a = b(a, {
            gender: "all"
        }), a.full ? this.pick(this.name_prefixes(a.gender)).name : this.pick(this.name_prefixes(a.gender)).abbreviation;
    }, a.prototype.ssn = function(a) {
        a = b(a, {
            ssnFour: !1,
            dashes: !0
        });
        var c, d = "1234567890", e = a.dashes ? "-" : "";
        return c = a.ssnFour ? this.string({
            pool: d,
            length: 4
        }) : this.string({
            pool: d,
            length: 3
        }) + e + this.string({
            pool: d,
            length: 2
        }) + e + this.string({
            pool: d,
            length: 4
        });
    }, a.prototype.name_suffixes = function() {
        var a = [ {
            name: "Doctor of Osteopathic Medicine",
            abbreviation: "D.O."
        }, {
            name: "Doctor of Philosophy",
            abbreviation: "Ph.D."
        }, {
            name: "Esquire",
            abbreviation: "Esq."
        }, {
            name: "Junior",
            abbreviation: "Jr."
        }, {
            name: "Juris Doctor",
            abbreviation: "J.D."
        }, {
            name: "Master of Arts",
            abbreviation: "M.A."
        }, {
            name: "Master of Business Administration",
            abbreviation: "M.B.A."
        }, {
            name: "Master of Science",
            abbreviation: "M.S."
        }, {
            name: "Medical Doctor",
            abbreviation: "M.D."
        }, {
            name: "Senior",
            abbreviation: "Sr."
        }, {
            name: "The Third",
            abbreviation: "III"
        }, {
            name: "The Fourth",
            abbreviation: "IV"
        }, {
            name: "Bachelor of Engineering",
            abbreviation: "B.E"
        }, {
            name: "Bachelor of Technology",
            abbreviation: "B.TECH"
        } ];
        return a;
    }, a.prototype.suffix = function(a) {
        return this.name_suffix(a);
    }, a.prototype.name_suffix = function(a) {
        return a = b(a), a.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation;
    }, a.prototype.android_id = function() {
        return "APA91" + this.string({
            pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
            length: 178
        });
    }, a.prototype.apple_token = function() {
        return this.string({
            pool: "abcdef1234567890",
            length: 64
        });
    }, a.prototype.wp8_anid2 = function() {
        return o(this.hash({
            length: 32
        }));
    }, a.prototype.wp7_anid = function() {
        return "A=" + this.guid().replace(/-/g, "").toUpperCase() + "&E=" + this.hash({
            length: 3
        }) + "&W=" + this.integer({
            min: 0,
            max: 9
        });
    }, a.prototype.bb_pin = function() {
        return this.hash({
            length: 8
        });
    }, a.prototype.avatar = function(a) {
        var c = null, d = "//www.gravatar.com/avatar/", e = {
            http: "http",
            https: "https"
        }, f = {
            bmp: "bmp",
            gif: "gif",
            jpg: "jpg",
            png: "png"
        }, g = {
            404: "404",
            mm: "mm",
            identicon: "identicon",
            monsterid: "monsterid",
            wavatar: "wavatar",
            retro: "retro",
            blank: "blank"
        }, h = {
            g: "g",
            pg: "pg",
            r: "r",
            x: "x"
        }, i = {
            protocol: null,
            email: null,
            fileExtension: null,
            size: null,
            fallback: null,
            rating: null
        };
        if (a) if ("string" == typeof a) i.email = a, a = {}; else {
            if ("object" != typeof a) return null;
            if ("Array" === a.constructor) return null;
        } else i.email = this.email(), a = {};
        return i = b(a, i), i.email || (i.email = this.email()), i.protocol = e[i.protocol] ? i.protocol + ":" : "", 
        i.size = parseInt(i.size, 0) ? i.size : "", i.rating = h[i.rating] ? i.rating : "", 
        i.fallback = g[i.fallback] ? i.fallback : "", i.fileExtension = f[i.fileExtension] ? i.fileExtension : "", 
        c = i.protocol + d + this.bimd5.md5(i.email) + (i.fileExtension ? "." + i.fileExtension : "") + (i.size || i.rating || i.fallback ? "?" : "") + (i.size ? "&s=" + i.size.toString() : "") + (i.rating ? "&r=" + i.rating : "") + (i.fallback ? "&d=" + i.fallback : "");
    }, a.prototype.color = function(a) {
        function c(a, b) {
            return [ a, a, a ].join(b || "");
        }
        a = b(a, {
            format: this.pick([ "hex", "shorthex", "rgb", "rgba", "0x" ]),
            grayscale: !1,
            casing: "lower"
        });
        var d, e = a.grayscale;
        if ("hex" === a.format) d = "#" + (e ? c(this.hash({
            length: 2
        })) : this.hash({
            length: 6
        })); else if ("shorthex" === a.format) d = "#" + (e ? c(this.hash({
            length: 1
        })) : this.hash({
            length: 3
        })); else if ("rgb" === a.format) d = e ? "rgb(" + c(this.natural({
            max: 255
        }), ",") + ")" : "rgb(" + this.natural({
            max: 255
        }) + "," + this.natural({
            max: 255
        }) + "," + this.natural({
            max: 255
        }) + ")"; else if ("rgba" === a.format) d = e ? "rgba(" + c(this.natural({
            max: 255
        }), ",") + "," + this.floating({
            min: 0,
            max: 1
        }) + ")" : "rgba(" + this.natural({
            max: 255
        }) + "," + this.natural({
            max: 255
        }) + "," + this.natural({
            max: 255
        }) + "," + this.floating({
            min: 0,
            max: 1
        }) + ")"; else {
            if ("0x" !== a.format) throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", or "0x".');
            d = "0x" + (e ? c(this.hash({
                length: 2
            })) : this.hash({
                length: 6
            }));
        }
        return "upper" === a.casing && (d = d.toUpperCase()), d;
    }, a.prototype.domain = function(a) {
        return a = b(a), this.word() + "." + (a.tld || this.tld());
    }, a.prototype.email = function(a) {
        return a = b(a), this.word({
            length: a.length
        }) + "@" + (a.domain || this.domain());
    }, a.prototype.fbid = function() {
        return parseInt("10000" + this.natural({
            max: 1e11
        }), 10);
    }, a.prototype.google_analytics = function() {
        var a = this.pad(this.natural({
            max: 999999
        }), 6), b = this.pad(this.natural({
            max: 99
        }), 2);
        return "UA-" + a + "-" + b;
    }, a.prototype.hashtag = function() {
        return "#" + this.word();
    }, a.prototype.ip = function() {
        return this.natural({
            max: 255
        }) + "." + this.natural({
            max: 255
        }) + "." + this.natural({
            max: 255
        }) + "." + this.natural({
            max: 255
        });
    }, a.prototype.ipv6 = function() {
        var a = this.n(this.hash, 8, {
            length: 4
        });
        return a.join(":");
    }, a.prototype.klout = function() {
        return this.natural({
            min: 1,
            max: 99
        });
    }, a.prototype.tlds = function() {
        return [ "com", "org", "edu", "gov", "co.uk", "net", "io" ];
    }, a.prototype.tld = function() {
        return this.pick(this.tlds());
    }, a.prototype.twitter = function() {
        return "@" + this.word();
    }, a.prototype.url = function(a) {
        a = b(a, {
            protocol: "http",
            domain: this.domain(a),
            domain_prefix: "",
            path: this.word(),
            extensions: []
        });
        var c = a.extensions.length > 0 ? "." + this.pick(a.extensions) : "", d = a.domain_prefix ? a.domain_prefix + "." + a.domain : a.domain;
        return a.protocol + "://" + d + "/" + a.path + c;
    }, a.prototype.address = function(a) {
        return a = b(a), this.natural({
            min: 5,
            max: 2e3
        }) + " " + this.street(a);
    }, a.prototype.altitude = function(a) {
        return a = b(a, {
            fixed: 5,
            min: 0,
            max: 8848
        }), this.floating({
            min: a.min,
            max: a.max,
            fixed: a.fixed
        });
    }, a.prototype.areacode = function(a) {
        a = b(a, {
            parens: !0
        });
        var c = this.natural({
            min: 2,
            max: 9
        }).toString() + this.natural({
            min: 0,
            max: 8
        }).toString() + this.natural({
            min: 0,
            max: 9
        }).toString();
        return a.parens ? "(" + c + ")" : c;
    }, a.prototype.city = function() {
        return this.capitalize(this.word({
            syllables: 3
        }));
    }, a.prototype.coordinates = function(a) {
        return this.latitude(a) + ", " + this.longitude(a);
    }, a.prototype.countries = function() {
        return this.get("countries");
    }, a.prototype.country = function(a) {
        a = b(a);
        var c = this.pick(this.countries());
        return a.full ? c.name : c.abbreviation;
    }, a.prototype.depth = function(a) {
        return a = b(a, {
            fixed: 5,
            min: -2550,
            max: 0
        }), this.floating({
            min: a.min,
            max: a.max,
            fixed: a.fixed
        });
    }, a.prototype.geohash = function(a) {
        return a = b(a, {
            length: 7
        }), this.string({
            length: a.length,
            pool: "0123456789bcdefghjkmnpqrstuvwxyz"
        });
    }, a.prototype.geojson = function(a) {
        return this.latitude(a) + ", " + this.longitude(a) + ", " + this.altitude(a);
    }, a.prototype.latitude = function(a) {
        return a = b(a, {
            fixed: 5,
            min: -90,
            max: 90
        }), this.floating({
            min: a.min,
            max: a.max,
            fixed: a.fixed
        });
    }, a.prototype.longitude = function(a) {
        return a = b(a, {
            fixed: 5,
            min: -180,
            max: 180
        }), this.floating({
            min: a.min,
            max: a.max,
            fixed: a.fixed
        });
    }, a.prototype.phone = function(a) {
        var c, d = this, e = function(a) {
            var b = [];
            return a.sections.forEach(function(a) {
                b.push(d.string({
                    pool: "0123456789",
                    length: a
                }));
            }), a.area + b.join(" ");
        };
        a = b(a, {
            formatted: !0,
            country: "us",
            mobile: !1
        }), a.formatted || (a.parens = !1);
        var f;
        switch (a.country) {
          case "fr":
            a.mobile ? (c = this.pick([ "06", "07" ]) + d.string({
                pool: "0123456789",
                length: 8
            }), f = a.formatted ? c.match(/../g).join(" ") : c) : (c = this.pick([ "01" + this.pick([ "30", "34", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "53", "55", "56", "58", "60", "64", "69", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83" ]) + d.string({
                pool: "0123456789",
                length: 6
            }), "02" + this.pick([ "14", "18", "22", "23", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "61", "62", "69", "72", "76", "77", "78", "85", "90", "96", "97", "98", "99" ]) + d.string({
                pool: "0123456789",
                length: 6
            }), "03" + this.pick([ "10", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "39", "44", "45", "51", "52", "54", "55", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90" ]) + d.string({
                pool: "0123456789",
                length: 6
            }), "04" + this.pick([ "11", "13", "15", "20", "22", "26", "27", "30", "32", "34", "37", "42", "43", "44", "50", "56", "57", "63", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98" ]) + d.string({
                pool: "0123456789",
                length: 6
            }), "05" + this.pick([ "08", "16", "17", "19", "24", "31", "32", "33", "34", "35", "40", "45", "46", "47", "49", "53", "55", "56", "57", "58", "59", "61", "62", "63", "64", "65", "67", "79", "81", "82", "86", "87", "90", "94" ]) + d.string({
                pool: "0123456789",
                length: 6
            }), "09" + d.string({
                pool: "0123456789",
                length: 8
            }) ]), f = a.formatted ? c.match(/../g).join(" ") : c);
            break;

          case "uk":
            a.mobile ? (c = this.pick([ {
                area: "07" + this.pick([ "4", "5", "7", "8", "9" ]),
                sections: [ 2, 6 ]
            }, {
                area: "07624 ",
                sections: [ 6 ]
            } ]), f = a.formatted ? e(c) : e(c).replace(" ", "")) : (c = this.pick([ {
                area: "01" + this.character({
                    pool: "234569"
                }) + "1 ",
                sections: [ 3, 4 ]
            }, {
                area: "020 " + this.character({
                    pool: "378"
                }),
                sections: [ 3, 4 ]
            }, {
                area: "023 " + this.character({
                    pool: "89"
                }),
                sections: [ 3, 4 ]
            }, {
                area: "024 7",
                sections: [ 3, 4 ]
            }, {
                area: "028 " + this.pick([ "25", "28", "37", "71", "82", "90", "92", "95" ]),
                sections: [ 2, 4 ]
            }, {
                area: "012" + this.pick([ "04", "08", "54", "76", "97", "98" ]) + " ",
                sections: [ 5 ]
            }, {
                area: "013" + this.pick([ "63", "64", "84", "86" ]) + " ",
                sections: [ 5 ]
            }, {
                area: "014" + this.pick([ "04", "20", "60", "61", "80", "88" ]) + " ",
                sections: [ 5 ]
            }, {
                area: "015" + this.pick([ "24", "27", "62", "66" ]) + " ",
                sections: [ 5 ]
            }, {
                area: "016" + this.pick([ "06", "29", "35", "47", "59", "95" ]) + " ",
                sections: [ 5 ]
            }, {
                area: "017" + this.pick([ "26", "44", "50", "68" ]) + " ",
                sections: [ 5 ]
            }, {
                area: "018" + this.pick([ "27", "37", "84", "97" ]) + " ",
                sections: [ 5 ]
            }, {
                area: "019" + this.pick([ "00", "05", "35", "46", "49", "63", "95" ]) + " ",
                sections: [ 5 ]
            } ]), f = a.formatted ? e(c) : e(c).replace(" ", "", "g"));
            break;

          case "us":
            var g = this.areacode(a).toString(), h = this.natural({
                min: 2,
                max: 9
            }).toString() + this.natural({
                min: 0,
                max: 9
            }).toString() + this.natural({
                min: 0,
                max: 9
            }).toString(), i = this.natural({
                min: 1e3,
                max: 9999
            }).toString();
            f = a.formatted ? g + " " + h + "-" + i : g + h + i;
        }
        return f;
    }, a.prototype.postal = function() {
        var a = this.character({
            pool: "XVTSRPNKLMHJGECBA"
        }), b = a + this.natural({
            max: 9
        }) + this.character({
            alpha: !0,
            casing: "upper"
        }), c = this.natural({
            max: 9
        }) + this.character({
            alpha: !0,
            casing: "upper"
        }) + this.natural({
            max: 9
        });
        return b + " " + c;
    }, a.prototype.provinces = function() {
        return this.get("provinces");
    }, a.prototype.province = function(a) {
        return a && a.full ? this.pick(this.provinces()).name : this.pick(this.provinces()).abbreviation;
    }, a.prototype.state = function(a) {
        return a && a.full ? this.pick(this.states(a)).name : this.pick(this.states(a)).abbreviation;
    }, a.prototype.states = function(a) {
        a = b(a);
        var c, d = this.get("us_states_and_dc"), e = this.get("territories"), f = this.get("armed_forces");
        return c = d, a.territories && (c = c.concat(e)), a.armed_forces && (c = c.concat(f)), 
        c;
    }, a.prototype.street = function(a) {
        a = b(a);
        var c = this.word({
            syllables: 2
        });
        return c = this.capitalize(c), c += " ", c += a.short_suffix ? this.street_suffix().abbreviation : this.street_suffix().name;
    }, a.prototype.street_suffix = function() {
        return this.pick(this.street_suffixes());
    }, a.prototype.street_suffixes = function() {
        return this.get("street_suffixes");
    }, a.prototype.zip = function(a) {
        var b = this.n(this.natural, 5, {
            max: 9
        });
        return a && a.plusfour === !0 && (b.push("-"), b = b.concat(this.n(this.natural, 4, {
            max: 9
        }))), b.join("");
    }, a.prototype.ampm = function() {
        return this.bool() ? "am" : "pm";
    }, a.prototype.date = function(a) {
        var c, d;
        if (a && (a.min || a.max)) {
            a = b(a, {
                american: !0,
                string: !1
            });
            var e = "undefined" != typeof a.min ? a.min.getTime() : 1, f = "undefined" != typeof a.max ? a.max.getTime() : 864e13;
            d = new Date(this.natural({
                min: e,
                max: f
            }));
        } else {
            var g = this.month({
                raw: !0
            }), h = g.days;
            a && a.month && (h = this.get("months")[(a.month % 12 + 12) % 12].days), a = b(a, {
                year: parseInt(this.year(), 10),
                month: g.numeric - 1,
                day: this.natural({
                    min: 1,
                    max: h
                }),
                hour: this.hour(),
                minute: this.minute(),
                second: this.second(),
                millisecond: this.millisecond(),
                american: !0,
                string: !1
            }), d = new Date(a.year, a.month, a.day, a.hour, a.minute, a.second, a.millisecond);
        }
        return c = a.american ? d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear() : d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(), 
        a.string ? c : d;
    }, a.prototype.hammertime = function(a) {
        return this.date(a).getTime();
    }, a.prototype.hour = function(a) {
        return a = b(a, {
            min: 1,
            max: a && a.twentyfour ? 24 : 12
        }), c(a.min < 1, "Chance: Min cannot be less than 1."), c(a.twentyfour && a.max > 24, "Chance: Max cannot be greater than 24 for twentyfour option."), 
        c(!a.twentyfour && a.max > 12, "Chance: Max cannot be greater than 12."), c(a.min > a.max, "Chance: Min cannot be greater than Max."), 
        this.natural({
            min: a.min,
            max: a.max
        });
    }, a.prototype.millisecond = function() {
        return this.natural({
            max: 999
        });
    }, a.prototype.minute = a.prototype.second = function(a) {
        return a = b(a, {
            min: 0,
            max: 59
        }), c(a.min < 0, "Chance: Min cannot be less than 0."), c(a.max > 59, "Chance: Max cannot be greater than 59."), 
        c(a.min > a.max, "Chance: Min cannot be greater than Max."), this.natural({
            min: a.min,
            max: a.max
        });
    }, a.prototype.month = function(a) {
        a = b(a, {
            min: 1,
            max: 12
        }), c(a.min < 1, "Chance: Min cannot be less than 1."), c(a.max > 12, "Chance: Max cannot be greater than 12."), 
        c(a.min > a.max, "Chance: Min cannot be greater than Max.");
        var d = this.pick(this.months().slice(a.min - 1, a.max));
        return a.raw ? d : d.name;
    }, a.prototype.months = function() {
        return this.get("months");
    }, a.prototype.second = function() {
        return this.natural({
            max: 59
        });
    }, a.prototype.timestamp = function() {
        return this.natural({
            min: 1,
            max: parseInt(new Date().getTime() / 1e3, 10)
        });
    }, a.prototype.year = function(a) {
        return a = b(a, {
            min: new Date().getFullYear()
        }), a.max = "undefined" != typeof a.max ? a.max : a.min + 100, this.natural(a).toString();
    }, a.prototype.cc = function(a) {
        a = b(a);
        var c, d, e;
        return c = this.cc_type(a.type ? {
            name: a.type,
            raw: !0
        } : {
            raw: !0
        }), d = c.prefix.split(""), e = c.length - c.prefix.length - 1, d = d.concat(this.n(this.integer, e, {
            min: 0,
            max: 9
        })), d.push(this.luhn_calculate(d.join(""))), d.join("");
    }, a.prototype.cc_types = function() {
        return this.get("cc_types");
    }, a.prototype.cc_type = function(a) {
        a = b(a);
        var c = this.cc_types(), d = null;
        if (a.name) {
            for (var e = 0; e < c.length; e++) if (c[e].name === a.name || c[e].short_name === a.name) {
                d = c[e];
                break;
            }
            if (null === d) throw new RangeError("Credit card type '" + a.name + "'' is not supported");
        } else d = this.pick(c);
        return a.raw ? d : d.name;
    }, a.prototype.currency_types = function() {
        return this.get("currency_types");
    }, a.prototype.currency = function() {
        return this.pick(this.currency_types());
    }, a.prototype.currency_pair = function(a) {
        var b = this.unique(this.currency, 2, {
            comparator: function(a, b) {
                return a.reduce(function(a, c) {
                    return a || c.code === b.code;
                }, !1);
            }
        });
        return a ? b[0].code + "/" + b[1].code : b;
    }, a.prototype.dollar = function(a) {
        a = b(a, {
            max: 1e4,
            min: 0
        });
        var c = this.floating({
            min: a.min,
            max: a.max,
            fixed: 2
        }).toString(), d = c.split(".")[1];
        return void 0 === d ? c += ".00" : d.length < 2 && (c += "0"), 0 > c ? "-$" + c.replace("-", "") : "$" + c;
    }, a.prototype.exp = function(a) {
        a = b(a);
        var c = {};
        return c.year = this.exp_year(), c.year === new Date().getFullYear().toString() ? c.month = this.exp_month({
            future: !0
        }) : c.month = this.exp_month(), a.raw ? c : c.month + "/" + c.year;
    }, a.prototype.exp_month = function(a) {
        a = b(a);
        var c, d, e = new Date().getMonth() + 1;
        if (a.future) {
            do c = this.month({
                raw: !0
            }).numeric, d = parseInt(c, 10); while (e >= d);
        } else c = this.month({
            raw: !0
        }).numeric;
        return c;
    }, a.prototype.exp_year = function() {
        return this.year({
            max: new Date().getFullYear() + 10
        });
    }, a.prototype.d4 = d({
        min: 1,
        max: 4
    }), a.prototype.d6 = d({
        min: 1,
        max: 6
    }), a.prototype.d8 = d({
        min: 1,
        max: 8
    }), a.prototype.d10 = d({
        min: 1,
        max: 10
    }), a.prototype.d12 = d({
        min: 1,
        max: 12
    }), a.prototype.d20 = d({
        min: 1,
        max: 20
    }), a.prototype.d30 = d({
        min: 1,
        max: 30
    }), a.prototype.d100 = d({
        min: 1,
        max: 100
    }), a.prototype.rpg = function(a, c) {
        if (c = b(c), a) {
            var d = a.toLowerCase().split("d"), e = [];
            if (2 !== d.length || !parseInt(d[0], 10) || !parseInt(d[1], 10)) throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
            for (var f = d[0]; f > 0; f--) e[f - 1] = this.natural({
                min: 1,
                max: d[1]
            });
            return "undefined" != typeof c.sum && c.sum ? e.reduce(function(a, b) {
                return a + b;
            }) : e;
        }
        throw new RangeError("A type of die roll must be included");
    }, a.prototype.guid = function(a) {
        a = b(a, {
            version: 5
        });
        var c = "abcdef1234567890", d = "ab89", e = this.string({
            pool: c,
            length: 8
        }) + "-" + this.string({
            pool: c,
            length: 4
        }) + "-" + a.version + this.string({
            pool: c,
            length: 3
        }) + "-" + this.string({
            pool: d,
            length: 1
        }) + this.string({
            pool: c,
            length: 3
        }) + "-" + this.string({
            pool: c,
            length: 12
        });
        return e;
    }, a.prototype.hash = function(a) {
        a = b(a, {
            length: 40,
            casing: "lower"
        });
        var c = "upper" === a.casing ? m.toUpperCase() : m;
        return this.string({
            pool: c,
            length: a.length
        });
    }, a.prototype.luhn_check = function(a) {
        var b = a.toString(), c = +b.substring(b.length - 1);
        return c === this.luhn_calculate(+b.substring(0, b.length - 1));
    }, a.prototype.luhn_calculate = function(a) {
        for (var b, c = a.toString().split("").reverse(), d = 0, e = 0, f = c.length; f > e; ++e) b = +c[e], 
        e % 2 === 0 && (b *= 2, b > 9 && (b -= 9)), d += b;
        return 9 * d % 10;
    }, a.prototype.md5 = function(a) {
        var c = {
            str: "",
            key: null,
            raw: !1
        };
        if (a) if ("string" == typeof a) c.str = a, a = {}; else {
            if ("object" != typeof a) return null;
            if ("Array" === a.constructor) return null;
        } else c.str = this.string(), a = {};
        if (c = b(a, c), !c.str) throw new Error("A parameter is required to return an md5 hash.");
        return this.bimd5.md5(c.str, c.key, c.raw);
    };
    var p = {
        firstNames: {
            male: [ "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon" ],
            female: [ "Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "John", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie" ]
        },
        lastNames: [ "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "McCoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "McKinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "McGee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "McCarthy", "Guerrero", "Lindsey", "Estrada", "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "McBride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "McLaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "McCormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "McKenzie", "Collier", "Luna", "Phelps", "McGuire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins" ],
        countries: [ {
            name: "Afghanistan",
            abbreviation: "AF"
        }, {
            name: "Albania",
            abbreviation: "AL"
        }, {
            name: "Algeria",
            abbreviation: "DZ"
        }, {
            name: "American Samoa",
            abbreviation: "AS"
        }, {
            name: "Andorra",
            abbreviation: "AD"
        }, {
            name: "Angola",
            abbreviation: "AO"
        }, {
            name: "Anguilla",
            abbreviation: "AI"
        }, {
            name: "Antarctica",
            abbreviation: "AQ"
        }, {
            name: "Antigua and Barbuda",
            abbreviation: "AG"
        }, {
            name: "Argentina",
            abbreviation: "AR"
        }, {
            name: "Armenia",
            abbreviation: "AM"
        }, {
            name: "Aruba",
            abbreviation: "AW"
        }, {
            name: "Australia",
            abbreviation: "AU"
        }, {
            name: "Austria",
            abbreviation: "AT"
        }, {
            name: "Azerbaijan",
            abbreviation: "AZ"
        }, {
            name: "Bahamas",
            abbreviation: "BS"
        }, {
            name: "Bahrain",
            abbreviation: "BH"
        }, {
            name: "Bangladesh",
            abbreviation: "BD"
        }, {
            name: "Barbados",
            abbreviation: "BB"
        }, {
            name: "Belarus",
            abbreviation: "BY"
        }, {
            name: "Belgium",
            abbreviation: "BE"
        }, {
            name: "Belize",
            abbreviation: "BZ"
        }, {
            name: "Benin",
            abbreviation: "BJ"
        }, {
            name: "Bermuda",
            abbreviation: "BM"
        }, {
            name: "Bhutan",
            abbreviation: "BT"
        }, {
            name: "Bolivia",
            abbreviation: "BO"
        }, {
            name: "Bosnia and Herzegovina",
            abbreviation: "BA"
        }, {
            name: "Botswana",
            abbreviation: "BW"
        }, {
            name: "Bouvet Island",
            abbreviation: "BV"
        }, {
            name: "Brazil",
            abbreviation: "BR"
        }, {
            name: "British Antarctic Territory",
            abbreviation: "BQ"
        }, {
            name: "British Indian Ocean Territory",
            abbreviation: "IO"
        }, {
            name: "British Virgin Islands",
            abbreviation: "VG"
        }, {
            name: "Brunei",
            abbreviation: "BN"
        }, {
            name: "Bulgaria",
            abbreviation: "BG"
        }, {
            name: "Burkina Faso",
            abbreviation: "BF"
        }, {
            name: "Burundi",
            abbreviation: "BI"
        }, {
            name: "Cambodia",
            abbreviation: "KH"
        }, {
            name: "Cameroon",
            abbreviation: "CM"
        }, {
            name: "Canada",
            abbreviation: "CA"
        }, {
            name: "Canton and Enderbury Islands",
            abbreviation: "CT"
        }, {
            name: "Cape Verde",
            abbreviation: "CV"
        }, {
            name: "Cayman Islands",
            abbreviation: "KY"
        }, {
            name: "Central African Republic",
            abbreviation: "CF"
        }, {
            name: "Chad",
            abbreviation: "TD"
        }, {
            name: "Chile",
            abbreviation: "CL"
        }, {
            name: "China",
            abbreviation: "CN"
        }, {
            name: "Christmas Island",
            abbreviation: "CX"
        }, {
            name: "Cocos [Keeling] Islands",
            abbreviation: "CC"
        }, {
            name: "Colombia",
            abbreviation: "CO"
        }, {
            name: "Comoros",
            abbreviation: "KM"
        }, {
            name: "Congo - Brazzaville",
            abbreviation: "CG"
        }, {
            name: "Congo - Kinshasa",
            abbreviation: "CD"
        }, {
            name: "Cook Islands",
            abbreviation: "CK"
        }, {
            name: "Costa Rica",
            abbreviation: "CR"
        }, {
            name: "Croatia",
            abbreviation: "HR"
        }, {
            name: "Cuba",
            abbreviation: "CU"
        }, {
            name: "Cyprus",
            abbreviation: "CY"
        }, {
            name: "Czech Republic",
            abbreviation: "CZ"
        }, {
            name: "Côte d’Ivoire",
            abbreviation: "CI"
        }, {
            name: "Denmark",
            abbreviation: "DK"
        }, {
            name: "Djibouti",
            abbreviation: "DJ"
        }, {
            name: "Dominica",
            abbreviation: "DM"
        }, {
            name: "Dominican Republic",
            abbreviation: "DO"
        }, {
            name: "Dronning Maud Land",
            abbreviation: "NQ"
        }, {
            name: "East Germany",
            abbreviation: "DD"
        }, {
            name: "Ecuador",
            abbreviation: "EC"
        }, {
            name: "Egypt",
            abbreviation: "EG"
        }, {
            name: "El Salvador",
            abbreviation: "SV"
        }, {
            name: "Equatorial Guinea",
            abbreviation: "GQ"
        }, {
            name: "Eritrea",
            abbreviation: "ER"
        }, {
            name: "Estonia",
            abbreviation: "EE"
        }, {
            name: "Ethiopia",
            abbreviation: "ET"
        }, {
            name: "Falkland Islands",
            abbreviation: "FK"
        }, {
            name: "Faroe Islands",
            abbreviation: "FO"
        }, {
            name: "Fiji",
            abbreviation: "FJ"
        }, {
            name: "Finland",
            abbreviation: "FI"
        }, {
            name: "France",
            abbreviation: "FR"
        }, {
            name: "French Guiana",
            abbreviation: "GF"
        }, {
            name: "French Polynesia",
            abbreviation: "PF"
        }, {
            name: "French Southern Territories",
            abbreviation: "TF"
        }, {
            name: "French Southern and Antarctic Territories",
            abbreviation: "FQ"
        }, {
            name: "Gabon",
            abbreviation: "GA"
        }, {
            name: "Gambia",
            abbreviation: "GM"
        }, {
            name: "Georgia",
            abbreviation: "GE"
        }, {
            name: "Germany",
            abbreviation: "DE"
        }, {
            name: "Ghana",
            abbreviation: "GH"
        }, {
            name: "Gibraltar",
            abbreviation: "GI"
        }, {
            name: "Greece",
            abbreviation: "GR"
        }, {
            name: "Greenland",
            abbreviation: "GL"
        }, {
            name: "Grenada",
            abbreviation: "GD"
        }, {
            name: "Guadeloupe",
            abbreviation: "GP"
        }, {
            name: "Guam",
            abbreviation: "GU"
        }, {
            name: "Guatemala",
            abbreviation: "GT"
        }, {
            name: "Guernsey",
            abbreviation: "GG"
        }, {
            name: "Guinea",
            abbreviation: "GN"
        }, {
            name: "Guinea-Bissau",
            abbreviation: "GW"
        }, {
            name: "Guyana",
            abbreviation: "GY"
        }, {
            name: "Haiti",
            abbreviation: "HT"
        }, {
            name: "Heard Island and McDonald Islands",
            abbreviation: "HM"
        }, {
            name: "Honduras",
            abbreviation: "HN"
        }, {
            name: "Hong Kong SAR China",
            abbreviation: "HK"
        }, {
            name: "Hungary",
            abbreviation: "HU"
        }, {
            name: "Iceland",
            abbreviation: "IS"
        }, {
            name: "India",
            abbreviation: "IN"
        }, {
            name: "Indonesia",
            abbreviation: "ID"
        }, {
            name: "Iran",
            abbreviation: "IR"
        }, {
            name: "Iraq",
            abbreviation: "IQ"
        }, {
            name: "Ireland",
            abbreviation: "IE"
        }, {
            name: "Isle of Man",
            abbreviation: "IM"
        }, {
            name: "Israel",
            abbreviation: "IL"
        }, {
            name: "Italy",
            abbreviation: "IT"
        }, {
            name: "Jamaica",
            abbreviation: "JM"
        }, {
            name: "Japan",
            abbreviation: "JP"
        }, {
            name: "Jersey",
            abbreviation: "JE"
        }, {
            name: "Johnston Island",
            abbreviation: "JT"
        }, {
            name: "Jordan",
            abbreviation: "JO"
        }, {
            name: "Kazakhstan",
            abbreviation: "KZ"
        }, {
            name: "Kenya",
            abbreviation: "KE"
        }, {
            name: "Kiribati",
            abbreviation: "KI"
        }, {
            name: "Kuwait",
            abbreviation: "KW"
        }, {
            name: "Kyrgyzstan",
            abbreviation: "KG"
        }, {
            name: "Laos",
            abbreviation: "LA"
        }, {
            name: "Latvia",
            abbreviation: "LV"
        }, {
            name: "Lebanon",
            abbreviation: "LB"
        }, {
            name: "Lesotho",
            abbreviation: "LS"
        }, {
            name: "Liberia",
            abbreviation: "LR"
        }, {
            name: "Libya",
            abbreviation: "LY"
        }, {
            name: "Liechtenstein",
            abbreviation: "LI"
        }, {
            name: "Lithuania",
            abbreviation: "LT"
        }, {
            name: "Luxembourg",
            abbreviation: "LU"
        }, {
            name: "Macau SAR China",
            abbreviation: "MO"
        }, {
            name: "Macedonia",
            abbreviation: "MK"
        }, {
            name: "Madagascar",
            abbreviation: "MG"
        }, {
            name: "Malawi",
            abbreviation: "MW"
        }, {
            name: "Malaysia",
            abbreviation: "MY"
        }, {
            name: "Maldives",
            abbreviation: "MV"
        }, {
            name: "Mali",
            abbreviation: "ML"
        }, {
            name: "Malta",
            abbreviation: "MT"
        }, {
            name: "Marshall Islands",
            abbreviation: "MH"
        }, {
            name: "Martinique",
            abbreviation: "MQ"
        }, {
            name: "Mauritania",
            abbreviation: "MR"
        }, {
            name: "Mauritius",
            abbreviation: "MU"
        }, {
            name: "Mayotte",
            abbreviation: "YT"
        }, {
            name: "Metropolitan France",
            abbreviation: "FX"
        }, {
            name: "Mexico",
            abbreviation: "MX"
        }, {
            name: "Micronesia",
            abbreviation: "FM"
        }, {
            name: "Midway Islands",
            abbreviation: "MI"
        }, {
            name: "Moldova",
            abbreviation: "MD"
        }, {
            name: "Monaco",
            abbreviation: "MC"
        }, {
            name: "Mongolia",
            abbreviation: "MN"
        }, {
            name: "Montenegro",
            abbreviation: "ME"
        }, {
            name: "Montserrat",
            abbreviation: "MS"
        }, {
            name: "Morocco",
            abbreviation: "MA"
        }, {
            name: "Mozambique",
            abbreviation: "MZ"
        }, {
            name: "Myanmar [Burma]",
            abbreviation: "MM"
        }, {
            name: "Namibia",
            abbreviation: "NA"
        }, {
            name: "Nauru",
            abbreviation: "NR"
        }, {
            name: "Nepal",
            abbreviation: "NP"
        }, {
            name: "Netherlands",
            abbreviation: "NL"
        }, {
            name: "Netherlands Antilles",
            abbreviation: "AN"
        }, {
            name: "Neutral Zone",
            abbreviation: "NT"
        }, {
            name: "New Caledonia",
            abbreviation: "NC"
        }, {
            name: "New Zealand",
            abbreviation: "NZ"
        }, {
            name: "Nicaragua",
            abbreviation: "NI"
        }, {
            name: "Niger",
            abbreviation: "NE"
        }, {
            name: "Nigeria",
            abbreviation: "NG"
        }, {
            name: "Niue",
            abbreviation: "NU"
        }, {
            name: "Norfolk Island",
            abbreviation: "NF"
        }, {
            name: "North Korea",
            abbreviation: "KP"
        }, {
            name: "North Vietnam",
            abbreviation: "VD"
        }, {
            name: "Northern Mariana Islands",
            abbreviation: "MP"
        }, {
            name: "Norway",
            abbreviation: "NO"
        }, {
            name: "Oman",
            abbreviation: "OM"
        }, {
            name: "Pacific Islands Trust Territory",
            abbreviation: "PC"
        }, {
            name: "Pakistan",
            abbreviation: "PK"
        }, {
            name: "Palau",
            abbreviation: "PW"
        }, {
            name: "Palestinian Territories",
            abbreviation: "PS"
        }, {
            name: "Panama",
            abbreviation: "PA"
        }, {
            name: "Panama Canal Zone",
            abbreviation: "PZ"
        }, {
            name: "Papua New Guinea",
            abbreviation: "PG"
        }, {
            name: "Paraguay",
            abbreviation: "PY"
        }, {
            name: "People's Democratic Republic of Yemen",
            abbreviation: "YD"
        }, {
            name: "Peru",
            abbreviation: "PE"
        }, {
            name: "Philippines",
            abbreviation: "PH"
        }, {
            name: "Pitcairn Islands",
            abbreviation: "PN"
        }, {
            name: "Poland",
            abbreviation: "PL"
        }, {
            name: "Portugal",
            abbreviation: "PT"
        }, {
            name: "Puerto Rico",
            abbreviation: "PR"
        }, {
            name: "Qatar",
            abbreviation: "QA"
        }, {
            name: "Romania",
            abbreviation: "RO"
        }, {
            name: "Russia",
            abbreviation: "RU"
        }, {
            name: "Rwanda",
            abbreviation: "RW"
        }, {
            name: "Réunion",
            abbreviation: "RE"
        }, {
            name: "Saint Barthélemy",
            abbreviation: "BL"
        }, {
            name: "Saint Helena",
            abbreviation: "SH"
        }, {
            name: "Saint Kitts and Nevis",
            abbreviation: "KN"
        }, {
            name: "Saint Lucia",
            abbreviation: "LC"
        }, {
            name: "Saint Martin",
            abbreviation: "MF"
        }, {
            name: "Saint Pierre and Miquelon",
            abbreviation: "PM"
        }, {
            name: "Saint Vincent and the Grenadines",
            abbreviation: "VC"
        }, {
            name: "Samoa",
            abbreviation: "WS"
        }, {
            name: "San Marino",
            abbreviation: "SM"
        }, {
            name: "Saudi Arabia",
            abbreviation: "SA"
        }, {
            name: "Senegal",
            abbreviation: "SN"
        }, {
            name: "Serbia",
            abbreviation: "RS"
        }, {
            name: "Serbia and Montenegro",
            abbreviation: "CS"
        }, {
            name: "Seychelles",
            abbreviation: "SC"
        }, {
            name: "Sierra Leone",
            abbreviation: "SL"
        }, {
            name: "Singapore",
            abbreviation: "SG"
        }, {
            name: "Slovakia",
            abbreviation: "SK"
        }, {
            name: "Slovenia",
            abbreviation: "SI"
        }, {
            name: "Solomon Islands",
            abbreviation: "SB"
        }, {
            name: "Somalia",
            abbreviation: "SO"
        }, {
            name: "South Africa",
            abbreviation: "ZA"
        }, {
            name: "South Georgia and the South Sandwich Islands",
            abbreviation: "GS"
        }, {
            name: "South Korea",
            abbreviation: "KR"
        }, {
            name: "Spain",
            abbreviation: "ES"
        }, {
            name: "Sri Lanka",
            abbreviation: "LK"
        }, {
            name: "Sudan",
            abbreviation: "SD"
        }, {
            name: "Suriname",
            abbreviation: "SR"
        }, {
            name: "Svalbard and Jan Mayen",
            abbreviation: "SJ"
        }, {
            name: "Swaziland",
            abbreviation: "SZ"
        }, {
            name: "Sweden",
            abbreviation: "SE"
        }, {
            name: "Switzerland",
            abbreviation: "CH"
        }, {
            name: "Syria",
            abbreviation: "SY"
        }, {
            name: "São Tomé and Príncipe",
            abbreviation: "ST"
        }, {
            name: "Taiwan",
            abbreviation: "TW"
        }, {
            name: "Tajikistan",
            abbreviation: "TJ"
        }, {
            name: "Tanzania",
            abbreviation: "TZ"
        }, {
            name: "Thailand",
            abbreviation: "TH"
        }, {
            name: "Timor-Leste",
            abbreviation: "TL"
        }, {
            name: "Togo",
            abbreviation: "TG"
        }, {
            name: "Tokelau",
            abbreviation: "TK"
        }, {
            name: "Tonga",
            abbreviation: "TO"
        }, {
            name: "Trinidad and Tobago",
            abbreviation: "TT"
        }, {
            name: "Tunisia",
            abbreviation: "TN"
        }, {
            name: "Turkey",
            abbreviation: "TR"
        }, {
            name: "Turkmenistan",
            abbreviation: "TM"
        }, {
            name: "Turks and Caicos Islands",
            abbreviation: "TC"
        }, {
            name: "Tuvalu",
            abbreviation: "TV"
        }, {
            name: "U.S. Minor Outlying Islands",
            abbreviation: "UM"
        }, {
            name: "U.S. Miscellaneous Pacific Islands",
            abbreviation: "PU"
        }, {
            name: "U.S. Virgin Islands",
            abbreviation: "VI"
        }, {
            name: "Uganda",
            abbreviation: "UG"
        }, {
            name: "Ukraine",
            abbreviation: "UA"
        }, {
            name: "Union of Soviet Socialist Republics",
            abbreviation: "SU"
        }, {
            name: "United Arab Emirates",
            abbreviation: "AE"
        }, {
            name: "United Kingdom",
            abbreviation: "GB"
        }, {
            name: "United States",
            abbreviation: "US"
        }, {
            name: "Unknown or Invalid Region",
            abbreviation: "ZZ"
        }, {
            name: "Uruguay",
            abbreviation: "UY"
        }, {
            name: "Uzbekistan",
            abbreviation: "UZ"
        }, {
            name: "Vanuatu",
            abbreviation: "VU"
        }, {
            name: "Vatican City",
            abbreviation: "VA"
        }, {
            name: "Venezuela",
            abbreviation: "VE"
        }, {
            name: "Vietnam",
            abbreviation: "VN"
        }, {
            name: "Wake Island",
            abbreviation: "WK"
        }, {
            name: "Wallis and Futuna",
            abbreviation: "WF"
        }, {
            name: "Western Sahara",
            abbreviation: "EH"
        }, {
            name: "Yemen",
            abbreviation: "YE"
        }, {
            name: "Zambia",
            abbreviation: "ZM"
        }, {
            name: "Zimbabwe",
            abbreviation: "ZW"
        }, {
            name: "Åland Islands",
            abbreviation: "AX"
        } ],
        provinces: [ {
            name: "Alberta",
            abbreviation: "AB"
        }, {
            name: "British Columbia",
            abbreviation: "BC"
        }, {
            name: "Manitoba",
            abbreviation: "MB"
        }, {
            name: "New Brunswick",
            abbreviation: "NB"
        }, {
            name: "Newfoundland and Labrador",
            abbreviation: "NL"
        }, {
            name: "Nova Scotia",
            abbreviation: "NS"
        }, {
            name: "Ontario",
            abbreviation: "ON"
        }, {
            name: "Prince Edward Island",
            abbreviation: "PE"
        }, {
            name: "Quebec",
            abbreviation: "QC"
        }, {
            name: "Saskatchewan",
            abbreviation: "SK"
        }, {
            name: "Northwest Territories",
            abbreviation: "NT"
        }, {
            name: "Nunavut",
            abbreviation: "NU"
        }, {
            name: "Yukon",
            abbreviation: "YT"
        } ],
        us_states_and_dc: [ {
            name: "Alabama",
            abbreviation: "AL"
        }, {
            name: "Alaska",
            abbreviation: "AK"
        }, {
            name: "Arizona",
            abbreviation: "AZ"
        }, {
            name: "Arkansas",
            abbreviation: "AR"
        }, {
            name: "California",
            abbreviation: "CA"
        }, {
            name: "Colorado",
            abbreviation: "CO"
        }, {
            name: "Connecticut",
            abbreviation: "CT"
        }, {
            name: "Delaware",
            abbreviation: "DE"
        }, {
            name: "District of Columbia",
            abbreviation: "DC"
        }, {
            name: "Florida",
            abbreviation: "FL"
        }, {
            name: "Georgia",
            abbreviation: "GA"
        }, {
            name: "Hawaii",
            abbreviation: "HI"
        }, {
            name: "Idaho",
            abbreviation: "ID"
        }, {
            name: "Illinois",
            abbreviation: "IL"
        }, {
            name: "Indiana",
            abbreviation: "IN"
        }, {
            name: "Iowa",
            abbreviation: "IA"
        }, {
            name: "Kansas",
            abbreviation: "KS"
        }, {
            name: "Kentucky",
            abbreviation: "KY"
        }, {
            name: "Louisiana",
            abbreviation: "LA"
        }, {
            name: "Maine",
            abbreviation: "ME"
        }, {
            name: "Maryland",
            abbreviation: "MD"
        }, {
            name: "Massachusetts",
            abbreviation: "MA"
        }, {
            name: "Michigan",
            abbreviation: "MI"
        }, {
            name: "Minnesota",
            abbreviation: "MN"
        }, {
            name: "Mississippi",
            abbreviation: "MS"
        }, {
            name: "Missouri",
            abbreviation: "MO"
        }, {
            name: "Montana",
            abbreviation: "MT"
        }, {
            name: "Nebraska",
            abbreviation: "NE"
        }, {
            name: "Nevada",
            abbreviation: "NV"
        }, {
            name: "New Hampshire",
            abbreviation: "NH"
        }, {
            name: "New Jersey",
            abbreviation: "NJ"
        }, {
            name: "New Mexico",
            abbreviation: "NM"
        }, {
            name: "New York",
            abbreviation: "NY"
        }, {
            name: "North Carolina",
            abbreviation: "NC"
        }, {
            name: "North Dakota",
            abbreviation: "ND"
        }, {
            name: "Ohio",
            abbreviation: "OH"
        }, {
            name: "Oklahoma",
            abbreviation: "OK"
        }, {
            name: "Oregon",
            abbreviation: "OR"
        }, {
            name: "Pennsylvania",
            abbreviation: "PA"
        }, {
            name: "Rhode Island",
            abbreviation: "RI"
        }, {
            name: "South Carolina",
            abbreviation: "SC"
        }, {
            name: "South Dakota",
            abbreviation: "SD"
        }, {
            name: "Tennessee",
            abbreviation: "TN"
        }, {
            name: "Texas",
            abbreviation: "TX"
        }, {
            name: "Utah",
            abbreviation: "UT"
        }, {
            name: "Vermont",
            abbreviation: "VT"
        }, {
            name: "Virginia",
            abbreviation: "VA"
        }, {
            name: "Washington",
            abbreviation: "WA"
        }, {
            name: "West Virginia",
            abbreviation: "WV"
        }, {
            name: "Wisconsin",
            abbreviation: "WI"
        }, {
            name: "Wyoming",
            abbreviation: "WY"
        } ],
        territories: [ {
            name: "American Samoa",
            abbreviation: "AS"
        }, {
            name: "Federated States of Micronesia",
            abbreviation: "FM"
        }, {
            name: "Guam",
            abbreviation: "GU"
        }, {
            name: "Marshall Islands",
            abbreviation: "MH"
        }, {
            name: "Northern Mariana Islands",
            abbreviation: "MP"
        }, {
            name: "Puerto Rico",
            abbreviation: "PR"
        }, {
            name: "Virgin Islands, U.S.",
            abbreviation: "VI"
        } ],
        armed_forces: [ {
            name: "Armed Forces Europe",
            abbreviation: "AE"
        }, {
            name: "Armed Forces Pacific",
            abbreviation: "AP"
        }, {
            name: "Armed Forces the Americas",
            abbreviation: "AA"
        } ],
        street_suffixes: [ {
            name: "Avenue",
            abbreviation: "Ave"
        }, {
            name: "Boulevard",
            abbreviation: "Blvd"
        }, {
            name: "Center",
            abbreviation: "Ctr"
        }, {
            name: "Circle",
            abbreviation: "Cir"
        }, {
            name: "Court",
            abbreviation: "Ct"
        }, {
            name: "Drive",
            abbreviation: "Dr"
        }, {
            name: "Extension",
            abbreviation: "Ext"
        }, {
            name: "Glen",
            abbreviation: "Gln"
        }, {
            name: "Grove",
            abbreviation: "Grv"
        }, {
            name: "Heights",
            abbreviation: "Hts"
        }, {
            name: "Highway",
            abbreviation: "Hwy"
        }, {
            name: "Junction",
            abbreviation: "Jct"
        }, {
            name: "Key",
            abbreviation: "Key"
        }, {
            name: "Lane",
            abbreviation: "Ln"
        }, {
            name: "Loop",
            abbreviation: "Loop"
        }, {
            name: "Manor",
            abbreviation: "Mnr"
        }, {
            name: "Mill",
            abbreviation: "Mill"
        }, {
            name: "Park",
            abbreviation: "Park"
        }, {
            name: "Parkway",
            abbreviation: "Pkwy"
        }, {
            name: "Pass",
            abbreviation: "Pass"
        }, {
            name: "Path",
            abbreviation: "Path"
        }, {
            name: "Pike",
            abbreviation: "Pike"
        }, {
            name: "Place",
            abbreviation: "Pl"
        }, {
            name: "Plaza",
            abbreviation: "Plz"
        }, {
            name: "Point",
            abbreviation: "Pt"
        }, {
            name: "Ridge",
            abbreviation: "Rdg"
        }, {
            name: "River",
            abbreviation: "Riv"
        }, {
            name: "Road",
            abbreviation: "Rd"
        }, {
            name: "Square",
            abbreviation: "Sq"
        }, {
            name: "Street",
            abbreviation: "St"
        }, {
            name: "Terrace",
            abbreviation: "Ter"
        }, {
            name: "Trail",
            abbreviation: "Trl"
        }, {
            name: "Turnpike",
            abbreviation: "Tpke"
        }, {
            name: "View",
            abbreviation: "Vw"
        }, {
            name: "Way",
            abbreviation: "Way"
        } ],
        months: [ {
            name: "January",
            short_name: "Jan",
            numeric: "01",
            days: 31
        }, {
            name: "February",
            short_name: "Feb",
            numeric: "02",
            days: 28
        }, {
            name: "March",
            short_name: "Mar",
            numeric: "03",
            days: 31
        }, {
            name: "April",
            short_name: "Apr",
            numeric: "04",
            days: 30
        }, {
            name: "May",
            short_name: "May",
            numeric: "05",
            days: 31
        }, {
            name: "June",
            short_name: "Jun",
            numeric: "06",
            days: 30
        }, {
            name: "July",
            short_name: "Jul",
            numeric: "07",
            days: 31
        }, {
            name: "August",
            short_name: "Aug",
            numeric: "08",
            days: 31
        }, {
            name: "September",
            short_name: "Sep",
            numeric: "09",
            days: 30
        }, {
            name: "October",
            short_name: "Oct",
            numeric: "10",
            days: 31
        }, {
            name: "November",
            short_name: "Nov",
            numeric: "11",
            days: 30
        }, {
            name: "December",
            short_name: "Dec",
            numeric: "12",
            days: 31
        } ],
        cc_types: [ {
            name: "American Express",
            short_name: "amex",
            prefix: "34",
            length: 15
        }, {
            name: "Bankcard",
            short_name: "bankcard",
            prefix: "5610",
            length: 16
        }, {
            name: "China UnionPay",
            short_name: "chinaunion",
            prefix: "62",
            length: 16
        }, {
            name: "Diners Club Carte Blanche",
            short_name: "dccarte",
            prefix: "300",
            length: 14
        }, {
            name: "Diners Club enRoute",
            short_name: "dcenroute",
            prefix: "2014",
            length: 15
        }, {
            name: "Diners Club International",
            short_name: "dcintl",
            prefix: "36",
            length: 14
        }, {
            name: "Diners Club United States & Canada",
            short_name: "dcusc",
            prefix: "54",
            length: 16
        }, {
            name: "Discover Card",
            short_name: "discover",
            prefix: "6011",
            length: 16
        }, {
            name: "InstaPayment",
            short_name: "instapay",
            prefix: "637",
            length: 16
        }, {
            name: "JCB",
            short_name: "jcb",
            prefix: "3528",
            length: 16
        }, {
            name: "Laser",
            short_name: "laser",
            prefix: "6304",
            length: 16
        }, {
            name: "Maestro",
            short_name: "maestro",
            prefix: "5018",
            length: 16
        }, {
            name: "Mastercard",
            short_name: "mc",
            prefix: "51",
            length: 16
        }, {
            name: "Solo",
            short_name: "solo",
            prefix: "6334",
            length: 16
        }, {
            name: "Switch",
            short_name: "switch",
            prefix: "4903",
            length: 16
        }, {
            name: "Visa",
            short_name: "visa",
            prefix: "4",
            length: 16
        }, {
            name: "Visa Electron",
            short_name: "electron",
            prefix: "4026",
            length: 16
        } ],
        currency_types: [ {
            code: "AED",
            name: "United Arab Emirates Dirham"
        }, {
            code: "AFN",
            name: "Afghanistan Afghani"
        }, {
            code: "ALL",
            name: "Albania Lek"
        }, {
            code: "AMD",
            name: "Armenia Dram"
        }, {
            code: "ANG",
            name: "Netherlands Antilles Guilder"
        }, {
            code: "AOA",
            name: "Angola Kwanza"
        }, {
            code: "ARS",
            name: "Argentina Peso"
        }, {
            code: "AUD",
            name: "Australia Dollar"
        }, {
            code: "AWG",
            name: "Aruba Guilder"
        }, {
            code: "AZN",
            name: "Azerbaijan New Manat"
        }, {
            code: "BAM",
            name: "Bosnia and Herzegovina Convertible Marka"
        }, {
            code: "BBD",
            name: "Barbados Dollar"
        }, {
            code: "BDT",
            name: "Bangladesh Taka"
        }, {
            code: "BGN",
            name: "Bulgaria Lev"
        }, {
            code: "BHD",
            name: "Bahrain Dinar"
        }, {
            code: "BIF",
            name: "Burundi Franc"
        }, {
            code: "BMD",
            name: "Bermuda Dollar"
        }, {
            code: "BND",
            name: "Brunei Darussalam Dollar"
        }, {
            code: "BOB",
            name: "Bolivia Boliviano"
        }, {
            code: "BRL",
            name: "Brazil Real"
        }, {
            code: "BSD",
            name: "Bahamas Dollar"
        }, {
            code: "BTN",
            name: "Bhutan Ngultrum"
        }, {
            code: "BWP",
            name: "Botswana Pula"
        }, {
            code: "BYR",
            name: "Belarus Ruble"
        }, {
            code: "BZD",
            name: "Belize Dollar"
        }, {
            code: "CAD",
            name: "Canada Dollar"
        }, {
            code: "CDF",
            name: "Congo/Kinshasa Franc"
        }, {
            code: "CHF",
            name: "Switzerland Franc"
        }, {
            code: "CLP",
            name: "Chile Peso"
        }, {
            code: "CNY",
            name: "China Yuan Renminbi"
        }, {
            code: "COP",
            name: "Colombia Peso"
        }, {
            code: "CRC",
            name: "Costa Rica Colon"
        }, {
            code: "CUC",
            name: "Cuba Convertible Peso"
        }, {
            code: "CUP",
            name: "Cuba Peso"
        }, {
            code: "CVE",
            name: "Cape Verde Escudo"
        }, {
            code: "CZK",
            name: "Czech Republic Koruna"
        }, {
            code: "DJF",
            name: "Djibouti Franc"
        }, {
            code: "DKK",
            name: "Denmark Krone"
        }, {
            code: "DOP",
            name: "Dominican Republic Peso"
        }, {
            code: "DZD",
            name: "Algeria Dinar"
        }, {
            code: "EGP",
            name: "Egypt Pound"
        }, {
            code: "ERN",
            name: "Eritrea Nakfa"
        }, {
            code: "ETB",
            name: "Ethiopia Birr"
        }, {
            code: "EUR",
            name: "Euro Member Countries"
        }, {
            code: "FJD",
            name: "Fiji Dollar"
        }, {
            code: "FKP",
            name: "Falkland Islands (Malvinas) Pound"
        }, {
            code: "GBP",
            name: "United Kingdom Pound"
        }, {
            code: "GEL",
            name: "Georgia Lari"
        }, {
            code: "GGP",
            name: "Guernsey Pound"
        }, {
            code: "GHS",
            name: "Ghana Cedi"
        }, {
            code: "GIP",
            name: "Gibraltar Pound"
        }, {
            code: "GMD",
            name: "Gambia Dalasi"
        }, {
            code: "GNF",
            name: "Guinea Franc"
        }, {
            code: "GTQ",
            name: "Guatemala Quetzal"
        }, {
            code: "GYD",
            name: "Guyana Dollar"
        }, {
            code: "HKD",
            name: "Hong Kong Dollar"
        }, {
            code: "HNL",
            name: "Honduras Lempira"
        }, {
            code: "HRK",
            name: "Croatia Kuna"
        }, {
            code: "HTG",
            name: "Haiti Gourde"
        }, {
            code: "HUF",
            name: "Hungary Forint"
        }, {
            code: "IDR",
            name: "Indonesia Rupiah"
        }, {
            code: "ILS",
            name: "Israel Shekel"
        }, {
            code: "IMP",
            name: "Isle of Man Pound"
        }, {
            code: "INR",
            name: "India Rupee"
        }, {
            code: "IQD",
            name: "Iraq Dinar"
        }, {
            code: "IRR",
            name: "Iran Rial"
        }, {
            code: "ISK",
            name: "Iceland Krona"
        }, {
            code: "JEP",
            name: "Jersey Pound"
        }, {
            code: "JMD",
            name: "Jamaica Dollar"
        }, {
            code: "JOD",
            name: "Jordan Dinar"
        }, {
            code: "JPY",
            name: "Japan Yen"
        }, {
            code: "KES",
            name: "Kenya Shilling"
        }, {
            code: "KGS",
            name: "Kyrgyzstan Som"
        }, {
            code: "KHR",
            name: "Cambodia Riel"
        }, {
            code: "KMF",
            name: "Comoros Franc"
        }, {
            code: "KPW",
            name: "Korea (North) Won"
        }, {
            code: "KRW",
            name: "Korea (South) Won"
        }, {
            code: "KWD",
            name: "Kuwait Dinar"
        }, {
            code: "KYD",
            name: "Cayman Islands Dollar"
        }, {
            code: "KZT",
            name: "Kazakhstan Tenge"
        }, {
            code: "LAK",
            name: "Laos Kip"
        }, {
            code: "LBP",
            name: "Lebanon Pound"
        }, {
            code: "LKR",
            name: "Sri Lanka Rupee"
        }, {
            code: "LRD",
            name: "Liberia Dollar"
        }, {
            code: "LSL",
            name: "Lesotho Loti"
        }, {
            code: "LTL",
            name: "Lithuania Litas"
        }, {
            code: "LYD",
            name: "Libya Dinar"
        }, {
            code: "MAD",
            name: "Morocco Dirham"
        }, {
            code: "MDL",
            name: "Moldova Leu"
        }, {
            code: "MGA",
            name: "Madagascar Ariary"
        }, {
            code: "MKD",
            name: "Macedonia Denar"
        }, {
            code: "MMK",
            name: "Myanmar (Burma) Kyat"
        }, {
            code: "MNT",
            name: "Mongolia Tughrik"
        }, {
            code: "MOP",
            name: "Macau Pataca"
        }, {
            code: "MRO",
            name: "Mauritania Ouguiya"
        }, {
            code: "MUR",
            name: "Mauritius Rupee"
        }, {
            code: "MVR",
            name: "Maldives (Maldive Islands) Rufiyaa"
        }, {
            code: "MWK",
            name: "Malawi Kwacha"
        }, {
            code: "MXN",
            name: "Mexico Peso"
        }, {
            code: "MYR",
            name: "Malaysia Ringgit"
        }, {
            code: "MZN",
            name: "Mozambique Metical"
        }, {
            code: "NAD",
            name: "Namibia Dollar"
        }, {
            code: "NGN",
            name: "Nigeria Naira"
        }, {
            code: "NIO",
            name: "Nicaragua Cordoba"
        }, {
            code: "NOK",
            name: "Norway Krone"
        }, {
            code: "NPR",
            name: "Nepal Rupee"
        }, {
            code: "NZD",
            name: "New Zealand Dollar"
        }, {
            code: "OMR",
            name: "Oman Rial"
        }, {
            code: "PAB",
            name: "Panama Balboa"
        }, {
            code: "PEN",
            name: "Peru Nuevo Sol"
        }, {
            code: "PGK",
            name: "Papua New Guinea Kina"
        }, {
            code: "PHP",
            name: "Philippines Peso"
        }, {
            code: "PKR",
            name: "Pakistan Rupee"
        }, {
            code: "PLN",
            name: "Poland Zloty"
        }, {
            code: "PYG",
            name: "Paraguay Guarani"
        }, {
            code: "QAR",
            name: "Qatar Riyal"
        }, {
            code: "RON",
            name: "Romania New Leu"
        }, {
            code: "RSD",
            name: "Serbia Dinar"
        }, {
            code: "RUB",
            name: "Russia Ruble"
        }, {
            code: "RWF",
            name: "Rwanda Franc"
        }, {
            code: "SAR",
            name: "Saudi Arabia Riyal"
        }, {
            code: "SBD",
            name: "Solomon Islands Dollar"
        }, {
            code: "SCR",
            name: "Seychelles Rupee"
        }, {
            code: "SDG",
            name: "Sudan Pound"
        }, {
            code: "SEK",
            name: "Sweden Krona"
        }, {
            code: "SGD",
            name: "Singapore Dollar"
        }, {
            code: "SHP",
            name: "Saint Helena Pound"
        }, {
            code: "SLL",
            name: "Sierra Leone Leone"
        }, {
            code: "SOS",
            name: "Somalia Shilling"
        }, {
            code: "SPL",
            name: "Seborga Luigino"
        }, {
            code: "SRD",
            name: "Suriname Dollar"
        }, {
            code: "STD",
            name: "São Tomé and Príncipe Dobra"
        }, {
            code: "SVC",
            name: "El Salvador Colon"
        }, {
            code: "SYP",
            name: "Syria Pound"
        }, {
            code: "SZL",
            name: "Swaziland Lilangeni"
        }, {
            code: "THB",
            name: "Thailand Baht"
        }, {
            code: "TJS",
            name: "Tajikistan Somoni"
        }, {
            code: "TMT",
            name: "Turkmenistan Manat"
        }, {
            code: "TND",
            name: "Tunisia Dinar"
        }, {
            code: "TOP",
            name: "Tonga Pa'anga"
        }, {
            code: "TRY",
            name: "Turkey Lira"
        }, {
            code: "TTD",
            name: "Trinidad and Tobago Dollar"
        }, {
            code: "TVD",
            name: "Tuvalu Dollar"
        }, {
            code: "TWD",
            name: "Taiwan New Dollar"
        }, {
            code: "TZS",
            name: "Tanzania Shilling"
        }, {
            code: "UAH",
            name: "Ukraine Hryvnia"
        }, {
            code: "UGX",
            name: "Uganda Shilling"
        }, {
            code: "USD",
            name: "United States Dollar"
        }, {
            code: "UYU",
            name: "Uruguay Peso"
        }, {
            code: "UZS",
            name: "Uzbekistan Som"
        }, {
            code: "VEF",
            name: "Venezuela Bolivar"
        }, {
            code: "VND",
            name: "Viet Nam Dong"
        }, {
            code: "VUV",
            name: "Vanuatu Vatu"
        }, {
            code: "WST",
            name: "Samoa Tala"
        }, {
            code: "XAF",
            name: "Communauté Financière Africaine (BEAC) CFA Franc BEAC"
        }, {
            code: "XCD",
            name: "East Caribbean Dollar"
        }, {
            code: "XDR",
            name: "International Monetary Fund (IMF) Special Drawing Rights"
        }, {
            code: "XOF",
            name: "Communauté Financière Africaine (BCEAO) Franc"
        }, {
            code: "XPF",
            name: "Comptoirs Français du Pacifique (CFP) Franc"
        }, {
            code: "YER",
            name: "Yemen Rial"
        }, {
            code: "ZAR",
            name: "South Africa Rand"
        }, {
            code: "ZMW",
            name: "Zambia Kwacha"
        }, {
            code: "ZWD",
            name: "Zimbabwe Dollar"
        } ]
    }, q = Object.prototype.hasOwnProperty, r = Object.keys || function(a) {
        var b = [];
        for (var c in a) q.call(a, c) && b.push(c);
        return b;
    };
    a.prototype.get = function(a) {
        return g(p[a]);
    }, a.prototype.mac_address = function(a) {
        a = b(a), a.separator || (a.separator = a.networkVersion ? "." : ":");
        var c = "ABCDEF1234567890", d = "";
        return d = a.networkVersion ? this.n(this.string, 3, {
            pool: c,
            length: 4
        }).join(a.separator) : this.n(this.string, 6, {
            pool: c,
            length: 2
        }).join(a.separator);
    }, a.prototype.normal = function(a) {
        a = b(a, {
            mean: 0,
            dev: 1
        });
        var c, d, e, f, g = a.mean, h = a.dev;
        do d = 2 * this.random() - 1, e = 2 * this.random() - 1, c = d * d + e * e; while (c >= 1);
        return f = d * Math.sqrt(-2 * Math.log(c) / c), h * f + g;
    }, a.prototype.radio = function(a) {
        a = b(a, {
            side: "?"
        });
        var c = "";
        switch (a.side.toLowerCase()) {
          case "east":
          case "e":
            c = "W";
            break;

          case "west":
          case "w":
            c = "K";
            break;

          default:
            c = this.character({
                pool: "KW"
            });
        }
        return c + this.character({
            alpha: !0,
            casing: "upper"
        }) + this.character({
            alpha: !0,
            casing: "upper"
        }) + this.character({
            alpha: !0,
            casing: "upper"
        });
    }, a.prototype.set = function(a, b) {
        "string" == typeof a ? p[a] = b : p = g(a, p);
    }, a.prototype.tv = function(a) {
        return this.radio(a);
    }, a.prototype.cnpj = function() {
        var a = this.n(this.natural, 8, {
            max: 9
        }), b = 2 + 6 * a[7] + 7 * a[6] + 8 * a[5] + 9 * a[4] + 2 * a[3] + 3 * a[2] + 4 * a[1] + 5 * a[0];
        b = 11 - b % 11, b >= 10 && (b = 0);
        var c = 2 * b + 3 + 7 * a[7] + 8 * a[6] + 9 * a[5] + 2 * a[4] + 3 * a[3] + 4 * a[2] + 5 * a[1] + 6 * a[0];
        return c = 11 - c % 11, c >= 10 && (c = 0), "" + a[0] + a[1] + "." + a[2] + a[3] + a[4] + "." + a[5] + a[6] + a[7] + "/0001-" + b + c;
    }, a.prototype.mersenne_twister = function(a) {
        return new s(a);
    }, a.prototype.blueimp_md5 = function() {
        return new t();
    };
    var s = function(a) {
        void 0 === a && (a = Math.floor(Math.random() * Math.pow(10, 13))), this.N = 624, 
        this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, 
        this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(a);
    };
    s.prototype.init_genrand = function(a) {
        for (this.mt[0] = a >>> 0, this.mti = 1; this.mti < this.N; this.mti++) a = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, 
        this.mt[this.mti] = (1812433253 * ((4294901760 & a) >>> 16) << 16) + 1812433253 * (65535 & a) + this.mti, 
        this.mt[this.mti] >>>= 0;
    }, s.prototype.init_by_array = function(a, b) {
        var c, d, e = 1, f = 0;
        for (this.init_genrand(19650218), c = this.N > b ? this.N : b; c; c--) d = this.mt[e - 1] ^ this.mt[e - 1] >>> 30, 
        this.mt[e] = (this.mt[e] ^ (1664525 * ((4294901760 & d) >>> 16) << 16) + 1664525 * (65535 & d)) + a[f] + f, 
        this.mt[e] >>>= 0, e++, f++, e >= this.N && (this.mt[0] = this.mt[this.N - 1], e = 1), 
        f >= b && (f = 0);
        for (c = this.N - 1; c; c--) d = this.mt[e - 1] ^ this.mt[e - 1] >>> 30, this.mt[e] = (this.mt[e] ^ (1566083941 * ((4294901760 & d) >>> 16) << 16) + 1566083941 * (65535 & d)) - e, 
        this.mt[e] >>>= 0, e++, e >= this.N && (this.mt[0] = this.mt[this.N - 1], e = 1);
        this.mt[0] = 2147483648;
    }, s.prototype.genrand_int32 = function() {
        var a, b = new Array(0, this.MATRIX_A);
        if (this.mti >= this.N) {
            var c;
            for (this.mti === this.N + 1 && this.init_genrand(5489), c = 0; c < this.N - this.M; c++) a = this.mt[c] & this.UPPER_MASK | this.mt[c + 1] & this.LOWER_MASK, 
            this.mt[c] = this.mt[c + this.M] ^ a >>> 1 ^ b[1 & a];
            for (;c < this.N - 1; c++) a = this.mt[c] & this.UPPER_MASK | this.mt[c + 1] & this.LOWER_MASK, 
            this.mt[c] = this.mt[c + (this.M - this.N)] ^ a >>> 1 ^ b[1 & a];
            a = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ a >>> 1 ^ b[1 & a], 
            this.mti = 0;
        }
        return a = this.mt[this.mti++], a ^= a >>> 11, a ^= a << 7 & 2636928640, a ^= a << 15 & 4022730752, 
        a ^= a >>> 18, a >>> 0;
    }, s.prototype.genrand_int31 = function() {
        return this.genrand_int32() >>> 1;
    }, s.prototype.genrand_real1 = function() {
        return this.genrand_int32() * (1 / 4294967295);
    }, s.prototype.random = function() {
        return this.genrand_int32() * (1 / 4294967296);
    }, s.prototype.genrand_real3 = function() {
        return (this.genrand_int32() + .5) * (1 / 4294967296);
    }, s.prototype.genrand_res53 = function() {
        var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;
        return (67108864 * a + b) * (1 / 9007199254740992);
    };
    var t = function() {};
    t.prototype.VERSION = "1.0.1", t.prototype.safe_add = function(a, b) {
        var c = (65535 & a) + (65535 & b), d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | 65535 & c;
    }, t.prototype.bit_roll = function(a, b) {
        return a << b | a >>> 32 - b;
    }, t.prototype.md5_cmn = function(a, b, c, d, e, f) {
        return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(b, a), this.safe_add(d, f)), e), c);
    }, t.prototype.md5_ff = function(a, b, c, d, e, f, g) {
        return this.md5_cmn(b & c | ~b & d, a, b, e, f, g);
    }, t.prototype.md5_gg = function(a, b, c, d, e, f, g) {
        return this.md5_cmn(b & d | c & ~d, a, b, e, f, g);
    }, t.prototype.md5_hh = function(a, b, c, d, e, f, g) {
        return this.md5_cmn(b ^ c ^ d, a, b, e, f, g);
    }, t.prototype.md5_ii = function(a, b, c, d, e, f, g) {
        return this.md5_cmn(c ^ (b | ~d), a, b, e, f, g);
    }, t.prototype.binl_md5 = function(a, b) {
        a[b >> 5] |= 128 << b % 32, a[(b + 64 >>> 9 << 4) + 14] = b;
        var c, d, e, f, g, h = 1732584193, i = -271733879, j = -1732584194, k = 271733878;
        for (c = 0; c < a.length; c += 16) d = h, e = i, f = j, g = k, h = this.md5_ff(h, i, j, k, a[c], 7, -680876936), 
        k = this.md5_ff(k, h, i, j, a[c + 1], 12, -389564586), j = this.md5_ff(j, k, h, i, a[c + 2], 17, 606105819), 
        i = this.md5_ff(i, j, k, h, a[c + 3], 22, -1044525330), h = this.md5_ff(h, i, j, k, a[c + 4], 7, -176418897), 
        k = this.md5_ff(k, h, i, j, a[c + 5], 12, 1200080426), j = this.md5_ff(j, k, h, i, a[c + 6], 17, -1473231341), 
        i = this.md5_ff(i, j, k, h, a[c + 7], 22, -45705983), h = this.md5_ff(h, i, j, k, a[c + 8], 7, 1770035416), 
        k = this.md5_ff(k, h, i, j, a[c + 9], 12, -1958414417), j = this.md5_ff(j, k, h, i, a[c + 10], 17, -42063), 
        i = this.md5_ff(i, j, k, h, a[c + 11], 22, -1990404162), h = this.md5_ff(h, i, j, k, a[c + 12], 7, 1804603682), 
        k = this.md5_ff(k, h, i, j, a[c + 13], 12, -40341101), j = this.md5_ff(j, k, h, i, a[c + 14], 17, -1502002290), 
        i = this.md5_ff(i, j, k, h, a[c + 15], 22, 1236535329), h = this.md5_gg(h, i, j, k, a[c + 1], 5, -165796510), 
        k = this.md5_gg(k, h, i, j, a[c + 6], 9, -1069501632), j = this.md5_gg(j, k, h, i, a[c + 11], 14, 643717713), 
        i = this.md5_gg(i, j, k, h, a[c], 20, -373897302), h = this.md5_gg(h, i, j, k, a[c + 5], 5, -701558691), 
        k = this.md5_gg(k, h, i, j, a[c + 10], 9, 38016083), j = this.md5_gg(j, k, h, i, a[c + 15], 14, -660478335), 
        i = this.md5_gg(i, j, k, h, a[c + 4], 20, -405537848), h = this.md5_gg(h, i, j, k, a[c + 9], 5, 568446438), 
        k = this.md5_gg(k, h, i, j, a[c + 14], 9, -1019803690), j = this.md5_gg(j, k, h, i, a[c + 3], 14, -187363961), 
        i = this.md5_gg(i, j, k, h, a[c + 8], 20, 1163531501), h = this.md5_gg(h, i, j, k, a[c + 13], 5, -1444681467), 
        k = this.md5_gg(k, h, i, j, a[c + 2], 9, -51403784), j = this.md5_gg(j, k, h, i, a[c + 7], 14, 1735328473), 
        i = this.md5_gg(i, j, k, h, a[c + 12], 20, -1926607734), h = this.md5_hh(h, i, j, k, a[c + 5], 4, -378558), 
        k = this.md5_hh(k, h, i, j, a[c + 8], 11, -2022574463), j = this.md5_hh(j, k, h, i, a[c + 11], 16, 1839030562), 
        i = this.md5_hh(i, j, k, h, a[c + 14], 23, -35309556), h = this.md5_hh(h, i, j, k, a[c + 1], 4, -1530992060), 
        k = this.md5_hh(k, h, i, j, a[c + 4], 11, 1272893353), j = this.md5_hh(j, k, h, i, a[c + 7], 16, -155497632), 
        i = this.md5_hh(i, j, k, h, a[c + 10], 23, -1094730640), h = this.md5_hh(h, i, j, k, a[c + 13], 4, 681279174), 
        k = this.md5_hh(k, h, i, j, a[c], 11, -358537222), j = this.md5_hh(j, k, h, i, a[c + 3], 16, -722521979), 
        i = this.md5_hh(i, j, k, h, a[c + 6], 23, 76029189), h = this.md5_hh(h, i, j, k, a[c + 9], 4, -640364487), 
        k = this.md5_hh(k, h, i, j, a[c + 12], 11, -421815835), j = this.md5_hh(j, k, h, i, a[c + 15], 16, 530742520), 
        i = this.md5_hh(i, j, k, h, a[c + 2], 23, -995338651), h = this.md5_ii(h, i, j, k, a[c], 6, -198630844), 
        k = this.md5_ii(k, h, i, j, a[c + 7], 10, 1126891415), j = this.md5_ii(j, k, h, i, a[c + 14], 15, -1416354905), 
        i = this.md5_ii(i, j, k, h, a[c + 5], 21, -57434055), h = this.md5_ii(h, i, j, k, a[c + 12], 6, 1700485571), 
        k = this.md5_ii(k, h, i, j, a[c + 3], 10, -1894986606), j = this.md5_ii(j, k, h, i, a[c + 10], 15, -1051523), 
        i = this.md5_ii(i, j, k, h, a[c + 1], 21, -2054922799), h = this.md5_ii(h, i, j, k, a[c + 8], 6, 1873313359), 
        k = this.md5_ii(k, h, i, j, a[c + 15], 10, -30611744), j = this.md5_ii(j, k, h, i, a[c + 6], 15, -1560198380), 
        i = this.md5_ii(i, j, k, h, a[c + 13], 21, 1309151649), h = this.md5_ii(h, i, j, k, a[c + 4], 6, -145523070), 
        k = this.md5_ii(k, h, i, j, a[c + 11], 10, -1120210379), j = this.md5_ii(j, k, h, i, a[c + 2], 15, 718787259), 
        i = this.md5_ii(i, j, k, h, a[c + 9], 21, -343485551), h = this.safe_add(h, d), 
        i = this.safe_add(i, e), j = this.safe_add(j, f), k = this.safe_add(k, g);
        return [ h, i, j, k ];
    }, t.prototype.binl2rstr = function(a) {
        var b, c = "";
        for (b = 0; b < 32 * a.length; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return c;
    }, t.prototype.rstr2binl = function(a) {
        var b, c = [];
        for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1) c[b] = 0;
        for (b = 0; b < 8 * a.length; b += 8) c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
        return c;
    }, t.prototype.rstr_md5 = function(a) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(a), 8 * a.length));
    }, t.prototype.rstr_hmac_md5 = function(a, b) {
        var c, d, e = this.rstr2binl(a), f = [], g = [];
        for (f[15] = g[15] = void 0, e.length > 16 && (e = this.binl_md5(e, 8 * a.length)), 
        c = 0; 16 > c; c += 1) f[c] = 909522486 ^ e[c], g[c] = 1549556828 ^ e[c];
        return d = this.binl_md5(f.concat(this.rstr2binl(b)), 512 + 8 * b.length), this.binl2rstr(this.binl_md5(g.concat(d), 640));
    }, t.prototype.rstr2hex = function(a) {
        var b, c, d = "0123456789abcdef", e = "";
        for (c = 0; c < a.length; c += 1) b = a.charCodeAt(c), e += d.charAt(b >>> 4 & 15) + d.charAt(15 & b);
        return e;
    }, t.prototype.str2rstr_utf8 = function(a) {
        return unescape(encodeURIComponent(a));
    }, t.prototype.raw_md5 = function(a) {
        return this.rstr_md5(this.str2rstr_utf8(a));
    }, t.prototype.hex_md5 = function(a) {
        return this.rstr2hex(this.raw_md5(a));
    }, t.prototype.raw_hmac_md5 = function(a, b) {
        return this.rstr_hmac_md5(this.str2rstr_utf8(a), this.str2rstr_utf8(b));
    }, t.prototype.hex_hmac_md5 = function(a, b) {
        return this.rstr2hex(this.raw_hmac_md5(a, b));
    }, t.prototype.md5 = function(a, b, c) {
        return b ? c ? this.raw_hmac_md5(b, a) : this.hex_hmac_md5(b, a) : c ? this.raw_md5(a) : this.hex_md5(a);
    }, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = a), 
    exports.Chance = a), "function" == typeof define && define.amd && define([], function() {
        return a;
    }), "undefined" != typeof importScripts && (chance = new a()), "object" == typeof window && "object" == typeof window.document && (window.Chance = a, 
    window.chance = new a());
}();

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function() {
    /**
   * Class for managing events.
   * Can be extended to provide event functionality in other classes.
   *
   * @class EventEmitter Manages event registering and emitting.
   */
    function EventEmitter() {}
    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;
    /**
   * Finds the index of the listener for the event in it's storage array.
   *
   * @param {Function[]} listeners Array of listeners to search through.
   * @param {Function} listener Method to look for.
   * @return {Number} Index of the specified listener, -1 if not found
   * @api private
   */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }
        return -1;
    }
    /**
   * Alias a method while keeping the context correct, to allow for overwriting of target method.
   *
   * @param {String} name The name of the target method.
   * @return {Function} The aliased method
   * @api private
   */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }
    /**
   * Returns the listener array for the specified event.
   * Will initialise the event object and listener arrays if required.
   * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
   * Each property in the object response is an array of listener functions.
   *
   * @param {String|RegExp} evt Name of the event to return the listeners from.
   * @return {Function[]|Object} All listener functions for the event.
   */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;
        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (typeof evt === "object") {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        } else {
            response = events[evt] || (events[evt] = []);
        }
        return response;
    };
    /**
   * Takes a list of listener objects and flattens it into a list of listener functions.
   *
   * @param {Object[]} listeners Raw listener objects.
   * @return {Function[]} Just the listener functions.
   */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;
        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }
        return flatListeners;
    };
    /**
   * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
   *
   * @param {String|RegExp} evt Name of the event to return the listeners from.
   * @return {Object} All listener functions for an event in an object.
   */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;
        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }
        return response || listeners;
    };
    /**
   * Adds a listener function to the specified event.
   * The listener will not be added if it is a duplicate.
   * If the listener returns true then it will be removed after it is called.
   * If you pass a regular expression as the event name then the listener will be added to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to attach the listener to.
   * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === "object";
        var key;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }
        return this;
    };
    /**
   * Alias of addListener
   */
    proto.on = alias("addListener");
    /**
   * Semi-alias of addListener. It will add a listener that will be
   * automatically removed after it's first execution.
   *
   * @param {String|RegExp} evt Name of the event to attach the listener to.
   * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };
    /**
   * Alias of addOnceListener.
   */
    proto.once = alias("addOnceListener");
    /**
   * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
   * You need to tell it what event names should be matched by a regex.
   *
   * @param {String} evt Name of the event to create.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };
    /**
   * Uses defineEvent to define multiple events.
   *
   * @param {String[]} evts An array of event names to define.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };
    /**
   * Removes a listener function from the specified event.
   * When passed a regular expression as the event name, it will remove the listener from all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to remove the listener from.
   * @param {Function} listener Method to remove from the event.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);
                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }
        return this;
    };
    /**
   * Alias of removeListener
   */
    proto.off = alias("removeListener");
    /**
   * Adds listeners in bulk using the manipulateListeners method.
   * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
   * You can also pass it a regular expression to add the array of listeners to all events that match it.
   * Yeah, this function does quite a bit. That's probably a bad thing.
   *
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to add.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };
    /**
   * Removes listeners in bulk using the manipulateListeners method.
   * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
   * You can also pass it an event name and an array of listeners to be removed.
   * You can also pass it a regular expression to remove the listeners from all events that match it.
   *
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to remove.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };
    /**
   * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
   * The first argument will determine if the listeners are removed (true) or added (false).
   * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
   * You can also pass it an event name and an array of listeners to be added/removed.
   * You can also pass it a regular expression to manipulate the listeners of all events that match it.
   *
   * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;
        // If evt is an object then pass each of it's properties to this method
        if (typeof evt === "object" && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === "function") {
                        single.call(this, i, value);
                    } else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        } else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }
        return this;
    };
    /**
   * Removes all listeners from a specified event.
   * If you do not specify an event then all listeners will be removed.
   * That means every event will be emptied.
   * You can also pass a regex to remove all events that match it.
   *
   * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;
        // Remove different things depending on the state of evt
        if (type === "string") {
            // Remove all listeners for the specified event
            delete events[evt];
        } else if (type === "object") {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        } else {
            // Remove all listeners in all events
            delete this._events;
        }
        return this;
    };
    /**
   * Alias of removeEvent.
   *
   * Added to mirror the node API.
   */
    proto.removeAllListeners = alias("removeEvent");
    /**
   * Emits an event of your choice.
   * When emitted, every listener attached to that event will be executed.
   * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
   * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
   * So they will not arrive within the array on the other side, they will be separate.
   * You can also pass a regular expression to emit to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
   * @param {Array} [args] Optional array of arguments to be passed to each listener.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;
                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];
                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }
                    response = listener.listener.apply(this, args || []);
                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }
        return this;
    };
    /**
   * Alias of emitEvent
   */
    proto.trigger = alias("emitEvent");
    /**
   * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
   * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
   * @param {...*} Optional additional arguments to be passed to each listener.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };
    /**
   * Sets the current value to check against when executing listeners. If a
   * listeners return value matches the one set here then it will be removed
   * after execution. This value defaults to true.
   *
   * @param {*} value The new value to check for when executing listeners.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };
    /**
   * Fetches the current value to check against when executing listeners. If
   * the listeners return value matches this one then it should be removed
   * automatically. It will return true by default.
   *
   * @return {*|Boolean} The current value to check for or the default, true.
   * @api private
   */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty("_onceReturnValue")) {
            return this._onceReturnValue;
        } else {
            return true;
        }
    };
    /**
   * Fetches the events object and creates one if required.
   *
   * @return {Object} The events storage object.
   * @api private
   */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };
    /**
   * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
   *
   * @return {Function} Non conflicting EventEmitter class.
   */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };
    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === "function" && define.amd) {
        define("eventEmitter/EventEmitter", [], function() {
            return EventEmitter;
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = EventEmitter;
    } else {
        this.EventEmitter = EventEmitter;
    }
}).call(this);

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */
/*jshint browser: true, undef: true, unused: true */
/*global define: false */
(function(window) {
    var docElem = document.documentElement;
    var bind = function() {};
    function getIEEvent(obj) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }
    if (docElem.addEventListener) {
        bind = function(obj, type, fn) {
            obj.addEventListener(type, fn, false);
        };
    } else if (docElem.attachEvent) {
        bind = function(obj, type, fn) {
            obj[type + fn] = fn.handleEvent ? function() {
                var event = getIEEvent(obj);
                fn.handleEvent.call(fn, event);
            } : function() {
                var event = getIEEvent(obj);
                fn.call(obj, event);
            };
            obj.attachEvent("on" + type, obj[type + fn]);
        };
    }
    var unbind = function() {};
    if (docElem.removeEventListener) {
        unbind = function(obj, type, fn) {
            obj.removeEventListener(type, fn, false);
        };
    } else if (docElem.detachEvent) {
        unbind = function(obj, type, fn) {
            obj.detachEvent("on" + type, obj[type + fn]);
            try {
                delete obj[type + fn];
            } catch (err) {
                // can't delete window object properties
                obj[type + fn] = undefined;
            }
        };
    }
    var eventie = {
        bind: bind,
        unbind: unbind
    };
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD
        define("eventie/eventie", eventie);
    } else {
        // browser global
        window.eventie = eventie;
    }
})(this);

/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(window, factory) {
    // universal module definition
    /*global define: false, module: false, require: false */
    if (typeof define === "function" && define.amd) {
        // AMD
        define([ "eventEmitter/EventEmitter", "eventie/eventie" ], function(EventEmitter, eventie) {
            return factory(window, EventEmitter, eventie);
        });
    } else if (typeof exports === "object") {
        // CommonJS
        module.exports = factory(window, require("wolfy87-eventemitter"), require("eventie"));
    } else {
        // browser global
        window.imagesLoaded = factory(window, window.EventEmitter, window.eventie);
    }
})(window, // --------------------------  factory -------------------------- //
function factory(window, EventEmitter, eventie) {
    var $ = window.jQuery;
    var console = window.console;
    var hasConsole = typeof console !== "undefined";
    // -------------------------- helpers -------------------------- //
    // extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }
    var objToString = Object.prototype.toString;
    function isArray(obj) {
        return objToString.call(obj) === "[object Array]";
    }
    // turn element or nodeList into an array
    function makeArray(obj) {
        var ary = [];
        if (isArray(obj)) {
            // use object if already an array
            ary = obj;
        } else if (typeof obj.length === "number") {
            // convert nodeList to array
            for (var i = 0, len = obj.length; i < len; i++) {
                ary.push(obj[i]);
            }
        } else {
            // array of single index
            ary.push(obj);
        }
        return ary;
    }
    // -------------------------- imagesLoaded -------------------------- //
    /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
    function ImagesLoaded(elem, options, onAlways) {
        // coerce ImagesLoaded() without new, to be new ImagesLoaded()
        if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem, options);
        }
        // use elem as selector string
        if (typeof elem === "string") {
            elem = document.querySelectorAll(elem);
        }
        this.elements = makeArray(elem);
        this.options = extend({}, this.options);
        if (typeof options === "function") {
            onAlways = options;
        } else {
            extend(this.options, options);
        }
        if (onAlways) {
            this.on("always", onAlways);
        }
        this.getImages();
        if ($) {
            // add jQuery Deferred object
            this.jqDeferred = new $.Deferred();
        }
        // HACK check async to allow time to bind listeners
        var _this = this;
        setTimeout(function() {
            _this.check();
        });
    }
    ImagesLoaded.prototype = new EventEmitter();
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        // filter & find items if we have an item selector
        for (var i = 0, len = this.elements.length; i < len; i++) {
            var elem = this.elements[i];
            // filter siblings
            if (elem.nodeName === "IMG") {
                this.addImage(elem);
            }
            // find children
            // no non-element nodes, #143
            var nodeType = elem.nodeType;
            if (!nodeType || !(nodeType === 1 || nodeType === 9 || nodeType === 11)) {
                continue;
            }
            var childElems = elem.querySelectorAll("img");
            // concat childElems to filterFound array
            for (var j = 0, jLen = childElems.length; j < jLen; j++) {
                var img = childElems[j];
                this.addImage(img);
            }
        }
    };
    /**
   * @param {Image} img
   */
    ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        var checkedCount = 0;
        var length = this.images.length;
        this.hasAnyBroken = false;
        // complete if no images
        if (!length) {
            this.complete();
            return;
        }
        function onConfirm(image, message) {
            if (_this.options.debug && hasConsole) {
                console.log("confirm", image, message);
            }
            _this.progress(image);
            checkedCount++;
            if (checkedCount === length) {
                _this.complete();
            }
            return true;
        }
        for (var i = 0; i < length; i++) {
            var loadingImage = this.images[i];
            loadingImage.on("confirm", onConfirm);
            loadingImage.check();
        }
    };
    ImagesLoaded.prototype.progress = function(image) {
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        // HACK - Chrome triggers event before object properties have changed. #83
        var _this = this;
        setTimeout(function() {
            _this.emit("progress", _this, image);
            if (_this.jqDeferred && _this.jqDeferred.notify) {
                _this.jqDeferred.notify(_this, image);
            }
        });
    };
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        var _this = this;
        // HACK - another setTimeout so that confirm happens after progress
        setTimeout(function() {
            _this.emit(eventName, _this);
            _this.emit("always", _this);
            if (_this.jqDeferred) {
                var jqMethod = _this.hasAnyBroken ? "reject" : "resolve";
                _this.jqDeferred[jqMethod](_this);
            }
        });
    };
    // -------------------------- jquery -------------------------- //
    if ($) {
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
        };
    }
    // --------------------------  -------------------------- //
    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = new EventEmitter();
    LoadingImage.prototype.check = function() {
        // first check cached any previous images that have same src
        var resource = cache[this.img.src] || new Resource(this.img.src);
        if (resource.isConfirmed) {
            this.confirm(resource.isLoaded, "cached was confirmed");
            return;
        }
        // If complete is true and browser supports natural sizes,
        // try to check for image status manually.
        if (this.img.complete && this.img.naturalWidth !== undefined) {
            // report based on naturalWidth
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            return;
        }
        // If none of the checks above matched, simulate loading on detached element.
        var _this = this;
        resource.on("confirm", function(resrc, message) {
            _this.confirm(resrc.isLoaded, message);
            return true;
        });
        resource.check();
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emit("confirm", this, message);
    };
    // -------------------------- Resource -------------------------- //
    // Resource checks each src, only once
    // separate class from LoadingImage to prevent memory leaks. See #115
    var cache = {};
    function Resource(src) {
        this.src = src;
        // add to cache
        cache[src] = this;
    }
    Resource.prototype = new EventEmitter();
    Resource.prototype.check = function() {
        // only trigger checking once
        if (this.isChecked) {
            return;
        }
        // simulate loading on detached element
        var proxyImage = new Image();
        eventie.bind(proxyImage, "load", this);
        eventie.bind(proxyImage, "error", this);
        proxyImage.src = this.src;
        // set flag
        this.isChecked = true;
    };
    // ----- events ----- //
    // trigger specified handler for event type
    Resource.prototype.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    Resource.prototype.onload = function(event) {
        this.confirm(true, "onload");
        this.unbindProxyEvents(event);
    };
    Resource.prototype.onerror = function(event) {
        this.confirm(false, "onerror");
        this.unbindProxyEvents(event);
    };
    // ----- confirm ----- //
    Resource.prototype.confirm = function(isLoaded, message) {
        this.isConfirmed = true;
        this.isLoaded = isLoaded;
        this.emit("confirm", this, message);
    };
    Resource.prototype.unbindProxyEvents = function(event) {
        eventie.unbind(event.target, "load", this);
        eventie.unbind(event.target, "error", this);
    };
    // -----  ----- //
    return ImagesLoaded;
});

// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function(e) {
    function O(e, t) {
        return function(n) {
            return j(e.call(this, n), t);
        };
    }
    function M(e) {
        return function(t) {
            return this.lang().ordinal(e.call(this, t));
        };
    }
    function _() {}
    function D(e) {
        H(this, e);
    }
    function P(e) {
        var t = this._data = {}, n = e.years || e.year || e.y || 0, r = e.months || e.month || e.M || 0, i = e.weeks || e.week || e.w || 0, s = e.days || e.day || e.d || 0, o = e.hours || e.hour || e.h || 0, u = e.minutes || e.minute || e.m || 0, a = e.seconds || e.second || e.s || 0, f = e.milliseconds || e.millisecond || e.ms || 0;
        this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, 
        t.milliseconds = f % 1e3, a += B(f / 1e3), t.seconds = a % 60, u += B(a / 60), t.minutes = u % 60, 
        o += B(u / 60), t.hours = o % 24, s += B(o / 24), s += i * 7, t.days = s % 30, r += B(s / 30), 
        t.months = r % 12, n += B(r / 12), t.years = n;
    }
    function H(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
    }
    function B(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
    }
    function j(e, t) {
        var n = e + "";
        while (n.length < t) n = "0" + n;
        return n;
    }
    function F(e, t, n) {
        var r = t._milliseconds, i = t._days, s = t._months, o;
        r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), 
        e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())));
    }
    function I(e) {
        return Object.prototype.toString.call(e) === "[object Array]";
    }
    function q(e, t) {
        var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, s;
        for (s = 0; s < n; s++) ~~e[s] !== ~~t[s] && i++;
        return i + r;
    }
    function R(e, t) {
        return t.abbr = e, s[e] || (s[e] = new _()), s[e].set(t), s[e];
    }
    function U(e) {
        return e ? (!s[e] && o && require("./lang/" + e), s[e]) : t.fn._lang;
    }
    function z(e) {
        return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
    }
    function W(e) {
        var t = e.match(a), n, r;
        for (n = 0, r = t.length; n < r; n++) A[t[n]] ? t[n] = A[t[n]] : t[n] = z(t[n]);
        return function(i) {
            var s = "";
            for (n = 0; n < r; n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
            return s;
        };
    }
    function X(e, t) {
        function r(t) {
            return e.lang().longDateFormat(t) || t;
        }
        var n = 5;
        while (n-- && f.test(t)) t = t.replace(f, r);
        return C[t] || (C[t] = W(t)), C[t](e);
    }
    function V(e) {
        switch (e) {
          case "DDDD":
            return p;

          case "YYYY":
            return d;

          case "YYYYY":
            return v;

          case "S":
          case "SS":
          case "SSS":
          case "DDD":
            return h;

          case "MMM":
          case "MMMM":
          case "dd":
          case "ddd":
          case "dddd":
          case "a":
          case "A":
            return m;

          case "X":
            return b;

          case "Z":
          case "ZZ":
            return g;

          case "T":
            return y;

          case "MM":
          case "DD":
          case "YY":
          case "HH":
          case "hh":
          case "mm":
          case "ss":
          case "M":
          case "D":
          case "d":
          case "H":
          case "h":
          case "m":
          case "s":
            return c;

          default:
            return new RegExp(e.replace("\\", ""));
        }
    }
    function $(e, t, n) {
        var r, i, s = n._a;
        switch (e) {
          case "M":
          case "MM":
            s[1] = t == null ? 0 : ~~t - 1;
            break;

          case "MMM":
          case "MMMM":
            r = U(n._l).monthsParse(t), r != null ? s[1] = r : n._isValid = !1;
            break;

          case "D":
          case "DD":
          case "DDD":
          case "DDDD":
            t != null && (s[2] = ~~t);
            break;

          case "YY":
            s[0] = ~~t + (~~t > 68 ? 1900 : 2e3);
            break;

          case "YYYY":
          case "YYYYY":
            s[0] = ~~t;
            break;

          case "a":
          case "A":
            n._isPm = (t + "").toLowerCase() === "pm";
            break;

          case "H":
          case "HH":
          case "h":
          case "hh":
            s[3] = ~~t;
            break;

          case "m":
          case "mm":
            s[4] = ~~t;
            break;

          case "s":
          case "ss":
            s[5] = ~~t;
            break;

          case "S":
          case "SS":
          case "SSS":
            s[6] = ~~(("0." + t) * 1e3);
            break;

          case "X":
            n._d = new Date(parseFloat(t) * 1e3);
            break;

          case "Z":
          case "ZZ":
            n._useUTC = !0, r = (t + "").match(x), r && r[1] && (n._tzh = ~~r[1]), r && r[2] && (n._tzm = ~~r[2]), 
            r && r[0] === "+" && (n._tzh = -n._tzh, n._tzm = -n._tzm);
        }
        t == null && (n._isValid = !1);
    }
    function J(e) {
        var t, n, r = [];
        if (e._d) return;
        for (t = 0; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        r[3] += e._tzh || 0, r[4] += e._tzm || 0, n = new Date(0), e._useUTC ? (n.setUTCFullYear(r[0], r[1], r[2]), 
        n.setUTCHours(r[3], r[4], r[5], r[6])) : (n.setFullYear(r[0], r[1], r[2]), n.setHours(r[3], r[4], r[5], r[6])), 
        e._d = n;
    }
    function K(e) {
        var t = e._f.match(a), n = e._i, r, i;
        e._a = [];
        for (r = 0; r < t.length; r++) i = (V(t[r]).exec(n) || [])[0], i && (n = n.slice(n.indexOf(i) + i.length)), 
        A[t[r]] && $(t[r], i, e);
        e._isPm && e._a[3] < 12 && (e._a[3] += 12), e._isPm === !1 && e._a[3] === 12 && (e._a[3] = 0), 
        J(e);
    }
    function Q(e) {
        var t, n, r, i = 99, s, o, u;
        while (e._f.length) {
            t = H({}, e), t._f = e._f.pop(), K(t), n = new D(t);
            if (n.isValid()) {
                r = n;
                break;
            }
            u = q(t._a, n.toArray()), u < i && (i = u, r = n);
        }
        H(e, r);
    }
    function G(e) {
        var t, n = e._i;
        if (w.exec(n)) {
            e._f = "YYYY-MM-DDT";
            for (t = 0; t < 4; t++) if (S[t][1].exec(n)) {
                e._f += S[t][0];
                break;
            }
            g.exec(n) && (e._f += " Z"), K(e);
        } else e._d = new Date(n);
    }
    function Y(t) {
        var n = t._i, r = u.exec(n);
        n === e ? t._d = new Date() : r ? t._d = new Date(+r[1]) : typeof n == "string" ? G(t) : I(n) ? (t._a = n.slice(0), 
        J(t)) : t._d = n instanceof Date ? new Date(+n) : new Date(n);
    }
    function Z(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r);
    }
    function et(e, t, n) {
        var i = r(Math.abs(e) / 1e3), s = r(i / 60), o = r(s / 60), u = r(o / 24), a = r(u / 365), f = i < 45 && [ "s", i ] || s === 1 && [ "m" ] || s < 45 && [ "mm", s ] || o === 1 && [ "h" ] || o < 22 && [ "hh", o ] || u === 1 && [ "d" ] || u <= 25 && [ "dd", u ] || u <= 45 && [ "M" ] || u < 345 && [ "MM", r(u / 30) ] || a === 1 && [ "y" ] || [ "yy", a ];
        return f[2] = t, f[3] = e > 0, f[4] = n, Z.apply({}, f);
    }
    function tt(e, n, r) {
        var i = r - n, s = r - e.day();
        return s > i && (s -= 7), s < i - 7 && (s += 7), Math.ceil(t(e).add("d", s).dayOfYear() / 7);
    }
    function nt(e) {
        var n = e._i, r = e._f;
        return n === null || n === "" ? null : (typeof n == "string" && (e._i = n = U().preparse(n)), 
        t.isMoment(n) ? (e = H({}, n), e._d = new Date(+n._d)) : r ? I(r) ? Q(e) : K(e) : Y(e), 
        new D(e));
    }
    function rt(e, n) {
        t.fn[e] = t.fn[e + "s"] = function(e) {
            var t = this._isUTC ? "UTC" : "";
            return e != null ? (this._d["set" + t + n](e), this) : this._d["get" + t + n]();
        };
    }
    function it(e) {
        t.duration.fn[e] = function() {
            return this._data[e];
        };
    }
    function st(e, n) {
        t.duration.fn["as" + e] = function() {
            return +this / n;
        };
    }
    var t, n = "2.0.0", r = Math.round, i, s = {}, o = typeof module != "undefined" && module.exports, u = /^\/?Date\((\-?\d+)/i, a = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, f = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, l = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, c = /\d\d?/, h = /\d{1,3}/, p = /\d{3}/, d = /\d{1,4}/, v = /[+\-]?\d{1,6}/, m = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, g = /Z|[\+\-]\d\d:?\d\d/i, y = /T/i, b = /[\+\-]?\d+(\.\d{1,3})?/, w = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, E = "YYYY-MM-DDTHH:mm:ssZ", S = [ [ "HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], x = /([\+\-]|\d\d)/gi, T = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), N = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, C = {}, k = "DDD w W M D d".split(" "), L = "M D H h m s w W".split(" "), A = {
        M: function() {
            return this.month() + 1;
        },
        MMM: function(e) {
            return this.lang().monthsShort(this, e);
        },
        MMMM: function(e) {
            return this.lang().months(this, e);
        },
        D: function() {
            return this.date();
        },
        DDD: function() {
            return this.dayOfYear();
        },
        d: function() {
            return this.day();
        },
        dd: function(e) {
            return this.lang().weekdaysMin(this, e);
        },
        ddd: function(e) {
            return this.lang().weekdaysShort(this, e);
        },
        dddd: function(e) {
            return this.lang().weekdays(this, e);
        },
        w: function() {
            return this.week();
        },
        W: function() {
            return this.isoWeek();
        },
        YY: function() {
            return j(this.year() % 100, 2);
        },
        YYYY: function() {
            return j(this.year(), 4);
        },
        YYYYY: function() {
            return j(this.year(), 5);
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function() {
            return this.hours();
        },
        h: function() {
            return this.hours() % 12 || 12;
        },
        m: function() {
            return this.minutes();
        },
        s: function() {
            return this.seconds();
        },
        S: function() {
            return ~~(this.milliseconds() / 100);
        },
        SS: function() {
            return j(~~(this.milliseconds() / 10), 2);
        },
        SSS: function() {
            return j(this.milliseconds(), 3);
        },
        Z: function() {
            var e = -this.zone(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + j(~~(e / 60), 2) + ":" + j(~~e % 60, 2);
        },
        ZZ: function() {
            var e = -this.zone(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + j(~~(10 * e / 6), 4);
        },
        X: function() {
            return this.unix();
        }
    };
    while (k.length) i = k.pop(), A[i + "o"] = M(A[i]);
    while (L.length) i = L.pop(), A[i + i] = O(A[i], 2);
    A.DDDD = O(A.DDD, 3), _.prototype = {
        set: function(e) {
            var t, n;
            for (n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t;
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()];
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()];
        },
        monthsParse: function(e) {
            var n, r, i, s;
            this._monthsParse || (this._monthsParse = []);
            for (n = 0; n < 12; n++) {
                this._monthsParse[n] || (r = t([ 2e3, n ]), i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), 
                this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"));
                if (this._monthsParse[n].test(e)) return n;
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()];
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()];
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()];
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1);
            }), this._longDateFormat[e] = t), t;
        },
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t) {
            var n = this._calendar[e];
            return typeof n == "function" ? n.apply(t) : n;
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, r) {
            var i = this._relativeTime[n];
            return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e);
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return typeof n == "function" ? n(t) : n.replace(/%s/i, t);
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e);
        },
        _ordinal: "%d",
        preparse: function(e) {
            return e;
        },
        postformat: function(e) {
            return e;
        },
        week: function(e) {
            return tt(e, this._week.dow, this._week.doy);
        },
        _week: {
            dow: 0,
            doy: 6
        }
    }, t = function(e, t, n) {
        return nt({
            _i: e,
            _f: t,
            _l: n,
            _isUTC: !1
        });
    }, t.utc = function(e, t, n) {
        return nt({
            _useUTC: !0,
            _isUTC: !0,
            _l: n,
            _i: e,
            _f: t
        });
    }, t.unix = function(e) {
        return t(e * 1e3);
    }, t.duration = function(e, n) {
        var r = t.isDuration(e), i = typeof e == "number", s = r ? e._data : i ? {} : e, o;
        return i && (n ? s[n] = e : s.milliseconds = e), o = new P(s), r && e.hasOwnProperty("_lang") && (o._lang = e._lang), 
        o;
    }, t.version = n, t.defaultFormat = E, t.lang = function(e, n) {
        var r;
        if (!e) return t.fn._lang._abbr;
        n ? R(e, n) : s[e] || U(e), t.duration.fn._lang = t.fn._lang = U(e);
    }, t.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), U(e);
    }, t.isMoment = function(e) {
        return e instanceof D;
    }, t.isDuration = function(e) {
        return e instanceof P;
    }, t.fn = D.prototype = {
        clone: function() {
            return t(this);
        },
        valueOf: function() {
            return +this._d;
        },
        unix: function() {
            return Math.floor(+this._d / 1e3);
        },
        toString: function() {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },
        toDate: function() {
            return this._d;
        },
        toJSON: function() {
            return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        },
        toArray: function() {
            var e = this;
            return [ e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds() ];
        },
        isValid: function() {
            return this._isValid == null && (this._a ? this._isValid = !q(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), 
            !!this._isValid;
        },
        utc: function() {
            return this._isUTC = !0, this;
        },
        local: function() {
            return this._isUTC = !1, this;
        },
        format: function(e) {
            var n = X(this, e || t.defaultFormat);
            return this.lang().postformat(n);
        },
        add: function(e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, 1), 
            this;
        },
        subtract: function(e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, -1), 
            this;
        },
        diff: function(e, n, r) {
            var i = this._isUTC ? t(e).utc() : t(e).local(), s = (this.zone() - i.zone()) * 6e4, o, u;
            return n && (n = n.replace(/s$/, "")), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, 
            u = (this.year() - i.year()) * 12 + (this.month() - i.month()), u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o, 
            n === "year" && (u /= 12)) : (o = this - i - s, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? o / 864e5 : n === "week" ? o / 6048e5 : o), 
            r ? u : B(u);
        },
        from: function(e, n) {
            return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n);
        },
        fromNow: function(e) {
            return this.from(t(), e);
        },
        calendar: function() {
            var e = this.diff(t().startOf("day"), "days", !0), n = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this));
        },
        isLeapYear: function() {
            var e = this.year();
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
        },
        isDST: function() {
            return this.zone() < t([ this.year() ]).zone() || this.zone() < t([ this.year(), 5 ]).zone();
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return e == null ? t : this.add({
                d: e - t
            });
        },
        startOf: function(e) {
            e = e.replace(/s$/, "");
            switch (e) {
              case "year":
                this.month(0);

              case "month":
                this.date(1);

              case "week":
              case "day":
                this.hours(0);

              case "hour":
                this.minutes(0);

              case "minute":
                this.seconds(0);

              case "second":
                this.milliseconds(0);
            }
            return e === "week" && this.day(0), this;
        },
        endOf: function(e) {
            return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1);
        },
        isAfter: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) > +t(e).startOf(n);
        },
        isBefore: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) < +t(e).startOf(n);
        },
        isSame: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) === +t(e).startOf(n);
        },
        zone: function() {
            return this._isUTC ? 0 : this._d.getTimezoneOffset();
        },
        daysInMonth: function() {
            return t.utc([ this.year(), this.month() + 1, 0 ]).date();
        },
        dayOfYear: function(e) {
            var n = r((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
            return e == null ? n : this.add("d", e - n);
        },
        isoWeek: function(e) {
            var t = tt(this, 1, 4);
            return e == null ? t : this.add("d", (e - t) * 7);
        },
        week: function(e) {
            var t = this.lang().week(this);
            return e == null ? t : this.add("d", (e - t) * 7);
        },
        lang: function(t) {
            return t === e ? this._lang : (this._lang = U(t), this);
        }
    };
    for (i = 0; i < T.length; i++) rt(T[i].toLowerCase().replace(/s$/, ""), T[i]);
    rt("year", "FullYear"), t.fn.days = t.fn.day, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, 
    t.duration.fn = P.prototype = {
        weeks: function() {
            return B(this.days() / 7);
        },
        valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6;
        },
        humanize: function(e) {
            var t = +this, n = et(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n);
        },
        lang: t.fn.lang
    };
    for (i in N) N.hasOwnProperty(i) && (st(i, N[i]), it(i.toLowerCase()));
    st("Weeks", 6048e5), t.lang("en", {
        ordinal: function(e) {
            var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n;
        }
    }), o && (module.exports = t), typeof ender == "undefined" && (this.moment = t), 
    typeof define == "function" && define.amd && define("moment", [], function() {
        return t;
    });
}).call(this);

(function(window) {
    "use strict";
    var document = window.document;
    if (!String.prototype.trim) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "");
        };
    }
    function NLForm(el) {
        this.el = el;
        this.overlay = this.el.querySelector(".nl-overlay");
        this.fields = [];
        this.fldOpen = -1;
        this._init();
    }
    NLForm.prototype = {
        _init: function() {
            var self = this;
            Array.prototype.slice.call(this.el.querySelectorAll("select")).forEach(function(el, i) {
                self.fldOpen++;
                self.fields.push(new NLField(self, el, "dropdown", self.fldOpen));
            });
            Array.prototype.slice.call(this.el.querySelectorAll("input")).forEach(function(el, i) {
                self.fldOpen++;
                self.fields.push(new NLField(self, el, "input", self.fldOpen));
            });
            this.overlay.addEventListener("click", function(ev) {
                self._closeFlds();
            });
            this.overlay.addEventListener("touchstart", function(ev) {
                self._closeFlds();
            });
        },
        _closeFlds: function() {
            if (this.fldOpen !== -1) {
                this.fields[this.fldOpen].close();
            }
        }
    };
    function NLField(form, el, type, idx) {
        this.form = form;
        this.elOriginal = el;
        this.pos = idx;
        this.type = type;
        this._create();
        this._initEvents();
    }
    NLField.prototype = {
        _create: function() {
            if (this.type === "dropdown") {
                this._createDropDown();
            } else if (this.type === "input") {
                this._createInput();
            }
        },
        _createDropDown: function() {
            var self = this;
            this.fld = document.createElement("div");
            this.fld.className = "nl-field nl-dd";
            this.toggle = document.createElement("a");
            this.toggle.innerHTML = this.elOriginal.options[this.elOriginal.selectedIndex].innerHTML;
            this.toggle.className = "nl-field-toggle";
            this.optionsList = document.createElement("ul");
            var ihtml = "";
            Array.prototype.slice.call(this.elOriginal.querySelectorAll("option")).forEach(function(el, i) {
                ihtml += self.elOriginal.selectedIndex === i ? '<li class="nl-dd-checked">' + el.innerHTML + "</li>" : "<li>" + el.innerHTML + "</li>";
                // selected index value
                if (self.elOriginal.selectedIndex === i) {
                    self.selectedIdx = i;
                }
            });
            this.optionsList.innerHTML = ihtml;
            this.fld.appendChild(this.toggle);
            this.fld.appendChild(this.optionsList);
            this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal);
            this.elOriginal.style.display = "none";
        },
        _createInput: function() {
            var self = this;
            this.fld = document.createElement("div");
            this.fld.className = "nl-field nl-ti-text";
            this.toggle = document.createElement("a");
            this.toggle.innerHTML = this.elOriginal.getAttribute("placeholder");
            this.toggle.className = "nl-field-toggle";
            this.optionsList = document.createElement("ul");
            this.getinput = document.createElement("input");
            this.getinput.setAttribute("type", "text");
            this.getinput.setAttribute("placeholder", this.elOriginal.getAttribute("placeholder"));
            this.getinputWrapper = document.createElement("li");
            this.getinputWrapper.className = "nl-ti-input";
            this.inputsubmit = document.createElement("button");
            this.inputsubmit.className = "nl-field-go";
            this.inputsubmit.innerHTML = "Go";
            this.getinputWrapper.appendChild(this.getinput);
            this.getinputWrapper.appendChild(this.inputsubmit);
            this.example = document.createElement("li");
            this.example.className = "nl-ti-example";
            this.example.innerHTML = this.elOriginal.getAttribute("data-subline");
            this.optionsList.appendChild(this.getinputWrapper);
            this.optionsList.appendChild(this.example);
            this.fld.appendChild(this.toggle);
            this.fld.appendChild(this.optionsList);
            this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal);
            this.elOriginal.style.display = "none";
        },
        _initEvents: function() {
            var self = this;
            this.toggle.addEventListener("click", function(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                self._open();
            });
            this.toggle.addEventListener("touchstart", function(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                self._open();
            });
            if (this.type === "dropdown") {
                var opts = Array.prototype.slice.call(this.optionsList.querySelectorAll("li"));
                opts.forEach(function(el, i) {
                    el.addEventListener("click", function(ev) {
                        ev.preventDefault();
                        self.close(el, opts.indexOf(el));
                    });
                    el.addEventListener("touchstart", function(ev) {
                        ev.preventDefault();
                        self.close(el, opts.indexOf(el));
                    });
                });
            } else if (this.type === "input") {
                this.getinput.addEventListener("keydown", function(ev) {
                    if (ev.keyCode == 13) {
                        self.close();
                    }
                });
                this.inputsubmit.addEventListener("click", function(ev) {
                    ev.preventDefault();
                    self.close();
                });
                this.inputsubmit.addEventListener("touchstart", function(ev) {
                    ev.preventDefault();
                    self.close();
                });
            }
        },
        _open: function() {
            if (this.open) {
                return false;
            }
            this.open = true;
            this.form.fldOpen = this.pos;
            var self = this;
            this.fld.className += " nl-field-open";
        },
        close: function(opt, idx) {
            if (!this.open) {
                return false;
            }
            this.open = false;
            this.form.fldOpen = -1;
            this.fld.className = this.fld.className.replace(/\b nl-field-open\b/, "");
            if (this.type === "dropdown") {
                if (opt) {
                    // remove class nl-dd-checked from previous option
                    var selectedopt = this.optionsList.children[this.selectedIdx];
                    selectedopt.className = "";
                    opt.className = "nl-dd-checked";
                    this.toggle.innerHTML = opt.innerHTML;
                    // update selected index value
                    this.selectedIdx = idx;
                    // update original select element´s value
                    this.elOriginal.value = this.elOriginal.children[this.selectedIdx].value;
                }
            } else if (this.type === "input") {
                this.getinput.blur();
                this.toggle.innerHTML = this.getinput.value.trim() !== "" ? this.getinput.value : this.getinput.getAttribute("placeholder");
                this.elOriginal.value = this.getinput.value;
            }
        }
    };
    // add to global namespace
    window.NLForm = NLForm;
})(window);

(function(window, document, undefined) {
    // Strict Mode
    "use strict";
    // Constants
    var NAME = "Parallax";
    var MAGIC_NUMBER = 30;
    var DEFAULTS = {
        relativeInput: false,
        clipRelativeInput: false,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    function Parallax(element, options) {
        // DOM Context
        this.element = element;
        this.layers = element.getElementsByClassName("layer");
        // Data Extraction
        var data = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        // Delete Null Data Values
        for (var key in data) {
            if (data[key] === null) delete data[key];
        }
        // Compose Settings Object
        this.extend(this, DEFAULTS, options, data);
        // States
        this.calibrationTimer = null;
        this.calibrationFlag = true;
        this.enabled = false;
        this.depths = [];
        this.raf = null;
        // Element Bounds
        this.bounds = null;
        this.ex = 0;
        this.ey = 0;
        this.ew = 0;
        this.eh = 0;
        // Element Center
        this.ecx = 0;
        this.ecy = 0;
        // Element Range
        this.erx = 0;
        this.ery = 0;
        // Calibration
        this.cx = 0;
        this.cy = 0;
        // Input
        this.ix = 0;
        this.iy = 0;
        // Motion
        this.mx = 0;
        this.my = 0;
        // Velocity
        this.vx = 0;
        this.vy = 0;
        // Callbacks
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
        this.onOrientationTimer = this.onOrientationTimer.bind(this);
        this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
        this.onAnimationFrame = this.onAnimationFrame.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
        // Initialise
        this.initialise();
    }
    Parallax.prototype.extend = function() {
        if (arguments.length > 1) {
            var master = arguments[0];
            for (var i = 1, l = arguments.length; i < l; i++) {
                var object = arguments[i];
                for (var key in object) {
                    master[key] = object[key];
                }
            }
        }
    };
    Parallax.prototype.data = function(element, name) {
        return this.deserialize(element.getAttribute("data-" + name));
    };
    Parallax.prototype.deserialize = function(value) {
        if (value === "true") {
            return true;
        } else if (value === "false") {
            return false;
        } else if (value === "null") {
            return null;
        } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
            return parseFloat(value);
        } else {
            return value;
        }
    };
    Parallax.prototype.camelCase = function(value) {
        return value.replace(/-+(.)?/g, function(match, character) {
            return character ? character.toUpperCase() : "";
        });
    };
    Parallax.prototype.transformSupport = function(value) {
        var element = document.createElement("div");
        var propertySupport = false;
        var propertyValue = null;
        var featureSupport = false;
        var cssProperty = null;
        var jsProperty = null;
        for (var i = 0, l = this.vendors.length; i < l; i++) {
            if (this.vendors[i] !== null) {
                cssProperty = this.vendors[i][0] + "transform";
                jsProperty = this.vendors[i][1] + "Transform";
            } else {
                cssProperty = "transform";
                jsProperty = "transform";
            }
            if (element.style[jsProperty] !== undefined) {
                propertySupport = true;
                break;
            }
        }
        switch (value) {
          case "2D":
            featureSupport = propertySupport;
            break;

          case "3D":
            if (propertySupport) {
                var body = document.body || document.createElement("body");
                var documentElement = document.documentElement;
                var documentOverflow = documentElement.style.overflow;
                if (!document.body) {
                    documentElement.style.overflow = "hidden";
                    documentElement.appendChild(body);
                    body.style.overflow = "hidden";
                    body.style.background = "";
                }
                body.appendChild(element);
                element.style[jsProperty] = "translate3d(1px,1px,1px)";
                propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== "none";
                documentElement.style.overflow = documentOverflow;
                body.removeChild(element);
            }
            break;
        }
        return featureSupport;
    };
    Parallax.prototype.ww = null;
    Parallax.prototype.wh = null;
    Parallax.prototype.wcx = null;
    Parallax.prototype.wcy = null;
    Parallax.prototype.wrx = null;
    Parallax.prototype.wry = null;
    Parallax.prototype.portrait = null;
    Parallax.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    Parallax.prototype.vendors = [ null, [ "-webkit-", "webkit" ], [ "-moz-", "Moz" ], [ "-o-", "O" ], [ "-ms-", "ms" ] ];
    Parallax.prototype.motionSupport = !!window.DeviceMotionEvent;
    Parallax.prototype.orientationSupport = !!window.DeviceOrientationEvent;
    Parallax.prototype.orientationStatus = 0;
    Parallax.prototype.transform2DSupport = Parallax.prototype.transformSupport("2D");
    Parallax.prototype.transform3DSupport = Parallax.prototype.transformSupport("3D");
    Parallax.prototype.propertyCache = {};
    Parallax.prototype.initialise = function() {
        // Configure Context Styles
        if (this.transform3DSupport) this.accelerate(this.element);
        var style = window.getComputedStyle(this.element);
        if (style.getPropertyValue("position") === "static") {
            this.element.style.position = "relative";
        }
        // Setup
        this.updateLayers();
        this.updateDimensions();
        this.enable();
        this.queueCalibration(this.calibrationDelay);
    };
    Parallax.prototype.updateLayers = function() {
        // Cache Layer Elements
        this.layers = this.element.getElementsByClassName("layer");
        this.depths = [];
        // Configure Layer Styles
        for (var i = 0, l = this.layers.length; i < l; i++) {
            var layer = this.layers[i];
            if (this.transform3DSupport) this.accelerate(layer);
            layer.style.position = i ? "absolute" : "relative";
            layer.style.display = "block";
            layer.style.left = 0;
            layer.style.top = 0;
            // Cache Layer Depth
            this.depths.push(this.data(layer, "depth") || 0);
        }
    };
    Parallax.prototype.updateDimensions = function() {
        this.ww = window.innerWidth;
        this.wh = window.innerHeight;
        this.wcx = this.ww * this.originX;
        this.wcy = this.wh * this.originY;
        this.wrx = Math.max(this.wcx, this.ww - this.wcx);
        this.wry = Math.max(this.wcy, this.wh - this.wcy);
    };
    Parallax.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect();
        this.ex = this.bounds.left;
        this.ey = this.bounds.top;
        this.ew = this.bounds.width;
        this.eh = this.bounds.height;
        this.ecx = this.ew * this.originX;
        this.ecy = this.eh * this.originY;
        this.erx = Math.max(this.ecx, this.ew - this.ecx);
        this.ery = Math.max(this.ecy, this.eh - this.ecy);
    };
    Parallax.prototype.queueCalibration = function(delay) {
        clearTimeout(this.calibrationTimer);
        this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    };
    Parallax.prototype.enable = function() {
        if (!this.enabled) {
            this.enabled = true;
            if (this.orientationSupport) {
                this.portrait = null;
                window.addEventListener("deviceorientation", this.onDeviceOrientation);
                setTimeout(this.onOrientationTimer, this.supportDelay);
            } else {
                this.cx = 0;
                this.cy = 0;
                this.portrait = false;
                window.addEventListener("mousemove", this.onMouseMove);
            }
            window.addEventListener("resize", this.onWindowResize);
            this.raf = requestAnimationFrame(this.onAnimationFrame);
        }
    };
    Parallax.prototype.disable = function() {
        if (this.enabled) {
            this.enabled = false;
            if (this.orientationSupport) {
                window.removeEventListener("deviceorientation", this.onDeviceOrientation);
            } else {
                window.removeEventListener("mousemove", this.onMouseMove);
            }
            window.removeEventListener("resize", this.onWindowResize);
            cancelAnimationFrame(this.raf);
        }
    };
    Parallax.prototype.calibrate = function(x, y) {
        this.calibrateX = x === undefined ? this.calibrateX : x;
        this.calibrateY = y === undefined ? this.calibrateY : y;
    };
    Parallax.prototype.invert = function(x, y) {
        this.invertX = x === undefined ? this.invertX : x;
        this.invertY = y === undefined ? this.invertY : y;
    };
    Parallax.prototype.friction = function(x, y) {
        this.frictionX = x === undefined ? this.frictionX : x;
        this.frictionY = y === undefined ? this.frictionY : y;
    };
    Parallax.prototype.scalar = function(x, y) {
        this.scalarX = x === undefined ? this.scalarX : x;
        this.scalarY = y === undefined ? this.scalarY : y;
    };
    Parallax.prototype.limit = function(x, y) {
        this.limitX = x === undefined ? this.limitX : x;
        this.limitY = y === undefined ? this.limitY : y;
    };
    Parallax.prototype.origin = function(x, y) {
        this.originX = x === undefined ? this.originX : x;
        this.originY = y === undefined ? this.originY : y;
    };
    Parallax.prototype.clamp = function(value, min, max) {
        value = Math.max(value, min);
        value = Math.min(value, max);
        return value;
    };
    Parallax.prototype.css = function(element, property, value) {
        var jsProperty = this.propertyCache[property];
        if (!jsProperty) {
            for (var i = 0, l = this.vendors.length; i < l; i++) {
                if (this.vendors[i] !== null) {
                    jsProperty = this.camelCase(this.vendors[i][1] + "-" + property);
                } else {
                    jsProperty = property;
                }
                if (element.style[jsProperty] !== undefined) {
                    this.propertyCache[property] = jsProperty;
                    break;
                }
            }
        }
        element.style[jsProperty] = value;
    };
    Parallax.prototype.accelerate = function(element) {
        this.css(element, "transform", "translate3d(0,0,0)");
        this.css(element, "transform-style", "preserve-3d");
        this.css(element, "backface-visibility", "hidden");
    };
    Parallax.prototype.setPosition = function(element, x, y) {
        x += "px";
        y += "px";
        if (this.transform3DSupport) {
            this.css(element, "transform", "translate3d(" + x + "," + y + ",0)");
        } else if (this.transform2DSupport) {
            this.css(element, "transform", "translate(" + x + "," + y + ")");
        } else {
            element.style.left = x;
            element.style.top = y;
        }
    };
    Parallax.prototype.onOrientationTimer = function(event) {
        if (this.orientationSupport && this.orientationStatus === 0) {
            this.disable();
            this.orientationSupport = false;
            this.enable();
        }
    };
    Parallax.prototype.onCalibrationTimer = function(event) {
        this.calibrationFlag = true;
    };
    Parallax.prototype.onWindowResize = function(event) {
        this.updateDimensions();
    };
    Parallax.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var dx = this.ix - this.cx;
        var dy = this.iy - this.cy;
        if (Math.abs(dx) > this.calibrationThreshold || Math.abs(dy) > this.calibrationThreshold) {
            this.queueCalibration(0);
        }
        if (this.portrait) {
            this.mx = this.calibrateX ? dy : this.iy;
            this.my = this.calibrateY ? dx : this.ix;
        } else {
            this.mx = this.calibrateX ? dx : this.ix;
            this.my = this.calibrateY ? dy : this.iy;
        }
        this.mx *= this.ew * (this.scalarX / 100);
        this.my *= this.eh * (this.scalarY / 100);
        if (!isNaN(parseFloat(this.limitX))) {
            this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
        }
        if (!isNaN(parseFloat(this.limitY))) {
            this.my = this.clamp(this.my, -this.limitY, this.limitY);
        }
        this.vx += (this.mx - this.vx) * this.frictionX;
        this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, l = this.layers.length; i < l; i++) {
            var layer = this.layers[i];
            var depth = this.depths[i];
            var xOffset = this.vx * depth * (this.invertX ? -1 : 1);
            var yOffset = this.vy * depth * (this.invertY ? -1 : 1);
            this.setPosition(layer, xOffset, yOffset);
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame);
    };
    Parallax.prototype.onDeviceOrientation = function(event) {
        // Validate environment and event properties.
        if (!this.desktop && event.beta !== null && event.gamma !== null) {
            // Set orientation status.
            this.orientationStatus = 1;
            // Extract Rotation
            var x = (event.beta || 0) / MAGIC_NUMBER;
            //  -90 :: 90
            var y = (event.gamma || 0) / MAGIC_NUMBER;
            // -180 :: 180
            // Detect Orientation Change
            var portrait = this.wh > this.ww;
            if (this.portrait !== portrait) {
                this.portrait = portrait;
                this.calibrationFlag = true;
            }
            // Set Calibration
            if (this.calibrationFlag) {
                this.calibrationFlag = false;
                this.cx = x;
                this.cy = y;
            }
            // Set Input
            this.ix = x;
            this.iy = y;
        }
    };
    Parallax.prototype.onMouseMove = function(event) {
        // Cache mouse coordinates.
        var clientX = event.clientX;
        var clientY = event.clientY;
        // Calculate Mouse Input
        if (!this.orientationSupport && this.relativeInput) {
            // Clip mouse coordinates inside element bounds.
            if (this.clipRelativeInput) {
                clientX = Math.max(clientX, this.ex);
                clientX = Math.min(clientX, this.ex + this.ew);
                clientY = Math.max(clientY, this.ey);
                clientY = Math.min(clientY, this.ey + this.eh);
            }
            // Calculate input relative to the element.
            this.ix = (clientX - this.ex - this.ecx) / this.erx;
            this.iy = (clientY - this.ey - this.ecy) / this.ery;
        } else {
            // Calculate input relative to the window.
            this.ix = (clientX - this.wcx) / this.wrx;
            this.iy = (clientY - this.wcy) / this.wry;
        }
    };
    // Expose Parallax
    window[NAME] = Parallax;
})(window, document);

(function() {
    var lastTime = 0;
    var vendors = [ "ms", "moz", "webkit", "o" ];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
})();

/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e) {
    function t(e) {
        var t = e.length, r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t);
        };
        $.isWindow = function(e) {
            return null != e && e == e.window;
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e;
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e);
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (r) {
                return !1;
            }
            for (t in e) ;
            return void 0 === t || n.call(e, t);
        }, $.each = function(e, r, a) {
            var n, o = 0, i = e.length, s = t(e);
            if (a) {
                if (s) for (;i > o && (n = r.apply(e[o], a), n !== !1); o++) ; else for (o in e) if (n = r.apply(e[o], a), 
                n === !1) break;
            } else if (s) for (;i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) ; else for (o in e) if (n = r.call(e[o], o, e[o]), 
            n === !1) break;
            return e;
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando], o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t];
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a;
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando], n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t];
            });
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), 
            s === l && (i = this, s--); l > s; s++) if (null != (n = arguments[s])) for (a in n) e = i[a], 
            r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, 
            o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i;
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? !function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a; ) e[n++] = t[a++];
                    if (r !== r) for (;void 0 !== t[a]; ) e[n++] = t[a++];
                    return e.length = n, e;
                }(a, "string" == typeof e ? [ e ] : e) : [].push.call(a, e)), a;
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || [];
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [ e ] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t), n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), 
                n.call(r, function() {
                    $.dequeue(r, t);
                }));
            });
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.");
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                };
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; ) e = e.offsetParent;
                    return e || document;
                }
                var t = this[0], e = e.apply(t), r = this.offset(), a = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, 
                e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), 
                {
                    top: r.top - a.top,
                    left: r.left - a.left
                };
            }
        };
        var r = {};
        $.expando = "velocity" + new Date().getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        };
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r; ) {
                var n = e[t];
                n && a.push(n);
            }
            return a;
        }
        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [ e ]), e;
        }
        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t;
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e);
            };
        }
        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e;
            }
            function i(e, t) {
                return 3 * t - 6 * e;
            }
            function s(e) {
                return 3 * e;
            }
            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
            }
            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
            }
            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o;
                }
                return r;
            }
            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a);
            }
            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i;
            }
            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]), s = r + i * x, l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
            }
            function g() {
                V = !0, (e != r || a != n) && p();
            }
            var m = 4, y = .001, h = 1e-7, v = 10, b = 11, x = 1 / (b - 1), S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P) if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b), V = !1, C = function(t) {
                return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
            };
            C.getControlPoints = function() {
                return [ {
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                } ];
            };
            var T = "generateBezier(" + [ e, r, a, n ] + ")";
            return C.toString = function() {
                return T;
            }, C;
        }
        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([ t ])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, 
            r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r;
        }
        function c(e) {
            if (e) {
                var t = new Date().getTime(), r = v.State.calls.length;
                r > 1e4 && (v.State.calls = n(v.State.calls));
                for (var o = 0; r > o; o++) if (v.State.calls[o]) {
                    var s = v.State.calls[o], l = s[0], u = s[2], f = s[3], d = !!f, m = null;
                    f || (f = v.State.calls[o][3] = t - 16);
                    for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
                        var S = l[h], w = S.element;
                        if (i(w)) {
                            var V = !1;
                            if (u.display !== a && null !== u.display && "none" !== u.display) {
                                if ("flex" === u.display) {
                                    var C = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];
                                    $.each(C, function(e, t) {
                                        x.setPropertyValue(w, "display", t);
                                    });
                                }
                                x.setPropertyValue(w, "display", u.display);
                            }
                            u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
                            for (var T in S) if ("element" !== T) {
                                var k = S[T], A, F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                if (1 === y) A = k.endValue; else {
                                    var E = k.endValue - k.startValue;
                                    if (A = k.startValue + E * F(y, u, E), !d && A === k.currentValue) continue;
                                }
                                if (k.currentValue = A, "tween" === T) m = A; else {
                                    if (x.Hooks.registered[T]) {
                                        var j = x.Hooks.getRoot(T), H = i(w).rootPropertyValueCache[j];
                                        H && (k.rootPropertyValue = H);
                                    }
                                    var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                    x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), 
                                    "transform" === N[0] && (V = !0);
                                }
                            }
                            u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)", 
                            V = !0), V && x.flushTransformCache(w);
                        }
                    }
                    u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1), 
                    u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m), 
                    1 === y && p(o);
                }
            }
            v.State.isTicking && P(c);
        }
        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), 
                "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), 
                o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0, n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, 
                        delete i(p).transformCache[t]);
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), 
                    x.Values.removeClass(p, "velocity-animating");
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n);
                } catch (d) {
                    setTimeout(function() {
                        throw d;
                    }, 1);
                }
                s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), 
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, 
                    t.startValue = 100);
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue);
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++) if (v.State.calls[g] !== !1) {
                l = !0;
                break;
            }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = []);
        }
        var f = function() {
            if (r.documentMode) return r.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = r.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, 
                e;
            }
            return a;
        }(), d = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var r = new Date().getTime(), a;
                return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                    t(r + a);
                }, a);
            };
        }(), g = {
            isString: function(e) {
                return "string" == typeof e;
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            },
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e);
            },
            isNode: function(e) {
                return e && e.nodeType;
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0);
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement;
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0;
            }
        }, $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void (jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400, h = "swing", v = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: r.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: $,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: y,
                easing: h,
                begin: a,
                complete: a,
                progress: a,
                display: a,
                visibility: a,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                $.data(e, "velocity", {
                    isSVG: g.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                });
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", 
        v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, 
        v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v;
            }
            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                };
            }
            function r(r, a) {
                var n = {
                    dx: r.v,
                    dv: e(r)
                }, o = t(r, .5 * a, n), i = t(r, .5 * a, o), s = t(r, a, i), l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx), u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r;
            }
            return function a(e, t, n) {
                var o = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, i = [ 0 ], s = 0, l = 1e-4, u = .016, c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, 
                o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u; ;) if (f = r(f || o, p), 
                i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0];
                } : s;
            };
        }();
        v.Easings = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
            }
        }, $.each([ [ "ease", [ .25, .1, .25, 1 ] ], [ "ease-in", [ .42, 0, 1, 1 ] ], [ "ease-out", [ 0, 0, .58, 1 ] ], [ "ease-in-out", [ .42, 0, .58, 1 ] ], [ "easeInSine", [ .47, 0, .745, .715 ] ], [ "easeOutSine", [ .39, .575, .565, 1 ] ], [ "easeInOutSine", [ .445, .05, .55, .95 ] ], [ "easeInQuad", [ .55, .085, .68, .53 ] ], [ "easeOutQuad", [ .25, .46, .45, .94 ] ], [ "easeInOutQuad", [ .455, .03, .515, .955 ] ], [ "easeInCubic", [ .55, .055, .675, .19 ] ], [ "easeOutCubic", [ .215, .61, .355, 1 ] ], [ "easeInOutCubic", [ .645, .045, .355, 1 ] ], [ "easeInQuart", [ .895, .03, .685, .22 ] ], [ "easeOutQuart", [ .165, .84, .44, 1 ] ], [ "easeInOutQuart", [ .77, 0, .175, 1 ] ], [ "easeInQuint", [ .755, .05, .855, .06 ] ], [ "easeOutQuint", [ .23, 1, .32, 1 ] ], [ "easeInOutQuint", [ .86, 0, .07, 1 ] ], [ "easeInExpo", [ .95, .05, .795, .035 ] ], [ "easeOutExpo", [ .19, 1, .22, 1 ] ], [ "easeInOutExpo", [ 1, 0, 0, 1 ] ], [ "easeInCirc", [ .6, .04, .98, .335 ] ], [ "easeOutCirc", [ .075, .82, .165, 1 ] ], [ "easeInOutCirc", [ .785, .135, .15, .86 ] ] ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1]);
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
                transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
                transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
            },
            Hooks: {
                templates: {
                    textShadow: [ "Color X Y Blur", "black 0px 0px 0px" ],
                    boxShadow: [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
                    clip: [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
                    backgroundPosition: [ "X Y", "0% 0%" ],
                    transformOrigin: [ "X Y Z", "50% 50% 0px" ],
                    perspectiveOrigin: [ "X Y", "50% 50%" ]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = [ "Red Green Blue Alpha", t ];
                    }
                    var r, a, n;
                    if (f) for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        var o = a[1].match(x.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [ n.join(" "), o.join(" ") ]);
                    }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e], s = e;
                            x.Hooks.registered[i] = [ r, s ];
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e;
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), 
                    t;
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0], n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n];
                    }
                    return t;
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0], o = a[1], i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), 
                        i[o] = t, s = i.join(" ");
                    }
                    return r;
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                          case "name":
                            return "clip";

                          case "extract":
                            var a;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), 
                            a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;

                          case "inject":
                            return "rect(" + r + ")";
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                          case "name":
                            return v.State.isFirefox ? "filter" : "-webkit-filter";

                          case "extract":
                            var a = parseFloat(r);
                            if (!a && 0 !== a) {
                                var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                a = n ? n[1] : 0;
                            }
                            return a;

                          case "inject":
                            return parseFloat(r) ? "blur(" + r + ")" : "none";
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                          case "name":
                            return "filter";

                          case "extract":
                            var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                            return r = a ? a[1] / 100 : 1;

                          case "inject":
                            return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";
                        } else switch (e) {
                          case "name":
                            return "opacity";

                          case "extract":
                            return r;

                          case "inject":
                            return r;
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) !function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                              case "name":
                                return "transform";

                              case "extract":
                                return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");

                              case "inject":
                                var o = !1;
                                switch (t.substr(0, t.length - 1)) {
                                  case "translate":
                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                    break;

                                  case "scal":
                                  case "scale":
                                    v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                    break;

                                  case "skew":
                                    o = !/(deg|\d)$/i.test(n);
                                    break;

                                  case "rotate":
                                    o = !/(deg|\d)$/i.test(n);
                                }
                                return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];
                            }
                        };
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) !function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                              case "name":
                                return t;

                              case "extract":
                                var o;
                                if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n; else {
                                    var i, s = {
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        red: "rgb(255, 0, 0)",
                                        white: "rgb(255, 255, 255)"
                                    };
                                    /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), 
                                    o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                }
                                return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;

                              case "inject":
                                return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), 
                                (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }
                        };
                    }();
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase();
                    });
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [ v.State.prefixMatches[e], !0 ];
                    for (var t = [ "", "Webkit", "Moz", "ms", "O" ], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase();
                        }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, 
                        [ n, !0 ];
                    }
                    return [ e, !1 ];
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a;
                    }), a = r.exec(e), a ? [ parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16) ] : [ 0, 0, 0 ];
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block";
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none");
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r); else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, 
                        x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c;
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p;
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), 
                        "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], 
                        ("" === l || null === l) && (l = e.style[r]), n();
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px");
                    }
                    return l;
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r, c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), 
                    l = x.Hooks.extractValue(u, n);
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), 
                    x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), 
                    l = x.Normalizations.registered[r]("extract", e, d);
                }
                if (!/^[\d-]/.test(l)) if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r)) if (/^(height|width)$/i.test(r)) try {
                    l = e.getBBox()[r];
                } catch (g) {
                    l = 0;
                } else l = e.getAttribute(r); else l = s(e, x.Names.prefixCheck(r)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), 
                l;
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a); else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), 
                s = "transform", a = i(e).transformCache[r]; else {
                    if (x.Hooks.registered[r]) {
                        var l = r, u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u;
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), 
                    r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a;
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
                }
                return [ s, a ];
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t));
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [ t("translateX"), t("translateY") ],
                        skewX: [ t("skewX") ],
                        skewY: [ t("skewY") ],
                        scale: 1 !== t("scale") ? [ t("scale"), t("scale") ] : [ t("scaleX"), t("scaleY") ],
                        rotate: [ t("rotateZ"), 0, 0 ]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), 
                        a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
                    });
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), 
                        void (r += t + n + " "));
                    }), o && (r = "perspective" + o + " " + r);
                }
                x.setPropertyValue(e, "transform", r);
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t)); else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s;
                }
            }), n;
        };
        var S = function() {
            function e() {
                return l ? T.promise || null : f;
            }
            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a, i = a, s = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration), 
                        e[2] !== a && (s = e[2]))) : r = e, t || (i = i || o.easing), g.isFunction(r) && (r = r.call(n, w, P)), 
                        g.isFunction(s) && (s = s.call(n, w, P)), [ r || 0, i, s ];
                    }
                    function f(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, "";
                        }), r || (r = x.Values.getUnitType(e)), [ a, r ];
                    }
                    function d() {
                        var e = {
                            myParent: n.parentNode || r.body,
                            position: x.getPropertyValue(n, "position"),
                            fontSize: x.getPropertyValue(n, "fontSize")
                        }, a = e.position === N.lastPosition && e.myParent === N.lastParent, o = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                        var s = 100, l = {};
                        if (o && a) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, 
                        l.percentToPxHeight = N.lastPercentToPxHeight; else {
                            var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each([ "overflow", "overflowX", "overflowY" ], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden");
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), 
                            v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%");
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, 
                            l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, 
                            l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, 
                            e.myParent.removeChild(u);
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), 
                        null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), 
                        l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n), 
                        l;
                    }
                    if (o.begin && 0 === w) try {
                        o.begin.call(m, m);
                    } catch (y) {
                        setTimeout(function() {
                            throw y;
                        }, 1);
                    }
                    if ("scroll" === k) {
                        var S = /^x$/i.test(o.axis) ? "Left" : "Top", V = parseFloat(o.offset) || 0, C, A, F;
                        o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, 
                        C = o.container["scroll" + S], F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]], 
                        A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], 
                        F = $(n).offset()[S.toLowerCase()] + V), s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: F,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {
                                    container: o.container,
                                    direction: S,
                                    alternateValue: A
                                }
                            },
                            element: n
                        }, v.debug && console.log("tweensContainer (scroll): ", s.scroll, n);
                    } else if ("reverse" === k) {
                        if (!i(n).tweensContainer) return void $.dequeue(n, o.queue);
                        "none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), 
                        i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, b.easing || delete o.easing, 
                        b.duration || delete o.duration, o = $.extend({}, i(n).opts, o);
                        var E = $.extend(!0, {}, i(n).tweensContainer);
                        for (var j in E) if ("element" !== j) {
                            var H = E[j].startValue;
                            E[j].startValue = E[j].currentValue = E[j].endValue, E[j].endValue = H, g.isEmptyObject(b) || (E[j].easing = o.easing), 
                            v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n);
                        }
                        s = E;
                    } else if ("start" === k) {
                        var E;
                        i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer), $.each(h, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0), n = r[0], o = r[1], i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = [ "Red", "Green", "Blue" ], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [ l[c] ];
                                        o && f.push(o), u !== a && f.push(u[c]), h[e + s[c]] = f;
                                    }
                                    delete h[e];
                                }
                            }
                        });
                        for (var R in h) {
                            var O = p(h[R]), z = O[0], q = O[1], M = O[2];
                            R = x.Names.camelCase(R);
                            var I = x.Hooks.getRoot(R), B = !1;
                            if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                (o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0), 
                                o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType), B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I), 
                                M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
                                var W, G, D, X = !1;
                                if (W = f(R, M), M = W[0], D = W[1], W = f(R, z), z = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return X = t, "";
                                }), G = W[1], M = parseFloat(M) || 0, z = parseFloat(z) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100, 
                                G = "em") : /^scale/.test(R) ? (z /= 100, G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255, 
                                G = "")), /[\/*]/.test(X)) G = D; else if (D !== G && 0 !== M) if (0 === z) G = D; else {
                                    l = l || d();
                                    var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
                                    switch (D) {
                                      case "%":
                                        M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        M *= l[D + "ToPx"];
                                    }
                                    switch (G) {
                                      case "%":
                                        M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        M *= 1 / l[G + "ToPx"];
                                    }
                                }
                                switch (X) {
                                  case "+":
                                    z = M + z;
                                    break;

                                  case "-":
                                    z = M - z;
                                    break;

                                  case "*":
                                    z = M * z;
                                    break;

                                  case "/":
                                    z = M / z;
                                }
                                s[R] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: z,
                                    unitType: G,
                                    easing: q
                                }, v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n);
                            } else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
                        }
                        s.element = n;
                    }
                    s.element && (x.Values.addClass(n, "velocity-animating"), L.push(s), "" === o.queue && (i(n).tweensContainer = s, 
                    i(n).opts = o), i(n).isAnimating = !0, w === P - 1 ? (v.State.calls.push([ L, m, o, null, T.resolver ]), 
                    v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : w++);
                }
                var n = this, o = $.extend({}, v.defaults, b), s = {}, l;
                switch (i(n) === a && v.init(n), parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function(e) {
                    v.velocityQueueEntryFlag = !0, i(n).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: e
                    };
                }), o.duration.toString().toLowerCase()) {
                  case "fast":
                    o.duration = 200;
                    break;

                  case "normal":
                    o.duration = y;
                    break;

                  case "slow":
                    o.duration = 600;
                    break;

                  default:
                    o.duration = parseFloat(o.duration) || 1;
                }
                v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1, 
                o.delay *= parseFloat(v.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !g.isFunction(o.begin) && (o.begin = null), 
                o.progress && !g.isFunction(o.progress) && (o.progress = null), o.complete && !g.isFunction(o.complete) && (o.complete = null), 
                o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(), 
                "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))), o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), 
                o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function(t, r) {
                    return r === !0 ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, 
                    void e(t));
                }), "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n);
            }
            var s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)), l, f, d, m, h, b;
            if (g.isWrapped(this) ? (l = !1, d = 0, m = this, f = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), 
            m = o(m)) {
                s ? (h = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (h = arguments[d], 
                b = arguments[d + 1]);
                var P = m.length, w = 0;
                if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
                    var V = d + 1;
                    b = {};
                    for (var C = V; C < arguments.length; C++) g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C];
                }
                var T = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                l && v.Promise && (T.promise = new v.Promise(function(e, t) {
                    T.resolver = e, T.rejecter = t;
                }));
                var k;
                switch (h) {
                  case "scroll":
                    k = "scroll";
                    break;

                  case "reverse":
                    k = "reverse";
                    break;

                  case "finish":
                  case "stop":
                    $.each(m, function(e, t) {
                        i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), 
                        delete i(t).delayTimer);
                    });
                    var A = [];
                    return $.each(v.State.calls, function(e, t) {
                        t && $.each(t[1], function(r, n) {
                            var o = b === a ? "" : b;
                            return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function(r, a) {
                                a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function(e, t) {
                                    g.isFunction(t) && t(null, !0);
                                }), $.queue(a, g.isString(b) ? b : "", [])), "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function(e, t) {
                                    t.endValue = t.currentValue;
                                }), A.push(e)) : "finish" === h && (t[2].duration = 1));
                            }) : !0;
                        });
                    }), "stop" === h && ($.each(A, function(e, t) {
                        p(t, !0);
                    }), T.promise && T.resolver(m)), e();

                  default:
                    if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
                        if (g.isString(h) && v.Redirects[h]) {
                            var F = $.extend({}, b), E = F.duration, j = F.delay || 0;
                            return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()), $.each(m, function(e, t) {
                                parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)), 
                                F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y), 
                                F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)), 
                                v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a);
                            }), e();
                        }
                        var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return T.promise ? T.rejecter(new Error(H)) : console.log(H), e();
                    }
                    k = "start";
                }
                var N = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, L = [];
                $.each(m, function(e, t) {
                    g.isNode(t) && n.call(t);
                });
                var F = $.extend({}, v.defaults, b), R;
                if (F.loop = parseInt(F.loop), R = 2 * F.loop - 1, F.loop) for (var O = 0; R > O; O++) {
                    var z = {
                        delay: F.delay,
                        progress: F.progress
                    };
                    O === R - 1 && (z.display = F.display, z.visibility = F.visibility, z.complete = F.complete), 
                    S(m, "reverse", z);
                }
                return e();
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0);
                }, 16);
            }, c()) : P = t.requestAnimationFrame || d;
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), 
        $.each([ "Down", "Up" ], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = l.begin, c = l.complete, p = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), 
                l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [ a, 0 ] : [ 0, a ];
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden";
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i);
                }, v(e, p, l);
            };
        }), $.each([ "In", "Out" ], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = {
                    opacity: "In" === t ? 1 : 0
                }, c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i);
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l);
            };
        }), v;
    }(window.jQuery || window.Zepto || window, window, document);
});

window.Modernizr = function(a, b, c) {
    function w(a) {
        j.cssText = a;
    }
    function x(a, b) {
        return w(m.join(a + ";") + (b || ""));
    }
    function y(a, b) {
        return typeof a === b;
    }
    function z(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function A(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = {}, o = {}, p = {}, q = [], r = q.slice, s, t = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), 
        l.appendChild(j);
        return f = [ "&#173;", '<style id="s', h, '">', a, "</style>" ].join(""), l.id = h, 
        (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", 
        k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), 
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), 
        !!i;
    }, u = {}.hasOwnProperty, v;
    !y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
        return u.call(a, b);
    } : v = function(a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined");
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = r.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a(), g = c.apply(f, d.concat(r.call(arguments)));
                return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(r.call(arguments)));
        };
        return e;
    }), n.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t([ "@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(a) {
            c = a.offsetTop === 9;
        }), c;
    };
    for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
    return e.addTest = function(a, b) {
        if (typeof a == "object") for (var d in a) v(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), 
            e[a] = b;
        }
        return e;
    }, w(""), i = k = null, function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a;
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b;
        }
        function n(a, c, f) {
            c || (c = b);
            if (j) return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), 
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
        }
        function o(a, c) {
            a || (a = b);
            if (j) return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (;e < g; e++) d.createElement(f[e]);
            return d;
        }
        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, 
            b.frag = b.createFrag()), a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c);
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
            }) + ");return n}")(r, b.frag);
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), 
            j || p(a, c), a;
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
                }();
            } catch (c) {
                f = !0, j = !0;
            }
        })();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r, q(b);
    }(this, b), e._version = d, e._prefixes = m, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""), 
    e;
}(this, this.document), function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a);
    }
    function e(a) {
        return "string" == typeof a;
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
        }, 0) : (a(), h()) : q = 0;
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, 
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l);
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
            }
        }
        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), 
        l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r);
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), 
        m(k, j)) : y[c].push(l));
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 
        1 == p.length && h()), this;
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a;
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a);
    }, x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]), a;
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c;
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), 
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, 
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), 
            (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
            })));
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l();
                    }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function() {
                        var b = 0, c;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b;
                    }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l();
                    } : j[n] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                        };
                    }(k[n])), g(a[n], j, b, n, h));
                } else !c && l();
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i);
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], 
        e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l);
    }, B.addPrefix = function(a, b) {
        z[a] = b;
    }, B.addFilter = function(a) {
        x.push(a);
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", 
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete";
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
        }, m(function() {
            l || (l = 1, c(1));
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
    };
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
};

new WOW().init();

$("document").ready(function() {
    $("[data-typer-targets]").typer();
    var $scene = $("#scene").parallax();
    $("#cbp-fbscroller > nav").midnight();
    function clock() {
        var t = moment(), s = t.seconds() * 6, m = t.minutes() * 6 + s / 60, h = t.hours() % 12 / 12 * 360 + m / 12;
        $(".hour").css("transform", "rotate(" + h + "deg)");
        $(".minute").css("transform", "rotate(" + m + "deg)");
        $(".second").css("transform", "rotate(" + s + "deg)");
    }
    function refreshClock() {
        clock(), setTimeout(refreshClock, 1e3);
    }
    refreshClock();
    cbpFixedScrollLayout.init({
        // the cbp-fbscroller´s sections
        $sections: $("#cbp-fbscroller > section"),
        // the navigation links
        $navlinks: $("#cbp-fbscroller .default a"),
        // midnight black navigation links
        $navlinksBlack: $("#cbp-fbscroller .black a"),
        // index of current link / section
        currentLink: 0,
        // the body element
        $body: $("html, body"),
        // the body animation speed
        animspeed: 650,
        // the body animation easing (jquery easing)
        animeasing: "easeInOutExpo"
    });
    var images = $("img, .gravity, section");
    $.each(images, function() {
        var el = $(this), image = el.css("background-image").replace(/"/g, "").replace(/url\(|\)$/gi, "");
        if (image && image !== "" && image !== "none") images = images.add($("<img>").attr("src", image));
        if (el.is("img")) images = images.add(el);
    });
    images.imagesLoaded(function() {
        $("body").removeClass("loading");
        $(".loading-spinner").fadeOut("slow");
    });
    var form = $("#nl-form").clone();
    var counter = localStorage.getItem("visits");
    if (counter === null) {
        counter = 0;
    }
    var special = [ "zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelvth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth" ];
    var deca = [ "twent", "thirt", "fourt", "fift", "sixt", "sevent", "eight", "ninet" ];
    function stringifyNumber(n) {
        if (n < 20) return special[n];
        if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + "ieth";
        return deca[Math.floor(n / 10) - 2] + "y-" + special[n % 10];
    }
    $('[data-type="modal-trigger"]').on("click", function() {
        counter++;
        localStorage.setItem("visits", counter);
        if (counter > 4) {
            $("#counter").html(stringifyNumber(counter));
            $("#sherlockHolmes").show();
        }
        var formFullName = chance.name(), formName = formFullName.toLowerCase().split(" "), formEmail = formName[0] + "@" + formName[1] + ".com";
        $("#formFullName").attr("placeholder", formFullName);
        $("#formEmail").attr("placeholder", formEmail);
        var nlform = new NLForm(document.getElementById("nl-form"));
        var actionBtn = $(this);
        var body = $("body");
        body.stop().animate({
            scrollTop: 0
        }, "300", "swing", function() {
            var scaleValue = retrieveScale(actionBtn.next(".modal-bg"));
            actionBtn.addClass("to-circle");
            actionBtn.next(".modal-bg").addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                animateLayer(actionBtn.next(".modal-bg"), scaleValue, true);
                $scene.parallax("disable");
                $(".main-layer").css("transform", "");
            });
            if (actionBtn.parents(".no-csstransitions").length > 0) animateLayer(actionBtn.next(".modal-bg"), scaleValue, true);
        });
    });
    //trigger the animation - close modal window
    $(".section .modal-close").on("click", function() {
        closeModal();
    });
    $(window).on("resize", function() {
        //on window resize - update cover layer dimention and position
        if ($(".section.modal-is-visible").length > 0) window.requestAnimationFrame(updateLayer);
    });
    function retrieveScale(btn) {
        var btnRadius = btn.width() / 2, left = btn.offset().left + btnRadius, top = btn.offset().top + btnRadius - $(window).scrollTop(), scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());
        btn.css("position", "fixed").velocity({
            top: top - btnRadius,
            left: left - btnRadius,
            translateX: 0
        }, 0);
        return scale;
    }
    function scaleValue(topValue, leftValue, radiusValue, windowW, windowH) {
        var maxDistHor = leftValue > windowW / 2 ? leftValue : windowW - leftValue, maxDistVert = topValue > windowH / 2 ? topValue : windowH - topValue;
        return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radiusValue);
    }
    function animateLayer(layer, scaleVal, bool) {
        layer.velocity({
            scale: scaleVal
        }, 400, function() {
            $("body").toggleClass("overflow-hidden", bool);
            bool ? layer.parents(".section").addClass("modal-is-visible").end().off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend") : layer.removeClass("is-visible").removeAttr("style").siblings('[data-type="modal-trigger"]').removeClass("to-circle");
        });
    }
    function updateLayer() {
        var layer = $(".section.modal-is-visible").find(".modal-bg"), layerRadius = layer.width() / 2, layerTop = layer.siblings(".btn").offset().top + layerRadius - $(window).scrollTop(), layerLeft = layer.siblings(".btn").offset().left + layerRadius, scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
        layer.velocity({
            top: layerTop - layerRadius,
            left: layerLeft - layerRadius,
            scale: scale
        }, 0);
    }
    function closeModal() {
        var section = $(".section.modal-is-visible");
        section.removeClass("modal-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            $scene.parallax("enable");
            $scene.parallax("updateLayers");
            animateLayer(section.find(".modal-bg"), 1, false);
            setTimeout(function() {
                $("#nl-form").replaceWith(form.clone());
            }, 400);
        });
        //if browser doesn't support transitions...
        if (section.parents(".no-csstransitions").length > 0) animateLayer(section.find(".modal-bg"), 1, false);
    }
});