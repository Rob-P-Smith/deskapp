var U1 = (p) => {
  throw TypeError(p);
};
var Eb = (p, y, A) => y.has(p) || U1("Cannot " + A);
var ee = (p, y, A) => (Eb(p, y, "read from private field"), A ? A.call(p) : y.get(p)), Dt = (p, y, A) => y.has(p) ? U1("Cannot add the same private member more than once") : y instanceof WeakSet ? y.add(p) : y.set(p, A), We = (p, y, A, T) => (Eb(p, y, "write to private field"), T ? T.call(p, A) : y.set(p, A), A), Ea = (p, y, A) => (Eb(p, y, "access private method"), A);
var Jg = (p, y, A, T) => ({
  set _(Z) {
    We(p, y, Z, A);
  },
  get _() {
    return ee(p, y, T);
  }
});
function uT(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var $g = { exports: {} }, $p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C1;
function bE() {
  if (C1) return $p;
  C1 = 1;
  var p = Symbol.for("react.transitional.element"), y = Symbol.for("react.fragment");
  function A(T, Z, ie) {
    var Oe = null;
    if (ie !== void 0 && (Oe = "" + ie), Z.key !== void 0 && (Oe = "" + Z.key), "key" in Z) {
      ie = {};
      for (var re in Z)
        re !== "key" && (ie[re] = Z[re]);
    } else ie = Z;
    return Z = ie.ref, {
      $$typeof: p,
      type: T,
      key: Oe,
      ref: Z !== void 0 ? Z : null,
      props: ie
    };
  }
  return $p.Fragment = y, $p.jsx = A, $p.jsxs = A, $p;
}
var Wp = {}, Wg = { exports: {} }, lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1;
function SE() {
  if (_1) return lt;
  _1 = 1;
  var p = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), ie = Symbol.for("react.consumer"), Oe = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), K = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), X = Symbol.iterator;
  function M(S) {
    return S === null || typeof S != "object" ? null : (S = X && S[X] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var ne = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ee = Object.assign, Te = {};
  function pe(S, Y, W) {
    this.props = S, this.context = Y, this.refs = Te, this.updater = W || ne;
  }
  pe.prototype.isReactComponent = {}, pe.prototype.setState = function(S, Y) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, Y, "setState");
  }, pe.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Ce() {
  }
  Ce.prototype = pe.prototype;
  function Rt(S, Y, W) {
    this.props = S, this.context = Y, this.refs = Te, this.updater = W || ne;
  }
  var _e = Rt.prototype = new Ce();
  _e.constructor = Rt, Ee(_e, pe.prototype), _e.isPureReactComponent = !0;
  var ft = Array.isArray, Me = { H: null, A: null, T: null, S: null, V: null }, ct = Object.prototype.hasOwnProperty;
  function Le(S, Y, W, te, de, He) {
    return W = He.ref, {
      $$typeof: p,
      type: S,
      key: Y,
      ref: W !== void 0 ? W : null,
      props: He
    };
  }
  function pt(S, Y) {
    return Le(
      S.type,
      Y,
      void 0,
      void 0,
      void 0,
      S.props
    );
  }
  function oe(S) {
    return typeof S == "object" && S !== null && S.$$typeof === p;
  }
  function ht(S) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(W) {
      return Y[W];
    });
  }
  var Ae = /\/+/g;
  function we(S, Y) {
    return typeof S == "object" && S !== null && S.key != null ? ht("" + S.key) : Y.toString(36);
  }
  function xt() {
  }
  function Vt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(xt, xt) : (S.status = "pending", S.then(
          function(Y) {
            S.status === "pending" && (S.status = "fulfilled", S.value = Y);
          },
          function(Y) {
            S.status === "pending" && (S.status = "rejected", S.reason = Y);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function Tt(S, Y, W, te, de) {
    var He = typeof S;
    (He === "undefined" || He === "boolean") && (S = null);
    var he = !1;
    if (S === null) he = !0;
    else
      switch (He) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case p:
            case y:
              he = !0;
              break;
            case ce:
              return he = S._init, Tt(
                he(S._payload),
                Y,
                W,
                te,
                de
              );
          }
      }
    if (he)
      return de = de(S), he = te === "" ? "." + we(S, 0) : te, ft(de) ? (W = "", he != null && (W = he.replace(Ae, "$&/") + "/"), Tt(de, Y, W, "", function(Yt) {
        return Yt;
      })) : de != null && (oe(de) && (de = pt(
        de,
        W + (de.key == null || S && S.key === de.key ? "" : ("" + de.key).replace(
          Ae,
          "$&/"
        ) + "/") + he
      )), Y.push(de)), 1;
    he = 0;
    var ol = te === "" ? "." : te + ":";
    if (ft(S))
      for (var Ye = 0; Ye < S.length; Ye++)
        te = S[Ye], He = ol + we(te, Ye), he += Tt(
          te,
          Y,
          W,
          He,
          de
        );
    else if (Ye = M(S), typeof Ye == "function")
      for (S = Ye.call(S), Ye = 0; !(te = S.next()).done; )
        te = te.value, He = ol + we(te, Ye++), he += Tt(
          te,
          Y,
          W,
          He,
          de
        );
    else if (He === "object") {
      if (typeof S.then == "function")
        return Tt(
          Vt(S),
          Y,
          W,
          te,
          de
        );
      throw Y = String(S), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return he;
  }
  function C(S, Y, W) {
    if (S == null) return S;
    var te = [], de = 0;
    return Tt(S, te, "", "", function(He) {
      return Y.call(W, He, de++);
    }), te;
  }
  function P(S) {
    if (S._status === -1) {
      var Y = S._result;
      Y = Y(), Y.then(
        function(W) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = W);
        },
        function(W) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = W);
        }
      ), S._status === -1 && (S._status = 0, S._result = Y);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var le = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  };
  function Re() {
  }
  return lt.Children = {
    map: C,
    forEach: function(S, Y, W) {
      C(
        S,
        function() {
          Y.apply(this, arguments);
        },
        W
      );
    },
    count: function(S) {
      var Y = 0;
      return C(S, function() {
        Y++;
      }), Y;
    },
    toArray: function(S) {
      return C(S, function(Y) {
        return Y;
      }) || [];
    },
    only: function(S) {
      if (!oe(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  }, lt.Component = pe, lt.Fragment = A, lt.Profiler = Z, lt.PureComponent = Rt, lt.StrictMode = T, lt.Suspense = w, lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Me, lt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Me.H.useMemoCache(S);
    }
  }, lt.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, lt.cloneElement = function(S, Y, W) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var te = Ee({}, S.props), de = S.key, He = void 0;
    if (Y != null)
      for (he in Y.ref !== void 0 && (He = void 0), Y.key !== void 0 && (de = "" + Y.key), Y)
        !ct.call(Y, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && Y.ref === void 0 || (te[he] = Y[he]);
    var he = arguments.length - 2;
    if (he === 1) te.children = W;
    else if (1 < he) {
      for (var ol = Array(he), Ye = 0; Ye < he; Ye++)
        ol[Ye] = arguments[Ye + 2];
      te.children = ol;
    }
    return Le(S.type, de, void 0, void 0, He, te);
  }, lt.createContext = function(S) {
    return S = {
      $$typeof: Oe,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: ie,
      _context: S
    }, S;
  }, lt.createElement = function(S, Y, W) {
    var te, de = {}, He = null;
    if (Y != null)
      for (te in Y.key !== void 0 && (He = "" + Y.key), Y)
        ct.call(Y, te) && te !== "key" && te !== "__self" && te !== "__source" && (de[te] = Y[te]);
    var he = arguments.length - 2;
    if (he === 1) de.children = W;
    else if (1 < he) {
      for (var ol = Array(he), Ye = 0; Ye < he; Ye++)
        ol[Ye] = arguments[Ye + 2];
      de.children = ol;
    }
    if (S && S.defaultProps)
      for (te in he = S.defaultProps, he)
        de[te] === void 0 && (de[te] = he[te]);
    return Le(S, He, void 0, void 0, null, de);
  }, lt.createRef = function() {
    return { current: null };
  }, lt.forwardRef = function(S) {
    return { $$typeof: re, render: S };
  }, lt.isValidElement = oe, lt.lazy = function(S) {
    return {
      $$typeof: ce,
      _payload: { _status: -1, _result: S },
      _init: P
    };
  }, lt.memo = function(S, Y) {
    return {
      $$typeof: K,
      type: S,
      compare: Y === void 0 ? null : Y
    };
  }, lt.startTransition = function(S) {
    var Y = Me.T, W = {};
    Me.T = W;
    try {
      var te = S(), de = Me.S;
      de !== null && de(W, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(Re, le);
    } catch (He) {
      le(He);
    } finally {
      Me.T = Y;
    }
  }, lt.unstable_useCacheRefresh = function() {
    return Me.H.useCacheRefresh();
  }, lt.use = function(S) {
    return Me.H.use(S);
  }, lt.useActionState = function(S, Y, W) {
    return Me.H.useActionState(S, Y, W);
  }, lt.useCallback = function(S, Y) {
    return Me.H.useCallback(S, Y);
  }, lt.useContext = function(S) {
    return Me.H.useContext(S);
  }, lt.useDebugValue = function() {
  }, lt.useDeferredValue = function(S, Y) {
    return Me.H.useDeferredValue(S, Y);
  }, lt.useEffect = function(S, Y, W) {
    var te = Me.H;
    if (typeof W == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return te.useEffect(S, Y);
  }, lt.useId = function() {
    return Me.H.useId();
  }, lt.useImperativeHandle = function(S, Y, W) {
    return Me.H.useImperativeHandle(S, Y, W);
  }, lt.useInsertionEffect = function(S, Y) {
    return Me.H.useInsertionEffect(S, Y);
  }, lt.useLayoutEffect = function(S, Y) {
    return Me.H.useLayoutEffect(S, Y);
  }, lt.useMemo = function(S, Y) {
    return Me.H.useMemo(S, Y);
  }, lt.useOptimistic = function(S, Y) {
    return Me.H.useOptimistic(S, Y);
  }, lt.useReducer = function(S, Y, W) {
    return Me.H.useReducer(S, Y, W);
  }, lt.useRef = function(S) {
    return Me.H.useRef(S);
  }, lt.useState = function(S) {
    return Me.H.useState(S);
  }, lt.useSyncExternalStore = function(S, Y, W) {
    return Me.H.useSyncExternalStore(
      S,
      Y,
      W
    );
  }, lt.useTransition = function() {
    return Me.H.useTransition();
  }, lt.version = "19.1.0", lt;
}
var Pp = { exports: {} };
Pp.exports;
var H1;
function TE() {
  return H1 || (H1 = 1, function(p, y) {
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    process.env.NODE_ENV !== "production" && function() {
      function A(v, _) {
        Object.defineProperty(ie.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              _[0],
              _[1]
            );
          }
        });
      }
      function T(v) {
        return v === null || typeof v != "object" ? null : (v = _n && v[_n] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Z(v, _) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var ue = v + "." + _;
        tc[ue] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          _,
          v
        ), tc[ue] = !0);
      }
      function ie(v, _, ue) {
        this.props = v, this.context = _, this.refs = wf, this.updater = ue || Hn;
      }
      function Oe() {
      }
      function re(v, _, ue) {
        this.props = v, this.context = _, this.refs = wf, this.updater = ue || Hn;
      }
      function w(v) {
        return "" + v;
      }
      function K(v) {
        try {
          w(v);
          var _ = !1;
        } catch {
          _ = !0;
        }
        if (_) {
          _ = console;
          var ue = _.error, se = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return ue.call(
            _,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            se
          ), w(v);
        }
      }
      function ce(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === Mr ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case S:
            return "Fragment";
          case W:
            return "Profiler";
          case Y:
            return "StrictMode";
          case he:
            return "Suspense";
          case ol:
            return "SuspenseList";
          case ua:
            return "Activity";
        }
        if (typeof v == "object")
          switch (typeof v.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), v.$$typeof) {
            case Re:
              return "Portal";
            case de:
              return (v.displayName || "Context") + ".Provider";
            case te:
              return (v._context.displayName || "Context") + ".Consumer";
            case He:
              var _ = v.render;
              return v = v.displayName, v || (v = _.displayName || _.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case Ye:
              return _ = v.displayName || null, _ !== null ? _ : ce(v.type) || "Memo";
            case Yt:
              _ = v._payload, v = v._init;
              try {
                return ce(v(_));
              } catch {
              }
          }
        return null;
      }
      function X(v) {
        if (v === S) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === Yt)
          return "<...>";
        try {
          var _ = ce(v);
          return _ ? "<" + _ + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function M() {
        var v = Fe.A;
        return v === null ? null : v.getOwner();
      }
      function ne() {
        return Error("react-stack-top-frame");
      }
      function Ee(v) {
        if (xn.call(v, "key")) {
          var _ = Object.getOwnPropertyDescriptor(v, "key").get;
          if (_ && _.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function Te(v, _) {
        function ue() {
          Ou || (Ou = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            _
          ));
        }
        ue.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: ue,
          configurable: !0
        });
      }
      function pe() {
        var v = ce(this.type);
        return qf[v] || (qf[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function Ce(v, _, ue, se, Se, je, Xe, st) {
        return ue = je.ref, v = {
          $$typeof: le,
          type: v,
          key: _,
          props: je,
          _owner: Se
        }, (ue !== void 0 ? ue : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: pe
        }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(v, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(v, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Xe
        }), Object.defineProperty(v, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: st
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Rt(v, _) {
        return _ = Ce(
          v.type,
          _,
          void 0,
          void 0,
          v._owner,
          v.props,
          v._debugStack,
          v._debugTask
        ), v._store && (_._store.validated = v._store.validated), _;
      }
      function _e(v) {
        return typeof v == "object" && v !== null && v.$$typeof === le;
      }
      function ft(v) {
        var _ = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(ue) {
          return _[ue];
        });
      }
      function Me(v, _) {
        return typeof v == "object" && v !== null && v.key != null ? (K(v.key), ft("" + v.key)) : _.toString(36);
      }
      function ct() {
      }
      function Le(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(ct, ct) : (v.status = "pending", v.then(
              function(_) {
                v.status === "pending" && (v.status = "fulfilled", v.value = _);
              },
              function(_) {
                v.status === "pending" && (v.status = "rejected", v.reason = _);
              }
            )), v.status) {
              case "fulfilled":
                return v.value;
              case "rejected":
                throw v.reason;
            }
        }
        throw v;
      }
      function pt(v, _, ue, se, Se) {
        var je = typeof v;
        (je === "undefined" || je === "boolean") && (v = null);
        var Xe = !1;
        if (v === null) Xe = !0;
        else
          switch (je) {
            case "bigint":
            case "string":
            case "number":
              Xe = !0;
              break;
            case "object":
              switch (v.$$typeof) {
                case le:
                case Re:
                  Xe = !0;
                  break;
                case Yt:
                  return Xe = v._init, pt(
                    Xe(v._payload),
                    _,
                    ue,
                    se,
                    Se
                  );
              }
          }
        if (Xe) {
          Xe = v, Se = Se(Xe);
          var st = se === "" ? "." + Me(Xe, 0) : se;
          return ci(Se) ? (ue = "", st != null && (ue = st.replace(Ml, "$&/") + "/"), pt(Se, _, ue, "", function(al) {
            return al;
          })) : Se != null && (_e(Se) && (Se.key != null && (Xe && Xe.key === Se.key || K(Se.key)), ue = Rt(
            Se,
            ue + (Se.key == null || Xe && Xe.key === Se.key ? "" : ("" + Se.key).replace(
              Ml,
              "$&/"
            ) + "/") + st
          ), se !== "" && Xe != null && _e(Xe) && Xe.key == null && Xe._store && !Xe._store.validated && (ue._store.validated = 2), Se = ue), _.push(Se)), 1;
        }
        if (Xe = 0, st = se === "" ? "." : se + ":", ci(v))
          for (var Ve = 0; Ve < v.length; Ve++)
            se = v[Ve], je = st + Me(se, Ve), Xe += pt(
              se,
              _,
              ue,
              je,
              Se
            );
        else if (Ve = T(v), typeof Ve == "function")
          for (Ve === v.entries && (Va || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Va = !0), v = Ve.call(v), Ve = 0; !(se = v.next()).done; )
            se = se.value, je = st + Me(se, Ve++), Xe += pt(
              se,
              _,
              ue,
              je,
              Se
            );
        else if (je === "object") {
          if (typeof v.then == "function")
            return pt(
              Le(v),
              _,
              ue,
              se,
              Se
            );
          throw _ = String(v), Error(
            "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Xe;
      }
      function oe(v, _, ue) {
        if (v == null) return v;
        var se = [], Se = 0;
        return pt(v, se, "", "", function(je) {
          return _.call(ue, je, Se++);
        }), se;
      }
      function ht(v) {
        if (v._status === -1) {
          var _ = v._result;
          _ = _(), _.then(
            function(ue) {
              (v._status === 0 || v._status === -1) && (v._status = 1, v._result = ue);
            },
            function(ue) {
              (v._status === 0 || v._status === -1) && (v._status = 2, v._result = ue);
            }
          ), v._status === -1 && (v._status = 0, v._result = _);
        }
        if (v._status === 1)
          return _ = v._result, _ === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            _
          ), "default" in _ || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            _
          ), _.default;
        throw v._result;
      }
      function Ae() {
        var v = Fe.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function we() {
      }
      function xt(v) {
        if (ho === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7);
            ho = (p && p[_]).call(
              p,
              "timers"
            ).setImmediate;
          } catch {
            ho = function(se) {
              Bf === !1 && (Bf = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var Se = new MessageChannel();
              Se.port1.onmessage = se, Se.port2.postMessage(void 0);
            };
          }
        return ho(v);
      }
      function Vt(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function Tt(v, _) {
        _ !== sn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), sn = _;
      }
      function C(v, _, ue) {
        var se = Fe.actQueue;
        if (se !== null)
          if (se.length !== 0)
            try {
              P(se), xt(function() {
                return C(v, _, ue);
              });
              return;
            } catch (Se) {
              Fe.thrownErrors.push(Se);
            }
          else Fe.actQueue = null;
        0 < Fe.thrownErrors.length ? (se = Vt(Fe.thrownErrors), Fe.thrownErrors.length = 0, ue(se)) : _(v);
      }
      function P(v) {
        if (!zl) {
          zl = !0;
          var _ = 0;
          try {
            for (; _ < v.length; _++) {
              var ue = v[_];
              do {
                Fe.didUsePromise = !1;
                var se = ue(!1);
                if (se !== null) {
                  if (Fe.didUsePromise) {
                    v[_] = ue, v.splice(0, _);
                    return;
                  }
                  ue = se;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (Se) {
            v.splice(0, _ + 1), Fe.thrownErrors.push(Se);
          } finally {
            zl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var le = Symbol.for("react.transitional.element"), Re = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), de = Symbol.for("react.context"), He = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), ol = Symbol.for("react.suspense_list"), Ye = Symbol.for("react.memo"), Yt = Symbol.for("react.lazy"), ua = Symbol.for("react.activity"), _n = Symbol.iterator, tc = {}, Hn = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Z(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Z(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Z(v, "setState");
        }
      }, fo = Object.assign, wf = {};
      Object.freeze(wf), ie.prototype.isReactComponent = {}, ie.prototype.setState = function(v, _) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, _, "setState");
      }, ie.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var ll = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, vl;
      for (vl in ll)
        ll.hasOwnProperty(vl) && A(vl, ll[vl]);
      Oe.prototype = ie.prototype, ll = re.prototype = new Oe(), ll.constructor = re, fo(ll, ie.prototype), ll.isPureReactComponent = !0;
      var ci = Array.isArray, Mr = Symbol.for("react.client.reference"), Fe = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, xn = Object.prototype.hasOwnProperty, so = console.createTask ? console.createTask : function() {
        return null;
      };
      ll = {
        "react-stack-bottom-frame": function(v) {
          return v();
        }
      };
      var Ou, zr, qf = {}, oi = ll["react-stack-bottom-frame"].bind(ll, ne)(), Dl = so(X(ne)), Va = !1, Ml = /\/+/g, ro = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var _ = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
            error: v
          });
          if (!window.dispatchEvent(_)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, Bf = !1, ho = null, sn = 0, ia = !1, zl = !1, rn = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : xt;
      ll = Object.freeze({
        __proto__: null,
        c: function(v) {
          return Ae().useMemoCache(v);
        }
      }), y.Children = {
        map: oe,
        forEach: function(v, _, ue) {
          oe(
            v,
            function() {
              _.apply(this, arguments);
            },
            ue
          );
        },
        count: function(v) {
          var _ = 0;
          return oe(v, function() {
            _++;
          }), _;
        },
        toArray: function(v) {
          return oe(v, function(_) {
            return _;
          }) || [];
        },
        only: function(v) {
          if (!_e(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      }, y.Component = ie, y.Fragment = S, y.Profiler = W, y.PureComponent = re, y.StrictMode = Y, y.Suspense = he, y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Fe, y.__COMPILER_RUNTIME = ll, y.act = function(v) {
        var _ = Fe.actQueue, ue = sn;
        sn++;
        var se = Fe.actQueue = _ !== null ? _ : [], Se = !1;
        try {
          var je = v();
        } catch (Ve) {
          Fe.thrownErrors.push(Ve);
        }
        if (0 < Fe.thrownErrors.length)
          throw Tt(_, ue), v = Vt(Fe.thrownErrors), Fe.thrownErrors.length = 0, v;
        if (je !== null && typeof je == "object" && typeof je.then == "function") {
          var Xe = je;
          return rn(function() {
            Se || ia || (ia = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ve, al) {
              Se = !0, Xe.then(
                function(dn) {
                  if (Tt(_, ue), ue === 0) {
                    try {
                      P(se), xt(function() {
                        return C(
                          dn,
                          Ve,
                          al
                        );
                      });
                    } catch (iy) {
                      Fe.thrownErrors.push(iy);
                    }
                    if (0 < Fe.thrownErrors.length) {
                      var Ur = Vt(
                        Fe.thrownErrors
                      );
                      Fe.thrownErrors.length = 0, al(Ur);
                    }
                  } else Ve(dn);
                },
                function(dn) {
                  Tt(_, ue), 0 < Fe.thrownErrors.length && (dn = Vt(
                    Fe.thrownErrors
                  ), Fe.thrownErrors.length = 0), al(dn);
                }
              );
            }
          };
        }
        var st = je;
        if (Tt(_, ue), ue === 0 && (P(se), se.length !== 0 && rn(function() {
          Se || ia || (ia = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Fe.actQueue = null), 0 < Fe.thrownErrors.length)
          throw v = Vt(Fe.thrownErrors), Fe.thrownErrors.length = 0, v;
        return {
          then: function(Ve, al) {
            Se = !0, ue === 0 ? (Fe.actQueue = se, xt(function() {
              return C(
                st,
                Ve,
                al
              );
            })) : Ve(st);
          }
        };
      }, y.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, y.captureOwnerStack = function() {
        var v = Fe.getCurrentStack;
        return v === null ? null : v();
      }, y.cloneElement = function(v, _, ue) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var se = fo({}, v.props), Se = v.key, je = v._owner;
        if (_ != null) {
          var Xe;
          e: {
            if (xn.call(_, "ref") && (Xe = Object.getOwnPropertyDescriptor(
              _,
              "ref"
            ).get) && Xe.isReactWarning) {
              Xe = !1;
              break e;
            }
            Xe = _.ref !== void 0;
          }
          Xe && (je = M()), Ee(_) && (K(_.key), Se = "" + _.key);
          for (st in _)
            !xn.call(_, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && _.ref === void 0 || (se[st] = _[st]);
        }
        var st = arguments.length - 2;
        if (st === 1) se.children = ue;
        else if (1 < st) {
          Xe = Array(st);
          for (var Ve = 0; Ve < st; Ve++)
            Xe[Ve] = arguments[Ve + 2];
          se.children = Xe;
        }
        for (se = Ce(
          v.type,
          Se,
          void 0,
          void 0,
          je,
          se,
          v._debugStack,
          v._debugTask
        ), Se = 2; Se < arguments.length; Se++)
          je = arguments[Se], _e(je) && je._store && (je._store.validated = 1);
        return se;
      }, y.createContext = function(v) {
        return v = {
          $$typeof: de,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, v.Provider = v, v.Consumer = {
          $$typeof: te,
          _context: v
        }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, y.createElement = function(v, _, ue) {
        for (var se = 2; se < arguments.length; se++) {
          var Se = arguments[se];
          _e(Se) && Se._store && (Se._store.validated = 1);
        }
        if (se = {}, Se = null, _ != null)
          for (Ve in zr || !("__self" in _) || "key" in _ || (zr = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Ee(_) && (K(_.key), Se = "" + _.key), _)
            xn.call(_, Ve) && Ve !== "key" && Ve !== "__self" && Ve !== "__source" && (se[Ve] = _[Ve]);
        var je = arguments.length - 2;
        if (je === 1) se.children = ue;
        else if (1 < je) {
          for (var Xe = Array(je), st = 0; st < je; st++)
            Xe[st] = arguments[st + 2];
          Object.freeze && Object.freeze(Xe), se.children = Xe;
        }
        if (v && v.defaultProps)
          for (Ve in je = v.defaultProps, je)
            se[Ve] === void 0 && (se[Ve] = je[Ve]);
        Se && Te(
          se,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var Ve = 1e4 > Fe.recentlyCreatedOwnerStacks++;
        return Ce(
          v,
          Se,
          void 0,
          void 0,
          M(),
          se,
          Ve ? Error("react-stack-top-frame") : oi,
          Ve ? so(X(v)) : Dl
        );
      }, y.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, y.forwardRef = function(v) {
        v != null && v.$$typeof === Ye ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof v != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          v === null ? "null" : typeof v
        ) : v.length !== 0 && v.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), v != null && v.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var _ = { $$typeof: He, render: v }, ue;
        return Object.defineProperty(_, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ue;
          },
          set: function(se) {
            ue = se, v.name || v.displayName || (Object.defineProperty(v, "name", { value: se }), v.displayName = se);
          }
        }), _;
      }, y.isValidElement = _e, y.lazy = function(v) {
        return {
          $$typeof: Yt,
          _payload: { _status: -1, _result: v },
          _init: ht
        };
      }, y.memo = function(v, _) {
        v == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          v === null ? "null" : typeof v
        ), _ = {
          $$typeof: Ye,
          type: v,
          compare: _ === void 0 ? null : _
        };
        var ue;
        return Object.defineProperty(_, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ue;
          },
          set: function(se) {
            ue = se, v.name || v.displayName || (Object.defineProperty(v, "name", { value: se }), v.displayName = se);
          }
        }), _;
      }, y.startTransition = function(v) {
        var _ = Fe.T, ue = {};
        Fe.T = ue, ue._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var se = v(), Se = Fe.S;
          Se !== null && Se(ue, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(we, ro);
        } catch (je) {
          ro(je);
        } finally {
          _ === null && ue._updatedFibers && (v = ue._updatedFibers.size, ue._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Fe.T = _;
        }
      }, y.unstable_useCacheRefresh = function() {
        return Ae().useCacheRefresh();
      }, y.use = function(v) {
        return Ae().use(v);
      }, y.useActionState = function(v, _, ue) {
        return Ae().useActionState(
          v,
          _,
          ue
        );
      }, y.useCallback = function(v, _) {
        return Ae().useCallback(v, _);
      }, y.useContext = function(v) {
        var _ = Ae();
        return v.$$typeof === te && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), _.useContext(v);
      }, y.useDebugValue = function(v, _) {
        return Ae().useDebugValue(v, _);
      }, y.useDeferredValue = function(v, _) {
        return Ae().useDeferredValue(v, _);
      }, y.useEffect = function(v, _, ue) {
        v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var se = Ae();
        if (typeof ue == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return se.useEffect(v, _);
      }, y.useId = function() {
        return Ae().useId();
      }, y.useImperativeHandle = function(v, _, ue) {
        return Ae().useImperativeHandle(v, _, ue);
      }, y.useInsertionEffect = function(v, _) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ae().useInsertionEffect(v, _);
      }, y.useLayoutEffect = function(v, _) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ae().useLayoutEffect(v, _);
      }, y.useMemo = function(v, _) {
        return Ae().useMemo(v, _);
      }, y.useOptimistic = function(v, _) {
        return Ae().useOptimistic(v, _);
      }, y.useReducer = function(v, _, ue) {
        return Ae().useReducer(v, _, ue);
      }, y.useRef = function(v) {
        return Ae().useRef(v);
      }, y.useState = function(v) {
        return Ae().useState(v);
      }, y.useSyncExternalStore = function(v, _, ue) {
        return Ae().useSyncExternalStore(
          v,
          _,
          ue
        );
      }, y.useTransition = function() {
        return Ae().useTransition();
      }, y.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Pp, Pp.exports)), Pp.exports;
}
var x1;
function uy() {
  return x1 || (x1 = 1, process.env.NODE_ENV === "production" ? Wg.exports = SE() : Wg.exports = TE()), Wg.exports;
}
var N1;
function EE() {
  if (N1) return Wp;
  N1 = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return process.env.NODE_ENV !== "production" && function() {
    function p(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === ht ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case Te:
          return "Fragment";
        case Ce:
          return "Profiler";
        case pe:
          return "StrictMode";
        case Me:
          return "Suspense";
        case ct:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case Ee:
            return "Portal";
          case _e:
            return (S.displayName || "Context") + ".Provider";
          case Rt:
            return (S._context.displayName || "Context") + ".Consumer";
          case ft:
            var Y = S.render;
            return S = S.displayName, S || (S = Y.displayName || Y.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Le:
            return Y = S.displayName || null, Y !== null ? Y : p(S.type) || "Memo";
          case pt:
            Y = S._payload, S = S._init;
            try {
              return p(S(Y));
            } catch {
            }
        }
      return null;
    }
    function y(S) {
      return "" + S;
    }
    function A(S) {
      try {
        y(S);
        var Y = !1;
      } catch {
        Y = !0;
      }
      if (Y) {
        Y = console;
        var W = Y.error, te = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return W.call(
          Y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          te
        ), y(S);
      }
    }
    function T(S) {
      if (S === Te) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === pt)
        return "<...>";
      try {
        var Y = p(S);
        return Y ? "<" + Y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Z() {
      var S = Ae.A;
      return S === null ? null : S.getOwner();
    }
    function ie() {
      return Error("react-stack-top-frame");
    }
    function Oe(S) {
      if (we.call(S, "key")) {
        var Y = Object.getOwnPropertyDescriptor(S, "key").get;
        if (Y && Y.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function re(S, Y) {
      function W() {
        Tt || (Tt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Y
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: W,
        configurable: !0
      });
    }
    function w() {
      var S = p(this.type);
      return C[S] || (C[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function K(S, Y, W, te, de, He, he, ol) {
      return W = He.ref, S = {
        $$typeof: ne,
        type: S,
        key: Y,
        props: He,
        _owner: de
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ol
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function ce(S, Y, W, te, de, He, he, ol) {
      var Ye = Y.children;
      if (Ye !== void 0)
        if (te)
          if (xt(Ye)) {
            for (te = 0; te < Ye.length; te++)
              X(Ye[te]);
            Object.freeze && Object.freeze(Ye);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else X(Ye);
      if (we.call(Y, "key")) {
        Ye = p(S);
        var Yt = Object.keys(Y).filter(function(_n) {
          return _n !== "key";
        });
        te = 0 < Yt.length ? "{key: someKey, " + Yt.join(": ..., ") + ": ...}" : "{key: someKey}", Re[Ye + te] || (Yt = 0 < Yt.length ? "{" + Yt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          te,
          Ye,
          Yt,
          Ye
        ), Re[Ye + te] = !0);
      }
      if (Ye = null, W !== void 0 && (A(W), Ye = "" + W), Oe(Y) && (A(Y.key), Ye = "" + Y.key), "key" in Y) {
        W = {};
        for (var ua in Y)
          ua !== "key" && (W[ua] = Y[ua]);
      } else W = Y;
      return Ye && re(
        W,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), K(
        S,
        Ye,
        He,
        de,
        Z(),
        W,
        he,
        ol
      );
    }
    function X(S) {
      typeof S == "object" && S !== null && S.$$typeof === ne && S._store && (S._store.validated = 1);
    }
    var M = uy(), ne = Symbol.for("react.transitional.element"), Ee = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), Ce = Symbol.for("react.profiler"), Rt = Symbol.for("react.consumer"), _e = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), ct = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), ht = Symbol.for("react.client.reference"), Ae = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = Object.prototype.hasOwnProperty, xt = Array.isArray, Vt = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      "react-stack-bottom-frame": function(S) {
        return S();
      }
    };
    var Tt, C = {}, P = M["react-stack-bottom-frame"].bind(
      M,
      ie
    )(), le = Vt(T(ie)), Re = {};
    Wp.Fragment = Te, Wp.jsx = function(S, Y, W, te, de) {
      var He = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return ce(
        S,
        Y,
        W,
        !1,
        te,
        de,
        He ? Error("react-stack-top-frame") : P,
        He ? Vt(T(S)) : le
      );
    }, Wp.jsxs = function(S, Y, W, te, de) {
      var He = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return ce(
        S,
        Y,
        W,
        !0,
        te,
        de,
        He ? Error("react-stack-top-frame") : P,
        He ? Vt(T(S)) : le
      );
    };
  }(), Wp;
}
var w1;
function AE() {
  return w1 || (w1 = 1, process.env.NODE_ENV === "production" ? $g.exports = bE() : $g.exports = EE()), $g.exports;
}
var Ru = AE(), Ub = uy();
const RE = /* @__PURE__ */ uT(Ub);
var Fg = { exports: {} }, Fp = {}, Ig = { exports: {} }, Ab = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1;
function OE() {
  return q1 || (q1 = 1, function(p) {
    function y(C, P) {
      var le = C.length;
      C.push(P);
      e: for (; 0 < le; ) {
        var Re = le - 1 >>> 1, S = C[Re];
        if (0 < Z(S, P))
          C[Re] = P, C[le] = S, le = Re;
        else break e;
      }
    }
    function A(C) {
      return C.length === 0 ? null : C[0];
    }
    function T(C) {
      if (C.length === 0) return null;
      var P = C[0], le = C.pop();
      if (le !== P) {
        C[0] = le;
        e: for (var Re = 0, S = C.length, Y = S >>> 1; Re < Y; ) {
          var W = 2 * (Re + 1) - 1, te = C[W], de = W + 1, He = C[de];
          if (0 > Z(te, le))
            de < S && 0 > Z(He, te) ? (C[Re] = He, C[de] = le, Re = de) : (C[Re] = te, C[W] = le, Re = W);
          else if (de < S && 0 > Z(He, le))
            C[Re] = He, C[de] = le, Re = de;
          else break e;
        }
      }
      return P;
    }
    function Z(C, P) {
      var le = C.sortIndex - P.sortIndex;
      return le !== 0 ? le : C.id - P.id;
    }
    if (p.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ie = performance;
      p.unstable_now = function() {
        return ie.now();
      };
    } else {
      var Oe = Date, re = Oe.now();
      p.unstable_now = function() {
        return Oe.now() - re;
      };
    }
    var w = [], K = [], ce = 1, X = null, M = 3, ne = !1, Ee = !1, Te = !1, pe = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, Rt = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
    function ft(C) {
      for (var P = A(K); P !== null; ) {
        if (P.callback === null) T(K);
        else if (P.startTime <= C)
          T(K), P.sortIndex = P.expirationTime, y(w, P);
        else break;
        P = A(K);
      }
    }
    function Me(C) {
      if (Te = !1, ft(C), !Ee)
        if (A(w) !== null)
          Ee = !0, ct || (ct = !0, we());
        else {
          var P = A(K);
          P !== null && Tt(Me, P.startTime - C);
        }
    }
    var ct = !1, Le = -1, pt = 5, oe = -1;
    function ht() {
      return pe ? !0 : !(p.unstable_now() - oe < pt);
    }
    function Ae() {
      if (pe = !1, ct) {
        var C = p.unstable_now();
        oe = C;
        var P = !0;
        try {
          e: {
            Ee = !1, Te && (Te = !1, Rt(Le), Le = -1), ne = !0;
            var le = M;
            try {
              t: {
                for (ft(C), X = A(w); X !== null && !(X.expirationTime > C && ht()); ) {
                  var Re = X.callback;
                  if (typeof Re == "function") {
                    X.callback = null, M = X.priorityLevel;
                    var S = Re(
                      X.expirationTime <= C
                    );
                    if (C = p.unstable_now(), typeof S == "function") {
                      X.callback = S, ft(C), P = !0;
                      break t;
                    }
                    X === A(w) && T(w), ft(C);
                  } else T(w);
                  X = A(w);
                }
                if (X !== null) P = !0;
                else {
                  var Y = A(K);
                  Y !== null && Tt(
                    Me,
                    Y.startTime - C
                  ), P = !1;
                }
              }
              break e;
            } finally {
              X = null, M = le, ne = !1;
            }
            P = void 0;
          }
        } finally {
          P ? we() : ct = !1;
        }
      }
    }
    var we;
    if (typeof _e == "function")
      we = function() {
        _e(Ae);
      };
    else if (typeof MessageChannel < "u") {
      var xt = new MessageChannel(), Vt = xt.port2;
      xt.port1.onmessage = Ae, we = function() {
        Vt.postMessage(null);
      };
    } else
      we = function() {
        Ce(Ae, 0);
      };
    function Tt(C, P) {
      Le = Ce(function() {
        C(p.unstable_now());
      }, P);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, p.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : pt = 0 < C ? Math.floor(1e3 / C) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, p.unstable_next = function(C) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = M;
      }
      var le = M;
      M = P;
      try {
        return C();
      } finally {
        M = le;
      }
    }, p.unstable_requestPaint = function() {
      pe = !0;
    }, p.unstable_runWithPriority = function(C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var le = M;
      M = C;
      try {
        return P();
      } finally {
        M = le;
      }
    }, p.unstable_scheduleCallback = function(C, P, le) {
      var Re = p.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? Re + le : Re) : le = Re, C) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return S = le + S, C = {
        id: ce++,
        callback: P,
        priorityLevel: C,
        startTime: le,
        expirationTime: S,
        sortIndex: -1
      }, le > Re ? (C.sortIndex = le, y(K, C), A(w) === null && C === A(K) && (Te ? (Rt(Le), Le = -1) : Te = !0, Tt(Me, le - Re))) : (C.sortIndex = S, y(w, C), Ee || ne || (Ee = !0, ct || (ct = !0, we()))), C;
    }, p.unstable_shouldYield = ht, p.unstable_wrapCallback = function(C) {
      var P = M;
      return function() {
        var le = M;
        M = P;
        try {
          return C.apply(this, arguments);
        } finally {
          M = le;
        }
      };
    };
  }(Ab)), Ab;
}
var Rb = {}, B1;
function DE() {
  return B1 || (B1 = 1, function(p) {
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    process.env.NODE_ENV !== "production" && function() {
      function y() {
        if (Me = !1, oe) {
          var C = p.unstable_now();
          we = C;
          var P = !0;
          try {
            e: {
              _e = !1, ft && (ft = !1, Le(ht), ht = -1), Rt = !0;
              var le = Ce;
              try {
                t: {
                  for (Oe(C), pe = T(ne); pe !== null && !(pe.expirationTime > C && w()); ) {
                    var Re = pe.callback;
                    if (typeof Re == "function") {
                      pe.callback = null, Ce = pe.priorityLevel;
                      var S = Re(
                        pe.expirationTime <= C
                      );
                      if (C = p.unstable_now(), typeof S == "function") {
                        pe.callback = S, Oe(C), P = !0;
                        break t;
                      }
                      pe === T(ne) && Z(ne), Oe(C);
                    } else Z(ne);
                    pe = T(ne);
                  }
                  if (pe !== null) P = !0;
                  else {
                    var Y = T(Ee);
                    Y !== null && K(
                      re,
                      Y.startTime - C
                    ), P = !1;
                  }
                }
                break e;
              } finally {
                pe = null, Ce = le, Rt = !1;
              }
              P = void 0;
            }
          } finally {
            P ? xt() : oe = !1;
          }
        }
      }
      function A(C, P) {
        var le = C.length;
        C.push(P);
        e: for (; 0 < le; ) {
          var Re = le - 1 >>> 1, S = C[Re];
          if (0 < ie(S, P))
            C[Re] = P, C[le] = S, le = Re;
          else break e;
        }
      }
      function T(C) {
        return C.length === 0 ? null : C[0];
      }
      function Z(C) {
        if (C.length === 0) return null;
        var P = C[0], le = C.pop();
        if (le !== P) {
          C[0] = le;
          e: for (var Re = 0, S = C.length, Y = S >>> 1; Re < Y; ) {
            var W = 2 * (Re + 1) - 1, te = C[W], de = W + 1, He = C[de];
            if (0 > ie(te, le))
              de < S && 0 > ie(He, te) ? (C[Re] = He, C[de] = le, Re = de) : (C[Re] = te, C[W] = le, Re = W);
            else if (de < S && 0 > ie(He, le))
              C[Re] = He, C[de] = le, Re = de;
            else break e;
          }
        }
        return P;
      }
      function ie(C, P) {
        var le = C.sortIndex - P.sortIndex;
        return le !== 0 ? le : C.id - P.id;
      }
      function Oe(C) {
        for (var P = T(Ee); P !== null; ) {
          if (P.callback === null) Z(Ee);
          else if (P.startTime <= C)
            Z(Ee), P.sortIndex = P.expirationTime, A(ne, P);
          else break;
          P = T(Ee);
        }
      }
      function re(C) {
        if (ft = !1, Oe(C), !_e)
          if (T(ne) !== null)
            _e = !0, oe || (oe = !0, xt());
          else {
            var P = T(Ee);
            P !== null && K(
              re,
              P.startTime - C
            );
          }
      }
      function w() {
        return Me ? !0 : !(p.unstable_now() - we < Ae);
      }
      function K(C, P) {
        ht = ct(function() {
          C(p.unstable_now());
        }, P);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), p.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ce = performance;
        p.unstable_now = function() {
          return ce.now();
        };
      } else {
        var X = Date, M = X.now();
        p.unstable_now = function() {
          return X.now() - M;
        };
      }
      var ne = [], Ee = [], Te = 1, pe = null, Ce = 3, Rt = !1, _e = !1, ft = !1, Me = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Le = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null, oe = !1, ht = -1, Ae = 5, we = -1;
      if (typeof pt == "function")
        var xt = function() {
          pt(y);
        };
      else if (typeof MessageChannel < "u") {
        var Vt = new MessageChannel(), Tt = Vt.port2;
        Vt.port1.onmessage = y, xt = function() {
          Tt.postMessage(null);
        };
      } else
        xt = function() {
          ct(y, 0);
        };
      p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(C) {
        C.callback = null;
      }, p.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ae = 0 < C ? Math.floor(1e3 / C) : 5;
      }, p.unstable_getCurrentPriorityLevel = function() {
        return Ce;
      }, p.unstable_next = function(C) {
        switch (Ce) {
          case 1:
          case 2:
          case 3:
            var P = 3;
            break;
          default:
            P = Ce;
        }
        var le = Ce;
        Ce = P;
        try {
          return C();
        } finally {
          Ce = le;
        }
      }, p.unstable_requestPaint = function() {
        Me = !0;
      }, p.unstable_runWithPriority = function(C, P) {
        switch (C) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            C = 3;
        }
        var le = Ce;
        Ce = C;
        try {
          return P();
        } finally {
          Ce = le;
        }
      }, p.unstable_scheduleCallback = function(C, P, le) {
        var Re = p.unstable_now();
        switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? Re + le : Re) : le = Re, C) {
          case 1:
            var S = -1;
            break;
          case 2:
            S = 250;
            break;
          case 5:
            S = 1073741823;
            break;
          case 4:
            S = 1e4;
            break;
          default:
            S = 5e3;
        }
        return S = le + S, C = {
          id: Te++,
          callback: P,
          priorityLevel: C,
          startTime: le,
          expirationTime: S,
          sortIndex: -1
        }, le > Re ? (C.sortIndex = le, A(Ee, C), T(ne) === null && C === T(Ee) && (ft ? (Le(ht), ht = -1) : ft = !0, K(re, le - Re))) : (C.sortIndex = S, A(ne, C), _e || Rt || (_e = !0, oe || (oe = !0, xt()))), C;
      }, p.unstable_shouldYield = w, p.unstable_wrapCallback = function(C) {
        var P = Ce;
        return function() {
          var le = Ce;
          Ce = P;
          try {
            return C.apply(this, arguments);
          } finally {
            Ce = le;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Rb)), Rb;
}
var Y1;
function iT() {
  return Y1 || (Y1 = 1, process.env.NODE_ENV === "production" ? Ig.exports = OE() : Ig.exports = DE()), Ig.exports;
}
var Pg = { exports: {} }, Aa = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function ME() {
  if (j1) return Aa;
  j1 = 1;
  var p = uy();
  function y(w) {
    var K = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      K += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var ce = 2; ce < arguments.length; ce++)
        K += "&args[]=" + encodeURIComponent(arguments[ce]);
    }
    return "Minified React error #" + w + "; visit " + K + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A() {
  }
  var T = {
    d: {
      f: A,
      r: function() {
        throw Error(y(522));
      },
      D: A,
      C: A,
      L: A,
      m: A,
      X: A,
      S: A,
      M: A
    },
    p: 0,
    findDOMNode: null
  }, Z = Symbol.for("react.portal");
  function ie(w, K, ce) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Z,
      key: X == null ? null : "" + X,
      children: w,
      containerInfo: K,
      implementation: ce
    };
  }
  var Oe = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function re(w, K) {
    if (w === "font") return "";
    if (typeof K == "string")
      return K === "use-credentials" ? K : "";
  }
  return Aa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Aa.createPortal = function(w, K) {
    var ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!K || K.nodeType !== 1 && K.nodeType !== 9 && K.nodeType !== 11)
      throw Error(y(299));
    return ie(w, K, null, ce);
  }, Aa.flushSync = function(w) {
    var K = Oe.T, ce = T.p;
    try {
      if (Oe.T = null, T.p = 2, w) return w();
    } finally {
      Oe.T = K, T.p = ce, T.d.f();
    }
  }, Aa.preconnect = function(w, K) {
    typeof w == "string" && (K ? (K = K.crossOrigin, K = typeof K == "string" ? K === "use-credentials" ? K : "" : void 0) : K = null, T.d.C(w, K));
  }, Aa.prefetchDNS = function(w) {
    typeof w == "string" && T.d.D(w);
  }, Aa.preinit = function(w, K) {
    if (typeof w == "string" && K && typeof K.as == "string") {
      var ce = K.as, X = re(ce, K.crossOrigin), M = typeof K.integrity == "string" ? K.integrity : void 0, ne = typeof K.fetchPriority == "string" ? K.fetchPriority : void 0;
      ce === "style" ? T.d.S(
        w,
        typeof K.precedence == "string" ? K.precedence : void 0,
        {
          crossOrigin: X,
          integrity: M,
          fetchPriority: ne
        }
      ) : ce === "script" && T.d.X(w, {
        crossOrigin: X,
        integrity: M,
        fetchPriority: ne,
        nonce: typeof K.nonce == "string" ? K.nonce : void 0
      });
    }
  }, Aa.preinitModule = function(w, K) {
    if (typeof w == "string")
      if (typeof K == "object" && K !== null) {
        if (K.as == null || K.as === "script") {
          var ce = re(
            K.as,
            K.crossOrigin
          );
          T.d.M(w, {
            crossOrigin: ce,
            integrity: typeof K.integrity == "string" ? K.integrity : void 0,
            nonce: typeof K.nonce == "string" ? K.nonce : void 0
          });
        }
      } else K == null && T.d.M(w);
  }, Aa.preload = function(w, K) {
    if (typeof w == "string" && typeof K == "object" && K !== null && typeof K.as == "string") {
      var ce = K.as, X = re(ce, K.crossOrigin);
      T.d.L(w, ce, {
        crossOrigin: X,
        integrity: typeof K.integrity == "string" ? K.integrity : void 0,
        nonce: typeof K.nonce == "string" ? K.nonce : void 0,
        type: typeof K.type == "string" ? K.type : void 0,
        fetchPriority: typeof K.fetchPriority == "string" ? K.fetchPriority : void 0,
        referrerPolicy: typeof K.referrerPolicy == "string" ? K.referrerPolicy : void 0,
        imageSrcSet: typeof K.imageSrcSet == "string" ? K.imageSrcSet : void 0,
        imageSizes: typeof K.imageSizes == "string" ? K.imageSizes : void 0,
        media: typeof K.media == "string" ? K.media : void 0
      });
    }
  }, Aa.preloadModule = function(w, K) {
    if (typeof w == "string")
      if (K) {
        var ce = re(K.as, K.crossOrigin);
        T.d.m(w, {
          as: typeof K.as == "string" && K.as !== "script" ? K.as : void 0,
          crossOrigin: ce,
          integrity: typeof K.integrity == "string" ? K.integrity : void 0
        });
      } else T.d.m(w);
  }, Aa.requestFormReset = function(w) {
    T.d.r(w);
  }, Aa.unstable_batchedUpdates = function(w, K) {
    return w(K);
  }, Aa.useFormState = function(w, K, ce) {
    return Oe.H.useFormState(w, K, ce);
  }, Aa.useFormStatus = function() {
    return Oe.H.useHostTransitionStatus();
  }, Aa.version = "19.1.0", Aa;
}
var Ra = {}, G1;
function zE() {
  if (G1) return Ra;
  G1 = 1;
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return process.env.NODE_ENV !== "production" && function() {
    function p() {
    }
    function y(X) {
      return "" + X;
    }
    function A(X, M, ne) {
      var Ee = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        y(Ee);
        var Te = !1;
      } catch {
        Te = !0;
      }
      return Te && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Ee[Symbol.toStringTag] || Ee.constructor.name || "Object"
      ), y(Ee)), {
        $$typeof: K,
        key: Ee == null ? null : "" + Ee,
        children: X,
        containerInfo: M,
        implementation: ne
      };
    }
    function T(X, M) {
      if (X === "font") return "";
      if (typeof M == "string")
        return M === "use-credentials" ? M : "";
    }
    function Z(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : 'something with type "' + typeof X + '"';
    }
    function ie(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : typeof X == "string" ? JSON.stringify(X) : typeof X == "number" ? "`" + X + "`" : 'something with type "' + typeof X + '"';
    }
    function Oe() {
      var X = ce.H;
      return X === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), X;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var re = uy(), w = {
      d: {
        f: p,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: p,
        C: p,
        L: p,
        m: p,
        X: p,
        S: p,
        M: p
      },
      p: 0,
      findDOMNode: null
    }, K = Symbol.for("react.portal"), ce = re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, Ra.createPortal = function(X, M) {
      var ne = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!M || M.nodeType !== 1 && M.nodeType !== 9 && M.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return A(X, M, null, ne);
    }, Ra.flushSync = function(X) {
      var M = ce.T, ne = w.p;
      try {
        if (ce.T = null, w.p = 2, X)
          return X();
      } finally {
        ce.T = M, w.p = ne, w.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ra.preconnect = function(X, M) {
      typeof X == "string" && X ? M != null && typeof M != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        ie(M)
      ) : M != null && typeof M.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Z(M.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Z(X)
      ), typeof X == "string" && (M ? (M = M.crossOrigin, M = typeof M == "string" ? M === "use-credentials" ? M : "" : void 0) : M = null, w.d.C(X, M));
    }, Ra.prefetchDNS = function(X) {
      if (typeof X != "string" || !X)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Z(X)
        );
      else if (1 < arguments.length) {
        var M = arguments[1];
        typeof M == "object" && M.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ie(M)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ie(M)
        );
      }
      typeof X == "string" && w.d.D(X);
    }, Ra.preinit = function(X, M) {
      if (typeof X == "string" && X ? M == null || typeof M != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        ie(M)
      ) : M.as !== "style" && M.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        ie(M.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Z(X)
      ), typeof X == "string" && M && typeof M.as == "string") {
        var ne = M.as, Ee = T(ne, M.crossOrigin), Te = typeof M.integrity == "string" ? M.integrity : void 0, pe = typeof M.fetchPriority == "string" ? M.fetchPriority : void 0;
        ne === "style" ? w.d.S(
          X,
          typeof M.precedence == "string" ? M.precedence : void 0,
          {
            crossOrigin: Ee,
            integrity: Te,
            fetchPriority: pe
          }
        ) : ne === "script" && w.d.X(X, {
          crossOrigin: Ee,
          integrity: Te,
          fetchPriority: pe,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0
        });
      }
    }, Ra.preinitModule = function(X, M) {
      var ne = "";
      if (typeof X == "string" && X || (ne += " The `href` argument encountered was " + Z(X) + "."), M !== void 0 && typeof M != "object" ? ne += " The `options` argument encountered was " + Z(M) + "." : M && "as" in M && M.as !== "script" && (ne += " The `as` option encountered was " + ie(M.as) + "."), ne)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ne
        );
      else
        switch (ne = M && typeof M.as == "string" ? M.as : "script", ne) {
          case "script":
            break;
          default:
            ne = ie(ne), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ne,
              X
            );
        }
      typeof X == "string" && (typeof M == "object" && M !== null ? (M.as == null || M.as === "script") && (ne = T(
        M.as,
        M.crossOrigin
      ), w.d.M(X, {
        crossOrigin: ne,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0,
        nonce: typeof M.nonce == "string" ? M.nonce : void 0
      })) : M == null && w.d.M(X));
    }, Ra.preload = function(X, M) {
      var ne = "";
      if (typeof X == "string" && X || (ne += " The `href` argument encountered was " + Z(X) + "."), M == null || typeof M != "object" ? ne += " The `options` argument encountered was " + Z(M) + "." : typeof M.as == "string" && M.as || (ne += " The `as` option encountered was " + Z(M.as) + "."), ne && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ne
      ), typeof X == "string" && typeof M == "object" && M !== null && typeof M.as == "string") {
        ne = M.as;
        var Ee = T(
          ne,
          M.crossOrigin
        );
        w.d.L(X, ne, {
          crossOrigin: Ee,
          integrity: typeof M.integrity == "string" ? M.integrity : void 0,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0,
          type: typeof M.type == "string" ? M.type : void 0,
          fetchPriority: typeof M.fetchPriority == "string" ? M.fetchPriority : void 0,
          referrerPolicy: typeof M.referrerPolicy == "string" ? M.referrerPolicy : void 0,
          imageSrcSet: typeof M.imageSrcSet == "string" ? M.imageSrcSet : void 0,
          imageSizes: typeof M.imageSizes == "string" ? M.imageSizes : void 0,
          media: typeof M.media == "string" ? M.media : void 0
        });
      }
    }, Ra.preloadModule = function(X, M) {
      var ne = "";
      typeof X == "string" && X || (ne += " The `href` argument encountered was " + Z(X) + "."), M !== void 0 && typeof M != "object" ? ne += " The `options` argument encountered was " + Z(M) + "." : M && "as" in M && typeof M.as != "string" && (ne += " The `as` option encountered was " + Z(M.as) + "."), ne && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ne
      ), typeof X == "string" && (M ? (ne = T(
        M.as,
        M.crossOrigin
      ), w.d.m(X, {
        as: typeof M.as == "string" && M.as !== "script" ? M.as : void 0,
        crossOrigin: ne,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0
      })) : w.d.m(X));
    }, Ra.requestFormReset = function(X) {
      w.d.r(X);
    }, Ra.unstable_batchedUpdates = function(X, M) {
      return X(M);
    }, Ra.useFormState = function(X, M, ne) {
      return Oe().useFormState(X, M, ne);
    }, Ra.useFormStatus = function() {
      return Oe().useHostTransitionStatus();
    }, Ra.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), Ra;
}
var Q1;
function cT() {
  if (Q1) return Pg.exports;
  Q1 = 1;
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (y) {
        console.error(y);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (p(), Pg.exports = ME()) : Pg.exports = zE(), Pg.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L1;
function UE() {
  if (L1) return Fp;
  L1 = 1;
  var p = iT(), y = uy(), A = cT();
  function T(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Z(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ie(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Oe(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function re(l) {
    if (ie(l) !== l)
      throw Error(T(188));
  }
  function w(l) {
    var n = l.alternate;
    if (!n) {
      if (n = ie(l), n === null) throw Error(T(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return re(s), l;
          if (r === c) return re(s), n;
          r = r.sibling;
        }
        throw Error(T(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, g = s.child; g; ) {
          if (g === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (g === c) {
            m = !0, c = s, u = r;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = r.child; g; ) {
            if (g === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (g === c) {
              m = !0, c = r, u = s;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(T(189));
        }
      }
      if (u.alternate !== c) throw Error(T(190));
    }
    if (u.tag !== 3) throw Error(T(188));
    return u.stateNode.current === u ? l : n;
  }
  function K(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = K(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ce = Object.assign, X = Symbol.for("react.element"), M = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), Ee = Symbol.for("react.fragment"), Te = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), Rt = Symbol.for("react.consumer"), _e = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), ct = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), ht = Symbol.for("react.memo_cache_sentinel"), Ae = Symbol.iterator;
  function we(l) {
    return l === null || typeof l != "object" ? null : (l = Ae && l[Ae] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var xt = Symbol.for("react.client.reference");
  function Vt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === xt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ee:
        return "Fragment";
      case pe:
        return "Profiler";
      case Te:
        return "StrictMode";
      case Me:
        return "Suspense";
      case ct:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ne:
          return "Portal";
        case _e:
          return (l.displayName || "Context") + ".Provider";
        case Rt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ft:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Le:
          return n = l.displayName || null, n !== null ? n : Vt(l.type) || "Memo";
        case pt:
          n = l._payload, l = l._init;
          try {
            return Vt(l(n));
          } catch {
          }
      }
    return null;
  }
  var Tt = Array.isArray, C = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], S = -1;
  function Y(l) {
    return { current: l };
  }
  function W(l) {
    0 > S || (l.current = Re[S], Re[S] = null, S--);
  }
  function te(l, n) {
    S++, Re[S] = l.current, l.current = n;
  }
  var de = Y(null), He = Y(null), he = Y(null), ol = Y(null);
  function Ye(l, n) {
    switch (te(he, n), te(He, l), te(de, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? ku(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = ku(n), l = nf(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    W(de), te(de, l);
  }
  function Yt() {
    W(de), W(He), W(he);
  }
  function ua(l) {
    l.memoizedState !== null && te(ol, l);
    var n = de.current, u = nf(n, l.type);
    n !== u && (te(He, l), te(de, u));
  }
  function _n(l) {
    He.current === l && (W(de), W(He)), ol.current === l && (W(ol), Sa._currentValue = le);
  }
  var tc = Object.prototype.hasOwnProperty, Hn = p.unstable_scheduleCallback, fo = p.unstable_cancelCallback, wf = p.unstable_shouldYield, ll = p.unstable_requestPaint, vl = p.unstable_now, ci = p.unstable_getCurrentPriorityLevel, Mr = p.unstable_ImmediatePriority, Fe = p.unstable_UserBlockingPriority, xn = p.unstable_NormalPriority, so = p.unstable_LowPriority, Ou = p.unstable_IdlePriority, zr = p.log, qf = p.unstable_setDisableYieldValue, oi = null, Dl = null;
  function Va(l) {
    if (typeof zr == "function" && qf(l), Dl && typeof Dl.setStrictMode == "function")
      try {
        Dl.setStrictMode(oi, l);
      } catch {
      }
  }
  var Ml = Math.clz32 ? Math.clz32 : ho, ro = Math.log, Bf = Math.LN2;
  function ho(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (ro(l) / Bf | 0) | 0;
  }
  var sn = 256, ia = 4194304;
  function zl(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function rn(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~r, c !== 0 ? s = zl(c) : (m &= g, m !== 0 ? s = zl(m) : u || (u = g & ~l, u !== 0 && (s = zl(u))))) : (g = c & ~r, g !== 0 ? s = zl(g) : m !== 0 ? s = zl(m) : u || (u = c & ~l, u !== 0 && (s = zl(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function v(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function _(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ue() {
    var l = sn;
    return sn <<= 1, (sn & 4194048) === 0 && (sn = 256), l;
  }
  function se() {
    var l = ia;
    return ia <<= 1, (ia & 62914560) === 0 && (ia = 4194304), l;
  }
  function Se(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function je(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Xe(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, R = l.expirationTimes, N = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var $ = 31 - Ml(u), I = 1 << $;
      g[$] = 0, R[$] = -1;
      var B = N[$];
      if (B !== null)
        for (N[$] = null, $ = 0; $ < B.length; $++) {
          var G = B[$];
          G !== null && (G.lane &= -536870913);
        }
      u &= ~I;
    }
    c !== 0 && st(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function st(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ml(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function Ve(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ml(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function al(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function dn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ur() {
    var l = P.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : sp(l.type));
  }
  function iy(l, n) {
    var u = P.p;
    try {
      return P.p = l, n();
    } finally {
      P.p = u;
    }
  }
  var fl = Math.random().toString(36).slice(2), gl = "__reactFiber$" + fl, $l = "__reactProps$" + fl, yo = "__reactContainer$" + fl, Cr = "__reactEvents$" + fl, nv = "__reactListeners$" + fl, _r = "__reactHandles$" + fl, uv = "__reactResources$" + fl, ve = "__reactMarker$" + fl;
  function Yf(l) {
    delete l[gl], delete l[$l], delete l[Cr], delete l[nv], delete l[_r];
  }
  function Ul(l) {
    var n = l[gl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[yo] || u[gl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = ql(l); l !== null; ) {
            if (u = l[gl]) return u;
            l = ql(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function lc(l) {
    if (l = l[gl] || l[yo]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function jf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(T(33));
  }
  function Du(l) {
    var n = l[uv];
    return n || (n = l[uv] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function sl(l) {
    l[ve] = !0;
  }
  var Gf = /* @__PURE__ */ new Set(), Da = {};
  function fi(l, n) {
    si(l, n), si(l + "Capture", n);
  }
  function si(l, n) {
    for (Da[l] = n, l = 0; l < n.length; l++)
      Gf.add(n[l]);
  }
  var iv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Hr = {}, cy = {};
  function cv(l) {
    return tc.call(cy, l) ? !0 : tc.call(Hr, l) ? !1 : iv.test(l) ? cy[l] = !0 : (Hr[l] = !0, !1);
  }
  function Mu(l, n, u) {
    if (cv(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Qf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Nn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var xr, oy;
  function ac(l) {
    if (xr === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        xr = n && n[1] || "", oy = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xr + l + oy;
  }
  var Wl = !1;
  function ri(l, n) {
    if (!l || Wl) return "";
    Wl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var I = function() {
                throw Error();
              };
              if (Object.defineProperty(I.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(I, []);
                } catch (G) {
                  var B = G;
                }
                Reflect.construct(l, [], I);
              } else {
                try {
                  I.call();
                } catch (G) {
                  B = G;
                }
                l.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                B = G;
              }
              (I = l()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch (G) {
            if (G && B && typeof G.stack == "string")
              return [G.stack, B.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], g = r[1];
      if (m && g) {
        var R = m.split(`
`), N = g.split(`
`);
        for (s = c = 0; c < R.length && !R[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < N.length && !N[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === R.length || s === N.length)
          for (c = R.length - 1, s = N.length - 1; 1 <= c && 0 <= s && R[c] !== N[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (R[c] !== N[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || R[c] !== N[s]) {
                  var $ = `
` + R[c].replace(" at new ", " at ");
                  return l.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", l.displayName)), $;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Wl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? ac(u) : "";
  }
  function nc(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ac(l.type);
      case 16:
        return ac("Lazy");
      case 13:
        return ac("Suspense");
      case 19:
        return ac("SuspenseList");
      case 0:
      case 15:
        return ri(l.type, !1);
      case 11:
        return ri(l.type.render, !1);
      case 1:
        return ri(l.type, !0);
      case 31:
        return ac("Activity");
      default:
        return "";
    }
  }
  function fy(l) {
    try {
      var n = "";
      do
        n += nc(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Ql(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Lf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function sy(l) {
    var n = Lf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          c = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(m) {
          c = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function di(l) {
    l._valueTracker || (l._valueTracker = sy(l));
  }
  function uc(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = Lf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function mo(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var u0 = /[\n"\\]/g;
  function Xa(l) {
    return l.replace(
      u0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Nr(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ql(n)) : l.value !== "" + Ql(n) && (l.value = "" + Ql(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Vf(l, m, Ql(n)) : u != null ? Vf(l, m, Ql(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + Ql(g) : l.removeAttribute("name");
  }
  function wr(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Ql(u) : "", n = n != null ? "" + Ql(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m);
  }
  function Vf(l, n, u) {
    n === "number" && mo(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ic(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ql(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function ry(l, n, u) {
    if (n != null && (n = "" + Ql(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Ql(u) : "";
  }
  function dy(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(T(92));
        if (Tt(c)) {
          if (1 < c.length) throw Error(T(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Ql(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function po(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var ov = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qr(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || ov.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Xf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(T(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && qr(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && qr(l, r, n[r]);
  }
  function cc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var i0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), fv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zf(l) {
    return fv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var oc = null;
  function Br(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var vo = null, go = null;
  function sv(l) {
    var n = lc(l);
    if (n && (l = n.stateNode)) {
      var u = l[$l] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Nr(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Xa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[$l] || null;
                if (!s) throw Error(T(90));
                Nr(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && uc(c);
          }
          break e;
        case "textarea":
          ry(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && ic(l, !!u.multiple, n, !1);
      }
    }
  }
  var hy = !1;
  function bo(l, n, u) {
    if (hy) return l(n, u);
    hy = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (hy = !1, (vo !== null || go !== null) && (Gc(), vo && (n = vo, l = go, go = vo = null, sv(n), l)))
        for (n = 0; n < l.length; n++) sv(l[n]);
    }
  }
  function fc(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[$l] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        T(231, n, typeof u)
      );
    return u;
  }
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yr = !1;
  if (wn)
    try {
      var zu = {};
      Object.defineProperty(zu, "passive", {
        get: function() {
          Yr = !0;
        }
      }), window.addEventListener("test", zu, zu), window.removeEventListener("test", zu, zu);
    } catch {
      Yr = !1;
    }
  var Uu = null, So = null, sc = null;
  function yy() {
    if (sc) return sc;
    var l, n = So, u = n.length, c, s = "value" in Uu ? Uu.value : Uu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return sc = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Cl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function jr() {
    return !0;
  }
  function Gr() {
    return !1;
  }
  function Fl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? jr : Gr, this.isPropagationStopped = Gr, this;
    }
    return ce(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = jr);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = jr);
      },
      persist: function() {
      },
      isPersistent: jr
    }), n;
  }
  var hi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Qr = Fl(hi), Kf = ce({}, hi, { view: 0, detail: 0 }), rv = Fl(Kf), my, Lr, kf, rc = ce({}, Kf, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== kf && (kf && l.type === "mousemove" ? (my = l.screenX - kf.screenX, Lr = l.screenY - kf.screenY) : Lr = my = 0, kf = l), my);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Lr;
    }
  }), py = Fl(rc), dv = ce({}, rc, { dataTransfer: 0 }), hv = Fl(dv), c0 = ce({}, Kf, { relatedTarget: 0 }), vy = Fl(c0), o0 = ce({}, hi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), f0 = Fl(o0), s0 = ce({}, hi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Jf = Fl(s0), yv = ce({}, hi, { data: 0 }), gy = Fl(yv), mv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, pv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, by = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function vv(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = by[l]) ? !!n[l] : !1;
  }
  function Cu() {
    return vv;
  }
  var dc = ce({}, Kf, {
    key: function(l) {
      if (l.key) {
        var n = mv[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Cl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? pv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cu,
    charCode: function(l) {
      return l.type === "keypress" ? Cl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Cl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), hn = Fl(dc), Ma = ce({}, rc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $f = Fl(Ma), Vr = ce({}, Kf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cu
  }), Sy = Fl(Vr), ca = ce({}, hi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gv = Fl(ca), Xr = ce({}, rc, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hc = Fl(Xr), Ty = ce({}, hi, {
    newState: 0,
    oldState: 0
  }), bv = Fl(Ty), Sv = [9, 13, 27, 32], Wf = wn && "CompositionEvent" in window, Ff = null;
  wn && "documentMode" in document && (Ff = document.documentMode);
  var Ey = wn && "TextEvent" in window && !Ff, qn = wn && (!Wf || Ff && 8 < Ff && 11 >= Ff), Ay = " ", Zr = !1;
  function If(l, n) {
    switch (l) {
      case "keyup":
        return Sv.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var mi = !1;
  function Ry(l, n) {
    switch (l) {
      case "compositionend":
        return yi(n);
      case "keypress":
        return n.which !== 32 ? null : (Zr = !0, Ay);
      case "textInput":
        return l = n.data, l === Ay && Zr ? null : l;
      default:
        return null;
    }
  }
  function yc(l, n) {
    if (mi)
      return l === "compositionend" || !Wf && If(l, n) ? (l = yy(), sc = So = Uu = null, mi = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return qn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Tv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Kr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Tv[l.type] : n === "textarea";
  }
  function kr(l, n, u, c) {
    vo ? go ? go.push(c) : go = [c] : vo = c, n = af(n, "onChange"), 0 < n.length && (u = new Qr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var yn = null, mn = null;
  function Oy(l) {
    Xc(l, 0);
  }
  function Bn(l) {
    var n = jf(l);
    if (uc(n)) return l;
  }
  function Dy(l, n) {
    if (l === "change") return n;
  }
  var My = !1;
  if (wn) {
    var mc;
    if (wn) {
      var pc = "oninput" in document;
      if (!pc) {
        var zy = document.createElement("div");
        zy.setAttribute("oninput", "return;"), pc = typeof zy.oninput == "function";
      }
      mc = pc;
    } else mc = !1;
    My = mc && (!document.documentMode || 9 < document.documentMode);
  }
  function To() {
    yn && (yn.detachEvent("onpropertychange", Uy), mn = yn = null);
  }
  function Uy(l) {
    if (l.propertyName === "value" && Bn(mn)) {
      var n = [];
      kr(
        n,
        mn,
        l,
        Br(l)
      ), bo(Oy, n);
    }
  }
  function Jr(l, n, u) {
    l === "focusin" ? (To(), yn = n, mn = u, yn.attachEvent("onpropertychange", Uy)) : l === "focusout" && To();
  }
  function pi(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Bn(mn);
  }
  function _u(l, n) {
    if (l === "click") return Bn(n);
  }
  function Cy(l, n) {
    if (l === "input" || l === "change")
      return Bn(n);
  }
  function _y(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var _l = typeof Object.is == "function" ? Object.is : _y;
  function vi(l, n) {
    if (_l(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!tc.call(n, s) || !_l(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function gi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wt(l, n) {
    var u = gi(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = gi(u);
    }
  }
  function Pf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Pf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Hy(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = mo(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = mo(l.document);
    }
    return n;
  }
  function es(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var vc = wn && "documentMode" in document && 11 >= document.documentMode, Yn = null, pn = null, bi = null, gc = !1;
  function $r(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gc || Yn == null || Yn !== mo(c) || (c = Yn, "selectionStart" in c && es(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), bi && vi(bi, c) || (bi = c, c = af(pn, "onSelect"), 0 < c.length && (n = new Qr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Yn)));
  }
  function Hu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var bc = {
    animationend: Hu("Animation", "AnimationEnd"),
    animationiteration: Hu("Animation", "AnimationIteration"),
    animationstart: Hu("Animation", "AnimationStart"),
    transitionrun: Hu("Transition", "TransitionRun"),
    transitionstart: Hu("Transition", "TransitionStart"),
    transitioncancel: Hu("Transition", "TransitionCancel"),
    transitionend: Hu("Transition", "TransitionEnd")
  }, Za = {}, vn = {};
  wn && (vn = document.createElement("div").style, "AnimationEvent" in window || (delete bc.animationend.animation, delete bc.animationiteration.animation, delete bc.animationstart.animation), "TransitionEvent" in window || delete bc.transitionend.transition);
  function jn(l) {
    if (Za[l]) return Za[l];
    if (!bc[l]) return l;
    var n = bc[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in vn)
        return Za[l] = n[u];
    return l;
  }
  var Ev = jn("animationend"), xy = jn("animationiteration"), Av = jn("animationstart"), Ny = jn("transitionrun"), Wr = jn("transitionstart"), Rv = jn("transitioncancel"), wy = jn("transitionend"), qy = /* @__PURE__ */ new Map(), Eo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Eo.push("scrollEnd");
  function Ka(l, n) {
    qy.set(l, n), fi(n, [l]);
  }
  var By = /* @__PURE__ */ new WeakMap();
  function za(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = By.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: fy(n)
      }, By.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: fy(n)
    };
  }
  var oa = [], Si = 0, Gn = 0;
  function gn() {
    for (var l = Si, n = Gn = Si = 0; n < l; ) {
      var u = oa[n];
      oa[n++] = null;
      var c = oa[n];
      oa[n++] = null;
      var s = oa[n];
      oa[n++] = null;
      var r = oa[n];
      if (oa[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Ro(u, s, r);
    }
  }
  function Ti(l, n, u, c) {
    oa[Si++] = l, oa[Si++] = n, oa[Si++] = u, oa[Si++] = c, Gn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Ao(l, n, u, c) {
    return Ti(l, n, u, c), ts(l);
  }
  function Qn(l, n) {
    return Ti(l, null, null, n), ts(l);
  }
  function Ro(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ml(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function ts(l) {
    if (50 < Fo)
      throw Fo = 0, Bm = null, Error(T(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Oo = {};
  function Ov(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fa(l, n, u, c) {
    return new Ov(l, n, u, c);
  }
  function ls(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function bn(l, n) {
    var u = l.alternate;
    return u === null ? (u = fa(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Pe(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function ae(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") ls(l) && (m = 1);
    else if (typeof l == "string")
      m = ug(
        l,
        u,
        de.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case oe:
          return l = fa(31, u, n, s), l.elementType = oe, l.lanes = r, l;
        case Ee:
          return ka(u.children, s, r, n);
        case Te:
          m = 8, s |= 24;
          break;
        case pe:
          return l = fa(12, u, n, s | 2), l.elementType = pe, l.lanes = r, l;
        case Me:
          return l = fa(13, u, n, s), l.elementType = Me, l.lanes = r, l;
        case ct:
          return l = fa(19, u, n, s), l.elementType = ct, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ce:
              case _e:
                m = 10;
                break e;
              case Rt:
                m = 9;
                break e;
              case ft:
                m = 11;
                break e;
              case Le:
                m = 14;
                break e;
              case pt:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            T(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = fa(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ka(l, n, u, c) {
    return l = fa(7, l, c, n), l.lanes = u, l;
  }
  function Do(l, n, u) {
    return l = fa(6, l, null, n), l.lanes = u, l;
  }
  function Xt(l, n, u) {
    return n = fa(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Ei = [], Ai = 0, as = null, Mo = 0, Ja = [], sa = 0, xu = null, Sn = 1, kt = "";
  function rt(l, n) {
    Ei[Ai++] = Mo, Ei[Ai++] = as, as = l, Mo = n;
  }
  function Fr(l, n, u) {
    Ja[sa++] = Sn, Ja[sa++] = kt, Ja[sa++] = xu, xu = l;
    var c = Sn;
    l = kt;
    var s = 32 - Ml(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Ml(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Sn = 1 << 32 - Ml(n) + s | u << s | c, kt = r + l;
    } else
      Sn = 1 << r | u << s | c, kt = l;
  }
  function Sc(l) {
    l.return !== null && (rt(l, 1), Fr(l, 1, 0));
  }
  function Ln(l) {
    for (; l === as; )
      as = Ei[--Ai], Ei[Ai] = null, Mo = Ei[--Ai], Ei[Ai] = null;
    for (; l === xu; )
      xu = Ja[--sa], Ja[sa] = null, kt = Ja[--sa], Ja[sa] = null, Sn = Ja[--sa], Ja[sa] = null;
  }
  var tl = null, vt = null, mt = !1, $a = null, Wa = !1, Tc = Error(T(519));
  function Nu(l) {
    var n = Error(T(418, ""));
    throw Co(za(n, l)), Tc;
  }
  function ns(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[gl] = l, n[$l] = c, u) {
      case "dialog":
        Ke("cancel", n), Ke("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ke("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Vs.length; u++)
          Ke(Vs[u], n);
        break;
      case "source":
        Ke("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ke("error", n), Ke("load", n);
        break;
      case "details":
        Ke("toggle", n);
        break;
      case "input":
        Ke("invalid", n), wr(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), di(n);
        break;
      case "select":
        Ke("invalid", n);
        break;
      case "textarea":
        Ke("invalid", n), dy(n, c.value, c.defaultValue, c.children), di(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || Fm(n.textContent, u) ? (c.popover != null && (Ke("beforetoggle", n), Ke("toggle", n)), c.onScroll != null && Ke("scroll", n), c.onScrollEnd != null && Ke("scrollend", n), c.onClick != null && (n.onclick = ch), n = !0) : n = !1, n || Nu(l);
  }
  function Yy(l) {
    for (tl = l.return; tl; )
      switch (tl.tag) {
        case 5:
        case 13:
          Wa = !1;
          return;
        case 27:
        case 3:
          Wa = !0;
          return;
        default:
          tl = tl.return;
      }
  }
  function zo(l) {
    if (l !== tl) return !1;
    if (!mt) return Yy(l), mt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || ou(l.type, l.memoizedProps)), u = !u), u && vt && Nu(l), Yy(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                vt = Dn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        vt = null;
      }
    } else
      n === 27 ? (n = vt, Qi(l.type) ? (l = Li, Li = null, vt = l) : vt = n) : vt = tl ? Dn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Uo() {
    vt = tl = null, mt = !1;
  }
  function jy() {
    var l = $a;
    return l !== null && (pa === null ? pa = l : pa.push.apply(
      pa,
      l
    ), $a = null), l;
  }
  function Co(l) {
    $a === null ? $a = [l] : $a.push(l);
  }
  var us = Y(null), wu = null, Tn = null;
  function qu(l, n, u) {
    te(us, n._currentValue), n._currentValue = u;
  }
  function Vn(l) {
    l._currentValue = us.current, W(us);
  }
  function Ir(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Gy(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var R = 0; R < n.length; R++)
            if (g.context === n[R]) {
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Ir(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(T(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Ir(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function _o(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(T(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          _l(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === ol.current) {
        if (m = s.alternate, m === null) throw Error(T(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Sa) : l = [Sa]);
      }
      s = s.return;
    }
    l !== null && Gy(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function is(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!_l(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ri(l) {
    wu = l, Tn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function bl(l) {
    return Qy(wu, l);
  }
  function cs(l, n) {
    return wu === null && Ri(l), Qy(l, n);
  }
  function Qy(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Tn === null) {
      if (l === null) throw Error(T(308));
      Tn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Tn = Tn.next = n;
    return u;
  }
  var Ho = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Pr = p.unstable_scheduleCallback, Dv = p.unstable_NormalPriority, rl = {
    $$typeof: _e,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xo() {
    return {
      controller: new Ho(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xn(l) {
    l.refCount--, l.refCount === 0 && Pr(Dv, function() {
      l.controller.abort();
    });
  }
  var Oi = null, os = 0, Fa = 0, dl = null;
  function ed(l, n) {
    if (Oi === null) {
      var u = Oi = [];
      os = 0, Fa = Vc(), dl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return os++, n.then(td, td), n;
  }
  function td() {
    if (--os === 0 && Oi !== null) {
      dl !== null && (dl.status = "fulfilled");
      var l = Oi;
      Oi = null, Fa = 0, dl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Mv(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var ld = C.S;
  C.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && ed(l, n), ld !== null && ld(l, n);
  };
  var Zn = Y(null);
  function fs() {
    var l = Zn.current;
    return l !== null ? l : Ht.pooledCache;
  }
  function Ec(l, n) {
    n === null ? te(Zn, Zn.current) : te(Zn, n.pool);
  }
  function ad() {
    var l = fs();
    return l === null ? null : { parent: rl._currentValue, pool: l };
  }
  var Di = Error(T(460)), nd = Error(T(474)), ss = Error(T(542)), ud = { then: function() {
  } };
  function id(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function rs() {
  }
  function Ly(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(rs, rs), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Xy(l), l;
      default:
        if (typeof n.status == "string") n.then(rs, rs);
        else {
          if (l = Ht, l !== null && 100 < l.shellSuspendCounter)
            throw Error(T(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Xy(l), l;
        }
        throw Ac = n, Di;
    }
  }
  var Ac = null;
  function Vy() {
    if (Ac === null) throw Error(T(459));
    var l = Ac;
    return Ac = null, l;
  }
  function Xy(l) {
    if (l === Di || l === ss)
      throw Error(T(483));
  }
  var Kn = !1;
  function cd(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function od(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ra(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function kn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (At & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = ts(l), Ro(l, null, u), n;
    }
    return Ti(l, c, n, u), ts(l);
  }
  function Rc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Ve(l, u);
    }
  }
  function Zy(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Ky = !1;
  function No() {
    if (Ky) {
      var l = dl;
      if (l !== null) throw l;
    }
  }
  function Bu(l, n, u, c) {
    Ky = !1;
    var s = l.updateQueue;
    Kn = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var R = g, N = R.next;
      R.next = null, m === null ? r = N : m.next = N, m = R;
      var $ = l.alternate;
      $ !== null && ($ = $.updateQueue, g = $.lastBaseUpdate, g !== m && (g === null ? $.firstBaseUpdate = N : g.next = N, $.lastBaseUpdate = R));
    }
    if (r !== null) {
      var I = s.baseState;
      m = 0, $ = N = R = null, g = r;
      do {
        var B = g.lane & -536870913, G = B !== g.lane;
        if (G ? (ut & B) === B : (c & B) === B) {
          B !== 0 && B === Fa && (Ky = !0), $ !== null && ($ = $.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var ze = l, Ue = g;
            B = n;
            var bt = u;
            switch (Ue.tag) {
              case 1:
                if (ze = Ue.payload, typeof ze == "function") {
                  I = ze.call(bt, I, B);
                  break e;
                }
                I = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = Ue.payload, B = typeof ze == "function" ? ze.call(bt, I, B) : ze, B == null) break e;
                I = ce({}, I, B);
                break e;
              case 2:
                Kn = !0;
            }
          }
          B = g.callback, B !== null && (l.flags |= 64, G && (l.flags |= 8192), G = s.callbacks, G === null ? s.callbacks = [B] : G.push(B));
        } else
          G = {
            lane: B,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, $ === null ? (N = $ = G, R = I) : $ = $.next = G, m |= B;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          G = g, g = G.next, G.next = null, s.lastBaseUpdate = G, s.shared.pending = null;
        }
      } while (!0);
      $ === null && (R = I), s.baseState = R, s.firstBaseUpdate = N, s.lastBaseUpdate = $, r === null && (s.shared.lanes = 0), Xu |= m, l.lanes = m, l.memoizedState = I;
    }
  }
  function fd(l, n) {
    if (typeof l != "function")
      throw Error(T(191, l));
    l.call(n);
  }
  function ds(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        fd(u[l], n);
  }
  var Oc = Y(null), hs = Y(0);
  function Sl(l, n) {
    l = Vu, te(hs, l), te(Oc, n), Vu = l | n.baseLanes;
  }
  function wo() {
    te(hs, Vu), te(Oc, Oc.current);
  }
  function qo() {
    Vu = hs.current, W(Oc), W(hs);
  }
  var Ia = 0, Ze = null, Et = null, Zt = null, ys = !1, Ua = !1, Mi = !1, En = 0, Ca = 0, Yu = null, ky = 0;
  function Kt() {
    throw Error(T(321));
  }
  function sd(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!_l(l[u], n[u])) return !1;
    return !0;
  }
  function rd(l, n, u, c, s, r) {
    return Ia = r, Ze = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, C.H = l === null || l.memoizedState === null ? om : fm, Mi = !1, r = u(c, s), Mi = !1, Ua && (r = Jy(
      n,
      u,
      c,
      s
    )), zi(l), r;
  }
  function zi(l) {
    C.H = zd;
    var n = Et !== null && Et.next !== null;
    if (Ia = 0, Zt = Et = Ze = null, ys = !1, Ca = 0, Yu = null, n) throw Error(T(300));
    l === null || hl || (l = l.dependencies, l !== null && is(l) && (hl = !0));
  }
  function Jy(l, n, u, c) {
    Ze = l;
    var s = 0;
    do {
      if (Ua && (Yu = null), Ca = 0, Ua = !1, 25 <= s) throw Error(T(301));
      if (s += 1, Zt = Et = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      C.H = ju, r = n(u, c);
    } while (Ua);
    return r;
  }
  function zv() {
    var l = C.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? ps(n) : n, l = l.useState()[0], (Et !== null ? Et.memoizedState : null) !== l && (Ze.flags |= 1024), n;
  }
  function dd() {
    var l = En !== 0;
    return En = 0, l;
  }
  function Bo(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function hd(l) {
    if (ys) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      ys = !1;
    }
    Ia = 0, Zt = Et = Ze = null, Ua = !1, Ca = En = 0, Yu = null;
  }
  function Ll() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Zt === null ? Ze.memoizedState = Zt = l : Zt = Zt.next = l, Zt;
  }
  function Jt() {
    if (Et === null) {
      var l = Ze.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Et.next;
    var n = Zt === null ? Ze.memoizedState : Zt.next;
    if (n !== null)
      Zt = n, Et = l;
    else {
      if (l === null)
        throw Ze.alternate === null ? Error(T(467)) : Error(T(310));
      Et = l, l = {
        memoizedState: Et.memoizedState,
        baseState: Et.baseState,
        baseQueue: Et.baseQueue,
        queue: Et.queue,
        next: null
      }, Zt === null ? Ze.memoizedState = Zt = l : Zt = Zt.next = l;
    }
    return Zt;
  }
  function ms() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ps(l) {
    var n = Ca;
    return Ca += 1, Yu === null && (Yu = []), l = Ly(Yu, l, n), n = Ze, (Zt === null ? n.memoizedState : Zt.next) === null && (n = n.alternate, C.H = n === null || n.memoizedState === null ? om : fm), l;
  }
  function nl(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ps(l);
      if (l.$$typeof === _e) return bl(l);
    }
    throw Error(T(438, String(l)));
  }
  function yd(l) {
    var n = null, u = Ze.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Ze.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = ms(), Ze.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = ht;
    return n.index++, u;
  }
  function Jn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function vs(l) {
    var n = Jt();
    return md(n, Et, l);
  }
  function md(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(T(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var g = m = null, R = null, N = n, $ = !1;
      do {
        var I = N.lane & -536870913;
        if (I !== N.lane ? (ut & I) === I : (Ia & I) === I) {
          var B = N.revertLane;
          if (B === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), I === Fa && ($ = !0);
          else if ((Ia & B) === B) {
            N = N.next, B === Fa && ($ = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, R === null ? (g = R = I, m = r) : R = R.next = I, Ze.lanes |= B, Xu |= B;
          I = N.action, Mi && u(r, I), r = N.hasEagerState ? N.eagerState : u(r, I);
        } else
          B = {
            lane: I,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, R === null ? (g = R = B, m = r) : R = R.next = B, Ze.lanes |= I, Xu |= I;
        N = N.next;
      } while (N !== null && N !== n);
      if (R === null ? m = r : R.next = g, !_l(r, l.memoizedState) && (hl = !0, $ && (u = dl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = R, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function pd(l) {
    var n = Jt(), u = n.queue;
    if (u === null) throw Error(T(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      _l(r, n.memoizedState) || (hl = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function gs(l, n, u) {
    var c = Ze, s = Jt(), r = mt;
    if (r) {
      if (u === void 0) throw Error(T(407));
      u = u();
    } else u = n();
    var m = !_l(
      (Et || s).memoizedState,
      u
    );
    m && (s.memoizedState = u, hl = !0), s = s.queue;
    var g = Wy.bind(null, c, s, l);
    if (Ut(2048, 8, g, [l]), s.getSnapshot !== n || m || Zt !== null && Zt.memoizedState.tag & 1) {
      if (c.flags |= 2048, da(
        9,
        Ts(),
        $y.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Ht === null) throw Error(T(349));
      r || (Ia & 124) !== 0 || vd(c, n, u);
    }
    return u;
  }
  function vd(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Ze.updateQueue, n === null ? (n = ms(), Ze.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function $y(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Fy(n) && gd(l);
  }
  function Wy(l, n, u) {
    return u(function() {
      Fy(n) && gd(l);
    });
  }
  function Fy(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !_l(l, u);
    } catch {
      return !0;
    }
  }
  function gd(l) {
    var n = Qn(l, 2);
    n !== null && xa(n, l, 2);
  }
  function bs(l) {
    var n = Ll();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Mi) {
        Va(!0);
        try {
          u();
        } finally {
          Va(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jn,
      lastRenderedState: l
    }, n;
  }
  function bd(l, n, u, c) {
    return l.baseState = u, md(
      l,
      Et,
      typeof c == "function" ? c : Jn
    );
  }
  function Uv(l, n, u, c, s) {
    if (Uc(l)) throw Error(T(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      C.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Sd(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Sd(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = C.T, m = {};
      C.T = m;
      try {
        var g = u(s, c), R = C.S;
        R !== null && R(m, g), Ss(l, n, g);
      } catch (N) {
        Ed(l, n, N);
      } finally {
        C.T = r;
      }
    } else
      try {
        r = u(s, c), Ss(l, n, r);
      } catch (N) {
        Ed(l, n, N);
      }
  }
  function Ss(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Td(l, n, c);
      },
      function(c) {
        return Ed(l, n, c);
      }
    ) : Td(l, n, u);
  }
  function Td(l, n, u) {
    n.status = "fulfilled", n.value = u, Iy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Sd(l, u)));
  }
  function Ed(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, Iy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function Iy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ad(l, n) {
    return n;
  }
  function Py(l, n) {
    if (mt) {
      var u = Ht.formState;
      if (u !== null) {
        e: {
          var c = Ze;
          if (mt) {
            if (vt) {
              t: {
                for (var s = vt, r = Wa; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Dn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                vt = Dn(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            Nu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Ll(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ad,
      lastRenderedState: n
    }, u.queue = c, u = im.bind(
      null,
      Ze,
      c
    ), c.dispatch = u, c = bs(!1), r = Rs.bind(
      null,
      Ze,
      !1,
      c.queue
    ), c = Ll(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Uv.bind(
      null,
      Ze,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function $n(l) {
    var n = Jt();
    return Rd(n, Et, l);
  }
  function Rd(l, n, u) {
    if (n = md(
      l,
      n,
      Ad
    )[0], l = vs(Jn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = ps(n);
      } catch (m) {
        throw m === Di ? ss : m;
      }
    else c = n;
    n = Jt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Ze.flags |= 2048, da(
      9,
      Ts(),
      r0.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function r0(l, n) {
    l.action = n;
  }
  function Od(l) {
    var n = Jt(), u = Et;
    if (u !== null)
      return Rd(n, u, l);
    Jt(), n = n.memoizedState, u = Jt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function da(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Ze.updateQueue, n === null && (n = ms(), Ze.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ts() {
    return { destroy: void 0, resource: void 0 };
  }
  function Es() {
    return Jt().memoizedState;
  }
  function Ui(l, n, u, c) {
    var s = Ll();
    c = c === void 0 ? null : c, Ze.flags |= l, s.memoizedState = da(
      1 | n,
      Ts(),
      u,
      c
    );
  }
  function Ut(l, n, u, c) {
    var s = Jt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Et !== null && c !== null && sd(c, Et.memoizedState.deps) ? s.memoizedState = da(n, r, u, c) : (Ze.flags |= l, s.memoizedState = da(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Cv(l, n) {
    Ui(8390656, 8, l, n);
  }
  function _v(l, n) {
    Ut(2048, 8, l, n);
  }
  function em(l, n) {
    return Ut(4, 2, l, n);
  }
  function An(l, n) {
    return Ut(4, 4, l, n);
  }
  function tm(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Dd(l, n, u) {
    u = u != null ? u.concat([l]) : null, Ut(4, 4, tm.bind(null, n, l), u);
  }
  function Dc() {
  }
  function Mc(l, n) {
    var u = Jt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && sd(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function lm(l, n) {
    var u = Jt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && sd(n, c[1]))
      return c[0];
    if (c = l(), Mi) {
      Va(!0);
      try {
        l();
      } finally {
        Va(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function As(l, n, u) {
    return u === void 0 || (Ia & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = Ym(), Ze.lanes |= l, Xu |= l, u);
  }
  function am(l, n, u, c) {
    return _l(u, n) ? u : Oc.current !== null ? (l = As(l, u, c), _l(l, n) || (hl = !0), l) : (Ia & 42) === 0 ? (hl = !0, l.memoizedState = u) : (l = Ym(), Ze.lanes |= l, Xu |= l, n);
  }
  function Hv(l, n, u, c, s) {
    var r = P.p;
    P.p = r !== 0 && 8 > r ? r : 8;
    var m = C.T, g = {};
    C.T = g, Rs(l, !1, n, u);
    try {
      var R = s(), N = C.S;
      if (N !== null && N(g, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var $ = Mv(
          R,
          c
        );
        zc(
          l,
          n,
          $,
          Ha(l)
        );
      } else
        zc(
          l,
          n,
          c,
          Ha(l)
        );
    } catch (I) {
      zc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: I },
        Ha()
      );
    } finally {
      P.p = r, C.T = m;
    }
  }
  function d0() {
  }
  function Md(l, n, u, c) {
    if (l.tag !== 5) throw Error(T(476));
    var s = xv(l).queue;
    Hv(
      l,
      s,
      n,
      le,
      u === null ? d0 : function() {
        return Yo(l), u(c);
      }
    );
  }
  function xv(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jn,
        lastRenderedState: le
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Yo(l) {
    var n = xv(l).next.queue;
    zc(l, n, {}, Ha());
  }
  function Pa() {
    return bl(Sa);
  }
  function nm() {
    return Jt().memoizedState;
  }
  function Nv() {
    return Jt().memoizedState;
  }
  function wv(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ha();
          l = ra(u);
          var c = kn(n, l, u);
          c !== null && (xa(c, n, u), Rc(c, n, u)), n = { cache: xo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function um(l, n, u) {
    var c = Ha();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uc(l) ? qv(n, u) : (u = Ao(l, n, u, c), u !== null && (xa(u, l, c), cm(u, n, c)));
  }
  function im(l, n, u) {
    var c = Ha();
    zc(l, n, u, c);
  }
  function zc(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Uc(l)) qv(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, _l(g, m))
            return Ti(l, n, s, 0), Ht === null && gn(), !1;
        } catch {
        } finally {
        }
      if (u = Ao(l, n, s, c), u !== null)
        return xa(u, l, c), cm(u, n, c), !0;
    }
    return !1;
  }
  function Rs(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Vc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uc(l)) {
      if (n) throw Error(T(479));
    } else
      n = Ao(
        l,
        u,
        c,
        2
      ), n !== null && xa(n, l, 2);
  }
  function Uc(l) {
    var n = l.alternate;
    return l === Ze || n !== null && n === Ze;
  }
  function qv(l, n) {
    Ua = ys = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function cm(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Ve(l, u);
    }
  }
  var zd = {
    readContext: bl,
    use: nl,
    useCallback: Kt,
    useContext: Kt,
    useEffect: Kt,
    useImperativeHandle: Kt,
    useLayoutEffect: Kt,
    useInsertionEffect: Kt,
    useMemo: Kt,
    useReducer: Kt,
    useRef: Kt,
    useState: Kt,
    useDebugValue: Kt,
    useDeferredValue: Kt,
    useTransition: Kt,
    useSyncExternalStore: Kt,
    useId: Kt,
    useHostTransitionStatus: Kt,
    useFormState: Kt,
    useActionState: Kt,
    useOptimistic: Kt,
    useMemoCache: Kt,
    useCacheRefresh: Kt
  }, om = {
    readContext: bl,
    use: nl,
    useCallback: function(l, n) {
      return Ll().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: bl,
    useEffect: Cv,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Ui(
        4194308,
        4,
        tm.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Ui(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Ui(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Ll();
      n = n === void 0 ? null : n;
      var c = l();
      if (Mi) {
        Va(!0);
        try {
          l();
        } finally {
          Va(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Ll();
      if (u !== void 0) {
        var s = u(n);
        if (Mi) {
          Va(!0);
          try {
            u(n);
          } finally {
            Va(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = um.bind(
        null,
        Ze,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Ll();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = bs(l);
      var n = l.queue, u = im.bind(null, Ze, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Dc,
    useDeferredValue: function(l, n) {
      var u = Ll();
      return As(u, l, n);
    },
    useTransition: function() {
      var l = bs(!1);
      return l = Hv.bind(
        null,
        Ze,
        l.queue,
        !0,
        !1
      ), Ll().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Ze, s = Ll();
      if (mt) {
        if (u === void 0)
          throw Error(T(407));
        u = u();
      } else {
        if (u = n(), Ht === null)
          throw Error(T(349));
        (ut & 124) !== 0 || vd(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Cv(Wy.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, da(
        9,
        Ts(),
        $y.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Ll(), n = Ht.identifierPrefix;
      if (mt) {
        var u = kt, c = Sn;
        u = (c & ~(1 << 32 - Ml(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = En++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = ky++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Pa,
    useFormState: Py,
    useActionState: Py,
    useOptimistic: function(l) {
      var n = Ll();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Rs.bind(
        null,
        Ze,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: yd,
    useCacheRefresh: function() {
      return Ll().memoizedState = wv.bind(
        null,
        Ze
      );
    }
  }, fm = {
    readContext: bl,
    use: nl,
    useCallback: Mc,
    useContext: bl,
    useEffect: _v,
    useImperativeHandle: Dd,
    useInsertionEffect: em,
    useLayoutEffect: An,
    useMemo: lm,
    useReducer: vs,
    useRef: Es,
    useState: function() {
      return vs(Jn);
    },
    useDebugValue: Dc,
    useDeferredValue: function(l, n) {
      var u = Jt();
      return am(
        u,
        Et.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = vs(Jn)[0], n = Jt().memoizedState;
      return [
        typeof l == "boolean" ? l : ps(l),
        n
      ];
    },
    useSyncExternalStore: gs,
    useId: nm,
    useHostTransitionStatus: Pa,
    useFormState: $n,
    useActionState: $n,
    useOptimistic: function(l, n) {
      var u = Jt();
      return bd(u, Et, l, n);
    },
    useMemoCache: yd,
    useCacheRefresh: Nv
  }, ju = {
    readContext: bl,
    use: nl,
    useCallback: Mc,
    useContext: bl,
    useEffect: _v,
    useImperativeHandle: Dd,
    useInsertionEffect: em,
    useLayoutEffect: An,
    useMemo: lm,
    useReducer: pd,
    useRef: Es,
    useState: function() {
      return pd(Jn);
    },
    useDebugValue: Dc,
    useDeferredValue: function(l, n) {
      var u = Jt();
      return Et === null ? As(u, l, n) : am(
        u,
        Et.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = pd(Jn)[0], n = Jt().memoizedState;
      return [
        typeof l == "boolean" ? l : ps(l),
        n
      ];
    },
    useSyncExternalStore: gs,
    useId: nm,
    useHostTransitionStatus: Pa,
    useFormState: Od,
    useActionState: Od,
    useOptimistic: function(l, n) {
      var u = Jt();
      return Et !== null ? bd(u, Et, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: yd,
    useCacheRefresh: Nv
  }, Cc = null, jo = 0;
  function Ud(l) {
    var n = jo;
    return jo += 1, Cc === null && (Cc = []), Ly(Cc, l, n);
  }
  function _c(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Vl(l, n) {
    throw n.$$typeof === X ? Error(T(525)) : (l = Object.prototype.toString.call(n), Error(
      T(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function sm(l) {
    var n = l._init;
    return n(l._payload);
  }
  function ha(l) {
    function n(H, U) {
      if (l) {
        var x = H.deletions;
        x === null ? (H.deletions = [U], H.flags |= 16) : x.push(U);
      }
    }
    function u(H, U) {
      if (!l) return null;
      for (; U !== null; )
        n(H, U), U = U.sibling;
      return null;
    }
    function c(H) {
      for (var U = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? U.set(H.key, H) : U.set(H.index, H), H = H.sibling;
      return U;
    }
    function s(H, U) {
      return H = bn(H, U), H.index = 0, H.sibling = null, H;
    }
    function r(H, U, x) {
      return H.index = x, l ? (x = H.alternate, x !== null ? (x = x.index, x < U ? (H.flags |= 67108866, U) : x) : (H.flags |= 67108866, U)) : (H.flags |= 1048576, U);
    }
    function m(H) {
      return l && H.alternate === null && (H.flags |= 67108866), H;
    }
    function g(H, U, x, F) {
      return U === null || U.tag !== 6 ? (U = Do(x, H.mode, F), U.return = H, U) : (U = s(U, x), U.return = H, U);
    }
    function R(H, U, x, F) {
      var me = x.type;
      return me === Ee ? $(
        H,
        U,
        x.props.children,
        F,
        x.key
      ) : U !== null && (U.elementType === me || typeof me == "object" && me !== null && me.$$typeof === pt && sm(me) === U.type) ? (U = s(U, x.props), _c(U, x), U.return = H, U) : (U = ae(
        x.type,
        x.key,
        x.props,
        null,
        H.mode,
        F
      ), _c(U, x), U.return = H, U);
    }
    function N(H, U, x, F) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== x.containerInfo || U.stateNode.implementation !== x.implementation ? (U = Xt(x, H.mode, F), U.return = H, U) : (U = s(U, x.children || []), U.return = H, U);
    }
    function $(H, U, x, F, me) {
      return U === null || U.tag !== 7 ? (U = ka(
        x,
        H.mode,
        F,
        me
      ), U.return = H, U) : (U = s(U, x), U.return = H, U);
    }
    function I(H, U, x) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return U = Do(
          "" + U,
          H.mode,
          x
        ), U.return = H, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case M:
            return x = ae(
              U.type,
              U.key,
              U.props,
              null,
              H.mode,
              x
            ), _c(x, U), x.return = H, x;
          case ne:
            return U = Xt(
              U,
              H.mode,
              x
            ), U.return = H, U;
          case pt:
            var F = U._init;
            return U = F(U._payload), I(H, U, x);
        }
        if (Tt(U) || we(U))
          return U = ka(
            U,
            H.mode,
            x,
            null
          ), U.return = H, U;
        if (typeof U.then == "function")
          return I(H, Ud(U), x);
        if (U.$$typeof === _e)
          return I(
            H,
            cs(H, U),
            x
          );
        Vl(H, U);
      }
      return null;
    }
    function B(H, U, x, F) {
      var me = U !== null ? U.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return me !== null ? null : g(H, U, "" + x, F);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case M:
            return x.key === me ? R(H, U, x, F) : null;
          case ne:
            return x.key === me ? N(H, U, x, F) : null;
          case pt:
            return me = x._init, x = me(x._payload), B(H, U, x, F);
        }
        if (Tt(x) || we(x))
          return me !== null ? null : $(H, U, x, F, null);
        if (typeof x.then == "function")
          return B(
            H,
            U,
            Ud(x),
            F
          );
        if (x.$$typeof === _e)
          return B(
            H,
            U,
            cs(H, x),
            F
          );
        Vl(H, x);
      }
      return null;
    }
    function G(H, U, x, F, me) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return H = H.get(x) || null, g(U, H, "" + F, me);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case M:
            return H = H.get(
              F.key === null ? x : F.key
            ) || null, R(U, H, F, me);
          case ne:
            return H = H.get(
              F.key === null ? x : F.key
            ) || null, N(U, H, F, me);
          case pt:
            var et = F._init;
            return F = et(F._payload), G(
              H,
              U,
              x,
              F,
              me
            );
        }
        if (Tt(F) || we(F))
          return H = H.get(x) || null, $(U, H, F, me, null);
        if (typeof F.then == "function")
          return G(
            H,
            U,
            x,
            Ud(F),
            me
          );
        if (F.$$typeof === _e)
          return G(
            H,
            U,
            x,
            cs(U, F),
            me
          );
        Vl(U, F);
      }
      return null;
    }
    function ze(H, U, x, F) {
      for (var me = null, et = null, De = U, Ne = U = 0, Al = null; De !== null && Ne < x.length; Ne++) {
        De.index > Ne ? (Al = De, De = null) : Al = De.sibling;
        var yt = B(
          H,
          De,
          x[Ne],
          F
        );
        if (yt === null) {
          De === null && (De = Al);
          break;
        }
        l && De && yt.alternate === null && n(H, De), U = r(yt, U, Ne), et === null ? me = yt : et.sibling = yt, et = yt, De = Al;
      }
      if (Ne === x.length)
        return u(H, De), mt && rt(H, Ne), me;
      if (De === null) {
        for (; Ne < x.length; Ne++)
          De = I(H, x[Ne], F), De !== null && (U = r(
            De,
            U,
            Ne
          ), et === null ? me = De : et.sibling = De, et = De);
        return mt && rt(H, Ne), me;
      }
      for (De = c(De); Ne < x.length; Ne++)
        Al = G(
          De,
          H,
          Ne,
          x[Ne],
          F
        ), Al !== null && (l && Al.alternate !== null && De.delete(
          Al.key === null ? Ne : Al.key
        ), U = r(
          Al,
          U,
          Ne
        ), et === null ? me = Al : et.sibling = Al, et = Al);
      return l && De.forEach(function(ki) {
        return n(H, ki);
      }), mt && rt(H, Ne), me;
    }
    function Ue(H, U, x, F) {
      if (x == null) throw Error(T(151));
      for (var me = null, et = null, De = U, Ne = U = 0, Al = null, yt = x.next(); De !== null && !yt.done; Ne++, yt = x.next()) {
        De.index > Ne ? (Al = De, De = null) : Al = De.sibling;
        var ki = B(H, De, yt.value, F);
        if (ki === null) {
          De === null && (De = Al);
          break;
        }
        l && De && ki.alternate === null && n(H, De), U = r(ki, U, Ne), et === null ? me = ki : et.sibling = ki, et = ki, De = Al;
      }
      if (yt.done)
        return u(H, De), mt && rt(H, Ne), me;
      if (De === null) {
        for (; !yt.done; Ne++, yt = x.next())
          yt = I(H, yt.value, F), yt !== null && (U = r(yt, U, Ne), et === null ? me = yt : et.sibling = yt, et = yt);
        return mt && rt(H, Ne), me;
      }
      for (De = c(De); !yt.done; Ne++, yt = x.next())
        yt = G(De, H, Ne, yt.value, F), yt !== null && (l && yt.alternate !== null && De.delete(yt.key === null ? Ne : yt.key), U = r(yt, U, Ne), et === null ? me = yt : et.sibling = yt, et = yt);
      return l && De.forEach(function(R0) {
        return n(H, R0);
      }), mt && rt(H, Ne), me;
    }
    function bt(H, U, x, F) {
      if (typeof x == "object" && x !== null && x.type === Ee && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case M:
            e: {
              for (var me = x.key; U !== null; ) {
                if (U.key === me) {
                  if (me = x.type, me === Ee) {
                    if (U.tag === 7) {
                      u(
                        H,
                        U.sibling
                      ), F = s(
                        U,
                        x.props.children
                      ), F.return = H, H = F;
                      break e;
                    }
                  } else if (U.elementType === me || typeof me == "object" && me !== null && me.$$typeof === pt && sm(me) === U.type) {
                    u(
                      H,
                      U.sibling
                    ), F = s(U, x.props), _c(F, x), F.return = H, H = F;
                    break e;
                  }
                  u(H, U);
                  break;
                } else n(H, U);
                U = U.sibling;
              }
              x.type === Ee ? (F = ka(
                x.props.children,
                H.mode,
                F,
                x.key
              ), F.return = H, H = F) : (F = ae(
                x.type,
                x.key,
                x.props,
                null,
                H.mode,
                F
              ), _c(F, x), F.return = H, H = F);
            }
            return m(H);
          case ne:
            e: {
              for (me = x.key; U !== null; ) {
                if (U.key === me)
                  if (U.tag === 4 && U.stateNode.containerInfo === x.containerInfo && U.stateNode.implementation === x.implementation) {
                    u(
                      H,
                      U.sibling
                    ), F = s(U, x.children || []), F.return = H, H = F;
                    break e;
                  } else {
                    u(H, U);
                    break;
                  }
                else n(H, U);
                U = U.sibling;
              }
              F = Xt(x, H.mode, F), F.return = H, H = F;
            }
            return m(H);
          case pt:
            return me = x._init, x = me(x._payload), bt(
              H,
              U,
              x,
              F
            );
        }
        if (Tt(x))
          return ze(
            H,
            U,
            x,
            F
          );
        if (we(x)) {
          if (me = we(x), typeof me != "function") throw Error(T(150));
          return x = me.call(x), Ue(
            H,
            U,
            x,
            F
          );
        }
        if (typeof x.then == "function")
          return bt(
            H,
            U,
            Ud(x),
            F
          );
        if (x.$$typeof === _e)
          return bt(
            H,
            U,
            cs(H, x),
            F
          );
        Vl(H, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, U !== null && U.tag === 6 ? (u(H, U.sibling), F = s(U, x), F.return = H, H = F) : (u(H, U), F = Do(x, H.mode, F), F.return = H, H = F), m(H)) : u(H, U);
    }
    return function(H, U, x, F) {
      try {
        jo = 0;
        var me = bt(
          H,
          U,
          x,
          F
        );
        return Cc = null, me;
      } catch (De) {
        if (De === Di || De === ss) throw De;
        var et = fa(29, De, null, H.mode);
        return et.lanes = F, et.return = H, et;
      } finally {
      }
    };
  }
  var Hc = ha(!0), Wn = ha(!1), _a = Y(null), Xl = null;
  function Gu(l) {
    var n = l.alternate;
    te(Ct, Ct.current & 1), te(_a, l), Xl === null && (n === null || Oc.current !== null || n.memoizedState !== null) && (Xl = l);
  }
  function Fn(l) {
    if (l.tag === 22) {
      if (te(Ct, Ct.current), te(_a, l), Xl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Xl = l);
      }
    } else In();
  }
  function In() {
    te(Ct, Ct.current), te(_a, _a.current);
  }
  function Rn(l) {
    W(_a), Xl === l && (Xl = null), W(Ct);
  }
  var Ct = Y(0);
  function Os(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Js(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Ci(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ce({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Cd = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), s = ra(c);
      s.payload = n, u != null && (s.callback = u), n = kn(l, s, c), n !== null && (xa(n, l, c), Rc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), s = ra(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = kn(l, s, c), n !== null && (xa(n, l, c), Rc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ha(), c = ra(u);
      c.tag = 2, n != null && (c.callback = n), n = kn(l, c, u), n !== null && (xa(n, l, u), Rc(n, l, u));
    }
  };
  function Go(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !vi(u, c) || !vi(s, r) : !0;
  }
  function xc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Cd.enqueueReplaceState(n, n.state, null);
  }
  function _i(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ce({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Ds = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Qo(l) {
    Ds(l);
  }
  function rm(l) {
    console.error(l);
  }
  function Ms(l) {
    Ds(l);
  }
  function zs(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function dm(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function hm(l, n, u) {
    return u = ra(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      zs(l, n);
    }, u;
  }
  function ym(l) {
    return l = ra(l), l.tag = 3, l;
  }
  function ya(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        dm(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      dm(n, u, c), typeof s != "function" && (wi === null ? wi = /* @__PURE__ */ new Set([this]) : wi.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Bv(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && _o(
        n,
        u,
        s,
        !0
      ), u = _a.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Xl === null ? Lc() : u.alternate === null && It === 0 && (It = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === ud ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), lh(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === ud ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), lh(l, c, s)), !1;
        }
        throw Error(T(435, u.tag));
      }
      return lh(l, c, s), Lc(), !1;
    }
    if (mt)
      return n = _a.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Tc && (l = Error(T(422), { cause: c }), Co(za(l, u)))) : (c !== Tc && (n = Error(T(423), {
        cause: c
      }), Co(
        za(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = za(c, u), s = hm(
        l.stateNode,
        c,
        s
      ), Zy(l, s), It !== 4 && (It = 2)), !1;
    var r = Error(T(520), { cause: c });
    if (r = za(r, u), Jo === null ? Jo = [r] : Jo.push(r), It !== 4 && (It = 2), n === null) return !0;
    c = za(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = hm(u.stateNode, c, l), Zy(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (wi === null || !wi.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = ym(s), ya(
              s,
              l,
              u,
              c
            ), Zy(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var $t = Error(T(461)), hl = !1;
  function Tl(l, n, u, c) {
    n.child = l === null ? Wn(n, null, u, c) : Hc(
      n,
      l.child,
      u,
      c
    );
  }
  function Yv(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return Ri(n), c = rd(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = dd(), l !== null && !hl ? (Bo(l, n, s), Pn(l, n, s)) : (mt && g && Sc(n), n.flags |= 1, Tl(l, n, c, s), n.child);
  }
  function Qu(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !ls(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Nc(
        l,
        n,
        r,
        c,
        s
      )) : (l = ae(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Gd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : vi, u(m, c) && l.ref === n.ref)
        return Pn(l, n, s);
    }
    return n.flags |= 1, l = bn(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Nc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (vi(r, c) && l.ref === n.ref)
        if (hl = !1, n.pendingProps = c = r, Gd(l, s))
          (l.flags & 131072) !== 0 && (hl = !0);
        else
          return n.lanes = l.lanes, Pn(l, n, s);
    }
    return Hd(
      l,
      n,
      u,
      c,
      s
    );
  }
  function _d(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return wc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ec(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Sl(n, r) : wo(), Fn(n);
      else
        return n.lanes = n.childLanes = 536870912, wc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (Ec(n, r.cachePool), Sl(n, r), In(), n.memoizedState = null) : (l !== null && Ec(n, null), wo(), In());
    return Tl(l, n, s, u), n.child;
  }
  function wc(l, n, u, c) {
    var s = fs();
    return s = s === null ? null : { parent: rl._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Ec(n, null), wo(), Fn(n), l !== null && _o(l, n, c, !0), null;
  }
  function Us(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(T(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Hd(l, n, u, c, s) {
    return Ri(n), u = rd(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = dd(), l !== null && !hl ? (Bo(l, n, s), Pn(l, n, s)) : (mt && c && Sc(n), n.flags |= 1, Tl(l, n, u, s), n.child);
  }
  function mm(l, n, u, c, s, r) {
    return Ri(n), n.updateQueue = null, u = Jy(
      n,
      c,
      u,
      s
    ), zi(l), c = dd(), l !== null && !hl ? (Bo(l, n, r), Pn(l, n, r)) : (mt && c && Sc(n), n.flags |= 1, Tl(l, n, u, r), n.child);
  }
  function xd(l, n, u, c, s) {
    if (Ri(n), n.stateNode === null) {
      var r = Oo, m = u.contextType;
      typeof m == "object" && m !== null && (r = bl(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Cd, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, cd(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? bl(m) : Oo, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Ci(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Cd.enqueueReplaceState(r, r.state, null), Bu(n, c, r, s), No(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, R = _i(u, g);
      r.props = R;
      var N = r.context, $ = u.contextType;
      m = Oo, typeof $ == "object" && $ !== null && (m = bl($));
      var I = u.getDerivedStateFromProps;
      $ = typeof I == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, $ || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || N !== m) && xc(
        n,
        r,
        c,
        m
      ), Kn = !1;
      var B = n.memoizedState;
      r.state = B, Bu(n, c, r, s), No(), N = n.memoizedState, g || B !== N || Kn ? (typeof I == "function" && (Ci(
        n,
        u,
        I,
        c
      ), N = n.memoizedState), (R = Kn || Go(
        n,
        u,
        R,
        c,
        B,
        N,
        m
      )) ? ($ || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = m, c = R) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, od(l, n), m = n.memoizedProps, $ = _i(u, m), r.props = $, I = n.pendingProps, B = r.context, N = u.contextType, R = Oo, typeof N == "object" && N !== null && (R = bl(N)), g = u.getDerivedStateFromProps, (N = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== I || B !== R) && xc(
        n,
        r,
        c,
        R
      ), Kn = !1, B = n.memoizedState, r.state = B, Bu(n, c, r, s), No();
      var G = n.memoizedState;
      m !== I || B !== G || Kn || l !== null && l.dependencies !== null && is(l.dependencies) ? (typeof g == "function" && (Ci(
        n,
        u,
        g,
        c
      ), G = n.memoizedState), ($ = Kn || Go(
        n,
        u,
        $,
        c,
        B,
        G,
        R
      ) || l !== null && l.dependencies !== null && is(l.dependencies)) ? (N || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, G, R), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        G,
        R
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = G), r.props = c, r.state = G, r.context = R, c = $) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Us(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Hc(
      n,
      l.child,
      null,
      s
    ), n.child = Hc(
      n,
      null,
      u,
      s
    )) : Tl(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Pn(
      l,
      n,
      s
    ), l;
  }
  function Nd(l, n, u, c) {
    return Uo(), n.flags |= 256, Tl(l, n, u, c), n.child;
  }
  var wd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function pm(l) {
    return { baseLanes: l, cachePool: ad() };
  }
  function vm(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ln), l;
  }
  function gm(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Ct.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (mt) {
        if (s ? Gu(n) : In(), mt) {
          var g = vt, R;
          if (R = g) {
            e: {
              for (R = g, g = Wa; R.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break e;
                }
                if (R = Dn(
                  R.nextSibling
                ), R === null) {
                  g = null;
                  break e;
                }
              }
              g = R;
            }
            g !== null ? (n.memoizedState = {
              dehydrated: g,
              treeContext: xu !== null ? { id: Sn, overflow: kt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = fa(
              18,
              null,
              null,
              0
            ), R.stateNode = g, R.return = n, n.child = R, tl = n, vt = null, R = !0) : R = !1;
          }
          R || Nu(n);
        }
        if (g = n.memoizedState, g !== null && (g = g.dehydrated, g !== null))
          return Js(g) ? n.lanes = 32 : n.lanes = 536870912, null;
        Rn(n);
      }
      return g = c.children, c = c.fallback, s ? (In(), s = n.mode, g = Bd(
        { mode: "hidden", children: g },
        s
      ), c = ka(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, s = n.child, s.memoizedState = pm(u), s.childLanes = vm(
        l,
        m,
        u
      ), n.memoizedState = wd, c) : (Gu(n), qd(n, g));
    }
    if (R = l.memoizedState, R !== null && (g = R.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (Gu(n), n.flags &= -257, n = Hi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (In(), n.child = l.child, n.flags |= 128, n = null) : (In(), s = c.fallback, g = n.mode, c = Bd(
          { mode: "visible", children: c.children },
          g
        ), s = ka(
          s,
          g,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, Hc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = pm(u), c.childLanes = vm(
          l,
          m,
          u
        ), n.memoizedState = wd, n = s);
      else if (Gu(n), Js(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var N = m.dgst;
        m = N, c = Error(T(419)), c.stack = "", c.digest = m, Co({ value: c, source: null, stack: null }), n = Hi(
          l,
          n,
          u
        );
      } else if (hl || _o(l, n, u, !1), m = (u & l.childLanes) !== 0, hl || m) {
        if (m = Ht, m !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : al(c), c = (c & (m.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== R.retryLane))
          throw R.retryLane = c, Qn(l, c), xa(m, l, c), $t;
        g.data === "$?" || Lc(), n = Hi(
          l,
          n,
          u
        );
      } else
        g.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = R.treeContext, vt = Dn(
          g.nextSibling
        ), tl = n, mt = !0, $a = null, Wa = !1, l !== null && (Ja[sa++] = Sn, Ja[sa++] = kt, Ja[sa++] = xu, Sn = l.id, kt = l.overflow, xu = n), n = qd(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (In(), s = c.fallback, g = n.mode, R = l.child, N = R.sibling, c = bn(R, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = R.subtreeFlags & 65011712, N !== null ? s = bn(N, s) : (s = ka(
      s,
      g,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, g = l.child.memoizedState, g === null ? g = pm(u) : (R = g.cachePool, R !== null ? (N = rl._currentValue, R = R.parent !== N ? { parent: N, pool: N } : R) : R = ad(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: R
    }), s.memoizedState = g, s.childLanes = vm(
      l,
      m,
      u
    ), n.memoizedState = wd, c) : (Gu(n), u = l.child, l = u.sibling, u = bn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function qd(l, n) {
    return n = Bd(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Bd(l, n) {
    return l = fa(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function Hi(l, n, u) {
    return Hc(n, l.child, null, u), l = qd(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Cs(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Ir(l.return, n, u);
  }
  function Yd(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function jd(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (Tl(l, n, c.children, u), c = Ct.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Cs(l, u, n);
          else if (l.tag === 19)
            Cs(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (te(Ct, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Os(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Yd(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Os(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Yd(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        Yd(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Pn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Xu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (_o(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(T(153));
    if (n.child !== null) {
      for (l = n.child, u = bn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = bn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Gd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && is(l)));
  }
  function jv(l, n, u) {
    switch (n.tag) {
      case 3:
        Ye(n, n.stateNode.containerInfo), qu(n, rl, l.memoizedState.cache), Uo();
        break;
      case 27:
      case 5:
        ua(n);
        break;
      case 4:
        Ye(n, n.stateNode.containerInfo);
        break;
      case 10:
        qu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Gu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? gm(l, n, u) : (Gu(n), l = Pn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Gu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (_o(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return jd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), te(Ct, Ct.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, _d(l, n, u);
      case 24:
        qu(n, rl, l.memoizedState.cache);
    }
    return Pn(l, n, u);
  }
  function Gv(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        hl = !0;
      else {
        if (!Gd(l, u) && (n.flags & 128) === 0)
          return hl = !1, jv(
            l,
            n,
            u
          );
        hl = (l.flags & 131072) !== 0;
      }
    else
      hl = !1, mt && (n.flags & 1048576) !== 0 && Fr(n, Mo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            ls(c) ? (l = _i(c, l), n.tag = 1, n = xd(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Hd(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === ft) {
                n.tag = 11, n = Yv(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Le) {
                n.tag = 14, n = Qu(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Vt(c) || c, Error(T(306, n, ""));
          }
        }
        return n;
      case 0:
        return Hd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = _i(
          c,
          n.pendingProps
        ), xd(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Ye(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(T(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, od(l, n), Bu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, qu(n, rl, c), c !== r.cache && Gy(
            n,
            [rl],
            u,
            !0
          ), No(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Nd(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = za(
                Error(T(424)),
                n
              ), Co(s), n = Nd(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (vt = Dn(l.firstChild), tl = n, mt = !0, $a = null, Wa = !0, u = Wn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Uo(), c === s) {
              n = Pn(
                l,
                n,
                u
              );
              break e;
            }
            Tl(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Us(l, n), l === null ? (u = lg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : mt || (u = n.type, l = n.pendingProps, c = nn(
          he.current
        ).createElement(u), c[gl] = n, c[$l] = l, qe(c, u, l), sl(c), n.stateNode = c) : n.memoizedState = lg(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ua(n), l === null && mt && (c = n.stateNode = ye(
          n.type,
          n.pendingProps,
          he.current
        ), tl = n, Wa = !0, s = vt, Qi(n.type) ? (Li = s, vt = Dn(
          c.firstChild
        )) : vt = s), Tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), Us(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && mt && ((s = c = vt) && (c = cf(
          c,
          n.type,
          n.pendingProps,
          Wa
        ), c !== null ? (n.stateNode = c, tl = n, vt = Dn(
          c.firstChild
        ), Wa = !1, s = !0) : s = !1), s || Nu(n)), ua(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, ou(s, r) ? c = null : m !== null && ou(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = rd(
          l,
          n,
          zv,
          null,
          null,
          u
        ), Sa._currentValue = s), Us(l, n), Tl(l, n, c, u), n.child;
      case 6:
        return l === null && mt && ((l = u = vt) && (u = T0(
          u,
          n.pendingProps,
          Wa
        ), u !== null ? (n.stateNode = u, tl = n, vt = null, l = !0) : l = !1), l || Nu(n)), null;
      case 13:
        return gm(l, n, u);
      case 4:
        return Ye(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Hc(
          n,
          null,
          c,
          u
        ) : Tl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Yv(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Tl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, qu(n, n.type, c.value), Tl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Ri(n), s = bl(s), c = c(s), n.flags |= 1, Tl(l, n, c, u), n.child;
      case 14:
        return Qu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Nc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return jd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = Bd(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = bn(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return _d(l, n, u);
      case 24:
        return Ri(n), c = bl(rl), l === null ? (s = fs(), s === null && (s = Ht, r = xo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, cd(n), qu(n, rl, s)) : ((l.lanes & u) !== 0 && (od(l, n), Bu(n, null, null, u), No()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), qu(n, rl, c)) : (c = r.cache, qu(n, rl, c), c !== s.cache && Gy(
          n,
          [rl],
          u,
          !0
        ))), Tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(T(156, n.tag));
  }
  function eu(l) {
    l.flags |= 4;
  }
  function Lo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !tp(n)) {
      if (n = _a.current, n !== null && ((ut & 4194048) === ut ? Xl !== null : (ut & 62914560) !== ut && (ut & 536870912) === 0 || n !== Xl))
        throw Ac = ud, nd;
      l.flags |= 8192;
    }
  }
  function _s(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? se() : 536870912, l.lanes |= n, ko |= n);
  }
  function Vo(l, n) {
    if (!mt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function xe(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function bm(l, n, u) {
    var c = n.pendingProps;
    switch (Ln(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xe(n), null;
      case 1:
        return xe(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Vn(rl), Yt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (zo(n) ? eu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, jy())), xe(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (eu(n), u !== null ? (xe(n), Lo(n, u)) : (xe(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (eu(n), xe(n), Lo(n, u)) : (xe(n), n.flags &= -16777217) : (l.memoizedProps !== c && eu(n), xe(n), n.flags &= -16777217), null;
      case 27:
        _n(n), u = he.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && eu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(T(166));
            return xe(n), null;
          }
          l = de.current, zo(n) ? ns(n) : (l = ye(s, c, u), n.stateNode = l, eu(n));
        }
        return xe(n), null;
      case 5:
        if (_n(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && eu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(T(166));
            return xe(n), null;
          }
          if (l = de.current, zo(n))
            ns(n);
          else {
            switch (s = nn(
              he.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[gl] = n, l[$l] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (qe(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && eu(n);
          }
        }
        return xe(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && eu(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(T(166));
          if (l = he.current, zo(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = tl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[gl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || Fm(l.nodeValue, u)), l || Nu(n);
          } else
            l = nn(l).createTextNode(
              c
            ), l[gl] = n, n.stateNode = l;
        }
        return xe(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = zo(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(T(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(T(317));
              s[gl] = n;
            } else
              Uo(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            xe(n), s = !1;
          } else
            s = jy(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Rn(n), n) : (Rn(n), null);
        }
        if (Rn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), _s(n, n.updateQueue), xe(n), null;
      case 4:
        return Yt(), l === null && $m(n.stateNode.containerInfo), xe(n), null;
      case 10:
        return Vn(n.type), xe(n), null;
      case 19:
        if (W(Ct), s = n.memoizedState, s === null) return xe(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) Vo(s, !1);
          else {
            if (It !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Os(l), r !== null) {
                  for (n.flags |= 128, Vo(s, !1), l = r.updateQueue, n.updateQueue = l, _s(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Pe(u, l), u = u.sibling;
                  return te(
                    Ct,
                    Ct.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && vl() > $d && (n.flags |= 128, c = !0, Vo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Os(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, _s(n, l), Vo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !mt)
                return xe(n), null;
            } else
              2 * vl() - s.renderingStartTime > $d && u !== 536870912 && (n.flags |= 128, c = !0, Vo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = vl(), n.sibling = null, l = Ct.current, te(Ct, c ? l & 1 | 2 : l & 1), n) : (xe(n), null);
      case 22:
      case 23:
        return Rn(n), qo(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (xe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : xe(n), u = n.updateQueue, u !== null && _s(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && W(Zn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Vn(rl), xe(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(T(156, n.tag));
  }
  function h0(l, n) {
    switch (Ln(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Vn(rl), Yt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return _n(n), null;
      case 13:
        if (Rn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(T(340));
          Uo();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return W(Ct), null;
      case 4:
        return Yt(), null;
      case 10:
        return Vn(n.type), null;
      case 22:
      case 23:
        return Rn(n), qo(), l !== null && W(Zn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Vn(rl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sm(l, n) {
    switch (Ln(n), n.tag) {
      case 3:
        Vn(rl), Yt();
        break;
      case 26:
      case 27:
      case 5:
        _n(n);
        break;
      case 4:
        Yt();
        break;
      case 13:
        Rn(n);
        break;
      case 19:
        W(Ct);
        break;
      case 10:
        Vn(n.type);
        break;
      case 22:
      case 23:
        Rn(n), qo(), l !== null && W(Zn);
        break;
      case 24:
        Vn(rl);
    }
  }
  function Hs(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (g) {
      Mt(n, n.return, g);
    }
  }
  function xi(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, s = n;
              var R = u, N = g;
              try {
                N();
              } catch ($) {
                Mt(
                  s,
                  R,
                  $
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch ($) {
      Mt(n, n.return, $);
    }
  }
  function Qd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        ds(n, u);
      } catch (c) {
        Mt(l, l.return, c);
      }
    }
  }
  function Tm(l, n, u) {
    u.props = _i(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Mt(l, n, c);
    }
  }
  function Xo(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      Mt(l, n, s);
    }
  }
  function On(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Mt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Mt(l, n, s);
        }
      else u.current = null;
  }
  function Zo(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Mt(l, l.return, s);
    }
  }
  function Em(l, n, u) {
    try {
      var c = l.stateNode;
      g0(c, l.type, u, n), c[$l] = n;
    } catch (s) {
      Mt(l, l.return, s);
    }
  }
  function Qv(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Qi(l.type) || l.tag === 4;
  }
  function en(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Qv(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Qi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function qc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = ch));
    else if (c !== 4 && (c === 27 && Qi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (qc(l, n, u), l = l.sibling; l !== null; )
        qc(l, n, u), l = l.sibling;
  }
  function Ld(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Qi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Ld(l, n, u), l = l.sibling; l !== null; )
        Ld(l, n, u), l = l.sibling;
  }
  function Vd(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      qe(n, c, u), n[gl] = l, n[$l] = u;
    } catch (r) {
      Mt(l, l.return, r);
    }
  }
  var tu = !1, Wt = !1, Xd = !1, Zd = typeof WeakSet == "function" ? WeakSet : Set, yl = null;
  function Am(l, n) {
    if (l = l.containerInfo, Zs = Fs, l = Hy(l), es(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, g = -1, R = -1, N = 0, $ = 0, I = l, B = null;
            t: for (; ; ) {
              for (var G; I !== u || s !== 0 && I.nodeType !== 3 || (g = m + s), I !== r || c !== 0 && I.nodeType !== 3 || (R = m + c), I.nodeType === 3 && (m += I.nodeValue.length), (G = I.firstChild) !== null; )
                B = I, I = G;
              for (; ; ) {
                if (I === l) break t;
                if (B === u && ++N === s && (g = m), B === r && ++$ === c && (R = m), (G = I.nextSibling) !== null) break;
                I = B, B = I.parentNode;
              }
              I = G;
            }
            u = g === -1 || R === -1 ? null : { start: g, end: R };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Ks = { focusedElem: l, selectionRange: u }, Fs = !1, yl = n; yl !== null; )
      if (n = yl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, yl = l;
      else
        for (; yl !== null; ) {
          switch (n = yl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ze = _i(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ze,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Ue) {
                  Mt(
                    u,
                    u.return,
                    Ue
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  ks(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ks(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(T(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, yl = l;
            break;
          }
          yl = n.return;
        }
  }
  function Rm(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        au(l, u), c & 4 && Hs(5, u);
        break;
      case 1:
        if (au(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Mt(u, u.return, m);
            }
          else {
            var s = _i(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Mt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && Qd(u), c & 512 && Xo(u, u.return);
        break;
      case 3:
        if (au(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            ds(l, n);
          } catch (m) {
            Mt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Vd(u);
      case 26:
      case 5:
        au(l, u), n === null && c & 4 && Zo(u), c & 512 && Xo(u, u.return);
        break;
      case 12:
        au(l, u);
        break;
      case 13:
        au(l, u), c & 4 && Kd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = y0.bind(
          null,
          u
        ), E0(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || tu, !c) {
          n = n !== null && n.memoizedState !== null || Wt, s = tu;
          var r = Wt;
          tu = c, (Wt = n) && !r ? Ni(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : au(l, u), tu = s, Wt = r;
        }
        break;
      case 30:
        break;
      default:
        au(l, u);
    }
  }
  function Om(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Om(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Yf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var jt = null, Hl = !1;
  function lu(l, n, u) {
    for (u = u.child; u !== null; )
      at(l, n, u), u = u.sibling;
  }
  function at(l, n, u) {
    if (Dl && typeof Dl.onCommitFiberUnmount == "function")
      try {
        Dl.onCommitFiberUnmount(oi, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Wt || On(u, n), lu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Wt || On(u, n);
        var c = jt, s = Hl;
        Qi(u.type) && (jt = u.stateNode, Hl = !1), lu(
          l,
          n,
          u
        ), ga(u.stateNode), jt = c, Hl = s;
        break;
      case 5:
        Wt || On(u, n);
      case 6:
        if (c = jt, s = Hl, jt = null, lu(
          l,
          n,
          u
        ), jt = c, Hl = s, jt !== null)
          if (Hl)
            try {
              (jt.nodeType === 9 ? jt.body : jt.nodeName === "HTML" ? jt.ownerDocument.body : jt).removeChild(u.stateNode);
            } catch (r) {
              Mt(
                u,
                n,
                r
              );
            }
          else
            try {
              jt.removeChild(u.stateNode);
            } catch (r) {
              Mt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        jt !== null && (Hl ? (l = jt, fh(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ru(l)) : fh(jt, u.stateNode));
        break;
      case 4:
        c = jt, s = Hl, jt = u.stateNode.containerInfo, Hl = !0, lu(
          l,
          n,
          u
        ), jt = c, Hl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wt || xi(2, u, n), Wt || xi(4, u, n), lu(
          l,
          n,
          u
        );
        break;
      case 1:
        Wt || (On(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Tm(
          u,
          n,
          c
        )), lu(
          l,
          n,
          u
        );
        break;
      case 21:
        lu(
          l,
          n,
          u
        );
        break;
      case 22:
        Wt = (c = Wt) || u.memoizedState !== null, lu(
          l,
          n,
          u
        ), Wt = c;
        break;
      default:
        lu(
          l,
          n,
          u
        );
    }
  }
  function Kd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ru(l);
      } catch (u) {
        Mt(n, n.return, u);
      }
  }
  function Dm(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Zd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Zd()), n;
      default:
        throw Error(T(435, l.tag));
    }
  }
  function kd(l, n) {
    var u = Dm(l);
    n.forEach(function(c) {
      var s = m0.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Il(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Qi(g.type)) {
                jt = g.stateNode, Hl = !1;
                break e;
              }
              break;
            case 5:
              jt = g.stateNode, Hl = !1;
              break e;
            case 3:
            case 4:
              jt = g.stateNode.containerInfo, Hl = !0;
              break e;
          }
          g = g.return;
        }
        if (jt === null) throw Error(T(160));
        at(r, m, s), jt = null, Hl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        xs(n, l), n = n.sibling;
  }
  var Pl = null;
  function xs(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Il(n, l), El(l), c & 4 && (xi(3, l, l.return), Hs(3, l), xi(5, l, l.return));
        break;
      case 1:
        Il(n, l), El(l), c & 512 && (Wt || u === null || On(u, u.return)), c & 64 && tu && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Pl;
        if (Il(n, l), El(l), c & 512 && (Wt || u === null || On(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ve] || r[gl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), qe(r, c, u), r[gl] = l, sl(r), c = r;
                      break e;
                    case "link":
                      var m = Pm(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), qe(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Pm(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), qe(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(T(468, c));
                  }
                  r[gl] = l, sl(r), c = r;
                }
                l.stateNode = c;
              } else
                ep(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ng(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? ep(
              s,
              l.type,
              l.stateNode
            ) : ng(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Em(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Il(n, l), El(l), c & 512 && (Wt || u === null || On(u, u.return)), u !== null && c & 4 && Em(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Il(n, l), El(l), c & 512 && (Wt || u === null || On(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            po(s, "");
          } catch (G) {
            Mt(l, l.return, G);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Em(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (Xd = !0);
        break;
      case 6:
        if (Il(n, l), El(l), c & 4) {
          if (l.stateNode === null)
            throw Error(T(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (G) {
            Mt(l, l.return, G);
          }
        }
        break;
      case 3:
        if (Zi = null, s = Pl, Pl = sh(n.containerInfo), Il(n, l), Pl = s, El(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ru(n.containerInfo);
          } catch (G) {
            Mt(l, l.return, G);
          }
        Xd && (Xd = !1, Mm(l));
        break;
      case 4:
        c = Pl, Pl = sh(
          l.stateNode.containerInfo
        ), Il(n, l), El(l), Pl = c;
        break;
      case 12:
        Il(n, l), El(l);
        break;
      case 13:
        Il(n, l), El(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (wm = vl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, kd(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var R = u !== null && u.memoizedState !== null, N = tu, $ = Wt;
        if (tu = N || s, Wt = $ || R, Il(n, l), Wt = $, tu = N, El(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || R || tu || Wt || Gt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                R = u = n;
                try {
                  if (r = R.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = R.stateNode;
                    var I = R.memoizedProps.style, B = I != null && I.hasOwnProperty("display") ? I.display : null;
                    g.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (G) {
                  Mt(R, R.return, G);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = s ? "" : R.memoizedProps;
                } catch (G) {
                  Mt(R, R.return, G);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, kd(l, u))));
        break;
      case 19:
        Il(n, l), El(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, kd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Il(n, l), El(l);
    }
  }
  function El(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Qv(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(T(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = en(l);
            Ld(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (po(m, ""), u.flags &= -33);
            var g = en(l);
            Ld(l, g, m);
            break;
          case 3:
          case 4:
            var R = u.stateNode.containerInfo, N = en(l);
            qc(
              l,
              N,
              R
            );
            break;
          default:
            throw Error(T(161));
        }
      } catch ($) {
        Mt(l, l.return, $);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Mm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Mm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function au(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Rm(l, n.alternate, n), n = n.sibling;
  }
  function Gt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xi(4, n, n.return), Gt(n);
          break;
        case 1:
          On(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Tm(
            n,
            n.return,
            u
          ), Gt(n);
          break;
        case 27:
          ga(n.stateNode);
        case 26:
        case 5:
          On(n, n.return), Gt(n);
          break;
        case 22:
          n.memoizedState === null && Gt(n);
          break;
        case 30:
          Gt(n);
          break;
        default:
          Gt(n);
      }
      l = l.sibling;
    }
  }
  function Ni(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ni(
            s,
            r,
            u
          ), Hs(4, r);
          break;
        case 1:
          if (Ni(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (N) {
              Mt(c, c.return, N);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var R = s.shared.hiddenCallbacks;
              if (R !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < R.length; s++)
                  fd(R[s], g);
            } catch (N) {
              Mt(c, c.return, N);
            }
          }
          u && m & 64 && Qd(r), Xo(r, r.return);
          break;
        case 27:
          Vd(r);
        case 26:
        case 5:
          Ni(
            s,
            r,
            u
          ), u && c === null && m & 4 && Zo(r), Xo(r, r.return);
          break;
        case 12:
          Ni(
            s,
            r,
            u
          );
          break;
        case 13:
          Ni(
            s,
            r,
            u
          ), u && m & 4 && Kd(s, r);
          break;
        case 22:
          r.memoizedState === null && Ni(
            s,
            r,
            u
          ), Xo(r, r.return);
          break;
        case 30:
          break;
        default:
          Ni(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function tn(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Xn(u));
  }
  function Jd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Xn(l));
  }
  function xl(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        zm(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function zm(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        xl(
          l,
          n,
          u,
          c
        ), s & 2048 && Hs(9, n);
        break;
      case 1:
        xl(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        xl(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Xn(l)));
        break;
      case 12:
        if (s & 2048) {
          xl(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (R) {
            Mt(n, n.return, R);
          }
        } else
          xl(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        xl(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? xl(
          l,
          n,
          u,
          c
        ) : gt(l, n) : r._visibility & 2 ? xl(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Lu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && tn(m, n);
        break;
      case 24:
        xl(
          l,
          n,
          u,
          c
        ), s & 2048 && Jd(n.alternate, n);
        break;
      default:
        xl(
          l,
          n,
          u,
          c
        );
    }
  }
  function Lu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, m = n, g = u, R = c, N = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Lu(
            r,
            m,
            g,
            R,
            s
          ), Hs(8, m);
          break;
        case 23:
          break;
        case 22:
          var $ = m.stateNode;
          m.memoizedState !== null ? $._visibility & 2 ? Lu(
            r,
            m,
            g,
            R,
            s
          ) : gt(
            r,
            m
          ) : ($._visibility |= 2, Lu(
            r,
            m,
            g,
            R,
            s
          )), s && N & 2048 && tn(
            m.alternate,
            m
          );
          break;
        case 24:
          Lu(
            r,
            m,
            g,
            R,
            s
          ), s && N & 2048 && Jd(m.alternate, m);
          break;
        default:
          Lu(
            r,
            m,
            g,
            R,
            s
          );
      }
      n = n.sibling;
    }
  }
  function gt(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            gt(u, c), s & 2048 && tn(
              c.alternate,
              c
            );
            break;
          case 24:
            gt(u, c), s & 2048 && Jd(c.alternate, c);
            break;
          default:
            gt(u, c);
        }
        n = n.sibling;
      }
  }
  var Bc = 8192;
  function Ft(l) {
    if (l.subtreeFlags & Bc)
      for (l = l.child; l !== null; )
        Lv(l), l = l.sibling;
  }
  function Lv(l) {
    switch (l.tag) {
      case 26:
        Ft(l), l.flags & Bc && l.memoizedState !== null && cg(
          Pl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Ft(l);
        break;
      case 3:
      case 4:
        var n = Pl;
        Pl = sh(l.stateNode.containerInfo), Ft(l), Pl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Bc, Bc = 16777216, Ft(l), Bc = n) : Ft(l));
        break;
      default:
        Ft(l);
    }
  }
  function Um(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Yc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          yl = c, _m(
            c,
            l
          );
        }
      Um(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Cm(l), l = l.sibling;
  }
  function Cm(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Yc(l), l.flags & 2048 && xi(9, l, l.return);
        break;
      case 3:
        Yc(l);
        break;
      case 12:
        Yc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ea(l)) : Yc(l);
        break;
      default:
        Yc(l);
    }
  }
  function ea(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          yl = c, _m(
            c,
            l
          );
        }
      Um(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          xi(8, n, n.return), ea(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ea(n));
          break;
        default:
          ea(n);
      }
      l = l.sibling;
    }
  }
  function _m(l, n) {
    for (; yl !== null; ) {
      var u = yl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          xi(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Xn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, yl = c;
      else
        e: for (u = l; yl !== null; ) {
          c = yl;
          var s = c.sibling, r = c.return;
          if (Om(c), c === u) {
            yl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, yl = s;
            break e;
          }
          yl = r;
        }
    }
  }
  var Hm = {
    getCacheForType: function(l) {
      var n = bl(rl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, Vv = typeof WeakMap == "function" ? WeakMap : Map, At = 0, Ht = null, nt = null, ut = 0, Ot = 0, ma = null, nu = !1, Ko = !1, xm = !1, Vu = 0, It = 0, Xu = 0, jc = 0, uu = 0, ln = 0, ko = 0, Jo = null, pa = null, Nm = !1, wm = 0, $d = 1 / 0, $o = null, wi = null, Nl = 0, iu = null, Wo = null, wl = 0, Wd = 0, Fd = null, qm = null, Fo = 0, Bm = null;
  function Ha() {
    if ((At & 2) !== 0 && ut !== 0)
      return ut & -ut;
    if (C.T !== null) {
      var l = Fa;
      return l !== 0 ? l : Vc();
    }
    return Ur();
  }
  function Ym() {
    ln === 0 && (ln = (ut & 536870912) === 0 || mt ? ue() : 536870912);
    var l = _a.current;
    return l !== null && (l.flags |= 32), ln;
  }
  function xa(l, n, u) {
    (l === Ht && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null) && (cu(l, 0), Zu(
      l,
      ut,
      ln,
      !1
    )), je(l, u), ((At & 2) === 0 || l !== Ht) && (l === Ht && ((At & 2) === 0 && (jc |= u), It === 4 && Zu(
      l,
      ut,
      ln,
      !1
    )), va(l));
  }
  function Io(l, n, u) {
    if ((At & 6) !== 0) throw Error(T(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || v(l, n), s = c ? Gm(l, n) : Id(l, n, !0), r = c;
    do {
      if (s === 0) {
        Ko && !c && Zu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !Xv(u)) {
          s = Id(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var g = l;
              s = Jo;
              var R = g.current.memoizedState.isDehydrated;
              if (R && (cu(g, m).flags |= 256), m = Id(
                g,
                m,
                !1
              ), m !== 2) {
                if (xm && !R) {
                  g.errorRecoveryDisabledLanes |= r, jc |= r, s = 4;
                  break e;
                }
                r = pa, pa = s, r !== null && (pa === null ? pa = r : pa.push.apply(
                  pa,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          cu(l, 0), Zu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(T(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Zu(
                c,
                n,
                ln,
                !nu
              );
              break e;
            case 2:
              pa = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(T(329));
          }
          if ((n & 62914560) === n && (s = wm + 300 - vl(), 10 < s)) {
            if (Zu(
              c,
              n,
              ln,
              !nu
            ), rn(c, 0, !0) !== 0) break e;
            c.timeoutHandle = oh(
              Ns.bind(
                null,
                c,
                u,
                pa,
                $o,
                Nm,
                n,
                ln,
                jc,
                ko,
                nu,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Ns(
            c,
            u,
            pa,
            $o,
            Nm,
            n,
            ln,
            jc,
            ko,
            nu,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    va(l);
  }
  function Ns(l, n, u, c, s, r, m, g, R, N, $, I, B, G) {
    if (l.timeoutHandle = -1, I = n.subtreeFlags, (I & 8192 || (I & 16785408) === 16785408) && (rf = { stylesheets: null, count: 0, unsuspend: ig }, Lv(n), I = lp(), I !== null)) {
      l.cancelPendingCommit = I(
        kv.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          m,
          g,
          R,
          $,
          1,
          B,
          G
        )
      ), Zu(l, r, m, !N);
      return;
    }
    kv(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      g,
      R
    );
  }
  function Xv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!_l(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Zu(l, n, u, c) {
    n &= ~uu, n &= ~jc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ml(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && st(l, u, n);
  }
  function Gc() {
    return (At & 6) === 0 ? (Ys(0), !1) : !0;
  }
  function qi() {
    if (nt !== null) {
      if (Ot === 0)
        var l = nt.return;
      else
        l = nt, Tn = wu = null, hd(l), Cc = null, jo = 0, l = nt;
      for (; l !== null; )
        Sm(l.alternate, l), l = l.return;
      nt = null;
    }
  }
  function cu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, b0(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), qi(), Ht = l, nt = u = bn(l.current, null), ut = n, Ot = 0, ma = null, nu = !1, Ko = v(l, n), xm = !1, ko = ln = uu = jc = Xu = It = 0, pa = Jo = null, Nm = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Ml(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Vu = n, gn(), u;
  }
  function jm(l, n) {
    Ze = null, C.H = zd, n === Di || n === ss ? (n = Vy(), Ot = 3) : n === nd ? (n = Vy(), Ot = 4) : Ot = n === $t ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ma = n, nt === null && (It = 1, zs(
      l,
      za(n, l.current)
    ));
  }
  function Zv() {
    var l = C.H;
    return C.H = zd, l === null ? zd : l;
  }
  function Qc() {
    var l = C.A;
    return C.A = Hm, l;
  }
  function Lc() {
    It = 4, nu || (ut & 4194048) !== ut && _a.current !== null || (Ko = !0), (Xu & 134217727) === 0 && (jc & 134217727) === 0 || Ht === null || Zu(
      Ht,
      ut,
      ln,
      !1
    );
  }
  function Id(l, n, u) {
    var c = At;
    At |= 2;
    var s = Zv(), r = Qc();
    (Ht !== l || ut !== n) && ($o = null, cu(l, n)), n = !1;
    var m = It;
    e: do
      try {
        if (Ot !== 0 && nt !== null) {
          var g = nt, R = ma;
          switch (Ot) {
            case 8:
              qi(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _a.current === null && (n = !0);
              var N = Ot;
              if (Ot = 0, ma = null, Po(l, g, R, N), u && Ko) {
                m = 0;
                break e;
              }
              break;
            default:
              N = Ot, Ot = 0, ma = null, Po(l, g, R, N);
          }
        }
        Pd(), m = It;
        break;
      } catch ($) {
        jm(l, $);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Tn = wu = null, At = c, C.H = s, C.A = r, nt === null && (Ht = null, ut = 0, gn()), m;
  }
  function Pd() {
    for (; nt !== null; ) Lm(nt);
  }
  function Gm(l, n) {
    var u = At;
    At |= 2;
    var c = Zv(), s = Qc();
    Ht !== l || ut !== n ? ($o = null, $d = vl() + 500, cu(l, n)) : Ko = v(
      l,
      n
    );
    e: do
      try {
        if (Ot !== 0 && nt !== null) {
          n = nt;
          var r = ma;
          t: switch (Ot) {
            case 1:
              Ot = 0, ma = null, Po(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (id(r)) {
                Ot = 0, ma = null, Vm(n);
                break;
              }
              n = function() {
                Ot !== 2 && Ot !== 9 || Ht !== l || (Ot = 7), va(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ot = 7;
              break e;
            case 4:
              Ot = 5;
              break e;
            case 7:
              id(r) ? (Ot = 0, ma = null, Vm(n)) : (Ot = 0, ma = null, Po(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (nt.tag) {
                case 26:
                  m = nt.memoizedState;
                case 5:
                case 27:
                  var g = nt;
                  if (!m || tp(m)) {
                    Ot = 0, ma = null;
                    var R = g.sibling;
                    if (R !== null) nt = R;
                    else {
                      var N = g.return;
                      N !== null ? (nt = N, ws(N)) : nt = null;
                    }
                    break t;
                  }
              }
              Ot = 0, ma = null, Po(l, n, r, 5);
              break;
            case 6:
              Ot = 0, ma = null, Po(l, n, r, 6);
              break;
            case 8:
              qi(), It = 6;
              break e;
            default:
              throw Error(T(462));
          }
        }
        Qm();
        break;
      } catch ($) {
        jm(l, $);
      }
    while (!0);
    return Tn = wu = null, C.H = c, C.A = s, At = u, nt !== null ? 0 : (Ht = null, ut = 0, gn(), It);
  }
  function Qm() {
    for (; nt !== null && !wf(); )
      Lm(nt);
  }
  function Lm(l) {
    var n = Gv(l.alternate, l, Vu);
    l.memoizedProps = l.pendingProps, n === null ? ws(l) : nt = n;
  }
  function Vm(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = mm(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ut
        );
        break;
      case 11:
        n = mm(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ut
        );
        break;
      case 5:
        hd(n);
      default:
        Sm(u, n), n = nt = Pe(n, Vu), n = Gv(u, n, Vu);
    }
    l.memoizedProps = l.pendingProps, n === null ? ws(l) : nt = n;
  }
  function Po(l, n, u, c) {
    Tn = wu = null, hd(n), Cc = null, jo = 0;
    var s = n.return;
    try {
      if (Bv(
        l,
        s,
        n,
        u,
        ut
      )) {
        It = 1, zs(
          l,
          za(u, l.current)
        ), nt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw nt = s, r;
      It = 1, zs(
        l,
        za(u, l.current)
      ), nt = null;
      return;
    }
    n.flags & 32768 ? (mt || c === 1 ? l = !0 : Ko || (ut & 536870912) !== 0 ? l = !1 : (nu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = _a.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Kv(n, l)) : ws(n);
  }
  function ws(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        Kv(
          n,
          nu
        );
        return;
      }
      l = n.return;
      var u = bm(
        n.alternate,
        n,
        Vu
      );
      if (u !== null) {
        nt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        nt = n;
        return;
      }
      nt = n = l;
    } while (n !== null);
    It === 0 && (It = 5);
  }
  function Kv(l, n) {
    do {
      var u = h0(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, nt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        nt = l;
        return;
      }
      nt = l = u;
    } while (l !== null);
    It = 6, nt = null;
  }
  function kv(l, n, u, c, s, r, m, g, R) {
    l.cancelPendingCommit = null;
    do
      th();
    while (Nl !== 0);
    if ((At & 6) !== 0) throw Error(T(327));
    if (n !== null) {
      if (n === l.current) throw Error(T(177));
      if (r = n.lanes | n.childLanes, r |= Gn, Xe(
        l,
        u,
        r,
        m,
        g,
        R
      ), l === Ht && (nt = Ht = null, ut = 0), Wo = n, iu = l, wl = u, Wd = r, Fd = s, qm = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, p0(xn, function() {
        return Xm(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = C.T, C.T = null, s = P.p, P.p = 2, m = At, At |= 4;
        try {
          Am(l, n, u);
        } finally {
          At = m, P.p = s, C.T = c;
        }
      }
      Nl = 1, Jv(), qs(), eh();
    }
  }
  function Jv() {
    if (Nl === 1) {
      Nl = 0;
      var l = iu, n = Wo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = C.T, C.T = null;
        var c = P.p;
        P.p = 2;
        var s = At;
        At |= 4;
        try {
          xs(n, l);
          var r = Ks, m = Hy(l.containerInfo), g = r.focusedElem, R = r.selectionRange;
          if (m !== g && g && g.ownerDocument && Pf(
            g.ownerDocument.documentElement,
            g
          )) {
            if (R !== null && es(g)) {
              var N = R.start, $ = R.end;
              if ($ === void 0 && ($ = N), "selectionStart" in g)
                g.selectionStart = N, g.selectionEnd = Math.min(
                  $,
                  g.value.length
                );
              else {
                var I = g.ownerDocument || document, B = I && I.defaultView || window;
                if (B.getSelection) {
                  var G = B.getSelection(), ze = g.textContent.length, Ue = Math.min(R.start, ze), bt = R.end === void 0 ? Ue : Math.min(R.end, ze);
                  !G.extend && Ue > bt && (m = bt, bt = Ue, Ue = m);
                  var H = wt(
                    g,
                    Ue
                  ), U = wt(
                    g,
                    bt
                  );
                  if (H && U && (G.rangeCount !== 1 || G.anchorNode !== H.node || G.anchorOffset !== H.offset || G.focusNode !== U.node || G.focusOffset !== U.offset)) {
                    var x = I.createRange();
                    x.setStart(H.node, H.offset), G.removeAllRanges(), Ue > bt ? (G.addRange(x), G.extend(U.node, U.offset)) : (x.setEnd(U.node, U.offset), G.addRange(x));
                  }
                }
              }
            }
            for (I = [], G = g; G = G.parentNode; )
              G.nodeType === 1 && I.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < I.length; g++) {
              var F = I[g];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          Fs = !!Zs, Ks = Zs = null;
        } finally {
          At = s, P.p = c, C.T = u;
        }
      }
      l.current = n, Nl = 2;
    }
  }
  function qs() {
    if (Nl === 2) {
      Nl = 0;
      var l = iu, n = Wo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = C.T, C.T = null;
        var c = P.p;
        P.p = 2;
        var s = At;
        At |= 4;
        try {
          Rm(l, n.alternate, n);
        } finally {
          At = s, P.p = c, C.T = u;
        }
      }
      Nl = 3;
    }
  }
  function eh() {
    if (Nl === 4 || Nl === 3) {
      Nl = 0, ll();
      var l = iu, n = Wo, u = wl, c = qm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Nl = 5 : (Nl = 0, Wo = iu = null, $v(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (wi = null), dn(u), n = n.stateNode, Dl && typeof Dl.onCommitFiberRoot == "function")
        try {
          Dl.onCommitFiberRoot(
            oi,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = C.T, s = P.p, P.p = 2, C.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          C.T = n, P.p = s;
        }
      }
      (wl & 3) !== 0 && th(), va(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === Bm ? Fo++ : (Fo = 0, Bm = l) : Fo = 0, Ys(0);
    }
  }
  function $v(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Xn(n)));
  }
  function th(l) {
    return Jv(), qs(), eh(), Xm();
  }
  function Xm() {
    if (Nl !== 5) return !1;
    var l = iu, n = Wd;
    Wd = 0;
    var u = dn(wl), c = C.T, s = P.p;
    try {
      P.p = 32 > u ? 32 : u, C.T = null, u = Fd, Fd = null;
      var r = iu, m = wl;
      if (Nl = 0, Wo = iu = null, wl = 0, (At & 6) !== 0) throw Error(T(331));
      var g = At;
      if (At |= 4, Cm(r.current), zm(
        r,
        r.current,
        m,
        u
      ), At = g, Ys(0, !1), Dl && typeof Dl.onPostCommitFiberRoot == "function")
        try {
          Dl.onPostCommitFiberRoot(oi, r);
        } catch {
        }
      return !0;
    } finally {
      P.p = s, C.T = c, $v(l, n);
    }
  }
  function Zm(l, n, u) {
    n = za(u, n), n = hm(l.stateNode, n, 2), l = kn(l, n, 2), l !== null && (je(l, 2), va(l));
  }
  function Mt(l, n, u) {
    if (l.tag === 3)
      Zm(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Zm(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (wi === null || !wi.has(c))) {
            l = za(u, l), u = ym(2), c = kn(n, u, 2), c !== null && (ya(
              u,
              c,
              n,
              l
            ), je(c, 2), va(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function lh(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Vv();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (xm = !0, s.add(u), l = Km.bind(null, l, n, u), n.then(l, l));
  }
  function Km(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ht === l && (ut & u) === u && (It === 4 || It === 3 && (ut & 62914560) === ut && 300 > vl() - wm ? (At & 2) === 0 && cu(l, 0) : uu |= u, ko === ut && (ko = 0)), va(l);
  }
  function km(l, n) {
    n === 0 && (n = se()), l = Qn(l, n), l !== null && (je(l, n), va(l));
  }
  function y0(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), km(l, u);
  }
  function m0(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(T(314));
    }
    c !== null && c.delete(n), km(l, u);
  }
  function p0(l, n) {
    return Hn(l, n);
  }
  var ah = null, Bi = null, Bs = !1, ef = !1, nh = !1, Yi = 0;
  function va(l) {
    l !== Bi && l.next === null && (Bi === null ? ah = Bi = l : Bi = Bi.next = l), ef = !0, Bs || (Bs = !0, Iv());
  }
  function Ys(l, n) {
    if (!nh && ef) {
      nh = !0;
      do
        for (var u = !1, c = ah; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Ml(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Gs(c, r));
          } else
            r = ut, r = rn(
              c,
              c === Ht ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || v(c, r) || (u = !0, Gs(c, r));
          c = c.next;
        }
      while (u);
      nh = !1;
    }
  }
  function Wv() {
    js();
  }
  function js() {
    ef = Bs = !1;
    var l = 0;
    Yi !== 0 && (Ju() && (l = Yi), Yi = 0);
    for (var n = vl(), u = null, c = ah; c !== null; ) {
      var s = c.next, r = Jm(c, n);
      r === 0 ? (c.next = null, u === null ? ah = s : u.next = s, s === null && (Bi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (ef = !0)), c = s;
    }
    Ys(l);
  }
  function Jm(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ml(r), g = 1 << m, R = s[m];
      R === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = _(g, n)) : R <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Ht, u = ut, u = rn(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && fo(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || v(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && fo(c), dn(u)) {
        case 2:
        case 8:
          u = Fe;
          break;
        case 32:
          u = xn;
          break;
        case 268435456:
          u = Ou;
          break;
        default:
          u = xn;
      }
      return c = Fv.bind(null, l), u = Hn(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && fo(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Fv(l, n) {
    if (Nl !== 0 && Nl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (th() && l.callbackNode !== u)
      return null;
    var c = ut;
    return c = rn(
      l,
      l === Ht ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Io(l, c, n), Jm(l, vl()), l.callbackNode != null && l.callbackNode === u ? Fv.bind(null, l) : null);
  }
  function Gs(l, n) {
    if (th()) return null;
    Io(l, n, !0);
  }
  function Iv() {
    S0(function() {
      (At & 6) !== 0 ? Hn(
        Mr,
        Wv
      ) : js();
    });
  }
  function Vc() {
    return Yi === 0 && (Yi = ue()), Yi;
  }
  function uh(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Zf("" + l);
  }
  function Qs(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Pv(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = uh(
        (s[$l] || null).action
      ), m = c.submitter;
      m && (n = (n = m[$l] || null) ? uh(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new Qr(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Yi !== 0) {
                  var R = m ? Qs(s, m) : new FormData(s);
                  Md(
                    u,
                    {
                      pending: !0,
                      data: R,
                      method: s.method,
                      action: r
                    },
                    null,
                    R
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), R = m ? Qs(s, m) : new FormData(s), Md(
                  u,
                  {
                    pending: !0,
                    data: R,
                    method: s.method,
                    action: r
                  },
                  r,
                  R
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Pt = 0; Pt < Eo.length; Pt++) {
    var Ls = Eo[Pt], v0 = Ls.toLowerCase(), Ie = Ls[0].toUpperCase() + Ls.slice(1);
    Ka(
      v0,
      "on" + Ie
    );
  }
  Ka(Ev, "onAnimationEnd"), Ka(xy, "onAnimationIteration"), Ka(Av, "onAnimationStart"), Ka("dblclick", "onDoubleClick"), Ka("focusin", "onFocus"), Ka("focusout", "onBlur"), Ka(Ny, "onTransitionRun"), Ka(Wr, "onTransitionStart"), Ka(Rv, "onTransitionCancel"), Ka(wy, "onTransitionEnd"), si("onMouseEnter", ["mouseout", "mouseover"]), si("onMouseLeave", ["mouseout", "mouseover"]), si("onPointerEnter", ["pointerout", "pointerover"]), si("onPointerLeave", ["pointerout", "pointerover"]), fi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), fi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), fi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), fi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), fi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), fi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Vs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ji = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vs)
  );
  function Xc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], R = g.instance, N = g.currentTarget;
            if (g = g.listener, R !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = N;
            try {
              r(s);
            } catch ($) {
              Ds($);
            }
            s.currentTarget = null, r = R;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], R = g.instance, N = g.currentTarget, g = g.listener, R !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = N;
            try {
              r(s);
            } catch ($) {
              Ds($);
            }
            s.currentTarget = null, r = R;
          }
      }
    }
  }
  function Ke(l, n) {
    var u = n[Cr];
    u === void 0 && (u = n[Cr] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (ih(n, l, 2, !1), u.add(c));
  }
  function tf(l, n, u) {
    var c = 0;
    n && (c |= 4), ih(
      u,
      l,
      c,
      n
    );
  }
  var lf = "_reactListening" + Math.random().toString(36).slice(2);
  function $m(l) {
    if (!l[lf]) {
      l[lf] = !0, Gf.forEach(function(u) {
        u !== "selectionchange" && (ji.has(u) || tf(u, !1, l), tf(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[lf] || (n[lf] = !0, tf("selectionchange", !1, n));
    }
  }
  function ih(l, n, u, c) {
    switch (sp(n)) {
      case 2:
        var s = og;
        break;
      case 8:
        s = fg;
        break;
      default:
        s = op;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Yr || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function an(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var g = c.stateNode.containerInfo;
          if (g === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var R = m.tag;
              if ((R === 3 || R === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = Ul(g), m === null) return;
            if (R = m.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              c = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    bo(function() {
      var N = r, $ = Br(u), I = [];
      e: {
        var B = qy.get(l);
        if (B !== void 0) {
          var G = Qr, ze = l;
          switch (l) {
            case "keypress":
              if (Cl(u) === 0) break e;
            case "keydown":
            case "keyup":
              G = hn;
              break;
            case "focusin":
              ze = "focus", G = vy;
              break;
            case "focusout":
              ze = "blur", G = vy;
              break;
            case "beforeblur":
            case "afterblur":
              G = vy;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = py;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = hv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Sy;
              break;
            case Ev:
            case xy:
            case Av:
              G = f0;
              break;
            case wy:
              G = gv;
              break;
            case "scroll":
            case "scrollend":
              G = rv;
              break;
            case "wheel":
              G = hc;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Jf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = $f;
              break;
            case "toggle":
            case "beforetoggle":
              G = bv;
          }
          var Ue = (n & 4) !== 0, bt = !Ue && (l === "scroll" || l === "scrollend"), H = Ue ? B !== null ? B + "Capture" : null : B;
          Ue = [];
          for (var U = N, x; U !== null; ) {
            var F = U;
            if (x = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || x === null || H === null || (F = fc(U, H), F != null && Ue.push(
              Ku(U, F, x)
            )), bt) break;
            U = U.return;
          }
          0 < Ue.length && (B = new G(
            B,
            ze,
            null,
            u,
            $
          ), I.push({ event: B, listeners: Ue }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (B = l === "mouseover" || l === "pointerover", G = l === "mouseout" || l === "pointerout", B && u !== oc && (ze = u.relatedTarget || u.fromElement) && (Ul(ze) || ze[yo]))
            break e;
          if ((G || B) && (B = $.window === $ ? $ : (B = $.ownerDocument) ? B.defaultView || B.parentWindow : window, G ? (ze = u.relatedTarget || u.toElement, G = N, ze = ze ? Ul(ze) : null, ze !== null && (bt = ie(ze), Ue = ze.tag, ze !== bt || Ue !== 5 && Ue !== 27 && Ue !== 6) && (ze = null)) : (G = null, ze = N), G !== ze)) {
            if (Ue = py, F = "onMouseLeave", H = "onMouseEnter", U = "mouse", (l === "pointerout" || l === "pointerover") && (Ue = $f, F = "onPointerLeave", H = "onPointerEnter", U = "pointer"), bt = G == null ? B : jf(G), x = ze == null ? B : jf(ze), B = new Ue(
              F,
              U + "leave",
              G,
              u,
              $
            ), B.target = bt, B.relatedTarget = x, F = null, Ul($) === N && (Ue = new Ue(
              H,
              U + "enter",
              ze,
              u,
              $
            ), Ue.target = x, Ue.relatedTarget = bt, F = Ue), bt = F, G && ze)
              t: {
                for (Ue = G, H = ze, U = 0, x = Ue; x; x = Gi(x))
                  U++;
                for (x = 0, F = H; F; F = Gi(F))
                  x++;
                for (; 0 < U - x; )
                  Ue = Gi(Ue), U--;
                for (; 0 < x - U; )
                  H = Gi(H), x--;
                for (; U--; ) {
                  if (Ue === H || H !== null && Ue === H.alternate)
                    break t;
                  Ue = Gi(Ue), H = Gi(H);
                }
                Ue = null;
              }
            else Ue = null;
            G !== null && Xs(
              I,
              B,
              G,
              Ue,
              !1
            ), ze !== null && bt !== null && Xs(
              I,
              bt,
              ze,
              Ue,
              !0
            );
          }
        }
        e: {
          if (B = N ? jf(N) : window, G = B.nodeName && B.nodeName.toLowerCase(), G === "select" || G === "input" && B.type === "file")
            var me = Dy;
          else if (Kr(B))
            if (My)
              me = Cy;
            else {
              me = pi;
              var et = Jr;
            }
          else
            G = B.nodeName, !G || G.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? N && cc(N.elementType) && (me = Dy) : me = _u;
          if (me && (me = me(l, N))) {
            kr(
              I,
              me,
              u,
              $
            );
            break e;
          }
          et && et(l, B, N), l === "focusout" && N && B.type === "number" && N.memoizedProps.value != null && Vf(B, "number", B.value);
        }
        switch (et = N ? jf(N) : window, l) {
          case "focusin":
            (Kr(et) || et.contentEditable === "true") && (Yn = et, pn = N, bi = null);
            break;
          case "focusout":
            bi = pn = Yn = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gc = !1, $r(I, u, $);
            break;
          case "selectionchange":
            if (vc) break;
          case "keydown":
          case "keyup":
            $r(I, u, $);
        }
        var De;
        if (Wf)
          e: {
            switch (l) {
              case "compositionstart":
                var Ne = "onCompositionStart";
                break e;
              case "compositionend":
                Ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ne = "onCompositionUpdate";
                break e;
            }
            Ne = void 0;
          }
        else
          mi ? If(l, u) && (Ne = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (qn && u.locale !== "ko" && (mi || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && mi && (De = yy()) : (Uu = $, So = "value" in Uu ? Uu.value : Uu.textContent, mi = !0)), et = af(N, Ne), 0 < et.length && (Ne = new gy(
          Ne,
          l,
          null,
          u,
          $
        ), I.push({ event: Ne, listeners: et }), De ? Ne.data = De : (De = yi(u), De !== null && (Ne.data = De)))), (De = Ey ? Ry(l, u) : yc(l, u)) && (Ne = af(N, "onBeforeInput"), 0 < Ne.length && (et = new gy(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          $
        ), I.push({
          event: et,
          listeners: Ne
        }), et.data = De)), Pv(
          I,
          l,
          N,
          u,
          $
        );
      }
      Xc(I, n);
    });
  }
  function Ku(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function af(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = fc(l, u), s != null && c.unshift(
        Ku(l, s, r)
      ), s = fc(l, n), s != null && c.push(
        Ku(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Gi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Xs(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, R = g.alternate, N = g.stateNode;
      if (g = g.tag, R !== null && R === c) break;
      g !== 5 && g !== 26 && g !== 27 || N === null || (R = N, s ? (N = fc(u, r), N != null && m.unshift(
        Ku(u, N, R)
      )) : s || (N = fc(u, r), N != null && m.push(
        Ku(u, N, R)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Na = /\r\n?/g, Wm = /\u0000|\uFFFD/g;
  function eg(l) {
    return (typeof l == "string" ? l : "" + l).replace(Na, `
`).replace(Wm, "");
  }
  function Fm(l, n) {
    return n = eg(n), eg(l) === n;
  }
  function ch() {
  }
  function Ge(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || po(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && po(l, "" + c);
        break;
      case "className":
        Qf(l, "class", c);
        break;
      case "tabIndex":
        Qf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qf(l, u, c);
        break;
      case "style":
        Xf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          Qf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Zf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ge(l, n, "name", s.name, s, null), Ge(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ge(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ge(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ge(l, n, "encType", s.encType, s, null), Ge(l, n, "method", s.method, s, null), Ge(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Zf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = ch);
        break;
      case "onScroll":
        c != null && Ke("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ke("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(T(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(T(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Zf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ke("beforetoggle", l), Ke("toggle", l), Mu(l, "popover", c);
        break;
      case "xlinkActuate":
        Nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Nn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Nn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Nn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Mu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = i0.get(u) || u, Mu(l, u, c));
    }
  }
  function Q(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Xf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(T(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(T(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? po(l, c) : (typeof c == "number" || typeof c == "bigint") && po(l, "" + c);
        break;
      case "onScroll":
        c != null && Ke("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ke("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = ch);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Da.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[$l] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Mu(l, u, c);
          }
    }
  }
  function qe(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ke("error", l), Ke("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(T(137, n));
                default:
                  Ge(l, n, r, m, u, null);
              }
          }
        s && Ge(l, n, "srcSet", u.srcSet, u, null), c && Ge(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ke("invalid", l);
        var g = r = m = s = null, R = null, N = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var $ = u[c];
            if ($ != null)
              switch (c) {
                case "name":
                  s = $;
                  break;
                case "type":
                  m = $;
                  break;
                case "checked":
                  R = $;
                  break;
                case "defaultChecked":
                  N = $;
                  break;
                case "value":
                  r = $;
                  break;
                case "defaultValue":
                  g = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null)
                    throw Error(T(137, n));
                  break;
                default:
                  Ge(l, n, c, $, u, null);
              }
          }
        wr(
          l,
          r,
          g,
          R,
          N,
          m,
          s,
          !1
        ), di(l);
        return;
      case "select":
        Ke("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (g = u[s], g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                c = g;
              default:
                Ge(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? ic(l, !!c, n, !1) : u != null && ic(l, !!c, u, !0);
        return;
      case "textarea":
        Ke("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(T(91));
                break;
              default:
                Ge(l, n, m, g, u, null);
            }
        dy(l, c, s, r), di(l);
        return;
      case "option":
        for (R in u)
          if (u.hasOwnProperty(R) && (c = u[R], c != null))
            switch (R) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ge(l, n, R, c, u, null);
            }
        return;
      case "dialog":
        Ke("beforetoggle", l), Ke("toggle", l), Ke("cancel", l), Ke("close", l);
        break;
      case "iframe":
      case "object":
        Ke("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Vs.length; c++)
          Ke(Vs[c], l);
        break;
      case "image":
        Ke("error", l), Ke("load", l);
        break;
      case "details":
        Ke("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ke("error", l), Ke("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in u)
          if (u.hasOwnProperty(N) && (c = u[N], c != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(T(137, n));
              default:
                Ge(l, n, N, c, u, null);
            }
        return;
      default:
        if (cc(n)) {
          for ($ in u)
            u.hasOwnProperty($) && (c = u[$], c !== void 0 && Q(
              l,
              n,
              $,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (c = u[g], c != null && Ge(l, n, g, c, u, null));
  }
  function g0(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, g = null, R = null, N = null, $ = null;
        for (G in u) {
          var I = u[G];
          if (u.hasOwnProperty(G) && I != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = I;
              default:
                c.hasOwnProperty(G) || Ge(l, n, G, null, c, I);
            }
        }
        for (var B in c) {
          var G = c[B];
          if (I = u[B], c.hasOwnProperty(B) && (G != null || I != null))
            switch (B) {
              case "type":
                r = G;
                break;
              case "name":
                s = G;
                break;
              case "checked":
                N = G;
                break;
              case "defaultChecked":
                $ = G;
                break;
              case "value":
                m = G;
                break;
              case "defaultValue":
                g = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(T(137, n));
                break;
              default:
                G !== I && Ge(
                  l,
                  n,
                  B,
                  G,
                  c,
                  I
                );
            }
        }
        Nr(
          l,
          m,
          g,
          R,
          N,
          $,
          r,
          s
        );
        return;
      case "select":
        G = m = g = B = null;
        for (r in u)
          if (R = u[r], u.hasOwnProperty(r) && R != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                G = R;
              default:
                c.hasOwnProperty(r) || Ge(
                  l,
                  n,
                  r,
                  null,
                  c,
                  R
                );
            }
        for (s in c)
          if (r = c[s], R = u[s], c.hasOwnProperty(s) && (r != null || R != null))
            switch (s) {
              case "value":
                B = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== R && Ge(
                  l,
                  n,
                  s,
                  r,
                  c,
                  R
                );
            }
        n = g, u = m, c = G, B != null ? ic(l, !!u, B, !1) : !!c != !!u && (n != null ? ic(l, !!u, n, !0) : ic(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        G = B = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ge(l, n, g, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                B = s;
                break;
              case "defaultValue":
                G = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(T(91));
                break;
              default:
                s !== r && Ge(l, n, m, s, c, r);
            }
        ry(l, B, G);
        return;
      case "option":
        for (var ze in u)
          if (B = u[ze], u.hasOwnProperty(ze) && B != null && !c.hasOwnProperty(ze))
            switch (ze) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ge(
                  l,
                  n,
                  ze,
                  null,
                  c,
                  B
                );
            }
        for (R in c)
          if (B = c[R], G = u[R], c.hasOwnProperty(R) && B !== G && (B != null || G != null))
            switch (R) {
              case "selected":
                l.selected = B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Ge(
                  l,
                  n,
                  R,
                  B,
                  c,
                  G
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ue in u)
          B = u[Ue], u.hasOwnProperty(Ue) && B != null && !c.hasOwnProperty(Ue) && Ge(l, n, Ue, null, c, B);
        for (N in c)
          if (B = c[N], G = u[N], c.hasOwnProperty(N) && B !== G && (B != null || G != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(T(137, n));
                break;
              default:
                Ge(
                  l,
                  n,
                  N,
                  B,
                  c,
                  G
                );
            }
        return;
      default:
        if (cc(n)) {
          for (var bt in u)
            B = u[bt], u.hasOwnProperty(bt) && B !== void 0 && !c.hasOwnProperty(bt) && Q(
              l,
              n,
              bt,
              void 0,
              c,
              B
            );
          for ($ in c)
            B = c[$], G = u[$], !c.hasOwnProperty($) || B === G || B === void 0 && G === void 0 || Q(
              l,
              n,
              $,
              B,
              c,
              G
            );
          return;
        }
    }
    for (var H in u)
      B = u[H], u.hasOwnProperty(H) && B != null && !c.hasOwnProperty(H) && Ge(l, n, H, null, c, B);
    for (I in c)
      B = c[I], G = u[I], !c.hasOwnProperty(I) || B === G || B == null && G == null || Ge(l, n, I, B, c, G);
  }
  var Zs = null, Ks = null;
  function nn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function ku(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function nf(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function ou(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var uf = null;
  function Ju() {
    var l = window.event;
    return l && l.type === "popstate" ? l === uf ? !1 : (uf = l, !0) : (uf = null, !1);
  }
  var oh = typeof setTimeout == "function" ? setTimeout : void 0, b0 = typeof clearTimeout == "function" ? clearTimeout : void 0, tg = typeof Promise == "function" ? Promise : void 0, S0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof tg < "u" ? function(l) {
    return tg.resolve(null).then(l).catch(fu);
  } : oh;
  function fu(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Qi(l) {
    return l === "head";
  }
  function fh(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var m = l.ownerDocument;
            if (u & 1 && ga(m.documentElement), u & 2 && ga(m.body), u & 4)
              for (u = m.head, ga(u), m = u.firstChild; m; ) {
                var g = m.nextSibling, R = m.nodeName;
                m[ve] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && m.rel.toLowerCase() === "stylesheet" || u.removeChild(m), m = g;
              }
          }
          if (s === 0) {
            l.removeChild(r), ru(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    ru(n);
  }
  function ks(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ks(u), Yf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function cf(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ve])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Dn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function T0(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Dn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Js(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function E0(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Dn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var Li = null;
  function ql(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ye(l, n, u) {
    switch (n = nn(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(T(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(T(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(T(454));
        return l;
      default:
        throw Error(T(451));
    }
  }
  function ga(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Yf(l);
  }
  var el = /* @__PURE__ */ new Map(), Zl = /* @__PURE__ */ new Set();
  function sh(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var $u = P.d;
  P.d = {
    f: rh,
    r: dh,
    D: Wu,
    C: hh,
    L: Vi,
    m: Kl,
    X: Xi,
    S: ba,
    M: Im
  };
  function rh() {
    var l = $u.f(), n = Gc();
    return l || n;
  }
  function dh(l) {
    var n = lc(l);
    n !== null && n.tag === 5 && n.type === "form" ? Yo(n) : $u.r(l);
  }
  var Bl = typeof document > "u" ? null : document;
  function Mn(l, n, u) {
    var c = Bl;
    if (c && typeof n == "string" && n) {
      var s = Xa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Zl.has(s) || (Zl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), qe(n, "link", l), sl(n), c.head.appendChild(n)));
    }
  }
  function Wu(l) {
    $u.D(l), Mn("dns-prefetch", l, null);
  }
  function hh(l, n) {
    $u.C(l, n), Mn("preconnect", l, n);
  }
  function Vi(l, n, u) {
    $u.L(l, n, u);
    var c = Bl;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Xa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Xa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Xa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Xa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = of(l);
          break;
        case "script":
          r = un(l);
      }
      el.has(r) || (l = ce(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), el.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(ff(r)) || n === "script" && c.querySelector(Zc(r)) || (n = c.createElement("link"), qe(n, "link", l), sl(n), c.head.appendChild(n)));
    }
  }
  function Kl(l, n) {
    $u.m(l, n);
    var u = Bl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Xa(c) + '"][href="' + Xa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = un(l);
      }
      if (!el.has(r) && (l = ce({ rel: "modulepreload", href: l }, n), el.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Zc(r)))
              return;
        }
        c = u.createElement("link"), qe(c, "link", l), sl(c), u.head.appendChild(c);
      }
    }
  }
  function ba(l, n, u) {
    $u.S(l, n, u);
    var c = Bl;
    if (c && l) {
      var s = Du(c).hoistableStyles, r = of(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          ff(r)
        ))
          g.loading = 5;
        else {
          l = ce(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = el.get(r)) && mh(l, u);
          var R = m = c.createElement("link");
          sl(R), qe(R, "link", l), R._p = new Promise(function(N, $) {
            R.onload = N, R.onerror = $;
          }), R.addEventListener("load", function() {
            g.loading |= 1;
          }), R.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, yh(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, s.set(r, m);
      }
    }
  }
  function Xi(l, n) {
    $u.X(l, n);
    var u = Bl;
    if (u && l) {
      var c = Du(u).hoistableScripts, s = un(l), r = c.get(s);
      r || (r = u.querySelector(Zc(s)), r || (l = ce({ src: l, async: !0 }, n), (n = el.get(s)) && ph(l, n), r = u.createElement("script"), sl(r), qe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Im(l, n) {
    $u.M(l, n);
    var u = Bl;
    if (u && l) {
      var c = Du(u).hoistableScripts, s = un(l), r = c.get(s);
      r || (r = u.querySelector(Zc(s)), r || (l = ce({ src: l, async: !0, type: "module" }, n), (n = el.get(s)) && ph(l, n), r = u.createElement("script"), sl(r), qe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function lg(l, n, u, c) {
    var s = (s = he.current) ? sh(s) : null;
    if (!s) throw Error(T(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = of(u.href), u = Du(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = of(u.href);
          var r = Du(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            ff(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), el.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, el.set(l, u), r || ag(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(T(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(T(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = un(u), u = Du(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(T(444, l));
    }
  }
  function of(l) {
    return 'href="' + Xa(l) + '"';
  }
  function ff(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function sf(l) {
    return ce({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function ag(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), qe(n, "link", u), sl(n), l.head.appendChild(n));
  }
  function un(l) {
    return '[src="' + Xa(l) + '"]';
  }
  function Zc(l) {
    return "script[async]" + l;
  }
  function ng(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Xa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, sl(c), c;
          var s = ce({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), sl(c), qe(c, "style", s), yh(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = of(u.href);
          var r = l.querySelector(
            ff(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, sl(r), r;
          c = sf(u), (s = el.get(s)) && mh(c, s), r = (l.ownerDocument || l).createElement("link"), sl(r);
          var m = r;
          return m._p = new Promise(function(g, R) {
            m.onload = g, m.onerror = R;
          }), qe(r, "link", c), n.state.loading |= 4, yh(r, u.precedence, l), n.instance = r;
        case "script":
          return r = un(u.src), (s = l.querySelector(
            Zc(r)
          )) ? (n.instance = s, sl(s), s) : (c = u, (s = el.get(r)) && (c = ce({}, u), ph(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), sl(s), qe(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(T(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, yh(c, u.precedence, l));
    return n.instance;
  }
  function yh(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function mh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function ph(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Zi = null;
  function Pm(l, n, u) {
    if (Zi === null) {
      var c = /* @__PURE__ */ new Map(), s = Zi = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Zi, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ve] || r[gl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function ep(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function ug(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function tp(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var rf = null;
  function ig() {
  }
  function cg(l, n, u) {
    if (rf === null) throw Error(T(475));
    var c = rf;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = of(u.href), r = l.querySelector(
          ff(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = $s.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, sl(r);
          return;
        }
        r = l.ownerDocument || l, u = sf(u), (s = el.get(s)) && mh(u, s), r = r.createElement("link"), sl(r);
        var m = r;
        m._p = new Promise(function(g, R) {
          m.onload = g, m.onerror = R;
        }), qe(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = $s.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function lp() {
    if (rf === null) throw Error(T(475));
    var l = rf;
    return l.stylesheets && l.count === 0 && Ws(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Ws(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function $s() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ws(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var df = null;
  function Ws(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, df = /* @__PURE__ */ new Map(), n.forEach(wa, l), df = null, $s.call(l));
  }
  function wa(l, n) {
    if (!(n.state.loading & 4)) {
      var u = df.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), df.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = $s.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Sa = {
    $$typeof: _e,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0
  };
  function A0(l, n, u, c, s, r, m, g) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Se(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Se(0), this.hiddenUpdates = Se(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ap(l, n, u, c, s, r, m, g, R, N, $, I) {
    return l = new A0(
      l,
      n,
      u,
      m,
      g,
      R,
      N,
      I
    ), n = 1, r === !0 && (n |= 24), r = fa(3, null, null, n), l.current = r, r.stateNode = l, n = xo(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, cd(r), l;
  }
  function np(l) {
    return l ? (l = Oo, l) : Oo;
  }
  function up(l, n, u, c, s, r) {
    s = np(s), c.context === null ? c.context = s : c.pendingContext = s, c = ra(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = kn(l, c, n), u !== null && (xa(u, l, n), Rc(u, l, n));
  }
  function ip(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function vh(l, n) {
    ip(l, n), (l = l.alternate) && ip(l, n);
  }
  function cp(l) {
    if (l.tag === 13) {
      var n = Qn(l, 67108864);
      n !== null && xa(n, l, 67108864), vh(l, 67108864);
    }
  }
  var Fs = !0;
  function og(l, n, u, c) {
    var s = C.T;
    C.T = null;
    var r = P.p;
    try {
      P.p = 2, op(l, n, u, c);
    } finally {
      P.p = r, C.T = s;
    }
  }
  function fg(l, n, u, c) {
    var s = C.T;
    C.T = null;
    var r = P.p;
    try {
      P.p = 8, op(l, n, u, c);
    } finally {
      P.p = r, C.T = s;
    }
  }
  function op(l, n, u, c) {
    if (Fs) {
      var s = gh(c);
      if (s === null)
        an(
          l,
          n,
          c,
          bh,
          u
        ), Kc(l, c);
      else if (rg(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Kc(l, c), n & 4 && -1 < sg.indexOf(l)) {
        for (; s !== null; ) {
          var r = lc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = zl(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var R = 1 << 31 - Ml(m);
                      g.entanglements[1] |= R, m &= ~R;
                    }
                    va(r), (At & 6) === 0 && ($d = vl() + 500, Ys(0));
                  }
                }
                break;
              case 13:
                g = Qn(r, 2), g !== null && xa(g, r, 2), Gc(), vh(r, 2);
            }
          if (r = gh(c), r === null && an(
            l,
            n,
            c,
            bh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        an(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function gh(l) {
    return l = Br(l), fp(l);
  }
  var bh = null;
  function fp(l) {
    if (bh = null, l = Ul(l), l !== null) {
      var n = ie(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Oe(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return bh = l, null;
  }
  function sp(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ci()) {
          case Mr:
            return 2;
          case Fe:
            return 8;
          case xn:
          case so:
            return 32;
          case Ou:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, su = null, Fu = null, Iu = null, Is = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map(), Ki = [], sg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Kc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        su = null;
        break;
      case "dragenter":
      case "dragleave":
        Fu = null;
        break;
      case "mouseover":
      case "mouseout":
        Iu = null;
        break;
      case "pointerover":
      case "pointerout":
        Is.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ps.delete(n.pointerId);
    }
  }
  function kc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = lc(n), n !== null && cp(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function rg(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return su = kc(
          su,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Fu = kc(
          Fu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Iu = kc(
          Iu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Is.set(
          r,
          kc(
            Is.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Ps.set(
          r,
          kc(
            Ps.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function rp(l) {
    var n = Ul(l.target);
    if (n !== null) {
      var u = ie(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Oe(u), n !== null) {
            l.blockedOn = n, iy(l.priority, function() {
              if (u.tag === 13) {
                var c = Ha();
                c = al(c);
                var s = Qn(u, c);
                s !== null && xa(s, u, c), vh(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function er(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = gh(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        oc = c, u.target.dispatchEvent(c), oc = null;
      } else
        return n = lc(u), n !== null && cp(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function tr(l, n, u) {
    er(l) && u.delete(n);
  }
  function yf() {
    hf = !1, su !== null && er(su) && (su = null), Fu !== null && er(Fu) && (Fu = null), Iu !== null && er(Iu) && (Iu = null), Is.forEach(tr), Ps.forEach(tr);
  }
  function Sh(l, n) {
    l.blockedOn === n && (l.blockedOn = null, hf || (hf = !0, p.unstable_scheduleCallback(
      p.unstable_NormalPriority,
      yf
    )));
  }
  var Jc = null;
  function dp(l) {
    Jc !== l && (Jc = l, p.unstable_scheduleCallback(
      p.unstable_NormalPriority,
      function() {
        Jc === l && (Jc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (fp(c || u) === null)
              continue;
            break;
          }
          var r = lc(u);
          r !== null && (l.splice(n, 3), n -= 3, Md(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function ru(l) {
    function n(R) {
      return Sh(R, l);
    }
    su !== null && Sh(su, l), Fu !== null && Sh(Fu, l), Iu !== null && Sh(Iu, l), Is.forEach(n), Ps.forEach(n);
    for (var u = 0; u < Ki.length; u++) {
      var c = Ki[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ki.length && (u = Ki[0], u.blockedOn === null); )
      rp(u), u.blockedOn === null && Ki.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[$l] || null;
        if (typeof r == "function")
          m || dp(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[$l] || null)
              g = m.formAction;
            else if (fp(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), dp(u);
        }
      }
  }
  function hp(l) {
    this._internalRoot = l;
  }
  Th.prototype.render = hp.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(T(409));
    var u = n.current, c = Ha();
    up(u, c, l, n, null, null);
  }, Th.prototype.unmount = hp.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      up(l.current, 2, null, l, null, null), Gc(), n[yo] = null;
    }
  };
  function Th(l) {
    this._internalRoot = l;
  }
  Th.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Ur();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ki.length && n !== 0 && n < Ki[u].priority; u++) ;
      Ki.splice(u, 0, l), u === 0 && rp(l);
    }
  };
  var yp = y.version;
  if (yp !== "19.1.0")
    throw Error(
      T(
        527,
        yp,
        "19.1.0"
      )
    );
  P.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(T(188)) : (l = Object.keys(l).join(","), Error(T(268, l)));
    return l = w(n), l = l !== null ? K(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var ta = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lr.isDisabled && lr.supportsFiber)
      try {
        oi = lr.inject(
          ta
        ), Dl = lr;
      } catch {
      }
  }
  return Fp.createRoot = function(l, n) {
    if (!Z(l)) throw Error(T(299));
    var u = !1, c = "", s = Qo, r = rm, m = Ms, g = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (g = n.unstable_transitionCallbacks)), n = ap(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      m,
      g,
      null
    ), l[yo] = n.current, $m(l), new hp(n);
  }, Fp.hydrateRoot = function(l, n, u) {
    if (!Z(l)) throw Error(T(299));
    var c = !1, s = "", r = Qo, m = rm, g = Ms, R = null, N = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (R = u.unstable_transitionCallbacks), u.formState !== void 0 && (N = u.formState)), n = ap(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      m,
      g,
      R,
      N
    ), n.context = np(null), u = n.current, c = Ha(), c = al(c), s = ra(c), s.callback = null, kn(u, s, c), u = c, n.current.lanes = u, je(n, u), va(n), l[yo] = n.current, $m(l), new Th(n);
  }, Fp.version = "19.1.0", Fp;
}
var Ip = {}, V1;
function CE() {
  if (V1) return Ip;
  V1 = 1;
  /**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return process.env.NODE_ENV !== "production" && function() {
    function p(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function y(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Ge(e) ? e.slice() : Ie({}, e);
      return f[o] = y(e[o], t, a + 1, i), f;
    }
    function A(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return T(e, t, a, 0);
      }
    }
    function T(e, t, a, i) {
      var o = t[i], f = Ge(e) ? e.slice() : Ie({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Ge(f) ? f.splice(o, 1) : delete f[o]) : f[o] = T(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Z(e, t, a) {
      var i = t[a], o = Ge(e) ? e.slice() : Ie({}, e);
      return a + 1 === t.length ? (Ge(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Z(e[i], t, a + 1), o);
    }
    function ie() {
      return !1;
    }
    function Oe() {
      return null;
    }
    function re() {
    }
    function w() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function K() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function ce() {
    }
    function X(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function M(e, t, a, i) {
      return new Ff(e, t, a, i);
    }
    function ne(e, t) {
      e.context === mf && (Mt(e.current, 2, t, e, null, null), Nc());
    }
    function Ee(e, t) {
      if (hu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Lo(), Wf(
          e.current,
          t,
          a
        ), Nc();
      }
    }
    function Te(e) {
      hu = e;
    }
    function pe(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ce(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Rt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function _e(e) {
      if (Ce(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ft(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Ce(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return _e(o), e;
            if (f === i) return _e(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Me(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Me(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ct(e) {
      return e === null || typeof e != "object" ? null : (e = Fm && e[Fm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Le(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ch ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ke:
          return "Fragment";
        case lf:
          return "Profiler";
        case tf:
          return "StrictMode";
        case af:
          return "Suspense";
        case Gi:
          return "SuspenseList";
        case Wm:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Xc:
            return "Portal";
          case an:
            return (e.displayName || "Context") + ".Provider";
          case ih:
            return (e._context.displayName || "Context") + ".Consumer";
          case Ku:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Xs:
            return t = e.displayName || null, t !== null ? t : Le(e.type) || "Memo";
          case Na:
            t = e._payload, e = e._init;
            try {
              return Le(e(t));
            } catch {
            }
        }
      return null;
    }
    function pt(e) {
      return typeof e.tag == "number" ? oe(e) : typeof e.name == "string" ? e.name : null;
    }
    function oe(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Le(t);
        case 8:
          return t === tf ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return oe(e.return);
      }
      return null;
    }
    function ht(e) {
      return { current: e };
    }
    function Ae(e, t) {
      0 > nn ? console.error("Unexpected pop.") : (t !== Ks[nn] && console.error("Unexpected Fiber popped."), e.current = Zs[nn], Zs[nn] = null, Ks[nn] = null, nn--);
    }
    function we(e, t, a) {
      nn++, Zs[nn] = e.current, Ks[nn] = a, e.current = t;
    }
    function xt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Vt(e, t) {
      we(ou, t, e), we(nf, e, e), we(ku, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Ot(t) : no;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Ot(t), t = ma(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = $h;
                break;
              case "math":
                t = Qg;
                break;
              default:
                t = no;
            }
      }
      a = a.toLowerCase(), a = ry(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Ae(ku, e), we(ku, a, e);
    }
    function Tt(e) {
      Ae(ku, e), Ae(nf, e), Ae(ou, e);
    }
    function C() {
      return xt(ku.current);
    }
    function P(e) {
      e.memoizedState !== null && we(uf, e, e);
      var t = xt(ku.current), a = e.type, i = ma(t.context, a);
      a = ry(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (we(nf, e, e), we(ku, i, e));
    }
    function le(e) {
      nf.current === e && (Ae(ku, e), Ae(nf, e)), uf.current === e && (Ae(uf, e), Kp._currentValue = Sr);
    }
    function Re(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function S(e) {
      try {
        return Y(e), !1;
      } catch {
        return !0;
      }
    }
    function Y(e) {
      return "" + e;
    }
    function W(e, t) {
      if (S(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Re(e)
        ), Y(e);
    }
    function te(e, t) {
      if (S(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Re(e)
        ), Y(e);
    }
    function de(e) {
      if (S(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Re(e)
        ), Y(e);
    }
    function He(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Li = t.inject(e), ql = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function he(e) {
      if (typeof E0 == "function" && Dn(e), ql && typeof ql.setStrictMode == "function")
        try {
          ql.setStrictMode(Li, e);
        } catch (t) {
          ga || (ga = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function ol(e) {
      ye = e;
    }
    function Ye() {
      ye !== null && typeof ye.markCommitStopped == "function" && ye.markCommitStopped();
    }
    function Yt(e) {
      ye !== null && typeof ye.markComponentRenderStarted == "function" && ye.markComponentRenderStarted(e);
    }
    function ua() {
      ye !== null && typeof ye.markComponentRenderStopped == "function" && ye.markComponentRenderStopped();
    }
    function _n(e) {
      ye !== null && typeof ye.markRenderStarted == "function" && ye.markRenderStarted(e);
    }
    function tc() {
      ye !== null && typeof ye.markRenderStopped == "function" && ye.markRenderStopped();
    }
    function Hn(e, t) {
      ye !== null && typeof ye.markStateUpdateScheduled == "function" && ye.markStateUpdateScheduled(e, t);
    }
    function fo(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (sh(e) / $u | 0) | 0;
    }
    function wf(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function ll(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function vl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = ll(i) : (d &= h, d !== 0 ? o = ll(d) : a || (a = h & ~e, a !== 0 && (o = ll(a))))) : (h = i & ~f, h !== 0 ? o = ll(h) : d !== 0 ? o = ll(d) : a || (a = i & ~e, a !== 0 && (o = ll(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function ci(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Mr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Fe() {
      var e = rh;
      return rh <<= 1, (rh & 4194048) === 0 && (rh = 256), e;
    }
    function xn() {
      var e = dh;
      return dh <<= 1, (dh & 62914560) === 0 && (dh = 4194304), e;
    }
    function so(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Ou(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function zr(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, b = e.expirationTimes, E = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var j = 31 - Zl(a), V = 1 << j;
        h[j] = 0, b[j] = -1;
        var q = E[j];
        if (q !== null)
          for (E[j] = null, j = 0; j < q.length; j++) {
            var k = q[j];
            k !== null && (k.lane &= -536870913);
          }
        a &= ~V;
      }
      i !== 0 && qf(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function qf(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Zl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function oi(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Zl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Dl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Va(e, t, a) {
      if (el)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Zl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Ml(e, t) {
      if (el)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Zl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function ro(e) {
      return e &= -e, Bl < e ? Mn < e ? (e & 134217727) !== 0 ? Wu : hh : Mn : Bl;
    }
    function Bf() {
      var e = qe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Wu : nh(e.type));
    }
    function ho(e, t) {
      var a = qe.p;
      try {
        return qe.p = e, t();
      } finally {
        qe.p = a;
      }
    }
    function sn(e) {
      delete e[Kl], delete e[ba], delete e[Im], delete e[lg], delete e[of];
    }
    function ia(e) {
      var t = e[Kl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Xi] || a[Kl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Fo(e); e !== null; ) {
              if (a = e[Kl])
                return a;
              e = Fo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zl(e) {
      if (e = e[Kl] || e[Xi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function rn(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function v(e) {
      var t = e[ff];
      return t || (t = e[ff] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function _(e) {
      e[sf] = !0;
    }
    function ue(e, t) {
      se(e, t), se(e + "Capture", t);
    }
    function se(e, t) {
      un[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), un[e] = t;
      var a = e.toLowerCase();
      for (Zc[a] = e, e === "onDoubleClick" && (Zc.ondblclick = e), e = 0; e < t.length; e++)
        ag.add(t[e]);
    }
    function Se(e, t) {
      ng[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function je(e) {
      return Ju.call(ph, e) ? !0 : Ju.call(mh, e) ? !1 : yh.test(e) ? ph[e] = !0 : (mh[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Xe(e, t, a) {
      if (je(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (W(a, t), e === "" + a ? a : e);
      }
    }
    function st(e, t, a) {
      if (je(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          W(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Ve(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        W(a, t), e.setAttribute(t, "" + a);
      }
    }
    function al(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        W(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function dn() {
    }
    function Ur() {
      if (Zi === 0) {
        Pm = console.log, ep = console.info, ug = console.warn, tp = console.error, rf = console.group, ig = console.groupCollapsed, cg = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: dn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Zi++;
    }
    function iy() {
      if (Zi--, Zi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ie({}, e, { value: Pm }),
          info: Ie({}, e, { value: ep }),
          warn: Ie({}, e, { value: ug }),
          error: Ie({}, e, { value: tp }),
          group: Ie({}, e, { value: rf }),
          groupCollapsed: Ie({}, e, { value: ig }),
          groupEnd: Ie({}, e, { value: cg })
        });
      }
      0 > Zi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function fl(e) {
      if (lp === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          lp = t && t[1] || "", $s = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + lp + e + $s;
    }
    function gl(e, t) {
      if (!e || df) return "";
      var a = Ws.get(e);
      if (a !== void 0) return a;
      df = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Q.H, Q.H = null, Ur();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var q = function() {
                  throw Error();
                };
                if (Object.defineProperty(q.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(q, []);
                  } catch (ge) {
                    var k = ge;
                  }
                  Reflect.construct(e, [], q);
                } else {
                  try {
                    q.call();
                  } catch (ge) {
                    k = ge;
                  }
                  e.call(q.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ge) {
                  k = ge;
                }
                (q = e()) && typeof q.catch == "function" && q.catch(function() {
                });
              }
            } catch (ge) {
              if (ge && k && typeof ge.stack == "string")
                return [ge.stack, k.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], b = d[1];
        if (h && b) {
          var E = h.split(`
`), j = b.split(`
`);
          for (d = f = 0; f < E.length && !E[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < j.length && !j[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === E.length || d === j.length)
            for (f = E.length - 1, d = j.length - 1; 1 <= f && 0 <= d && E[f] !== j[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (E[f] !== j[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || E[f] !== j[d]) {
                    var V = `
` + E[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && Ws.set(e, V), V;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        df = !1, Q.H = i, iy(), Error.prepareStackTrace = a;
      }
      return E = (E = e ? e.displayName || e.name : "") ? fl(E) : "", typeof e == "function" && Ws.set(e, E), E;
    }
    function $l(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function yo(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return fl(e.type);
        case 16:
          return fl("Lazy");
        case 13:
          return fl("Suspense");
        case 19:
          return fl("SuspenseList");
        case 0:
        case 15:
          return gl(e.type, !1);
        case 11:
          return gl(e.type.render, !1);
        case 1:
          return gl(e.type, !0);
        case 31:
          return fl("Activity");
        default:
          return "";
      }
    }
    function Cr(e) {
      try {
        var t = "";
        do {
          t += yo(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = fl(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (b) {
        return `
Error generating stack: ` + b.message + `
` + b.stack;
      }
    }
    function nv(e) {
      return (e = e ? e.displayName || e.name : "") ? fl(e) : "";
    }
    function _r() {
      if (wa === null) return null;
      var e = wa._debugOwner;
      return e != null ? pt(e) : null;
    }
    function uv() {
      if (wa === null) return "";
      var e = wa;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += fl(e.type);
            break;
          case 13:
            t += fl("Suspense");
            break;
          case 19:
            t += fl("SuspenseList");
            break;
          case 31:
            t += fl("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += nv(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += nv(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = $l(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + $l(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function ve(e, t, a, i, o, f, d) {
      var h = wa;
      Yf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Yf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Yf(e) {
      Q.getCurrentStack = e === null ? null : uv, Sa = !1, wa = e;
    }
    function Ul(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return de(e), e;
        default:
          return "";
      }
    }
    function lc(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function jf(e) {
      var t = lc(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      de(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            de(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            de(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Du(e) {
      e._valueTracker || (e._valueTracker = jf(e));
    }
    function sl(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = lc(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Gf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Da(e) {
      return e.replace(
        A0,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function fi(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || np || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        _r() || "A component",
        t.type
      ), np = !0), t.value === void 0 || t.defaultValue === void 0 || ap || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        _r() || "A component",
        t.type
      ), ap = !0);
    }
    function si(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (W(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ul(t)) : e.value !== "" + Ul(t) && (e.value = "" + Ul(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Hr(e, d, Ul(t)) : a != null ? Hr(e, d, Ul(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (W(h, "name"), e.name = "" + Ul(h)) : e.removeAttribute("name");
    }
    function iv(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (W(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + Ul(a) : "", t = t != null ? "" + Ul(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (W(d, "name"), e.name = d);
    }
    function Hr(e, t, a) {
      t === "number" && Gf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function cy(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ls.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || ip || (ip = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || vh || (vh = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || up || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), up = !0);
    }
    function cv() {
      var e = _r();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Mu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ul(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Qf(e, t) {
      for (e = 0; e < Fs.length; e++) {
        var a = Fs[e];
        if (t[a] != null) {
          var i = Ge(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            cv()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            cv()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || cp || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), cp = !0);
    }
    function Nn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || og || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        _r() || "A component"
      ), og = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function xr(e, t, a) {
      if (t != null && (t = "" + Ul(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ul(a) : "";
    }
    function oy(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ge(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ul(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function ac(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? ac(e.children[0], t) : e;
    }
    function Wl(e) {
      return "  " + "  ".repeat(e);
    }
    function ri(e) {
      return "+ " + "  ".repeat(e);
    }
    function nc(e) {
      return "- " + "  ".repeat(e);
    }
    function fy(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Ql(e, t) {
      return fg.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Lf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return ri(a) + Ql(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), ri(a) + Ql(e, i) + `
` + nc(a) + Ql(t, i) + `
`;
      }
      return Wl(a) + Ql(e, i) + `
`;
    }
    function sy(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function di(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ge(e)) return "[...]";
          if (e.$$typeof === ji)
            return (t = Le(e.type)) ? "<" + t + ">" : "<...>";
          var a = sy(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = di(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function uc(e, t) {
      return typeof e != "string" || fg.test(e) ? "{" + di(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function mo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = uc(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function u0(e, t, a) {
      var i = "", o = Ie({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = di(e[f], d);
          t.hasOwnProperty(f) ? (d = di(t[f], d), i += ri(a) + f + ": " + h + `
`, i += nc(a) + f + ": " + d + `
`) : i += ri(a) + f + ": " + h + `
`;
        }
      for (var b in o)
        o.hasOwnProperty(b) && (e = di(
          o[b],
          120 - 2 * a - b.length - 2
        ), i += nc(a) + b + ": " + e + `
`);
      return i;
    }
    function Xa(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (E in a)
        a.hasOwnProperty(E) && f.set(
          E.toLowerCase(),
          E
        );
      if (f.size === 1 && f.has("children"))
        o += mo(
          e,
          t,
          Wl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, b = f.get(d.toLowerCase());
            if (b !== void 0) {
              f.delete(d.toLowerCase());
              var E = t[d];
              b = a[b];
              var j = uc(
                E,
                h
              );
              h = uc(
                b,
                h
              ), typeof E == "object" && E !== null && typeof b == "object" && b !== null && sy(E) === "Object" && sy(b) === "Object" && (2 < Object.keys(E).length || 2 < Object.keys(b).length || -1 < j.indexOf("...") || -1 < h.indexOf("...")) ? o += Wl(i + 1) + d + `={{
` + u0(
                E,
                b,
                i + 2
              ) + Wl(i + 1) + `}}
` : (o += ri(i + 1) + d + "=" + j + `
`, o += nc(i + 1) + d + "=" + h + `
`);
            } else
              o += Wl(i + 1) + d + "=" + uc(t[d], h) + `
`;
          }
        f.forEach(function(V) {
          if (V !== "children") {
            var q = 120 - 2 * (i + 1) - V.length - 1;
            o += nc(i + 1) + V + "=" + uc(a[V], q) + `
`;
          }
        }), o = o === "" ? Wl(i) + "<" + e + `>
` : Wl(i) + "<" + e + `
` + o + Wl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += Lf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + Lf("" + t, null, i + 1) : o + Lf("" + t, void 0, i + 1)), o;
    }
    function Nr(e, t) {
      var a = fy(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Nr(e, t), e = e.sibling;
        return a;
      }
      return Wl(t) + "<" + a + `>
`;
    }
    function wr(e, t) {
      var a = ac(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Wl(t) + `...
` + wr(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Wl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = Lf(o, e.serverProps, t), t++;
      else if (f = fy(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (E in o)
            if (o.hasOwnProperty(E) && E !== "children") {
              var b = uc(o[E], 15);
              if (d -= E.length + b.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + E + "=" + b;
            }
          i = Wl(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = mo(
            f,
            o,
            ri(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Xa(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var E = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (E += wr(d, t), f++) : E += Nr(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (E += Wl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], E = typeof f == "string" ? E + (nc(t) + Ql(f, 120 - 2 * t) + `
`) : E + mo(
          f.type,
          f.props,
          nc(t)
        );
      return a + i + E;
    }
    function Vf(e) {
      try {
        return `

` + wr(e, 0);
      } catch {
        return "";
      }
    }
    function ic(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Vf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ry(e, t) {
      var a = Ie({}, e || sp), i = { tag: t };
      return gh.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), bh.indexOf(t) !== -1 && (a.pTagInButtonScope = null), op.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function dy(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return fp.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function po(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function ov(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function qr(e, t) {
      t = t || sp;
      var a = t.current;
      if (t = (a = dy(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : po(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, hf[t]) return !1;
      hf[t] = !0;
      var o = (t = wa) ? ov(t.return, i) : null, f = t !== null && o !== null ? ic(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ve(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Xf(e, t, a) {
      if (a || dy("#text", t, !1))
        return !0;
      if (a = "#text|" + t, hf[a]) return !1;
      hf[a] = !0;
      var i = (a = wa) ? ov(a, t) : null;
      return a = a !== null && i !== null ? ic(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function cc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function i0(e) {
      return e.replace(Ki, function(t, a) {
        return a.toUpperCase();
      });
    }
    function fv(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Kc.hasOwnProperty(t) && Kc[t] || (Kc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        i0(t.replace(Ps, "ms-"))
      )) : Is.test(t) ? Kc.hasOwnProperty(t) && Kc[t] || (Kc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !sg.test(a) || kc.hasOwnProperty(a) && kc[a] || (kc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(sg, "")
      )), typeof a == "number" && (isNaN(a) ? rg || (rg = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || rp || (rp = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || er.has(t) ? t === "float" ? e.cssFloat = a : (te(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Zf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = su[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = su[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var b in t)
            for (o = su[b] || [b], f = 0; f < o.length; f++)
              h[o[f]] = b;
          b = {};
          for (var E in i)
            if (o = i[E], (f = h[E]) && o !== f && (d = o + "," + f, !b[d])) {
              b[d] = !0, d = console;
              var j = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                j == null || typeof j == "boolean" || j === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var V in a)
          !a.hasOwnProperty(V) || t != null && t.hasOwnProperty(V) || (V.indexOf("--") === 0 ? e.setProperty(V, "") : V === "float" ? e.cssFloat = "" : e[V] = "");
        for (var q in t)
          E = t[q], t.hasOwnProperty(q) && a[q] !== E && fv(e, q, E);
      } else
        for (i in t)
          t.hasOwnProperty(i) && fv(e, i, t[i]);
    }
    function oc(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Br(e) {
      return Sh.get(e) || e;
    }
    function vo(e, t) {
      if (Ju.call(ru, t) && ru[t])
        return !0;
      if (Th.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = dp.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), ru[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), ru[t] = !0;
      }
      if (hp.test(t)) {
        if (e = t.toLowerCase(), e = dp.hasOwnProperty(e) ? e : null, e == null) return ru[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), ru[t] = !0);
      }
      return !0;
    }
    function go(e, t) {
      var a = [], i;
      for (i in t)
        vo(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function sv(e, t, a, i) {
      if (Ju.call(ta, t) && ta[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), ta[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), ta[t] = !0;
        if (lr.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), ta[t] = !0;
      } else if (lr.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), ta[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), ta[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), ta[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), ta[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), ta[t] = !0;
      if (Jc.hasOwnProperty(o)) {
        if (o = Jc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), ta[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), ta[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), ta[t] = !0);
          }
        case "function":
        case "symbol":
          return ta[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), ta[t] = !0;
          }
      }
      return !0;
    }
    function hy(e, t, a) {
      var i = [], o;
      for (o in t)
        sv(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function bo(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function fc(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function wn(e) {
      var t = zl(e);
      if (t && (e = t.stateNode)) {
        var a = e[ba] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (si(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (W(t, "name"), a = a.querySelectorAll(
                'input[name="' + Da(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ba] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  si(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && sl(i);
            }
            break e;
          case "textarea":
            xr(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Mu(e, !!a.multiple, t, !1);
        }
      }
    }
    function Yr(e, t, a) {
      if (g) return e(t, a);
      g = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (g = !1, (r !== null || m !== null) && (Nc(), r && (t = r, e = m, m = r = null, wn(t), e)))
          for (t = 0; t < e.length; t++) wn(e[t]);
      }
    }
    function zu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ba] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Uu() {
      if (G) return G;
      var e, t = B, a = t.length, i, o = "value" in I ? I.value : I.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return G = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function So(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function sc() {
      return !0;
    }
    function yy() {
      return !1;
    }
    function Cl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? sc : yy, this.isPropagationStopped = yy, this;
      }
      return Ie(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = sc);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = sc);
        },
        persist: function() {
        },
        isPersistent: sc
      }), t;
    }
    function jr(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = ST[e]) ? !!t[e] : !1;
    }
    function Gr() {
      return jr;
    }
    function Fl(e, t) {
      switch (e) {
        case "keyup":
          return HT.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== xb;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function hi(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Qr(e, t) {
      switch (e) {
        case "compositionend":
          return hi(t);
        case "keypress":
          return t.which !== wb ? null : (Bb = !0, qb);
        case "textInput":
          return e = t.data, e === qb && Bb ? null : e;
        default:
          return null;
      }
    }
    function Kf(e, t) {
      if (Eh)
        return e === "compositionend" || !O0 && Fl(e, t) ? (e = Uu(), G = B = I = null, Eh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Nb && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function rv(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!NT[e.type] : t === "textarea";
    }
    function my(e) {
      if (!R) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Lr(e, t, a, i) {
      r ? m ? m.push(i) : m = [i] : r = i, t = xs(t, "onChange"), 0 < t.length && (a = new Ue(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function kf(e) {
      lu(e, 0);
    }
    function rc(e) {
      var t = rn(e);
      if (sl(t)) return e;
    }
    function py(e, t) {
      if (e === "change") return t;
    }
    function dv() {
      pp && (pp.detachEvent("onpropertychange", hv), vp = pp = null);
    }
    function hv(e) {
      if (e.propertyName === "value" && rc(vp)) {
        var t = [];
        Lr(
          t,
          vp,
          e,
          fc(e)
        ), Yr(kf, t);
      }
    }
    function c0(e, t, a) {
      e === "focusin" ? (dv(), pp = t, vp = a, pp.attachEvent("onpropertychange", hv)) : e === "focusout" && dv();
    }
    function vy(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return rc(vp);
    }
    function o0(e, t) {
      if (e === "click") return rc(t);
    }
    function f0(e, t) {
      if (e === "input" || e === "change")
        return rc(t);
    }
    function s0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Jf(e, t) {
      if (qa(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Ju.call(t, o) || !qa(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function yv(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function gy(e, t) {
      var a = yv(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = yv(a);
      }
    }
    function mv(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function pv(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Gf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Gf(e.document);
      }
      return t;
    }
    function by(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vv(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      M0 || Ah == null || Ah !== Gf(i) || (i = Ah, "selectionStart" in i && by(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), gp && Jf(gp, i) || (gp = i, i = xs(D0, "onSelect"), 0 < i.length && (t = new Ue(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Ah)));
    }
    function Cu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function dc(e) {
      if (z0[e]) return z0[e];
      if (!Rh[e]) return e;
      var t = Rh[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in jb)
          return z0[e] = t[a];
      return e;
    }
    function hn(e, t) {
      Xb.set(e, t), ue(t, [e]);
    }
    function Ma(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = C0.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Cr(t)
        }, C0.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Cr(t)
      };
    }
    function $f() {
      for (var e = Oh, t = _0 = Oh = 0; t < e; ) {
        var a = du[t];
        du[t++] = null;
        var i = du[t];
        du[t++] = null;
        var o = du[t];
        du[t++] = null;
        var f = du[t];
        if (du[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && gv(a, o, f);
      }
    }
    function Vr(e, t, a, i) {
      du[Oh++] = e, du[Oh++] = t, du[Oh++] = a, du[Oh++] = i, _0 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Sy(e, t, a, i) {
      return Vr(e, t, a, i), Xr(e);
    }
    function ca(e, t) {
      return Vr(e, null, null, t), Xr(e);
    }
    function gv(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & dg || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Zl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Xr(e) {
      if (Gp > aE)
        throw mr = Gp = 0, Qp = cb = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      mr > nE && (mr = 0, Qp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && On(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && On(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function hc(e) {
      if (hu === null) return e;
      var t = hu(e);
      return t === void 0 ? e : t.current;
    }
    function Ty(e) {
      if (hu === null) return e;
      var t = hu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = hc(e.render), e.render !== t) ? (t = { $$typeof: Ku, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function bv(e, t) {
      if (hu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Na) && (i = !0);
          break;
        case 11:
          (o === Ku || o === Na) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Xs || o === Na) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = hu(a), e !== void 0 && e === hu(t)));
    }
    function Sv(e) {
      hu !== null && typeof WeakSet == "function" && (Dh === null && (Dh = /* @__PURE__ */ new WeakSet()), Dh.add(e));
    }
    function Wf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, b = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          b = h;
          break;
        case 11:
          b = h.render;
      }
      if (hu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var E = !1;
      h = !1, b !== null && (b = hu(b), b !== void 0 && (a.has(b) ? h = !0 : t.has(b) && (d === 1 ? h = !0 : E = !0))), Dh !== null && (Dh.has(e) || i !== null && Dh.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || E) && (i = ca(e, 2), i !== null && $t(i, e, 2)), o === null || h || Wf(
        o,
        t,
        a
      ), f !== null && Wf(
        f,
        t,
        a
      );
    }
    function Ff(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Kb || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Ey(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function qn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = M(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = hc(e.type);
          break;
        case 1:
          a.type = hc(e.type);
          break;
        case 11:
          a.type = Ty(e.type);
      }
      return a;
    }
    function Ay(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Zr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Ey(e) && (d = 1), h = hc(h);
      else if (typeof e == "string")
        d = C(), d = Po(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Wm:
            return t = M(31, a, t, o), t.elementType = Wm, t.lanes = f, t;
          case Ke:
            return yi(
              a.children,
              o,
              f,
              t
            );
          case tf:
            d = 8, o |= Ta, o |= Pu;
            break;
          case lf:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = M(12, e, t, i | la), t.elementType = lf, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case af:
            return t = M(13, a, t, o), t.elementType = af, t.lanes = f, t;
          case Gi:
            return t = M(19, a, t, o), t.elementType = Gi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case $m:
                case an:
                  d = 10;
                  break e;
                case ih:
                  d = 9;
                  break e;
                case Ku:
                  d = 11, h = Ty(h);
                  break e;
                case Xs:
                  d = 14;
                  break e;
                case Na:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Ge(e) ? a = "array" : e !== void 0 && e.$$typeof === ji ? (a = "<" + (Le(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? pt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = M(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function If(e, t, a) {
      return t = Zr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function yi(e, t, a, i) {
      return e = M(7, e, i, t), e.lanes = a, e;
    }
    function mi(e, t, a) {
      return e = M(6, e, null, t), e.lanes = a, e;
    }
    function Ry(e, t, a) {
      return t = M(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function yc(e, t) {
      yn(), Mh[zh++] = yg, Mh[zh++] = hg, hg = e, yg = t;
    }
    function Tv(e, t, a) {
      yn(), yu[mu++] = Wc, yu[mu++] = Fc, yu[mu++] = ar, ar = e;
      var i = Wc;
      e = Fc;
      var o = 32 - Zl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Zl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Wc = 1 << 32 - Zl(t) + o | a << o | i, Fc = f + e;
      } else
        Wc = 1 << f | a << o | i, Fc = e;
    }
    function Kr(e) {
      yn(), e.return !== null && (yc(e, 1), Tv(e, 1, 0));
    }
    function kr(e) {
      for (; e === hg; )
        hg = Mh[--zh], Mh[zh] = null, yg = Mh[--zh], Mh[zh] = null;
      for (; e === ar; )
        ar = yu[--mu], yu[mu] = null, Fc = yu[--mu], yu[mu] = null, Wc = yu[--mu], yu[mu] = null;
    }
    function yn() {
      St || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function mn(e, t) {
      if (e.return === null) {
        if (pu === null)
          pu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (pu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          pu.distanceFromLeaf > t && (pu.distanceFromLeaf = t);
        }
        return pu;
      }
      var a = mn(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Oy(e, t) {
      Ic || (e = mn(e, 0), e.serverProps = null, t !== null && (t = Wd(t), e.serverTail.push(t)));
    }
    function Bn(e) {
      var t = "", a = pu;
      throw a !== null && (pu = null, t = Vf(a)), To(
        Ma(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), H0;
    }
    function Dy(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Kl] = e, t[ba] = i, au(a, i), a) {
        case "dialog":
          at("cancel", t), at("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          at("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Lp.length; a++)
            at(Lp[a], t);
          break;
        case "source":
          at("error", t);
          break;
        case "img":
        case "image":
        case "link":
          at("error", t), at("load", t);
          break;
        case "details":
          at("toggle", t);
          break;
        case "input":
          Se("input", i), at("invalid", t), fi(t, i), iv(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), Du(t);
          break;
        case "option":
          cy(t, i);
          break;
        case "select":
          Se("select", i), at("invalid", t), Qf(t, i);
          break;
        case "textarea":
          Se("textarea", i), at("invalid", t), Nn(t, i), oy(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), Du(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || zm(t.textContent, a) ? (i.popover != null && (at("beforetoggle", t), at("toggle", t)), i.onScroll != null && at("scroll", t), i.onScrollEnd != null && at("scrollend", t), i.onClick != null && (t.onclick = Lu), t = !0) : t = !1, t || Bn(e);
    }
    function My(e) {
      for (Ba = e.return; Ba; )
        switch (Ba.tag) {
          case 5:
          case 13:
            Ji = !1;
            return;
          case 27:
          case 3:
            Ji = !0;
            return;
          default:
            Ba = Ba.return;
        }
    }
    function mc(e) {
      if (e !== Ba) return !1;
      if (!St)
        return My(e), St = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || nu(e.type, e.memoizedProps)), a = !a), a && ul) {
        for (a = ul; a; ) {
          var i = mn(e, 0), o = Wd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? qm(a) : wl(a.nextSibling);
        }
        Bn(e);
      }
      if (My(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ul = qm(e);
      } else
        t === 27 ? (t = ul, uu(e.type) ? (e = bb, bb = null, ul = e) : ul = t) : ul = Ba ? wl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function pc() {
      ul = Ba = null, Ic = St = !1;
    }
    function zy() {
      var e = nr;
      return e !== null && (Ga === null ? Ga = e : Ga.push.apply(
        Ga,
        e
      ), nr = null), e;
    }
    function To(e) {
      nr === null ? nr = [e] : nr.push(e);
    }
    function Uy() {
      var e = pu;
      if (e !== null) {
        pu = null;
        for (var t = Vf(e); 0 < e.children.length; )
          e = e.children[0];
        ve(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Jr() {
      Uh = mg = null, Ch = !1;
    }
    function pi(e, t, a) {
      we(x0, t._currentValue, e), t._currentValue = a, we(N0, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Wb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Wb;
    }
    function _u(e, t) {
      e._currentValue = x0.current;
      var a = N0.current;
      Ae(N0, t), e._currentRenderer = a, Ae(x0, t);
    }
    function Cy(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function _y(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var b = 0; b < t.length; b++)
              if (h.context === t[b]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Cy(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Cy(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function _l(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            qa(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === uf.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Kp) : e = [Kp]);
        }
        o = o.return;
      }
      e !== null && _y(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function vi(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!qa(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function gi(e) {
      mg = e, Uh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function wt(e) {
      return Ch && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Hy(mg, e);
    }
    function Pf(e, t) {
      return mg === null && gi(e), Hy(e, t);
    }
    function Hy(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Uh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Uh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Uh = Uh.next = t;
      return a;
    }
    function es() {
      return {
        controller: new LT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function vc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Yn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && VT(XT, function() {
        e.controller.abort();
      });
    }
    function pn() {
      var e = ur;
      return ur = 0, e;
    }
    function bi(e) {
      var t = ur;
      return ur = e, t;
    }
    function gc(e) {
      var t = ur;
      return ur += e, t;
    }
    function $r(e) {
      cn = _h(), 0 > e.actualStartTime && (e.actualStartTime = cn);
    }
    function Hu(e) {
      if (0 <= cn) {
        var t = _h() - cn;
        e.actualDuration += t, e.selfBaseDuration = t, cn = -1;
      }
    }
    function bc(e) {
      if (0 <= cn) {
        var t = _h() - cn;
        e.actualDuration += t, cn = -1;
      }
    }
    function Za() {
      if (0 <= cn) {
        var e = _h() - cn;
        cn = -1, ur += e;
      }
    }
    function vn() {
      cn = _h();
    }
    function jn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ev(e, t) {
      if (bp === null) {
        var a = bp = [];
        w0 = 0, ir = Am(), Hh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return w0++, t.then(xy, xy), t;
    }
    function xy() {
      if (--w0 === 0 && bp !== null) {
        Hh !== null && (Hh.status = "fulfilled");
        var e = bp;
        bp = null, ir = 0, Hh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Av(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Ny() {
      var e = cr.current;
      return e !== null ? e : qt.pooledCache;
    }
    function Wr(e, t) {
      t === null ? we(cr, cr.current, e) : we(cr, t.pool, e);
    }
    function Rv() {
      var e = Ny();
      return e === null ? null : { parent: Yl._currentValue, pool: e };
    }
    function wy() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function qy(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Eo() {
    }
    function Ka(e, t, a) {
      Q.actQueue !== null && (Q.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Eo, Eo), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, za(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Eo, Eo);
          else {
            if (e = qt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, za(e), e;
          }
          throw Mp = t, Tg = !0, Dp;
      }
    }
    function By() {
      if (Mp === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Mp;
      return Mp = null, Tg = !1, e;
    }
    function za(e) {
      if (e === Dp || e === Sg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function oa(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Si(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Gn(e) {
      return {
        lane: e,
        tag: tS,
        payload: null,
        callback: null,
        next: null
      };
    }
    function gn(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Y0 === i && !nS) {
        var o = oe(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), nS = !0;
      }
      return (zt & ja) !== zn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Xr(e), gv(e, null, a), t) : (Vr(e, i, t, a), Xr(e));
    }
    function Ti(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, oi(e, a);
      }
    }
    function Ao(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Qn() {
      if (j0) {
        var e = Hh;
        if (e !== null) throw e;
      }
    }
    function Ro(e, t, a, i) {
      j0 = !1;
      var o = e.updateQueue;
      pf = !1, Y0 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var b = h, E = b.next;
        b.next = null, d === null ? f = E : d.next = E, d = b;
        var j = e.alternate;
        j !== null && (j = j.updateQueue, h = j.lastBaseUpdate, h !== d && (h === null ? j.firstBaseUpdate = E : h.next = E, j.lastBaseUpdate = b));
      }
      if (f !== null) {
        var V = o.baseState;
        d = 0, j = E = b = null, h = f;
        do {
          var q = h.lane & -536870913, k = q !== h.lane;
          if (k ? (ot & q) === q : (i & q) === q) {
            q !== 0 && q === ir && (j0 = !0), j !== null && (j = j.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              q = e;
              var ge = h, Be = t, Bt = a;
              switch (ge.tag) {
                case lS:
                  if (ge = ge.payload, typeof ge == "function") {
                    Ch = !0;
                    var dt = ge.call(
                      Bt,
                      V,
                      Be
                    );
                    if (q.mode & Ta) {
                      he(!0);
                      try {
                        ge.call(Bt, V, Be);
                      } finally {
                        he(!1);
                      }
                    }
                    Ch = !1, V = dt;
                    break e;
                  }
                  V = ge;
                  break e;
                case B0:
                  q.flags = q.flags & -65537 | 128;
                case tS:
                  if (dt = ge.payload, typeof dt == "function") {
                    if (Ch = !0, ge = dt.call(
                      Bt,
                      V,
                      Be
                    ), q.mode & Ta) {
                      he(!0);
                      try {
                        dt.call(Bt, V, Be);
                      } finally {
                        he(!1);
                      }
                    }
                    Ch = !1;
                  } else ge = dt;
                  if (ge == null) break e;
                  V = Ie({}, V, ge);
                  break e;
                case aS:
                  pf = !0;
              }
            }
            q = h.callback, q !== null && (e.flags |= 64, k && (e.flags |= 8192), k = o.callbacks, k === null ? o.callbacks = [q] : k.push(q));
          } else
            k = {
              lane: q,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, j === null ? (E = j = k, b = V) : j = j.next = k, d |= q;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            k = h, h = k.next, k.next = null, o.lastBaseUpdate = k, o.shared.pending = null;
          }
        } while (!0);
        j === null && (b = V), o.baseState = b, o.firstBaseUpdate = E, o.lastBaseUpdate = j, f === null && (o.shared.lanes = 0), Sf |= d, e.lanes = d, e.memoizedState = V;
      }
      Y0 = null;
    }
    function ts(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Oo(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          ts(a[e], t);
    }
    function Ov(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          ts(a[e], t);
    }
    function fa(e, t) {
      var a = Fi;
      we(Eg, a, e), we(xh, t, e), Fi = a | t.baseLanes;
    }
    function ls(e) {
      we(Eg, Fi, e), we(
        xh,
        xh.current,
        e
      );
    }
    function bn(e) {
      Fi = Eg.current, Ae(xh, e), Ae(Eg, e);
    }
    function Pe() {
      var e = L;
      bu === null ? bu = [e] : bu.push(e);
    }
    function ae() {
      var e = L;
      if (bu !== null && (eo++, bu[eo] !== e)) {
        var t = oe(Qe);
        if (!uS.has(t) && (uS.add(t), bu !== null)) {
          for (var a = "", i = 0; i <= eo; i++) {
            var o = bu[i], f = i === eo ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ka(e) {
      e == null || Ge(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        L,
        typeof e
      );
    }
    function Do() {
      var e = oe(Qe);
      cS.has(e) || (cS.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Xt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Ei(e, t) {
      if (Up) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          L
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        L,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!qa(e[a], t[a])) return !1;
      return !0;
    }
    function Ai(e, t, a, i, o, f) {
      vf = f, Qe = t, bu = e !== null ? e._debugHookTypes : null, eo = -1, Up = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = oe(Qe), G0.has(f) || (G0.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Q.H = e !== null && e.memoizedState !== null ? L0 : bu !== null ? oS : Q0, fr = f = (t.mode & Ta) !== Qt;
      var d = V0(a, i, o);
      if (fr = !1, wh && (d = Mo(
        t,
        a,
        i,
        o
      )), f) {
        he(!0);
        try {
          d = Mo(
            t,
            a,
            i,
            o
          );
        } finally {
          he(!1);
        }
      }
      return as(e, t), d;
    }
    function as(e, t) {
      t._debugHookTypes = bu, t.dependencies === null ? Pc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Pc
      }) : t.dependencies._debugThenableState = Pc, Q.H = Og;
      var a = Nt !== null && Nt.next !== null;
      if (vf = 0, bu = L = Rl = Nt = Qe = null, eo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Ag = !1, zp = 0, Pc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || kl || (e = e.dependencies, e !== null && vi(e) && (kl = !0)), Tg ? (Tg = !1, e = !0) : e = !1, e && (t = oe(t) || "Unknown", iS.has(t) || G0.has(t) || (iS.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Mo(e, t, a, i) {
      Qe = e;
      var o = 0;
      do {
        if (wh && (Pc = null), zp = 0, wh = !1, o >= KT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Up = !1, Rl = Nt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        eo = -1, Q.H = fS, f = V0(t, a, i);
      } while (wh);
      return f;
    }
    function Ja() {
      var e = Q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Sc(t) : t, e = e.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== e && (Qe.flags |= 1024), t;
    }
    function sa() {
      var e = Rg !== 0;
      return Rg = 0, e;
    }
    function xu(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Pu) !== Qt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Sn(e) {
      if (Ag) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ag = !1;
      }
      vf = 0, bu = Rl = Nt = Qe = null, eo = -1, L = null, wh = !1, zp = Rg = 0, Pc = null;
    }
    function kt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Rl === null ? Qe.memoizedState = Rl = e : Rl = Rl.next = e, Rl;
    }
    function rt() {
      if (Nt === null) {
        var e = Qe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Nt.next;
      var t = Rl === null ? Qe.memoizedState : Rl.next;
      if (t !== null)
        Rl = t, Nt = e;
      else {
        if (e === null)
          throw Qe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Nt = e, e = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null
        }, Rl === null ? Qe.memoizedState = Rl = e : Rl = Rl.next = e;
      }
      return Rl;
    }
    function Fr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Sc(e) {
      var t = zp;
      return zp += 1, Pc === null && (Pc = wy()), e = Ka(Pc, e, t), t = Qe, (Rl === null ? t.memoizedState : Rl.next) === null && (t = t.alternate, Q.H = t !== null && t.memoizedState !== null ? L0 : Q0), e;
    }
    function Ln(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Sc(e);
        if (e.$$typeof === an) return wt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function tl(e) {
      var t = null, a = Qe.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Qe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Fr(), Qe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Up)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = eg;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function vt(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function mt(e, t, a) {
      var i = kt();
      if (a !== void 0) {
        var o = a(t);
        if (fr) {
          he(!0);
          try {
            a(t);
          } finally {
            he(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Ky.bind(
        null,
        Qe,
        e
      ), [i.memoizedState, e];
    }
    function $a(e) {
      var t = rt();
      return Wa(t, Nt, e);
    }
    function Wa(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, b = null, E = t, j = !1;
        do {
          var V = E.lane & -536870913;
          if (V !== E.lane ? (ot & V) === V : (vf & V) === V) {
            var q = E.revertLane;
            if (q === 0)
              b !== null && (b = b.next = {
                lane: 0,
                revertLane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null
              }), V === ir && (j = !0);
            else if ((vf & q) === q) {
              E = E.next, q === ir && (j = !0);
              continue;
            } else
              V = {
                lane: 0,
                revertLane: E.revertLane,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null
              }, b === null ? (h = b = V, d = f) : b = b.next = V, Qe.lanes |= q, Sf |= q;
            V = E.action, fr && a(f, V), f = E.hasEagerState ? E.eagerState : a(f, V);
          } else
            q = {
              lane: V,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, b === null ? (h = b = q, d = f) : b = b.next = q, Qe.lanes |= V, Sf |= V;
          E = E.next;
        } while (E !== null && E !== t);
        if (b === null ? d = f : b.next = h, !qa(f, e.memoizedState) && (kl = !0, j && (a = Hh, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = b, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Tc(e) {
      var t = rt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        qa(f, t.memoizedState) || (kl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Nu(e, t, a) {
      var i = Qe, o = kt();
      if (St) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Nh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Nh = !0);
      } else {
        if (f = t(), Nh || (a = t(), qa(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Nh = !0)), qt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (ot & 124) !== 0 || Yy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, ed(
        Uo.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Xn(
        gu | jl,
        Oi(),
        zo.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function ns(e, t, a) {
      var i = Qe, o = rt(), f = St;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Nh) {
        var d = t();
        qa(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Nh = !0);
      }
      (d = !qa(
        (Nt || o).memoizedState,
        a
      )) && (o.memoizedState = a, kl = !0), o = o.queue;
      var h = Uo.bind(null, i, o, e);
      if (dl(2048, jl, h, [e]), o.getSnapshot !== t || d || Rl !== null && Rl.memoizedState.tag & gu) {
        if (i.flags |= 2048, Xn(
          gu | jl,
          Oi(),
          zo.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), qt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (vf & 124) !== 0 || Yy(i, t, a);
      }
      return a;
    }
    function Yy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Qe.updateQueue, t === null ? (t = Fr(), Qe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function zo(e, t, a, i) {
      t.value = a, t.getSnapshot = i, jy(t) && Co(e);
    }
    function Uo(e, t, a) {
      return a(function() {
        jy(t) && Co(e);
      });
    }
    function jy(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !qa(e, a);
      } catch {
        return !0;
      }
    }
    function Co(e) {
      var t = ca(e, 2);
      t !== null && $t(t, e, 2);
    }
    function us(e) {
      var t = kt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), fr) {
          he(!0);
          try {
            a();
          } finally {
            he(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vt,
        lastRenderedState: e
      }, t;
    }
    function wu(e) {
      e = us(e);
      var t = e.queue, a = No.bind(null, Qe, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Tn(e) {
      var t = kt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = fd.bind(
        null,
        Qe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function qu(e, t) {
      var a = rt();
      return Vn(a, Nt, e, t);
    }
    function Vn(e, t, a, i) {
      return e.baseState = a, Wa(
        e,
        Nt,
        typeof i == "function" ? i : vt
      );
    }
    function Ir(e, t) {
      var a = rt();
      return Nt !== null ? Vn(a, Nt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Gy(e, t, a, i, o) {
      if (ds(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        Q.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, _o(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function _o(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Q.T, d = {};
        Q.T = d, Q.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), b = Q.S;
          b !== null && b(d, h), is(e, t, h);
        } catch (E) {
          bl(e, t, E);
        } finally {
          Q.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), is(e, t, d);
        } catch (E) {
          bl(e, t, E);
        }
    }
    function is(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          Ri(e, t, i);
        },
        function(i) {
          return bl(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ri(e, t, a);
    }
    function Ri(e, t, a) {
      t.status = "fulfilled", t.value = a, cs(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, _o(e, a)));
    }
    function bl(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, cs(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function cs(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Qy(e, t) {
      return t;
    }
    function Ho(e, t) {
      if (St) {
        var a = qt.formState;
        if (a !== null) {
          e: {
            var i = Qe;
            if (St) {
              if (ul) {
                t: {
                  for (var o = ul, f = Ji; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = wl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === mb || f === c1 ? o : null;
                }
                if (o) {
                  ul = wl(
                    o.nextSibling
                  ), i = o.data === mb;
                  break e;
                }
              }
              Bn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = kt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qy,
        lastRenderedState: t
      }, a.queue = i, a = No.bind(
        null,
        Qe,
        i
      ), i.dispatch = a, i = us(!1), f = fd.bind(
        null,
        Qe,
        !1,
        i.queue
      ), i = kt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Gy.bind(
        null,
        Qe,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Pr(e) {
      var t = rt();
      return Dv(t, Nt, e);
    }
    function Dv(e, t, a) {
      if (t = Wa(
        e,
        t,
        Qy
      )[0], e = $a(vt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Sc(t);
        } catch (d) {
          throw d === Dp ? Sg : d;
        }
      else i = t;
      t = rt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Qe.flags |= 2048, Xn(
        gu | jl,
        Oi(),
        rl.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function rl(e, t) {
      e.action = t;
    }
    function xo(e) {
      var t = rt(), a = Nt;
      if (a !== null)
        return Dv(t, a, e);
      rt(), t = t.memoizedState, a = rt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Xn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = Qe.updateQueue, t === null && (t = Fr(), Qe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Oi() {
      return { destroy: void 0, resource: void 0 };
    }
    function os(e) {
      var t = kt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Fa(e, t, a, i) {
      var o = kt();
      i = i === void 0 ? null : i, Qe.flags |= e, o.memoizedState = Xn(
        gu | t,
        Oi(),
        a,
        i
      );
    }
    function dl(e, t, a, i) {
      var o = rt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Nt !== null && i !== null && Ei(i, Nt.memoizedState.deps) ? o.memoizedState = Xn(t, f, a, i) : (Qe.flags |= e, o.memoizedState = Xn(
        gu | t,
        f,
        a,
        i
      ));
    }
    function ed(e, t) {
      (Qe.mode & Pu) !== Qt && (Qe.mode & Zb) === Qt ? Fa(276826112, jl, e, t) : Fa(8390656, jl, e, t);
    }
    function td(e, t) {
      var a = 4194308;
      return (Qe.mode & Pu) !== Qt && (a |= 134217728), Fa(a, aa, e, t);
    }
    function Mv(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function ld(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Qe.mode & Pu) !== Qt && (i |= 134217728), Fa(
        i,
        aa,
        Mv.bind(null, t, e),
        a
      );
    }
    function Zn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, dl(
        4,
        aa,
        Mv.bind(null, t, e),
        a
      );
    }
    function fs(e, t) {
      return kt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ec(e, t) {
      var a = rt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Ei(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function ad(e, t) {
      var a = kt();
      t = t === void 0 ? null : t;
      var i = e();
      if (fr) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Di(e, t) {
      var a = rt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Ei(t, i[1]))
        return i[0];
      if (i = e(), fr) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function nd(e, t) {
      var a = kt();
      return id(a, e, t);
    }
    function ss(e, t) {
      var a = rt();
      return rs(
        a,
        Nt.memoizedState,
        e,
        t
      );
    }
    function ud(e, t) {
      var a = rt();
      return Nt === null ? id(a, e, t) : rs(
        a,
        Nt.memoizedState,
        e,
        t
      );
    }
    function id(e, t, a) {
      return a === void 0 || (vf & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Bv(), Qe.lanes |= e, Sf |= e, a);
    }
    function rs(e, t, a, i) {
      return qa(a, t) ? a : xh.current !== null ? (e = id(e, a, i), qa(e, t) || (kl = !0), e) : (vf & 42) === 0 ? (kl = !0, e.memoizedState = a) : (e = Bv(), Qe.lanes |= e, Sf |= e, t);
    }
    function Ly(e, t, a, i, o) {
      var f = qe.p;
      qe.p = f !== 0 && f < Mn ? f : Mn;
      var d = Q.T, h = {};
      Q.T = h, fd(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var b = o(), E = Q.S;
        if (E !== null && E(h, b), b !== null && typeof b == "object" && typeof b.then == "function") {
          var j = Av(
            b,
            i
          );
          Bu(
            e,
            t,
            j,
            ya(e)
          );
        } else
          Bu(
            e,
            t,
            i,
            ya(e)
          );
      } catch (V) {
        Bu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: V },
          ya(e)
        );
      } finally {
        qe.p = f, Q.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Ac(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Vy(e).queue;
      Ly(
        e,
        o,
        t,
        Sr,
        a === null ? ce : function() {
          return Xy(e), a(i);
        }
      );
    }
    function Vy(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Sr,
        baseState: Sr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: vt,
          lastRenderedState: Sr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: vt,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Xy(e) {
      Q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Vy(e).next.queue;
      Bu(
        e,
        t,
        {},
        ya(e)
      );
    }
    function Kn() {
      var e = us(!1);
      return e = Ly.bind(
        null,
        Qe,
        e.queue,
        !0,
        !1
      ), kt().memoizedState = e, [!1, e];
    }
    function cd() {
      var e = $a(vt)[0], t = rt().memoizedState;
      return [
        typeof e == "boolean" ? e : Sc(e),
        t
      ];
    }
    function od() {
      var e = Tc(vt)[0], t = rt().memoizedState;
      return [
        typeof e == "boolean" ? e : Sc(e),
        t
      ];
    }
    function ra() {
      return wt(Kp);
    }
    function kn() {
      var e = kt(), t = qt.identifierPrefix;
      if (St) {
        var a = Fc, i = Wc;
        a = (i & ~(1 << 32 - Zl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Rg++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = ZT++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function Rc() {
      return kt().memoizedState = Zy.bind(
        null,
        Qe
      );
    }
    function Zy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ya(a);
            e = Gn(i);
            var o = gn(a, e, i);
            o !== null && ($t(o, a, i), Ti(o, a, i)), a = es(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function Ky(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ya(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ds(e) ? Oc(t, o) : (o = Sy(e, t, o, i), o !== null && ($t(o, e, i), hs(o, t, i))), Hn(e, i);
    }
    function No(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ya(e), Bu(e, t, a, i), Hn(e, i);
    }
    function Bu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ds(e)) Oc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Q.H;
          Q.H = ti;
          try {
            var h = t.lastRenderedState, b = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = b, qa(b, h))
              return Vr(e, t, o, 0), qt === null && $f(), !1;
          } catch {
          } finally {
            Q.H = d;
          }
        }
        if (a = Sy(e, t, o, i), a !== null)
          return $t(a, e, i), hs(a, t, i), !0;
      }
      return !1;
    }
    function fd(e, t, a, i) {
      if (Q.T === null && ir === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Am(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ds(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Sy(
          e,
          a,
          i,
          2
        ), t !== null && $t(t, e, 2);
      Hn(e, 2);
    }
    function ds(e) {
      var t = e.alternate;
      return e === Qe || t !== null && t === Qe;
    }
    function Oc(e, t) {
      wh = Ag = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function hs(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, oi(e, a);
      }
    }
    function Sl(e) {
      var t = tt;
      return e != null && (tt = t === null ? e : t.concat(e)), t;
    }
    function wo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = If(e, a.mode, 0), t._debugInfo = tt, t.return = a), ve(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function qo(e) {
      var t = Cp;
      return Cp += 1, qh === null && (qh = wy()), Ka(qh, e, t);
    }
    function Ia(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Ze(e, t) {
      throw t.$$typeof === Vs ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Et(e, t) {
      var a = oe(e) || "Component";
      RS[a] || (RS[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Zt(e, t) {
      var a = oe(e) || "Component";
      OS[a] || (OS[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function ys(e) {
      function t(O, D) {
        if (e) {
          var z = O.deletions;
          z === null ? (O.deletions = [D], O.flags |= 16) : z.push(D);
        }
      }
      function a(O, D) {
        if (!e) return null;
        for (; D !== null; )
          t(O, D), D = D.sibling;
        return null;
      }
      function i(O) {
        for (var D = /* @__PURE__ */ new Map(); O !== null; )
          O.key !== null ? D.set(O.key, O) : D.set(O.index, O), O = O.sibling;
        return D;
      }
      function o(O, D) {
        return O = qn(O, D), O.index = 0, O.sibling = null, O;
      }
      function f(O, D, z) {
        return O.index = z, e ? (z = O.alternate, z !== null ? (z = z.index, z < D ? (O.flags |= 67108866, D) : z) : (O.flags |= 67108866, D)) : (O.flags |= 1048576, D);
      }
      function d(O) {
        return e && O.alternate === null && (O.flags |= 67108866), O;
      }
      function h(O, D, z, J) {
        return D === null || D.tag !== 6 ? (D = mi(
          z,
          O.mode,
          J
        ), D.return = O, D._debugOwner = O, D._debugTask = O._debugTask, D._debugInfo = tt, D) : (D = o(D, z), D.return = O, D._debugInfo = tt, D);
      }
      function b(O, D, z, J) {
        var fe = z.type;
        return fe === Ke ? (D = j(
          O,
          D,
          z.props.children,
          J,
          z.key
        ), wo(z, D, O), D) : D !== null && (D.elementType === fe || bv(D, z) || typeof fe == "object" && fe !== null && fe.$$typeof === Na && gf(fe) === D.type) ? (D = o(D, z.props), Ia(D, z), D.return = O, D._debugOwner = z._owner, D._debugInfo = tt, D) : (D = If(z, O.mode, J), Ia(D, z), D.return = O, D._debugInfo = tt, D);
      }
      function E(O, D, z, J) {
        return D === null || D.tag !== 4 || D.stateNode.containerInfo !== z.containerInfo || D.stateNode.implementation !== z.implementation ? (D = Ry(z, O.mode, J), D.return = O, D._debugInfo = tt, D) : (D = o(D, z.children || []), D.return = O, D._debugInfo = tt, D);
      }
      function j(O, D, z, J, fe) {
        return D === null || D.tag !== 7 ? (D = yi(
          z,
          O.mode,
          J,
          fe
        ), D.return = O, D._debugOwner = O, D._debugTask = O._debugTask, D._debugInfo = tt, D) : (D = o(D, z), D.return = O, D._debugInfo = tt, D);
      }
      function V(O, D, z) {
        if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
          return D = mi(
            "" + D,
            O.mode,
            z
          ), D.return = O, D._debugOwner = O, D._debugTask = O._debugTask, D._debugInfo = tt, D;
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case ji:
              return z = If(
                D,
                O.mode,
                z
              ), Ia(z, D), z.return = O, O = Sl(D._debugInfo), z._debugInfo = tt, tt = O, z;
            case Xc:
              return D = Ry(
                D,
                O.mode,
                z
              ), D.return = O, D._debugInfo = tt, D;
            case Na:
              var J = Sl(D._debugInfo);
              return D = gf(D), O = V(O, D, z), tt = J, O;
          }
          if (Ge(D) || ct(D))
            return z = yi(
              D,
              O.mode,
              z,
              null
            ), z.return = O, z._debugOwner = O, z._debugTask = O._debugTask, O = Sl(D._debugInfo), z._debugInfo = tt, tt = O, z;
          if (typeof D.then == "function")
            return J = Sl(D._debugInfo), O = V(
              O,
              qo(D),
              z
            ), tt = J, O;
          if (D.$$typeof === an)
            return V(
              O,
              Pf(O, D),
              z
            );
          Ze(O, D);
        }
        return typeof D == "function" && Et(O, D), typeof D == "symbol" && Zt(O, D), null;
      }
      function q(O, D, z, J) {
        var fe = D !== null ? D.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return fe !== null ? null : h(O, D, "" + z, J);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case ji:
              return z.key === fe ? (fe = Sl(z._debugInfo), O = b(
                O,
                D,
                z,
                J
              ), tt = fe, O) : null;
            case Xc:
              return z.key === fe ? E(O, D, z, J) : null;
            case Na:
              return fe = Sl(z._debugInfo), z = gf(z), O = q(
                O,
                D,
                z,
                J
              ), tt = fe, O;
          }
          if (Ge(z) || ct(z))
            return fe !== null ? null : (fe = Sl(z._debugInfo), O = j(
              O,
              D,
              z,
              J,
              null
            ), tt = fe, O);
          if (typeof z.then == "function")
            return fe = Sl(z._debugInfo), O = q(
              O,
              D,
              qo(z),
              J
            ), tt = fe, O;
          if (z.$$typeof === an)
            return q(
              O,
              D,
              Pf(O, z),
              J
            );
          Ze(O, z);
        }
        return typeof z == "function" && Et(O, z), typeof z == "symbol" && Zt(O, z), null;
      }
      function k(O, D, z, J, fe) {
        if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
          return O = O.get(z) || null, h(D, O, "" + J, fe);
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case ji:
              return z = O.get(
                J.key === null ? z : J.key
              ) || null, O = Sl(J._debugInfo), D = b(
                D,
                z,
                J,
                fe
              ), tt = O, D;
            case Xc:
              return O = O.get(
                J.key === null ? z : J.key
              ) || null, E(D, O, J, fe);
            case Na:
              var ke = Sl(J._debugInfo);
              return J = gf(J), D = k(
                O,
                D,
                z,
                J,
                fe
              ), tt = ke, D;
          }
          if (Ge(J) || ct(J))
            return z = O.get(z) || null, O = Sl(J._debugInfo), D = j(
              D,
              z,
              J,
              fe,
              null
            ), tt = O, D;
          if (typeof J.then == "function")
            return ke = Sl(J._debugInfo), D = k(
              O,
              D,
              z,
              qo(J),
              fe
            ), tt = ke, D;
          if (J.$$typeof === an)
            return k(
              O,
              D,
              z,
              Pf(D, J),
              fe
            );
          Ze(D, J);
        }
        return typeof J == "function" && Et(D, J), typeof J == "symbol" && Zt(D, J), null;
      }
      function ge(O, D, z, J) {
        if (typeof z != "object" || z === null) return J;
        switch (z.$$typeof) {
          case ji:
          case Xc:
            re(O, D, z);
            var fe = z.key;
            if (typeof fe != "string") break;
            if (J === null) {
              J = /* @__PURE__ */ new Set(), J.add(fe);
              break;
            }
            if (!J.has(fe)) {
              J.add(fe);
              break;
            }
            ve(D, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                fe
              );
            });
            break;
          case Na:
            z = gf(z), ge(O, D, z, J);
        }
        return J;
      }
      function Be(O, D, z, J) {
        for (var fe = null, ke = null, be = null, Je = D, $e = D = 0, Lt = null; Je !== null && $e < z.length; $e++) {
          Je.index > $e ? (Lt = Je, Je = null) : Lt = Je.sibling;
          var pl = q(
            O,
            Je,
            z[$e],
            J
          );
          if (pl === null) {
            Je === null && (Je = Lt);
            break;
          }
          fe = ge(
            O,
            pl,
            z[$e],
            fe
          ), e && Je && pl.alternate === null && t(O, Je), D = f(pl, D, $e), be === null ? ke = pl : be.sibling = pl, be = pl, Je = Lt;
        }
        if ($e === z.length)
          return a(O, Je), St && yc(O, $e), ke;
        if (Je === null) {
          for (; $e < z.length; $e++)
            Je = V(O, z[$e], J), Je !== null && (fe = ge(
              O,
              Je,
              z[$e],
              fe
            ), D = f(
              Je,
              D,
              $e
            ), be === null ? ke = Je : be.sibling = Je, be = Je);
          return St && yc(O, $e), ke;
        }
        for (Je = i(Je); $e < z.length; $e++)
          Lt = k(
            Je,
            O,
            $e,
            z[$e],
            J
          ), Lt !== null && (fe = ge(
            O,
            Lt,
            z[$e],
            fe
          ), e && Lt.alternate !== null && Je.delete(
            Lt.key === null ? $e : Lt.key
          ), D = f(
            Lt,
            D,
            $e
          ), be === null ? ke = Lt : be.sibling = Lt, be = Lt);
        return e && Je.forEach(function(io) {
          return t(O, io);
        }), St && yc(O, $e), ke;
      }
      function Bt(O, D, z, J) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var fe = null, ke = null, be = D, Je = D = 0, $e = null, Lt = null, pl = z.next(); be !== null && !pl.done; Je++, pl = z.next()) {
          be.index > Je ? ($e = be, be = null) : $e = be.sibling;
          var io = q(O, be, pl.value, J);
          if (io === null) {
            be === null && (be = $e);
            break;
          }
          Lt = ge(
            O,
            io,
            pl.value,
            Lt
          ), e && be && io.alternate === null && t(O, be), D = f(io, D, Je), ke === null ? fe = io : ke.sibling = io, ke = io, be = $e;
        }
        if (pl.done)
          return a(O, be), St && yc(O, Je), fe;
        if (be === null) {
          for (; !pl.done; Je++, pl = z.next())
            be = V(O, pl.value, J), be !== null && (Lt = ge(
              O,
              be,
              pl.value,
              Lt
            ), D = f(
              be,
              D,
              Je
            ), ke === null ? fe = be : ke.sibling = be, ke = be);
          return St && yc(O, Je), fe;
        }
        for (be = i(be); !pl.done; Je++, pl = z.next())
          $e = k(
            be,
            O,
            Je,
            pl.value,
            J
          ), $e !== null && (Lt = ge(
            O,
            $e,
            pl.value,
            Lt
          ), e && $e.alternate !== null && be.delete(
            $e.key === null ? Je : $e.key
          ), D = f(
            $e,
            D,
            Je
          ), ke === null ? fe = $e : ke.sibling = $e, ke = $e);
        return e && be.forEach(function(gE) {
          return t(O, gE);
        }), St && yc(O, Je), fe;
      }
      function dt(O, D, z, J) {
        if (typeof z == "object" && z !== null && z.type === Ke && z.key === null && (wo(z, null, O), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case ji:
              var fe = Sl(z._debugInfo);
              e: {
                for (var ke = z.key; D !== null; ) {
                  if (D.key === ke) {
                    if (ke = z.type, ke === Ke) {
                      if (D.tag === 7) {
                        a(
                          O,
                          D.sibling
                        ), J = o(
                          D,
                          z.props.children
                        ), J.return = O, J._debugOwner = z._owner, J._debugInfo = tt, wo(z, J, O), O = J;
                        break e;
                      }
                    } else if (D.elementType === ke || bv(
                      D,
                      z
                    ) || typeof ke == "object" && ke !== null && ke.$$typeof === Na && gf(ke) === D.type) {
                      a(
                        O,
                        D.sibling
                      ), J = o(D, z.props), Ia(J, z), J.return = O, J._debugOwner = z._owner, J._debugInfo = tt, O = J;
                      break e;
                    }
                    a(O, D);
                    break;
                  } else t(O, D);
                  D = D.sibling;
                }
                z.type === Ke ? (J = yi(
                  z.props.children,
                  O.mode,
                  J,
                  z.key
                ), J.return = O, J._debugOwner = O, J._debugTask = O._debugTask, J._debugInfo = tt, wo(z, J, O), O = J) : (J = If(
                  z,
                  O.mode,
                  J
                ), Ia(J, z), J.return = O, J._debugInfo = tt, O = J);
              }
              return O = d(O), tt = fe, O;
            case Xc:
              e: {
                for (fe = z, z = fe.key; D !== null; ) {
                  if (D.key === z)
                    if (D.tag === 4 && D.stateNode.containerInfo === fe.containerInfo && D.stateNode.implementation === fe.implementation) {
                      a(
                        O,
                        D.sibling
                      ), J = o(
                        D,
                        fe.children || []
                      ), J.return = O, O = J;
                      break e;
                    } else {
                      a(O, D);
                      break;
                    }
                  else t(O, D);
                  D = D.sibling;
                }
                J = Ry(
                  fe,
                  O.mode,
                  J
                ), J.return = O, O = J;
              }
              return d(O);
            case Na:
              return fe = Sl(z._debugInfo), z = gf(z), O = dt(
                O,
                D,
                z,
                J
              ), tt = fe, O;
          }
          if (Ge(z))
            return fe = Sl(z._debugInfo), O = Be(
              O,
              D,
              z,
              J
            ), tt = fe, O;
          if (ct(z)) {
            if (fe = Sl(z._debugInfo), ke = ct(z), typeof ke != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var be = ke.call(z);
            return be === z ? (O.tag !== 0 || Object.prototype.toString.call(O.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(be) !== "[object Generator]") && (ES || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), ES = !0) : z.entries !== ke || Z0 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Z0 = !0), O = Bt(
              O,
              D,
              be,
              J
            ), tt = fe, O;
          }
          if (typeof z.then == "function")
            return fe = Sl(z._debugInfo), O = dt(
              O,
              D,
              qo(z),
              J
            ), tt = fe, O;
          if (z.$$typeof === an)
            return dt(
              O,
              D,
              Pf(O, z),
              J
            );
          Ze(O, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (fe = "" + z, D !== null && D.tag === 6 ? (a(
          O,
          D.sibling
        ), J = o(D, fe), J.return = O, O = J) : (a(O, D), J = mi(
          fe,
          O.mode,
          J
        ), J.return = O, J._debugOwner = O, J._debugTask = O._debugTask, J._debugInfo = tt, O = J), d(O)) : (typeof z == "function" && Et(O, z), typeof z == "symbol" && Zt(O, z), a(O, D));
      }
      return function(O, D, z, J) {
        var fe = tt;
        tt = null;
        try {
          Cp = 0;
          var ke = dt(
            O,
            D,
            z,
            J
          );
          return qh = null, ke;
        } catch (Lt) {
          if (Lt === Dp || Lt === Sg) throw Lt;
          var be = M(29, Lt, null, O.mode);
          be.lanes = J, be.return = O;
          var Je = be._debugInfo = tt;
          if (be._debugOwner = O._debugOwner, be._debugTask = O._debugTask, Je != null) {
            for (var $e = Je.length - 1; 0 <= $e; $e--)
              if (typeof Je[$e].stack == "string") {
                be._debugOwner = Je[$e], be._debugTask = Je[$e].debugTask;
                break;
              }
          }
          return be;
        } finally {
          tt = fe;
        }
      };
    }
    function Ua(e) {
      var t = e.alternate;
      we(
        Gl,
        Gl.current & Yh,
        e
      ), we(Su, e, e), Wi === null && (t === null || xh.current !== null || t.memoizedState !== null) && (Wi = e);
    }
    function Mi(e) {
      if (e.tag === 22) {
        if (we(Gl, Gl.current, e), we(Su, e, e), Wi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Wi = e);
        }
      } else En(e);
    }
    function En(e) {
      we(Gl, Gl.current, e), we(
        Su,
        Su.current,
        e
      );
    }
    function Ca(e) {
      Ae(Su, e), Wi === e && (Wi = null), Ae(Gl, e);
    }
    function Yu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === ao || iu(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function ky(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        BS.has(t) || (BS.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Kt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ta) {
        he(!0);
        try {
          f = a(i, o);
        } finally {
          he(!1);
        }
      }
      f === void 0 && (t = Le(t) || "Component", xS.has(t) || (xS.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ie({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function sd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ta) {
          he(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            he(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Le(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Jf(a, i) || !Jf(o, f) : !0;
    }
    function rd(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = oe(e) || "Component", zS.has(e) || (zS.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), K0.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function zi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ie({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Jy(e) {
      k0(e), console.warn(
        `%s

%s
`,
        jh ? "An error occurred in the <" + jh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function zv(e) {
      var t = jh ? "The above error occurred in the <" + jh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((J0 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          m1 + e[0],
          p1,
          Xg + i + Xg,
          v1
        ) : e.splice(
          0,
          0,
          m1,
          p1,
          Xg + i + Xg,
          v1
        ), e.unshift(console), i = pE.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function dd(e) {
      k0(e);
    }
    function Bo(e, t) {
      try {
        jh = t.source ? oe(t.source) : null, J0 = null;
        var a = t.value;
        if (Q.actQueue !== null)
          Q.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function hd(e, t, a) {
      try {
        jh = a.source ? oe(a.source) : null, J0 = oe(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ll(e, t, a) {
      return a = Gn(a), a.tag = B0, a.payload = { element: null }, a.callback = function() {
        ve(t.source, Bo, e, t);
      }, a;
    }
    function Jt(e) {
      return e = Gn(e), e.tag = B0, e;
    }
    function ms(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Sv(a), ve(
            i.source,
            hd,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Sv(a), ve(
          i.source,
          hd,
          t,
          a,
          i
        ), typeof o != "function" && (Ef === null ? Ef = /* @__PURE__ */ new Set([this]) : Ef.add(this)), kT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          oe(a) || "Unknown"
        );
      });
    }
    function ps(e, t, a, i, o) {
      if (a.flags |= 32768, el && Zo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && _l(
          t,
          a,
          o,
          !0
        ), St && (Ic = !0), a = Su.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Wi === null ? xd() : a.alternate === null && il === lo && (il = I0), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === q0 ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), bm(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === q0 ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), bm(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return bm(e, i, o), xd(), !1;
      }
      if (St)
        return Ic = !0, t = Su.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== H0 && To(
          Ma(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== H0 && To(
          Ma(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ma(i, a), o = Ll(
          e.stateNode,
          i,
          o
        ), Ao(e, o), il !== sr && (il = Vh)), !1;
      var f = Ma(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Yp === null ? Yp = [f] : Yp.push(f), il !== sr && (il = Vh), t === null) return !0;
      i = Ma(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Ll(
              a.stateNode,
              i,
              e
            ), Ao(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ef === null || !Ef.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Jt(o), ms(
                o,
                e,
                a,
                i
              ), Ao(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function nl(e, t, a, i) {
      t.child = e === null ? DS(t, null, a, i) : Bh(
        t,
        e.child,
        a,
        i
      );
    }
    function yd(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return gi(t), Yt(t), i = Ai(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = sa(), ua(), e !== null && !kl ? (xu(e, t, o), $n(e, t, o)) : (St && h && Kr(t), t.flags |= 1, nl(e, t, i, o), t.child);
    }
    function Jn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Ey(f) && f.defaultProps === void 0 && a.compare === null ? (a = hc(f), t.tag = 15, t.type = a, gd(t, f), vs(
          e,
          t,
          a,
          i,
          o
        )) : (e = Zr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Rd(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Jf, a(d, i) && e.ref === t.ref)
          return $n(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = qn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function vs(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Jf(f, i) && e.ref === t.ref && t.type === e.type)
          if (kl = !1, t.pendingProps = i = f, Rd(e, o))
            (e.flags & 131072) !== 0 && (kl = !0);
          else
            return t.lanes = e.lanes, $n(e, t, o);
      }
      return vd(
        e,
        t,
        a,
        i,
        o
      );
    }
    function md(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return pd(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Wr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? fa(t, f) : ls(t), Mi(t);
        else
          return t.lanes = t.childLanes = 536870912, pd(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (Wr(t, f.cachePool), fa(t, f), En(t), t.memoizedState = null) : (e !== null && Wr(t, null), ls(t), En(t));
      return nl(e, t, o, a), t.child;
    }
    function pd(e, t, a, i) {
      var o = Ny();
      return o = o === null ? null : {
        parent: Yl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && Wr(t, null), ls(t), Mi(t), e !== null && _l(e, t, i, !0), null;
    }
    function gs(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function vd(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Le(a) || "Unknown";
        jS[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), jS[f] = !0);
      }
      return t.mode & Ta && ei.recordLegacyContextWarning(
        t,
        null
      ), e === null && (gd(t, t.type), a.contextTypes && (f = Le(a) || "Unknown", QS[f] || (QS[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), gi(t), Yt(t), a = Ai(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = sa(), ua(), e !== null && !kl ? (xu(e, t, o), $n(e, t, o)) : (St && i && Kr(t), t.flags |= 1, nl(e, t, a, o), t.child);
    }
    function $y(e, t, a, i, o, f) {
      return gi(t), Yt(t), eo = -1, Up = e !== null && e.type !== t.type, t.updateQueue = null, a = Mo(
        t,
        i,
        a,
        o
      ), as(e, t), i = sa(), ua(), e !== null && !kl ? (xu(e, t, f), $n(e, t, f)) : (St && i && Kr(t), t.flags |= 1, nl(e, t, a, f), t.child);
    }
    function Wy(e, t, a, i, o) {
      switch (Oe(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = qt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Jt(h), ms(
            h,
            d,
            t,
            Ma(f, t)
          ), Ao(t, h);
      }
      if (gi(t), t.stateNode === null) {
        if (d = mf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== an) && !qS.has(a) && (qS.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === ih ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Le(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = wt(f)), f = new a(i, d), t.mode & Ta) {
          he(!0);
          try {
            f = new a(i, d);
          } finally {
            he(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = K0, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = MS, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Le(a) || "Component", US.has(d) || (US.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var b = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? b = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (b = "UNSAFE_componentWillUpdate"), d !== null || h !== null || b !== null) {
            f = Le(a) || "Component";
            var E = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _S.has(f) || (_S.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              E,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              b !== null ? `
  ` + b : ""
            ));
          }
        }
        f = t.stateNode, d = Le(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !wS.has(a) && (wS.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !NS.has(a) && (NS.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Le(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || CS.has(a) || (CS.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Le(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Ge(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, oa(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? wt(d) : mf, f.state === i && (d = Le(a) || "Component", HS.has(d) || (HS.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ta && ei.recordLegacyContextWarning(
          t,
          f
        ), ei.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Kt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          oe(t) || "Component"
        ), K0.enqueueReplaceState(
          f,
          f.state,
          null
        )), Ro(t, i, f, o), Qn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Pu) !== Qt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var j = t.memoizedProps;
        h = zi(a, j), f.props = h;
        var V = f.context;
        b = a.contextType, d = mf, typeof b == "object" && b !== null && (d = wt(b)), E = a.getDerivedStateFromProps, b = typeof E == "function" || typeof f.getSnapshotBeforeUpdate == "function", j = t.pendingProps !== j, b || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (j || V !== d) && rd(
          t,
          f,
          i,
          d
        ), pf = !1;
        var q = t.memoizedState;
        f.state = q, Ro(t, i, f, o), Qn(), V = t.memoizedState, j || q !== V || pf ? (typeof E == "function" && (Kt(
          t,
          a,
          E,
          i
        ), V = t.memoizedState), (h = pf || sd(
          t,
          a,
          h,
          i,
          q,
          V,
          d
        )) ? (b || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Pu) !== Qt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Pu) !== Qt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Pu) !== Qt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Si(e, t), d = t.memoizedProps, b = zi(a, d), f.props = b, E = t.pendingProps, q = f.context, V = a.contextType, h = mf, typeof V == "object" && V !== null && (h = wt(V)), j = a.getDerivedStateFromProps, (V = typeof j == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== E || q !== h) && rd(
          t,
          f,
          i,
          h
        ), pf = !1, q = t.memoizedState, f.state = q, Ro(t, i, f, o), Qn();
        var k = t.memoizedState;
        d !== E || q !== k || pf || e !== null && e.dependencies !== null && vi(e.dependencies) ? (typeof j == "function" && (Kt(
          t,
          a,
          j,
          i
        ), k = t.memoizedState), (b = pf || sd(
          t,
          a,
          b,
          i,
          q,
          k,
          h
        ) || e !== null && e.dependencies !== null && vi(e.dependencies)) ? (V || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, k, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          k,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = k), f.props = i, f.state = k, f.context = h, f = b) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, gs(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Yf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, cn = -1;
        else {
          if (Yt(t), a = dS(h), t.mode & Ta) {
            he(!0);
            try {
              dS(h);
            } finally {
              he(!1);
            }
          }
          ua();
        }
        t.flags |= 1, e !== null && d ? (t.child = Bh(
          t,
          e.child,
          null,
          o
        ), t.child = Bh(
          t,
          null,
          a,
          o
        )) : nl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = $n(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Gh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        oe(t) || "a component"
      ), Gh = !0), e;
    }
    function Fy(e, t, a, i) {
      return pc(), t.flags |= 256, nl(e, t, a, i), t.child;
    }
    function gd(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Le(t) || "Unknown", LS[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), LS[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Le(t) || "Unknown", GS[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), GS[t] = !0));
    }
    function bs(e) {
      return { baseLanes: e, cachePool: Rv() };
    }
    function bd(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Cn), e;
    }
    function Uv(e, t, a) {
      var i, o = t.pendingProps;
      ie(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Gl.current & _p) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (St) {
          if (f ? Ua(t) : En(t), St) {
            var h = ul, b;
            if (!(b = !h)) {
              e: {
                var E = h;
                for (b = Ji; E.nodeType !== 8; ) {
                  if (!b) {
                    b = null;
                    break e;
                  }
                  if (E = wl(E.nextSibling), E === null) {
                    b = null;
                    break e;
                  }
                }
                b = E;
              }
              b !== null ? (yn(), t.memoizedState = {
                dehydrated: b,
                treeContext: ar !== null ? { id: Wc, overflow: Fc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, E = M(18, null, null, Qt), E.stateNode = b, E.return = t, t.child = E, Ba = t, ul = null, b = !0) : b = !1, b = !b;
            }
            b && (Oy(
              t,
              h
            ), Bn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return iu(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          Ca(t);
        }
        return h = o.children, o = o.fallback, f ? (En(t), f = t.mode, h = Ss(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = yi(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = bs(a), f.childLanes = bd(
          e,
          i,
          a
        ), t.memoizedState = W0, o) : (Ua(t), Sd(
          t,
          h
        ));
      }
      var j = e.memoizedState;
      if (j !== null && (h = j.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (Ua(t), t.flags &= -257, t = Td(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (En(t), t.child = e.child, t.flags |= 128, t = null) : (En(t), f = o.fallback, h = t.mode, o = Ss(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = yi(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, Bh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = bs(a), o.childLanes = bd(
            e,
            i,
            a
          ), t.memoizedState = W0, t = f);
        else if (Ua(t), St && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), iu(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            b = i.dgst;
            var V = i.msg;
            E = i.stck;
            var q = i.cstck;
          }
          h = V, i = b, o = E, b = f = q, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = b === void 0 ? null : b, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && C0.set(
            f,
            o
          ), To(o), t = Td(
            e,
            t,
            a
          );
        } else if (kl || _l(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, kl || i) {
          if (i = qt, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Dl(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== j.retryLane))
            throw j.retryLane = o, ca(
              e,
              o
            ), $t(
              i,
              e,
              o
            ), YS;
          h.data === ao || xd(), t = Td(
            e,
            t,
            a
          );
        } else
          h.data === ao ? (t.flags |= 192, t.child = e.child, t = null) : (e = j.treeContext, ul = wl(
            h.nextSibling
          ), Ba = t, St = !0, nr = null, Ic = !1, pu = null, Ji = !1, e !== null && (yn(), yu[mu++] = Wc, yu[mu++] = Fc, yu[mu++] = ar, Wc = e.id, Fc = e.overflow, ar = t), t = Sd(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (En(t), f = o.fallback, h = t.mode, b = e.child, E = b.sibling, o = qn(
        b,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = b.subtreeFlags & 65011712, E !== null ? f = qn(
        E,
        f
      ) : (f = yi(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = bs(a) : (b = h.cachePool, b !== null ? (E = Yl._currentValue, b = b.parent !== E ? { parent: E, pool: E } : b) : b = Rv(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: b
      }), f.memoizedState = h, f.childLanes = bd(
        e,
        i,
        a
      ), t.memoizedState = W0, o) : (Ua(t), a = e.child, e = a.sibling, a = qn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Sd(e, t) {
      return t = Ss(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ss(e, t) {
      return e = M(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: dg,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Td(e, t, a) {
      return Bh(t, e.child, null, a), e = Sd(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ed(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Cy(
        e.return,
        t,
        a
      );
    }
    function Iy(e, t) {
      var a = Ge(e);
      return e = !a && typeof ct(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Ad(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function Py(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !VS[o])
        if (VS[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || $0[f] || (f !== "collapsed" && f !== "hidden" ? ($0[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && ($0[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Ge(i)) {
          for (var d = 0; d < i.length; d++)
            if (!Iy(i[d], d)) break e;
        } else if (d = ct(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), b = 0; !h.done; h = d.next()) {
              if (!Iy(h.value, b)) break e;
              b++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (nl(e, t, i, a), i = Gl.current, (i & _p) !== 0)
        i = i & Yh | _p, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ed(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Ed(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= Yh;
      }
      switch (we(Gl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Yu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Ad(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Yu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Ad(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Ad(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function $n(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), cn = -1, Sf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (_l(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = qn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = qn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Rd(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && vi(e)));
    }
    function r0(e, t, a) {
      switch (t.tag) {
        case 3:
          Vt(
            t,
            t.stateNode.containerInfo
          ), pi(
            t,
            Yl,
            e.memoizedState.cache
          ), pc();
          break;
        case 27:
        case 5:
          P(t);
          break;
        case 4:
          Vt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          pi(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Ua(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Uv(
              e,
              t,
              a
            ) : (Ua(t), e = $n(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Ua(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (_l(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return Py(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), we(
            Gl,
            Gl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, md(e, t, a);
        case 24:
          pi(
            t,
            Yl,
            e.memoizedState.cache
          );
      }
      return $n(e, t, a);
    }
    function Od(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Zr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          kl = !0;
        else {
          if (!Rd(e, a) && (t.flags & 128) === 0)
            return kl = !1, r0(
              e,
              t,
              a
            );
          kl = (e.flags & 131072) !== 0;
        }
      else
        kl = !1, (i = St) && (yn(), i = (t.flags & 1048576) !== 0), i && (i = t.index, yn(), Tv(t, yg, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = gf(t.elementType), t.type = e, typeof e == "function")
            Ey(e) ? (i = zi(
              e,
              i
            ), t.tag = 1, t.type = e = hc(e), t = Wy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, gd(t, e), t.type = e = hc(e), t = vd(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Ku) {
                t.tag = 11, t.type = e = Ty(e), t = yd(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Xs) {
                t.tag = 14, t = Jn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Na && (t = " Did you wrap a component in React.lazy() more than once?"), e = Le(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return vd(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = zi(
            i,
            t.pendingProps
          ), Wy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Vt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Si(e, t), Ro(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, pi(t, Yl, i), i !== f.cache && _y(
              t,
              [Yl],
              a,
              !0
            ), Qn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Fy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Ma(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), To(o), t = Fy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (ul = wl(e.firstChild), Ba = t, St = !0, nr = null, Ic = !1, pu = null, Ji = !0, e = DS(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (pc(), i === o) {
                t = $n(
                  e,
                  t,
                  a
                );
                break e;
              }
              nl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return gs(e, t), e === null ? (e = Zu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : St || (e = t.type, a = t.pendingProps, i = xt(
            ou.current
          ), i = ut(
            i
          ).createElement(e), i[Kl] = t, i[ba] = a, Ft(i, e, a), _(i), t.stateNode = i) : t.memoizedState = Zu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return P(t), e === null && St && (i = xt(ou.current), o = C(), i = t.stateNode = Ym(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Ic || (o = Ht(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (mn(t, 0).serverProps = o)), Ba = t, Ji = !0, o = ul, uu(t.type) ? (bb = o, ul = wl(
            i.firstChild
          )) : ul = o), nl(
            e,
            t,
            t.pendingProps.children,
            a
          ), gs(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && St && (f = C(), i = qr(
            t.type,
            f.ancestorInfo
          ), o = ul, (d = !o) || (d = wi(
            o,
            t.type,
            t.pendingProps,
            Ji
          ), d !== null ? (t.stateNode = d, Ic || (f = Ht(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (mn(t, 0).serverProps = f)), Ba = t, ul = wl(
            d.firstChild
          ), Ji = !1, f = !0) : f = !1, d = !f), d && (i && Oy(t, o), Bn(t))), P(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, nu(o, f) ? i = null : d !== null && nu(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = Ai(
            e,
            t,
            Ja,
            null,
            null,
            a
          ), Kp._currentValue = o), gs(e, t), nl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && St && (e = t.pendingProps, a = C(), i = a.ancestorInfo.current, e = i != null ? Xf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = ul, (i = !a) || (i = Nl(
            a,
            t.pendingProps,
            Ji
          ), i !== null ? (t.stateNode = i, Ba = t, ul = null, i = !0) : i = !1, i = !i), i && (e && Oy(t, a), Bn(t))), null;
        case 13:
          return Uv(e, t, a);
        case 4:
          return Vt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Bh(
            t,
            null,
            i,
            a
          ) : nl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return yd(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return nl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return nl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, nl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || XS || (XS = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), pi(t, i, f), nl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), gi(t), o = wt(o), Yt(t), i = V0(
            i,
            o,
            void 0
          ), ua(), t.flags |= 1, nl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Jn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return vs(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Py(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Ss(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = qn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return md(e, t, a);
        case 24:
          return gi(t), i = wt(Yl), e === null ? (o = Ny(), o === null && (o = qt, f = es(), o.pooledCache = f, vc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, oa(t), pi(t, Yl, o)) : ((e.lanes & a) !== 0 && (Si(e, t), Ro(t, null, null, a), Qn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), pi(t, Yl, i)) : (i = f.cache, pi(t, Yl, i), i !== o.cache && _y(
            t,
            [Yl],
            a,
            !0
          ))), nl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function da(e) {
      e.flags |= 4;
    }
    function Ts(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Tu) !== br)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !ws(t)) {
        if (t = Su.current, t !== null && ((ot & 4194048) === ot ? Wi !== null : (ot & 62914560) !== ot && (ot & 536870912) === 0 || t !== Wi))
          throw Mp = q0, eS;
        e.flags |= 8192;
      }
    }
    function Es(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xn() : 536870912, e.lanes |= t, hr |= t);
    }
    function Ui(e, t) {
      if (!St)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Ut(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & la) !== Qt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & la) !== Qt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Cv(e, t, a) {
      var i = t.pendingProps;
      switch (kr(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ut(t), null;
        case 1:
          return Ut(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), _u(Yl, t), Tt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (mc(t) ? (Uy(), da(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, zy())), Ut(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (da(t), a !== null ? (Ut(t), Ts(
            t,
            a
          )) : (Ut(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (da(t), Ut(t), Ts(
            t,
            a
          )) : (Ut(t), t.flags &= -16777217) : (e.memoizedProps !== i && da(t), Ut(t), t.flags &= -16777217), null;
        case 27:
          le(t), a = xt(ou.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && da(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ut(t), null;
            }
            e = C(), mc(t) ? Dy(t) : (e = Ym(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, da(t));
          }
          return Ut(t), null;
        case 5:
          if (le(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && da(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ut(t), null;
            }
            if (o = C(), mc(t))
              Dy(t);
            else {
              switch (e = xt(ou.current), qr(a, o.ancestorInfo), o = o.context, e = ut(e), o) {
                case $h:
                  e = e.createElementNS(yf, a);
                  break;
                case Qg:
                  e = e.createElementNS(
                    tr,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        yf,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        tr,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Ju.call(
                        f1,
                        a
                      ) || (f1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Kl] = t, e[ba] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Ft(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && da(t);
            }
          }
          return Ut(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && da(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = xt(ou.current), a = C(), mc(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Ic, i = null;
              var f = Ba;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Fd(
                      e,
                      a,
                      i
                    ), o !== null && (mn(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Fd(
                      e,
                      a,
                      i
                    ), o !== null && (mn(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Kl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || zm(e.nodeValue, a)), e || Bn(t);
            } else
              o = a.ancestorInfo.current, o != null && Xf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = ut(e).createTextNode(
                i
              ), e[Kl] = t, t.stateNode = e;
          }
          return Ut(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = mc(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Kl] = t, Ut(t), (t.mode & la) !== Qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Uy(), pc(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Ut(t), (t.mode & la) !== Qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = zy(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Ca(t), t) : (Ca(t), null);
          }
          return Ca(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & la) !== Qt && jn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Es(t, t.updateQueue), Ut(t), (t.mode & la) !== Qt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return Tt(t), e === null && Dm(
            t.stateNode.containerInfo
          ), Ut(t), null;
        case 10:
          return _u(t.type, t), Ut(t), null;
        case 19:
          if (Ae(Gl, t), o = t.memoizedState, o === null) return Ut(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) Ui(o, !1);
            else {
              if (il !== lo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Yu(e), f !== null) {
                    for (t.flags |= 128, Ui(o, !1), e = f.updateQueue, t.updateQueue = e, Es(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Ay(a, e), a = a.sibling;
                    return we(
                      Gl,
                      Gl.current & Yh | _p,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && fu() > Ug && (t.flags |= 128, i = !0, Ui(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Yu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Es(t, e), Ui(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !St)
                  return Ut(t), null;
              } else
                2 * fu() - o.renderingStartTime > Ug && a !== 536870912 && (t.flags |= 128, i = !0, Ui(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = fu(), e.sibling = null, a = Gl.current, a = i ? a & Yh | _p : a & Yh, we(Gl, a, t), e) : (Ut(t), null);
        case 22:
        case 23:
          return Ca(t), bn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ut(t), a = t.updateQueue, a !== null && Es(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Ae(cr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), _u(Yl, t), Ut(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function _v(e, t) {
      switch (kr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & la) !== Qt && jn(t), t) : null;
        case 3:
          return _u(Yl, t), Tt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return le(t), null;
        case 13:
          if (Ca(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            pc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & la) !== Qt && jn(t), t) : null;
        case 19:
          return Ae(Gl, t), null;
        case 4:
          return Tt(t), null;
        case 10:
          return _u(t.type, t), null;
        case 22:
        case 23:
          return Ca(t), bn(t), e !== null && Ae(cr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & la) !== Qt && jn(t), t) : null;
        case 24:
          return _u(Yl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function em(e, t) {
      switch (kr(t), t.tag) {
        case 3:
          _u(Yl, t), Tt(t);
          break;
        case 26:
        case 27:
        case 5:
          le(t);
          break;
        case 4:
          Tt(t);
          break;
        case 13:
          Ca(t);
          break;
        case 19:
          Ae(Gl, t);
          break;
        case 10:
          _u(t.type, t);
          break;
        case 22:
        case 23:
          Ca(t), bn(t), e !== null && Ae(cr, t);
          break;
        case 24:
          _u(Yl, t);
      }
    }
    function An(e) {
      return (e.mode & la) !== Qt;
    }
    function tm(e, t) {
      An(e) ? (vn(), Dc(t, e), Za()) : Dc(t, e);
    }
    function Dd(e, t, a) {
      An(e) ? (vn(), Mc(
        a,
        e,
        t
      ), Za()) : Mc(
        a,
        e,
        t
      );
    }
    function Dc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & jl) !== vu ? ye !== null && typeof ye.markComponentPassiveEffectMountStarted == "function" && ye.markComponentPassiveEffectMountStarted(
              t
            ) : (e & aa) !== vu && ye !== null && typeof ye.markComponentLayoutEffectMountStarted == "function" && ye.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ya) !== vu && (kh = !0), i = ve(
              t,
              JT,
              a
            ), (e & Ya) !== vu && (kh = !1), (e & jl) !== vu ? ye !== null && typeof ye.markComponentPassiveEffectMountStopped == "function" && ye.markComponentPassiveEffectMountStopped() : (e & aa) !== vu && ye !== null && typeof ye.markComponentLayoutEffectMountStopped == "function" && ye.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & aa) !== 0 ? "useLayoutEffect" : (a.tag & Ya) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ve(
                t,
                function(h, b) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    b
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        xe(t, t.return, h);
      }
    }
    function Mc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & jl) !== vu ? ye !== null && typeof ye.markComponentPassiveEffectUnmountStarted == "function" && ye.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & aa) !== vu && ye !== null && typeof ye.markComponentLayoutEffectUnmountStarted == "function" && ye.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ya) !== vu && (kh = !0), o = t, ve(
                o,
                $T,
                o,
                a,
                h
              ), (e & Ya) !== vu && (kh = !1), (e & jl) !== vu ? ye !== null && typeof ye.markComponentPassiveEffectUnmountStopped == "function" && ye.markComponentPassiveEffectUnmountStopped() : (e & aa) !== vu && ye !== null && typeof ye.markComponentLayoutEffectUnmountStopped == "function" && ye.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (b) {
        xe(t, t.return, b);
      }
    }
    function lm(e, t) {
      An(e) ? (vn(), Dc(t, e), Za()) : Dc(t, e);
    }
    function As(e, t, a) {
      An(e) ? (vn(), Mc(
        a,
        e,
        t
      ), Za()) : Mc(
        a,
        e,
        t
      );
    }
    function am(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Gh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          oe(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          oe(e) || "instance"
        ));
        try {
          ve(
            e,
            Ov,
            t,
            a
          );
        } catch (i) {
          xe(e, e.return, i);
        }
      }
    }
    function Hv(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function d0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Gh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        oe(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        oe(e) || "instance"
      ));
      try {
        var o = zi(
          e.type,
          a,
          e.elementType === e.type
        ), f = ve(
          e,
          Hv,
          t,
          o,
          i
        );
        a = ZS, f !== void 0 || a.has(e.type) || (a.add(e.type), ve(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            oe(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        xe(e, e.return, d);
      }
    }
    function Md(e, t, a) {
      a.props = zi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, An(e) ? (vn(), ve(
        e,
        gS,
        e,
        t,
        a
      ), Za()) : ve(
        e,
        gS,
        e,
        t,
        a
      );
    }
    function xv(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (An(e))
            try {
              vn(), e.refCleanup = t(a);
            } finally {
              Za();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            oe(e)
          ), t.current = a;
      }
    }
    function Yo(e, t) {
      try {
        ve(e, xv, e);
      } catch (a) {
        xe(e, t, a);
      }
    }
    function Pa(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (An(e))
              try {
                vn(), ve(e, i);
              } finally {
                Za(e);
              }
            else ve(e, i);
          } catch (o) {
            xe(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (An(e))
              try {
                vn(), ve(e, a, null);
              } finally {
                Za(e);
              }
            else ve(e, a, null);
          } catch (o) {
            xe(e, t, o);
          }
        else a.current = null;
    }
    function nm(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", vg && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function Nv(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", vg && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function wv(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ve(
          e,
          Vu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        xe(e, e.return, o);
      }
    }
    function um(e, t, a) {
      try {
        ve(
          e,
          It,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        xe(e, e.return, i);
      }
    }
    function im(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && uu(e.type) || e.tag === 4;
    }
    function zc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || im(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && uu(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Rs(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Lu));
      else if (i !== 4 && (i === 27 && uu(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Rs(e, t, a), e = e.sibling; e !== null; )
          Rs(e, t, a), e = e.sibling;
    }
    function Uc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && uu(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Uc(e, t, a), e = e.sibling; e !== null; )
          Uc(e, t, a), e = e.sibling;
    }
    function qv(e) {
      for (var t, a = e.return; a !== null; ) {
        if (im(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = zc(e), Uc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Xu(a), t.flags &= -33), t = zc(e), Uc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = zc(e), Rs(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function cm(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ve(
          e,
          xa,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        xe(e, e.return, i);
      }
    }
    function zd(e, t) {
      if (e = e.containerInfo, pb = Zg, e = pv(e), by(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, b = -1, E = 0, j = 0, V = e, q = null;
              t: for (; ; ) {
                for (var k; V !== a || o !== 0 && V.nodeType !== 3 || (h = d + o), V !== f || i !== 0 && V.nodeType !== 3 || (b = d + i), V.nodeType === 3 && (d += V.nodeValue.length), (k = V.firstChild) !== null; )
                  q = V, V = k;
                for (; ; ) {
                  if (V === e) break t;
                  if (q === a && ++E === o && (h = d), q === f && ++j === i && (b = d), (k = V.nextSibling) !== null) break;
                  V = q, q = V.parentNode;
                }
                V = k;
              }
              a = h === -1 || b === -1 ? null : { start: h, end: b };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (vb = {
        focusedElem: e,
        selectionRange: a
      }, Zg = !1, Jl = t; Jl !== null; )
        if (t = Jl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Jl = e;
        else
          for (; Jl !== null; ) {
            switch (e = t = Jl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && d0(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    $o(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        $o(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Jl = e;
              break;
            }
            Jl = t.return;
          }
    }
    function om(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Wn(e, a), i & 4 && tm(a, aa | gu);
          break;
        case 1:
          if (Wn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Gh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                oe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                oe(a) || "instance"
              )), An(a) ? (vn(), ve(
                a,
                X0,
                a,
                e
              ), Za()) : ve(
                a,
                X0,
                a,
                e
              );
            else {
              var o = zi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Gh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                oe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                oe(a) || "instance"
              )), An(a) ? (vn(), ve(
                a,
                mS,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Za()) : ve(
                a,
                mS,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && am(a), i & 512 && Yo(a, a.return);
          break;
        case 3:
          if (t = pn(), Wn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              ve(
                a,
                Ov,
                i,
                o
              );
            } catch (d) {
              xe(a, a.return, d);
            }
          }
          e.effectDuration += bi(t);
          break;
        case 27:
          t === null && i & 4 && cm(a);
        case 26:
        case 5:
          Wn(e, a), t === null && i & 4 && wv(a), i & 512 && Yo(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = pn(), Wn(e, a), e = a.stateNode, e.effectDuration += gc(i);
            try {
              ve(
                a,
                nm,
                a,
                t,
                pg,
                e.effectDuration
              );
            } catch (d) {
              xe(a, a.return, d);
            }
          } else Wn(e, a);
          break;
        case 13:
          Wn(e, a), i & 4 && jo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Hs.bind(
            null,
            a
          ), Wo(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || to, !i) {
            t = t !== null && t.memoizedState !== null || ml, o = to;
            var f = ml;
            to = i, (ml = t) && !f ? Fn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Wn(e, a), to = o, ml = f;
          }
          break;
        case 30:
          break;
        default:
          Wn(e, a);
      }
    }
    function fm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, fm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && sn(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function ju(e, t, a) {
      for (a = a.child; a !== null; )
        Cc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Cc(e, t, a) {
      if (ql && typeof ql.onCommitFiberUnmount == "function")
        try {
          ql.onCommitFiberUnmount(Li, a);
        } catch (f) {
          ga || (ga = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          ml || Pa(a, t), ju(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          ml || Pa(a, t);
          var i = Ol, o = on;
          uu(a.type) && (Ol = a.stateNode, on = !1), ju(
            e,
            t,
            a
          ), ve(
            a,
            Io,
            a.stateNode
          ), Ol = i, on = o;
          break;
        case 5:
          ml || Pa(a, t);
        case 6:
          if (i = Ol, o = on, Ol = null, ju(
            e,
            t,
            a
          ), Ol = i, on = o, Ol !== null)
            if (on)
              try {
                ve(
                  a,
                  ko,
                  Ol,
                  a.stateNode
                );
              } catch (f) {
                xe(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                ve(
                  a,
                  ln,
                  Ol,
                  a.stateNode
                );
              } catch (f) {
                xe(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          Ol !== null && (on ? (e = Ol, Jo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Vc(e)) : Jo(Ol, a.stateNode));
          break;
        case 4:
          i = Ol, o = on, Ol = a.stateNode.containerInfo, on = !0, ju(
            e,
            t,
            a
          ), Ol = i, on = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ml || Mc(
            Ya,
            a,
            t
          ), ml || Dd(
            a,
            t,
            aa
          ), ju(
            e,
            t,
            a
          );
          break;
        case 1:
          ml || (Pa(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Md(
            a,
            t,
            i
          )), ju(
            e,
            t,
            a
          );
          break;
        case 21:
          ju(
            e,
            t,
            a
          );
          break;
        case 22:
          ml = (i = ml) || a.memoizedState !== null, ju(
            e,
            t,
            a
          ), ml = i;
          break;
        default:
          ju(
            e,
            t,
            a
          );
      }
    }
    function jo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ve(
            t,
            Ha,
            e
          );
        } catch (a) {
          xe(t, t.return, a);
        }
    }
    function Ud(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new KS()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new KS()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function _c(e, t) {
      var a = Ud(e);
      t.forEach(function(i) {
        var o = xi.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), el)
            if (Qh !== null && Lh !== null)
              Zo(Lh, Qh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Vl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (uu(h.type)) {
                  Ol = h.stateNode, on = !1;
                  break e;
                }
                break;
              case 5:
                Ol = h.stateNode, on = !1;
                break e;
              case 3:
              case 4:
                Ol = h.stateNode.containerInfo, on = !0;
                break e;
            }
            h = h.return;
          }
          if (Ol === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Cc(o, f, d), Ol = null, on = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          sm(t, e), t = t.sibling;
    }
    function sm(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vl(t, e), ha(e), i & 4 && (Mc(
            Ya | gu,
            e,
            e.return
          ), Dc(Ya | gu, e), Dd(
            e,
            e.return,
            aa | gu
          ));
          break;
        case 1:
          Vl(t, e), ha(e), i & 512 && (ml || a === null || Pa(a, a.return)), i & 64 && to && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = li;
          if (Vl(t, e), ha(e), i & 512 && (ml || a === null || Pa(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[sf] || o[Kl] || o.namespaceURI === yf || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Ft(o, i, a), o[Kl] = e, _(o), i = o;
                        break e;
                      case "link":
                        var f = Lm(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Ft(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = Lm(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], W(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Ft(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Kl] = e, _(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  Vm(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Id(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? Vm(
                o,
                e.type,
                e.stateNode
              ) : Id(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && um(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          Vl(t, e), ha(e), i & 512 && (ml || a === null || Pa(a, a.return)), a !== null && i & 4 && um(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Vl(t, e), ha(e), i & 512 && (ml || a === null || Pa(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ve(e, Xu, t);
            } catch (j) {
              xe(e, e.return, j);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, um(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (F0 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Vl(t, e), ha(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ve(
                e,
                jc,
                t,
                a,
                i
              );
            } catch (j) {
              xe(e, e.return, j);
            }
          }
          break;
        case 3:
          if (o = pn(), Lg = null, f = li, li = Ns(t.containerInfo), Vl(t, e), li = f, ha(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ve(
                e,
                Bm,
                t.containerInfo
              );
            } catch (j) {
              xe(e, e.return, j);
            }
          F0 && (F0 = !1, Hc(e)), t.effectDuration += bi(o);
          break;
        case 4:
          i = li, li = Ns(
            e.stateNode.containerInfo
          ), Vl(t, e), ha(e), li = i;
          break;
        case 12:
          i = pn(), Vl(t, e), ha(e), e.stateNode.effectDuration += gc(i);
          break;
        case 13:
          Vl(t, e), ha(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ab = fu()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, b = to, E = ml;
          if (to = b || o, ml = E || h, Vl(t, e), ml = E, to = b, ha(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~dg : t._visibility | dg, o && (a === null || h || to || ml || Xl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? ve(h, pa, f) : ve(
                      h,
                      wm,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (j) {
                    xe(h, h.return, j);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? ve(h, Nm, d) : ve(
                      h,
                      $d,
                      d,
                      h.memoizedProps
                    );
                  } catch (j) {
                    xe(h, h.return, j);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, _c(e, a))));
          break;
        case 19:
          Vl(t, e), ha(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Vl(t, e), ha(e);
      }
    }
    function ha(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ve(e, qv, e);
        } catch (a) {
          xe(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Hc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          Hc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Wn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          om(e, t.alternate, t), t = t.sibling;
    }
    function _a(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dd(
            e,
            e.return,
            aa
          ), Xl(e);
          break;
        case 1:
          Pa(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Md(
            e,
            e.return,
            t
          ), Xl(e);
          break;
        case 27:
          ve(
            e,
            Io,
            e.stateNode
          );
        case 26:
        case 5:
          Pa(e, e.return), Xl(e);
          break;
        case 22:
          e.memoizedState === null && Xl(e);
          break;
        case 30:
          Xl(e);
          break;
        default:
          Xl(e);
      }
    }
    function Xl(e) {
      for (e = e.child; e !== null; )
        _a(e), e = e.sibling;
    }
    function Gu(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Fn(
            e,
            a,
            i
          ), tm(a, aa);
          break;
        case 1:
          if (Fn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ve(
            a,
            X0,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ve(
                a,
                Oo,
                t,
                e
              );
            } catch (f) {
              xe(a, a.return, f);
            }
          }
          i && o & 64 && am(a), Yo(a, a.return);
          break;
        case 27:
          cm(a);
        case 26:
        case 5:
          Fn(
            e,
            a,
            i
          ), i && t === null && o & 4 && wv(a), Yo(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = pn(), Fn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += gc(o);
            try {
              ve(
                a,
                nm,
                a,
                t,
                pg,
                i.effectDuration
              );
            } catch (f) {
              xe(a, a.return, f);
            }
          } else
            Fn(
              e,
              a,
              i
            );
          break;
        case 13:
          Fn(
            e,
            a,
            i
          ), i && o & 4 && jo(e, a);
          break;
        case 22:
          a.memoizedState === null && Fn(
            e,
            a,
            i
          ), Yo(a, a.return);
          break;
        case 30:
          break;
        default:
          Fn(
            e,
            a,
            i
          );
      }
    }
    function Fn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Gu(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function In(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && vc(e), a != null && Yn(a));
    }
    function Rn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (vc(t), e != null && Yn(e));
    }
    function Ct(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Os(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Os(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ct(
            e,
            t,
            a,
            i
          ), o & 2048 && lm(t, jl | gu);
          break;
        case 1:
          Ct(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = pn();
          Ct(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (vc(t), a != null && Yn(a))), e.passiveEffectDuration += bi(f);
          break;
        case 12:
          if (o & 2048) {
            o = pn(), Ct(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += gc(o);
            try {
              ve(
                t,
                Nv,
                t,
                t.alternate,
                pg,
                e.passiveEffectDuration
              );
            } catch (h) {
              xe(t, t.return, h);
            }
          } else
            Ct(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Ct(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & $c ? Ct(
            e,
            t,
            a,
            i
          ) : Go(
            e,
            t
          ) : f._visibility & $c ? Ct(
            e,
            t,
            a,
            i
          ) : (f._visibility |= $c, Ci(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && In(d, t);
          break;
        case 24:
          Ct(
            e,
            t,
            a,
            i
          ), o & 2048 && Rn(t.alternate, t);
          break;
        default:
          Ct(
            e,
            t,
            a,
            i
          );
      }
    }
    function Ci(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Cd(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function Cd(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ci(
            e,
            t,
            a,
            i,
            o
          ), lm(t, jl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & $c ? Ci(
            e,
            t,
            a,
            i,
            o
          ) : Go(
            e,
            t
          ) : (d._visibility |= $c, Ci(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && In(
            t.alternate,
            t
          );
          break;
        case 24:
          Ci(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && Rn(t.alternate, t);
          break;
        default:
          Ci(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function Go(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Go(
                a,
                i
              ), o & 2048 && In(
                i.alternate,
                i
              );
              break;
            case 24:
              Go(
                a,
                i
              ), o & 2048 && Rn(
                i.alternate,
                i
              );
              break;
            default:
              Go(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function xc(e) {
      if (e.subtreeFlags & Hp)
        for (e = e.child; e !== null; )
          _i(e), e = e.sibling;
    }
    function _i(e) {
      switch (e.tag) {
        case 26:
          xc(e), e.flags & Hp && e.memoizedState !== null && kv(
            li,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          xc(e);
          break;
        case 3:
        case 4:
          var t = li;
          li = Ns(
            e.stateNode.containerInfo
          ), xc(e), li = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Hp, Hp = 16777216, xc(e), Hp = t) : xc(e));
          break;
        default:
          xc(e);
      }
    }
    function Ds(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Qo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Jl = i, dm(
              i,
              e
            );
          }
        Ds(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          rm(e), e = e.sibling;
    }
    function rm(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Qo(e), e.flags & 2048 && As(
            e,
            e.return,
            jl | gu
          );
          break;
        case 3:
          var t = pn();
          Qo(e), e.stateNode.passiveEffectDuration += bi(t);
          break;
        case 12:
          t = pn(), Qo(e), e.stateNode.passiveEffectDuration += gc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & $c && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~$c, Ms(e)) : Qo(e);
          break;
        default:
          Qo(e);
      }
    }
    function Ms(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Jl = i, dm(
              i,
              e
            );
          }
        Ds(e);
      }
      for (e = e.child; e !== null; )
        zs(e), e = e.sibling;
    }
    function zs(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          As(
            e,
            e.return,
            jl
          ), Ms(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & $c && (t._visibility &= ~$c, Ms(e));
          break;
        default:
          Ms(e);
      }
    }
    function dm(e, t) {
      for (; Jl !== null; ) {
        var a = Jl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            As(
              i,
              t,
              jl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && vc(i));
            break;
          case 24:
            Yn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Jl = i;
        else
          e: for (a = e; Jl !== null; ) {
            i = Jl;
            var o = i.sibling, f = i.return;
            if (fm(i), i === a) {
              Jl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Jl = o;
              break e;
            }
            Jl = f;
          }
      }
    }
    function hm() {
      FT.forEach(function(e) {
        return e();
      });
    }
    function ym() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ya(e) {
      if ((zt & ja) !== zn && ot !== 0)
        return ot & -ot;
      var t = Q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = ir, e !== 0 ? e : Am()) : Bf();
    }
    function Bv() {
      Cn === 0 && (Cn = (ot & 536870912) === 0 || St ? Fe() : 536870912);
      var e = Su.current;
      return e !== null && (e.flags |= 32), Cn;
    }
    function $t(e, t, a) {
      if (kh && console.error("useInsertionEffect must not schedule updates."), ob && (Cg = !0), (e === qt && (_t === rr || _t === dr) || e.cancelPendingCommit !== null) && (wc(e, 0), Qu(
        e,
        ot,
        Cn,
        !1
      )), Ou(e, a), (zt & ja) !== 0 && e === qt) {
        if (Sa)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = it && oe(it) || "Unknown", l1.has(e) || (l1.add(e), t = oe(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              t1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), t1 = !0);
          }
      } else
        el && Va(e, t, a), Qv(t), e === qt && ((zt & ja) === zn && (Tf |= a), il === sr && Qu(
          e,
          ot,
          Cn,
          !1
        )), en(e);
    }
    function hl(e, t, a) {
      if ((zt & (ja | ai)) !== zn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ci(e, t), o = i ? pm(e, t) : Nd(e, t, !0), f = i;
      do {
        if (o === lo) {
          Zh && !i && Qu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Yv(a)) {
            o = Nd(e, t, !1), f = !1;
            continue;
          }
          if (o === Vh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Yp;
                var b = o.current.memoizedState.isDehydrated;
                if (b && (wc(
                  o,
                  h
                ).flags |= 256), h = Nd(
                  o,
                  h,
                  !1
                ), h !== Vh) {
                  if (tb && !b) {
                    o.errorRecoveryDisabledLanes |= f, Tf |= f, o = sr;
                    break e;
                  }
                  o = Ga, Ga = d, o !== null && (Ga === null ? Ga = o : Ga.push.apply(
                    Ga,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== Vh) continue;
            }
          }
          if (o === Np) {
            wc(e, 0), Qu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case lo:
              case Np:
                throw Error("Root did not complete. This is a bug in React.");
              case sr:
                if ((t & 4194048) !== t) break;
              case Mg:
                Qu(
                  i,
                  t,
                  Cn,
                  !bf
                );
                break e;
              case Vh:
                Ga = null;
                break;
              case I0:
              case kS:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Q.actQueue !== null)
              jd(
                i,
                a,
                t,
                Ga,
                jp,
                zg,
                Cn,
                Tf,
                hr
              );
            else {
              if ((t & 62914560) === t && (f = ab + $S - fu(), 10 < f)) {
                if (Qu(
                  i,
                  t,
                  Cn,
                  !bf
                ), vl(i, 0, !0) !== 0) break e;
                i.timeoutHandle = s1(
                  Tl.bind(
                    null,
                    i,
                    a,
                    Ga,
                    jp,
                    zg,
                    t,
                    Cn,
                    Tf,
                    hr,
                    bf,
                    o,
                    tE,
                    Fb,
                    0
                  ),
                  f
                );
                break e;
              }
              Tl(
                i,
                a,
                Ga,
                jp,
                zg,
                t,
                Cn,
                Tf,
                hr,
                bf,
                o,
                PT,
                Fb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      en(e);
    }
    function Tl(e, t, a, i, o, f, d, h, b, E, j, V, q, k) {
      if (e.timeoutHandle = gr, V = t.subtreeFlags, (V & 8192 || (V & 16785408) === 16785408) && (Zp = { stylesheets: null, count: 0, unsuspend: Kv }, _i(t), V = Jv(), V !== null)) {
        e.cancelPendingCommit = V(
          jd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            b,
            j,
            eE,
            q,
            k
          )
        ), Qu(
          e,
          f,
          d,
          !E
        );
        return;
      }
      jd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        b
      );
    }
    function Yv(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!qa(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Qu(e, t, a, i) {
      t &= ~lb, t &= ~Tf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Zl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && qf(e, a, t);
    }
    function Nc() {
      return (zt & (ja | ai)) === zn ? (qc(0), !1) : !0;
    }
    function _d() {
      if (it !== null) {
        if (_t === fn)
          var e = it.return;
        else
          e = it, Jr(), Sn(e), qh = null, Cp = 0, e = it;
        for (; e !== null; )
          em(e.alternate, e), e = e.return;
        it = null;
      }
    }
    function wc(e, t) {
      var a = e.timeoutHandle;
      a !== gr && (e.timeoutHandle = gr, yE(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), _d(), qt = e, it = a = qn(e.current, null), ot = t, _t = fn, Un = null, bf = !1, Zh = ci(e, t), tb = !1, il = lo, hr = Cn = lb = Tf = Sf = 0, Ga = Yp = null, zg = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Zl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Fi = t, $f(), t = $b(), 1e3 < t - Jb && (Q.recentlyCreatedOwnerStacks = 0, Jb = t), ei.discardPendingWarnings(), a;
    }
    function Us(e, t) {
      Qe = null, Q.H = Og, Q.getCurrentStack = null, Sa = !1, wa = null, t === Dp || t === Sg ? (t = By(), _t = qp) : t === eS ? (t = By(), _t = JS) : _t = t === YS ? eb : t !== null && typeof t == "object" && typeof t.then == "function" ? Xh : wp, Un = t;
      var a = it;
      if (a === null)
        il = Np, Bo(
          e,
          Ma(t, e.current)
        );
      else
        switch (a.mode & la && Hu(a), ua(), _t) {
          case wp:
            ye !== null && typeof ye.markComponentErrored == "function" && ye.markComponentErrored(
              a,
              t,
              ot
            );
            break;
          case rr:
          case dr:
          case qp:
          case Xh:
          case Bp:
            ye !== null && typeof ye.markComponentSuspended == "function" && ye.markComponentSuspended(
              a,
              t,
              ot
            );
        }
    }
    function Hd() {
      var e = Q.H;
      return Q.H = Og, e === null ? Og : e;
    }
    function mm() {
      var e = Q.A;
      return Q.A = WT, e;
    }
    function xd() {
      il = sr, bf || (ot & 4194048) !== ot && Su.current !== null || (Zh = !0), (Sf & 134217727) === 0 && (Tf & 134217727) === 0 || qt === null || Qu(
        qt,
        ot,
        Cn,
        !1
      );
    }
    function Nd(e, t, a) {
      var i = zt;
      zt |= ja;
      var o = Hd(), f = mm();
      if (qt !== e || ot !== t) {
        if (el) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Zo(e, ot), d.clear()), Ml(e, t);
        }
        jp = null, wc(e, t);
      }
      _n(t), t = !1, d = il;
      e: do
        try {
          if (_t !== fn && it !== null) {
            var h = it, b = Un;
            switch (_t) {
              case eb:
                _d(), d = Mg;
                break e;
              case qp:
              case rr:
              case dr:
              case Xh:
                Su.current === null && (t = !0);
                var E = _t;
                if (_t = fn, Un = null, Hi(e, h, b, E), a && Zh) {
                  d = lo;
                  break e;
                }
                break;
              default:
                E = _t, _t = fn, Un = null, Hi(e, h, b, E);
            }
          }
          wd(), d = il;
          break;
        } catch (j) {
          Us(e, j);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Jr(), zt = i, Q.H = o, Q.A = f, tc(), it === null && (qt = null, ot = 0, $f()), d;
    }
    function wd() {
      for (; it !== null; ) gm(it);
    }
    function pm(e, t) {
      var a = zt;
      zt |= ja;
      var i = Hd(), o = mm();
      if (qt !== e || ot !== t) {
        if (el) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Zo(e, ot), f.clear()), Ml(e, t);
        }
        jp = null, Ug = fu() + WS, wc(e, t);
      } else
        Zh = ci(
          e,
          t
        );
      _n(t);
      e: do
        try {
          if (_t !== fn && it !== null)
            t: switch (t = it, f = Un, _t) {
              case wp:
                _t = fn, Un = null, Hi(
                  e,
                  t,
                  f,
                  wp
                );
                break;
              case rr:
              case dr:
                if (qy(f)) {
                  _t = fn, Un = null, qd(t);
                  break;
                }
                t = function() {
                  _t !== rr && _t !== dr || qt !== e || (_t = Bp), en(e);
                }, f.then(t, t);
                break e;
              case qp:
                _t = Bp;
                break e;
              case JS:
                _t = P0;
                break e;
              case Bp:
                qy(f) ? (_t = fn, Un = null, qd(t)) : (_t = fn, Un = null, Hi(
                  e,
                  t,
                  f,
                  Bp
                ));
                break;
              case P0:
                var d = null;
                switch (it.tag) {
                  case 26:
                    d = it.memoizedState;
                  case 5:
                  case 27:
                    var h = it;
                    if (!d || ws(d)) {
                      _t = fn, Un = null;
                      var b = h.sibling;
                      if (b !== null) it = b;
                      else {
                        var E = h.return;
                        E !== null ? (it = E, Cs(E)) : it = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                _t = fn, Un = null, Hi(
                  e,
                  t,
                  f,
                  P0
                );
                break;
              case Xh:
                _t = fn, Un = null, Hi(
                  e,
                  t,
                  f,
                  Xh
                );
                break;
              case eb:
                _d(), il = Mg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Q.actQueue !== null ? wd() : vm();
          break;
        } catch (j) {
          Us(e, j);
        }
      while (!0);
      return Jr(), Q.H = i, Q.A = o, zt = a, it !== null ? (ye !== null && typeof ye.markRenderYielded == "function" && ye.markRenderYielded(), lo) : (tc(), qt = null, ot = 0, $f(), il);
    }
    function vm() {
      for (; it !== null && !tg(); )
        gm(it);
    }
    function gm(e) {
      var t = e.alternate;
      (e.mode & la) !== Qt ? ($r(e), t = ve(
        e,
        Od,
        t,
        e,
        Fi
      ), Hu(e)) : t = ve(
        e,
        Od,
        t,
        e,
        Fi
      ), e.memoizedProps = e.pendingProps, t === null ? Cs(e) : it = t;
    }
    function qd(e) {
      var t = ve(e, Bd, e);
      e.memoizedProps = e.pendingProps, t === null ? Cs(e) : it = t;
    }
    function Bd(e) {
      var t = e.alternate, a = (e.mode & la) !== Qt;
      switch (a && $r(e), e.tag) {
        case 15:
        case 0:
          t = $y(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            ot
          );
          break;
        case 11:
          t = $y(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            ot
          );
          break;
        case 5:
          Sn(e);
        default:
          em(t, e), e = it = Ay(e, Fi), t = Od(t, e, Fi);
      }
      return a && Hu(e), t;
    }
    function Hi(e, t, a, i) {
      Jr(), Sn(t), qh = null, Cp = 0;
      var o = t.return;
      try {
        if (ps(
          e,
          o,
          t,
          a,
          ot
        )) {
          il = Np, Bo(
            e,
            Ma(a, e.current)
          ), it = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw it = o, f;
        il = Np, Bo(
          e,
          Ma(a, e.current)
        ), it = null;
        return;
      }
      t.flags & 32768 ? (St || i === wp ? e = !0 : Zh || (ot & 536870912) !== 0 ? e = !1 : (bf = e = !0, (i === rr || i === dr || i === qp || i === Xh) && (i = Su.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Yd(t, e)) : Cs(t);
    }
    function Cs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Yd(
            t,
            bf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, $r(t), a = ve(
          t,
          Cv,
          a,
          t,
          Fi
        ), (t.mode & la) !== Qt && bc(t), a !== null) {
          it = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          it = t;
          return;
        }
        it = t = e;
      } while (t !== null);
      il === lo && (il = kS);
    }
    function Yd(e, t) {
      do {
        var a = _v(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, it = a;
          return;
        }
        if ((e.mode & la) !== Qt) {
          bc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          it = e;
          return;
        }
        it = e = a;
      } while (e !== null);
      il = Mg, it = null;
    }
    function jd(e, t, a, i, o, f, d, h, b) {
      e.cancelPendingCommit = null;
      do
        Lo();
      while (na !== yr);
      if (ei.flushLegacyContextWarning(), ei.flushPendingUnsafeLifecycleWarnings(), (zt & (ja | ai)) !== zn)
        throw Error("Should not already be working.");
      if (ye !== null && typeof ye.markCommitStarted == "function" && ye.markCommitStarted(a), t === null) Ye();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= _0, zr(
          e,
          a,
          f,
          d,
          h,
          b
        ), e === qt && (it = qt = null, ot = 0), Kh = t, Af = e, Rf = a, ub = f, ib = o, e1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Em(cf, function() {
          return _s(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), pg = _h(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Q.T, Q.T = null, o = qe.p, qe.p = Bl, d = zt, zt |= ai;
          try {
            zd(e, t, a);
          } finally {
            zt = d, qe.p = o, Q.T = i;
          }
        }
        na = FS, Pn(), Gd(), jv();
      }
    }
    function Pn() {
      if (na === FS) {
        na = yr;
        var e = Af, t = Kh, a = Rf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Q.T, Q.T = null;
          var o = qe.p;
          qe.p = Bl;
          var f = zt;
          zt |= ai;
          try {
            Qh = a, Lh = e, sm(t, e), Lh = Qh = null, a = vb;
            var d = pv(e.containerInfo), h = a.focusedElem, b = a.selectionRange;
            if (d !== h && h && h.ownerDocument && mv(
              h.ownerDocument.documentElement,
              h
            )) {
              if (b !== null && by(h)) {
                var E = b.start, j = b.end;
                if (j === void 0 && (j = E), "selectionStart" in h)
                  h.selectionStart = E, h.selectionEnd = Math.min(
                    j,
                    h.value.length
                  );
                else {
                  var V = h.ownerDocument || document, q = V && V.defaultView || window;
                  if (q.getSelection) {
                    var k = q.getSelection(), ge = h.textContent.length, Be = Math.min(
                      b.start,
                      ge
                    ), Bt = b.end === void 0 ? Be : Math.min(b.end, ge);
                    !k.extend && Be > Bt && (d = Bt, Bt = Be, Be = d);
                    var dt = gy(
                      h,
                      Be
                    ), O = gy(
                      h,
                      Bt
                    );
                    if (dt && O && (k.rangeCount !== 1 || k.anchorNode !== dt.node || k.anchorOffset !== dt.offset || k.focusNode !== O.node || k.focusOffset !== O.offset)) {
                      var D = V.createRange();
                      D.setStart(dt.node, dt.offset), k.removeAllRanges(), Be > Bt ? (k.addRange(D), k.extend(O.node, O.offset)) : (D.setEnd(O.node, O.offset), k.addRange(D));
                    }
                  }
                }
              }
              for (V = [], k = h; k = k.parentNode; )
                k.nodeType === 1 && V.push({
                  element: k,
                  left: k.scrollLeft,
                  top: k.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < V.length; h++) {
                var z = V[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            Zg = !!pb, vb = pb = null;
          } finally {
            zt = f, qe.p = o, Q.T = i;
          }
        }
        e.current = t, na = IS;
      }
    }
    function Gd() {
      if (na === IS) {
        na = yr;
        var e = Af, t = Kh, a = Rf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Q.T, Q.T = null;
          var o = qe.p;
          qe.p = Bl;
          var f = zt;
          zt |= ai;
          try {
            ye !== null && typeof ye.markLayoutEffectsStarted == "function" && ye.markLayoutEffectsStarted(a), Qh = a, Lh = e, om(
              e,
              t.alternate,
              t
            ), Lh = Qh = null, ye !== null && typeof ye.markLayoutEffectsStopped == "function" && ye.markLayoutEffectsStopped();
          } finally {
            zt = f, qe.p = o, Q.T = i;
          }
        }
        na = PS;
      }
    }
    function jv() {
      if (na === lE || na === PS) {
        na = yr, S0();
        var e = Af, t = Kh, a = Rf, i = e1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? na = nb : (na = yr, Kh = Af = null, eu(e, e.pendingLanes), mr = 0, Qp = null);
        var f = e.pendingLanes;
        if (f === 0 && (Ef = null), o || Xo(e), o = ro(a), t = t.stateNode, ql && typeof ql.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case Bl:
                var h = fh;
                break;
              case Mn:
                h = ks;
                break;
              case Wu:
                h = cf;
                break;
              case hh:
                h = Js;
                break;
              default:
                h = cf;
            }
            ql.onCommitFiberRoot(
              Li,
              t,
              h,
              d
            );
          } catch (V) {
            ga || (ga = !0, console.error(
              "React instrumentation encountered an error: %s",
              V
            ));
          }
        if (el && e.memoizedUpdaters.clear(), hm(), i !== null) {
          d = Q.T, h = qe.p, qe.p = Bl, Q.T = null;
          try {
            var b = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var E = i[t], j = Gv(E.stack);
              ve(
                E.source,
                b,
                E.value,
                j
              );
            }
          } finally {
            Q.T = d, qe.p = h;
          }
        }
        (Rf & 3) !== 0 && Lo(), en(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (gg = !0, e === cb ? Gp++ : (Gp = 0, cb = e)) : Gp = 0, qc(0), Ye();
      }
    }
    function Gv(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function eu(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Yn(t)));
    }
    function Lo(e) {
      return Pn(), Gd(), jv(), _s();
    }
    function _s() {
      if (na !== nb) return !1;
      var e = Af, t = ub;
      ub = 0;
      var a = ro(Rf), i = Wu > a ? Wu : a;
      a = Q.T;
      var o = qe.p;
      try {
        qe.p = i, Q.T = null, i = ib, ib = null;
        var f = Af, d = Rf;
        if (na = yr, Kh = Af = null, Rf = 0, (zt & (ja | ai)) !== zn)
          throw Error("Cannot flush passive effects while already rendering.");
        ob = !0, Cg = !1, ye !== null && typeof ye.markPassiveEffectsStarted == "function" && ye.markPassiveEffectsStarted(d);
        var h = zt;
        if (zt |= ai, rm(f.current), Os(
          f,
          f.current,
          d,
          i
        ), ye !== null && typeof ye.markPassiveEffectsStopped == "function" && ye.markPassiveEffectsStopped(), Xo(f), zt = h, qc(0, !1), Cg ? f === Qp ? mr++ : (mr = 0, Qp = f) : mr = 0, Cg = ob = !1, ql && typeof ql.onPostCommitFiberRoot == "function")
          try {
            ql.onPostCommitFiberRoot(Li, f);
          } catch (E) {
            ga || (ga = !0, console.error(
              "React instrumentation encountered an error: %s",
              E
            ));
          }
        var b = f.current.stateNode;
        return b.effectDuration = 0, b.passiveEffectDuration = 0, !0;
      } finally {
        qe.p = o, Q.T = a, eu(e, t);
      }
    }
    function Vo(e, t, a) {
      t = Ma(a, t), t = Ll(e.stateNode, t, 2), e = gn(e, t, 2), e !== null && (Ou(e, 2), en(e));
    }
    function xe(e, t, a) {
      if (kh = !1, e.tag === 3)
        Vo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Vo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ef === null || !Ef.has(i))) {
              e = Ma(a, e), a = Jt(2), i = gn(t, a, 2), i !== null && (ms(
                a,
                i,
                t,
                e
              ), Ou(i, 2), en(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function bm(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new IT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (tb = !0, o.add(a), i = h0.bind(null, e, t, a), el && Zo(e, a), t.then(i, i));
    }
    function h0(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, ym() && Q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), qt === e && (ot & a) === a && (il === sr || il === I0 && (ot & 62914560) === ot && fu() - ab < $S ? (zt & ja) === zn && wc(e, 0) : lb |= a, hr === ot && (hr = 0)), en(e);
    }
    function Sm(e, t) {
      t === 0 && (t = xn()), e = ca(e, t), e !== null && (Ou(e, t), en(e));
    }
    function Hs(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Sm(e, a);
    }
    function xi(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Sm(e, a);
    }
    function Qd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === tf;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ve(
            o,
            Tm,
            i,
            o,
            (o.mode & Zb) === Qt
          ) : Qd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ve(
            o,
            Tm,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ve(
            o,
            Qd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Tm(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      he(!0);
      try {
        _a(t), a && zs(t), Gu(e, t.alternate, t, !1), a && Cd(e, t, 0, null, !1, 0);
      } finally {
        he(!1);
      }
    }
    function Xo(e) {
      var t = !0;
      e.current.mode & (Ta | Pu) || (t = !1), Qd(
        e,
        e.current,
        t
      );
    }
    function On(e) {
      if ((zt & ja) === zn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = oe(e) || "ReactComponent", _g !== null) {
            if (_g.has(t)) return;
            _g.add(t);
          } else _g = /* @__PURE__ */ new Set([t]);
          ve(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Zo(e, t) {
      el && e.memoizedUpdaters.forEach(function(a) {
        Va(e, a, t);
      });
    }
    function Em(e, t) {
      var a = Q.actQueue;
      return a !== null ? (a.push(t), uE) : oh(e, t);
    }
    function Qv(e) {
      ym() && Q.actQueue === null && ve(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          oe(e)
        );
      });
    }
    function en(e) {
      e !== Jh && e.next === null && (Jh === null ? Hg = Jh = e : Jh = Jh.next = e), xg = !0, Q.actQueue !== null ? sb || (sb = !0, yl()) : fb || (fb = !0, yl());
    }
    function qc(e, t) {
      if (!rb && xg) {
        rb = !0;
        do
          for (var a = !1, i = Hg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Zl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, Xd(i, f));
            } else
              f = ot, f = vl(
                i,
                i === qt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== gr
              ), (f & 3) === 0 || ci(i, f) || (a = !0, Xd(i, f));
            i = i.next;
          }
        while (a);
        rb = !1;
      }
    }
    function Ld() {
      Vd();
    }
    function Vd() {
      xg = sb = fb = !1;
      var e = 0;
      pr !== 0 && (Ko() && (e = pr), pr = 0);
      for (var t = fu(), a = null, i = Hg; i !== null; ) {
        var o = i.next, f = tu(i, t);
        f === 0 ? (i.next = null, a === null ? Hg = o : a.next = o, o === null && (Jh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (xg = !0)), i = o;
      }
      qc(e);
    }
    function tu(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Zl(f), h = 1 << d, b = o[d];
        b === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Mr(h, t)) : b <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = qt, a = ot, a = vl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== gr
      ), i = e.callbackNode, a === 0 || e === t && (_t === rr || _t === dr) || e.cancelPendingCommit !== null)
        return i !== null && Zd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || ci(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || Q.actQueue !== null && i !== db)
          Zd(i);
        else return t;
        switch (ro(a)) {
          case Bl:
          case Mn:
            a = ks;
            break;
          case Wu:
            a = cf;
            break;
          case hh:
            a = Js;
            break;
          default:
            a = cf;
        }
        return i = Wt.bind(null, e), Q.actQueue !== null ? (Q.actQueue.push(i), a = db) : a = oh(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && Zd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Wt(e, t) {
      if (gg = vg = !1, na !== yr && na !== nb)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Lo() && e.callbackNode !== a)
        return null;
      var i = ot;
      return i = vl(
        e,
        e === qt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== gr
      ), i === 0 ? null : (hl(
        e,
        i,
        t
      ), tu(e, fu()), e.callbackNode != null && e.callbackNode === a ? Wt.bind(null, e) : null);
    }
    function Xd(e, t) {
      if (Lo()) return null;
      vg = gg, gg = !1, hl(e, t, !0);
    }
    function Zd(e) {
      e !== db && e !== null && b0(e);
    }
    function yl() {
      Q.actQueue !== null && Q.actQueue.push(function() {
        return Vd(), null;
      }), mE(function() {
        (zt & (ja | ai)) !== zn ? oh(
          fh,
          Ld
        ) : Vd();
      });
    }
    function Am() {
      return pr === 0 && (pr = Fe()), pr;
    }
    function Rm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (W(e, "action"), bo("" + e));
    }
    function Om(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function jt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Rm(
          (o[ba] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ba] || null) ? Rm(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Ue(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (pr !== 0) {
                    var b = d ? Om(
                      o,
                      d
                    ) : new FormData(o), E = {
                      pending: !0,
                      data: b,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(E), Ac(
                      a,
                      E,
                      null,
                      b
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), b = d ? Om(
                    o,
                    d
                  ) : new FormData(o), E = {
                    pending: !0,
                    data: b,
                    method: o.method,
                    action: f
                  }, Object.freeze(E), Ac(
                    a,
                    E,
                    f,
                    b
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Hl(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        k0(i);
      }
      e.currentTarget = null;
    }
    function lu(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], b = h.instance, E = h.currentTarget;
              if (h = h.listener, b !== o && f.isPropagationStopped())
                break e;
              b !== null ? ve(
                b,
                Hl,
                f,
                h,
                E
              ) : Hl(f, h, E), o = b;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], b = h.instance, E = h.currentTarget, h = h.listener, b !== o && f.isPropagationStopped())
                break e;
              b !== null ? ve(
                b,
                Hl,
                f,
                h,
                E
              ) : Hl(f, h, E), o = b;
            }
        }
      }
    }
    function at(e, t) {
      hb.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Im];
      a === void 0 && (a = t[Im] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (kd(t, e, 2, !1), a.add(i));
    }
    function Kd(e, t, a) {
      hb.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), kd(
        a,
        e,
        i,
        t
      );
    }
    function Dm(e) {
      if (!e[Ng]) {
        e[Ng] = !0, ag.forEach(function(a) {
          a !== "selectionchange" && (hb.has(a) || Kd(a, !1, e), Kd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ng] || (t[Ng] = !0, Kd("selectionchange", !1, t));
      }
    }
    function kd(e, t, a, i) {
      switch (nh(t)) {
        case Bl:
          var o = p0;
          break;
        case Mn:
          o = ah;
          break;
        default:
          o = Bi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !N || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Il(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var b = d.tag;
                if ((b === 3 || b === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = ia(h), d === null) return;
              if (b = d.tag, b === 5 || b === 6 || b === 26 || b === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Yr(function() {
        var E = f, j = fc(a), V = [];
        e: {
          var q = Xb.get(e);
          if (q !== void 0) {
            var k = Ue, ge = e;
            switch (e) {
              case "keypress":
                if (So(a) === 0) break e;
              case "keydown":
              case "keyup":
                k = ET;
                break;
              case "focusin":
                ge = "focus", k = yt;
                break;
              case "focusout":
                ge = "blur", k = yt;
                break;
              case "beforeblur":
              case "afterblur":
                k = yt;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k = et;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k = Ne;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k = OT;
                break;
              case Gb:
              case Qb:
              case Lb:
                k = R0;
                break;
              case Vb:
                k = MT;
                break;
              case "scroll":
              case "scrollend":
                k = H;
                break;
              case "wheel":
                k = UT;
                break;
              case "copy":
              case "cut":
              case "paste":
                k = mT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k = Hb;
                break;
              case "toggle":
              case "beforetoggle":
                k = _T;
            }
            var Be = (t & 4) !== 0, Bt = !Be && (e === "scroll" || e === "scrollend"), dt = Be ? q !== null ? q + "Capture" : null : q;
            Be = [];
            for (var O = E, D; O !== null; ) {
              var z = O;
              if (D = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || D === null || dt === null || (z = zu(O, dt), z != null && Be.push(
                Pl(
                  O,
                  z,
                  D
                )
              )), Bt) break;
              O = O.return;
            }
            0 < Be.length && (q = new k(
              q,
              ge,
              null,
              a,
              j
            ), V.push({
              event: q,
              listeners: Be
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (q = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", q && a !== s && (ge = a.relatedTarget || a.fromElement) && (ia(ge) || ge[Xi]))
              break e;
            if ((k || q) && (q = j.window === j ? j : (q = j.ownerDocument) ? q.defaultView || q.parentWindow : window, k ? (ge = a.relatedTarget || a.toElement, k = E, ge = ge ? ia(ge) : null, ge !== null && (Bt = Ce(ge), Be = ge.tag, ge !== Bt || Be !== 5 && Be !== 27 && Be !== 6) && (ge = null)) : (k = null, ge = E), k !== ge)) {
              if (Be = et, z = "onMouseLeave", dt = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (Be = Hb, z = "onPointerLeave", dt = "onPointerEnter", O = "pointer"), Bt = k == null ? q : rn(k), D = ge == null ? q : rn(ge), q = new Be(
                z,
                O + "leave",
                k,
                a,
                j
              ), q.target = Bt, q.relatedTarget = D, z = null, ia(j) === E && (Be = new Be(
                dt,
                O + "enter",
                ge,
                a,
                j
              ), Be.target = D, Be.relatedTarget = Bt, z = Be), Bt = z, k && ge)
                t: {
                  for (Be = k, dt = ge, O = 0, D = Be; D; D = El(D))
                    O++;
                  for (D = 0, z = dt; z; z = El(z))
                    D++;
                  for (; 0 < O - D; )
                    Be = El(Be), O--;
                  for (; 0 < D - O; )
                    dt = El(dt), D--;
                  for (; O--; ) {
                    if (Be === dt || dt !== null && Be === dt.alternate)
                      break t;
                    Be = El(Be), dt = El(dt);
                  }
                  Be = null;
                }
              else Be = null;
              k !== null && Mm(
                V,
                q,
                k,
                Be,
                !1
              ), ge !== null && Bt !== null && Mm(
                V,
                Bt,
                ge,
                Be,
                !0
              );
            }
          }
          e: {
            if (q = E ? rn(E) : window, k = q.nodeName && q.nodeName.toLowerCase(), k === "select" || k === "input" && q.type === "file")
              var J = py;
            else if (rv(q))
              if (Yb)
                J = f0;
              else {
                J = vy;
                var fe = c0;
              }
            else
              k = q.nodeName, !k || k.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? E && oc(E.elementType) && (J = py) : J = o0;
            if (J && (J = J(e, E))) {
              Lr(
                V,
                J,
                a,
                j
              );
              break e;
            }
            fe && fe(e, q, E), e === "focusout" && E && q.type === "number" && E.memoizedProps.value != null && Hr(q, "number", q.value);
          }
          switch (fe = E ? rn(E) : window, e) {
            case "focusin":
              (rv(fe) || fe.contentEditable === "true") && (Ah = fe, D0 = E, gp = null);
              break;
            case "focusout":
              gp = D0 = Ah = null;
              break;
            case "mousedown":
              M0 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              M0 = !1, vv(
                V,
                a,
                j
              );
              break;
            case "selectionchange":
              if (wT) break;
            case "keydown":
            case "keyup":
              vv(
                V,
                a,
                j
              );
          }
          var ke;
          if (O0)
            e: {
              switch (e) {
                case "compositionstart":
                  var be = "onCompositionStart";
                  break e;
                case "compositionend":
                  be = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  be = "onCompositionUpdate";
                  break e;
              }
              be = void 0;
            }
          else
            Eh ? Fl(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === xb && (be = "onCompositionStart");
          be && (Nb && a.locale !== "ko" && (Eh || be !== "onCompositionStart" ? be === "onCompositionEnd" && Eh && (ke = Uu()) : (I = j, B = "value" in I ? I.value : I.textContent, Eh = !0)), fe = xs(
            E,
            be
          ), 0 < fe.length && (be = new _b(
            be,
            e,
            null,
            a,
            j
          ), V.push({
            event: be,
            listeners: fe
          }), ke ? be.data = ke : (ke = hi(a), ke !== null && (be.data = ke)))), (ke = xT ? Qr(e, a) : Kf(e, a)) && (be = xs(
            E,
            "onBeforeInput"
          ), 0 < be.length && (fe = new vT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            j
          ), V.push({
            event: fe,
            listeners: be
          }), fe.data = ke)), jt(
            V,
            e,
            E,
            a,
            j
          );
        }
        lu(V, t);
      });
    }
    function Pl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function xs(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = zu(e, a), o != null && i.unshift(
          Pl(e, o, f)
        ), o = zu(e, t), o != null && i.push(
          Pl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function El(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Mm(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, b = h.alternate, E = h.stateNode;
        if (h = h.tag, b !== null && b === i) break;
        h !== 5 && h !== 26 && h !== 27 || E === null || (b = E, o ? (E = zu(a, f), E != null && d.unshift(
          Pl(a, E, b)
        )) : o || (E = zu(a, f), E != null && d.push(
          Pl(a, E, b)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function au(e, t) {
      go(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || yp || (yp = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: un,
        possibleRegistrationNames: Zc
      };
      oc(e) || typeof t.is == "string" || hy(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Gt(e, t, a, i) {
      t !== a && (a = xl(a), xl(t) !== a && (i[e] = t));
    }
    function Ni(e, t, a) {
      t.forEach(function(i) {
        a[Um(i)] = i === "style" ? Yc(e) : e.getAttribute(i);
      });
    }
    function tn(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Jd(e, t) {
      return e = e.namespaceURI === tr || e.namespaceURI === yf ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function xl(e) {
      return S(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Re(e)
      ), Y(e)), (typeof e == "string" ? e : "" + e).replace(iE, `
`).replace(cE, "");
    }
    function zm(e, t) {
      return t = xl(t), xl(e) === t;
    }
    function Lu() {
    }
    function gt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Xf(i, t, !1), t === "body" || t === "textarea" && i === "" || cc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Xf("" + i, t, !1), t !== "body" && cc(e, "" + i));
          break;
        case "className":
          Ve(e, "class", i);
          break;
        case "tabIndex":
          Ve(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ve(e, a, i);
          break;
        case "style":
          Zf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            Ve(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          W(i, a), i = bo("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Bg || (Bg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || qg || (qg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || wg ? t !== "button" || o.type == null || o.type === "submit" || wg ? typeof i == "function" && (o.name == null || u1 || (u1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Bg || (Bg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || qg || (qg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (wg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (wg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && gt(e, t, "name", o.name, o, null), gt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), gt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), gt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (gt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), gt(e, t, "method", o.method, o, null), gt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          W(i, a), i = bo("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && tn(a, i), e.onclick = Lu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && tn(a, i), at("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && tn(a, i), at("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          W(i, a), a = bo("" + i), e.setAttributeNS(vr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (W(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Yg[a] || (Yg[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (W(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (W(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (W(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          at("beforetoggle", e), at("toggle", e), st(e, "popover", i);
          break;
        case "xlinkActuate":
          al(
            e,
            vr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          al(
            e,
            vr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          al(
            e,
            vr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          al(
            e,
            vr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          al(
            e,
            vr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          al(
            e,
            vr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          al(
            e,
            yb,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          al(
            e,
            yb,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          al(
            e,
            yb,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), st(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          i1 || i == null || typeof i != "object" || (i1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Br(a), st(e, a, i)) : un.hasOwnProperty(a) && i != null && typeof i != "function" && tn(a, i);
      }
    }
    function Bc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Zf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? cc(e, i) : (typeof i == "number" || typeof i == "bigint") && cc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && tn(a, i), at("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && tn(a, i), at("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && tn(a, i), e.onclick = Lu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (un.hasOwnProperty(a))
            i != null && typeof i != "function" && tn(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[ba] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : st(e, a, i);
            }
      }
    }
    function Ft(e, t, a) {
      switch (au(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          at("error", e), at("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    gt(e, t, f, d, a, null);
                }
            }
          o && gt(e, t, "srcSet", a.srcSet, a, null), i && gt(e, t, "src", a.src, a, null);
          return;
        case "input":
          Se("input", a), at("invalid", e);
          var h = f = d = o = null, b = null, E = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var j = a[i];
              if (j != null)
                switch (i) {
                  case "name":
                    o = j;
                    break;
                  case "type":
                    d = j;
                    break;
                  case "checked":
                    b = j;
                    break;
                  case "defaultChecked":
                    E = j;
                    break;
                  case "value":
                    f = j;
                    break;
                  case "defaultValue":
                    h = j;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (j != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    gt(e, t, i, j, a, null);
                }
            }
          fi(e, a), iv(
            e,
            f,
            h,
            b,
            E,
            d,
            o,
            !1
          ), Du(e);
          return;
        case "select":
          Se("select", a), at("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  gt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Qf(e, a), t = f, a = d, e.multiple = !!i, t != null ? Mu(e, !!i, t, !1) : a != null && Mu(e, !!i, a, !0);
          return;
        case "textarea":
          Se("textarea", a), at("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  gt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Nn(e, a), oy(e, i, o, f), Du(e);
          return;
        case "option":
          cy(e, a);
          for (b in a)
            if (a.hasOwnProperty(b) && (i = a[b], i != null))
              switch (b) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  gt(e, t, b, i, a, null);
              }
          return;
        case "dialog":
          at("beforetoggle", e), at("toggle", e), at("cancel", e), at("close", e);
          break;
        case "iframe":
        case "object":
          at("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Lp.length; i++)
            at(Lp[i], e);
          break;
        case "image":
          at("error", e), at("load", e);
          break;
        case "details":
          at("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          at("error", e), at("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (E in a)
            if (a.hasOwnProperty(E) && (i = a[E], i != null))
              switch (E) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  gt(e, t, E, i, a, null);
              }
          return;
        default:
          if (oc(t)) {
            for (j in a)
              a.hasOwnProperty(j) && (i = a[j], i !== void 0 && Bc(
                e,
                t,
                j,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && gt(e, t, h, i, a, null));
    }
    function Lv(e, t, a, i) {
      switch (au(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, b = null, E = null, j = null;
          for (k in a) {
            var V = a[k];
            if (a.hasOwnProperty(k) && V != null)
              switch (k) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  b = V;
                default:
                  i.hasOwnProperty(k) || gt(
                    e,
                    t,
                    k,
                    null,
                    i,
                    V
                  );
              }
          }
          for (var q in i) {
            var k = i[q];
            if (V = a[q], i.hasOwnProperty(q) && (k != null || V != null))
              switch (q) {
                case "type":
                  f = k;
                  break;
                case "name":
                  o = k;
                  break;
                case "checked":
                  E = k;
                  break;
                case "defaultChecked":
                  j = k;
                  break;
                case "value":
                  d = k;
                  break;
                case "defaultValue":
                  h = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  k !== V && gt(
                    e,
                    t,
                    q,
                    k,
                    i,
                    V
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || n1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), n1 = !0), !t || i || a1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), a1 = !0), si(
            e,
            d,
            h,
            b,
            E,
            j,
            f,
            o
          );
          return;
        case "select":
          k = d = h = q = null;
          for (f in a)
            if (b = a[f], a.hasOwnProperty(f) && b != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  k = b;
                default:
                  i.hasOwnProperty(f) || gt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    b
                  );
              }
          for (o in i)
            if (f = i[o], b = a[o], i.hasOwnProperty(o) && (f != null || b != null))
              switch (o) {
                case "value":
                  q = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== b && gt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    b
                  );
              }
          i = h, t = d, a = k, q != null ? Mu(e, !!t, q, !1) : !!a != !!t && (i != null ? Mu(e, !!t, i, !0) : Mu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          k = q = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  gt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  q = o;
                  break;
                case "defaultValue":
                  k = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && gt(e, t, d, o, i, f);
              }
          xr(e, q, k);
          return;
        case "option":
          for (var ge in a)
            if (q = a[ge], a.hasOwnProperty(ge) && q != null && !i.hasOwnProperty(ge))
              switch (ge) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  gt(
                    e,
                    t,
                    ge,
                    null,
                    i,
                    q
                  );
              }
          for (b in i)
            if (q = i[b], k = a[b], i.hasOwnProperty(b) && q !== k && (q != null || k != null))
              switch (b) {
                case "selected":
                  e.selected = q && typeof q != "function" && typeof q != "symbol";
                  break;
                default:
                  gt(
                    e,
                    t,
                    b,
                    q,
                    i,
                    k
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var Be in a)
            q = a[Be], a.hasOwnProperty(Be) && q != null && !i.hasOwnProperty(Be) && gt(
              e,
              t,
              Be,
              null,
              i,
              q
            );
          for (E in i)
            if (q = i[E], k = a[E], i.hasOwnProperty(E) && q !== k && (q != null || k != null))
              switch (E) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  gt(
                    e,
                    t,
                    E,
                    q,
                    i,
                    k
                  );
              }
          return;
        default:
          if (oc(t)) {
            for (var Bt in a)
              q = a[Bt], a.hasOwnProperty(Bt) && q !== void 0 && !i.hasOwnProperty(Bt) && Bc(
                e,
                t,
                Bt,
                void 0,
                i,
                q
              );
            for (j in i)
              q = i[j], k = a[j], !i.hasOwnProperty(j) || q === k || q === void 0 && k === void 0 || Bc(
                e,
                t,
                j,
                q,
                i,
                k
              );
            return;
          }
      }
      for (var dt in a)
        q = a[dt], a.hasOwnProperty(dt) && q != null && !i.hasOwnProperty(dt) && gt(e, t, dt, null, i, q);
      for (V in i)
        q = i[V], k = a[V], !i.hasOwnProperty(V) || q === k || q == null && k == null || gt(e, t, V, q, i, k);
    }
    function Um(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Yc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Cm(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (te(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || er.has(f) ? (te(d, f), i += o + f.replace(Fu, "-$1").toLowerCase().replace(Iu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Fu, "-$1").toLowerCase().replace(Iu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = xl(i), xl(t) !== i && (a.style = Yc(e)));
      }
    }
    function ea(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (W(i, t), e === "" + i)
              return;
        }
      Gt(t, e, i, f);
    }
    function _m(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Gt(t, e, i, f);
    }
    function Hm(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (W(i, a), e === "" + i)
              return;
        }
      Gt(t, e, i, f);
    }
    function Vv(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (W(i, t), e === "" + i))
              return;
        }
      Gt(t, e, i, f);
    }
    function At(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (W(i, t), a = bo("" + i), e === a)
              return;
        }
      Gt(t, e, i, f);
    }
    function Ht(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (oc(t)) {
        for (var b in a)
          if (a.hasOwnProperty(b)) {
            var E = a[b];
            if (E != null) {
              if (un.hasOwnProperty(b))
                typeof E != "function" && tn(b, E);
              else if (a.suppressHydrationWarning !== !0)
                switch (b) {
                  case "children":
                    typeof E != "string" && typeof E != "number" || Gt(
                      "children",
                      e.textContent,
                      E,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, E = E ? E.__html : void 0, E != null && (E = Jd(e, E), Gt(
                      b,
                      d,
                      E,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(b), Cm(e, E, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(b.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      b
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Xe(
                      e,
                      "class",
                      E
                    ), Gt(
                      "className",
                      d,
                      E,
                      o
                    );
                    continue;
                  default:
                    i.context === no && t !== "svg" && t !== "math" ? f.delete(b.toLowerCase()) : f.delete(b), d = Xe(
                      e,
                      b,
                      E
                    ), Gt(
                      b,
                      d,
                      E,
                      o
                    );
                }
            }
          }
      } else
        for (E in a)
          if (a.hasOwnProperty(E) && (b = a[E], b != null)) {
            if (un.hasOwnProperty(E))
              typeof b != "function" && tn(E, b);
            else if (a.suppressHydrationWarning !== !0)
              switch (E) {
                case "children":
                  typeof b != "string" && typeof b != "number" || Gt(
                    "children",
                    e.textContent,
                    b,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, b = b ? b.__html : void 0, b != null && (b = Jd(e, b), d !== b && (o[E] = { __html: d }));
                  continue;
                case "className":
                  ea(
                    e,
                    E,
                    "class",
                    b,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  ea(
                    e,
                    E,
                    "tabindex",
                    b,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(E), Cm(e, b, o);
                  continue;
                case "multiple":
                  f.delete(E), Gt(
                    E,
                    e.multiple,
                    b,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(E), Gt(
                    E,
                    e.muted,
                    b,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Gt(
                    E,
                    e.autofocus,
                    b,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(E), d = e.getAttribute("data"), Gt(
                      E,
                      d,
                      b,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(b !== "" || t === "a" && E === "href" || t === "object" && E === "data")) {
                    console.error(
                      E === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      E,
                      E
                    );
                    continue;
                  }
                  At(
                    e,
                    E,
                    E,
                    b,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(E), typeof b == "function") {
                    f.delete(E.toLowerCase()), E === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === oE) {
                    f.delete(E.toLowerCase()), Gt(
                      E,
                      "function",
                      b,
                      o
                    );
                    continue;
                  }
                  At(
                    e,
                    E,
                    E.toLowerCase(),
                    b,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  At(
                    e,
                    E,
                    "xlink:href",
                    b,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Hm(
                    e,
                    E,
                    "contenteditable",
                    b,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Hm(
                    e,
                    E,
                    "spellcheck",
                    b,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Hm(
                    e,
                    E,
                    E,
                    b,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  _m(
                    e,
                    E,
                    E.toLowerCase(),
                    b,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var j = d = E, V = o;
                    if (f.delete(j), h = h.getAttribute(j), h === null)
                      switch (typeof b) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (b === !1) break e;
                      }
                    else if (b != null)
                      switch (typeof b) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (b === !0 && h === "") break e;
                          break;
                        default:
                          if (W(b, d), h === "" + b)
                            break e;
                      }
                    Gt(
                      d,
                      h,
                      b,
                      V
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, j = d = E, V = o, f.delete(j), h = h.getAttribute(j), h === null)
                      switch (typeof b) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(b) || 1 > b) break e;
                      }
                    else if (b != null)
                      switch (typeof b) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(b) || 1 > b) && (W(b, d), h === "" + b))
                            break e;
                      }
                    Gt(
                      d,
                      h,
                      b,
                      V
                    );
                  }
                  continue;
                case "rowSpan":
                  Vv(
                    e,
                    E,
                    "rowspan",
                    b,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Vv(
                    e,
                    E,
                    E,
                    b,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  ea(
                    e,
                    E,
                    "x-height",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  ea(
                    e,
                    E,
                    "xlink:actuate",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  ea(
                    e,
                    E,
                    "xlink:arcrole",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  ea(
                    e,
                    E,
                    "xlink:role",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  ea(
                    e,
                    E,
                    "xlink:show",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  ea(
                    e,
                    E,
                    "xlink:title",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  ea(
                    e,
                    E,
                    "xlink:type",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  ea(
                    e,
                    E,
                    "xml:base",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  ea(
                    e,
                    E,
                    "xml:lang",
                    b,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  ea(
                    e,
                    E,
                    "xml:space",
                    b,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  b !== "" || Yg[E] || (Yg[E] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    E
                  )), _m(
                    e,
                    E,
                    E,
                    b,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < E.length) || E[0] !== "o" && E[0] !== "O" || E[1] !== "n" && E[1] !== "N") {
                    h = Br(E), d = !1, i.context === no && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (j = E.toLowerCase(), j = Jc.hasOwnProperty(
                      j
                    ) && Jc[j] || null, j !== null && j !== E && (d = !0, f.delete(j)), f.delete(h));
                    e: if (j = e, V = h, h = b, je(V))
                      if (j.hasAttribute(V))
                        j = j.getAttribute(
                          V
                        ), W(
                          h,
                          V
                        ), h = j === "" + h ? h : j;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (j = V.toLowerCase().slice(0, 5), j !== "data-" && j !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Gt(
                      E,
                      h,
                      b,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ni(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function nt(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function ut(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Ot(e) {
      switch (e) {
        case yf:
          return $h;
        case tr:
          return Qg;
        default:
          return no;
      }
    }
    function ma(e, t) {
      if (e === no)
        switch (t) {
          case "svg":
            return $h;
          case "math":
            return Qg;
          default:
            return no;
        }
      return e === $h && t === "foreignObject" ? no : e;
    }
    function nu(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ko() {
      var e = window.event;
      return e && e.type === "popstate" ? e === gb ? !1 : (gb = e, !0) : (gb = null, !1);
    }
    function xm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Vu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function It(e, t, a, i) {
      Lv(e, t, a, i), e[ba] = i;
    }
    function Xu(e) {
      cc(e, "");
    }
    function jc(e, t, a) {
      e.nodeValue = a;
    }
    function uu(e) {
      return e === "head";
    }
    function ln(e, t) {
      e.removeChild(t);
    }
    function ko(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Jo(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Gg) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & sE && Io(d.documentElement), a & rE && Io(d.body), a & dE)
                for (a = d.head, Io(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, b = d.nodeName;
                  d[sf] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), Vc(t);
              return;
            }
            o--;
          } else
            a === jg || a === ao || a === Vp ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Vc(t);
    }
    function pa(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Nm(e) {
      e.nodeValue = "";
    }
    function wm(e, t) {
      t = t[hE], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function $d(e, t) {
      e.nodeValue = t;
    }
    function $o(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            $o(a), sn(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function wi(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[sf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          W(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = wl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Nl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = wl(e.nextSibling), e === null)) return null;
      return e;
    }
    function iu(e) {
      return e.data === Vp || e.data === ao && e.ownerDocument.readyState === o1;
    }
    function Wo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== ao || a.readyState === o1)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function wl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === jg || t === Vp || t === ao || t === mb || t === c1)
            break;
          if (t === Gg) return null;
        }
      }
      return e;
    }
    function Wd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Um(f.name)] = f.name.toLowerCase() === "style" ? Yc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Fd(e, t, a) {
      return a === null || a[fE] !== !0 ? (e.nodeValue === t ? e = null : (t = xl(t), e = xl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function qm(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Gg) {
            if (t === 0)
              return wl(e.nextSibling);
            t--;
          } else
            a !== jg && a !== Vp && a !== ao || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Fo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === jg || a === Vp || a === ao) {
            if (t === 0) return e;
            t--;
          } else a === Gg && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Bm(e) {
      Vc(e);
    }
    function Ha(e) {
      Vc(e);
    }
    function Ym(e, t, a, i, o) {
      switch (o && qr(e, i.ancestorInfo), t = ut(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function xa(e, t, a, i) {
      if (!a[Xi] && zl(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Ft(a, e, t), a[Kl] = i, a[ba] = t;
    }
    function Io(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      sn(e);
    }
    function Ns(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Xv(e, t, a) {
      var i = Wh;
      if (i && typeof t == "string" && t) {
        var o = Da(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), y1.has(o) || (y1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Ft(t, "link", e), _(t), i.head.appendChild(t)));
      }
    }
    function Zu(e, t, a, i) {
      var o = (o = ou.current) ? Ns(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = qi(a.href), t = v(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = qi(a.href);
            var f = v(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: br, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              cu(e)
            )) && !f._p && (d.instance = f, d.state.loading = Xp | Tu), !Eu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Eu.set(e, h), f || Zv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Gc(t) + `
  + ` + Gc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Gc(t) + `
  + ` + Gc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Qc(a), t = v(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Gc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Ju.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Ju.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Ju.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function qi(e) {
      return 'href="' + Da(e) + '"';
    }
    function cu(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function jm(e) {
      return Ie({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Zv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Xp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Xp;
      }), t.addEventListener("error", function() {
        return i.loading |= d1;
      }), Ft(t, "link", a), _(t), e.head.appendChild(t));
    }
    function Qc(e) {
      return '[src="' + Da(e) + '"]';
    }
    function Lc(e) {
      return "script[async]" + e;
    }
    function Id(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Da(a.href) + '"]'
            );
            if (i)
              return t.instance = i, _(i), i;
            var o = Ie({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), _(i), Ft(i, "style", o), Pd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = qi(a.href);
            var f = e.querySelector(
              cu(o)
            );
            if (f)
              return t.state.loading |= Tu, t.instance = f, _(f), f;
            i = jm(a), (o = Eu.get(o)) && Gm(i, o), f = (e.ownerDocument || e).createElement("link"), _(f);
            var d = f;
            return d._p = new Promise(function(h, b) {
              d.onload = h, d.onerror = b;
            }), Ft(f, "link", i), t.state.loading |= Tu, Pd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Qc(a.src), (o = e.querySelector(
              Lc(f)
            )) ? (t.instance = o, _(o), o) : (i = a, (o = Eu.get(f)) && (i = Ie({}, a), Qm(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), _(o), Ft(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Tu) === br && (i = t.instance, t.state.loading |= Tu, Pd(i, a.precedence, e));
      return t.instance;
    }
    function Pd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Gm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Qm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Lm(e, t, a) {
      if (Lg === null) {
        var i = /* @__PURE__ */ new Map(), o = Lg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Lg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[sf] || f[Kl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== yf) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Vm(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Po(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === $h || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = nt(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function ws(e) {
      return !(e.type === "stylesheet" && (e.state.loading & h1) === br);
    }
    function Kv() {
    }
    function kv(e, t, a) {
      if (Zp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = Zp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Tu) === br) {
        if (t.instance === null) {
          var o = qi(a.href), f = e.querySelector(
            cu(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = qs.bind(i), e.then(i, i)), t.state.loading |= Tu, t.instance = f, _(f);
            return;
          }
          f = e.ownerDocument || e, a = jm(a), (o = Eu.get(o)) && Gm(a, o), f = f.createElement("link"), _(f);
          var d = f;
          d._p = new Promise(function(h, b) {
            d.onload = h, d.onerror = b;
          }), Ft(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & h1) === br && (i.count++, t = qs.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function Jv() {
      if (Zp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = Zp;
      return e.stylesheets && e.count === 0 && eh(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && eh(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function qs() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          eh(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function eh(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Vg = /* @__PURE__ */ new Map(), t.forEach($v, e), Vg = null, qs.call(e));
    }
    function $v(e, t) {
      if (!(t.state.loading & Tu)) {
        var a = Vg.get(e);
        if (a) var i = a.get(Sb);
        else {
          a = /* @__PURE__ */ new Map(), Vg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Sb, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Sb, o), a.set(d, o), this.count++, i = qs.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Tu;
      }
    }
    function th(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = gr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = so(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = so(0), this.hiddenUpdates = so(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Xm(e, t, a, i, o, f, d, h, b, E, j, V) {
      return e = new th(
        e,
        t,
        a,
        d,
        h,
        b,
        E,
        V
      ), t = jT, f === !0 && (t |= Ta | Pu), el && (t |= la), f = M(3, null, null, t), e.current = f, f.stateNode = e, t = es(), vc(t), e.pooledCache = t, vc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, oa(f), e;
    }
    function Zm(e) {
      return e ? (e = mf, e) : mf;
    }
    function Mt(e, t, a, i, o, f) {
      if (ql && typeof ql.onScheduleFiberRoot == "function")
        try {
          ql.onScheduleFiberRoot(Li, i, a);
        } catch (d) {
          ga || (ga = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      ye !== null && typeof ye.markRenderScheduled == "function" && ye.markRenderScheduled(t), o = Zm(o), i.context === null ? i.context = o : i.pendingContext = o, Sa && wa !== null && !g1 && (g1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        oe(wa) || "Unknown"
      )), i = Gn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = gn(e, i, t), a !== null && ($t(a, e, t), Ti(a, e, t));
    }
    function lh(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Km(e, t) {
      lh(e, t), (e = e.alternate) && lh(e, t);
    }
    function km(e) {
      if (e.tag === 13) {
        var t = ca(e, 67108864);
        t !== null && $t(t, e, 67108864), Km(e, 67108864);
      }
    }
    function y0() {
      return wa;
    }
    function m0() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = wf(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function p0(e, t, a, i) {
      var o = Q.T;
      Q.T = null;
      var f = qe.p;
      try {
        qe.p = Bl, Bi(e, t, a, i);
      } finally {
        qe.p = f, Q.T = o;
      }
    }
    function ah(e, t, a, i) {
      var o = Q.T;
      Q.T = null;
      var f = qe.p;
      try {
        qe.p = Mn, Bi(e, t, a, i);
      } finally {
        qe.p = f, Q.T = o;
      }
    }
    function Bi(e, t, a, i) {
      if (Zg) {
        var o = Bs(i);
        if (o === null)
          Il(
            e,
            t,
            i,
            Kg,
            a
          ), Yi(e, i);
        else if (Ys(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Yi(e, i), t & 4 && -1 < vE.indexOf(e)) {
          for (; o !== null; ) {
            var f = zl(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ll(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var b = 1 << 31 - Zl(d);
                        h.entanglements[1] |= b, d &= ~b;
                      }
                      en(f), (zt & (ja | ai)) === zn && (Ug = fu() + WS, qc(0));
                    }
                  }
                  break;
                case 13:
                  h = ca(f, 2), h !== null && $t(h, f, 2), Nc(), Km(f, 2);
              }
            if (f = Bs(i), f === null && Il(
              e,
              t,
              i,
              Kg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Il(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Bs(e) {
      return e = fc(e), ef(e);
    }
    function ef(e) {
      if (Kg = null, e = ia(e), e !== null) {
        var t = Ce(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Rt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Kg = e, null;
    }
    function nh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Bl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Mn;
        case "message":
          switch (Qi()) {
            case fh:
              return Bl;
            case ks:
              return Mn;
            case cf:
            case T0:
              return Wu;
            case Js:
              return hh;
            default:
              return Wu;
          }
        default:
          return Wu;
      }
    }
    function Yi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Of = null;
          break;
        case "dragenter":
        case "dragleave":
          Df = null;
          break;
        case "mouseover":
        case "mouseout":
          Mf = null;
          break;
        case "pointerover":
        case "pointerout":
          kp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Jp.delete(t.pointerId);
      }
    }
    function va(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = zl(t), t !== null && km(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Ys(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Of = va(
            Of,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Df = va(
            Df,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Mf = va(
            Mf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return kp.set(
            f,
            va(
              kp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Jp.set(
            f,
            va(
              Jp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function Wv(e) {
      var t = ia(e.target);
      if (t !== null) {
        var a = Ce(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Rt(a), t !== null) {
              e.blockedOn = t, ho(e.priority, function() {
                if (a.tag === 13) {
                  var i = ya(a);
                  i = Dl(i);
                  var o = ca(
                    a,
                    i
                  );
                  o !== null && $t(o, a, i), Km(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function js(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Bs(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = zl(a), t !== null && km(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Jm(e, t, a) {
      js(e) && a.delete(t);
    }
    function Fv() {
      Tb = !1, Of !== null && js(Of) && (Of = null), Df !== null && js(Df) && (Df = null), Mf !== null && js(Mf) && (Mf = null), kp.forEach(Jm), Jp.forEach(Jm);
    }
    function Gs(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Tb || (Tb = !0, Pt.unstable_scheduleCallback(
        Pt.unstable_NormalPriority,
        Fv
      )));
    }
    function Iv(e) {
      kg !== e && (kg = e, Pt.unstable_scheduleCallback(
        Pt.unstable_NormalPriority,
        function() {
          kg === e && (kg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (ef(i || a) === null)
                continue;
              break;
            }
            var f = zl(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), Ac(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Vc(e) {
      function t(b) {
        return Gs(b, e);
      }
      Of !== null && Gs(Of, e), Df !== null && Gs(Df, e), Mf !== null && Gs(Mf, e), kp.forEach(t), Jp.forEach(t);
      for (var a = 0; a < zf.length; a++) {
        var i = zf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < zf.length && (a = zf[0], a.blockedOn === null); )
        Wv(a), a.blockedOn === null && zf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ba] || null;
          if (typeof f == "function")
            d || Iv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ba] || null)
                h = d.formAction;
              else if (ef(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Iv(a);
          }
        }
    }
    function uh(e) {
      this._internalRoot = e;
    }
    function Qs(e) {
      this._internalRoot = e;
    }
    function Pv(e) {
      e[Xi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Pt = iT(), Ls = uy(), v0 = cT(), Ie = Object.assign, Vs = Symbol.for("react.element"), ji = Symbol.for("react.transitional.element"), Xc = Symbol.for("react.portal"), Ke = Symbol.for("react.fragment"), tf = Symbol.for("react.strict_mode"), lf = Symbol.for("react.profiler"), $m = Symbol.for("react.provider"), ih = Symbol.for("react.consumer"), an = Symbol.for("react.context"), Ku = Symbol.for("react.forward_ref"), af = Symbol.for("react.suspense"), Gi = Symbol.for("react.suspense_list"), Xs = Symbol.for("react.memo"), Na = Symbol.for("react.lazy"), Wm = Symbol.for("react.activity"), eg = Symbol.for("react.memo_cache_sentinel"), Fm = Symbol.iterator, ch = Symbol.for("react.client.reference"), Ge = Array.isArray, Q = Ls.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qe = v0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g0 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Zs = [], Ks = [], nn = -1, ku = ht(null), nf = ht(null), ou = ht(null), uf = ht(null), Ju = Object.prototype.hasOwnProperty, oh = Pt.unstable_scheduleCallback, b0 = Pt.unstable_cancelCallback, tg = Pt.unstable_shouldYield, S0 = Pt.unstable_requestPaint, fu = Pt.unstable_now, Qi = Pt.unstable_getCurrentPriorityLevel, fh = Pt.unstable_ImmediatePriority, ks = Pt.unstable_UserBlockingPriority, cf = Pt.unstable_NormalPriority, T0 = Pt.unstable_LowPriority, Js = Pt.unstable_IdlePriority, E0 = Pt.log, Dn = Pt.unstable_setDisableYieldValue, Li = null, ql = null, ye = null, ga = !1, el = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Zl = Math.clz32 ? Math.clz32 : fo, sh = Math.log, $u = Math.LN2, rh = 256, dh = 4194304, Bl = 2, Mn = 8, Wu = 32, hh = 268435456, Vi = Math.random().toString(36).slice(2), Kl = "__reactFiber$" + Vi, ba = "__reactProps$" + Vi, Xi = "__reactContainer$" + Vi, Im = "__reactEvents$" + Vi, lg = "__reactListeners$" + Vi, of = "__reactHandles$" + Vi, ff = "__reactResources$" + Vi, sf = "__reactMarker$" + Vi, ag = /* @__PURE__ */ new Set(), un = {}, Zc = {}, ng = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, yh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), mh = {}, ph = {}, Zi = 0, Pm, ep, ug, tp, rf, ig, cg;
    dn.__reactDisabledLog = !0;
    var lp, $s, df = !1, Ws = new (typeof WeakMap == "function" ? WeakMap : Map)(), wa = null, Sa = !1, A0 = /[\n"\\]/g, ap = !1, np = !1, up = !1, ip = !1, vh = !1, cp = !1, Fs = ["value", "defaultValue"], og = !1, fg = /["'&<>\n\t]|^\s|\s$/, op = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), gh = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), bh = gh.concat(["button"]), fp = "dd dt li option optgroup p rp rt".split(" "), sp = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, hf = {}, su = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Fu = /([A-Z])/g, Iu = /^ms-/, Is = /^(?:webkit|moz|o)[A-Z]/, Ps = /^-ms-/, Ki = /-(.)/g, sg = /;\s*$/, Kc = {}, kc = {}, rg = !1, rp = !1, er = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), tr = "http://www.w3.org/1998/Math/MathML", yf = "http://www.w3.org/2000/svg", Sh = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Jc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dp = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ru = {}, hp = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Th = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), yp = !1, ta = {}, lr = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, m = null, g = !1, R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = !1;
    if (R)
      try {
        var $ = {};
        Object.defineProperty($, "passive", {
          get: function() {
            N = !0;
          }
        }), window.addEventListener("test", $, $), window.removeEventListener("test", $, $);
      } catch {
        N = !1;
      }
    var I = null, B = null, G = null, ze = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ue = Cl(ze), bt = Ie({}, ze, { view: 0, detail: 0 }), H = Cl(bt), U, x, F, me = Ie({}, bt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== F && (F && e.type === "mousemove" ? (U = e.screenX - F.screenX, x = e.screenY - F.screenY) : x = U = 0, F = e), U);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : x;
      }
    }), et = Cl(me), De = Ie({}, me, { dataTransfer: 0 }), Ne = Cl(De), Al = Ie({}, bt, { relatedTarget: 0 }), yt = Cl(Al), ki = Ie({}, ze, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), R0 = Cl(ki), yT = Ie({}, ze, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), mT = Cl(yT), pT = Ie({}, ze, { data: 0 }), _b = Cl(
      pT
    ), vT = _b, gT = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, bT = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, ST = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, TT = Ie({}, bt, {
      key: function(e) {
        if (e.key) {
          var t = gT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = So(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gr,
      charCode: function(e) {
        return e.type === "keypress" ? So(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ET = Cl(TT), AT = Ie({}, me, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Hb = Cl(AT), RT = Ie({}, bt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gr
    }), OT = Cl(RT), DT = Ie({}, ze, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), MT = Cl(DT), zT = Ie({}, me, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), UT = Cl(zT), CT = Ie({}, ze, {
      newState: 0,
      oldState: 0
    }), _T = Cl(CT), HT = [9, 13, 27, 32], xb = 229, O0 = R && "CompositionEvent" in window, mp = null;
    R && "documentMode" in document && (mp = document.documentMode);
    var xT = R && "TextEvent" in window && !mp, Nb = R && (!O0 || mp && 8 < mp && 11 >= mp), wb = 32, qb = String.fromCharCode(wb), Bb = !1, Eh = !1, NT = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, pp = null, vp = null, Yb = !1;
    R && (Yb = my("input") && (!document.documentMode || 9 < document.documentMode));
    var qa = typeof Object.is == "function" ? Object.is : s0, wT = R && "documentMode" in document && 11 >= document.documentMode, Ah = null, D0 = null, gp = null, M0 = !1, Rh = {
      animationend: Cu("Animation", "AnimationEnd"),
      animationiteration: Cu("Animation", "AnimationIteration"),
      animationstart: Cu("Animation", "AnimationStart"),
      transitionrun: Cu("Transition", "TransitionRun"),
      transitionstart: Cu("Transition", "TransitionStart"),
      transitioncancel: Cu("Transition", "TransitionCancel"),
      transitionend: Cu("Transition", "TransitionEnd")
    }, z0 = {}, jb = {};
    R && (jb = document.createElement("div").style, "AnimationEvent" in window || (delete Rh.animationend.animation, delete Rh.animationiteration.animation, delete Rh.animationstart.animation), "TransitionEvent" in window || delete Rh.transitionend.transition);
    var Gb = dc("animationend"), Qb = dc("animationiteration"), Lb = dc("animationstart"), qT = dc("transitionrun"), BT = dc("transitionstart"), YT = dc("transitioncancel"), Vb = dc("transitionend"), Xb = /* @__PURE__ */ new Map(), U0 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    U0.push("scrollEnd");
    var C0 = /* @__PURE__ */ new WeakMap(), dg = 1, $c = 2, du = [], Oh = 0, _0 = 0, mf = {};
    Object.freeze(mf);
    var hu = null, Dh = null, Qt = 0, jT = 1, la = 2, Ta = 8, Pu = 16, Zb = 64, Kb = !1;
    try {
      var kb = Object.preventExtensions({});
    } catch {
      Kb = !0;
    }
    var Mh = [], zh = 0, hg = null, yg = 0, yu = [], mu = 0, ar = null, Wc = 1, Fc = "", Ba = null, ul = null, St = !1, Ic = !1, pu = null, nr = null, Ji = !1, H0 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Jb = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var GT = performance, $b = function() {
        return GT.now();
      };
    else {
      var QT = Date;
      $b = function() {
        return QT.now();
      };
    }
    var x0 = ht(null), N0 = ht(null), Wb = {}, mg = null, Uh = null, Ch = !1, LT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, VT = Pt.unstable_scheduleCallback, XT = Pt.unstable_NormalPriority, Yl = {
      $$typeof: an,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, _h = Pt.unstable_now, Fb = -0, pg = -0, cn = -1.1, ur = -0, vg = !1, gg = !1, bp = null, w0 = 0, ir = 0, Hh = null, Ib = Q.S;
    Q.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Ev(e, t), Ib !== null && Ib(e, t);
    };
    var cr = ht(null), ei = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Sp = [], Tp = [], Ep = [], Ap = [], Rp = [], Op = [], or = /* @__PURE__ */ new Set();
    ei.recordUnsafeLifecycleWarnings = function(e, t) {
      or.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & Ta && typeof t.UNSAFE_componentWillMount == "function" && Tp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Ta && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ap.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & Ta && typeof t.UNSAFE_componentWillUpdate == "function" && Op.push(e));
    }, ei.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Sp.length && (Sp.forEach(function(h) {
        e.add(
          oe(h) || "Component"
        ), or.add(h.type);
      }), Sp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Tp.length && (Tp.forEach(function(h) {
        t.add(
          oe(h) || "Component"
        ), or.add(h.type);
      }), Tp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Ep.length && (Ep.forEach(function(h) {
        a.add(
          oe(h) || "Component"
        ), or.add(h.type);
      }), Ep = []);
      var i = /* @__PURE__ */ new Set();
      0 < Ap.length && (Ap.forEach(
        function(h) {
          i.add(
            oe(h) || "Component"
          ), or.add(h.type);
        }
      ), Ap = []);
      var o = /* @__PURE__ */ new Set();
      0 < Rp.length && (Rp.forEach(function(h) {
        o.add(
          oe(h) || "Component"
        ), or.add(h.type);
      }), Rp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Op.length && (Op.forEach(function(h) {
        f.add(
          oe(h) || "Component"
        ), or.add(h.type);
      }), Op = []), 0 < t.size) {
        var d = X(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = X(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = X(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = X(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = X(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = X(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var bg = /* @__PURE__ */ new Map(), Pb = /* @__PURE__ */ new Set();
    ei.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ta && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Pb.has(e.type) && (i = bg.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], bg.set(a, i)), i.push(e));
    }, ei.flushLegacyContextWarning = function() {
      bg.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(oe(o) || "Component"), Pb.add(o.type);
          });
          var i = X(a);
          ve(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, ei.discardPendingWarnings = function() {
      Sp = [], Tp = [], Ep = [], Ap = [], Rp = [], Op = [], bg = /* @__PURE__ */ new Map();
    };
    var Dp = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), eS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Sg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), q0 = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Mp = null, Tg = !1, vu = 0, gu = 1, Ya = 2, aa = 4, jl = 8, tS = 0, lS = 1, aS = 2, B0 = 3, pf = !1, nS = !1, Y0 = null, j0 = !1, xh = ht(null), Eg = ht(0), Nh, uS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), G0 = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), vf = 0, Qe = null, Nt = null, Rl = null, Ag = !1, wh = !1, fr = !1, Rg = 0, zp = 0, Pc = null, ZT = 0, KT = 25, L = null, bu = null, eo = -1, Up = !1, Og = {
      readContext: wt,
      use: Ln,
      useCallback: Xt,
      useContext: Xt,
      useEffect: Xt,
      useImperativeHandle: Xt,
      useLayoutEffect: Xt,
      useInsertionEffect: Xt,
      useMemo: Xt,
      useReducer: Xt,
      useRef: Xt,
      useState: Xt,
      useDebugValue: Xt,
      useDeferredValue: Xt,
      useTransition: Xt,
      useSyncExternalStore: Xt,
      useId: Xt,
      useHostTransitionStatus: Xt,
      useFormState: Xt,
      useActionState: Xt,
      useOptimistic: Xt,
      useMemoCache: Xt,
      useCacheRefresh: Xt
    }, Q0 = null, oS = null, L0 = null, fS = null, $i = null, ti = null, Dg = null;
    Q0 = {
      readContext: function(e) {
        return wt(e);
      },
      use: Ln,
      useCallback: function(e, t) {
        return L = "useCallback", Pe(), ka(t), fs(e, t);
      },
      useContext: function(e) {
        return L = "useContext", Pe(), wt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", Pe(), ka(t), ed(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", Pe(), ka(a), ld(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", Pe(), ka(t), Fa(4, Ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", Pe(), ka(t), td(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", Pe(), ka(t);
        var a = Q.H;
        Q.H = $i;
        try {
          return ad(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", Pe();
        var i = Q.H;
        Q.H = $i;
        try {
          return mt(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", Pe(), os(e);
      },
      useState: function(e) {
        L = "useState", Pe();
        var t = Q.H;
        Q.H = $i;
        try {
          return wu(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", Pe();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", Pe(), nd(e, t);
      },
      useTransition: function() {
        return L = "useTransition", Pe(), Kn();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", Pe(), Nu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", Pe(), kn();
      },
      useFormState: function(e, t) {
        return L = "useFormState", Pe(), Do(), Ho(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", Pe(), Ho(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", Pe(), Tn(e);
      },
      useHostTransitionStatus: ra,
      useMemoCache: tl,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", Pe(), Rc();
      }
    }, oS = {
      readContext: function(e) {
        return wt(e);
      },
      use: Ln,
      useCallback: function(e, t) {
        return L = "useCallback", ae(), fs(e, t);
      },
      useContext: function(e) {
        return L = "useContext", ae(), wt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", ae(), ed(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", ae(), ld(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", ae(), Fa(4, Ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", ae(), td(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", ae();
        var a = Q.H;
        Q.H = $i;
        try {
          return ad(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", ae();
        var i = Q.H;
        Q.H = $i;
        try {
          return mt(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", ae(), os(e);
      },
      useState: function(e) {
        L = "useState", ae();
        var t = Q.H;
        Q.H = $i;
        try {
          return wu(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", ae();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", ae(), nd(e, t);
      },
      useTransition: function() {
        return L = "useTransition", ae(), Kn();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", ae(), Nu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", ae(), kn();
      },
      useActionState: function(e, t) {
        return L = "useActionState", ae(), Ho(e, t);
      },
      useFormState: function(e, t) {
        return L = "useFormState", ae(), Do(), Ho(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", ae(), Tn(e);
      },
      useHostTransitionStatus: ra,
      useMemoCache: tl,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", ae(), Rc();
      }
    }, L0 = {
      readContext: function(e) {
        return wt(e);
      },
      use: Ln,
      useCallback: function(e, t) {
        return L = "useCallback", ae(), Ec(e, t);
      },
      useContext: function(e) {
        return L = "useContext", ae(), wt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", ae(), dl(2048, jl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", ae(), Zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", ae(), dl(4, Ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", ae(), dl(4, aa, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", ae();
        var a = Q.H;
        Q.H = ti;
        try {
          return Di(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", ae();
        var i = Q.H;
        Q.H = ti;
        try {
          return $a(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", ae(), rt().memoizedState;
      },
      useState: function() {
        L = "useState", ae();
        var e = Q.H;
        Q.H = ti;
        try {
          return $a(vt);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", ae();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", ae(), ss(e, t);
      },
      useTransition: function() {
        return L = "useTransition", ae(), cd();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", ae(), ns(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", ae(), rt().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", ae(), Do(), Pr(e);
      },
      useActionState: function(e) {
        return L = "useActionState", ae(), Pr(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", ae(), qu(e, t);
      },
      useHostTransitionStatus: ra,
      useMemoCache: tl,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", ae(), rt().memoizedState;
      }
    }, fS = {
      readContext: function(e) {
        return wt(e);
      },
      use: Ln,
      useCallback: function(e, t) {
        return L = "useCallback", ae(), Ec(e, t);
      },
      useContext: function(e) {
        return L = "useContext", ae(), wt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", ae(), dl(2048, jl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", ae(), Zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", ae(), dl(4, Ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", ae(), dl(4, aa, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", ae();
        var a = Q.H;
        Q.H = Dg;
        try {
          return Di(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", ae();
        var i = Q.H;
        Q.H = Dg;
        try {
          return Tc(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", ae(), rt().memoizedState;
      },
      useState: function() {
        L = "useState", ae();
        var e = Q.H;
        Q.H = Dg;
        try {
          return Tc(vt);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", ae();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", ae(), ud(e, t);
      },
      useTransition: function() {
        return L = "useTransition", ae(), od();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", ae(), ns(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", ae(), rt().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", ae(), Do(), xo(e);
      },
      useActionState: function(e) {
        return L = "useActionState", ae(), xo(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", ae(), Ir(e, t);
      },
      useHostTransitionStatus: ra,
      useMemoCache: tl,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", ae(), rt().memoizedState;
      }
    }, $i = {
      readContext: function(e) {
        return K(), wt(e);
      },
      use: function(e) {
        return w(), Ln(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", w(), Pe(), fs(e, t);
      },
      useContext: function(e) {
        return L = "useContext", w(), Pe(), wt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", w(), Pe(), ed(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", w(), Pe(), ld(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", w(), Pe(), Fa(4, Ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", w(), Pe(), td(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", w(), Pe();
        var a = Q.H;
        Q.H = $i;
        try {
          return ad(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", w(), Pe();
        var i = Q.H;
        Q.H = $i;
        try {
          return mt(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", w(), Pe(), os(e);
      },
      useState: function(e) {
        L = "useState", w(), Pe();
        var t = Q.H;
        Q.H = $i;
        try {
          return wu(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", w(), Pe();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", w(), Pe(), nd(e, t);
      },
      useTransition: function() {
        return L = "useTransition", w(), Pe(), Kn();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", w(), Pe(), Nu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", w(), Pe(), kn();
      },
      useFormState: function(e, t) {
        return L = "useFormState", w(), Pe(), Ho(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", w(), Pe(), Ho(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", w(), Pe(), Tn(e);
      },
      useMemoCache: function(e) {
        return w(), tl(e);
      },
      useHostTransitionStatus: ra,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", Pe(), Rc();
      }
    }, ti = {
      readContext: function(e) {
        return K(), wt(e);
      },
      use: function(e) {
        return w(), Ln(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", w(), ae(), Ec(e, t);
      },
      useContext: function(e) {
        return L = "useContext", w(), ae(), wt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", w(), ae(), dl(2048, jl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", w(), ae(), Zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", w(), ae(), dl(4, Ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", w(), ae(), dl(4, aa, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", w(), ae();
        var a = Q.H;
        Q.H = ti;
        try {
          return Di(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", w(), ae();
        var i = Q.H;
        Q.H = ti;
        try {
          return $a(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", w(), ae(), rt().memoizedState;
      },
      useState: function() {
        L = "useState", w(), ae();
        var e = Q.H;
        Q.H = ti;
        try {
          return $a(vt);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", w(), ae();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", w(), ae(), ss(e, t);
      },
      useTransition: function() {
        return L = "useTransition", w(), ae(), cd();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", w(), ae(), ns(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", w(), ae(), rt().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", w(), ae(), Pr(e);
      },
      useActionState: function(e) {
        return L = "useActionState", w(), ae(), Pr(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", w(), ae(), qu(e, t);
      },
      useMemoCache: function(e) {
        return w(), tl(e);
      },
      useHostTransitionStatus: ra,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", ae(), rt().memoizedState;
      }
    }, Dg = {
      readContext: function(e) {
        return K(), wt(e);
      },
      use: function(e) {
        return w(), Ln(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", w(), ae(), Ec(e, t);
      },
      useContext: function(e) {
        return L = "useContext", w(), ae(), wt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", w(), ae(), dl(2048, jl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", w(), ae(), Zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", w(), ae(), dl(4, Ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", w(), ae(), dl(4, aa, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", w(), ae();
        var a = Q.H;
        Q.H = ti;
        try {
          return Di(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", w(), ae();
        var i = Q.H;
        Q.H = ti;
        try {
          return Tc(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", w(), ae(), rt().memoizedState;
      },
      useState: function() {
        L = "useState", w(), ae();
        var e = Q.H;
        Q.H = ti;
        try {
          return Tc(vt);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", w(), ae();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", w(), ae(), ud(e, t);
      },
      useTransition: function() {
        return L = "useTransition", w(), ae(), od();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", w(), ae(), ns(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", w(), ae(), rt().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", w(), ae(), xo(e);
      },
      useActionState: function(e) {
        return L = "useActionState", w(), ae(), xo(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", w(), ae(), Ir(e, t);
      },
      useMemoCache: function(e) {
        return w(), tl(e);
      },
      useHostTransitionStatus: ra,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", ae(), rt().memoizedState;
      }
    };
    var sS = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = Sa;
        Sa = !0;
        try {
          return e(t, a);
        } finally {
          Sa = i;
        }
      }
    }, V0 = sS["react-stack-bottom-frame"].bind(sS), rS = {
      "react-stack-bottom-frame": function(e) {
        var t = Sa;
        Sa = !0;
        try {
          return e.render();
        } finally {
          Sa = t;
        }
      }
    }, dS = rS["react-stack-bottom-frame"].bind(rS), hS = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          xe(e, e.return, a);
        }
      }
    }, X0 = hS["react-stack-bottom-frame"].bind(hS), yS = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          xe(e, e.return, f);
        }
      }
    }, mS = yS["react-stack-bottom-frame"].bind(yS), pS = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, kT = pS["react-stack-bottom-frame"].bind(pS), vS = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          xe(e, t, i);
        }
      }
    }, gS = vS["react-stack-bottom-frame"].bind(vS), bS = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, JT = bS["react-stack-bottom-frame"].bind(bS), SS = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          xe(e, t, i);
        }
      }
    }, $T = SS["react-stack-bottom-frame"].bind(SS), TS = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, gf = TS["react-stack-bottom-frame"].bind(TS), qh = null, Cp = 0, tt = null, Z0, ES = Z0 = !1, AS = {}, RS = {}, OS = {};
    re = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = oe(e), o = i || "null";
        if (!AS[o]) {
          AS[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = oe(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = oe(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ve(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Bh = ys(!0), DS = ys(!1), Su = ht(null), Wi = null, Yh = 1, _p = 2, Gl = ht(0), MS = {}, zS = /* @__PURE__ */ new Set(), US = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), HS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), qS = /* @__PURE__ */ new Set(), BS = /* @__PURE__ */ new Set();
    Object.freeze(MS);
    var K0 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ya(e), o = Gn(i);
        o.payload = t, a != null && (ky(a), o.callback = a), t = gn(e, o, i), t !== null && ($t(t, e, i), Ti(t, e, i)), Hn(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ya(e), o = Gn(i);
        o.tag = lS, o.payload = t, a != null && (ky(a), o.callback = a), t = gn(e, o, i), t !== null && ($t(t, e, i), Ti(t, e, i)), Hn(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ya(e), i = Gn(a);
        i.tag = aS, t != null && (ky(t), i.callback = t), t = gn(e, i, a), t !== null && ($t(t, e, a), Ti(t, e, a)), ye !== null && typeof ye.markForceUpdateScheduled == "function" && ye.markForceUpdateScheduled(e, a);
      }
    }, k0 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, jh = null, J0 = null, YS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), kl = !1, jS = {}, GS = {}, QS = {}, LS = {}, Gh = !1, VS = {}, $0 = {}, W0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, XS = !1, ZS = null;
    ZS = /* @__PURE__ */ new Set();
    var to = !1, ml = !1, F0 = !1, KS = typeof WeakSet == "function" ? WeakSet : Set, Jl = null, Qh = null, Lh = null, Ol = null, on = !1, li = null, Hp = 8192, WT = {
      getCacheForType: function(e) {
        var t = wt(Yl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return wa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var xp = Symbol.for;
      xp("selector.component"), xp("selector.has_pseudo_class"), xp("selector.role"), xp("selector.test_id"), xp("selector.text");
    }
    var FT = [], IT = typeof WeakMap == "function" ? WeakMap : Map, zn = 0, ja = 2, ai = 4, lo = 0, Np = 1, Vh = 2, I0 = 3, sr = 4, Mg = 6, kS = 5, zt = zn, qt = null, it = null, ot = 0, fn = 0, wp = 1, rr = 2, qp = 3, JS = 4, P0 = 5, Xh = 6, Bp = 7, eb = 8, dr = 9, _t = fn, Un = null, bf = !1, Zh = !1, tb = !1, Fi = 0, il = lo, Sf = 0, Tf = 0, lb = 0, Cn = 0, hr = 0, Yp = null, Ga = null, zg = !1, ab = 0, $S = 300, Ug = 1 / 0, WS = 500, jp = null, Ef = null, PT = 0, eE = 1, tE = 2, yr = 0, FS = 1, IS = 2, PS = 3, lE = 4, nb = 5, na = 0, Af = null, Kh = null, Rf = 0, ub = 0, ib = null, e1 = null, aE = 50, Gp = 0, cb = null, ob = !1, Cg = !1, nE = 50, mr = 0, Qp = null, kh = !1, _g = null, t1 = !1, l1 = /* @__PURE__ */ new Set(), uE = {}, Hg = null, Jh = null, fb = !1, sb = !1, xg = !1, rb = !1, pr = 0, db = {};
    (function() {
      for (var e = 0; e < U0.length; e++) {
        var t = U0[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), hn(a, "on" + t);
      }
      hn(Gb, "onAnimationEnd"), hn(Qb, "onAnimationIteration"), hn(Lb, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(qT, "onTransitionRun"), hn(BT, "onTransitionStart"), hn(YT, "onTransitionCancel"), hn(Vb, "onTransitionEnd");
    })(), se("onMouseEnter", ["mouseout", "mouseover"]), se("onMouseLeave", ["mouseout", "mouseover"]), se("onPointerEnter", ["pointerout", "pointerover"]), se("onPointerLeave", ["pointerout", "pointerover"]), ue(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ue(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ue("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ue(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ue(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ue(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Lp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), hb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lp)
    ), Ng = "_reactListening" + Math.random().toString(36).slice(2), a1 = !1, n1 = !1, wg = !1, u1 = !1, qg = !1, Bg = !1, i1 = !1, Yg = {}, iE = /\r\n?/g, cE = /\u0000|\uFFFD/g, vr = "http://www.w3.org/1999/xlink", yb = "http://www.w3.org/XML/1998/namespace", oE = "javascript:throw new Error('React form unexpectedly submitted.')", fE = "suppressHydrationWarning", jg = "$", Gg = "/$", ao = "$?", Vp = "$!", sE = 1, rE = 2, dE = 4, mb = "F!", c1 = "F", o1 = "complete", hE = "style", no = 0, $h = 1, Qg = 2, pb = null, vb = null, f1 = { dialog: !0, webview: !0 }, gb = null, s1 = typeof setTimeout == "function" ? setTimeout : void 0, yE = typeof clearTimeout == "function" ? clearTimeout : void 0, gr = -1, r1 = typeof Promise == "function" ? Promise : void 0, mE = typeof queueMicrotask == "function" ? queueMicrotask : typeof r1 < "u" ? function(e) {
      return r1.resolve(null).then(e).catch(xm);
    } : s1, bb = null, br = 0, Xp = 1, d1 = 2, h1 = 3, Tu = 4, Eu = /* @__PURE__ */ new Map(), y1 = /* @__PURE__ */ new Set(), uo = qe.d;
    qe.d = {
      f: function() {
        var e = uo.f(), t = Nc();
        return e || t;
      },
      r: function(e) {
        var t = zl(e);
        t !== null && t.tag === 5 && t.type === "form" ? Xy(t) : uo.r(e);
      },
      D: function(e) {
        uo.D(e), Xv("dns-prefetch", e, null);
      },
      C: function(e, t) {
        uo.C(e, t), Xv("preconnect", e, t);
      },
      L: function(e, t, a) {
        uo.L(e, t, a);
        var i = Wh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Da(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Da(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Da(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Da(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = qi(e);
              break;
            case "script":
              f = Qc(e);
          }
          Eu.has(f) || (e = Ie(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Eu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            cu(f)
          ) || t === "script" && i.querySelector(Lc(f)) || (t = i.createElement("link"), Ft(t, "link", e), _(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        uo.m(e, t);
        var a = Wh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Da(i) + '"][href="' + Da(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Qc(e);
          }
          if (!Eu.has(f) && (e = Ie({ rel: "modulepreload", href: e }, t), Eu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Lc(f)))
                  return;
            }
            i = a.createElement("link"), Ft(i, "link", e), _(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        uo.X(e, t);
        var a = Wh;
        if (a && e) {
          var i = v(a).hoistableScripts, o = Qc(e), f = i.get(o);
          f || (f = a.querySelector(
            Lc(o)
          ), f || (e = Ie({ src: e, async: !0 }, t), (t = Eu.get(o)) && Qm(e, t), f = a.createElement("script"), _(f), Ft(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        uo.S(e, t, a);
        var i = Wh;
        if (i && e) {
          var o = v(i).hoistableStyles, f = qi(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: br, preload: null };
            if (d = i.querySelector(
              cu(f)
            ))
              h.loading = Xp | Tu;
            else {
              e = Ie(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Eu.get(f)) && Gm(e, a);
              var b = d = i.createElement("link");
              _(b), Ft(b, "link", e), b._p = new Promise(function(E, j) {
                b.onload = E, b.onerror = j;
              }), b.addEventListener("load", function() {
                h.loading |= Xp;
              }), b.addEventListener("error", function() {
                h.loading |= d1;
              }), h.loading |= Tu, Pd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        uo.M(e, t);
        var a = Wh;
        if (a && e) {
          var i = v(a).hoistableScripts, o = Qc(e), f = i.get(o);
          f || (f = a.querySelector(
            Lc(o)
          ), f || (e = Ie({ src: e, async: !0, type: "module" }, t), (t = Eu.get(o)) && Qm(e, t), f = a.createElement("script"), _(f), Ft(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Wh = typeof document > "u" ? null : document, Lg = null, Zp = null, Sb = null, Vg = null, Sr = g0, Kp = {
      $$typeof: an,
      Provider: null,
      Consumer: null,
      _currentValue: Sr,
      _currentValue2: Sr,
      _threadCount: 0
    }, m1 = "%c%s%c ", p1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", v1 = "", Xg = " ", pE = Function.prototype.bind, g1 = !1, b1 = null, S1 = null, T1 = null, E1 = null, A1 = null, R1 = null, O1 = null, D1 = null, M1 = null;
    b1 = function(e, t, a, i) {
      t = p(e, t), t !== null && (a = y(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ie({}, e.memoizedProps), a = ca(e, 2), a !== null && $t(a, e, 2));
    }, S1 = function(e, t, a) {
      t = p(e, t), t !== null && (a = Z(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ie({}, e.memoizedProps), a = ca(e, 2), a !== null && $t(a, e, 2));
    }, T1 = function(e, t, a, i) {
      t = p(e, t), t !== null && (a = A(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ie({}, e.memoizedProps), a = ca(e, 2), a !== null && $t(a, e, 2));
    }, E1 = function(e, t, a) {
      e.pendingProps = y(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ca(e, 2), t !== null && $t(t, e, 2);
    }, A1 = function(e, t) {
      e.pendingProps = Z(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ca(e, 2), t !== null && $t(t, e, 2);
    }, R1 = function(e, t, a) {
      e.pendingProps = A(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ca(e, 2), t !== null && $t(t, e, 2);
    }, O1 = function(e) {
      var t = ca(e, 2);
      t !== null && $t(t, e, 2);
    }, D1 = function(e) {
      Oe = e;
    }, M1 = function(e) {
      ie = e;
    };
    var Zg = !0, Kg = null, Tb = !1, Of = null, Df = null, Mf = null, kp = /* @__PURE__ */ new Map(), Jp = /* @__PURE__ */ new Map(), zf = [], vE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), kg = null;
    if (Qs.prototype.render = uh.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : pe(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ya(i);
      Mt(i, o, a, t, null, null);
    }, Qs.prototype.unmount = uh.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (zt & (ja | ai)) !== zn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Mt(e.current, 2, null, e, null, null), Nc(), t[Xi] = null;
      }
    }, Qs.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Bf();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < zf.length && t !== 0 && t < zf[a].priority; a++) ;
        zf.splice(a, 0, e), a === 0 && Wv(e);
      }
    }, function() {
      var e = Ls.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), qe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = ft(t), e = e !== null ? Me(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Q,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = b1, e.overrideHookStateDeletePath = S1, e.overrideHookStateRenamePath = T1, e.overrideProps = E1, e.overridePropsDeletePath = A1, e.overridePropsRenamePath = R1, e.scheduleUpdate = O1, e.setErrorHandler = D1, e.setSuspenseHandler = M1, e.scheduleRefresh = Ee, e.scheduleRoot = ne, e.setRefreshHandler = Te, e.getCurrentFiber = y0, e.getLaneLabelMap = m0, e.injectProfilingHooks = ol, He(e);
    }() && R && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var z1 = window.location.protocol;
      /^(https?|file):$/.test(z1) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (z1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Ip.createRoot = function(e, t) {
      if (!pe(e))
        throw Error("Target container is not a DOM element.");
      Pv(e);
      var a = !1, i = "", o = Jy, f = zv, d = dd, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === ji && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = Xm(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[Xi] = t.current, Dm(e), new uh(t);
    }, Ip.hydrateRoot = function(e, t, a) {
      if (!pe(e))
        throw Error("Target container is not a DOM element.");
      Pv(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Jy, d = zv, h = dd, b = null, E = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (b = a.unstable_transitionCallbacks), a.formState !== void 0 && (E = a.formState)), t = Xm(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        b,
        E
      ), t.context = Zm(null), a = t.current, i = ya(a), i = Dl(i), o = Gn(i), o.callback = null, gn(a, o, i), a = i, t.current.lanes = a, Ou(t, a), en(t), e[Xi] = t.current, Dm(e), new Qs(t);
    }, Ip.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), Ip;
}
var X1;
function _E() {
  if (X1) return Fg.exports;
  X1 = 1;
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (y) {
        console.error(y);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (p(), Fg.exports = UE()) : Fg.exports = CE(), Fg.exports;
}
var HE = _E();
const xE = /* @__PURE__ */ uT(HE);
var a0 = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(p) {
    return this.listeners.add(p), this.onSubscribe(), () => {
      this.listeners.delete(p), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, n0 = typeof window > "u" || "Deno" in globalThis;
function ni() {
}
function NE(p, y) {
  return typeof p == "function" ? p(y) : p;
}
function wE(p) {
  return typeof p == "number" && p >= 0 && p !== 1 / 0;
}
function qE(p, y) {
  return Math.max(p + (y || 0) - Date.now(), 0);
}
function Db(p, y) {
  return typeof p == "function" ? p(y) : p;
}
function BE(p, y) {
  return typeof p == "function" ? p(y) : p;
}
function Z1(p, y) {
  const {
    type: A = "all",
    exact: T,
    fetchStatus: Z,
    predicate: ie,
    queryKey: Oe,
    stale: re
  } = p;
  if (Oe) {
    if (T) {
      if (y.queryHash !== Cb(Oe, y.options))
        return !1;
    } else if (!tv(y.queryKey, Oe))
      return !1;
  }
  if (A !== "all") {
    const w = y.isActive();
    if (A === "active" && !w || A === "inactive" && w)
      return !1;
  }
  return !(typeof re == "boolean" && y.isStale() !== re || Z && Z !== y.state.fetchStatus || ie && !ie(y));
}
function K1(p, y) {
  const { exact: A, status: T, predicate: Z, mutationKey: ie } = p;
  if (ie) {
    if (!y.options.mutationKey)
      return !1;
    if (A) {
      if (ev(y.options.mutationKey) !== ev(ie))
        return !1;
    } else if (!tv(y.options.mutationKey, ie))
      return !1;
  }
  return !(T && y.state.status !== T || Z && !Z(y));
}
function Cb(p, y) {
  return ((y == null ? void 0 : y.queryKeyHashFn) || ev)(p);
}
function ev(p) {
  return JSON.stringify(
    p,
    (y, A) => zb(A) ? Object.keys(A).sort().reduce((T, Z) => (T[Z] = A[Z], T), {}) : A
  );
}
function tv(p, y) {
  return p === y ? !0 : typeof p != typeof y ? !1 : p && y && typeof p == "object" && typeof y == "object" ? Object.keys(y).every((A) => tv(p[A], y[A])) : !1;
}
function Mb(p, y) {
  if (p === y)
    return p;
  const A = k1(p) && k1(y);
  if (A || zb(p) && zb(y)) {
    const T = A ? p : Object.keys(p), Z = T.length, ie = A ? y : Object.keys(y), Oe = ie.length, re = A ? [] : {}, w = new Set(T);
    let K = 0;
    for (let ce = 0; ce < Oe; ce++) {
      const X = A ? ce : ie[ce];
      (!A && w.has(X) || A) && p[X] === void 0 && y[X] === void 0 ? (re[X] = void 0, K++) : (re[X] = Mb(p[X], y[X]), re[X] === p[X] && p[X] !== void 0 && K++);
    }
    return Z === Oe && K === Z ? p : re;
  }
  return y;
}
function k1(p) {
  return Array.isArray(p) && p.length === Object.keys(p).length;
}
function zb(p) {
  if (!J1(p))
    return !1;
  const y = p.constructor;
  if (y === void 0)
    return !0;
  const A = y.prototype;
  return !(!J1(A) || !A.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(p) !== Object.prototype);
}
function J1(p) {
  return Object.prototype.toString.call(p) === "[object Object]";
}
function YE(p) {
  return new Promise((y) => {
    setTimeout(y, p);
  });
}
function jE(p, y, A) {
  if (typeof A.structuralSharing == "function")
    return A.structuralSharing(p, y);
  if (A.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Mb(p, y);
      } catch (T) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${A.queryHash}]: ${T}`
        ), T;
      }
    return Mb(p, y);
  }
  return y;
}
function GE(p, y, A = 0) {
  const T = [...p, y];
  return A && T.length > A ? T.slice(1) : T;
}
function QE(p, y, A = 0) {
  const T = [y, ...p];
  return A && T.length > A ? T.slice(0, -1) : T;
}
var t0 = Symbol();
function oT(p, y) {
  return process.env.NODE_ENV !== "production" && p.queryFn === t0 && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${p.queryHash}'`
  ), !p.queryFn && (y != null && y.initialPromise) ? () => y.initialPromise : !p.queryFn || p.queryFn === t0 ? () => Promise.reject(new Error(`Missing queryFn: '${p.queryHash}'`)) : p.queryFn;
}
var Tr, Cf, Fh, F1, LE = (F1 = class extends a0 {
  constructor() {
    super();
    Dt(this, Tr);
    Dt(this, Cf);
    Dt(this, Fh);
    We(this, Fh, (y) => {
      if (!n0 && window.addEventListener) {
        const A = () => y();
        return window.addEventListener("visibilitychange", A, !1), () => {
          window.removeEventListener("visibilitychange", A);
        };
      }
    });
  }
  onSubscribe() {
    ee(this, Cf) || this.setEventListener(ee(this, Fh));
  }
  onUnsubscribe() {
    var y;
    this.hasListeners() || ((y = ee(this, Cf)) == null || y.call(this), We(this, Cf, void 0));
  }
  setEventListener(y) {
    var A;
    We(this, Fh, y), (A = ee(this, Cf)) == null || A.call(this), We(this, Cf, y((T) => {
      typeof T == "boolean" ? this.setFocused(T) : this.onFocus();
    }));
  }
  setFocused(y) {
    ee(this, Tr) !== y && (We(this, Tr, y), this.onFocus());
  }
  onFocus() {
    const y = this.isFocused();
    this.listeners.forEach((A) => {
      A(y);
    });
  }
  isFocused() {
    var y;
    return typeof ee(this, Tr) == "boolean" ? ee(this, Tr) : ((y = globalThis.document) == null ? void 0 : y.visibilityState) !== "hidden";
  }
}, Tr = new WeakMap(), Cf = new WeakMap(), Fh = new WeakMap(), F1), fT = new LE(), Ih, _f, Ph, I1, VE = (I1 = class extends a0 {
  constructor() {
    super();
    Dt(this, Ih, !0);
    Dt(this, _f);
    Dt(this, Ph);
    We(this, Ph, (y) => {
      if (!n0 && window.addEventListener) {
        const A = () => y(!0), T = () => y(!1);
        return window.addEventListener("online", A, !1), window.addEventListener("offline", T, !1), () => {
          window.removeEventListener("online", A), window.removeEventListener("offline", T);
        };
      }
    });
  }
  onSubscribe() {
    ee(this, _f) || this.setEventListener(ee(this, Ph));
  }
  onUnsubscribe() {
    var y;
    this.hasListeners() || ((y = ee(this, _f)) == null || y.call(this), We(this, _f, void 0));
  }
  setEventListener(y) {
    var A;
    We(this, Ph, y), (A = ee(this, _f)) == null || A.call(this), We(this, _f, y(this.setOnline.bind(this)));
  }
  setOnline(y) {
    ee(this, Ih) !== y && (We(this, Ih, y), this.listeners.forEach((T) => {
      T(y);
    }));
  }
  isOnline() {
    return ee(this, Ih);
  }
}, Ih = new WeakMap(), _f = new WeakMap(), Ph = new WeakMap(), I1), l0 = new VE();
function XE() {
  let p, y;
  const A = new Promise((Z, ie) => {
    p = Z, y = ie;
  });
  A.status = "pending", A.catch(() => {
  });
  function T(Z) {
    Object.assign(A, Z), delete A.resolve, delete A.reject;
  }
  return A.resolve = (Z) => {
    T({
      status: "fulfilled",
      value: Z
    }), p(Z);
  }, A.reject = (Z) => {
    T({
      status: "rejected",
      reason: Z
    }), y(Z);
  }, A;
}
function ZE(p) {
  return Math.min(1e3 * 2 ** p, 3e4);
}
function sT(p) {
  return (p ?? "online") === "online" ? l0.isOnline() : !0;
}
var rT = class extends Error {
  constructor(p) {
    super("CancelledError"), this.revert = p == null ? void 0 : p.revert, this.silent = p == null ? void 0 : p.silent;
  }
};
function Ob(p) {
  return p instanceof rT;
}
function dT(p) {
  let y = !1, A = 0, T = !1, Z;
  const ie = XE(), Oe = (Te) => {
    var pe;
    T || (M(new rT(Te)), (pe = p.abort) == null || pe.call(p));
  }, re = () => {
    y = !0;
  }, w = () => {
    y = !1;
  }, K = () => fT.isFocused() && (p.networkMode === "always" || l0.isOnline()) && p.canRun(), ce = () => sT(p.networkMode) && p.canRun(), X = (Te) => {
    var pe;
    T || (T = !0, (pe = p.onSuccess) == null || pe.call(p, Te), Z == null || Z(), ie.resolve(Te));
  }, M = (Te) => {
    var pe;
    T || (T = !0, (pe = p.onError) == null || pe.call(p, Te), Z == null || Z(), ie.reject(Te));
  }, ne = () => new Promise((Te) => {
    var pe;
    Z = (Ce) => {
      (T || K()) && Te(Ce);
    }, (pe = p.onPause) == null || pe.call(p);
  }).then(() => {
    var Te;
    Z = void 0, T || (Te = p.onContinue) == null || Te.call(p);
  }), Ee = () => {
    if (T)
      return;
    let Te;
    const pe = A === 0 ? p.initialPromise : void 0;
    try {
      Te = pe ?? p.fn();
    } catch (Ce) {
      Te = Promise.reject(Ce);
    }
    Promise.resolve(Te).then(X).catch((Ce) => {
      var ct;
      if (T)
        return;
      const Rt = p.retry ?? (n0 ? 0 : 3), _e = p.retryDelay ?? ZE, ft = typeof _e == "function" ? _e(A, Ce) : _e, Me = Rt === !0 || typeof Rt == "number" && A < Rt || typeof Rt == "function" && Rt(A, Ce);
      if (y || !Me) {
        M(Ce);
        return;
      }
      A++, (ct = p.onFail) == null || ct.call(p, A, Ce), YE(ft).then(() => K() ? void 0 : ne()).then(() => {
        y ? M(Ce) : Ee();
      });
    });
  };
  return {
    promise: ie,
    cancel: Oe,
    continue: () => (Z == null || Z(), ie),
    cancelRetry: re,
    continueRetry: w,
    canStart: ce,
    start: () => (ce() ? Ee() : ne().then(Ee), ie)
  };
}
var KE = (p) => setTimeout(p, 0);
function kE() {
  let p = [], y = 0, A = (re) => {
    re();
  }, T = (re) => {
    re();
  }, Z = KE;
  const ie = (re) => {
    y ? p.push(re) : Z(() => {
      A(re);
    });
  }, Oe = () => {
    const re = p;
    p = [], re.length && Z(() => {
      T(() => {
        re.forEach((w) => {
          A(w);
        });
      });
    });
  };
  return {
    batch: (re) => {
      let w;
      y++;
      try {
        w = re();
      } finally {
        y--, y || Oe();
      }
      return w;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (re) => (...w) => {
      ie(() => {
        re(...w);
      });
    },
    schedule: ie,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (re) => {
      A = re;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (re) => {
      T = re;
    },
    setScheduler: (re) => {
      Z = re;
    }
  };
}
var La = kE(), Er, P1, hT = (P1 = class {
  constructor() {
    Dt(this, Er);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), wE(this.gcTime) && We(this, Er, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(p) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      p ?? (n0 ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    ee(this, Er) && (clearTimeout(ee(this, Er)), We(this, Er, void 0));
  }
}, Er = new WeakMap(), P1), ey, Ar, Au, Rr, Oa, lv, Or, ui, co, eT, JE = (eT = class extends hT {
  constructor(y) {
    super();
    Dt(this, ui);
    Dt(this, ey);
    Dt(this, Ar);
    Dt(this, Au);
    Dt(this, Rr);
    Dt(this, Oa);
    Dt(this, lv);
    Dt(this, Or);
    We(this, Or, !1), We(this, lv, y.defaultOptions), this.setOptions(y.options), this.observers = [], We(this, Rr, y.client), We(this, Au, ee(this, Rr).getQueryCache()), this.queryKey = y.queryKey, this.queryHash = y.queryHash, We(this, ey, WE(this.options)), this.state = y.state ?? ee(this, ey), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var y;
    return (y = ee(this, Oa)) == null ? void 0 : y.promise;
  }
  setOptions(y) {
    this.options = { ...ee(this, lv), ...y }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && ee(this, Au).remove(this);
  }
  setData(y, A) {
    const T = jE(this.state.data, y, this.options);
    return Ea(this, ui, co).call(this, {
      data: T,
      type: "success",
      dataUpdatedAt: A == null ? void 0 : A.updatedAt,
      manual: A == null ? void 0 : A.manual
    }), T;
  }
  setState(y, A) {
    Ea(this, ui, co).call(this, { type: "setState", state: y, setStateOptions: A });
  }
  cancel(y) {
    var T, Z;
    const A = (T = ee(this, Oa)) == null ? void 0 : T.promise;
    return (Z = ee(this, Oa)) == null || Z.cancel(y), A ? A.then(ni).catch(ni) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(ee(this, ey));
  }
  isActive() {
    return this.observers.some(
      (y) => BE(y.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === t0 || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (y) => Db(y.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (y) => y.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(y = 0) {
    return this.state.data === void 0 ? !0 : y === "static" ? !1 : this.state.isInvalidated ? !0 : !qE(this.state.dataUpdatedAt, y);
  }
  onFocus() {
    var A;
    const y = this.observers.find((T) => T.shouldFetchOnWindowFocus());
    y == null || y.refetch({ cancelRefetch: !1 }), (A = ee(this, Oa)) == null || A.continue();
  }
  onOnline() {
    var A;
    const y = this.observers.find((T) => T.shouldFetchOnReconnect());
    y == null || y.refetch({ cancelRefetch: !1 }), (A = ee(this, Oa)) == null || A.continue();
  }
  addObserver(y) {
    this.observers.includes(y) || (this.observers.push(y), this.clearGcTimeout(), ee(this, Au).notify({ type: "observerAdded", query: this, observer: y }));
  }
  removeObserver(y) {
    this.observers.includes(y) && (this.observers = this.observers.filter((A) => A !== y), this.observers.length || (ee(this, Oa) && (ee(this, Or) ? ee(this, Oa).cancel({ revert: !0 }) : ee(this, Oa).cancelRetry()), this.scheduleGc()), ee(this, Au).notify({ type: "observerRemoved", query: this, observer: y }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Ea(this, ui, co).call(this, { type: "invalidate" });
  }
  fetch(y, A) {
    var K, ce, X;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (A != null && A.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (ee(this, Oa))
        return ee(this, Oa).continueRetry(), ee(this, Oa).promise;
    }
    if (y && this.setOptions(y), !this.options.queryFn) {
      const M = this.observers.find((ne) => ne.options.queryFn);
      M && this.setOptions(M.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const T = new AbortController(), Z = (M) => {
      Object.defineProperty(M, "signal", {
        enumerable: !0,
        get: () => (We(this, Or, !0), T.signal)
      });
    }, ie = () => {
      const M = oT(this.options, A), Ee = (() => {
        const Te = {
          client: ee(this, Rr),
          queryKey: this.queryKey,
          meta: this.meta
        };
        return Z(Te), Te;
      })();
      return We(this, Or, !1), this.options.persister ? this.options.persister(
        M,
        Ee,
        this
      ) : M(Ee);
    }, re = (() => {
      const M = {
        fetchOptions: A,
        options: this.options,
        queryKey: this.queryKey,
        client: ee(this, Rr),
        state: this.state,
        fetchFn: ie
      };
      return Z(M), M;
    })();
    (K = this.options.behavior) == null || K.onFetch(re, this), We(this, Ar, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((ce = re.fetchOptions) == null ? void 0 : ce.meta)) && Ea(this, ui, co).call(this, { type: "fetch", meta: (X = re.fetchOptions) == null ? void 0 : X.meta });
    const w = (M) => {
      var ne, Ee, Te, pe;
      Ob(M) && M.silent || Ea(this, ui, co).call(this, {
        type: "error",
        error: M
      }), Ob(M) || ((Ee = (ne = ee(this, Au).config).onError) == null || Ee.call(
        ne,
        M,
        this
      ), (pe = (Te = ee(this, Au).config).onSettled) == null || pe.call(
        Te,
        this.state.data,
        M,
        this
      )), this.scheduleGc();
    };
    return We(this, Oa, dT({
      initialPromise: A == null ? void 0 : A.initialPromise,
      fn: re.fetchFn,
      abort: T.abort.bind(T),
      onSuccess: (M) => {
        var ne, Ee, Te, pe;
        if (M === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), w(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(M);
        } catch (Ce) {
          w(Ce);
          return;
        }
        (Ee = (ne = ee(this, Au).config).onSuccess) == null || Ee.call(ne, M, this), (pe = (Te = ee(this, Au).config).onSettled) == null || pe.call(
          Te,
          M,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: w,
      onFail: (M, ne) => {
        Ea(this, ui, co).call(this, { type: "failed", failureCount: M, error: ne });
      },
      onPause: () => {
        Ea(this, ui, co).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ea(this, ui, co).call(this, { type: "continue" });
      },
      retry: re.options.retry,
      retryDelay: re.options.retryDelay,
      networkMode: re.options.networkMode,
      canRun: () => !0
    })), ee(this, Oa).start();
  }
}, ey = new WeakMap(), Ar = new WeakMap(), Au = new WeakMap(), Rr = new WeakMap(), Oa = new WeakMap(), lv = new WeakMap(), Or = new WeakMap(), ui = new WeakSet(), co = function(y) {
  const A = (T) => {
    switch (y.type) {
      case "failed":
        return {
          ...T,
          fetchFailureCount: y.failureCount,
          fetchFailureReason: y.error
        };
      case "pause":
        return {
          ...T,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...T,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...T,
          ...$E(T.data, this.options),
          fetchMeta: y.meta ?? null
        };
      case "success":
        return We(this, Ar, void 0), {
          ...T,
          data: y.data,
          dataUpdateCount: T.dataUpdateCount + 1,
          dataUpdatedAt: y.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!y.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const Z = y.error;
        return Ob(Z) && Z.revert && ee(this, Ar) ? { ...ee(this, Ar), fetchStatus: "idle" } : {
          ...T,
          error: Z,
          errorUpdateCount: T.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: T.fetchFailureCount + 1,
          fetchFailureReason: Z,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...T,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...T,
          ...y.state
        };
    }
  };
  this.state = A(this.state), La.batch(() => {
    this.observers.forEach((T) => {
      T.onQueryUpdate();
    }), ee(this, Au).notify({ query: this, type: "updated", action: y });
  });
}, eT);
function $E(p, y) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: sT(y.networkMode) ? "fetching" : "paused",
    ...p === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function WE(p) {
  const y = typeof p.initialData == "function" ? p.initialData() : p.initialData, A = y !== void 0, T = A ? typeof p.initialDataUpdatedAt == "function" ? p.initialDataUpdatedAt() : p.initialDataUpdatedAt : 0;
  return {
    data: y,
    dataUpdateCount: 0,
    dataUpdatedAt: A ? T ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: A ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Ii, tT, FE = (tT = class extends a0 {
  constructor(y = {}) {
    super();
    Dt(this, Ii);
    this.config = y, We(this, Ii, /* @__PURE__ */ new Map());
  }
  build(y, A, T) {
    const Z = A.queryKey, ie = A.queryHash ?? Cb(Z, A);
    let Oe = this.get(ie);
    return Oe || (Oe = new JE({
      client: y,
      queryKey: Z,
      queryHash: ie,
      options: y.defaultQueryOptions(A),
      state: T,
      defaultOptions: y.getQueryDefaults(Z)
    }), this.add(Oe)), Oe;
  }
  add(y) {
    ee(this, Ii).has(y.queryHash) || (ee(this, Ii).set(y.queryHash, y), this.notify({
      type: "added",
      query: y
    }));
  }
  remove(y) {
    const A = ee(this, Ii).get(y.queryHash);
    A && (y.destroy(), A === y && ee(this, Ii).delete(y.queryHash), this.notify({ type: "removed", query: y }));
  }
  clear() {
    La.batch(() => {
      this.getAll().forEach((y) => {
        this.remove(y);
      });
    });
  }
  get(y) {
    return ee(this, Ii).get(y);
  }
  getAll() {
    return [...ee(this, Ii).values()];
  }
  find(y) {
    const A = { exact: !0, ...y };
    return this.getAll().find(
      (T) => Z1(A, T)
    );
  }
  findAll(y = {}) {
    const A = this.getAll();
    return Object.keys(y).length > 0 ? A.filter((T) => Z1(y, T)) : A;
  }
  notify(y) {
    La.batch(() => {
      this.listeners.forEach((A) => {
        A(y);
      });
    });
  }
  onFocus() {
    La.batch(() => {
      this.getAll().forEach((y) => {
        y.onFocus();
      });
    });
  }
  onOnline() {
    La.batch(() => {
      this.getAll().forEach((y) => {
        y.onOnline();
      });
    });
  }
}, Ii = new WeakMap(), tT), Pi, Qa, Dr, ec, Uf, lT, IE = (lT = class extends hT {
  constructor(y) {
    super();
    Dt(this, ec);
    Dt(this, Pi);
    Dt(this, Qa);
    Dt(this, Dr);
    this.mutationId = y.mutationId, We(this, Qa, y.mutationCache), We(this, Pi, []), this.state = y.state || PE(), this.setOptions(y.options), this.scheduleGc();
  }
  setOptions(y) {
    this.options = y, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(y) {
    ee(this, Pi).includes(y) || (ee(this, Pi).push(y), this.clearGcTimeout(), ee(this, Qa).notify({
      type: "observerAdded",
      mutation: this,
      observer: y
    }));
  }
  removeObserver(y) {
    We(this, Pi, ee(this, Pi).filter((A) => A !== y)), this.scheduleGc(), ee(this, Qa).notify({
      type: "observerRemoved",
      mutation: this,
      observer: y
    });
  }
  optionalRemove() {
    ee(this, Pi).length || (this.state.status === "pending" ? this.scheduleGc() : ee(this, Qa).remove(this));
  }
  continue() {
    var y;
    return ((y = ee(this, Dr)) == null ? void 0 : y.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(y) {
    var ie, Oe, re, w, K, ce, X, M, ne, Ee, Te, pe, Ce, Rt, _e, ft, Me, ct, Le, pt;
    const A = () => {
      Ea(this, ec, Uf).call(this, { type: "continue" });
    };
    We(this, Dr, dT({
      fn: () => this.options.mutationFn ? this.options.mutationFn(y) : Promise.reject(new Error("No mutationFn found")),
      onFail: (oe, ht) => {
        Ea(this, ec, Uf).call(this, { type: "failed", failureCount: oe, error: ht });
      },
      onPause: () => {
        Ea(this, ec, Uf).call(this, { type: "pause" });
      },
      onContinue: A,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => ee(this, Qa).canRun(this)
    }));
    const T = this.state.status === "pending", Z = !ee(this, Dr).canStart();
    try {
      if (T)
        A();
      else {
        Ea(this, ec, Uf).call(this, { type: "pending", variables: y, isPaused: Z }), await ((Oe = (ie = ee(this, Qa).config).onMutate) == null ? void 0 : Oe.call(
          ie,
          y,
          this
        ));
        const ht = await ((w = (re = this.options).onMutate) == null ? void 0 : w.call(re, y));
        ht !== this.state.context && Ea(this, ec, Uf).call(this, {
          type: "pending",
          context: ht,
          variables: y,
          isPaused: Z
        });
      }
      const oe = await ee(this, Dr).start();
      return await ((ce = (K = ee(this, Qa).config).onSuccess) == null ? void 0 : ce.call(
        K,
        oe,
        y,
        this.state.context,
        this
      )), await ((M = (X = this.options).onSuccess) == null ? void 0 : M.call(X, oe, y, this.state.context)), await ((Ee = (ne = ee(this, Qa).config).onSettled) == null ? void 0 : Ee.call(
        ne,
        oe,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((pe = (Te = this.options).onSettled) == null ? void 0 : pe.call(Te, oe, null, y, this.state.context)), Ea(this, ec, Uf).call(this, { type: "success", data: oe }), oe;
    } catch (oe) {
      try {
        throw await ((Rt = (Ce = ee(this, Qa).config).onError) == null ? void 0 : Rt.call(
          Ce,
          oe,
          y,
          this.state.context,
          this
        )), await ((ft = (_e = this.options).onError) == null ? void 0 : ft.call(
          _e,
          oe,
          y,
          this.state.context
        )), await ((ct = (Me = ee(this, Qa).config).onSettled) == null ? void 0 : ct.call(
          Me,
          void 0,
          oe,
          this.state.variables,
          this.state.context,
          this
        )), await ((pt = (Le = this.options).onSettled) == null ? void 0 : pt.call(
          Le,
          void 0,
          oe,
          y,
          this.state.context
        )), oe;
      } finally {
        Ea(this, ec, Uf).call(this, { type: "error", error: oe });
      }
    } finally {
      ee(this, Qa).runNext(this);
    }
  }
}, Pi = new WeakMap(), Qa = new WeakMap(), Dr = new WeakMap(), ec = new WeakSet(), Uf = function(y) {
  const A = (T) => {
    switch (y.type) {
      case "failed":
        return {
          ...T,
          failureCount: y.failureCount,
          failureReason: y.error
        };
      case "pause":
        return {
          ...T,
          isPaused: !0
        };
      case "continue":
        return {
          ...T,
          isPaused: !1
        };
      case "pending":
        return {
          ...T,
          context: y.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: y.isPaused,
          status: "pending",
          variables: y.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...T,
          data: y.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...T,
          data: void 0,
          error: y.error,
          failureCount: T.failureCount + 1,
          failureReason: y.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = A(this.state), La.batch(() => {
    ee(this, Pi).forEach((T) => {
      T.onMutationUpdate(y);
    }), ee(this, Qa).notify({
      mutation: this,
      type: "updated",
      action: y
    });
  });
}, lT);
function PE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var oo, ii, av, aT, eA = (aT = class extends a0 {
  constructor(y = {}) {
    super();
    Dt(this, oo);
    Dt(this, ii);
    Dt(this, av);
    this.config = y, We(this, oo, /* @__PURE__ */ new Set()), We(this, ii, /* @__PURE__ */ new Map()), We(this, av, 0);
  }
  build(y, A, T) {
    const Z = new IE({
      mutationCache: this,
      mutationId: ++Jg(this, av)._,
      options: y.defaultMutationOptions(A),
      state: T
    });
    return this.add(Z), Z;
  }
  add(y) {
    ee(this, oo).add(y);
    const A = e0(y);
    if (typeof A == "string") {
      const T = ee(this, ii).get(A);
      T ? T.push(y) : ee(this, ii).set(A, [y]);
    }
    this.notify({ type: "added", mutation: y });
  }
  remove(y) {
    if (ee(this, oo).delete(y)) {
      const A = e0(y);
      if (typeof A == "string") {
        const T = ee(this, ii).get(A);
        if (T)
          if (T.length > 1) {
            const Z = T.indexOf(y);
            Z !== -1 && T.splice(Z, 1);
          } else T[0] === y && ee(this, ii).delete(A);
      }
    }
    this.notify({ type: "removed", mutation: y });
  }
  canRun(y) {
    const A = e0(y);
    if (typeof A == "string") {
      const T = ee(this, ii).get(A), Z = T == null ? void 0 : T.find(
        (ie) => ie.state.status === "pending"
      );
      return !Z || Z === y;
    } else
      return !0;
  }
  runNext(y) {
    var T;
    const A = e0(y);
    if (typeof A == "string") {
      const Z = (T = ee(this, ii).get(A)) == null ? void 0 : T.find((ie) => ie !== y && ie.state.isPaused);
      return (Z == null ? void 0 : Z.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    La.batch(() => {
      ee(this, oo).forEach((y) => {
        this.notify({ type: "removed", mutation: y });
      }), ee(this, oo).clear(), ee(this, ii).clear();
    });
  }
  getAll() {
    return Array.from(ee(this, oo));
  }
  find(y) {
    const A = { exact: !0, ...y };
    return this.getAll().find(
      (T) => K1(A, T)
    );
  }
  findAll(y = {}) {
    return this.getAll().filter((A) => K1(y, A));
  }
  notify(y) {
    La.batch(() => {
      this.listeners.forEach((A) => {
        A(y);
      });
    });
  }
  resumePausedMutations() {
    const y = this.getAll().filter((A) => A.state.isPaused);
    return La.batch(
      () => Promise.all(
        y.map((A) => A.continue().catch(ni))
      )
    );
  }
}, oo = new WeakMap(), ii = new WeakMap(), av = new WeakMap(), aT);
function e0(p) {
  var y;
  return (y = p.options.scope) == null ? void 0 : y.id;
}
function $1(p) {
  return {
    onFetch: (y, A) => {
      var ce, X, M, ne, Ee;
      const T = y.options, Z = (M = (X = (ce = y.fetchOptions) == null ? void 0 : ce.meta) == null ? void 0 : X.fetchMore) == null ? void 0 : M.direction, ie = ((ne = y.state.data) == null ? void 0 : ne.pages) || [], Oe = ((Ee = y.state.data) == null ? void 0 : Ee.pageParams) || [];
      let re = { pages: [], pageParams: [] }, w = 0;
      const K = async () => {
        let Te = !1;
        const pe = (_e) => {
          Object.defineProperty(_e, "signal", {
            enumerable: !0,
            get: () => (y.signal.aborted ? Te = !0 : y.signal.addEventListener("abort", () => {
              Te = !0;
            }), y.signal)
          });
        }, Ce = oT(y.options, y.fetchOptions), Rt = async (_e, ft, Me) => {
          if (Te)
            return Promise.reject();
          if (ft == null && _e.pages.length)
            return Promise.resolve(_e);
          const Le = (() => {
            const Ae = {
              client: y.client,
              queryKey: y.queryKey,
              pageParam: ft,
              direction: Me ? "backward" : "forward",
              meta: y.options.meta
            };
            return pe(Ae), Ae;
          })(), pt = await Ce(Le), { maxPages: oe } = y.options, ht = Me ? QE : GE;
          return {
            pages: ht(_e.pages, pt, oe),
            pageParams: ht(_e.pageParams, ft, oe)
          };
        };
        if (Z && ie.length) {
          const _e = Z === "backward", ft = _e ? tA : W1, Me = {
            pages: ie,
            pageParams: Oe
          }, ct = ft(T, Me);
          re = await Rt(Me, ct, _e);
        } else {
          const _e = p ?? ie.length;
          do {
            const ft = w === 0 ? Oe[0] ?? T.initialPageParam : W1(T, re);
            if (w > 0 && ft == null)
              break;
            re = await Rt(re, ft), w++;
          } while (w < _e);
        }
        return re;
      };
      y.options.persister ? y.fetchFn = () => {
        var Te, pe;
        return (pe = (Te = y.options).persister) == null ? void 0 : pe.call(
          Te,
          K,
          {
            client: y.client,
            queryKey: y.queryKey,
            meta: y.options.meta,
            signal: y.signal
          },
          A
        );
      } : y.fetchFn = K;
    }
  };
}
function W1(p, { pages: y, pageParams: A }) {
  const T = y.length - 1;
  return y.length > 0 ? p.getNextPageParam(
    y[T],
    y,
    A[T],
    A
  ) : void 0;
}
function tA(p, { pages: y, pageParams: A }) {
  var T;
  return y.length > 0 ? (T = p.getPreviousPageParam) == null ? void 0 : T.call(p, y[0], y, A[0], A) : void 0;
}
var cl, Hf, xf, ty, ly, Nf, ay, ny, nT, lA = (nT = class {
  constructor(p = {}) {
    Dt(this, cl);
    Dt(this, Hf);
    Dt(this, xf);
    Dt(this, ty);
    Dt(this, ly);
    Dt(this, Nf);
    Dt(this, ay);
    Dt(this, ny);
    We(this, cl, p.queryCache || new FE()), We(this, Hf, p.mutationCache || new eA()), We(this, xf, p.defaultOptions || {}), We(this, ty, /* @__PURE__ */ new Map()), We(this, ly, /* @__PURE__ */ new Map()), We(this, Nf, 0);
  }
  mount() {
    Jg(this, Nf)._++, ee(this, Nf) === 1 && (We(this, ay, fT.subscribe(async (p) => {
      p && (await this.resumePausedMutations(), ee(this, cl).onFocus());
    })), We(this, ny, l0.subscribe(async (p) => {
      p && (await this.resumePausedMutations(), ee(this, cl).onOnline());
    })));
  }
  unmount() {
    var p, y;
    Jg(this, Nf)._--, ee(this, Nf) === 0 && ((p = ee(this, ay)) == null || p.call(this), We(this, ay, void 0), (y = ee(this, ny)) == null || y.call(this), We(this, ny, void 0));
  }
  isFetching(p) {
    return ee(this, cl).findAll({ ...p, fetchStatus: "fetching" }).length;
  }
  isMutating(p) {
    return ee(this, Hf).findAll({ ...p, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(p) {
    var A;
    const y = this.defaultQueryOptions({ queryKey: p });
    return (A = ee(this, cl).get(y.queryHash)) == null ? void 0 : A.state.data;
  }
  ensureQueryData(p) {
    const y = this.defaultQueryOptions(p), A = ee(this, cl).build(this, y), T = A.state.data;
    return T === void 0 ? this.fetchQuery(p) : (p.revalidateIfStale && A.isStaleByTime(Db(y.staleTime, A)) && this.prefetchQuery(y), Promise.resolve(T));
  }
  getQueriesData(p) {
    return ee(this, cl).findAll(p).map(({ queryKey: y, state: A }) => {
      const T = A.data;
      return [y, T];
    });
  }
  setQueryData(p, y, A) {
    const T = this.defaultQueryOptions({ queryKey: p }), Z = ee(this, cl).get(
      T.queryHash
    ), ie = Z == null ? void 0 : Z.state.data, Oe = NE(y, ie);
    if (Oe !== void 0)
      return ee(this, cl).build(this, T).setData(Oe, { ...A, manual: !0 });
  }
  setQueriesData(p, y, A) {
    return La.batch(
      () => ee(this, cl).findAll(p).map(({ queryKey: T }) => [
        T,
        this.setQueryData(T, y, A)
      ])
    );
  }
  getQueryState(p) {
    var A;
    const y = this.defaultQueryOptions({ queryKey: p });
    return (A = ee(this, cl).get(
      y.queryHash
    )) == null ? void 0 : A.state;
  }
  removeQueries(p) {
    const y = ee(this, cl);
    La.batch(() => {
      y.findAll(p).forEach((A) => {
        y.remove(A);
      });
    });
  }
  resetQueries(p, y) {
    const A = ee(this, cl);
    return La.batch(() => (A.findAll(p).forEach((T) => {
      T.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...p
      },
      y
    )));
  }
  cancelQueries(p, y = {}) {
    const A = { revert: !0, ...y }, T = La.batch(
      () => ee(this, cl).findAll(p).map((Z) => Z.cancel(A))
    );
    return Promise.all(T).then(ni).catch(ni);
  }
  invalidateQueries(p, y = {}) {
    return La.batch(() => (ee(this, cl).findAll(p).forEach((A) => {
      A.invalidate();
    }), (p == null ? void 0 : p.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...p,
        type: (p == null ? void 0 : p.refetchType) ?? (p == null ? void 0 : p.type) ?? "active"
      },
      y
    )));
  }
  refetchQueries(p, y = {}) {
    const A = {
      ...y,
      cancelRefetch: y.cancelRefetch ?? !0
    }, T = La.batch(
      () => ee(this, cl).findAll(p).filter((Z) => !Z.isDisabled() && !Z.isStatic()).map((Z) => {
        let ie = Z.fetch(void 0, A);
        return A.throwOnError || (ie = ie.catch(ni)), Z.state.fetchStatus === "paused" ? Promise.resolve() : ie;
      })
    );
    return Promise.all(T).then(ni);
  }
  fetchQuery(p) {
    const y = this.defaultQueryOptions(p);
    y.retry === void 0 && (y.retry = !1);
    const A = ee(this, cl).build(this, y);
    return A.isStaleByTime(
      Db(y.staleTime, A)
    ) ? A.fetch(y) : Promise.resolve(A.state.data);
  }
  prefetchQuery(p) {
    return this.fetchQuery(p).then(ni).catch(ni);
  }
  fetchInfiniteQuery(p) {
    return p.behavior = $1(p.pages), this.fetchQuery(p);
  }
  prefetchInfiniteQuery(p) {
    return this.fetchInfiniteQuery(p).then(ni).catch(ni);
  }
  ensureInfiniteQueryData(p) {
    return p.behavior = $1(p.pages), this.ensureQueryData(p);
  }
  resumePausedMutations() {
    return l0.isOnline() ? ee(this, Hf).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return ee(this, cl);
  }
  getMutationCache() {
    return ee(this, Hf);
  }
  getDefaultOptions() {
    return ee(this, xf);
  }
  setDefaultOptions(p) {
    We(this, xf, p);
  }
  setQueryDefaults(p, y) {
    ee(this, ty).set(ev(p), {
      queryKey: p,
      defaultOptions: y
    });
  }
  getQueryDefaults(p) {
    const y = [...ee(this, ty).values()], A = {};
    return y.forEach((T) => {
      tv(p, T.queryKey) && Object.assign(A, T.defaultOptions);
    }), A;
  }
  setMutationDefaults(p, y) {
    ee(this, ly).set(ev(p), {
      mutationKey: p,
      defaultOptions: y
    });
  }
  getMutationDefaults(p) {
    const y = [...ee(this, ly).values()], A = {};
    return y.forEach((T) => {
      tv(p, T.mutationKey) && Object.assign(A, T.defaultOptions);
    }), A;
  }
  defaultQueryOptions(p) {
    if (p._defaulted)
      return p;
    const y = {
      ...ee(this, xf).queries,
      ...this.getQueryDefaults(p.queryKey),
      ...p,
      _defaulted: !0
    };
    return y.queryHash || (y.queryHash = Cb(
      y.queryKey,
      y
    )), y.refetchOnReconnect === void 0 && (y.refetchOnReconnect = y.networkMode !== "always"), y.throwOnError === void 0 && (y.throwOnError = !!y.suspense), !y.networkMode && y.persister && (y.networkMode = "offlineFirst"), y.queryFn === t0 && (y.enabled = !1), y;
  }
  defaultMutationOptions(p) {
    return p != null && p._defaulted ? p : {
      ...ee(this, xf).mutations,
      ...(p == null ? void 0 : p.mutationKey) && this.getMutationDefaults(p.mutationKey),
      ...p,
      _defaulted: !0
    };
  }
  clear() {
    ee(this, cl).clear(), ee(this, Hf).clear();
  }
}, cl = new WeakMap(), Hf = new WeakMap(), xf = new WeakMap(), ty = new WeakMap(), ly = new WeakMap(), Nf = new WeakMap(), ay = new WeakMap(), ny = new WeakMap(), nT), aA = Ub.createContext(
  void 0
), nA = ({
  client: p,
  children: y
}) => (Ub.useEffect(() => (p.mount(), () => {
  p.unmount();
}), [p]), /* @__PURE__ */ Ru.jsx(aA.Provider, { value: p, children: y }));
const uA = () => /* @__PURE__ */ Ru.jsxs("div", { className: "layout", children: [
  /* @__PURE__ */ Ru.jsx("header", { className: "header", children: /* @__PURE__ */ Ru.jsx("h1", { children: "Desktop Application" }) }),
  /* @__PURE__ */ Ru.jsx("main", { className: "main-content", children: /* @__PURE__ */ Ru.jsx("p", { children: "Welcome to your Electron application with React and TanStack Query!" }) }),
  /* @__PURE__ */ Ru.jsx("footer", { className: "footer", children: /* @__PURE__ */ Ru.jsxs("p", { children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " - Your Application"
  ] }) })
] }), iA = new lA({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !1,
      retry: 1,
      staleTime: 5 * 60 * 1e3
    }
  }
});
function cA() {
  return /* @__PURE__ */ Ru.jsxs(nA, { client: iA, children: [
    /* @__PURE__ */ Ru.jsx(uA, {}),
    !1
  ] });
}
const oA = xE.createRoot(document.getElementById("root"));
oA.render(
  /* @__PURE__ */ Ru.jsx(RE.StrictMode, { children: /* @__PURE__ */ Ru.jsx(cA, {}) })
);
