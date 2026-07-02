(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Q1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _0={exports:{}},$u={},v0={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),Y1=Symbol.for("react.portal"),J1=Symbol.for("react.fragment"),X1=Symbol.for("react.strict_mode"),Z1=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),nI=Symbol.for("react.forward_ref"),rI=Symbol.for("react.suspense"),sI=Symbol.for("react.memo"),iI=Symbol.for("react.lazy"),tg=Symbol.iterator;function oI(t){return t===null||typeof t!="object"?null:(t=tg&&t[tg]||t["@@iterator"],typeof t=="function"?t:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,T0={};function ki(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||w0}ki.prototype.isReactComponent={};ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I0(){}I0.prototype=ki.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||w0}var df=hf.prototype=new I0;df.constructor=hf;E0(df,ki.prototype);df.isPureReactComponent=!0;var ng=Array.isArray,x0=Object.prototype.hasOwnProperty,ff={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)x0.call(e,r)&&!k0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:da,type:t,key:i,ref:o,props:s,_owner:ff.current}}function aI(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function lI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rg=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lI(""+t.key):e.toString(36)}function xl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case Y1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Xc(o,0):r,ng(s)?(n="",t!=null&&(n=t.replace(rg,"$&/")+"/"),xl(s,e,n,"",function(c){return c})):s!=null&&(pf(s)&&(s=aI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(rg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ng(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Xc(i,l);o+=xl(i,e,n,u,s)}else if(u=oI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Xc(i,l++),o+=xl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(t,e,n){if(t==null)return t;var r=[],s=0;return xl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function uI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},kl={transition:null},cI={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:kl,ReactCurrentOwner:ff};function A0(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=ki;he.Fragment=J1;he.Profiler=Z1;he.PureComponent=hf;he.StrictMode=X1;he.Suspense=rI;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;he.act=A0;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=E0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ff.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)x0.call(e,u)&&!k0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:da,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:tI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eI,_context:t},t.Consumer=t};he.createElement=S0;he.createFactory=function(t){var e=S0.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:nI,render:t}};he.isValidElement=pf;he.lazy=function(t){return{$$typeof:iI,_payload:{_status:-1,_result:t},_init:uI}};he.memo=function(t,e){return{$$typeof:sI,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};he.unstable_act=A0;he.useCallback=function(t,e){return It.current.useCallback(t,e)};he.useContext=function(t){return It.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return It.current.useDeferredValue(t)};he.useEffect=function(t,e){return It.current.useEffect(t,e)};he.useId=function(){return It.current.useId()};he.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return It.current.useMemo(t,e)};he.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};he.useRef=function(t){return It.current.useRef(t)};he.useState=function(t){return It.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return It.current.useTransition()};he.version="18.3.1";v0.exports=he;var Y=v0.exports;const pn=Q1(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hI=Y,dI=Symbol.for("react.element"),fI=Symbol.for("react.fragment"),pI=Object.prototype.hasOwnProperty,mI=hI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gI={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pI.call(e,r)&&!gI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:dI,type:t,key:i,ref:o,props:s,_owner:mI.current}}$u.Fragment=fI;$u.jsx=C0;$u.jsxs=C0;_0.exports=$u;var f=_0.exports,R0={exports:{}},zt={},b0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,J){var G=z.length;z.push(J);e:for(;0<G;){var ue=G-1>>>1,oe=z[ue];if(0<s(oe,J))z[ue]=J,z[G]=oe,G=ue;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var J=z[0],G=z.pop();if(G!==J){z[0]=G;e:for(var ue=0,oe=z.length,se=oe>>>1;ue<se;){var _t=2*(ue+1)-1,kt=z[_t],tn=_t+1,Wt=z[tn];if(0>s(kt,G))tn<oe&&0>s(Wt,kt)?(z[ue]=Wt,z[tn]=G,ue=tn):(z[ue]=kt,z[_t]=G,ue=_t);else if(tn<oe&&0>s(Wt,G))z[ue]=Wt,z[tn]=G,ue=tn;else break e}}return J}function s(z,J){var G=z.sortIndex-J.sortIndex;return G!==0?G:z.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,m=null,g=3,v=!1,A=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=z)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function N(z){if(b=!1,S(z),!A)if(n(u)!==null)A=!0,Ue(U);else{var J=n(c);J!==null&&Be(N,J.startTime-z)}}function U(z,J){A=!1,b&&(b=!1,k(_),_=-1),v=!0;var G=g;try{for(S(J),m=n(u);m!==null&&(!(m.expirationTime>J)||z&&!C());){var ue=m.callback;if(typeof ue=="function"){m.callback=null,g=m.priorityLevel;var oe=ue(m.expirationTime<=J);J=t.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(u)&&r(u),S(J)}else r(u);m=n(u)}if(m!==null)var se=!0;else{var _t=n(c);_t!==null&&Be(N,_t.startTime-J),se=!1}return se}finally{m=null,g=G,v=!1}}var F=!1,T=null,_=-1,E=5,I=-1;function C(){return!(t.unstable_now()-I<E)}function R(){if(T!==null){var z=t.unstable_now();I=z;var J=!0;try{J=T(!0,z)}finally{J?x():(F=!1,T=null)}}else F=!1}var x;if(typeof w=="function")x=function(){w(R)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ee=B.port2;B.port1.onmessage=R,x=function(){ee.postMessage(null)}}else x=function(){O(R,0)};function Ue(z){T=z,F||(F=!0,x())}function Be(z,J){_=O(function(){z(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||v||(A=!0,Ue(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var G=g;g=J;try{return z()}finally{g=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=g;g=z;try{return J()}finally{g=G}},t.unstable_scheduleCallback=function(z,J,G){var ue=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ue+G:ue):G=ue,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=G+oe,z={id:d++,callback:J,priorityLevel:z,startTime:G,expirationTime:oe,sortIndex:-1},G>ue?(z.sortIndex=G,e(c,z),n(u)===null&&z===n(c)&&(b?(k(_),_=-1):b=!0,Be(N,G-ue))):(z.sortIndex=oe,e(u,z),A||v||(A=!0,Ue(U))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var J=g;return function(){var G=g;g=J;try{return z.apply(this,arguments)}finally{g=G}}}})(P0);b0.exports=P0;var yI=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _I=Y,$t=yI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,jo={};function xs(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(jo[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,vI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},ig={};function wI(t){return $h.call(ig,t)?!0:$h.call(sg,t)?!1:vI.test(t)?ig[t]=!0:(sg[t]=!0,!1)}function EI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TI(t,e,n,r){if(e===null||typeof e>"u"||EI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mf,gf);ot[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mf,gf);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mf,gf);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,r){var s=ot.hasOwnProperty(e)?ot[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TI(e,n,s,r)&&(n=null),r||s===null?wI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=_I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),$s=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),zh=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),vf=Symbol.for("react.forward_ref"),Hh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),L0=Symbol.for("react.offscreen"),og=Symbol.iterator;function Zi(t){return t===null||typeof t!="object"?null:(t=og&&t[og]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Zc;function co(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var eh=!1;function th(t,e){if(!t||eh)return"";eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{eh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function II(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=th(t.type,!1),t;case 11:return t=th(t.type.render,!1),t;case 1:return t=th(t.type,!0),t;default:return""}}function qh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zs:return"Fragment";case $s:return"Portal";case zh:return"Profiler";case _f:return"StrictMode";case Hh:return"Suspense";case Wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D0:return(t.displayName||"Context")+".Consumer";case O0:return(t._context.displayName||"Context")+".Provider";case vf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wf:return e=t.displayName||null,e!==null?e:qh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return qh(t(e))}catch{}}return null}function xI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qh(e);case 8:return e===_f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kI(t){var e=V0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=kI(t))}function M0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=V0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gh(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ag(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function Kh(t,e){j0(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qh(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qh(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ug(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ho(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function F0(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function U0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?U0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SI=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){SI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function $0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=$0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var AI=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xh(t,e){if(e){if(AI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Zh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,ni=null,ri=null;function hg(t){if(t=ma(t)){if(typeof td!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Gu(e),td(t.stateNode,t.type,e))}}function H0(t){ni?ri?ri.push(t):ri=[t]:ni=t}function W0(){if(ni){var t=ni,e=ri;if(ri=ni=null,hg(t),e)for(t=0;t<e.length;t++)hg(e[t])}}function q0(t,e){return t(e)}function G0(){}var nh=!1;function K0(t,e,n){if(nh)return t(e,n);nh=!0;try{return q0(t,e,n)}finally{nh=!1,(ni!==null||ri!==null)&&(G0(),W0())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var nd=!1;if($n)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){nd=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{nd=!1}function CI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var To=!1,Ql=null,Yl=!1,rd=null,RI={onError:function(t){To=!0,Ql=t}};function bI(t,e,n,r,s,i,o,l,u){To=!1,Ql=null,CI.apply(RI,arguments)}function PI(t,e,n,r,s,i,o,l,u){if(bI.apply(this,arguments),To){if(To){var c=Ql;To=!1,Ql=null}else throw Error(j(198));Yl||(Yl=!0,rd=c)}}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dg(t){if(ks(t)!==t)throw Error(j(188))}function NI(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return dg(s),t;if(i===r)return dg(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Y0(t){return t=NI(t),t!==null?J0(t):null}function J0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J0(t);if(e!==null)return e;t=t.sibling}return null}var X0=$t.unstable_scheduleCallback,fg=$t.unstable_cancelCallback,OI=$t.unstable_shouldYield,DI=$t.unstable_requestPaint,He=$t.unstable_now,LI=$t.unstable_getCurrentPriorityLevel,Tf=$t.unstable_ImmediatePriority,Z0=$t.unstable_UserBlockingPriority,Jl=$t.unstable_NormalPriority,VI=$t.unstable_LowPriority,ev=$t.unstable_IdlePriority,zu=null,Tn=null;function MI(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(zu,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:UI,jI=Math.log,FI=Math.LN2;function UI(t){return t>>>=0,t===0?32:31-(jI(t)/FI|0)|0}var rl=64,sl=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=fo(l):(i&=o,i!==0&&(r=fo(i)))}else o=n&~s,o!==0?r=fo(o):i!==0&&(r=fo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),s=1<<n,r|=t[n],e&=~s;return r}function BI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $I(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-un(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=BI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tv(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function rh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function zI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-un(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function If(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var we=0;function nv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rv,xf,sv,iv,ov,id=!1,il=[],wr=null,Er=null,Tr=null,Bo=new Map,$o=new Map,cr=[],HI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function to(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ma(e),e!==null&&xf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function WI(t,e,n,r,s){switch(e){case"focusin":return wr=to(wr,t,e,n,r,s),!0;case"dragenter":return Er=to(Er,t,e,n,r,s),!0;case"mouseover":return Tr=to(Tr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Bo.set(i,to(Bo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,$o.set(i,to($o.get(i)||null,t,e,n,r,s)),!0}return!1}function av(t){var e=ss(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=Q0(n),e!==null){t.blockedOn=e,ov(t.priority,function(){sv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ed=r,n.target.dispatchEvent(r),ed=null}else return e=ma(n),e!==null&&xf(e),t.blockedOn=n,!1;e.shift()}return!0}function mg(t,e,n){Sl(t)&&n.delete(e)}function qI(){id=!1,wr!==null&&Sl(wr)&&(wr=null),Er!==null&&Sl(Er)&&(Er=null),Tr!==null&&Sl(Tr)&&(Tr=null),Bo.forEach(mg),$o.forEach(mg)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,id||(id=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,qI)))}function zo(t){function e(s){return no(s,t)}if(0<il.length){no(il[0],t);for(var n=1;n<il.length;n++){var r=il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&no(wr,t),Er!==null&&no(Er,t),Tr!==null&&no(Tr,t),Bo.forEach(e),$o.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)av(n),n.blockedOn===null&&cr.shift()}var si=Xn.ReactCurrentBatchConfig,Zl=!0;function GI(t,e,n,r){var s=we,i=si.transition;si.transition=null;try{we=1,kf(t,e,n,r)}finally{we=s,si.transition=i}}function KI(t,e,n,r){var s=we,i=si.transition;si.transition=null;try{we=4,kf(t,e,n,r)}finally{we=s,si.transition=i}}function kf(t,e,n,r){if(Zl){var s=od(t,e,n,r);if(s===null)fh(t,e,r,eu,n),pg(t,r);else if(WI(s,t,e,n,r))r.stopPropagation();else if(pg(t,r),e&4&&-1<HI.indexOf(t)){for(;s!==null;){var i=ma(s);if(i!==null&&rv(i),i=od(t,e,n,r),i===null&&fh(t,e,r,eu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else fh(t,e,r,null,n)}}var eu=null;function od(t,e,n,r){if(eu=null,t=Ef(r),t=ss(t),t!==null)if(e=ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function lv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LI()){case Tf:return 1;case Z0:return 4;case Jl:case VI:return 16;case ev:return 536870912;default:return 16}default:return 16}}var yr=null,Sf=null,Al=null;function uv(){if(Al)return Al;var t,e=Sf,n=e.length,r,s="value"in yr?yr.value:yr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Al=s.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function gg(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ol:gg,this.isPropagationStopped=gg,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=Ht(Si),pa=Oe({},Si,{view:0,detail:0}),QI=Ht(pa),sh,ih,ro,Hu=Oe({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(sh=t.screenX-ro.screenX,ih=t.screenY-ro.screenY):ih=sh=0,ro=t),sh)},movementY:function(t){return"movementY"in t?t.movementY:ih}}),yg=Ht(Hu),YI=Oe({},Hu,{dataTransfer:0}),JI=Ht(YI),XI=Oe({},pa,{relatedTarget:0}),oh=Ht(XI),ZI=Oe({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=Ht(ZI),tx=Oe({},Si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=Ht(tx),rx=Oe({},Si,{data:0}),_g=Ht(rx),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ox[t])?!!e[t]:!1}function Cf(){return ax}var lx=Oe({},pa,{key:function(t){if(t.key){var e=sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ux=Ht(lx),cx=Oe({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vg=Ht(cx),hx=Oe({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),dx=Ht(hx),fx=Oe({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=Ht(fx),mx=Oe({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=Ht(mx),yx=[9,13,27,32],Rf=$n&&"CompositionEvent"in window,Io=null;$n&&"documentMode"in document&&(Io=document.documentMode);var _x=$n&&"TextEvent"in window&&!Io,cv=$n&&(!Rf||Io&&8<Io&&11>=Io),wg=" ",Eg=!1;function hv(t,e){switch(t){case"keyup":return yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function vx(t,e){switch(t){case"compositionend":return dv(e);case"keypress":return e.which!==32?null:(Eg=!0,wg);case"textInput":return t=e.data,t===wg&&Eg?null:t;default:return null}}function wx(t,e){if(Hs)return t==="compositionend"||!Rf&&hv(t,e)?(t=uv(),Al=Sf=yr=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cv&&e.locale!=="ko"?null:e.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ex[t.type]:e==="textarea"}function fv(t,e,n,r){H0(r),e=tu(e,"onChange"),0<e.length&&(n=new Af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,Ho=null;function Tx(t){xv(t,0)}function Wu(t){var e=Gs(t);if(M0(e))return t}function Ix(t,e){if(t==="change")return e}var pv=!1;if($n){var ah;if($n){var lh="oninput"in document;if(!lh){var Ig=document.createElement("div");Ig.setAttribute("oninput","return;"),lh=typeof Ig.oninput=="function"}ah=lh}else ah=!1;pv=ah&&(!document.documentMode||9<document.documentMode)}function xg(){xo&&(xo.detachEvent("onpropertychange",mv),Ho=xo=null)}function mv(t){if(t.propertyName==="value"&&Wu(Ho)){var e=[];fv(e,Ho,t,Ef(t)),K0(Tx,e)}}function xx(t,e,n){t==="focusin"?(xg(),xo=e,Ho=n,xo.attachEvent("onpropertychange",mv)):t==="focusout"&&xg()}function kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(Ho)}function Sx(t,e){if(t==="click")return Wu(e)}function Ax(t,e){if(t==="input"||t==="change")return Wu(e)}function Cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:Cx;function Wo(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!$h.call(e,s)||!hn(t[s],e[s]))return!1}return!0}function kg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sg(t,e){var n=kg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kg(n)}}function gv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rx(t){var e=yv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gv(n.ownerDocument.documentElement,n)){if(r!==null&&bf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Sg(n,i);var o=Sg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bx=$n&&"documentMode"in document&&11>=document.documentMode,Ws=null,ad=null,ko=null,ld=!1;function Ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Ws==null||Ws!==Kl(r)||(r=Ws,"selectionStart"in r&&bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Wo(ko,r)||(ko=r,r=tu(ad,"onSelect"),0<r.length&&(e=new Af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ws)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},uh={},_v={};$n&&(_v=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function qu(t){if(uh[t])return uh[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _v)return uh[t]=e[n];return t}var vv=qu("animationend"),wv=qu("animationiteration"),Ev=qu("animationstart"),Tv=qu("transitionend"),Iv=new Map,Cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){Iv.set(t,e),xs(e,[t])}for(var ch=0;ch<Cg.length;ch++){var hh=Cg[ch],Px=hh.toLowerCase(),Nx=hh[0].toUpperCase()+hh.slice(1);Hr(Px,"on"+Nx)}Hr(vv,"onAnimationEnd");Hr(wv,"onAnimationIteration");Hr(Ev,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(Tv,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PI(r,e,void 0,t),t.currentTarget=null}function xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Rg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Rg(s,l,c),i=u}}}if(Yl)throw t=rd,Yl=!1,rd=null,t}function Se(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var r=t+"__bubble";n.has(r)||(kv(e,t,2,!1),n.add(r))}function dh(t,e,n){var r=0;e&&(r|=4),kv(n,t,r,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[ll]){t[ll]=!0,N0.forEach(function(n){n!=="selectionchange"&&(Ox.has(n)||dh(n,!1,t),dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,dh("selectionchange",!1,e))}}function kv(t,e,n,r){switch(lv(e)){case 1:var s=GI;break;case 4:s=KI;break;default:s=kf}n=s.bind(null,e,n,t),s=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function fh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ss(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}K0(function(){var c=i,d=Ef(n),m=[];e:{var g=Iv.get(t);if(g!==void 0){var v=Af,A=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":v=ux;break;case"focusin":A="focus",v=oh;break;case"focusout":A="blur",v=oh;break;case"beforeblur":case"afterblur":v=oh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=JI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=dx;break;case vv:case wv:case Ev:v=ex;break;case Tv:v=px;break;case"scroll":v=QI;break;case"wheel":v=gx;break;case"copy":case"cut":case"paste":v=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=vg}var b=(e&4)!==0,O=!b&&t==="scroll",k=b?g!==null?g+"Capture":null:g;b=[];for(var w=c,S;w!==null;){S=w;var N=S.stateNode;if(S.tag===5&&N!==null&&(S=N,k!==null&&(N=Uo(w,k),N!=null&&b.push(Go(w,N,S)))),O)break;w=w.return}0<b.length&&(g=new v(g,A,null,n,d),m.push({event:g,listeners:b}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==ed&&(A=n.relatedTarget||n.fromElement)&&(ss(A)||A[zn]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(A=n.relatedTarget||n.toElement,v=c,A=A?ss(A):null,A!==null&&(O=ks(A),A!==O||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=c),v!==A)){if(b=yg,N="onMouseLeave",k="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=vg,N="onPointerLeave",k="onPointerEnter",w="pointer"),O=v==null?g:Gs(v),S=A==null?g:Gs(A),g=new b(N,w+"leave",v,n,d),g.target=O,g.relatedTarget=S,N=null,ss(d)===c&&(b=new b(k,w+"enter",A,n,d),b.target=S,b.relatedTarget=O,N=b),O=N,v&&A)t:{for(b=v,k=A,w=0,S=b;S;S=Ms(S))w++;for(S=0,N=k;N;N=Ms(N))S++;for(;0<w-S;)b=Ms(b),w--;for(;0<S-w;)k=Ms(k),S--;for(;w--;){if(b===k||k!==null&&b===k.alternate)break t;b=Ms(b),k=Ms(k)}b=null}else b=null;v!==null&&bg(m,g,v,b,!1),A!==null&&O!==null&&bg(m,O,A,b,!0)}}e:{if(g=c?Gs(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var U=Ix;else if(Tg(g))if(pv)U=Ax;else{U=kx;var F=xx}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=Sx);if(U&&(U=U(t,c))){fv(m,U,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Qh(g,"number",g.value)}switch(F=c?Gs(c):window,t){case"focusin":(Tg(F)||F.contentEditable==="true")&&(Ws=F,ad=c,ko=null);break;case"focusout":ko=ad=Ws=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Ag(m,n,d);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Ag(m,n,d)}var T;if(Rf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Hs?hv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(cv&&n.locale!=="ko"&&(Hs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Hs&&(T=uv()):(yr=d,Sf="value"in yr?yr.value:yr.textContent,Hs=!0)),F=tu(c,_),0<F.length&&(_=new _g(_,t,null,n,d),m.push({event:_,listeners:F}),T?_.data=T:(T=dv(n),T!==null&&(_.data=T)))),(T=_x?vx(t,n):wx(t,n))&&(c=tu(c,"onBeforeInput"),0<c.length&&(d=new _g("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=T))}xv(m,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Uo(t,n),i!=null&&r.unshift(Go(t,i,s)),i=Uo(t,e),i!=null&&r.push(Go(t,i,s))),t=t.return}return r}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Uo(n,i),u!=null&&o.unshift(Go(n,u,l))):s||(u=Uo(n,i),u!=null&&o.push(Go(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dx=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Lx,"")}function ul(t,e,n){if(e=Pg(e),Pg(t)!==e&&n)throw Error(j(425))}function nu(){}var ud=null,cd=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(jx)}:dd;function jx(t){setTimeout(function(){throw t})}function ph(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);zo(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),wn="__reactFiber$"+Ai,Ko="__reactProps$"+Ai,zn="__reactContainer$"+Ai,fd="__reactEvents$"+Ai,Fx="__reactListeners$"+Ai,Ux="__reactHandles$"+Ai;function ss(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Og(t);t!==null;){if(n=t[wn])return n;t=Og(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[wn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Gu(t){return t[Ko]||null}var pd=[],Ks=-1;function Wr(t){return{current:t}}function Ce(t){0>Ks||(t.current=pd[Ks],pd[Ks]=null,Ks--)}function xe(t,e){Ks++,pd[Ks]=t.current,t.current=e}var Lr={},gt=Wr(Lr),bt=Wr(!1),ps=Lr;function di(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Pt(t){return t=t.childContextTypes,t!=null}function ru(){Ce(bt),Ce(gt)}function Dg(t,e,n){if(gt.current!==Lr)throw Error(j(168));xe(gt,e),xe(bt,n)}function Sv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,xI(t)||"Unknown",s));return Oe({},n,r)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,ps=gt.current,xe(gt,t),xe(bt,bt.current),!0}function Lg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Sv(t,e,ps),r.__reactInternalMemoizedMergedChildContext=t,Ce(bt),Ce(gt),xe(gt,t)):Ce(bt),xe(bt,n)}var Ln=null,Ku=!1,mh=!1;function Av(t){Ln===null?Ln=[t]:Ln.push(t)}function Bx(t){Ku=!0,Av(t)}function qr(){if(!mh&&Ln!==null){mh=!0;var t=0,e=we;try{var n=Ln;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,Ku=!1}catch(s){throw Ln!==null&&(Ln=Ln.slice(t+1)),X0(Tf,qr),s}finally{we=e,mh=!1}}return null}var Qs=[],Ys=0,iu=null,ou=0,Gt=[],Kt=0,ms=null,Vn=1,Mn="";function ts(t,e){Qs[Ys++]=ou,Qs[Ys++]=iu,iu=t,ou=e}function Cv(t,e,n){Gt[Kt++]=Vn,Gt[Kt++]=Mn,Gt[Kt++]=ms,ms=t;var r=Vn;t=Mn;var s=32-un(r)-1;r&=~(1<<s),n+=1;var i=32-un(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Vn=1<<32-un(e)+s|n<<s|r,Mn=i+t}else Vn=1<<i|n<<s|r,Mn=t}function Pf(t){t.return!==null&&(ts(t,1),Cv(t,1,0))}function Nf(t){for(;t===iu;)iu=Qs[--Ys],Qs[Ys]=null,ou=Qs[--Ys],Qs[Ys]=null;for(;t===ms;)ms=Gt[--Kt],Gt[Kt]=null,Mn=Gt[--Kt],Gt[Kt]=null,Vn=Gt[--Kt],Gt[Kt]=null}var Bt=null,jt=null,Re=!1,an=null;function Rv(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,jt=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:Vn,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,jt=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(Re){var e=jt;if(e){var n=e;if(!Vg(t,e)){if(md(t))throw Error(j(418));e=Ir(n.nextSibling);var r=Bt;e&&Vg(t,e)?Rv(r,n):(t.flags=t.flags&-4097|2,Re=!1,Bt=t)}}else{if(md(t))throw Error(j(418));t.flags=t.flags&-4097|2,Re=!1,Bt=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function cl(t){if(t!==Bt)return!1;if(!Re)return Mg(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=jt)){if(md(t))throw bv(),Error(j(418));for(;e;)Rv(t,e),e=Ir(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Bt?Ir(t.stateNode.nextSibling):null;return!0}function bv(){for(var t=jt;t;)t=Ir(t.nextSibling)}function fi(){jt=Bt=null,Re=!1}function Of(t){an===null?an=[t]:an.push(t)}var $x=Xn.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jg(t){var e=t._init;return e(t._payload)}function Pv(t){function e(k,w){if(t){var S=k.deletions;S===null?(k.deletions=[w],k.flags|=16):S.push(w)}}function n(k,w){if(!t)return null;for(;w!==null;)e(k,w),w=w.sibling;return null}function r(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function s(k,w){return k=Ar(k,w),k.index=0,k.sibling=null,k}function i(k,w,S){return k.index=S,t?(S=k.alternate,S!==null?(S=S.index,S<w?(k.flags|=2,w):S):(k.flags|=2,w)):(k.flags|=1048576,w)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,w,S,N){return w===null||w.tag!==6?(w=Th(S,k.mode,N),w.return=k,w):(w=s(w,S),w.return=k,w)}function u(k,w,S,N){var U=S.type;return U===zs?d(k,w,S.props.children,N,S.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===or&&jg(U)===w.type)?(N=s(w,S.props),N.ref=so(k,w,S),N.return=k,N):(N=Ll(S.type,S.key,S.props,null,k.mode,N),N.ref=so(k,w,S),N.return=k,N)}function c(k,w,S,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Ih(S,k.mode,N),w.return=k,w):(w=s(w,S.children||[]),w.return=k,w)}function d(k,w,S,N,U){return w===null||w.tag!==7?(w=cs(S,k.mode,N,U),w.return=k,w):(w=s(w,S),w.return=k,w)}function m(k,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Th(""+w,k.mode,S),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case el:return S=Ll(w.type,w.key,w.props,null,k.mode,S),S.ref=so(k,null,w),S.return=k,S;case $s:return w=Ih(w,k.mode,S),w.return=k,w;case or:var N=w._init;return m(k,N(w._payload),S)}if(ho(w)||Zi(w))return w=cs(w,k.mode,S,null),w.return=k,w;hl(k,w)}return null}function g(k,w,S,N){var U=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(k,w,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case el:return S.key===U?u(k,w,S,N):null;case $s:return S.key===U?c(k,w,S,N):null;case or:return U=S._init,g(k,w,U(S._payload),N)}if(ho(S)||Zi(S))return U!==null?null:d(k,w,S,N,null);hl(k,S)}return null}function v(k,w,S,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return k=k.get(S)||null,l(w,k,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case el:return k=k.get(N.key===null?S:N.key)||null,u(w,k,N,U);case $s:return k=k.get(N.key===null?S:N.key)||null,c(w,k,N,U);case or:var F=N._init;return v(k,w,S,F(N._payload),U)}if(ho(N)||Zi(N))return k=k.get(S)||null,d(w,k,N,U,null);hl(w,N)}return null}function A(k,w,S,N){for(var U=null,F=null,T=w,_=w=0,E=null;T!==null&&_<S.length;_++){T.index>_?(E=T,T=null):E=T.sibling;var I=g(k,T,S[_],N);if(I===null){T===null&&(T=E);break}t&&T&&I.alternate===null&&e(k,T),w=i(I,w,_),F===null?U=I:F.sibling=I,F=I,T=E}if(_===S.length)return n(k,T),Re&&ts(k,_),U;if(T===null){for(;_<S.length;_++)T=m(k,S[_],N),T!==null&&(w=i(T,w,_),F===null?U=T:F.sibling=T,F=T);return Re&&ts(k,_),U}for(T=r(k,T);_<S.length;_++)E=v(T,k,_,S[_],N),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?_:E.key),w=i(E,w,_),F===null?U=E:F.sibling=E,F=E);return t&&T.forEach(function(C){return e(k,C)}),Re&&ts(k,_),U}function b(k,w,S,N){var U=Zi(S);if(typeof U!="function")throw Error(j(150));if(S=U.call(S),S==null)throw Error(j(151));for(var F=U=null,T=w,_=w=0,E=null,I=S.next();T!==null&&!I.done;_++,I=S.next()){T.index>_?(E=T,T=null):E=T.sibling;var C=g(k,T,I.value,N);if(C===null){T===null&&(T=E);break}t&&T&&C.alternate===null&&e(k,T),w=i(C,w,_),F===null?U=C:F.sibling=C,F=C,T=E}if(I.done)return n(k,T),Re&&ts(k,_),U;if(T===null){for(;!I.done;_++,I=S.next())I=m(k,I.value,N),I!==null&&(w=i(I,w,_),F===null?U=I:F.sibling=I,F=I);return Re&&ts(k,_),U}for(T=r(k,T);!I.done;_++,I=S.next())I=v(T,k,_,I.value,N),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?_:I.key),w=i(I,w,_),F===null?U=I:F.sibling=I,F=I);return t&&T.forEach(function(R){return e(k,R)}),Re&&ts(k,_),U}function O(k,w,S,N){if(typeof S=="object"&&S!==null&&S.type===zs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case el:e:{for(var U=S.key,F=w;F!==null;){if(F.key===U){if(U=S.type,U===zs){if(F.tag===7){n(k,F.sibling),w=s(F,S.props.children),w.return=k,k=w;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===or&&jg(U)===F.type){n(k,F.sibling),w=s(F,S.props),w.ref=so(k,F,S),w.return=k,k=w;break e}n(k,F);break}else e(k,F);F=F.sibling}S.type===zs?(w=cs(S.props.children,k.mode,N,S.key),w.return=k,k=w):(N=Ll(S.type,S.key,S.props,null,k.mode,N),N.ref=so(k,w,S),N.return=k,k=N)}return o(k);case $s:e:{for(F=S.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(k,w.sibling),w=s(w,S.children||[]),w.return=k,k=w;break e}else{n(k,w);break}else e(k,w);w=w.sibling}w=Ih(S,k.mode,N),w.return=k,k=w}return o(k);case or:return F=S._init,O(k,w,F(S._payload),N)}if(ho(S))return A(k,w,S,N);if(Zi(S))return b(k,w,S,N);hl(k,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(k,w.sibling),w=s(w,S),w.return=k,k=w):(n(k,w),w=Th(S,k.mode,N),w.return=k,k=w),o(k)):n(k,w)}return O}var pi=Pv(!0),Nv=Pv(!1),au=Wr(null),lu=null,Js=null,Df=null;function Lf(){Df=Js=lu=null}function Vf(t){var e=au.current;Ce(au),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){lu=t,Df=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Df!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(lu===null)throw Error(j(308));Js=t,lu.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var is=null;function Mf(t){is===null?is=[t]:is.push(t)}function Ov(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Mf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Hn(t,n)}return s=r.interleaved,s===null?(e.next=e,Mf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Hn(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}function Fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var s=t.updateQueue;ar=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,d=c=u=null,l=i;do{var g=l.lane,v=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,b=l;switch(g=e,v=n,b.tag){case 1:if(A=b.payload,typeof A=="function"){m=A.call(v,m,g);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=b.payload,g=typeof A=="function"?A.call(v,m,g):A,g==null)break e;m=Oe({},m,g);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=m):d=d.next=v,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=m}}function Ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var ga={},In=Wr(ga),Qo=Wr(ga),Yo=Wr(ga);function os(t){if(t===ga)throw Error(j(174));return t}function Ff(t,e){switch(xe(Yo,e),xe(Qo,t),xe(In,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jh(e,t)}Ce(In),xe(In,e)}function mi(){Ce(In),Ce(Qo),Ce(Yo)}function Lv(t){os(Yo.current);var e=os(In.current),n=Jh(e,t.type);e!==n&&(xe(Qo,t),xe(In,n))}function Uf(t){Qo.current===t&&(Ce(In),Ce(Qo))}var Pe=Wr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gh=[];function Bf(){for(var t=0;t<gh.length;t++)gh[t]._workInProgressVersionPrimary=null;gh.length=0}var bl=Xn.ReactCurrentDispatcher,yh=Xn.ReactCurrentBatchConfig,gs=0,Ne=null,Qe=null,Ze=null,hu=!1,So=!1,Jo=0,zx=0;function ct(){throw Error(j(321))}function $f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function zf(t,e,n,r,s,i){if(gs=i,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?Gx:Kx,t=n(r,s),So){i=0;do{if(So=!1,Jo=0,25<=i)throw Error(j(301));i+=1,Ze=Qe=null,e.updateQueue=null,bl.current=Qx,t=n(r,s)}while(So)}if(bl.current=du,e=Qe!==null&&Qe.next!==null,gs=0,Ze=Qe=Ne=null,hu=!1,e)throw Error(j(300));return t}function Hf(){var t=Jo!==0;return Jo=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ne.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function en(){if(Qe===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=Ze===null?Ne.memoizedState:Ze.next;if(e!==null)Ze=e,Qe=t;else{if(t===null)throw Error(j(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?Ne.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Xo(t,e){return typeof e=="function"?e(t):e}function _h(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Qe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var d=c.lane;if((gs&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ne.lanes|=d,ys|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ne.lanes|=i,ys|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vh(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);hn(i,e.memoizedState)||(Rt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Vv(){}function Mv(t,e){var n=Ne,r=en(),s=e(),i=!hn(r.memoizedState,s);if(i&&(r.memoizedState=s,Rt=!0),r=r.queue,Wf(Uv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Zo(9,Fv.bind(null,n,r,s,e),void 0,null),et===null)throw Error(j(349));gs&30||jv(n,e,s)}return s}function jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fv(t,e,n,r){e.value=n,e.getSnapshot=r,Bv(e)&&$v(t)}function Uv(t,e,n){return n(function(){Bv(e)&&$v(t)})}function Bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function $v(t){var e=Hn(t,1);e!==null&&cn(e,t,1,-1)}function Bg(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=qx.bind(null,Ne,t),[e.memoizedState,t]}function Zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zv(){return en().memoizedState}function Pl(t,e,n,r){var s=_n();Ne.flags|=t,s.memoizedState=Zo(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var s=en();r=r===void 0?null:r;var i=void 0;if(Qe!==null){var o=Qe.memoizedState;if(i=o.destroy,r!==null&&$f(r,o.deps)){s.memoizedState=Zo(e,n,i,r);return}}Ne.flags|=t,s.memoizedState=Zo(1|e,n,i,r)}function $g(t,e){return Pl(8390656,8,t,e)}function Wf(t,e){return Qu(2048,8,t,e)}function Hv(t,e){return Qu(4,2,t,e)}function Wv(t,e){return Qu(4,4,t,e)}function qv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gv(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,qv.bind(null,e,t),n)}function qf(){}function Kv(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Qv(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yv(t,e,n){return gs&21?(hn(n,e)||(n=tv(),Ne.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function Hx(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=yh.transition;yh.transition={};try{t(!1),e()}finally{we=n,yh.transition=r}}function Jv(){return en().memoizedState}function Wx(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xv(t))Zv(e,n);else if(n=Ov(t,e,n,r),n!==null){var s=Tt();cn(n,t,r,s),ew(n,e,r)}}function qx(t,e,n){var r=Sr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xv(t))Zv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(s.next=s,Mf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Ov(t,e,s,r),n!==null&&(s=Tt(),cn(n,t,r,s),ew(n,e,r))}}function Xv(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Zv(t,e){So=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ew(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}var du={readContext:Zt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Gx={readContext:Zt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:$g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,qv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Wx.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:Bg,useDebugValue:qf,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=Bg(!1),e=t[0];return t=Hx.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,s=_n();if(Re){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),et===null)throw Error(j(349));gs&30||jv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,$g(Uv.bind(null,r,i,t),[t]),r.flags|=2048,Zo(9,Fv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=_n(),e=et.identifierPrefix;if(Re){var n=Mn,r=Vn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Kx={readContext:Zt,useCallback:Kv,useContext:Zt,useEffect:Wf,useImperativeHandle:Gv,useInsertionEffect:Hv,useLayoutEffect:Wv,useMemo:Qv,useReducer:_h,useRef:zv,useState:function(){return _h(Xo)},useDebugValue:qf,useDeferredValue:function(t){var e=en();return Yv(e,Qe.memoizedState,t)},useTransition:function(){var t=_h(Xo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:Mv,useId:Jv,unstable_isNewReconciler:!1},Qx={readContext:Zt,useCallback:Kv,useContext:Zt,useEffect:Wf,useImperativeHandle:Gv,useInsertionEffect:Hv,useLayoutEffect:Wv,useMemo:Qv,useReducer:vh,useRef:zv,useState:function(){return vh(Xo)},useDebugValue:qf,useDeferredValue:function(t){var e=en();return Qe===null?e.memoizedState=t:Yv(e,Qe.memoizedState,t)},useTransition:function(){var t=vh(Xo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:Mv,useId:Jv,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _d(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),s=Sr(t),i=Un(r,s);i.payload=e,n!=null&&(i.callback=n),e=xr(t,i,s),e!==null&&(cn(e,t,s,r),Rl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),s=Sr(t),i=Un(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=xr(t,i,s),e!==null&&(cn(e,t,s,r),Rl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Sr(t),s=Un(n,r);s.tag=2,e!=null&&(s.callback=e),e=xr(t,s,r),e!==null&&(cn(e,t,r,n),Rl(e,t,r))}};function zg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(s,i):!0}function tw(t,e,n){var r=!1,s=Lr,i=e.contextType;return typeof i=="object"&&i!==null?i=Zt(i):(s=Pt(e)?ps:gt.current,r=e.contextTypes,i=(r=r!=null)?di(t,s):Lr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Hg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function vd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},jf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Zt(i):(i=Pt(e)?ps:gt.current,s.context=di(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(_d(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Yu.enqueueReplaceState(s,s.state,null),uu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function gi(t,e){try{var n="",r=e;do n+=II(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function wh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yx=typeof WeakMap=="function"?WeakMap:Map;function nw(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,bd=r),wd(t,e)},n}function rw(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){wd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){wd(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Yx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=ck.bind(null,t,e,n),e.then(t,t))}function qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Jx=Xn.ReactCurrentOwner,Rt=!1;function Et(t,e,n,r){e.child=t===null?Nv(e,null,n,r):pi(e,t.child,n,r)}function Kg(t,e,n,r,s){n=n.render;var i=e.ref;return ii(e,s),r=zf(t,e,n,r,i,s),n=Hf(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Re&&n&&Pf(e),e.flags|=1,Et(t,e,r,s),e.child)}function Qg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!ep(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,sw(t,e,i,r,s)):(t=Ll(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return Wn(t,e,s)}return e.flags|=1,t=Ar(i,r),t.ref=e.ref,t.return=e,e.child=t}function sw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Wo(i,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Wn(t,e,s)}return Ed(t,e,n,r,s)}function iw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Zs,Vt),Vt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(Zs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,xe(Zs,Vt),Vt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,xe(Zs,Vt),Vt|=r;return Et(t,e,s,n),e.child}function ow(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,r,s){var i=Pt(n)?ps:gt.current;return i=di(e,i),ii(e,s),n=zf(t,e,n,r,i,s),r=Hf(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Re&&r&&Pf(e),e.flags|=1,Et(t,e,n,s),e.child)}function Yg(t,e,n,r,s){if(Pt(n)){var i=!0;su(e)}else i=!1;if(ii(e,s),e.stateNode===null)Nl(t,e),tw(e,n,r),vd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zt(c):(c=Pt(n)?ps:gt.current,c=di(e,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Hg(e,o,r,c),ar=!1;var g=e.memoizedState;o.state=g,uu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||bt.current||ar?(typeof d=="function"&&(_d(e,n,d,r),u=e.memoizedState),(l=ar||zg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Dv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:sn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Pt(n)?ps:gt.current,u=di(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Hg(e,o,r,u),ar=!1,g=e.memoizedState,o.state=g,uu(e,r,o,s);var A=e.memoizedState;l!==m||g!==A||bt.current||ar?(typeof v=="function"&&(_d(e,n,v,r),A=e.memoizedState),(c=ar||zg(e,n,c,r,g,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Td(t,e,n,r,i,s)}function Td(t,e,n,r,s,i){ow(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Lg(e,n,!1),Wn(t,e,i);r=e.stateNode,Jx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=pi(e,t.child,null,i),e.child=pi(e,null,l,i)):Et(t,e,l,i),e.memoizedState=r.state,s&&Lg(e,n,!0),e.child}function aw(t){var e=t.stateNode;e.pendingContext?Dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dg(t,e.context,!1),Ff(t,e.containerInfo)}function Jg(t,e,n,r,s){return fi(),Of(s),e.flags|=256,Et(t,e,n,r),e.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function lw(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),xe(Pe,s&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Zu(o,r,0,null),t=cs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=xd(n),e.memoizedState=Id,t):Gf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Xx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ar(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Ar(l,i):(i=cs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Id,r}return i=t.child,t=i.sibling,r=Ar(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gf(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dl(t,e,n,r){return r!==null&&Of(r),pi(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=wh(Error(j(422))),dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Zu({mode:"visible",children:r.children},s,0,null),i=cs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&pi(e,t.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=Id,i);if(!(e.mode&1))return dl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=wh(i,r,void 0),dl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=et,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Hn(t,s),cn(r,t,s,-1))}return Zf(),r=wh(Error(j(421))),dl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=hk.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,jt=Ir(s.nextSibling),Bt=e,Re=!0,an=null,t!==null&&(Gt[Kt++]=Vn,Gt[Kt++]=Mn,Gt[Kt++]=ms,Vn=t.id,Mn=t.overflow,ms=e),e=Gf(e,r.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yd(t.return,e,n)}function Eh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function uw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Et(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Eh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&cu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Eh(e,!0,n,null,i);break;case"together":Eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zx(t,e,n){switch(e.tag){case 3:aw(e),fi();break;case 5:Lv(e);break;case 1:Pt(e.type)&&su(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;xe(au,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?lw(t,e,n):(xe(Pe,Pe.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);xe(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,iw(t,e,n)}return Wn(t,e,n)}var cw,kd,hw,dw;cw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};hw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,os(In.current);var i=null;switch(n){case"input":s=Gh(t,s),r=Gh(t,r),i=[];break;case"select":s=Oe({},s,{value:void 0}),r=Oe({},r,{value:void 0}),i=[];break;case"textarea":s=Yh(t,s),r=Yh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}Xh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};dw=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ek(t,e,n){var r=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Pt(e.type)&&ru(),ht(e),null;case 3:return r=e.stateNode,mi(),Ce(bt),Ce(gt),Bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Od(an),an=null))),kd(t,e),ht(e),null;case 5:Uf(e);var s=os(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)hw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ht(e),null}if(t=os(In.current),cl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[wn]=e,r[Ko]=i,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(s=0;s<po.length;s++)Se(po[s],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":ag(r,i),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Se("invalid",r);break;case"textarea":ug(r,i),Se("invalid",r)}Xh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ul(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ul(r.textContent,l,t),s=["children",""+l]):jo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":tl(r),lg(r,i,!0);break;case"textarea":tl(r),cg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=nu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[Ko]=r,cw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zh(n,r),n){case"dialog":Se("cancel",t),Se("close",t),s=r;break;case"iframe":case"object":case"embed":Se("load",t),s=r;break;case"video":case"audio":for(s=0;s<po.length;s++)Se(po[s],t);s=r;break;case"source":Se("error",t),s=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),s=r;break;case"details":Se("toggle",t),s=r;break;case"input":ag(t,r),s=Gh(t,r),Se("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Oe({},r,{value:void 0}),Se("invalid",t);break;case"textarea":ug(t,r),s=Yh(t,r),Se("invalid",t);break;default:s=r}Xh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?z0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&B0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fo(t,u):typeof u=="number"&&Fo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Se("scroll",t):u!=null&&yf(t,i,u,o))}switch(n){case"input":tl(t),lg(t,r,!1);break;case"textarea":tl(t),cg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ti(t,!!r.multiple,i,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)dw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=os(Yo.current),os(In.current),cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(i=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return ht(e),null;case 13:if(Ce(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&jt!==null&&e.mode&1&&!(e.flags&128))bv(),fi(),e.flags|=98560,i=!1;else if(i=cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[wn]=e}else fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),i=!1}else an!==null&&(Od(an),an=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ye===0&&(Ye=3):Zf())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return mi(),kd(t,e),t===null&&qo(e.stateNode.containerInfo),ht(e),null;case 10:return Vf(e.type._context),ht(e),null;case 17:return Pt(e.type)&&ru(),ht(e),null;case 19:if(Ce(Pe),i=e.memoizedState,i===null)return ht(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)io(i,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,io(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&He()>yi&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304)}else{if(!r)if(t=cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Re)return ht(e),null}else 2*He()-i.renderingStartTime>yi&&n!==1073741824&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=He(),e.sibling=null,n=Pe.current,xe(Pe,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return Xf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function tk(t,e){switch(Nf(e),e.tag){case 1:return Pt(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mi(),Ce(bt),Ce(gt),Bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(Ce(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Pe),null;case 4:return mi(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var fl=!1,pt=!1,nk=typeof WeakSet=="function"?WeakSet:Set,q=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Sd(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Zg=!1;function rk(t,e){if(ud=Zl,t=yv(),bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,m=t,g=null;t:for(;;){for(var v;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++d===r&&(u=o),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},Zl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var b=A.memoizedProps,O=A.memoizedState,k=e.stateNode,w=k.getSnapshotBeforeUpdate(e.elementType===e.type?b:sn(e.type,b),O);k.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){Ve(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return A=Zg,Zg=!1,A}function Ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Sd(e,n,i)}s=s.next}while(s!==r)}}function Ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fw(t){var e=t.alternate;e!==null&&(t.alternate=null,fw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[Ko],delete e[fd],delete e[Fx],delete e[Ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pw(t){return t.tag===5||t.tag===3||t.tag===4}function ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}function Rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}var nt=null,on=!1;function sr(t,e,n){for(n=n.child;n!==null;)mw(t,e,n),n=n.sibling}function mw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(zu,n)}catch{}switch(n.tag){case 5:pt||Xs(n,e);case 6:var r=nt,s=on;nt=null,sr(t,e,n),nt=r,on=s,nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?ph(t.parentNode,n):t.nodeType===1&&ph(t,n),zo(t)):ph(nt,n.stateNode));break;case 4:r=nt,s=on,nt=n.stateNode.containerInfo,on=!0,sr(t,e,n),nt=r,on=s;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Sd(n,e,o),s=s.next}while(s!==r)}sr(t,e,n);break;case 1:if(!pt&&(Xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,e,l)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,sr(t,e,n),pt=r):sr(t,e,n);break;default:sr(t,e,n)}}function ty(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nk),e.forEach(function(r){var s=dk.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,on=!1;break e;case 3:nt=l.stateNode.containerInfo,on=!0;break e;case 4:nt=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(nt===null)throw Error(j(160));mw(i,o,s),nt=null,on=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ve(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gw(e,t),e=e.sibling}function gw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),gn(t),r&4){try{Ao(3,t,t.return),Ju(3,t)}catch(b){Ve(t,t.return,b)}try{Ao(5,t,t.return)}catch(b){Ve(t,t.return,b)}}break;case 1:rn(e,t),gn(t),r&512&&n!==null&&Xs(n,n.return);break;case 5:if(rn(e,t),gn(t),r&512&&n!==null&&Xs(n,n.return),t.flags&32){var s=t.stateNode;try{Fo(s,"")}catch(b){Ve(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&j0(s,i),Zh(l,o);var c=Zh(l,i);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?z0(s,m):d==="dangerouslySetInnerHTML"?B0(s,m):d==="children"?Fo(s,m):yf(s,d,m,c)}switch(l){case"input":Kh(s,i);break;case"textarea":F0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ti(s,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?ti(s,!!i.multiple,i.defaultValue,!0):ti(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ko]=i}catch(b){Ve(t,t.return,b)}}break;case 6:if(rn(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){Ve(t,t.return,b)}}break;case 3:if(rn(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(b){Ve(t,t.return,b)}break;case 4:rn(e,t),gn(t);break;case 13:rn(e,t),gn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Yf=He())),r&4&&ty(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||d,rn(e,t),pt=c):rn(e,t),gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(m=q=d;q!==null;){switch(g=q,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ao(4,g,g.return);break;case 1:Xs(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(b){Ve(r,n,b)}}break;case 5:Xs(g,g.return);break;case 22:if(g.memoizedState!==null){ry(m);continue}}v!==null?(v.return=g,q=v):ry(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=$0("display",o))}catch(b){Ve(t,t.return,b)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(b){Ve(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:rn(e,t),gn(t),r&4&&ty(t);break;case 21:break;default:rn(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Fo(s,""),r.flags&=-33);var i=ey(t);Rd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ey(t);Cd(t,l,o);break;default:throw Error(j(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sk(t,e,n){q=t,yw(t)}function yw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||fl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||pt;l=fl;var c=pt;if(fl=o,(pt=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?sy(s):u!==null?(u.return=o,q=u):sy(s);for(;i!==null;)q=i,yw(i),i=i.sibling;q=s,fl=l,pt=c}ny(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):ny(t)}}function ny(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ug(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ug(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&zo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}pt||e.flags&512&&Ad(e)}catch(g){Ve(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function ry(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function sy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ju(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ve(e,s,u)}}var i=e.return;try{Ad(e)}catch(u){Ve(e,i,u)}break;case 5:var o=e.return;try{Ad(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var ik=Math.ceil,fu=Xn.ReactCurrentDispatcher,Kf=Xn.ReactCurrentOwner,Jt=Xn.ReactCurrentBatchConfig,ye=0,et=null,qe=null,it=0,Vt=0,Zs=Wr(0),Ye=0,ea=null,ys=0,Xu=0,Qf=0,Co=null,At=null,Yf=0,yi=1/0,Dn=null,pu=!1,bd=null,kr=null,pl=!1,_r=null,mu=0,Ro=0,Pd=null,Ol=-1,Dl=0;function Tt(){return ye&6?He():Ol!==-1?Ol:Ol=He()}function Sr(t){return t.mode&1?ye&2&&it!==0?it&-it:$x.transition!==null?(Dl===0&&(Dl=tv()),Dl):(t=we,t!==0||(t=window.event,t=t===void 0?16:lv(t.type)),t):1}function cn(t,e,n,r){if(50<Ro)throw Ro=0,Pd=null,Error(j(185));fa(t,n,r),(!(ye&2)||t!==et)&&(t===et&&(!(ye&2)&&(Xu|=n),Ye===4&&hr(t,it)),Nt(t,r),n===1&&ye===0&&!(e.mode&1)&&(yi=He()+500,Ku&&qr()))}function Nt(t,e){var n=t.callbackNode;$I(t,e);var r=Xl(t,t===et?it:0);if(r===0)n!==null&&fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fg(n),e===1)t.tag===0?Bx(iy.bind(null,t)):Av(iy.bind(null,t)),Mx(function(){!(ye&6)&&qr()}),n=null;else{switch(nv(r)){case 1:n=Tf;break;case 4:n=Z0;break;case 16:n=Jl;break;case 536870912:n=ev;break;default:n=Jl}n=kw(n,_w.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _w(t,e){if(Ol=-1,Dl=0,ye&6)throw Error(j(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=Xl(t,t===et?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var s=ye;ye|=2;var i=ww();(et!==t||it!==e)&&(Dn=null,yi=He()+500,us(t,e));do try{lk();break}catch(l){vw(t,l)}while(!0);Lf(),fu.current=i,ye=s,qe!==null?e=0:(et=null,it=0,e=Ye)}if(e!==0){if(e===2&&(s=sd(t),s!==0&&(r=s,e=Nd(t,s))),e===1)throw n=ea,us(t,0),hr(t,r),Nt(t,He()),n;if(e===6)hr(t,r);else{if(s=t.current.alternate,!(r&30)&&!ok(s)&&(e=gu(t,r),e===2&&(i=sd(t),i!==0&&(r=i,e=Nd(t,i))),e===1))throw n=ea,us(t,0),hr(t,r),Nt(t,He()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ns(t,At,Dn);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=Yf+500-He(),10<e)){if(Xl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=dd(ns.bind(null,t,At,Dn),e);break}ns(t,At,Dn);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-un(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ik(r/1960))-r,10<r){t.timeoutHandle=dd(ns.bind(null,t,At,Dn),r);break}ns(t,At,Dn);break;case 5:ns(t,At,Dn);break;default:throw Error(j(329))}}}return Nt(t,He()),t.callbackNode===n?_w.bind(null,t):null}function Nd(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=gu(t,e),t!==2&&(e=At,At=n,e!==null&&Od(e)),t}function Od(t){At===null?At=t:At.push.apply(At,t)}function ok(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!hn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Qf,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(ye&6)throw Error(j(327));oi();var e=Xl(t,0);if(!(e&1))return Nt(t,He()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=sd(t);r!==0&&(e=r,n=Nd(t,r))}if(n===1)throw n=ea,us(t,0),hr(t,e),Nt(t,He()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ns(t,At,Dn),Nt(t,He()),null}function Jf(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(yi=He()+500,Ku&&qr())}}function _s(t){_r!==null&&_r.tag===0&&!(ye&6)&&oi();var e=ye;ye|=1;var n=Jt.transition,r=we;try{if(Jt.transition=null,we=1,t)return t()}finally{we=r,Jt.transition=n,ye=e,!(ye&6)&&qr()}}function Xf(){Vt=Zs.current,Ce(Zs)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vx(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:mi(),Ce(bt),Ce(gt),Bf();break;case 5:Uf(r);break;case 4:mi();break;case 13:Ce(Pe);break;case 19:Ce(Pe);break;case 10:Vf(r.type._context);break;case 22:case 23:Xf()}n=n.return}if(et=t,qe=t=Ar(t.current,null),it=Vt=e,Ye=0,ea=null,Qf=Xu=ys=0,At=Co=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}is=null}return t}function vw(t,e){do{var n=qe;try{if(Lf(),bl.current=du,hu){for(var r=Ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}hu=!1}if(gs=0,Ze=Qe=Ne=null,So=!1,Jo=0,Kf.current=null,n===null||n.return===null){Ye=1,ea=e,qe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=it,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=qg(o);if(v!==null){v.flags&=-257,Gg(v,o,l,i,e),v.mode&1&&Wg(i,c,e),e=v,u=c;var A=e.updateQueue;if(A===null){var b=new Set;b.add(u),e.updateQueue=b}else A.add(u);break e}else{if(!(e&1)){Wg(i,c,e),Zf();break e}u=Error(j(426))}}else if(Re&&l.mode&1){var O=qg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Gg(O,o,l,i,e),Of(gi(u,l));break e}}i=u=gi(u,l),Ye!==4&&(Ye=2),Co===null?Co=[i]:Co.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var k=nw(i,u,e);Fg(i,k);break e;case 1:l=u;var w=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(kr===null||!kr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var N=rw(i,l,e);Fg(i,N);break e}}i=i.return}while(i!==null)}Tw(n)}catch(U){e=U,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function ww(){var t=fu.current;return fu.current=du,t===null?du:t}function Zf(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||!(ys&268435455)&&!(Xu&268435455)||hr(et,it)}function gu(t,e){var n=ye;ye|=2;var r=ww();(et!==t||it!==e)&&(Dn=null,us(t,e));do try{ak();break}catch(s){vw(t,s)}while(!0);if(Lf(),ye=n,fu.current=r,qe!==null)throw Error(j(261));return et=null,it=0,Ye}function ak(){for(;qe!==null;)Ew(qe)}function lk(){for(;qe!==null&&!OI();)Ew(qe)}function Ew(t){var e=xw(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?Tw(t):qe=e,Kf.current=null}function Tw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tk(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,qe=null;return}}else if(n=ek(n,e,Vt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Ye===0&&(Ye=5)}function ns(t,e,n){var r=we,s=Jt.transition;try{Jt.transition=null,we=1,uk(t,e,n,r)}finally{Jt.transition=s,we=r}return null}function uk(t,e,n,r){do oi();while(_r!==null);if(ye&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(zI(t,i),t===et&&(qe=et=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,kw(Jl,function(){return oi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Jt.transition,Jt.transition=null;var o=we;we=1;var l=ye;ye|=4,Kf.current=null,rk(t,n),gw(n,t),Rx(cd),Zl=!!ud,cd=ud=null,t.current=n,sk(n),DI(),ye=l,we=o,Jt.transition=i}else t.current=n;if(pl&&(pl=!1,_r=t,mu=s),i=t.pendingLanes,i===0&&(kr=null),MI(n.stateNode),Nt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(pu)throw pu=!1,t=bd,bd=null,t;return mu&1&&t.tag!==0&&oi(),i=t.pendingLanes,i&1?t===Pd?Ro++:(Ro=0,Pd=t):Ro=0,qr(),null}function oi(){if(_r!==null){var t=nv(mu),e=Jt.transition,n=we;try{if(Jt.transition=null,we=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,mu=0,ye&6)throw Error(j(331));var s=ye;for(ye|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:Ao(8,d,i)}var m=d.child;if(m!==null)m.return=d,q=m;else for(;q!==null;){d=q;var g=d.sibling,v=d.return;if(fw(d),d===c){q=null;break}if(g!==null){g.return=v,q=g;break}q=v}}}var A=i.alternate;if(A!==null){var b=A.child;if(b!==null){A.child=null;do{var O=b.sibling;b.sibling=null,b=O}while(b!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ao(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,q=k;break e}q=i.return}}var w=t.current;for(q=w;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=w;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ju(9,l)}}catch(U){Ve(l,l.return,U)}if(l===o){q=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,q=N;break e}q=l.return}}if(ye=s,qr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(zu,t)}catch{}r=!0}return r}finally{we=n,Jt.transition=e}}return!1}function oy(t,e,n){e=gi(n,e),e=nw(t,e,1),t=xr(t,e,1),e=Tt(),t!==null&&(fa(t,1,e),Nt(t,e))}function Ve(t,e,n){if(t.tag===3)oy(t,t,n);else for(;e!==null;){if(e.tag===3){oy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=gi(n,t),t=rw(e,t,1),e=xr(e,t,1),t=Tt(),e!==null&&(fa(e,1,t),Nt(e,t));break}}e=e.return}}function ck(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(it&n)===n&&(Ye===4||Ye===3&&(it&130023424)===it&&500>He()-Yf?us(t,0):Qf|=n),Nt(t,e)}function Iw(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=Tt();t=Hn(t,e),t!==null&&(fa(t,e,n),Nt(t,n))}function hk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iw(t,n)}function dk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Iw(t,n)}var xw;xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Zx(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Re&&e.flags&1048576&&Cv(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var s=di(e,gt.current);ii(e,n),s=zf(null,e,r,t,s,n);var i=Hf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(i=!0,su(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,jf(e),s.updater=Yu,e.stateNode=s,s._reactInternals=e,vd(e,r,t,n),e=Td(null,e,r,!0,i,n)):(e.tag=0,Re&&i&&Pf(e),Et(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=pk(r),t=sn(r,t),s){case 0:e=Ed(null,e,r,t,n);break e;case 1:e=Yg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=Qg(null,e,r,sn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),Ed(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),Yg(t,e,r,s,n);case 3:e:{if(aw(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Dv(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=gi(Error(j(423)),e),e=Jg(t,e,r,n,s);break e}else if(r!==s){s=gi(Error(j(424)),e),e=Jg(t,e,r,n,s);break e}else for(jt=Ir(e.stateNode.containerInfo.firstChild),Bt=e,Re=!0,an=null,n=Nv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fi(),r===s){e=Wn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Lv(e),t===null&&gd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,hd(r,s)?o=null:i!==null&&hd(r,i)&&(e.flags|=32),ow(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return lw(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=pi(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),Kg(t,e,r,s,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,xe(au,r._currentValue),r._currentValue=o,i!==null)if(hn(i.value,o)){if(i.children===s.children&&!bt.current){e=Wn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Un(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),yd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Et(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ii(e,n),s=Zt(s),r=r(s),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,s=sn(r,e.pendingProps),s=sn(r.type,s),Qg(t,e,r,s,n);case 15:return sw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),Nl(t,e),e.tag=1,Pt(r)?(t=!0,su(e)):t=!1,ii(e,n),tw(e,r,s),vd(e,r,s,n),Td(null,e,r,!0,t,n);case 19:return uw(t,e,n);case 22:return iw(t,e,n)}throw Error(j(156,e.tag))};function kw(t,e){return X0(t,e)}function fk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new fk(t,e,n,r)}function ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pk(t){if(typeof t=="function")return ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vf)return 11;if(t===wf)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zs:return cs(n.children,s,i,e);case _f:o=8,s|=8;break;case zh:return t=Yt(12,n,e,s|2),t.elementType=zh,t.lanes=i,t;case Hh:return t=Yt(13,n,e,s),t.elementType=Hh,t.lanes=i,t;case Wh:return t=Yt(19,n,e,s),t.elementType=Wh,t.lanes=i,t;case L0:return Zu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O0:o=10;break e;case D0:o=9;break e;case vf:o=11;break e;case wf:o=14;break e;case or:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function cs(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=L0,t.lanes=n,t.stateNode={isHidden:!1},t}function Th(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function Ih(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rh(0),this.expirationTimes=rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rh(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function tp(t,e,n,r,s,i,o,l,u){return t=new mk(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Yt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jf(i),t}function gk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Sw(t){if(!t)return Lr;t=t._reactInternals;e:{if(ks(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Pt(n))return Sv(t,n,e)}return e}function Aw(t,e,n,r,s,i,o,l,u){return t=tp(n,r,!0,t,s,i,o,l,u),t.context=Sw(null),n=t.current,r=Tt(),s=Sr(n),i=Un(r,s),i.callback=e??null,xr(n,i,s),t.current.lanes=s,fa(t,s,r),Nt(t,r),t}function ec(t,e,n,r){var s=e.current,i=Tt(),o=Sr(s);return n=Sw(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(s,e,o),t!==null&&(cn(t,s,o,i),Rl(t,s,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ay(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function np(t,e){ay(t,e),(t=t.alternate)&&ay(t,e)}function yk(){return null}var Cw=typeof reportError=="function"?reportError:function(t){console.error(t)};function rp(t){this._internalRoot=t}tc.prototype.render=rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));ec(t,e,null,null)};tc.prototype.unmount=rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){ec(null,t,null,null)}),e[zn]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&av(t)}};function sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ly(){}function _k(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=yu(o);i.call(c)}}var o=Aw(e,r,t,0,null,!1,!1,"",ly);return t._reactRootContainer=o,t[zn]=o.current,qo(t.nodeType===8?t.parentNode:t),_s(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=yu(u);l.call(c)}}var u=tp(t,0,!1,null,null,!1,!1,"",ly);return t._reactRootContainer=u,t[zn]=u.current,qo(t.nodeType===8?t.parentNode:t),_s(function(){ec(e,u,n,r)}),u}function rc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=yu(o);l.call(u)}}ec(e,o,t,s)}else o=_k(n,e,t,s,r);return yu(o)}rv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(If(e,n|1),Nt(e,He()),!(ye&6)&&(yi=He()+500,qr()))}break;case 13:_s(function(){var r=Hn(t,1);if(r!==null){var s=Tt();cn(r,t,1,s)}}),np(t,1)}};xf=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=Tt();cn(e,t,134217728,n)}np(t,134217728)}};sv=function(t){if(t.tag===13){var e=Sr(t),n=Hn(t,e);if(n!==null){var r=Tt();cn(n,t,e,r)}np(t,e)}};iv=function(){return we};ov=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};td=function(t,e,n){switch(e){case"input":if(Kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Gu(r);if(!s)throw Error(j(90));M0(r),Kh(r,s)}}}break;case"textarea":F0(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};q0=Jf;G0=_s;var vk={usingClientEntryPoint:!1,Events:[ma,Gs,Gu,H0,W0,Jf]},oo={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wk={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{zu=ml.inject(wk),Tn=ml}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(j(200));return gk(t,e,null,n)};zt.createRoot=function(t,e){if(!sp(t))throw Error(j(299));var n=!1,r="",s=Cw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=tp(t,1,!1,null,null,n,!1,r,s),t[zn]=e.current,qo(t.nodeType===8?t.parentNode:t),new rp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return _s(t)};zt.hydrate=function(t,e,n){if(!nc(e))throw Error(j(200));return rc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!sp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Cw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Aw(e,null,t,1,n??null,s,!1,i,o),t[zn]=e.current,qo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new tc(e)};zt.render=function(t,e,n){if(!nc(e))throw Error(j(200));return rc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!nc(t))throw Error(j(40));return t._reactRootContainer?(_s(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};zt.unstable_batchedUpdates=Jf;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return rc(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function Rw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rw)}catch(t){console.error(t)}}Rw(),R0.exports=zt;var Ek=R0.exports,bw,uy=Ek;bw=uy.createRoot,uy.hydrateRoot;const Tk="modulepreload",Ik=function(t){return"/project-hub/"+t},cy={},Pw=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=Ik(u),u in cy)return;cy[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Tk,c||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((g,v)=>{m.addEventListener("load",g),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},xk=()=>{};var hy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ow={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[d],n[m],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new Sk;const g=i<<2|l>>4;if(r.push(g),c!==64){const v=l<<4&240|c>>2;if(r.push(v),m!==64){const A=c<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ak=function(t){const e=Nw(t);return Ow.encodeByteArray(e,!0)},_u=function(t){return Ak(t).replace(/\./g,"")},Dw=function(t){try{return Ow.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=()=>Ck().__FIREBASE_DEFAULTS__,bk=()=>{if(typeof process>"u"||typeof hy>"u")return;const t=hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dw(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return xk()||Rk()||bk()||Pk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lw=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vw=t=>{const e=Lw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mw=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},jw=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ip(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),""].join(".")}const bo={};function Ok(){const t={prod:[],emulator:[]};for(const e of Object.keys(bo))bo[e]?t.emulator.push(e):t.prod.push(e);return t}function Dk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let dy=!1;function op(t,e){if(typeof window>"u"||typeof document>"u"||!Gr(window.location.host)||bo[t]===e||bo[t]||dy)return;bo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Ok().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{dy=!0,o()},g}function d(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Dk(r),v=n("text"),A=document.getElementById(v)||document.createElement("span"),b=n("learnmore"),O=document.getElementById(b)||document.createElement("a"),k=n("preprendIcon"),w=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),d(O,b);const N=c();u(w,k),S.append(w,A,O,N),document.body.appendChild(S)}i?(A.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Vk(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uk(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bk(){return!Vk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $k(){try{return typeof indexedDB=="object"}catch{return!1}}function zk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hk,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Wk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new mn(s,l,r)}}function Wk(t,e){return t.replace(qk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qk=/\{\$([^}]+)}/g;function Gk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fy(i)&&fy(o)){if(!vs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kk(t,e){const n=new Qk(t,e);return n.subscribe.bind(n)}class Qk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xh),s.error===void 0&&(s.error=xh),s.complete===void 0&&(s.complete=xh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zk(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xk(t){return t===rs?void 0:t}function Zk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const tS={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},nS=de.INFO,rS={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},sS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ic{constructor(e){this.name=e,this._logLevel=nS,this._logHandler=sS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const iS=(t,e)=>e.some(n=>t instanceof n);let py,my;function oS(){return py||(py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aS(){return my||(my=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uw=new WeakMap,Dd=new WeakMap,Bw=new WeakMap,kh=new WeakMap,ap=new WeakMap;function lS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uw.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function uS(t){if(Dd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dd.set(t,e)}let Ld={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cS(t){Ld=t(Ld)}function hS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sh(this),e,...n);return Bw.set(r,e.sort?e.sort():[e]),Cr(r)}:aS().includes(t)?function(...e){return t.apply(Sh(this),e),Cr(Uw.get(this))}:function(...e){return Cr(t.apply(Sh(this),e))}}function dS(t){return typeof t=="function"?hS(t):(t instanceof IDBTransaction&&uS(t),iS(t,oS())?new Proxy(t,Ld):t)}function Cr(t){if(t instanceof IDBRequest)return lS(t);if(kh.has(t))return kh.get(t);const e=dS(t);return e!==t&&(kh.set(t,e),ap.set(e,t)),e}const Sh=t=>ap.get(t);function fS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const pS=["get","getKey","getAll","getAllKeys","count"],mS=["put","add","delete","clear"],Ah=new Map;function gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Ah.set(e,i),i}cS(t=>({...t,get:(e,n,r)=>gy(e,n)||t.get(e,n,r),has:(e,n)=>!!gy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vd="@firebase/app",yy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new ic("@firebase/app"),_S="@firebase/app-compat",vS="@firebase/analytics-compat",wS="@firebase/analytics",ES="@firebase/app-check-compat",TS="@firebase/app-check",IS="@firebase/auth",xS="@firebase/auth-compat",kS="@firebase/database",SS="@firebase/data-connect",AS="@firebase/database-compat",CS="@firebase/functions",RS="@firebase/functions-compat",bS="@firebase/installations",PS="@firebase/installations-compat",NS="@firebase/messaging",OS="@firebase/messaging-compat",DS="@firebase/performance",LS="@firebase/performance-compat",VS="@firebase/remote-config",MS="@firebase/remote-config-compat",jS="@firebase/storage",FS="@firebase/storage-compat",US="@firebase/firestore",BS="@firebase/ai",$S="@firebase/firestore-compat",zS="firebase",HS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="[DEFAULT]",WS={[Vd]:"fire-core",[_S]:"fire-core-compat",[wS]:"fire-analytics",[vS]:"fire-analytics-compat",[TS]:"fire-app-check",[ES]:"fire-app-check-compat",[IS]:"fire-auth",[xS]:"fire-auth-compat",[kS]:"fire-rtdb",[SS]:"fire-data-connect",[AS]:"fire-rtdb-compat",[CS]:"fire-fn",[RS]:"fire-fn-compat",[bS]:"fire-iid",[PS]:"fire-iid-compat",[NS]:"fire-fcm",[OS]:"fire-fcm-compat",[DS]:"fire-perf",[LS]:"fire-perf-compat",[VS]:"fire-rc",[MS]:"fire-rc-compat",[jS]:"fire-gcs",[FS]:"fire-gcs-compat",[US]:"fire-fst",[$S]:"fire-fst-compat",[BS]:"fire-vertex","fire-js":"fire-js",[zS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map,qS=new Map,jd=new Map;function _y(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(jd.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;jd.set(e,t);for(const n of vu.values())_y(n,t);for(const n of qS.values())_y(n,t);return!0}function va(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new ya("app","Firebase",GS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=HS;function $w(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Md,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Rr.create("bad-app-name",{appName:String(s)});if(n||(n=Mw()),!n)throw Rr.create("no-options");const i=vu.get(s);if(i){if(vs(n,i.options)&&vs(r,i.config))return i;throw Rr.create("duplicate-app",{appName:s})}const o=new eS(s);for(const u of jd.values())o.addComponent(u);const l=new KS(n,r,o);return vu.set(s,l),l}function oc(t=Md){const e=vu.get(t);if(!e&&t===Md&&Mw())return $w();if(!e)throw Rr.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let s=(r=WS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}Vr(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="firebase-heartbeat-database",YS=1,ta="firebase-heartbeat-store";let Ch=null;function zw(){return Ch||(Ch=fS(QS,YS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function JS(t){try{const n=(await zw()).transaction(ta),r=await n.objectStore(ta).get(Hw(t));return await n.done,r}catch(e){if(e instanceof mn)Gn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function vy(t,e){try{const r=(await zw()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,Hw(t)),await r.done}catch(n){if(n instanceof mn)Gn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function Hw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=1024,ZS=30;class eA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ZS){const o=rA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wy(),{heartbeatsToSend:r,unsentEntries:s}=tA(this._heartbeatsCache.heartbeats),i=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function wy(){return new Date().toISOString().substring(0,10)}function tA(t,e=XS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ey(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $k()?zk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ey(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}function rA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){Vr(new qn("platform-logger",e=>new gS(e),"PRIVATE")),Vr(new qn("heartbeat",e=>new eA(e),"PRIVATE")),Xt(Vd,yy,t),Xt(Vd,yy,"esm2017"),Xt("fire-js","")}sA("");var iA="firebase",oA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(iA,oA,"app");var Ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var br,Ww;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.D=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(I,C,R){for(var x=Array(arguments.length-2),B=2;B<arguments.length;B++)x[B-2]=arguments[B];return _.prototype[C].apply(I,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,E){E||(E=0);var I=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)I[C]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(C=0;16>C;++C)I[C]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],C=T.g[2];var R=T.g[3],x=_+(R^E&(C^R))+I[0]+3614090360&4294967295;_=E+(x<<7&4294967295|x>>>25),x=R+(C^_&(E^C))+I[1]+3905402710&4294967295,R=_+(x<<12&4294967295|x>>>20),x=C+(E^R&(_^E))+I[2]+606105819&4294967295,C=R+(x<<17&4294967295|x>>>15),x=E+(_^C&(R^_))+I[3]+3250441966&4294967295,E=C+(x<<22&4294967295|x>>>10),x=_+(R^E&(C^R))+I[4]+4118548399&4294967295,_=E+(x<<7&4294967295|x>>>25),x=R+(C^_&(E^C))+I[5]+1200080426&4294967295,R=_+(x<<12&4294967295|x>>>20),x=C+(E^R&(_^E))+I[6]+2821735955&4294967295,C=R+(x<<17&4294967295|x>>>15),x=E+(_^C&(R^_))+I[7]+4249261313&4294967295,E=C+(x<<22&4294967295|x>>>10),x=_+(R^E&(C^R))+I[8]+1770035416&4294967295,_=E+(x<<7&4294967295|x>>>25),x=R+(C^_&(E^C))+I[9]+2336552879&4294967295,R=_+(x<<12&4294967295|x>>>20),x=C+(E^R&(_^E))+I[10]+4294925233&4294967295,C=R+(x<<17&4294967295|x>>>15),x=E+(_^C&(R^_))+I[11]+2304563134&4294967295,E=C+(x<<22&4294967295|x>>>10),x=_+(R^E&(C^R))+I[12]+1804603682&4294967295,_=E+(x<<7&4294967295|x>>>25),x=R+(C^_&(E^C))+I[13]+4254626195&4294967295,R=_+(x<<12&4294967295|x>>>20),x=C+(E^R&(_^E))+I[14]+2792965006&4294967295,C=R+(x<<17&4294967295|x>>>15),x=E+(_^C&(R^_))+I[15]+1236535329&4294967295,E=C+(x<<22&4294967295|x>>>10),x=_+(C^R&(E^C))+I[1]+4129170786&4294967295,_=E+(x<<5&4294967295|x>>>27),x=R+(E^C&(_^E))+I[6]+3225465664&4294967295,R=_+(x<<9&4294967295|x>>>23),x=C+(_^E&(R^_))+I[11]+643717713&4294967295,C=R+(x<<14&4294967295|x>>>18),x=E+(R^_&(C^R))+I[0]+3921069994&4294967295,E=C+(x<<20&4294967295|x>>>12),x=_+(C^R&(E^C))+I[5]+3593408605&4294967295,_=E+(x<<5&4294967295|x>>>27),x=R+(E^C&(_^E))+I[10]+38016083&4294967295,R=_+(x<<9&4294967295|x>>>23),x=C+(_^E&(R^_))+I[15]+3634488961&4294967295,C=R+(x<<14&4294967295|x>>>18),x=E+(R^_&(C^R))+I[4]+3889429448&4294967295,E=C+(x<<20&4294967295|x>>>12),x=_+(C^R&(E^C))+I[9]+568446438&4294967295,_=E+(x<<5&4294967295|x>>>27),x=R+(E^C&(_^E))+I[14]+3275163606&4294967295,R=_+(x<<9&4294967295|x>>>23),x=C+(_^E&(R^_))+I[3]+4107603335&4294967295,C=R+(x<<14&4294967295|x>>>18),x=E+(R^_&(C^R))+I[8]+1163531501&4294967295,E=C+(x<<20&4294967295|x>>>12),x=_+(C^R&(E^C))+I[13]+2850285829&4294967295,_=E+(x<<5&4294967295|x>>>27),x=R+(E^C&(_^E))+I[2]+4243563512&4294967295,R=_+(x<<9&4294967295|x>>>23),x=C+(_^E&(R^_))+I[7]+1735328473&4294967295,C=R+(x<<14&4294967295|x>>>18),x=E+(R^_&(C^R))+I[12]+2368359562&4294967295,E=C+(x<<20&4294967295|x>>>12),x=_+(E^C^R)+I[5]+4294588738&4294967295,_=E+(x<<4&4294967295|x>>>28),x=R+(_^E^C)+I[8]+2272392833&4294967295,R=_+(x<<11&4294967295|x>>>21),x=C+(R^_^E)+I[11]+1839030562&4294967295,C=R+(x<<16&4294967295|x>>>16),x=E+(C^R^_)+I[14]+4259657740&4294967295,E=C+(x<<23&4294967295|x>>>9),x=_+(E^C^R)+I[1]+2763975236&4294967295,_=E+(x<<4&4294967295|x>>>28),x=R+(_^E^C)+I[4]+1272893353&4294967295,R=_+(x<<11&4294967295|x>>>21),x=C+(R^_^E)+I[7]+4139469664&4294967295,C=R+(x<<16&4294967295|x>>>16),x=E+(C^R^_)+I[10]+3200236656&4294967295,E=C+(x<<23&4294967295|x>>>9),x=_+(E^C^R)+I[13]+681279174&4294967295,_=E+(x<<4&4294967295|x>>>28),x=R+(_^E^C)+I[0]+3936430074&4294967295,R=_+(x<<11&4294967295|x>>>21),x=C+(R^_^E)+I[3]+3572445317&4294967295,C=R+(x<<16&4294967295|x>>>16),x=E+(C^R^_)+I[6]+76029189&4294967295,E=C+(x<<23&4294967295|x>>>9),x=_+(E^C^R)+I[9]+3654602809&4294967295,_=E+(x<<4&4294967295|x>>>28),x=R+(_^E^C)+I[12]+3873151461&4294967295,R=_+(x<<11&4294967295|x>>>21),x=C+(R^_^E)+I[15]+530742520&4294967295,C=R+(x<<16&4294967295|x>>>16),x=E+(C^R^_)+I[2]+3299628645&4294967295,E=C+(x<<23&4294967295|x>>>9),x=_+(C^(E|~R))+I[0]+4096336452&4294967295,_=E+(x<<6&4294967295|x>>>26),x=R+(E^(_|~C))+I[7]+1126891415&4294967295,R=_+(x<<10&4294967295|x>>>22),x=C+(_^(R|~E))+I[14]+2878612391&4294967295,C=R+(x<<15&4294967295|x>>>17),x=E+(R^(C|~_))+I[5]+4237533241&4294967295,E=C+(x<<21&4294967295|x>>>11),x=_+(C^(E|~R))+I[12]+1700485571&4294967295,_=E+(x<<6&4294967295|x>>>26),x=R+(E^(_|~C))+I[3]+2399980690&4294967295,R=_+(x<<10&4294967295|x>>>22),x=C+(_^(R|~E))+I[10]+4293915773&4294967295,C=R+(x<<15&4294967295|x>>>17),x=E+(R^(C|~_))+I[1]+2240044497&4294967295,E=C+(x<<21&4294967295|x>>>11),x=_+(C^(E|~R))+I[8]+1873313359&4294967295,_=E+(x<<6&4294967295|x>>>26),x=R+(E^(_|~C))+I[15]+4264355552&4294967295,R=_+(x<<10&4294967295|x>>>22),x=C+(_^(R|~E))+I[6]+2734768916&4294967295,C=R+(x<<15&4294967295|x>>>17),x=E+(R^(C|~_))+I[13]+1309151649&4294967295,E=C+(x<<21&4294967295|x>>>11),x=_+(C^(E|~R))+I[4]+4149444226&4294967295,_=E+(x<<6&4294967295|x>>>26),x=R+(E^(_|~C))+I[11]+3174756917&4294967295,R=_+(x<<10&4294967295|x>>>22),x=C+(_^(R|~E))+I[2]+718787259&4294967295,C=R+(x<<15&4294967295|x>>>17),x=E+(R^(C|~_))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(C+(x<<21&4294967295|x>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var E=_-this.blockSize,I=this.B,C=this.h,R=0;R<_;){if(C==0)for(;R<=E;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(I[C++]=T.charCodeAt(R++),C==this.blockSize){s(this,I),C=0;break}}else for(;R<_;)if(I[C++]=T[R++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var E=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=E&255,E/=256;for(this.u(T),T=Array(16),_=E=0;4>_;++_)for(var I=0;32>I;I+=8)T[E++]=this.g[_]>>>I&255;return T};function i(T,_){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function o(T,_){this.h=_;for(var E=[],I=!0,C=T.length-1;0<=C;C--){var R=T[C]|0;I&&R==_||(E[C]=R,I=!1)}this.g=E}var l={};function u(T){return-128<=T&&128>T?i(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return O(c(-T));for(var _=[],E=1,I=0;T>=E;I++)_[I]=T/E|0,E*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return O(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),I=m,C=0;C<T.length;C+=8){var R=Math.min(8,T.length-C),x=parseInt(T.substring(C,C+R),_);8>R?(R=c(Math.pow(_,R)),I=I.j(R).add(c(x))):(I=I.j(E),I=I.add(c(x)))}return I}var m=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-O(this).m();for(var T=0,_=1,E=0;E<this.g.length;E++){var I=this.i(E);T+=(0<=I?I:4294967296+I)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(b(this))return"-"+O(this).toString(T);for(var _=c(Math.pow(T,6)),E=this,I="";;){var C=N(E,_).g;E=k(E,C.j(_));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=C,A(E))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function b(T){return T.h==-1}t.l=function(T){return T=k(this,T),b(T)?-1:A(T)?0:1};function O(T){for(var _=T.g.length,E=[],I=0;I<_;I++)E[I]=~T.g[I];return new o(E,~T.h).add(g)}t.abs=function(){return b(this)?O(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],I=0,C=0;C<=_;C++){var R=I+(this.i(C)&65535)+(T.i(C)&65535),x=(R>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);I=x>>>16,R&=65535,x&=65535,E[C]=x<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function k(T,_){return T.add(O(_))}t.j=function(T){if(A(this)||A(T))return m;if(b(this))return b(T)?O(this).j(O(T)):O(O(this).j(T));if(b(T))return O(this.j(O(T)));if(0>this.l(v)&&0>T.l(v))return c(this.m()*T.m());for(var _=this.g.length+T.g.length,E=[],I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<T.g.length;C++){var R=this.i(I)>>>16,x=this.i(I)&65535,B=T.i(C)>>>16,ee=T.i(C)&65535;E[2*I+2*C]+=x*ee,w(E,2*I+2*C),E[2*I+2*C+1]+=R*ee,w(E,2*I+2*C+1),E[2*I+2*C+1]+=x*B,w(E,2*I+2*C+1),E[2*I+2*C+2]+=R*B,w(E,2*I+2*C+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new o(E,0)};function w(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function S(T,_){this.g=T,this.h=_}function N(T,_){if(A(_))throw Error("division by zero");if(A(T))return new S(m,m);if(b(T))return _=N(O(T),_),new S(O(_.g),O(_.h));if(b(_))return _=N(T,O(_)),new S(O(_.g),_.h);if(30<T.g.length){if(b(T)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=_;0>=I.l(T);)E=U(E),I=U(I);var C=F(E,1),R=F(I,1);for(I=F(I,2),E=F(E,2);!A(I);){var x=R.add(I);0>=x.l(T)&&(C=C.add(E),R=x),I=F(I,1),E=F(E,1)}return _=k(T,C.j(_)),new S(C,_)}for(C=m;0<=T.l(_);){for(E=Math.max(1,Math.floor(T.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=c(E),x=R.j(_);b(x)||0<x.l(T);)E-=I,R=c(E),x=R.j(_);A(R)&&(R=g),C=C.add(R),T=k(T,x)}return new S(C,T)}t.A=function(T){return N(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)&T.i(I);return new o(E,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)|T.i(I);return new o(E,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)^T.i(I);return new o(E,this.h^T.h)};function U(T){for(var _=T.g.length+1,E=[],I=0;I<_;I++)E[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(E,T.h)}function F(T,_){var E=_>>5;_%=32;for(var I=T.g.length-E,C=[],R=0;R<I;R++)C[R]=0<_?T.i(R+E)>>>_|T.i(R+E+1)<<32-_:T.i(R+E);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ww=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,br=o}).apply(typeof Ty<"u"?Ty:typeof self<"u"?self:typeof window<"u"?window:{});var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qw,yo,Gw,Vl,Fd,Kw,Qw,Yw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof gl=="object"&&gl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in p))break e;p=p[P]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,y=!1,P={next:function(){if(!y&&p<a.length){var D=p++;return{value:h(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,g.apply(null,arguments)}function v(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,P,D){for(var $=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)$[Ee-2]=arguments[Ee];return h.prototype[P].apply(y,$)}}function b(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function O(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const P=a.length||0,D=y.length||0;a.length=P+D;for(let $=0;$<D;$++)a[P+$]=y[$]}else a.push(y)}}class k{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function T(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function _(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(p in y)a[p]=y[p];for(let D=0;D<E.length;D++)p=E[D],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function C(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function x(){var a=J;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,p){const y=ee.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var ee=new k(()=>new Ue,a=>a.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,z=!1,J=new B,G=()=>{const a=l.Promise.resolve(void 0);Be=()=>{a.then(ue)}};var ue=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(p){R(p)}var h=ee;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var _t=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function kt(a,h){if(se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(U){e:{try{N(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&kt.aa.h.call(this)}}A(kt,se);var tn={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),Di=0;function Nc(a,h,p,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=P,this.key=++Di,this.da=this.fa=!1}function Ps(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ns(a){this.src=a,this.g={},this.h=0}Ns.prototype.add=function(a,h,p,y,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=Vi(a,h,y,P);return-1<$?(h=a[$],p||(h.fa=!1)):(h=new Nc(h,this.src,D,!!y,P),h.fa=p,a.push(h)),h};function Li(a,h){var p=h.type;if(p in a.g){var y=a.g[p],P=Array.prototype.indexOf.call(y,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(y,P,1),D&&(Ps(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Vi(a,h,p,y){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==y)return P}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),ji={};function Oa(a,h,p,y,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Oa(a,h[D],p,y,P);return null}return p=Q(p),a&&a[Wt]?a.K(h,p,c(y)?!!y.capture:!1,P):Oc(a,h,p,!1,y,P)}function Oc(a,h,p,y,P,D){if(!h)throw Error("Invalid event type");var $=c(P)?!!P.capture:!!P,Ee=M(a);if(Ee||(a[Mi]=Ee=new Ns(a)),p=Ee.add(h,p,y,$,D),p.proxy)return p;if(y=Dc(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)_t||(P=$),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(La(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Dc(){function a(p){return h.call(a.src,a.listener,p)}const h=Lc;return a}function Da(a,h,p,y,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)Da(a,h[D],p,y,P);else y=c(y)?!!y.capture:!!y,p=Q(p),a&&a[Wt]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],p=Vi(D,p,y,P),-1<p&&(Ps(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=M(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vi(h,p,y,P)),(p=-1<a?h[a]:null)&&Fi(p))}function Fi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Wt])Li(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(La(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=M(h))?(Li(p,a),p.h==0&&(p.src=null,h[Mi]=null)):Ps(a)}}}function La(a){return a in ji?ji[a]:ji[a]="on"+a}function Lc(a,h){if(a.da)a=!0;else{h=new kt(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&Fi(a),a=p.call(y,h)}return a}function M(a){return a=a[Mi],a instanceof Ns?a:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(a){return typeof a=="function"?a:(a[K]||(a[K]=function(h){return a.handleEvent(h)}),a[K])}function X(){oe.call(this),this.i=new Ns(this),this.M=this,this.F=null}A(X,oe),X.prototype[Wt]=!0,X.prototype.removeEventListener=function(a,h,p,y){Da(this,a,h,p,y)};function te(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new se(h,a);else if(h instanceof se)h.target=h.target||a;else{var P=h;h=new se(y,a),I(h,P)}if(P=!0,p)for(var D=p.length-1;0<=D;D--){var $=h.g=p[D];P=ae($,y,!0,h)&&P}if($=h.g=a,P=ae($,y,!0,h)&&P,P=ae($,y,!1,h)&&P,p)for(D=0;D<p.length;D++)$=h.g=p[D],P=ae($,y,!1,h)&&P}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Ps(p[y]);delete a.g[h],a.h--}}this.F=null},X.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},X.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function ae(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var $=h[D];if($&&!$.da&&$.capture==p){var Ee=$.listener,tt=$.ha||$.src;$.fa&&Li(a.i,$),P=Ee.call(tt,y)!==!1&&P}}return P&&!y.defaultPrevented}function be(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function er(a){a.g=be(()=>{a.g=null,a.i&&(a.i=!1,er(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Vc extends oe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:er(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(a){oe.call(this),this.h=a,this.g={}}A(Pn,oe);var Va=[];function Ma(a){F(a.g,function(h,p){this.g.hasOwnProperty(p)&&Fi(h)},a),a.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),Ma(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ui=l.JSON.stringify,me=l.JSON.parse,$e=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Mc(){}Mc.prototype.h=null;function cm(a){return a.h||(a.h=a.i())}function hm(){}var Bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jc(){se.call(this,"d")}A(jc,se);function Fc(){se.call(this,"c")}A(Fc,se);var Jr={},dm=null;function ja(){return dm=dm||new X}Jr.La="serverreachability";function fm(a){se.call(this,Jr.La,a)}A(fm,se);function $i(a){const h=ja();te(h,new fm(h))}Jr.STAT_EVENT="statevent";function pm(a,h){se.call(this,Jr.STAT_EVENT,a),this.stat=h}A(pm,se);function vt(a){const h=ja();te(h,new pm(h,a))}Jr.Ma="timingevent";function mm(a,h){se.call(this,Jr.Ma,a),this.size=h}A(mm,se);function zi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function S1(a,h,p,y,P,D){a.info(function(){if(a.g)if(D)for(var $="",Ee=D.split("&"),tt=0;tt<Ee.length;tt++){var _e=Ee[tt].split("=");if(1<_e.length){var lt=_e[0];_e=_e[1];var ut=lt.split("_");$=2<=ut.length&&ut[1]=="type"?$+(lt+"="+_e+"&"):$+(lt+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+p+`
`+$})}function A1(a,h,p,y,P,D,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+p+`
`+D+" "+$})}function Os(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+R1(a,p)+(y?" "+y:"")})}function C1(a,h){a.info(function(){return"TIMEOUT: "+h})}Hi.prototype.info=function(){};function R1(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return Ui(p)}catch{return h}}var Fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uc;function Ua(){}A(Ua,Mc),Ua.prototype.g=function(){return new XMLHttpRequest},Ua.prototype.i=function(){return{}},Uc=new Ua;function tr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ym}function ym(){this.i=null,this.g="",this.h=!1}var _m={},Bc={};function $c(a,h,p){a.L=1,a.v=Ha(Nn(h)),a.m=p,a.P=!0,vm(a,null)}function vm(a,h){a.F=Date.now(),Ba(a),a.A=Nn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Om(p.i,"t",y),a.C=0,p=a.j.J,a.h=new ym,a.g=Jm(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Vc(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Va[0]=P.toString()),P=Va);for(var D=0;D<P.length;D++){var $=Oa(p,P[D],y||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$i(),S1(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&On(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const ut=On(this.g);var h=this.g.Ba();const Vs=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Um(this.g)))){this.J||ut!=4||h==7||(h==8||0>=Vs?$i(3):$i(2)),zc(this);var p=this.g.Z();this.X=p;t:if(wm(this)){var y=Um(this.g);a="";var P=y.length,D=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),Wi(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(D&&h==P-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,A1(this.i,this.u,this.A,this.l,this.R,ut,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,tt=this.g;if((Ee=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ee)){var _e=Ee;break t}}_e=null}if(p=_e)Os(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hc(this,p);else{this.o=!1,this.s=3,vt(12),Xr(this),Wi(this);break e}}if(this.P){p=!0;let nn;for(;!this.J&&this.C<$.length;)if(nn=b1(this,$),nn==Bc){ut==4&&(this.s=4,vt(14),p=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==_m){this.s=4,vt(15),Os(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Os(this.i,this.l,nn,null),Hc(this,nn);if(wm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||$.length!=0||this.h.h||(this.s=1,vt(16),p=!1),this.o=this.o&&p,!p)Os(this.i,this.l,$,"[Invalid Chunked Response]"),Xr(this),Wi(this);else if(0<$.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Yc(lt),lt.M=!0,vt(11))}}else Os(this.i,this.l,$,null),Hc(this,$);ut==4&&Xr(this),this.o&&!this.J&&(ut==4?Gm(this.j,this):(this.o=!1,Ba(this)))}else G1(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Xr(this),Wi(this)}}}catch{}finally{}};function wm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function b1(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Bc:(p=Number(h.substring(p,y)),isNaN(p)?_m:(y+=1,y+p>h.length?Bc:(h=h.slice(y,y+p),a.C=y+p,h)))}tr.prototype.cancel=function(){this.J=!0,Xr(this)};function Ba(a){a.S=Date.now()+a.I,Em(a,a.I)}function Em(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zi(g(a.ba,a),h)}function zc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(C1(this.i,this.A),this.L!=2&&($i(),vt(17)),Xr(this),this.s=2,Wi(this)):Em(this,this.S-a)};function Wi(a){a.j.G==0||a.J||Gm(a.j,a)}function Xr(a){zc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ma(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Hc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Wc(p.h,a))){if(!a.K&&Wc(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ya(p),Ka(p);else break e;Qc(p),vt(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=zi(g(p.Za,p),6e3));if(1>=xm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else es(p,11)}else if((a.K||p.g==a)&&Ya(p),!w(h))for(P=p.Da.g.parse(h),h=0;h<P.length;h++){let _e=P[h];if(p.T=_e[0],_e=_e[1],p.G==2)if(_e[0]=="c"){p.K=_e[1],p.ia=_e[2];const lt=_e[3];lt!=null&&(p.la=lt,p.j.info("VER="+p.la));const ut=_e[4];ut!=null&&(p.Aa=ut,p.j.info("SVER="+p.Aa));const Vs=_e[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(y=1.5*Vs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const nn=a.g;if(nn){const Xa=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xa){var D=y.h;D.g||Xa.indexOf("spdy")==-1&&Xa.indexOf("quic")==-1&&Xa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(qc(D,D.h),D.h=null))}if(y.D){const Jc=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jc&&(y.ya=Jc,ke(y.I,y.D,Jc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var $=a;if(y.qa=Ym(y,y.J?y.ia:null,y.W),$.K){km(y.h,$);var Ee=$,tt=y.L;tt&&(Ee.I=tt),Ee.B&&(zc(Ee),Ba(Ee)),y.g=$}else Wm(y);0<p.i.length&&Qa(p)}else _e[0]!="stop"&&_e[0]!="close"||es(p,7);else p.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?es(p,7):Kc(p):_e[0]!="noop"&&p.l&&p.l.ta(_e),p.v=0)}}$i(4)}catch{}}var P1=class{constructor(a,h){this.g=a,this.map=h}};function Tm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Im(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xm(a){return a.h?1:a.g?a.g.size:0}function Wc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function qc(a,h){a.g?a.g.add(h):a.h=h}function km(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Tm.prototype.cancel=function(){if(this.i=Sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return b(a.i)}function N1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function O1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function Am(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=O1(a),y=N1(a),P=y.length,D=0;D<P;D++)h.call(void 0,y[D],p&&p[D],a)}var Cm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D1(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),P=null;if(0<=y){var D=a[p].substring(0,y);P=a[p].substring(y+1)}else D=a[p];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,$a(this,a.j),this.o=a.o,this.g=a.g,za(this,a.s),this.l=a.l;var h=a.i,p=new Ki;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Rm(this,p),this.m=a.m}else a&&(h=String(a).match(Cm))?(this.h=!1,$a(this,h[1]||"",!0),this.o=qi(h[2]||""),this.g=qi(h[3]||"",!0),za(this,h[4]),this.l=qi(h[5]||"",!0),Rm(this,h[6]||"",!0),this.m=qi(h[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}Zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Gi(h,bm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Gi(h,bm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Gi(p,p.charAt(0)=="/"?M1:V1,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Gi(p,F1)),a.join("")};function Nn(a){return new Zr(a)}function $a(a,h,p){a.j=p?qi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function za(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Rm(a,h,p){h instanceof Ki?(a.i=h,U1(a.i,a.h)):(p||(h=Gi(h,j1)),a.i=new Ki(h,a.h))}function ke(a,h,p){a.i.set(h,p)}function Ha(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,L1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function L1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bm=/[#\/\?@]/g,V1=/[#\?:]/g,M1=/[#\?]/g,j1=/[#\?@]/g,F1=/#/g;function Ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&D1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ki.prototype,t.add=function(a,h){nr(this),this.i=null,a=Ds(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Pm(a,h){nr(a),h=Ds(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Nm(a,h){return nr(a),h=Ds(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(p,y){p.forEach(function(P){a.call(h,P,y,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const P=a[y];for(let D=0;D<P.length;D++)p.push(h[y])}return p},t.V=function(a){nr(this);let h=[];if(typeof a=="string")Nm(this,a)&&(h=h.concat(this.g.get(Ds(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return nr(this),this.i=null,a=Ds(this,a),Nm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Om(a,h,p){Pm(a,h),0<p.length&&(a.i=null,a.g.set(Ds(a,h),b(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const D=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var P=D;$[y]!==""&&(P+="="+encodeURIComponent(String($[y]))),a.push(P)}}return this.i=a.join("&")};function Ds(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function U1(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(p,y){var P=y.toLowerCase();y!=P&&(Pm(this,y),Om(this,P,p))},a)),a.j=h}function B1(a,h){const p=new Hi;if(l.Image){const y=new Image;y.onload=v(rr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=v(rr,p,"TestLoadImage: error",!1,h,y),y.onabort=v(rr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(rr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function $1(a,h){const p=new Hi,y=new AbortController,P=setTimeout(()=>{y.abort(),rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(P),D.ok?rr(p,"TestPingServer: ok",!0,h):rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),rr(p,"TestPingServer: error",!1,h)})}function rr(a,h,p,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(p)}catch{}}function z1(){this.g=new $e}function H1(a,h,p){const y=p||"";try{Am(a,function(P,D){let $=P;c(P)&&($=Ui(P)),h.push(y+D+"="+encodeURIComponent($))})}catch(P){throw h.push(y+"type="+encodeURIComponent("_badmap")),P}}function Wa(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Wa,Mc),Wa.prototype.g=function(){return new qa(this.l,this.j)},Wa.prototype.i=function(a){return function(){return a}}({});function qa(a,h){X.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(qa,X),t=qa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Yi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qi(this):Yi(this),this.readyState==3&&Dm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qi(this))},t.Qa=function(a){this.g&&(this.response=a,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Yi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lm(a){let h="";return F(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Gc(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Lm(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ke(a,h,p))}function Le(a){X.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Le,X);var W1=/^https?$/i,q1=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uc.g(),this.v=this.o?cm(this.o):cm(Uc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Vm(this,D);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)p.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())p.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(q1,h,void 0))||y||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of p)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Vm(this,D)}};function Vm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Mm(a),Ga(a)}function Mm(a){a.A||(a.A=!0,te(a,"complete"),te(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,te(this,"complete"),te(this,"abort"),Ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ga(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jm(this):this.bb())},t.bb=function(){jm(this)};function jm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)be(a.Ea,0,a);else if(te(a,"readystatechange"),On(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=$===0){var P=String(a.D).match(Cm)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!W1.test(P?P.toLowerCase():"")}p=y}if(p)te(a,"complete"),te(a,"success");else{a.m=6;try{var D=2<On(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Mm(a)}}finally{Ga(a)}}}}function Ga(a,h){if(a.g){Fm(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||te(a,"ready");try{p.onreadystatechange=y}catch{}}}function Fm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),me(h)}};function Um(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function G1(a){const h={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var p=C(a[y]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[P]||[];h[P]=D,D.push(p)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Bm(a){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ji("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ji("baseRetryDelayMs",5e3,a),this.cb=Ji("retryDelaySeedMs",1e4,a),this.Wa=Ji("forwardChannelMaxRetries",2,a),this.wa=Ji("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Tm(a&&a.concurrentRequestLimit),this.Da=new z1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bm.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){vt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Ym(this,null,this.W),Qa(this)};function Kc(a){if($m(a),a.G==3){var h=a.U++,p=Nn(a.I);if(ke(p,"SID",a.K),ke(p,"RID",h),ke(p,"TYPE","terminate"),Xi(a,p),h=new tr(a,a.j,h),h.L=2,h.v=Ha(Nn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Jm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ba(h)}Qm(a)}function Ka(a){a.g&&(Yc(a),a.g.cancel(),a.g=null)}function $m(a){Ka(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Qa(a){if(!Im(a.h)&&!a.s){a.s=!0;var h=a.Ga;Be||G(),z||(Be(),z=!0),J.add(h,a),a.B=0}}function K1(a,h){return xm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zi(g(a.Ga,a,h),Km(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new tr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Hm(this,P,h),p=Nn(this.I),ke(p,"RID",a),ke(p,"CVER",22),this.D&&ke(p,"X-HTTP-Session-Id",this.D),Xi(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(Lm(D)))+"&"+h:this.m&&Gc(p,this.m,D)),qc(this.h,P),this.Ua&&ke(p,"TYPE","init"),this.P?(ke(p,"$req",h),ke(p,"SID","null"),P.T=!0,$c(P,p,null)):$c(P,p,h),this.G=2}}else this.G==3&&(a?zm(this,a):this.i.length==0||Im(this.h)||zm(this))};function zm(a,h){var p;h?p=h.l:p=a.U++;const y=Nn(a.I);ke(y,"SID",a.K),ke(y,"RID",p),ke(y,"AID",a.T),Xi(a,y),a.m&&a.o&&Gc(y,a.m,a.o),p=new tr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Hm(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qc(a.h,p),$c(p,y,h)}function Xi(a,h){a.H&&F(a.H,function(p,y){ke(h,y,p)}),a.l&&Am({},function(p,y){ke(h,y,p)})}function Hm(a,h,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const $=["count="+p];D==-1?0<p?(D=P[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let Ee=!0;for(let tt=0;tt<p;tt++){let _e=P[tt].g;const lt=P[tt].map;if(_e-=D,0>_e)D=Math.max(0,P[tt].g-100),Ee=!1;else try{H1(lt,$,"req"+_e+"_")}catch{y&&y(lt)}}if(Ee){y=$.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function Wm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Be||G(),z||(Be(),z=!0),J.add(h,a),a.v=0}}function Qc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zi(g(a.Fa,a),Km(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,qm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Ka(this),qm(this))};function Yc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function qm(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Nn(a.qa);ke(h,"RID","rpc"),ke(h,"SID",a.K),ke(h,"AID",a.T),ke(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(h,"TO",a.ja),ke(h,"TYPE","xmlhttp"),Xi(a,h),a.m&&a.o&&Gc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ha(Nn(h)),p.m=null,p.P=!0,vm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ka(this),Qc(this),vt(19))};function Ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gm(a,h){var p=null;if(a.g==h){Ya(a),Yc(a),a.g=null;var y=2}else if(Wc(a.h,h))p=h.D,km(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;y=ja(),te(y,new mm(y,p)),Qa(a)}else Wm(a);else if(P=h.s,P==3||P==0&&0<h.X||!(y==1&&K1(a,h)||y==2&&Qc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),P){case 1:es(a,5);break;case 4:es(a,10);break;case 3:es(a,6);break;default:es(a,2)}}}function Km(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function es(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),y=a.Xa;const P=!y;y=new Zr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$a(y,"https"),Ha(y),P?B1(y.toString(),p):$1(y.toString(),p)}else vt(2);a.G=0,a.l&&a.l.sa(h),Qm(a),$m(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Qm(a){if(a.G=0,a.ka=[],a.l){const h=Sm(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Ym(a,h,p){var y=p instanceof Zr?Nn(p):new Zr(p);if(y.g!="")h&&(y.g=h+"."+y.g),za(y,y.s);else{var P=l.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new Zr(null);y&&$a(D,y),h&&(D.g=h),P&&za(D,P),p&&(D.l=p),y=D}return p=a.D,h=a.ya,p&&h&&ke(y,p,h),ke(y,"VER",a.la),Xi(a,y),y}function Jm(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Le(new Wa({eb:p})):new Le(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xm(){}t=Xm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ja(){}Ja.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){X.call(this),this.g=new Bm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ls(this)}A(Lt,X),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Kc(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ui(a),a=p);h.i.push(new P1(h.Ya++,a)),h.G==3&&Qa(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Kc(this.g),delete this.g,Lt.aa.N.call(this)};function Zm(a){jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Zm,jc);function eg(){Fc.call(this),this.status=1}A(eg,Fc);function Ls(a){this.g=a}A(Ls,Xm),Ls.prototype.ua=function(){te(this.g,"a")},Ls.prototype.ta=function(a){te(this.g,new Zm(a))},Ls.prototype.sa=function(a){te(this.g,new eg)},Ls.prototype.ra=function(){te(this.g,"b")},Ja.prototype.createWebChannel=Ja.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,Yw=function(){return new Ja},Qw=function(){return ja()},Kw=Jr,Fd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,Vl=Fa,gm.COMPLETE="complete",Gw=gm,hm.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",X.prototype.listen=X.prototype.K,yo=hm,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,qw=Le}).apply(typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{});const Iy="@firebase/firestore",xy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new ic("@firebase/firestore");function js(){return ws.logLevel}function W(t,...e){if(ws.logLevel<=de.DEBUG){const n=e.map(lp);ws.debug(`Firestore (${Ci}): ${t}`,...n)}}function Kn(t,...e){if(ws.logLevel<=de.ERROR){const n=e.map(lp);ws.error(`Firestore (${Ci}): ${t}`,...n)}}function Mr(t,...e){if(ws.logLevel<=de.WARN){const n=e.map(lp);ws.warn(`Firestore (${Ci}): ${t}`,...n)}}function lp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Jw(t,r,n)}function Jw(t,e,n){let r=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kn(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Jw(e,s,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class lA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uA{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new Xw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class cA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new cA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ky{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ky(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ky(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Ud(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ce(r,s);{const i=Zw(),o=pA(i.encode(Sy(t,n)),i.encode(Sy(e,n)));return o!==0?o:ce(r,s)}}n+=r>65535?2:1}return ce(t.length,e.length)}function Sy(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function pA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ce(t[n],e[n]);return ce(t.length,e.length)}function _i(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&re(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=vn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ce(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),s=vn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?vn.extractNumericId(e).compare(vn.extractNumericId(n)):Ud(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return br.fromString(e.substring(4,e.length-2))}}class Ie extends vn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const mA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends vn{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return mA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ay}static keyField(){return new st([Ay])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ie.fromString(e))}static fromName(e){return new Z(Ie.fromString(e).popFirst(5))}static empty(){return new Z(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gA(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cy(t){if(!Z.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ry(t){if(Z.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re(12329,{type:typeof t})}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ac(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function wa(t,e){if(!tE(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=-62135596800,Py=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Py);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<by)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Py}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wa(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-by;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Ke("string",Ae._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ae(0,0))}static max(){return new ie(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=-1;function yA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new jr(s,Z.empty(),e)}function _A(t){return new jr(t.readTime,t.key,na)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(ie.min(),Z.empty(),na)}static max(){return new jr(ie.max(),Z.empty(),na)}}function vA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==wA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function TA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}lc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=-1;function uc(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function IA(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="";function xA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ny(e)),e=kA(t.get(n),e);return Ny(e)}function kA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case nE:n+="";break;default:n+=i}}return n}function Ny(t){return t+nE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yl(this.root,e,this.comparator,!0)}}class yl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Je(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sE("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const SA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=SA.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="server_timestamp",oE="__type__",aE="__previous_value__",lE="__local_write_time__";function hp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[oE])===null||n===void 0?void 0:n.stringValue)===iE}function cc(t){const e=t.mapValue.fields[aE];return hp(e)?cc(e):e}function ra(t){const e=Fr(t.mapValue.fields[lE].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,s,i,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Eu="(default)";class sa{constructor(e,n){this.projectId=e,this.database=n||Eu}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database===Eu}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="__type__",CA="__max__",_l={mapValue:{}},cE="__vector__",Tu="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hp(t)?4:bA(t)?9007199254740991:RA(t)?10:11:re(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ra(t).isEqual(ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Fr(s.timestampValue),l=Fr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ur(s.bytesValue).isEqual(Ur(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),l=ze(i.doubleValue);return o===l?wu(o)===wu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Oy(o)!==Oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!bn(o[u],l[u])))return!1;return!0}(t,e);default:return re(52216,{left:t})}}function ia(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ze(i.integerValue||i.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ly(t.timestampValue,e.timestampValue);case 4:return Ly(ra(t),ra(e));case 5:return Ud(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ur(i),u=Ur(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ce(l[c],u[c]);if(d!==0)return d}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(ze(i.latitude),ze(o.latitude));return l!==0?l:ce(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,d;const m=i.fields||{},g=o.fields||{},v=(l=m[Tu])===null||l===void 0?void 0:l.arrayValue,A=(u=g[Tu])===null||u===void 0?void 0:u.arrayValue,b=ce(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return b!==0?b:Vy(v,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===_l.mapValue&&o===_l.mapValue)return 0;if(i===_l.mapValue)return 1;if(o===_l.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=Ud(u[m],d[m]);if(g!==0)return g;const v=vi(l[u[m]],c[d[m]]);if(v!==0)return v}return ce(u.length,d.length)}(t.mapValue,e.mapValue);default:throw re(23264,{le:n})}}function Ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Fr(t),r=Fr(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Vy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vi(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function wi(t){return Bd(t)}function Bd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Bd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Bd(n.fields[o])}`;return s+"}"}(t.mapValue):re(61005,{value:t})}function Ml(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cc(t);return e?16+Ml(e):16;case 5:return 2*t.stringValue.length;case 6:return Ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ml(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Kr(r.fields,(i,o)=>{s+=i.length+Ml(o)}),s}(t.mapValue);default:throw re(13486,{value:t})}}function My(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $d(t){return!!t&&"integerValue"in t}function dp(t){return!!t&&"arrayValue"in t}function jy(t){return!!t&&"nullValue"in t}function Fy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jl(t){return!!t&&"mapValue"in t}function RA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[uE])===null||n===void 0?void 0:n.stringValue)===cE}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Po(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];jl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Po(this.value))}}function hE(t){const e=[];return Kr(t.fields,(n,r)=>{const s=new st([n]);if(jl(r)){const i=hE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,ie.min(),ie.min(),ie.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ie.min(),ie.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ie.min(),ie.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.position=e,this.inclusive=n}}function Uy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function By(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n="asc"){this.field=e,this.dir=n}}function PA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{}class Ge extends dE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OA(e,n,r):n==="array-contains"?new VA(e,r):n==="in"?new MA(e,r):n==="not-in"?new jA(e,r):n==="array-contains-any"?new FA(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DA(e,r):new LA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vi(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends dE{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new dn(e,n)}matches(e){return fE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function fE(t){return t.op==="and"}function pE(t){return NA(t)&&fE(t)}function NA(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function zd(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(pE(t))return t.filters.map(e=>zd(e)).join(",");{const e=t.filters.map(n=>zd(n)).join(",");return`${t.op}(${e})`}}function mE(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&mE(o,s.filters[l]),!0):!1}(t,e):void re(19439)}function gE(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(gE).join(" ,")+"}"}(t):"Filter"}class OA extends Ge{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class DA extends Ge{constructor(e,n){super(e,"in",n),this.keys=yE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LA extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=yE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class VA extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dp(n)&&ia(n.arrayValue,this.value)}}class MA extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class jA extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ia(this.value.arrayValue,n)}}class FA extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function $y(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UA(t,e,n,r,s,i,o)}function fp(t){const e=le(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.Pe=n}return e.Pe}function pp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!By(t.startAt,e.startAt)&&By(t.endAt,e.endAt)}function Hd(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function BA(t,e,n,r,s,i,o,l){return new Ea(t,e,n,r,s,i,o,l)}function hc(t){return new Ea(t)}function zy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _E(t){return t.collectionGroup!==null}function No(t){const e=le(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new xu(i,r))}),n.has(st.keyField().canonicalString())||e.Te.push(new xu(st.keyField(),r))}return e.Te}function xn(t){const e=le(t);return e.Ie||(e.Ie=$A(e,No(t))),e.Ie}function $A(t,e){if(t.limitType==="F")return $y(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xu(s.field,i)});const n=t.endAt?new Iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Iu(t.startAt.position,t.startAt.inclusive):null;return $y(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wd(t,e){const n=t.filters.concat([e]);return new Ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qd(t,e,n){return new Ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dc(t,e){return pp(xn(t),xn(e))&&t.limitType===e.limitType}function vE(t){return`${fp(xn(t))}|lt:${t.limitType}`}function Fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gE(s)).join(", ")}]`),uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wi(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of No(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Uy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,No(r),s)||r.endAt&&!function(o,l,u){const c=Uy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,No(r),s))}(t,e)}function zA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wE(t){return(e,n)=>{let r=!1;for(const s of No(t)){const i=HA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HA(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?vi(u,c):re(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return rE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new De(Z.comparator);function Qn(){return WA}const EE=new De(Z.comparator);function _o(...t){let e=EE;for(const n of t)e=e.insert(n.key,n);return e}function TE(t){let e=EE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function as(){return Oo()}function IE(){return Oo()}function Oo(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const qA=new De(Z.comparator),GA=new Je(Z.comparator);function fe(...t){let e=GA;for(const n of t)e=e.add(n);return e}const KA=new Je(ce);function QA(){return KA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function xE(t){return{integerValue:""+t}}function YA(t,e){return IA(e)?xE(e):mp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this._=void 0}}function JA(t,e,n){return t instanceof ku?function(s,i){const o={fields:{[oE]:{stringValue:iE},[lE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hp(i)&&(i=cc(i)),i&&(o.fields[aE]=i),{mapValue:o}}(n,e):t instanceof oa?SE(t,e):t instanceof aa?AE(t,e):function(s,i){const o=kE(s,i),l=Hy(o)+Hy(s.Ee);return $d(o)&&$d(s.Ee)?xE(l):mp(s.serializer,l)}(t,e)}function XA(t,e,n){return t instanceof oa?SE(t,e):t instanceof aa?AE(t,e):n}function kE(t,e){return t instanceof Su?function(r){return $d(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ku extends pc{}class oa extends pc{constructor(e){super(),this.elements=e}}function SE(t,e){const n=CE(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends pc{constructor(e){super(),this.elements=e}}function AE(t,e){let n=CE(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class Su extends pc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Hy(t){return ze(t.integerValue||t.doubleValue)}function CE(t){return dp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ZA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof oa&&s instanceof oa||r instanceof aa&&s instanceof aa?_i(r.elements,s.elements,bn):r instanceof Su&&s instanceof Su?bn(r.Ee,s.Ee):r instanceof ku&&s instanceof ku}(t.transform,e.transform)}class eC{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function RE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gc(t.key,Dt.none()):new Ta(t.key,t.data,Dt.none());{const n=t.data,r=Ct.empty();let s=new Je(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qr(t.key,r,new Ft(s.toArray()),Dt.none())}}function tC(t,e,n){t instanceof Ta?function(s,i,o){const l=s.value.clone(),u=qy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(s,i,o){if(!Fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(bE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof Ta?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const c=i.value.clone(),d=Gy(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const c=Gy(i.fieldTransforms,u,o),d=o.data;return d.setAll(bE(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function nC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=kE(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function Wy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_i(r,s,(i,o)=>ZA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qr extends mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qy(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,XA(o,l,n[s]))}return r}function Gy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,JA(i,o,e))}return r}class gc extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rC extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=RE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(n,r)=>Wy(n,r))&&_i(this.baseMutations,e.baseMutations,(n,r)=>Wy(n,r))}}class gp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return qA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ge;function aC(t){switch(t){case L.OK:return re(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return re(15467,{code:t})}}function PE(t){if(t===void 0)return Kn("GRPC error has no .code"),L.UNKNOWN;switch(t){case We.OK:return L.OK;case We.CANCELLED:return L.CANCELLED;case We.UNKNOWN:return L.UNKNOWN;case We.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case We.INTERNAL:return L.INTERNAL;case We.UNAVAILABLE:return L.UNAVAILABLE;case We.UNAUTHENTICATED:return L.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case We.NOT_FOUND:return L.NOT_FOUND;case We.ALREADY_EXISTS:return L.ALREADY_EXISTS;case We.PERMISSION_DENIED:return L.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case We.ABORTED:return L.ABORTED;case We.OUT_OF_RANGE:return L.OUT_OF_RANGE;case We.UNIMPLEMENTED:return L.UNIMPLEMENTED;case We.DATA_LOSS:return L.DATA_LOSS;default:return re(39323,{code:t})}}(ge=We||(We={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new br([4294967295,4294967295],0);function Ky(t){const e=Zw().encode(t),n=new Ww;return n.update(e),new Uint8Array(n.digest())}function Qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new br([n,r],0),new br([s,i],0)]}class yp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vo(`Invalid padding: ${n}`);if(r<0)throw new vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=br.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(br.fromNumber(r)));return s.compare(lC)===1&&(s=new br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ky(e),[r,s]=Qy(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Ky(e),[r,s]=Qy(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yc(ie.min(),s,new De(ce),Qn(),fe())}}class Ia{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class NE{constructor(e,n){this.targetId=e,this.De=n}}class OE{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Yy{constructor(){this.ve=0,this.Ce=Jy(),this.Fe=at.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),n=fe(),r=fe();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new Ia(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Jy()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class uC{constructor(e){this.We=e,this.Ge=new Map,this.ze=Qn(),this.je=vl(),this.Je=vl(),this.He=new De(ce)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Hd(i))if(r===0){const o=new Z(i.path);this.Xe(n,o,mt.newNoDocument(o,ie.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ur(r).toUint8Array()}catch(u){if(u instanceof sE)return Mr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new yp(o,s,i)}catch(u){return Mr(u instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Hd(l.target)){const u=new Z(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,mt.newNoDocument(u,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=fe();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new yc(e,n,this.He,this.ze,r);return this.ze=Qn(),this.je=vl(),this.Je=vl(),this.He=new De(ce),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Yy,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Je(ce),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Je(ce),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Yy),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function vl(){return new De(Z.comparator)}function Jy(){return new De(Z.comparator)}const cC={asc:"ASCENDING",desc:"DESCENDING"},hC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dC={and:"AND",or:"OR"};class fC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gd(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function Au(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pC(t,e){return Au(t,e.toTimestamp())}function kn(t){return ve(!!t,49232),ie.fromTimestamp(function(n){const r=Fr(n);return new Ae(r.seconds,r.nanos)}(t))}function _p(t,e){return Kd(t,e).canonicalString()}function Kd(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function LE(t){const e=Ie.fromString(t);return ve(UE(e),10190,{key:e.toString()}),e}function Qd(t,e){return _p(t.databaseId,e.path)}function Rh(t,e){const n=LE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(ME(n))}function VE(t,e){return _p(t.databaseId,e)}function mC(t){const e=LE(t);return e.length===4?Ie.emptyPath():ME(e)}function Yd(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ME(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Xy(t,e,n){return{name:Qd(t,e),fields:n.value.mapValue.fields}}function gC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(ve(d===void 0||typeof d=="string",58123),at.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:PE(c.code);return new H(d,c.message||"")}(o);n=new OE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rh(t,r.document.name),i=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):ie.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(s,i,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ul(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rh(t,r.document),i=r.readTime?kn(r.readTime):ie.min(),o=mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rh(t,r.document),i=r.removedTargetIds||[];n=new Ul([],i,s,null)}else{if(!("filter"in e))return re(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new oC(s,i),l=r.targetId;n=new NE(l,o)}}return n}function yC(t,e){let n;if(e instanceof Ta)n={update:Xy(t,e.key,e.value)};else if(e instanceof gc)n={delete:Qd(t,e.key)};else if(e instanceof Qr)n={update:Xy(t,e.key,e.data),updateMask:SC(e.fieldMask)};else{if(!(e instanceof rC))return re(16599,{Rt:e.type});n={verify:Qd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ku)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Su)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw re(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)}(t,e.precondition)),n}function _C(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?kn(s.updateTime):kn(i);return o.isEqual(ie.min())&&(o=kn(i)),new eC(o,s.transformResults||[])}(n,e))):[]}function vC(t,e){return{documents:[VE(t,e.path)]}}function wC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=VE(t,s);const i=function(c){if(c.length!==0)return FE(dn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Us(g.field),direction:IC(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:s}}function EC(t){let e=mC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(m){const g=jE(m);return g instanceof dn&&pE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(A){return new xu(Bs(A.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,uc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,v=m.values||[];return new Iu(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,v=m.values||[];return new Iu(v,g)}(n.endAt)),BA(e,s,o,i,l,"F",u,c)}function TC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bs(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bs(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Bs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>jE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(t):re(30097,{filter:t})}function IC(t){return cC[t]}function xC(t){return hC[t]}function kC(t){return dC[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Bs(t){return st.fromServerFormat(t.fieldPath)}function FE(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Fy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NAN"}};if(jy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NAN"}};if(jy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(n.field),op:xC(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>FE(s));return r.length===1?r[0]:{compositeFilter:{op:kC(n.op),filters:r}}}(t):re(54877,{filter:t})}function SC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function UE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r,s,i=ie.min(),o=ie.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.gt=e}}function CC(t){const e=EC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.Dn=new bC}addToCollectionParentIndex(e,n){return this.Dn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(jr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class bC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},BE=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(BE,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ei(0)}static ur(){return new Ei(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="LruGarbageCollector",PC=1048576;function t_([t,e],[n,r]){const s=ce(t,n);return s===0?ce(e,r):s}class NC{constructor(e){this.Tr=e,this.buffer=new Je(t_),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();t_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class OC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(e_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bi(n)?W(e_,"Ignoring IndexedDB error during garbage collection: ",n):await Ri(n)}await this.Rr(3e5)})}}class DC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(lc.ue);const r=new NC(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Zy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zy):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),js()<=de.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function LC(t,e){return new DC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Do(r.mutation,s,Ft.empty(),Ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const s=as();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_o();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Qn();const o=Oo(),l=function(){return Oo()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof Qr)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Do(d.mutation,c,d.mutation.getFieldMask(),Ae.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var m;return l.set(c,new MC(d,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Oo();let s=new De((o,l)=>o-l),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ft.empty();d=l.applyToLocalView(c,d),r.set(u,d);const m=(s.get(l.batchId)||fe()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,m=IE();d.forEach(g=>{if(!i.has(g)){const v=RE(n.get(g),r.get(g));v!==null&&m.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_E(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(as());let l=na,u=i;return o.next(c=>V.forEach(c,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,fe())).next(d=>({batchId:l,changes:TE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=_o();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_o();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const c=function(m,g){return new Ea(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let l=_o();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&Do(d.mutation,c,Ft.empty(),Ae.now()),fc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return V.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:kn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:CC(s.bundledQuery),readTime:kn(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.overlays=new De(Z.comparator),this.kr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=as();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=as(),i=n.length+1,o=new Z(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=as(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=as(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=s)););return V.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iC(n,r));let i=this.kr.get(n);i===void 0&&(i=fe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.qr=new Je(Xe.Qr),this.$r=new Je(Xe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Xe(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new Z(new Ie([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Z(new Ie([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=fe();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Z.comparator(e.key,n.key)||ce(e.Hr,n.Hr)}static Ur(e,n){return ce(e.Hr,n.Hr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Je(Xe.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?cp:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ce);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Z(i),0);let l=new Je(ce);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),V.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Xe(n,0),s=this.Yr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.ni=e,this.docs=function(){return new De(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,l=new Z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vA(_A(d),r)<=0||(s.has(d.key)||fc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re(9500)}ri(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HC(this)}getSize(e){return V.resolve(this.size)}}class HC extends VC{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.persistence=e,this.ii=new As(n=>fp(n),pp),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.si=0,this.oi=new vp,this.targetCount=0,this._i=Ei.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),V.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.hr(n),V.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n){this.ai={},this.overlays={},this.ui=new lc(0),this.ci=!1,this.ci=!0,this.li=new BC,this.referenceDelegate=e(this),this.hi=new WC(this),this.indexManager=new RC,this.remoteDocumentCache=function(s){return new zC(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new AC(n),this.Ti=new FC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new $C(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new qC(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class qC extends EA{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.Ai=new vp,this.Ri=null}static Vi(e){return new wp(e)}get mi(){if(this.Ri)return this.Ri;throw re(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{const s=Z.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return V.or([()=>V.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Cu{constructor(e,n){this.persistence=e,this.gi=new As(r=>xA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LC(this,n)}static Vi(e,n){return new Cu(e,n)}Ii(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return V.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ml(e.data.value)),n}Sr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ep(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Bk()?8:TA(yt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GC;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(js()<=de.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(js()<=de.DEBUG&&W("QueryEngine","Query:",Fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(js()<=de.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):V.resolve())}ps(e,n){if(zy(n))return V.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qd(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=fe(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,qd(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,s){return zy(n)||s.isEqual(ie.min())?V.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?V.resolve(null):(js()<=de.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fs(n)),this.vs(e,o,n,yA(s,na)).next(l=>l))})}bs(e,n){let r=new Je(wE(e));return n.forEach((s,i)=>{fc(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return js()<=de.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Fs(n)),this.gs.getDocumentsMatchingQuery(e,n,jr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="LocalStore",QC=3e8;class YC{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new De(ce),this.Ms=new As(i=>fp(i),pp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function JC(t,e,n,r){return new YC(t,e,n,r)}async function zE(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=fe();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function XC(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const m=c.batch,g=m.keys();let v=V.resolve();return g.forEach(A=>{v=v.next(()=>d.getEntry(u,A)).next(b=>{const O=c.docVersions.get(A);ve(O!==null,48541),b.version.compareTo(O)<0&&(m.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=fe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function HE(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function ZC(t,e){const n=le(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((d,m)=>{const g=s.get(m);if(!g)return;l.push(n.hi.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.hi.addMatchingKeys(i,d.addedDocuments,m)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(at.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(m,v),function(b,O,k){return b.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=QC?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,v,d)&&l.push(n.hi.updateTargetData(i,v))});let u=Qn(),c=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(eR(i,o,e.documentUpdates).next(d=>{u=d.Ls,c=d.ks})),!r.isEqual(ie.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next(m=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Fs=s,i))}function eR(t,e,n){let r=fe(),s=fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(Tp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:s}})}function tR(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=cp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nR(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Jd(t,e,n){const r=le(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bi(o))throw o;W(Tp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function n_(t,e,n){const r=le(t);let s=ie.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const m=le(u),g=m.Ms.get(d);return g!==void 0?V.resolve(m.Fs.get(g)):m.hi.getTargetData(c,d)}(r,o,xn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:fe())).next(l=>(rR(r,zA(e),l),{documents:l,qs:i})))}function rR(t,e,n){let r=t.xs.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class r_{constructor(){this.activeTargetIds=QA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sR{constructor(){this.Fo=new r_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new r_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="ConnectivityMonitor";class i_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(s_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(s_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl=null;function Xd(){return wl===null?wl=function(){return 268435456+Math.round(2147483648*Math.random())}():wl++,"0x"+wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="RestConnection",oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Eu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Xd(),l=this.Go(e,n.toUriEncodedString());W(bh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:c}=new URL(l),d=Gr(c);return this.jo(e,l,u,r,d).then(m=>(W(bh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Mr(bh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ci}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=oR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class uR extends aR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Xd();return new Promise((l,u)=>{const c=new qw;c.setWithCredentials(!0),c.listenOnce(Gw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Vl.NO_ERROR:const m=c.getResponseJson();W(dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Vl.TIMEOUT:W(dt,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const g=c.getStatus();if(W(dt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const A=v==null?void 0:v.error;if(A&&A.status&&A.message){const b=function(k){const w=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(A.status);u(new H(b,A.message))}else u(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:re(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{W(dt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);W(dt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",d,r,15)})}P_(e,n,r){const s=Xd(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yw(),l=Qw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");W(dt,`Creating RPC '${e}' stream ${s}: ${d}`,u);const m=o.createWebChannel(d,u);this.T_(m);let g=!1,v=!1;const A=new lR({Ho:O=>{v?W(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(W(dt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),W(dt,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},Yo:()=>m.close()}),b=(O,k,w)=>{O.listen(k,S=>{try{w(S)}catch(N){setTimeout(()=>{throw N},0)}})};return b(m,yo.EventType.OPEN,()=>{v||(W(dt,`RPC '${e}' stream ${s} transport opened.`),A.s_())}),b(m,yo.EventType.CLOSE,()=>{v||(v=!0,W(dt,`RPC '${e}' stream ${s} transport closed`),A.__(),this.I_(m))}),b(m,yo.EventType.ERROR,O=>{v||(v=!0,Mr(dt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),A.__(new H(L.UNAVAILABLE,"The operation could not be completed")))}),b(m,yo.EventType.MESSAGE,O=>{var k;if(!v){const w=O.data[0];ve(!!w,16349);const S=w,N=(S==null?void 0:S.error)||((k=S[0])===null||k===void 0?void 0:k.error);if(N){W(dt,`RPC '${e}' stream ${s} received error:`,N);const U=N.status;let F=function(E){const I=We[E];if(I!==void 0)return PE(I)}(U),T=N.message;F===void 0&&(F=L.INTERNAL,T="Unknown error status: "+U+" with message "+N.message),v=!0,A.__(new H(F,T)),m.close()}else W(dt,`RPC '${e}' stream ${s} received:`,w),A.a_(w)}}),b(l,Kw.STAT_EVENT,O=>{O.stat===Fd.PROXY?W(dt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Fd.NOPROXY&&W(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.o_()},0),A}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Ph(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t){return new fC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="PersistentStream";class qE{constructor(e,n,r,s,i,o,l,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new WE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return W(o_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(W(o_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cR extends qE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=gC(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?kn(o.readTime):ie.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Yd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Hd(u)?{documents:vC(i,u)}:{query:wC(i,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=DE(i,o.resumeToken);const c=Gd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){l.readTime=Au(i,o.snapshotVersion.toTimestamp());const c=Gd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=TC(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Yd(this.serializer),n.removeTarget=e,this.k_(n)}}class hR extends qE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=_C(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Yd(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yC(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{}class fR extends dR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Kd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Kd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class pR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Kn(n),this._a=!1):W("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="RemoteStore";class mR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(W(Es,"Restarting streams for network reachability change."),await async function(u){const c=le(u);c.Ia.add(4),await xa(c),c.Aa.set("Unknown"),c.Ia.delete(4),await vc(c)}(this))})}),this.Aa=new pR(r,s)}}async function vc(t){if(Cs(t))for(const e of t.da)await e(!0)}async function xa(t){for(const e of t.da)await e(!1)}function GE(t,e){const n=le(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Sp(n)?kp(n):Pi(n).x_()&&xp(n,e))}function Ip(t,e){const n=le(t),r=Pi(n);n.Ta.delete(e),r.x_()&&KE(n,e),n.Ta.size===0&&(r.x_()?r.B_():Cs(n)&&n.Aa.set("Unknown"))}function xp(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pi(t).H_(e)}function KE(t,e){t.Ra.$e(e),Pi(t).Y_(e)}function kp(t){t.Ra=new uC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Pi(t).start(),t.Aa.aa()}function Sp(t){return Cs(t)&&!Pi(t).M_()&&t.Ta.size>0}function Cs(t){return le(t).Ia.size===0}function QE(t){t.Ra=void 0}async function gR(t){t.Aa.set("Online")}async function yR(t){t.Ta.forEach((e,n)=>{xp(t,e)})}async function _R(t,e){QE(t),Sp(t)?(t.Aa.la(e),kp(t)):t.Aa.set("Unknown")}async function vR(t,e,n){if(t.Aa.set("Online"),e instanceof OE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){W(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof Ul?t.Ra.Ye(e):e instanceof NE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ie.min()))try{const r=await HE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ta.get(c);d&&i.Ta.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=i.Ta.get(u);if(!d)return;i.Ta.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),KE(i,u);const m=new vr(d.target,u,c,d.sequenceNumber);xp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(Es,"Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!bi(e))throw e;t.Ia.add(1),await xa(t),t.Aa.set("Offline"),n||(n=()=>HE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Es,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await vc(t)})}function YE(t,e){return e().catch(n=>Ru(t,n,e))}async function wc(t){const e=le(t),n=$r(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:cp;for(;wR(e);)try{const s=await tR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,ER(e,s)}catch(s){await Ru(e,s)}JE(e)&&XE(e)}function wR(t){return Cs(t)&&t.Pa.length<10}function ER(t,e){t.Pa.push(e);const n=$r(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function JE(t){return Cs(t)&&!$r(t).M_()&&t.Pa.length>0}function XE(t){$r(t).start()}async function TR(t){$r(t).na()}async function IR(t){const e=$r(t);for(const n of t.Pa)e.X_(n.mutations)}async function xR(t,e,n){const r=t.Pa.shift(),s=gp.from(r,e,n);await YE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wc(t)}async function kR(t,e){e&&$r(t).Z_&&await async function(r,s){if(function(o){return aC(o)&&o!==L.ABORTED}(s.code)){const i=r.Pa.shift();$r(r).N_(),await YE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wc(r)}}(t,e),JE(t)&&XE(t)}async function a_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),W(Es,"RemoteStore received new credentials");const r=Cs(n);n.Ia.add(3),await xa(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await vc(n)}async function SR(t,e){const n=le(t);e?(n.Ia.delete(2),await vc(n)):e||(n.Ia.add(2),await xa(n),n.Aa.set("Unknown"))}function Pi(t){return t.Va||(t.Va=function(n,r,s){const i=le(n);return i.ia(),new cR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:gR.bind(null,t),e_:yR.bind(null,t),n_:_R.bind(null,t),J_:vR.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Sp(t)?kp(t):t.Aa.set("Unknown")):(await t.Va.stop(),QE(t))})),t.Va}function $r(t){return t.ma||(t.ma=function(n,r,s){const i=le(n);return i.ia(),new hR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:TR.bind(null,t),n_:kR.bind(null,t),ea:IR.bind(null,t),ta:xR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await wc(t)):(await t.ma.stop(),t.Pa.length>0&&(W(Es,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ap(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),bi(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{static emptySet(e){return new ai(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=_o(),this.sortedSet=new De(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.fa=new De(Z.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):re(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ti{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ti(e,n,ai.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class CR{constructor(){this.queries=u_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=u_(),i.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function u_(){return new As(t=>vE(t),dc)}async function Rp(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new AR,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Cp(o,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Pp(n)}async function bp(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RR(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Pp(n)}function bR(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Pp(t){t.Da.forEach(e=>{e.next()})}var Zd,c_;(c_=Zd||(Zd={})).Fa="default",c_.Cache="cache";class Np{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Zd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.key=e}}class eT{constructor(e){this.key=e}}class PR{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=wE(e),this.eu=new ai(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new l_,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const g=s.get(d),v=fc(this.query,m)?m:null,A=!!g&&this.mutatedKeys.has(g.key),b=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;g&&v?g.data.isEqual(v.data)?A!==b&&(r.track({type:3,doc:v}),O=!0):this.iu(g,v)||(r.track({type:2,doc:v}),O=!0,(u&&this.Xa(v,u)>0||c&&this.Xa(v,c)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),O=!0):g&&!v&&(r.track({type:1,doc:g}),O=!0,(u||c)&&(l=!0)),O&&(v?(o=o.add(v),i=b?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((d,m)=>function(v,A){const b=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{At:O})}};return b(v)-b(A)}(d.type,m.type)||this.Xa(d.doc,m.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new Ti(this.query,e.eu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new l_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new eT(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new ZE(r))}),n}uu(e){this.Ha=e.qs,this.Za=fe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ti.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Op="SyncEngine";class NR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OR{constructor(e){this.key=e,this.lu=!1}}class DR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new As(l=>vE(l),dc),this.Tu=new Map,this.Iu=new Set,this.du=new De(Z.comparator),this.Eu=new Map,this.Au=new vp,this.Ru={},this.Vu=new Map,this.mu=Ei.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function LR(t,e,n=!0){const r=oT(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await tT(r,e,n,!0),s}async function VR(t,e){const n=oT(t);await tT(n,e,!0,!1)}async function tT(t,e,n,r){const s=await nR(t.localStore,xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await MR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&GE(t.remoteStore,s),l}async function MR(t,e,n,r,s){t.gu=(m,g,v)=>async function(b,O,k,w){let S=O.view.nu(k);S.Ds&&(S=await n_(b.localStore,O.query,!1).then(({documents:T})=>O.view.nu(T,S)));const N=w&&w.targetChanges.get(O.targetId),U=w&&w.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(S,b.isPrimaryClient,N,U);return d_(b,O.targetId,F._u),F.snapshot}(t,m,g,v);const i=await n_(t.localStore,e,!0),o=new PR(e,i.qs),l=o.nu(i.documents),u=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);d_(t,n,c._u);const d=new NR(e,n,o);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function jR(t,e,n){const r=le(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!dc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ip(r.remoteStore,s.targetId),ef(r,s.targetId)}).catch(Ri)):(ef(r,s.targetId),await Jd(r.localStore,s.targetId,!0))}async function FR(t,e){const n=le(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ip(n.remoteStore,r.targetId))}async function UR(t,e,n){const r=GR(t);try{const s=await function(o,l){const u=le(o),c=Ae.now(),d=l.reduce((v,A)=>v.add(A.key),fe());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=Qn(),b=fe();return u.Os.getEntries(v,d).next(O=>{A=O,A.forEach((k,w)=>{w.isValidDocument()||(b=b.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,A)).next(O=>{m=O;const k=[];for(const w of l){const S=nC(w,m.get(w.key).overlayedDocument);S!=null&&k.push(new Qr(w.key,S,hE(S.value.mapValue),Dt.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,k,l)}).next(O=>{g=O;const k=O.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(v,O.batchId,k)})}).then(()=>({batchId:g.batchId,changes:TE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new De(ce)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,s.batchId,n),await ka(r,s.changes),await wc(r.remoteStore)}catch(s){const i=Cp(s,"Failed to persist write");n.reject(i)}}async function nT(t,e){const n=le(t);try{const r=await ZC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ve(o.lu,14607):s.removedDocuments.size>0&&(ve(o.lu,42227),o.lu=!1))}),await ka(n,r,e)}catch(r){await Ri(r)}}function h_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=le(o);u.onlineState=l;let c=!1;u.queries.forEach((d,m)=>{for(const g of m.wa)g.va(l)&&(c=!0)}),c&&Pp(u)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BR(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new De(Z.comparator);o=o.insert(i,mt.newNoDocument(i,ie.min()));const l=fe().add(i),u=new yc(ie.min(),new Map,new De(ce),o,l);await nT(r,u),r.du=r.du.remove(i),r.Eu.delete(e),Dp(r)}else await Jd(r.localStore,e,!1).then(()=>ef(r,e,n)).catch(Ri)}async function $R(t,e){const n=le(t),r=e.batch.batchId;try{const s=await XC(n.localStore,e);sT(n,r,null),rT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,s)}catch(s){await Ri(s)}}async function zR(t,e,n){const r=le(t);try{const s=await function(o,l){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ve(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);sT(r,e,n),rT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,s)}catch(s){await Ri(s)}}function rT(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function sT(t,e,n){const r=le(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function ef(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||iT(t,r)})}function iT(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ip(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Dp(t))}function d_(t,e,n){for(const r of n)r instanceof ZE?(t.Au.addReference(r.key,e),HR(t,r)):r instanceof eT?(W(Op,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||iT(t,r.key)):re(19791,{yu:r})}function HR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(W(Op,"New document in limbo: "+n),t.Iu.add(r),Dp(t))}function Dp(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Z(Ie.fromString(e)),r=t.mu.next();t.Eu.set(r,new OR(n)),t.du=t.du.insert(n,r),GE(t.remoteStore,new vr(xn(hc(n.path)),r,"TargetPurposeLimboResolution",lc.ue))}}async function ka(t,e,n){const r=le(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Ep.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.hu.J_(s),await async function(u,c){const d=le(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.Is,v=>d.persistence.referenceDelegate.addReference(m,g.targetId,v)).next(()=>V.forEach(g.ds,v=>d.persistence.referenceDelegate.removeReference(m,g.targetId,v)))))}catch(m){if(!bi(m))throw m;W(Tp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const v=d.Fs.get(g),A=v.snapshotVersion,b=v.withLastLimboFreeSnapshotVersion(A);d.Fs=d.Fs.insert(g,b)}}}(r.localStore,i))}async function WR(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){W(Op,"User change. New user:",e.toKey());const r=await zE(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.Bs)}}function qR(t,e){const n=le(t),r=n.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function oT(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BR.bind(null,e),e.hu.J_=RR.bind(null,e.eventManager),e.hu.pu=bR.bind(null,e.eventManager),e}function GR(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$R.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zR.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return JC(this.persistence,new KC,e.initialUser,this.serializer)}Du(e){return new $E(wp.Vi,this.serializer)}bu(e){return new sR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class KR extends bu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ve(this.persistence.referenceDelegate instanceof Cu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new OC(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new $E(r=>Cu.Vi(r,n),this.serializer)}}class tf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>h_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WR.bind(null,this.syncEngine),await SR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CR}()}createDatastore(e){const n=_c(e.databaseInfo.databaseId),r=function(i){return new uR(i)}(e.databaseInfo);return function(i,o,l,u){return new fR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new mR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>h_(this.syncEngine,n,0),function(){return i_.C()?new i_:new iR}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,d){const m=new DR(s,i,o,l,u,c);return d&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);W(Es,"RemoteStore shutting down."),i.Ia.add(5),await xa(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tf.provider={build:()=>new tf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="FirestoreClient";class QR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=up.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nh(t,e){t.asyncQueue.verifyOperationInProgress(),W(zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Mr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Mr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function f_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YR(t);W(zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>a_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>a_(e.remoteStore,s)),t._onlineComponents=e}async function YR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(zr,"Using user provided OfflineComponentProvider");try{await Nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Mr("Error using user provided cache. Falling back to memory cache: "+n),await Nh(t,new bu)}}else W(zr,"Using default OfflineComponentProvider"),await Nh(t,new KR(void 0));return t._offlineComponents}async function aT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(zr,"Using user provided OnlineComponentProvider"),await f_(t,t._uninitializedComponentsProvider._online)):(W(zr,"Using default OnlineComponentProvider"),await f_(t,new tf))),t._onlineComponents}function JR(t){return aT(t).then(e=>e.syncEngine)}async function Pu(t){const e=await aT(t),n=e.eventManager;return n.onListen=LR.bind(null,e.syncEngine),n.onUnlisten=jR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FR.bind(null,e.syncEngine),n}function XR(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new Lp({next:g=>{d.Ou(),o.enqueueAndForget(()=>bp(i,m));const v=g.docs.has(l);!v&&g.fromCache?c.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new Np(hc(l.path),d,{includeMetadataChanges:!0,ka:!0});return Rp(i,m)}(await Pu(t),t.asyncQueue,e,n,r)),r.promise}function ZR(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new Lp({next:g=>{d.Ou(),o.enqueueAndForget(()=>bp(i,m)),g.fromCache&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new Np(l,d,{includeMetadataChanges:!0,ka:!0});return Rp(i,m)}(await Pu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firestore.googleapis.com",m_=!0;class g_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uT,this.ssl=m_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:m_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=BE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PC)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aA;switch(r.type){case"firstParty":return new hA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=p_.get(n);r&&(W("ComponentProvider","Removing Datastore"),p_.delete(n),r.terminate())}(this),Promise.resolve()}}function e2(t,e,n,r={}){var s;t=Ot(t,Ec);const i=Gr(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;i&&(ip(`https://${u}`),op("Firestore",!0)),o.host!==uT&&o.host!==u&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:r});if(!vs(c,l)&&(t._setSettings(c),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=ft.MOCK_USER;else{d=Fw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ft(g)}t._authCredentials=new lA(new Xw(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rs(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wa(n,Me._jsonSchema))return new Me(e,r||null,new Z(Ie.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Ke("string",Me._jsonSchemaVersion),referencePath:Ke("string")};class Pr extends Rs{constructor(e,n,r){super(e,n,hc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new Z(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function ls(t,e,...n){if(t=Te(t),eE("collection","path",e),t instanceof Ec){const r=Ie.fromString(e,...n);return Ry(r),new Pr(t,null,r)}{if(!(t instanceof Me||t instanceof Pr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Ry(r),new Pr(t.firestore,null,r)}}function ao(t,e,...n){if(t=Te(t),arguments.length===1&&(e=up.newId()),eE("doc","path",e),t instanceof Ec){const r=Ie.fromString(e,...n);return Cy(r),new Me(t,null,new Z(r))}{if(!(t instanceof Me||t instanceof Pr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Cy(r),new Me(t.firestore,t instanceof Pr?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="AsyncQueue";class __{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new WE(this,"async_queue_retry"),this.oc=()=>{const r=Ph();r&&W(y_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Ph();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Bn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!bi(e))throw e;W(y_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Kn("INTERNAL UNHANDLED ERROR: ",v_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Ap.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&re(47125,{hc:v_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function v_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Yn extends Ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new __,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new __(e),this._firestoreClient=void 0,await e}}}function t2(t,e){const n=typeof t=="object"?t:oc(),r=typeof t=="string"?t:Eu,s=va(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vw("firestore");i&&e2(s,...i)}return s}function Sa(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||n2(t),t._firestoreClient}function n2(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,d){return new AA(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,lT(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new QR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(at.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wa(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:Ke("string",Qt._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sn._jsonSchemaVersion}}static fromJSON(e){if(wa(e,Sn._jsonSchema))return new Sn(e.latitude,e.longitude)}}Sn._jsonSchemaVersion="firestore/geoPoint/1.0",Sn._jsonSchema={type:Ke("string",Sn._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wa(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new An(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:Ke("string",An._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=/^__.*__$/;class s2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class cT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ec:t})}}class Mp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Mp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Nu(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(hT(this.Ec)&&r2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class i2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_c(e)}Dc(e,n,r,s=!1){return new Mp({Ec:e,methodName:n,bc:r,path:st.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tc(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new i2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dT(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);jp("Data must be an object, but it was:",o,r);const l=mT(r,o);let u,c;if(i.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const g=nf(e,m,n);if(!o.contains(g))throw new H(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);yT(d,g)||d.push(g)}u=new Ft(d),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new s2(new Ct(l),u,c)}class Ic extends Vp{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function fT(t,e,n,r){const s=t.Dc(1,e,n);jp("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();Kr(r,(u,c)=>{const d=Fp(e,u,n);c=Te(c);const m=s.gc(d);if(c instanceof Ic)i.push(d);else{const g=Ca(c,m);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ft(i);return new cT(o,l,s.fieldTransforms)}function pT(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[nf(e,r,n)],u=[s];if(i.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(nf(e,i[g])),u.push(i[g+1]);const c=[],d=Ct.empty();for(let g=l.length-1;g>=0;--g)if(!yT(c,l[g])){const v=l[g];let A=u[g];A=Te(A);const b=o.gc(v);if(A instanceof Ic)c.push(v);else{const O=Ca(A,b);O!=null&&(c.push(v),d.set(v,O))}}const m=new Ft(c);return new cT(d,m,o.fieldTransforms)}function o2(t,e,n,r=!1){return Ca(n,t.Dc(r?4:3,e))}function Ca(t,e){if(gT(t=Te(t)))return jp("Unsupported field value:",e,t),mT(t,e);if(t instanceof Vp)return function(r,s){if(!hT(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Ca(l,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:Au(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Au(s.serializer,i)}}if(r instanceof Sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:DE(s.serializer,r._byteString)};if(r instanceof Me){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_p(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return function(o,l){return{mapValue:{fields:{[uE]:{stringValue:cE},[Tu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return mp(l.serializer,c)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${ac(r)}`)}(t,e)}function mT(t,e){const n={};return rE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,(r,s)=>{const i=Ca(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Sn||t instanceof Qt||t instanceof Me||t instanceof Vp||t instanceof An)}function jp(t,e,n){if(!gT(n)||!tE(n)){const r=ac(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function nf(t,e,n){if((e=Te(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return Fp(t,e);throw Nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const a2=new RegExp("[~\\*/\\[\\]]");function Fp(t,e,n){if(e.search(a2)>=0)throw Nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Aa(...e.split("."))._internalPath}catch{throw Nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function yT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Up("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class l2 extends _T{data(){return super.data()}}function Up(t,e){return typeof e=="string"?Fp(t,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bp{}class u2 extends Bp{}function c2(t,e,...n){let r=[];e instanceof Bp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof $p).length,l=i.filter(u=>u instanceof xc).length;if(o>1||o>0&&l>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class xc extends u2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xc(e,n,r)}_apply(e){const n=this._parse(e);return wT(e._query,n),new Rs(e.firestore,e.converter,Wd(e._query,n))}_parse(e){const n=Tc(e.firestore);return function(i,o,l,u,c,d,m){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){T_(m,d);const A=[];for(const b of m)A.push(E_(u,i,b));g={arrayValue:{values:A}}}else g=E_(u,i,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||T_(m,d),g=o2(l,o,m,d==="in"||d==="not-in");return Ge.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function h2(t,e,n){const r=e,s=Up("where",t);return xc._create(s,r,n)}class $p extends Bp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $p(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)wT(o,u),o=Wd(o,u)}(e._query,n),new Rs(e.firestore,e.converter,Wd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function E_(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_E(e)&&n.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Z.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return My(t,new Z(r))}if(n instanceof Me)return My(t,n._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(n)}.`)}function T_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class d2{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Tu].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new An(i)}convertGeoPoint(e){return new Sn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ra(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(UE(r),9688,{name:e});const s=new sa(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class wo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hs extends _T{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Up("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=hs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",hs._jsonSchema={type:Ke("string",hs._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Bl extends hs{data(e={}){return super.data(e)}}class ds{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new wo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:f2(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ds._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=up.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function f2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){t=Ot(t,Me);const e=Ot(t.firestore,Yn);return XR(Sa(e),t._key).then(n=>TT(e,t,n))}ds._jsonSchemaVersion="firestore/querySnapshot/1.0",ds._jsonSchema={type:Ke("string",ds._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class zp extends d2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function $l(t){t=Ot(t,Rs);const e=Ot(t.firestore,Yn),n=Sa(e),r=new zp(e);return vT(t._query),ZR(n,t._query).then(s=>new ds(e,r,t,s))}function m2(t,e,n){t=Ot(t,Me);const r=Ot(t.firestore,Yn),s=ET(t.converter,e,n);return kc(r,[dT(Tc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dt.none())])}function g2(t,e,n,...r){t=Ot(t,Me);const s=Ot(t.firestore,Yn),i=Tc(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof Aa?pT(i,"updateDoc",t._key,e,n,r):fT(i,"updateDoc",t._key,e),kc(s,[o.toMutation(t._key,Dt.exists(!0))])}function y2(t){return kc(Ot(t.firestore,Yn),[new gc(t._key,Dt.none())])}function _2(t,...e){var n,r,s;t=Te(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||w_(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(w_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,c,d;if(t instanceof Me)c=Ot(t.firestore,Yn),d=hc(t._key.path),u={next:m=>{e[o]&&e[o](TT(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ot(t,Rs);c=Ot(m.firestore,Yn),d=m._query;const g=new zp(c);u={next:v=>{e[o]&&e[o](new ds(c,g,m,v))},error:e[o+1],complete:e[o+2]},vT(t._query)}return function(g,v,A,b){const O=new Lp(b),k=new Np(v,O,A);return g.asyncQueue.enqueueAndForget(async()=>Rp(await Pu(g),k)),()=>{O.Ou(),g.asyncQueue.enqueueAndForget(async()=>bp(await Pu(g),k))}}(Sa(c),d,l,u)}function kc(t,e){return function(r,s){const i=new Bn;return r.asyncQueue.enqueueAndForget(async()=>UR(await JR(r),s,i)),i.promise}(Sa(t),e)}function TT(t,e,n){const r=n.docs.get(e._key),s=new zp(t);return new hs(t,s,e._key,r,new wo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Tc(e)}set(e,n,r){this._verifyNotCommitted();const s=Oh(e,this._firestore),i=ET(s.converter,n,r),o=dT(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Dt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Oh(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof Aa?pT(this._dataReader,"WriteBatch.update",i._key,n,r,s):fT(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Dt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Oh(e,this._firestore);return this._mutations=this._mutations.concat(new gc(n._key,Dt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Oh(t,e){if((t=Te(t)).firestore!==e)throw new H(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){return Sa(t=Ot(t,Yn)),new v2(t,e=>kc(t,e))}(function(e,n=!0){(function(s){Ci=s})(Ss),Vr(new qn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Yn(new uA(r.getProvider("auth-internal")),new dA(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(c.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Xt(Iy,xy,e),Xt(Iy,xy,"esm2017")})();function Hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function la(t){return this instanceof la?(this.v=t,this):new la(t)}function w2(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),l("next"),l("throw"),l("return",o),s[Symbol.asyncIterator]=function(){return this},s;function o(v){return function(A){return Promise.resolve(A).then(v,m)}}function l(v,A){r[v]&&(s[v]=function(b){return new Promise(function(O,k){i.push([v,b,O,k])>1||u(v,b)})},A&&(s[v]=A(s[v])))}function u(v,A){try{c(r[v](A))}catch(b){g(i[0][3],b)}}function c(v){v.value instanceof la?Promise.resolve(v.value.v).then(d,m):g(i[0][2],v)}function d(v){u("next",v)}function m(v){u("throw",v)}function g(v,A){v(A),i.shift(),i.length&&u(i[0][0],i[0][1])}}function IT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E2=IT,xT=new ya("auth","Firebase",IT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new ic("@firebase/auth");function T2(t,...e){Ou.logLevel<=de.WARN&&Ou.warn(`Auth (${Ss}): ${t}`,...e)}function zl(t,...e){Ou.logLevel<=de.ERROR&&Ou.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Wp(t,...e)}function Cn(t,...e){return Wp(t,...e)}function kT(t,e,n){const r=Object.assign(Object.assign({},E2()),{[e]:n});return new ya("auth","Firebase",r).create(e,{appName:t.name})}function Nr(t){return kT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xT.create(t,...e)}function ne(t,e,...n){if(!t)throw Wp(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zl(e),new Error(e)}function Jn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I2(){return x_()==="http:"||x_()==="https:"}function x_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I2()||jk()||"connection"in navigator)?navigator.onLine:!0}function k2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=Lk()||Fk()}get(){return x2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C2=new Ra(3e4,6e4);function bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yr(t,e,n,r,s={}){return AT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=_a(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return Mk()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Gr(t.emulatorConfig.host)&&(c.credentials="include"),ST.fetch()(await CT(t,t.config.apiHost,n,l),c)})}async function AT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},S2),e);try{const s=new b2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw El(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kT(t,d,c);fn(t,d)}}catch(s){if(s instanceof mn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Sc(t,e,n,r,s={}){const i=await Yr(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function CT(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?qp(t.config,s):`${t.config.apiScheme}://${s}`;return A2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function R2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class b2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),C2.get())})}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Cn(t,e,r);return s.customData._tokenResponse=n,s}function k_(t){return t!==void 0&&t.enterprise!==void 0}class P2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return R2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function N2(t,e){return Yr(t,"GET","/v2/recaptchaConfig",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function Du(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D2(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=Gp(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lo(Dh(s.auth_time)),issuedAtTime:Lo(Dh(s.iat)),expirationTime:Lo(Dh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Dh(t){return Number(t)*1e3}function Gp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dw(n);return s?JSON.parse(s):(zl("Failed to decode base64 JWT payload"),null)}catch(s){return zl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function S_(t){const e=Gp(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&L2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ua(t,Du(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?RT(i.providerUserInfo):[],l=j2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new sf(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function M2(t){const e=Te(t);await Lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function RT(t){return t.map(e=>{var{providerId:n}=e,r=Hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e){const n=await AT(t,{},async()=>{const r=_a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await CT(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Gr(t.emulatorConfig.host)&&(u.credentials="include"),ST.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function U2(t,e){return Yr(t,"POST","/v2/accounts:revokeToken",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=S_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await F2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new li;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ua(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D2(this,e)}reload(){return M2(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await ua(this,O2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:N,isAnonymous:U,providerData:F,stsTokenManager:T}=n;ne(S&&T,e,"internal-error");const _=li.fromJSON(this.name,T);ne(typeof S=="string",e,"internal-error"),ir(m,e.name),ir(g,e.name),ne(typeof N=="boolean",e,"internal-error"),ne(typeof U=="boolean",e,"internal-error"),ir(v,e.name),ir(A,e.name),ir(b,e.name),ir(O,e.name),ir(k,e.name),ir(w,e.name);const E=new ln({uid:S,auth:e,email:g,emailVerified:N,displayName:m,isAnonymous:U,photoURL:A,phoneNumber:v,tenantId:b,stsTokenManager:_,createdAt:k,lastLoginAt:w});return F&&Array.isArray(F)&&(E.providerData=F.map(I=>Object.assign({},I))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new li;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?RT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new li;l.updateFromIdToken(r);const u=new ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Map;function Fn(t){Jn(t instanceof Function,"Expected a class definition");let e=A_.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,A_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bT.type="NONE";const C_=bT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Du(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(Fn(C_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Fn(C_);const o=Hl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let m;if(typeof d=="string"){const g=await Du(e,{idToken:d}).catch(()=>{});if(!g)break;m=await ln._fromGetAccountInfoResponse(e,g,d)}else m=ln._fromJSON(e,d);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ui(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ui(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VT(e))return"Blackberry";if(MT(e))return"Webos";if(NT(e))return"Safari";if((e.includes("chrome/")||OT(e))&&!e.includes("edge/"))return"Chrome";if(LT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PT(t=yt()){return/firefox\//i.test(t)}function NT(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OT(t=yt()){return/crios\//i.test(t)}function DT(t=yt()){return/iemobile/i.test(t)}function LT(t=yt()){return/android/i.test(t)}function VT(t=yt()){return/blackberry/i.test(t)}function MT(t=yt()){return/webos/i.test(t)}function Kp(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function B2(t=yt()){var e;return Kp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $2(){return Uk()&&document.documentMode===10}function jT(t=yt()){return Kp(t)||LT(t)||MT(t)||VT(t)||/windows phone/i.test(t)||DT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e=[]){let n;switch(t){case"Browser":n=R_(yt());break;case"Worker":n=`${R_(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(t,e={}){return Yr(t,"GET","/v2/passwordPolicy",bs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=6;class q2{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b_(this),this.idTokenSubscription=new b_(this),this.beforeStateQueue=new z2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Du(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(Nr(this));const n=e?Te(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await H2(this),n=new q2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ya("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await U2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&T2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(t){return Te(t)}class b_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kk(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K2(t){Ac=t}function UT(t){return Ac.loadJS(t)}function Q2(){return Ac.recaptchaEnterpriseScript}function Y2(){return Ac.gapiScript}function J2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class X2{constructor(){this.enterprise=new Z2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Z2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eb="recaptcha-enterprise",BT="NO_RECAPTCHA";class tb{constructor(e){this.type=eb,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{N2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new P2(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;k_(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(BT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new X2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&k_(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Q2();u.length!==0&&(u+=l),UT(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function P_(t,e,n,r=!1,s=!1){const i=new tb(t);let o;if(s)o=BT;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function N_(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await P_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await P_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t,e){const n=va(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vs(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function rb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sb(t,e,n){const r=Ni(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$T(e),{host:o,port:l}=ib(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(vs(c,r.config.emulator)&&vs(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Gr(o)?(ip(`${i}//${o}${u}`),op("Auth",!0)):ob()}function $T(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ib(t){const e=$T(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:O_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:O_(o)}}}function O_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function ab(t,e){return Yr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e){return Sc(t,"POST","/v1/accounts:signInWithPassword",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e){return Sc(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}async function cb(t,e){return Sc(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Qp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return N_(e,n,"signInWithPassword",lb);case"emailLink":return ub(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return N_(e,r,"signUpPassword",ab);case"emailLink":return cb(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e){return Sc(t,"POST","/v1/accounts:signInWithIdp",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="http://localhost";class Ts extends Qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:hb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_a(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fb(t){const e=mo(go(t)).link,n=e?mo(go(e)).deep_link_id:null,r=mo(go(t)).deep_link_id;return(r?mo(go(r)).link:null)||r||n||e||t}class Yp{constructor(e){var n,r,s,i,o,l;const u=mo(go(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,m=db((s=u.mode)!==null&&s!==void 0?s:null);ne(c&&d&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=d,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=fb(e);try{return new Yp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.providerId=Oi.PROVIDER_ID}static credential(e,n){return ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yp.parseLink(n);return ne(r,"argument-error"),ca._fromEmailAndCode(e,r.code,r.tenantId)}}Oi.PROVIDER_ID="password";Oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends zT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends ba{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends ba{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends ba{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),o=D_(r);return new Ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=D_(r);return new Ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function D_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vu(e,n,r,s)}}function HT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,i,e,r):i})}async function pb(t,e,n=!1){const r=await ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(Nr(r));const s="reauthenticate";try{const i=await ua(t,HT(r,s,e,t),n);ne(i.idToken,r,"internal-error");const o=Gp(i.idToken);ne(o,r,"internal-error");const{sub:l}=o;return ne(t.uid===l,r,"user-mismatch"),Ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e,n=!1){if(Mt(t.app))return Promise.reject(Nr(t));const r="signIn",s=await HT(t,r,e),i=await Ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gb(t,e){return WT(Ni(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function _b(t,e,n){return Mt(t.app)?Promise.reject(Nr(t)):gb(Te(t),Oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yb(t),r})}function vb(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function wb(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function Eb(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function Tb(t){return Te(t).signOut()}const Mu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=1e3,xb=10;class GT extends qT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GT.type="LOCAL";const kb=GT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT extends qT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KT.type="SESSION";const QT=KT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await Sb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Jp("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function Cb(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function Rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pb(){return YT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="firebaseLocalStorageDb",Nb=1,ju="firebaseLocalStorage",XT="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rc(t,e){return t.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function Ob(){const t=indexedDB.deleteDatabase(JT);return new Pa(t).toPromise()}function of(){const t=indexedDB.open(JT,Nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ju,{keyPath:XT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ju)?e(r):(r.close(),await Ob(),e(await of()))})})}async function L_(t,e,n){const r=Rc(t,!0).put({[XT]:e,value:n});return new Pa(r).toPromise()}async function Db(t,e){const n=Rc(t,!1).get(e),r=await new Pa(n).toPromise();return r===void 0?null:r.value}function V_(t,e){const n=Rc(t,!0).delete(e);return new Pa(n).toPromise()}const Lb=800,Vb=3;class ZT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(Pb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rb(),!this.activeServiceWorker)return;this.sender=new Ab(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await L_(e,Mu,"1"),await V_(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Db(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>V_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rc(s,!1).getAll();return new Pa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZT.type="LOCAL";const Mb=ZT;new Ra(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e){return e?Fn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends Qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fb(t){return WT(t.auth,new Xp(t),t.bypassAuthState)}function Ub(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),mb(n,new Xp(t),t.bypassAuthState)}async function Bb(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),pb(n,new Xp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fb;case"linkViaPopup":case"linkViaRedirect":return Bb;case"reauthViaPopup":case"reauthViaRedirect":return Ub;default:fn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=new Ra(2e3,1e4);class ei extends e1{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$b.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="pendingRedirect",Wl=new Map;class Hb extends e1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await Wb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wb(t,e){const n=Kb(e),r=Gb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qb(t,e){Wl.set(t._key(),e)}function Gb(t){return Fn(t._redirectPersistence)}function Kb(t){return Hl(zb,t.config.apiKey,t.name)}async function Qb(t,e,n=!1){if(Mt(t.app))return Promise.reject(Nr(t));const r=Ni(t),s=jb(r,e),o=await new Hb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=10*60*1e3;class Jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!t1(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yb&&this.cachedEventUids.clear(),this.cachedEventUids.has(M_(e))}saveEventToCache(e){this.cachedEventUids.add(M_(e)),this.lastProcessedEventTime=Date.now()}}function M_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function t1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tP=/^https?/;async function nP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zb(t);for(const n of e)try{if(rP(n))return}catch{}fn(t,"unauthorized-domain")}function rP(t){const e=rf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tP.test(n))return!1;if(eP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=new Ra(3e4,6e4);function j_(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iP(t){return new Promise((e,n)=>{var r,s,i;function o(){j_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{j_(),n(Cn(t,"network-request-failed"))},timeout:sP.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=J2("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},UT(`${Y2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ql=null,e})}let ql=null;function oP(t){return ql=ql||iP(t),ql}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=new Ra(5e3,15e3),lP="__/auth/iframe",uP="emulator/auth/iframe",cP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dP(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qp(e,uP):`https://${t.config.authDomain}/${lP}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},s=hP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_a(r).slice(1)}`}async function fP(t){const e=await oP(t),n=Rn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:dP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},aP.get());function u(){Rn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mP=500,gP=600,yP="_blank",_P="http://localhost";class F_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vP(t,e,n,r=mP,s=gP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},pP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=yt().toLowerCase();n&&(l=OT(c)?yP:n),PT(c)&&(e=e||_P,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[v,A])=>`${g}${v}=${A},`,"");if(B2(c)&&l!=="_self")return wP(e||"",l),new F_(null);const m=window.open(e||"",l,d);ne(m,t,"popup-blocked");try{m.focus()}catch{}return new F_(m)}function wP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP="__/auth/handler",TP="emulator/auth/handler",IP=encodeURIComponent("fac");async function U_(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:s};if(e instanceof zT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))o[d]=m}if(e instanceof ba){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${IP}=${encodeURIComponent(u)}`:"";return`${xP(t)}?${_a(l).slice(1)}${c}`}function xP({config:t}){return t.emulator?qp(t,TP):`https://${t.authDomain}/${EP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="webStorageSupport";class kP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QT,this._completeRedirectFn=Qb,this._overrideRedirectResult=qb}async _openPopup(e,n,r,s){var i;Jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await U_(e,n,r,rf(),s);return vP(e,o,Jp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await U_(e,n,r,rf(),s);return Cb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fP(e),r=new Jb(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lh,{type:Lh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Lh];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jT()||NT()||Kp()}}const SP=kP;var B_="@firebase/auth",$_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RP(t){Vr(new qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FT(t)},c=new G2(r,s,i,u);return rb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new qn("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new AP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(B_,$_,CP(t)),Xt(B_,$_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=5*60,PP=jw("authIdTokenMaxAge")||bP;let z_=null;const NP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PP)return;const s=n==null?void 0:n.token;z_!==s&&(z_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function OP(t=oc()){const e=va(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nb(t,{popupRedirectResolver:SP,persistence:[Mb,kb,QT]}),r=jw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=NP(i.toString());wb(n,o,()=>o(n.currentUser)),vb(n,l=>o(l))}}const s=Lw("auth");return s&&sb(n,`http://${s}`),n}function DP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}K2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",DP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RP("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="firebasestorage.googleapis.com",r1="storageBucket",LP=2*60*1e3,VP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends mn{constructor(e,n,r=0){super(Vh(e),`Firebase Storage: ${n} (${Vh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function Vh(t){return"storage/"+t}function Zp(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(je.UNKNOWN,t)}function MP(t){return new Fe(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jP(t){return new Fe(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(je.UNAUTHENTICATED,t)}function UP(){return new Fe(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BP(t){return new Fe(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $P(){return new Fe(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zP(){return new Fe(je.CANCELED,"User canceled the upload/download.")}function HP(t){return new Fe(je.INVALID_URL,"Invalid URL '"+t+"'.")}function WP(t){return new Fe(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qP(){return new Fe(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+r1+"' property when initializing the app?")}function GP(){return new Fe(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function KP(){return new Fe(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QP(t){return new Fe(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function af(t){return new Fe(je.INVALID_ARGUMENT,t)}function s1(){return new Fe(je.APP_DELETED,"The Firebase app was deleted.")}function YP(t){return new Fe(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vo(t,e){return new Fe(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function lo(t){throw new Fe(je.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw WP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${m}/${d}/b/${s}/o${g}`,"i"),A={bucket:1,path:3},b=n===n1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",k=new RegExp(`^https?://${b}/${s}/${O}`,"i"),S=[{regex:l,indices:u,postModify:i},{regex:v,indices:A,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<S.length;N++){const U=S[N],F=U.regex.exec(e);if(F){const T=F[U.indices.bucket];let _=F[U.indices.path];_||(_=""),r=new Ut(T,_),U.postModify(r);break}}if(r==null)throw HP(e);return r}}class JP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...O){c||(c=!0,e.apply(null,O))}function m(O){s=setTimeout(()=>{s=null,t(v,u())},O)}function g(){i&&clearTimeout(i)}function v(O,...k){if(c){g();return}if(O){g(),d.call(null,O,...k);return}if(u()||o){g(),d.call(null,O,...k);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,m(S)}let A=!1;function b(O){A||(A=!0,g(),!c&&(s!==null?(O||(l=2),clearTimeout(s),m(0)):O||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function ZP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){return t!==void 0}function tN(t){return typeof t=="object"&&!Array.isArray(t)}function em(t){return typeof t=="string"||t instanceof String}function H_(t){return tm()&&t instanceof Blob}function tm(){return typeof Blob<"u"}function W_(t,e,n,r){if(r<e)throw af(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw af(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function i1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var fs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fs||(fs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,s,i,o,l,u,c,d,m,g=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,b)=>{this.resolve_=A,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Tl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===fs.NO_ERROR,u=i.getStatus();if(!l||nN(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===fs.ABORT;r(!1,new Tl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Tl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());eN(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Zp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?s1():zP();o(u)}else{const u=$P();o(u)}};this.canceled_?n(!1,new Tl(!1,null,!0)):this.backoffId_=XP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lN(t,e,n,r,s,i,o=!0,l=!1){const u=i1(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return oN(d,e),sN(d,n),iN(d,i),aN(d,r),new rN(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cN(...t){const e=uN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(tm())return new Blob(t);throw new Fe(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){if(typeof atob>"u")throw QP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mh{constructor(e,n){this.data=e,this.contentType=n||null}}function fN(t,e){switch(t){case En.RAW:return new Mh(o1(e));case En.BASE64:case En.BASE64URL:return new Mh(a1(t,e));case En.DATA_URL:return new Mh(mN(e),gN(e))}throw Zp()}function o1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pN(t){let e;try{e=decodeURIComponent(t)}catch{throw Vo(En.DATA_URL,"Malformed data URL.")}return o1(e)}function a1(t,e){switch(t){case En.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Vo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Vo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dN(e)}catch(s){throw s.message.includes("polyfill")?s:Vo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class l1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Vo(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mN(t){const e=new l1(t);return e.base64?a1(En.BASE64,e.rest):pN(e.rest)}function gN(t){return new l1(t).contentType}function yN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){let r=0,s="";H_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(H_(this.data_)){const r=this.data_,s=hN(r,e,n);return s===null?null:new gr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new gr(r,!0)}}static getBlob(...e){if(tm()){const n=e.map(r=>r instanceof gr?r.data_:r);return new gr(cN.apply(null,n))}else{const n=e.map(o=>em(o)?fN(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new gr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){let e;try{e=JSON.parse(t)}catch{return null}return tN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function c1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t,e){return e}class wt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||wN}}let Il=null;function EN(t){return!em(t)||t.length<2?t:c1(t)}function h1(){if(Il)return Il;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return EN(o)}const n=new wt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new wt("size");return s.xform=r,t.push(s),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Il=t,Il}function TN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function IN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return TN(r,t),r}function d1(t,e,n){const r=u1(e);return r===null?null:IN(t,r,n)}function xN(t,e,n,r){const s=u1(e);if(s===null||!em(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,m=t.fullPath,g="/b/"+o(d)+"/o/"+o(m),v=bc(g,n,r),A=i1({alt:"media",token:c});return v+A})[0]}function kN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class nm{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){if(!t)throw Zp()}function SN(t,e){function n(r,s){const i=d1(t,s,e);return f1(i!==null),i}return n}function AN(t,e){function n(r,s){const i=d1(t,s,e);return f1(i!==null),xN(i,s,t.host,t._protocol)}return n}function p1(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=UP():s=FP():n.getStatus()===402?s=jP(t.bucket):n.getStatus()===403?s=BP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function m1(t){const e=p1(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=MP(t.path)),i.serverResponse=s.serverResponse,i}return n}function CN(t,e,n){const r=e.fullServerUrl(),s=bc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new nm(s,i,AN(t,n),o);return l.errorHandler=m1(e),l}function RN(t,e){const n=e.fullServerUrl(),r=bc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,c){}const l=new nm(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=m1(e),l}function bN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bN(null,e)),r}function NN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let N=0;N<2;N++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=PN(e,r,s),d=kN(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",v=gr.getBlob(m,r,g);if(v===null)throw GP();const A={name:c.fullPath},b=bc(i,t.host,t._protocol),O="POST",k=t.maxUploadRetryTime,w=new nm(b,O,SN(t,n),k);return w.urlParams=A,w.headers=o,w.body=v.uploadData(),w.errorHandler=p1(e),w}class ON{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw lo("cannot .send() more than once");if(Gr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw lo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw lo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw lo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw lo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DN extends ON{initXhr(){this.xhr_.responseType="text"}}function rm(){return new DN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Is(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return c1(this._location.path)}get storage(){return this._service}get parent(){const e=_N(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YP(e)}}function LN(t,e,n){t._throwIfRoot("uploadBytes");const r=NN(t.storage,t._location,h1(),new gr(e,!0),n);return t.storage.makeRequestWithTokens(r,rm).then(s=>({metadata:s,ref:t}))}function VN(t){t._throwIfRoot("getDownloadURL");const e=CN(t.storage,t._location,h1());return t.storage.makeRequestWithTokens(e,rm).then(n=>{if(n===null)throw KP();return n})}function MN(t){t._throwIfRoot("deleteObject");const e=RN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,rm)}function jN(t,e){const n=vN(t._location.path,e),r=new Ut(t._location.bucket,n);return new Is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){return/^[A-Za-z]+:\/\//.test(t)}function UN(t,e){return new Is(t,e)}function g1(t,e){if(t instanceof sm){const n=t;if(n._bucket==null)throw qP();const r=new Is(n,n._bucket);return e!=null?g1(r,e):r}else return e!==void 0?jN(t,e):t}function BN(t,e){if(e&&FN(e)){if(t instanceof sm)return UN(t,e);throw af("To use ref(service, url), the first argument must be a Storage instance.")}else return g1(t,e)}function q_(t,e){const n=e==null?void 0:e[r1];return n==null?null:Ut.makeFromBucketSpec(n,t)}function $N(t,e,n,r={}){t.host=`${e}:${n}`;const s=Gr(e);s&&(ip(`https://${t.host}/b`),op("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Fw(i,t.app.options.projectId))}class sm{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=n1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LP,this._maxUploadRetryTime=VP,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=q_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=q_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new JP(s1());{const o=lN(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const G_="@firebase/storage",K_="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="storage";function zN(t,e,n){return t=Te(t),LN(t,e,n)}function HN(t){return t=Te(t),VN(t)}function WN(t){return t=Te(t),MN(t)}function _1(t,e){return t=Te(t),BN(t,e)}function qN(t=oc(),e){t=Te(t);const r=va(t,y1).getImmediate({identifier:e}),s=Vw("storage");return s&&GN(r,...s),r}function GN(t,e,n,r={}){$N(t,e,n,r)}function KN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new sm(n,r,s,e,Ss)}function QN(){Vr(new qn(y1,KN,"PUBLIC").setMultipleInstances(!0)),Xt(G_,K_,""),Xt(G_,K_,"esm2017")}QN();var Q_="@firebase/ai",lf="1.4.1";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="AI",Y_="us-central1",YN="https://firebasevertexai.googleapis.com",JN="v1beta",J_=lf,XN="gl-js",ZN=180*1e3;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=["user","model","function","system"];var Z_;(function(t){t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(Z_||(Z_={}));var e0;(function(t){t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE",t.OFF="OFF"})(e0||(e0={}));var t0;(function(t){t.SEVERITY="SEVERITY",t.PROBABILITY="PROBABILITY"})(t0||(t0={}));var n0;(function(t){t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(n0||(n0={}));var Fu;(function(t){t.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",t.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",t.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",t.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH",t.HARM_SEVERITY_UNSUPPORTED="HARM_SEVERITY_UNSUPPORTED"})(Fu||(Fu={}));var r0;(function(t){t.SAFETY="SAFETY",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT"})(r0||(r0={}));var Uu;(function(t){t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL"})(Uu||(Uu={}));var s0;(function(t){t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(s0||(s0={}));var i0;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.VIDEO="VIDEO",t.AUDIO="AUDIO",t.DOCUMENT="DOCUMENT"})(i0||(i0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o0;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(o0||(o0={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var a0;(function(t){t.BLOCK_LOW_AND_ABOVE="block_low_and_above",t.BLOCK_MEDIUM_AND_ABOVE="block_medium_and_above",t.BLOCK_ONLY_HIGH="block_only_high",t.BLOCK_NONE="block_none"})(a0||(a0={}));var l0;(function(t){t.BLOCK_ALL="dont_allow",t.ALLOW_ADULT="allow_adult",t.ALLOW_ALL="allow_all"})(l0||(l0={}));var u0;(function(t){t.SQUARE="1:1",t.LANDSCAPE_3x4="3:4",t.PORTRAIT_4x3="4:3",t.LANDSCAPE_16x9="16:9",t.PORTRAIT_9x16="9:16"})(u0||(u0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.backendType=e}}class im extends v1{constructor(){super(Zn.GOOGLE_AI)}}class Na extends v1{constructor(e=Y_){super(Zn.VERTEX_AI),e?this.location=e:this.location=Y_}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,r,s){this.app=e,this.backend=n;const i=s==null?void 0:s.getImmediate({optional:!0}),o=r==null?void 0:r.getImmediate({optional:!0});this.auth=o||null,this.appCheck=i||null,n instanceof Na?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends mn{constructor(e,n,r){const s=xi,i=`${s}/${e}`,o=`${s}: ${n} (${i})`;super(e,o),this.code=e,this.customErrorData=r,Error.captureStackTrace&&Error.captureStackTrace(this,pe),Object.setPrototypeOf(this,pe.prototype),this.toString=()=>o}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){if(t instanceof im)return`${xi}/googleai`;if(t instanceof Na)return`${xi}/vertexai/${t.location}`;throw new pe("error",`Invalid backend: ${JSON.stringify(t.backendType)}`)}function nO(t){const e=t.split("/");if(e[0]!==xi)throw new pe("error",`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const r=e[2];if(!r)throw new pe("error",`Invalid instance identifier, unknown location '${t}'`);return new Na(r);case"googleai":return new im;default:throw new pe("error",`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){var r,s,i,o,l,u;if(!((s=(r=e.app)===null||r===void 0?void 0:r.options)===null||s===void 0)&&s.apiKey)if(!((o=(i=e.app)===null||i===void 0?void 0:i.options)===null||o===void 0)&&o.projectId)if(!((u=(l=e.app)===null||l===void 0?void 0:l.options)===null||u===void 0)&&u.appId){if(this._apiSettings={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend},Mt(e.app)&&e.app.settings.appCheckToken){const c=e.app.settings.appCheckToken;this._apiSettings.getAppCheckToken=()=>Promise.resolve({token:c})}else e.appCheck&&(this._apiSettings.getAppCheckToken=()=>e.appCheck.getToken());e.auth&&(this._apiSettings.getAuthToken=()=>e.auth.getToken()),this.model=Mo.normalizeModelName(n,this._apiSettings.backend.backendType)}else throw new pe("no-app-id",'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');else throw new pe("no-project-id",'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new pe("no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.')}static normalizeModelName(e,n){return n===Zn.GOOGLE_AI?Mo.normalizeGoogleAIModelName(e):Mo.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new ic("@firebase/vertexai");/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ha;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.PREDICT="predict"})(ha||(ha={}));class w1{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiSettings=r,this.stream=s,this.requestOptions=i}toString(){const e=new URL(this.baseUrl);return e.pathname=`/${this.apiVersion}/${this.modelPath}:${this.task}`,e.search=this.queryParams.toString(),e.toString()}get baseUrl(){var e;return((e=this.requestOptions)===null||e===void 0?void 0:e.baseUrl)||YN}get apiVersion(){return JN}get modelPath(){if(this.apiSettings.backend instanceof im)return`projects/${this.apiSettings.project}/${this.model}`;if(this.apiSettings.backend instanceof Na)return`projects/${this.apiSettings.project}/locations/${this.apiSettings.backend.location}/${this.model}`;throw new pe("error",`Invalid backend: ${JSON.stringify(this.apiSettings.backend)}`)}get queryParams(){const e=new URLSearchParams;return this.stream&&e.set("alt","sse"),e}}function rO(){const t=[];return t.push(`${XN}/${J_}`),t.push(`fire/${J_}`),t.join(" ")}async function sO(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",rO()),e.append("x-goog-api-key",t.apiSettings.apiKey),t.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.apiSettings.appId),t.apiSettings.getAppCheckToken){const n=await t.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&Or.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.apiSettings.getAuthToken){const n=await t.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function iO(t,e,n,r,s,i){const o=new w1(t,e,n,r,i);return{url:o.toString(),fetchOptions:{method:"POST",headers:await sO(o),body:s}}}async function om(t,e,n,r,s,i){const o=new w1(t,e,n,r,i);let l,u;try{const c=await iO(t,e,n,r,s,i),d=(i==null?void 0:i.timeout)!=null&&i.timeout>=0?i.timeout:ZN,m=new AbortController;if(u=setTimeout(()=>m.abort(),d),c.fetchOptions.signal=m.signal,l=await fetch(c.url,c.fetchOptions),!l.ok){let g="",v;try{const A=await l.json();g=A.error.message,A.error.details&&(g+=` ${JSON.stringify(A.error.details)}`,v=A.error.details)}catch{}throw l.status===403&&v.some(A=>A.reason==="SERVICE_DISABLED")&&v.some(A=>{var b,O;return(O=(b=A.links)===null||b===void 0?void 0:b[0])===null||O===void 0?void 0:O.description.includes("Google developers console API activation")})?new pe("api-not-enabled",`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${o.apiSettings.project}/genai/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:l.status,statusText:l.statusText,errorDetails:v}):new pe("fetch-error",`Error fetching from ${o}: [${l.status} ${l.statusText}] ${g}`,{status:l.status,statusText:l.statusText,errorDetails:v})}}catch(c){let d=c;throw c.code!=="fetch-error"&&c.code!=="api-not-enabled"&&c instanceof Error&&(d=new pe("error",`Error fetching from ${o.toString()}: ${c.message}`),d.stack=c.stack),d}finally{u&&clearTimeout(u)}return l}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){return t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),oO(t)}function oO(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&Or.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Gl(t.candidates[0]))throw new pe("response-error",`Response error: ${lr(t)}. Response body stored in error.response`,{response:t});return aO(t)}else if(t.promptFeedback)throw new pe("response-error",`Text not available. ${lr(t)}`,{response:t});return""},t.inlineDataParts=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&Or.warn(`This response had ${t.candidates.length} candidates. Returning data from the first candidate only. Access response.candidates directly to use the other candidates.`),Gl(t.candidates[0]))throw new pe("response-error",`Response error: ${lr(t)}. Response body stored in error.response`,{response:t});return uO(t)}else if(t.promptFeedback)throw new pe("response-error",`Data not available. ${lr(t)}`,{response:t})},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&Or.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Gl(t.candidates[0]))throw new pe("response-error",`Response error: ${lr(t)}. Response body stored in error.response`,{response:t});return lO(t)}else if(t.promptFeedback)throw new pe("response-error",`Function call not available. ${lr(t)}`,{response:t})},t}function aO(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text);return i.length>0?i.join(""):""}function lO(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}function uO(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.inlineData&&i.push(o);if(i.length>0)return i}const cO=[Uu.RECITATION,Uu.SAFETY];function Gl(t){return!!t.finishReason&&cO.includes(t.finishReason)}function lr(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];Gl(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){var e,n;if((e=t.safetySettings)===null||e===void 0||e.forEach(r=>{if(r.method)throw new pe("unsupported","SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),!((n=t.generationConfig)===null||n===void 0)&&n.topK){const r=Math.round(t.generationConfig.topK);r!==t.generationConfig.topK&&(Or.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=r)}return t}function am(t){return{candidates:t.candidates?dO(t.candidates):void 0,prompt:t.promptFeedback?fO(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function hO(t,e){return{generateContentRequest:Object.assign({model:e},t)}}function dO(t){const e=[];let n;return e&&t.forEach(r=>{var s;let i;if(r.citationMetadata&&(i={citations:r.citationMetadata.citationSources}),r.safetyRatings&&(n=r.safetyRatings.map(l=>{var u,c,d;return Object.assign(Object.assign({},l),{severity:(u=l.severity)!==null&&u!==void 0?u:Fu.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(c=l.probabilityScore)!==null&&c!==void 0?c:0,severityScore:(d=l.severityScore)!==null&&d!==void 0?d:0})})),!((s=r.content)===null||s===void 0)&&s.parts.some(l=>l==null?void 0:l.videoMetadata))throw new pe("unsupported","Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const o={index:r.index,content:r.content,finishReason:r.finishReason,finishMessage:r.finishMessage,safetyRatings:n,citationMetadata:i,groundingMetadata:r.groundingMetadata};e.push(o)}),e}function fO(t){const e=[];return t.safetyRatings.forEach(r=>{var s,i,o;e.push({category:r.category,probability:r.probability,severity:(s=r.severity)!==null&&s!==void 0?s:Fu.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(i=r.probabilityScore)!==null&&i!==void 0?i:0,severityScore:(o=r.severityScore)!==null&&o!==void 0?o:0,blocked:r.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function pO(t,e){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=yO(n),[s,i]=r.tee();return{stream:gO(s,e),response:mO(i,e)}}async function mO(t,e){const n=[],r=t.getReader();for(;;){const{done:s,value:i}=await r.read();if(s){let o=_O(n);return e.backend.backendType===Zn.GOOGLE_AI&&(o=am(o)),Bu(o)}n.push(i)}}function gO(t,e){return w2(this,arguments,function*(){const r=t.getReader();for(;;){const{value:s,done:i}=yield la(r.read());if(i)break;let o;e.backend.backendType===Zn.GOOGLE_AI?o=Bu(am(s)):o=Bu(s),yield yield la(o)}})}function yO(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:l})=>{if(l){if(s.trim()){r.error(new pe("parse-failed","Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(c0),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new pe("parse-failed",`Error parsing JSON response: "${u[1]}`));return}r.enqueue(c),s=s.substring(u[0].length),u=s.match(c0)}return i()})}}})}function _O(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t)if(r.candidates)for(const s of r.candidates){const i=s.index||0;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:s.index}),n.candidates[i].citationMetadata=s.citationMetadata,n.candidates[i].finishReason=s.finishReason,n.candidates[i].finishMessage=s.finishMessage,n.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[i].content||(n.candidates[i].content={role:s.content.role||"user",parts:[]});const o={};for(const l of s.content.parts){if(l.text!==void 0){if(l.text==="")continue;o.text=l.text}if(l.functionCall&&(o.functionCall=l.functionCall),Object.keys(o).length===0)throw new pe("invalid-content","Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");n.candidates[i].content.parts.push(o)}}}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(t,e,n,r){t.backend.backendType===Zn.GOOGLE_AI&&(n=E1(n));const s=await om(e,ha.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return pO(s,t)}async function I1(t,e,n,r){t.backend.backendType===Zn.GOOGLE_AI&&(n=E1(n));const s=await om(e,ha.GENERATE_CONTENT,t,!1,JSON.stringify(n),r),i=await vO(s,t);return{response:Bu(i)}}async function vO(t,e){const n=await t.json();return e.backend.backendType===Zn.GOOGLE_AI?am(n):n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function uf(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return wO(e)}function wO(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new pe("invalid-content","Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!r&&!s)throw new pe("invalid-content","No Content is provided for sending chat message.");return r?e:n}function jh(t){let e;return t.contents?e=t:e={contents:[uf(t)]},t.systemInstruction&&(e.systemInstruction=x1(t.systemInstruction)),e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=["text","inlineData","functionCall","functionResponse"],EO={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"],system:["text"]},d0={user:["model"],function:["model"],model:["user","function"],system:[]};function TO(t){let e=null;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new pe("invalid-content",`First Content should be with role 'user', got ${r}`);if(!X_.includes(r))throw new pe("invalid-content",`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(X_)}`);if(!Array.isArray(s))throw new pe("invalid-content","Content should have 'parts' but property with an array of Parts");if(s.length===0)throw new pe("invalid-content","Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0};for(const l of s)for(const u of h0)u in l&&(i[u]+=1);const o=EO[r];for(const l of h0)if(!o.includes(l)&&i[l]>0)throw new pe("invalid-content",`Content with role '${r}' can't contain '${l}' part`);if(e&&!d0[r].includes(e.role))throw new pe("invalid-content",`Content with role '${r}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(d0)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="SILENT_ERROR";class IO{constructor(e,n,r,s){this.model=n,this.params=r,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,r!=null&&r.history&&(TO(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var n,r,s,i,o;await this._sendPromise;const l=uf(e),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,contents:[...this._history,l]};let c={};return this._sendPromise=this._sendPromise.then(()=>I1(this._apiSettings,this.model,u,this.requestOptions)).then(d=>{var m,g;if(d.response.candidates&&d.response.candidates.length>0){this._history.push(l);const v={parts:((m=d.response.candidates)===null||m===void 0?void 0:m[0].content.parts)||[],role:((g=d.response.candidates)===null||g===void 0?void 0:g[0].content.role)||"model"};this._history.push(v)}else{const v=lr(d.response);v&&Or.warn(`sendMessage() was unsuccessful. ${v}. Inspect response object for details.`)}c=d}),await this._sendPromise,c}async sendMessageStream(e){var n,r,s,i,o;await this._sendPromise;const l=uf(e),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,contents:[...this._history,l]},c=T1(this._apiSettings,this.model,u,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>c).catch(d=>{throw new Error(f0)}).then(d=>d.response).then(d=>{if(d.candidates&&d.candidates.length>0){this._history.push(l);const m=Object.assign({},d.candidates[0].content);m.role||(m.role="model"),this._history.push(m)}else{const m=lr(d);m&&Or.warn(`sendMessageStream() was unsuccessful. ${m}. Inspect response object for details.`)}}).catch(d=>{d.message!==f0&&Or.error(d)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e,n,r){let s="";if(t.backend.backendType===Zn.GOOGLE_AI){const o=hO(n,e);s=JSON.stringify(o)}else s=JSON.stringify(n);return(await om(e,ha.COUNT_TOKENS,t,!1,s,r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO extends Mo{constructor(e,n,r){super(e,n.model),this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=x1(n.systemInstruction),this.requestOptions=r||{}}async generateContent(e){const n=jh(e);return I1(this._apiSettings,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}async generateContentStream(e){const n=jh(e);return T1(this._apiSettings,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}startChat(e){return new IO(this._apiSettings,this.model,Object.assign({tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings},e),this.requestOptions)}async countTokens(e){const n=jh(e);return xO(this._apiSettings,this.model,n)}}function SO(t=oc(),e){t=Te(t);const n=va(t,xi),r=new Na(void 0),s=tO(r);return n.getImmediate({identifier:s})}function AO(t,e,n){if(!e.model)throw new pe("no-model","Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");return new kO(t,e,n)}function CO(){Vr(new qn(xi,(t,{instanceIdentifier:e})=>{if(!e)throw new pe("error","AIService instance identifier is undefined.");const n=nO(e),r=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new eO(r,n,s,i)},"PUBLIC").setMultipleInstances(!0)),Xt(Q_,lf),Xt(Q_,lf,"esm2017")}CO();const ur="projects",RO={apiKey:"AIzaSyCBz55HZYrgOICFHCrZNMzsqUCsbBJXZ8E",authDomain:"project-tracker-prod-aae7c.firebaseapp.com",projectId:"project-tracker-prod-aae7c",storageBucket:"project-tracker-prod-aae7c.firebasestorage.app",messagingSenderId:"22966312336",appId:"1:22966312336:web:8ffc666511048cb4716715"},Pc=$w(RO),Fh=OP(Pc),qt=t2(Pc),k1=qN(Pc),bO=SO(Pc);AO(bO,{model:"gemini-2.0-flash"});const PO=({label:t,type:e="text",value:n,onChange:r,required:s,placeholder:i,options:o,action:l,disabled:u})=>f.jsxs("div",{className:"space-y-1",children:[f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("label",{className:"text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1",children:t}),l]}),o?f.jsx("select",{disabled:u,className:"w-full h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-slate-700 dark:text-slate-200 text-sm disabled:opacity-75",value:n,onChange:c=>r(c.target.value),children:o.map(c=>f.jsx("option",{value:c,children:c},c))}):f.jsx("input",{type:e,disabled:u,className:"w-full h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-slate-700 dark:text-slate-200 text-sm placeholder:text-slate-300 placeholder:font-normal disabled:opacity-75",value:n,onChange:c=>r(c.target.value),required:s,placeholder:i})]}),NO=pn.memo(PO),OO=({title:t,value:e,icon:n,subtitle:r})=>f.jsxs("div",{className:"bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group",children:[f.jsxs("div",{className:"flex items-start justify-between mb-4",children:[f.jsx("div",{className:"p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors",children:n}),r&&f.jsx("span",{className:"text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded-full",children:r})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1",children:t}),f.jsx("p",{className:"text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight",children:e})]})]}),TD=pn.memo(OO),DO=({className:t,style:e,...n})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:f.jsx("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"})}),ID=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}),f.jsx("path",{d:"M5 3v4"}),f.jsx("path",{d:"M19 17v4"}),f.jsx("path",{d:"M3 5h4"}),f.jsx("path",{d:"M17 19h4"})]}),LO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("circle",{cx:"12",cy:"12",r:"4"}),f.jsx("path",{d:"M12 2v2"}),f.jsx("path",{d:"M12 20v2"}),f.jsx("path",{d:"m4.93 4.93 1.41 1.41"}),f.jsx("path",{d:"m17.66 17.66 1.41 1.41"}),f.jsx("path",{d:"M2 12h2"}),f.jsx("path",{d:"M20 12h2"}),f.jsx("path",{d:"m6.34 17.66-1.41 1.41"}),f.jsx("path",{d:"m19.07 4.93-1.41 1.41"})]}),VO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M18 6 6 18"}),f.jsx("path",{d:"m6 6 18 12"})]}),lm=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M3 6h18"}),f.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),f.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),f.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),f.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]}),cf=({className:t,style:e,...n})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:f.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),um=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"m9 12 2 2 4-4"})]}),MO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",x2:"12",y1:"3",y2:"15"})]}),jO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M5 12h14"}),f.jsx("path",{d:"M12 5v14"})]}),FO=({className:t,style:e,...n})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:f.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"})}),p0=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),f.jsx("polyline",{points:"14 2 14 8 20 8"}),f.jsx("line",{x1:"16",x2:"8",y1:"13",y2:"13"}),f.jsx("line",{x1:"16",x2:"8",y1:"17",y2:"17"}),f.jsx("line",{x1:"10",x2:"8",y1:"9",y2:"9"})]}),UO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),f.jsx("line",{x1:"4",x2:"4",y1:"22",y2:"15"})]}),BO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),f.jsx("polyline",{points:"14 2 14 8 20 8"}),f.jsx("path",{d:"M12 18v-4"}),f.jsx("path",{d:"M8 18v-2"}),f.jsx("path",{d:"M16 18v-6"})]}),m0=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),f.jsx("path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}),f.jsx("path",{d:"M3 12A9 3 0 0 0 21 12"})]}),Uh=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"9",cy:"7",r:"4"}),f.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),f.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),g0=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}),f.jsx("circle",{cx:"12",cy:"12",r:"2"}),f.jsx("path",{d:"M6 12h.01M18 12h.01"})]}),$O=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2 1.5 3.5.8.8 1.3 1.5 1.5 2.5"}),f.jsx("path",{d:"M9 18h6"}),f.jsx("path",{d:"M10 22h4"})]}),zO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("polyline",{points:"12 6 12 12 16.5 12"})]}),HO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"}),f.jsx("path",{d:"m9 12 2 2 4-4"})]}),WO=({className:t,style:e,...n})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:f.jsx("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})}),qO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]}),GO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M3 12h.01"}),f.jsx("path",{d:"M3 18h.01"}),f.jsx("path",{d:"M3 6h.01"}),f.jsx("path",{d:"M8 12h13"}),f.jsx("path",{d:"M8 18h13"}),f.jsx("path",{d:"M8 6h13"})]}),KO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("rect",{width:"7",height:"9",x:"3",y:"3"}),f.jsx("rect",{width:"7",height:"5",x:"14",y:"3"}),f.jsx("rect",{width:"7",height:"9",x:"14",y:"12"}),f.jsx("rect",{width:"7",height:"5",x:"3",y:"16"})]}),xD=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),f.jsx("polyline",{points:"16 7 22 7 22 13"})]}),kD=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("line",{x1:"12",x2:"12",y1:"2",y2:"22"}),f.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),SD=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),f.jsx("path",{d:"M12 9v4"}),f.jsx("path",{d:"M12 17h.01"})]}),AD=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}),f.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}),f.jsx("path",{d:"M4 22h16"}),f.jsx("path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}),f.jsx("path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}),f.jsx("path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"})]}),CD=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M3 3v18h18"}),f.jsx("path",{d:"M18 17V9"}),f.jsx("path",{d:"M13 17V5"}),f.jsx("path",{d:"M8 17v-3"})]}),RD=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"9",cy:"7",r:"4"}),f.jsx("polyline",{points:"16 11 18 13 22 9"})]}),QO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}),f.jsx("line",{x1:"9",x2:"9",y1:"22",y2:"22"}),f.jsx("line",{x1:"15",x2:"15",y1:"22",y2:"22"}),f.jsx("line",{x1:"12",x2:"12",y1:"22",y2:"22"}),f.jsx("path",{d:"M8 10h8"}),f.jsx("path",{d:"M8 14h8"}),f.jsx("path",{d:"M8 18h8"})]}),YO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}),f.jsx("line",{x1:"16",x2:"16",y1:"2",y2:"6"}),f.jsx("line",{x1:"8",x2:"8",y1:"2",y2:"6"}),f.jsx("line",{x1:"3",x2:"21",y1:"10",y2:"10"})]}),JO=({className:t,style:e,...n})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,style:e,...n,children:[f.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"}),f.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4h-1"}),f.jsx("path",{d:"M14 14l-1-4h2"}),f.jsx("path",{d:"M15.5 9a2.5 2.5 0 0 1 0 5"})]}),XO=({label:t,fileUrl:e,onUpload:n,onDelete:r})=>{const[s,i]=Y.useState(!1),[o,l]=Y.useState(!1),u=v=>{v.preventDefault(),i(!0)},c=v=>{v.preventDefault(),i(!1)},d=async v=>{v.preventDefault(),i(!1);const A=v.dataTransfer.files[0];A&&await g(A)},m=async v=>{var A;(A=v.target.files)!=null&&A[0]&&await g(v.target.files[0])},g=async v=>{l(!0),await n(v),l(!1)};return f.jsxs("div",{onDragOver:u,onDragLeave:c,onDrop:d,className:`relative rounded-xl border-2 border-dashed transition-all p-3 flex flex-col justify-between h-24 group ${s?"border-indigo-500 bg-indigo-50":"border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-indigo-300"}`,children:[f.jsxs("div",{className:"flex justify-between items-start",children:[f.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase",children:t}),e&&r&&f.jsx("button",{type:"button",onClick:r,className:"text-red-400 hover:text-red-600 p-1 bg-white dark:bg-slate-800 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity",children:f.jsx(lm,{className:"h-2.5 w-2.5"})})]}),o?f.jsxs("div",{className:"flex items-center gap-2 text-indigo-600 text-[10px] font-bold",children:[f.jsx(cf,{className:"h-3 w-3 animate-spin"}),"Uploading..."]}):e?f.jsxs("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-2 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-800 text-[10px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors truncate",children:[f.jsx(um,{className:"h-3 w-3 text-emerald-500"}),f.jsx("span",{className:"truncate",children:"View File"})]}):n?f.jsxs("label",{className:"cursor-pointer flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-[10px] font-bold hover:bg-indigo-200 transition-colors self-start",children:[f.jsx("span",{children:"Choose File"}),f.jsx("input",{type:"file",className:"hidden",onChange:m})]}):f.jsx("div",{className:"text-[10px] font-bold text-slate-300 italic self-start py-1.5 px-3",children:"No Attachment"}),!e&&!o&&f.jsx("div",{className:"absolute inset-0 flex items-center justify-end pointer-events-none pr-3 opacity-30 text-[9px] font-bold text-slate-400",children:s?"Drop it!":"Drop File"})]})},bD=pn.memo(XO),ZO=({toast:t,onClear:e})=>t?f.jsxs("div",{className:`fixed bottom-6 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl border shadow-xl px-4 py-3 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 ${t.variant==="error"?"bg-red-50 border-red-200 text-red-900":t.variant==="success"?"bg-emerald-50 border-emerald-200 text-emerald-950":"bg-slate-900 border-slate-700 text-white"}`,role:"status",children:[f.jsx("p",{className:"text-sm font-bold leading-snug flex-1 pt-0.5",children:t.message}),f.jsx("button",{type:"button",onClick:e,className:`shrink-0 rounded-lg p-1.5 font-bold text-xs uppercase tracking-wide ${t.variant==="error"?"text-red-600 hover:bg-red-100":t.variant==="success"?"text-emerald-700 hover:bg-emerald-100/80":"text-slate-300 hover:bg-slate-800"}`,"aria-label":"Dismiss notification",children:f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M18 6 6 18"}),f.jsx("path",{d:"m6 6 12 12"})]})})]}):null,eD=pn.memo(ZO),tD=({modalState:t,onClose:e})=>t?f.jsx("div",{className:"fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-labelledby":"save-success-title",children:f.jsxs("div",{className:"bg-white dark:bg-slate-800 dark:bg-slate-800 rounded-3xl w-full max-w-md shadow-2xl p-8 text-center relative",children:[f.jsx("button",{type:"button",onClick:e,className:"absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:text-slate-300 p-1 rounded-lg","aria-label":"Close",children:f.jsx(VO,{className:"h-5 w-5"})}),f.jsx("div",{className:"w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5",children:f.jsx(um,{width:36,height:36,className:"text-emerald-600"})}),f.jsx("h3",{id:"save-success-title",className:"text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-2",children:t==="updated"?"Project updated":"Project created"}),f.jsx("p",{className:"text-sm font-medium text-slate-500 dark:text-slate-400 mb-8",children:t==="updated"?"Your changes have been saved to the database.":"The new project has been saved to the database."}),f.jsx("button",{type:"button",onClick:e,onKeyDown:n=>{n.key==="Enter"&&e()},className:"w-full h-12 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 active:scale-[0.98]",autoFocus:!0,children:"OK"})]})}):null;pn.memo(tD);function nD(t){switch(t){case"Done":return{border:"border-l-emerald-500 dark:border-l-emerald-400",badge:"bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50"};case"Maintenance":return{border:"border-l-pink-500 dark:border-l-pink-400",badge:"bg-pink-50 text-pink-600 border-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800/50"};case"Belum SDHO":return{border:"border-l-amber-500 dark:border-l-amber-400",badge:"bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50"};default:return{border:"border-l-indigo-500 dark:border-l-indigo-400",badge:"bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800/50"}}}function y0(t){return t>=1e9?`Rp ${(t/1e9).toFixed(1)}B`:t>=1e6?`Rp ${(t/1e6).toFixed(1)}M`:`Rp ${t==null?void 0:t.toLocaleString()}`}function yn(t){if(t==null||t==="")return 0;let e=0;if(typeof t=="number")e=t;else{const n=String(t).replace(/[^0-9.,-]/g,"");if(!n)return 0;const r=n.includes(","),s=n.includes(".");if(r&&s)n.lastIndexOf(",")>n.lastIndexOf(".")?e=parseFloat(n.replace(/\./g,"").replace(",",".")):e=parseFloat(n.replace(/,/g,""));else if(r){const i=n.split(",");i[i.length-1].length===3?e=parseFloat(n.replace(/,/g,"")):e=parseFloat(n.replace(",","."))}else if(s){const i=n.split(".");i[i.length-1].length===3&&i.length>1?e=parseFloat(n.replace(/\./g,"")):e=parseFloat(n)}else e=parseFloat(n)}return isNaN(e)?0:e}function Bh(t){if(!t)return"?";try{const e=new Date(t);if(isNaN(e.getTime()))return t;const n=e.getDate().toString().padStart(2,"0"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],i=e.getFullYear();return`${n} ${s} ${i}`}catch{return t}}function PD(t){return t?t.toString().replace(/[^0-9]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","):""}function ND(t){return t?t.toString().replace(/[^0-9]/g,""):""}const rD=({filters:t,searchTerm:e,filterOptions:n,pmOptions:r,onSearchChange:s,onFilterChange:i,onReset:o})=>f.jsxs("div",{className:"bg-white dark:bg-slate-800 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4",children:[f.jsx(NO,{label:"Search",value:e,onChange:s,placeholder:"Keywords..."}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"filter-label",children:"Status"}),f.jsxs("select",{className:"filter-input",value:t.status,onChange:l=>i("status",l.target.value),children:[f.jsx("option",{value:"All",children:"All Statuses"}),f.jsx("option",{value:"All Active",children:"All Active"}),f.jsx("option",{value:"Ongoing",children:"Ongoing"}),f.jsx("option",{value:"Maintenance",children:"Maintenance"}),f.jsx("option",{value:"Done",children:"Done"}),f.jsx("option",{value:"Belum SDHO",children:"Belum SDHO"})]})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"filter-label",children:"Customer"}),f.jsxs("select",{className:"filter-input",value:t.customer,onChange:l=>i("customer",l.target.value),children:[f.jsx("option",{value:"",children:"All Customers"}),n.customers.map(l=>f.jsx("option",{value:l,children:l},l))]})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"filter-label",children:"Solution"}),f.jsxs("select",{className:"filter-input",value:t.solution,onChange:l=>i("solution",l.target.value),children:[f.jsx("option",{value:"",children:"All Solutions"}),n.solutions.map(l=>f.jsx("option",{value:l,children:l},l))]})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"filter-label",children:"PM"}),f.jsxs("select",{className:"filter-input",value:t.pm,onChange:l=>i("pm",l.target.value),children:[f.jsx("option",{value:"",children:"All PMs"}),r.map(l=>f.jsx("option",{value:l,children:l},l))]})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"filter-label",children:"Year"}),f.jsxs("select",{className:"filter-input",value:t.year,onChange:l=>i("year",l.target.value),children:[f.jsx("option",{value:"",children:"Any Years"}),n.years.map(l=>f.jsx("option",{value:l,children:l},l))]})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"filter-label",children:"Methodology"}),f.jsxs("select",{className:"filter-input",value:t.methodology,onChange:l=>i("methodology",l.target.value),children:[f.jsx("option",{value:"All Types",children:"All Types"}),f.jsx("option",{value:"Tracked by EPM",children:"Tracked by EPM"}),f.jsx("option",{value:"BAST Only",children:"BAST Only"}),f.jsx("option",{value:"Simple",children:"Simple"}),f.jsx("option",{value:"Complex",children:"Complex"})]})]}),f.jsx("div",{className:"flex items-end",children:f.jsxs("button",{onClick:o,className:"text-xs font-bold text-indigo-600 mb-3 flex items-center gap-1",children:[f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-rotate-ccw",children:[f.jsx("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),f.jsx("path",{d:"M3 3v5h5"})]}),"Reset"]})})]}),sD=pn.memo(rD),iD=({activeTab:t,onTabChange:e,isAdmin:n,onImport:r,onCreate:s,onTruncate:i,onLogout:o,theme:l,onToggleTheme:u,isAuthenticated:c})=>c?f.jsx("header",{className:"bg-white dark:bg-slate-800 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30 shadow-sm",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4",children:[f.jsxs("div",{className:"flex items-center gap-6",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:"logo.png",alt:"Project Hub",className:"h-8 w-8 rounded-lg object-contain"}),f.jsx("h1",{className:"text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight",children:"Project Hub"})]}),f.jsxs("nav",{className:"flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl",children:[f.jsxs("button",{onClick:()=>e("list"),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${t==="list"?"bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm":"text-slate-500 dark:text-slate-400"}`,children:[f.jsx(GO,{className:"h-4 w-4"}),"List"]}),f.jsxs("button",{onClick:()=>e("dashboard"),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${t==="dashboard"?"bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm":"text-slate-500 dark:text-slate-400"}`,children:[f.jsx(KO,{className:"h-4 w-4"}),"Dashboard"]})]})]}),f.jsxs("div",{className:"flex items-center gap-4",children:[t==="list"&&f.jsx(f.Fragment,{children:n&&f.jsxs(f.Fragment,{children:[f.jsxs("button",{onClick:i,className:"h-10 px-4 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all flex items-center gap-2 border border-red-100",children:[f.jsx(lm,{className:"h-4 w-4"}),"Truncate DB"]}),f.jsxs("button",{onClick:r,className:"h-10 px-4 text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-xl transition-all flex items-center gap-2 border border-slate-200 dark:border-slate-600",children:[f.jsx(MO,{className:"h-4 w-4"}),"Import"]}),f.jsxs("button",{onClick:s,className:"h-10 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all flex items-center gap-2",children:[f.jsx(jO,{className:"h-4 w-4"}),"New"]})]})}),f.jsx("button",{onClick:u,className:"p-2 text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400",children:l==="dark"?f.jsx(LO,{className:"h-5 w-5"}):f.jsx(DO,{className:"h-5 w-5"})}),f.jsx("button",{onClick:o,className:"p-2 text-slate-400 hover:text-red-500",children:f.jsx(qO,{className:"h-5 w-5"})})]})]})}):null,oD=pn.memo(iD);function aD(t){if(!t)return[];const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},r=(d,m,g,v)=>{const A=e[parseInt(m)-1],b=String(parseInt(g)).padStart(2,"0");return v?`${d}-${A}-${b} ${v.trim()}`:`${d}-${A}-${b}`},s=d=>{let m=d.match(/(\d{4})-(\d{2})-(\d{2})/);if(m)return r(m[1],m[2],m[3]);if(m=d.match(/(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-(\d{1,2})/i),m){const g=m[2].charAt(0).toUpperCase()+m[2].slice(1).toLowerCase();return r(m[1],n[g],m[3])}if(m=d.match(/(\d{1,2})\s*(?:-|\s)\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(?:-|\s)\s*(\d{4})/i),m){const g=m[2].charAt(0).toUpperCase()+m[2].slice(1).toLowerCase();return r(m[3],n[g],m[1])}return d},i=/\[Updated[^\]]*\]|\[\d{4}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{1,2}\]|\[\d{1,2}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{4}\]|(?:Update\s+(?:per\s+)?)?\b\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\b|\(\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\)|\(\d{1,2}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{4}\)|\b\d{4}-(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-\d{1,2}\b/gi,o=[];let l=0,u;for(;(u=i.exec(t))!==null;){const d=t.slice(Math.max(0,u.index-3),u.index);if(/W\d$/.test(d))continue;u.index>l&&o.push({date:null,text:t.slice(l,u.index).trim()});const m=u.index+u[0].length,g=t.slice(m).search(i),v=g!==-1?m+g:t.length,A=u[0];let b,O,k;const w=A.match(/(\d{4})-(\d{2})-(\d{2})/),S=A.match(/(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*-(\d{1,2})/i),N=A.match(/(\d{1,2})\s*(?:-|\s)\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(?:-|\s)\s*(\d{4})/i);w?(b=w[1],O=w[2],k=w[3]):S?(b=S[1],O=S[2],k=S[3]):N&&(b=N[3],O=N[2],k=N[1]);const U=t.slice(m,v).trim();if(b){const F=e[parseInt(n[O.charAt(0).toUpperCase()+O.slice(1).toLowerCase()]||O)-1]||O;o.push({date:`${b}-${F}-${String(parseInt(k)).padStart(2,"0")}`,text:U})}else o.push({date:s(A),text:U});l=v}l<t.length&&o.push({date:null,text:t.slice(l).trim()});const c=[];for(let d=0;d<o.length;d++)o[d].date===null&&d+1<o.length&&o[d+1].date!==null?(c.push({date:o[d+1].date,text:o[d].text+" "+o[d+1].text}),d++):c.push(o[d]);return c.filter(d=>d.text)}function lD(t){const e=t.split(`
`);if(e.length<2)return[];const n=e[0],r=n.includes(";")?";":",",s=n.split(r).map(c=>c.trim().toLowerCase().replace(/[^a-z0-9]/g,"")),i=c=>{for(const d of c){const m=s.findIndex(g=>g.includes(d));if(m!==-1)return m}return-1},o={id:i(["uuid","uid"]),projNumber:i(["projectno","projno","projnumber","projectid","projid","nomor","number","code"]),projName:i(["projectname","projname","nama","title","name","description","activity","project"]),customer:i(["customer","client","partner","pt","cv"]),pm:i(["pm","manager","pic","lead"]),status:i(["status","state","stage"]),value:i(["value","nilai","amount","price","rp","budget","cost","total"]),sisaMandays:i(["manday","sisa","resource","man"]),start:i(["start","mulai","begin","date"]),end:i(["end","selesai","finish","close"]),solusi:i(["solution","solusi","tech"]),subcon:i(["subcon","subcontractor","vendor","contractor","partner","third"]),methodology:i(["methodology","type","category"]),note:i(["note","remark","desc","catatan"])},l=c=>c&&parseInt(c.replace(/[^0-9]/g,""))||0,u=[];for(let c=1;c<e.length;c++){const d=e[c].trim();if(!d)continue;const m=d.split(r).map(A=>A.trim().replace(/^"|"$/g,""));if(m.length<2)continue;const g=A=>{const b=o[A];return b!==-1&&b<m.length?m[b]:""},v=g("projNumber");!v||v==="NO-ID"||v.length<1||u.push({projNumber:v,projName:g("projName")||"Untitled Project",customer:g("customer")||"Unknown Client",pm:g("pm"),status:g("status")||"Ongoing",value:l(g("value")),sisaMandays:l(g("sisaMandays")),start:g("start"),end:g("end"),solusi:g("solusi"),subcon:g("subcon"),methodology:g("methodology")||"BAST Only",note:g("note")})}return u}const uD=({project:t,onEdit:e,onDelete:n,isAdmin:r})=>{const s=nD(t.status),[i,o]=Y.useState(!1),[l,u]=Y.useState([]),[c,d]=Y.useState(!1),[m,g]=Y.useState(!1),[v,A]=Y.useState([]),[b,O]=Y.useState(!1),[k,w]=Y.useState(null),[S,N]=Y.useState({}),U=async B=>{if(B.stopPropagation(),i){o(!1);return}d(!0);try{const ee=ls(qt,ur,t.id,"team"),Be=(await $l(ee)).docs.map(J=>({id:J.id,...J.data()}));try{const J=ls(qt,"assignmentLetters"),G=c2(J,h2("projectNumber","==",t.projNumber)),ue=await $l(G),oe={};ue.forEach(se=>{const _t=se.data(),kt=_t.npk||_t.assignee&&_t.assignee.npk;kt&&(oe[String(kt)]=!0)}),N(oe)}catch(J){console.error("Error fetching letters status:",J)}const z=Be.sort((J,G)=>{const ue=(J.role||"").toLowerCase(),oe=(G.role||"").toLowerCase();return ue==="project manager"&&oe!=="project manager"?-1:ue!=="project manager"&&oe==="project manager"?1:0});u(z),o(!0)}catch(ee){console.error("Error fetching team:",ee),alert("Failed to fetch team members.")}finally{d(!1)}},F=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_CPC",projectNumber:t.projNumber},"*")},T=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_SIMPLIFY",projectNumber:t.projNumber},"*")},_=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_ISERVE",projectNumber:t.projNumber},"*")},E=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_DASHBOARD",projectNumber:t.projNumber},"*")},I=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_TEAM_SCRAPE",projectNumber:t.projNumber},"*")},C=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}window.postMessage({type:"GO_TO_FINANCIALS_SCRAPE",projectNumber:t.projNumber},"*")},R=B=>{if(B.stopPropagation(),!t.projNumber){alert("Project number is missing for this card.");return}const ee=`https://tech-hub-22966312336.asia-southeast2.run.app/?projectNo=${encodeURIComponent(t.projNumber)}`;window.open(ee,"_blank","noopener,noreferrer")},x=async B=>{if(B&&B.stopPropagation(),m){g(!1);return}O(!0);try{const ee=ls(qt,ur,t.id,"financials"),Be=(await $l(ee)).docs.map(G=>({id:G.id,...G.data()}));let z=null;Be.forEach(G=>{if(G.updatedAt)try{const ue=G.updatedAt.toDate?G.updatedAt.toDate():new Date(G.updatedAt);(!z||ue>z)&&(z=ue)}catch{console.warn("Invalid date:",G.updatedAt)}}),w(z);const J=Be.reduce((G,ue)=>{const oe=ue.wbs||"No WBS";return G[oe]||(G[oe]={wbs:oe,costPlan:0,costCommit:0,costActual:0,availableBudget:0,items:[]}),G[oe].costPlan+=yn(ue.costPlan),G[oe].costCommit+=yn(ue.costCommit),G[oe].costActual+=yn(ue.costActual),G[oe].availableBudget+=yn(ue.availableBudget),G[oe].items.push(ue),G},{});A(Object.values(J)),g(!0)}catch(ee){console.error("Error fetching financials:",ee),alert("Failed to fetch financials data.")}finally{O(!1)}};return f.jsxs("div",{onClick:()=>e(t),className:`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 ${s.border} p-5 hover:shadow-md transition-all group relative overflow-hidden flex flex-col gap-4 cursor-pointer`,children:[f.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-start gap-6",children:[f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[f.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-tighter tabular-nums",children:t.projNumber||"NO-ID"}),f.jsx("span",{className:`text-[9px] font-bold px-2 py-0.5 rounded-full border ${s.badge}`,children:t.status}),f.jsx("span",{className:"text-[9px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400",children:t.methodology||"BAST Only"})]}),f.jsx("h3",{className:"font-bold text-slate-800 dark:text-slate-100 truncate text-lg group-hover:text-indigo-600 transition-colors mb-2",children:t.projName}),f.jsxs("div",{className:"flex flex-wrap gap-x-4 gap-y-2 items-center",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[f.jsx(QO,{className:"h-3.5 w-3.5 text-slate-400"}),t.customer]}),f.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[f.jsx(JO,{className:"h-3.5 w-3.5 text-slate-400"}),t.pm||f.jsx("span",{className:"text-slate-400 italic",children:"Unassigned PM"})]}),t.subcon&&f.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[f.jsx(Uh,{className:"h-3.5 w-3.5 text-slate-400"}),t.subcon]}),(t.start||t.end)&&f.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",children:[f.jsx(YO,{className:"h-3.5 w-3.5 text-slate-400"}),f.jsxs("span",{className:"tabular-nums",children:[Bh(t.start)," - ",Bh(t.end)]})]})]})]}),f.jsxs("div",{className:"flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-1",children:[f.jsxs("div",{className:"text-right",children:[f.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:"Value"}),f.jsx("p",{className:"text-sm font-bold text-indigo-600 tabular-nums",children:y0(t.value)})]}),f.jsxs("div",{className:"text-right border-l lg:border-l-0 lg:border-t border-slate-200 dark:border-slate-700 pl-3 lg:pl-0 lg:pt-1 ml-3 lg:ml-0",children:[f.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:"Mandays"}),f.jsx("p",{className:"text-sm font-bold text-emerald-600 tabular-nums",children:y0(t.sisaMandays)})]}),f.jsxs("div",{className:"flex items-center gap-2 mt-2 w-full lg:w-auto",children:[f.jsx("button",{onClick:U,className:`p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none ${i?"bg-indigo-100 text-indigo-600":"bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800"}`,title:"View Team",children:c?f.jsx(cf,{className:"h-4 w-4 animate-spin"}):f.jsx(Uh,{className:"h-4 w-4"})}),f.jsx("button",{onClick:x,className:`p-2 rounded-lg transition-all flex items-center justify-center gap-1 flex-1 lg:flex-none ${m?"bg-emerald-100 text-emerald-600":"bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 border border-slate-100 dark:border-slate-800"}`,title:"View Financials",children:b?f.jsx(cf,{className:"h-4 w-4 animate-spin"}):f.jsx(g0,{className:"h-4 w-4"})}),f.jsx("button",{onClick:F,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to CPC",children:f.jsx("div",{className:"bg-[#1e5bb8] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none",children:"CPC"})}),f.jsx("button",{onClick:T,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to Simplify",children:f.jsx("div",{className:"bg-[#f39c12] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none",children:"SIMPLIFY"})}),f.jsx("button",{onClick:_,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to iServe",children:f.jsx("div",{className:"bg-[#800000] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1",children:"ISERVE"})}),f.jsx("button",{onClick:E,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to Financials",children:f.jsx("div",{className:"bg-[#10b981] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1 uppercase",children:"Financials"})}),f.jsx("button",{onClick:R,className:"p-1 bg-slate-50 dark:bg-slate-900 hover:bg-cyan-50 border border-slate-100 dark:border-slate-800 rounded-lg transition-all flex items-center justify-center flex-1 lg:flex-none",title:"Go to Tech Hub",children:f.jsx("div",{className:"bg-[#0891b2] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm tracking-tight leading-none flex items-center gap-1 uppercase",children:"TECH"})})]})]})]}),t.solusi&&f.jsxs("div",{className:"bg-slate-50/80 dark:bg-slate-900/50 rounded-xl p-3 flex items-start gap-3 border border-slate-100 dark:border-slate-800/50 shadow-sm transition-all hover:shadow-md",children:[f.jsx("div",{className:"p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg shrink-0",children:f.jsx($O,{className:"h-3.5 w-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"})}),f.jsxs("div",{children:[f.jsx("h5",{className:"text-[9px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-1",children:"Solution"}),f.jsx("p",{className:"text-[11px] font-semibold text-slate-700 dark:text-slate-300 italic leading-relaxed line-clamp-3",children:t.solusi})]})]}),t.note&&(()=>{const B=aD(t.note);return f.jsxs("div",{className:"relative pl-6 py-1",children:[f.jsx("div",{className:"absolute left-[7px] top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/40 rounded-full"}),f.jsx("div",{className:"absolute left-0 top-3 w-4 h-4 bg-indigo-100 dark:bg-indigo-900 rounded-full border-4 border-white dark:border-slate-800 shadow-sm flex items-center justify-center",children:f.jsx("div",{className:"w-1.5 h-1.5 bg-indigo-500 rounded-full"})}),f.jsxs("div",{className:"bg-white dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-700/50 shadow-sm",children:[f.jsxs("h5",{className:"text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-1.5",children:[f.jsx(zO,{className:"h-2.5 w-2.5"}),"Updates (",B.length,")"]}),f.jsxs("div",{className:"space-y-2",children:[B.slice(-3).map((ee,Ue)=>f.jsxs("div",{className:"bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-100 dark:border-slate-700/50 p-2.5",children:[ee.date&&f.jsx("p",{className:"text-[8px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-1",children:ee.date}),f.jsx("p",{className:"text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap",children:ee.text})]},Ue)),B.length>3&&f.jsxs("details",{className:"group",onClick:ee=>ee.stopPropagation(),children:[f.jsxs("summary",{className:"text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors list-none flex items-center gap-1.5 select-none pl-1",children:[f.jsx("svg",{className:"w-3 h-3 transition-transform group-open:rotate-90",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),"Older (",B.length-3,")"]}),f.jsx("div",{className:"mt-2 space-y-2",children:B.slice(0,-3).map((ee,Ue)=>f.jsxs("div",{className:"bg-slate-50/50 dark:bg-slate-900/20 rounded-lg border border-slate-100 dark:border-slate-700/50 p-2.5",children:[ee.date&&f.jsx("p",{className:"text-[8px] font-black text-indigo-400 dark:text-indigo-500 uppercase tracking-wider mb-1",children:ee.date}),f.jsx("p",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-500 leading-relaxed whitespace-pre-wrap",children:ee.text})]},Ue))})]})]})]})]})})(),t.files&&(t.files.sdho||t.files.mom||t.files.kickoff||t.files.report)&&f.jsxs("div",{className:"flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/50 mt-auto",children:[t.files.sdho&&f.jsxs("a",{href:t.files.sdho,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all border border-indigo-100 dark:border-indigo-800/50 shadow-sm",children:[f.jsx(FO,{className:"h-2.5 w-2.5"})," SDHO"]}),t.files.mom&&f.jsxs("a",{href:t.files.mom,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1.5 rounded-lg hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all border border-emerald-100 dark:border-emerald-800/50 shadow-sm",children:[f.jsx(p0,{className:"h-2.5 w-2.5"})," MOM"]}),t.files.kickoff&&f.jsxs("a",{href:t.files.kickoff,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1.5 rounded-lg hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all border border-amber-100 dark:border-amber-800/50 shadow-sm",children:[f.jsx(UO,{className:"h-2.5 w-2.5"})," Kickoff"]}),t.files.report&&f.jsxs("a",{href:t.files.report,target:"_blank",rel:"noopener noreferrer",onClick:B=>B.stopPropagation(),className:"flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tight text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all border border-blue-100 dark:border-blue-800/50 shadow-sm",children:[f.jsx(BO,{className:"h-2.5 w-2.5"})," Report"]})]}),r&&f.jsxs("div",{className:"absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 bg-gradient-to-l from-white via-white dark:from-slate-800 dark:via-slate-800 to-transparent pl-8 rounded-tr-2xl",children:[f.jsx("button",{onClick:B=>{B.stopPropagation(),e(t)},className:"p-2 bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm group/btn",children:f.jsx(WO,{className:"h-3.5 w-3.5"})}),f.jsx("button",{onClick:B=>{B.stopPropagation(),n(t.id)},className:"p-2 bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-500 transition-all shadow-sm group/btn",children:f.jsx(lm,{className:"h-3.5 w-3.5"})})]}),m&&f.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto",onClick:B=>B.stopPropagation(),children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("h4",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",children:[f.jsx(g0,{className:"h-3 w-3 text-emerald-500"}),"Project Financials (Mio IDR)"]}),k&&f.jsxs("span",{className:`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${(new Date-k)/(1e3*60*60*24)>7?"bg-amber-50 text-amber-600 border border-amber-100":"bg-emerald-50 text-emerald-600 border border-emerald-100"}`,children:["Updated: ",Bh(k)]})]}),r&&f.jsxs("button",{onClick:C,className:"flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-tighter",title:"Scrape Financials from CPC",children:[f.jsx(m0,{className:"h-2.5 w-2.5"}),"Scrape Financials"]})]}),f.jsxs("table",{className:"w-full text-left border-collapse min-w-[700px]",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"bg-slate-50 dark:bg-slate-900",children:[f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"WBS"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"GL Account"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Description"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Cost Plan"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Commitment"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Actual"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-right",children:"Available"})]})}),f.jsx("tbody",{children:v.map(B=>f.jsxs(pn.Fragment,{children:[f.jsxs("tr",{className:"bg-emerald-50/30 border-b border-emerald-50",children:[f.jsx("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 tabular-nums",children:B.wbs}),f.jsx("td",{colSpan:"2",className:"px-3 py-2 text-[11px] font-black text-emerald-900 italic uppercase tracking-tighter",children:"WBS TOTAL"}),f.jsxs("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums",children:[B.costPlan.toLocaleString("id-ID"),"M"]}),f.jsxs("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums",children:[B.costCommit.toLocaleString("id-ID"),"M"]}),f.jsxs("td",{className:"px-3 py-2 text-[11px] font-black text-emerald-900 text-right tabular-nums",children:[B.costActual.toLocaleString("id-ID"),"M"]}),f.jsxs("td",{className:`px-3 py-2 text-[11px] font-black text-right tabular-nums ${B.availableBudget<0?"text-red-600":"text-emerald-900"}`,children:[B.availableBudget.toLocaleString("id-ID"),"M"]})]}),B.items.map((ee,Ue)=>f.jsxs("tr",{className:"border-b border-slate-50 last:border-0 hover:bg-slate-50 dark:bg-slate-900/50 transition-colors",children:[f.jsx("td",{className:"px-3 py-2 text-[11px] font-bold tabular-nums"}),f.jsx("td",{className:"px-3 py-2 text-[11px] font-bold text-slate-600 dark:text-slate-300 tabular-nums",children:ee.glAccount}),f.jsx("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-700 dark:text-slate-200",children:ee.glAccountName}),f.jsxs("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums",children:[yn(ee.costPlan).toLocaleString("id-ID"),"M"]}),f.jsxs("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums",children:[yn(ee.costCommit).toLocaleString("id-ID"),"M"]}),f.jsx("td",{className:"px-3 py-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 text-right tabular-nums",children:yn(ee.costActual)>0?`${yn(ee.costActual).toLocaleString("id-ID")}M`:"-"}),f.jsxs("td",{className:`px-3 py-2 text-[11px] font-bold text-right tabular-nums ${yn(ee.availableBudget)<0?"text-red-600":"text-slate-800 dark:text-slate-100"}`,children:[yn(ee.availableBudget).toLocaleString("id-ID"),"M"]})]},`${B.wbs}-${Ue}`))]},B.wbs))})]}),v.length===0&&!b&&f.jsx("div",{className:"py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-700",children:f.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest italic",children:"No financial data available"})})]}),i&&f.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto",onClick:B=>B.stopPropagation(),children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("h4",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",children:[f.jsx(Uh,{className:"h-3 w-3 text-indigo-500"}),"Assigned Team Members"]}),r&&f.jsxs("button",{onClick:I,className:"flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-tighter",title:"Scrape Team from CPC",children:[f.jsx(m0,{className:"h-2.5 w-2.5"}),"Scrape Team Assignment"]})]}),f.jsxs("table",{className:"w-full text-left border-collapse min-w-[600px]",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"bg-slate-50 dark:bg-slate-900",children:[f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"WBS"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"NPK"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Name"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Role"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"From"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"To"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight",children:"Type"}),f.jsx("th",{className:"px-3 py-2 text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight text-center",children:"Action"})]})}),f.jsx("tbody",{children:l.map(B=>{const ee=(B.role||"").toLowerCase()==="project manager";return f.jsxs("tr",{className:`border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors ${ee?"bg-indigo-50/50 dark:bg-indigo-900/20 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30":"hover:bg-slate-50 dark:hover:bg-slate-700/30"}`,children:[f.jsx("td",{className:`px-3 py-2 text-[11px] font-bold tabular-nums ${ee?"text-indigo-700 dark:text-indigo-300":"text-slate-700 dark:text-slate-200"}`,children:B.wbs||B.fullWbs||"-"}),f.jsx("td",{className:`px-3 py-2 text-[11px] font-bold tabular-nums ${ee?"text-indigo-700 dark:text-indigo-300":"text-slate-600 dark:text-slate-300"}`,children:B.npk||"-"}),f.jsx("td",{className:`px-3 py-2 text-[11px] font-black ${ee?"text-indigo-700 dark:text-indigo-200":"text-slate-800 dark:text-slate-100"}`,children:f.jsxs("div",{className:"flex items-center gap-1",children:[ee&&f.jsx(HO,{className:"h-2.5 w-2.5 text-indigo-600"}),B.name||"-"]})}),f.jsx("td",{className:`px-3 py-2 text-[11px] font-black ${ee?"text-indigo-600 dark:text-indigo-400":"text-slate-600 dark:text-slate-300"}`,children:B.role||"-"}),f.jsx("td",{className:"px-3 py-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 tabular-nums",children:B.start||"-"}),f.jsx("td",{className:"px-3 py-2 text-[11px] font-bold text-indigo-600 tabular-nums",children:B.end||"-"}),f.jsx("td",{className:"px-3 py-2 text-[11px]",children:f.jsx("span",{className:`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${B.type==="D"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}`,children:B.type==="S"?"Shared":B.type==="D"?"Dedicated":B.type||"-"})}),f.jsx("td",{className:"px-3 py-2 text-center",children:f.jsxs("a",{href:`https://agit-assignment-generator-344523195695.asia-southeast1.run.app/?projectNumber=${t.projNumber}&npk=${B.npk}`,target:"_blank",rel:"noopener noreferrer",onClick:Ue=>Ue.stopPropagation(),className:"inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all text-[9.5px] font-black uppercase tracking-tighter border border-indigo-100 dark:border-indigo-800/50 shadow-sm",title:"Open Assignment Generator",children:[f.jsx(p0,{className:"h-2.5 w-2.5"}),S[String(B.npk)]&&f.jsx(um,{className:"h-2.5 w-2.5 text-emerald-500 shrink-0 inline-block mr-0.5"}),"Letter"]})})]},B.id)})})]}),l.length===0&&!c&&f.jsx("div",{className:"py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-700",children:f.jsx("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest italic",children:"No team members assigned"})})]})]})},cD=pn.memo(uD),uo=({type:t="card",count:e=1})=>{const n=()=>{switch(t){case"stat":return"h-8 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse";case"chart":return"h-48 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse";case"card":default:return"space-y-3 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"}},r=()=>f.jsxs("div",{className:n(),children:[f.jsx("div",{className:"h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),f.jsx("div",{className:"h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),f.jsxs("div",{className:"flex gap-4 pt-2",children:[f.jsx("div",{className:"h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),f.jsx("div",{className:"h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"})]})]}),s=()=>f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:n()}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("div",{className:"h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),f.jsx("div",{className:"h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"})]})]}),i=()=>f.jsx("div",{className:n()}),o=()=>{switch(t){case"stat":return s();case"chart":return i();case"card":default:return r()}};return f.jsx(f.Fragment,{children:Array.from({length:e}).map((l,u)=>f.jsx("div",{children:o()},u))})};async function hD(t){var r;const e=(r=t.name.split(".").pop())==null?void 0:r.toLowerCase();let n="";try{if(e==="pdf")if(typeof window<"u"&&window.pdfjsLib){const s=await t.arrayBuffer(),i=await window.pdfjsLib.getDocument({data:s}).promise;for(let o=1;o<=i.numPages;o++){const u=await(await i.getPage(o)).getTextContent();n+=u.items.map(c=>c.str).join(" ")+" "}}else console.warn("PDF.js not loaded. Install pdfjs-dist or include via CDN."),n="[PDF text extraction unavailable - PDF.js not loaded]";else if(e==="docx"||e==="doc")if(typeof window<"u"&&window.mammoth){const s=await t.arrayBuffer();n=(await window.mammoth.extractRawText({arrayBuffer:s})).value}else console.warn("Mammoth not loaded. Install mammoth or include via CDN."),n="[DOCX text extraction unavailable - Mammoth not loaded]";else["txt","csv","md","json"].includes(e)?n=await t.text():n=`[Unsupported file type: .${e}]`;return console.log(`Extracted text from ${t.name}: ${n.length} chars`),n}catch(s){return console.error("Extraction error:",s),`Error during extraction: ${s.message}`}}async function dD(t){const e=`${Date.now()}_${t.name}`,n=_1(k1,`attachments/${e}`),r=await zN(n,t),s=await HN(r.ref);return console.log("File uploaded to Storage:",s),s}async function fD(t){try{const n=new URL(t).pathname.split("/o/");if(n.length<2)throw new Error("Invalid storage URL format");const r=n[1],s=decodeURIComponent(r),i=_1(k1,s);return await WN(i),console.log("Deleted from Storage:",s),!0}catch(e){return console.error("Delete from Storage failed:",e),!1}}const pD=Y.lazy(()=>Pw(()=>import("./Dashboard-DSKzQQTr.js"),[])),mD=Y.lazy(()=>Pw(()=>import("./ProjectModal-s4-cXGbO.js"),[])),gD=({onLogin:t,isLoggingIn:e})=>f.jsxs("form",{onSubmit:t,className:"bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 w-full max-w-md space-y-4",children:[f.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-slate-100",children:"Sign in"}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1",children:"Email"}),f.jsx("input",{name:"email",type:"email",required:!0,className:"w-full h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 dark:text-slate-200",placeholder:"you@company.com"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1",children:"Password"}),f.jsx("input",{name:"password",type:"password",required:!0,className:"w-full h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 dark:text-slate-200",placeholder:"••••••••"})]}),f.jsx("button",{type:"submit",disabled:e,className:"w-full h-11 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all active:scale-95 flex items-center justify-center gap-2",children:e?f.jsxs(f.Fragment,{children:[f.jsxs("svg",{className:"animate-spin h-4 w-4",viewBox:"0 0 24 24",children:[f.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),f.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),"Signing in..."]}):"Sign in"})]}),yD=()=>{const[t,e]=Y.useState(null),[n,r]=Y.useState(!1),[s,i]=Y.useState(!1),[o,l]=Y.useState(null),[u,c]=Y.useState(!1),[d,m]=Y.useState([]),[g,v]=Y.useState(!0),[A,b]=Y.useState(null),[O,k]=Y.useState("list"),[w,S]=Y.useState("light"),[N,U]=Y.useState(!1),[F,T]=Y.useState(null),[_,E]=Y.useState(null),[I,C]=Y.useState("All"),[R,x]=Y.useState({status:"All Active",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),[B,ee]=Y.useState(""),[Ue,Be]=Y.useState({projName:"",projNumber:"",customer:"",pm:"",status:"Ongoing",value:0,sisaMandays:0,start:"",end:"",subcon:"",methodology:"BAST Only",note:"",solusi:"",files:{sdho:"",mom:"",kickoff:"",report:"",sdho_text:"",mom_text:"",kickoff_text:"",report_text:""}}),z=Y.useRef(null),J=Y.useMemo(()=>{const M=[...new Set(d.map(ae=>ae.customer).filter(Boolean))].sort(),K=[...new Set(d.map(ae=>ae.solusi).filter(Boolean))].sort(),Q=[...new Set(d.map(ae=>ae.pm).filter(Boolean))].sort(),X=[...new Set(d.map(ae=>{var be;return(be=ae.start)==null?void 0:be.split("-")[0]}).filter(Boolean).filter(ae=>Number(ae)>=2019))].sort((ae,be)=>Number(be)-Number(ae)),te=[...new Set(d.map(ae=>ae.methodology).filter(Boolean))].sort();return{customers:M,solutions:K,pms:Q,years:X,methodologies:te}},[d]),G=J.pms,ue=Y.useMemo(()=>d.filter(M=>{var K,Q,X,te,ae;if(R.status!=="All"){if(R.status==="All Active"){if(!["Ongoing","Maintenance"].includes(M.status))return!1}else if(R.status&&M.status!==R.status)return!1}if(B){const be=B.toLowerCase();if(!((K=M.projName)!=null&&K.toLowerCase().includes(be)||(Q=M.customer)!=null&&Q.toLowerCase().includes(be)||(X=M.projNumber)!=null&&X.toLowerCase().includes(be)||(te=M.pm)!=null&&te.toLowerCase().includes(be)||(ae=M.solusi)!=null&&ae.toLowerCase().includes(be)))return!1}if(R.customer&&(M.customer||"").trim()!==(R.customer||"").trim()||R.solution&&(M.solusi||"").trim()!==(R.solution||"").trim()||R.pm&&(M.pm||"").trim()!==(R.pm||"").trim()||R.year&&!(M.start||"").trim().startsWith(R.year.trim()))return!1;if(R.methodology!=="All Types"){if(R.methodology==="Tracked by EPM"){if(!["Simple","Complex"].includes(M.methodology))return!1}else if(M.methodology!==R.methodology)return!1}return!(!R.showArchived&&M.status==="Archived")}),[d,R,B]),oe=Y.useMemo(()=>{const M=I==="All"?d:d.filter(me=>{var $e;return($e=me.start)==null?void 0:$e.startsWith(I)}),K=M.filter(me=>["Ongoing","Maintenance"].includes(me.status)),Q=K.length,X=K.reduce((me,$e)=>me+(Number($e.value)||0),0),te=K.reduce((me,$e)=>me+(Number($e.sisaMandays)||0),0),ae={};K.forEach(me=>{me.pm&&(ae[me.pm]=(ae[me.pm]||0)+1)});const be=Object.entries(ae).sort((me,$e)=>$e[1]-me[1]).slice(0,10),er=[...M].sort((me,$e)=>(Number($e.value)||0)-(Number(me.value)||0)).slice(0,10),Vc=[...M].sort((me,$e)=>(Number($e.sisaMandays)||0)-(Number(me.sisaMandays)||0)).slice(0,10),Pn={};M.forEach(me=>{me.customer&&(Pn[me.customer]=(Pn[me.customer]||0)+(Number(me.value)||0))});const Va=Object.entries(Pn).sort((me,$e)=>$e[1]-me[1]).slice(0,10),Ma=M.filter(me=>me.status==="Belum SDHO"),Ui=[...new Set(d.map(me=>{var $e;return($e=me.start)==null?void 0:$e.split("-")[0]}).filter(Boolean).filter(me=>Number(me)>=2019))].sort((me,$e)=>Number($e)-Number(me));return{activeCount:Q,totalValue:X,totalMandays:te,topProjectsByValue:er,topProjectsByMandays:Vc,topPMs:be,topCustomers:Va,belumSdhoProjects:Ma,availableYears:Ui}},[d,I]),se=Y.useCallback((M,K,Q=5e3)=>{E({variant:M,message:K}),Q>0&&setTimeout(()=>E(null),Q)},[]);Y.useEffect(()=>Eb(Fh,async K=>{if(K){e(K),r(!0);try{const Q=ao(qt,"users",K.uid),X=await p2(Q);if(X.exists()){const te=X.data();l(te);const ae=te.role;i(ae==="admin")}else l({}),i(!1)}catch(Q){console.error("Error fetching user profile:",Q),l({}),i(!1)}}else e(null),l(null),r(!1),i(!1)}),[]),Y.useEffect(()=>{if(!n||o===null)return;v(!0);const M=ls(qt,ur),K=_2(M,Q=>{let X=Q.docs.map(ae=>({id:ae.id,...ae.data()}));if(X.sort((ae,be)=>(be.projNumber||"").localeCompare(ae.projNumber||"")),!o.role){const ae=(o.name||t.displayName||"").trim().toLowerCase();X=X.filter(be=>(be.pm||"").trim().toLowerCase()===ae)}m(X),v(!1),b(null)},Q=>{console.error("Error loading projects:",Q),b("Failed to load projects"),v(!1)});return()=>K()},[n,o,t]),Y.useEffect(()=>{document.documentElement.classList.toggle("dark",w==="dark")},[w]);const _t=Y.useCallback(()=>{S(M=>M==="light"?"dark":"light")},[]),kt=Y.useCallback(async M=>{M.preventDefault(),c(!0);const K=M.target.email.value,Q=M.target.password.value;try{await _b(Fh,K,Q)}catch(X){se("error","Login failed: "+(X.message||String(X)),8e3)}finally{c(!1)}},[se]),tn=Y.useCallback(async()=>{try{await Tb(Fh)}catch{se("error","Logout failed",8e3)}},[se]),Wt=Y.useCallback((M=null)=>{if(T(M),M){const K=X=>{if(!X)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(X))return X;const te=new Date(X);if(isNaN(te.getTime()))return"";const ae=te.getFullYear(),be=(te.getMonth()+1).toString().padStart(2,"0"),er=te.getDate().toString().padStart(2,"0");return`${ae}-${be}-${er}`},Q=M.files||{};Be({projName:M.projName||"",projNumber:M.projNumber||"",customer:M.customer||"",pm:M.pm||"",status:M.status||"Ongoing",value:Number(M.value)||0,sisaMandays:Number(M.sisaMandays)||0,start:K(M.start),end:K(M.end),subcon:M.subcon||"",methodology:M.methodology||"BAST Only",note:M.note||"",solusi:M.solusi||"",files:{sdho:Q.sdho||"",mom:Q.mom||"",kickoff:Q.kickoff||"",report:Q.report||"",sdho_text:Q.sdho_text||"",mom_text:Q.mom_text||"",kickoff_text:Q.kickoff_text||"",report_text:Q.report_text||""}})}else Be({projName:"",projNumber:"",customer:"",pm:"",status:"Ongoing",value:0,sisaMandays:0,start:"",end:"",subcon:"",methodology:"BAST Only",note:"",solusi:"",files:{sdho:"",mom:"",kickoff:"",report:"",sdho_text:"",mom_text:"",kickoff_text:"",report_text:""}});U(!0)},[]),Di=Y.useCallback(()=>{U(!1),T(null)},[]),Nc=Y.useCallback(M=>{Be(K=>typeof M=="function"?M(K):{...K,...M})},[]),Ps=M=>{var Q,X,te,ae;const K=[];return(Q=M.projName)!=null&&Q.trim()||K.push("Project Name is required"),(X=M.projNumber)!=null&&X.trim()||K.push("Project Number is required"),(te=M.customer)!=null&&te.trim()||K.push("Customer is required"),(ae=M.pm)!=null&&ae.trim()||K.push("PM is required"),M.status||K.push("Status is required"),M.start||K.push("Start Date is required"),M.value<0&&K.push("Value must be ≥ 0"),M.sisaMandays<0&&K.push("Mandays must be ≥ 0"),M.end&&M.start&&M.end<M.start&&K.push("End Date cannot be before Start Date"),K},Ns=Y.useCallback(async M=>{M.preventDefault();const K=Ps(Ue);if(K.length>0){se("error",K.join("; "),8e3);return}try{if(F){const Q=ao(qt,ur,F.id);await g2(Q,Ue),se("success","Project updated successfully!",3e3)}else{const Q=ao(ls(qt,ur));await m2(Q,Ue),se("success","Project created successfully!",3e3)}Di()}catch(Q){console.error("Save error:",Q),se("error","Failed to save project: "+(Q.message||String(Q)),8e3)}},[F,Ue,se,Di]),Li=Y.useCallback(async M=>{if(window.confirm("Delete this project?"))try{await y2(ao(qt,ur,M)),se("success","Project deleted.",3e3)}catch(K){se("error","Delete failed: "+(K.message||String(K)),8e3)}},[se]),Vi=Y.useCallback(async()=>{if(window.confirm("Delete ALL projects? This cannot be undone."))try{const M=ls(qt,ur),K=await $l(M),Q=I_(qt);K.docs.forEach(X=>Q.delete(X.ref)),await Q.commit(),se("success","All projects deleted.",3e3)}catch(M){se("error","Truncate failed: "+(M.message||String(M)),8e3)}},[se]),Mi=Y.useCallback(()=>{var M;(M=z.current)==null||M.click()},[]),ji=Y.useCallback(async M=>{var Q;const K=(Q=M.target.files)==null?void 0:Q[0];if(K){try{const X=await K.text(),te=lD(X);if(te.length===0){se("error","No valid projects found in CSV",8e3);return}const ae=I_(qt);te.forEach(be=>{const er=ao(ls(qt,ur));ae.set(er,be)}),await ae.commit(),se("success",`Imported ${te.length} projects successfully!`,3e3)}catch(X){console.error("Import error:",X),se("error","Import failed: "+(X.message||String(X)),8e3)}M.target.value=""}},[se]),Oa=Y.useCallback(M=>{if(M==="Belum SDHO")k("list"),x({status:"Belum SDHO",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),ee("");else{const K=d.find(Q=>Q.id===M);K&&(k("list"),x({status:"All",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),ee(K.projName))}},[d]),Oc=Y.useCallback(M=>{k("list"),x({status:"All Active",customer:"",solution:"",pm:M,year:I==="All"?"":I,methodology:"All Types",showArchived:!1}),ee("")},[I]),Dc=Y.useCallback(M=>{k("list"),x({status:"All",customer:M,solution:"",pm:"",year:I==="All"?"":I,methodology:"All Types",showArchived:!1}),ee("")},[I]),Da=Y.useCallback((M,K)=>{x(Q=>({...Q,[M]:K}))},[]),Fi=Y.useCallback(()=>{x({status:"All Active",customer:"",solution:"",pm:"",year:"",methodology:"All Types",showArchived:!1}),ee("")},[]),La=Y.useCallback(async(M,K)=>{try{const Q=await dD(K),X=await hD(K);if(Be(te=>({...te,files:{...te.files,[M]:Q,[`${M}_text`]:X}})),se("success",`${M.toUpperCase()} uploaded successfully!`,3e3),M==="mom"&&X)try{const te=await inferMethodologyFromText(X);te&&(Be(ae=>({...ae,methodology:te})),se("info",`Methodology inferred: ${te}`,5e3))}catch(te){console.error("Methodology inference error:",te)}}catch(Q){console.error("Upload error:",Q),se("error","Upload failed: "+(Q.message||String(Q)),8e3)}},[se]),Lc=Y.useCallback(M=>{Be(K=>{var X;const Q=(X=K.files)==null?void 0:X[M];return Q&&Q.startsWith("https://firebasestorage.googleapis.com/")&&fD(Q).catch(te=>console.error("Storage delete error:",te)),{...K,files:{...K.files,[M]:"",[`${M}_text`]:""}}})},[]);return n?f.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-900",children:[f.jsx(oD,{activeTab:O,onTabChange:k,isAdmin:s,onImport:Mi,onCreate:()=>Wt(null),onTruncate:Vi,onLogout:tn,theme:w,onToggleTheme:_t,isAuthenticated:n}),f.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-6",children:[O==="list"&&f.jsxs(f.Fragment,{children:[f.jsx(sD,{filters:R,searchTerm:B,filterOptions:J,pmOptions:G,onSearchChange:ee,onFilterChange:Da,onReset:Fi}),g?f.jsx(uo,{type:"card",count:6}):A?f.jsx("div",{className:"text-center py-12 text-red-600",children:A}):ue.length===0?f.jsx("div",{className:"text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700",children:f.jsx("p",{className:"text-slate-500 dark:text-slate-400",children:"No projects match the current filters."})}):f.jsx("div",{className:"flex flex-col gap-6",children:ue.map(M=>f.jsx(cD,{project:M,onEdit:Wt,onDelete:Li,isAdmin:s},M.id))})]}),O==="dashboard"&&f.jsx(Y.Suspense,{fallback:f.jsxs("div",{className:"space-y-8",children:[f.jsx(uo,{type:"stat",count:4}),f.jsx(uo,{type:"chart",count:4})]}),children:g?f.jsxs("div",{className:"space-y-8",children:[f.jsx(uo,{type:"stat",count:4}),f.jsx(uo,{type:"chart",count:4})]}):f.jsx(pD,{dashboardData:oe,dashboardYear:I,onYearChange:C,onProjectClick:Oa,onPMClick:Oc,onCustomerClick:Dc})})]}),N&&f.jsx(Y.Suspense,{fallback:f.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center",children:f.jsx("div",{className:"text-white",children:"Loading modal..."})}),children:f.jsx(mD,{isOpen:N,editingProject:F,formData:Ue,isAdmin:s,formError:null,onClose:Di,onSubmit:Ns,onFormDataChange:Nc,onAttachmentUpload:La,onAttachmentDelete:Lc,showToast:se})}),_&&f.jsx(eD,{toast:_,onClear:()=>E(null)}),f.jsx("input",{type:"file",ref:z,accept:".csv,.txt",style:{display:"none"},onChange:ji})]}):f.jsx("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4",children:f.jsx(gD,{onLogin:kt,isLoggingIn:u})})};class _D extends pn.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){this.setState({errorInfo:n}),console.error("Error caught by boundary:",e,n)}render(){var e;return this.state.hasError?f.jsxs("div",{style:{padding:"40px",fontFamily:"Inter, sans-serif",textAlign:"center",background:"var(--card-bg)",borderRadius:"12px",border:"1px solid var(--border)",maxWidth:"500px",margin:"80px auto",color:"var(--text-main)"},children:[f.jsx("h2",{style:{color:"var(--error)",marginBottom:"12px",fontSize:"24px",fontWeight:"700"},children:"Oops! Something went wrong"}),f.jsx("p",{style:{marginBottom:"20px",fontSize:"14px",lineHeight:"1.6"},children:"The app encountered an unexpected error. Please refresh the page or contact support."}),f.jsxs("details",{style:{textAlign:"left",marginBottom:"20px",padding:"12px",background:"var(--input-bg)",borderRadius:"8px",border:"1px solid var(--border)"},children:[f.jsx("summary",{style:{cursor:"pointer",fontWeight:"600",userSelect:"none"},children:"Technical details"}),f.jsx("pre",{style:{whiteSpace:"pre-wrap",fontSize:"12px",marginTop:"8px",fontFamily:"monospace",color:"var(--text-secondary)"},children:(e=this.state.error)==null?void 0:e.toString()})]}),f.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 24px",background:"var(--primary)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px"},children:"Reload Application"})]}):this.props.children}}const vD=document.getElementById("root"),wD=bw(vD);wD.render(f.jsx(pn.StrictMode,{children:f.jsx(_D,{children:f.jsx(yD,{})})}));export{SD as A,CD as B,um as C,kD as D,NO as F,pn as R,TD as S,xD as T,Uh as U,VO as X,g0 as a,AD as b,RD as c,ID as d,PD as e,y0 as f,AO as g,bD as h,f as j,ND as p,Y as r,bO as v};
