function CE(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var yE = { exports: {} }, Jp = {}, gE = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function bk() {
  if (rT) return Et;
  rT = 1;
  var j = Symbol.for("react.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), g = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ue = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), K = Symbol.iterator;
  function Se(k) {
    return k === null || typeof k != "object" ? null : (k = K && k[K] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ze = Object.assign, nt = {};
  function rt(k, B, Ye) {
    this.props = k, this.context = B, this.refs = nt, this.updater = Ye || ae;
  }
  rt.prototype.isReactComponent = {}, rt.prototype.setState = function(k, B) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, B, "setState");
  }, rt.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function Bt() {
  }
  Bt.prototype = rt.prototype;
  function Ze(k, B, Ye) {
    this.props = k, this.context = B, this.refs = nt, this.updater = Ye || ae;
  }
  var We = Ze.prototype = new Bt();
  We.constructor = Ze, ze(We, rt.prototype), We.isPureReactComponent = !0;
  var ft = Array.isArray, Ne = Object.prototype.hasOwnProperty, mt = { current: null }, Ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ln(k, B, Ye) {
    var Be, dt = {}, ut = null, it = null;
    if (B != null) for (Be in B.ref !== void 0 && (it = B.ref), B.key !== void 0 && (ut = "" + B.key), B) Ne.call(B, Be) && !Ie.hasOwnProperty(Be) && (dt[Be] = B[Be]);
    var ot = arguments.length - 2;
    if (ot === 1) dt.children = Ye;
    else if (1 < ot) {
      for (var pt = Array(ot), $t = 0; $t < ot; $t++) pt[$t] = arguments[$t + 2];
      dt.children = pt;
    }
    if (k && k.defaultProps) for (Be in ot = k.defaultProps, ot) dt[Be] === void 0 && (dt[Be] = ot[Be]);
    return { $$typeof: j, type: k, key: ut, ref: it, props: dt, _owner: mt.current };
  }
  function Ht(k, B) {
    return { $$typeof: j, type: k.type, key: B, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Jt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === j;
  }
  function un(k) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Ye) {
      return B[Ye];
    });
  }
  var _t = /\/+/g;
  function Ae(k, B) {
    return typeof k == "object" && k !== null && k.key != null ? un("" + k.key) : B.toString(36);
  }
  function Ft(k, B, Ye, Be, dt) {
    var ut = typeof k;
    (ut === "undefined" || ut === "boolean") && (k = null);
    var it = !1;
    if (k === null) it = !0;
    else switch (ut) {
      case "string":
      case "number":
        it = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case j:
          case M:
            it = !0;
        }
    }
    if (it) return it = k, dt = dt(it), k = Be === "" ? "." + Ae(it, 0) : Be, ft(dt) ? (Ye = "", k != null && (Ye = k.replace(_t, "$&/") + "/"), Ft(dt, B, Ye, "", function($t) {
      return $t;
    })) : dt != null && (Jt(dt) && (dt = Ht(dt, Ye + (!dt.key || it && it.key === dt.key ? "" : ("" + dt.key).replace(_t, "$&/") + "/") + k)), B.push(dt)), 1;
    if (it = 0, Be = Be === "" ? "." : Be + ":", ft(k)) for (var ot = 0; ot < k.length; ot++) {
      ut = k[ot];
      var pt = Be + Ae(ut, ot);
      it += Ft(ut, B, Ye, pt, dt);
    }
    else if (pt = Se(k), typeof pt == "function") for (k = pt.call(k), ot = 0; !(ut = k.next()).done; ) ut = ut.value, pt = Be + Ae(ut, ot++), it += Ft(ut, B, Ye, pt, dt);
    else if (ut === "object") throw B = String(k), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return it;
  }
  function kt(k, B, Ye) {
    if (k == null) return k;
    var Be = [], dt = 0;
    return Ft(k, Be, "", "", function(ut) {
      return B.call(Ye, ut, dt++);
    }), Be;
  }
  function Ot(k) {
    if (k._status === -1) {
      var B = k._result;
      B = B(), B.then(function(Ye) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Ye);
      }, function(Ye) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Ye);
      }), k._status === -1 && (k._status = 0, k._result = B);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var xe = { current: null }, ne = { transition: null }, be = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ne, ReactCurrentOwner: mt };
  function se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: kt, forEach: function(k, B, Ye) {
    kt(k, function() {
      B.apply(this, arguments);
    }, Ye);
  }, count: function(k) {
    var B = 0;
    return kt(k, function() {
      B++;
    }), B;
  }, toArray: function(k) {
    return kt(k, function(B) {
      return B;
    }) || [];
  }, only: function(k) {
    if (!Jt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Et.Component = rt, Et.Fragment = T, Et.Profiler = ee, Et.PureComponent = Ze, Et.StrictMode = Q, Et.Suspense = ie, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Et.act = se, Et.cloneElement = function(k, B, Ye) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Be = ze({}, k.props), dt = k.key, ut = k.ref, it = k._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ut = B.ref, it = mt.current), B.key !== void 0 && (dt = "" + B.key), k.type && k.type.defaultProps) var ot = k.type.defaultProps;
      for (pt in B) Ne.call(B, pt) && !Ie.hasOwnProperty(pt) && (Be[pt] = B[pt] === void 0 && ot !== void 0 ? ot[pt] : B[pt]);
    }
    var pt = arguments.length - 2;
    if (pt === 1) Be.children = Ye;
    else if (1 < pt) {
      ot = Array(pt);
      for (var $t = 0; $t < pt; $t++) ot[$t] = arguments[$t + 2];
      Be.children = ot;
    }
    return { $$typeof: j, type: k.type, key: dt, ref: ut, props: Be, _owner: it };
  }, Et.createContext = function(k) {
    return k = { $$typeof: g, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: J, _context: k }, k.Consumer = k;
  }, Et.createElement = ln, Et.createFactory = function(k) {
    var B = ln.bind(null, k);
    return B.type = k, B;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(k) {
    return { $$typeof: Ue, render: k };
  }, Et.isValidElement = Jt, Et.lazy = function(k) {
    return { $$typeof: Oe, _payload: { _status: -1, _result: k }, _init: Ot };
  }, Et.memo = function(k, B) {
    return { $$typeof: ue, type: k, compare: B === void 0 ? null : B };
  }, Et.startTransition = function(k) {
    var B = ne.transition;
    ne.transition = {};
    try {
      k();
    } finally {
      ne.transition = B;
    }
  }, Et.unstable_act = se, Et.useCallback = function(k, B) {
    return xe.current.useCallback(k, B);
  }, Et.useContext = function(k) {
    return xe.current.useContext(k);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(k) {
    return xe.current.useDeferredValue(k);
  }, Et.useEffect = function(k, B) {
    return xe.current.useEffect(k, B);
  }, Et.useId = function() {
    return xe.current.useId();
  }, Et.useImperativeHandle = function(k, B, Ye) {
    return xe.current.useImperativeHandle(k, B, Ye);
  }, Et.useInsertionEffect = function(k, B) {
    return xe.current.useInsertionEffect(k, B);
  }, Et.useLayoutEffect = function(k, B) {
    return xe.current.useLayoutEffect(k, B);
  }, Et.useMemo = function(k, B) {
    return xe.current.useMemo(k, B);
  }, Et.useReducer = function(k, B, Ye) {
    return xe.current.useReducer(k, B, Ye);
  }, Et.useRef = function(k) {
    return xe.current.useRef(k);
  }, Et.useState = function(k) {
    return xe.current.useState(k);
  }, Et.useSyncExternalStore = function(k, B, Ye) {
    return xe.current.useSyncExternalStore(k, B, Ye);
  }, Et.useTransition = function() {
    return xe.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var tv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
tv.exports;
var aT;
function _k() {
  return aT || (aT = 1, function(j, M) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var T = "18.3.1", Q = Symbol.for("react.element"), ee = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), Ue = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), nt = Symbol.for("react.offscreen"), rt = Symbol.iterator, Bt = "@@iterator";
      function Ze(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = rt && h[rt] || h[Bt];
        return typeof C == "function" ? C : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ft = {
        transition: null
      }, Ne = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, mt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {}, ln = null;
      function Ht(h) {
        ln = h;
      }
      Ie.setExtraStackFrame = function(h) {
        ln = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        ln && (h += ln);
        var C = Ie.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Jt = !1, un = !1, _t = !1, Ae = !1, Ft = !1, kt = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: ft,
        ReactCurrentOwner: mt
      };
      kt.ReactDebugCurrentFrame = Ie, kt.ReactCurrentActQueue = Ne;
      function Ot(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ne("warn", h, z);
        }
      }
      function xe(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ne("error", h, z);
        }
      }
      function ne(h, C, z) {
        {
          var H = kt.ReactDebugCurrentFrame, te = H.getStackAddendum();
          te !== "" && (C += "%s", z = z.concat([te]));
          var Fe = z.map(function(ce) {
            return String(ce);
          });
          Fe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Fe);
        }
      }
      var be = {};
      function se(h, C) {
        {
          var z = h.constructor, H = z && (z.displayName || z.name) || "ReactClass", te = H + "." + C;
          if (be[te])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), be[te] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          se(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, H) {
          se(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, H) {
          se(h, "setState");
        }
      }, B = Object.assign, Ye = {};
      Object.freeze(Ye);
      function Be(h, C, z) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = z || k;
      }
      Be.prototype.isReactComponent = {}, Be.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Be.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ut = function(h, C) {
          Object.defineProperty(Be.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var it in dt)
          dt.hasOwnProperty(it) && ut(it, dt[it]);
      }
      function ot() {
      }
      ot.prototype = Be.prototype;
      function pt(h, C, z) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = z || k;
      }
      var $t = pt.prototype = new ot();
      $t.constructor = pt, B($t, Be.prototype), $t.isPureReactComponent = !0;
      function Nn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var br = Array.isArray;
      function Rn(h) {
        return br(h);
      }
      function rr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Bn(h) {
        try {
          return $n(h), !1;
        } catch {
          return !0;
        }
      }
      function $n(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Bn(h))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(h)), $n(h);
      }
      function ci(h, C, z) {
        var H = h.displayName;
        if (H)
          return H;
        var te = C.displayName || C.name || "";
        return te !== "" ? z + "(" + te + ")" : z;
      }
      function sa(h) {
        return h.displayName || "Context";
      }
      function Kn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case J:
            return "Fragment";
          case ee:
            return "Portal";
          case Ue:
            return "Profiler";
          case g:
            return "StrictMode";
          case K:
            return "Suspense";
          case Se:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ue:
              var C = h;
              return sa(C) + ".Consumer";
            case ie:
              var z = h;
              return sa(z._context) + ".Provider";
            case Oe:
              return ci(h, h.render, "ForwardRef");
            case ae:
              var H = h.displayName || null;
              return H !== null ? H : Kn(h.type) || "Memo";
            case ze: {
              var te = h, Fe = te._payload, ce = te._init;
              try {
                return Kn(ce(Fe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, Ya, Ln;
      Ln = {};
      function Er(h) {
        if (Tn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Tn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Qa(h, C) {
        var z = function() {
          Sr || (Sr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, C) {
        var z = function() {
          Ya || (Ya = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function le(h) {
        if (typeof h.ref == "string" && mt.current && h.__self && mt.current.stateNode !== h.__self) {
          var C = Kn(mt.current.type);
          Ln[C] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var _e = function(h, C, z, H, te, Fe, ce) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Q,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: ce,
          // Record the component responsible for creating this element.
          _owner: Fe
        };
        return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
      };
      function st(h, C, z) {
        var H, te = {}, Fe = null, ce = null, Pe = null, gt = null;
        if (C != null) {
          Er(C) && (ce = C.ref, le(C)), ca(C) && (Yr(C.key), Fe = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, gt = C.__source === void 0 ? null : C.__source;
          for (H in C)
            Tn.call(C, H) && !In.hasOwnProperty(H) && (te[H] = C[H]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          te.children = z;
        else if (bt > 1) {
          for (var rn = Array(bt), Wt = 0; Wt < bt; Wt++)
            rn[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(rn), te.children = rn;
        }
        if (h && h.defaultProps) {
          var ct = h.defaultProps;
          for (H in ct)
            te[H] === void 0 && (te[H] = ct[H]);
        }
        if (Fe || ce) {
          var Gt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Fe && Qa(te, Gt), ce && fi(te, Gt);
        }
        return _e(h, Fe, ce, Pe, gt, mt.current, te);
      }
      function jt(h, C) {
        var z = _e(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function en(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, te = B({}, h.props), Fe = h.key, ce = h.ref, Pe = h._self, gt = h._source, bt = h._owner;
        if (C != null) {
          Er(C) && (ce = C.ref, bt = mt.current), ca(C) && (Yr(C.key), Fe = "" + C.key);
          var rn;
          h.type && h.type.defaultProps && (rn = h.type.defaultProps);
          for (H in C)
            Tn.call(C, H) && !In.hasOwnProperty(H) && (C[H] === void 0 && rn !== void 0 ? te[H] = rn[H] : te[H] = C[H]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          te.children = z;
        else if (Wt > 1) {
          for (var ct = Array(Wt), Gt = 0; Gt < Wt; Gt++)
            ct[Gt] = arguments[Gt + 2];
          te.children = ct;
        }
        return _e(h.type, Fe, ce, Pe, gt, bt, te);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Q;
      }
      var on = ".", Xn = ":";
      function tn(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(te) {
          return z[te];
        });
        return "$" + H;
      }
      var It = !1, Yt = /\/+/g;
      function fa(h) {
        return h.replace(Yt, "$&/");
      }
      function Cr(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), tn("" + h.key)) : C.toString(36);
      }
      function wa(h, C, z, H, te) {
        var Fe = typeof h;
        (Fe === "undefined" || Fe === "boolean") && (h = null);
        var ce = !1;
        if (h === null)
          ce = !0;
        else
          switch (Fe) {
            case "string":
            case "number":
              ce = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Q:
                case ee:
                  ce = !0;
              }
          }
        if (ce) {
          var Pe = h, gt = te(Pe), bt = H === "" ? on + Cr(Pe, 0) : H;
          if (Rn(gt)) {
            var rn = "";
            bt != null && (rn = fa(bt) + "/"), wa(gt, C, rn, "", function(Xf) {
              return Xf;
            });
          } else gt != null && (vn(gt) && (gt.key && (!Pe || Pe.key !== gt.key) && Yr(gt.key), gt = jt(
            gt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (gt.key && (!Pe || Pe.key !== gt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + gt.key) + "/"
            ) : "") + bt
          )), C.push(gt));
          return 1;
        }
        var Wt, ct, Gt = 0, hn = H === "" ? on : H + Xn;
        if (Rn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Wt = h[Rl], ct = hn + Cr(Wt, Rl), Gt += wa(Wt, C, z, ct, te);
        else {
          var Xo = Ze(h);
          if (typeof Xo == "function") {
            var Bi = h;
            Xo === Bi.entries && (It || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Zo = Xo.call(Bi), ou, Kf = 0; !(ou = Zo.next()).done; )
              Wt = ou.value, ct = hn + Cr(Wt, Kf++), Gt += wa(Wt, C, z, ct, te);
          } else if (Fe === "object") {
            var cc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Gt;
      }
      function Hi(h, C, z) {
        if (h == null)
          return h;
        var H = [], te = 0;
        return wa(h, H, "", "", function(Fe) {
          return C.call(z, Fe, te++);
        }), H;
      }
      function Jl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, z) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: ue,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ie,
          _context: C
        };
        var z = !1, H = !1, te = !1;
        {
          var Fe = {
            $$typeof: ue,
            _context: C
          };
          Object.defineProperties(Fe, {
            Provider: {
              get: function() {
                return H || (H = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ce) {
                C.Provider = ce;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ce) {
                C._currentValue = ce;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ce) {
                C._currentValue2 = ce;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ce) {
                C._threadCount = ce;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ce) {
                te || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ce), te = !0);
              }
            }
          }), C.Consumer = Fe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, kr = 0, ar = 1, di = 2;
      function Wa(h) {
        if (h._status === _r) {
          var C = h._result, z = C();
          if (z.then(function(Fe) {
            if (h._status === kr || h._status === _r) {
              var ce = h;
              ce._status = ar, ce._result = Fe;
            }
          }, function(Fe) {
            if (h._status === kr || h._status === _r) {
              var ce = h;
              ce._status = di, ce._result = Fe;
            }
          }), h._status === _r) {
            var H = h;
            H._status = kr, H._result = z;
          }
        }
        if (h._status === ar) {
          var te = h._result;
          return te === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, te), "default" in te || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, te), te.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, z = {
          $$typeof: ze,
          _payload: C,
          _init: Wa
        };
        {
          var H, te;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Fe) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Fe, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(Fe) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = Fe, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function vi(h) {
        h != null && h.$$typeof === ae ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? xe("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Oe,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(H) {
              z = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === J || h === Ue || Ft || h === g || h === K || h === Se || Ae || h === nt || Jt || un || _t || typeof h == "object" && h !== null && (h.$$typeof === ze || h.$$typeof === ae || h.$$typeof === ie || h.$$typeof === ue || h.$$typeof === Oe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function fe(h, C) {
        I(h) || xe("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: ae,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(te) {
              H = te, !h.name && !h.displayName && (h.displayName = te);
            }
          });
        }
        return z;
      }
      function Ee() {
        var h = We.current;
        return h === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function et(h) {
        var C = Ee();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ke(h) {
        var C = Ee();
        return C.useState(h);
      }
      function yt(h, C, z) {
        var H = Ee();
        return H.useReducer(h, C, z);
      }
      function vt(h) {
        var C = Ee();
        return C.useRef(h);
      }
      function wn(h, C) {
        var z = Ee();
        return z.useEffect(h, C);
      }
      function nn(h, C) {
        var z = Ee();
        return z.useInsertionEffect(h, C);
      }
      function sn(h, C) {
        var z = Ee();
        return z.useLayoutEffect(h, C);
      }
      function ir(h, C) {
        var z = Ee();
        return z.useCallback(h, C);
      }
      function Ga(h, C) {
        var z = Ee();
        return z.useMemo(h, C);
      }
      function qa(h, C, z) {
        var H = Ee();
        return H.useImperativeHandle(h, C, z);
      }
      function tt(h, C) {
        {
          var z = Ee();
          return z.useDebugValue(h, C);
        }
      }
      function lt() {
        var h = Ee();
        return h.useTransition();
      }
      function Ka(h) {
        var C = Ee();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = Ee();
        return h.useId();
      }
      function ru(h, C, z) {
        var H = Ee();
        return H.useSyncExternalStore(h, C, z);
      }
      var hl = 0, qu, ml, Qr, Wo, Dr, oc, sc;
      function Ku() {
      }
      Ku.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            qu = console.log, ml = console.info, Qr = console.warn, Wo = console.error, Dr = console.group, oc = console.groupCollapsed, sc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ku,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function da() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: B({}, h, {
                value: qu
              }),
              info: B({}, h, {
                value: ml
              }),
              warn: B({}, h, {
                value: Qr
              }),
              error: B({}, h, {
                value: Wo
              }),
              group: B({}, h, {
                value: Dr
              }),
              groupCollapsed: B({}, h, {
                value: oc
              }),
              groupEnd: B({}, h, {
                value: sc
              })
            });
          }
          hl < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = kt.ReactCurrentDispatcher, Za;
      function Xu(h, C, z) {
        {
          if (Za === void 0)
            try {
              throw Error();
            } catch (te) {
              var H = te.stack.trim().match(/\n( *(at )?)/);
              Za = H && H[1] || "";
            }
          return `
` + Za + h;
        }
      }
      var au = !1, gl;
      {
        var Zu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Zu();
      }
      function Ju(h, C) {
        if (!h || au)
          return "";
        {
          var z = gl.get(h);
          if (z !== void 0)
            return z;
        }
        var H;
        au = !0;
        var te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Fe;
        Fe = Xa.current, Xa.current = null, yl();
        try {
          if (C) {
            var ce = function() {
              throw Error();
            };
            if (Object.defineProperty(ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ce, []);
              } catch (hn) {
                H = hn;
              }
              Reflect.construct(h, [], ce);
            } else {
              try {
                ce.call();
              } catch (hn) {
                H = hn;
              }
              h.call(ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              H = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && H && typeof hn.stack == "string") {
            for (var Pe = hn.stack.split(`
`), gt = H.stack.split(`
`), bt = Pe.length - 1, rn = gt.length - 1; bt >= 1 && rn >= 0 && Pe[bt] !== gt[rn]; )
              rn--;
            for (; bt >= 1 && rn >= 0; bt--, rn--)
              if (Pe[bt] !== gt[rn]) {
                if (bt !== 1 || rn !== 1)
                  do
                    if (bt--, rn--, rn < 0 || Pe[bt] !== gt[rn]) {
                      var Wt = `
` + Pe[bt].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Wt), Wt;
                    }
                  while (bt >= 1 && rn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Xa.current = Fe, da(), Error.prepareStackTrace = te;
        }
        var ct = h ? h.displayName || h.name : "", Gt = ct ? Xu(ct) : "";
        return typeof h == "function" && gl.set(h, Gt), Gt;
      }
      function Pi(h, C, z) {
        return Ju(h, !1);
      }
      function Gf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ju(h, Gf(h));
        if (typeof h == "string")
          return Xu(h);
        switch (h) {
          case K:
            return Xu("Suspense");
          case Se:
            return Xu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Oe:
              return Pi(h.render);
            case ae:
              return Vi(h.type, C, z);
            case ze: {
              var H = h, te = H._payload, Fe = H._init;
              try {
                return Vi(Fe(te), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Nt = {}, eo = kt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          eo.setExtraStackFrame(z);
        } else
          eo.setExtraStackFrame(null);
      }
      function Go(h, C, z, H, te) {
        {
          var Fe = Function.call.bind(Tn);
          for (var ce in h)
            if (Fe(h, ce)) {
              var Pe = void 0;
              try {
                if (typeof h[ce] != "function") {
                  var gt = Error((H || "React class") + ": " + z + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw gt.name = "Invariant Violation", gt;
                }
                Pe = h[ce](C, ce, H, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Pe = bt;
              }
              Pe && !(Pe instanceof Error) && (xt(te), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", z, ce, typeof Pe), xt(null)), Pe instanceof Error && !(Pe.message in Nt) && (Nt[Pe.message] = !0, xt(te), xe("Failed %s type: %s", z, Pe.message), xt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ht(z);
        } else
          Ht(null);
      }
      var qe;
      qe = !1;
      function to() {
        if (mt.current) {
          var h = Kn(mt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function lr(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? lr(h.__source) : "";
      }
      var Or = {};
      function yi(h) {
        var C = to();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = yi(C);
          if (!Or[z]) {
            Or[z] = !0;
            var H = "";
            h && h._owner && h._owner !== mt.current && (H = " It was passed a child from " + Kn(h._owner.type) + "."), hi(h), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, H), hi(null);
          }
        }
      }
      function Qt(h, C) {
        if (typeof h == "object") {
          if (Rn(h))
            for (var z = 0; z < h.length; z++) {
              var H = h[z];
              vn(H) && cn(H, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var te = Ze(h);
            if (typeof te == "function" && te !== h.entries)
              for (var Fe = te.call(h), ce; !(ce = Fe.next()).done; )
                vn(ce.value) && cn(ce.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Oe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ae))
            z = C.propTypes;
          else
            return;
          if (z) {
            var H = Kn(C);
            Go(z, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !qe) {
            qe = !0;
            var te = Kn(C);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var H = C[z];
            if (H !== "children" && H !== "key") {
              hi(h), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), xe("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Nr(h, C, z) {
        var H = I(h);
        if (!H) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = mi(C);
          Fe ? te += Fe : te += to();
          var ce;
          h === null ? ce = "null" : Rn(h) ? ce = "array" : h !== void 0 && h.$$typeof === Q ? (ce = "<" + (Kn(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof h, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, te);
        }
        var Pe = st.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (H)
          for (var gt = 2; gt < arguments.length; gt++)
            Qt(arguments[gt], h);
        return h === J ? Yn(Pe) : Sl(Pe), Pe;
      }
      var xa = !1;
      function iu(h) {
        var C = Nr.bind(null, h);
        return C.type = h, xa || (xa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function qo(h, C, z) {
        for (var H = en.apply(this, arguments), te = 2; te < arguments.length; te++)
          Qt(arguments[te], H.type);
        return Sl(H), H;
      }
      function Ko(h, C) {
        var z = ft.transition;
        ft.transition = {};
        var H = ft.transition;
        ft.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ft.transition = z, z === null && H._updatedFibers) {
            var te = H._updatedFibers.size;
            te > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function qf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = j && j[C];
            lu = z.call(j, "timers").setImmediate;
          } catch {
            lu = function(te) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Fe = new MessageChannel();
              Fe.port1.onmessage = te, Fe.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var ba = 0, Ja = !1;
      function gi(h) {
        {
          var C = ba;
          ba++, Ne.current === null && (Ne.current = []);
          var z = Ne.isBatchingLegacy, H;
          try {
            if (Ne.isBatchingLegacy = !0, H = h(), !z && Ne.didScheduleLegacyUpdate) {
              var te = Ne.current;
              te !== null && (Ne.didScheduleLegacyUpdate = !1, Cl(te));
            }
          } catch (ct) {
            throw _a(C), ct;
          } finally {
            Ne.isBatchingLegacy = z;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Fe = H, ce = !1, Pe = {
              then: function(ct, Gt) {
                ce = !0, Fe.then(function(hn) {
                  _a(C), ba === 0 ? no(hn, ct, Gt) : ct(hn);
                }, function(hn) {
                  _a(C), Gt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ce || (Ja = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var gt = H;
            if (_a(C), ba === 0) {
              var bt = Ne.current;
              bt !== null && (Cl(bt), Ne.current = null);
              var rn = {
                then: function(ct, Gt) {
                  Ne.current === null ? (Ne.current = [], no(gt, ct, Gt)) : ct(gt);
                }
              };
              return rn;
            } else {
              var Wt = {
                then: function(ct, Gt) {
                  ct(gt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function _a(h) {
        h !== ba - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function no(h, C, z) {
        {
          var H = Ne.current;
          if (H !== null)
            try {
              Cl(H), qf(function() {
                H.length === 0 ? (Ne.current = null, C(h)) : no(h, C, z);
              });
            } catch (te) {
              z(te);
            }
          else
            C(h);
        }
      }
      var ro = !1;
      function Cl(h) {
        if (!ro) {
          ro = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            ro = !1;
          }
        }
      }
      var uu = Nr, ao = qo, io = iu, ei = {
        map: Hi,
        forEach: eu,
        count: Jl,
        toArray: pl,
        only: vl
      };
      M.Children = ei, M.Component = Be, M.Fragment = J, M.Profiler = Ue, M.PureComponent = pt, M.StrictMode = g, M.Suspense = K, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, M.act = gi, M.cloneElement = ao, M.createContext = tu, M.createElement = uu, M.createFactory = io, M.createRef = Nn, M.forwardRef = vi, M.isValidElement = vn, M.lazy = pi, M.memo = fe, M.startTransition = Ko, M.unstable_act = gi, M.useCallback = ir, M.useContext = et, M.useDebugValue = tt, M.useDeferredValue = Ka, M.useEffect = wn, M.useId = nu, M.useImperativeHandle = qa, M.useInsertionEffect = nn, M.useLayoutEffect = sn, M.useMemo = Ga, M.useReducer = yt, M.useRef = vt, M.useState = Ke, M.useSyncExternalStore = ru, M.useTransition = lt, M.version = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
process.env.NODE_ENV === "production" ? gE.exports = bk() : gE.exports = _k();
var Gu = gE.exports;
const re = /* @__PURE__ */ CE(Gu);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function kk() {
  if (iT) return Jp;
  iT = 1;
  var j = Gu, M = Symbol.for("react.element"), T = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, ee = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Ue, ie, ue) {
    var Oe, K = {}, Se = null, ae = null;
    ue !== void 0 && (Se = "" + ue), ie.key !== void 0 && (Se = "" + ie.key), ie.ref !== void 0 && (ae = ie.ref);
    for (Oe in ie) Q.call(ie, Oe) && !J.hasOwnProperty(Oe) && (K[Oe] = ie[Oe]);
    if (Ue && Ue.defaultProps) for (Oe in ie = Ue.defaultProps, ie) K[Oe] === void 0 && (K[Oe] = ie[Oe]);
    return { $$typeof: M, type: Ue, key: Se, ref: ae, props: K, _owner: ee.current };
  }
  return Jp.Fragment = T, Jp.jsx = g, Jp.jsxs = g, Jp;
}
var ev = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function Dk() {
  return lT || (lT = 1, process.env.NODE_ENV !== "production" && function() {
    var j = Gu, M = Symbol.for("react.element"), T = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Ue = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), ze = Symbol.iterator, nt = "@@iterator";
    function rt(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = ze && R[ze] || R[nt];
      return typeof I == "function" ? I : null;
    }
    var Bt = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ze(R) {
      {
        for (var I = arguments.length, fe = new Array(I > 1 ? I - 1 : 0), Ee = 1; Ee < I; Ee++)
          fe[Ee - 1] = arguments[Ee];
        We("error", R, fe);
      }
    }
    function We(R, I, fe) {
      {
        var Ee = Bt.ReactDebugCurrentFrame, et = Ee.getStackAddendum();
        et !== "" && (I += "%s", fe = fe.concat([et]));
        var Ke = fe.map(function(yt) {
          return String(yt);
        });
        Ke.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ke);
      }
    }
    var ft = !1, Ne = !1, mt = !1, Ie = !1, ln = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Q || R === J || ln || R === ee || R === ue || R === Oe || Ie || R === ae || ft || Ne || mt || typeof R == "object" && R !== null && (R.$$typeof === Se || R.$$typeof === K || R.$$typeof === g || R.$$typeof === Ue || R.$$typeof === ie || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function un(R, I, fe) {
      var Ee = R.displayName;
      if (Ee)
        return Ee;
      var et = I.displayName || I.name || "";
      return et !== "" ? fe + "(" + et + ")" : fe;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function Ae(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Ze("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Q:
          return "Fragment";
        case T:
          return "Portal";
        case J:
          return "Profiler";
        case ee:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ue:
            var I = R;
            return _t(I) + ".Consumer";
          case g:
            var fe = R;
            return _t(fe._context) + ".Provider";
          case ie:
            return un(R, R.render, "ForwardRef");
          case K:
            var Ee = R.displayName || null;
            return Ee !== null ? Ee : Ae(R.type) || "Memo";
          case Se: {
            var et = R, Ke = et._payload, yt = et._init;
            try {
              return Ae(yt(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ft = Object.assign, kt = 0, Ot, xe, ne, be, se, k, B;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Be() {
      {
        if (kt === 0) {
          Ot = console.log, xe = console.info, ne = console.warn, be = console.error, se = console.group, k = console.groupCollapsed, B = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        kt++;
      }
    }
    function dt() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ft({}, R, {
              value: Ot
            }),
            info: Ft({}, R, {
              value: xe
            }),
            warn: Ft({}, R, {
              value: ne
            }),
            error: Ft({}, R, {
              value: be
            }),
            group: Ft({}, R, {
              value: se
            }),
            groupCollapsed: Ft({}, R, {
              value: k
            }),
            groupEnd: Ft({}, R, {
              value: B
            })
          });
        }
        kt < 0 && Ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ut = Bt.ReactCurrentDispatcher, it;
    function ot(R, I, fe) {
      {
        if (it === void 0)
          try {
            throw Error();
          } catch (et) {
            var Ee = et.stack.trim().match(/\n( *(at )?)/);
            it = Ee && Ee[1] || "";
          }
        return `
` + it + R;
      }
    }
    var pt = !1, $t;
    {
      var Nn = typeof WeakMap == "function" ? WeakMap : Map;
      $t = new Nn();
    }
    function br(R, I) {
      if (!R || pt)
        return "";
      {
        var fe = $t.get(R);
        if (fe !== void 0)
          return fe;
      }
      var Ee;
      pt = !0;
      var et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = ut.current, ut.current = null, Be();
      try {
        if (I) {
          var yt = function() {
            throw Error();
          };
          if (Object.defineProperty(yt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(yt, []);
            } catch (tt) {
              Ee = tt;
            }
            Reflect.construct(R, [], yt);
          } else {
            try {
              yt.call();
            } catch (tt) {
              Ee = tt;
            }
            R.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            Ee = tt;
          }
          R();
        }
      } catch (tt) {
        if (tt && Ee && typeof tt.stack == "string") {
          for (var vt = tt.stack.split(`
`), wn = Ee.stack.split(`
`), nn = vt.length - 1, sn = wn.length - 1; nn >= 1 && sn >= 0 && vt[nn] !== wn[sn]; )
            sn--;
          for (; nn >= 1 && sn >= 0; nn--, sn--)
            if (vt[nn] !== wn[sn]) {
              if (nn !== 1 || sn !== 1)
                do
                  if (nn--, sn--, sn < 0 || vt[nn] !== wn[sn]) {
                    var ir = `
` + vt[nn].replace(" at new ", " at ");
                    return R.displayName && ir.includes("<anonymous>") && (ir = ir.replace("<anonymous>", R.displayName)), typeof R == "function" && $t.set(R, ir), ir;
                  }
                while (nn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        pt = !1, ut.current = Ke, dt(), Error.prepareStackTrace = et;
      }
      var Ga = R ? R.displayName || R.name : "", qa = Ga ? ot(Ga) : "";
      return typeof R == "function" && $t.set(R, qa), qa;
    }
    function Rn(R, I, fe) {
      return br(R, !1);
    }
    function rr(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Bn(R, I, fe) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return br(R, rr(R));
      if (typeof R == "string")
        return ot(R);
      switch (R) {
        case ue:
          return ot("Suspense");
        case Oe:
          return ot("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ie:
            return Rn(R.render);
          case K:
            return Bn(R.type, I, fe);
          case Se: {
            var Ee = R, et = Ee._payload, Ke = Ee._init;
            try {
              return Bn(Ke(et), I, fe);
            } catch {
            }
          }
        }
      return "";
    }
    var $n = Object.prototype.hasOwnProperty, Yr = {}, ci = Bt.ReactDebugCurrentFrame;
    function sa(R) {
      if (R) {
        var I = R._owner, fe = Bn(R.type, R._source, I ? I.type : null);
        ci.setExtraStackFrame(fe);
      } else
        ci.setExtraStackFrame(null);
    }
    function Kn(R, I, fe, Ee, et) {
      {
        var Ke = Function.call.bind($n);
        for (var yt in R)
          if (Ke(R, yt)) {
            var vt = void 0;
            try {
              if (typeof R[yt] != "function") {
                var wn = Error((Ee || "React class") + ": " + fe + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              vt = R[yt](I, yt, Ee, fe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              vt = nn;
            }
            vt && !(vt instanceof Error) && (sa(et), Ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", fe, yt, typeof vt), sa(null)), vt instanceof Error && !(vt.message in Yr) && (Yr[vt.message] = !0, sa(et), Ze("Failed %s type: %s", fe, vt.message), sa(null));
          }
      }
    }
    var Tn = Array.isArray;
    function In(R) {
      return Tn(R);
    }
    function Sr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, fe = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return fe;
      }
    }
    function Ya(R) {
      try {
        return Ln(R), !1;
      } catch {
        return !0;
      }
    }
    function Ln(R) {
      return "" + R;
    }
    function Er(R) {
      if (Ya(R))
        return Ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(R)), Ln(R);
    }
    var ca = Bt.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, le;
    function _e(R) {
      if ($n.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function st(R) {
      if ($n.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function jt(R, I) {
      typeof R.ref == "string" && ca.current;
    }
    function en(R, I) {
      {
        var fe = function() {
          fi || (fi = !0, Ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        fe.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: fe,
          configurable: !0
        });
      }
    }
    function vn(R, I) {
      {
        var fe = function() {
          le || (le = !0, Ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        fe.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: fe,
          configurable: !0
        });
      }
    }
    var on = function(R, I, fe, Ee, et, Ke, yt) {
      var vt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: M,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: fe,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return vt._store = {}, Object.defineProperty(vt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(vt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.defineProperty(vt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: et
      }), Object.freeze && (Object.freeze(vt.props), Object.freeze(vt)), vt;
    };
    function Xn(R, I, fe, Ee, et) {
      {
        var Ke, yt = {}, vt = null, wn = null;
        fe !== void 0 && (Er(fe), vt = "" + fe), st(I) && (Er(I.key), vt = "" + I.key), _e(I) && (wn = I.ref, jt(I, et));
        for (Ke in I)
          $n.call(I, Ke) && !Qa.hasOwnProperty(Ke) && (yt[Ke] = I[Ke]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (Ke in nn)
            yt[Ke] === void 0 && (yt[Ke] = nn[Ke]);
        }
        if (vt || wn) {
          var sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          vt && en(yt, sn), wn && vn(yt, sn);
        }
        return on(R, vt, wn, et, Ee, ca.current, yt);
      }
    }
    var tn = Bt.ReactCurrentOwner, It = Bt.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var I = R._owner, fe = Bn(R.type, R._source, I ? I.type : null);
        It.setExtraStackFrame(fe);
      } else
        It.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Cr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === M;
    }
    function wa() {
      {
        if (tn.current) {
          var R = Ae(tn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var Jl = {};
    function eu(R) {
      {
        var I = wa();
        if (!I) {
          var fe = typeof R == "string" ? R : R.displayName || R.name;
          fe && (I = `

Check the top-level render call using <` + fe + ">.");
        }
        return I;
      }
    }
    function pl(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var fe = eu(I);
        if (Jl[fe])
          return;
        Jl[fe] = !0;
        var Ee = "";
        R && R._owner && R._owner !== tn.current && (Ee = " It was passed a child from " + Ae(R._owner.type) + "."), Yt(R), Ze('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', fe, Ee), Yt(null);
      }
    }
    function vl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (In(R))
          for (var fe = 0; fe < R.length; fe++) {
            var Ee = R[fe];
            Cr(Ee) && pl(Ee, I);
          }
        else if (Cr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var et = rt(R);
          if (typeof et == "function" && et !== R.entries)
            for (var Ke = et.call(R), yt; !(yt = Ke.next()).done; )
              Cr(yt.value) && pl(yt.value, I);
        }
      }
    }
    function tu(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var fe;
        if (typeof I == "function")
          fe = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ie || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === K))
          fe = I.propTypes;
        else
          return;
        if (fe) {
          var Ee = Ae(I);
          Kn(fe, R.props, "prop", Ee, R);
        } else if (I.PropTypes !== void 0 && !fa) {
          fa = !0;
          var et = Ae(I);
          Ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", et || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && Ze("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var I = Object.keys(R.props), fe = 0; fe < I.length; fe++) {
          var Ee = I[fe];
          if (Ee !== "children" && Ee !== "key") {
            Yt(R), Ze("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), Ze("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var kr = {};
    function ar(R, I, fe, Ee, et, Ke) {
      {
        var yt = Jt(R);
        if (!yt) {
          var vt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Hi();
          wn ? vt += wn : vt += wa();
          var nn;
          R === null ? nn = "null" : In(R) ? nn = "array" : R !== void 0 && R.$$typeof === M ? (nn = "<" + (Ae(R.type) || "Unknown") + " />", vt = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, Ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, vt);
        }
        var sn = Xn(R, I, fe, et, Ke);
        if (sn == null)
          return sn;
        if (yt) {
          var ir = I.children;
          if (ir !== void 0)
            if (Ee)
              if (In(ir)) {
                for (var Ga = 0; Ga < ir.length; Ga++)
                  vl(ir[Ga], R);
                Object.freeze && Object.freeze(ir);
              } else
                Ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ir, R);
        }
        if ($n.call(I, "key")) {
          var qa = Ae(R), tt = Object.keys(I).filter(function(nu) {
            return nu !== "key";
          }), lt = tt.length > 0 ? "{key: someKey, " + tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[qa + lt]) {
            var Ka = tt.length > 0 ? "{" + tt.join(": ..., ") + ": ...}" : "{}";
            Ze(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, lt, qa, Ka, qa), kr[qa + lt] = !0;
          }
        }
        return R === Q ? _r(sn) : tu(sn), sn;
      }
    }
    function di(R, I, fe) {
      return ar(R, I, fe, !0);
    }
    function Wa(R, I, fe) {
      return ar(R, I, fe, !1);
    }
    var pi = Wa, vi = di;
    ev.Fragment = Q, ev.jsx = pi, ev.jsxs = vi;
  }()), ev;
}
process.env.NODE_ENV === "production" ? yE.exports = kk() : yE.exports = Dk();
var Wu = yE.exports, SE = { exports: {} }, $a = {}, Wm = { exports: {} }, vE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function Ok() {
  return uT || (uT = 1, function(j) {
    function M(ne, be) {
      var se = ne.length;
      ne.push(be);
      e: for (; 0 < se; ) {
        var k = se - 1 >>> 1, B = ne[k];
        if (0 < ee(B, be)) ne[k] = be, ne[se] = B, se = k;
        else break e;
      }
    }
    function T(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function Q(ne) {
      if (ne.length === 0) return null;
      var be = ne[0], se = ne.pop();
      if (se !== be) {
        ne[0] = se;
        e: for (var k = 0, B = ne.length, Ye = B >>> 1; k < Ye; ) {
          var Be = 2 * (k + 1) - 1, dt = ne[Be], ut = Be + 1, it = ne[ut];
          if (0 > ee(dt, se)) ut < B && 0 > ee(it, dt) ? (ne[k] = it, ne[ut] = se, k = ut) : (ne[k] = dt, ne[Be] = se, k = Be);
          else if (ut < B && 0 > ee(it, se)) ne[k] = it, ne[ut] = se, k = ut;
          else break e;
        }
      }
      return be;
    }
    function ee(ne, be) {
      var se = ne.sortIndex - be.sortIndex;
      return se !== 0 ? se : ne.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var J = performance;
      j.unstable_now = function() {
        return J.now();
      };
    } else {
      var g = Date, Ue = g.now();
      j.unstable_now = function() {
        return g.now() - Ue;
      };
    }
    var ie = [], ue = [], Oe = 1, K = null, Se = 3, ae = !1, ze = !1, nt = !1, rt = typeof setTimeout == "function" ? setTimeout : null, Bt = typeof clearTimeout == "function" ? clearTimeout : null, Ze = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(ne) {
      for (var be = T(ue); be !== null; ) {
        if (be.callback === null) Q(ue);
        else if (be.startTime <= ne) Q(ue), be.sortIndex = be.expirationTime, M(ie, be);
        else break;
        be = T(ue);
      }
    }
    function ft(ne) {
      if (nt = !1, We(ne), !ze) if (T(ie) !== null) ze = !0, Ot(Ne);
      else {
        var be = T(ue);
        be !== null && xe(ft, be.startTime - ne);
      }
    }
    function Ne(ne, be) {
      ze = !1, nt && (nt = !1, Bt(ln), ln = -1), ae = !0;
      var se = Se;
      try {
        for (We(be), K = T(ie); K !== null && (!(K.expirationTime > be) || ne && !un()); ) {
          var k = K.callback;
          if (typeof k == "function") {
            K.callback = null, Se = K.priorityLevel;
            var B = k(K.expirationTime <= be);
            be = j.unstable_now(), typeof B == "function" ? K.callback = B : K === T(ie) && Q(ie), We(be);
          } else Q(ie);
          K = T(ie);
        }
        if (K !== null) var Ye = !0;
        else {
          var Be = T(ue);
          Be !== null && xe(ft, Be.startTime - be), Ye = !1;
        }
        return Ye;
      } finally {
        K = null, Se = se, ae = !1;
      }
    }
    var mt = !1, Ie = null, ln = -1, Ht = 5, Jt = -1;
    function un() {
      return !(j.unstable_now() - Jt < Ht);
    }
    function _t() {
      if (Ie !== null) {
        var ne = j.unstable_now();
        Jt = ne;
        var be = !0;
        try {
          be = Ie(!0, ne);
        } finally {
          be ? Ae() : (mt = !1, Ie = null);
        }
      } else mt = !1;
    }
    var Ae;
    if (typeof Ze == "function") Ae = function() {
      Ze(_t);
    };
    else if (typeof MessageChannel < "u") {
      var Ft = new MessageChannel(), kt = Ft.port2;
      Ft.port1.onmessage = _t, Ae = function() {
        kt.postMessage(null);
      };
    } else Ae = function() {
      rt(_t, 0);
    };
    function Ot(ne) {
      Ie = ne, mt || (mt = !0, Ae());
    }
    function xe(ne, be) {
      ln = rt(function() {
        ne(j.unstable_now());
      }, be);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, j.unstable_continueExecution = function() {
      ze || ae || (ze = !0, Ot(Ne));
    }, j.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return Se;
    }, j.unstable_getFirstCallbackNode = function() {
      return T(ie);
    }, j.unstable_next = function(ne) {
      switch (Se) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = Se;
      }
      var se = Se;
      Se = be;
      try {
        return ne();
      } finally {
        Se = se;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function(ne, be) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var se = Se;
      Se = ne;
      try {
        return be();
      } finally {
        Se = se;
      }
    }, j.unstable_scheduleCallback = function(ne, be, se) {
      var k = j.unstable_now();
      switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? k + se : k) : se = k, ne) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = se + B, ne = { id: Oe++, callback: be, priorityLevel: ne, startTime: se, expirationTime: B, sortIndex: -1 }, se > k ? (ne.sortIndex = se, M(ue, ne), T(ie) === null && ne === T(ue) && (nt ? (Bt(ln), ln = -1) : nt = !0, xe(ft, se - k))) : (ne.sortIndex = B, M(ie, ne), ze || ae || (ze = !0, Ot(Ne))), ne;
    }, j.unstable_shouldYield = un, j.unstable_wrapCallback = function(ne) {
      var be = Se;
      return function() {
        var se = Se;
        Se = be;
        try {
          return ne.apply(this, arguments);
        } finally {
          Se = se;
        }
      };
    };
  }(vE)), vE;
}
var hE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function Nk() {
  return oT || (oT = 1, function(j) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = !1, T = 5;
      function Q(le, _e) {
        var st = le.length;
        le.push(_e), g(le, _e, st);
      }
      function ee(le) {
        return le.length === 0 ? null : le[0];
      }
      function J(le) {
        if (le.length === 0)
          return null;
        var _e = le[0], st = le.pop();
        return st !== _e && (le[0] = st, Ue(le, st, 0)), _e;
      }
      function g(le, _e, st) {
        for (var jt = st; jt > 0; ) {
          var en = jt - 1 >>> 1, vn = le[en];
          if (ie(vn, _e) > 0)
            le[en] = _e, le[jt] = vn, jt = en;
          else
            return;
        }
      }
      function Ue(le, _e, st) {
        for (var jt = st, en = le.length, vn = en >>> 1; jt < vn; ) {
          var on = (jt + 1) * 2 - 1, Xn = le[on], tn = on + 1, It = le[tn];
          if (ie(Xn, _e) < 0)
            tn < en && ie(It, Xn) < 0 ? (le[jt] = It, le[tn] = _e, jt = tn) : (le[jt] = Xn, le[on] = _e, jt = on);
          else if (tn < en && ie(It, _e) < 0)
            le[jt] = It, le[tn] = _e, jt = tn;
          else
            return;
        }
      }
      function ie(le, _e) {
        var st = le.sortIndex - _e.sortIndex;
        return st !== 0 ? st : le.id - _e.id;
      }
      var ue = 1, Oe = 2, K = 3, Se = 4, ae = 5;
      function ze(le, _e) {
      }
      var nt = typeof performance == "object" && typeof performance.now == "function";
      if (nt) {
        var rt = performance;
        j.unstable_now = function() {
          return rt.now();
        };
      } else {
        var Bt = Date, Ze = Bt.now();
        j.unstable_now = function() {
          return Bt.now() - Ze;
        };
      }
      var We = 1073741823, ft = -1, Ne = 250, mt = 5e3, Ie = 1e4, ln = We, Ht = [], Jt = [], un = 1, _t = null, Ae = K, Ft = !1, kt = !1, Ot = !1, xe = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function se(le) {
        for (var _e = ee(Jt); _e !== null; ) {
          if (_e.callback === null)
            J(Jt);
          else if (_e.startTime <= le)
            J(Jt), _e.sortIndex = _e.expirationTime, Q(Ht, _e);
          else
            return;
          _e = ee(Jt);
        }
      }
      function k(le) {
        if (Ot = !1, se(le), !kt)
          if (ee(Ht) !== null)
            kt = !0, Ln(B);
          else {
            var _e = ee(Jt);
            _e !== null && Er(k, _e.startTime - le);
          }
      }
      function B(le, _e) {
        kt = !1, Ot && (Ot = !1, ca()), Ft = !0;
        var st = Ae;
        try {
          var jt;
          if (!M) return Ye(le, _e);
        } finally {
          _t = null, Ae = st, Ft = !1;
        }
      }
      function Ye(le, _e) {
        var st = _e;
        for (se(st), _t = ee(Ht); _t !== null && !(_t.expirationTime > st && (!le || ci())); ) {
          var jt = _t.callback;
          if (typeof jt == "function") {
            _t.callback = null, Ae = _t.priorityLevel;
            var en = _t.expirationTime <= st, vn = jt(en);
            st = j.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === ee(Ht) && J(Ht), se(st);
          } else
            J(Ht);
          _t = ee(Ht);
        }
        if (_t !== null)
          return !0;
        var on = ee(Jt);
        return on !== null && Er(k, on.startTime - st), !1;
      }
      function Be(le, _e) {
        switch (le) {
          case ue:
          case Oe:
          case K:
          case Se:
          case ae:
            break;
          default:
            le = K;
        }
        var st = Ae;
        Ae = le;
        try {
          return _e();
        } finally {
          Ae = st;
        }
      }
      function dt(le) {
        var _e;
        switch (Ae) {
          case ue:
          case Oe:
          case K:
            _e = K;
            break;
          default:
            _e = Ae;
            break;
        }
        var st = Ae;
        Ae = _e;
        try {
          return le();
        } finally {
          Ae = st;
        }
      }
      function ut(le) {
        var _e = Ae;
        return function() {
          var st = Ae;
          Ae = _e;
          try {
            return le.apply(this, arguments);
          } finally {
            Ae = st;
          }
        };
      }
      function it(le, _e, st) {
        var jt = j.unstable_now(), en;
        if (typeof st == "object" && st !== null) {
          var vn = st.delay;
          typeof vn == "number" && vn > 0 ? en = jt + vn : en = jt;
        } else
          en = jt;
        var on;
        switch (le) {
          case ue:
            on = ft;
            break;
          case Oe:
            on = Ne;
            break;
          case ae:
            on = ln;
            break;
          case Se:
            on = Ie;
            break;
          case K:
          default:
            on = mt;
            break;
        }
        var Xn = en + on, tn = {
          id: un++,
          callback: _e,
          priorityLevel: le,
          startTime: en,
          expirationTime: Xn,
          sortIndex: -1
        };
        return en > jt ? (tn.sortIndex = en, Q(Jt, tn), ee(Ht) === null && tn === ee(Jt) && (Ot ? ca() : Ot = !0, Er(k, en - jt))) : (tn.sortIndex = Xn, Q(Ht, tn), !kt && !Ft && (kt = !0, Ln(B))), tn;
      }
      function ot() {
      }
      function pt() {
        !kt && !Ft && (kt = !0, Ln(B));
      }
      function $t() {
        return ee(Ht);
      }
      function Nn(le) {
        le.callback = null;
      }
      function br() {
        return Ae;
      }
      var Rn = !1, rr = null, Bn = -1, $n = T, Yr = -1;
      function ci() {
        var le = j.unstable_now() - Yr;
        return !(le < $n);
      }
      function sa() {
      }
      function Kn(le) {
        if (le < 0 || le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        le > 0 ? $n = Math.floor(1e3 / le) : $n = T;
      }
      var Tn = function() {
        if (rr !== null) {
          var le = j.unstable_now();
          Yr = le;
          var _e = !0, st = !0;
          try {
            st = rr(_e, le);
          } finally {
            st ? In() : (Rn = !1, rr = null);
          }
        } else
          Rn = !1;
      }, In;
      if (typeof be == "function")
        In = function() {
          be(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Sr = new MessageChannel(), Ya = Sr.port2;
        Sr.port1.onmessage = Tn, In = function() {
          Ya.postMessage(null);
        };
      } else
        In = function() {
          xe(Tn, 0);
        };
      function Ln(le) {
        rr = le, Rn || (Rn = !0, In());
      }
      function Er(le, _e) {
        Bn = xe(function() {
          le(j.unstable_now());
        }, _e);
      }
      function ca() {
        ne(Bn), Bn = -1;
      }
      var Qa = sa, fi = null;
      j.unstable_IdlePriority = ae, j.unstable_ImmediatePriority = ue, j.unstable_LowPriority = Se, j.unstable_NormalPriority = K, j.unstable_Profiling = fi, j.unstable_UserBlockingPriority = Oe, j.unstable_cancelCallback = Nn, j.unstable_continueExecution = pt, j.unstable_forceFrameRate = Kn, j.unstable_getCurrentPriorityLevel = br, j.unstable_getFirstCallbackNode = $t, j.unstable_next = dt, j.unstable_pauseExecution = ot, j.unstable_requestPaint = Qa, j.unstable_runWithPriority = Be, j.unstable_scheduleCallback = it, j.unstable_shouldYield = ci, j.unstable_wrapCallback = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(hE)), hE;
}
var sT;
function hT() {
  return sT || (sT = 1, process.env.NODE_ENV === "production" ? Wm.exports = Ok() : Wm.exports = Nk()), Wm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function Lk() {
  if (cT) return $a;
  cT = 1;
  var j = Gu, M = hT();
  function T(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Q = /* @__PURE__ */ new Set(), ee = {};
  function J(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (ee[n] = r, n = 0; n < r.length; n++) Q.add(r[n]);
  }
  var Ue = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ie = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oe = {}, K = {};
  function Se(n) {
    return ie.call(K, n) ? !0 : ie.call(Oe, n) ? !1 : ue.test(n) ? K[n] = !0 : (Oe[n] = !0, !1);
  }
  function ae(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ze(n, r, l, o) {
    if (r === null || typeof r > "u" || ae(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function nt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var rt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    rt[n] = new nt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    rt[r] = new nt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    rt[n] = new nt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    rt[n] = new nt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    rt[n] = new nt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    rt[n] = new nt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    rt[n] = new nt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    rt[n] = new nt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    rt[n] = new nt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Bt = /[\-:]([a-z])/g;
  function Ze(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Bt,
      Ze
    );
    rt[r] = new nt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Bt, Ze);
    rt[r] = new nt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Bt, Ze);
    rt[r] = new nt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    rt[n] = new nt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), rt.xlinkHref = new nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    rt[n] = new nt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, o) {
    var c = rt.hasOwnProperty(r) ? rt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ze(r, l, c, o) && (l = null), o || c === null ? Se(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ft = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ne = Symbol.for("react.element"), mt = Symbol.for("react.portal"), Ie = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Jt = Symbol.for("react.provider"), un = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), Ft = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var se = Object.assign, k;
  function B(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var Ye = !1;
  function Be(n, r) {
    if (!n || Ye) return "";
    Ye = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (A) {
          var o = A;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (A) {
          o = A;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var w = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Ye = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function dt(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Be(n.type, !1), n;
      case 11:
        return n = Be(n.type.render, !1), n;
      case 1:
        return n = Be(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ie:
        return "Fragment";
      case mt:
        return "Portal";
      case Ht:
        return "Profiler";
      case ln:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case Ft:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case Jt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function it(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
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
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ot(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function pt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $t(n) {
    var r = pt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Nn(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = pt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var l = r.checked;
    return se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ot(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function $n(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function Yr(n, r) {
    $n(n, r);
    var l = ot(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, ot(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Kn = Array.isArray;
  function Tn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ot(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(T(91));
    return se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(T(92));
        if (Kn(l)) {
          if (1 < l.length) throw Error(T(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ot(l) };
  }
  function Ya(n, r) {
    var l = ot(r.value), o = ot(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function le(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var _e = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, st = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_e).forEach(function(n) {
    st.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), _e[r] = _e[n];
    });
  });
  function jt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || _e.hasOwnProperty(n) && _e[n] ? ("" + r).trim() : r + "px";
  }
  function en(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = jt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(T(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(T(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(T(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(T(62));
    }
  }
  function Xn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var tn = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, fa = null, Cr = null;
  function wa(n) {
    if (n = Le(n)) {
      if (typeof Yt != "function") throw Error(T(280));
      var r = n.stateNode;
      r && (r = mn(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    fa ? Cr ? Cr.push(n) : Cr = [n] : fa = n;
  }
  function Jl() {
    if (fa) {
      var n = fa, r = Cr;
      if (Cr = fa = null, wa(n), r) for (n = 0; n < r.length; n++) wa(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (fa !== null || Cr !== null) && (pl(), Jl());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(T(231, r, typeof l));
    return l;
  }
  var kr = !1;
  if (Ue) try {
    var ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    kr = !1;
  }
  function di(n, r, l, o, c, d, m, E, w) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (G) {
      this.onError(G);
    }
  }
  var Wa = !1, pi = null, vi = !1, R = null, I = { onError: function(n) {
    Wa = !0, pi = n;
  } };
  function fe(n, r, l, o, c, d, m, E, w) {
    Wa = !1, pi = null, di.apply(I, arguments);
  }
  function Ee(n, r, l, o, c, d, m, E, w) {
    if (fe.apply(this, arguments), Wa) {
      if (Wa) {
        var A = pi;
        Wa = !1, pi = null;
      } else throw Error(T(198));
      vi || (vi = !0, R = A);
    }
  }
  function et(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ke(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (et(n) !== n) throw Error(T(188));
  }
  function vt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = et(n), r === null) throw Error(T(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return yt(c), n;
          if (d === o) return yt(c), r;
          d = d.sibling;
        }
        throw Error(T(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(T(189));
        }
      }
      if (l.alternate !== o) throw Error(T(190));
    }
    if (l.tag !== 3) throw Error(T(188));
    return l.stateNode.current === l ? n : r;
  }
  function wn(n) {
    return n = vt(n), n !== null ? nn(n) : null;
  }
  function nn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = nn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = M.unstable_scheduleCallback, ir = M.unstable_cancelCallback, Ga = M.unstable_shouldYield, qa = M.unstable_requestPaint, tt = M.unstable_now, lt = M.unstable_getCurrentPriorityLevel, Ka = M.unstable_ImmediatePriority, nu = M.unstable_UserBlockingPriority, ru = M.unstable_NormalPriority, hl = M.unstable_LowPriority, qu = M.unstable_IdlePriority, ml = null, Qr = null;
  function Wo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Ku, oc = Math.log, sc = Math.LN2;
  function Ku(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (oc(n) / sc | 0) | 0;
  }
  var yl = 64, da = 4194304;
  function Xa(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Za(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Xu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, w = c[m];
      w === -1 ? (!(E & l) || E & o) && (c[m] = Xu(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Ju(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Gf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Nt = 0;
  function eo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var xt, Go, hi, qe, to, lr = !1, mi = [], Or = null, yi = null, cn = null, Qt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Nr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        Qt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Le(r), r !== null && Go(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = iu(Or, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return cn = iu(cn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Qt.set(d, iu(Qt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ko(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = et(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ke(l), r !== null) {
            n.blockedOn = r, to(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ao(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        tn = o, l.target.dispatchEvent(o), tn = null;
      } else return r = Le(l), r !== null && Go(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function qf() {
    lr = !1, Or !== null && El(Or) && (Or = null), yi !== null && El(yi) && (yi = null), cn !== null && El(cn) && (cn = null), Qt.forEach(lu), Sl.forEach(lu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lr || (lr = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, qf)));
  }
  function Ja(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < mi.length) {
      ba(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && ba(Or, n), yi !== null && ba(yi, n), cn !== null && ba(cn, n), Qt.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Ko(l), l.blockedOn === null && Yn.shift();
  }
  var gi = ft.ReactCurrentBatchConfig, _a = !0;
  function no(n, r, l, o) {
    var c = Nt, d = gi.transition;
    gi.transition = null;
    try {
      Nt = 1, Cl(n, r, l, o);
    } finally {
      Nt = c, gi.transition = d;
    }
  }
  function ro(n, r, l, o) {
    var c = Nt, d = gi.transition;
    gi.transition = null;
    try {
      Nt = 4, Cl(n, r, l, o);
    } finally {
      Nt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (_a) {
      var c = ao(n, r, l, o);
      if (c === null) Cc(n, r, o, uu, l), xa(n, o);
      else if (qo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Nr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Le(c);
          if (d !== null && xt(d), d = ao(n, r, l, o), d === null && Cc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Cc(n, r, o, null, l);
    }
  }
  var uu = null;
  function ao(n, r, l, o) {
    if (uu = null, n = It(o), n = vu(n), n !== null) if (r = et(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ke(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function io(n) {
    switch (n) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (lt()) {
          case Ka:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function te() {
    return !0;
  }
  function Fe() {
    return !1;
  }
  function ce(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? te : Fe, this.isPropagationStopped = Fe, this;
    }
    return se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = te);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = te);
    }, persist: function() {
    }, isPersistent: te }), r;
  }
  var Pe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, gt = ce(Pe), bt = se({}, Pe, { view: 0, detail: 0 }), rn = ce(bt), Wt, ct, Gt, hn = se({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Gt && (Gt && n.type === "mousemove" ? (Wt = n.screenX - Gt.screenX, ct = n.screenY - Gt.screenY) : ct = Wt = 0, Gt = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ct;
  } }), Rl = ce(hn), Xo = se({}, hn, { dataTransfer: 0 }), Bi = ce(Xo), Zo = se({}, bt, { relatedTarget: 0 }), ou = ce(Zo), Kf = se({}, Pe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cc = ce(Kf), Xf = se({}, Pe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), nv = ce(Xf), Zf = se({}, Pe, { data: 0 }), Jf = ce(Zf), rv = {
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
  }, av = {
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
  }, Zm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $i(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zm[n]) ? !!r[n] : !1;
  }
  function ed() {
    return $i;
  }
  var td = se({}, bt, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ed, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), nd = ce(td), rd = se({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), iv = ce(rd), fc = se({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ed }), lv = ce(fc), Wr = se({}, Pe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = ce(Wr), Mn = se({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = ce(Mn), ad = [9, 13, 27, 32], lo = Ue && "CompositionEvent" in window, Jo = null;
  Ue && "documentMode" in document && (Jo = document.documentMode);
  var es = Ue && "TextEvent" in window && !Jo, uv = Ue && (!lo || Jo && 8 < Jo && 11 >= Jo), ov = " ", dc = !1;
  function sv(n, r) {
    switch (n) {
      case "keyup":
        return ad.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var uo = !1;
  function fv(n, r) {
    switch (n) {
      case "compositionend":
        return cv(r);
      case "keypress":
        return r.which !== 32 ? null : (dc = !0, ov);
      case "textInput":
        return n = r.data, n === ov && dc ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (uo) return n === "compositionend" || !lo && sv(n, r) ? (n = z(), C = h = ei = null, uo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return uv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ey = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function dv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ey[n.type] : r === "textarea";
  }
  function id(n, r, l, o) {
    Hi(o), r = ls(r, "onChange"), 0 < r.length && (l = new gt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function pv(n) {
    du(n, 0);
  }
  function ts(n) {
    var r = ni(n);
    if (br(r)) return n;
  }
  function ty(n, r) {
    if (n === "change") return r;
  }
  var vv = !1;
  if (Ue) {
    var ld;
    if (Ue) {
      var ud = "oninput" in document;
      if (!ud) {
        var hv = document.createElement("div");
        hv.setAttribute("oninput", "return;"), ud = typeof hv.oninput == "function";
      }
      ld = ud;
    } else ld = !1;
    vv = ld && (!document.documentMode || 9 < document.documentMode);
  }
  function mv() {
    Si && (Si.detachEvent("onpropertychange", yv), su = Si = null);
  }
  function yv(n) {
    if (n.propertyName === "value" && ts(su)) {
      var r = [];
      id(r, su, n, It(n)), tu(pv, r);
    }
  }
  function ny(n, r, l) {
    n === "focusin" ? (mv(), Si = r, su = l, Si.attachEvent("onpropertychange", yv)) : n === "focusout" && mv();
  }
  function gv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ts(su);
  }
  function ry(n, r) {
    if (n === "click") return ts(r);
  }
  function Sv(n, r) {
    if (n === "input" || n === "change") return ts(r);
  }
  function ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : ay;
  function ns(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ie.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Ev(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function pc(n, r) {
    var l = Ev(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ev(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function rs() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function vc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function oo(n) {
    var r = rs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && vc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = pc(l, d);
          var m = pc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var iy = Ue && "documentMode" in document && 11 >= document.documentMode, so = null, od = null, as = null, sd = !1;
  function cd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sd || so == null || so !== Rn(o) || (o = so, "selectionStart" in o && vc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), as && ns(as, o) || (as = o, o = ls(od, "onSelect"), 0 < o.length && (r = new gt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = so)));
  }
  function hc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: hc("Animation", "AnimationEnd"), animationiteration: hc("Animation", "AnimationIteration"), animationstart: hc("Animation", "AnimationStart"), transitionend: hc("Transition", "TransitionEnd") }, ur = {}, fd = {};
  Ue && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function mc(n) {
    if (ur[n]) return ur[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in fd) return ur[n] = r[l];
    return n;
  }
  var Cv = mc("animationend"), Rv = mc("animationiteration"), Tv = mc("animationstart"), wv = mc("transitionend"), dd = /* @__PURE__ */ new Map(), yc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    dd.set(n, r), J(r, [n]);
  }
  for (var pd = 0; pd < yc.length; pd++) {
    var fu = yc[pd], ly = fu.toLowerCase(), uy = fu[0].toUpperCase() + fu.slice(1);
    ka(ly, "on" + uy);
  }
  ka(Cv, "onAnimationEnd"), ka(Rv, "onAnimationIteration"), ka(Tv, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(wv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), J("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), J("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), J("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), J("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), J("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), J("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function gc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Ee(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], w = E.instance, A = E.currentTarget;
          if (E = E.listener, w !== d && c.isPropagationStopped()) break e;
          gc(c, E, A), d = w;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], w = E.instance, A = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped()) break e;
          gc(c, E, A), d = w;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Pt(n, r) {
    var l = r[ss];
    l === void 0 && (l = r[ss] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (xv(r, n, 2, !1), l.add(o));
  }
  function Sc(n, r, l) {
    var o = 0;
    r && (o |= 4), xv(l, n, o, r);
  }
  var Ec = "_reactListening" + Math.random().toString(36).slice(2);
  function co(n) {
    if (!n[Ec]) {
      n[Ec] = !0, Q.forEach(function(l) {
        l !== "selectionchange" && (vd.has(l) || Sc(l, !1, n), Sc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ec] || (r[Ec] = !0, Sc("selectionchange", !1, r));
    }
  }
  function xv(n, r, l, o) {
    switch (io(r)) {
      case 1:
        var c = no;
        break;
      case 4:
        c = ro;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Cc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var w = m.tag;
          if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (w = m.tag, w === 5 || w === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var A = d, G = It(l), X = [];
      e: {
        var W = dd.get(n);
        if (W !== void 0) {
          var he = gt, Ce = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = nd;
              break;
            case "focusin":
              Ce = "focus", he = ou;
              break;
            case "focusout":
              Ce = "blur", he = ou;
              break;
            case "beforeblur":
            case "afterblur":
              he = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              he = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = lv;
              break;
            case Cv:
            case Rv:
            case Tv:
              he = cc;
              break;
            case wv:
              he = Ii;
              break;
            case "scroll":
              he = rn;
              break;
            case "wheel":
              he = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = iv;
          }
          var we = (r & 4) !== 0, Dn = !we && n === "scroll", D = we ? W !== null ? W + "Capture" : null : W;
          we = [];
          for (var b = A, L; b !== null; ) {
            L = b;
            var q = L.stateNode;
            if (L.tag === 5 && q !== null && (L = q, D !== null && (q = _r(b, D), q != null && we.push(fo(b, q, L)))), Dn) break;
            b = b.return;
          }
          0 < we.length && (W = new he(W, Ce, null, l, G), X.push({ event: W, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", W && l !== tn && (Ce = l.relatedTarget || l.fromElement) && (vu(Ce) || Ce[Qi])) break e;
          if ((he || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, he ? (Ce = l.relatedTarget || l.toElement, he = A, Ce = Ce ? vu(Ce) : null, Ce !== null && (Dn = et(Ce), Ce !== Dn || Ce.tag !== 5 && Ce.tag !== 6) && (Ce = null)) : (he = null, Ce = A), he !== Ce)) {
            if (we = Rl, q = "onMouseLeave", D = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (we = iv, q = "onPointerLeave", D = "onPointerEnter", b = "pointer"), Dn = he == null ? W : ni(he), L = Ce == null ? W : ni(Ce), W = new we(q, b + "leave", he, l, G), W.target = Dn, W.relatedTarget = L, q = null, vu(G) === A && (we = new we(D, b + "enter", Ce, l, G), we.target = L, we.relatedTarget = Dn, q = we), Dn = q, he && Ce) t: {
              for (we = he, D = Ce, b = 0, L = we; L; L = wl(L)) b++;
              for (L = 0, q = D; q; q = wl(q)) L++;
              for (; 0 < b - L; ) we = wl(we), b--;
              for (; 0 < L - b; ) D = wl(D), L--;
              for (; b--; ) {
                if (we === D || D !== null && we === D.alternate) break t;
                we = wl(we), D = wl(D);
              }
              we = null;
            }
            else we = null;
            he !== null && bv(X, W, he, we, !1), Ce !== null && Dn !== null && bv(X, Dn, Ce, we, !0);
          }
        }
        e: {
          if (W = A ? ni(A) : window, he = W.nodeName && W.nodeName.toLowerCase(), he === "select" || he === "input" && W.type === "file") var Re = ty;
          else if (dv(W)) if (vv) Re = Sv;
          else {
            Re = gv;
            var He = ny;
          }
          else (he = W.nodeName) && he.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (Re = ry);
          if (Re && (Re = Re(n, A))) {
            id(X, Re, l, G);
            break e;
          }
          He && He(n, W, A), n === "focusout" && (He = W._wrapperState) && He.controlled && W.type === "number" && sa(W, "number", W.value);
        }
        switch (He = A ? ni(A) : window, n) {
          case "focusin":
            (dv(He) || He.contentEditable === "true") && (so = He, od = A, as = null);
            break;
          case "focusout":
            as = od = so = null;
            break;
          case "mousedown":
            sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sd = !1, cd(X, l, G);
            break;
          case "selectionchange":
            if (iy) break;
          case "keydown":
          case "keyup":
            cd(X, l, G);
        }
        var Ve;
        if (lo) e: {
          switch (n) {
            case "compositionstart":
              var Ge = "onCompositionStart";
              break e;
            case "compositionend":
              Ge = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ge = "onCompositionUpdate";
              break e;
          }
          Ge = void 0;
        }
        else uo ? sv(n, l) && (Ge = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (uv && l.locale !== "ko" && (uo || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && uo && (Ve = z()) : (ei = G, h = "value" in ei ? ei.value : ei.textContent, uo = !0)), He = ls(A, Ge), 0 < He.length && (Ge = new Jf(Ge, n, null, l, G), X.push({ event: Ge, listeners: He }), Ve ? Ge.data = Ve : (Ve = cv(l), Ve !== null && (Ge.data = Ve)))), (Ve = es ? fv(n, l) : Jm(n, l)) && (A = ls(A, "onBeforeInput"), 0 < A.length && (G = new Jf("onBeforeInput", "beforeinput", null, l, G), X.push({ event: G, listeners: A }), G.data = Ve));
      }
      du(X, r);
    });
  }
  function fo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(fo(n, d, c)), d = _r(n, r), d != null && o.push(fo(n, d, c))), n = n.return;
    }
    return o;
  }
  function wl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, A = E.stateNode;
      if (w !== null && w === o) break;
      E.tag === 5 && A !== null && (E = A, c ? (w = _r(l, d), w != null && m.unshift(fo(l, w, E))) : c || (w = _r(l, d), w != null && m.push(fo(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var _v = /\r\n?/g, oy = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(_v, `
`).replace(oy, "");
  }
  function Rc(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(T(425));
  }
  function xl() {
  }
  var us = null, pu = null;
  function Tc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wc = typeof setTimeout == "function" ? setTimeout : void 0, hd = typeof clearTimeout == "function" ? clearTimeout : void 0, Dv = typeof Promise == "function" ? Promise : void 0, po = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dv < "u" ? function(n) {
    return Dv.resolve(null).then(n).catch(xc);
  } : wc;
  function xc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function vo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ov(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var bl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + bl, os = "__reactProps$" + bl, Qi = "__reactContainer$" + bl, ss = "__reactEvents$" + bl, ho = "__reactListeners$" + bl, sy = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ov(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Ov(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Le(n) {
    return n = n[Ci] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(T(33));
  }
  function mn(n) {
    return n[os] || null;
  }
  var Ct = [], Da = -1;
  function Oa(n) {
    return { current: n };
  }
  function an(n) {
    0 > Da || (n.current = Ct[Da], Ct[Da] = null, Da--);
  }
  function De(n, r) {
    Da++, Ct[Da] = n.current, n.current = r;
  }
  var Rr = {}, Cn = Oa(Rr), Qn = Oa(!1), Gr = Rr;
  function qr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Rr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Un(n) {
    return n = n.childContextTypes, n != null;
  }
  function mo() {
    an(Qn), an(Cn);
  }
  function Nv(n, r, l) {
    if (Cn.current !== Rr) throw Error(T(168));
    De(Cn, r), De(Qn, l);
  }
  function cs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(T(108, it(n) || "Unknown", c));
    return se({}, l, o);
  }
  function Zn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Rr, Gr = Cn.current, De(Cn, n), De(Qn, Qn.current), !0;
  }
  function bc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(T(169));
    l ? (n = cs(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, an(Qn), an(Cn), De(Cn, n)) : an(Qn), De(Qn, l);
  }
  var Ri = null, yo = !1, Wi = !1;
  function _c(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    yo = !0, _c(n);
  }
  function Ti() {
    if (!Wi && Ri !== null) {
      Wi = !0;
      var n = 0, r = Nt;
      try {
        var l = Ri;
        for (Nt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, yo = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), sn(Ka, Ti), c;
      } finally {
        Nt = r, Wi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, zn = [], Na = 0, pa = null, wi = 1, xi = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Lv(n, r, l) {
    zn[Na++] = wi, zn[Na++] = xi, zn[Na++] = pa, pa = n;
    var o = wi;
    n = xi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, wi = 1 << 32 - Dr(r) + c | l << c | o, xi = d + n;
    } else wi = 1 << d | l << c | o, xi = n;
  }
  function kc(n) {
    n.return !== null && (hu(n, 1), Lv(n, 1, 0));
  }
  function Dc(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === pa; ) pa = zn[--Na], zn[Na] = null, xi = zn[--Na], zn[Na] = null, wi = zn[--Na], zn[Na] = null;
  }
  var Kr = null, Xr = null, dn = !1, La = null;
  function md(n, r) {
    var l = Fa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, Xr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: wi, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Fa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function gd(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (yd(n)) throw Error(T(418));
          r = Ei(l.nextSibling);
          var o = Kr;
          r && Mv(n, r) ? md(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Kr = n);
        }
      } else {
        if (yd(n)) throw Error(T(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Kr = n;
      }
    }
  }
  function Wn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function Oc(n) {
    if (n !== Kr) return !1;
    if (!dn) return Wn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Tc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (yd(n)) throw fs(), Error(T(418));
      for (; r; ) md(n, r), r = Ei(r.nextSibling);
    }
    if (Wn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(T(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = Kr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function fs() {
    for (var n = Xr; n; ) n = Ei(n.nextSibling);
  }
  function Nl() {
    Xr = Kr = null, dn = !1;
  }
  function qi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var cy = ft.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(T(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(T(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(T(284));
      if (!l._owner) throw Error(T(290, n));
    }
    return n;
  }
  function Nc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(T(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(D, b) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [b], D.flags |= 16) : L.push(b);
      }
    }
    function l(D, b) {
      if (!n) return null;
      for (; b !== null; ) r(D, b), b = b.sibling;
      return null;
    }
    function o(D, b) {
      for (D = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? D.set(b.key, b) : D.set(b.index, b), b = b.sibling;
      return D;
    }
    function c(D, b) {
      return D = Hl(D, b), D.index = 0, D.sibling = null, D;
    }
    function d(D, b, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < b ? (D.flags |= 2, b) : L) : (D.flags |= 2, b)) : (D.flags |= 1048576, b);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, b, L, q) {
      return b === null || b.tag !== 6 ? (b = qd(L, D.mode, q), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function w(D, b, L, q) {
      var Re = L.type;
      return Re === Ie ? G(D, b, L.props.children, q, L.key) : b !== null && (b.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Ot && Uv(Re) === b.type) ? (q = c(b, L.props), q.ref = mu(D, b, L), q.return = D, q) : (q = Vs(L.type, L.key, L.props, null, D.mode, q), q.ref = mu(D, b, L), q.return = D, q);
    }
    function A(D, b, L, q) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== L.containerInfo || b.stateNode.implementation !== L.implementation ? (b = ff(L, D.mode, q), b.return = D, b) : (b = c(b, L.children || []), b.return = D, b);
    }
    function G(D, b, L, q, Re) {
      return b === null || b.tag !== 7 ? (b = tl(L, D.mode, q, Re), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function X(D, b, L) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = qd("" + b, D.mode, L), b.return = D, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ne:
            return L = Vs(b.type, b.key, b.props, null, D.mode, L), L.ref = mu(D, null, b), L.return = D, L;
          case mt:
            return b = ff(b, D.mode, L), b.return = D, b;
          case Ot:
            var q = b._init;
            return X(D, q(b._payload), L);
        }
        if (Kn(b) || be(b)) return b = tl(b, D.mode, L, null), b.return = D, b;
        Nc(D, b);
      }
      return null;
    }
    function W(D, b, L, q) {
      var Re = b !== null ? b.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Re !== null ? null : E(D, b, "" + L, q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ne:
            return L.key === Re ? w(D, b, L, q) : null;
          case mt:
            return L.key === Re ? A(D, b, L, q) : null;
          case Ot:
            return Re = L._init, W(
              D,
              b,
              Re(L._payload),
              q
            );
        }
        if (Kn(L) || be(L)) return Re !== null ? null : G(D, b, L, q, null);
        Nc(D, L);
      }
      return null;
    }
    function he(D, b, L, q, Re) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return D = D.get(L) || null, E(b, D, "" + q, Re);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case Ne:
            return D = D.get(q.key === null ? L : q.key) || null, w(b, D, q, Re);
          case mt:
            return D = D.get(q.key === null ? L : q.key) || null, A(b, D, q, Re);
          case Ot:
            var He = q._init;
            return he(D, b, L, He(q._payload), Re);
        }
        if (Kn(q) || be(q)) return D = D.get(L) || null, G(b, D, q, Re, null);
        Nc(b, q);
      }
      return null;
    }
    function Ce(D, b, L, q) {
      for (var Re = null, He = null, Ve = b, Ge = b = 0, tr = null; Ve !== null && Ge < L.length; Ge++) {
        Ve.index > Ge ? (tr = Ve, Ve = null) : tr = Ve.sibling;
        var Ut = W(D, Ve, L[Ge], q);
        if (Ut === null) {
          Ve === null && (Ve = tr);
          break;
        }
        n && Ve && Ut.alternate === null && r(D, Ve), b = d(Ut, b, Ge), He === null ? Re = Ut : He.sibling = Ut, He = Ut, Ve = tr;
      }
      if (Ge === L.length) return l(D, Ve), dn && hu(D, Ge), Re;
      if (Ve === null) {
        for (; Ge < L.length; Ge++) Ve = X(D, L[Ge], q), Ve !== null && (b = d(Ve, b, Ge), He === null ? Re = Ve : He.sibling = Ve, He = Ve);
        return dn && hu(D, Ge), Re;
      }
      for (Ve = o(D, Ve); Ge < L.length; Ge++) tr = he(Ve, D, Ge, L[Ge], q), tr !== null && (n && tr.alternate !== null && Ve.delete(tr.key === null ? Ge : tr.key), b = d(tr, b, Ge), He === null ? Re = tr : He.sibling = tr, He = tr);
      return n && Ve.forEach(function(Bl) {
        return r(D, Bl);
      }), dn && hu(D, Ge), Re;
    }
    function we(D, b, L, q) {
      var Re = be(L);
      if (typeof Re != "function") throw Error(T(150));
      if (L = Re.call(L), L == null) throw Error(T(151));
      for (var He = Re = null, Ve = b, Ge = b = 0, tr = null, Ut = L.next(); Ve !== null && !Ut.done; Ge++, Ut = L.next()) {
        Ve.index > Ge ? (tr = Ve, Ve = null) : tr = Ve.sibling;
        var Bl = W(D, Ve, Ut.value, q);
        if (Bl === null) {
          Ve === null && (Ve = tr);
          break;
        }
        n && Ve && Bl.alternate === null && r(D, Ve), b = d(Bl, b, Ge), He === null ? Re = Bl : He.sibling = Bl, He = Bl, Ve = tr;
      }
      if (Ut.done) return l(
        D,
        Ve
      ), dn && hu(D, Ge), Re;
      if (Ve === null) {
        for (; !Ut.done; Ge++, Ut = L.next()) Ut = X(D, Ut.value, q), Ut !== null && (b = d(Ut, b, Ge), He === null ? Re = Ut : He.sibling = Ut, He = Ut);
        return dn && hu(D, Ge), Re;
      }
      for (Ve = o(D, Ve); !Ut.done; Ge++, Ut = L.next()) Ut = he(Ve, D, Ge, Ut.value, q), Ut !== null && (n && Ut.alternate !== null && Ve.delete(Ut.key === null ? Ge : Ut.key), b = d(Ut, b, Ge), He === null ? Re = Ut : He.sibling = Ut, He = Ut);
      return n && Ve.forEach(function(mh) {
        return r(D, mh);
      }), dn && hu(D, Ge), Re;
    }
    function Dn(D, b, L, q) {
      if (typeof L == "object" && L !== null && L.type === Ie && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ne:
            e: {
              for (var Re = L.key, He = b; He !== null; ) {
                if (He.key === Re) {
                  if (Re = L.type, Re === Ie) {
                    if (He.tag === 7) {
                      l(D, He.sibling), b = c(He, L.props.children), b.return = D, D = b;
                      break e;
                    }
                  } else if (He.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Ot && Uv(Re) === He.type) {
                    l(D, He.sibling), b = c(He, L.props), b.ref = mu(D, He, L), b.return = D, D = b;
                    break e;
                  }
                  l(D, He);
                  break;
                } else r(D, He);
                He = He.sibling;
              }
              L.type === Ie ? (b = tl(L.props.children, D.mode, q, L.key), b.return = D, D = b) : (q = Vs(L.type, L.key, L.props, null, D.mode, q), q.ref = mu(D, b, L), q.return = D, D = q);
            }
            return m(D);
          case mt:
            e: {
              for (He = L.key; b !== null; ) {
                if (b.key === He) if (b.tag === 4 && b.stateNode.containerInfo === L.containerInfo && b.stateNode.implementation === L.implementation) {
                  l(D, b.sibling), b = c(b, L.children || []), b.return = D, D = b;
                  break e;
                } else {
                  l(D, b);
                  break;
                }
                else r(D, b);
                b = b.sibling;
              }
              b = ff(L, D.mode, q), b.return = D, D = b;
            }
            return m(D);
          case Ot:
            return He = L._init, Dn(D, b, He(L._payload), q);
        }
        if (Kn(L)) return Ce(D, b, L, q);
        if (be(L)) return we(D, b, L, q);
        Nc(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, b !== null && b.tag === 6 ? (l(D, b.sibling), b = c(b, L), b.return = D, D = b) : (l(D, b), b = qd(L, D.mode, q), b.return = D, D = b), m(D)) : l(D, b);
    }
    return Dn;
  }
  var xn = yu(!0), de = yu(!1), va = Oa(null), Zr = null, go = null, Sd = null;
  function Ed() {
    Sd = go = Zr = null;
  }
  function Cd(n) {
    var r = va.current;
    an(va), n._currentValue = r;
  }
  function Rd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Zr = n, Sd = go = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Fn = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (Sd !== n) if (n = { context: n, memoizedValue: r, next: null }, go === null) {
      if (Zr === null) throw Error(T(308));
      go = n, Zr.dependencies = { lanes: 0, firstContext: n };
    } else go = go.next = n;
    return r;
  }
  var gu = null;
  function Td(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function wd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Td(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function xd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Td(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Lc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Av(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ds(n, r, l, o) {
    var c = n.updateQueue;
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, A = w.next;
      w.next = null, m === null ? d = A : m.next = A, m = w;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = A : E.next = A, G.lastBaseUpdate = w));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, G = A = w = null, E = d;
      do {
        var W = E.lane, he = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: he,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ce = n, we = E;
            switch (W = r, he = l, we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  X = Ce.call(he, X, W);
                  break e;
                }
                X = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, W = typeof Ce == "function" ? Ce.call(he, X, W) : Ce, W == null) break e;
                X = se({}, X, W);
                break e;
              case 2:
                ma = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else he = { eventTime: he, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (A = G = he, w = X) : G = G.next = he, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (w = X), c.baseState = w, c.firstBaseUpdate = A, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function bd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(T(191, c));
        c.call(o);
      }
    }
  }
  var ps = {}, bi = Oa(ps), vs = Oa(ps), hs = Oa(ps);
  function Su(n) {
    if (n === ps) throw Error(T(174));
    return n;
  }
  function _d(n, r) {
    switch (De(hs, r), De(vs, n), De(bi, ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    an(bi), De(bi, r);
  }
  function Eu() {
    an(bi), an(vs), an(hs);
  }
  function Fv(n) {
    Su(hs.current);
    var r = Su(bi.current), l = ca(r, n.type);
    r !== l && (De(vs, n), De(bi, l));
  }
  function Mc(n) {
    vs.current === n && (an(bi), an(vs));
  }
  var gn = Oa(0);
  function Uc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ms = [];
  function Me() {
    for (var n = 0; n < ms.length; n++) ms[n]._workInProgressVersionPrimary = null;
    ms.length = 0;
  }
  var ht = ft.ReactCurrentDispatcher, Lt = ft.ReactCurrentBatchConfig, qt = 0, Mt = null, An = null, Jn = null, zc = !1, ys = !1, Cu = 0, Y = 0;
  function Dt() {
    throw Error(T(321));
  }
  function $e(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (qt = d, Mt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ht.current = n === null || n.memoizedState === null ? Kc : Ts, n = l(o, c), ys) {
      d = 0;
      do {
        if (ys = !1, Cu = 0, 25 <= d) throw Error(T(301));
        d += 1, Jn = An = null, r.updateQueue = null, ht.current = Xc, n = l(o, c);
      } while (ys);
    }
    if (ht.current = bu, r = An !== null && An.next !== null, qt = 0, Jn = An = Mt = null, zc = !1, r) throw Error(T(300));
    return n;
  }
  function ri() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function bn() {
    if (An === null) {
      var n = Mt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = Jn === null ? Mt.memoizedState : Jn.next;
    if (r !== null) Jn = r, An = n;
    else {
      if (n === null) throw Error(T(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ul(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(T(311));
    l.lastRenderedReducer = n;
    var o = An, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, A = d;
      do {
        var G = A.lane;
        if ((qt & G) === G) w !== null && (w = w.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var X = {
            lane: G,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          w === null ? (E = w = X, m = o) : w = w.next = X, Mt.lanes |= G, Oi |= G;
        }
        A = A.next;
      } while (A !== null && A !== d);
      w === null ? m = o : w.next = E, ti(o, r.memoizedState) || (Fn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Mt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(T(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (Fn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Ac() {
  }
  function Fc(n, r) {
    var l = Mt, o = bn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, Fn = !0), o = o.queue, gs(Pc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, Hc.bind(null, l, o, c, r), void 0, null), Gn === null) throw Error(T(349));
      qt & 30 || jc(l, r, c);
    }
    return c;
  }
  function jc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Hc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Vc(r) && Bc(n);
  }
  function Pc(n, r, l) {
    return l(function() {
      Vc(r) && Bc(n);
    });
  }
  function Vc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Bc(n) {
    var r = ha(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function $c(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = xu.bind(null, Mt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ic() {
    return bn().memoizedState;
  }
  function So(n, r, l, o) {
    var c = Tr();
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Eo(n, r, l, o) {
    var c = bn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (An !== null) {
      var m = An.memoizedState;
      if (d = m.destroy, o !== null && $e(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Yc(n, r) {
    return So(8390656, 8, n, r);
  }
  function gs(n, r) {
    return Eo(2048, 8, n, r);
  }
  function Qc(n, r) {
    return Eo(4, 2, n, r);
  }
  function Ss(n, r) {
    return Eo(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eo(4, 4, wu.bind(null, r, n), l);
  }
  function Es() {
  }
  function Gc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && $e(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function qc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && $e(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function kd(n, r, l) {
    return qt & 21 ? (ti(l, r) || (l = Zu(), Mt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Fn = !0), n.memoizedState = l);
  }
  function Cs(n, r) {
    var l = Nt;
    Nt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Lt.transition;
    Lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = l, Lt.transition = o;
    }
  }
  function Dd() {
    return bn().memoizedState;
  }
  function Rs(n, r, l) {
    var o = Ni(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) jv(r, l);
    else if (l = wd(n, r, l, o), l !== null) {
      var c = Pn();
      zr(l, n, o, c), Zt(l, r, o);
    }
  }
  function xu(n, r, l) {
    var o = Ni(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) jv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var w = r.interleaved;
          w === null ? (c.next = c, Td(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = wd(n, r, c, o), l !== null && (c = Pn(), zr(l, n, o, c), Zt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Mt || r !== null && r === Mt;
  }
  function jv(n, r) {
    ys = zc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Zt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var bu = { readContext: Ma, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Kc = { readContext: Ma, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: Yc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return So(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return So(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Rs.bind(null, Mt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: $c, useDebugValue: Es, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = $c(!1), r = n[0];
    return n = Cs.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Mt, c = Tr();
    if (dn) {
      if (l === void 0) throw Error(T(407));
      l = l();
    } else {
      if (l = r(), Gn === null) throw Error(T(349));
      qt & 30 || jc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Yc(Pc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, Hc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Tr(), r = Gn.identifierPrefix;
    if (dn) {
      var l = xi, o = wi;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ts = {
    readContext: Ma,
    useCallback: Gc,
    useContext: Ma,
    useEffect: gs,
    useImperativeHandle: Wc,
    useInsertionEffect: Qc,
    useLayoutEffect: Ss,
    useMemo: qc,
    useReducer: Ul,
    useRef: Ic,
    useState: function() {
      return Ul(Xi);
    },
    useDebugValue: Es,
    useDeferredValue: function(n) {
      var r = bn();
      return kd(r, An.memoizedState, n);
    },
    useTransition: function() {
      var n = Ul(Xi)[0], r = bn().memoizedState;
      return [n, r];
    },
    useMutableSource: Ac,
    useSyncExternalStore: Fc,
    useId: Dd,
    unstable_isNewReconciler: !1
  }, Xc = { readContext: Ma, useCallback: Gc, useContext: Ma, useEffect: gs, useImperativeHandle: Wc, useInsertionEffect: Qc, useLayoutEffect: Ss, useMemo: qc, useReducer: Ru, useRef: Ic, useState: function() {
    return Ru(Xi);
  }, useDebugValue: Es, useDeferredValue: function(n) {
    var r = bn();
    return An === null ? r.memoizedState = n : kd(r, An.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Xi)[0], r = bn().memoizedState;
    return [n, r];
  }, useMutableSource: Ac, useSyncExternalStore: Fc, useId: Dd, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = se({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Od(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : se({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Zc = { isMounted: function(n) {
    return (n = n._reactInternals) ? et(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Ni(n), d = Ki(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Lc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Ni(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Lc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Pn(), o = Ni(n), c = Ki(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (zr(r, n, o, l), Lc(r, n, o));
  } };
  function Hv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ns(l, o) || !ns(c, d) : !0;
  }
  function Jc(n, r, l) {
    var o = !1, c = Rr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Un(r) ? Gr : Cn.current, o = r.contextTypes, d = (o = o != null) ? qr(n, c) : Rr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Zc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Pv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Zc.enqueueReplaceState(r, r.state, null);
  }
  function ws(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, xd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Un(r) ? Gr : Cn.current, c.context = qr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Od(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Zc.enqueueReplaceState(c, c.state, null), ds(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += dt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Nd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ef = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      bo || (bo = !0, Ou = o), Ld(n, r);
    }, l;
  }
  function Md(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (Fl === null ? Fl = /* @__PURE__ */ new Set([this]) : Fl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ud(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ef();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = yy.bind(null, n, r, l), r.then(n, n));
  }
  function Bv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var xs = ft.ReactCurrentOwner, Fn = !1;
  function or(n, r, l, o) {
    r.child = n === null ? de(r, null, l, o) : xn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ri(), n !== null && !Fn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && kc(r), r.flags |= 1, or(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Gd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, at(n, r, d, o, c)) : (n = Vs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ns, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function at(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ns(d, o) && n.ref === r.ref) if (Fn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Fn = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return $v(n, r, l, o, c);
  }
  function bs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, De(To, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, De(To, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, De(To, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, De(To, ya), ya |= o;
    return or(n, r, c, l), r.child;
  }
  function zd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function $v(n, r, l, o, c) {
    var d = Un(l) ? Gr : Cn.current;
    return d = qr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ri(), n !== null && !Fn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && kc(r), r.flags |= 1, or(n, r, l, c), r.child);
  }
  function Iv(n, r, l, o, c) {
    if (Un(l)) {
      var d = !0;
      Zn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Ua(n, r), Jc(r, l, o), ws(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Ma(A) : (A = Un(l) ? Gr : Cn.current, A = qr(r, A));
      var G = l.getDerivedStateFromProps, X = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== A) && Pv(r, m, o, A), ma = !1;
      var W = r.memoizedState;
      m.state = W, ds(r, o, m, c), w = r.memoizedState, E !== o || W !== w || Qn.current || ma ? (typeof G == "function" && (Od(r, l, G, o), w = r.memoizedState), (E = ma || Hv(r, l, E, o, W, w, A)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ai(r.type, E), m.props = A, X = r.pendingProps, W = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = Ma(w) : (w = Un(l) ? Gr : Cn.current, w = qr(r, w));
      var he = l.getDerivedStateFromProps;
      (G = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || W !== w) && Pv(r, m, o, w), ma = !1, W = r.memoizedState, m.state = W, ds(r, o, m, c);
      var Ce = r.memoizedState;
      E !== X || W !== Ce || Qn.current || ma ? (typeof he == "function" && (Od(r, l, he, o), Ce = r.memoizedState), (A = ma || Hv(r, l, A, o, W, Ce, w) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ce, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ce, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ce), m.props = o, m.state = Ce, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return _s(n, r, l, o, d, c);
  }
  function _s(n, r, l, o, c, d) {
    zd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && bc(r, l, !1), za(n, r, d);
    o = r.stateNode, xs.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, E, d)) : or(n, r, E, d), r.memoizedState = o.state, c && bc(r, l, !0), r.child;
  }
  function Co(n) {
    var r = n.stateNode;
    r.pendingContext ? Nv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Nv(n, r.context, !1), _d(n, r.containerInfo);
  }
  function Yv(n, r, l, o, c) {
    return Nl(), qi(c), r.flags |= 256, or(n, r, l, o), r.child;
  }
  var tf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ad(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function nf(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), De(gn, c & 1), n === null)
      return gd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ad(l), r.memoizedState = tf, n) : Fd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Hl(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ad(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = tf, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Fd(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ks(n, r, l, o) {
    return o !== null && qi(o), xn(r, n.child, null, l), n = Fd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Nd(Error(T(422))), ks(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = Ad(m), r.memoizedState = tf, d);
    if (!(r.mode & 1)) return ks(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(T(419)), o = Nd(d, o, void 0), ks(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Fn || E) {
      if (o = Gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), zr(o, n, c, -1));
      }
      return Wd(), o = Nd(Error(T(421))), ks(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = gy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Ei(c.nextSibling), Kr = r, dn = !0, La = null, n !== null && (zn[Na++] = wi, zn[Na++] = xi, zn[Na++] = pa, wi = n.id, xi = n.overflow, pa = r), r = Fd(r, o.children), r.flags |= 4096, r);
  }
  function jd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Rd(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (or(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && jd(n, l, r);
        else if (n.tag === 19) jd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (De(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Uc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Uc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ua(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(T(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ds(n, r, l) {
    switch (r.tag) {
      case 3:
        Co(r), Nl();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        Un(r.type) && Zn(r);
        break;
      case 4:
        _d(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        De(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (De(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? nf(n, r, l) : (De(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        De(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), De(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, bs(n, r, l);
    }
    return za(n, r, l);
  }
  var Aa, jn, Wv, Gv;
  Aa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, Wv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = rr(n, c), o = rr(n, o), d = [];
          break;
        case "select":
          c = se({}, c, { value: void 0 }), o = se({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xl);
      }
      on(l, o);
      var m;
      l = null;
      for (A in c) if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var E = c[A];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (ee.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var w = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && w !== E && (w != null || E != null)) if (A === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in w) w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
        } else l || (d || (d = []), d.push(
          A,
          l
        )), l = w;
        else A === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(A, w)) : A === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(A, "" + w) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (ee.hasOwnProperty(A) ? (w != null && A === "onScroll" && Pt("scroll", n), d || E === w || (d = [])) : (d = d || []).push(A, w));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Gv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Os(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function qv(n, r, l) {
    var o = r.pendingProps;
    switch (Dc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return er(r), null;
      case 1:
        return Un(r.type) && mo(), er(r), null;
      case 3:
        return o = r.stateNode, Eu(), an(Qn), an(Cn), Me(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Oc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Nu(La), La = null))), jn(n, r), er(r), null;
      case 5:
        Mc(r);
        var c = Su(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) Wv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(T(166));
            return er(r), null;
          }
          if (n = Su(bi.current), Oc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[os] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++) Pt(is[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Bn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                Sr(o, d), Pt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Rc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Rc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : ee.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                Nn(o), ci(o, d, !0);
                break;
              case "textarea":
                Nn(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = xl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[os] = o, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++) Pt(is[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Bn(n, o), c = rr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = se({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Sr(n, o), c = In(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var w = E[d];
                d === "style" ? en(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && fi(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && le(n, w) : typeof w == "number" && le(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ee.hasOwnProperty(d) ? w != null && d === "onScroll" && Pt("scroll", n) : w != null && We(n, d, w, m));
              }
              switch (l) {
                case "input":
                  Nn(n), ci(n, o, !1);
                  break;
                case "textarea":
                  Nn(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ot(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Tn(n, !!o.multiple, d, !1) : o.defaultValue != null && Tn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null) Gv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(T(166));
          if (l = Su(hs.current), Su(bi.current), Oc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
              case 3:
                Rc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Rc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (an(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) fs(), Nl(), r.flags |= 98560, d = !1;
          else if (d = Oc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(T(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(T(317));
              d[Ci] = r;
            } else Nl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else La !== null && (Nu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? kn === 0 && (kn = 3) : Wd())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return Eu(), jn(n, r), n === null && co(r.stateNode.containerInfo), er(r), null;
      case 10:
        return Cd(r.type._context), er(r), null;
      case 17:
        return Un(r.type) && mo(), er(r), null;
      case 19:
        if (an(gn), d = r.memoizedState, d === null) return er(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Os(d, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Uc(n), m !== null) {
              for (r.flags |= 128, Os(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return De(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && tt() > xo && (r.flags |= 128, o = !0, Os(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Uc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Os(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return er(r), null;
          } else 2 * tt() - d.renderingStartTime > xo && l !== 1073741824 && (r.flags |= 128, o = !0, Os(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = tt(), r.sibling = null, l = gn.current, De(gn, o ? l & 1 | 2 : l & 1), r) : (er(r), null);
      case 22:
      case 23:
        return Qd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(T(156, r.tag));
  }
  function rf(n, r) {
    switch (Dc(r), r.tag) {
      case 1:
        return Un(r.type) && mo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), an(Qn), an(Cn), Me(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Mc(r), null;
      case 13:
        if (an(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(T(340));
          Nl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return an(gn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Cd(r.type._context), null;
      case 22:
      case 23:
        return Qd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ns = !1, wr = !1, fy = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function Ro(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function af(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Kv = !1;
  function Xv(n, r) {
    if (us = _a, n = rs(), vc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, w = -1, A = 0, G = 0, X = n, W = null;
          t: for (; ; ) {
            for (var he; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (w = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (he = X.firstChild) !== null; )
              W = X, X = he;
            for (; ; ) {
              if (X === n) break t;
              if (W === l && ++A === c && (E = m), W === d && ++G === o && (w = m), (he = X.nextSibling) !== null) break;
              X = W, W = X.parentNode;
            }
            X = he;
          }
          l = E === -1 || w === -1 ? null : { start: E, end: w };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, _a = !1, ge = r; ge !== null; ) if (r = ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ge = n;
    else for (; ge !== null; ) {
      r = ge;
      try {
        var Ce = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ce !== null) {
              var we = Ce.memoizedProps, Dn = Ce.memoizedState, D = r.stateNode, b = D.getSnapshotBeforeUpdate(r.elementType === r.type ? we : ai(r.type, we), Dn);
              D.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(T(163));
        }
      } catch (q) {
        pn(r, r.return, q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ge = n;
        break;
      }
      ge = r.return;
    }
    return Ce = Kv, Kv = !1, Ce;
  }
  function Ls(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && af(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ms(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Hd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function lf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, lf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[os], delete r[ss], delete r[ho], delete r[sy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Us(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Us(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var _n = null, Mr = !1;
  function Ur(n, r, l) {
    for (l = l.child; l !== null; ) Zv(n, r, l), l = l.sibling;
  }
  function Zv(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        wr || Ro(l, r);
      case 6:
        var o = _n, c = Mr;
        _n = null, Ur(n, r, l), _n = o, Mr = c, _n !== null && (Mr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Mr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? vo(n.parentNode, l) : n.nodeType === 1 && vo(n, l), Ja(n)) : vo(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Mr, _n = l.stateNode.containerInfo, Mr = !0, Ur(n, r, l), _n = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && af(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ur(n, r, l);
        break;
      case 1:
        if (!wr && (Ro(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        Ur(n, r, l);
        break;
      case 21:
        Ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (o = wr) || l.memoizedState !== null, Ur(n, r, l), wr = o) : Ur(n, r, l);
        break;
      default:
        Ur(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new fy()), r.forEach(function(o) {
        var c = oh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              _n = E.stateNode, Mr = !1;
              break e;
            case 3:
              _n = E.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              _n = E.stateNode.containerInfo, Mr = !0;
              break e;
          }
          E = E.return;
        }
        if (_n === null) throw Error(T(160));
        Zv(d, m, c), _n = null, Mr = !1;
        var w = c.alternate;
        w !== null && (w.return = null), c.return = null;
      } catch (A) {
        pn(c, r, A);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Pd(r, n), r = r.sibling;
  }
  function Pd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), ta(n), o & 4) {
          try {
            Ls(3, n, n.return), Ms(3, n);
          } catch (we) {
            pn(n, n.return, we);
          }
          try {
            Ls(5, n, n.return);
          } catch (we) {
            pn(n, n.return, we);
          }
        }
        break;
      case 1:
        ii(r, n), ta(n), o & 512 && l !== null && Ro(l, l.return);
        break;
      case 5:
        if (ii(r, n), ta(n), o & 512 && l !== null && Ro(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            le(c, "");
          } catch (we) {
            pn(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null) try {
            E === "input" && d.type === "radio" && d.name != null && $n(c, d), Xn(E, m);
            var A = Xn(E, d);
            for (m = 0; m < w.length; m += 2) {
              var G = w[m], X = w[m + 1];
              G === "style" ? en(c, X) : G === "dangerouslySetInnerHTML" ? fi(c, X) : G === "children" ? le(c, X) : We(c, G, X, A);
            }
            switch (E) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? Tn(c, !!d.multiple, he, !1) : W !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[os] = d;
          } catch (we) {
            pn(n, n.return, we);
          }
        }
        break;
      case 6:
        if (ii(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(T(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            pn(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ii(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (we) {
          pn(n, n.return, we);
        }
        break;
      case 4:
        ii(r, n), ta(n);
        break;
      case 13:
        ii(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || ($d = tt())), o & 4 && Jv(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = (A = wr) || G, ii(r, n), wr = A) : ii(r, n), ta(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !G && n.mode & 1) for (ge = n, G = n.child; G !== null; ) {
            for (X = ge = G; ge !== null; ) {
              switch (W = ge, he = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ls(4, W, W.return);
                  break;
                case 1:
                  Ro(W, W.return);
                  var Ce = W.stateNode;
                  if (typeof Ce.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, Ce.props = r.memoizedProps, Ce.state = r.memoizedState, Ce.componentWillUnmount();
                    } catch (we) {
                      pn(o, l, we);
                    }
                  }
                  break;
                case 5:
                  Ro(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    zs(X);
                    continue;
                  }
              }
              he !== null ? (he.return = W, ge = he) : zs(X);
            }
            G = G.sibling;
          }
          e: for (G = null, X = n; ; ) {
            if (X.tag === 5) {
              if (G === null) {
                G = X;
                try {
                  c = X.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, w = X.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = jt("display", m));
                } catch (we) {
                  pn(n, n.return, we);
                }
              }
            } else if (X.tag === 6) {
              if (G === null) try {
                X.stateNode.nodeValue = A ? "" : X.memoizedProps;
              } catch (we) {
                pn(n, n.return, we);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              G === X && (G = null), X = X.return;
            }
            G === X && (G = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ta(n), o & 4 && Jv(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Us(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(T(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (le(c, ""), o.flags &= -33);
            var d = Zi(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Zi(n);
            ki(n, E, m);
            break;
          default:
            throw Error(T(161));
        }
      } catch (w) {
        pn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function dy(n, r, l) {
    ge = n, Vd(n);
  }
  function Vd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ge !== null; ) {
      var c = ge, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ns;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || wr;
          E = Ns;
          var A = wr;
          if (Ns = m, (wr = w) && !A) for (ge = c; ge !== null; ) m = ge, w = m.child, m.tag === 22 && m.memoizedState !== null ? Bd(c) : w !== null ? (w.return = m, ge = w) : Bd(c);
          for (; d !== null; ) ge = d, Vd(d), d = d.sibling;
          ge = c, Ns = E, wr = A;
        }
        eh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ge = d) : eh(n);
    }
  }
  function eh(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              wr || Ms(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !wr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && bd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                bd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var w = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && l.focus();
                    break;
                  case "img":
                    w.src && (l.src = w.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var A = r.alternate;
                if (A !== null) {
                  var G = A.memoizedState;
                  if (G !== null) {
                    var X = G.dehydrated;
                    X !== null && Ja(X);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
          wr || r.flags & 512 && Hd(r);
        } catch (W) {
          pn(r, r.return, W);
        }
      }
      if (r === n) {
        ge = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function zs(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n) {
        ge = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Bd(n) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ms(4, r);
            } catch (w) {
              pn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                pn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Hd(r);
            } catch (w) {
              pn(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Hd(r);
            } catch (w) {
              pn(r, m, w);
            }
        }
      } catch (w) {
        pn(r, r.return, w);
      }
      if (r === n) {
        ge = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ge = E;
        break;
      }
      ge = r.return;
    }
  }
  var py = Math.ceil, Al = ft.ReactCurrentDispatcher, Du = ft.ReactCurrentOwner, sr = ft.ReactCurrentBatchConfig, Rt = 0, Gn = null, Hn = null, cr = 0, ya = 0, To = Oa(0), kn = 0, As = null, Oi = 0, wo = 0, uf = 0, Fs = null, na = null, $d = 0, xo = 1 / 0, ga = null, bo = !1, Ou = null, Fl = null, of = !1, Ji = null, js = 0, jl = 0, _o = null, Hs = -1, xr = 0;
  function Pn() {
    return Rt & 6 ? tt() : Hs !== -1 ? Hs : Hs = tt();
  }
  function Ni(n) {
    return n.mode & 1 ? Rt & 2 && cr !== 0 ? cr & -cr : cy.transition !== null ? (xr === 0 && (xr = Zu()), xr) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : io(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < jl) throw jl = 0, _o = null, Error(T(185));
    Pi(n, l, o), (!(Rt & 2) || n !== Gn) && (n === Gn && (!(Rt & 2) && (wo |= l), kn === 4 && li(n, cr)), ra(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (xo = tt() + 500, yo && Ti()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Za(n, n === Gn ? cr : 0);
    if (o === 0) l !== null && ir(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ir(l), r === 1) n.tag === 0 ? _l(Id.bind(null, n)) : _c(Id.bind(null, n)), po(function() {
        !(Rt & 6) && Ti();
      }), l = null;
      else {
        switch (eo(o)) {
          case 1:
            l = Ka;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = qu;
            break;
          default:
            l = ru;
        }
        l = ch(l, sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function sf(n, r) {
    if (Hs = -1, xr = 0, Rt & 6) throw Error(T(327));
    var l = n.callbackNode;
    if (ko() && n.callbackNode !== l) return null;
    var o = Za(n, n === Gn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = nh();
      (Gn !== n || cr !== r) && (ga = null, xo = tt() + 500, el(n, r));
      do
        try {
          rh();
          break;
        } catch (E) {
          th(n, E);
        }
      while (!0);
      Ed(), Al.current = d, Rt = c, Hn !== null ? r = 0 : (Gn = null, cr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Ps(n, c))), r === 1) throw l = As, el(n, 0), li(n, o), ra(n, tt()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !vy(c) && (r = cf(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Ps(n, d))), r === 1)) throw l = As, el(n, 0), li(n, o), ra(n, tt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(T(345));
          case 2:
            Mu(n, na, ga);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = $d + 500 - tt(), 10 < r)) {
              if (Za(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Pn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = wc(Mu.bind(null, n, na, ga), r);
              break;
            }
            Mu(n, na, ga);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * py(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = wc(Mu.bind(null, n, na, ga), o);
              break;
            }
            Mu(n, na, ga);
            break;
          case 5:
            Mu(n, na, ga);
            break;
          default:
            throw Error(T(329));
        }
      }
    }
    return ra(n, tt()), n.callbackNode === l ? sf.bind(null, n) : null;
  }
  function Ps(n, r) {
    var l = Fs;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = na, na = l, r !== null && Nu(r)), n;
  }
  function Nu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function vy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~uf, r &= ~wo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Id(n) {
    if (Rt & 6) throw Error(T(327));
    ko();
    var r = Za(n, 0);
    if (!(r & 1)) return ra(n, tt()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Ps(n, o));
    }
    if (l === 1) throw l = As, el(n, 0), li(n, r), ra(n, tt()), l;
    if (l === 6) throw Error(T(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, na, ga), ra(n, tt()), null;
  }
  function Yd(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (xo = tt() + 500, yo && Ti());
    }
  }
  function Lu(n) {
    Ji !== null && Ji.tag === 0 && !(Rt & 6) && ko();
    var r = Rt;
    Rt |= 1;
    var l = sr.transition, o = Nt;
    try {
      if (sr.transition = null, Nt = 1, n) return n();
    } finally {
      Nt = o, sr.transition = l, Rt = r, !(Rt & 6) && Ti();
    }
  }
  function Qd() {
    ya = To.current, an(To);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, hd(l)), Hn !== null) for (l = Hn.return; l !== null; ) {
      var o = l;
      switch (Dc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && mo();
          break;
        case 3:
          Eu(), an(Qn), an(Cn), Me();
          break;
        case 5:
          Mc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          an(gn);
          break;
        case 19:
          an(gn);
          break;
        case 10:
          Cd(o.type._context);
          break;
        case 22:
        case 23:
          Qd();
      }
      l = l.return;
    }
    if (Gn = n, Hn = n = Hl(n.current, null), cr = ya = r, kn = 0, As = null, uf = wo = Oi = 0, na = Fs = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function th(n, r) {
    do {
      var l = Hn;
      try {
        if (Ed(), ht.current = bu, zc) {
          for (var o = Mt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          zc = !1;
        }
        if (qt = 0, Jn = An = Mt = null, ys = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          kn = 1, As = r, Hn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = cr, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var A = w, G = E, X = G.tag;
            if (!(G.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var he = Bv(m);
            if (he !== null) {
              he.flags &= -257, zl(he, m, E, d, r), he.mode & 1 && Ud(d, A, r), r = he, w = A;
              var Ce = r.updateQueue;
              if (Ce === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(w), r.updateQueue = we;
              } else Ce.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Ud(d, A, r), Wd();
                break e;
              }
              w = Error(T(426));
            }
          } else if (dn && E.mode & 1) {
            var Dn = Bv(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), zl(Dn, m, E, d, r), qi(_u(w, E));
              break e;
            }
          }
          d = w = _u(w, E), kn !== 4 && (kn = 2), Fs === null ? Fs = [d] : Fs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Vv(d, w, r);
                Av(d, D);
                break e;
              case 1:
                E = w;
                var b = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Fl === null || !Fl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = Md(d, E, r);
                  Av(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (Re) {
        r = Re, Hn === l && l !== null && (Hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function Wd() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), Gn === null || !(Oi & 268435455) && !(wo & 268435455) || li(Gn, cr);
  }
  function cf(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = nh();
    (Gn !== n || cr !== r) && (ga = null, el(n, r));
    do
      try {
        hy();
        break;
      } catch (c) {
        th(n, c);
      }
    while (!0);
    if (Ed(), Rt = l, Al.current = o, Hn !== null) throw Error(T(261));
    return Gn = null, cr = 0, kn;
  }
  function hy() {
    for (; Hn !== null; ) ah(Hn);
  }
  function rh() {
    for (; Hn !== null && !Ga(); ) ah(Hn);
  }
  function ah(n) {
    var r = sh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : Hn = r, Du.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = rf(l, r), l !== null) {
          l.flags &= 32767, Hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Hn = null;
          return;
        }
      } else if (l = qv(l, r, ya), l !== null) {
        Hn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Mu(n, r, l) {
    var o = Nt, c = sr.transition;
    try {
      sr.transition = null, Nt = 1, my(n, r, l, o);
    } finally {
      sr.transition = c, Nt = o;
    }
    return null;
  }
  function my(n, r, l, o) {
    do
      ko();
    while (Ji !== null);
    if (Rt & 6) throw Error(T(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(T(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Gf(n, d), n === Gn && (Hn = Gn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || of || (of = !0, ch(ru, function() {
      return ko(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = sr.transition, sr.transition = null;
      var m = Nt;
      Nt = 1;
      var E = Rt;
      Rt |= 4, Du.current = null, Xv(n, l), Pd(l, n), oo(pu), _a = !!us, pu = us = null, n.current = l, dy(l), qa(), Rt = E, Nt = m, sr.transition = d;
    } else n.current = l;
    if (of && (of = !1, Ji = n, js = c), d = n.pendingLanes, d === 0 && (Fl = null), Wo(l.stateNode), ra(n, tt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (bo) throw bo = !1, n = Ou, Ou = null, n;
    return js & 1 && n.tag !== 0 && ko(), d = n.pendingLanes, d & 1 ? n === _o ? jl++ : (jl = 0, _o = n) : jl = 0, Ti(), null;
  }
  function ko() {
    if (Ji !== null) {
      var n = eo(js), r = sr.transition, l = Nt;
      try {
        if (sr.transition = null, Nt = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, js = 0, Rt & 6) throw Error(T(331));
          var c = Rt;
          for (Rt |= 4, ge = n.current; ge !== null; ) {
            var d = ge, m = d.child;
            if (ge.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var A = E[w];
                  for (ge = A; ge !== null; ) {
                    var G = ge;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(8, G, d);
                    }
                    var X = G.child;
                    if (X !== null) X.return = G, ge = X;
                    else for (; ge !== null; ) {
                      G = ge;
                      var W = G.sibling, he = G.return;
                      if (lf(G), G === A) {
                        ge = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = he, ge = W;
                        break;
                      }
                      ge = he;
                    }
                  }
                }
                var Ce = d.alternate;
                if (Ce !== null) {
                  var we = Ce.child;
                  if (we !== null) {
                    Ce.child = null;
                    do {
                      var Dn = we.sibling;
                      we.sibling = null, we = Dn;
                    } while (we !== null);
                  }
                }
                ge = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ge = m;
            else e: for (; ge !== null; ) {
              if (d = ge, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ge = D;
                break e;
              }
              ge = d.return;
            }
          }
          var b = n.current;
          for (ge = b; ge !== null; ) {
            m = ge;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ge = L;
            else e: for (m = b; ge !== null; ) {
              if (E = ge, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ms(9, E);
                }
              } catch (Re) {
                pn(E, E.return, Re);
              }
              if (E === m) {
                ge = null;
                break e;
              }
              var q = E.sibling;
              if (q !== null) {
                q.return = E.return, ge = q;
                break e;
              }
              ge = E.return;
            }
          }
          if (Rt = c, Ti(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Nt = l, sr.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = _u(l, r), r = Vv(n, r, 1), n = Ll(n, r, 1), r = Pn(), n !== null && (Pi(n, 1, r), ra(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fl === null || !Fl.has(o))) {
          n = _u(l, n), n = Md(r, n, 1), r = Ll(r, n, 1), n = Pn(), r !== null && (Pi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function yy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Pn(), n.pingedLanes |= n.suspendedLanes & l, Gn === n && (cr & l) === l && (kn === 4 || kn === 3 && (cr & 130023424) === cr && 500 > tt() - $d ? el(n, 0) : uf |= l), ra(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Pn();
    n = ha(n, r), n !== null && (Pi(n, r, l), ra(n, l));
  }
  function gy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), uh(n, l);
  }
  function oh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(T(314));
    }
    o !== null && o.delete(r), uh(n, l);
  }
  var sh;
  sh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Qn.current) Fn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Fn = !1, Ds(n, r, l);
      Fn = !!(n.flags & 131072);
    }
    else Fn = !1, dn && r.flags & 1048576 && Lv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ua(n, r), n = r.pendingProps;
        var c = qr(r, Cn.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Un(o) ? (d = !0, Zn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, xd(r), c.updater = Zc, r.stateNode = c, c._reactInternals = r, ws(r, o, n, l), r = _s(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && kc(r), or(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ua(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ey(o), n = ai(o, n), c) {
            case 0:
              r = $v(null, r, o, n, l);
              break e;
            case 1:
              r = Iv(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(T(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), $v(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Iv(n, r, o, c, l);
      case 3:
        e: {
          if (Co(r), n === null) throw Error(T(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), ds(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(T(423)), r), r = Yv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(T(424)), r), r = Yv(n, r, o, l, c);
            break e;
          } else for (Xr = Ei(r.stateNode.containerInfo.firstChild), Kr = r, dn = !0, La = null, l = de(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Nl(), o === c) {
              r = za(n, r, l);
              break e;
            }
            or(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fv(r), n === null && gd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Tc(o, c) ? m = null : d !== null && Tc(o, d) && (r.flags |= 32), zd(n, r), or(n, r, m, l), r.child;
      case 6:
        return n === null && gd(r), null;
      case 13:
        return nf(n, r, l);
      case 4:
        return _d(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : or(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), ea(n, r, o, c, l);
      case 7:
        return or(n, r, r.pendingProps, l), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, De(va, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !Qn.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var w = E.firstContext; w !== null; ) {
                if (w.context === o) {
                  if (d.tag === 1) {
                    w = Ki(-1, l & -l), w.tag = 2;
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var G = A.pending;
                      G === null ? w.next = w : (w.next = G.next, G.next = w), A.pending = w;
                    }
                  }
                  d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), Rd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                w = w.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(T(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Rd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          or(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Ma(c), o = o(c), r.flags |= 1, or(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), ku(n, r, o, c, l);
      case 15:
        return at(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Ua(n, r), r.tag = 1, Un(o) ? (n = !0, Zn(r)) : n = !1, yn(r, l), Jc(r, o, c), ws(r, o, c, l), _s(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return bs(n, r, l);
    }
    throw Error(T(156, r.tag));
  };
  function ch(n, r) {
    return sn(n, r);
  }
  function Sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fa(n, r, l, o) {
    return new Sy(n, r, l, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ey(n) {
    if (typeof n == "function") return Gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Fa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Vs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Gd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Ie:
        return tl(l.children, c, d, r);
      case ln:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = Fa(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case Ae:
        return n = Fa(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
      case Ft:
        return n = Fa(19, l, r, c), n.elementType = Ft, n.lanes = d, n;
      case xe:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Jt:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(T(130, n == null ? n : typeof n, ""));
    }
    return r = Fa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = Fa(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = Fa(22, n, o, r), n.elementType = xe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function qd(n, r, l) {
    return n = Fa(6, n, null, r), n.lanes = l, n;
  }
  function ff(n, r, l) {
    return r = Fa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function fh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ju(0), this.expirationTimes = Ju(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, w) {
    return n = new fh(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Fa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xd(d), n;
  }
  function Cy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: mt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Kd(n) {
    if (!n) return Rr;
    n = n._reactInternals;
    e: {
      if (et(n) !== n || n.tag !== 1) throw Error(T(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Un(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(T(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Un(l)) return cs(n, l, r);
    }
    return r;
  }
  function dh(n, r, l, o, c, d, m, E, w) {
    return n = df(l, o, !0, n, c, d, m, E, w), n.context = Kd(null), l = n.current, o = Pn(), c = Ni(l), d = Ki(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Pi(n, c, o), ra(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = Pn(), m = Ni(c);
    return l = Kd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (zr(n, c, m, d), Lc(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Xd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    Xd(n, r), (n = n.alternate) && Xd(n, r);
  }
  function ph() {
    return null;
  }
  var Uu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Zd(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Zd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(T(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Zd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        pf(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = qe();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Ko(n);
    }
  };
  function Jd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vh() {
  }
  function Ry(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = vf(m);
          d.call(A);
        };
      }
      var m = dh(r, o, n, 0, null, !1, !1, "", vh);
      return n._reactRootContainer = m, n[Qi] = m.current, co(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = vf(w);
        E.call(A);
      };
    }
    var w = df(n, 0, !1, null, null, !1, !1, "", vh);
    return n._reactRootContainer = w, n[Qi] = w.current, co(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      pf(r, w, l, o);
    }), w;
  }
  function Bs(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = vf(m);
          E.call(w);
        };
      }
      pf(r, m, n, c);
    } else m = Ry(l, r, n, c, o);
    return vf(m);
  }
  xt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), ra(r, tt()), !(Rt & 6) && (xo = tt() + 500, Ti()));
        }
        break;
      case 13:
        Lu(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Pn();
            zr(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, Go = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Pn();
        zr(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Ni(n), l = ha(n, r);
      if (l !== null) {
        var o = Pn();
        zr(l, n, r, o);
      }
      hf(n, r);
    }
  }, qe = function() {
    return Nt;
  }, to = function(n, r) {
    var l = Nt;
    try {
      return Nt = n, r();
    } finally {
      Nt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(T(90));
              br(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, eu = Yd, pl = Lu;
  var Ty = { usingClientEntryPoint: !1, Events: [Le, ni, mn, Hi, Jl, Yd] }, $s = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hh = { bundleType: $s.bundleType, version: $s.version, rendererPackageName: $s.rendererPackageName, rendererConfig: $s.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: $s.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(hh), Qr = Vl;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ty, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(r)) throw Error(T(200));
    return Cy(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Jd(n)) throw Error(T(299));
    var l = !1, o = "", c = Uu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, co(n.nodeType === 8 ? n.parentNode : n), new Zd(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(T(188)) : (n = Object.keys(n).join(","), Error(T(268, n)));
    return n = wn(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Lu(n);
  }, $a.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(T(200));
    return Bs(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Jd(n)) throw Error(T(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Uu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = dh(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, co(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, $a.render = function(n, r, l) {
    if (!yf(r)) throw Error(T(200));
    return Bs(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(T(40));
    return n._reactRootContainer ? (Lu(function() {
      Bs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = Yd, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(T(200));
    if (n == null || n._reactInternals === void 0) throw Error(T(38));
    return Bs(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fT;
function Mk() {
  return fT || (fT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var j = Gu, M = hT(), T = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = !1;
    function ee(e) {
      Q = e;
    }
    function J(e) {
      if (!Q) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ue("warn", e, a);
      }
    }
    function g(e) {
      if (!Q) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ue("error", e, a);
      }
    }
    function Ue(e, t, a) {
      {
        var i = T.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ie = 0, ue = 1, Oe = 2, K = 3, Se = 4, ae = 5, ze = 6, nt = 7, rt = 8, Bt = 9, Ze = 10, We = 11, ft = 12, Ne = 13, mt = 14, Ie = 15, ln = 16, Ht = 17, Jt = 18, un = 19, _t = 21, Ae = 22, Ft = 23, kt = 24, Ot = 25, xe = !0, ne = !1, be = !1, se = !1, k = !1, B = !0, Ye = !0, Be = !0, dt = !0, ut = /* @__PURE__ */ new Set(), it = {}, ot = {};
    function pt(e, t) {
      $t(e, t), $t(e + "Capture", t);
    }
    function $t(e, t) {
      it[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        ot[a] = e, e === "onDoubleClick" && (ot.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
    }
    var Nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", br = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function $n(e, t) {
      if (rr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function Yr(e) {
      if (rr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function ci(e, t) {
      if (rr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function sa(e, t) {
      if (rr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function Kn(e) {
      if (rr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function Tn(e) {
      if (rr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    var In = 0, Sr = 1, Ya = 2, Ln = 3, Er = 4, ca = 5, Qa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _e = new RegExp("^[" + fi + "][" + le + "]*$"), st = {}, jt = {};
    function en(e) {
      return br.call(jt, e) ? !0 : br.call(st, e) ? !1 : _e.test(e) ? (jt[e] = !0, !0) : (st[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === In)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Er:
            return t === !1;
          case ca:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function It(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Ln || t === Er, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, fa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    fa.forEach(function(e) {
      Yt[e] = new It(
        e,
        In,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new It(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Cr = /[\-\:]([a-z])/g, wa = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, wa);
      Yt[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, wa);
      Yt[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, wa);
      Yt[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    Yt[Hi] = new It(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Jl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Jl.test(e) && (eu = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        $n(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Er) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!en(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return $n(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = tn(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (en(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : ($n(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, S = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, x;
          _ === Ln || _ === Er && a === !0 ? x = "" : ($n(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), S ? e.setAttributeNS(S, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var kr = Symbol.for("react.element"), ar = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), et = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), yt = Symbol.for("react.scope"), vt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), ir = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, qa = "@@iterator";
    function tt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, Ka = 0, nu, ru, hl, qu, ml, Qr, Wo;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function oc() {
      {
        if (Ka === 0) {
          nu = console.log, ru = console.info, hl = console.warn, qu = console.error, ml = console.group, Qr = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
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
        Ka++;
      }
    }
    function sc() {
      {
        if (Ka--, Ka === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: nu
            }),
            info: lt({}, e, {
              value: ru
            }),
            warn: lt({}, e, {
              value: hl
            }),
            error: lt({}, e, {
              value: qu
            }),
            group: lt({}, e, {
              value: ml
            }),
            groupCollapsed: lt({}, e, {
              value: Qr
            }),
            groupEnd: lt({}, e, {
              value: Wo
            })
          });
        }
        Ka < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ku = T.ReactCurrentDispatcher, yl;
    function da(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Xa = !1, Za;
    {
      var Xu = typeof WeakMap == "function" ? WeakMap : Map;
      Za = new Xu();
    }
    function au(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Za.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ku.current, Ku.current = null, oc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (F) {
              i = F;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (F) {
              i = F;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            i = F;
          }
          e();
        }
      } catch (F) {
        if (F && i && typeof F.stack == "string") {
          for (var p = F.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, S = v.length - 1; y >= 1 && S >= 0 && p[y] !== v[S]; )
            S--;
          for (; y >= 1 && S >= 0; y--, S--)
            if (p[y] !== v[S]) {
              if (y !== 1 || S !== 1)
                do
                  if (y--, S--, S < 0 || p[y] !== v[S]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Za.set(e, _), _;
                  }
                while (y >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Ku.current = s, sc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", U = x ? da(x) : "";
      return typeof e == "function" && Za.set(e, U), U;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Zu(e, t, a) {
      return au(e, !1);
    }
    function Ju(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Ju(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case fe:
          return da("Suspense");
        case Ee:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Zu(e.render);
          case et:
            return Pi(e.type, t, a);
          case Ke: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Gf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ae:
          return da(e.type);
        case ln:
          return da("Lazy");
        case Ne:
          return da("Suspense");
        case un:
          return da("SuspenseList");
        case ie:
        case Oe:
        case Ie:
          return Zu(e.type);
        case We:
          return Zu(e.type.render);
        case ue:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Gf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Nt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function eo(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case ar:
          return "Portal";
        case pi:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case fe:
          return "Suspense";
        case Ee:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return eo(t) + ".Consumer";
          case vi:
            var a = e;
            return eo(a._context) + ".Provider";
          case I:
            return Nt(e, e.render, "ForwardRef");
          case et:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case Ke: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Go(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case Bt:
          var i = a;
          return hi(i) + ".Consumer";
        case Ze:
          var u = a;
          return hi(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case We:
          return Go(a, a.render, "ForwardRef");
        case nt:
          return "Fragment";
        case ae:
          return a;
        case Se:
          return "Portal";
        case K:
          return "Root";
        case ze:
          return "Text";
        case ln:
          return xt(a);
        case rt:
          return a === Wa ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case ft:
          return "Profiler";
        case _t:
          return "Scope";
        case Ne:
          return "Suspense";
        case un:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case ue:
        case ie:
        case Ht:
        case Oe:
        case mt:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var to = T.ReactDebugCurrentFrame, lr = null, mi = !1;
    function Or() {
      {
        if (lr === null)
          return null;
        var e = lr._debugOwner;
        if (e !== null && typeof e < "u")
          return qe(e);
      }
      return null;
    }
    function yi() {
      return lr === null ? "" : Vi(lr);
    }
    function cn() {
      to.getCurrentStack = null, lr = null, mi = !1;
    }
    function Qt(e) {
      to.getCurrentStack = e === null ? null : yi, lr = e, mi = !1;
    }
    function Sl() {
      return lr;
    }
    function Yn(e) {
      mi = e;
    }
    function Nr(e) {
      return "" + e;
    }
    function xa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ko(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function qf(e) {
      var t = "";
      return e && (Ko(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
      var t = Ko(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      El(e) || (e._valueTracker = ba(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var no = !1, ro = !1, Cl = !1, uu = !1;
    function ao(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function io(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ro && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), ro = !0), t.value !== void 0 && t.defaultValue !== void 0 && !no && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), no = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xa(t.value != null ? t.value : i),
        controlled: ao(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = ao(t);
        !a._wrapperState.controlled && i && !uu && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Nr(u)) : a.value !== Nr(u) && (a.value = Nr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Fe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Fe(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Nr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function H(e, t) {
      var a = e;
      C(a, t), te(a, t);
    }
    function te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        $n(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function Fe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Nr(e._wrapperState.initialValue) : e.defaultValue !== Nr(a) && (e.defaultValue = Nr(a)));
    }
    var ce = !1, Pe = !1, gt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? j.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pe || (Pe = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (gt || (gt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ce && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ce = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", Nr(xa(t.value)));
    }
    var Wt = Array.isArray;
    function ct(e) {
      return Wt(e);
    }
    var Gt;
    Gt = !1;
    function hn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function Xo(e) {
      {
        qo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = ct(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var S = Nr(xa(a)), _ = null, x = 0; x < u.length; x++) {
          if (u[x].value === S) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          _ === null && !u[x].disabled && (_ = u[x]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Zo(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Xo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Gt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Gt = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function cc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var nv = !1;
    function Zf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Nr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jf(e, t) {
      var a = e;
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !nv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), nv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ct(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: xa(i)
      };
    }
    function rv(e, t) {
      var a = e, i = xa(t.value), u = xa(t.defaultValue);
      if (i != null) {
        var s = Nr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Nr(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Zm(e, t) {
      rv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", ed = "http://www.w3.org/1998/Math/MathML", td = "http://www.w3.org/2000/svg";
    function nd(e) {
      switch (e) {
        case "svg":
          return td;
        case "math":
          return ed;
        default:
          return $i;
      }
    }
    function rd(e, t) {
      return e == null || e === $i ? nd(t) : e === td && t === "foreignObject" ? $i : e;
    }
    var iv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, fc, lv = iv(function(e, t) {
      if (e.namespaceURI === td && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Wr = 1, Ii = 3, Mn = 8, Yi = 9, ad = 11, lo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, es = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(es).forEach(function(e) {
      ov.forEach(function(t) {
        es[uv(t, e)] = es[e];
      });
    });
    function dc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(es.hasOwnProperty(e) && es[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var sv = /([A-Z])/g, cv = /^ms-/;
    function uo(e) {
      return e.replace(sv, "-$1").toLowerCase().replace(cv, "-ms-");
    }
    var fv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, ey = /^-ms-/, dv = /-(.)/g, id = /;\s*$/, Si = {}, su = {}, pv = !1, ts = !1, ty = function(e) {
        return e.replace(dv, function(t, a) {
          return a.toUpperCase();
        });
      }, vv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ty(e.replace(ey, "ms-"))
        ));
      }, ld = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ud = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(id, "")));
      }, hv = function(e, t) {
        pv || (pv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mv = function(e, t) {
        ts || (ts = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fv = function(e, t) {
        e.indexOf("-") > -1 ? vv(e) : Jm.test(e) ? ld(e) : id.test(t) && ud(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mv(e, t));
      };
    }
    var yv = fv;
    function ny(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : uo(i)) + ":", t += dc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function gv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || yv(i, t[i]);
          var s = dc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sv(e) {
      var t = {};
      for (var a in e)
        for (var i = Jo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ay(e, t) {
      {
        if (!t)
          return;
        var a = Sv(e), i = Sv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ry(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ns = lt({
      menuitem: !0
    }, ti), Ev = "__html";
    function pc(e, t) {
      if (t) {
        if (ns[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var rs = {
      // HTML
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
      // SVG
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
    }, vc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
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
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
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
    }, oo = {}, iy = new RegExp("^(aria)-[" + le + "]*$"), so = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function od(e, t) {
      {
        if (br.call(oo, t) && oo[t])
          return !0;
        if (so.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), oo[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), oo[t] = !0, !0;
        }
        if (iy.test(t)) {
          var u = t.toLowerCase(), s = vc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return oo[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), oo[t] = !0, !0;
        }
      }
      return !0;
    }
    function as(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = od(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function sd(e, t) {
      Tl(e, t) || as(e, t);
    }
    var cd = !1;
    function hc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !cd && (cd = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var ur = {}, fd = /^on./, mc = /^on[^A-Z]/, Cv = new RegExp("^(aria)-[" + le + "]*$"), Rv = new RegExp("^(aria)[A-Z][" + le + "]*$");
      cu = function(e, t, a, i) {
        if (br.call(ur, t) && ur[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ur[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), ur[t] = !0, !0;
          if (fd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), ur[t] = !0, !0;
        } else if (fd.test(t))
          return mc.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (Cv.test(t) || Rv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ur[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ur[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ur[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ur[t] = !0, !0;
        var v = tn(t), y = v !== null && v.type === In;
        if (rs.hasOwnProperty(u)) {
          var S = rs[u];
          if (S !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, S), ur[t] = !0, !0;
        } else if (!y && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), ur[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ur[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (ur[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ur[t] = !0), !0);
      };
    }
    var Tv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function wv(e, t, a) {
      Tl(e, t) || Tv(e, t, a);
    }
    var dd = 1, yc = 2, ka = 4, pd = dd | yc | ka, fu = null;
    function ly(e) {
      fu !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function uy() {
      fu === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function is(e) {
      return e === fu;
    }
    function vd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var gc = null, du = null, Pt = null;
    function Sc(e) {
      var t = No(e);
      if (t) {
        if (typeof gc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          gc(t.stateNode, t.type, i);
        }
      }
    }
    function Ec(e) {
      gc = e;
    }
    function co(e) {
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function xv() {
      return du !== null || Pt !== null;
    }
    function Cc() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, Sc(e), t)
          for (var a = 0; a < t.length; a++)
            Sc(t[a]);
      }
    }
    var fo = function(e, t) {
      return e(t);
    }, ls = function() {
    }, wl = !1;
    function bv() {
      var e = xv();
      e && (ls(), Cc());
    }
    function _v(e, t, a) {
      if (wl)
        return e(t, a);
      wl = !0;
      try {
        return fo(e, t, a);
      } finally {
        wl = !1, bv();
      }
    }
    function oy(e, t, a) {
      fo = e, ls = a;
    }
    function kv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Rc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && kv(t));
        default:
          return !1;
      }
    }
    function xl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Rc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (Nn)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        us = !1;
      }
    function Tc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (S) {
        this.onError(S);
      }
    }
    var wc = Tc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var hd = document.createElement("react");
      wc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), _ = !1, x = !0, U = window.event, F = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          hd.removeEventListener(V, je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var pe = Array.prototype.slice.call(arguments, 3);
        function je() {
          _ = !0, P(), a.apply(i, pe), x = !1;
        }
        var ke, wt = !1, St = !1;
        function O(N) {
          if (ke = N.error, wt = !0, ke === null && N.colno === 0 && N.lineno === 0 && (St = !0), N.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), hd.addEventListener(V, je, !1), S.initEvent(V, !1, !1), hd.dispatchEvent(S), F && Object.defineProperty(window, "event", F), _ && x && (wt ? St && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", O), !_)
          return P(), Tc.apply(this, arguments);
      };
    }
    var Dv = wc, po = !1, xc = null, vo = !1, Ei = null, Ov = {
      onError: function(e) {
        po = !0, xc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      po = !1, xc = null, Dv.apply(Ov, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), po) {
        var y = ss();
        vo || (vo = !0, Ei = y);
      }
    }
    function os() {
      if (vo) {
        var e = Ei;
        throw vo = !1, Ei = null, e;
      }
    }
    function Qi() {
      return po;
    }
    function ss() {
      if (po) {
        var e = xc;
        return po = !1, xc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ho(e) {
      return e._reactInternals;
    }
    function sy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var Le = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), Oa = (
      /*                 */
      32
    ), an = (
      /*                     */
      64
    ), De = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), Cn = (
      /*                          */
      512
    ), Qn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), qr = (
      /*                    */
      4096
    ), Un = (
      /*                   */
      8192
    ), mo = (
      /*             */
      16384
    ), Nv = (
      /*               */
      32767
    ), cs = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), bc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), yo = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), _c = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | Qn | 0
    ), Dl = mn | Ct | Da | Oa | Cn | qr | Un, Ol = Ct | an | Cn | Un, Gi = Gr | Da, zn = Wi | _c | yo, Na = T.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | qr)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === K ? a : null;
    }
    function wi(e) {
      if (e.tag === Ne) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function xi(e) {
      return e.tag === K ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return pa(e) === e;
    }
    function Lv(e) {
      {
        var t = Na.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ho(e);
      return u ? pa(u) === u : !1;
    }
    function kc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Dc(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return kc(s), e;
            if (v === u)
              return kc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, S = s.child; S; ) {
            if (S === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (S === u) {
              y = !0, u = s, i = f;
              break;
            }
            S = S.sibling;
          }
          if (!y) {
            for (S = f.child; S; ) {
              if (S === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (S === u) {
                y = !0, u = f, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== K)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = Dc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === ae || e.tag === ze)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = Dc(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === ae || e.tag === ze)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Se) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var md = M.unstable_scheduleCallback, Mv = M.unstable_cancelCallback, yd = M.unstable_shouldYield, gd = M.unstable_requestPaint, Wn = M.unstable_now, Oc = M.unstable_getCurrentPriorityLevel, fs = M.unstable_ImmediatePriority, Nl = M.unstable_UserBlockingPriority, qi = M.unstable_NormalPriority, cy = M.unstable_LowPriority, mu = M.unstable_IdlePriority, Nc = M.unstable_yieldValue, Uv = M.unstable_setDisableYieldValue, yu = null, xn = null, de = null, va = !1, Zr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function go(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ye && (e = lt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Ma
        })), yu = t.inject(e), xn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          va || (va = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Ed(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & De) === De;
          if (Be) {
            var i;
            switch (t) {
              case Lr:
                i = fs;
                break;
              case _i:
                i = Nl;
                break;
              case Ua:
                i = qi;
                break;
              case za:
                i = mu;
                break;
              default:
                i = qi;
                break;
            }
            xn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Cd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          va || (va = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Rd(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          va || (va = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Nc == "function" && (Uv(e), ee(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(yu, e);
        } catch (t) {
          va || (va = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      de = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = jv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Td(e) {
      de !== null && typeof de.markCommitStarted == "function" && de.markCommitStarted(e);
    }
    function wd() {
      de !== null && typeof de.markCommitStopped == "function" && de.markCommitStopped();
    }
    function ha(e) {
      de !== null && typeof de.markComponentRenderStarted == "function" && de.markComponentRenderStarted(e);
    }
    function ma() {
      de !== null && typeof de.markComponentRenderStopped == "function" && de.markComponentRenderStopped();
    }
    function xd(e) {
      de !== null && typeof de.markComponentPassiveEffectMountStarted == "function" && de.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      de !== null && typeof de.markComponentPassiveEffectMountStopped == "function" && de.markComponentPassiveEffectMountStopped();
    }
    function Ki(e) {
      de !== null && typeof de.markComponentPassiveEffectUnmountStarted == "function" && de.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      de !== null && typeof de.markComponentPassiveEffectUnmountStopped == "function" && de.markComponentPassiveEffectUnmountStopped();
    }
    function Lc(e) {
      de !== null && typeof de.markComponentLayoutEffectMountStarted == "function" && de.markComponentLayoutEffectMountStarted(e);
    }
    function Av() {
      de !== null && typeof de.markComponentLayoutEffectMountStopped == "function" && de.markComponentLayoutEffectMountStopped();
    }
    function ds(e) {
      de !== null && typeof de.markComponentLayoutEffectUnmountStarted == "function" && de.markComponentLayoutEffectUnmountStarted(e);
    }
    function bd() {
      de !== null && typeof de.markComponentLayoutEffectUnmountStopped == "function" && de.markComponentLayoutEffectUnmountStopped();
    }
    function ps(e, t, a) {
      de !== null && typeof de.markComponentErrored == "function" && de.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      de !== null && typeof de.markComponentSuspended == "function" && de.markComponentSuspended(e, t, a);
    }
    function vs(e) {
      de !== null && typeof de.markLayoutEffectsStarted == "function" && de.markLayoutEffectsStarted(e);
    }
    function hs() {
      de !== null && typeof de.markLayoutEffectsStopped == "function" && de.markLayoutEffectsStopped();
    }
    function Su(e) {
      de !== null && typeof de.markPassiveEffectsStarted == "function" && de.markPassiveEffectsStarted(e);
    }
    function _d() {
      de !== null && typeof de.markPassiveEffectsStopped == "function" && de.markPassiveEffectsStopped();
    }
    function Eu(e) {
      de !== null && typeof de.markRenderStarted == "function" && de.markRenderStarted(e);
    }
    function Fv() {
      de !== null && typeof de.markRenderYielded == "function" && de.markRenderYielded();
    }
    function Mc() {
      de !== null && typeof de.markRenderStopped == "function" && de.markRenderStopped();
    }
    function gn(e) {
      de !== null && typeof de.markRenderScheduled == "function" && de.markRenderScheduled(e);
    }
    function Uc(e, t) {
      de !== null && typeof de.markForceUpdateScheduled == "function" && de.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      de !== null && typeof de.markStateUpdateScheduled == "function" && de.markStateUpdateScheduled(e, t);
    }
    var Me = (
      /*                         */
      0
    ), ht = (
      /*                 */
      1
    ), Lt = (
      /*                    */
      2
    ), qt = (
      /*               */
      8
    ), Mt = (
      /*              */
      16
    ), An = Math.clz32 ? Math.clz32 : ys, Jn = Math.log, zc = Math.LN2;
    function ys(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / zc | 0) | 0;
    }
    var Cu = 31, Y = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), $e = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), bn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), Ul = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), Ac = (
      /*                        */
      128
    ), Fc = (
      /*                        */
      256
    ), jc = (
      /*                        */
      512
    ), Hc = (
      /*                        */
      1024
    ), Pc = (
      /*                        */
      2048
    ), Vc = (
      /*                        */
      4096
    ), Bc = (
      /*                        */
      8192
    ), $c = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Ic = (
      /*                       */
      65536
    ), So = (
      /*                       */
      131072
    ), Eo = (
      /*                       */
      262144
    ), Yc = (
      /*                       */
      524288
    ), gs = (
      /*                       */
      1048576
    ), Qc = (
      /*                       */
      2097152
    ), Ss = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Es = (
      /*                             */
      16777216
    ), Gc = (
      /*                             */
      33554432
    ), qc = (
      /*                             */
      67108864
    ), kd = wu, Cs = (
      /*          */
      134217728
    ), Dd = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), xu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & $e)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & bn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & Ul)
          return "Transition";
        if (e & Ss)
          return "Retry";
        if (e & Cs)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & xu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Zt = -1, bu = Ru, Kc = wu;
    function Ts(e) {
      switch (zl(e)) {
        case $e:
          return $e;
        case Ml:
          return Ml;
        case ri:
          return ri;
        case Tr:
          return Tr;
        case bn:
          return bn;
        case Xi:
          return Xi;
        case Ru:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Tu:
        case Ic:
        case So:
        case Eo:
        case Yc:
        case gs:
        case Qc:
          return e & Ul;
        case wu:
        case Wc:
        case Es:
        case Gc:
        case qc:
          return e & Ss;
        case Cs:
          return Cs;
        case Rs:
          return Rs;
        case xu:
          return xu;
        case Jr:
          return Jr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Xc(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & Dd;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Ts(p);
        else {
          var v = f & s;
          v !== Y && (i = Ts(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Ts(y) : s !== Y && (i = Ts(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var S = zl(i), _ = zl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          S >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          S === bn && (_ & Ul) !== Y
        )
          return t;
      }
      (i & ri) !== Y && (i |= a & bn);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var U = e.entanglements, F = i & x; F > 0; ) {
          var P = Fn(F), pe = 1 << P;
          i |= U[P], F &= ~pe;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var u = Fn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Od(e, t) {
      switch (e) {
        case $e:
        case Ml:
        case ri:
          return t + 250;
        case Tr:
        case bn:
        case Xi:
        case Ru:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Tu:
        case Ic:
        case So:
        case Eo:
        case Yc:
        case gs:
        case Qc:
          return t + 5e3;
        case wu:
        case Wc:
        case Es:
        case Gc:
        case qc:
          return Zt;
        case Cs:
        case Rs:
        case xu:
        case Jr:
          return Zt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function Zc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fn(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Od(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Hv(e) {
      return Ts(e.pendingLanes);
    }
    function Jc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== Y ? t : t & Jr ? Jr : Y;
    }
    function Pv(e) {
      return (e & $e) !== Y;
    }
    function ws(e) {
      return (e & Dd) !== Y;
    }
    function _u(e) {
      return (e & Ss) === e;
    }
    function Nd(e) {
      var t = $e | ri | bn;
      return (e & t) === Y;
    }
    function Ld(e) {
      return (e & Ul) === e;
    }
    function ef(e, t) {
      var a = Ml | ri | Tr | bn;
      return (t & a) !== Y;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Md(e) {
      return (e & Ul) !== Y;
    }
    function Ud() {
      var e = bu;
      return bu <<= 1, (bu & Ul) === Y && (bu = Ru), e;
    }
    function Bv() {
      var e = Kc;
      return Kc <<= 1, (Kc & Ss) === Y && (Kc = wu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function xs(e) {
      return zl(e);
    }
    function Fn(e) {
      return 31 - An(e);
    }
    function or(e) {
      return Fn(e);
    }
    function ea(e, t) {
      return (e & t) !== Y;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function bs(e, t) {
      return e & ~t;
    }
    function zd(e, t) {
      return e & t;
    }
    function $v(e) {
      return e;
    }
    function Iv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function _s(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function Co(e, t, a) {
      e.pendingLanes |= t, t !== xu && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = or(t);
      i[u] = a;
    }
    function Yv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Fn(i), s = 1 << u;
        a[u] = Zt, i &= ~s;
      }
    }
    function tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ad(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fn(f), v = 1 << p;
        i[p] = Y, u[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function nf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Fn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Fd(e, t) {
      var a = zl(t), i;
      switch (a) {
        case ri:
          i = Ml;
          break;
        case bn:
          i = Tr;
          break;
        case Ru:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Tu:
        case Ic:
        case So:
        case Eo:
        case Yc:
        case gs:
        case Qc:
        case wu:
        case Wc:
        case Es:
        case Gc:
        case qc:
          i = Xi;
          break;
        case xu:
          i = Rs;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function ks(e, t, a) {
      if (Zr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = or(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Qv(e, t) {
      if (Zr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = or(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function jd(e, t) {
      return null;
    }
    var Lr = $e, _i = ri, Ua = bn, za = xu, Ds = Dt;
    function Aa() {
      return Ds;
    }
    function jn(e) {
      Ds = e;
    }
    function Wv(e, t) {
      var a = Ds;
      try {
        return Ds = e, t();
      } finally {
        Ds = a;
      }
    }
    function Gv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Os(e, t) {
      return e > t ? e : t;
    }
    function er(e, t) {
      return e !== 0 && e < t;
    }
    function qv(e) {
      var t = zl(e);
      return er(Lr, t) ? er(_i, t) ? ws(t) ? Ua : za : _i : Lr;
    }
    function rf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ns;
    function wr(e) {
      Ns = e;
    }
    function fy(e) {
      Ns(e);
    }
    var ge;
    function Ro(e) {
      ge = e;
    }
    var af;
    function Kv(e) {
      af = e;
    }
    var Xv;
    function Ls(e) {
      Xv = e;
    }
    var Ms;
    function Hd(e) {
      Ms = e;
    }
    var lf = !1, Us = [], Zi = null, ki = null, Di = null, _n = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Ur = [], Zv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Jv(e) {
      return Zv.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Pd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Zi = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && ge(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function dy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Zi = ta(Zi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = ta(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ta(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return _n.set(y, ta(_n.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = u, _ = S.pointerId;
          return Mr.set(_, ta(Mr.get(_) || null, e, t, a, i, S)), !0;
        }
      }
      return !1;
    }
    function Vd(e) {
      var t = Qs(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ne) {
            var u = wi(a);
            if (u !== null) {
              e.blockedOn = u, Ms(e.priority, function() {
                af(a);
              });
              return;
            }
          } else if (i === K) {
            var s = a.stateNode;
            if (rf(s)) {
              e.blockedOn = xi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function eh(e) {
      for (var t = Xv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ur.length && er(t, Ur[i].priority); i++)
        ;
      Ur.splice(i, 0, a), i === 0 && Vd(a);
    }
    function zs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = wo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ly(s), u.target.dispatchEvent(s), uy();
        } else {
          var f = No(i);
          return f !== null && ge(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Bd(e, t, a) {
      zs(e) && a.delete(t);
    }
    function py() {
      lf = !1, Zi !== null && zs(Zi) && (Zi = null), ki !== null && zs(ki) && (ki = null), Di !== null && zs(Di) && (Di = null), _n.forEach(Bd), Mr.forEach(Bd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, lf || (lf = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, py)));
    }
    function Du(e) {
      if (Us.length > 0) {
        Al(Us[0], e);
        for (var t = 1; t < Us.length; t++) {
          var a = Us[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Zi !== null && Al(Zi, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      _n.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Ur.length; u++) {
        var s = Ur[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ur.length > 0; ) {
        var f = Ur[0];
        if (f.blockedOn !== null)
          break;
        Vd(f), f.blockedOn === null && Ur.shift();
      }
    }
    var sr = T.ReactCurrentBatchConfig, Rt = !0;
    function Gn(e) {
      Rt = !!e;
    }
    function Hn() {
      return Rt;
    }
    function cr(e, t, a) {
      var i = uf(t), u;
      switch (i) {
        case Lr:
          u = ya;
          break;
        case _i:
          u = To;
          break;
        case Ua:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        jn(Lr), kn(e, t, a, i);
      } finally {
        jn(u), sr.transition = s;
      }
    }
    function To(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        jn(_i), kn(e, t, a, i);
      } finally {
        jn(u), sr.transition = s;
      }
    }
    function kn(e, t, a, i) {
      Rt && As(e, t, a, i);
    }
    function As(e, t, a, i) {
      var u = wo(e, t, a, i);
      if (u === null) {
        Oy(e, t, i, Oi, a), Pd(e, i);
        return;
      }
      if (dy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pd(e, i), t & ka && Jv(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && fy(s);
          var f = wo(e, t, a, i);
          if (f === null && Oy(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Oy(e, t, i, null, a);
    }
    var Oi = null;
    function wo(e, t, a, i) {
      Oi = null;
      var u = vd(i), s = Qs(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ne) {
            var v = wi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === K) {
            var y = f.stateNode;
            if (rf(y))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function uf(e) {
      switch (e) {
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
          return Lr;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _i;
        case "message": {
          var t = Oc();
          switch (t) {
            case fs:
              return Lr;
            case Nl:
              return _i;
            case qi:
            case cy:
              return Ua;
            case mu:
              return za;
            default:
              return Ua;
          }
        }
        default:
          return Ua;
      }
    }
    function Fs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function $d(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function xo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, bo = null, Ou = null;
    function Fl(e) {
      return ga = e, bo = js(), !0;
    }
    function of() {
      ga = null, bo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = bo, a = t.length, i, u = js(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function js() {
      return "value" in ga ? ga.value : ga.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _o() {
      return !0;
    }
    function Hs() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = _o : this.isDefaultPrevented = Hs, this.isPropagationStopped = Hs, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _o);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _o);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: _o
      }), t;
    }
    var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ni = xr(Pn), zr = lt({}, Pn, {
      view: 0,
      detail: 0
    }), ra = xr(zr), sf, Ps, Nu;
    function vy(e) {
      e !== Nu && (Nu && e.type === "mousemove" ? (sf = e.screenX - Nu.screenX, Ps = e.screenY - Nu.screenY) : (sf = 0, Ps = 0), Nu = e);
    }
    var li = lt({}, zr, {
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
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (vy(e), sf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ps;
      }
    }), Id = xr(li), Yd = lt({}, li, {
      dataTransfer: 0
    }), Lu = xr(Yd), Qd = lt({}, zr, {
      relatedTarget: 0
    }), el = xr(Qd), th = lt({}, Pn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nh = xr(th), Wd = lt({}, Pn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cf = xr(Wd), hy = lt({}, Pn, {
      data: 0
    }), rh = xr(hy), ah = rh, ih = {
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
    }, Mu = {
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
    };
    function my(e) {
      if (e.key) {
        var t = ih[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var ko = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function lh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ko[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return lh;
    }
    var yy = lt({}, zr, {
      key: my,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), uh = xr(yy), gy = lt({}, li, {
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
    }), oh = xr(gy), sh = lt({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), ch = xr(sh), Sy = lt({}, Pn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fa = xr(Sy), Gd = lt({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ey = xr(Gd), Hl = [9, 13, 27, 32], Vs = 229, tl = Nn && "CompositionEvent" in window, Pl = null;
    Nn && "documentMode" in document && (Pl = document.documentMode);
    var qd = Nn && "TextEvent" in window && !Pl, ff = Nn && (!tl || Pl && Pl > 8 && Pl <= 11), fh = 32, df = String.fromCharCode(fh);
    function Cy() {
      pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kd = !1;
    function dh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function pf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vf(e, t) {
      return e === "keydown" && t.keyCode === Vs;
    }
    function Xd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Vs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function hf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ph(e) {
      return e.locale === "ko";
    }
    var Uu = !1;
    function Zd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = pf(t) : Uu ? Xd(t, i) && (s = "onCompositionEnd") : vf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ff && !ph(i) && (!Uu && s === "onCompositionStart" ? Uu = Fl(u) : s === "onCompositionEnd" && Uu && (f = Ji()));
      var p = Eh(a, s);
      if (p.length > 0) {
        var v = new rh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = hf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return hf(t);
        case "keypress":
          var a = t.which;
          return a !== fh ? null : (Kd = !0, df);
        case "textInput":
          var i = t.data;
          return i === df && Kd ? null : i;
        default:
          return null;
      }
    }
    function Jd(e, t) {
      if (Uu) {
        if (e === "compositionend" || !tl && Xd(e, t)) {
          var a = Ji();
          return of(), Uu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!dh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ff && !ph(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yf(e, t, a, i, u) {
      var s;
      if (qd ? s = mf(t, i) : s = Jd(t, i), !s)
        return null;
      var f = Eh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ah("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function vh(e, t, a, i, u, s, f) {
      Zd(e, t, a, i, u), yf(e, t, a, i, u);
    }
    var Ry = {
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
    function Bs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ry[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ty(e) {
      if (!Nn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function $s() {
      pt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function hh(e, t, a, i) {
      co(i);
      var u = Eh(t, "onChange");
      if (u.length > 0) {
        var s = new Ni("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      hh(t, n, e, vd(e)), _v(o, t);
    }
    function o(e) {
      UE(e, 0);
    }
    function c(e) {
      var t = Tf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Nn && (m = Ty("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", A);
    }
    function w() {
      Vl && (Vl.detachEvent("onpropertychange", A), Vl = null, n = null);
    }
    function A(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (w(), E(t, a)) : e === "focusout" && w();
    }
    function X(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function he(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ce(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function we(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Fe(e, "number", e.value);
    }
    function Dn(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window, v, y;
      if (r(p) ? v = d : Bs(p) ? m ? v = Ce : (v = X, y = G) : W(p) && (v = he), v) {
        var S = v(t, a);
        if (S) {
          hh(e, S, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && we(p);
    }
    function D() {
      $t("onMouseEnter", ["mouseout", "mouseover"]), $t("onMouseLeave", ["mouseout", "mouseover"]), $t("onPointerEnter", ["pointerout", "pointerover"]), $t("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function b(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !is(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Qs(y) || pp(y)))
          return;
      }
      if (!(!v && !p)) {
        var S;
        if (u.window === u)
          S = u;
        else {
          var _ = u.ownerDocument;
          _ ? S = _.defaultView || _.parentWindow : S = window;
        }
        var x, U;
        if (v) {
          var F = i.relatedTarget || i.toElement;
          if (x = a, U = F ? Qs(F) : null, U !== null) {
            var P = pa(U);
            (U !== P || U.tag !== ae && U.tag !== ze) && (U = null);
          }
        } else
          x = null, U = a;
        if (x !== U) {
          var pe = Id, je = "onMouseLeave", ke = "onMouseEnter", wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (pe = oh, je = "onPointerLeave", ke = "onPointerEnter", wt = "pointer");
          var St = x == null ? S : Tf(x), O = U == null ? S : Tf(U), V = new pe(je, wt + "leave", x, i, u);
          V.target = St, V.relatedTarget = O;
          var N = null, Z = Qs(u);
          if (Z === a) {
            var ye = new pe(ke, wt + "enter", U, i, u);
            ye.target = O, ye.relatedTarget = St, N = ye;
          }
          aw(e, V, N, x, U);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var q = typeof Object.is == "function" ? Object.is : L;
    function Re(e, t) {
      if (q(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!br.call(t, s) || !q(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function He(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ve(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ge(e, t) {
      for (var a = He(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = He(Ve(a));
      }
    }
    function tr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ut(e, u, s, f, p);
    }
    function Ut(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, S = e, _ = null;
      e: for (; ; ) {
        for (var x = null; S === t && (a === 0 || S.nodeType === Ii) && (f = s + a), S === i && (u === 0 || S.nodeType === Ii) && (p = s + u), S.nodeType === Ii && (s += S.nodeValue.length), (x = S.firstChild) !== null; )
          _ = S, S = x;
        for (; ; ) {
          if (S === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (x = S.nextSibling) !== null)
            break;
          S = _, _ = S.parentNode;
        }
        S = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ge(e, f), S = Ge(e, p);
        if (y && S) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === S.node && u.focusOffset === S.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(S.node, S.offset)) : (_.setEnd(S.node, S.offset), u.addRange(_));
        }
      }
    }
    function mh(e) {
      return e && e.nodeType === Ii;
    }
    function TE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : mh(e) ? !1 : mh(t) ? TE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function PT(e) {
      return e && e.ownerDocument && TE(e.ownerDocument.documentElement, e);
    }
    function VT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function wE() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (VT(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function BT() {
      var e = wE();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? IT(e) : null
      };
    }
    function $T(e) {
      var t = wE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && PT(a)) {
        i !== null && wy(a) && YT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Wr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function IT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = tr(e), t || {
        start: 0,
        end: 0
      };
    }
    function YT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var QT = Nn && "documentMode" in document && document.documentMode <= 11;
    function WT() {
      pt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var gf = null, xy = null, ep = null, by = !1;
    function GT(e) {
      if ("selectionStart" in e && wy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function qT(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function xE(e, t, a) {
      var i = qT(a);
      if (!(by || gf == null || gf !== _a(i))) {
        var u = GT(gf);
        if (!ep || !Re(ep, u)) {
          ep = u;
          var s = Eh(xy, "onSelect");
          if (s.length > 0) {
            var f = new Ni("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = gf;
          }
        }
      }
    }
    function KT(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window;
      switch (t) {
        case "focusin":
          (Bs(p) || p.contentEditable === "true") && (gf = p, xy = a, ep = null);
          break;
        case "focusout":
          gf = null, xy = null, ep = null;
          break;
        case "mousedown":
          by = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          by = !1, xE(e, i, u);
          break;
        case "selectionchange":
          if (QT)
            break;
        case "keydown":
        case "keyup":
          xE(e, i, u);
      }
    }
    function yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Sf = {
      animationend: yh("Animation", "AnimationEnd"),
      animationiteration: yh("Animation", "AnimationIteration"),
      animationstart: yh("Animation", "AnimationStart"),
      transitionend: yh("Transition", "TransitionEnd")
    }, _y = {}, bE = {};
    Nn && (bE = document.createElement("div").style, "AnimationEvent" in window || (delete Sf.animationend.animation, delete Sf.animationiteration.animation, delete Sf.animationstart.animation), "TransitionEvent" in window || delete Sf.transitionend.transition);
    function gh(e) {
      if (_y[e])
        return _y[e];
      if (!Sf[e])
        return e;
      var t = Sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in bE)
          return _y[e] = t[a];
      return e;
    }
    var _E = gh("animationend"), kE = gh("animationiteration"), DE = gh("animationstart"), OE = gh("transitionend"), NE = /* @__PURE__ */ new Map(), LE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Do(e, t) {
      NE.set(e, t), pt(t, [e]);
    }
    function XT() {
      for (var e = 0; e < LE.length; e++) {
        var t = LE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Do(a, "on" + i);
      }
      Do(_E, "onAnimationEnd"), Do(kE, "onAnimationIteration"), Do(DE, "onAnimationStart"), Do("dblclick", "onDoubleClick"), Do("focusin", "onFocus"), Do("focusout", "onBlur"), Do(OE, "onTransitionEnd");
    }
    function ZT(e, t, a, i, u, s, f) {
      var p = NE.get(t);
      if (p !== void 0) {
        var v = Ni, y = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = uh;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Id;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ch;
            break;
          case _E:
          case kE:
          case DE:
            v = nh;
            break;
          case OE:
            v = Fa;
            break;
          case "scroll":
            v = ra;
            break;
          case "wheel":
            v = Ey;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = oh;
            break;
        }
        var S = (s & ka) !== 0;
        {
          var _ = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = nw(a, p, i.type, S, _);
          if (x.length > 0) {
            var U = new v(p, y, null, i, u);
            e.push({
              event: U,
              listeners: x
            });
          }
        }
      }
    }
    XT(), D(), $s(), WT(), Cy();
    function JT(e, t, a, i, u, s, f) {
      ZT(e, t, a, i, u, s);
      var p = (s & pd) === 0;
      p && (b(e, t, a, i, u), Dn(e, t, a, i, u), KT(e, t, a, i, u), vh(e, t, a, i, u));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function ME(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function ew(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          ME(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var S = t[y], _ = S.instance, x = S.currentTarget, U = S.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          ME(e, U, x), i = _;
        }
    }
    function UE(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        ew(s, f, a);
      }
      os();
    }
    function tw(e, t, a, i, u) {
      var s = vd(a), f = [];
      JT(f, e, i, a, s, t), UE(f, t);
    }
    function Sn(e, t) {
      ky.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = N1(t), u = iw(e);
      i.has(u) || (zE(t, e, yc, a), i.add(u));
    }
    function Dy(e, t, a) {
      ky.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), zE(a, e, i, t);
    }
    var Sh = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[Sh]) {
        e[Sh] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (ky.has(a) || Dy(a, !1, e), Dy(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[Sh] || (t[Sh] = !0, Dy("selectionchange", !1, t)));
      }
    }
    function zE(e, t, a, i, u) {
      var s = cr(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? $d(e, t, s, f) : na(e, t, s) : f !== void 0 ? xo(e, t, s, f) : Fs(e, t, s);
    }
    function AE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function Oy(e, t, a, i, u) {
      var s = i;
      if (!(t & dd) && !(t & yc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === K || v === Se) {
              var y = p.stateNode.containerInfo;
              if (AE(y, f))
                break;
              if (v === Se)
                for (var S = p.return; S !== null; ) {
                  var _ = S.tag;
                  if (_ === K || _ === Se) {
                    var x = S.stateNode.containerInfo;
                    if (AE(x, f))
                      return;
                  }
                  S = S.return;
                }
              for (; y !== null; ) {
                var U = Qs(y);
                if (U === null)
                  return;
                var F = U.tag;
                if (F === ae || F === ze) {
                  p = s = U;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      _v(function() {
        return tw(e, t, a, s);
      });
    }
    function rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function nw(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, S = null; y !== null; ) {
        var _ = y, x = _.stateNode, U = _.tag;
        if (U === ae && x !== null && (S = x, p !== null)) {
          var F = xl(y, p);
          F != null && v.push(rp(y, F, S));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Eh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ae && f !== null) {
          var v = f, y = xl(u, a);
          y != null && i.unshift(rp(u, y, v));
          var S = xl(u, t);
          S != null && i.push(rp(u, S, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ef(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ae);
      return e || null;
    }
    function rw(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ef(s))
        u++;
      for (var f = 0, p = i; p; p = Ef(p))
        f++;
      for (; u - f > 0; )
        a = Ef(a), u--;
      for (; f - u > 0; )
        i = Ef(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ef(a), i = Ef(i);
      }
      return null;
    }
    function FE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, S = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ae && S !== null) {
          var x = S;
          if (u) {
            var U = xl(p, s);
            U != null && f.unshift(rp(p, U, x));
          } else if (!u) {
            var F = xl(p, s);
            F != null && f.push(rp(p, F, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function aw(e, t, a, i, u) {
      var s = i && u ? rw(i, u) : null;
      i !== null && FE(e, t, i, s, !1), u !== null && a !== null && FE(e, a, u, s, !0);
    }
    function iw(e, t) {
      return e + "__bubble";
    }
    var ja = !1, ap = "dangerouslySetInnerHTML", Ch = "suppressContentEditableWarning", Oo = "suppressHydrationWarning", jE = "autoFocus", Is = "children", Ys = "style", Rh = "__html", Ny, Th, ip, HE, wh, PE, VE;
    Ny = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Th = function(e, t) {
      sd(e, t), hc(e, t), wv(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: ot
      });
    }, PE = Nn && !document.documentMode, ip = function(e, t, a) {
      if (!ja) {
        var i = xh(a), u = xh(t);
        u !== i && (ja = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, HE = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, wh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, VE = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var lw = /\r\n?/g, uw = /\u0000|\uFFFD/g;
    function xh(e) {
      Kn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(lw, `
`).replace(uw, "");
    }
    function bh(e, t, a, i) {
      var u = xh(t), s = xh(e);
      if (s !== u && (i && (ja || (ja = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function BE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function ow() {
    }
    function _h(e) {
      e.onclick = ow;
    }
    function sw(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ys)
            f && Object.freeze(f), gv(t, f);
          else if (s === ap) {
            var p = f ? f[Rh] : void 0;
            p != null && lv(t, p);
          } else if (s === Is)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && lo(t, f);
            } else typeof f == "number" && lo(t, "" + f);
          else s === Ch || s === Oo || s === jE || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && wh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function cw(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ys ? gv(e, f) : s === ap ? lv(e, f) : s === Is ? lo(e, f) : _r(e, s, f, i);
      }
    }
    function fw(e, t, a, i) {
      var u, s = BE(a), f, p = i;
      if (p === $i && (p = nd(e)), p === $i) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var S = f;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(Ny, e) && (Ny[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function dw(e, t) {
      return BE(t).createTextNode(e);
    }
    function pw(e, t, a, i) {
      var u = Tl(t, a);
      Th(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < tp.length; f++)
            Sn(tp[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          ei(e, a), s = io(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Zo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Jf(e, a), s = Zf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), sw(t, e, i, s, u), t) {
        case "input":
          Ja(e), z(e, a, !1);
          break;
        case "textarea":
          Ja(e), av(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && _h(e);
          break;
      }
    }
    function vw(e, t, a, i, u) {
      Th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = io(e, a), p = io(e, i), s = [];
          break;
        case "select":
          f = Zo(e, a), p = Zo(e, i), s = [];
          break;
        case "textarea":
          f = Zf(e, a), p = Zf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && _h(e);
          break;
      }
      pc(t, p);
      var v, y, S = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ys) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (S || (S = {}), S[y] = "");
          } else v === ap || v === Is || v === Ch || v === Oo || v === jE || (it.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], U = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === U || x == null && U == null))
          if (v === Ys)
            if (x && Object.freeze(x), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (S || (S = {}), S[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && U[y] !== x[y] && (S || (S = {}), S[y] = x[y]);
            } else
              S || (s || (s = []), s.push(v, S)), S = x;
          else if (v === ap) {
            var F = x ? x[Rh] : void 0, P = U ? U[Rh] : void 0;
            F != null && P !== F && (s = s || []).push(v, F);
          } else v === Is ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Ch || v === Oo || (it.hasOwnProperty(v) ? (x != null && (typeof x != "function" && wh(v, x), v === "onScroll" && Sn("scroll", e)), !s && U !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return S && (ay(S, p[Ys]), (s = s || []).push(Ys, S)), s;
    }
    function hw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (cw(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          cc(e, u);
          break;
      }
    }
    function mw(e) {
      {
        var t = e.toLowerCase();
        return rs.hasOwnProperty(t) && rs[t] || null;
      }
    }
    function yw(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Th(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < tp.length; y++)
            Sn(tp[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          ei(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Jf(e, a), Sn("invalid", e);
          break;
      }
      pc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var S = e.attributes, _ = 0; _ < S.length; _++) {
          var x = S[_].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(S[_].name);
          }
        }
      }
      var U = null;
      for (var F in a)
        if (a.hasOwnProperty(F)) {
          var P = a[F];
          if (F === Is)
            typeof P == "string" ? e.textContent !== P && (a[Oo] !== !0 && bh(e.textContent, P, s, f), U = [Is, P]) : typeof P == "number" && e.textContent !== "" + P && (a[Oo] !== !0 && bh(e.textContent, P, s, f), U = [Is, "" + P]);
          else if (it.hasOwnProperty(F))
            P != null && (typeof P != "function" && wh(F, P), F === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var pe = void 0, je = tn(F);
            if (a[Oo] !== !0) {
              if (!(F === Ch || F === Oo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === ap) {
                  var ke = e.innerHTML, wt = P ? P[Rh] : void 0;
                  if (wt != null) {
                    var St = VE(e, wt);
                    St !== ke && ip(F, ke, St);
                  }
                } else if (F === Ys) {
                  if (v.delete(F), PE) {
                    var O = ny(P);
                    pe = e.getAttribute("style"), O !== pe && ip(F, pe, O);
                  }
                } else if (p && !k)
                  v.delete(F.toLowerCase()), pe = tu(e, F, P), P !== pe && ip(F, pe, P);
                else if (!vn(F, je, p) && !Xn(F, P, je, p)) {
                  var V = !1;
                  if (je !== null)
                    v.delete(je.attributeName), pe = vl(e, F, P, je);
                  else {
                    var N = i;
                    if (N === $i && (N = nd(t)), N === $i)
                      v.delete(F.toLowerCase());
                    else {
                      var Z = mw(F);
                      Z !== null && Z !== F && (V = !0, v.delete(Z)), v.delete(F);
                    }
                    pe = tu(e, F, P);
                  }
                  var ye = k;
                  !ye && P !== pe && !V && ip(F, pe, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Oo] !== !0 && HE(v), t) {
        case "input":
          Ja(e), z(e, a, !0);
          break;
        case "textarea":
          Ja(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _h(e);
          break;
      }
      return U;
    }
    function gw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if (ja)
          return;
        ja = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (ja)
          return;
        ja = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Sw(e, t, a) {
      switch (t) {
        case "input":
          H(e, a);
          return;
        case "textarea":
          Zm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var lp = function() {
    }, up = function() {
    };
    {
      var Ew = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], $E = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Cw = $E.concat(["button"]), Rw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], IE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      up = function(e, t) {
        var a = lt({}, e || IE), i = {
          tag: t
        };
        return $E.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Cw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Ew.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Tw = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
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
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
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
            return Rw.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, ww = function(e, t) {
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
      }, YE = {};
      lp = function(e, t, a) {
        a = a || IE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Tw(e, u) ? null : i, f = s ? null : ww(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!YE[y]) {
            YE[y] = !0;
            var S = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, _, x);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var kh = "suppressHydrationWarning", Dh = "$", Oh = "/$", op = "$?", sp = "$!", xw = "style", Ay = null, Fy = null;
    function bw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case ad: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : rd(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = rd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = up(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function _w(e, t, a) {
      {
        var i = e, u = rd(i.namespace, t), s = up(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function uD(e) {
      return e;
    }
    function kw(e) {
      Ay = Hn(), Fy = BT();
      var t = null;
      return Gn(!1), t;
    }
    function Dw(e) {
      $T(Fy), Gn(Ay), Ay = null, Fy = null;
    }
    function Ow(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (lp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = up(f.ancestorInfo, e);
          lp(null, p, v);
        }
        s = f.namespace;
      }
      var y = fw(e, t, a, s);
      return dp(u, y), Yy(y, t), y;
    }
    function Nw(e, t) {
      e.appendChild(t);
    }
    function Lw(e, t, a, i, u) {
      switch (pw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Mw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = up(f.ancestorInfo, t);
          lp(null, p, v);
        }
      }
      return vw(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Uw(e, t, a, i) {
      {
        var u = a;
        lp(null, e, u.ancestorInfo);
      }
      var s = dw(e, t);
      return dp(i, s), s;
    }
    function zw() {
      var e = window.event;
      return e === void 0 ? Ua : uf(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, Aw = typeof clearTimeout == "function" ? clearTimeout : void 0, Py = -1, QE = typeof Promise == "function" ? Promise : void 0, Fw = typeof queueMicrotask == "function" ? queueMicrotask : typeof QE < "u" ? function(e) {
      return QE.resolve(null).then(e).catch(jw);
    } : Hy;
    function jw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Hw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Pw(e, t, a, i, u, s) {
      hw(e, t, a, i, u), Yy(e, u);
    }
    function WE(e) {
      lo(e, "");
    }
    function Vw(e, t, a) {
      e.nodeValue = a;
    }
    function Bw(e, t) {
      e.appendChild(t);
    }
    function $w(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _h(a);
    }
    function Iw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Yw(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Qw(e, t) {
      e.removeChild(t);
    }
    function Ww(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Oh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === Dh || s === op || s === sp) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function Gw(e, t) {
      e.nodeType === Mn ? Vy(e.parentNode, t) : e.nodeType === Wr && Vy(e, t), Du(e);
    }
    function qw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Kw(e) {
      e.nodeValue = "";
    }
    function Xw(e, t) {
      e = e;
      var a = t[xw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function Zw(e, t) {
      e.nodeValue = t;
    }
    function Jw(e) {
      e.nodeType === Wr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function e1(e, t, a) {
      return e.nodeType !== Wr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function t1(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function n1(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function GE(e) {
      return e.data === op;
    }
    function By(e) {
      return e.data === sp;
    }
    function r1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function a1(e, t) {
      e._reactRetry = t;
    }
    function Nh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Wr || t === Ii)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Dh || a === sp || a === op)
            break;
          if (a === Oh)
            return null;
        }
      }
      return e;
    }
    function cp(e) {
      return Nh(e.nextSibling);
    }
    function i1(e) {
      return Nh(e.firstChild);
    }
    function l1(e) {
      return Nh(e.firstChild);
    }
    function u1(e) {
      return Nh(e.nextSibling);
    }
    function o1(e, t, a, i, u, s, f) {
      dp(s, e), Yy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ht) !== Me;
      return yw(e, t, a, p, i, y, f);
    }
    function s1(e, t, a, i) {
      return dp(a, e), a.mode & ht, gw(e, t);
    }
    function c1(e, t) {
      dp(t, e);
    }
    function f1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Oh) {
            if (a === 0)
              return cp(t);
            a--;
          } else (i === Dh || i === sp || i === op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function qE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Dh || i === sp || i === op) {
            if (a === 0)
              return t;
            a--;
          } else i === Oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function d1(e) {
      Du(e);
    }
    function p1(e) {
      Du(e);
    }
    function v1(e) {
      return e !== "head" && e !== "body";
    }
    function h1(e, t, a, i) {
      var u = !0;
      bh(t.nodeValue, a, i, u);
    }
    function m1(e, t, a, i, u, s) {
      if (t[kh] !== !0) {
        var f = !0;
        bh(i.nodeValue, u, s, f);
      }
    }
    function y1(e, t) {
      t.nodeType === Wr ? Ly(e, t) : t.nodeType === Mn || My(e, t);
    }
    function g1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Wr ? Ly(a, t) : t.nodeType === Mn || My(a, t));
      }
    }
    function S1(e, t, a, i, u) {
      (u || t[kh] !== !0) && (i.nodeType === Wr ? Ly(a, i) : i.nodeType === Mn || My(a, i));
    }
    function E1(e, t, a) {
      Uy(e, t);
    }
    function C1(e, t) {
      zy(e, t);
    }
    function R1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Uy(i, t);
      }
    }
    function T1(e, t) {
      {
        var a = e.parentNode;
        a !== null && zy(a, t);
      }
    }
    function w1(e, t, a, i, u, s) {
      (s || t[kh] !== !0) && Uy(a, i);
    }
    function x1(e, t, a, i, u) {
      (u || t[kh] !== !0) && zy(a, i);
    }
    function b1(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function _1(e) {
      np(e);
    }
    var Cf = Math.random().toString(36).slice(2), Rf = "__reactFiber$" + Cf, $y = "__reactProps$" + Cf, fp = "__reactContainer$" + Cf, Iy = "__reactEvents$" + Cf, k1 = "__reactListeners$" + Cf, D1 = "__reactHandles$" + Cf;
    function O1(e) {
      delete e[Rf], delete e[$y], delete e[Iy], delete e[k1], delete e[D1];
    }
    function dp(e, t) {
      t[Rf] = e;
    }
    function Lh(e, t) {
      t[fp] = e;
    }
    function KE(e) {
      e[fp] = null;
    }
    function pp(e) {
      return !!e[fp];
    }
    function Qs(e) {
      var t = e[Rf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fp] || a[Rf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = qE(e); u !== null; ) {
              var s = u[Rf];
              if (s)
                return s;
              u = qE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[Rf] || e[fp];
      return t && (t.tag === ae || t.tag === ze || t.tag === Ne || t.tag === K) ? t : null;
    }
    function Tf(e) {
      if (e.tag === ae || e.tag === ze)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[$y] || null;
    }
    function Yy(e, t) {
      e[$y] = t;
    }
    function N1(e) {
      var t = e[Iy];
      return t === void 0 && (t = e[Iy] = /* @__PURE__ */ new Set()), t;
    }
    var XE = {}, ZE = T.ReactDebugCurrentFrame;
    function Uh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        ZE.setExtraStackFrame(a);
      } else
        ZE.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(br);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Uh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Uh(null)), p instanceof Error && !(p.message in XE) && (XE[p.message] = !0, Uh(u), g("Failed %s type: %s", a, p.message), Uh(null));
          }
      }
    }
    var Qy = [], zh;
    zh = [];
    var zu = -1;
    function Lo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (zu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== zh[zu] && g("Unexpected Fiber popped."), e.current = Qy[zu], Qy[zu] = null, zh[zu] = null, zu--;
    }
    function ia(e, t, a) {
      zu++, Qy[zu] = e.current, zh[zu] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var ui = {};
    Object.freeze(ui);
    var Au = Lo(ui), $l = Lo(!1), Gy = ui;
    function wf(e, t, a) {
      return a && Il(t) ? Gy : Au.current;
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function xf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = qe(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && JE(e, t, s), s;
      }
    }
    function Ah() {
      return $l.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Fh(e) {
      aa($l, e), aa(Au, e);
    }
    function qy(e) {
      aa($l, e), aa(Au, e);
    }
    function eC(e, t, a) {
      {
        if (Au.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Au, t, e), ia($l, a, e);
      }
    }
    function tC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = qe(e) || "Unknown";
            Wy[s] || (Wy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = qe(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Gy = Au.current, ia(Au, a, e), ia($l, $l.current, e), !0;
      }
    }
    function nC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = tC(e, t, Gy);
          i.__reactInternalMemoizedMergedChildContext = u, aa($l, e), aa(Au, e), ia(Au, u, e), ia($l, a, e);
        } else
          aa($l, e), ia($l, a, e);
      }
    }
    function L1(e) {
      {
        if (!hu(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case K:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mo = 0, Hh = 1, Fu = null, Ky = !1, Xy = !1;
    function rC(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function M1(e) {
      Ky = !0, rC(e);
    }
    function aC() {
      Ky && Uo();
    }
    function Uo() {
      if (!Xy && Fu !== null) {
        Xy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = Fu;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, Ky = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), md(fs, Uo), s;
        } finally {
          jn(t), Xy = !1;
        }
      }
      return null;
    }
    var bf = [], _f = 0, Ph = null, Vh = 0, Li = [], Mi = 0, Ws = null, ju = 1, Hu = "";
    function U1(e) {
      return qs(), (e.flags & Ri) !== Le;
    }
    function z1(e) {
      return qs(), Vh;
    }
    function A1() {
      var e = Hu, t = ju, a = t & ~F1(t);
      return a.toString(32) + e;
    }
    function Gs(e, t) {
      qs(), bf[_f++] = Vh, bf[_f++] = Ph, Ph = e, Vh = t;
    }
    function iC(e, t, a) {
      qs(), Li[Mi++] = ju, Li[Mi++] = Hu, Li[Mi++] = Ws, Ws = e;
      var i = ju, u = Hu, s = Bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, S = (1 << y) - 1, _ = (f & S).toString(32), x = f >> y, U = s - y, F = Bh(t) + U, P = p << U, pe = P | x, je = _ + u;
        ju = 1 << F | pe, Hu = je;
      } else {
        var ke = p << s, wt = ke | f, St = u;
        ju = 1 << v | wt, Hu = St;
      }
    }
    function Zy(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Gs(e, a), iC(e, a, i);
      }
    }
    function Bh(e) {
      return 32 - An(e);
    }
    function F1(e) {
      return 1 << Bh(e) - 1;
    }
    function Jy(e) {
      for (; e === Ph; )
        Ph = bf[--_f], bf[_f] = null, Vh = bf[--_f], bf[_f] = null;
      for (; e === Ws; )
        Ws = Li[--Mi], Li[Mi] = null, Hu = Li[--Mi], Li[Mi] = null, ju = Li[--Mi], Li[Mi] = null;
    }
    function j1() {
      return qs(), Ws !== null ? {
        id: ju,
        overflow: Hu
      } : null;
    }
    function H1(e, t) {
      qs(), Li[Mi++] = ju, Li[Mi++] = Hu, Li[Mi++] = Ws, ju = t.id, Hu = t.overflow, Ws = e;
    }
    function qs() {
      Fr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, Ui = null, rl = !1, Ks = !1, zo = null;
    function P1() {
      rl && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function lC() {
      Ks = !0;
    }
    function V1() {
      return Ks;
    }
    function B1(e) {
      var t = e.stateNode.containerInfo;
      return Ui = l1(t), Ar = e, rl = !0, zo = null, Ks = !1, !0;
    }
    function $1(e, t, a) {
      return Ui = u1(t), Ar = e, rl = !0, zo = null, Ks = !1, a !== null && H1(e, a), !0;
    }
    function uC(e, t) {
      switch (e.tag) {
        case K: {
          y1(e.stateNode.containerInfo, t);
          break;
        }
        case ae: {
          var a = (e.mode & ht) !== Me;
          S1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ne: {
          var i = e.memoizedState;
          i.dehydrated !== null && g1(i.dehydrated, t);
          break;
        }
      }
    }
    function oC(e, t) {
      uC(e, t);
      var a = W_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function eg(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case K: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ae:
                var i = t.type;
                t.pendingProps, E1(a, i);
                break;
              case ze:
                var u = t.pendingProps;
                C1(a, u);
                break;
            }
            break;
          }
          case ae: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ae: {
                var v = t.type, y = t.pendingProps, S = (e.mode & ht) !== Me;
                w1(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  S
                );
                break;
              }
              case ze: {
                var _ = t.pendingProps, x = (e.mode & ht) !== Me;
                x1(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case Ne: {
            var U = e.memoizedState, F = U.dehydrated;
            if (F !== null) switch (t.tag) {
              case ae:
                var P = t.type;
                t.pendingProps, R1(F, P);
                break;
              case ze:
                var pe = t.pendingProps;
                T1(F, pe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function sC(e, t) {
      t.flags = t.flags & ~qr | mn, eg(e, t);
    }
    function cC(e, t) {
      switch (e.tag) {
        case ae: {
          var a = e.type;
          e.pendingProps;
          var i = e1(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, Ui = i1(i), !0) : !1;
        }
        case ze: {
          var u = e.pendingProps, s = t1(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, Ui = null, !0) : !1;
        }
        case Ne: {
          var f = n1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: j1(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = G_(f);
            return v.return = e, e.child = v, Ar = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function tg(e) {
      return (e.mode & ht) !== Me && (e.flags & De) === Le;
    }
    function ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function rg(e) {
      if (rl) {
        var t = Ui;
        if (!t) {
          tg(e) && (eg(Ar, e), ng()), sC(Ar, e), rl = !1, Ar = e;
          return;
        }
        var a = t;
        if (!cC(e, t)) {
          tg(e) && (eg(Ar, e), ng()), t = cp(a);
          var i = Ar;
          if (!t || !cC(e, t)) {
            sC(Ar, e), rl = !1, Ar = e;
            return;
          }
          oC(i, a);
        }
      }
    }
    function I1(e, t, a) {
      var i = e.stateNode, u = !Ks, s = o1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Y1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = s1(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case K: {
              var s = u.stateNode.containerInfo, f = (u.mode & ht) !== Me;
              h1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ae: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, S = (u.mode & ht) !== Me;
              m1(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                S
              );
              break;
            }
          }
      }
      return i;
    }
    function Q1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      c1(a, e);
    }
    function W1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return f1(a);
    }
    function fC(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== K && t.tag !== Ne; )
        t = t.return;
      Ar = t;
    }
    function $h(e) {
      if (e !== Ar)
        return !1;
      if (!rl)
        return fC(e), rl = !0, !1;
      if (e.tag !== K && (e.tag !== ae || v1(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (tg(e))
            dC(e), ng();
          else
            for (; t; )
              oC(e, t), t = cp(t);
      }
      return fC(e), e.tag === Ne ? Ui = W1(e) : Ui = Ar ? cp(e.stateNode) : null, !0;
    }
    function G1() {
      return rl && Ui !== null;
    }
    function dC(e) {
      for (var t = Ui; t; )
        uC(e, t), t = cp(t);
    }
    function kf() {
      Ar = null, Ui = null, rl = !1, Ks = !1;
    }
    function pC() {
      zo !== null && (lR(zo), zo = null);
    }
    function Fr() {
      return rl;
    }
    function ag(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var q1 = T.ReactCurrentBatchConfig, K1 = null;
    function X1() {
      return q1.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Z1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qt && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], Zs = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Zs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          e.add(qe(x) || "Component"), Zs.add(x.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          t.add(qe(x) || "Component"), Zs.add(x.type);
        }), hp = []);
        var a = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          a.add(qe(x) || "Component"), Zs.add(x.type);
        }), mp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(x) {
          i.add(qe(x) || "Component"), Zs.add(x.type);
        }), yp = []);
        var u = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(x) {
          u.add(qe(x) || "Component"), Zs.add(x.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(x) {
          s.add(qe(x) || "Component"), Zs.add(x.type);
        }), Sp = []), t.size > 0) {
          var f = Xs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Xs(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Xs(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Xs(e);
          J(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var S = Xs(a);
          J(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (u.size > 0) {
          var _ = Xs(u);
          J(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), vC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = Z1(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!vC.has(e.type)) {
          var i = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ih.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(qe(s) || "Component"), vC.add(s.type);
            });
            var u = Xs(i);
            try {
              Qt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              cn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    var ig, lg, ug, og, sg, hC = function(e, t) {
    };
    ig = !1, lg = !1, ug = {}, og = {}, sg = {}, hC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = qe(t) || "Component";
        og[a] || (og[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function J1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qt || B) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !J1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = qe(e) || "Component";
          ug[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ug[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var S = function(_) {
            var x = v.refs;
            _ === null ? delete x[y] : x[y] = _;
          };
          return S._stringRef = y, S;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qh(e) {
      {
        var t = qe(e) || "Component";
        if (sg[t])
          return;
        sg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function mC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function yC(e) {
      function t(O, V) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [V], O.flags |= Da) : N.push(V);
        }
      }
      function a(O, V) {
        if (!e)
          return null;
        for (var N = V; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, V) {
        for (var N = /* @__PURE__ */ new Map(), Z = V; Z !== null; )
          Z.key !== null ? N.set(Z.key, Z) : N.set(Z.index, Z), Z = Z.sibling;
        return N;
      }
      function u(O, V) {
        var N = uc(O, V);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, V, N) {
        if (O.index = N, !e)
          return O.flags |= Ri, V;
        var Z = O.alternate;
        if (Z !== null) {
          var ye = Z.index;
          return ye < V ? (O.flags |= mn, V) : ye;
        } else
          return O.flags |= mn, V;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= mn), O;
      }
      function p(O, V, N, Z) {
        if (V === null || V.tag !== ze) {
          var ye = aE(N, O.mode, Z);
          return ye.return = O, ye;
        } else {
          var ve = u(V, N);
          return ve.return = O, ve;
        }
      }
      function v(O, V, N, Z) {
        var ye = N.type;
        if (ye === di)
          return S(O, V, N.props.children, Z, N.key);
        if (V !== null && (V.elementType === ye || // Keep this check inline so it only runs on the false path:
        RR(V, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Ke && mC(ye) === V.type)) {
          var ve = u(V, N.props);
          return ve.ref = Ep(O, V, N), ve.return = O, ve._debugSource = N._source, ve._debugOwner = N._owner, ve;
        }
        var Qe = rE(N, O.mode, Z);
        return Qe.ref = Ep(O, V, N), Qe.return = O, Qe;
      }
      function y(O, V, N, Z) {
        if (V === null || V.tag !== Se || V.stateNode.containerInfo !== N.containerInfo || V.stateNode.implementation !== N.implementation) {
          var ye = iE(N, O.mode, Z);
          return ye.return = O, ye;
        } else {
          var ve = u(V, N.children || []);
          return ve.return = O, ve;
        }
      }
      function S(O, V, N, Z, ye) {
        if (V === null || V.tag !== nt) {
          var ve = Qo(N, O.mode, Z, ye);
          return ve.return = O, ve;
        } else {
          var Qe = u(V, N);
          return Qe.return = O, Qe;
        }
      }
      function _(O, V, N) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var Z = aE("" + V, O.mode, N);
          return Z.return = O, Z;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case kr: {
              var ye = rE(V, O.mode, N);
              return ye.ref = Ep(O, null, V), ye.return = O, ye;
            }
            case ar: {
              var ve = iE(V, O.mode, N);
              return ve.return = O, ve;
            }
            case Ke: {
              var Qe = V._payload, Je = V._init;
              return _(O, Je(Qe), N);
            }
          }
          if (ct(V) || tt(V)) {
            var Xt = Qo(V, O.mode, N, null);
            return Xt.return = O, Xt;
          }
          Yh(O, V);
        }
        return typeof V == "function" && Qh(O), null;
      }
      function x(O, V, N, Z) {
        var ye = V !== null ? V.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ye !== null ? null : p(O, V, "" + N, Z);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case kr:
              return N.key === ye ? v(O, V, N, Z) : null;
            case ar:
              return N.key === ye ? y(O, V, N, Z) : null;
            case Ke: {
              var ve = N._payload, Qe = N._init;
              return x(O, V, Qe(ve), Z);
            }
          }
          if (ct(N) || tt(N))
            return ye !== null ? null : S(O, V, N, Z, null);
          Yh(O, N);
        }
        return typeof N == "function" && Qh(O), null;
      }
      function U(O, V, N, Z, ye) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var ve = O.get(N) || null;
          return p(V, ve, "" + Z, ye);
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case kr: {
              var Qe = O.get(Z.key === null ? N : Z.key) || null;
              return v(V, Qe, Z, ye);
            }
            case ar: {
              var Je = O.get(Z.key === null ? N : Z.key) || null;
              return y(V, Je, Z, ye);
            }
            case Ke:
              var Xt = Z._payload, zt = Z._init;
              return U(O, V, N, zt(Xt), ye);
          }
          if (ct(Z) || tt(Z)) {
            var qn = O.get(N) || null;
            return S(V, qn, Z, ye, null);
          }
          Yh(V, Z);
        }
        return typeof Z == "function" && Qh(V), null;
      }
      function F(O, V, N) {
        {
          if (typeof O != "object" || O === null)
            return V;
          switch (O.$$typeof) {
            case kr:
            case ar:
              hC(O, N);
              var Z = O.key;
              if (typeof Z != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(Z);
                break;
              }
              if (!V.has(Z)) {
                V.add(Z);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
              break;
            case Ke:
              var ye = O._payload, ve = O._init;
              F(ve(ye), V, N);
              break;
          }
        }
        return V;
      }
      function P(O, V, N, Z) {
        for (var ye = null, ve = 0; ve < N.length; ve++) {
          var Qe = N[ve];
          ye = F(Qe, ye, O);
        }
        for (var Je = null, Xt = null, zt = V, qn = 0, At = 0, Vn = null; zt !== null && At < N.length; At++) {
          zt.index > At ? (Vn = zt, zt = null) : Vn = zt.sibling;
          var ua = x(O, zt, N[At], Z);
          if (ua === null) {
            zt === null && (zt = Vn);
            break;
          }
          e && zt && ua.alternate === null && t(O, zt), qn = s(ua, qn, At), Xt === null ? Je = ua : Xt.sibling = ua, Xt = ua, zt = Vn;
        }
        if (At === N.length) {
          if (a(O, zt), Fr()) {
            var Ir = At;
            Gs(O, Ir);
          }
          return Je;
        }
        if (zt === null) {
          for (; At < N.length; At++) {
            var si = _(O, N[At], Z);
            si !== null && (qn = s(si, qn, At), Xt === null ? Je = si : Xt.sibling = si, Xt = si);
          }
          if (Fr()) {
            var Ra = At;
            Gs(O, Ra);
          }
          return Je;
        }
        for (var Ta = i(O, zt); At < N.length; At++) {
          var oa = U(Ta, O, At, N[At], Z);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? At : oa.key), qn = s(oa, qn, At), Xt === null ? Je = oa : Xt.sibling = oa, Xt = oa);
        }
        if (e && Ta.forEach(function(Wf) {
          return t(O, Wf);
        }), Fr()) {
          var Qu = At;
          Gs(O, Qu);
        }
        return Je;
      }
      function pe(O, V, N, Z) {
        var ye = tt(N);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (lg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lg = !0), N.entries === ye && (ig || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ig = !0);
          var ve = ye.call(N);
          if (ve)
            for (var Qe = null, Je = ve.next(); !Je.done; Je = ve.next()) {
              var Xt = Je.value;
              Qe = F(Xt, Qe, O);
            }
        }
        var zt = ye.call(N);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, At = null, Vn = V, ua = 0, Ir = 0, si = null, Ra = zt.next(); Vn !== null && !Ra.done; Ir++, Ra = zt.next()) {
          Vn.index > Ir ? (si = Vn, Vn = null) : si = Vn.sibling;
          var Ta = x(O, Vn, Ra.value, Z);
          if (Ta === null) {
            Vn === null && (Vn = si);
            break;
          }
          e && Vn && Ta.alternate === null && t(O, Vn), ua = s(Ta, ua, Ir), At === null ? qn = Ta : At.sibling = Ta, At = Ta, Vn = si;
        }
        if (Ra.done) {
          if (a(O, Vn), Fr()) {
            var oa = Ir;
            Gs(O, oa);
          }
          return qn;
        }
        if (Vn === null) {
          for (; !Ra.done; Ir++, Ra = zt.next()) {
            var Qu = _(O, Ra.value, Z);
            Qu !== null && (ua = s(Qu, ua, Ir), At === null ? qn = Qu : At.sibling = Qu, At = Qu);
          }
          if (Fr()) {
            var Wf = Ir;
            Gs(O, Wf);
          }
          return qn;
        }
        for (var Zp = i(O, Vn); !Ra.done; Ir++, Ra = zt.next()) {
          var Zl = U(Zp, O, Ir, Ra.value, Z);
          Zl !== null && (e && Zl.alternate !== null && Zp.delete(Zl.key === null ? Ir : Zl.key), ua = s(Zl, ua, Ir), At === null ? qn = Zl : At.sibling = Zl, At = Zl);
        }
        if (e && Zp.forEach(function(xk) {
          return t(O, xk);
        }), Fr()) {
          var wk = Ir;
          Gs(O, wk);
        }
        return qn;
      }
      function je(O, V, N, Z) {
        if (V !== null && V.tag === ze) {
          a(O, V.sibling);
          var ye = u(V, N);
          return ye.return = O, ye;
        }
        a(O, V);
        var ve = aE(N, O.mode, Z);
        return ve.return = O, ve;
      }
      function ke(O, V, N, Z) {
        for (var ye = N.key, ve = V; ve !== null; ) {
          if (ve.key === ye) {
            var Qe = N.type;
            if (Qe === di) {
              if (ve.tag === nt) {
                a(O, ve.sibling);
                var Je = u(ve, N.props.children);
                return Je.return = O, Je._debugSource = N._source, Je._debugOwner = N._owner, Je;
              }
            } else if (ve.elementType === Qe || // Keep this check inline so it only runs on the false path:
            RR(ve, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Qe == "object" && Qe !== null && Qe.$$typeof === Ke && mC(Qe) === ve.type) {
              a(O, ve.sibling);
              var Xt = u(ve, N.props);
              return Xt.ref = Ep(O, ve, N), Xt.return = O, Xt._debugSource = N._source, Xt._debugOwner = N._owner, Xt;
            }
            a(O, ve);
            break;
          } else
            t(O, ve);
          ve = ve.sibling;
        }
        if (N.type === di) {
          var zt = Qo(N.props.children, O.mode, Z, N.key);
          return zt.return = O, zt;
        } else {
          var qn = rE(N, O.mode, Z);
          return qn.ref = Ep(O, V, N), qn.return = O, qn;
        }
      }
      function wt(O, V, N, Z) {
        for (var ye = N.key, ve = V; ve !== null; ) {
          if (ve.key === ye)
            if (ve.tag === Se && ve.stateNode.containerInfo === N.containerInfo && ve.stateNode.implementation === N.implementation) {
              a(O, ve.sibling);
              var Qe = u(ve, N.children || []);
              return Qe.return = O, Qe;
            } else {
              a(O, ve);
              break;
            }
          else
            t(O, ve);
          ve = ve.sibling;
        }
        var Je = iE(N, O.mode, Z);
        return Je.return = O, Je;
      }
      function St(O, V, N, Z) {
        var ye = typeof N == "object" && N !== null && N.type === di && N.key === null;
        if (ye && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case kr:
              return f(ke(O, V, N, Z));
            case ar:
              return f(wt(O, V, N, Z));
            case Ke:
              var ve = N._payload, Qe = N._init;
              return St(O, V, Qe(ve), Z);
          }
          if (ct(N))
            return P(O, V, N, Z);
          if (tt(N))
            return pe(O, V, N, Z);
          Yh(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(je(O, V, "" + N, Z)) : (typeof N == "function" && Qh(O), a(O, V));
      }
      return St;
    }
    var Df = yC(!0), gC = yC(!1);
    function ex(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = uc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = uc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function tx(e, t) {
      for (var a = e.child; a !== null; )
        B_(a, t), a = a.sibling;
    }
    var cg = Lo(null), fg;
    fg = {};
    var Wh = null, Of = null, dg = null, Gh = !1;
    function qh() {
      Wh = null, Of = null, dg = null, Gh = !1;
    }
    function SC() {
      Gh = !0;
    }
    function EC() {
      Gh = !1;
    }
    function CC(e, t, a) {
      ia(cg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fg;
    }
    function pg(e, t) {
      var a = cg.current;
      aa(cg, t), e._currentValue = a;
    }
    function vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = at(u.childLanes, t)) : (i.childLanes = at(i.childLanes, t), u !== null && (u.childLanes = at(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function nx(e, t, a) {
      rx(e, t, a);
    }
    function rx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = xs(a), v = Pu(Zt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var S = y.shared, _ = S.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), S.pending = v;
                }
              }
              i.lanes = at(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = at(x.lanes, a)), vg(i.return, a, e), s.lanes = at(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ze)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = at(U.lanes, a);
          var F = U.alternate;
          F !== null && (F.lanes = at(F.lanes, a)), vg(U, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nf(e, t) {
      Wh = e, Of = null, dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function nr(e) {
      Gh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Of === null) {
          if (Wh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Of = a, Wh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Of = Of.next = a;
      }
      return t;
    }
    var Js = null;
    function hg(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function ax() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function RC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function ix(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function lx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Ha(e, t) {
      return Kh(e, t);
    }
    var ux = Kh;
    function Kh(e, t) {
      e.lanes = at(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = at(a.lanes, t)), a === null && (e.flags & (mn | qr)) !== Le && gR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = at(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = at(a.childLanes, t) : (u.flags & (mn | qr)) !== Le && gR(e), i = u, u = u.return;
      if (i.tag === K) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var TC = 0, wC = 1, Xh = 2, mg = 3, Zh = !1, yg, Jh;
    yg = !1, Jh = null;
    function gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function xC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: TC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ao(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !yg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), yg = !0), i_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, ux(e, a);
      } else
        return lx(e, u, t, a);
    }
    function em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = zd(s, e.pendingLanes);
          var f = at(s, a);
          u.lanes = f, nf(e, f);
        }
      }
    }
    function Sg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var S = a.lastBaseUpdate;
      S === null ? a.firstBaseUpdate = t : S.next = t, a.lastBaseUpdate = t;
    }
    function ox(e, t, a, i, u, s) {
      switch (a.tag) {
        case wC: {
          var f = a.payload;
          if (typeof f == "function") {
            SC();
            var p = f.call(s, i, u);
            {
              if (e.mode & qt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              EC();
            }
            return p;
          }
          return f;
        }
        case mg:
          e.flags = e.flags & ~Zn | De;
        case TC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            SC(), y = v.call(s, i, u);
            {
              if (e.mode & qt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              EC();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case Xh:
          return Zh = !0, i;
      }
      return i;
    }
    function tm(e, t, a, i) {
      var u = e.updateQueue;
      Zh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var S = e.alternate;
        if (S !== null) {
          var _ = S.updateQueue, x = _.lastBaseUpdate;
          x !== f && (x === null ? _.firstBaseUpdate = y : x.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, F = Y, P = null, pe = null, je = null, ke = s;
        do {
          var wt = ke.lane, St = ke.eventTime;
          if (ku(i, wt)) {
            if (je !== null) {
              var V = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              je = je.next = V;
            }
            U = ox(e, u, ke, U, t, a);
            var N = ke.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== Dt) {
              e.flags |= an;
              var Z = u.effects;
              Z === null ? u.effects = [ke] : Z.push(ke);
            }
          } else {
            var O = {
              eventTime: St,
              lane: wt,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            je === null ? (pe = je = O, P = U) : je = je.next = O, F = at(F, wt);
          }
          if (ke = ke.next, ke === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, ve = ye.next;
            ye.next = null, ke = ve, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        je === null && (P = U), u.baseState = P, u.firstBaseUpdate = pe, u.lastBaseUpdate = je;
        var Qe = u.shared.interleaved;
        if (Qe !== null) {
          var Je = Qe;
          do
            F = at(F, Je.lane), Je = Je.next;
          while (Je !== Qe);
        } else s === null && (u.shared.lanes = Y);
        Wp(F), e.lanes = F, e.memoizedState = U;
      }
      Jh = null;
    }
    function sx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function bC() {
      Zh = !1;
    }
    function nm() {
      return Zh;
    }
    function _C(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, sx(f, a));
        }
    }
    var Cp = {}, Fo = Lo(Cp), Rp = Lo(Cp), rm = Lo(Cp);
    function am(e) {
      if (e === Cp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function kC() {
      var e = am(rm.current);
      return e;
    }
    function Eg(e, t) {
      ia(rm, t, e), ia(Rp, e, e), ia(Fo, Cp, e);
      var a = bw(t);
      aa(Fo, e), ia(Fo, a, e);
    }
    function Lf(e) {
      aa(Fo, e), aa(Rp, e), aa(rm, e);
    }
    function Cg() {
      var e = am(Fo.current);
      return e;
    }
    function DC(e) {
      am(rm.current);
      var t = am(Fo.current), a = _w(t, e.type);
      t !== a && (ia(Rp, e, e), ia(Fo, a, e));
    }
    function Rg(e) {
      Rp.current === e && (aa(Fo, e), aa(Rp, e));
    }
    var cx = 0, OC = 1, NC = 1, Tp = 2, il = Lo(cx);
    function Tg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & OC;
    }
    function wg(e, t) {
      return e & OC | t;
    }
    function fx(e, t) {
      return e | t;
    }
    function jo(e, t) {
      ia(il, t, e);
    }
    function Uf(e) {
      aa(il, e);
    }
    function dx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ne) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || GE(i) || By(i))
              return t;
          }
        } else if (t.tag === un && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & De) !== Le;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pa = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), xg = [];
    function bg() {
      for (var e = 0; e < xg.length; e++) {
        var t = xg[e];
        t._workInProgressVersionPrimary = null;
      }
      xg.length = 0;
    }
    function px(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = T.ReactCurrentDispatcher, wp = T.ReactCurrentBatchConfig, _g, zf;
    _g = /* @__PURE__ */ new Set();
    var ec = Y, Kt = null, pr = null, vr = null, lm = !1, xp = !1, bp = 0, vx = 0, hx = 25, $ = null, zi = null, Ho = -1, kg = !1;
    function Vt() {
      {
        var e = $;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function oe() {
      {
        var e = $;
        zi !== null && (Ho++, zi[Ho] !== e && mx(e));
      }
    }
    function Af(e) {
      e != null && !ct(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", $, typeof e);
    }
    function mx(e) {
      {
        var t = qe(Kt);
        if (!_g.has(t) && (_g.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ho; u++) {
            for (var s = zi[u], f = u === Ho ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Dg(e, t) {
      if (kg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!q(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      ec = s, Kt = t, zi = e !== null ? e._debugHookTypes : null, Ho = -1, kg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? me.current = JC : zi !== null ? me.current = ZC : me.current = XC;
      var f = a(i, u);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, bp = 0, p >= hx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, kg = !1, pr = null, vr = null, t.updateQueue = null, Ho = -1, me.current = e0, f = a(i, u);
        } while (xp);
      }
      me.current = Sm, t._debugHookTypes = zi;
      var v = pr !== null && pr.next !== null;
      if (ec = Y, Kt = null, pr = null, vr = null, $ = null, zi = null, Ho = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ht) !== Me && g("Internal React error: Expected static flag was missing. Please notify the React team."), lm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = bp !== 0;
      return bp = 0, e;
    }
    function LC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Mt) !== Me ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = bs(e.lanes, a);
    }
    function MC() {
      if (me.current = Sm, lm) {
        for (var e = Kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lm = !1;
      }
      ec = Y, Kt = null, pr = null, vr = null, zi = null, Ho = -1, $ = null, QC = !1, xp = !1, bp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? Kt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function Ai() {
      var e;
      if (pr === null) {
        var t = Kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = Kt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? Kt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function UC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Og(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ng(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Ex.bind(null, Kt, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var S = f.next, _ = s.baseState, x = null, U = null, F = null, P = S;
        do {
          var pe = P.lane;
          if (ku(ec, pe)) {
            if (F !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              F = F.next = ke;
            }
            if (P.hasEagerState)
              _ = P.eagerState;
            else {
              var wt = P.action;
              _ = e(_, wt);
            }
          } else {
            var je = {
              lane: pe,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            F === null ? (U = F = je, x = _) : F = F.next = je, Kt.lanes = at(Kt.lanes, pe), Wp(pe);
          }
          P = P.next;
        } while (P !== null && P !== S);
        F === null ? x = _ : F.next = U, q(_, i.memoizedState) || zp(), i.memoizedState = _, i.baseState = x, i.baseQueue = F, u.lastRenderedState = _;
      }
      var St = u.interleaved;
      if (St !== null) {
        var O = St;
        do {
          var V = O.lane;
          Kt.lanes = at(Kt.lanes, V), Wp(V), O = O.next;
        } while (O !== St);
      } else f === null && (u.lanes = Y);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function Mg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var S = y.action;
          p = e(p, S), y = y.next;
        } while (y !== v);
        q(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function oD(e, t, a) {
    }
    function sD(e, t, a) {
    }
    function Ug(e, t, a) {
      var i = Kt, u = Ql(), s, f = Fr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          q(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(v, ec) || zC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, fm(FC.bind(null, i, y, e), [e]), i.flags |= Gr, _p(fr | jr, AC.bind(null, i, y, s, t), void 0, null), s;
    }
    function um(e, t, a) {
      var i = Kt, u = Ai(), s = t();
      if (!zf) {
        var f = t();
        q(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = u.memoizedState, v = !q(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (Dp(FC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= Gr, _p(fr | jr, AC.bind(null, i, y, s, t), void 0, null);
        var S = jm();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(S, ec) || zC(i, t, s);
      }
      return s;
    }
    function zC(e, t, a) {
      e.flags |= mo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Kt.updateQueue;
      if (u === null)
        u = UC(), Kt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function AC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, jC(t) && HC(e);
    }
    function FC(e, t, a) {
      var i = function() {
        jC(t) && HC(e);
      };
      return a(i);
    }
    function jC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !q(a, i);
      } catch {
        return !0;
      }
    }
    function HC(e) {
      var t = Ha(e, $e);
      t !== null && gr(t, e, $e, Zt);
    }
    function om(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Og,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Cx.bind(null, Kt, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Lg(Og);
    }
    function Ag(e) {
      return Mg(Og);
    }
    function _p(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Kt.updateQueue;
      if (s === null)
        s = UC(), Kt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Fg(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function sm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function kp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      Kt.flags |= e, u.memoizedState = _p(fr | t, a, void 0, s);
    }
    function cm(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Dg(s, v)) {
            u.memoizedState = _p(t, a, f, s);
            return;
          }
        }
      }
      Kt.flags |= e, u.memoizedState = _p(fr | t, a, f, s);
    }
    function fm(e, t) {
      return (Kt.mode & Mt) !== Me ? kp(Ti | Gr | _c, jr, e, t) : kp(Gr | _c, jr, e, t);
    }
    function Dp(e, t) {
      return cm(Gr, jr, e, t);
    }
    function jg(e, t) {
      return kp(Ct, Yl, e, t);
    }
    function dm(e, t) {
      return cm(Ct, Yl, e, t);
    }
    function Hg(e, t) {
      var a = Ct;
      return a |= Wi, (Kt.mode & Mt) !== Me && (a |= _l), kp(a, dr, e, t);
    }
    function pm(e, t) {
      return cm(Ct, dr, e, t);
    }
    function PC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Pg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= Wi, (Kt.mode & Mt) !== Me && (u |= _l), kp(u, dr, PC.bind(null, t, e), i);
    }
    function vm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return cm(Ct, dr, PC.bind(null, t, e), i);
    }
    function yx(e, t) {
    }
    var hm = yx;
    function Vg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function mm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Bg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function ym(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function $g(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function VC(e) {
      var t = Ai(), a = pr, i = a.memoizedState;
      return $C(t, i, e);
    }
    function BC(e) {
      var t = Ai();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return $C(t, a, e);
    }
    function $C(e, t, a) {
      var i = !Nd(ec);
      if (i) {
        if (!q(a, t)) {
          var u = Ud();
          Kt.lanes = at(Kt.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function gx(e, t, a) {
      var i = Aa();
      jn(Gv(i, _i)), e(!0);
      var u = wp.transition;
      wp.transition = {};
      var s = wp.transition;
      wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), wp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && J("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Ig() {
      var e = om(!1), t = e[0], a = e[1], i = gx.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function IC() {
      var e = zg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function YC() {
      var e = Ag(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var QC = !1;
    function Sx() {
      return QC;
    }
    function Yg() {
      var e = Ql(), t = jm(), a = t.identifierPrefix, i;
      if (Fr()) {
        var u = A1();
        i = ":" + a + "R" + u;
        var s = bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = vx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function gm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function Ex(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (WC(e))
        GC(t, u);
      else {
        var s = RC(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          gr(s, e, i, f), qC(s, t, i);
        }
      }
      KC(e, i);
    }
    function Cx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (WC(e))
        GC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, q(y, v)) {
                ix(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var S = RC(e, t, u, i);
        if (S !== null) {
          var _ = Ca();
          gr(S, e, i, _), qC(S, t, i);
        }
      }
      KC(e, i);
    }
    function WC(e) {
      var t = e.alternate;
      return e === Kt || t !== null && t === Kt;
    }
    function GC(e, t) {
      xp = lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function qC(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = zd(i, e.pendingLanes);
        var u = at(i, a);
        t.lanes = u, nf(e, u);
      }
    }
    function KC(e, t, a) {
      ms(e, t);
    }
    var Sm = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: ne
    }, XC = null, ZC = null, JC = null, e0 = null, Wl = null, ll = null, Em = null;
    {
      var Qg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      XC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Vt(), Af(t), Vg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Vt(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Vt(), Af(t), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Vt(), Af(a), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Vt(), Af(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Vt(), Af(t), Hg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Vt(), Af(t);
          var a = me.current;
          me.current = Wl;
          try {
            return Bg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Vt();
          var i = me.current;
          me.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Vt(), Fg(e);
        },
        useState: function(e) {
          $ = "useState", Vt();
          var t = me.current;
          me.current = Wl;
          try {
            return om(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Vt(), $g(e);
        },
        useTransition: function() {
          return $ = "useTransition", Vt(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Vt(), Ug(e, t, a);
        },
        useId: function() {
          return $ = "useId", Vt(), Yg();
        },
        unstable_isNewReconciler: ne
      }, ZC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", oe(), Vg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", oe(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", oe(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", oe(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", oe(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", oe(), Hg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", oe();
          var a = me.current;
          me.current = Wl;
          try {
            return Bg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", oe();
          var i = me.current;
          me.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", oe(), Fg(e);
        },
        useState: function(e) {
          $ = "useState", oe();
          var t = me.current;
          me.current = Wl;
          try {
            return om(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", oe(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", oe(), $g(e);
        },
        useTransition: function() {
          return $ = "useTransition", oe(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", oe(), Ug(e, t, a);
        },
        useId: function() {
          return $ = "useId", oe(), Yg();
        },
        unstable_isNewReconciler: ne
      }, JC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", oe(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", oe(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", oe(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", oe();
          var a = me.current;
          me.current = ll;
          try {
            return ym(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", oe();
          var i = me.current;
          me.current = ll;
          try {
            return Lg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", oe(), sm();
        },
        useState: function(e) {
          $ = "useState", oe();
          var t = me.current;
          me.current = ll;
          try {
            return zg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", oe(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", oe(), VC(e);
        },
        useTransition: function() {
          return $ = "useTransition", oe(), IC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", oe(), um(e, t);
        },
        useId: function() {
          return $ = "useId", oe(), gm();
        },
        unstable_isNewReconciler: ne
      }, e0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", oe(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", oe(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", oe(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", oe();
          var a = me.current;
          me.current = Em;
          try {
            return ym(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", oe();
          var i = me.current;
          me.current = Em;
          try {
            return Mg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", oe(), sm();
        },
        useState: function(e) {
          $ = "useState", oe();
          var t = me.current;
          me.current = Em;
          try {
            return Ag(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", oe(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", oe(), BC(e);
        },
        useTransition: function() {
          return $ = "useTransition", oe(), YC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", oe(), um(e, t);
        },
        useId: function() {
          return $ = "useId", oe(), gm();
        },
        unstable_isNewReconciler: ne
      }, Wl = {
        readContext: function(e) {
          return Qg(), nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Xe(), Vt(), Vg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Xe(), Vt(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Xe(), Vt(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Xe(), Vt(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Xe(), Vt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Xe(), Vt(), Hg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Xe(), Vt();
          var a = me.current;
          me.current = Wl;
          try {
            return Bg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Xe(), Vt();
          var i = me.current;
          me.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Xe(), Vt(), Fg(e);
        },
        useState: function(e) {
          $ = "useState", Xe(), Vt();
          var t = me.current;
          me.current = Wl;
          try {
            return om(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Xe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Xe(), Vt(), $g(e);
        },
        useTransition: function() {
          return $ = "useTransition", Xe(), Vt(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Xe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Xe(), Vt(), Ug(e, t, a);
        },
        useId: function() {
          return $ = "useId", Xe(), Vt(), Yg();
        },
        unstable_isNewReconciler: ne
      }, ll = {
        readContext: function(e) {
          return Qg(), nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Xe(), oe(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Xe(), oe(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Xe(), oe(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Xe(), oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Xe(), oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Xe(), oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Xe(), oe();
          var a = me.current;
          me.current = ll;
          try {
            return ym(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Xe(), oe();
          var i = me.current;
          me.current = ll;
          try {
            return Lg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Xe(), oe(), sm();
        },
        useState: function(e) {
          $ = "useState", Xe(), oe();
          var t = me.current;
          me.current = ll;
          try {
            return zg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Xe(), oe(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Xe(), oe(), VC(e);
        },
        useTransition: function() {
          return $ = "useTransition", Xe(), oe(), IC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Xe(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Xe(), oe(), um(e, t);
        },
        useId: function() {
          return $ = "useId", Xe(), oe(), gm();
        },
        unstable_isNewReconciler: ne
      }, Em = {
        readContext: function(e) {
          return Qg(), nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Xe(), oe(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Xe(), oe(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Xe(), oe(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Xe(), oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Xe(), oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Xe(), oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Xe(), oe();
          var a = me.current;
          me.current = ll;
          try {
            return ym(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Xe(), oe();
          var i = me.current;
          me.current = ll;
          try {
            return Mg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Xe(), oe(), sm();
        },
        useState: function(e) {
          $ = "useState", Xe(), oe();
          var t = me.current;
          me.current = ll;
          try {
            return Ag(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Xe(), oe(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Xe(), oe(), BC(e);
        },
        useTransition: function() {
          return $ = "useTransition", Xe(), oe(), YC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Xe(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Xe(), oe(), um(e, t);
        },
        useId: function() {
          return $ = "useId", Xe(), oe(), gm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Po = M.unstable_now, t0 = 0, Cm = -1, Op = -1, Rm = -1, Wg = !1, Tm = !1;
    function n0() {
      return Wg;
    }
    function Rx() {
      Tm = !0;
    }
    function Tx() {
      Wg = !1, Tm = !1;
    }
    function wx() {
      Wg = Tm, Tm = !1;
    }
    function r0() {
      return t0;
    }
    function a0() {
      t0 = Po();
    }
    function Gg(e) {
      Op = Po(), e.actualStartTime < 0 && (e.actualStartTime = Po());
    }
    function i0(e) {
      Op = -1;
    }
    function wm(e, t) {
      if (Op >= 0) {
        var a = Po() - Op;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Op = -1;
      }
    }
    function Gl(e) {
      if (Cm >= 0) {
        var t = Po() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case K:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ft:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function qg(e) {
      if (Rm >= 0) {
        var t = Po() - Rm;
        Rm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case K:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ft:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      Cm = Po();
    }
    function Kg() {
      Rm = Po();
    }
    function Xg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Zg = {}, Jg, eS, tS, nS, rS, l0, xm, aS, iS, lS, Np;
    {
      Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), Np = /* @__PURE__ */ new Set();
      var u0 = /* @__PURE__ */ new Set();
      xm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          u0.has(a) || (u0.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, l0 = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          rS.has(a) || (rS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Zg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Zg);
    }
    function uS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & qt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        l0(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var oS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = ho(e), u = Ca(), s = Io(i), f = Pu(u, s);
        f.payload = t, a != null && (xm(a, "setState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (gr(p, i, s, u), em(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ho(e), u = Ca(), s = Io(i), f = Pu(u, s);
        f.tag = wC, f.payload = t, a != null && (xm(a, "replaceState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (gr(p, i, s, u), em(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ho(e), i = Ca(), u = Io(a), s = Pu(i, u);
        s.tag = Xh, t != null && (xm(t, "forceUpdate"), s.callback = t);
        var f = Ao(a, s, u);
        f !== null && (gr(f, a, u, i), em(f, a, u)), Uc(a, u);
      }
    };
    function o0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & qt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Re(a, i) || !Re(u, s) : !0;
    }
    function xx(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qt) === Me && (Np.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qt) === Me && (Np.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !iS.has(t) && (iS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !tS.has(t) && (tS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ct(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function s0(e, t) {
      t.updater = oS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Zg;
    }
    function c0(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !lS.has(t)) {
          lS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : ui;
      }
      var S = new t(a, s);
      if (e.mode & qt) {
        yn(!0);
        try {
          S = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var _ = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      s0(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var x = xt(t) || "Component";
          eS.has(x) || (eS.add(x), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, S.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var U = null, F = null, P = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), U !== null || F !== null || P !== null) {
            var pe = xt(t) || "Component", je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            nS.has(pe) || (nS.add(pe), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, pe, je, U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && JE(e, u, s), S;
    }
    function bx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function f0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = qe(e) || "Component";
          Jg.has(s) || (Jg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        oS.enqueueReplaceState(t, t.state, null);
      }
    }
    function sS(e, t, a, i) {
      xx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = wf(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          aS.has(p) || (aS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (uS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (bx(e, u), tm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= Wi, (e.mode & Mt) !== Me && (y |= _l), e.flags |= y;
      }
    }
    function _x(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = wf(e, t, !0);
        v = xf(e, y);
      }
      var S = t.getDerivedStateFromProps, _ = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && f0(e, u, a, v), bC();
      var x = e.memoizedState, U = u.state = x;
      if (tm(e, a, u, i), U = e.memoizedState, s === a && x === U && !Ah() && !nm()) {
        if (typeof u.componentDidMount == "function") {
          var F = Ct;
          F |= Wi, (e.mode & Mt) !== Me && (F |= _l), e.flags |= F;
        }
        return !1;
      }
      typeof S == "function" && (uS(e, t, S, a), U = e.memoizedState);
      var P = nm() || o0(e, t, s, a, x, U, v);
      if (P) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var pe = Ct;
          pe |= Wi, (e.mode & Mt) !== Me && (pe |= _l), e.flags |= pe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var je = Ct;
          je |= Wi, (e.mode & Mt) !== Me && (je |= _l), e.flags |= je;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, P;
    }
    function kx(e, t, a, i, u) {
      var s = t.stateNode;
      xC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, S = a.contextType, _ = ui;
      if (typeof S == "object" && S !== null)
        _ = nr(S);
      else {
        var x = wf(t, a, !0);
        _ = xf(t, x);
      }
      var U = a.getDerivedStateFromProps, F = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && f0(t, s, i, _), bC();
      var P = t.memoizedState, pe = s.state = P;
      if (tm(t, i, s, u), pe = t.memoizedState, f === v && P === pe && !Ah() && !nm() && !be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Qn), !1;
      typeof U == "function" && (uS(t, a, U, i), pe = t.memoizedState);
      var je = nm() || o0(t, a, p, i, P, pe, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      be;
      return je ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, pe, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, pe, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Qn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Qn), t.memoizedProps = i, t.memoizedState = pe), s.props = i, s.state = pe, s.context = _, je;
    }
    function tc(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function cS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Dx(e, t) {
      return !0;
    }
    function fS(e, t) {
      try {
        var a = Dx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === K)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var S = qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var Ox = typeof WeakMap == "function" ? WeakMap : Map;
    function d0(e, t, a) {
      var i = Pu(Zt, a);
      i.tag = mg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        R_(u), fS(e, t);
      }, i;
    }
    function dS(e, t, a) {
      var i = Pu(Zt, a);
      i.tag = mg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          TR(e), fS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        TR(e), fS(e, t), typeof u != "function" && E_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, $e) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e) || "Unknown"));
      }), i;
    }
    function p0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Ox(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = T_.bind(null, e, t, a);
        Zr && Gp(e, a), t.then(s, s);
      }
    }
    function Nx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Lx(e, t) {
      var a = e.tag;
      if ((e.mode & ht) === Me && (a === ie || a === We || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function v0(e) {
      var t = e;
      do {
        if (t.tag === Ne && dx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function h0(e, t, a, i, u) {
      if ((e.mode & ht) === Me) {
        if (e === t)
          e.flags |= Zn;
        else {
          if (e.flags |= De, a.flags |= bc, a.flags &= -52805, a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Zt, $e);
              f.tag = Xh, Ao(a, f, $e);
            }
          }
          a.lanes = at(a.lanes, $e);
        }
        return e;
      }
      return e.flags |= Zn, e.lanes = u, e;
    }
    function Mx(e, t, a, i, u) {
      if (a.flags |= cs, Zr && Gp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Lx(a), Fr() && a.mode & ht && lC();
        var f = v0(t);
        if (f !== null) {
          f.flags &= ~Rr, h0(f, t, a, e, u), f.mode & ht && p0(e, s, u), Nx(f, e, s);
          return;
        } else {
          if (!Pv(u)) {
            p0(e, s, u), YS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Fr() && a.mode & ht) {
        lC();
        var v = v0(t);
        if (v !== null) {
          (v.flags & Zn) === Le && (v.flags |= Rr), h0(v, t, a, e, u), ag(tc(i, a));
          return;
        }
      }
      i = tc(i, a), d_(i);
      var y = t;
      do {
        switch (y.tag) {
          case K: {
            var S = i;
            y.flags |= Zn;
            var _ = xs(u);
            y.lanes = at(y.lanes, _);
            var x = d0(y, S, _);
            Sg(y, x);
            return;
          }
          case ue:
            var U = i, F = y.type, P = y.stateNode;
            if ((y.flags & De) === Le && (typeof F.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !vR(P))) {
              y.flags |= Zn;
              var pe = xs(u);
              y.lanes = at(y.lanes, pe);
              var je = dS(y, U, pe);
              Sg(y, je);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Ux() {
      return null;
    }
    var Lp = T.ReactCurrentOwner, ol = !1, pS, Mp, vS, hS, mS, nc, yS, bm, Up;
    pS = {}, Mp = {}, vS = {}, hS = {}, mS = {}, nc = !1, yS = {}, bm = {}, Up = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = gC(t, null, a, i) : t.child = Df(t, e.child, a, i);
    }
    function zx(e, t, a, i) {
      t.child = Df(t, e.child, null, i), t.child = Df(t, null, a, i);
    }
    function m0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Nf(t, u), ha(t);
      {
        if (Lp.current = t, Yn(!0), v = Ff(e, t, f, i, p, u), y = jf(), t.mode & qt) {
          yn(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = jf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (LC(e, t, u), Vu(e, t, u)) : (Fr() && y && Zy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function y0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (P_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = Ie, t.type = f, ES(t, s), g0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          ), a.defaultProps !== void 0) {
            var v = xt(s) || "Unknown";
            Up[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Up[v] = !0);
          }
        }
        var y = nE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var S = a.type, _ = S.propTypes;
        _ && nl(
          _,
          i,
          // Resolved props
          "prop",
          xt(S)
        );
      }
      var x = e.child, U = bS(e, u);
      if (!U) {
        var F = x.memoizedProps, P = a.compare;
        if (P = P !== null ? P : Re, P(F, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var pe = uc(x, i);
      return pe.ref = t.ref, pe.return = t, t.child = pe, pe;
    }
    function g0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var S = e.memoizedProps;
        if (Re(S, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = S, bS(e, u))
            (e.flags & bc) !== Le && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return gS(e, t, a, i, u);
    }
    function S0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || se)
        if ((t.mode & ht) === Me) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Hm(t, a);
        } else if (ea(a, Jr)) {
          var _ = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var x = s !== null ? s.baseLanes : a;
          Hm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = at(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var S = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = S, t.updateQueue = null, Hm(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = at(s.baseLanes, a), t.memoizedState = null) : U = a, Hm(t, U);
      }
      return Sa(e, t, u, a), t.child;
    }
    function Ax(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function Fx(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function jx(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function E0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cn, t.flags |= yo);
    }
    function gS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Nf(t, u), ha(t);
      {
        if (Lp.current = t, Yn(!0), v = Ff(e, t, a, i, f, u), y = jf(), t.mode & qt) {
          yn(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = jf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (LC(e, t, u), Vu(e, t, u)) : (Fr() && y && Zy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function C0(e, t, a, i, u) {
      {
        switch (tk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= De, t.flags |= Zn;
            var y = new Error("Simulated error coming from DevTools"), S = xs(u);
            t.lanes = at(t.lanes, S);
            var _ = dS(t, tc(y, t), S);
            Sg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var U;
      Il(a) ? (U = !0, jh(t)) : U = !1, Nf(t, u);
      var F = t.stateNode, P;
      F === null ? (km(e, t), c0(t, a, i), sS(t, a, i, u), P = !0) : e === null ? P = _x(t, a, i, u) : P = kx(e, t, a, i, u);
      var pe = SS(e, t, a, P, U, u);
      {
        var je = t.stateNode;
        P && je.props !== i && (nc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t) || "a component"), nc = !0);
      }
      return pe;
    }
    function SS(e, t, a, i, u, s) {
      E0(e, t);
      var f = (t.flags & De) !== Le;
      if (!i && !f)
        return u && nC(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, i0();
      else {
        ha(t);
        {
          if (Yn(!0), v = p.render(), t.mode & qt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? zx(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && nC(t, a, !0), t.child;
    }
    function R0(e) {
      var t = e.stateNode;
      t.pendingContext ? eC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eC(e, t.context, !1), Eg(e, t.containerInfo);
    }
    function Hx(e, t, a) {
      if (R0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      xC(e, t), tm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var S = tc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return T0(e, t, p, a, S);
        } else if (p !== s) {
          var _ = tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return T0(e, t, p, a, _);
        } else {
          B1(t);
          var x = gC(t, null, p, a);
          t.child = x;
          for (var U = x; U; )
            U.flags = U.flags & ~mn | qr, U = U.sibling;
        }
      } else {
        if (kf(), p === s)
          return Vu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function T0(e, t, a, i, u) {
      return kf(), ag(u), t.flags |= Rr, Sa(e, t, a, i), t.child;
    }
    function Px(e, t, a) {
      DC(t), e === null && rg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= Oa), E0(e, t), Sa(e, t, f, a), t.child;
    }
    function Vx(e, t) {
      return e === null && rg(t), null;
    }
    function Bx(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = V_(v), S = ul(v, u), _;
      switch (y) {
        case ie:
          return ES(t, v), t.type = v = Qf(v), _ = gS(null, t, v, S, i), _;
        case ue:
          return t.type = v = KS(v), _ = C0(null, t, v, S, i), _;
        case We:
          return t.type = v = XS(v), _ = m0(null, t, v, S, i), _;
        case mt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              S,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return _ = y0(
            null,
            t,
            v,
            ul(v.type, S),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ke && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function $x(e, t, a, i, u) {
      km(e, t), t.tag = ue;
      var s;
      return Il(a) ? (s = !0, jh(t)) : s = !1, Nf(t, u), c0(t, a, i), sS(t, a, i, u), SS(null, t, a, !0, s, u);
    }
    function Ix(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = xf(t, f);
      }
      Nf(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          pS[y] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), pS[y] = !0);
        }
        t.mode & qt && al.recordLegacyContextWarning(t, null), Yn(!0), Lp.current = t, p = Ff(null, t, a, u, s, i), v = jf(), Yn(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var S = xt(a) || "Unknown";
        Mp[S] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), Mp[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = xt(a) || "Unknown";
          Mp[_] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Mp[_] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Il(a) ? (x = !0, jh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, gg(t), s0(t, p), sS(t, a, u, i), SS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ie, t.mode & qt) {
          yn(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = jf();
          } finally {
            yn(!1);
          }
        }
        return Fr() && v && Zy(t), Sa(null, t, p, i), ES(t, a), t.child;
      }
    }
    function ES(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), mS[u] || (mS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Up[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Up[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          hS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), hS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          vS[v] || (g("%s: Function components do not support contextType.", v), vS[v] = !0);
        }
      }
    }
    var CS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function RS(e) {
      return {
        baseLanes: e,
        cachePool: Ux(),
        transitions: null
      };
    }
    function Yx(e, t) {
      var a = null;
      return {
        baseLanes: at(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Qx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Tg(e, Tp);
    }
    function Wx(e, t) {
      return bs(e.childLanes, t);
    }
    function w0(e, t, a) {
      var i = t.pendingProps;
      nk(t) && (t.flags |= De);
      var u = il.current, s = !1, f = (t.flags & De) !== Le;
      if (f || Qx(u, e) ? (s = !0, t.flags &= ~De) : (e === null || e.memoizedState !== null) && (u = fx(u, NC)), u = Mf(u), jo(t, u), e === null) {
        rg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Zx(t, v);
        }
        var y = i.children, S = i.fallback;
        if (s) {
          var _ = Gx(t, y, S, a), x = t.child;
          return x.memoizedState = RS(a), t.memoizedState = CS, _;
        } else
          return TS(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var F = U.dehydrated;
          if (F !== null)
            return Jx(e, t, f, i, F, U, a);
        }
        if (s) {
          var P = i.fallback, pe = i.children, je = Kx(e, t, pe, P, a), ke = t.child, wt = e.child.memoizedState;
          return ke.memoizedState = wt === null ? RS(a) : Yx(wt, a), ke.childLanes = Wx(e, a), t.memoizedState = CS, je;
        } else {
          var St = i.children, O = qx(e, t, St, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = wS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Gx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ht) === Me && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Lt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Qo(a, u, i, null)) : (p = wS(f, u), v = Qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wS(e, t, a) {
      return xR(e, t, Y, null);
    }
    function x0(e, t) {
      return uc(e, t);
    }
    function qx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = x0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ht) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function Kx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ht) === Me && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var S = t.child;
        y = S, y.childLanes = Y, y.pendingProps = v, t.mode & Lt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = x0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var _;
      return p !== null ? _ = uc(p, i) : (_ = Qo(i, s, u, null), _.flags |= mn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function _m(e, t, a, i) {
      i !== null && ag(i), Df(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = TS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Xx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wS(f, s), v = Qo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ht) !== Me && Df(t, e.child, null, u), v;
    }
    function Zx(e, t, a) {
      return (e.mode & ht) === Me ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = $e) : By(t) ? e.lanes = Tr : e.lanes = Jr, null;
    }
    function Jx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var O = cS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _m(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= De, null;
          var V = i.children, N = i.fallback, Z = Xx(e, t, V, N, f), ye = t.child;
          return ye.memoizedState = RS(f), t.memoizedState = CS, Z;
        }
      else {
        if (P1(), (t.mode & ht) === Me)
          return _m(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (By(u)) {
          var p, v, y;
          {
            var S = r1(u);
            p = S.digest, v = S.message, y = S.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = cS(_, p, y);
          return _m(e, t, f, x);
        }
        var U = ea(f, e.childLanes);
        if (ol || U) {
          var F = jm();
          if (F !== null) {
            var P = Fd(F, f);
            if (P !== Dt && P !== s.retryLane) {
              s.retryLane = P;
              var pe = Zt;
              Ha(e, P), gr(F, e, P, pe);
            }
          }
          YS();
          var je = cS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _m(e, t, f, je);
        } else if (GE(u)) {
          t.flags |= De, t.child = e.child;
          var ke = w_.bind(null, e);
          return a1(u, ke), null;
        } else {
          $1(t, u, s.treeContext);
          var wt = i.children, St = TS(t, wt);
          return St.flags |= qr, St;
        }
      }
    }
    function b0(e, t, a) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), vg(e.return, t, a);
    }
    function eb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ne) {
          var u = i.memoizedState;
          u !== null && b0(i, a, e);
        } else if (i.tag === un)
          b0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function tb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && im(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function nb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !yS[e])
        if (yS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function rb(e, t) {
      e !== void 0 && !bm[e] && (e !== "collapsed" && e !== "hidden" ? (bm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (bm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function _0(e, t) {
      {
        var a = ct(e), i = !a && typeof tt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function ab(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ct(e)) {
          for (var a = 0; a < e.length; a++)
            if (!_0(e[a], a))
              return;
        } else {
          var i = tt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!_0(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function xS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function k0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      nb(u), rb(s, u), ab(f, u), Sa(e, t, f, a);
      var p = il.current, v = Tg(p, Tp);
      if (v)
        p = wg(p, Tp), t.flags |= De;
      else {
        var y = e !== null && (e.flags & De) !== Le;
        y && eb(t, t.child, a), p = Mf(p);
      }
      if (jo(t, p), (t.mode & ht) === Me)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var S = tb(t.child), _;
            S === null ? (_ = t.child, t.child = null) : (_ = S.sibling, S.sibling = null), xS(
              t,
              !1,
              // isBackwards
              _,
              S,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var F = U.alternate;
              if (F !== null && im(F) === null) {
                t.child = U;
                break;
              }
              var P = U.sibling;
              U.sibling = x, x = U, U = P;
            }
            xS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            xS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function ib(e, t, a) {
      Eg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Df(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var D0 = !1;
    function lb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || D0 || (D0 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (CC(t, u, p), f !== null) {
        var y = f.value;
        if (q(y, p)) {
          if (f.children === s.children && !Ah())
            return Vu(e, t, a);
        } else
          nx(t, u, a);
      }
      var S = s.children;
      return Sa(e, t, S, a), t.child;
    }
    var O0 = !1;
    function ub(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (O0 || (O0 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = nr(i);
      ha(t);
      var p;
      return Lp.current = t, Yn(!0), p = s(f), Yn(!1), ma(), t.flags |= ni, Sa(e, t, p, a), t.child;
    }
    function zp() {
      ol = !0;
    }
    function km(e, t) {
      (t.mode & ht) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), i0(), Wp(t.lanes), ea(a, t.childLanes) ? (ex(e, t), t.child) : null;
    }
    function ob(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= mn, a;
      }
    }
    function bS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function sb(e, t, a) {
      switch (t.tag) {
        case K:
          R0(t), t.stateNode, kf();
          break;
        case ae:
          DC(t);
          break;
        case ue: {
          var i = t.type;
          Il(i) && jh(t);
          break;
        }
        case Se:
          Eg(t, t.stateNode.containerInfo);
          break;
        case Ze: {
          var u = t.memoizedProps.value, s = t.type._context;
          CC(t, s, u);
          break;
        }
        case ft:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ne: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return jo(t, Mf(il.current)), t.flags |= De, null;
            var y = t.child, S = y.childLanes;
            if (ea(a, S))
              return w0(e, t, a);
            jo(t, Mf(il.current));
            var _ = Vu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            jo(t, Mf(il.current));
          break;
        }
        case un: {
          var x = (e.flags & De) !== Le, U = ea(a, t.childLanes);
          if (x) {
            if (U)
              return k0(e, t, a);
            t.flags |= De;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), jo(t, il.current), U)
            break;
          return null;
        }
        case Ae:
        case Ft:
          return t.lanes = Y, S0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function N0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ob(e, t, nE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ah() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = bS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & De) === Le)
            return ol = !1, sb(e, t, a);
          (e.flags & bc) !== Le ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Fr() && U1(t)) {
        var f = t.index, p = z1();
        iC(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Oe:
          return Ix(e, t, t.type, a);
        case ln: {
          var v = t.elementType;
          return Bx(e, t, v, a);
        }
        case ie: {
          var y = t.type, S = t.pendingProps, _ = t.elementType === y ? S : ul(y, S);
          return gS(e, t, y, _, a);
        }
        case ue: {
          var x = t.type, U = t.pendingProps, F = t.elementType === x ? U : ul(x, U);
          return C0(e, t, x, F, a);
        }
        case K:
          return Hx(e, t, a);
        case ae:
          return Px(e, t, a);
        case ze:
          return Vx(e, t);
        case Ne:
          return w0(e, t, a);
        case Se:
          return ib(e, t, a);
        case We: {
          var P = t.type, pe = t.pendingProps, je = t.elementType === P ? pe : ul(P, pe);
          return m0(e, t, P, je, a);
        }
        case nt:
          return Ax(e, t, a);
        case rt:
          return Fx(e, t, a);
        case ft:
          return jx(e, t, a);
        case Ze:
          return lb(e, t, a);
        case Bt:
          return ub(e, t, a);
        case mt: {
          var ke = t.type, wt = t.pendingProps, St = ul(ke, wt);
          if (t.type !== t.elementType) {
            var O = ke.propTypes;
            O && nl(
              O,
              St,
              // Resolved for outer only
              "prop",
              xt(ke)
            );
          }
          return St = ul(ke.type, St), y0(e, t, ke, St, a);
        }
        case Ie:
          return g0(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var V = t.type, N = t.pendingProps, Z = t.elementType === V ? N : ul(V, N);
          return $x(e, t, V, Z, a);
        }
        case un:
          return k0(e, t, a);
        case _t:
          break;
        case Ae:
          return S0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hf(e) {
      e.flags |= Ct;
    }
    function L0(e) {
      e.flags |= Cn, e.flags |= yo;
    }
    var M0, _S, U0, z0;
    M0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ae || u.tag === ze)
          Nw(e, u.stateNode);
        else if (u.tag !== Se) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, _S = function(e, t) {
    }, U0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Cg(), v = Mw(f, a, s, i, u, p);
        t.updateQueue = v, v && Hf(t);
      }
    }, z0 = function(e, t, a, i) {
      a !== i && Hf(t);
    };
    function Ap(e, t) {
      if (!Fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Le;
      if (t) {
        if ((e.mode & Lt) !== Me) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = at(a, at(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = at(a, at(S.lanes, S.childLanes)), i |= S.subtreeFlags & zn, i |= S.flags & zn, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Lt) !== Me) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = at(a, at(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = at(a, at(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function cb(e, t, a) {
      if (G1() && (t.mode & ht) !== Me && (t.flags & De) === Le)
        return dC(t), kf(), t.flags |= Rr | cs | Zn, !1;
      var i = $h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Q1(t), Hr(t), (t.mode & Lt) !== Me) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & De) === Le && (t.memoizedState = null), t.flags |= Ct, Hr(t), (t.mode & Lt) !== Me) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return pC(), !0;
    }
    function A0(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case Oe:
        case ln:
        case Ie:
        case ie:
        case We:
        case nt:
        case rt:
        case ft:
        case Bt:
        case mt:
          return Hr(t), null;
        case ue: {
          var u = t.type;
          return Il(u) && Fh(t), Hr(t), null;
        }
        case K: {
          var s = t.stateNode;
          if (Lf(t), qy(t), bg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = $h(t);
            if (f)
              Hf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== Le) && (t.flags |= Qn, pC());
            }
          }
          return _S(e, t), Hr(t), null;
        }
        case ae: {
          Rg(t);
          var v = kC(), y = t.type;
          if (e !== null && t.stateNode != null)
            U0(e, t, y, i, v), e.ref !== t.ref && L0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var S = Cg(), _ = $h(t);
            if (_)
              I1(t, v, S) && Hf(t);
            else {
              var x = Ow(y, i, v, S, t);
              M0(x, t, !1, !1), t.stateNode = x, Lw(x, y, i, v) && Hf(t);
            }
            t.ref !== null && L0(t);
          }
          return Hr(t), null;
        }
        case ze: {
          var U = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            z0(e, t, F, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = kC(), pe = Cg(), je = $h(t);
            je ? Y1(t) && Hf(t) : t.stateNode = Uw(U, P, pe, t);
          }
          return Hr(t), null;
        }
        case Ne: {
          Uf(t);
          var ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var wt = cb(e, t, ke);
            if (!wt)
              return t.flags & Zn ? t : null;
          }
          if ((t.flags & De) !== Le)
            return t.lanes = a, (t.mode & Lt) !== Me && Xg(t), t;
          var St = ke !== null, O = e !== null && e.memoizedState !== null;
          if (St !== O && St) {
            var V = t.child;
            if (V.flags |= Un, (t.mode & ht) !== Me) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || Tg(il.current, NC) ? f_() : YS();
            }
          }
          var Z = t.updateQueue;
          if (Z !== null && (t.flags |= Ct), Hr(t), (t.mode & Lt) !== Me && St) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case Se:
          return Lf(t), _S(e, t), e === null && _1(t.stateNode.containerInfo), Hr(t), null;
        case Ze:
          var ve = t.type._context;
          return pg(ve, t), Hr(t), null;
        case Ht: {
          var Qe = t.type;
          return Il(Qe) && Fh(t), Hr(t), null;
        }
        case un: {
          Uf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return Hr(t), null;
          var Xt = (t.flags & De) !== Le, zt = Je.rendering;
          if (zt === null)
            if (Xt)
              Ap(Je, !1);
            else {
              var qn = p_() && (e === null || (e.flags & De) === Le);
              if (!qn)
                for (var At = t.child; At !== null; ) {
                  var Vn = im(At);
                  if (Vn !== null) {
                    Xt = !0, t.flags |= De, Ap(Je, !1);
                    var ua = Vn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Ct), t.subtreeFlags = Le, tx(t, a), jo(t, wg(il.current, Tp)), t.child;
                  }
                  At = At.sibling;
                }
              Je.tail !== null && Wn() > rR() && (t.flags |= De, Xt = !0, Ap(Je, !1), t.lanes = kd);
            }
          else {
            if (!Xt) {
              var Ir = im(zt);
              if (Ir !== null) {
                t.flags |= De, Xt = !0;
                var si = Ir.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Ct), Ap(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !zt.alternate && !Fr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Wn() * 2 - Je.renderingStartTime > rR() && a !== Jr && (t.flags |= De, Xt = !0, Ap(Je, !1), t.lanes = kd);
            }
            if (Je.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Ra = Je.last;
              Ra !== null ? Ra.sibling = zt : t.child = zt, Je.last = zt;
            }
          }
          if (Je.tail !== null) {
            var Ta = Je.tail;
            Je.rendering = Ta, Je.tail = Ta.sibling, Je.renderingStartTime = Wn(), Ta.sibling = null;
            var oa = il.current;
            return Xt ? oa = wg(oa, Tp) : oa = Mf(oa), jo(t, oa), Ta;
          }
          return Hr(t), null;
        }
        case _t:
          break;
        case Ae:
        case Ft: {
          IS(t);
          var Qu = t.memoizedState, Wf = Qu !== null;
          if (e !== null) {
            var Zp = e.memoizedState, Zl = Zp !== null;
            Zl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !se && (t.flags |= Un);
          }
          return !Wf || (t.mode & ht) === Me ? Hr(t) : ea(Xl, Jr) && (Hr(t), t.subtreeFlags & (mn | Ct) && (t.flags |= Un)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function fb(e, t, a) {
      switch (Jy(t), t.tag) {
        case ue: {
          var i = t.type;
          Il(i) && Fh(t);
          var u = t.flags;
          return u & Zn ? (t.flags = u & ~Zn | De, (t.mode & Lt) !== Me && Xg(t), t) : null;
        }
        case K: {
          t.stateNode, Lf(t), qy(t), bg();
          var s = t.flags;
          return (s & Zn) !== Le && (s & De) === Le ? (t.flags = s & ~Zn | De, t) : null;
        }
        case ae:
          return Rg(t), null;
        case Ne: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & Zn ? (t.flags = p & ~Zn | De, (t.mode & Lt) !== Me && Xg(t), t) : null;
        }
        case un:
          return Uf(t), null;
        case Se:
          return Lf(t), null;
        case Ze:
          var v = t.type._context;
          return pg(v, t), null;
        case Ae:
        case Ft:
          return IS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function F0(e, t, a) {
      switch (Jy(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Fh(t);
          break;
        }
        case K: {
          t.stateNode, Lf(t), qy(t), bg();
          break;
        }
        case ae: {
          Rg(t);
          break;
        }
        case Se:
          Lf(t);
          break;
        case Ne:
          Uf(t);
          break;
        case un:
          Uf(t);
          break;
        case Ze:
          var u = t.type._context;
          pg(u, t);
          break;
        case Ae:
        case Ft:
          IS(t);
          break;
      }
    }
    var j0 = null;
    j0 = /* @__PURE__ */ new Set();
    var Dm = !1, Pr = !1, db = typeof WeakSet == "function" ? WeakSet : Set, Te = null, Pf = null, Vf = null;
    function pb(e) {
      bl(null, function() {
        throw e;
      }), ss();
    }
    var vb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function H0(e, t) {
      try {
        Vo(dr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function kS(e, t, a) {
      try {
        vb(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function hb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function P0(e, t) {
      try {
        B0(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Bf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Be && dt && e.mode & Lt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          a.current = null;
    }
    function Om(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var V0 = !1;
    function mb(e, t) {
      kw(e.containerInfo), Te = t, yb();
      var a = V0;
      return V0 = !1, a;
    }
    function yb() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        (e.subtreeFlags & kl) !== Le && t !== null ? (t.return = e, Te = t) : gb();
      }
    }
    function gb() {
      for (; Te !== null; ) {
        var e = Te;
        Qt(e);
        try {
          Sb(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function Sb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Qn) !== Le) {
        switch (Qt(e), e.tag) {
          case ie:
          case We:
          case Ie:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !nc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = j0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case K: {
            {
              var v = e.stateNode;
              Jw(v.containerInfo);
            }
            break;
          }
          case ae:
          case ze:
          case Se:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Pa ? Ki(t) : (e & dr) !== Pa && ds(t), (e & Yl) !== Pa && qp(!0), Om(t, a, p), (e & Yl) !== Pa && qp(!1), (e & jr) !== Pa ? Ll() : (e & dr) !== Pa && bd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Pa ? xd(t) : (e & dr) !== Pa && Lc(t);
            var f = s.create;
            (e & Yl) !== Pa && qp(!0), s.destroy = f(), (e & Yl) !== Pa && qp(!1), (e & jr) !== Pa ? zv() : (e & dr) !== Pa && Av();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== Le ? v = "useLayoutEffect" : (s.tag & Yl) !== Le ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Eb(e, t) {
      if ((t.flags & Ct) !== Le)
        switch (t.tag) {
          case ft: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = r0(), p = t.alternate === null ? "mount" : "update";
            n0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case K:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ft:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Cb(e, t, a, i) {
      if ((a.flags & Ol) !== Le)
        switch (a.tag) {
          case ie:
          case We:
          case Ie: {
            if (!Pr)
              if (a.mode & Lt)
                try {
                  ql(), Vo(dr | fr, a);
                } finally {
                  Gl(a);
                }
              else
                Vo(dr | fr, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & Ct && !Pr)
              if (t === null)
                if (a.type === a.elementType && !nc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Lt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !nc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Lt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !nc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), _C(a, p, u));
            break;
          }
          case K: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ae:
                    y = a.child.stateNode;
                    break;
                  case ue:
                    y = a.child.stateNode;
                    break;
                }
              _C(a, v, y);
            }
            break;
          }
          case ae: {
            var S = a.stateNode;
            if (t === null && a.flags & Ct) {
              var _ = a.type, x = a.memoizedProps;
              Hw(S, _, x);
            }
            break;
          }
          case ze:
            break;
          case Se:
            break;
          case ft: {
            {
              var U = a.memoizedProps, F = U.onCommit, P = U.onRender, pe = a.stateNode.effectDuration, je = r0(), ke = t === null ? "mount" : "update";
              n0() && (ke = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, je);
              {
                typeof F == "function" && F(a.memoizedProps.id, ke, pe, je), g_(a);
                var wt = a.return;
                e: for (; wt !== null; ) {
                  switch (wt.tag) {
                    case K:
                      var St = wt.stateNode;
                      St.effectDuration += pe;
                      break e;
                    case ft:
                      var O = wt.stateNode;
                      O.effectDuration += pe;
                      break e;
                  }
                  wt = wt.return;
                }
              }
            }
            break;
          }
          case Ne: {
            Db(e, a);
            break;
          }
          case un:
          case Ht:
          case _t:
          case Ae:
          case Ft:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Cn && B0(a);
    }
    function Rb(e) {
      switch (e.tag) {
        case ie:
        case We:
        case Ie: {
          if (e.mode & Lt)
            try {
              ql(), H0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            H0(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && hb(e, e.return, t), P0(e, e.return);
          break;
        }
        case ae: {
          P0(e, e.return);
          break;
        }
      }
    }
    function Tb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ae) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? qw(u) : Xw(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === ze) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Kw(s) : Zw(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === Ft) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function B0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ae:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Lt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(e)), t.current = i;
      }
    }
    function wb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function $0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, $0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ae) {
          var a = e.stateNode;
          a !== null && O1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function xb(e) {
      for (var t = e.return; t !== null; ) {
        if (I0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function I0(e) {
      return e.tag === ae || e.tag === K || e.tag === Se;
    }
    function Y0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || I0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== ze && t.tag !== Jt; ) {
          if (t.flags & mn || t.child === null || t.tag === Se)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function bb(e) {
      var t = xb(e);
      switch (t.tag) {
        case ae: {
          var a = t.stateNode;
          t.flags & Oa && (WE(a), t.flags &= ~Oa);
          var i = Y0(e);
          OS(e, i, a);
          break;
        }
        case K:
        case Se: {
          var u = t.stateNode.containerInfo, s = Y0(e);
          DS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === ae || i === ze;
      if (u) {
        var s = e.stateNode;
        t ? Yw(a, s, t) : $w(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === ae || i === ze;
      if (u) {
        var s = e.stateNode;
        t ? Iw(a, s, t) : Bw(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, cl = !1;
    function _b(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ae: {
              Vr = i.stateNode, cl = !1;
              break e;
            }
            case K: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case Se: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Q0(e, t, a), Vr = null, cl = !1;
      }
      wb(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        Q0(e, t, i), i = i.sibling;
    }
    function Q0(e, t, a) {
      switch (Rd(a), a.tag) {
        case ae:
          Pr || Bf(a, t);
        case ze: {
          {
            var i = Vr, u = cl;
            Vr = null, Bo(e, t, a), Vr = i, cl = u, Vr !== null && (cl ? Ww(Vr, a.stateNode) : Qw(Vr, a.stateNode));
          }
          return;
        }
        case Jt: {
          Vr !== null && (cl ? Gw(Vr, a.stateNode) : Vy(Vr, a.stateNode));
          return;
        }
        case Se: {
          {
            var s = Vr, f = cl;
            Vr = a.stateNode.containerInfo, cl = !0, Bo(e, t, a), Vr = s, cl = f;
          }
          return;
        }
        case ie:
        case We:
        case mt:
        case Ie: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, S = y;
                do {
                  var _ = S, x = _.destroy, U = _.tag;
                  x !== void 0 && ((U & Yl) !== Pa ? Om(a, t, x) : (U & dr) !== Pa && (ds(a), a.mode & Lt ? (ql(), Om(a, t, x), Gl(a)) : Om(a, t, x), bd())), S = S.next;
                } while (S !== y);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case ue: {
          if (!Pr) {
            Bf(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && kS(a, t, F);
          }
          Bo(e, t, a);
          return;
        }
        case _t: {
          Bo(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & ht
          ) {
            var P = Pr;
            Pr = P || a.memoizedState !== null, Bo(e, t, a), Pr = P;
          } else
            Bo(e, t, a);
          break;
        }
        default: {
          Bo(e, t, a);
          return;
        }
      }
    }
    function kb(e) {
      e.memoizedState;
    }
    function Db(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && p1(s);
          }
        }
      }
    }
    function W0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new db()), t.forEach(function(i) {
          var u = x_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zr)
              if (Pf !== null && Vf !== null)
                Gp(Vf, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Ob(e, t, a) {
      Pf = a, Vf = e, Qt(t), G0(t, e), Qt(t), Pf = null, Vf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            _b(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Qt(p), G0(p, e), p = p.sibling;
      Qt(f);
    }
    function G0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ie:
        case We:
        case mt:
        case Ie: {
          if (fl(t, e), Kl(e), u & Ct) {
            try {
              sl(Yl | fr, e, e.return), Vo(Yl | fr, e);
            } catch (Qe) {
              fn(e, e.return, Qe);
            }
            if (e.mode & Lt) {
              try {
                ql(), sl(dr | fr, e, e.return);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
              Gl(e);
            } else
              try {
                sl(dr | fr, e, e.return);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
          }
          return;
        }
        case ue: {
          fl(t, e), Kl(e), u & Cn && i !== null && Bf(i, i.return);
          return;
        }
        case ae: {
          fl(t, e), Kl(e), u & Cn && i !== null && Bf(i, i.return);
          {
            if (e.flags & Oa) {
              var s = e.stateNode;
              try {
                WE(s);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    Pw(f, S, y, v, p, e);
                  } catch (Qe) {
                    fn(e, e.return, Qe);
                  }
              }
            }
          }
          return;
        }
        case ze: {
          if (fl(t, e), Kl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, x = e.memoizedProps, U = i !== null ? i.memoizedProps : x;
            try {
              Vw(_, U, x);
            } catch (Qe) {
              fn(e, e.return, Qe);
            }
          }
          return;
        }
        case K: {
          if (fl(t, e), Kl(e), u & Ct && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                d1(t.containerInfo);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
          }
          return;
        }
        case Se: {
          fl(t, e), Kl(e);
          return;
        }
        case Ne: {
          fl(t, e), Kl(e);
          var P = e.child;
          if (P.flags & Un) {
            var pe = P.stateNode, je = P.memoizedState, ke = je !== null;
            if (pe.isHidden = ke, ke) {
              var wt = P.alternate !== null && P.alternate.memoizedState !== null;
              wt || c_();
            }
          }
          if (u & Ct) {
            try {
              kb(e);
            } catch (Qe) {
              fn(e, e.return, Qe);
            }
            W0(e);
          }
          return;
        }
        case Ae: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ht
          ) {
            var O = Pr;
            Pr = O || St, fl(t, e), Pr = O;
          } else
            fl(t, e);
          if (Kl(e), u & Un) {
            var V = e.stateNode, N = e.memoizedState, Z = N !== null, ye = e;
            if (V.isHidden = Z, Z && !St && (ye.mode & ht) !== Me) {
              Te = ye;
              for (var ve = ye.child; ve !== null; )
                Te = ve, Lb(ve), ve = ve.sibling;
            }
            Tb(ye, Z);
          }
          return;
        }
        case un: {
          fl(t, e), Kl(e), u & Ct && W0(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          bb(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & qr && (e.flags &= ~qr);
    }
    function Nb(e, t, a) {
      Pf = a, Vf = t, Te = e, q0(e, t, a), Pf = null, Vf = null;
    }
    function q0(e, t, a) {
      for (var i = (e.mode & ht) !== Me; Te !== null; ) {
        var u = Te, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            NS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, S = y || Pr, _ = Dm, x = Pr;
            Dm = p, Pr = S, Pr && !x && (Te = u, Mb(u));
            for (var U = s; U !== null; )
              Te = U, q0(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            Te = u, Dm = _, Pr = x, NS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== Le && s !== null ? (s.return = u, Te = s) : NS(e, t, a);
      }
    }
    function NS(e, t, a) {
      for (; Te !== null; ) {
        var i = Te;
        if ((i.flags & Ol) !== Le) {
          var u = i.alternate;
          Qt(i);
          try {
            Cb(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
        }
        if (i === e) {
          Te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Te = s;
          return;
        }
        Te = i.return;
      }
    }
    function Lb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        switch (t.tag) {
          case ie:
          case We:
          case mt:
          case Ie: {
            if (t.mode & Lt)
              try {
                ql(), sl(dr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(dr, t, t.return);
            break;
          }
          case ue: {
            Bf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && kS(t, t.return, i);
            break;
          }
          case ae: {
            Bf(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              K0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Te = a) : K0(e);
      }
    }
    function K0(e) {
      for (; Te !== null; ) {
        var t = Te;
        if (t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function Mb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            X0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Te = a) : X0(e);
      }
    }
    function X0(e) {
      for (; Te !== null; ) {
        var t = Te;
        Qt(t);
        try {
          Rb(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function Ub(e, t, a, i) {
      Te = t, zb(t, e, a, i);
    }
    function zb(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te, s = u.child;
        (u.subtreeFlags & Gi) !== Le && s !== null ? (s.return = u, Te = s) : Ab(e, t, a, i);
      }
    }
    function Ab(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te;
        if ((u.flags & Gr) !== Le) {
          Qt(u);
          try {
            Fb(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          cn();
        }
        if (u === e) {
          Te = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Te = s;
          return;
        }
        Te = u.return;
      }
    }
    function Fb(e, t, a, i) {
      switch (t.tag) {
        case ie:
        case We:
        case Ie: {
          if (t.mode & Lt) {
            Kg();
            try {
              Vo(jr | fr, t);
            } finally {
              qg(t);
            }
          } else
            Vo(jr | fr, t);
          break;
        }
      }
    }
    function jb(e) {
      Te = e, Hb();
    }
    function Hb() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        if ((Te.flags & Da) !== Le) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Te = u, Bb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Te = e;
          }
        }
        (e.subtreeFlags & Gi) !== Le && t !== null ? (t.return = e, Te = t) : Pb();
      }
    }
    function Pb() {
      for (; Te !== null; ) {
        var e = Te;
        (e.flags & Gr) !== Le && (Qt(e), Vb(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function Vb(e) {
      switch (e.tag) {
        case ie:
        case We:
        case Ie: {
          e.mode & Lt ? (Kg(), sl(jr | fr, e, e.return), qg(e)) : sl(jr | fr, e, e.return);
          break;
        }
      }
    }
    function Bb(e, t) {
      for (; Te !== null; ) {
        var a = Te;
        Qt(a), Ib(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, Te = i) : $b(e);
      }
    }
    function $b(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.sibling, i = t.return;
        if ($0(t), t === e) {
          Te = null;
          return;
        }
        if (a !== null) {
          a.return = i, Te = a;
          return;
        }
        Te = i;
      }
    }
    function Ib(e, t) {
      switch (e.tag) {
        case ie:
        case We:
        case Ie: {
          e.mode & Lt ? (Kg(), sl(jr, e, t), qg(e)) : sl(jr, e, t);
          break;
        }
      }
    }
    function Yb(e) {
      switch (e.tag) {
        case ie:
        case We:
        case Ie: {
          try {
            Vo(dr | fr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Qb(e) {
      switch (e.tag) {
        case ie:
        case We:
        case Ie: {
          try {
            Vo(jr | fr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Wb(e) {
      switch (e.tag) {
        case ie:
        case We:
        case Ie: {
          try {
            sl(dr | fr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kS(e, e.return, t);
          break;
        }
      }
    }
    function Gb(e) {
      switch (e.tag) {
        case ie:
        case We:
        case Ie:
          try {
            sl(jr | fr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Fp = Symbol.for;
      Fp("selector.component"), Fp("selector.has_pseudo_class"), Fp("selector.role"), Fp("selector.test_id"), Fp("selector.text");
    }
    var qb = [];
    function Kb() {
      qb.forEach(function(e) {
        return e();
      });
    }
    var Xb = T.ReactCurrentActQueue;
    function Zb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Z0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Xb.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Jb = Math.ceil, LS = T.ReactCurrentDispatcher, MS = T.ReactCurrentOwner, Br = T.ReactCurrentBatchConfig, dl = T.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), J0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Fi = (
      /*                */
      4
    ), Bu = 0, jp = 1, rc = 2, Nm = 3, Hp = 4, eR = 5, US = 6, Tt = hr, Ea = null, On = null, mr = Y, Xl = Y, zS = Lo(Y), yr = Bu, Pp = null, Lm = Y, Vp = Y, Mm = Y, Bp = null, Va = null, AS = 0, tR = 500, nR = 1 / 0, e_ = 500, $u = null;
    function $p() {
      nR = Wn() + e_;
    }
    function rR() {
      return nR;
    }
    var Um = !1, FS = null, $f = null, ac = !1, $o = null, Ip = Y, jS = [], HS = null, t_ = 50, Yp = 0, PS = null, VS = !1, zm = !1, n_ = 50, If = 0, Am = null, Qp = Zt, Fm = Y, aR = !1;
    function jm() {
      return Ea;
    }
    function Ca() {
      return (Tt & ($r | Fi)) !== hr ? Wn() : (Qp !== Zt || (Qp = Wn()), Qp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & ht) === Me)
        return $e;
      if ((Tt & $r) !== hr && mr !== Y)
        return xs(mr);
      var a = X1() !== K1;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Fm === Dt && (Fm = Ud()), Fm;
      }
      var u = Aa();
      if (u !== Dt)
        return u;
      var s = zw();
      return s;
    }
    function r_(e) {
      var t = e.mode;
      return (t & ht) === Me ? $e : Bv();
    }
    function gr(e, t, a, i) {
      __(), aR && g("useInsertionEffect must not schedule updates."), VS && (zm = !0), Co(e, a, i), (Tt & $r) !== Y && e === Ea ? O_(t) : (Zr && ks(e, t, a), N_(t), e === Ea && ((Tt & $r) === hr && (Vp = at(Vp, a)), yr === Hp && Yo(e, mr)), Ba(e, i), a === $e && Tt === hr && (t.mode & ht) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && ($p(), aC()));
    }
    function a_(e, t, a) {
      var i = e.current;
      i.lanes = t, Co(e, t, a), Ba(e, a);
    }
    function i_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & $r) !== hr
      );
    }
    function Ba(e, t) {
      var a = e.callbackNode;
      Zc(e, t);
      var i = Xc(e, e === Ea ? mr : Y);
      if (i === Y) {
        a !== null && ER(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== GS)) {
        a == null && s !== $e && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && ER(a);
      var f;
      if (u === $e)
        e.tag === Mo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), M1(uR.bind(null, e))) : rC(uR.bind(null, e)), dl.current !== null ? dl.current.push(Uo) : Fw(function() {
          (Tt & ($r | Fi)) === hr && Uo();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
          case Lr:
            p = fs;
            break;
          case _i:
            p = Nl;
            break;
          case Ua:
            p = qi;
            break;
          case za:
            p = mu;
            break;
          default:
            p = qi;
            break;
        }
        f = qS(p, iR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function iR(e, t) {
      if (Tx(), Qp = Zt, Fm = Y, (Tt & ($r | Fi)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Xc(e, e === Ea ? mr : Y);
      if (u === Y)
        return null;
      var s = !ef(e, u) && !Vv(e, u) && !t, f = s ? h_(e, u) : Pm(e, u);
      if (f !== Bu) {
        if (f === rc) {
          var p = Jc(e);
          p !== Y && (u = p, f = BS(e, p));
        }
        if (f === jp) {
          var v = Pp;
          throw ic(e, Y), Yo(e, u), Ba(e, Wn()), v;
        }
        if (f === US)
          Yo(e, u);
        else {
          var y = !ef(e, u), S = e.current.alternate;
          if (y && !u_(S)) {
            if (f = Pm(e, u), f === rc) {
              var _ = Jc(e);
              _ !== Y && (u = _, f = BS(e, _));
            }
            if (f === jp) {
              var x = Pp;
              throw ic(e, Y), Yo(e, u), Ba(e, Wn()), x;
            }
          }
          e.finishedWork = S, e.finishedLanes = u, l_(e, f, u);
        }
      }
      return Ba(e, Wn()), e.callbackNode === a ? iR.bind(null, e) : null;
    }
    function BS(e, t) {
      var a = Bp;
      if (rf(e)) {
        var i = ic(e, t);
        i.flags |= Rr, b1(e.containerInfo);
      }
      var u = Pm(e, t);
      if (u !== rc) {
        var s = Va;
        Va = a, s !== null && lR(s);
      }
      return u;
    }
    function lR(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function l_(e, t, a) {
      switch (t) {
        case Bu:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        case rc: {
          lc(e, Va, $u);
          break;
        }
        case Nm: {
          if (Yo(e, a), _u(a) && // do not delay if we're inside an act() scope
          !CR()) {
            var i = AS + tR - Wn();
            if (i > 10) {
              var u = Xc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ca(), tf(e, s);
                break;
              }
              e.timeoutHandle = Hy(lc.bind(null, e, Va, $u), i);
              break;
            }
          }
          lc(e, Va, $u);
          break;
        }
        case Hp: {
          if (Yo(e, a), Ld(a))
            break;
          if (!CR()) {
            var f = ai(e, a), p = f, v = Wn() - p, y = b_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Hy(lc.bind(null, e, Va, $u), y);
              break;
            }
          }
          lc(e, Va, $u);
          break;
        }
        case eR: {
          lc(e, Va, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function u_(e) {
      for (var t = e; ; ) {
        if (t.flags & mo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!q(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = bs(t, Mm), t = bs(t, Vp), Yv(e, t);
    }
    function uR(e) {
      if (wx(), (Tt & ($r | Fi)) !== hr)
        throw new Error("Should not already be working.");
      Yu();
      var t = Xc(e, Y);
      if (!ea(t, $e))
        return Ba(e, Wn()), null;
      var a = Pm(e, t);
      if (e.tag !== Mo && a === rc) {
        var i = Jc(e);
        i !== Y && (t = i, a = BS(e, i));
      }
      if (a === jp) {
        var u = Pp;
        throw ic(e, Y), Yo(e, t), Ba(e, Wn()), u;
      }
      if (a === US)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, lc(e, Va, $u), Ba(e, Wn()), null;
    }
    function o_(e, t) {
      t !== Y && (nf(e, at(t, $e)), Ba(e, Wn()), (Tt & ($r | Fi)) === hr && ($p(), Uo()));
    }
    function $S(e, t) {
      var a = Tt;
      Tt |= J0;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && ($p(), aC());
      }
    }
    function s_(e, t, a, i, u) {
      var s = Aa(), f = Br.transition;
      try {
        return Br.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Br.transition = f, Tt === hr && $p();
      }
    }
    function Iu(e) {
      $o !== null && $o.tag === Mo && (Tt & ($r | Fi)) === hr && Yu();
      var t = Tt;
      Tt |= J0;
      var a = Br.transition, i = Aa();
      try {
        return Br.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Br.transition = a, Tt = t, (Tt & ($r | Fi)) === hr && Uo();
      }
    }
    function oR() {
      return (Tt & ($r | Fi)) !== hr;
    }
    function Hm(e, t) {
      ia(zS, Xl, e), Xl = at(Xl, t);
    }
    function IS(e) {
      Xl = zS.current, aa(zS, e);
    }
    function ic(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Py && (e.timeoutHandle = Py, Aw(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          F0(u, i), i = i.return;
        }
      Ea = e;
      var s = uc(e.current, null);
      return On = s, mr = Xl = t, yr = Bu, Pp = null, Lm = Y, Vp = Y, Mm = Y, Bp = null, Va = null, ax(), al.discardPendingWarnings(), s;
    }
    function sR(e, t) {
      do {
        var a = On;
        try {
          if (qh(), MC(), cn(), MS.current = null, a === null || a.return === null) {
            yr = jp, Pp = t, On = null;
            return;
          }
          if (Be && a.mode & Lt && wm(a, !0), Ye)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, mr);
            } else
              ps(a, t, mr);
          Mx(e, a.return, a, t, mr), pR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function cR() {
      var e = LS.current;
      return LS.current = Sm, e === null ? Sm : e;
    }
    function fR(e) {
      LS.current = e;
    }
    function c_() {
      AS = Wn();
    }
    function Wp(e) {
      Lm = at(e, Lm);
    }
    function f_() {
      yr === Bu && (yr = Nm);
    }
    function YS() {
      (yr === Bu || yr === Nm || yr === rc) && (yr = Hp), Ea !== null && (ws(Lm) || ws(Vp)) && Yo(Ea, mr);
    }
    function d_(e) {
      yr !== Hp && (yr = rc), Bp === null ? Bp = [e] : Bp.push(e);
    }
    function p_() {
      return yr === Bu;
    }
    function Pm(e, t) {
      var a = Tt;
      Tt |= $r;
      var i = cR();
      if (Ea !== e || mr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Gp(e, mr), u.clear()), Qv(e, t);
        }
        $u = jd(), ic(e, t);
      }
      Eu(t);
      do
        try {
          v_();
          break;
        } catch (s) {
          sR(e, s);
        }
      while (!0);
      if (qh(), Tt = a, fR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), Ea = null, mr = Y, yr;
    }
    function v_() {
      for (; On !== null; )
        dR(On);
    }
    function h_(e, t) {
      var a = Tt;
      Tt |= $r;
      var i = cR();
      if (Ea !== e || mr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Gp(e, mr), u.clear()), Qv(e, t);
        }
        $u = jd(), $p(), ic(e, t);
      }
      Eu(t);
      do
        try {
          m_();
          break;
        } catch (s) {
          sR(e, s);
        }
      while (!0);
      return qh(), fR(i), Tt = a, On !== null ? (Fv(), Bu) : (Mc(), Ea = null, mr = Y, yr);
    }
    function m_() {
      for (; On !== null && !yd(); )
        dR(On);
    }
    function dR(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & Lt) !== Me ? (Gg(e), a = QS(t, e, Xl), wm(e, !0)) : a = QS(t, e, Xl), cn(), e.memoizedProps = e.pendingProps, a === null ? pR(e) : On = a, MS.current = null;
    }
    function pR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & cs) === Le) {
          Qt(t);
          var u = void 0;
          if ((t.mode & Lt) === Me ? u = A0(a, t, Xl) : (Gg(t), u = A0(a, t, Xl), wm(t, !1)), cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = fb(a, t);
          if (s !== null) {
            s.flags &= Nv, On = s;
            return;
          }
          if ((t.mode & Lt) !== Me) {
            wm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= cs, i.subtreeFlags = Le, i.deletions = null;
          else {
            yr = US, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      yr === Bu && (yr = eR);
    }
    function lc(e, t, a) {
      var i = Aa(), u = Br.transition;
      try {
        Br.transition = null, jn(Lr), y_(e, t, a, i);
      } finally {
        Br.transition = u, jn(i);
      }
      return null;
    }
    function y_(e, t, a, i) {
      do
        Yu();
      while ($o !== null);
      if (k_(), (Tt & ($r | Fi)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Td(s), u === null)
        return wd(), null;
      if (s === Y && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = at(u.lanes, u.childLanes);
      Ad(e, f), e === Ea && (Ea = null, On = null, mr = Y), ((u.subtreeFlags & Gi) !== Le || (u.flags & Gi) !== Le) && (ac || (ac = !0, HS = a, qS(qi, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== Le, v = (u.flags & (kl | Dl | Ol | Gi)) !== Le;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var S = Aa();
        jn(Lr);
        var _ = Tt;
        Tt |= Fi, MS.current = null, mb(e, u), a0(), Ob(e, u, s), Dw(e.containerInfo), e.current = u, vs(s), Nb(u, e, s), hs(), gd(), Tt = _, jn(S), Br.transition = y;
      } else
        e.current = u, a0();
      var x = ac;
      if (ac ? (ac = !1, $o = e, Ip = s) : (If = 0, Am = null), f = e.pendingLanes, f === Y && ($f = null), x || yR(e.current, !1), Ed(u.stateNode, i), Zr && e.memoizedUpdaters.clear(), Kb(), Ba(e, Wn()), t !== null)
        for (var U = e.onRecoverableError, F = 0; F < t.length; F++) {
          var P = t[F], pe = P.stack, je = P.digest;
          U(P.value, {
            componentStack: pe,
            digest: je
          });
        }
      if (Um) {
        Um = !1;
        var ke = FS;
        throw FS = null, ke;
      }
      return ea(Ip, $e) && e.tag !== Mo && Yu(), f = e.pendingLanes, ea(f, $e) ? (Rx(), e === PS ? Yp++ : (Yp = 0, PS = e)) : Yp = 0, Uo(), wd(), null;
    }
    function Yu() {
      if ($o !== null) {
        var e = qv(Ip), t = Os(Ua, e), a = Br.transition, i = Aa();
        try {
          return Br.transition = null, jn(t), S_();
        } finally {
          jn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function g_(e) {
      jS.push(e), ac || (ac = !0, qS(qi, function() {
        return Yu(), null;
      }));
    }
    function S_() {
      if ($o === null)
        return !1;
      var e = HS;
      HS = null;
      var t = $o, a = Ip;
      if ($o = null, Ip = Y, (Tt & ($r | Fi)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      VS = !0, zm = !1, Su(a);
      var i = Tt;
      Tt |= Fi, jb(t.current), Ub(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Eb(t, f);
        }
      }
      _d(), yR(t.current, !0), Tt = i, Uo(), zm ? t === Am ? If++ : (If = 0, Am = t) : If = 0, VS = !1, zm = !1, Cd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function vR(e) {
      return $f !== null && $f.has(e);
    }
    function E_(e) {
      $f === null ? $f = /* @__PURE__ */ new Set([e]) : $f.add(e);
    }
    function C_(e) {
      Um || (Um = !0, FS = e);
    }
    var R_ = C_;
    function hR(e, t, a) {
      var i = tc(a, t), u = d0(e, i, $e), s = Ao(e, u, $e), f = Ca();
      s !== null && (Co(s, $e, f), Ba(s, f));
    }
    function fn(e, t, a) {
      if (pb(a), qp(!1), e.tag === K) {
        hR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === K) {
          hR(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !vR(s)) {
            var f = tc(a, e), p = dS(i, f, $e), v = Ao(i, p, $e), y = Ca();
            v !== null && (Co(v, $e, y), Ba(v, y));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function T_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      tf(e, a), L_(e), Ea === e && ku(mr, a) && (yr === Hp || yr === Nm && _u(mr) && Wn() - AS < tR ? ic(e, Y) : Mm = at(Mm, a)), Ba(e, u);
    }
    function mR(e, t) {
      t === Dt && (t = r_(e));
      var a = Ca(), i = Ha(e, t);
      i !== null && (Co(i, t, a), Ba(i, a));
    }
    function w_(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), mR(e, a);
    }
    function x_(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case Ne:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case un:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), mR(e, a);
    }
    function b_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Jb(e / 1960) * 1960;
    }
    function __() {
      if (Yp > t_)
        throw Yp = 0, PS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > n_ && (If = 0, Am = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function k_() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function yR(e, t) {
      Qt(e), Vm(e, _l, Wb), t && Vm(e, Ti, Gb), Vm(e, _l, Yb), t && Vm(e, Ti, Qb), cn();
    }
    function Vm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Le ? i = i.child : ((i.flags & t) !== Le && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Bm = null;
    function gR(e) {
      {
        if ((Tt & $r) !== hr || !(e.mode & ht))
          return;
        var t = e.tag;
        if (t !== Oe && t !== K && t !== ue && t !== ie && t !== We && t !== mt && t !== Ie)
          return;
        var a = qe(e) || "ReactComponent";
        if (Bm !== null) {
          if (Bm.has(a))
            return;
          Bm.add(a);
        } else
          Bm = /* @__PURE__ */ new Set([a]);
        var i = lr;
        try {
          Qt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : cn();
        }
      }
    }
    var QS;
    {
      var D_ = null;
      QS = function(e, t, a) {
        var i = bR(D_, t);
        try {
          return N0(e, t, a);
        } catch (s) {
          if (V1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (qh(), MC(), F0(e, t), bR(t, i), t.mode & Lt && Gg(t), bl(null, N0, null, e, t, a), Qi()) {
            var u = ss();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var SR = !1, WS;
    WS = /* @__PURE__ */ new Set();
    function O_(e) {
      if (mi && !Sx())
        switch (e.tag) {
          case ie:
          case We:
          case Ie: {
            var t = On && qe(On) || "Unknown", a = t;
            if (!WS.has(a)) {
              WS.add(a);
              var i = qe(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            SR || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), SR = !0);
            break;
          }
        }
    }
    function Gp(e, t) {
      if (Zr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ks(e, i, t);
        });
      }
    }
    var GS = {};
    function qS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), GS) : md(e, t);
      }
    }
    function ER(e) {
      if (e !== GS)
        return Mv(e);
    }
    function CR() {
      return dl.current !== null;
    }
    function N_(e) {
      {
        if (e.mode & ht) {
          if (!Z0())
            return;
        } else if (!Zb() || Tt !== hr || e.tag !== ie && e.tag !== We && e.tag !== Ie)
          return;
        if (dl.current === null) {
          var t = lr;
          try {
            Qt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, qe(e));
          } finally {
            t ? Qt(e) : cn();
          }
        }
      }
    }
    function L_(e) {
      e.tag !== Mo && Z0() && dl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qp(e) {
      aR = e;
    }
    var ji = null, Yf = null, M_ = function(e) {
      ji = e;
    };
    function Qf(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function KS(e) {
      return Qf(e);
    }
    function XS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function RR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ie: {
            (typeof i == "function" || s === Ke) && (u = !0);
            break;
          }
          case We: {
            (s === I || s === Ke) && (u = !0);
            break;
          }
          case mt:
          case Ie: {
            (s === et || s === Ke) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function TR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        Yf === null && (Yf = /* @__PURE__ */ new WeakSet()), Yf.add(e);
      }
    }
    var U_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          ZS(e.current, i, a);
        });
      }
    }, z_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Yu(), Iu(function() {
          Kp(t, e, null, null);
        });
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ie:
          case Ie:
          case ue:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, S = !1;
        if (v !== null) {
          var _ = ji(v);
          _ !== void 0 && (a.has(_) ? S = !0 : t.has(_) && (f === ue ? S = !0 : y = !0));
        }
        if (Yf !== null && (Yf.has(e) || i !== null && Yf.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || y) {
          var x = Ha(e, $e);
          x !== null && gr(x, e, $e, Zt);
        }
        u !== null && !S && ZS(u, t, a), s !== null && ZS(s, t, a);
      }
    }
    var A_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ie:
          case Ie:
          case ue:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? F_(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function F_(e, t) {
      {
        var a = j_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ae:
              t.add(i.stateNode);
              return;
            case Se:
              t.add(i.stateNode.containerInfo);
              return;
            case K:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function j_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ae)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var eE;
    {
      eE = !1;
      try {
        var wR = Object.preventExtensions({});
      } catch {
        eE = !0;
      }
    }
    function H_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !eE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new H_(e, t, a, i);
    };
    function tE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function P_(e) {
      return typeof e == "function" && !tE(e) && e.defaultProps === void 0;
    }
    function V_(e) {
      if (typeof e == "function")
        return tE(e) ? ue : ie;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return We;
        if (t === et)
          return mt;
      }
      return Oe;
    }
    function uc(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Oe:
        case ie:
        case Ie:
          a.type = Qf(e.type);
          break;
        case ue:
          a.type = KS(e.type);
          break;
        case We:
          a.type = XS(e.type);
          break;
      }
      return a;
    }
    function B_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Le, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function $_(e, t, a) {
      var i;
      return e === Hh ? (i = ht, t === !0 && (i |= qt, i |= Mt)) : i = Me, Zr && (i |= Lt), oi(K, null, null, i);
    }
    function nE(e, t, a, i, u, s) {
      var f = Oe, p = e;
      if (typeof e == "function")
        tE(e) ? (f = ue, p = KS(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = ae;
      else
        e: switch (e) {
          case di:
            return Qo(a.children, u, s, t);
          case Wa:
            f = rt, u |= qt, (u & ht) !== Me && (u |= Mt);
            break;
          case pi:
            return I_(a, u, s, t);
          case fe:
            return Y_(a, u, s, t);
          case Ee:
            return Q_(a, u, s, t);
          case wn:
            return xR(a, u, s, t);
          case nn:
          case yt:
          case sn:
          case ir:
          case vt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = Ze;
                  break e;
                case R:
                  f = Bt;
                  break e;
                case I:
                  f = We, p = XS(p);
                  break e;
                case et:
                  f = mt;
                  break e;
                case Ke:
                  f = ln, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? qe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var S = oi(f, a, t, u);
      return S.elementType = e, S.type = p, S.lanes = s, S._debugOwner = i, S;
    }
    function rE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = nE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qo(e, t, a, i) {
      var u = oi(nt, e, i, t);
      return u.lanes = a, u;
    }
    function I_(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(ft, e, i, t | Lt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Y_(e, t, a, i) {
      var u = oi(Ne, e, i, t);
      return u.elementType = fe, u.lanes = a, u;
    }
    function Q_(e, t, a, i) {
      var u = oi(un, e, i, t);
      return u.elementType = Ee, u.lanes = a, u;
    }
    function xR(e, t, a, i) {
      var u = oi(Ae, e, i, t);
      u.elementType = wn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function aE(e, t, a) {
      var i = oi(ze, e, null, t);
      return i.lanes = a, i;
    }
    function W_() {
      var e = oi(ae, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function G_(e) {
      var t = oi(Jt, null, null, Me);
      return t.stateNode = e, t;
    }
    function iE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(Se, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function bR(e, t) {
      return e === null && (e = oi(Oe, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function q_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Py, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = _s(Y), this.expirationTimes = _s(Zt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = _s(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Mo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function _R(e, t, a, i, u, s, f, p, v, y) {
      var S = new q_(e, t, a, p, v), _ = $_(t, s);
      S.current = _, _.stateNode = S;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = x;
      }
      return gg(_), S;
    }
    var lE = "18.3.1";
    function K_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ar,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var uE, oE;
    uE = !1, oE = {};
    function kR(e) {
      if (!e)
        return ui;
      var t = ho(e), a = L1(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Il(i))
          return tC(t, i, a);
      }
      return a;
    }
    function X_(e, t) {
      {
        var a = ho(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & qt) {
          var s = qe(a) || "Component";
          if (!oE[s]) {
            oE[s] = !0;
            var f = lr;
            try {
              Qt(u), a.mode & qt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Qt(f) : cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function DR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return _R(e, t, v, y, a, i, u, s, f);
    }
    function OR(e, t, a, i, u, s, f, p, v, y) {
      var S = !0, _ = _R(a, i, S, e, u, s, f, p, v);
      _.context = kR(null);
      var x = _.current, U = Ca(), F = Io(x), P = Pu(U, F);
      return P.callback = t ?? null, Ao(x, P, F), a_(_, F, U), _;
    }
    function Kp(e, t, a, i) {
      Sd(t, e);
      var u = t.current, s = Ca(), f = Io(u);
      gn(f);
      var p = kR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && lr !== null && !uE && (uE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(lr) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ao(u, v, f);
      return y !== null && (gr(y, u, f, s), em(y, u, f)), f;
    }
    function $m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Z_(e) {
      switch (e.tag) {
        case K: {
          var t = e.stateNode;
          if (rf(t)) {
            var a = Hv(t);
            o_(t, a);
          }
          break;
        }
        case Ne: {
          Iu(function() {
            var u = Ha(e, $e);
            if (u !== null) {
              var s = Ca();
              gr(u, e, $e, s);
            }
          });
          var i = $e;
          sE(e, i);
          break;
        }
      }
    }
    function NR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Iv(a.retryLane, t));
    }
    function sE(e, t) {
      NR(e, t);
      var a = e.alternate;
      a && NR(a, t);
    }
    function J_(e) {
      if (e.tag === Ne) {
        var t = Cs, a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        sE(e, t);
      }
    }
    function ek(e) {
      if (e.tag === Ne) {
        var t = Io(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        sE(e, t);
      }
    }
    function LR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var MR = function(e) {
      return null;
    };
    function tk(e) {
      return MR(e);
    }
    var UR = function(e) {
      return !1;
    };
    function nk(e) {
      return UR(e);
    }
    var zR = null, AR = null, FR = null, jR = null, HR = null, PR = null, VR = null, BR = null, $R = null;
    {
      var IR = function(e, t, a) {
        var i = t[a], u = ct(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (ct(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = IR(e[i], t, a + 1), u);
      }, YR = function(e, t) {
        return IR(e, t, 0);
      }, QR = function(e, t, a, i) {
        var u = t[i], s = ct(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ct(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = QR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, WR = function(e, t, a) {
        if (t.length !== a.length) {
          J("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              J("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return QR(e, t, a, 0);
      }, GR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ct(e) ? e.slice() : lt({}, e);
        return s[u] = GR(e[u], t, a + 1, i), s;
      }, qR = function(e, t, a) {
        return GR(e, t, 0, a);
      }, cE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      zR = function(e, t, a, i) {
        var u = cE(e, t);
        if (u !== null) {
          var s = qR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Ha(e, $e);
          f !== null && gr(f, e, $e, Zt);
        }
      }, AR = function(e, t, a) {
        var i = cE(e, t);
        if (i !== null) {
          var u = YR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = Ha(e, $e);
          s !== null && gr(s, e, $e, Zt);
        }
      }, FR = function(e, t, a, i) {
        var u = cE(e, t);
        if (u !== null) {
          var s = WR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Ha(e, $e);
          f !== null && gr(f, e, $e, Zt);
        }
      }, jR = function(e, t, a) {
        e.pendingProps = qR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, $e);
        i !== null && gr(i, e, $e, Zt);
      }, HR = function(e, t) {
        e.pendingProps = YR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, $e);
        a !== null && gr(a, e, $e, Zt);
      }, PR = function(e, t, a) {
        e.pendingProps = WR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, $e);
        i !== null && gr(i, e, $e, Zt);
      }, VR = function(e) {
        var t = Ha(e, $e);
        t !== null && gr(t, e, $e, Zt);
      }, BR = function(e) {
        MR = e;
      }, $R = function(e) {
        UR = e;
      };
    }
    function rk(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function ak(e) {
      return null;
    }
    function ik() {
      return lr;
    }
    function lk(e) {
      var t = e.findFiberByHostInstance, a = T.ReactCurrentDispatcher;
      return go({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: zR,
        overrideHookStateDeletePath: AR,
        overrideHookStateRenamePath: FR,
        overrideProps: jR,
        overridePropsDeletePath: HR,
        overridePropsRenamePath: PR,
        setErrorHandler: BR,
        setSuspenseHandler: $R,
        scheduleUpdate: VR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: rk,
        findFiberByHostInstance: t || ak,
        // React Refresh
        findHostInstancesForRefresh: A_,
        scheduleRefresh: U_,
        scheduleRoot: z_,
        setRefreshHandler: M_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ik,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: lE
      });
    }
    var KR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function fE(e) {
      this._internalRoot = e;
    }
    Im.prototype.render = fE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = LR(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Kp(e, t, null, null);
    }, Im.prototype.unmount = fE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        oR() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Kp(null, e, null, null);
        }), KE(t);
      }
    };
    function uk(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      XR(e);
      var a = !1, i = !1, u = "", s = KR;
      t != null && (t.hydrate ? J("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = DR(e, Hh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return np(p), new fE(f);
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function ok(e) {
      e && eh(e);
    }
    Im.prototype.unstable_scheduleHydration = ok;
    function sk(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      XR(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = KR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = OR(t, null, e, Hh, i, s, f, p, v);
      if (Lh(y.current, e), np(e), u)
        for (var S = 0; S < u.length; S++) {
          var _ = u[S];
          px(y, _);
        }
      return new Im(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === ad));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === ad || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function XR(e) {
      e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ck = T.ReactCurrentOwner, ZR;
    ZR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = LR(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = dE(e), u = !!(i && No(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function dE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function JR() {
    }
    function fk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = $m(f);
            s.call(x);
          };
        }
        var f = OR(
          t,
          i,
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          JR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return np(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = $m(S);
            y.call(x);
          };
        }
        var S = DR(
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          JR
        );
        e._reactRootContainer = S, Lh(S.current, e);
        var _ = e.nodeType === Mn ? e.parentNode : e;
        return np(_), Iu(function() {
          Kp(t, S, a, i);
        }), S;
      }
    }
    function dk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Qm(e, t, a, i, u) {
      ZR(a), dk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = fk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = $m(f);
            p.call(v);
          };
        }
        Kp(t, f, e, u);
      }
      return $m(f);
    }
    var eT = !1;
    function pk(e) {
      {
        eT || (eT = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = ck.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Wr ? e : X_(e, "findDOMNode");
    }
    function vk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Qm(null, e, t, !0, a);
    }
    function hk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Qm(null, e, t, !1, a);
    }
    function mk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !sy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Qm(e, t, a, !1, i);
    }
    var tT = !1;
    function yk(e) {
      if (tT || (tT = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = dE(e), i = a && !No(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Qm(null, null, e, !1, function() {
            e._reactRootContainer = null, KE(e);
          });
        }), !0;
      } else {
        {
          var u = dE(e), s = !!(u && No(u)), f = e.nodeType === Wr && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wr(Z_), Ro(J_), Kv(ek), Ls(Aa), Hd(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ec(Sw), oy($S, s_, Iu);
    function gk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return K_(e, t, null, a);
    }
    function Sk(e, t, a, i) {
      return mk(e, t, a, i);
    }
    var pE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, Tf, Mh, co, Cc, $S]
    };
    function Ek(e, t) {
      return pE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uk(e, t);
    }
    function Ck(e, t, a) {
      return pE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sk(e, t, a);
    }
    function Rk(e) {
      return oR() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var Tk = lk({
      findFiberByHostInstance: Qs,
      bundleType: 1,
      version: lE,
      rendererPackageName: "react-dom"
    });
    if (!Tk && Nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var nT = window.location.protocol;
      /^(https?|file):$/.test(nT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (nT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pE, Ia.createPortal = gk, Ia.createRoot = Ek, Ia.findDOMNode = pk, Ia.flushSync = Rk, Ia.hydrate = vk, Ia.hydrateRoot = Ck, Ia.render = hk, Ia.unmountComponentAtNode = yk, Ia.unstable_batchedUpdates = $S, Ia.unstable_renderSubtreeIntoContainer = Sk, Ia.version = lE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function mT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mT);
    } catch (j) {
      console.error(j);
    }
  }
}
process.env.NODE_ENV === "production" ? (mT(), SE.exports = Lk()) : SE.exports = Mk();
var Uk = SE.exports, EE, Gm = Uk;
if (process.env.NODE_ENV === "production")
  EE = Gm.createRoot, Gm.hydrateRoot;
else {
  var dT = Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  EE = function(j, M) {
    dT.usingClientEntryPoint = !0;
    try {
      return Gm.createRoot(j, M);
    } finally {
      dT.usingClientEntryPoint = !1;
    }
  };
}
var yT = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(j) {
  (function() {
    var M = {}.hasOwnProperty;
    function T() {
      for (var Q = [], ee = 0; ee < arguments.length; ee++) {
        var J = arguments[ee];
        if (J) {
          var g = typeof J;
          if (g === "string" || g === "number")
            Q.push(J);
          else if (Array.isArray(J)) {
            if (J.length) {
              var Ue = T.apply(null, J);
              Ue && Q.push(Ue);
            }
          } else if (g === "object")
            if (J.toString === Object.prototype.toString)
              for (var ie in J)
                M.call(J, ie) && J[ie] && Q.push(ie);
            else
              Q.push(J.toString());
        }
      }
      return Q.join(" ");
    }
    j.exports ? (T.default = T, j.exports = T) : window.classNames = T;
  })();
})(yT);
var zk = yT.exports;
const En = /* @__PURE__ */ CE(zk), Ak = re.forwardRef(
  ({
    checked: j,
    children: M,
    className: T,
    containerProps: Q = {},
    disabled: ee,
    indeterminate: J = !1,
    inline: g,
    label: Ue,
    ...ie
  }, ue) => {
    const Oe = re.useRef(null);
    return re.useEffect(() => {
      Oe.current && (Oe.current.indeterminate = J);
    }, [J]), /* @__PURE__ */ re.createElement(
      "div",
      {
        ...Q,
        className: En(
          "custom-control custom-checkbox",
          Q.className,
          {
            "custom-control-inline": g,
            "custom-control-outside": Ue
          }
        )
      },
      /* @__PURE__ */ re.createElement("label", null, /* @__PURE__ */ re.createElement(
        "input",
        {
          ...ie,
          checked: j,
          className: En(
            "custom-control-input",
            T
          ),
          disabled: ee,
          ref: (K) => {
            Oe.current = K, typeof ue == "function" && ue(K);
          },
          type: "checkbox"
        }
      ), /* @__PURE__ */ re.createElement("span", { className: "custom-control-label" }, Ue && /* @__PURE__ */ re.createElement("span", { className: "custom-control-label-text" }, Ue)), M)
    );
  }
);
Ak.displayName = "ClayCheckbox";
const gT = re.forwardRef(
  ({
    className: j,
    displayType: M,
    light: T,
    shape: Q,
    size: ee,
    small: J,
    ...g
  }, Ue) => /* @__PURE__ */ re.createElement(
    "span",
    {
      "aria-hidden": "true",
      ...g,
      className: En(j, {
        "loading-animation": [null, void 0, "", "circle"].indexOf(Q) > -1,
        [`loading-animation-${Q}`]: Q && ["", "circle"].indexOf(Q) === -1,
        "loading-animation-light": T,
        [`loading-animation-${M}`]: M && !T,
        "loading-animation-sm": J,
        [`loading-animation-${ee}`]: ee
      }),
      ref: Ue
    }
  )
);
gT.displayName = "ClayLoadingIndicator";
var Fk = gT, jk = process.env.NODE_ENV !== "production", ST = function() {
};
if (jk) {
  var Hk = function(M, T) {
    var Q = arguments.length;
    T = new Array(Q > 1 ? Q - 1 : 0);
    for (var ee = 1; ee < Q; ee++)
      T[ee - 1] = arguments[ee];
    var J = 0, g = "Warning: " + M.replace(/%s/g, function() {
      return T[J++];
    });
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  };
  ST = function(j, M, T) {
    var Q = arguments.length;
    T = new Array(Q > 2 ? Q - 2 : 0);
    for (var ee = 2; ee < Q; ee++)
      T[ee - 2] = arguments[ee];
    if (M === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    j || Hk.apply(null, [M].concat(T));
  };
}
var Pk = ST;
const ET = /* @__PURE__ */ CE(Pk);
function CT({
  children: j,
  className: M,
  role: T = "group",
  spaced: Q,
  vertical: ee,
  ...J
}) {
  return /* @__PURE__ */ re.createElement(
    "div",
    {
      ...J,
      className: En(M, {
        "btn-group": !Q && !ee,
        "btn-group-spaced": Q,
        "btn-group-vertical": ee
      }),
      role: T
    },
    j
  );
}
CT.displayName = "ClayButtonGroup";
var Vk = CT;
const RT = re.forwardRef(
  ({
    alert: j,
    block: M,
    borderless: T,
    children: Q,
    className: ee,
    dark: J,
    displayType: g = "primary",
    loading: Ue,
    monospaced: ie,
    outline: ue,
    rounded: Oe,
    size: K = "regular",
    small: Se,
    translucent: ae,
    type: ze = "button",
    ...nt
  }, rt) => {
    var Ze;
    const Bt = re.Children.toArray(Q);
    return ET(
      !(Bt.length === 1 && // @ts-ignore
      ((Ze = Bt[0].type) == null ? void 0 : Ze.displayName) === "ClayIcon" && typeof nt["aria-label"] != "string" && typeof nt["aria-labelledby"] != "string"),
      "Button Accessibility: Component has only the Icon declared. Define an `aria-label` or `aria-labelledby` attribute that labels the interactive button that screen readers can read. The `title` attribute is optional but consult your design team."
    ), g === "beta" ? (g = "info", ae = !0) : g === "beta-dark" && (J = !0, g = "info", ae = !0), /* @__PURE__ */ re.createElement(
      "button",
      {
        className: En(ee, "btn", {
          "alert-btn": j,
          "btn-block": M,
          "btn-monospaced": ie,
          "btn-outline-borderless": T,
          "btn-sm": Se && (!K || K === "regular"),
          "btn-translucent": ae,
          "clay-dark": J,
          [`btn-${g}`]: g && !ue && !T,
          [`btn-outline-${g}`]: g && (ue || T),
          "rounded-pill": Oe,
          [`btn-${K}`]: K && K !== "regular"
        }),
        ref: rt,
        type: ze,
        ...nt
      },
      Ue && /* @__PURE__ */ re.createElement("span", { className: "inline-item inline-item-before" }, /* @__PURE__ */ re.createElement(Fk, null)),
      Q
    );
  }
);
RT.displayName = "ClayButton";
const Bk = Object.assign(RT, {
  Group: Vk
});
var TT = Bk;
const $k = re.createContext(""), wT = re.forwardRef(
  ({ className: j, spritemap: M, symbol: T, ...Q }, ee) => {
    let J = re.useContext($k);
    return M && (J = M), ET(
      J,
      "ClayIcon requires a `spritemap` via prop or ClayIconSpriteContext"
    ), /* @__PURE__ */ re.createElement(
      "svg",
      {
        ...Q,
        className: En(
          `lexicon-icon lexicon-icon-${T}`,
          j
        ),
        key: T,
        ref: ee,
        role: "presentation"
      },
      /* @__PURE__ */ re.createElement("use", { href: `${J}#${T}` })
    );
  }
);
wT.displayName = "ClayIcon";
var Xm = wT;
const Ik = re.forwardRef(
  ({ monospaced: j = !0, spritemap: M, symbol: T, ...Q }, ee) => /* @__PURE__ */ re.createElement(TT, { ...Q, monospaced: j, ref: ee }, /* @__PURE__ */ re.createElement(Xm, { spritemap: M, symbol: T }))
);
Ik.displayName = "ClayButtonWithIcon";
var Yk = TT;
re.createContext(!1);
const xT = re.createContext("a");
xT.displayName = "ClayLinkContext";
var Qk = xT;
const pT = {
  danger: {
    base: "c-link text-danger",
    decoration: "underline"
  },
  primary: {
    base: "c-link link-primary",
    decoration: "underline"
  },
  secondary: {
    base: "c-link link-secondary",
    decoration: "underline"
  },
  tertiary: {
    base: "c-link text-tertiary",
    decoration: null
  },
  unstyled: {
    base: "link-unstyled",
    decoration: null
  }
}, vT = {
  normal: "font-weight-normal",
  "semi-bold": "font-weight-semi-bold"
}, Wk = {
  opensNewWindow: "(Opens a new window)"
}, bT = re.forwardRef(
  ({
    block: j,
    borderless: M,
    button: T,
    children: Q,
    className: ee,
    decoration: J,
    displayType: g,
    fontSize: Ue,
    messages: ie = Wk,
    monospaced: ue,
    outline: Oe,
    rel: K,
    small: Se,
    target: ae,
    weight: ze,
    ...nt
  }, rt) => {
    var We, ft;
    const Bt = re.useContext(Qk);
    let Ze;
    return T ? (T = T === !0 ? {} : T, Ze = {
      btn: !!T,
      "btn-block": T.block || j,
      "btn-monospaced": T.monospaced || ue,
      "btn-outline-borderless": M,
      "btn-sm": T.small || Se,
      [`btn-${g}`]: g && !Oe && !M,
      [`btn-outline-${g}`]: g && (Oe || M),
      [vT[ze]]: ze,
      [`text-${Ue}`]: Ue,
      [`text-decoration-${J}`]: J
    }) : (J = J === null || Oe ? void 0 : J || ((We = pT[g]) == null ? void 0 : We.decoration), Ze = {
      "link-monospaced": ue,
      "link-outline": Oe,
      "link-outline-borderless": M,
      [(ft = pT[g]) == null ? void 0 : ft.base]: g && !Oe,
      [`link-outline-${g}`]: g && Oe,
      [vT[ze]]: ze,
      [`text-${Ue}`]: Ue,
      [`text-decoration-${J}`]: J
    }), ae && !K && (K = "noreferrer noopener"), /* @__PURE__ */ re.createElement(
      Bt,
      {
        className: En(ee, Ze),
        ref: rt,
        rel: K,
        target: ae,
        ...nt
      },
      Q,
      ae === "_blank" && /* @__PURE__ */ re.createElement("span", { className: "sr-only" }, ie.opensNewWindow)
    );
  }
);
bT.displayName = "ClayLink";
var Gk = bT, qk = Gk;
const Kk = re.forwardRef(
  ({
    buttonDisplayType: j,
    buttonType: M,
    href: T,
    linkDisplayType: Q,
    onClick: ee,
    ...J
  }, g) => T ? /* @__PURE__ */ re.createElement(
    qk,
    {
      ...J,
      displayType: Q,
      href: T,
      onClick: ee,
      ref: g
    }
  ) : /* @__PURE__ */ re.createElement(
    Yk,
    {
      ...J,
      displayType: j,
      onClick: ee,
      ref: g,
      type: M
    }
  )
);
Kk.displayName = "ClayLinkOrButton";
const Xk = re.createContext({});
Xk.displayName = "ClayProviderContext";
const Zk = re.createContext(null);
Zk.displayName = "ClayPortalContext";
const _T = re.forwardRef(({ children: j, className: M, ...T }, Q) => /* @__PURE__ */ re.createElement(
  "div",
  {
    ...T,
    className: En("blockquote form-text", M),
    ref: Q
  },
  j
));
_T.displayName = "ClayFormBlockquoteText";
const kT = re.forwardRef(
  ({ children: j, className: M, small: T, ...Q }, ee) => /* @__PURE__ */ re.createElement(
    "div",
    {
      ...Q,
      className: En(
        "form-group",
        {
          "form-group-sm": T
        },
        M
      ),
      ref: ee
    },
    j
  )
);
kT.displayName = "ClayFormGroup";
const DT = re.forwardRef(({ children: j, className: M, ...T }, Q) => /* @__PURE__ */ re.createElement(
  "span",
  {
    ...T,
    className: En("form-help-text", M),
    ref: Q
  },
  j
));
DT.displayName = "ClayFormHelpText";
const OT = re.forwardRef(({ children: j, className: M, ...T }, Q) => /* @__PURE__ */ re.createElement(
  "div",
  {
    ...T,
    className: En("form-text", M),
    ref: Q
  },
  j
));
OT.displayName = "ClayFormText";
const NT = re.forwardRef(({ children: j, className: M, ...T }, Q) => /* @__PURE__ */ re.createElement(
  "div",
  {
    ...T,
    className: En("form-feedback-group", M),
    ref: Q
  },
  j
));
NT.displayName = "ClayFormFeedbackGroup";
const LT = re.forwardRef(({ children: j, className: M, ...T }, Q) => /* @__PURE__ */ re.createElement(
  "div",
  {
    ...T,
    className: En("form-feedback-item", M),
    ref: Q
  },
  j
));
LT.displayName = "ClayFormFeedbackItem";
const MT = re.forwardRef(
  ({ className: j, spritemap: M, symbol: T, ...Q }, ee) => /* @__PURE__ */ re.createElement(
    "span",
    {
      ...Q,
      className: En(
        "form-feedback-indicator",
        "inline-item-before",
        j
      ),
      ref: ee
    },
    /* @__PURE__ */ re.createElement(Xm, { spritemap: M, symbol: T })
  )
);
MT.displayName = "ClayFormFeedbackIndicator";
const UT = re.forwardRef(({ children: j, ...M }, T) => /* @__PURE__ */ re.createElement("form", { ...M, ref: T }, j));
UT.displayName = "ClayForm";
var Jk = Object.assign(UT, {
  BlockquoteText: _T,
  FeedbackGroup: NT,
  FeedbackIndicator: MT,
  FeedbackItem: LT,
  Group: kT,
  HelpText: DT,
  Text: OT
});
const zT = re.forwardRef(
  ({
    append: j,
    children: M,
    className: T,
    prepend: Q,
    shrink: ee,
    ...J
  }, g) => /* @__PURE__ */ re.createElement(
    "div",
    {
      ...J,
      className: En("input-group-item", T, {
        "input-group-append": j,
        "input-group-item-shrink": ee,
        "input-group-prepend": Q
      }),
      ref: g
    },
    M
  )
);
zT.displayName = "ClayInputGroupItem";
const AT = re.forwardRef(
  ({ children: j, className: M, small: T, stacked: Q, ...ee }, J) => /* @__PURE__ */ re.createElement(
    "div",
    {
      ...ee,
      className: En("input-group", M, {
        "input-group-sm": T,
        "input-group-stacked-sm-down": Q
      }),
      ref: J
    },
    j
  )
);
AT.displayName = "ClayInputGroup";
const FT = re.forwardRef(({ children: j, className: M, ...T }, Q) => /* @__PURE__ */ re.createElement(
  "div",
  {
    ...T,
    className: En("input-group-text", M),
    ref: Q
  },
  j
));
FT.displayName = "ClayInputGroupText";
const jT = re.forwardRef(
  ({
    after: j,
    before: M,
    children: T,
    className: Q,
    tag: ee = "div",
    ...J
  }, g) => /* @__PURE__ */ re.createElement(
    ee,
    {
      ...J,
      className: En("input-group-inset-item", Q, {
        "input-group-inset-item-after": j,
        "input-group-inset-item-before": M
      }),
      ref: g
    },
    T
  )
);
jT.displayName = "ClayInputGroupInsetItem";
const HT = re.forwardRef(
  ({
    className: j,
    component: M = "input",
    insetAfter: T,
    insetBefore: Q,
    sizing: ee = "regular",
    type: J = "text",
    ...g
  }, Ue) => /* @__PURE__ */ re.createElement(
    M,
    {
      ...g,
      className: En("form-control", j, {
        [`form-control-${ee}`]: ee && ee !== "regular",
        "input-group-inset": T || Q,
        "input-group-inset-after": T,
        "input-group-inset-before": Q
      }),
      ref: Ue,
      type: J
    }
  )
);
HT.displayName = "ClayInput";
const eD = Object.assign(HT, {
  Group: AT,
  GroupInsetItem: jT,
  GroupItem: zT,
  GroupText: FT
});
var tD = eD;
const nD = re.forwardRef(
  ({
    checked: j,
    children: M,
    className: T,
    containerProps: Q = { className: "" },
    inline: ee,
    label: J,
    ...g
  }, Ue) => /* @__PURE__ */ re.createElement(
    "div",
    {
      ...Q,
      className: En(
        "custom-control custom-radio",
        Q.className,
        {
          "custom-control-inline": ee,
          "custom-control-outside": J
        }
      )
    },
    /* @__PURE__ */ re.createElement("label", null, /* @__PURE__ */ re.createElement(
      "input",
      {
        ...g,
        checked: j,
        className: En(
          "custom-control-input",
          T
        ),
        ref: Ue,
        role: "radio",
        type: "radio"
      }
    ), /* @__PURE__ */ re.createElement("span", { className: "custom-control-label" }, J && /* @__PURE__ */ re.createElement("span", { className: "custom-control-label-text" }, J)), M)
  )
);
nD.displayName = "ClayRadio";
function rD({
  children: j,
  ...M
}) {
  return /* @__PURE__ */ re.createElement("optgroup", { ...M }, j);
}
function aD({
  label: j,
  ...M
}) {
  return /* @__PURE__ */ re.createElement("option", { ...M }, j);
}
const RE = Gu.forwardRef(
  ({ children: j, className: M, shrink: T, sizing: Q, ...ee }, J) => /* @__PURE__ */ re.createElement(
    "select",
    {
      ref: J,
      ...ee,
      className: En("form-control", M, {
        "form-control-shrink": T,
        [`form-control-${Q}`]: Q
      })
    },
    j
  )
);
RE.OptGroup = rD;
RE.Option = aD;
var qm = RE;
Gu.forwardRef(
  ({ options: j = [], ...M }, T) => /* @__PURE__ */ re.createElement(qm, { ref: T, ...M }, j.map((Q, ee) => {
    var J;
    return Q.type === "group" ? /* @__PURE__ */ re.createElement(qm.OptGroup, { key: ee, label: Q.label }, (J = Q.options) == null ? void 0 : J.map((g, Ue) => /* @__PURE__ */ re.createElement(qm.Option, { ...g, key: Ue }))) : /* @__PURE__ */ re.createElement(qm.Option, { ...Q, key: ee });
  }))
);
const iD = re.forwardRef(
  ({
    checked: j,
    containerProps: M = {},
    disabled: T,
    id: Q,
    label: ee,
    onChange: J,
    onToggle: g,
    role: Ue = "switch",
    sizing: ie,
    spritemap: ue,
    symbol: Oe,
    toggled: K,
    type: Se = "checkbox",
    value: ae,
    ...ze
  }, nt) => (Se === "radio" && (Ue = "radio", K = j), /* @__PURE__ */ re.createElement(
    "label",
    {
      ...M,
      className: En(
        "toggle-switch",
        "simple-toggle-switch",
        M.className,
        {
          disabled: T,
          [`toggle-switch-${ie}`]: ie
        }
      ),
      ref: nt
    },
    /* @__PURE__ */ re.createElement("span", { className: "toggle-switch-check-bar" }, /* @__PURE__ */ re.createElement(
      "input",
      {
        ...ze,
        checked: K,
        className: "toggle-switch-check",
        disabled: T,
        id: Q,
        onChange: (rt) => {
          J && J(rt), g && g(!K);
        },
        role: Ue,
        type: Se,
        value: ae
      }
    ), /* @__PURE__ */ re.createElement("span", { "aria-hidden": "true", className: "toggle-switch-bar" }, /* @__PURE__ */ re.createElement("span", { className: "toggle-switch-handle" }, Oe && /* @__PURE__ */ re.createElement(re.Fragment, null, /* @__PURE__ */ re.createElement(
      "span",
      {
        className: En(
          "button-icon",
          "button-icon-on",
          "toggle-switch-icon"
        )
      },
      /* @__PURE__ */ re.createElement(
        Xm,
        {
          spritemap: ue,
          symbol: Oe.on
        }
      )
    ), /* @__PURE__ */ re.createElement(
      "span",
      {
        className: En(
          "button-icon",
          "button-icon-off",
          "toggle-switch-icon"
        )
      },
      /* @__PURE__ */ re.createElement(
        Xm,
        {
          spritemap: ue,
          symbol: Oe.off
        }
      )
    ))))),
    ee && /* @__PURE__ */ re.createElement("span", { className: "toggle-switch-label" }, ee)
  ))
);
iD.displayName = "ClayToggle";
var Km = Jk;
const mE = "_com_liferay_commerce_checkout_web_internal_portlet_CommerceCheckoutPortlet_";
function lD() {
  const [j, M] = Gu.useState(""), [T, Q] = Gu.useState(!1), ee = T && j.trim() === "";
  return /* @__PURE__ */ Wu.jsxs(Km, { children: [
    /* @__PURE__ */ Wu.jsx("h3", { className: "text-dark", children: "B2B Purchase Order" }),
    /* @__PURE__ */ Wu.jsx("p", { className: "text-secondary", children: "Please enter your authorized PO Number to proceed with this wholesale transaction." }),
    /* @__PURE__ */ Wu.jsxs(Km.Group, { className: ee ? "has-error" : "", children: [
      /* @__PURE__ */ Wu.jsx("label", { htmlFor: `${mE}poNumber`, children: "Purchase Order Number" }),
      /* @__PURE__ */ Wu.jsx(
        tD,
        {
          id: `${mE}poNumber`,
          name: `${mE}poNumber`,
          placeholder: "e.g., PO-998877",
          required: !0,
          type: "text",
          value: j,
          onChange: (J) => M(J.target.value),
          onBlur: () => Q(!0)
        }
      ),
      ee && /* @__PURE__ */ Wu.jsx(Km.FeedbackGroup, { children: /* @__PURE__ */ Wu.jsx(Km.FeedbackItem, { children: "A purchase order number is required." }) })
    ] })
  ] });
}
function cD() {
  const M = document.getElementById("_com_liferay_commerce_checkout_web_internal_portlet_CommerceCheckoutPortlet_commerceCheckoutStepContainer");
  if (M) {
    M.innerHTML = "";
    const T = document.createElement("div");
    M.appendChild(T), EE(T).render(/* @__PURE__ */ Wu.jsx(lD, {}));
  } else
    console.error(
      "Clarity Checkout Step Error: Liferay container not found on the page."
    );
}
export {
  cD as default
};
